import { Classification, Chapter, Topic } from '../types/neet';

export const CHEMISTRY_CLASSIFICATIONS: Record<string, Classification> = {
  "chem-11-physical": {
    "id": "chem-11-physical",
    "title": "Physical Chemistry",
    "classLevel": "class-11",
    "subjectId": "chemistry",
    "description": "Mole concept, atomic structure, thermodynamics, and redox reactions.",
    "chapterIds": [
      "mole-concept",
      "atomic-structure",
      "thermodynamics-chem",
      "redox-reactions"
    ]
  },
  "chem-11-inorganic": {
    "id": "chem-11-inorganic",
    "title": "Inorganic Chemistry (Class 11)",
    "classLevel": "class-11",
    "subjectId": "chemistry",
    "description": "Periodic classification, periodic trends, chemical bonding, VSEPR, MOT, and p-block elements.",
    "chapterIds": [
      "periodic-classification",
      "chemical-bonding",
      "p-block-11"
    ]
  },
  "chem-11-organic": {
    "id": "chem-11-organic",
    "title": "Organic Chemistry (Class 11)",
    "classLevel": "class-11",
    "subjectId": "chemistry",
    "description": "Purification and characterisation of organic compounds, classification, IUPAC nomenclature, isomerism, electronic effects, reaction intermediates, basic organic reaction mechanisms, and hydrocarbons.",
    "chapterIds": [
      "organic-chemistry-basic-principles",
      "hydrocarbons"
    ]
  },
  "chem-12-physical": {
    "id": "chem-12-physical",
    "title": "Physical Chemistry (Class 12)",
    "classLevel": "class-12",
    "subjectId": "chemistry",
    "description": "Solutions, Equilibrium (Chemical & Ionic), Redox Reactions & Electrochemistry, and Chemical Kinetics.",
    "chapterIds": [
      "solutions",
      "equilibrium",
      "electrochemistry",
      "chemical-kinetics"
    ]
  },
  "chem-12-inorganic": {
    "id": "chem-12-inorganic",
    "title": "Inorganic Chemistry (Class 12)",
    "classLevel": "class-12",
    "subjectId": "chemistry",
    "description": "p-Block elements (Group 15 to 18), d- and f-block transition metals, coordination compounds, IUPAC naming, VBT, and CFT.",
    "chapterIds": [
      "p-block-12",
      "d-f-block-elements",
      "coordination-compounds"
    ]
  },
  "chem-12-organic": {
    "id": "chem-12-organic",
    "title": "Organic Chemistry & Practical (Class 12)",
    "classLevel": "class-12",
    "subjectId": "chemistry",
    "description": "Haloalkanes, SN1/SN2, alcohols, aldehydes, ketones, amines, biomolecules, and practical salt analysis.",
    "chapterIds": [
      "haloalkanes-haloarenes",
      "alcohols-phenols-ethers",
      "aldehydes-ketones",
      "amines",
      "biomolecules",
      "practical-chemistry"
    ]
  }
};

export const CHEMISTRY_CHAPTERS: Record<string, Chapter> = {
  "mole-concept": {
    "id": "mole-concept",
    "title": "Some Basic Concepts of Chemistry",
    "classificationId": "chem-11-physical",
    "chapterNumber": 1,
    "description": "Mole concept, stoichiometry, limiting reagent, molarity, molality, and mole fraction.",
    "estimatedHours": 5,
    "topicIds": [
      "mole-concept-topic",
      "chem-percentage-composition",
      "chem-laws-combination",
      "chem-empirical-formula",
      "chem-stoichiometry",
      "chem-concentration-terms"
    ]
  },
  "atomic-structure": {
    "id": "atomic-structure",
    "title": "Structure of Atom",
    "classificationId": "chem-11-physical",
    "chapterNumber": 2,
    "description": "Bohr model, photo-electric effect, de Broglie relation, Heisenberg principle, quantum numbers, orbitals.",
    "estimatedHours": 6,
    "topicIds": [
      "chem-subatomic-particles",
      "chem-bohrs-model",
      "chem-quantum-numbers",
      "chem-orbital-filling"
    ]
  },
  "periodic-classification": {
    "id": "periodic-classification",
    "title": "Classification of Elements and Periodicity",
    "classificationId": "chem-11-inorganic",
    "chapterNumber": 3,
    "description": "Modern periodic table, trends in atomic radii, ionization enthalpy, electron gain enthalpy, electronegativity.",
    "estimatedHours": 4,
    "topicIds": [
      "chem-periodic-table-history",
      "chem-periodic-trends",
      "chem-electronegativity-valency"
    ]
  },
  "chemical-bonding": {
    "id": "chemical-bonding",
    "title": "Chemical Bonding and Molecular Structure",
    "classificationId": "chem-11-inorganic",
    "chapterNumber": 4,
    "description": "Lewis structures, VSEPR theory, hybridization (sp, sp2, sp3, sp3d, sp3d2), MOT, and hydrogen bonding.",
    "estimatedHours": 7,
    "topicIds": [
      "chem-ionic-covalent-bonds",
      "chem-vsepr-theory",
      "chem-hybridization",
      "chem-mot-theory",
      "chem-hydrogen-bonding"
    ]
  },
  "thermodynamics-chem": {
    "id": "thermodynamics-chem",
    "title": "Chemical Thermodynamics",
    "classificationId": "chem-11-physical",
    "chapterNumber": 5,
    "description": "First & second laws, Hess's law, enthalpy of reaction, entropy, and Gibbs free energy change.",
    "estimatedHours": 6,
    "topicIds": [
      "chem-first-law-thermo",
      "chem-enthalpies-reaction",
      "chem-second-law-entropy"
    ]
  },
  "equilibrium": {
    "id": "equilibrium",
    "title": "Equilibrium",
    "classificationId": "chem-12-physical",
    "chapterNumber": 13,
    "description": "Chemical and ionic equilibrium, Law of Mass Action, Le Chatelier's principle, pH calculations, buffer solutions, and solubility product.",
    "estimatedHours": 8,
    "topicIds": [
      "chem-law-mass-action",
      "chem-le-chatelier",
      "chem-acids-bases-ph",
      "chem-buffer-solubility-product"
    ]
  },
  "redox-reactions": {
    "id": "redox-reactions",
    "title": "Redox Reactions",
    "classificationId": "chem-11-physical",
    "chapterNumber": 7,
    "description": "Oxidation numbers, redox rules, ion-electron method, and balancing chemical reactions.",
    "estimatedHours": 4,
    "topicIds": [
      "chem-oxidation-number",
      "chem-balancing-redox"
    ]
  },
  "hydrocarbons": {
    "id": "hydrocarbons",
    "title": "Hydrocarbons",
    "classificationId": "chem-11-organic",
    "chapterNumber": 9,
    "description": "Alkanes, alkenes, alkynes, aromatic hydrocarbons, important reactions, mechanisms, and NEET applications.",
    "estimatedHours": 8,
    "topicIds": [
      "chem-alkanes",
      "chem-alkenes",
      "chem-alkynes",
      "chem-aromatic-hydrocarbons"
    ]
  },
  "p-block-11": {
    "id": "p-block-11",
    "title": "p-Block Elements (Group 13 & 14)",
    "classificationId": "chem-11-inorganic",
    "chapterNumber": 10,
    "description": "Boron family (borax, diborane) and Carbon family (allotropes, silicates, silicones).",
    "estimatedHours": 5,
    "topicIds": [
      "chem-group-13-elements",
      "chem-group-14-elements"
    ]
  },
  "solutions": {
    "id": "solutions",
    "title": "Solutions",
    "classificationId": "chem-12-physical",
    "chapterNumber": 12,
    "description": "Henry's law, Raoult's law, ideal/non-ideal solutions, colligative properties, and van't Hoff factor.",
    "estimatedHours": 6,
    "topicIds": [
      "chem-henrys-raoults-law",
      "chem-ideal-nonideal-solutions",
      "chem-colligative-properties",
      "chem-van-thoff-factor"
    ]
  },
  "electrochemistry": {
    "id": "electrochemistry",
    "title": "Redox Reactions & Electrochemistry",
    "classificationId": "chem-12-physical",
    "chapterNumber": 14,
    "description": "Galvanic cells, Nernst equation, conductance, Kohlrausch law, Faraday's laws, batteries, and redox principles.",
    "estimatedHours": 7,
    "topicIds": [
      "chem-galvanic-cells-nernst",
      "chem-molar-conductance",
      "chem-electrolysis-batteries"
    ]
  },
  "chemical-kinetics": {
    "id": "chemical-kinetics",
    "title": "Chemical Kinetics",
    "classificationId": "chem-12-physical",
    "chapterNumber": 15,
    "description": "Rate of reaction, factors affecting reaction rate, rate law, order and molecularity, integrated rate equations, half-life, and Arrhenius equation.",
    "estimatedHours": 6,
    "topicIds": [
      "chem-rate-order-molecularity",
      "chem-zero-first-order",
      "chem-arrhenius-collision-theory"
    ]
  },
  "p-block-12": {
    "id": "p-block-12",
    "title": "p-Block Elements (Group 15 to 18)",
    "classificationId": "chem-12-inorganic",
    "chapterNumber": 16,
    "description": "Group 15 (Nitrogen family), Group 16 (Oxygen family), Group 17 (Halogens), Group 18 (Noble gases), oxoacids and interhalogens.",
    "estimatedHours": 6,
    "topicIds": [
      "chem-group-15-elements",
      "chem-group-16-elements",
      "chem-group-17-elements",
      "chem-group-18-elements"
    ]
  },
  "d-f-block-elements": {
    "id": "d-f-block-elements",
    "title": "d- and f-Block Elements",
    "classificationId": "chem-12-inorganic",
    "chapterNumber": 17,
    "description": "3d-series electronic configurations, oxidation states, E° values, magnetic moments, KMnO₄ and K₂Cr₂O₇ redox chemistry, and Lanthanoids vs Actinoids.",
    "estimatedHours": 6,
    "topicIds": [
      "chem-3d-transition-trends",
      "chem-kmno4-k2cr2o7",
      "chem-lanthanoids-actinoids",
      "chem-df-block-master-revision"
    ]
  },
  "coordination-compounds": {
    "id": "coordination-compounds",
    "title": "Coordination Compounds",
    "classificationId": "chem-12-inorganic",
    "chapterNumber": 18,
    "description": "Werner's theory, IUPAC nomenclature, isomerism (structural & stereo), Valence Bond Theory (VBT), Crystal Field Theory (CFT), colour origin, stability & applications.",
    "estimatedHours": 8,
    "topicIds": [
      "chem-coordination-fundamentals",
      "chem-coordination-isomerism",
      "chem-vbt-cft-theories",
      "chem-coordination-properties-applications"
    ]
  },
  "haloalkanes-haloarenes": {
    "id": "haloalkanes-haloarenes",
    "title": "Haloalkanes and Haloarenes",
    "classificationId": "chem-12-organic",
    "chapterNumber": 19,
    "description": "SN1 and SN2 reaction mechanisms, stereochemistry, electrophilic substitution of haloarenes.",
    "estimatedHours": 5,
    "topicIds": [
      "chem-sn1-sn2-mechanisms",
      "chem-haloarenes-reactions"
    ]
  },
  "alcohols-phenols-ethers": {
    "id": "alcohols-phenols-ethers",
    "title": "Alcohols, Phenols and Ethers",
    "classificationId": "chem-12-organic",
    "chapterNumber": 20,
    "description": "Distinction tests for alcohols, acidic nature of phenol, Reimer-Tiemann, Kolbe's, and Williamson synthesis.",
    "estimatedHours": 6,
    "topicIds": [
      "chem-alcohols-properties",
      "chem-phenols-reactions",
      "chem-ethers-williamson"
    ]
  },
  "aldehydes-ketones": {
    "id": "aldehydes-ketones",
    "title": "Aldehydes, Ketones and Carboxylic Acids",
    "classificationId": "chem-12-organic",
    "chapterNumber": 21,
    "description": "Nucleophilic addition, Aldol condensation, Cannizzaro reaction, Tollens/Fehling tests, and carboxylic acidity.",
    "estimatedHours": 8,
    "topicIds": [
      "chem-carbonyl-addition",
      "chem-aldol-cannizzaro",
      "chem-carboxylic-acids-acidity"
    ]
  },
  "amines": {
    "id": "amines",
    "title": "Amines & Diazonium Salts",
    "classificationId": "chem-12-organic",
    "chapterNumber": 22,
    "description": "Basicity of aliphatic/aromatic amines, Carbylamine reaction, Hinsberg test, and diazonium reactions.",
    "estimatedHours": 5,
    "topicIds": [
      "chem-amines-basicity",
      "chem-amines-distinction-tests"
    ]
  },
  "biomolecules": {
    "id": "biomolecules",
    "title": "Biomolecules",
    "classificationId": "chem-12-organic",
    "chapterNumber": 23,
    "description": "Carbohydrates (glucose/fructose), proteins (peptide bond, denaturation), nucleic acids (DNA/RNA), and vitamins.",
    "estimatedHours": 5,
    "topicIds": [
      "chem-carbohydrates-structure",
      "chem-proteins-amino-acids",
      "chem-nucleic-acids-enzymes"
    ]
  },
  "practical-chemistry": {
    "id": "practical-chemistry",
    "title": "Principles Related to Practical Chemistry",
    "classificationId": "chem-12-organic",
    "chapterNumber": 24,
    "description": "Qualitative analysis of inorganic salts (cations/anions), volumetric titrations, and organic functional groups.",
    "estimatedHours": 4,
    "topicIds": [
      "chem-practical-functional-groups",
      "chem-practical-titrations"
    ]
  },
  "organic-chemistry-basic-principles": {
    "id": "organic-chemistry-basic-principles",
    "title": "Organic Chemistry: Some Basic Principles & Techniques",
    "classificationId": "chem-11-organic",
    "chapterNumber": 8,
    "description": "Purification and characterisation of organic compounds, classification, IUPAC nomenclature, isomerism, electronic effects, reaction intermediates, and basic organic reaction mechanisms.",
    "estimatedHours": 12,
    "topicIds": [
      "chem-purification-characterisation",
      "chem-classification-iupac",
      "chem-isomerism",
      "chem-electronic-effects-intermediates",
      "chem-basic-reaction-mechanisms"
    ]
  },
  "purification-organic": {
    "id": "organic-chemistry-basic-principles",
    "title": "Organic Chemistry: Some Basic Principles & Techniques",
    "classificationId": "chem-11-organic",
    "chapterNumber": 8,
    "description": "Purification and characterisation of organic compounds, classification, IUPAC nomenclature, isomerism, electronic effects, reaction intermediates, and basic organic reaction mechanisms.",
    "estimatedHours": 12,
    "topicIds": [
      "chem-purification-characterisation",
      "chem-classification-iupac",
      "chem-isomerism",
      "chem-electronic-effects-intermediates",
      "chem-basic-reaction-mechanisms"
    ]
  },
  "goc-principles": {
    "id": "organic-chemistry-basic-principles",
    "title": "Organic Chemistry: Some Basic Principles & Techniques",
    "classificationId": "chem-11-organic",
    "chapterNumber": 8,
    "description": "Purification and characterisation of organic compounds, classification, IUPAC nomenclature, isomerism, electronic effects, reaction intermediates, and basic organic reaction mechanisms.",
    "estimatedHours": 12,
    "topicIds": [
      "chem-purification-characterisation",
      "chem-classification-iupac",
      "chem-isomerism",
      "chem-electronic-effects-intermediates",
      "chem-basic-reaction-mechanisms"
    ]
  }
};

export const CHEMISTRY_TOPICS: Record<string, Topic> = {
  "mole-concept-topic": {
    "id": "mole-concept-topic",
    "title": "Mole Concept, Avogadro Number & Atomic Mass",
    "chapterId": "mole-concept",
    "estimatedReadTimeMinutes": 12,
    "importanceWeight": "High Yield",
    "summary": "The fundamental SI unit for amount of substance, Avogadro constant (6.02214076 times 10^{23} mol^{-1}), and molar mass.",
    "notes": {
      "learn": [
        "One mole contains exactly 6.02214076 times 10^{23} specified elementary entities. For NEET calculations, N_A is commonly rounded to 6.022 times 10^{23} mol^{-1}.",
        "Historical note: Under the former SI definition, one mole was related to the number of atoms in exactly 12 g of carbon-12. Since 2019, the mole is defined by fixing the Avogadro constant at exactly 6.02214076 times 10^{23} mol^{-1}.",
        "Number of moles n = Given Mass (g) / Molar Mass (g/mol) = Number of Particles / N_A = Volume of gas at STP (L) / 22.4|L."
      ],
      "keyConcepts": [
        "Avogadro Constant N_A = 6.02214076 times 10^{23}|mol^{-1} (rounded to 6.022 times 10^{23}|mol^{-1} for NEET calculations).",
        "Molar volume of ideal gas at STP (0^circC, 1|atm) approx 22.4 Litres.",
        "1 mol of liquid water has a mass of 18 g. At approximately 1 g/mL density, its volume is about 18 mL."
      ],
      "formulas": [
        {
          "title": "Mole Calculations",
          "formula": "n = m / M = N / N_A = frac{V_{STP}}{22.4 L}"
        }
      ],
      "neetImportantPoints": [
        "At STP (0°C, 1 atm), 1 mole of any ideal gas occupies ~22.4 L.",
        "1 mol liquid water has mass 18 g and volume about 18 mL (density ≈ 1 g/mL)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "1 mole of oxygen gas means 1 mole of O atoms.",
          "correctFact": "Oxygen gas exists as O2 molecules! 1 mole of O2 gas = 2 moles of O atoms.",
          "whyItMattersForNEET": "Important for NEET-style stoichiometric questions."
        }
      ],
      "quickRevision": [
        "n = m/M = N/N_A = V/22.4 L",
        "1 mole O2 = 2 moles O atoms",
        "1 mol liquid H2O ≈ 18 mL"
      ]
    },
    "pyqs": []
  },
  "chem-percentage-composition": {
    "id": "chem-percentage-composition",
    "title": "Percentage Composition & Mass Percent",
    "chapterId": "mole-concept",
    "estimatedReadTimeMinutes": 10,
    "importanceWeight": "High Yield",
    "summary": "Mass percentage of elements in compounds, minimum molecular weight calculations, and elemental composition.",
    "notes": {
      "learn": [
        "Mass Percentage of an element = Mass of element in 1 mole of compound / Molar mass of compound times 100%.",
        "Minimum Molar Mass = 1 times Atomic Mass of element times 100 / Mass Percentage of element."
      ],
      "keyConcepts": [
        "Mass Percentage is an intensive property and independent of sample size.",
        "Minimum Molecular Weight assumes exactly 1 atom of the element per molecule."
      ],
      "formulas": [
        {
          "title": "Mass Percentage Formula",
          "formula": "Mass % = frac{n times A_{element}}{M_{compound}} times 100%"
        },
        {
          "title": "Minimum Molecular Weight",
          "formula": "M_{min} = frac{1 times A_{element} times 100}{Mass %}"
        }
      ],
      "neetImportantPoints": [
        "Urea [CO(NH2)2] contains 46.67% Nitrogen by mass.",
        "Min Molecular Weight of Hemoglobin (0.334% Fe) = 16,766 g/mol."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Mass % depends on the sample size.",
          "correctFact": "Mass percentage is constant for a pure compound regardless of sample quantity.",
          "whyItMattersForNEET": "Frequent theoretical question trap."
        }
      ],
      "quickRevision": [
        "Mass % = (n × At. Mass / Molar Mass) × 100",
        "Min Molar Mass = (At. Mass × 100) / Mass %"
      ]
    },
    "pyqs": []
  },
  "chem-laws-combination": {
    "id": "chem-laws-combination",
    "title": "Laws of Chemical Combination",
    "chapterId": "mole-concept",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "The fundamental quantitative laws describing how elements combine to form chemical compounds: Conservation of Mass, Definite Proportions, Multiple Proportions, Reciprocal Proportions, Gay-Lussac's Gas Volumes, and Avogadro's Law.",
    "notes": {
      "learn": [
        "1. Law of Conservation of Mass (Lavoisier, 1789): In any chemical reaction, mass is neither created nor destroyed. Total Mass of Reactants = Total Mass of Products.",
        "2. Law of Definite Proportions (Proust, 1799): A pure chemical compound always contains its constituent elements combined in the exact same fixed proportion by mass, regardless of source or preparation method.",
        "3. Law of Multiple Proportions (Dalton, 1803): When two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other element are in simple whole-number ratios.",
        "4. Law of Reciprocal Proportions (Richter, 1792): If two elements separately combine with a fixed mass of a third element, the ratio of their masses is either the same as, or a simple integer multiple of, the ratio in which they combine directly with each other.",
        "5. Gay-Lussac's Law of Gaseous Volumes (1808): When gases react, their reacting volumes (and product volumes, if gaseous) bear a simple whole-number ratio to one another at constant temperature and pressure.",
        "6. Avogadro's Law (1811): Equal volumes of all gases under identical conditions of temperature and pressure contain equal numbers of molecules (V ∝ n)."
      ],
      "keyConcepts": [
        "Conservation of Mass = Mass of Reactants = Mass of Products in a closed chemical system.",
        "Definite Proportions = Fixed elemental mass ratio in a pure chemical compound (e.g. H₂O is always 1:8 H:O by mass).",
        "Multiple Proportions = Comparing two elements in 2+ compounds with one element mass fixed (e.g. CO vs CO₂ gives O mass ratio 16:32 = 1:2).",
        "Reciprocal Proportions = Comparing two elements combining with a 3rd element vs combining with each other.",
        "Gay-Lussac's Law = Integer volume ratios for gaseous reactants and products at constant T & P.",
        "Avogadro's Law = Equal volume of gases at same T & P contain equal number of molecules (V ∝ n)."
      ],
      "formulas": [
        {
          "title": "Conservation of Mass Formula",
          "formula": "m_{reactants} = m_{products}",
          "variables": "m = mass in grams (g)",
          "whenToUse": "Use when calculating unknown mass of reactant or product in a complete closed reaction.",
          "note": "Applies to closed chemical systems without mass loss to surroundings."
        },
        {
          "title": "Definite Proportions Formula",
          "formula": "Mass Ratio (A : B) = Constant for pure compound",
          "variables": "A, B = constituent elements of the pure compound",
          "whenToUse": "Use to check if different sample preparations yield the same pure compound."
        },
        {
          "title": "Multiple Proportions Mass Ratio",
          "formula": "frac{m_{B, Comp 1}}{m_{B, Comp 2}} = x / y quad (for fixed mass of A)",
          "variables": "x, y = small positive integers (1, 2, 3...)",
          "whenToUse": "Use when comparing two elements forming multiple distinct compounds."
        },
        {
          "title": "Gay-Lussac's Volume Ratio",
          "formula": "V_1 : V_2 : V_3 = nu_1 : nu_2 : nu_3 quad (at constant T, P)",
          "variables": "V = gas volume, nu = stoichiometric coefficient",
          "whenToUse": "Use for gaseous reactant/product volume stoichiometry at identical T and P."
        },
        {
          "title": "Avogadro's Law",
          "formula": "V_1 / n_1 = V_2 / n_2 quad or quad V_1 / N_1 = V_2 / N₂ quad (at constant T, P)",
          "variables": "V = volume, n = moles, N = number of molecules",
          "whenToUse": "Use to relate gas volume to molecule/mole count at constant T and P."
        }
      ],
      "neetImportantPoints": [
        "Law of Definite Proportions applies strictly to pure chemical compounds, NOT to mixtures.",
        "In Law of Multiple Proportions, the mass of ONE element must be kept constant before taking the mass ratio of the second element.",
        "Gay-Lussac's Law applies ONLY to gaseous reactants and products; ignore solid and liquid volumes.",
        "Avogadro's Law requires IDENTICAL temperature and pressure conditions for comparing gas volumes.",
        "Avogadro's Law resolved Gay-Lussac's observations by introducing the distinction between atoms and diatomic gas molecules (H₂, O₂, Cl₂)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Thinking the Law of Definite Proportions applies to mixtures.",
          "correctFact": "Definite proportions apply strictly to pure chemical compounds; mixtures have variable composition.",
          "whyItMattersForNEET": "Key conceptual distinction tested in NEET option elimination."
        },
        {
          "commonConfusion": "Comparing oxygen masses in CO and CO₂ without fixing carbon mass.",
          "correctFact": "You MUST fix (normalize) the mass of one element first before calculating the simple integer mass ratio of the second element.",
          "whyItMattersForNEET": "Prevents calculation errors when data is presented in percentages."
        },
        {
          "commonConfusion": "Applying Gay-Lussac's volume ratio to liquid or solid products.",
          "correctFact": "Gay-Lussac's volume ratio applies strictly to GASEOUS substances under identical T and P conditions.",
          "whyItMattersForNEET": "Common trap where questions include solid precipitates or liquid water."
        },
        {
          "commonConfusion": "Assuming equal gas volumes have equal mass.",
          "correctFact": "Equal gas volumes at same T and P contain equal MOLECULES (moles), NOT equal mass! Mass depends on molar mass (m = n × M).",
          "whyItMattersForNEET": "Frequent conceptual trap in Avogadro's law true/false statements."
        }
      ],
      "quickRevision": [
        "1. Conservation of Mass → Mass Reactants = Mass Products.",
        "2. Definite Proportions → Pure compound has fixed mass ratio of elements.",
        "3. Multiple Proportions → Two elements forming 2+ compounds give simple integer mass ratio for fixed mass of one element.",
        "4. Reciprocal Proportions → Two elements combining with a 3rd element show simple ratio relation when combining directly.",
        "5. Gay-Lussac → Reacting gas volumes bear simple integer ratios at constant T and P.",
        "6. Avogadro → Equal gas volumes at same T & P contain equal numbers of molecules (V ∝ n)."
      ],
      "practiceQuestions": [
        {
          "id": "pq-loc-1",
          "question": "When 10.0 g of calcium carbonate (CaCO₃) is heated strongly in a closed reaction vessel, it decomposes completely into 5.6 g of solid calcium oxide (CaO) and carbon dioxide gas (CO₂). According to the Law of Conservation of Mass, what mass of CO₂ gas is released?",
          "options": [
            "4.4 g",
            "5.6 g",
            "10.0 g",
            "15.6 g"
          ],
          "correctAnswer": 0,
          "explanation": "Step 1: State Law of Conservation of Mass: Total Mass of Reactants = Total Mass of Products.nnStep 2: Set up the equation:nMass of CaCO₃ = Mass of CaO + Mass of CO₂n10.0 g = 5.6 g + Mass of CO₂nnStep 3: Solve for Mass of CO₂:nMass of CO₂ = 10.0 g - 5.6 g = 4.4 g.nnFinal Answer: 4.4 g."
        },
        {
          "id": "pq-loc-2",
          "question": "Sample 1 of copper oxide prepared in the laboratory by reacting copper with nitric acid contains 80.0% copper and 20.0% oxygen by mass. Sample 2 prepared by thermal decomposition of copper carbonate contains 4.0 g of copper and 1.0 g of oxygen. Which law of chemical combination is demonstrated by these experimental results?",
          "options": [
            "Law of Definite Proportions",
            "Law of Multiple Proportions",
            "Law of Reciprocal Proportions",
            "Law of Conservation of Mass"
          ],
          "correctAnswer": 0,
          "explanation": "Step 1: Calculate elemental mass ratio for Sample 1:nCu : O = 80.0 : 20.0 = 4 : 1.nnStep 2: Calculate elemental mass ratio for Sample 2:nCu : O = 4.0 g : 1.0 g = 4 : 1.nnStep 3: Conclusion:nBoth pure samples of copper oxide contain copper and oxygen in the exact same fixed mass ratio of 4:1 regardless of preparation method. This illustrates Proust's Law of Definite Proportions.\n\nFinal Answer: Law of Definite Proportions."
        },
        {
          "id": "pq-loc-3",
          "question": "Carbon forms two gaseous oxides: Carbon Monoxide (CO) and Carbon Dioxide (CO₂). In CO, 12 g of carbon combines with 16 g of oxygen. In CO₂, 12 g of carbon combines with 32 g of oxygen. What is the ratio of masses of oxygen combining with the fixed mass of carbon, and which law does it illustrate?",
          "options": [
            "1 : 2; Law of Multiple Proportions",
            "1 : 2; Law of Definite Proportions",
            "3 : 8; Law of Reciprocal Proportions",
            "2 : 1; Gay-Lussac's Law"
          ],
          "correctAnswer": 0,
          "explanation": "Step 1: Identify fixed mass of carbon = 12 g in both compounds.nnStep 2: Mass of oxygen combining with 12 g C:nIn CO = 16 gnIn CO₂ = 32 gnnStep 3: Calculate oxygen mass ratio:n16 g : 32 g = 1 : 2.nnStep 4: Conclusion:nSince 1:2 is a simple whole-number ratio for a fixed mass of carbon, this illustrates Dalton's Law of Multiple Proportions.\n\nFinal Answer: 1 : 2; Law of Multiple Proportions."
        },
        {
          "id": "pq-loc-4",
          "question": "Methane (CH₄) contains 75.0% carbon and 25.0% hydrogen by mass. Water (H₂O) contains 88.89% oxygen and 11.11% hydrogen by mass. Carbon Dioxide (CO₂) contains 27.27% carbon and 72.73% oxygen by mass. This set of data illustrates which fundamental law?",
          "options": [
            "Law of Reciprocal Proportions",
            "Law of Multiple Proportions",
            "Law of Definite Proportions",
            "Gay-Lussac's Law of Gaseous Volumes"
          ],
          "correctAnswer": 0,
          "explanation": "Step 1: Consider 3 elements: Carbon (C), Oxygen (O), and Hydrogen (H).nnStep 2: Calculate mass of C and O combining with a fixed mass (1 g) of Hydrogen:n• In CH₄: 25 g H combines with 75 g C → 1 g H combines with 75/25 = 3 g C.n• In H₂O: 11.11 g H combines with 88.89 g O → 1 g H combines with 88.89/11.11 = 8 g O.nRatio C : O combining with 1 g H = 3 : 8.nnStep 3: Ratio of C : O in CO₂:n27.27 g C : 72.73 g O = 1 : 2.667 = 3 : 8.nnStep 4: Conclusion:nThe mass ratio of C and O combining with a fixed mass of H is identical to the mass ratio in which C and O combine directly with each other (3:8). This illustrates Richter's Law of Reciprocal Proportions.\n\nFinal Answer: Law of Reciprocal Proportions."
        },
        {
          "id": "pq-loc-5",
          "question": "Under identical conditions of temperature and pressure, 30 mL of hydrogen gas (H₂) reacts completely with 15 mL of oxygen gas (O₂) to form water vapor (H₂O). What volume of water vapor is produced according to Gay-Lussac's Law of Gaseous Volumes?",
          "options": [
            "30 mL",
            "15 mL",
            "45 mL",
            "60 mL"
          ],
          "correctAnswer": 0,
          "explanation": "Step 1: Write balanced gaseous chemical equation:n2H₂(g) + O₂(g) → 2H₂O(g)nnStep 2: Gay-Lussac's Law volume ratio = Coefficient ratio = 2 : 1 : 2.\n\nStep 3: Calculate volume of H₂O(g):\n• 2 volumes H₂ + 1 volume O₂ → 2 volumes H₂O(g)\n• 30 mL H₂ + 15 mL O₂ → 30 mL H₂O(g).\n\nFinal Answer: 30 mL."
        },
        {
          "id": "pq-loc-6",
          "question": "Vessel X of volume 2.0 L contains argon gas at 25 °C and 1.5 atm pressure. Vessel Y of volume 2.0 L contains methane gas (CH₄) under the exact same temperature (25 °C) and pressure (1.5 atm). If Vessel X contains N atoms of argon, how many molecules of CH₄ are in Vessel Y?",
          "options": [
            "N molecules",
            "5N molecules",
            "N/5 molecules",
            "2N molecules"
          ],
          "correctAnswer": 0,
          "explanation": "Step 1: State Avogadro's Law: Equal volumes of all gases under identical temperature and pressure contain equal numbers of molecules.\n\nStep 2: Compare conditions:\nVessel X (Ar): Volume = 2.0 L, T = 25 °C, P = 1.5 atm → Contains N particles (Argon is monatomic, so N atoms = N molecules).\nVessel Y (CH₄): Volume = 2.0 L, T = 25 °C, P = 1.5 atm.\n\nStep 3: By Avogadro's Law, Vessel Y contains exactly N molecules of CH₄.nnFinal Answer: N molecules."
        }
      ],
      "neetMarksPotential": {
        "topicName": "Laws of Chemical Combination",
        "confidenceLabel": "HIGH",
        "confidenceText": "High Confidence: Verified against official SATHEE / NTA NEET & AIPMT past question archives.",
        "totalAnalyzedPapers": 15,
        "papersWithDirectPyqs": 0,
        "totalDirectPyqs": 0,
        "totalHistoricalMarks": 0,
        "averageDirectPyqsPerPaper": 0,
        "maxDirectPyqsInSinglePaper": 0,
        "minDirectPyqsInSinglePaper": 0,
        "minDirectMarks": 0,
        "maxDirectMarks": 0,
        "avgDirectMarksPerPaper": 0,
        "typicalContributionMarks": 0,
        "historicalMarksRangeText": "0 marks per paper (Foundational theory topic)",
        "whatThisMeansForYou": "No verified NEET previous-year questions have been added to this topic yet. Laws of Chemical Combination are foundational theoretical principles (Law of Definite Proportions, Law of Multiple Proportions, Gay-Lussac's Law, Avogadro's Law) taught at the start of Physical Chemistry. While direct numerical questions on these historical laws are rare in recent NEET papers (which focus on mole calculations and empirical formulas), understanding these laws builds the essential quantitative logic required for stoichiometric problem solving.",
        "yearWiseBreakdown": [
          {
            "year": 2025,
            "exam": "NEET UG 2025",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2024,
            "exam": "NEET UG 2024",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2023,
            "exam": "NEET UG 2023",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2022,
            "exam": "NEET UG 2022",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2021,
            "exam": "NEET UG 2021",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2020,
            "exam": "NEET UG 2020",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2019,
            "exam": "NEET UG 2019",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2018,
            "exam": "NEET UG 2018",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2017,
            "exam": "NEET UG 2017",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2016,
            "exam": "NEET UG 2016",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2015,
            "exam": "AIPMT 2015",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2014,
            "exam": "AIPMT 2014",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2013,
            "exam": "NEET UG 2013",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2007,
            "exam": "AIPMT 2007",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          },
          {
            "year": 2001,
            "exam": "AIPMT 2001",
            "directPyqCount": 0,
            "marks": 0,
            "questionType": "No direct PYQ identified",
            "classification": "None",
            "verificationStatus": "Verified (SATHEE Paper Analysis)"
          }
        ],
        "sourceInfo": {
          "dataSource": "SATHEE (IIT Kanpur / Ministry of Education) & Official NEET/AIPMT Archives",
          "analysisPeriod": "2001 – 2025 (15 Verified Papers)",
          "directPyqsAnalyzedCount": 0,
          "classificationMethod": "Strict topic-level classification; chapter-level weightage was not used.",
          "disclaimer": "Historical frequency is not a prediction of the next NEET paper."
        }
      }
    },
    "pyqs": []
  },
  "chem-empirical-formula": {
    "id": "chem-empirical-formula",
    "title": "Empirical Formula & Molecular Formula",
    "chapterId": "mole-concept",
    "estimatedReadTimeMinutes": 12,
    "importanceWeight": "High Yield",
    "summary": "Determining the simplest whole-number ratio of atoms and the actual molecular formula of a compound from elemental analysis and molar mass data.",
    "notes": {
      "learn": [
        "Empirical Formula represents the simplest integer ratio of atoms of each element present in a chemical compound.",
        "Molecular Formula gives the actual exact number of atoms of each element in a single molecule of the compound.",
        "Molecular Formula = (Empirical Formula) × n, where n = Molecular Molar Mass / Empirical Formula Mass.",
        "Vapor Density relationship: Molar Mass = 2 × Vapor Density."
      ],
      "keyConcepts": [
        "Empirical Formula gives simplest whole-number atom count ratio.",
        "Multiple distinct compounds (Glucose C₆H₁₂O₆, Acetic Acid C₂H₄O₂, Formaldehyde CH₂O) share the same empirical formula CH₂O.",
        "Multiplication factor n must be a positive integer (1, 2, 3...)."
      ],
      "formulas": [
        {
          "title": "Multiplication Factor n",
          "formula": "n = Molecular Molar Mass / Empirical Formula Mass"
        },
        {
          "title": "Molecular Formula Relation",
          "formula": "Molecular Formula = (Empirical Formula) × n"
        },
        {
          "title": "Vapor Density",
          "formula": "Molar Mass = 2 × Vapor Density"
        }
      ],
      "neetImportantPoints": [
        "Always convert mass percentages to moles of atoms before calculating atom ratios.",
        "Divide every element's mole value by the smallest mole value.",
        "Do not prematurely round 1.5 to 2; multiply all ratios by 2 to get 3:2 integers."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Percentage composition values are directly the atomic ratio.",
          "correctFact": "Mass percentages must be divided by atomic weights to obtain mole ratios first.",
          "whyItMattersForNEET": "Direct negative-mark trap in NEET numericals."
        },
        {
          "commonConfusion": "Rounding relative ratio 1.5 directly up to 2.",
          "correctFact": "Ratios like 1 : 1.5 must be multiplied by 2 to yield whole numbers 2 : 3 (e.g., Fe₂O₃).",
          "whyItMattersForNEET": "Leads directly to wrong formula option."
        }
      ],
      "quickRevision": [
        "Moles = Mass / Atomic Mass",
        "Divide by smallest mole value",
        "n = Molar Mass / Empirical Formula Mass",
        "MF = EF × n"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-ef-1",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "An organic compound contains 78% (by wt.) carbon and remaining percentage of hydrogen. The right option for the empirical formula of this compound is:",
        "options": [
          "CH₃",
          "CH₂",
          "CH₄",
          "CH"
        ],
        "correctAnswer": 0,
        "explanation": "Moles C = 78/12 = 6.5, Moles H = 22/1 = 22. Ratio C : H = 1 : 3.38 ≈ 1 : 3. Empirical formula = CH₃.",
        "topicId": "chem-empirical-formula",
        "difficulty": "Easy"
      },
      {
        "id": "pyq-ef-2",
        "year": 2012,
        "exam": "AIPMT 2012 Pre",
        "question": "An organic compound contains Carbon, Hydrogen and Nitrogen in the mass ratio 9 : 1 : 3.5. Their empirical formula is:",
        "options": [
          "C₃H₄N",
          "C₂H₄N",
          "C₃H₆N₂",
          "CHN"
        ],
        "correctAnswer": 0,
        "explanation": "Moles C = 9/12 = 0.75, H = 1/1 = 1.0, N = 3.5/14 = 0.25. Divide by 0.25 -> C = 3, H = 4, N = 1 -> Empirical formula = C₃H₄N.",
        "topicId": "chem-empirical-formula",
        "difficulty": "Medium"
      },
      {
        "id": "pyq-ef-3",
        "year": 2008,
        "exam": "AIPMT 2008",
        "question": "An organic compound contains 40% Carbon, 6.66% Hydrogen and rest Oxygen. If its vapor density is 30, its molecular formula is:",
        "options": [
          "C₂H₄O₂",
          "CH₂O",
          "C₃H₆O₃",
          "C₄H₈O₄"
        ],
        "correctAnswer": 0,
        "explanation": "% O = 53.34%. Moles C = 3.33, H = 6.66, O = 3.33 -> EF = CH₂O (EFM = 30). Molar Mass = 2 × 30 = 60. n = 60/30 = 2 -> MF = C₂H₄O₂.",
        "topicId": "chem-empirical-formula",
        "difficulty": "Medium"
      }
    ]
  },
  "chem-stoichiometry": {
    "id": "chem-stoichiometry",
    "title": "Stoichiometry",
    "chapterId": "mole-concept",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Using balanced chemical equations to calculate quantitative relationships between reactants and products.",
    "notes": {
      "learn": [
        "Stoichiometric coefficients in a balanced equation provide mole, molecule, and gas-volume ratios of reactants and products.",
        "A balanced chemical equation acts as the quantitative roadmap for reaction calculations.",
        "Always convert given quantities into moles before applying stoichiometric coefficient ratios.",
        "Gas-volume ratios equal stoichiometric coefficient ratios for gases under identical temperature and pressure conditions.",
        "For impure samples, Percentage Purity = (Mass of pure substance / Mass of impure sample) × 100."
      ],
      "keyConcepts": [
        "Coefficients give mole ratios, NOT mass ratios.",
        "Universal 5-step workflow: Given Quantity → Given Moles → Mole Ratio Bridge → Target Moles → Requested Unit.",
        "Total mass of reactants consumed equals total mass of products formed (Mass Conservation)."
      ],
      "formulas": [
        {
          "title": "Fundamental Mole Conversion",
          "formula": "n = m / M = N / N_A = frac{V_{STP}}{22.4 L}"
        },
        {
          "title": "Stoichiometric Ratio",
          "formula": "n_A / nu_A = n_B / nu_B"
        },
        {
          "title": "Percentage Purity",
          "formula": "% Purity = (frac{m_{pure}}{m_{impure}}) times 100"
        }
      ],
      "neetImportantPoints": [
        "Always balance the equation completely before starting calculations.",
        "Never use grams directly in coefficient ratio equations.",
        "Do not apply gas-volume ratios to solids or liquids!"
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming coefficients represent mass ratios in grams.",
          "correctFact": "Coefficients represent mole ratios, not mass ratios in grams.",
          "whyItMattersForNEET": "Major negative-mark trap in NEET numericals."
        },
        {
          "commonConfusion": "Applying gas volume ratio to solid reactants or liquid products.",
          "correctFact": "Volume ratios equal coefficient ratios strictly for gases at constant T and P.",
          "whyItMattersForNEET": "Frequent conceptual trap."
        }
      ],
      "quickRevision": [
        "Balance equation first",
        "Convert to moles",
        "Apply mole ratio: n_A/ν_A = n_B/ν_B",
        "Convert to requested unit"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-st-1",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "The number of moles of hydrogen molecules required to produce 20 moles of ammonia through Haber's process is:",
        "options": [
          "30",
          "20",
          "10",
          "40"
        ],
        "correctAnswer": 0,
        "explanation": "Balanced equation: N₂ + 3H₂ → 2NH₃. Ratio H₂ : NH₃ = 3 : 2. Moles H₂ = 20 × (3/2) = 30 moles.",
        "topicId": "chem-stoichiometry",
        "difficulty": "Easy"
      },
      {
        "id": "pyq-st-2",
        "year": 2015,
        "exam": "AIPMT 2015 Re-Exam",
        "question": "20.0 g of a magnesium carbonate sample decomposes on heating to give carbon dioxide and 8.0 g magnesium oxide. What is the percentage purity of magnesium carbonate in the sample?",
        "options": [
          "84%",
          "75%",
          "60%",
          "96%"
        ],
        "correctAnswer": 0,
        "explanation": "MgCO₃ → MgO + CO₂. Moles MgO = 8.0 / 40 = 0.20 mol. Pure MgCO₃ = 0.20 × 84 = 16.8 g. % Purity = (16.8 / 20.0) × 100 = 84%.",
        "topicId": "chem-stoichiometry",
        "difficulty": "Medium"
      },
      {
        "id": "pyq-st-3",
        "year": 2004,
        "exam": "AIPMT 2004",
        "question": "What volume of oxygen gas at STP is required to burn 2.2 g of propane gas (C₃H₈) completely?",
        "options": [
          "5.6 L",
          "11.2 L",
          "2.24 L",
          "22.4 L"
        ],
        "correctAnswer": 0,
        "explanation": "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Moles C₃H₈ = 2.2 / 44 = 0.05 mol. Moles O₂ = 0.05 × 5 = 0.25 mol. Vol O₂ at STP = 0.25 × 22.4 = 5.6 L.",
        "topicId": "chem-stoichiometry",
        "difficulty": "Medium"
      }
    ]
  },
  "chem-concentration-terms": {
    "id": "chem-concentration-terms",
    "title": "Concentration Terms: Molarity, Molality & Mole Fraction",
    "chapterId": "mole-concept",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Quantitative methods for expressing solution concentration: Molarity (M), Molality (m), Mole Fraction (X), and their temperature dependencies.",
    "notes": {
      "learn": [
        "1. Molarity (M): Moles of solute dissolved per Litre of solution (M = n / V_L). Volume-based, so it changes with temperature.",
        "2. Molality (m): Moles of solute dissolved per Kilogram of solvent (m = n / mass_solvent_kg). Mass-based, so it is temperature independent.",
        "3. Mole Fraction (X): Ratio of moles of one component to total moles in the mixture (X_A = n_A / Σn). Dimensionless, temperature independent.",
        "4. Density-Mass % Relationship: Molarity = (10 × d × %w/w) / Molar Mass."
      ],
      "keyConcepts": [
        "Molarity uses total volume of SOLUTION in Litres.",
        "Molality uses mass of SOLVENT in Kilograms.",
        "Mole Fraction is unitless and the sum of mole fractions of all components equals 1.",
        "Molarity depends on temperature because solution volume changes with T. Molality and mole fraction are temperature independent."
      ],
      "formulas": [
        {
          "title": "Molarity Formula",
          "formula": "M = frac{n_{solute}}{V_{solution (L)}} = frac{w_{solute} times 1000}{M_{solute} times V_{solution (mL)}}"
        },
        {
          "title": "Molality Formula",
          "formula": "m = frac{n_{solute}}{m_{solvent (kg)}} = frac{w_{solute} times 1000}{M_{solute} times w_{solvent (g)}}"
        },
        {
          "title": "Mole Fraction Formula",
          "formula": "X_A = n_A / (n_A + n_B), quad X_A + X_B = 1"
        },
        {
          "title": "Molarity from Density & Mass %",
          "formula": "M = frac{10 times d times w}{M_{solute}}"
        }
      ],
      "neetImportantPoints": [
        "Always check whether denominator is volume of solution (Molarity) or mass of solvent (Molality).",
        "Molarity varies with temperature because liquid volume expands with heating.",
        "Molality and mole fraction do NOT vary with temperature because mass is invariant with temperature.",
        "Sum of mole fractions of all components in a solution is always equal to 1."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Using volume of solvent instead of volume of solution for Molarity.",
          "correctFact": "Molarity is defined per Litre of SOLUTION, not solvent.",
          "whyItMattersForNEET": "Direct calculation error trap."
        },
        {
          "commonConfusion": "Using mass of solution instead of mass of solvent for Molality.",
          "correctFact": "Molality denominator is strictly mass of SOLVENT in kg.",
          "whyItMattersForNEET": "Frequent numerical mistake in NEET."
        }
      ],
      "quickRevision": [
        "M = Moles solute / Volume solution (L) [Temp dependent]",
        "m = Moles solute / Mass solvent (kg) [Temp independent]",
        "X = Moles component / Total moles [No unit, Temp independent]",
        "Sum of all mole fractions = 1",
        "M = (10 × d × %w/w) / Molar Mass"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-ct-1",
        "year": 2013,
        "exam": "NEET UG 2013",
        "question": "What is the mole fraction of the solute in a 1.00 m aqueous solution?",
        "options": [
          "0.0177",
          "0.0344",
          "0.1770",
          "0.0180"
        ],
        "correctAnswer": 0,
        "explanation": "1.00 m aqueous solution means 1.00 mole of solute in 1000 g of water (H₂O).nMoles of water = 1000 / 18.015 = 55.55 mol.nTotal moles = 1.00 + 55.55 = 56.55 mol.nMole fraction of solute X_solute = 1.00 / 56.55 = 0.01768 ≈ 0.0177.",
        "topicId": "chem-concentration-terms",
        "difficulty": "Medium"
      },
      {
        "id": "pyq-ct-2",
        "year": 2013,
        "exam": "NEET UG 2013",
        "question": "Concentrated aqueous sulfuric acid is 98% H₂SO₄ by mass and has a density of 1.80 g/mL. Volume of acid required to make 1.0 L of 0.10 M H₂SO₄ solution is:",
        "options": [
          "5.55 mL",
          "11.10 mL",
          "16.65 mL",
          "22.20 mL"
        ],
        "correctAnswer": 0,
        "explanation": "Step 1: Calculate molarity of concentrated H₂SO₄:nM₁ = (10 × d × %w/w) / Molar Mass = (10 × 1.80 × 98) / 98 = 18.0 M.nStep 2: Use dilution equation M₁V₁ = M₂V₂:n18.0 M × V₁ = 0.10 M × 1000 mLnV₁ = 100 / 18.0 = 5.55 mL.",
        "topicId": "chem-concentration-terms",
        "difficulty": "Medium"
      },
      {
        "id": "pyq-ct-3",
        "year": 2007,
        "exam": "AIPMT 2007",
        "question": "Concentration of a solution is expressed in different ways. Which of the following concentration terms is independent of temperature?",
        "options": [
          "Molality",
          "Molarity",
          "Formality",
          "Normality"
        ],
        "correctAnswer": 0,
        "explanation": "Molality is defined as moles of solute per kilogram of solvent. Since both moles and mass do not change with temperature, molality is independent of temperature. Molarity, formality, and normality involve solution volume, which changes with temperature.",
        "topicId": "chem-concentration-terms",
        "difficulty": "Easy"
      },
      {
        "id": "pyq-ct-4",
        "year": 2020,
        "exam": "NEET UG 2020 Phase 2",
        "question": "The molarity of a solution containing 5.0 g of NaOH in 450 mL of solution is:",
        "options": [
          "0.278 M",
          "0.500 M",
          "0.125 M",
          "0.450 M"
        ],
        "correctAnswer": 0,
        "explanation": "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol.nMoles of NaOH = 5.0 g / 40 g/mol = 0.125 mol.nVolume of solution = 450 mL = 0.450 L.nMolarity = 0.125 mol / 0.450 L = 0.278 M.",
        "topicId": "chem-concentration-terms",
        "difficulty": "Easy"
      }
    ]
  },
  "chem-subatomic-particles": {
    "id": "chem-subatomic-particles",
    "title": "Subatomic Particles & Early Atomic Models",
    "chapterId": "atomic-structure",
    "estimatedReadTimeMinutes": 10,
    "importanceWeight": "Core Concept",
    "summary": "Discovery of electrons (e/m ratio), protons, neutrons, atomic number, and mass number.",
    "notes": {
      "learn": [
        "Thomson discovered electron (e/m ratio 1.76 times 10^{11}|C/kg). Rutherford discovered atomic nucleus via alpha particle scattering.",
        "Atomic Number Z = Number of protons. Mass Number A = Protons + Neutrons."
      ],
      "keyConcepts": [
        "Isotopes = Same Z, different A.",
        "Isobars = Same A, different Z.",
        "Isotones = Same number of neutrons (A - Z)."
      ],
      "formulas": [
        {
          "title": "Neutron Count",
          "formula": "N = A - Z"
        }
      ],
      "neetImportantPoints": [
        "Isoelectronic species have identical total electron counts (e.g. Na+, Mg2+, F-, O2- all have 10 electrons)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Isobars have same chemical properties.",
          "correctFact": "Isobars are DIFFERENT elements (different Z), so they have completely different chemical properties.",
          "whyItMattersForNEET": "Definitions matching column."
        }
      ],
      "quickRevision": [
        "Isotopes: same Z",
        "Isobars: same A",
        "Isoelectronic: same electron count"
      ]
    },
    "pyqs": []
  },
  "chem-bohrs-model": {
    "id": "chem-bohrs-model",
    "title": "Bohr's Model of Hydrogen & Line Spectra",
    "chapterId": "atomic-structure",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Bohr quantisation of angular momentum, orbital radius, electron velocity, energy levels, and Rydberg formula for Hydrogen spectral series.",
    "notes": {
      "learn": [
        "Bohr Postulate: Angular momentum is quantized: m v r = n h / (2π) = n ℏ.",
        "Radius of n-th orbit: r_n = 0.529 n^2 / Z Å = 52.9 n^2 / Z pm.",
        "Electron Velocity: v_n = 2.18 × 10^6 Z / n m/s.",
        "Energy of n-th orbit: E_n = -13.6 Z^2 / n^2 eV = -2.18 × 10^-18 Z^2 / n^2 J.",
        "Rydberg Formula for spectral lines: 1 / lambda = nu_bar = R Z^2 ( 1 / n_1^2 - 1 / n_2^2 )."
      ],
      "keyConcepts": [
        "Lyman series (n1=1, UV region, ground state transitions).",
        "Balmer series (n1=2, Visible region, ONLY series in visible spectrum!).",
        "Paschen (n1=3, IR), Brackett (n1=4, IR), Pfund (n1=5, IR).",
        "Total spectral lines emitted from n level: N = n(n - 1) / 2."
      ],
      "formulas": [
        {
          "title": "Quantized Angular Momentum",
          "formula": "m v r = n h / (2 pi) = n hbar"
        },
        {
          "title": "Bohr Radius Formula",
          "formula": "r_n = 0.529 n^2 / Z | AA"
        },
        {
          "title": "Electron Velocity Formula",
          "formula": "v_n = 2.18 xx 10^6 Z / n | m/s"
        },
        {
          "title": "Bohr Energy Level",
          "formula": "E_n = -13.6 Z^2 / n^2 | eV"
        },
        {
          "title": "Rydberg Equation",
          "formula": "bar{nu} = 1 / lambda = R Z^2 ( 1 / n_1^2 - 1 / n_2^2 )"
        },
        {
          "title": "Total Spectral Lines",
          "formula": "N = (n_2 - n_1)(n_2 - n_1 + 1) / 2"
        }
      ],
      "neetImportantPoints": [
        "Balmer series is the ONLY hydrogen spectral line series lying in the VISIBLE spectrum (400 - 750 nm).",
        "Lyman series (n1=1) lies in ULTRAVIOLET (UV) region.",
        "Energy level gaps decrease rapidly as n increases: (E2 - E1) > (E3 - E2) > (E4 - E3).",
        "Kinetic Energy K_n = -E_n = +13.6 Z^2 / n^2 eV; Potential Energy U_n = 2 E_n = -27.2 Z^2 / n^2 eV."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Lyman series is in visible region.",
          "correctFact": "Lyman series is in ULTRAVIOLET (UV) region. Balmer series is the ONLY visible series.",
          "whyItMattersForNEET": "Direct classification question in NEET."
        },
        {
          "commonConfusion": "1st Excited State corresponds to n = 1.",
          "correctFact": "Ground state is n = 1. 1st Excited State corresponds to n = 2.",
          "whyItMattersForNEET": "Avoids substituting n=1 into E2 formula."
        }
      ],
      "quickRevision": [
        "r_n = 0.529 n^2 / Z Å",
        "v_n = 2.18 × 10^6 Z / n m/s",
        "E_n = -13.6 Z^2 / n^2 eV",
        "1 / lambda = R Z^2 ( 1 / n_1^2 - 1 / n_2^2 )",
        "Lyman = UV, Balmer = Visible, Paschen/Brackett/Pfund = IR"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-bohr-1",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "The energy of an electron in the first Bohr orbit of H-atom is −13.6 eV. The possible energy value(s) of the excited state(s) for electron in Bohr orbits of Hydrogen atom is/are:",
        "options": [
          "−3.4 eV",
          "−4.2 eV",
          "−6.8 eV",
          "−1.5 eV"
        ],
        "correctAnswer": 0,
        "explanation": "Step 1: Energy of nth orbit for H atom: E_n = −13.6 / n² eV.\nStep 2: Test possible integer orbit values:\n• n = 2 (1st excited state): E₂ = −13.6 / 4 = −3.4 eV.\n• n = 3 (2nd excited state): E₃ = −13.6 / 9 = −1.51 eV.\nThus, −3.4 eV is a valid excited state energy level.",
        "topicId": "chem-bohrs-model",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.4.2"
      },
      {
        "id": "pyq-bohr-2",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "The radius of the first permitted Bohr orbit for the electron, in a hydrogen atom equals 0.51 Å and its ground state energy equals −13.6 eV. Which of the following is correct for a He⁺ ion?",
        "options": [
          "Radius of 2nd orbit = 1.02 Å, Energy of 2nd orbit = −13.6 eV",
          "Radius of 2nd orbit = 0.51 Å, Energy of 2nd orbit = −13.6 eV",
          "Radius of 1st orbit = 0.255 Å, Energy of 1st orbit = −27.2 eV",
          "Radius of 2nd orbit = 0.51 Å, Energy of 1st orbit = −54.4 eV"
        ],
        "correctAnswer": 0,
        "explanation": "For He⁺ ion (Z = 2):\n• Radius of 2nd orbit (n = 2): r₂ = 0.51 × (n² / Z) = 0.51 × (2² / 2) = 0.51 × 2 = 1.02 Å.\n• Energy of 2nd orbit (n = 2): E₂ = −13.6 × (Z² / n²) = −13.6 × (2² / 2²) = −13.6 eV.\nThus, Radius = 1.02 Å and Energy = −13.6 eV.",
        "topicId": "chem-bohrs-model",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.4.2"
      },
      {
        "id": "pyq-bohr-3",
        "year": 2011,
        "exam": "AIPMT 2011",
        "question": "The energy of second Bohr orbit of the hydrogen atom is −328 kJ mol⁻¹. Hence the energy of fourth Bohr orbit would be:",
        "options": [
          "−82 kJ mol⁻¹",
          "−41 kJ mol⁻¹",
          "−1312 kJ mol⁻¹",
          "−164 kJ mol⁻¹"
        ],
        "correctAnswer": 0,
        "explanation": "Step 1: Energy E_n ∝ 1 / n².\nStep 2: E₄ / E₂ = (2 / 4)² = (1 / 2)² = 1 / 4.\nStep 3: E₄ = E₂ / 4 = (−328 kJ mol⁻¹) / 4 = −82 kJ mol⁻¹.",
        "topicId": "chem-bohrs-model",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.4.2"
      },
      {
        "id": "pyq-bohr-4",
        "year": 2010,
        "exam": "AIPMT 2010",
        "question": "In a hydrogen atom, energy of first excited state is −3.4 eV. The kinetic energy of the electron in the same orbit is:",
        "options": [
          "+3.4 eV",
          "+6.8 eV",
          "−3.4 eV",
          "+13.6 eV"
        ],
        "correctAnswer": 0,
        "explanation": "Step 1: Relationship between Total Energy E_n and Kinetic Energy K_n in Bohr orbit is K_n = −E_n.\nStep 2: Given E₂ = −3.4 eV.\nStep 3: K₂ = − (−3.4 eV) = +3.4 eV.",
        "topicId": "chem-bohrs-model",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.4.2"
      },
      {
        "id": "pyq-bohr-5",
        "year": 2004,
        "exam": "AIPMT 2004",
        "question": "The value of Rydberg constant R is 1.097 × 10⁷ m⁻¹. The wave number of the last line of the Balmer series in Hydrogen spectrum is:",
        "options": [
          "2.74 × 10⁶ m⁻¹",
          "5.48 × 10⁶ m⁻¹",
          "1.097 × 10⁷ m⁻¹",
          "0.274 × 10⁶ m⁻¹"
        ],
        "correctAnswer": 0,
        "explanation": "Step 1: Balmer series lower level n₁ = 2.\nStep 2: \"Last line\" (series limit) corresponds to n₂ = ∞.\nStep 3: Rydberg formula: nu_bar = R Z² [ (1/n₁²) − (1/n₂²) ] = R (1) [ (1/2²) − 0 ] = R / 4.\nStep 4: nu_bar = (1.097 × 10⁷ m⁻¹) / 4 = 0.27425 × 10⁷ m⁻¹ = 2.74 × 10⁶ m⁻¹.",
        "topicId": "chem-bohrs-model",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.4.3"
      }
    ]
  },
  "chem-quantum-numbers": {
    "id": "chem-quantum-numbers",
    "title": "de Broglie Wavelength & Quantum Numbers",
    "chapterId": "atomic-structure",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "de Broglie matter wave equation, accelerated electron wavelength, Heisenberg uncertainty principle, and set of 4 quantum numbers governing orbital geometry and electron spin.",
    "notes": {
      "learn": [
        "de Broglie Wavelength: λ = h / p = h / (m v). Accelerated electron shortcut: λ = 12.27 / √V Å = 1.227 / √V nm.",
        "Heisenberg Uncertainty Principle: Δx × Δp ≥ h / (4π) ⇒ Δx × m Δv ≥ h / (4π).",
        "Principal Quantum Number (n = 1, 2, 3...): Shell energy/size. Subshells = n, Orbitals = n², Max e⁻ = 2n².",
        "Azimuthal Quantum Number (l = 0 to n−1): Subshell type (0=s, 1=p, 2=d, 3=f), 3D shape, and Orbital Angular Momentum L = √(l(l+1)) ℏ.",
        "Magnetic Quantum Number (mₗ = −l to +l): Spatial orientation in 3D. Total values = 2l + 1 (orbitals in subshell).",
        "Spin Quantum Number (m⛥ = +1/2 or −1/2): Intrinsic spin direction. Max 2 electrons with opposite spin per orbital."
      ],
      "keyConcepts": [
        "Orbital Angular Momentum L = √(l(l+1)) ℏ is strictly ZERO for ALL s-orbitals (l=0) regardless of n.",
        "Validation Rules: n > 0; l < n (2d & 3f forbidden); |mₗ| ≤ l; m⛥ = ±1/2.",
        "Electron nuclear confinement impossibility: Δx ~ 10⁻¹⁴ m yields velocity > c, proving electrons cannot exist inside nuclei."
      ],
      "formulas": [
        {
          "title": "de Broglie Wavelength",
          "formula": "lambda = h / (m v)"
        },
        {
          "title": "Accelerated Electron Wavelength",
          "formula": "lambda = 12.27 / sqrt{V} | AA = 1.227 / sqrt{V} | nm"
        },
        {
          "title": "Heisenberg Uncertainty",
          "formula": "Delta x cdot Delta p ge h / (4 pi)"
        },
        {
          "title": "Orbital Angular Momentum",
          "formula": "L = sqrt{l (l + 1)} h / (2 pi) = sqrt{l (l + 1)} hbar"
        },
        {
          "title": "Subshell & Shell Capacities",
          "formula": "Subshell: 2l + 1 orbitals, 2(2l + 1) e^- | Shell: n^2 orbitals, 2n^2 e^-"
        }
      ],
      "neetImportantPoints": [
        "Orbital angular momentum depends ONLY on l, independent of n! L for 1s, 2s, 3s, 4s is 0.",
        "Accelerated electron wavelength: λ = 12.27 / √V Å. V = 100 V ➔ λ = 1.227 Å.",
        "l cannot equal or exceed n. Therefore 1p, 2d, 3f subshells do not exist.",
        "mₗ ranges from −l to +l. Total degenerate orbitals in a subshell = 2l + 1."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Orbital angular momentum depends on n.",
          "correctFact": "FALSE! It depends ONLY on l: L = √(l(l+1)) ℏ. All s-orbitals have L = 0.",
          "whyItMattersForNEET": "Direct option elimination in angular momentum questions."
        },
        {
          "commonConfusion": "m⛥ can be 0 or 1.",
          "correctFact": "m⛥ can ONLY be +1/2 or −1/2.",
          "whyItMattersForNEET": "Helps eliminate invalid quantum number sets instantly."
        }
      ],
      "quickRevision": [
        "λ = h / mv = 12.27 / √V Å",
        "Δx × Δp ≥ h / (4π)",
        "L = √(l(l+1)) ℏ; L(s) = 0",
        "s=0, p=1, d=2, f=3",
        "Orbitals = n²; Max e⁻ = 2n²"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-qn-1",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Which of the following sets of quantum numbers is NOT possible?",
        "options": [
          "n = 3, l = 2, mₗ = −2, m⛥ = −1/2",
          "n = 4, l = 0, mₗ = 0, m⛥ = −1/2",
          "n = 3, l = 3, mₗ = −3, m⛥ = +1/2",
          "n = 5, l = 1, mₗ = 0, m⛥ = +1/2"
        ],
        "correctAnswer": 2,
        "explanation": "For n = 3, azimuthal quantum number l can only range from 0 to (n − 1) = 2. l = 3 is strictly forbidden when n = 3.",
        "topicId": "chem-quantum-numbers",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.1"
      },
      {
        "id": "pyq-qn-2",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "The orbital angular momentum of an electron in a 2p orbital is:",
        "options": [
          "Zero",
          "h / (2π)",
          "√(2) h / (2π)",
          "√(6) h / (2π)"
        ],
        "correctAnswer": 2,
        "explanation": "For 2p orbital, l = 1. Orbital angular momentum L = √(l(l+1)) × h / (2π) = √(1(1+1)) × h / (2π) = √2 h / (2π).",
        "topicId": "chem-quantum-numbers",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.1"
      },
      {
        "id": "pyq-qn-3",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "The de Broglie wavelength of an electron accelerated from rest through a potential difference of 100 Volts is:",
        "options": [
          "0.123 nm",
          "1.23 nm",
          "0.0123 nm",
          "12.3 nm"
        ],
        "correctAnswer": 0,
        "explanation": "Shortcut formula: λ = 12.27 / √V Å = 12.27 / √100 = 1.227 Å = 0.1227 nm ≈ 0.123 nm.",
        "topicId": "chem-quantum-numbers",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.5"
      },
      {
        "id": "pyq-qn-4",
        "year": 2016,
        "exam": "NEET UG 2016 Phase 1",
        "question": "How many electrons in an atom can have the quantum numbers n = 4 and m⛥ = −1/2?",
        "options": [
          "32",
          "16",
          "8",
          "4"
        ],
        "correctAnswer": 1,
        "explanation": "For n = 4, total electrons in shell = 2n² = 2(16) = 32. Exactly half (16 electrons) have spin-down (m⛥ = −1/2).",
        "topicId": "chem-quantum-numbers",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.1"
      },
      {
        "id": "pyq-qn-5",
        "year": 2012,
        "exam": "AIPMT 2012",
        "question": "Maximum number of electrons in a subshell with l = 3 and n = 4 is:",
        "options": [
          "14",
          "10",
          "6",
          "2"
        ],
        "correctAnswer": 0,
        "explanation": "l = 3 specifies the f subshell. Max electrons = 2(2l + 1) = 2(2(3) + 1) = 2(7) = 14 electrons.",
        "topicId": "chem-quantum-numbers",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.1"
      }
    ]
  },
  "chem-orbital-filling": {
    "id": "chem-orbital-filling",
    "title": "Rules for Orbital Filling — Aufbau, Pauli & Hund",
    "chapterId": "atomic-structure",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "(n+l) energy rule, Aufbau principle, Pauli exclusion principle, Hund's rule of maximum multiplicity, electronic configurations of atoms and ions, magnetic properties, and exceptional configurations of Cr & Cu.",
    "notes": {
      "learn": [
        "Aufbau Principle: Orbitals are filled in order of increasing energy determined by the (n + l) rule.",
        "(n + l) Rule: Lower (n + l) value fills first. If (n + l) is equal, lower n value fills first.",
        "Pauli Exclusion Principle: No two electrons in an atom can have the exact same set of 4 quantum numbers. Maximum 2 electrons per orbital with opposite spins.",
        "Hund's Rule of Maximum Multiplicity: Pairing of electrons in degenerate orbitals (p, d, f) does not occur until each orbital is singly occupied with parallel spins.",
        "Exceptional Configurations: Chromium (Z=24) is [Ar] 3d⁵ 4s¹ and Copper (Z=29) is [Ar] 3d¹⁰ 4s¹ due to symmetrical distribution and high exchange energy of half-filled (d⁵) and fully-filled (d¹⁰) subshells.",
        "Ion Configuration Rule: For transition metal cations, electrons are removed from outer 4s orbital BEFORE 3d orbital! E.g., Fe ([Ar] 3d⁶ 4s²) ➔ Fe²⁺ ([Ar] 3d⁶)."
      ],
      "keyConcepts": [
        "Aufbau order: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s.",
        "Subshell capacities: s² (1 orbital), p⁶ (3 orbitals), d¹⁰ (5 orbitals), f¹⁴ (7 orbitals).",
        "Paramagnetic species have ≥ 1 unpaired electron(s); Diamagnetic species have all electrons paired.",
        "Magnetic moment μ = √(n(n + 2)) BM, where n is number of unpaired electrons."
      ],
      "formulas": [
        {
          "title": "(n + l) Rule",
          "formula": "Lower (n + l) -> Lower Energy; If equal (n + l), Lower n -> Lower Energy"
        },
        {
          "title": "Subshell & Shell Capacity",
          "formula": "Subshell e^- = 2(2l + 1) | Shell e^- = 2n^2"
        },
        {
          "title": "Spin Magnetic Moment",
          "formula": "mu = sqrt{n (n + 2)} | BM"
        }
      ],
      "neetImportantPoints": [
        "Cr (Z=24) = [Ar] 3d⁵ 4s¹; Cu (Z=29) = [Ar] 3d¹⁰ 4s¹.",
        "For Fe²⁺ (Z=26), 4s² electrons are lost first ➔ [Ar] 3d⁶ (4 unpaired electrons). NOT [Ar] 3d⁴ 4s²!",
        "Fe³⁺ (Z=26) has 3d⁵ configuration with 5 unpaired electrons (maximum paramagnetic moment among 3d transition ions).",
        "Hund's rule is based on exchange energy stabilization between electrons of parallel spins in degenerate orbitals."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Writing Fe²⁺ configuration as [Ar] 3d⁴ 4s².",
          "correctFact": "Fe²⁺ is [Ar] 3d⁶ because 4s electrons are removed before 3d when forming cations.",
          "whyItMattersForNEET": "Frequent NEET trap in transition metal ion configurations."
        },
        {
          "commonConfusion": "Assuming 4s orbital is higher in energy than 3d in transition metal ions.",
          "correctFact": "In neutral atoms 4s fills before 3d due to (n+l), but in cations 3d becomes lower in energy, so 4s electrons leave first.",
          "whyItMattersForNEET": "Essential for predicting d-electron count and magnetic moment."
        }
      ],
      "quickRevision": [
        "Aufbau: (n+l) rule",
        "Pauli: Max 2 e⁻/orbital, opposite spins",
        "Hund: Singly occupy degenerate orbitals before pairing",
        "Cr = [Ar] 3d⁵ 4s¹, Cu = [Ar] 3d¹⁰ 4s¹",
        "Fe²⁺ = [Ar] 3d⁶ (4 unpaired e⁻)",
        "Paramagnetic = Unpaired e⁻ present"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-of-1",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "Which of the following statement is NOT correct for chromium (Z = 24)?",
        "options": [
          "It has ground state electronic configuration [Ar] 3d⁵ 4s¹",
          "It has 6 unpaired electrons in its ground state",
          "Its d-subshell is half-filled",
          "It has ground state electronic configuration [Ar] 3d⁴ 4s²"
        ],
        "correctAnswer": 3,
        "explanation": "Chromium (Z = 24) has an exceptional electronic configuration [Ar] 3d⁵ 4s¹ due to the extra stability of half-filled 3d⁵ subshell and high exchange energy. Option D stating [Ar] 3d⁴ 4s² is incorrect.",
        "topicId": "chem-orbital-filling",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.4"
      },
      {
        "id": "pyq-of-2",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "The number of unpaired electrons in Fe²⁺ ion (Z = 26) is:",
        "options": [
          "4",
          "5",
          "6",
          "3"
        ],
        "correctAnswer": 0,
        "explanation": "Step 1: Iron atom Fe (Z = 26): [Ar] 3d⁶ 4s².\nStep 2: For Fe²⁺ ion, remove 2 electrons from outermost 4s orbital: Fe²⁺ = [Ar] 3d⁶ 4s⁰.\nStep 3: Orbital diagram for 3d⁶: [↑↓][↑][↑][↑][↑].\nStep 4: Number of unpaired electrons = 4.",
        "topicId": "chem-orbital-filling",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.4"
      },
      {
        "id": "pyq-of-3",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "Which of the following species has the maximum number of unpaired electrons?",
        "options": [
          "Fe³⁺",
          "Fe²⁺",
          "Co²⁺",
          "Ni²⁺"
        ],
        "correctAnswer": 0,
        "explanation": "• Fe³⁺ (Z = 26): [Ar] 3d⁵ ➔ 5 unpaired electrons (half-filled d⁵).\n• Fe²⁺ (Z = 26): [Ar] 3d⁶ ➔ 4 unpaired electrons.\n• Co²⁺ (Z = 27): [Ar] 3d⁷ ➔ 3 unpaired electrons.\n• Ni²⁺ (Z = 28): [Ar] 3d⁸ ➔ 2 unpaired electrons.\nTherefore, Fe³⁺ has maximum 5 unpaired electrons.",
        "topicId": "chem-orbital-filling",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.4"
      },
      {
        "id": "pyq-of-4",
        "year": 2018,
        "exam": "NEET UG 2018",
        "question": "In which of the following pairs of orbitals, (n + l) value is the same?",
        "options": [
          "3d and 4p",
          "3p and 4s",
          "3d and 4s",
          "4s and 4p"
        ],
        "correctAnswer": 0,
        "explanation": "• For 3d: n = 3, l = 2 ➔ (n + l) = 3 + 2 = 5.\n• For 4p: n = 4, l = 1 ➔ (n + l) = 4 + 1 = 5.\nBoth 3d and 4p have identical (n + l) = 5. According to the Aufbau rule, 3d fills before 4p because 3d has lower principal quantum number n (3 < 4).",
        "topicId": "chem-orbital-filling",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.3"
      },
      {
        "id": "pyq-of-5",
        "year": 2011,
        "exam": "AIPMT 2011",
        "question": "Hund's rule is violated in which of the following orbital electronic configurations?",
        "options": [
          "1s² 2s² 2p_x² 2p_y¹ 2p_z⁰",
          "1s² 2s² 2p_x¹ 2p_y¹ 2p_z¹",
          "1s² 2s² 2p_x² 2p_y² 2p_z¹",
          "1s² 2s² 2p_x¹ 2p_y¹ 2p_z⁰"
        ],
        "correctAnswer": 0,
        "explanation": "Hund's rule states that pairing of electrons in degenerate orbitals (2p_x, 2p_y, 2p_z) does not take place until each orbital is singly occupied. In option A, 2p_x is paired (2p_x²) while 2p_z remains empty (2p_z⁰), violating Hund's rule!",
        "topicId": "chem-orbital-filling",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 2, Section 2.6.3"
      }
    ]
  },
  "chem-periodic-table-history": {
    "id": "chem-periodic-table-history",
    "title": "Modern Periodic Law & Table Layout",
    "chapterId": "periodic-classification",
    "estimatedReadTimeMinutes": 10,
    "importanceWeight": "Core Concept",
    "summary": "Modern periodic law based on atomic number Z and IUPAC nomenclature for elements Z > 100.",
    "notes": {
      "learn": [
        "Mendeleev periodic law was based on atomic mass; Modern Periodic Law states physical and chemical properties are periodic functions of atomic number Z.",
        "IUPAC naming for Z > 100 uses roots: 0=nil, 1=un, 2=bi, 3=tri, 4=quad, 5=pent, 6=hex, 7=sept, 8=oct, 9=enn."
      ],
      "keyConcepts": [
        "Mendeleev periodic law was based on atomic mass; Modern Periodic Law states physical and chemical properties are periodic functions of atomic number Z."
      ],
      "formulas": [
        {
          "title": "IUPAC Name Root",
          "formula": "Z = 101 implies Unnilunium (Unu)"
        }
      ],
      "neetImportantPoints": [
        "Modern periodic table has 7 horizontal periods and 18 vertical groups."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Modern Periodic Law & Table Layout.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Modern Periodic Law & Table Layout.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Properties depend on Z, not atomic mass"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-pth-2022",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "The IUPAC name of an element with atomic number 119 is:",
        "options": ["ununennium", "ununoctium", "ununsennium", "ununquadium"],
        "correctAnswer": 0,
        "explanation": "Atomic number 119 = 1 (un) + 1 (un) + 9 (enn) + ium = ununennium (symbol Uue).",
        "difficulty": "Easy",
        "conceptTested": "IUPAC nomenclature for elements Z > 100",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.4",
        "verified": true
      },
      {
        "id": "pyq-pth-2020",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Identify the INCORRECT match between atomic number / IUPAC name and official IUPAC name:",
        "options": ["Unnilunium (101) - Mendelevium", "Unniltrium (103) - Lawrencium", "Unnilhexium (106) - Seaborgium", "Unununnium (111) - Darmstadtium"],
        "correctAnswer": 3,
        "explanation": "Unununnium (Z = 111) is officially named Roentgenium (Rg). Darmstadtium is element 110 (Ununnilium).",
        "difficulty": "Medium",
        "conceptTested": "IUPAC nomenclature and official names for Z > 100",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Table 3.4",
        "verified": true
      },
      {
        "id": "pyq-pth-2019",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "For the element with atomic number Z = 114, its position in the modern periodic table (group and period) is:",
        "options": ["Group 14, Period 7", "Group 16, Period 7", "Group 14, Period 6", "Group 18, Period 7"],
        "correctAnswer": 0,
        "explanation": "Z = 114 has electronic configuration [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p². Highest n = 7 (Period 7), Group = 12 + 2 = 14 (Flerovium, Fl).",
        "difficulty": "Medium",
        "conceptTested": "Locating position of superheavy element Z = 114",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.5",
        "verified": true
      },
      {
        "id": "pyq-pth-2010",
        "year": 2010,
        "exam": "AIPMT 2010",
        "question": "The outer electronic configuration of an element is 3d¹⁰ 4s² 4p³. To which block, group, and period does this element belong?",
        "options": ["p-block, Group 15, Period 4", "d-block, Group 15, Period 4", "p-block, Group 13, Period 4", "s-block, Group 5, Period 4"],
        "correctAnswer": 0,
        "explanation": "Highest n = 4 (Period 4). Differentiating electron in 4p subshell (p-block). Group = 12 + 3 = 15.",
        "difficulty": "Easy",
        "conceptTested": "Group and period assignment from electronic configuration",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.5",
        "verified": true
      },
      {
        "id": "pyq-pth-2008",
        "year": 2008,
        "exam": "AIPMT 2008",
        "question": "An element has valence shell configuration 3d³ 4s². The group number and block of this element are respectively:",
        "options": ["Group 5, d-block", "Group 3, d-block", "Group 15, p-block", "Group 2, s-block"],
        "correctAnswer": 0,
        "explanation": "Differentiating electron in 3d subshell (d-block). Group number = 3 + 2 = 5.",
        "difficulty": "Easy",
        "conceptTested": "d-block group determination",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.5",
        "verified": true
      }
    ]
  },
  "chem-periodic-trends": {
    "id": "chem-periodic-trends",
    "title": "Trends in Atomic Radii & Ionization Enthalpy",
    "chapterId": "periodic-classification",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Periodic trends in atomic/ionic radii, ionization enthalpy, and electron gain enthalpy.",
    "notes": {
      "learn": [
        "Atomic radius DECREASES across a period (Z_eff increases) and INCREASES down a group.",
        "Ionization Enthalpy (IE) INCREASES across a period; exceptions: IE(Be) > IE(B) due to stable 2s² configuration, IE(N) > IE(O) due to half-filled 2p³ subshell."
      ],
      "keyConcepts": [
        "Atomic radius DECREASES across a period (Z_eff increases) and INCREASES down a group."
      ],
      "formulas": [
        {
          "title": "Ionization Enthalpy Exception",
          "formula": "IE_1(Be) > IE_1(B), quad IE_1(N) > IE_1(O)"
        }
      ],
      "neetImportantPoints": [
        "Chlorine has MORE negative electron gain enthalpy than Fluorine due to small size and high electron repulsion in 2p orbital of Fluorine."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Trends in Atomic Radii & Ionization Enthalpy.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Trends in Atomic Radii & Ionization Enthalpy.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "IE(Be)>IE(B), IE(N)>IE(O), Δ_egH(Cl) > Δ_egH(F)"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-pt-2023",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "The correct order of ionic radii for the isoelectronic species N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ and Al³⁺ is:",
        "options": ["N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺", "Al³⁺ > Mg²⁺ > Na⁺ > F⁻ > O²⁻ > N³⁻", "N³⁻ > F⁻ > O²⁻ > Na⁺ > Mg²⁺ > Al³⁺", "O²⁻ > N³⁻ > F⁻ > Mg²⁺ > Na⁺ > Al³⁺"],
        "correctAnswer": 0,
        "explanation": "Isoelectronic species with 10 electrons. Ionic radius decreases as nuclear charge Z increases.",
        "difficulty": "Easy",
        "conceptTested": "Isoelectronic ionic radius trend",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.1",
        "verified": true
      },
      {
        "id": "pyq-pt-2022",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "The correct order of first ionization enthalpy for second period elements is:",
        "options": ["Li < B < Be < C < O < N < F < Ne", "Li < Be < B < C < N < O < F < Ne", "Li < B < Be < C < N < O < Ne < F", "Li < B < Be < C < O < N < Ne < F"],
        "correctAnswer": 0,
        "explanation": "Spikes at Be (2s² filled) and N (2p³ half-filled). Order: Li < B < Be < C < O < N < F < Ne.",
        "difficulty": "Medium",
        "conceptTested": "Period 2 ionization enthalpy anomalies",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.2",
        "verified": true
      },
      {
        "id": "pyq-pt-2021",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "The size of isoelectronic species F⁻, Ne, and Na⁺ is affected by:",
        "options": ["Effective nuclear charge (Z_eff)", "Valence principal quantum number (n)", "Electron-electron repulsion only", "Nuclear mass"],
        "correctAnswer": 0,
        "explanation": "For 10-electron isoelectronic species, Effective Nuclear Charge Z_eff determines size.",
        "difficulty": "Easy",
        "conceptTested": "Factor affecting isoelectronic size",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.1",
        "verified": true
      },
      {
        "id": "pyq-pt-2020",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Which of the following elements has the highest first ionization enthalpy among B, C, N, and O?",
        "options": ["Nitrogen (N)", "Oxygen (O)", "Carbon (C)", "Boron (B)"],
        "correctAnswer": 0,
        "explanation": "Nitrogen ([He] 2s² 2p³) has a stable half-filled 2p³ subshell, giving it highest IE₁ (1402 kJ/mol).",
        "difficulty": "Easy",
        "conceptTested": "Half-filled 2p3 stability impact on IE",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.2",
        "verified": true
      },
      {
        "id": "pyq-pt-2019",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "Identify the correct order of atomic radii for Group 13 elements:",
        "options": ["B < Ga < Al < In < Tl", "B < Al < Ga < In < Tl", "B < Al < In < Ga < Tl", "B < Ga < In < Al < Tl"],
        "correctAnswer": 0,
        "explanation": "Ga (135 pm) is smaller than Al (143 pm) due to poor shielding by 10 inner 3d electrons.",
        "difficulty": "Medium",
        "conceptTested": "Group 13 atomic radius anomaly",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.1",
        "verified": true
      },
      {
        "id": "pyq-pt-2017",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "The species Ar, K⁺, and Ca²⁺ contain the same number of electrons. In which order do their radii increase?",
        "options": ["Ca²⁺ < K⁺ < Ar", "Ar < K⁺ < Ca²⁺", "K⁺ < Ca²⁺ < Ar", "Ca²⁺ < Ar < K⁺"],
        "correctAnswer": 0,
        "explanation": "Isoelectronic series (18 electrons). As Z increases, radius decreases: Ca²⁺ < K⁺ < Ar.",
        "difficulty": "Easy",
        "conceptTested": "Isoelectronic radius order 18-electron series",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.1",
        "verified": true
      },
      {
        "id": "pyq-pt-2016",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "The correct order of atomic radii for Mg, Al, Na, and K is:",
        "options": ["Al < Mg < Na < K", "Mg < Al < Na < K", "Na < K < Mg < Al", "K < Na < Mg < Al"],
        "correctAnswer": 0,
        "explanation": "Across Period 3: Al < Mg < Na. K is in Period 4 and is largest.",
        "difficulty": "Medium",
        "conceptTested": "Comparing period and group atomic radius trends",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.1",
        "verified": true
      },
      {
        "id": "pyq-pt-2015",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "Which of the following orders of ionic radii is correctly represented?",
        "options": ["Na⁺ > Mg²⁺ > Al³⁺ and F⁻ < O²⁻ < N³⁻", "Na⁺ < Mg²⁺ < Al³⁺", "N³⁻ < O²⁻ < F⁻", "Na⁺ > F⁻ > O²⁻"],
        "correctAnswer": 0,
        "explanation": "Cations: Na⁺ > Mg²⁺ > Al³⁺. Anions: F⁻ < O²⁻ < N³⁻.",
        "difficulty": "Medium",
        "conceptTested": "Isoelectronic ionic size comparisons",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.1",
        "verified": true
      },
      {
        "id": "pyq-pt-2012",
        "year": 2012,
        "exam": "AIPMT 2012",
        "question": "Which of the following elements has the highest negative electron gain enthalpy?",
        "options": ["Chlorine (Cl)", "Fluorine (F)", "Bromine (Br)", "Iodine (I)"],
        "correctAnswer": 0,
        "explanation": "Chlorine (-349 kJ/mol) has a more negative electron gain enthalpy than Fluorine (-328 kJ/mol).",
        "difficulty": "Easy",
        "conceptTested": "Halogen electron gain enthalpy anomaly",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.3",
        "verified": true
      },
      {
        "id": "pyq-pt-2010",
        "year": 2010,
        "exam": "AIPMT 2010",
        "question": "Among the isoelectronic species S²⁻, Cl⁻, K⁺, and Ca²⁺, the correct order of decreasing ionic size is:",
        "options": ["S²⁻ > Cl⁻ > K⁺ > Ca²⁺", "Ca²⁺ > K⁺ > Cl⁻ > S²⁻", "Cl⁻ > S²⁻ > Ca²⁺ > K⁺", "K⁺ > Ca²⁺ > S²⁻ > Cl⁻"],
        "correctAnswer": 0,
        "explanation": "Isoelectronic species with 18 electrons. Radius decreases as Z increases: S²⁻ > Cl⁻ > K⁺ > Ca²⁺.",
        "difficulty": "Easy",
        "conceptTested": "Isoelectronic radius decreasing order",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.1",
        "verified": true
      }
    ]
  },
  "chem-electronegativity-valency": {
    "id": "chem-electronegativity-valency",
    "title": "Electronegativity & Valency Trends",
    "chapterId": "periodic-classification",
    "estimatedReadTimeMinutes": 12,
    "importanceWeight": "High Yield",
    "summary": "Pauling scale of electronegativity and oxidation states across periodic table.",
    "notes": {
      "learn": [
        "Electronegativity increases across a period and decreases down a group. Fluorine is the most electronegative element (4.0 on Pauling scale).",
        "Valency with respect to hydrogen increases 1 to 4 then decreases to 1; with oxygen increases 1 to 7."
      ],
      "keyConcepts": [
        "Electronegativity increases across a period and decreases down a group. Fluorine is the most electronegative element (4.0 on Pauling scale)."
      ],
      "formulas": [
        {
          "title": "Pauling Electronegativity",
          "formula": "F = 4.0, quad O = 3.5, quad N = Cl = 3.0"
        }
      ],
      "neetImportantPoints": [
        "Anomalous behavior of second period elements (Li, Be, B, C, N, O, F) due to small size, high electronegativity, and absence of d-orbitals."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Electronegativity & Valency Trends.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Electronegativity & Valency Trends.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Fluorine highest EN = 4.0"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-ev-2023",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "Which of the following oxides is amphoteric in nature?",
        "options": ["Al₂O₃", "Na₂O", "SO₃", "CO₂"],
        "correctAnswer": 0,
        "explanation": "Al₂O₃ is an amphoteric oxide reacting with both acids and bases.",
        "difficulty": "Easy",
        "conceptTested": "Amphoteric oxide identification",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.4",
        "verified": true
      },
      {
        "id": "pyq-ev-2021",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Which of the following is a neutral oxide?",
        "options": ["CO", "CO₂", "SnO₂", "SiO₂"],
        "correctAnswer": 0,
        "explanation": "CO is a neutral oxide.",
        "difficulty": "Easy",
        "conceptTested": "Neutral oxide identification",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.4",
        "verified": true
      },
      {
        "id": "pyq-ev-2019",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "Match the oxides in Column I with their chemical nature in Column II: (a) CO - Neutral, (b) BaO - Basic, (c) Al₂O₃ - Amphoteric, (d) Cl₂O₇ - Acidic.",
        "options": ["(a)-II, (b)-I, (c)-IV, (d)-III", "(a)-I, (b)-II, (c)-III, (d)-IV", "(a)-III, (b)-IV, (c)-I, (d)-II", "(a)-IV, (b)-III, (c)-II, (d)-I"],
        "correctAnswer": 0,
        "explanation": "CO (Neutral), BaO (Basic), Al₂O₃ (Amphoteric), Cl₂O₇ (Acidic).",
        "difficulty": "Medium",
        "conceptTested": "Matching oxide chemical nature",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.4",
        "verified": true
      },
      {
        "id": "pyq-ev-2017",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "The electronegativity of elements Fluorine (F), Chlorine (Cl), Bromine (Br), and Iodine (I) on the Pauling scale follows the decreasing order:",
        "options": ["F > Cl > Br > I", "I > Br > Cl > F", "Cl > F > Br > I", "F > Br > Cl > I"],
        "correctAnswer": 0,
        "explanation": "Electronegativity decreases down Group 17: F (4.0) > Cl (3.0) > Br (2.8) > I (2.5).",
        "difficulty": "Easy",
        "conceptTested": "Halogen electronegativity group trend",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.3",
        "verified": true
      },
      {
        "id": "pyq-ev-2014",
        "year": 2014,
        "exam": "AIPMT 2014",
        "question": "Which of the following oxides is expected to be the MOST acidic?",
        "options": ["Cl₂O₇", "SO₃", "P₄O₁₀", "Al₂O₃"],
        "correctAnswer": 0,
        "explanation": "Acidic strength increases with non-metal electronegativity and oxidation state (+7 for Cl in Cl₂O₇).",
        "difficulty": "Medium",
        "conceptTested": "Comparing acidic strength of non-metal oxides",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.4",
        "verified": true
      },
      {
        "id": "pyq-ev-2009",
        "year": 2009,
        "exam": "AIPMT 2009",
        "question": "Among the elements with atomic numbers Z = 9, 11, 12, and 13, which element possesses the highest electronegativity?",
        "options": ["Z = 9 (Fluorine)", "Z = 11 (Sodium)", "Z = 12 (Magnesium)", "Z = 13 (Aluminium)"],
        "correctAnswer": 0,
        "explanation": "Z = 9 (Fluorine) has highest electronegativity (4.0) in the periodic table.",
        "difficulty": "Easy",
        "conceptTested": "Highest electronegativity element identification",
        "ncertReference": "Class 11 Chemistry, Chapter 3, Section 3.7.3",
        "verified": true
      }
    ]
  },
  "chem-ionic-covalent-bonds": {
    "id": "chem-ionic-covalent-bonds",
    "title": "Ionic Bonding, Lattice Enthalpy & Fajan's Rules",
    "chapterId": "chemical-bonding",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Formation of ionic lattice, Born-Haber cycle, and covalent character via Fajan's rules.",
    "notes": {
      "learn": [
        "Ionic bond is favored by low IE of metal, high negative electron gain enthalpy of non-metal, and high Lattice Enthalpy.",
        "Fajan's Rules: Covalent character increases with SMALL cation, LARGE anion, and pseudo-noble gas configuration (18 electrons in outer shell)."
      ],
      "keyConcepts": [
        "Ionic bond is favored by low IE of metal, high negative electron gain enthalpy of non-metal, and high Lattice Enthalpy."
      ],
      "formulas": [
        {
          "title": "Fajan's Rule Covalent Character",
          "formula": "Covalent Character propto Polarizing Power of Cation / Polarizability of Anion"
        }
      ],
      "neetImportantPoints": [
        "LiCl is more soluble in organic solvents than NaCl because Li⁺ small size imparts significant covalent character."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Ionic Bonding, Lattice Enthalpy & Fajan's Rules.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Ionic Bonding, Lattice Enthalpy & Fajan's Rules.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Small cation + Large anion = High covalent character"
      ]
    },
    "pyqs": []
  },
  "chem-vsepr-theory": {
    "id": "chem-vsepr-theory",
    "title": "VSEPR Theory & Molecular Geometry",
    "chapterId": "chemical-bonding",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Predicting shapes and bond angles of molecules using electron pair repulsion principles.",
    "notes": {
      "learn": [
        "Repulsion order: Lone Pair - Lone Pair (lp-lp) > Lone Pair - Bond Pair (lp-bp) > Bond Pair - Bond Pair (bp-bp).",
        "NH3 has 3 bp + 1 lp -> Trigonal Pyramidal (107°); H2O has 2 bp + 2 lp -> Bent/V-shape (104.5°); SF4 has 4 bp + 1 lp -> See-saw."
      ],
      "keyConcepts": [
        "Repulsion order: Lone Pair - Lone Pair (lp-lp) > Lone Pair - Bond Pair (lp-bp) > Bond Pair - Bond Pair (bp-bp)."
      ],
      "formulas": [
        {
          "title": "VSEPR Repulsion Order",
          "formula": "lp-lp > lp-bp > bp-bp"
        }
      ],
      "neetImportantPoints": [
        "XeF2 has 2 bp + 3 lp (5 steric number, sp³d) with LINEAR geometry because lone pairs occupy equatorial positions."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in VSEPR Theory & Molecular Geometry.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for VSEPR Theory & Molecular Geometry.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "NH3 = Pyramidal, H2O = Bent, SF4 = See-saw, XeF2 = Linear"
      ]
    },
    "pyqs": []
  },
  "chem-hybridization": {
    "id": "chem-hybridization",
    "title": "Hybridization (sp, sp^2, sp^3, sp^3d, sp^3d^2)",
    "chapterId": "chemical-bonding",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Intermixing of atomic orbitals, steric number rule, and geometries.",
    "notes": {
      "learn": [
        "Steric Number = (Number of σ bonds) + (Number of lone pairs on central atom).",
        "Steric 2 = sp (Linear, 180°); 3 = sp² (Trigonal Planar, 120°); 4 = sp³ (Tetrahedral, 109.5°); 5 = sp³d (Trigonal Bipyramidal); 6 = sp³d² (Octahedral)."
      ],
      "keyConcepts": [
        "Steric Number = (Number of σ bonds) + (Number of lone pairs on central atom)."
      ],
      "formulas": [
        {
          "title": "Steric Number Formula",
          "formula": "H = 1 / 2 [V + M - C + A]"
        }
      ],
      "neetImportantPoints": [
        "PCl5 has sp³d hybridization with 3 equatorial bonds (shorter, stronger) and 2 axial bonds (longer, weaker)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Hybridization (sp, sp^2, sp^3, sp^3d, sp^3d^2).",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Hybridization (sp, sp^2, sp^3, sp^3d, sp^3d^2).",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "sp³d axial bonds are longer than equatorial"
      ]
    },
    "pyqs": []
  },
  "chem-mot-theory": {
    "id": "chem-mot-theory",
    "title": "Molecular Orbital Theory (MOT) & Bond Order",
    "chapterId": "chemical-bonding",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Linear Combination of Atomic Orbitals (LCAO), bonding/antibonding MOs, and bond order.",
    "notes": {
      "learn": [
        "Bond Order = 1/2 (N_b - N_a). Higher bond order = Higher bond dissociation energy and Shorter bond length.",
        "Electronic configuration for N2 (≤ 14 e⁻): σ1s σ*1s σ2s σ*2s (π2px = π2py) σ2pz. For O2 (> 14 e⁻): σ2pz comes BEFORE π2px/π2py."
      ],
      "keyConcepts": [
        "Bond Order = 1/2 (N_b - N_a). Higher bond order = Higher bond dissociation energy and Shorter bond length."
      ],
      "formulas": [
        {
          "title": "Bond Order Formula",
          "formula": "Bond Order = (N_b - N_a) / 2"
        }
      ],
      "neetImportantPoints": [
        "O2 molecule is PARAMAGNETIC with 2 unpaired electrons in π*2px and π*2py antibonding orbitals."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Molecular Orbital Theory (MOT) & Bond Order.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Molecular Orbital Theory (MOT) & Bond Order.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "O2 is paramagnetic, Bond Order = 1/2(Nb - Na)"
      ]
    },
    "pyqs": []
  },
  "chem-hydrogen-bonding": {
    "id": "chem-hydrogen-bonding",
    "title": "Hydrogen Bonding & Intermolecular Forces",
    "chapterId": "chemical-bonding",
    "estimatedReadTimeMinutes": 12,
    "importanceWeight": "High Yield",
    "summary": "Intermolecular vs intramolecular hydrogen bonding and physical state anomalies.",
    "notes": {
      "learn": [
        "Hydrogen bonding occurs when H is attached to highly electronegative atoms (F, O, N).",
        "Intermolecular H-bonding increases boiling point and solubility in water (e.g., Ethanol, p-nitrophenol). Intramolecular H-bonding decreases boiling point (e.g., o-nitrophenol is steam volatile)."
      ],
      "keyConcepts": [
        "Hydrogen bonding occurs when H is attached to highly electronegative atoms (F, O, N)."
      ],
      "formulas": [
        {
          "title": "H-Bonding Condition",
          "formula": "H atom attached to F, O, or N"
        }
      ],
      "neetImportantPoints": [
        "o-nitrophenol is steam volatile due to intramolecular H-bonding; p-nitrophenol has higher boiling point due to intermolecular H-bonding."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Hydrogen Bonding & Intermolecular Forces.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Hydrogen Bonding & Intermolecular Forces.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "o-nitrophenol = intramolecular (steam volatile)"
      ]
    },
    "pyqs": []
  },
  "chem-first-law-thermo": {
    "id": "chem-first-law-thermo",
    "title": "First Law of Thermodynamics & Enthalpy",
    "chapterId": "thermodynamics-chem",
    "estimatedReadTimeMinutes": 22,
    "importanceWeight": "High Yield",
    "summary": "System/surroundings, thermodynamic processes, internal energy U, First Law ΔU = q + w, PV work w = −P_ext ΔV, heat capacity (Cp, Cv), enthalpy H = U + PV, ΔH = ΔU + Δn_g RT, and calorimetry.",
    "notes": {
      "learn": [
        "Systems: Open (mass & energy exchange), Closed (energy only), Isolated (neither mass nor energy).",
        "State Functions (independent of path): U, H, S, G, T, P, V. Path Functions (depend on path): Heat (q) and Work (w).",
        "Intensive (scale-independent): T, P, density, molar heat capacity. Extensive (scale-dependent): Mass, V, U, H, S, G, heat capacity C.",
        "First Law of Thermodynamics: Conservation of energy: ΔU = q + w. IUPAC Sign Conventions: Heat absorbed by system (q > 0, +ve), Heat released (q < 0, -ve); Work done ON system/compression (w > 0, +ve), Work done BY system/expansion (w < 0, -ve).",
        "Pressure-Volume Work: Irreversible w = −P_ext ΔV. Reversible Isothermal Work w_rev = −2.303 nRT log₁₀(V₂/V₁). Free Expansion in vacuum (P_ext = 0) ➔ w = 0.",
        "Heat Capacities: q = m c ΔT = n C ΔT. Constant volume q_v = ΔU = n C_v ΔT. Constant pressure q_p = ΔH = n C_p ΔT. Mayer's Relation: C_p − C_v = R.",
        "Enthalpy (H = U + PV): Heat change at constant pressure (q_p = ΔH). Gas Reaction Relation: ΔH = ΔU + Δn_g RT (where Δn_g = moles of gaseous products − moles of gaseous reactants)."
      ],
      "keyConcepts": [
        "Isothermal process for ideal gas: ΔT = 0 ➔ ΔU = 0, ΔH = 0 ➔ q = −w.",
        "Adiabatic process: q = 0 ➔ ΔU = w = −P_ext ΔV.",
        "Isochoric process: ΔV = 0 ➔ w = 0 ➔ ΔU = q_v.",
        "Isobaric process: ΔP = 0 ➔ q_p = ΔH = ΔU + P ΔV.",
        "Free Expansion (P_ext = 0): w = 0; for ideal gas under adiabatic free expansion, q = 0, w = 0, ΔU = 0, ΔT = 0 (Isothermal)."
      ],
      "formulas": [
        {
          "title": "First Law of Thermodynamics",
          "formula": "Delta U = q + w"
        },
        {
          "title": "Irreversible PV Work",
          "formula": "w = - P_{ext} Delta V = - P_{ext} (V_2 - V_1)"
        },
        {
          "title": "Reversible Isothermal Work",
          "formula": "w_{rev} = - 2.303 n R T log_{10}(V_2 / V_1) = - 2.303 n R T log_{10}(P_1 / P_2)"
        },
        {
          "title": "Enthalpy Definition",
          "formula": "H = U + P V"
        },
        {
          "title": "Gaseous Reaction Enthalpy Relation",
          "formula": "Delta H = Delta U + Delta n_g R T"
        },
        {
          "title": "Mayer's Relation",
          "formula": "C_p - C_v = R"
        },
        {
          "title": "Heat Capacities",
          "formula": "q_v = Delta U = n C_v Delta T | q_p = Delta H = n C_p Delta T"
        }
      ],
      "neetImportantPoints": [
        "Work done BY the system (expansion) is NEGATIVE (w < 0); work done ON the system (compression) is POSITIVE (w > 0).",
        "For ideal gas isothermal process: ΔU = 0 and ΔH = 0 strictly.",
        "In free expansion against vacuum (P_ext = 0), work done w = 0 always.",
        "In gaseous reactions: If Δn_g = 0 ➔ ΔH = ΔU; If Δn_g > 0 ➔ ΔH > ΔU; If Δn_g < 0 ➔ ΔH < ΔU.",
        "In bomb calorimeter (constant volume), measured heat is q_v = ΔU. In coffee-cup calorimeter (constant pressure), measured heat is q_p = ΔH."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Mixing up physics and chemistry sign conventions for work.",
          "correctFact": "In Chemistry (IUPAC): w = −P_ext ΔV (compression is +ve, expansion is −ve). In Physics: W = +P ΔV.",
          "whyItMattersForNEET": "Vital for correct sign selection in NEET Chemistry numericals."
        },
        {
          "commonConfusion": "Including liquids and solids when calculating Δn_g.",
          "correctFact": "Δn_g = (moles of GASEOUS products) − (moles of GASEOUS reactants). Ignore pure solids (s) and liquids (l)!",
          "whyItMattersForNEET": "Common numerical trap in ΔH = ΔU + Δn_g RT questions."
        }
      ],
      "quickRevision": [
        "ΔU = q + w",
        "w = −P_ext ΔV",
        "w_rev = −2.303 nRT log(V₂/V₁)",
        "ΔH = ΔU + Δn_g RT",
        "q_v = ΔU = n C_v ΔT",
        "q_p = ΔH = n C_p ΔT",
        "C_p − C_v = R",
        "Vacuum (P_ext = 0) ➔ w = 0"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-fl-1",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "An ideal gas expands isothermally from 10⁻³ m³ to 10⁻² m³ at 300 K against a constant pressure of 10⁵ N m⁻². The work done on the gas is:",
        "options": [
          "−900 J",
          "+900 J",
          "−2700 J",
          "+2700 J"
        ],
        "correctAnswer": 0,
        "explanation": "Work done w = −P_ext ΔV = −(10⁵ N m⁻²) × (10⁻² m³ − 10⁻³ m³) = −10⁵ × (0.01 − 0.001) = −10⁵ × 0.009 = −900 J.",
        "topicId": "chem-first-law-thermo",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.2.2"
      },
      {
        "id": "pyq-fl-2",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "Under isothermal condition, a gas at 300 K expands from 0.1 L to 0.25 L against a constant external pressure of 2 bar. The work done by the gas is: (Given 1 L bar = 100 J)",
        "options": [
          "−30 J",
          "+30 J",
          "−50 J",
          "+50 J"
        ],
        "correctAnswer": 0,
        "explanation": "w = −P_ext (V₂ − V₁) = −(2 bar) × (0.25 L − 0.10 L) = −2 × 0.15 = −0.30 L bar.\nConverting to Joules: w = −0.30 × 100 J = −30 J.",
        "topicId": "chem-first-law-thermo",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.2.2"
      },
      {
        "id": "pyq-fl-3",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "For the reaction C₃H₈(g) + 5 O₂(g) ➔ 3 CO₂(g) + 4 H₂O(l) at 298 K, ΔH − ΔU is equal to:",
        "options": [
          "−3 RT",
          "+3 RT",
          "−2 RT",
          "+2 RT"
        ],
        "correctAnswer": 0,
        "explanation": "Formula: ΔH = ΔU + Δn_g RT ➔ ΔH − ΔU = Δn_g RT.\nCalculate Δn_g = (moles of gaseous products) − (moles of gaseous reactants).\nProducts: 3 CO₂(g) [H₂O is liquid!]. Reactants: 1 C₃H₈(g) + 5 O₂(g) = 6 moles gas.\nΔn_g = 3 − (1 + 5) = 3 − 6 = −3.\nTherefore, ΔH − ΔU = −3 RT.",
        "topicId": "chem-first-law-thermo",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.3.2"
      },
      {
        "id": "pyq-fl-4",
        "year": 2011,
        "exam": "AIPMT 2011",
        "question": "Which of the following conditions is correct for an ideal gas undergoing an adiabatic expansion against vacuum?",
        "options": [
          "q = 0, ΔT ≠ 0, w = 0",
          "q ≠ 0, ΔT = 0, w = 0",
          "q = 0, ΔT = 0, w = 0",
          "q = 0, ΔT < 0, w ≠ 0"
        ],
        "correctAnswer": 2,
        "explanation": "1. Adiabatic process ➔ q = 0.\n2. Expansion against vacuum (P_ext = 0) ➔ w = −P_ext ΔV = 0.\n3. By First Law: ΔU = q + w = 0 + 0 = 0.\n4. For an ideal gas, ΔU = n C_v ΔT = 0 ➔ ΔT = 0.\nTherefore: q = 0, ΔT = 0, w = 0.",
        "topicId": "chem-first-law-thermo",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.2.3"
      },
      {
        "id": "pyq-fl-5",
        "year": 2014,
        "exam": "AIPMT 2014",
        "question": "For a reversible adiabatic expansion of an ideal gas, the value of ΔU is:",
        "options": [
          "w",
          "q",
          "q + w",
          "0"
        ],
        "correctAnswer": 0,
        "explanation": "By First Law of Thermodynamics: ΔU = q + w.\nFor an adiabatic process, heat exchange q = 0.\nTherefore, ΔU = 0 + w = w.",
        "topicId": "chem-first-law-thermo",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.2.3"
      }
    ]
  },
  "chem-enthalpies-reaction": {
    "id": "chem-enthalpies-reaction",
    "title": "Enthalpy Changes & Hess's Law",
    "chapterId": "thermodynamics-chem",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Thermochemical equations, Hess's Law of constant heat summation, standard enthalpies of formation, combustion, atomization, bond enthalpy, neutralization, phase transitions, and calorimetry calculations.",
    "notes": {
      "learn": [
        "Exothermic reactions release heat (ΔH < 0); Endothermic reactions absorb heat (ΔH > 0).",
        "Thermochemical equations include balanced coefficients, physical states (s, l, g, aq), and corresponding enthalpy change ΔH.",
        "Reversing a chemical equation reverses the sign of ΔH (+ to - or vice versa). Multiplying stoichiometric coefficients by factor n multiplies ΔH by n.",
        "Hess's Law of Constant Heat Summation: Total enthalpy change of a reaction is independent of the pathway or intermediate steps (ΔH_overall = ΔH₁ + ΔH₂ + ...).",
        "Standard Enthalpy of Formation (Δ_f H°): Enthalpy change when 1 mole of a compound is formed from its constituent elements in their standard reference states. Δ_f H° = 0 for elements in their standard state (e.g., O₂(g), C(graphite), H₂(g)).",
        "Reaction Enthalpy from Formation Enthalpies: Δ_r H° = Σ [n × Δ_f H°(products)] − Σ [m × Δ_f H°(reactants)].",
        "Bond Enthalpy relation for gaseous reactions: Δ_r H° ≈ Σ [Bond Enthalpies of Bonds Broken] − Σ [Bond Enthalpies of Bonds Formed].",
        "Enthalpy of Neutralization (Strong Acid + Strong Base): Constant value of −57.1 kJ mol⁻¹ (formation of 1 mole H₂O(l)).",
        "Phase Transitions: Δ_sub H° = Δ_fus H° + Δ_vap H°."
      ],
      "keyConcepts": [
        "Hess's Law allows calculation of unknown enthalpy changes by combining known thermochemical equations as state functions.",
        "Standard state refers to pure substance at 1 bar pressure and 298 K.",
        "Standard enthalpy of formation of C(graphite) is 0, but C(diamond) is +1.9 kJ mol⁻¹.",
        "Combustion reactions are always exothermic (Δ_c H° < 0).",
        "Enthalpy of atomization (Δ_a H°) is always endothermic (Δ_a H° > 0)."
      ],
      "formulas": [
        {
          "title": "Reaction Enthalpy from Formation Enthalpies",
          "formula": "Delta_r H^circ = sum n Delta_f H^circ(Products) - sum m Delta_f H^circ(Reactants)"
        },
        {
          "title": "Bond Enthalpy Relation",
          "formula": "Delta_r H^circ = sum B.E.(Bonds Broken) - sum B.E.(Bonds Formed)"
        },
        {
          "title": "Hess's Law Combination",
          "formula": "Delta H_{overall} = Delta H_1 + Delta H_2 + Delta H_3 + ..."
        },
        {
          "title": "Phase Transition Sublimation Relation",
          "formula": "Delta_{sub} H^circ = Delta_{fus} H^circ + Delta_{vap} H^circ"
        },
        {
          "title": "Neutralization Net Ionic Reaction",
          "formula": "H^+(aq) + OH^-(aq) -> H_2O(l), Delta H = -57.1 kJ mol^{-1}"
        }
      ],
      "neetImportantPoints": [
        "Always pay attention to physical states in thermochemical equations: H₂O(l) and H₂O(g) have different enthalpy values!",
        "Standard enthalpy of formation refers to formation of ONE MOLE of compound from its elements in standard states.",
        "Bond breaking requires energy (+ve, endothermic); bond formation releases energy (−ve, exothermic).",
        "For weak acid or weak base, heat of neutralization is numerically LESS than 57.1 kJ mol⁻¹ because part of the heat is consumed in ionisation.",
        "Combustion enthalpy is defined for ONE MOLE of substance completely burned in excess oxygen."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming standard enthalpy of formation of ALL elemental allotropes is zero.",
          "correctFact": "Δ_f H° is ZERO ONLY for the most stable reference state of an element (e.g., C(graphite) = 0, but C(diamond) = +1.9 kJ/mol; S(rhombic) = 0, but S(monoclinic) ≠ 0).",
          "whyItMattersForNEET": "Frequently tested conceptual question in NEET."
        },
        {
          "commonConfusion": "Mixing up Reactants and Products in Bond Enthalpy vs Formation Enthalpy formulas.",
          "correctFact": "From Δ_f H°: ΔH = Products − Reactants. From Bond Enthalpies: ΔH = Reactants (Bonds Broken) − Products (Bonds Formed)!",
          "whyItMattersForNEET": "Reversing reactant and product order flips the sign of ΔH in NEET numericals."
        }
      ],
      "quickRevision": [
        "Δ_r H° = Σ Δ_f H°(products) − Σ Δ_f H°(reactants)",
        "Δ_r H° = Σ B.E.(reactants) − Σ B.E.(products)",
        "Hess's Law: Path independent, ΔH_overall = ΔH₁ + ΔH₂",
        "Δ_f H°[element in standard state] = 0 (C_graphite = 0)",
        "Strong Acid + Strong Base Neutralization = −57.1 kJ mol⁻¹",
        "Δ_sub H° = Δ_fus H° + Δ_vap H°"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-eh-1",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "The correct option for the value of standard enthalpy of formation (Δ_f H°) of N₂(g), H₂(g) and C(graphite) at 298 K is:",
        "options": [
          "0, 0, 0",
          "0, 218, 0",
          "218, 0, 0",
          "218, 218, 218"
        ],
        "correctAnswer": 0,
        "explanation": "By IUPAC convention, the standard enthalpy of formation (Δ_f H°) of an element in its most stable reference standard state at 298 K and 1 bar is defined as ZERO.\nTherefore, Δ_f H° for N₂(g), H₂(g), and C(graphite) are all equal to 0.",
        "topicId": "chem-enthalpies-reaction",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.4"
      },
      {
        "id": "pyq-eh-2",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "For the reaction C(graphite) + O₂(g) ➔ CO₂(g), ΔH = −393.5 kJ mol⁻¹. The enthalpy change upon formation of 35.2 g of CO₂(g) from carbon and oxygen gas is:",
        "options": [
          "−314.8 kJ",
          "+314.8 kJ",
          "−393.5 kJ",
          "−787.0 kJ"
        ],
        "correctAnswer": 0,
        "explanation": "1. Molar mass of CO₂ = 12 + 2(16) = 44 g mol⁻¹.\n2. Formation of 1 mole (44 g) of CO₂ releases 393.5 kJ (ΔH = −393.5 kJ).\n3. Moles of 35.2 g CO₂ = 35.2 / 44 = 0.8 mol.\n4. Enthalpy change = 0.8 mol × (−393.5 kJ mol⁻¹) = −314.8 kJ.",
        "topicId": "chem-enthalpies-reaction",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.4.1"
      },
      {
        "id": "pyq-eh-3",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "If the bond dissociation energies of XY, X₂ and Y₂ (all diatomic molecules) are in the ratio 1 : 1 : 0.5 and ΔH for the formation of XY from X₂ and Y₂ is −200 kJ mol⁻¹, the bond dissociation energy of X₂ will be:",
        "options": [
          "400 kJ mol⁻¹",
          "800 kJ mol⁻¹",
          "200 kJ mol⁻¹",
          "100 kJ mol⁻¹"
        ],
        "correctAnswer": 1,
        "explanation": "Reaction: 0.5 X₂(g) + 0.5 Y₂(g) ➔ XY(g), ΔH = −200 kJ mol⁻¹.\nLet bond dissociation energy of XY = x.\nThen B.E.(X₂) = x, and B.E.(Y₂) = 0.5x.\nFormula: ΔH = [0.5 B.E.(X₂) + 0.5 B.E.(Y₂)] − [B.E.(XY)]\n−200 = [0.5(x) + 0.5(0.5x)] − [x]\n−200 = 0.75x − x = −0.25x\n0.25x = 200 ➔ x = 800 kJ mol⁻¹.\nTherefore, B.E. of X₂ = x = 800 kJ mol⁻¹.",
        "topicId": "chem-enthalpies-reaction",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.4.2"
      },
      {
        "id": "pyq-eh-4",
        "year": 2010,
        "exam": "AIPMT 2010",
        "question": "Standard enthalpies of formation of O₃, CO, NH₃ and HI are +142.2, −110.5, −46.1 and +25.9 kJ mol⁻¹ respectively. The order of their increasing stability is:",
        "options": [
          "O₃ < HI < NH₃ < CO",
          "CO < NH₃ < HI < O₃",
          "NH₃ < HI < CO < O₃",
          "O₃ < CO < NH₃ < HI"
        ],
        "correctAnswer": 0,
        "explanation": "Stability of a compound is inversely related to its standard enthalpy of formation (Δ_f H°). More negative (exothermic) formation enthalpy signifies greater thermodynamic stability.\nΔ_f H° values in increasing order: CO (−110.5) < NH₃ (−46.1) < HI (+25.9) < O₃ (+142.2).\nTherefore, stability order: O₃ < HI < NH₃ < CO.",
        "topicId": "chem-enthalpies-reaction",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.4.1"
      },
      {
        "id": "pyq-eh-5",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "The heat of neutralization of a strong acid and a strong base is −57.1 kJ mol⁻¹. The heat evolved when 0.5 mole of HNO₃ is mixed with 0.2 mole of NaOH in aqueous solution is:",
        "options": [
          "11.42 kJ",
          "28.55 kJ",
          "57.1 kJ",
          "22.84 kJ"
        ],
        "correctAnswer": 0,
        "explanation": "Reaction: HNO₃ + NaOH ➔ NaNO₃ + H₂O.\nLimiting reagent is NaOH (0.2 mol), which reacts with 0.2 mol HNO₃ to form 0.2 mol H₂O.\nHeat evolved = 0.2 mol × 57.1 kJ mol⁻¹ = 11.42 kJ.",
        "topicId": "chem-enthalpies-reaction",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.4.3"
      }
    ]
  },
  "chem-second-law-entropy": {
    "id": "chem-second-law-entropy",
    "title": "Entropy, Gibbs Free Energy & Spontaneity",
    "chapterId": "thermodynamics-chem",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Comprehensive treatment of Entropy (S), Second Law of Thermodynamics, Gibbs Free Energy (ΔG = ΔH − TΔS), Spontaneity criteria, and Equilibrium Constant relation ΔG° = −2.303 RT log K.",
    "notes": {
      "learn": [
        "Entropy (S) is a state function measuring degree of randomness/disorder in a system. SI unit: J K⁻¹ mol⁻¹.",
        "Second Law of Thermodynamics: For any spontaneous (natural) process, the total entropy of the universe increases: ΔS_universe = ΔS_system + ΔS_surroundings > 0.",
        "Gibbs Free Energy Equation: ΔG = ΔH − TΔS. Spontaneity criteria at constant T & P: ΔG < 0 (spontaneous), ΔG > 0 (non-spontaneous), ΔG = 0 (equilibrium).",
        "Effect of ΔH and ΔS on spontaneity: Exothermic (ΔH < 0) with increased entropy (ΔS > 0) is spontaneous at ALL temperatures. Endothermic (ΔH > 0) with increased entropy (ΔS > 0) is spontaneous ONLY at high temperatures (T > ΔH/ΔS).",
        "Relationship between ΔG° and Equilibrium Constant K: ΔG° = −RT ln K = −2.303 RT log K. K > 1 implies ΔG° < 0 (products favored at equilibrium)."
      ],
      "keyConcepts": [
        "Entropy as a state function and measure of energy dispersal",
        "Second Law of Thermodynamics and Universe Entropy Criterion",
        "Gibbs Free Energy ΔG = ΔH − TΔS as the ultimate criterion for spontaneity",
        "Four cases of ΔH & ΔS temperature dependence for spontaneity",
        "Temperature condition for spontaneity: T = ΔH / ΔS crossover boundary",
        "Standard Gibbs Energy of Formation ΔG°_f and reaction Gibbs energy ΔG°",
        "Standard Gibbs Free Energy relation with Equilibrium Constant: ΔG° = −2.303 RT log K"
      ],
      "formulas": [
        {
          "title": "Reaction Entropy Change Formula",
          "formula": "Delta_r S^circ = sum n_p S^circ(Products) - sum n_r S^circ(Reactants)"
        },
        {
          "title": "Total Entropy of Universe (Second Law)",
          "formula": "Delta S_{universe} = Delta S_{system} + Delta S_{surroundings}"
        },
        {
          "title": "Gibbs Free Energy Equation",
          "formula": "Delta G = Delta H - T Delta S"
        },
        {
          "title": "Standard Reaction Gibbs Energy Formula",
          "formula": "Delta_r G^circ = sum n_p Delta_f G^circ(Products) - sum n_r Delta_f G^circ(Reactants)"
        },
        {
          "title": "Gibbs Free Energy and Equilibrium Constant Relation",
          "formula": "Delta G^circ = - 2.303 R T log_{10} K"
        }
      ],
      "neetImportantPoints": [
        "Always convert temperature T into Kelvin (K = °C + 273.15) before applying ΔG = ΔH − TΔS.",
        "Match energy units carefully! ΔH is usually given in kJ mol⁻¹ while ΔS is in J K⁻¹ mol⁻¹. Always divide ΔS by 1000 to convert to kJ K⁻¹ mol⁻¹ (or multiply ΔH by 1000 to get Joules).",
        "Spontaneous process (ΔG < 0) indicates thermodynamic feasibility, NOT reaction speed. Fastness depends on chemical kinetics (activation energy).",
        "ΔG° is for standard state (1 bar, 298 K, 1 M), whereas ΔG applies to any state. At equilibrium, ΔG = 0, but ΔG° is NOT necessarily 0!",
        "Standard Gibbs energy of formation ΔG°_f for any pure element in its reference standard state is ZERO (e.g. C_graphite, O₂(g), H₂(g))."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming a reaction with ΔG < 0 occurs instantaneously.",
          "correctFact": "ΔG < 0 means the process is thermodynamically feasible, but its rate can be extremely slow (e.g., Diamond ➔ Graphite has ΔG < 0 but rate is virtually zero at room temp).",
          "whyItMattersForNEET": "NEET tests conceptual distinction between thermodynamic spontaneity (ΔG) and kinetic speed (rate constant k)."
        },
        {
          "commonConfusion": "Forgetting to divide ΔS by 1000 when using ΔG = ΔH − TΔS.",
          "correctFact": "ΔH is in kJ mol⁻¹, ΔS is in J K⁻¹ mol⁻¹. Substituting directly without unit conversion yields an answer off by a factor of 1000!",
          "whyItMattersForNEET": "A common distractor option in NEET numericals directly reflects this unit mismatch error."
        },
        {
          "commonConfusion": "Assuming ΔG° = 0 at equilibrium.",
          "correctFact": "At equilibrium, ΔG = 0 (not ΔG°). ΔG° = −RT ln K, which equals 0 ONLY if K = 1.",
          "whyItMattersForNEET": "NEET frequently tests the exact mathematical condition for equilibrium: ΔG = 0."
        }
      ],
      "quickRevision": [
        "Entropy (S): Measure of randomness/disorder. S_gas >> S_liquid > S_solid. Unit: J K⁻¹ mol⁻¹.",
        "ΔS°_reaction = Σ S°(products) − Σ S°(reactants). Gas formation ➔ ΔS > 0.",
        "Second Law: ΔS_universe = ΔS_system + ΔS_surroundings > 0 for spontaneous process; = 0 at equilibrium.",
        "Gibbs Equation: ΔG = ΔH − TΔS (T in Kelvin). ΔG < 0 (spontaneous), ΔG > 0 (non-spontaneous), ΔG = 0 (equilibrium).",
        "ΔH < 0, ΔS > 0 ➔ ΔG < 0 at ALL temperatures (Always Spontaneous).",
        "ΔH > 0, ΔS < 0 ➔ ΔG > 0 at ALL temperatures (Never Spontaneous).",
        "ΔH < 0, ΔS < 0 ➔ Spontaneous at LOW temperatures (T < ΔH/ΔS).",
        "ΔH > 0, ΔS > 0 ➔ Spontaneous at HIGH temperatures (T > ΔH/ΔS).",
        "Crossover Temperature: T = ΔH / ΔS (Ensure ΔH in J or ΔS in kJ).",
        "ΔG° = −2.303 RT log K. K > 1 ➔ ΔG° < 0; K < 1 ➔ ΔG° > 0; K = 1 ➔ ΔG° = 0."
      ]
    },
    "pyqs": [
      {
        "id": "pyq-sle-1",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "For the reaction 2 Cl(g) ➔ Cl₂(g), the correct signs of ΔH and ΔS are:",
        "options": [
          "ΔH > 0 and ΔS > 0",
          "ΔH > 0 and ΔS < 0",
          "ΔH < 0 and ΔS > 0",
          "ΔH < 0 and ΔS < 0"
        ],
        "correctAnswer": 3,
        "explanation": "1. Bond formation releases energy, so ΔH < 0 (exothermic process).\n2. Two isolated gaseous Cl atoms combine to form one Cl₂ molecule, reducing total moles of gas from 2 to 1 and decreasing system randomness, so ΔS < 0.\nTherefore, both ΔH < 0 and ΔS < 0.",
        "topicId": "chem-second-law-entropy",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.6"
      },
      {
        "id": "pyq-sle-2",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "For a reaction, ΔH = −10.0 kJ mol⁻¹ and ΔS = −20 J K⁻¹ mol⁻¹. At what temperature will the reaction be at equilibrium?",
        "options": [
          "500 K",
          "250 K",
          "300 K",
          "200 K"
        ],
        "correctAnswer": 0,
        "explanation": "1. At equilibrium, ΔG = 0 ➔ ΔH − TΔS = 0 ➔ T = ΔH / ΔS.\n2. Convert ΔH to Joules: ΔH = −10.0 kJ mol⁻¹ = −10,000 J mol⁻¹.\n3. Substitute values: T = (−10,000 J mol⁻¹) / (−20 J K⁻¹ mol⁻¹) = 500 K.",
        "topicId": "chem-second-law-entropy",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.7.1"
      },
      {
        "id": "pyq-sle-3",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "For a given reaction, ΔH = 35.5 kJ mol⁻¹ and ΔS = 83.6 J K⁻¹ mol⁻¹. The reaction is spontaneous at: (Assume ΔH and ΔS do not vary with temperature)",
        "options": [
          "T > 425 K",
          "T < 425 K",
          "T = 425 K",
          "Spontaneous at all temperatures"
        ],
        "correctAnswer": 0,
        "explanation": "1. For spontaneity, ΔG < 0 ➔ ΔH − TΔS < 0 ➔ T > ΔH / ΔS.\n2. Convert ΔH to J mol⁻¹: ΔH = 35.5 × 1000 = 35,500 J mol⁻¹.\n3. Calculate crossover temperature: T = 35,500 / 83.6 = 424.64 K ≈ 425 K.\n4. Since ΔH > 0 and ΔS > 0, the reaction is spontaneous at T > 425 K.",
        "topicId": "chem-second-law-entropy",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.7"
      },
      {
        "id": "pyq-sle-4",
        "year": 2011,
        "exam": "AIPMT 2011",
        "question": "In which of the following reactions, standard entropy change (ΔS°) is positive (ΔS° > 0)?",
        "options": [
          "2 H₂O(l) ➔ 2 H₂(g) + O₂(g)",
          "2 SO₂(g) + O₂(g) ➔ 2 SO₃(g)",
          "N₂(g) + 3 H₂(g) ➔ 2 NH₃(g)",
          "C(s) + O₂(g) ➔ CO₂(g)"
        ],
        "correctAnswer": 0,
        "explanation": "1. In reaction A: 0 moles of gas in liquid reactants ➔ 3 moles of gas in products (Δn_g = +3).\n2. Generation of 3 moles of gas from liquid dramatically increases molecular chaos, so ΔS° > 0.\n3. In B and C, gaseous moles decrease (ΔS° < 0). In D, Δn_g = 1 − 1 = 0.",
        "topicId": "chem-second-law-entropy",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.6.1"
      },
      {
        "id": "pyq-sle-5",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "Under standard conditions, if the standard Gibbs free energy change ΔG° for a reaction is given by ΔG° = −2.303 RT log₁₀ K, and K = 10, then the value of ΔG° is:",
        "options": [
          "−2.303 RT",
          "+2.303 RT",
          "0",
          "−RT"
        ],
        "correctAnswer": 0,
        "explanation": "1. Formula: ΔG° = −2.303 RT log₁₀(K).\n2. Given equilibrium constant K = 10 ➔ log₁₀(10) = 1.\n3. Substitute log K = 1: ΔG° = −2.303 RT × (1) = −2.303 RT.",
        "topicId": "chem-second-law-entropy",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6, Section 6.7.2"
      }
    ]
  },
  "chem-law-mass-action": {
    "id": "chem-law-mass-action",
    "title": "Law of Mass Action & Equilibrium Constants",
    "chapterId": "equilibrium",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Dynamic equilibrium, expression for K_c and K_p, relation K_p = K_c (R T)^(Δn_g), heterogeneous equilibria, and manipulation rules for K.",
    "notes": {
      "learn": [
        "At dynamic equilibrium, rate of forward reaction = rate of backward reaction (r_f = r_b). Equilibrium constant K_c depends ONLY on temperature.",
        "Relation: K_p = K_c (R T)^(Δn_g). If Δn_g = 0, K_p = K_c.",
        "Active mass of pure solids and pure liquids is 1 (omitted from K_c and K_p expressions)."
      ],
      "keyConcepts": [
        "At dynamic equilibrium, rate of forward reaction = rate of backward reaction. Concentrations stay constant.",
        "Law of Mass Action: K_c = ([C]^c [D]^d) / ([A]^a [B]^b). Depends strictly on temperature."
      ],
      "formulas": [
        {
          "title": "K_p and K_c Relation",
          "formula": "K_p = K_c (R T)^{\\Delta n_g}"
        }
      ],
      "neetImportantPoints": [
        "Pure solids and pure liquids have active mass = 1 in equilibrium constant expressions.",
        "A catalyst speeds up attainment of equilibrium equally in both directions, but NEVER alters K_c, K_p, or product yield."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing equal reaction rates (r_f = r_b) with equal concentrations ([Reactants] = [Products]).",
          "correctFact": "Equilibrium means forward and backward rates are equal, not concentrations. Concentrations become constant.",
          "whyItMattersForNEET": "Frequently tested in conceptual true/false NEET questions."
        }
      ],
      "quickRevision": [
        "K_p = K_c (RT)^Δn_g",
        "Reversing reaction ⟹ K' = 1/K; Multiplying by n ⟹ K'' = K^n; Adding reactions ⟹ K_net = K₁ × K₂"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-lma-1",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "For the reaction PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), the correct relationship between K_p and K_c is:",
        "options": [
          "K_p = K_c (RT)",
          "K_p = K_c (RT)⁻¹",
          "K_p = K_c",
          "K_p = K_c (RT)²"
        ],
        "correctAnswer": 0,
        "explanation": "1. Identify gaseous reaction: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g).\n2. Calculate Δn_g = (1 + 1) − 1 = +1.\n3. Substitute Δn_g = 1 into K_p = K_c (RT)^Δn_g ➔ K_p = K_c (RT)¹ = K_c (RT).",
        "topicId": "chem-law-mass-action",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.2"
      },
      {
        "id": "pyq-lma-2",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "If K_c for the reaction 2 A ⇌ B + C is 2.0 × 10⁻³, at a given time the concentration of reaction mixture is [A] = [B] = [C] = 3.0 × 10⁻⁴ M. In which direction will the reaction proceed?",
        "options": [
          "Forward direction",
          "Reverse / Backward direction",
          "System is at equilibrium",
          "Cannot be predicted"
        ],
        "correctAnswer": 1,
        "explanation": "1. Calculate reaction quotient Q_c = ([B] · [C]) / [A]².\n2. Substitute concentrations: Q_c = (3.0 × 10⁻⁴ × 3.0 × 10⁻⁴) / (3.0 × 10⁻⁴)² = 1.0.\n3. Compare Q_c with K_c: Q_c = 1.0 and K_c = 2.0 × 10⁻³ = 0.0020.\n4. Since Q_c > K_c, the reaction proceeds in the reverse / backward direction.",
        "topicId": "chem-law-mass-action",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.3"
      },
      {
        "id": "pyq-lma-3",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "For the reaction N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), K_c = 64 at 400 K. What is the value of K_c for NH₃(g) ⇌ ½ N₂(g) + 3/2 H₂(g)?",
        "options": [
          "1 / 64",
          "1 / 8",
          "8",
          "1 / 32"
        ],
        "correctAnswer": 1,
        "explanation": "1. Target reaction NH₃(g) ⇌ ½ N₂(g) + 3/2 H₂(g) is obtained by reversing N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) and multiplying coefficients by ½.\n2. Reversing equation ➔ K' = 1 / K_c = 1 / 64.\n3. Multiplying by ½ ➔ K'' = (1 / 64)^(½) = 1 / √64 = 1 / 8.",
        "topicId": "chem-law-mass-action",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.2.3"
      },
      {
        "id": "pyq-lma-4",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "For the reaction CO(g) + ½ O₂(g) ⇌ CO₂(g), the ratio K_p / K_c is equal to:",
        "options": [
          "(RT)^(1/2)",
          "(RT)^(-1/2)",
          "RT",
          "(RT)⁻¹"
        ],
        "correctAnswer": 1,
        "explanation": "1. Calculate Δn_g = gaseous product moles − gaseous reactant moles = 1 − (1 + 0.5) = −0.5 = −1/2.\n2. Apply formula K_p = K_c (RT)^Δn_g ➔ K_p / K_c = (RT)^(-1/2) = 1 / √(RT).",
        "topicId": "chem-law-mass-action",
        "difficulty": "Medium",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.2.4"
      },
      {
        "id": "pyq-lma-5",
        "year": 2010,
        "exam": "AIPMT 2010",
        "question": "Which of the following statements is INCORRECT regarding chemical equilibrium?",
        "options": [
          "Equilibrium can be attained from either direction in a closed container.",
          "At equilibrium, forward and backward reaction rates are equal.",
          "A catalyst alters the equilibrium constant K_c of a reaction.",
          "Concentrations of reactants and products remain constant at equilibrium."
        ],
        "correctAnswer": 2,
        "explanation": "1. Check catalyst rule: A catalyst speeds up both forward and reverse reactions equally.\n2. Catalyst reduces the time required to reach equilibrium, but NEVER alters the equilibrium constant K_c or the position of equilibrium.\n3. Statement C is INCORRECT.",
        "topicId": "chem-law-mass-action",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.1"
      }
    ]
  },
  "chem-le-chatelier": {
    "id": "chem-le-chatelier",
    "title": "Le Chatelier's Principle",
    "chapterId": "equilibrium",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Effects of changing concentration, pressure, volume, temperature, and inert gas addition.",
    "notes": {
      "learn": [
        "Le Chatelier's Principle: If a system at equilibrium is subjected to a change in condition, equilibrium shifts to counteract the effect.",
        "Exothermic reaction (ΔH < 0): Favorable at LOW temperature. Increasing pressure shifts equilibrium toward FEWER gaseous moles."
      ],
      "keyConcepts": [
        "Le Chatelier's Principle: If a system at equilibrium is subjected to a change in condition, equilibrium shifts to counteract the effect."
      ],
      "formulas": [
        {
          "title": "Inert Gas Addition",
          "formula": "At constant Volume: NO EFFECT. At constant Pressure: shifts toward MORE gas moles."
        }
      ],
      "neetImportantPoints": [
        "Adding catalyst increases forward and backward rate equally; it does NOT alter value of equilibrium constant K."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Le Chatelier's Principle.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Le Chatelier's Principle.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Low temp favors exothermic, Inert gas at const V has no effect"
      ]
    },
    "pyqs": [
      {
        "id": "lc-pyq-2020",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = -198 kJ. The yield of SO₃ is favored by:",
        "options": [
          "High temperature and high pressure",
          "High temperature and low pressure",
          "Low temperature and high pressure",
          "Low temperature and low pressure"
        ],
        "correctAnswer": 2,
        "explanation": "Step 1: Check enthalpy: Reaction is exothermic (ΔH = -198 kJ). According to Le Chatelier's principle, lowering temperature favors the forward exothermic reaction.\nStep 2: Check gaseous moles: Reactants = 2 + 1 = 3 moles gas; Products = 2 moles gas. Δn_g = 2 - 3 = -1.\nStep 3: Increasing pressure shifts equilibrium toward fewer gaseous moles (forward to form SO₃).\nStep 4: Therefore, LOW temperature and HIGH pressure favor maximum yield of SO₃. Correct Option: 2.",
        "topicId": "chem-le-chatelier",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8"
      },
      {
        "id": "lc-pyq-2017",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "Which of the following conditions will favor maximum formation of the product in the reaction: A₂(g) + B₂(g) ⇌ X₂(g), Δ_r H = -X kJ?",
        "options": [
          "Low temperature and high pressure",
          "High temperature and high pressure",
          "Low temperature and low pressure",
          "High temperature and low pressure"
        ],
        "correctAnswer": 0,
        "explanation": "Step 1: Reaction is exothermic (Δ_r H = -X kJ). Lowering temperature favors the forward reaction.\nStep 2: Reactant gas moles = 1 + 1 = 2; Product gas moles = 1. Δn_g = 1 - 2 = -1.\nStep 3: High pressure favors the side with fewer gas moles (forward reaction).\nStep 4: Combining both factors: Low temperature and high pressure yield maximum product. Correct Option: 0.",
        "topicId": "chem-le-chatelier",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8"
      },
      {
        "id": "lc-pyq-2015",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "What is the effect of adding an inert gas at constant volume to the equilibrium mixture N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?",
        "options": [
          "Equilibrium shifts in the forward direction",
          "Equilibrium shifts in the reverse direction",
          "Ammonia formation increases",
          "Equilibrium position remains unchanged"
        ],
        "correctAnswer": 3,
        "explanation": "Step 1: At constant volume, adding an inert gas increases total pressure inside the vessel.\nStep 2: However, partial pressures p_i = n_i RT / V and concentrations c_i = n_i / V of N₂, H₂, and NH₃ do NOT change at all.\nStep 3: Since reaction quotient Q_p = K_p, the equilibrium position remains ENTIRELY UNCHANGED. Correct Option: 3.",
        "topicId": "chem-le-chatelier",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8"
      },
      {
        "id": "lc-pyq-2008",
        "year": 2008,
        "exam": "AIPMT 2008",
        "question": "For the reversible reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + Heat, which of the following will NOT shift the equilibrium in the forward direction?",
        "options": [
          "Increasing the concentration of N₂",
          "Removing NH₃ as it is formed",
          "Increasing the pressure on the system",
          "Increasing the temperature of the system"
        ],
        "correctAnswer": 3,
        "explanation": "Step 1: Reaction is exothermic (Heat is evolved on the right side).\nStep 2: Increasing temperature supplies heat to the system. By Le Chatelier's principle, the system shifts in the ENDOTHERMIC (reverse) direction to absorb added heat.\nStep 3: Options A, B, and C all shift the equilibrium forward. Option D shifts it reverse. Correct Option: 3.",
        "topicId": "chem-le-chatelier",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8"
      },
      {
        "id": "lc-pyq-2005",
        "year": 2005,
        "exam": "AIPMT 2005",
        "question": "For the reaction 2NO₂(g) ⇌ N₂O₄(g) + 57.2 kJ, what happens when the temperature of the system at equilibrium is increased?",
        "options": [
          "N₂O₄ concentration increases",
          "NO₂ concentration increases",
          "K_c value increases",
          "Equilibrium shifts forward"
        ],
        "correctAnswer": 1,
        "explanation": "Step 1: Dimerization of NO₂ to N₂O₄ is exothermic (ΔH = -57.2 kJ).\nStep 2: Increasing temperature shifts the equilibrium in the reverse (endothermic) direction to absorb heat.\nStep 3: Reverse shift decomposes N₂O₄ back into NO₂, causing [NO₂] to increase and [N₂O₄] to decrease. K_c value decreases. Correct Option: 1.",
        "topicId": "chem-le-chatelier",
        "difficulty": "Easy",
        "ncertReference": "Class 11 Chemistry, Chapter 6 (Equilibrium), Section 6.8"
      }
    ]
  },
  "chem-acids-bases-ph": {
    "id": "chem-acids-bases-ph",
    "title": "Acids, Bases, pH & Ionic Equilibrium",
    "chapterId": "equilibrium",
    "estimatedReadTimeMinutes": 25,
    "importanceWeight": "High Yield",
    "summary": "Arrhenius, Brønsted-Lowry, Lewis acid-base theories, Ka, Kb, Kw, pH scale, Ostwald dilution law, common-ion effect and salt hydrolysis.",
    "notes": {
      "learn": [
        "Arrhenius Concept: Acid yields H⁺ in water, Base yields OH⁻ in water.",
        "Brønsted-Lowry Concept: Acid is H⁺ donor, Base is H⁺ acceptor. Conjugate acid-base pairs differ by ONE proton.",
        "Lewis Concept: Acid is e⁻ pair acceptor (BF_3, AlCl_3, Fe³⁺), Base is e⁻ pair donor (:NH_3, H_2O, F⁻).",
        "Auto-ionisation of water: K_w = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C. pH + pOH = 14.",
        "Ostwald Dilution Law: α = √(K_a/C), [H⁺] = √(K_a·C), pH = ½(pK_a - log C).",
        "Common-ion effect: Addition of a common ion suppresses dissociation of weak electrolytes.",
        "Salt Hydrolysis: WA+SB yields basic pH (7 + ½pK_a + ½log C); SA+WB yields acidic pH (7 - ½pK_b - ½log C); WA+WB yields pH = 7 + ½pK_a - ½pK_b."
      ],
      "keyConcepts": [
        "pH = -log₁₀[H⁺], pOH = -log₁₀[OH⁻], pH + pOH = 14 at 25°C.",
        "K_a · K_b = K_w = 1.0 × 10⁻¹⁴ for any conjugate acid-base pair.",
        "10⁻⁸ M HCl has pH = 6.98 because water's own [H⁺] = 10⁻⁷ M must be accounted for!"
      ],
      "formulas": [
        {
          "title": "pH & pOH Scale",
          "formula": "pH = -\\log_{10}[H^+], \\quad pOH = -\\log_{10}[OH^-], \\quad pH + pOH = 14.00"
        },
        {
          "title": "Ionic Product of Water",
          "formula": "K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\text{ at 25°C}"
        },
        {
          "title": "Ostwald Dilution Law",
          "formula": "\\alpha = \\sqrt{\\frac{K_a}{C}}, \\quad [H^+] = \\sqrt{K_a C}, \\quad pH = \\frac{1}{2}(pK_a - \\log_{10} C)"
        },
        {
          "title": "Salt Hydrolysis Formulas",
          "formula": "\\text{WA+SB: } pH = 7 + \\frac{1}{2}pK_a + \\frac{1}{2}\\log C, \\quad \\text{SA+WB: } pH = 7 - \\frac{1}{2}pK_b - \\frac{1}{2}\\log C"
        }
      ],
      "neetImportantPoints": [
        "Water auto-ionisation is endothermic; neutral pH at 90°C is 6.0.",
        "10⁻⁸ M HCl has pH = 6.98 (acidic), NEVER 8!",
        "For salt of WA + WB, pH is independent of salt concentration C."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Calculating pH of 10⁻⁸ M HCl as 8.",
          "correctFact": "An acid solution cannot be basic! At C ≤ 10⁻⁶ M, include water dissociation [H⁺] = 10⁻⁷ M to get pH = 6.98.",
          "whyItMattersForNEET": "High-yield negative-marking trap in NEET."
        }
      ],
      "quickRevision": [
        "pH = -log[H⁺], K_w = 10⁻¹⁴, α = √(K_a/C), WA+SB pH = 7 + ½pK_a + ½log C"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-acids-2023",
        "topicId": "chem-acids-bases-ph",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "Identify the correct conjugate base for HSO_4⁻ and NH_3 respectively:",
        "options": [
          "SO_4^{2-} and NH_2⁻",
          "H_2SO_4 and NH_4⁺",
          "SO_4^{2-} and NH_4⁺",
          "H_2SO_4 and NH_2⁻"
        ],
        "correctAnswer": 0,
        "explanation": "Remove one proton (H⁺) from HSO_4⁻ to get SO_4^{2-}, and from NH_3 to get NH_2⁻. Correct Option: 0."
      },
      {
        "id": "pyq-acids-2021",
        "topicId": "chem-acids-bases-ph",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "The pK_b of dimethylamine and pK_a of acetic acid are 3.27 and 4.77 respectively at 298 K. The pH of dimethylammonium acetate solution is:",
        "options": [
          "7.75",
          "6.25",
          "8.50",
          "5.50"
        ],
        "correctAnswer": 0,
        "explanation": "Salt of WA + WB: pH = 7 + ½ pK_a - ½ pK_b = 7 + ½(4.77) - ½(3.27) = 7.75. Correct Option: 0."
      }
    ]
  },
  "chem-buffer-solubility-product": {
    "id": "chem-buffer-solubility-product",
    "title": "Buffer Solutions & Solubility Product (K_{sp})",
    "chapterId": "equilibrium",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Acidic/basic buffer Henderson-Hasselbalch equation and K_{sp} precipitation condition.",
    "notes": {
      "learn": [
        "Acidic Buffer (Weak acid + its salt with strong base, e.g. CH3COOH + CH3COONa): pH = pK_a + log([Salt]/[Acid]).",
        "Solubility Product K_sp for sparse salt A_x B_y ⇌ x A^(y+) + y B^(x-): K_sp = x^x y^y S^(x+y). Precipitation occurs if Ionic Product Q_sp > K_sp."
      ],
      "keyConcepts": [
        "Acidic Buffer (Weak acid + its salt with strong base, e.g. CH3COOH + CH3COONa): pH = pK_a + log([Salt]/[Acid])."
      ],
      "formulas": [
        {
          "title": "Henderson-Hasselbalch Equation",
          "formula": "pH = pK_a + log_{10}( [Salt] / [Acid] )"
        }
      ],
      "neetImportantPoints": [
        "Common Ion Effect decreases solubility of a sparingly soluble salt."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Buffer Solutions & Solubility Product (K_{sp}).",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Buffer Solutions & Solubility Product (K_{sp}).",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "pH = pKa + log(Salt/Acid), Q_sp > K_sp causes ppt"
      ]
    },
    "pyqs": []
  },
  "chem-oxidation-number": {
    "id": "chem-oxidation-number",
    "title": "Oxidation Number & Redox Rules",
    "chapterId": "redox-reactions",
    "estimatedReadTimeMinutes": 12,
    "importanceWeight": "Core Concept",
    "summary": "Oxidation states determination rules and special structural exceptions.",
    "notes": {
      "learn": [
        "Oxidation is loss of electrons (increase in oxidation number); Reduction is gain of electrons (decrease in oxidation number).",
        "Special exceptions: Cr in CrO5 has oxidation number +6 (butterfly structure with 2 peroxide bonds); S in H2SO5 is +6."
      ],
      "keyConcepts": [
        "Oxidation is loss of electrons (increase in oxidation number); Reduction is gain of electrons (decrease in oxidation number)."
      ],
      "formulas": [
        {
          "title": "CrO5 Oxidation State",
          "formula": "Cr in CrO_5 implies Oxidation state +6"
        }
      ],
      "neetImportantPoints": [
        "Oxidation number of fluorine is ALWAYS -1 in all its compounds."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Oxidation Number & Redox Rules.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Oxidation Number & Redox Rules.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "F is always -1, Cr in CrO5 is +6"
      ]
    },
    "pyqs": []
  },
  "chem-balancing-redox": {
    "id": "chem-balancing-redox",
    "title": "Balancing Redox Reactions",
    "chapterId": "redox-reactions",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Ion-electron method and oxidation number method in acidic/basic media.",
    "notes": {
      "learn": [
        "In acidic medium, balance O atoms by adding H2O, then balance H atoms by adding H⁺.",
        "In basic medium, add equal number of OH⁻ ions to both sides as H⁺ ions added."
      ],
      "keyConcepts": [
        "In acidic medium, balance O atoms by adding H2O, then balance H atoms by adding H⁺."
      ],
      "formulas": [
        {
          "title": "Redox Equivalent Mass",
          "formula": "Equivalent Mass = Molar Mass / n-factor"
        }
      ],
      "neetImportantPoints": [
        "n-factor of KMnO4: In acidic medium n = 5 (MnO4⁻ -> Mn²⁺); In neutral/faintly alkaline n = 3 (MnO4⁻ -> MnO2); In strongly alkaline n = 1 (MnO4⁻ -> MnO4²⁻)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Balancing Redox Reactions.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Balancing Redox Reactions.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "KMnO4 n-factor: 5 (acidic), 3 (neutral), 1 (basic)"
      ]
    },
    "pyqs": []
  },
  "chem-alkanes": {
    "id": "chem-alkanes",
    "title": "Alkanes & Their Reactions",
    "chapterId": "hydrocarbons",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Structure, IUPAC nomenclature, chain isomerism, Wurtz reaction, soda lime decarboxylation, Kolbe electrolysis, physical properties, free radical halogenation mechanism, and reactivity.",
    "notes": {
      "learn": [
        "Ethane conformations: Staggered conformation is MORE stable than Eclipsed conformation due to minimum torsional strain (dihedral angle 60° vs 0°).",
        "Free radical chlorination of alkanes reactivity order: 3° H > 2° H > 1° H. Halogen reactivity: F2 > Cl2 > Br2 > I2.",
        "Preparation: Wurtz reaction (2 R-X + 2 Na → R-R), Soda lime decarboxylation (R-COONa + NaOH/CaO → R-H), Kolbe electrolysis (2 R-COONa → R-R + 2 CO₂ at Anode)."
      ],
      "keyConcepts": [
        "Ethane conformations: Staggered conformation is MORE stable than Eclipsed conformation due to minimum torsional strain.",
        "Wurtz reaction joins two alkyl halides using Na/dry ether to give symmetrical alkane with EVEN number of carbon atoms.",
        "Soda lime decarboxylation degrades the carbon chain by 1 carbon atom."
      ],
      "formulas": [
        {
          "title": "General Alkane Formula",
          "formula": "C_n H_{2n+2}"
        },
        {
          "title": "Ethane Conformation Stability",
          "formula": "Staggered > Eclipsed (ΔE = 12.5 kJ/mol)"
        }
      ],
      "neetImportantPoints": [
        "Wurtz reaction joins two alkyl halides using Na/dry ether to give symmetrical alkane with EVEN number of carbon atoms.",
        "Methane CANNOT be prepared by Wurtz reaction or Kolbe electrolysis.",
        "In Kolbe electrolysis, alkane and CO₂ evolve at the Anode, while H₂ evolves at the Cathode and solution becomes basic (pH > 7)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming 2-chloro-2-methylpropane is the major product in chlorination of isobutane.",
          "correctFact": "In chlorination at 298 K, 1-chloro-2-methylpropane is the MAJOR product (64%) due to 9 primary H atoms vs 1 tertiary H atom.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Staggered > Eclipsed, Wurtz reaction for symmetrical alkanes, Soda lime decarboxylation (chain shortening by 1 C), Chlorination rates: 3°:2°:1° = 5:3.8:1."
      ]
    },
    "pyqs": [
      {
        "id": "pyq-alkanes-1",
        "year": 2008,
        "exam": "AIPMT 2008",
        "question": "An alkane C₆H₁₄ gives two monochloro derivatives on photochemical chlorination. The IUPAC name of the alkane is:",
        "options": ["2,2-Dimethylbutane", "2,3-Dimethylbutane", "3-Methylpentane", "2-Methylpentane"],
        "correctAnswer": 1,
        "explanation": "In 2,3-dimethylbutane, (CH₃)₂CH-CH(CH₃)₂, there are only two chemically non-equivalent types of hydrogen atoms: 12 equivalent primary hydrogens (4 × -CH₃) and 2 equivalent tertiary hydrogens (2 × >CH-). Replacing any 1° H gives 1-chloro-2,3-dimethylbutane and replacing any 3° H gives 2-chloro-2,3-dimethylbutane. Thus, it yields exactly two monochloro isomers.",
        "conceptTested": "Monochlorination Isomers & Structure",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-2",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "The correct increasing order of boiling points of the given isomeric alkanes is:",
        "options": [
          "Neopentane < Isopentane < n-Pentane",
          "n-Pentane < Isopentane < Neopentane",
          "Isopentane < Neopentane < n-Pentane",
          "n-Pentane < Neopentane < Isopentane"
        ],
        "correctAnswer": 0,
        "explanation": "For isomeric alkanes, boiling point decreases with increasing branching because branching makes the molecule more spherical, reducing its surface area and van der Waals forces. Neopentane (2,2-dimethylpropane, b.p. 282.5 K) is spherical with lowest b.p., Isopentane (2-methylbutane, b.p. 301 K) is moderately branched, and n-pentane (b.p. 309.1 K) is straight-chain with highest b.p.",
        "conceptTested": "Boiling Point Trends & Branching",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-3",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Which of the following alkanes CANNOT be prepared in good yield by Wurtz reaction?",
        "options": ["n-Hexane", "2,3-Dimethylbutane", "n-Heptane", "n-Butane"],
        "correctAnswer": 2,
        "explanation": "Wurtz reaction joins two identical alkyl halides (2 R-X + 2 Na → R-R) to yield symmetrical alkanes with an EVEN number of carbon atoms in high yield. For unsymmetrical alkanes with an ODD number of carbons like n-heptane (7 C), a mixture of two different alkyl halides (R-X + R'-X) must be used, which produces three alkanes (R-R, R-R', R'-R'). These have close boiling points and are difficult to separate.",
        "conceptTested": "Wurtz Reaction Scope & Limitations",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-4",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "The dihedral angle of the least stable conformer of ethane is:",
        "options": ["60°", "120°", "0°", "180°"],
        "correctAnswer": 2,
        "explanation": "The least stable conformer of ethane is the Eclipsed conformation, where C-H bonds on adjacent carbon atoms are directly aligned with each other, resulting in maximum torsional strain and repulsion. In the eclipsed conformation, the dihedral angle between adjacent C-H bonds is 0°. The Staggered conformation has dihedral angle 60° and is most stable.",
        "conceptTested": "Ethane Conformations & Dihedral Angle",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-5",
        "year": 2004,
        "exam": "AIPMT 2004",
        "question": "A hydrocarbon (A) reacts with bromine by substitution to form an alkyl bromide which by Wurtz reaction is converted to a gaseous hydrocarbon containing less than four carbon atoms. Hydrocarbon (A) is:",
        "options": ["CH₄", "CH₃-CH₃", "CH₂=CH₂", "CH≡CH"],
        "correctAnswer": 0,
        "explanation": "Methane (CH₄) undergoes substitution with Br₂/hν to form methyl bromide (CH₃Br). Two molecules of CH₃Br react with Na in dry ether via Wurtz reaction to yield ethane (C₂H₆), which is a gaseous alkane containing 2 carbon atoms (less than 4 carbon atoms).",
        "conceptTested": "Halogenation & Wurtz Reaction Multi-step",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-6",
        "year": 1999,
        "exam": "AIPMT 1999",
        "question": "The correct relative order of ease of abstraction of hydrogen atoms in free-radical halogenation of alkanes is:",
        "options": [
          "1° H > 2° H > 3° H",
          "3° H > 2° H > 1° H",
          "2° H > 3° H > 1° H",
          "3° H > 1° H > 2° H"
        ],
        "correctAnswer": 1,
        "explanation": "Hydrogen abstraction from an alkane generates a carbon free radical intermediate. The rate of hydrogen abstraction directly depends on the stability of the free radical formed. Tertiary (3°) free radicals are most stable due to 9 hyperconjugative α-hydrogens, followed by 2° (6 α-H) and 1° (3 α-H). Thus, the ease of abstraction is 3° H > 2° H > 1° H.",
        "conceptTested": "Free Radical Stability & Reactivity",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-7",
        "year": 2003,
        "exam": "AIPMT 2003",
        "question": "Which of the following compounds produces ONLY ONE monochloro derivative upon photochemical chlorination?",
        "options": ["Neopentane", "Isopentane", "n-Pentane", "2-Methylbutane"],
        "correctAnswer": 0,
        "explanation": "Neopentane, 2,2-dimethylpropane (C(CH₃)₄), possesses 12 hydrogen atoms that are all chemically equivalent because all four methyl groups are attached to a central quaternary carbon. Substitution of any hydrogen by chlorine yields the exact same product: 1-chloro-2,2-dimethylpropane.",
        "conceptTested": "Equivalent Hydrogens & Monochlorination",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-8",
        "year": 2012,
        "exam": "AIPMT 2012",
        "question": "Sodium salt of which carboxylic acid is required for the preparation of propane by soda-lime decarboxylation?",
        "options": ["Ethanoic acid", "Propanoic acid", "Butanoic acid", "Pentanoic acid"],
        "correctAnswer": 2,
        "explanation": "Soda-lime decarboxylation (R-COONa + NaOH ──[CaO, Δ]──► R-H + Na₂CO₃) removes the carboxyl group as sodium carbonate. The alkane formed (R-H) contains ONE LESS carbon atom than the starting sodium carboxylate salt (R-COONa). To prepare propane (C₃H₈, 3 carbons), sodium salt of butanoic acid (CH₃CH₂CH₂COONa, 4 carbons) is heated with soda-lime.",
        "conceptTested": "Soda-Lime Decarboxylation Chain Degradation",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-9",
        "year": 2004,
        "exam": "AIPMT 2004",
        "question": "In Kolbe\'s electrolytic synthesis of ethane, which gases are evolved at the Anode?",
        "options": ["CO₂ and H₂", "CO₂ and C₂H₆", "H₂ and C₂H₆", "Only CO₂"],
        "correctAnswer": 1,
        "explanation": "During Kolbe electrolysis of sodium acetate (CH₃COONa), acetate ions (CH₃COO⁻) migrate to the Anode (+), lose an electron to form acetate free radicals (CH₃COO•), which decarboxylate to release CO₂ gas and methyl radicals (•CH₃). Coupling of two methyl radicals forms ethane (C₂H₆). Therefore, both CO₂ and C₂H₆ gases evolve at the Anode. (H₂ gas evolves at the Cathode).",
        "conceptTested": "Kolbe Electrolysis Anode Products",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      },
      {
        "id": "pyq-alkanes-10",
        "year": 2012,
        "exam": "AIPMT 2012",
        "question": "Which alkane upon halogenation gives a mixture of 1-chloro-2-methylpropane and 2-chloro-2-methylpropane?",
        "options": ["n-Butane", "Isobutane", "Neopentane", "Isopentane"],
        "correctAnswer": 1,
        "explanation": "Isobutane, (CH₃)₃CH, has two non-equivalent types of hydrogen atoms: 9 primary hydrogens on three -CH₃ groups and 1 tertiary hydrogen on the >CH- group. Monochlorination at 1° H gives 1-chloro-2-methylpropane and at 3° H gives 2-chloro-2-methylpropane.",
        "conceptTested": "Free Radical Monochlorination Products",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkanes"
      }
    ]
  },
  "chem-alkenes": {
    "id": "chem-alkenes",
    "title": "Alkenes & Their Reactions",
    "chapterId": "hydrocarbons",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Structure, sp² hybridisation, geometrical isomerism (cis/trans & E/Z), Zaitsev rule, Markovnikov rule, peroxide effect (Kharasch effect), hydration methods, ozonolysis, and polymerisation.",
    "notes": {
      "learn": [
        "sp² Hybridisation & Planar Geometry: C=C carbons are sp² hybridized with 120° bond angles and 134 pm bond length. The π-cloud above/below plane makes alkenes nucleophilic.",
        "Geometrical Isomerism: Caused by restricted rotation around C=C. Requires a₂C=Ccd structure (neither carbon can have two identical groups). Cis = higher b.p., higher dipole moment; Trans = higher m.p., zero dipole moment if symmetrical.",
        "Markovnikov vs Anti-Markovnikov: HX addition follows Markovnikov (via carbocation). HBr + Peroxide follows Anti-Markovnikov via free radicals (applies ONLY to HBr!).",
        "Ozonolysis: O₃ followed by Zn/H₂O cleaves C=C bond to produce aldehydes/ketones. Removing =O from products and joining carbons with C=C reveals parent alkene."
      ],
      "keyConcepts": [
        "Markovnikov's Rule: Electrophilic addition of HX to unsymmetrical alkene places H on carbon with MORE hydrogen atoms.",
        "Peroxide Effect: Free radical addition of HBr in presence of peroxide gives Anti-Markovnikov 1-bromoalkane (UNIQUE to HBr!).",
        "Hydration: Acid-catalyzed (Markovnikov + carbocation rearrangement), OMDM (Markovnikov + NO rearrangement), HBO (Anti-Markovnikov + syn-addition + NO rearrangement)."
      ],
      "formulas": [
        {
          "title": "General Alkene Formula",
          "formula": "C_n H_{2n}"
        },
        {
          "title": "Reductive Ozonolysis Cleavage",
          "formula": "Alkene xrightarrow[2. Zn/H_2O]{1. O_3} Aldehydes / Ketones"
        }
      ],
      "neetImportantPoints": [
        "Lindlar catalyst (Pd/CaCO₃ + quinoline) gives CIS-alkene; Birch reduction (Na/liq. NH₃) gives TRANS-alkene.",
        "Symmetrical alkenes (e.g. But-2-ene) give the EXACT SAME product with HBr regardless of peroxide presence.",
        "Baeyer's Test: Cold dil. 1% alk. KMnO₄ is decolourised to form cis-vicinal diols (test for unsaturation)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming the peroxide effect applies to HCl and HI as well.",
          "correctFact": "The peroxide effect applies EXCLUSIVELY to HBr. HCl (bond too strong) and HI (radicals combine to form I₂) ALWAYS follow Markovnikov addition even with peroxide.",
          "whyItMattersForNEET": "Classic NEET trap question!"
        }
      ],
      "quickRevision": [
        "sp² 120° planar, Cis/Trans GI (a₂C=Ccd fails GI), Lindlar (Cis) vs Birch (Trans), Zaitsev rule (more substituted alkene major), Markovnikov (via carbocation), Peroxide effect (HBr ONLY), Ozonolysis (C=C cleavage to carbonyls)."
      ]
    },
    "pyqs": [
      {
        "id": "pyq-alkenes-1",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "An alkene on ozonolysis gives methanal and ethanal as products. The IUPAC name of the alkene is:",
        "options": ["Ethene", "Propene", "But-1-ene", "But-2-ene"],
        "correctAnswer": 1,
        "explanation": "Methanal is HCHO (1 C) and ethanal is CH₃CHO (2 C). Placing the carbonyl groups facing each other: CH₃-CH=O + O=CH-H. Removing oxygen atoms and joining with a double bond yields CH₃-CH=CH₂ (Propene). Thus, propene on ozonolysis yields ethanal and methanal.",
        "conceptTested": "Reductive Ozonolysis & Product Identification",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-2",
        "year": 2004,
        "exam": "AIPMT 2004",
        "question": "The major product formed in the reaction of CH₃-CH=CH-CH₃ with HBr in the presence of peroxide is:",
        "options": ["CH₃-CH₂-CH(Br)-CH₃", "CH₃-CH₂-CH₂-CH₂Br", "CH₃-CH(Br)-CH(Br)-CH₃", "CH₃-CH₂-CH₂-CH₃"],
        "correctAnswer": 0,
        "explanation": "But-2-ene (CH₃-CH=CH-CH₃) is a SYMMETRICAL alkene. In symmetrical alkenes, both double-bonded carbons have identical numbers of hydrogen atoms (1 H each). Therefore, Markovnikov and Anti-Markovnikov additions yield the EXACT SAME product: 2-bromobutane (CH₃-CH₂-CH(Br)-CH₃).",
        "conceptTested": "Addition of HBr to Symmetrical Alkenes",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-3",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Reaction of propene with B₂H₆ followed by oxidation with alkaline H₂O₂ produces:",
        "options": ["Propan-2-ol", "Propan-1-ol", "Propane-1,2-diol", "Propanone"],
        "correctAnswer": 1,
        "explanation": "Reaction of propene (CH₃-CH=CH₂) with diborane (B₂H₆/THF) followed by alkaline H₂O₂ is Hydroboration-Oxidation. HBO results in overall Anti-Markovnikov addition of H₂O across the double bond without carbocation rearrangement. Thus, -OH attaches to the primary carbon bearing more H atoms, producing Propan-1-ol.",
        "conceptTested": "Hydroboration-Oxidation Regioselectivity",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-4",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Which of the following alkyne/alkene reactions with Lindlar's catalyst yields a cis-alkene?",
        "options": ["But-2-yne + H₂ / Lindlar catalyst", "But-2-yne + Na / liq. NH₃", "But-1-yne + H₂ / Pt", "Ethene + H₂ / Ni"],
        "correctAnswer": 0,
        "explanation": "Controlled hydrogenation of internal alkynes like But-2-yne (CH₃-C≡C-CH₃) using Lindlar's catalyst (Pd/CaCO₃ poisoned with quinoline) proceeds via syn-addition of hydrogen, selectively yielding cis-but-2-ene. In contrast, Birch reduction (Na/liq. NH₃) yields trans-but-2-ene.",
        "conceptTested": "Stereospecific Alkene Synthesis from Alkynes",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-5",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "The major product formed when 2-bromobutane is treated with alcoholic KOH is:",
        "options": ["But-1-ene", "cis-But-2-ene", "trans-But-2-ene", "Butan-2-ol"],
        "correctAnswer": 2,
        "explanation": "Dehydrohalogenation of 2-bromobutane with alcoholic KOH undergoes E2 elimination governed by Zaitsev's rule. The major product is the more substituted alkene, But-2-ene. Among cis and trans stereoisomers of But-2-ene, trans-but-2-ene is thermodynamically MORE STABLE due to minimal steric repulsion between the two methyl groups. Thus, trans-but-2-ene is the major product.",
        "conceptTested": "Zaitsev Rule & Stereoselectivity in Elimination",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-7",
        "year": 2008,
        "exam": "AIPMT 2008",
        "question": "Which of the following alkenes yields a tertiary alcohol on acid-catalyzed hydration?",
        "options": ["2-Methylpropene", "But-1-ene", "But-2-ene", "Propene"],
        "correctAnswer": 0,
        "explanation": "Acid-catalyzed hydration follows Markovnikov's rule via a carbocation intermediate. In 2-methylpropene, (CH₃)₂C=CH₂, protonation at C-1 generates a stable 3° carbocation, (CH₃)₃C⁺. Attack by H₂O followed by loss of H⁺ yields 2-methylpropan-2-ol (tert-butyl alcohol, a 3° alcohol).",
        "conceptTested": "Acid-Catalyzed Hydration & Carbocation Stability",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-8",
        "year": 2014,
        "exam": "AIPMT 2014",
        "question": "The correct order of reactivity of hydrogen halides towards alkenes in electrophilic addition is:",
        "options": ["HI > HBr > HCl > HF", "HF > HCl > HBr > HI", "HCl > HBr > HI > HF", "HBr > HI > HCl > HF"],
        "correctAnswer": 0,
        "explanation": "In electrophilic addition of HX to alkenes, the rate-determining step involves the cleavage of the H-X bond to produce H⁺. The H-X bond energy decreases down the group (H-F > H-Cl > H-Br > H-I), making HI the strongest acid with the weakest H-X bond. Hence, reactivity order is HI > HBr > HCl > HF.",
        "conceptTested": "Reactivity Order of Hydrogen Halides",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-9",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "Which of the following compounds exhibits geometrical isomerism?",
        "options": ["But-2-ene", "But-1-ene", "2-Methylpropene", "Propene"],
        "correctAnswer": 0,
        "explanation": "In But-2-ene (CH₃-CH=CH-CH₃), each doubly bonded carbon is attached to two different groups (-H and -CH₃). Hence, it exhibits cis-trans geometrical isomerism. In But-1-ene, 2-methylpropene, and propene, at least one double-bonded carbon carries two identical hydrogen atoms (H₂C=), preventing geometrical isomerism.",
        "conceptTested": "Geometrical Isomerism Identification",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      },
      {
        "id": "pyq-alkenes-10",
        "year": 2014,
        "exam": "AIPMT 2014",
        "question": "In the reaction of CH₃-CH=CH₂ + HBr ──► A + B (where A is the major product), product A is:",
        "options": ["2-Bromopropane", "1-Bromopropane", "1,2-Dibromopropane", "Propane"],
        "correctAnswer": 0,
        "explanation": "In the absence of peroxide, addition of HBr to unsymmetrical propene (CH₃-CH=CH₂) follows Markovnikov's rule. H⁺ adds to C-1 (with 2 H's) to form the more stable 2° carbocation (CH₃-C⁺H-CH₃). Br⁻ then attacks C-2 to form 2-bromopropane as the major product A.",
        "conceptTested": "Markovnikov Addition of HBr",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkenes"
      }
    ]
  },
  "chem-alkynes": {
    "id": "chem-alkynes",
    "title": "Alkynes & Their Reactions",
    "chapterId": "hydrocarbons",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Structure, sp hybridisation (180° linear), acidic nature of terminal alkynes, metal acetylides, Lindlar vs Birch reduction, Kucherov hydration (Hg²⁺/H⁺), hydrohalogenation (gem-dihalides), and cyclic trimerisation.",
    "notes": {
      "learn": [
        "sp Hybridisation & Linear Geometry: C≡C carbons are sp hybridized with 180° bond angles and 120 pm bond length (1 σ-bond, 2 perpendicular π-bonds).",
        "Acidic Nature of Terminal Alkynes: Terminal alkynes (R-C≡C-H) have 50% s-character on sp carbon, making C-H polar and acidic (pKa ~25). React with Na and NaNH₂ to release H₂ and NH₃.",
        "Metal Acetylide Tests: Terminal alkynes form WHITE ppt with ammoniacal AgNO₃ (Tollens' reagent) and RED ppt with ammoniacal Cu₂Cl₂. Internal alkynes DO NOT react.",
        "Reduction Stereochemistry: Lindlar catalyst (Pd/CaCO₃ + quinoline) gives CIS-alkenes via syn-addition; Birch reduction (Na/liq. NH₃) gives TRANS-alkenes via anti-addition.",
        "Kucherov Hydration: H₂O addition catalyzed by 1% HgSO₄ / 20% H₂SO₄ at 333 K yields enol intermediate which tautomerises to carbonyl. Ethyne yields ETHANAL; Propyne yields PROPANONE.",
        "Hydrohalogenation: Addition of 2 moles of HX yields GEMINAL DIHALIDES (R-CX₂-CH₃) following Markovnikov's rule in both steps."
      ],
      "keyConcepts": [
        "Terminal Acidity: R-C≡C-H is weakly acidic due to 50% s-character on sp carbon (electronegativity = 3.1).",
        "Kucherov Reaction: Hg²⁺/H⁺ catalyzed hydration converts alkynes to enols, which rapidly tautomerise into carbonyl compounds (Ethanal from ethyne, Ketones from higher alkynes).",
        "Reduction Control: Lindlar = CIS-alkene (syn); Birch = TRANS-alkene (anti)."
      ],
      "formulas": [
        {
          "title": "General Alkne Formula",
          "formula": "C_n H_{2n-2}"
        },
        {
          "title": "Kucherov Hydration Equation",
          "formula": "R-C equiv CH + H_2O xrightarrow{1\% HgSO_4, 20\% H_2SO_4, 333 K} [R-C(OH)=CH_2] implies R-CO-CH_3"
        },
        {
          "title": "Cyclic Trimerisation to Benzene",
          "formula": "3 HC equiv CH xrightarrow{\text{Red hot Fe}, 873 K} C_6H_6"
        }
      ],
      "neetImportantPoints": [
        "ONLY Ethyne produces an aldehyde (ethanal) on hydration; all higher alkynes yield ketones.",
        "ONLY Terminal alkynes give white ppt with Tollens' reagent and red ppt with ammoniacal Cu₂Cl₂.",
        "Double elimination of vicinal dihalide requires NaNH₂ for 2nd step because vinyl halide C=C-X is resonance stabilized.",
        "3 Ethyne ──(Red hot Fe, 873 K)──► Benzene; 3 Propyne ──► Mesitylene (1,3,5-trimethylbenzene)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Expecting internal alkynes (e.g., But-2-yne) to give precipitates with Tollens' or Cu₂Cl₂ reagents.",
          "correctFact": "Internal alkynes lack terminal acidic hydrogens and DO NOT react with Tollens' or Cu₂Cl₂ reagents.",
          "whyItMattersForNEET": "Crucial distinction used in NEET diagnostic questions."
        },
        {
          "commonConfusion": "Believing hydration of propyne yields propanal.",
          "correctFact": "Hydration of propyne yields PROPANONE (acetone) because Markovnikov addition places -OH on C-2.",
          "whyItMattersForNEET": "Classic NEET trap question!"
        }
      ],
      "quickRevision": [
        "sp 180° linear, C≡C 120 pm, Terminal acidity (50% s-character), Tollens' white ppt & Cu₂Cl₂ red ppt (terminal ONLY), Lindlar (Cis) vs Birch (Trans), Kucherov hydration (Ethyne→Ethanal, Propyne→Propanone), 2 HX → Gem-dihalide, Cyclic trimerisation → Benzene."
      ]
    },
    "pyqs": [
      {
        "id": "pyq-alkynes-1",
        "year": 2014,
        "exam": "AIPMT 2014",
        "question": "The major product formed in the hydration of propyne with Hg²⁺ / H₂SO₄ is:",
        "options": ["CH₃-CH₂-CHO", "CH₃-CO-CH₃", "CH₃-CH₂-CH₂OH", "CH₃-CH(OH)-CH₃"],
        "correctAnswer": 1,
        "explanation": "Hydration of propyne (CH₃-C≡CH) catalyzed by Hg²⁺ and H₂SO₄ at 333 K undergoes Markovnikov addition of H₂O to form the enol intermediate CH₃-C(OH)=CH₂, which tautomerises rapidly into Propanone (acetone, CH₃-CO-CH₃).",
        "conceptTested": "Kucherov Hydration of Propyne",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      },
      {
        "id": "pyq-alkynes-2",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Which of the following hydrocarbon molecules possesses the highest acidic character?",
        "options": ["HC≡CH", "CH₂=CH₂", "CH₃-CH₃", "CH₃-CH=CH₂"],
        "correctAnswer": 0,
        "explanation": "Ethyne (HC≡CH) has sp hybridized carbons with 50% s-character. Because s-orbitals are held tightly by the carbon nucleus, sp carbon is the most electronegative among sp, sp², and sp³ carbons. Hence, the C-H bond in ethyne is most polar and releases H⁺ most readily (pKa ~25), making ethyne the most acidic hydrocarbon listed.",
        "conceptTested": "Acidity Order of Hydrocarbons & Hybridisation",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      },
      {
        "id": "pyq-alkynes-3",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Product formed by the reaction of HC≡CH with H₂O in the presence of HgSO₄ and H₂SO₄ at 333 K is:",
        "options": ["Ethanal", "Ethanol", "Ethene", "Methanal"],
        "correctAnswer": 0,
        "explanation": "Hydration of ethyne (HC≡CH) in 1% HgSO₄ / 20% H₂SO₄ at 333 K yields vinyl alcohol [CH₂=CH-OH] as an unstable enol intermediate, which spontaneously tautomerises to Ethanal (acetaldehyde, CH₃CHO). Ethyne is the only alkyne that gives an aldehyde on hydration.",
        "conceptTested": "Ethyne Hydration to Ethanal",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      },
      {
        "id": "pyq-alkynes-4",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Which of the following alkynes reacts with ammoniacal AgNO₃ to give a white precipitate?",
        "options": ["But-1-yne", "But-2-yne", "Pent-2-yne", "Hex-3-yne"],
        "correctAnswer": 0,
        "explanation": "Only terminal alkynes containing acidic -C≡C-H hydrogens react with ammoniacal silver nitrate (Tollens' reagent) to form a white precipitate of silver acetylide. But-1-yne (CH₃-CH₂-C≡C-H) is the only terminal alkyne among the options.",
        "conceptTested": "Tollens Test for Terminal Alkynes",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      },
      {
        "id": "pyq-alkynes-5",
        "year": 2004,
        "exam": "AIPMT 2004",
        "question": "When propyne reacts with 2 equivalents of HBr, the major product is:",
        "options": ["1,2-Dibromopropane", "2,2-Dibromopropane", "1,1-Dibromopropane", "1,3-Dibromopropane"],
        "correctAnswer": 1,
        "explanation": "Addition of HBr to propyne follows Markovnikov's rule in both consecutive steps. Step 1: CH₃-C≡CH + HBr ──► CH₃-C(Br)=CH₂. Step 2: CH₃-C(Br)=CH₂ + HBr ──► CH₃-C(Br)₂-CH₃. The major product is 2,2-dibromopropane (a geminal dihalide).",
        "conceptTested": "Hydrohalogenation of Alkynes",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      },
      {
        "id": "pyq-alkynes-6",
        "year": 1996,
        "exam": "AIPMT 1996",
        "question": "Calcium carbide on reaction with water gives:",
        "options": ["Methane", "Ethane", "Ethyne", "Ethene"],
        "correctAnswer": 2,
        "explanation": "Hydrolysis of calcium carbide (CaC₂) yields ethyne (acetylene) gas and calcium hydroxide: CaC₂ + 2 H₂O ──► HC≡CH + Ca(OH)₂.",
        "conceptTested": "Industrial Preparation of Ethyne",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      },
      {
        "id": "pyq-alkynes-8",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "When ethyne is passed through a red-hot iron tube at 873 K, the product formed is:",
        "options": ["Benzene", "Cyclohexane", "Ethane", "Toluene"],
        "correctAnswer": 0,
        "explanation": "Passing ethyne (C₂H₂) gas through a red-hot iron tube at 873 K causes cyclic trimerisation of three ethyne molecules to form Benzene (C₆H₆): 3 C₂H₂ ──► C₆H₆.",
        "conceptTested": "Cyclic Trimerisation of Ethyne",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      },
      {
        "id": "pyq-alkynes-9",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "In the reaction: CH₃-C≡CH ──(NaNH₂ in liq. NH₃)──► A ──(CH₃-CH₂-Br)──► B, the compound B is:",
        "options": ["But-1-yne", "Pent-2-yne", "Pent-1-yne", "But-2-yne"],
        "correctAnswer": 1,
        "explanation": "Propyne (CH₃-C≡CH) reacts with NaNH₂ to form sodium propynide A (CH₃-C≡C⁻ Na⁺). Treatment of A with ethyl bromide (CH₃-CH₂-Br) undergoes S_N2 nucleophilic substitution to give Pent-2-yne (CH₃-C≡C-CH₂-CH₃) as product B.",
        "conceptTested": "Alkyne Chain Lengthening via Sodium Acetylide",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-alkynes"
      }
    ]
  },
  "chem-aromatic-hydrocarbons": {
    "id": "chem-aromatic-hydrocarbons",
    "title": "Aromatic Hydrocarbons (Benzene & Its Derivatives)",
    "chapterId": "hydrocarbons",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Benzene resonance (150.6 kJ/mol), Hückel's rule ((4n+2) π e⁻), electrophilic aromatic substitution (nitration, sulphonation, halogenation, Friedel-Crafts alkylation/acylation), directing effects, halogen special case, and side-chain reactions.",
    "notes": {
      "learn": [
        "Benzene Structure & Resonance: Planar hexagonal ring of sp² carbon atoms with C-C bond length of 139 pm (intermediate between C-C 154 pm and C=C 134 pm). Resonance energy is 150.6 kJ/mol (36 kcal/mol).",
        "Hückel Criteria for Aromaticity: Cyclic, planar, continuously conjugated system containing (4n + 2) π electrons (where n = 0, 1, 2, 3...). Antiaromatic systems have 4n π electrons.",
        "EAS Mechanism: Benzene acts as a nucleophile reacting with electrophiles (E⁺) via 3 steps: Generation of E⁺ ──► Attack forming Arenium ion / σ-complex (slow, RDS) ──► Proton loss restoring aromaticity (fast).",
        "Nitration & Sulphonation: Nitration (conc. HNO₃ + conc. H₂SO₄) involves NO₂⁺ electrophile; HNO₃ acts as a BASE. Sulphonation (Oleum) involves neutral SO₃ electrophile and is REVERSIBLE.",
        "Friedel-Crafts Reactions: Alkylation (R-X + AlCl₃) involves R⁺ carbocation and is prone to rearrangement (1-Cl-propane gives Cumene!). Acylation (RCOCl + AlCl₃) forms acylium ion with NO rearrangement. Aniline and Nitrobenzene FAIL FC reactions.",
        "Directing Effects: Activators (+R/+I) direct Ortho/Para. Deactivators (-R/-I) direct Meta. Halogens are DEACTIVATING (-I) but ORTHO/PARA DIRECTING (+R).",
        "Side-Chain Reactions: Toluene + Cl₂/FeCl₃ gives o/p-chlorotoluene, whereas Cl₂/hν gives Benzyl chloride (C₆H₅CH₂Cl). KMnO₄ oxidation converts alkyl side chains with ≥1 benzylic H into Benzoic Acid."
      ],
      "keyConcepts": [
        "Aromaticity (Hückel's Rule): (4n + 2) π electrons in a planar, cyclic, fully conjugated system.",
        "EAS Mechanism: Electrophile attack generates non-aromatic Arenium ion intermediate; proton loss restores 150.6 kJ/mol resonance energy.",
        "Halogen Anomaly: Deactivating due to -I effect, but Ortho/Para directing due to +R effect.",
        "Benzylic Oxidation: KMnO₄ converts alkyl side chain to -COOH provided at least one benzylic H is present (tert-butylbenzene fails)."
      ],
      "formulas": [
        {
          "title": "Hückel's Rule",
          "formula": "\text{Number of } \pi \text{ electrons} = 4n + 2 \quad (n = 0, 1, 2, 3...)"
        },
        {
          "title": "Nitronium Ion Generation",
          "formula": "HNO_3 + 2 H_2SO_4 rightleftharpoons NO_2^+ + H_3O^+ + 2 HSO_4^-"
        },
        {
          "title": "Friedel-Crafts Alkylation",
          "formula": "C_6H_6 + R-X xrightarrow{\text{Anhyd. } AlCl_3} C_6H_5-R + HX"
        }
      ],
      "neetImportantPoints": [
        "HNO₃ acts as a BASE in the nitrating mixture (accepts H⁺ from H₂SO₄).",
        "Halogens deactivate the benzene ring (-I effect) but direct incoming electrophiles to Ortho & Para positions (+R effect).",
        "Aniline and Nitrobenzene DO NOT undergo Friedel-Crafts reactions.",
        "FC Alkylation of 1-chloropropane with benzene yields ISOPROPYLBENZENE (cumene) due to carbocation rearrangement.",
        "tert-Butylbenzene [C₆H₅-C(CH₃)₃] has zero benzylic hydrogens and DOES NOT oxidize with KMnO₄."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Treating n in Hückel's rule (4n+2) as the number of benzene rings.",
          "correctFact": "n is a mathematical integer (0, 1, 2, 3...), NOT the ring count! For benzene (6 π e⁻), 4n + 2 = 6 gives n = 1.",
          "whyItMattersForNEET": "Common mistake in aromaticity determination questions."
        },
        {
          "commonConfusion": "Expecting chlorobenzene to be meta-directing because chlorine is deactivating.",
          "correctFact": "Chlorine deactivates the ring due to -I effect, but directs incoming groups to ORTHO and PARA positions due to lone-pair +R resonance donation.",
          "whyItMattersForNEET": "Classic NEET trap question!"
        }
      ],
      "quickRevision": [
        "Benzene 139 pm planar, Hückel (4n+2) π e⁻, EAS Arenium ion RDS, Nitration (NO₂⁺, HNO₃ base), Sulphonation (SO₃, reversible), FC Alkylation (R⁺ rearranges!), FC Acylation (R-C≡O⁺ no rearrangement!), Halogen (deactivating but o/p directing), Cl₂/hν = Benzylic CH₂Cl, KMnO₄ = Benzoic acid (needs benzylic H)."
      ]
    },
    "pyqs": [
      {
        "id": "pyq-aromatic-1",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "Reaction of toluene with Cl₂ in the presence of FeCl₃ yields X, while reaction of toluene with Cl₂ in the presence of light yields Y. The compounds X and Y are respectively:",
        "options": [
          "X = Benzyl chloride, Y = o- and p-Chlorotoluene",
          "X = o- and p-Chlorotoluene, Y = Benzyl chloride",
          "X = m-Chlorotoluene, Y = p-Chlorotoluene",
          "X = Benzyl chloride, Y = m-Chlorotoluene"
        ],
        "correctAnswer": 1,
        "explanation": "Toluene reacts with Cl₂ in the presence of Lewis acid FeCl₃ via Electrophilic Aromatic Substitution (EAS) on the ring to yield o- and p-chlorotoluene (X). Toluene reacts with Cl₂ in the presence of light (hν) via Free Radical Substitution at the benzylic side chain to yield Benzyl chloride C₆H₅CH₂Cl (Y).",
        "conceptTested": "Ring Substitution vs Side-chain Halogenation",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-2",
        "year": 2010,
        "exam": "AIPMT 2010",
        "question": "The correct order of reactivity towards electrophilic aromatic substitution for the following compounds is: (I) Benzene, (II) Phenol, (III) Nitrobenzene, (IV) Chlorobenzene:",
        "options": [
          "Phenol > Benzene > Chlorobenzene > Nitrobenzene",
          "Phenol > Chlorobenzene > Benzene > Nitrobenzene",
          "Nitrobenzene > Chlorobenzene > Benzene > Phenol",
          "Phenol > Benzene > Nitrobenzene > Chlorobenzene"
        ],
        "correctAnswer": 0,
        "explanation": "Phenol contains -OH (+R > -I) which strongly activates the ring. Benzene has standard reactivity. Chlorobenzene is weakly deactivated (-I > +R). Nitrobenzene contains -NO₂ (-R, -I) which strongly deactivates the ring. Hence, reactivity order is: Phenol (II) > Benzene (I) > Chlorobenzene (IV) > Nitrobenzene (III).",
        "conceptTested": "EAS Reactivity Order & Directing Effects",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-3",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "Which of the following chemical species is aromatic according to Hückel's rule?",
        "options": ["Cyclooctatetraene", "Cyclopentadienyl cation", "Tropylium cation", "Cyclobutadiene"],
        "correctAnswer": 2,
        "explanation": "Tropylium cation (C₇H₇⁺) is a planar, cyclic, completely conjugated 7-membered ring containing 6 π-electrons. Applying Hückel's rule: 4n + 2 = 6 gives n = 1 (an integer). Hence, Tropylium cation is aromatic. Cyclobutadiene (4 π e⁻) and Cyclopentadienyl cation (4 π e⁻) are antiaromatic, while Cyclooctatetraene is tub-shaped and non-aromatic.",
        "conceptTested": "Hückel Rule of Aromaticity",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-4",
        "year": 2000,
        "exam": "AIPMT 2000",
        "question": "Reaction of benzene with CH₃Cl in the presence of anhydrous AlCl₃ gives toluene. This reaction is known as:",
        "options": ["Wurtz-Fittig reaction", "Friedel-Crafts alkylation", "Friedel-Crafts acylation", "Kolbe's reaction"],
        "correctAnswer": 1,
        "explanation": "Reaction of an aromatic hydrocarbon like benzene with an alkyl halide (CH₃Cl) in the presence of anhydrous AlCl₃ catalyst to yield an alkylbenzene (toluene) is known as Friedel-Crafts alkylation.",
        "conceptTested": "Friedel-Crafts Alkylation Reaction",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-5",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "Which of the following compounds will undergo electrophilic substitution reaction most readily?",
        "options": ["Aniline", "Nitrobenzene", "Benzene", "Benzoic acid"],
        "correctAnswer": 0,
        "explanation": "Aniline contains an amino group (-NH₂) attached to the benzene ring. The lone pair on nitrogen donates electron density into the ring through strong +R resonance effect, making aniline extremely electron-rich and most reactive toward electrophilic substitution.",
        "conceptTested": "Activating Effect of Substituents in EAS",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-6",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "In the nitration of benzene with concentrated HNO₃ and concentrated H₂SO₄, the active electrophile attacking the ring is:",
        "options": ["NO₂⁺", "NO⁺", "NO₃⁻", "NO₂⁻"],
        "correctAnswer": 0,
        "explanation": "In the nitrating mixture, sulfuric acid protonates nitric acid to generate the Nitronium ion (NO₂⁺), which serves as the active electrophile in electrophilic aromatic substitution.",
        "conceptTested": "Active Electrophile in Nitration",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-7",
        "year": 2011,
        "exam": "AIPMT 2011",
        "question": "Which of the following can be used as the halide component for Friedel-Crafts alkylation reaction with benzene?",
        "options": ["Chlorobenzene", "Bromobenzene", "Isopropyl chloride", "Vinyl chloride"],
        "correctAnswer": 2,
        "explanation": "Friedel-Crafts alkylation requires an alkyl halide capable of forming a stable carbocation upon treatment with AlCl₃. Isopropyl chloride (CH₃-CHCl-CH₃) easily generates a stable secondary carbocation. Vinylic halides (vinyl chloride) and aryl halides (chlorobenzene, bromobenzene) have partial C=C double bond character due to resonance and DO NOT form carbocations with AlCl₃.",
        "conceptTested": "Substrate Eligibility for Friedel-Crafts Alkylation",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-9",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "Oxidation of toluene with alkaline KMnO₄ followed by treatment with dilute HCl yields:",
        "options": ["Benzaldehyde", "Benzoic acid", "Benzyl alcohol", "Benzoyl chloride"],
        "correctAnswer": 1,
        "explanation": "Toluene (C₆H₅CH₃) possesses 3 benzylic hydrogen atoms. Refluxing toluene with alkaline KMnO₄ oxidizes the methyl side chain to potassium benzoate (C₆H₅COOK), which upon acidification with dilute HCl gives Benzoic acid (C₆H₅COOH).",
        "conceptTested": "Side-Chain Oxidation of Alkylbenzenes",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      },
      {
        "id": "pyq-aromatic-10",
        "year": 2012,
        "exam": "AIPMT 2012",
        "question": "Which of the following compounds is Meta-directing towards electrophilic aromatic substitution?",
        "options": ["-OCH₃", "-NHCOCH₃", "-NO₂", "-OH"],
        "correctAnswer": 2,
        "explanation": "The nitro group (-NO₂) is strongly electron-withdrawing through both resonance (-R) and inductive (-I) effects. It deactivates the ortho and para positions by placing formal positive charges on them, making the Meta position preferentially reactive toward incoming electrophiles.",
        "conceptTested": "Meta Directing Substituents in EAS",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-aromatic-hydrocarbons"
      }
    ]
  },
  "chem-group-13-elements": {
    "id": "chem-group-13-elements",
    "title": "Group 13 Elements (Boron Family & Compounds)",
    "chapterId": "p-block-11",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Anomalous properties of Boron, Borax, Boric acid, and Diborane (3-center-2-electron bonds).",
    "notes": {
      "learn": [
        "Diborane (B2H6) structure: Contains 4 terminal 2-center-2-electron B-H bonds and 2 bridging 3-center-2-electron (banana) bonds.",
        "Boric acid H3BO3 is a weak MONOBASIC Lewis acid (not a proton donor; accepts OH⁻ from water: B(OH)3 + H2O ⇌ [B(OH)4]⁻ + H⁺)."
      ],
      "keyConcepts": [
        "Diborane (B2H6) structure: Contains 4 terminal 2-center-2-electron B-H bonds and 2 bridging 3-center-2-electron (banana) bonds."
      ],
      "formulas": [
        {
          "title": "Diborane Bonding",
          "formula": "B_2H_6 implies 4|terminal (2c-2e) bonds + 2|bridge (3c-2e) bonds"
        }
      ],
      "neetImportantPoints": [
        "Borax bead test gives colored metaborates with transition metal cations (e.g. Cobalt gives blue bead)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Group 13 Elements (Boron Family & Compounds).",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Group 13 Elements (Boron Family & Compounds).",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "B2H6 has 2 banana bonds, H3BO3 is Lewis acid"
      ]
    },
    "pyqs": []
  },
  "chem-group-14-elements": {
    "id": "chem-group-14-elements",
    "title": "Group 14 Elements (Carbon Family, Silicates & Silicones)",
    "chapterId": "p-block-11",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Allotropes of Carbon (Diamond, Graphite, Fullerenes), Silicones, and Silicate structures.",
    "notes": {
      "learn": [
        "Diamond is sp³ hybridized, 3D network, hardest insulator. Graphite is sp² hybridized, planar layers, conducts electricity due to free π electrons.",
        "Silicones are organosilicon polymers with repeating R2SiO units containing hydrophobic alkyl groups."
      ],
      "keyConcepts": [
        "Diamond is sp³ hybridized, 3D network, hardest insulator. Graphite is sp² hybridized, planar layers, conducts electricity due to free π electrons."
      ],
      "formulas": [
        {
          "title": "Silicate Building Unit",
          "formula": "Basic structural unit of all silicates is SiO_4^{4-}|tetrahedron"
        }
      ],
      "neetImportantPoints": [
        "Catenation tendency order: C >> Si > Ge ≈ Sn."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Group 14 Elements (Carbon Family, Silicates & Silicones).",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Group 14 Elements (Carbon Family, Silicates & Silicones).",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "SiO4⁴⁻ tetrahedron in silicates, Graphite is sp² conductor"
      ]
    },
    "pyqs": []
  },
  "chem-group-15-elements": {
    "id": "chem-group-15-elements",
    "title": "Group 15 Elements (Nitrogen Family — Trends, Anomalies, N₂, NH₃, HNO₃, Oxides & Phosphine)",
    "chapterId": "p-block-12",
    "estimatedReadTimeMinutes": 35,
    "importanceWeight": "High Yield",
    "summary": "Nitrogen anomalous behavior, Ammonia (Haber process), Nitric Acid (Ostwald process), Oxides of Nitrogen, Phosphorus Allotropes, and Hydrides trends.",
    "notes": {
      "learn": [
        "Nitrogen forms N2 molecule with N≡N triple bond (high bond dissociation energy 941.4 kJ/mol).",
        "Nitric acid (HNO3) is a strong oxidizing agent. Concentrated HNO3 renders Fe and Al passive due to protective oxide layer formation.",
        "Group 15 Hydride trends: Basicity NH3 > PH3 > AsH3 > SbH3 > BiH3; Reducing power NH3 < PH3 < AsH3 < SbH3 < BiH3 (BiH3 is strongest reducing agent).",
        "Phosphorus allotropes: White P4 (60° angle strain, poisonous, soluble in CS2) vs Red P (polymeric, stable, non-poisonous)."
      ],
      "keyConcepts": [
        "Nitrogen forms N2 molecule with N≡N triple bond (high bond dissociation energy 941.4 kJ/mol).",
        "Inert pair effect makes Bi(III) much more stable than Bi(V); Bi(V) is a powerful oxidizing agent.",
        "Cu + dil HNO3 gives NO; Cu + conc HNO3 gives NO2; Zn + dil HNO3 gives N2O; Zn + conc HNO3 gives NO2."
      ],
      "formulas": [
        {
          "title": "Haber Process",
          "formula": "N_2(g) + 3H_2(g) \\xrightleftharpoons[700\\text{ K}, 200\\text{ atm}]{\\text{FeO}+\\text{K}_2\\text{O}+\\text{Al}_2\\text{O}_3} 2NH_3(g), \\quad \\Delta H = -92.4\\text{ kJ/mol}"
        },
        {
          "title": "Ostwald's Process Key Step",
          "formula": "4 NH_3(g) + 5 O_2(g) \\xrightarrow[500\\text{ K}, 9\\text{ bar}]{\\text{Pt/Rh gauze}} 4 NO(g) + 6 H_2O(g)"
        }
      ],
      "neetImportantPoints": [
        "Phosphine (PH3) is prepared by heating white phosphorus with NaOH solution in inert CO2 atmosphere: P4 + 3 NaOH + 3 H2O -> PH3 + 3 NaH2PO2.",
        "N2O and NO are the only two neutral oxides of nitrogen; all others are acidic.",
        "H3PO2 is monobasic and strongest reducing phosphorus oxoacid due to 2 P-H bonds."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming Nitrogen can form NCl5 because it is in Group 15.",
          "correctFact": "Nitrogen lacks vacant d-orbitals in its valence shell (n=2). Its maximum covalency is strictly 4. NCl5 cannot exist.",
          "whyItMattersForNEET": "Frequently tested in NEET assertion-reasoning and multiple-choice questions."
        },
        {
          "commonConfusion": "Confusing reducing power with basicity in Group 15 hydrides.",
          "correctFact": "Basicity: NH3 > PH3 > AsH3 > SbH3 > BiH3 (lone pair density on small N). Reducing power: NH3 < PH3 < AsH3 < SbH3 < BiH3 (weakest Bi-H bond).",
          "whyItMattersForNEET": "High-frequency NEET trend question."
        }
      ],
      "quickRevision": [
        "N2 triple bond (941.4 kJ/mol), Passive Fe/Al/Cr in conc HNO3, White P4 (60° strain) -> Red P, H3PO2 (2 P-H bonds, strongest reducing oxoacid)."
      ]
    },
    "pyqs": []
  },
  "chem-group-16-elements": {
    "id": "chem-group-16-elements",
    "title": "Group 16 Elements (Oxygen Family — O₂, O₃, Sulphur Allotropes, SO₂, H₂SO₄ & Oxoacids)",
    "chapterId": "p-block-12",
    "estimatedReadTimeMinutes": 35,
    "importanceWeight": "High Yield",
    "summary": "Dioxygen, Ozone (resonance, KI estimation), Sulphur allotropes (Rhombic, Monoclinic, S2 vapor), SO2, and Sulphuric Acid (Contact process, oxoacids).",
    "notes": {
      "learn": [
        "Negative electron gain enthalpy anomaly: S > Se > Te > Po > O (Oxygen has least negative value due to 2p electron repulsion).",
        "Ozone O3 is a powerful oxidizing agent (O3 -> O2 + [O]). Estimated quantitatively by reaction with excess KI in borate buffer (liberates I2 titrated against hypo).",
        "Sulphuric acid H2SO4 acts as dehydrating agent (charring of sugar: C12H22O11 -> 12 C + 11 H2O) and oxidizing agent.",
        "Sulphur allotropes: α-Rhombic is stable below 369 K; β-Monoclinic is stable above 369 K (transition temp 369 K). S2 vapor at 1000 K is PARAMAGNETIC (like O2)."
      ],
      "keyConcepts": [
        "Acidic strength of Group 16 hydrides: H2O < H2S < H2Se < H2Te (H2Te is strongest acid due to lowest bond enthalpy).",
        "Marshall's acid (H2S2O8) contains a peroxy (-O-O-) linkage; Oleum (H2S2O7) contains an -S-O-S- bridge.",
        "SO2 bleaches by reduction (temporary); Cl2 bleaches by oxidation (permanent)."
      ],
      "formulas": [
        {
          "title": "Contact Process Key Reversible Oxidation",
          "formula": "2 SO_2(g) + O_2(g) \\xrightleftharpoons[720\\text{ K}, 2\\text{ bar}]{\\text{V}_2\\text{O}_5} 2 SO_3(g), \\quad \\Delta H = -196.6\\text{ kJ/mol}"
        },
        {
          "title": "Quantitative Estimation of Ozone",
          "formula": "O_3 + 2 I^- + H_2O \\xrightarrow{\\text{Borate buffer}} 2 OH^- + I_2 + O_2 \\\\ I_2 + 2 Na_2S_2O_3 \\rightarrow 2 NaI + Na_2S_4O_6"
        }
      ],
      "neetImportantPoints": [
        "Negative ΔegH order: S > Se > Te > Po > O.",
        "S2 molecule in vapor phase at 1000 K is PARAMAGNETIC (has 2 unpaired electrons in π* antibonding orbitals).",
        "Marshall's acid (H2S2O8) contains peroxy (-O-O-) linkage (NEET 2024 Question!)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Thinking Oxygen has more negative electron gain enthalpy than Sulphur.",
          "correctFact": "Sulphur (-200 kJ/mol) has more negative ΔegH than Oxygen (-141 kJ/mol) because 2p orbital in O is compact and causes high repulsion.",
          "whyItMattersForNEET": "Repeatedly tested in NEET ranking questions."
        },
        {
          "commonConfusion": "Confusing the bleaching action of SO2 with Cl2.",
          "correctFact": "SO2 bleaches by reduction (temporary; air re-oxidizes it); Cl2 bleaches by oxidation (permanent).",
          "whyItMattersForNEET": "High-yield conceptual question in NEET."
        }
      ],
      "quickRevision": [
        "Negative ΔegH: S > Se > Te > Po > O; Transition temp 369 K; S2 paramagnetic at 1000 K; Marshall's acid H2S2O8 (-O-O- peroxy); Contact process V2O5 catalyst."
      ]
    },
    "pyqs": []
  },
  "chem-group-17-elements": {
    "id": "chem-group-17-elements",
    "title": "Group 17 Elements (Halogens — Trends, Anomalies, F₂ vs Cl₂, Oxidising Power, HCl, Interhalogens & Oxoacids)",
    "chapterId": "p-block-12",
    "estimatedReadTimeMinutes": 35,
    "importanceWeight": "High Yield",
    "summary": "Halogen anomalies (electron gain enthalpy, bond dissociation enthalpy), Oxidizing power, Deacon's process, Interhalogen compounds (ClF3, BrF5, IF7), and Oxoacids.",
    "notes": {
      "learn": [
        "Negative electron gain enthalpy: Cl (-349) > F (-333) > Br (-325) > I (-295 kJ/mol). Cl is highest in the periodic table.",
        "Bond dissociation enthalpy: Cl2 (242.6) > Br2 (192.8) > F2 (158.8) > I2 (151.1 kJ/mol). F2 is lower due to strong lp-lp repulsion.",
        "Interhalogen compounds (XX'n) are MORE reactive than parent halogens (except F2) due to weaker polar X-X' bonds.",
        "VSEPR Shapes: ClF3 (T-shaped, sp³d), BrF5 (Square pyramidal, sp³d²), IF7 (Pentagonal bipyramidal, sp³d³)."
      ],
      "keyConcepts": [
        "Fluorine is the strongest oxidizing agent in water (E° = +2.87 V) due to low bond energy and huge hydration enthalpy.",
        "Acidic strength of hydracids: HF < HCl < HBr < HI (HI is strongest acid due to lowest bond enthalpy).",
        "Cold dilute NaOH + Cl2 -> NaCl + NaOCl; Hot concentrated NaOH + Cl2 -> NaCl + NaClO3.",
        "Acidic strength of chlorine oxoacids: HClO < HClO2 < HClO3 < HClO4 (HClO4 is strongest acid)."
      ],
      "formulas": [
        {
          "title": "Deacon's Process",
          "formula": "4 HCl(g) + O_2(g) \\xrightarrow[723\\text{ K}]{\\text{CuCl}_2} 2 Cl_2(g) + 2 H_2O(g)"
        },
        {
          "title": "Disproportionation of Chlorine in Alkali",
          "formula": "2 NaOH(\\text{cold, dil}) + Cl_2 \\rightarrow NaCl + NaOCl + H_2O \\\\ 6 NaOH(\\text{hot, conc}) + 3 Cl_2 \\rightarrow 5 NaCl + NaClO_3 + 3 H_2O"
        }
      ],
      "neetImportantPoints": [
        "Cl has highest negative ΔegH in the periodic table.",
        "Bond dissociation enthalpy: Cl2 > Br2 > F2 > I2.",
        "ClF3 is T-shaped (sp³d with 2 equatorial lone pairs).",
        "Aqua regia is 3 parts conc. HCl + 1 part conc. HNO3."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Predicting bond dissociation enthalpy order as F2 > Cl2 > Br2 > I2.",
          "correctFact": "Actual order: Cl2 > Br2 > F2 > I2. F2 is lower than Cl2 and Br2 due to lp-lp repulsion.",
          "whyItMattersForNEET": "Classic NEET trap that appears regularly."
        },
        {
          "commonConfusion": "Assuming HF is the strongest acid among halogen hydracids.",
          "correctFact": "Acidic strength is HI > HBr > HCl > HF because H-I bond is weakest and ionizes most easily.",
          "whyItMattersForNEET": "Crucial acid strength concept in inorganic chemistry."
        }
      ],
      "quickRevision": [
        "ΔegH: Cl > F > Br > I; Bond energy: Cl2 > Br2 > F2 > I2; Oxidizing power: F2 > Cl2 > Br2 > I2; ClF3 (T-shape); BrF5 (Square pyramidal); IF7 (Pentagonal bipyramidal)."
      ]
    },
    "pyqs": []
  },
  "chem-group-18-elements": {
    "id": "chem-group-18-elements",
    "title": "Group 18 Elements (Noble Gases — Inertness, Bartlett's Landmark Reaction, Xenon Compounds & Uses)",
    "chapterId": "p-block-12",
    "estimatedReadTimeMinutes": 35,
    "importanceWeight": "High Yield",
    "summary": "Noble gas inertness, Neil Bartlett's landmark synthesis of Xe+[PtF6]-, Xenon fluorides preparation, VSEPR geometries (XeF2, XeF4, XeF6, XeO3, XeOF4), and applications.",
    "notes": {
      "learn": [
        "Noble gases have stable ns² np⁶ configurations, highest ionization enthalpies, large positive ΔegH, and lowest boiling points (He: 4.2 K).",
        "Neil Bartlett (1962) synthesized first noble gas compound Xe+[PtF6]- based on matching IE of Xe (1170 kJ/mol) with O2 (1175 kJ/mol).",
        "XeF2 (Linear, sp³d, 3 lp), XeF4 (Square planar, sp³d², 2 lp), XeF6 (Distorted octahedral, sp³d³, 1 lp), XeO3 (Pyramidal, sp³, 1 lp, explosive solid), XeOF4 (Square pyramidal, sp³d², 1 lp).",
        "Complete hydrolysis: XeF6 + 3 H2O -> XeO3 + 6 HF. XeF4 hydrolysis is a disproportionation: 6 XeF4 + 12 H2O -> 2 Xe + 4 XeO3 + 24 HF + 3 O2."
      ],
      "keyConcepts": [
        "Helium in deep sea diving gas mixture (80% He + 20% O2) prevents bends due to low solubility in blood.",
        "Liquid Helium (4.2 K) maintains superconductivity in MRI scanner magnets.",
        "Argon provides inert atmosphere in metallurgical arc welding and electric light bulbs."
      ],
      "formulas": [
        {
          "title": "Xenon Fluorides Preparation",
          "formula": "Xe + F_2 \\xrightarrow[673\\text{ K}, 1\\text{ bar}]{1:1} XeF_2 \\\\ Xe + 2F_2 \\xrightarrow[873\\text{ K}, 7\\text{ bar}]{1:5} XeF_4 \\\\ Xe + 3F_2 \\xrightarrow[573\\text{ K}, 60-70\\text{ bar}]{1:20} XeF_6"
        },
        {
          "title": "Hydrolysis of XeF4 Disproportionation",
          "formula": "6 XeF_4 + 12 H_2O \\rightarrow 2 Xe + 4 XeO_3 + 24 HF + 3 O_2"
        }
      ],
      "neetImportantPoints": [
        "Bartlett's landmark discovery: Xe+[PtF6]- based on IE(Xe) ≈ IE(O2).",
        "XeF2 is Linear (3 equatorial lp); XeF4 is Square Planar (2 axial lp); XeF6 is Distorted Octahedral (1 lp).",
        "Complete hydrolysis of XeF6 yields XeO3 + HF without evolving O2 gas."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming XeF2 has a bent shape because it has 2 fluorine atoms.",
          "correctFact": "In XeF2, the 3 lone pairs occupy equatorial positions (120° apart) to minimize repulsions, leaving the two axial Xe-F bonds in a perfectly LINEAR geometry (180°).",
          "whyItMattersForNEET": "Frequently tested VSEPR question in NEET."
        },
        {
          "commonConfusion": "Confusing hydrolysis of XeF4 with XeF6.",
          "correctFact": "Hydrolysis of XeF4 produces Xe(0), XeO3, HF, and O2 (disproportionation). Hydrolysis of XeF6 produces only XeO3 and HF.",
          "whyItMattersForNEET": "High-yield reaction completion question in NEET."
        }
      ],
      "quickRevision": [
        "Bartlett 1962 Xe+[PtF6]-; XeF2 Linear (sp³d); XeF4 Square Planar (sp³d²); XeF6 Distorted Octahedral (sp³d³); XeO3 Pyramidal; He in diving (prevents bends); Liquid He in MRI."
      ]
    },
    "pyqs": []
  },
  "chem-group-17-18-elements": {
    "id": "chem-group-17-18-elements",
    "title": "Group 17 & 18 Elements (Halogens & Noble Gases Combined Module)",
    "chapterId": "p-block-12",
    "estimatedReadTimeMinutes": 35,
    "importanceWeight": "High Yield",
    "summary": "Interhalogen compounds, Oxoacids of halogens, Xenon fluorides structures and Bartlett's reaction.",
    "notes": {
      "learn": [
        "Interhalogen compounds (XX'_n, where n = 1, 3, 5, 7) are MORE reactive than parent halogens (except F2) due to weaker X-X' bond.",
        "XeF2 (linear, sp³d, 3 lp), XeF4 (square planar, sp³d², 2 lp), XeF6 (distorted octahedral, sp³d³), XeO3 (trigonal pyramidal).",
        "Negative ΔegH: Cl > F > Br > I; Bond energy: Cl2 > Br2 > F2 > I2."
      ],
      "keyConcepts": [
        "Interhalogen compounds (XX'_n, where n = 1, 3, 5, 7) are MORE reactive than parent halogens (except F2) due to weaker X-X' bond.",
        "Neil Bartlett (1962) synthesized first noble gas compound Xe+[PtF6]- based on matching IE of Xe with O2."
      ],
      "formulas": [
        {
          "title": "XeF4 Geometry",
          "formula": "XeF_4 implies sp^3d^2\\text{ hybridization with 2 lone pairs } \\rightarrow \\text{Square Planar}"
        }
      ],
      "neetImportantPoints": [
        "Fluorine exhibits ONLY -1 oxidation state in its compounds due to highest electronegativity.",
        "Helium in diving tanks prevents bends due to low blood solubility."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Group 17 & 18 Elements (Halogens & Noble Gases).",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Group 17 & 18 Elements (Halogens & Noble Gases).",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Interhalogens more reactive, XeF4 = Square Planar, Bartlett Xe+[PtF6]-, Cl highest negative ΔegH."
      ]
    },
    "pyqs": []
  },
  "chem-henrys-raoults-law": {
    "id": "chem-henrys-raoults-law",
    "title": "Henry's Law & Raoult's Law",
    "chapterId": "solutions",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Solubility of gases in liquids, Henry's law constant K_H, and Raoult's law for volatile solute.",
    "notes": {
      "learn": [
        "Henry's Law: Partial pressure of gas P = K_H x. Higher K_H means LOWER solubility at a given pressure.",
        "Raoult's Law for volatile liquids: P_total = P_A° x_A + P_B° x_B."
      ],
      "keyConcepts": [
        "Henry's Law: Partial pressure of gas P = K_H x. Higher K_H means LOWER solubility at a given pressure."
      ],
      "formulas": [
        {
          "title": "Henry's Law",
          "formula": "P = K_H cdot x"
        }
      ],
      "neetImportantPoints": [
        "Aquatic species are more comfortable in cold water than warm water because gas solubility increases at lower temperature (K_H decreases)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Henry's Law & Raoult's Law.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Henry's Law & Raoult's Law.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "High K_H = Low gas solubility"
      ]
    },
    "pyqs": []
  },
  "chem-ideal-nonideal-solutions": {
    "id": "chem-ideal-nonideal-solutions",
    "title": "Ideal & Non-Ideal Solutions (Azeotropes)",
    "chapterId": "solutions",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Positive and negative deviations from Raoult's law and minimum/maximum boiling azeotropes.",
    "notes": {
      "learn": [
        "Ideal Solution obeys Raoult's law at all concentrations: Δ_mix H = 0, Δ_mix V = 0.",
        "Positive Deviation: A-B interactions WEAKER than A-A and B-B (e.g. Ethanol + Acetone). Forms Minimum Boiling Azeotrope."
      ],
      "keyConcepts": [
        "Ideal Solution obeys Raoult's law at all concentrations: Δ_mix H = 0, Δ_mix V = 0."
      ],
      "formulas": [
        {
          "title": "Negative Deviation: A-B interactions STRONGER than A-A and B-B (e.g. Chloroform + Acetone, HNO3 + H2O). Forms Maximum Boiling Azeotrope.",
          "formula": "Azeotrope Rule"
        }
      ],
      "neetImportantPoints": [
        "Positive Deviation implies Minimum Boiling Azeotrope"
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Ideal & Non-Ideal Solutions (Azeotropes).",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Ideal & Non-Ideal Solutions (Azeotropes).",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Ethanol + Water forms minimum boiling azeotrope at 95.4% ethanol."
      ]
    },
    "pyqs": []
  },
  "chem-colligative-properties": {
    "id": "chem-colligative-properties",
    "title": "Colligative Properties & Osmotic Pressure",
    "chapterId": "solutions",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Relative lowering of vapor pressure, elevation of boiling point, depression of freezing point, and osmotic pressure.",
    "notes": {
      "learn": [
        "Colligative properties depend ONLY on number of solute particles, not on their chemical nature.",
        "Osmotic Pressure π = C R T = (n / V) R T. Isotonic solutions have same osmotic pressure at given temp."
      ],
      "keyConcepts": [
        "Colligative properties depend ONLY on number of solute particles, not on their chemical nature."
      ],
      "formulas": [
        {
          "title": "Colligative Formulas Summary",
          "formula": "(P^circ - P) / P^circ = x_B, quad Delta T_b = K_b m, quad Delta T_f = K_f m, quad pi = C R T"
        }
      ],
      "neetImportantPoints": [
        "Osmotic pressure is the BEST colligative property for determining molar mass of macromolecules (polymers/proteins) at room temp."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Colligative Properties & Osmotic Pressure.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Colligative Properties & Osmotic Pressure.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "π = C R T best for macromolecule molar mass"
      ]
    },
    "pyqs": []
  },
  "chem-van-thoff-factor": {
    "id": "chem-van-thoff-factor",
    "title": "van 't Hoff Factor (i) & Abnormal Molar Mass",
    "chapterId": "solutions",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Association/dissociation of solute, van 't Hoff factor i, degree of dissociation alpha.",
    "notes": {
      "learn": [
        "van 't Hoff factor i = Observed colligative property / Calculated colligative property = Normal Molar Mass / Abnormal Molar Mass.",
        "For dissociation (e.g. NaCl -> Na⁺ + Cl⁻): i > 1, degree of dissociation α = (i - 1) / (n - 1). For association (e.g. Acetic acid dimer in benzene): i < 1."
      ],
      "keyConcepts": [
        "van 't Hoff factor i = Observed colligative property / Calculated colligative property = Normal Molar Mass / Abnormal Molar Mass."
      ],
      "formulas": [
        {
          "title": "van 't Hoff Factor Formula",
          "formula": "i = 1 + (n - 1)alpha quad (dissociation)"
        }
      ],
      "neetImportantPoints": [
        "Benzoic acid dimerizes in benzene, so van 't Hoff factor i ≈ 0.5."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in van 't Hoff Factor (i) & Abnormal Molar Mass.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for van 't Hoff Factor (i) & Abnormal Molar Mass.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "i > 1 for dissociation, i < 1 for association"
      ]
    },
    "pyqs": []
  },
  "chem-galvanic-cells-nernst": {
    "id": "chem-galvanic-cells-nernst",
    "title": "Galvanic Cells & Nernst Equation",
    "chapterId": "electrochemistry",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Standard electrode potential, electrochemical series, Nernst equation for cell EMF and Gibbs energy.",
    "notes": {
      "learn": [
        "Galvanic Cell converts chemical energy to electrical energy. Anode is negative (oxidation); Cathode is positive (reduction). E°_cell = E°_cathode - E°_anode.",
        "Nernst Equation: E_cell = E°_cell - (0.0591 / n) log10 Q at 298 K. Relation: ΔG° = - n F E°_cell."
      ],
      "keyConcepts": [
        "Galvanic Cell converts chemical energy to electrical energy. Anode is negative (oxidation); Cathode is positive (reduction). E°_cell = E°_cathode - E°_anode."
      ],
      "formulas": [
        {
          "title": "Nernst Equation at 298 K",
          "formula": "E_{cell} = E^circ_{cell} - 0.0591 / n log_{10}( [Products] / [Reactants] )"
        }
      ],
      "neetImportantPoints": [
        "Cell reaction is spontaneous if E°_cell > 0 and ΔG° < 0."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Galvanic Cells & Nernst Equation.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Galvanic Cells & Nernst Equation.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "E_cell = E° - (0.0591/n) log Q, ΔG° = -n F E°"
      ]
    },
    "pyqs": []
  },
  "chem-molar-conductance": {
    "id": "chem-molar-conductance",
    "title": "Electrolytic Conductance & Kohlrausch's Law",
    "chapterId": "electrochemistry",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Specific conductivity κ, molar conductivity Λ_m, and Kohlrausch's law of independent migration.",
    "notes": {
      "learn": [
        "Molar conductivity Λ_m = (κ x 1000) / M. Unit: S cm² mol⁻¹.",
        "Kohlrausch's Law: At infinite dilution, limiting molar conductivity of an electrolyte is sum of individual ionic contributions: Λ°_m = ν_ + λ°_+ + ν_- λ°_-."
      ],
      "keyConcepts": [
        "Molar conductivity Λ_m = (κ x 1000) / M. Unit: S cm² mol⁻¹."
      ],
      "formulas": [
        {
          "title": "Kohlrausch's Law",
          "formula": "Lambda_m^circ(AxBy) = x lambda_m^circ(A^{y+}) + y lambda_m^circ(B^{x-})"
        }
      ],
      "neetImportantPoints": [
        "Degree of dissociation of weak electrolyte: α = Λ_m / Λ°_m."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Electrolytic Conductance & Kohlrausch's Law.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Electrolytic Conductance & Kohlrausch's Law.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Λ_m = (κ x 1000)/M, α = Λ_m / Λ°_m"
      ]
    },
    "pyqs": []
  },
  "chem-electrolysis-batteries": {
    "id": "chem-electrolysis-batteries",
    "title": "Electrolysis, Batteries & Corrosion",
    "chapterId": "electrochemistry",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Faraday's laws of electrolysis, dry cell, lead storage battery, fuel cell, and rust mechanism.",
    "notes": {
      "learn": [
        "Faraday's 1st Law: Mass deposited m = Z Q = Z I t where electrochemical equivalent Z = M / (n F).",
        "Lead storage battery: Anode = Pb, Cathode = PbO2, Electrolyte = 38% H2SO4. On discharging, BOTH electrodes become coated with PbSO4."
      ],
      "keyConcepts": [
        "Faraday's 1st Law: Mass deposited m = Z Q = Z I t where electrochemical equivalent Z = M / (n F)."
      ],
      "formulas": [
        {
          "title": "Faraday's First Law",
          "formula": "m = Z Q = (M / n F) I t"
        }
      ],
      "neetImportantPoints": [
        "Fuel cell converts combustion energy of fuel (e.g. H2-O2 fuel cell) directly into electricity with ~70% efficiency."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Electrolysis, Batteries & Corrosion.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Electrolysis, Batteries & Corrosion.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "m = Z I t, Lead accumulator produces PbSO4 at both electrodes"
      ]
    },
    "pyqs": []
  },
  "chem-rate-order-molecularity": {
    "id": "chem-rate-order-molecularity",
    "title": "Rate of Reaction, Order & Molecularity",
    "chapterId": "chemical-kinetics",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Average and instantaneous rate, rate law, order vs molecularity of reaction.",
    "notes": {
      "learn": [
        "Order of reaction is experimental power sum in rate law; can be zero, fraction, negative, or integer.",
        "Molecularity is theoretical number of reacting species in an elementary step; MUST be positive integer (1, 2, 3), NEVER zero or fractional."
      ],
      "keyConcepts": [
        "Order of reaction is experimental power sum in rate law; can be zero, fraction, negative, or integer."
      ],
      "formulas": [
        {
          "title": "Rate Law Expression",
          "formula": "Rate = k [A]^x [B]^y implies Order = x + y"
        }
      ],
      "neetImportantPoints": [
        "For an elementary reaction, Order = Molecularity."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Rate of Reaction, Order & Molecularity.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Rate of Reaction, Order & Molecularity.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Order can be zero/fractional; Molecularity is positive integer"
      ]
    },
    "pyqs": []
  },
  "chem-zero-first-order": {
    "id": "chem-zero-first-order",
    "title": "Zero & First Order Reactions",
    "chapterId": "chemical-kinetics",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Integrated rate equations, half-life formulas, and pseudo-first-order reactions.",
    "notes": {
      "learn": [
        "Zero Order: k = ([A]0 - [A]) / t, Half-life t_1/2 = [A]0 / (2k) (directly proportional to initial concentration [A]0).",
        "First Order: k = (2.303 / t) log10([A]0 / [A]), Half-life t_1/2 = 0.693 / k (INDEPENDENT of initial concentration!)."
      ],
      "keyConcepts": [
        "Zero Order: k = ([A]0 - [A]) / t, Half-life t_1/2 = [A]0 / (2k) (directly proportional to initial concentration [A]0)."
      ],
      "formulas": [
        {
          "title": "First Order Half Life",
          "formula": "t_{1/2} = ln 2 / k = 0.693 / k"
        }
      ],
      "neetImportantPoints": [
        "Pseudo-first-order reaction: Acid hydrolysis of ethyl acetate (water present in large excess)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Zero & First Order Reactions.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Zero & First Order Reactions.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "First order t_1/2 = 0.693 / k (independent of [A]0)"
      ]
    },
    "pyqs": []
  },
  "chem-arrhenius-collision-theory": {
    "id": "chem-arrhenius-collision-theory",
    "title": "Arrhenius Equation & Collision Theory",
    "chapterId": "chemical-kinetics",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Temperature dependence of rate constant, activation energy E_a, and Arrhenius plot.",
    "notes": {
      "learn": [
        "Arrhenius Equation: k = A e^(-E_a / R T) => log10(k2 / k1) = (E_a / 2.303 R) [1/T1 - 1/T2].",
        "Slope of log10 k vs 1/T plot is - E_a / (2.303 R)."
      ],
      "keyConcepts": [
        "Arrhenius Equation: k = A e^(-E_a / R T) => log10(k2 / k1) = (E_a / 2.303 R) [1/T1 - 1/T2]."
      ],
      "formulas": [
        {
          "title": "Arrhenius Equation Two Temps",
          "formula": "log_{10}( k_2 / k_1 ) = E_a / 2.303 R ( (T_2 - T_1) / T_1 T_2 )"
        }
      ],
      "neetImportantPoints": [
        "A catalyst lowers the activation energy E_a for both forward and backward reactions by same amount without altering ΔH."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Arrhenius Equation & Collision Theory.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Arrhenius Equation & Collision Theory.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Slope of log k vs 1/T is -E_a / 2.303 R"
      ]
    },
    "pyqs": []
  },
  "chem-3d-transition-trends": {
    "id": "chem-3d-transition-trends",
    "title": "Transition Elements — Electronic Configurations, 3d-Series & Periodic Trends",
    "chapterId": "d-f-block-elements",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "3d-series electronic configurations, Cr and Cu anomalies, atomic and ionic radii trends, ionization enthalpies, standard reduction potentials E°(M²⁺/M), enthalpies of atomization, and variable oxidation states.",
    "notes": {
      "learn": [
        "Definition: Transition elements have incompletely filled d-orbitals in their ground state or common oxidation states (Sc to Cu). Zn, Cd, and Hg have full d¹⁰ shells and are d-block elements but NOT transition elements.",
        "Anomalous Configurations: Cr is [Ar] 3d⁵ 4s¹ and Cu is [Ar] 3d¹⁰ 4s¹ due to extra exchange energy and spherical symmetry of half-filled and fully-filled subshells.",
        "Atomic Radii: Sc to Cr decreases sharply (Z_eff increases); Mn to Ni remains nearly constant (~125-128 pm) because 3d shielding cancels increased nuclear charge; Cu to Zn slightly increases due to d-d electron repulsions.",
        "Manganese (Mn, 3d⁵ 4s²) shows the highest number of oxidation states (+2 to +7) in the 3d series.",
        "Copper is the ONLY 3d transition metal with a positive standard reduction potential (E°(Cu²⁺/Cu) = +0.34 V) and cannot liberate H₂ from non-oxidizing acids."
      ],
      "keyConcepts": [
        "Transition elements have partially filled (n-1)d orbitals in elemental or ionic state.",
        "Cr²⁺ is reducing (d⁴ → stable d³ t₂g³), whereas Mn³⁺ is oxidizing (d⁴ → stable d⁵ 3d⁵).",
        "Cu²⁺(aq) is more stable in water than Cu⁺(aq) because the high hydration enthalpy of Cu²⁺ compensates for its second ionization enthalpy.",
        "Lower oxidation state oxides are basic (MnO, CrO), intermediate are amphoteric (MnO₂, Cr₂O₃), and highest are acidic (Mn₂O₇, CrO₃)."
      ],
      "formulas": [
        {
          "title": "Spin-Only Magnetic Moment",
          "formula": "\\mu_s = \\sqrt{n(n + 2)} \\text{ BM}",
          "variables": "n = number of unpaired d-electrons; BM = Bohr Magneton",
          "note": "Maximum in 3d series for Mn²⁺ and Fe³⁺ (n = 5, μ = 5.92 BM)."
        }
      ],
      "neetImportantPoints": [
        "Scandium exhibits ONLY +3 oxidation state (forms noble gas [Ar] core).",
        "Zn has the lowest enthalpy of atomization (126 kJ/mol) and lowest m.p./b.p. in the 3d series due to absence of unpaired d-electrons.",
        "Tungsten (W) has the highest melting point (3422 °C) among all metals.",
        "When ionizing transition metals, 4s electrons are ALWAYS removed before 3d electrons."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming that during ionization, electrons leave 3d before 4s.",
          "correctFact": "Electrons are always removed from the outermost 4s shell first (e.g. Fe [Ar]3d⁶4s² → Fe²⁺ [Ar]3d⁶).",
          "whyItMattersForNEET": "Essential for determining unpaired electrons and magnetic moments."
        },
        {
          "commonConfusion": "Thinking Cu⁺(aq) is more stable than Cu²⁺(aq) in water because Cu⁺ has 3d¹⁰.",
          "correctFact": "Cu²⁺(aq) is much more stable in water due to its large negative hydration enthalpy.",
          "whyItMattersForNEET": "Frequently tested NCERT thermodynamic reasoning question."
        }
      ],
      "quickRevision": [
        "Cr: [Ar] 3d⁵ 4s¹ | Cu: [Ar] 3d¹⁰ 4s¹",
        "Max OS: Mn (+2 to +7) | E°(Cu²⁺/Cu) = +0.34 V",
        "μ = √(n(n+2)) BM (Mn²⁺/Fe³⁺ max 5.92 BM)",
        "Oxides: CrO (basic) < Cr₂O₃ (amphoteric) < CrO₃ (acidic)"
      ]
    },
    "pyqs": []
  },
  "chem-kmno4-k2cr2o7": {
    "id": "chem-kmno4-k2cr2o7",
    "title": "Properties of Transition Metals & Important Compounds (KMnO₄, K₂Cr₂O₇, Catalysis & Alloys)",
    "chapterId": "d-f-block-elements",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Magnetic moments, d-d transition colour vs charge transfer, catalytic properties, interstitial compounds, alloys, industrial synthesis and redox reactions of KMnO₄ and K₂Cr₂O₇.",
    "notes": {
      "learn": [
        "K₂Cr₂O₇ is prepared from chromite ore (FeCr₂O₄) via sodium chromate (Na₂CrO₄) and sodium dichromate (Na₂Cr₂O₇). In acid medium: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O (n = 6, Equiv. Wt = M/6).",
        "pH Equilibrium: 2 CrO₄²⁻ (Yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (Orange) + H₂O. Acid turns it orange; alkali turns it yellow.",
        "KMnO₄ is prepared by alkaline fusion of pyrolusite (MnO₂) to green K₂MnO₄ followed by oxidation. Acidic: Mn⁷⁺ → Mn²⁺ (n = 5); Neutral: Mn⁷⁺ → MnO₂ (n = 3, oxidizes I⁻ to IO₃⁻); Alkaline: Mn⁷⁺ → MnO₄²⁻ (n = 1).",
        "Colour of KMnO₄ (purple) and K₂Cr₂O₇ (orange) is due to Ligand-to-Metal Charge Transfer (L → M CT), NOT d-d transitions.",
        "Interstitial compounds (TiC, Fe₃H) are hard, chemically inert, retain metallic conductivity, and have higher m.p. than parent metals."
      ],
      "keyConcepts": [
        "In neutral/faintly alkaline medium, KMnO₄ oxidizes Iodide (I⁻) to Iodate (IO₃⁻), NOT I₂.",
        "K₂Cr₂O₇ is a primary standard; KMnO₄ is a secondary standard because it photochemically decomposes.",
        "HCl cannot be used to acidify KMnO₄ because KMnO₄ oxidizes Cl⁻ to Cl₂ gas.",
        "Chromyl chloride test (CrO₂Cl₂) is positive for ionic chlorides (NaCl, KCl) but negative for covalent chlorides (HgCl₂, AgCl)."
      ],
      "formulas": [
        {
          "title": "Redox Equivalent Weight",
          "formula": "E = \\frac{M}{n\\text{-factor}}",
          "variables": "Acidic K₂Cr₂O₇: n=6 (M/6); Acidic KMnO₄: n=5 (M/5); Neutral KMnO₄: n=3 (M/3); Alkaline KMnO₄: n=1 (M/1)",
          "note": "Crucial for normality and titration numericals."
        }
      ],
      "neetImportantPoints": [
        "KMnO₄ thermal decomposition: 2 KMnO₄ → K₂MnO₄ + MnO₂ + O₂ (at 513 K).",
        "Interstitial compounds are chemically INERT, not reactive.",
        "Alloy formation requires metallic radii to differ by less than 15% (Brass: Cu+Zn, Bronze: Cu+Sn)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming KMnO₄ oxidizes I⁻ to I₂ in all media.",
          "correctFact": "In neutral or alkaline medium, KMnO₄ oxidizes I⁻ to Iodate (IO₃⁻). It oxidizes I⁻ to I₂ only in acidic medium.",
          "whyItMattersForNEET": "Directly tested in NEET 2022."
        },
        {
          "commonConfusion": "Believing the colour of KMnO₄ and K₂Cr₂O₇ is due to d-d transitions.",
          "correctFact": "Both have 3d⁰ configuration; colour is caused by Charge Transfer from O²⁻ (2p) to empty metal 3d orbitals.",
          "whyItMattersForNEET": "Classic assertion-reasoning trap."
        }
      ],
      "quickRevision": [
        "K₂Cr₂O₇: From chromite ore (FeCr₂O₄) | n = 6 in acid (E = M/6)",
        "2 CrO₄²⁻ (yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O",
        "KMnO₄: From pyrolusite (MnO₂) | n = 5 in acid, n = 3 in neutral (I⁻ → IO₃⁻)",
        "Charge Transfer (L → M CT) causes colour of KMnO₄ and K₂Cr₂O₇"
      ]
    },
    "pyqs": []
  },
  "chem-lanthanoids-actinoids": {
    "id": "chem-lanthanoids-actinoids",
    "title": "f-Block Elements: Lanthanoids, Lanthanoid Contraction & Actinoids",
    "chapterId": "d-f-block-elements",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Inner transition elements, 4f configurations, +3 oxidation state, Ce⁴⁺ oxidizer vs Eu²⁺ reducer, Lanthanoid contraction mechanism & consequences (Zr-Hf twins, basicity), Mischmetal, and comparison with radioactive Actinoids.",
    "notes": {
      "learn": [
        "Lanthanoids ([Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s²): 14 elements from Ce₅₈ to Lu₇₁. Common and most stable oxidation state is +3.",
        "Redox Anomalies: Ce⁴⁺ ([Xe] 4f⁰) is a strong oxidizing agent (E° = +1.74 V, reverts to Ce³⁺); Eu²⁺ ([Xe] 4f⁷) and Yb²⁺ ([Xe] 4f¹⁴) are strong reducing agents (revert to +3).",
        "Lanthanoid Contraction: Cumulative decrease in atomic and Ln³⁺ ionic radii from La (106 pm) to Lu (86 pm) due to poor shielding of 4f electrons.",
        "Consequences: (1) Zr (160 pm) and Hf (159 pm) have identical radii; (2) Hydroxide basicity decreases: La(OH)₃ > ... > Lu(OH)₃; (3) Difficult chemical separation of lanthanoids; (4) High densities of 5d metals.",
        "Actinoids ([Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s²): All radioactive; show wide range of oxidation states (+3 to +7 in Np, Pu) due to comparable energies of 5f, 6d, and 7s orbitals. Actinoid contraction is greater than lanthanoid contraction."
      ],
      "keyConcepts": [
        "Zr and Hf are chemical twins with nearly identical atomic radii (160 vs 159 pm) due to lanthanoid contraction.",
        "Basicity of Ln(OH)₃ decreases because smaller Ln³⁺ ions increase the covalent character of the Ln-OH bond (Fajan's rule).",
        "Promethium (Pm, Z = 61) is the only radioactive lanthanoid.",
        "Mischmetal: Pyrophoric alloy of ~95% lanthanoids (~40-50% Ce) and ~5% Fe used for lighter flints."
      ],
      "formulas": [
        {
          "title": "Lanthanoid Hydroxide Basicity Sequence",
          "formula": "\\text{La(OH)}_3 > \\text{Ce(OH)}_3 > \\dots > \\text{Lu(OH)}_3",
          "note": "Basicity decreases with decreasing Ln³⁺ ionic size."
        }
      ],
      "neetImportantPoints": [
        "Ce⁴⁺ is widely used as an analytical volumetric oxidant (cerimetry).",
        "Actinoid contraction is greater than lanthanoid contraction due to poorer shielding by 5f electrons.",
        "Elements beyond Uranium (Z = 92) are synthetic transuranic elements."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming Ce⁴⁺ is a reducing agent because of its 4f⁰ configuration.",
          "correctFact": "+3 is the most stable state for lanthanoids, so Ce⁴⁺ readily gains an electron (acting as a strong oxidizing agent) to form Ce³⁺.",
          "whyItMattersForNEET": "Frequently tested in redox questions."
        },
        {
          "commonConfusion": "Thinking that all lanthanoids are non-radioactive.",
          "correctFact": "Promethium (Pm, Z = 61) is radioactive; all other lanthanoids are non-radioactive.",
          "whyItMattersForNEET": "Direct factual NCERT option elimination."
        }
      ],
      "quickRevision": [
        "Common OS is +3 | Ce⁴⁺ = oxidizer, Eu²⁺ = reducer",
        "Ln Contraction cause: Poor shielding of diffuse 4f electrons",
        "Twin pair: Zr (160 pm) ≈ Hf (159 pm) | Basicity: La(OH)₃ > Lu(OH)₃",
        "Actinoids: All radioactive, +3 to +7 OS (Np, Pu max +7)"
      ]
    },
    "pyqs": []
  },
  "chem-df-block-master-revision": {
    "id": "chem-df-block-master-revision",
    "title": "d- and f-Block Elements: NEET Master Revision — Trends, Exceptions, Reactions & PYQs",
    "chapterId": "d-f-block-elements",
    "estimatedReadTimeMinutes": 22,
    "importanceWeight": "High Yield",
    "summary": "Master synthesis of d- and f-block chemistry: 3d periodic trends, 25+ Common NEET Traps, Exception Bank, full balanced reaction repository for KMnO₄ & K₂Cr₂O₇ across all media, and authentic verified PYQs.",
    "notes": {
      "learn": [
        "Master Configuration Rules: Cr is 3d⁵ 4s¹, Cu is 3d¹⁰ 4s¹; Zn, Cd, Hg are d-block but not transition elements.",
        "Redox Thermodynamics: Cu is the only 3d metal with positive E° (+0.34 V); Cu²⁺(aq) is more stable than Cu⁺(aq) due to hydration energy.",
        "Optical & Magnetic: μ = √[n(n+2)] BM; d⁰ and d¹⁰ are colourless and diamagnetic; KMnO₄ and K₂Cr₂O₇ colours arise from Ligand-to-Metal Charge Transfer.",
        "K₂Cr₂O₇: n = 6 in acid (E = M/6); 2 CrO₄²⁻ (yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O; Chromyl chloride test gives red CrO₂Cl₂ with ionic chlorides.",
        "KMnO₄: n = 5 in acid (E = M/5); n = 3 in neutral (I⁻ → IO₃⁻, E = M/3); n = 1 in strong base (E = M/1).",
        "f-Block: Common OS +3; Ce⁴⁺ oxidizer, Eu²⁺ reducer; Ln contraction gives Zr ≈ Hf (160 pm) and La(OH)₃ > Lu(OH)₃ basicity; Actinoids show +3 to +7 OS."
      ],
      "keyConcepts": [
        "Complete 25+ NEET Trap checklist preventing negative marks on tricks and exceptions.",
        "Full reaction repository of KMnO₄ and K₂Cr₂O₇ across acidic, neutral, and alkaline media.",
        "Master comparison between Lanthanoids and Actinoids."
      ],
      "formulas": [
        {
          "title": "Master Spin-Only Formula",
          "formula": "\\mu = \\sqrt{n(n + 2)} \\text{ BM}",
          "note": "n = number of unpaired electrons."
        },
        {
          "title": "Redox Equivalent Weights",
          "formula": "\\text{Acidic } \\text{K}_2\\text{Cr}_2\\text{O}_7 = \\frac{M}{6}; \\quad \\text{Acidic } \\text{KMnO}_4 = \\frac{M}{5}; \\quad \\text{Neutral } \\text{KMnO}_4 = \\frac{M}{3}"
        }
      ],
      "neetImportantPoints": [
        "Mischmetal: ~95% Ln (~50% Ce) + 5% Fe used in lighter flints.",
        "Promethium is the only radioactive lanthanoid; all actinoids are radioactive.",
        "Covalent chlorides (HgCl₂, AgCl) do NOT give the chromyl chloride test.",
        "Actinoids have comparable energies of 5f, 6d, and 7s orbitals, enabling oxidation states up to +7 in Np and Pu."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming KMnO₄ can be acidified with HCl.",
          "correctFact": "KMnO₄ oxidizes HCl to Cl₂ gas. Always use dilute H₂SO₄.",
          "whyItMattersForNEET": "Core practical chemistry question."
        },
        {
          "commonConfusion": "Thinking interstitial compounds are chemically reactive.",
          "correctFact": "Interstitial compounds are chemically inert and extremely hard with high melting points.",
          "whyItMattersForNEET": "NEET 2020 verified question."
        }
      ],
      "quickRevision": [
        "1. Cr (3d⁵ 4s¹), Cu (3d¹⁰ 4s¹), Zn/Cd/Hg = non-transition.",
        "2. E°(Cu²⁺/Cu) = +0.34 V | Cu²⁺(aq) > Cu⁺(aq) in water.",
        "3. μ = √(n(n+2)) BM | Mn²⁺/Fe³⁺ = 5.92 BM max.",
        "4. KMnO₄ & K₂Cr₂O₇ colour = L → M Charge Transfer.",
        "5. Acidic K₂Cr₂O₇: n=6 | Acidic KMnO₄: n=5 | Neutral KMnO₄: I⁻ → IO₃⁻ (n=3).",
        "6. Zr ≈ Hf (160 pm) | La(OH)₃ > Lu(OH)₃ | Ce⁴⁺ oxidizer, Eu²⁺ reducer.",
        "7. Actinoids: All radioactive, +3 to +7 OS (Np, Pu)."
      ]
    },
    "pyqs": []
  },
  "chem-coordination-fundamentals": {
    "id": "chem-coordination-fundamentals",
    "title": "Coordination Chemistry Fundamentals & Nomenclature",
    "chapterId": "coordination-compounds",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Werner's coordination theory, primary vs secondary valency, coordination entity anatomy, ligand denticity, chelating & ambidentate ligands, and IUPAC nomenclature.",
    "notes": {
      "learn": [
        "Werner's Theory: Primary valency = ionisable, non-directional, corresponds to oxidation state; Secondary valency = non-ionisable, directional, corresponds to coordination number.",
        "Denticity: Monodentate (Cl⁻, NH₃, H₂O), Bidentate (en, ox²⁻), Hexadentate (EDTA⁴⁻ with 2 N and 4 O donors).",
        "Chelate Effect: Polydentate ligands form 5/6-membered rings around metal ion resulting in high thermodynamic stability due to entropy increase (ΔS° > 0).",
        "IUPAC Rules: Cation named first; ligands named in alphabetical order with -ido for anions (chlorido, cyanido); anionic complex metals end in -ate with oxidation state in Roman numerals."
      ],
      "keyConcepts": [
        "Precipitation stoichiometry: CoCl₃·6NH₃ gives 3 mol AgCl, CoCl₃·5NH₃ gives 2 mol AgCl, CoCl₃·4NH₃ gives 1 mol AgCl.",
        "Chelating ligands increase complex stability significantly via the chelate effect.",
        "Ambidentate ligands (NO₂⁻, SCN⁻) possess two distinct donor atoms."
      ],
      "formulas": [
        {
          "title": "Coordination Number Formula",
          "formula": "\\text{C.N.} = \\sum (\\text{Ligands} \\times \\text{Denticity})"
        },
        {
          "title": "IUPAC Naming Order",
          "formula": "\\text{[Cation]} \\rightarrow \\text{[Ligands in alphabetical order]} + \\text{[Metal(OS)]} \\rightarrow \\text{[Counter Anion]}"
        }
      ],
      "neetImportantPoints": [
        "In [Co(NH₃)₆]Cl₃, 3 Cl⁻ ions are ionisable primary valencies and precipitate with AgNO₃.",
        "EDTA⁴⁻ is hexadentate with 2 Nitrogen and 4 Oxygen donor atoms.",
        "Ammine in IUPAC has two 'm's (ammine), while aqua is used for H₂O."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Counting coordination number as total ligand molecules regardless of denticity.",
          "correctFact": "Coordination number equals the total number of donor ATOMS (ligand count × denticity). For example, [Fe(ox)₃]³⁻ has C.N. = 6, not 3.",
          "whyItMattersForNEET": "Frequent numerical trap in coordination chemistry."
        }
      ],
      "quickRevision": [
        "Primary valency = OS (ionisable) | Secondary valency = CN (directional)",
        "EDTA⁴⁻ = hexadentate (2N + 4O) | Chelate effect = entropy driven",
        "IUPAC: Cation first, ligands alphabetical, -ate for anionic complex"
      ]
    },
    "pyqs": []
  },
  "chem-coordination-iupac": {
    "id": "chem-coordination-iupac",
    "title": "Coordination Compounds IUPAC & Ligands",
    "chapterId": "coordination-compounds",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Ligand classification (monodentate, bidentate, ambidentate, chelating) and IUPAC naming.",
    "notes": {
      "learn": [
        "Chelating ligands (e.g., EDTA⁴⁻, en, ox²⁻) form ring structures and impart exceptional stability (chelate effect).",
        "Ambidentate ligands have 2 donor atoms but attach through only 1 at a time (e.g. NO2⁻/ONO⁻, SCN⁻/NCS⁻)."
      ],
      "keyConcepts": [
        "Chelating ligands (e.g., EDTA⁴⁻, en, ox²⁻) form ring structures and impart exceptional stability (chelate effect)."
      ],
      "formulas": [
        {
          "title": "IUPAC Naming Order",
          "formula": "[Cation named first] implies [Ligands in alphabetical order] implies [Central metal (oxidation state in Roman)]"
        }
      ],
      "neetImportantPoints": [
        "EDTA⁴⁻ is a hexadentate ligand forming stable octahedral complexes."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Coordination Compounds IUPAC & Ligands.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Coordination Compounds IUPAC & Ligands.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "EDTA⁴⁻ hexadentate, Ambidentate = NO2⁻, SCN⁻"
      ]
    },
    "pyqs": []
  },
  "chem-coordination-isomerism": {
    "id": "chem-coordination-isomerism",
    "title": "Isomerism in Coordination Compounds",
    "chapterId": "coordination-compounds",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Structural (Ionization, Linkage, Coordination, Solvate) and Stereoisomerism (Geometrical, Optical).",
    "notes": {
      "learn": [
        "Linkage isomerism occurs with ambidentate ligands (e.g., [Co(NH3)5(NO2)]Cl2 vs [Co(NH3)5(ONO)]Cl2).",
        "Geometrical isomerism: Square planar [MA2B2] shows cis/trans; Octahedral [MA3B3] shows FACIAL (fac) and MERIDIONAL (mer) isomers."
      ],
      "keyConcepts": [
        "Linkage isomerism occurs with ambidentate ligands (e.g., [Co(NH3)5(NO2)]Cl2 vs [Co(NH3)5(ONO)]Cl2)."
      ],
      "formulas": [
        {
          "title": "fac-mer Isomerism",
          "formula": "[MA_3B_3] implies Facial (fac) and Meridional (mer) isomers"
        }
      ],
      "neetImportantPoints": [
        "cis-[Pt(NH3)2Cl2] (Cisplatin) is an active anti-cancer drug; trans-isomer is inactive."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Isomerism in Coordination Compounds.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Isomerism in Coordination Compounds.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Linkage isomerism via ambidentate, Cisplatin anti-cancer"
      ]
    },
    "pyqs": []
  },
  "chem-vbt-cft-theories": {
    "id": "chem-vbt-cft-theories",
    "title": "Valence Bond & Crystal Field Theories (VBT & CFT)",
    "chapterId": "coordination-compounds",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Inner/outer orbital complexes, spectrochemical series, crystal field splitting energy Δ_o.",
    "notes": {
      "learn": [
        "VBT: Strong field ligands (CN⁻, CO, NH3, en) cause electron pairing -> Inner orbital low spin complex (d²sp³). Weak field ligands (F⁻, Cl⁻, H2O) -> Outer orbital high spin complex (sp³d²).",
        "CFT Octahedral Splitting: d-orbitals split into lower t_2g (triply degenerate) and higher e_g (doubly degenerate) sets. Δ_o > P favors low spin."
      ],
      "keyConcepts": [
        "VBT: Strong field ligands (CN⁻, CO, NH3, en) cause electron pairing -> Inner orbital low spin complex (d²sp³). Weak field ligands (F⁻, Cl⁻, H2O) -> Outer orbital high spin complex (sp³d²)."
      ],
      "formulas": [
        {
          "title": "Octahedral Crystal Field Splitting",
          "formula": "Delta_o: quad e_g (+0.6 Delta_o) quad and quad t_{2g} (-0.4 Delta_o)"
        }
      ],
      "neetImportantPoints": [
        "Spectrochemical series ligand strength order: I⁻ < Br⁻ < Cl⁻ < F⁻ < H2O < NH3 < en < CN⁻ < CO."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Valence Bond & Crystal Field Theories (VBT & CFT).",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Valence Bond & Crystal Field Theories (VBT & CFT).",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Strong field CN⁻/CO cause pairing, t_2g lower e_g higher in octahedral"
      ]
    },
    "pyqs": []
  },
  "chem-coordination-properties-applications": {
    "id": "chem-coordination-properties-applications",
    "title": "Magnetic Properties, Stability, Colour & Applications",
    "chapterId": "coordination-compounds",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Origin of colour via d–d transitions, magnetic moments (μ = √[n(n+2)] BM), stability constants (βₙ), chelate effect, and biological/medicinal/industrial applications.",
    "notes": {
      "learn": [
        "Colour in Complexes: Arises from d–d electronic transitions; observed colour is complementary to the absorbed wavelength (Δ_o = hc/λ). d⁰ and d¹⁰ ions (Sc³⁺, Zn²⁺) are colourless.",
        "Magnetic Moment: Spin-only formula μ_s = √[n(n+2)] BM. Diamagnetic (n = 0) vs Paramagnetic (n > 0).",
        "Stability: Measured by overall formation constant βₙ = K₁ × K₂ × ... × Kₙ. Chelate effect gives enhanced stability due to entropy increase (ΔS° > 0). Irving-Williams stability order: Mn²⁺ < Fe²⁺ < Co²⁺ < Ni²⁺ < Cu²⁺ > Zn²⁺.",
        "Biological & Medicinal Applications: Haemoglobin (Fe²⁺), Chlorophyll (Mg²⁺), Vitamin B₁₂ (Co³⁺); Cisplatin (cis-[Pt(NH₃)₂Cl₂]) as anti-cancer drug; CaNa₂EDTA for lead poisoning; D-penicillamine for copper poisoning."
      ],
      "keyConcepts": [
        "Colour arises from d–d transitions; complementary colour is perceived.",
        "Spin-only magnetic moment μ = √[n(n+2)] BM.",
        "Chelate effect is an entropy-driven (ΔS° > 0) thermodynamic stabilization.",
        "Cisplatin is cis-[Pt(NH₃)₂Cl₂] and acts as an anti-cancer agent."
      ],
      "formulas": [
        {
          "title": "Spin-Only Magnetic Moment",
          "formula": "\\mu_s = \\sqrt{n(n + 2)} \\text{ BM}"
        },
        {
          "title": "Overall Stability Constant",
          "formula": "\\beta_n = K_1 \\times K_2 \\times \\dots \\times K_n"
        }
      ],
      "neetImportantPoints": [
        "d⁰ (Sc³⁺, Ti⁴⁺) and d¹⁰ (Zn²⁺, Cu⁺) complexes are colourless due to absence of d–d transitions.",
        "Anhydrous CuSO₄ is white, but hydrated CuSO₄·5H₂O is blue due to crystal field splitting.",
        "Cisplatin is cis-[Pt(NH₃)₂Cl₂]; trans-isomer is biologically inactive.",
        "CaNa₂EDTA is the specific antidote for lead poisoning."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming all transition metal compounds are coloured.",
          "correctFact": "Complexes with d⁰ or d¹⁰ metal ions cannot undergo d–d transitions and are colourless.",
          "whyItMattersForNEET": "Core conceptual elimination rule in NEET."
        }
      ],
      "quickRevision": [
        "Colour = d-d transitions | d⁰ and d¹⁰ = colourless",
        "μ = √(n(n+2)) BM | Chelate effect = ΔS° > 0",
        "Haemoglobin = Fe²⁺ | Chlorophyll = Mg²⁺ | Vit B₁₂ = Co³⁺",
        "Cisplatin = anti-cancer | CaNa₂EDTA = lead poisoning"
      ]
    },
    "pyqs": []
  },
  "chem-sn1-sn2-mechanisms": {
    "id": "chem-sn1-sn2-mechanisms",
    "title": "Haloalkanes - S_N1 & S_N2 Mechanisms",
    "chapterId": "haloalkanes-haloarenes",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Reactivity orders, carbocation vs inversion of configuration, and solvent effects.",
    "notes": {
      "learn": [
        "S_N1 Mechanism: Two-step reaction via carbocation intermediate. Rate = k [R-X]. Reactivity order: 3° > 2° > 1°. Accompanied by RACEMIZATION.",
        "S_N2 Mechanism: One-step concerted reaction via transition state. Rate = k [R-X] [Nu⁻]. Reactivity order: 1° > 2° > 3°. Accompanied by WALDEN INVERSION."
      ],
      "keyConcepts": [
        "S_N1 Mechanism: Two-step reaction via carbocation intermediate. Rate = k [R-X]. Reactivity order: 3° > 2° > 1°. Accompanied by RACEMIZATION."
      ],
      "formulas": [
        {
          "title": "S_N1 vs S_N2 Reactivity",
          "formula": "S_N1: 3^circ > 2^circ > 1^circ quad vs quad S_N2: 1^circ > 2^circ > 3^circ"
        }
      ],
      "neetImportantPoints": [
        "Allylic and benzylic halides undergo rapid S_N1 reactions due to resonance stabilization of carbocations."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Haloalkanes - S_N1 & S_N2 Mechanisms.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Haloalkanes - S_N1 & S_N2 Mechanisms.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "S_N1 = 3° (Racemization), S_N2 = 1° (Inversion)"
      ]
    },
    "pyqs": []
  },
  "chem-haloarenes-reactions": {
    "id": "chem-haloarenes-reactions",
    "title": "Haloarenes - Nucleophilic & Electrophilic Substitution",
    "chapterId": "haloalkanes-haloarenes",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Resonance stabilization of C-X bond, Dow process, and Wurtz-Fittig / Fittig reactions.",
    "notes": {
      "learn": [
        "Haloarenes are EXTREMELY UNREACTIVE towards nucleophilic substitution due to resonance (partial double bond character of C-X bond) and sp² carbon hybridization.",
        "Fittig Reaction: 2 Ar-X + 2 Na -> Ar-Ar (Biphenyl) in dry ether. Wurtz-Fittig: Ar-X + R-X + 2 Na -> Ar-R."
      ],
      "keyConcepts": [
        "Haloarenes are EXTREMELY UNREACTIVE towards nucleophilic substitution due to resonance (partial double bond character of C-X bond) and sp² carbon hybridization."
      ],
      "formulas": [
        {
          "title": "Wurtz-Fittig Reaction",
          "formula": "Ar-X + R-X + 2 Na xrightarrow{dry ether} Ar-R + 2 NaX"
        }
      ],
      "neetImportantPoints": [
        "Halogen atom on benzene ring is ortho/para-directing but DEACTIVATING due to strong -I effect."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Haloarenes - Nucleophilic & Electrophilic Substitution.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Haloarenes - Nucleophilic & Electrophilic Substitution.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Haloarenes unreactive to S_N, halogen is o/p directing"
      ]
    },
    "pyqs": []
  },
  "chem-alcohols-properties": {
    "id": "chem-alcohols-properties",
    "title": "Alcohols - Preparation, Lucas & Victor Meyer Tests",
    "chapterId": "alcohols-phenols-ethers",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Hydroboration-oxidation, Lucas reagent (conc. HCl + ZnCl2) distinction of 1°, 2°, 3° alcohols.",
    "notes": {
      "learn": [
        "Hydroboration-oxidation of alkenes adds H2O according to Anti-Markownikoff rule yielding primary alcohol without rearrangement.",
        "Lucas Test: 3° alcohol gives immediate turbidity; 2° alcohol gives turbidity in 5 minutes; 1° alcohol does NOT give turbidity at room temp."
      ],
      "keyConcepts": [
        "Hydroboration-oxidation of alkenes adds H2O according to Anti-Markownikoff rule yielding primary alcohol without rearrangement."
      ],
      "formulas": [
        {
          "title": "Lucas Reagent Formula",
          "formula": "Lucas Reagent = Conc. HCl + Anhydrous ZnCl_2"
        }
      ],
      "neetImportantPoints": [
        "Dehydration of alcohols to alkenes follows Saytzeff rule (more substituted alkene is major product)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Alcohols - Preparation, Lucas & Victor Meyer Tests.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Alcohols - Preparation, Lucas & Victor Meyer Tests.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Lucas test: 3° immediate, 2° in 5 min, 1° no ppt"
      ]
    },
    "pyqs": []
  },
  "chem-phenols-reactions": {
    "id": "chem-phenols-reactions",
    "title": "Phenols - Acidic Strength & Named Reactions",
    "chapterId": "alcohols-phenols-ethers",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Acidic nature of phenol vs alcohol, Reimer-Tiemann reaction, and Kolbe's reaction.",
    "notes": {
      "learn": [
        "Phenol is MORE acidic than alcohol because phenoxide ion is resonance stabilized by benzene ring.",
        "Reimer-Tiemann Reaction: Phenol + CHCl3 + aqueous NaOH -> Salicylaldehyde (2-hydroxybenzaldehyde). Electrophile is Dichlorocarbene (:CCl2)."
      ],
      "keyConcepts": [
        "Phenol is MORE acidic than alcohol because phenoxide ion is resonance stabilized by benzene ring."
      ],
      "formulas": [
        {
          "title": "Reimer-Tiemann Reaction",
          "formula": "Phenol + CHCl_3 + NaOH implies Salicylaldehyde (Electrophile: :CCl_2)"
        }
      ],
      "neetImportantPoints": [
        "Kolbe's Reaction: Phenolate ion + CO2 (4-7 atm, 400 K) -> Salicylic acid."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Phenols - Acidic Strength & Named Reactions.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Phenols - Acidic Strength & Named Reactions.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        ":CCl2 dichlorocarbene in Reimer-Tiemann"
      ]
    },
    "pyqs": []
  },
  "chem-ethers-williamson": {
    "id": "chem-ethers-williamson",
    "title": "Ethers - Williamson Synthesis & Cleavage by HI",
    "chapterId": "alcohols-phenols-ethers",
    "estimatedReadTimeMinutes": 14,
    "importanceWeight": "High Yield",
    "summary": "Williamson ether synthesis mechanism (S_N2) and cleavage of unsymmetrical ethers by HI.",
    "notes": {
      "learn": [
        "Williamson Synthesis: R-X + R'-O⁻ Na⁺ -> R-O-R'. Alkyl halide MUST be primary (1°); if 3° alkyl halide is used, ALKENE is formed as major product (elimination!).",
        "Cleavage of alkyl aryl ether (e.g. Anisol C6H5-O-CH3) with HI gives Phenol (C6H5OH) and Methyl iodide (CH3I)."
      ],
      "keyConcepts": [
        "Williamson Synthesis: R-X + R'-O⁻ Na⁺ -> R-O-R'. Alkyl halide MUST be primary (1°); if 3° alkyl halide is used, ALKENE is formed as major product (elimination!)."
      ],
      "formulas": [
        {
          "title": "Anisole Cleavage by HI",
          "formula": "C_6H_5-O-CH_3 + HI implies C_6H_5OH + CH_3I"
        }
      ],
      "neetImportantPoints": [
        "If ether has 3° alkyl group, cleavage with HI proceeds via S_N1 to give 3° alkyl iodide."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Ethers - Williamson Synthesis & Cleavage by HI.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Ethers - Williamson Synthesis & Cleavage by HI.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Williamson requires 1° alkyl halide, Anisole + HI -> Phenol + CH3I"
      ]
    },
    "pyqs": []
  },
  "chem-carbonyl-addition": {
    "id": "chem-carbonyl-addition",
    "title": "Aldehydes & Ketones - Structure, Preparation & Nucleophilic Addition",
    "chapterId": "aldehydes-ketones",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Structure and polarity of carbonyl group, preparations (Rosenmund, Stephen, Etard, Gattermann-Koch, Ozonolysis), and nucleophilic addition mechanisms (HCN, NaHSO3, alcohols, ammonia derivatives, Grignard).",
    "notes": {
      "learn": [
        "Carbonyl carbon is sp² hybridized, planar (120°), and strongly polarized (Cδ+ and Oδ-) with dipole moment μ ≈ 2.3–2.8 D.",
        "Nucleophiles attack the electrophilic carbonyl carbon along the ~107° Bürgi-Dunitz trajectory, converting sp² planar to sp³ tetrahedral alkoxide.",
        "Reactivity order: HCHO > CH3CHO > CH3COCH3 > C6H5CHO > C6H5COCH3 (governed by +I electron donation and steric hindrance).",
        "Ammonia derivatives (H2N-Z) add to carbonyls at pH 4.5 to form crystalline oximes, hydrazones, 2,4-DNP hydrazones (orange ppt), and semicarbazones (only hydrazine -NH2 reacts).",
        "Grignard reagents (RMgX / H3O+): HCHO yields 1° alcohol; RCHO yields 2° alcohol; R2CO yields 3° alcohol; CO2 yields carboxylic acid."
      ],
      "keyConcepts": [
        "Carbonyl carbon is electrophilic (sp² planar); reactivity decreases with alkyl substitution and aromatic conjugation.",
        "Rosenmund: RCOCl + H2 (Pd-BaSO4/quinoline) -> RCHO; Stephen: RCN + SnCl2/HCl -> RCHO; Etard: Toluene + CrO2Cl2 -> Benzaldehyde."
      ],
      "formulas": [
        {
          "title": "Nucleophilic Addition Reactivity Order",
          "formula": "HCHO > RCHO > ArCHO > RCOR > ArCOR"
        },
        {
          "title": "Rosenmund Reduction",
          "formula": "R-COCl + H_2 xrightarrow{Pd-BaSO_4 / S, \\Delta} R-CHO + HCl"
        }
      ],
      "neetImportantPoints": [
        "Reactivity: Formaldehyde (HCHO) is most reactive due to zero +I alkyl groups and minimal steric hindrance.",
        "Grignard reagent addition: Formaldehyde gives 1° alcohol; Other aldehydes give 2° alcohol; Ketones give 3° alcohol.",
        "Semicarbazide (H2N-NH-CO-NH2): Only the hydrazine -NH2 is nucleophilic because amide -NH2 lone pair is delocalised by resonance."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming both -NH2 groups of semicarbazide are nucleophilic.",
          "correctFact": "Only the hydrazine -NH2 group attacks carbonyl carbon; the amide -NH2 is in resonance with C=O and unreactive.",
          "whyItMattersForNEET": "Frequently tested in NEET to trap students on derivative structures."
        },
        {
          "commonConfusion": "Thinking that pure HCN reacts rapidly without base catalyst.",
          "correctFact": "HCN is very weak acid; catalytic OH- (pH 9-10) is mandatory to generate reactive :CN- nucleophile.",
          "whyItMattersForNEET": "Core mechanism question on cyanohydrin formation."
        }
      ],
      "quickRevision": [
        "Reactivity: HCHO > RCHO > RCOR",
        "Rosenmund: RCOCl -> RCHO; Stephen: RCN -> RCHO; Etard: ArCH3 -> ArCHO",
        "HCHO + RMgX -> 1° ROH; RCHO + RMgX -> 2° ROH; RCOR + RMgX -> 3° ROH"
      ]
    },
    "pyqs": []
  },
  "chem-aldol-cannizzaro": {
    "id": "chem-aldol-cannizzaro",
    "title": "Aldol Condensation, Cannizzaro Reaction & Distinction Tests",
    "chapterId": "aldehydes-ketones",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Enolate chemistry, Aldol condensation (α-H), Cannizzaro disproportionation (no α-H), Tollens/Fehling/Schiff tests, Haloform reaction, and Clemmensen vs Wolff-Kishner reductions.",
    "notes": {
      "learn": [
        "Aldol Condensation: Carbonyls with AT LEAST ONE α-hydrogen in dilute base (10% NaOH) form β-hydroxy carbonyls, which dehydrate on heating to α,β-unsaturated enals/enones.",
        "Cannizzaro Reaction: Aldehydes LACKING α-hydrogens (HCHO, C6H5CHO, (CH3)3CCHO) in concentrated base (50% NaOH) undergo disproportionation to 1 eq alcohol + 1 eq carboxylic acid salt.",
        "Crossed Cannizzaro with HCHO: Formaldehyde is ALWAYS oxidised to sodium formate (HCOONa) because it is more electrophilic.",
        "Tollens' reagent ([Ag(NH3)2]+ OH-) oxidizes ALL aldehydes to silver mirror (Ag↓); Fehling's solution oxidizes ALIPHATIC aldehydes ONLY to red Cu2O↓ (Benzaldehyde fails!).",
        "Haloform/Iodoform test (I2 + NaOH): Gives yellow crystalline CHI3 precipitate with compounds containing CH3-CO- or CH3-CH(OH)- grouping.",
        "Clemmensen reduction [Zn(Hg)/conc. HCl, acidic] and Wolff-Kishner reduction [NH2NH2/KOH/glycol, basic] deoxygenate >C=O into >CH2."
      ],
      "keyConcepts": [
        "Aldol requires α-H; Cannizzaro requires absence of α-H (HCHO, C6H5CHO, (CH3)3CCHO).",
        "Tollens' oxidizes both aliphatic and aromatic aldehydes; Fehling's oxidizes aliphatic aldehydes ONLY.",
        "Iodoform test distinguishes methyl ketones and ethanol/2-alkanols (gives yellow CHI3 ppt)."
      ],
      "formulas": [
        {
          "title": "Aldol Condensation",
          "formula": "2 CH_3CHO xrightarrow{dil. NaOH} CH_3CH(OH)CH_2CHO xrightarrow{\\Delta, -H_2O} CH_3CH=CHCHO"
        },
        {
          "title": "Cannizzaro Disproportionation",
          "formula": "2 C_6H_5CHO + 50\\% \\text{ NaOH} ⟶ C_6H_5CH_2OH + C_6H_5COONa"
        },
        {
          "title": "Iodoform Reaction",
          "formula": "R-CO-CH_3 + 3 I_2 + 4 NaOH ⟶ R-COONa + CHI_3\\downarrow\\text{ (Yellow)} + 3 NaI + 3 H_2O"
        }
      ],
      "neetImportantPoints": [
        "Tollens' reagent gives silver mirror with ALL aldehydes (aliphatic and aromatic); Fehling's solution gives red Cu2O ppt with aliphatic aldehydes ONLY.",
        "Formic acid (HCOOH) is the only carboxylic acid that reduces Tollens' and Fehling's reagents.",
        "Crossed Cannizzaro with HCHO: HCHO is always oxidised to HCOONa; other aldehyde is reduced to alcohol.",
        "Clemmensen reduction is acidic (Zn-Hg/HCl); Wolff-Kishner is basic (NH2NH2/KOH/glycol)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming Benzaldehyde reduces Fehling's solution because it is an aldehyde.",
          "correctFact": "Aromatic aldehydes (C6H5CHO) do NOT reduce Fehling's solution, but DO reduce Tollens' reagent.",
          "whyItMattersForNEET": "One of the most frequently tested NEET traps."
        },
        {
          "commonConfusion": "Thinking Chloral (CCl3CHO) gives Cannizzaro reaction.",
          "correctFact": "Chloral undergoes Haloform cleavage with NaOH to give Chloroform (CHCl3) and Sodium formate (HCOONa).",
          "whyItMattersForNEET": "Classic organic chemistry exception."
        }
      ],
      "quickRevision": [
        "Aldol = Needs α-H (dil. NaOH); Cannizzaro = No α-H (50% NaOH)",
        "Tollens' oxidizes all aldehydes; Fehling's fails on Benzaldehyde",
        "Iodoform = Yellow CHI3 with CH3CO- and CH3CH(OH)-",
        "Clemmensen = Acidic (Zn-Hg/HCl); Wolff-Kishner = Basic (NH2NH2/KOH)"
      ]
    },
    "pyqs": []
  },
  "chem-carboxylic-acids-acidity": {
    "id": "chem-carboxylic-acids-acidity",
    "title": "Carboxylic Acids — Structure, Acidity, Preparation & Reactions",
    "chapterId": "aldehydes-ketones",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Cyclic dimer H-bonding, side-chain KMnO4 oxidation, resonance stabilization of carboxylate vs phenoxide, inductive effects, Ortho effect in benzoic acids, Fischer esterification, SOCl2 reaction, HVZ bromination, and decarboxylation.",
    "notes": {
      "learn": [
        "Carboxylic acids exist as cyclic dimers held by two intermolecular H-bonds, giving higher boiling points than comparable alcohols.",
        "Carboxylate anion (RCOO-) is stabilized by two equivalent resonance structures with negative charge on electronegative oxygen atoms.",
        "Electron-withdrawing groups (-I, -M) increase acidity: CF3COOH > CCl3COOH > CHCl2COOH > NO2CH2COOH > FCH2COOH > ClCH2COOH > HCOOH > C6H5COOH > CH3COOH.",
        "Ortho Effect: Any ortho-substituted benzoic acid is stronger than benzoic acid due to steric inhibition of resonance.",
        "Carboxylic acids decompose aqueous NaHCO3 to liberate CO2 gas with brisk effervescence (distinction from phenols).",
        "HVZ Reaction: Carboxylic acids with α-hydrogen react with X2 / Red P followed by H2O to give α-halocarboxylic acids.",
        "Benzoic acid DOES NOT undergo Friedel-Crafts alkylation or acylation (deactivated ring + AlCl3 catalyst poisoning)."
      ],
      "keyConcepts": [
        "Carboxylate anion is more stable than phenoxide because charge is on two equivalent electronegative oxygens.",
        "Side-chain KMnO4 oxidation requires at least one benzylic hydrogen; tert-butylbenzene fails.",
        "HVZ reaction selectively halogenates α-carbon in presence of Red P; requires α-hydrogen."
      ],
      "formulas": [
        {
          "title": "Hell-Volhard-Zelinsky (HVZ) Reaction",
          "formula": "R-CH_2-COOH xrightarrow{(i) X_2 / \\text{Red P}, (ii) H_2O} R-CH(X)-COOH"
        },
        {
          "title": "Soda-Lime Decarboxylation",
          "formula": "R-COONa + NaOH xrightarrow[\\Delta]{CaO \\text{ (3:1)}} R-H + Na_2CO_3"
        },
        {
          "title": "Thionyl Chloride Reaction",
          "formula": "R-COOH + SOCl_2 ⟶ R-COCl + SO_2\\uparrow + HCl\\uparrow"
        }
      ],
      "neetImportantPoints": [
        "Carboxylic acids exist as cyclic dimers in vapour phase and non-polar solvents.",
        "Side-chain oxidation of alkylbenzenes gives benzoic acid provided at least 1 benzylic H is present (tert-butylbenzene fails).",
        "Ortho-substituted benzoic acids are always stronger acids than benzoic acid (Ortho Effect).",
        "NaHCO3 test: Carboxylic acids liberate CO2 with brisk effervescence; phenols do not.",
        "HVZ reaction strictly requires α-hydrogen; formic acid and pivalic acid [(CH3)3CCOOH] cannot undergo HVZ."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Believing tert-butylbenzene can be oxidised to benzoic acid by KMnO4.",
          "correctFact": "tert-Butylbenzene has zero benzylic hydrogens and is completely inert to alkaline KMnO4.",
          "whyItMattersForNEET": "Frequently tested in NEET side-chain oxidation questions."
        },
        {
          "commonConfusion": "Assuming benzoic acid undergoes Friedel-Crafts alkylation.",
          "correctFact": "Benzoic acid does NOT undergo Friedel-Crafts reaction because -COOH strongly deactivates ring and complexes with AlCl3.",
          "whyItMattersForNEET": "Essential aromatic chemistry exception."
        }
      ],
      "quickRevision": [
        "Carboxylic acids = cyclic dimers, bp higher than alcohols",
        "Acidity: CF3COOH > CCl3COOH > CHCl2COOH > FCH2COOH > ClCH2COOH > HCOOH > C6H5COOH > CH3COOH",
        "Ortho Effect: o-substituted benzoic acids > benzoic acid",
        "HVZ = RCH2COOH + X2/Red P -> RCH(X)COOH (Requires α-H)",
        "Decarboxylation: RCOONa + NaOH/CaO, Δ -> R-H + Na2CO3"
      ]
    },
    "pyqs": []
  },
  "chem-amines-basicity": {
    "id": "chem-amines-basicity",
    "title": "Amines — Structure, Basicity, Preparation & Reactions",
    "chapterId": "amines",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Structure and sp³ pyramidal inversion, gas vs aqueous basicity trends (inductive, hydration, steric factors; '213' and '231' rules), Gabriel phthalimide synthesis (pure 1° aliphatic amines only), Hofmann bromamide degradation (step-down with retention), Carbylamine test, and Hinsberg test.",
    "notes": {
      "learn": [
        "Nitrogen in amines is sp³ hybridized with trigonal pyramidal geometry and undergoes rapid umbrella inversion (~25 kJ/mol barrier).",
        "Gas-phase basicity follows pure inductive (+I) effect: 3° > 2° > 1° > NH3.",
        "Aqueous-phase basicity is governed by 3 competing factors (+I effect, hydration enthalpy of conjugate cation, and steric hindrance). Methyl order: (CH3)2NH > CH3NH2 > (CH3)3N > NH3 (2° > 1° > 3° > NH3, '213'). Ethyl order: (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3 (2° > 3° > 1° > NH3, '231').",
        "Aniline (pKb = 9.38) is ~10⁶ times weaker base than aliphatic amines due to +R lone pair delocalization into the benzene ring. Ortho-substituted anilines are weaker bases due to the Ortho Effect.",
        "Gabriel Phthalimide Synthesis prepares pure 1° aliphatic amines only via SN2 on potassium phthalimide. Aromatic 1° amines CANNOT be prepared as aryl halides do not undergo SN2.",
        "Hofmann Bromamide Degradation: R-CONH2 + Br2 + 4 NaOH -> R-NH2 (primary amine with ONE LESS carbon atom). Migrating group migrates with complete retention of configuration.",
        "Carbylamine Reaction: Primary amines (aliphatic and aromatic) heated with CHCl3 + alc. KOH produce intensely foul-smelling isocyanides (R-NC) via :CCl2 carbene.",
        "Hinsberg Test: Benzenesulfonyl chloride (C6H5SO2Cl) reacts with 1° amines to give alkali-soluble sulphonamide, 2° amines to give alkali-insoluble sulphonamide, and 3° amines do not react."
      ],
      "keyConcepts": [
        "Aqueous basicity: Methyl = 2° > 1° > 3° > NH3 (213); Ethyl = 2° > 3° > 1° > NH3 (231). 2° amine is always the strongest in aqueous solution.",
        "Gabriel phthalimide yields PURE 1° aliphatic amines only; aromatic amines fail.",
        "Hofmann bromamide degradation yields 1° amine with 1 less carbon (carbonyl C lost as Na2CO3).",
        "Carbylamine test is exclusive to 1° amines (aliphatic and aromatic); foul R-NC formed."
      ],
      "formulas": [
        {
          "title": "Hofmann Bromamide Degradation",
          "formula": "R-CONH_2 + Br_2 + 4 NaOH \\longrightarrow R-NH_2 + Na_2CO_3 + 2 NaBr + 2 H_2O"
        },
        {
          "title": "Carbylamine Reaction",
          "formula": "R-NH_2 + CHCl_3 + 3 KOH \\text{ (alc.)} \\xrightarrow{\\Delta} R-NC + 3 KCl + 3 H_2O"
        }
      ],
      "neetImportantPoints": [
        "Aqueous basicity order: Methyl = (CH3)2NH > CH3NH2 > (CH3)3N > NH3 (213); Ethyl = (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3 (231).",
        "Gabriel phthalimide synthesis CANNOT prepare aniline because chlorobenzene does not undergo SN2 with phthalimide anion.",
        "Hofmann bromamide consumes 1 mole Br2 and 4 moles NaOH per mole of amide.",
        "Aniline nitration gives 51% para, 47% meta, and 2% ortho due to formation of meta-directing anilinium ion (-NH3+).",
        "Aniline does NOT undergo Friedel-Crafts reaction because -NH2 forms an adduct with Lewis acid AlCl3."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Thinking tertiary amine is the strongest base in aqueous solution because it has three alkyl groups.",
          "correctFact": "In aqueous solution, 2° amine is universally the strongest due to the interplay of +I effect, hydration stabilization of conjugate cation, and steric hindrance.",
          "whyItMattersForNEET": "Extremely frequent NEET MCQ testing aqueous vs gas phase basicity."
        },
        {
          "commonConfusion": "Assuming aniline can be synthesized using Gabriel phthalimide reaction.",
          "correctFact": "Aryl halides do not undergo nucleophilic substitution (SN2) with potassium phthalimide; hence aniline cannot be made by this method.",
          "whyItMattersForNEET": "Standard NEET question on organic preparation limitations."
        }
      ],
      "quickRevision": [
        "Methyl amines: 2° > 1° > 3° > NH3 (213) | Ethyl amines: 2° > 3° > 1° > NH3 (231)",
        "Gabriel phthalimide = Pure 1° aliphatic amines only (no aniline)",
        "Hofmann bromamide = 1 less carbon, RCONH2 + Br2 + 4 NaOH -> RNH2",
        "Carbylamine test = 1° amines (aliphatic + aromatic) + CHCl3 + KOH -> R-NC (foul smell)",
        "Hinsberg: 1° (alkali-soluble), 2° (alkali-insoluble), 3° (no reaction)"
      ]
    },
    "pyqs": []
  },
  "chem-amines-distinction-tests": {
    "id": "chem-amines-distinction-tests",
    "title": "Diazonium Salts — Preparation, Reactions & Applications",
    "chapterId": "amines",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Structure and resonance stability of arenediazonium salts, ice-cold diazotisation (0–5 °C), Sandmeyer vs Gattermann reactions, Balz-Schiemann fluorobenzene synthesis, KI iodination, deamination with H3PO2/ethanol, and electrophilic azo coupling with phenol (orange dye, pH 9–10) and aniline (yellow dye, pH 4–5).",
    "notes": {
      "learn": [
        "Arenediazonium salts (Ar-N2+ X-) are resonance-stabilized in cold aqueous solution (0–5 °C); aliphatic diazonium salts decompose spontaneously with N2 evolution.",
        "Diazotisation: Aniline + NaNO2 + 2 HCl at 273–278 K (0–5 °C) -> C6H5N2+Cl-. Active electrophile is nitrosonium ion (:N+=O). Temperature > 5 °C causes hydrolysis to Phenol.",
        "Sandmeyer Reaction: Ar-N2+Cl- + Cu2Cl2/HCl -> Ar-Cl; Cu2Br2/HBr -> Ar-Br; CuCN/KCN -> Ar-CN (proceeds via aryl free radicals, high yield).",
        "Gattermann Reaction: Ar-N2+Cl- + Cu powder / HCl -> Ar-Cl; Cu powder / HBr -> Ar-Br.",
        "Iodobenzene Synthesis: Ar-N2+Cl- + KI (warm) -> Ar-I + N2 + KCl. NO copper catalyst is required.",
        "Balz-Schiemann Reaction: Ar-N2+Cl- + HBF4 -> Ar-N2+BF4- (precipitate) --(heat)--> Ar-F + BF3 + N2 (exclusive laboratory route to fluorobenzene).",
        "Deamination (Reduction): Ar-N2+Cl- + H3PO2 + H2O (Cu+) -> Ar-H (benzene) + H3PO3 + HCl + N2. Ethanol (CH3CH2OH) also reduces diazonium salt to benzene, getting oxidised to ethanal.",
        "Azo Coupling: Mildly electrophilic Ar-N2+ attacks activated rings at para-position. Phenol at pH 9–10 gives p-hydroxyazobenzene (Orange Dye); Aniline at pH 4–5 gives p-aminoazobenzene (Yellow Dye)."
      ],
      "keyConcepts": [
        "Diazotisation requires strict 0–5 °C temperature; warming gives Phenol + N2↑.",
        "Sandmeyer uses Cuprous salts (Cu2X2); Gattermann uses metallic Cu powder.",
        "KI reaction needs NO copper catalyst (iodide is strong nucleophile).",
        "Balz-Schiemann: ArN2+BF4- --(Δ)--> Ar-F + BF3 + N2.",
        "Azo coupling: Phenol (pH 9–10, Orange Dye) vs Aniline (pH 4–5, Yellow Dye)."
      ],
      "formulas": [
        {
          "title": "Diazotisation Reaction",
          "formula": "C_6H_5NH_2 + NaNO_2 + 2 HCl \\xrightarrow{273-278\\text{ K}} C_6H_5N_2^+Cl^- + NaCl + 2 H_2O"
        },
        {
          "title": "Sandmeyer Reaction",
          "formula": "Ar-N_2^+Cl^- \\xrightarrow{Cu_2X_2 / HX} Ar-X + N_2\\uparrow \\quad (X = Cl, Br, CN)"
        },
        {
          "title": "Balz-Schiemann Reaction",
          "formula": "Ar-N_2^+Cl^- + HBF_4 \\longrightarrow Ar-N_2^+BF_4^-\\downarrow \\xrightarrow{\\Delta} Ar-F + BF_3 + N_2\\uparrow"
        },
        {
          "title": "Deamination by H3PO2",
          "formula": "Ar-N_2^+Cl^- + H_3PO_2 + H_2O \\xrightarrow{Cu^+} Ar-H + H_3PO_3 + HCl + N_2\\uparrow"
        }
      ],
      "neetImportantPoints": [
        "Solid benzenediazonium chloride is dangerously explosive when dry; prepared and used fresh in aqueous solution.",
        "Iodobenzene is prepared simply by warming diazonium salt with aqueous KI without any catalyst.",
        "Deamination with H3PO2 or ethanol is used to remove the -NH2 directing group in multi-step synthesis (e.g. 1,3,5-tribromobenzene).",
        "Phenol coupling requires mildly alkaline pH (9–10) to generate reactive phenoxide ion.",
        "Aniline coupling requires mildly acidic pH (4–5) to keep aniline in free base form without forming unreactive anilinium ion."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming copper catalyst is required for preparing iodobenzene from diazonium salt.",
          "correctFact": "Iodobenzene is prepared simply by warming with aqueous KI; no copper powder or cuprous salt is required because iodide is an exceptionally strong nucleophile.",
          "whyItMattersForNEET": "Classic NEET reagent matching question."
        },
        {
          "commonConfusion": "Confusing pH conditions for azo coupling with phenol vs aniline.",
          "correctFact": "Phenol couples in mildly alkaline medium (pH 9–10, orange dye); Aniline couples in mildly acidic medium (pH 4–5, yellow dye).",
          "whyItMattersForNEET": "High-frequency NEET question on azo dye reaction parameters."
        }
      ],
      "quickRevision": [
        "Diazotisation = Aniline + NaNO2 + HCl at 0–5 °C (273–278 K)",
        "Sandmeyer = Cu2Cl2/HCl (Ar-Cl), Cu2Br2/HBr (Ar-Br), CuCN/KCN (Ar-CN)",
        "Gattermann = Cu powder + HX",
        "KI = Ar-I + N2 (No Cu needed)",
        "Balz-Schiemann = HBF4 followed by Δ -> Ar-F + BF3 + N2",
        "Deamination = H3PO2 or CH3CH2OH -> Benzene + N2",
        "Azo Dye = Phenol (pH 9–10, Orange Dye) | Aniline (pH 4–5, Yellow Dye)"
      ]
    },
    "pyqs": []
  },
  "chem-carbohydrates-structure": {
    "id": "chem-carbohydrates-structure",
    "title": "Carbohydrates - Monosaccharides & Disaccharides",
    "chapterId": "biomolecules",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "D/L configuration of Glucose & Fructose, Mutarotation, glycosidic linkage in Sucrose/Maltose/Starch.",
    "notes": {
      "learn": [
        "Glucose is an aldohexose with 4 chiral carbons (2⁴ = 16 optical isomers). Reacts with HI to give n-hexane, confirming straight 6-carbon chain.",
        "Sucrose is a NON-REDUCING disaccharide linked by C1 of α-D-glucose and C2 of β-D-fructose. Hydrolysis yields inverted sugar (invert sugar)."
      ],
      "keyConcepts": [
        "Glucose is an aldohexose with 4 chiral carbons (2⁴ = 16 optical isomers). Reacts with HI to give n-hexane, confirming straight 6-carbon chain."
      ],
      "formulas": [
        {
          "title": "Sucrose Glycosidic Linkage",
          "formula": "Sucrose implies alpha-D-Glucose (C_1)|- beta-D-Fructose (C_2)|glycosidic bond"
        }
      ],
      "neetImportantPoints": [
        "Starch consists of Amylose (water soluble, unbranched 1,4-α-glycosidic) and Amylopectin (water insoluble, branched 1,6-α-glycosidic)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Carbohydrates - Monosaccharides & Disaccharides.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Carbohydrates - Monosaccharides & Disaccharides.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Glucose + HI -> n-hexane, Sucrose is non-reducing"
      ]
    },
    "pyqs": []
  },
  "chem-proteins-amino-acids": {
    "id": "chem-proteins-amino-acids",
    "title": "Amino Acids & Protein Structures",
    "chapterId": "biomolecules",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Zwitterion nature, essential amino acids, peptide bond, primary/secondary/tertiary structures.",
    "notes": {
      "learn": [
        "Amino acids exist as dipolar Zwitterions at isoelectric point (pH at which amino acid carries no net electric charge).",
        "Essential amino acids (must be supplied in diet): Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine, Arginine."
      ],
      "keyConcepts": [
        "Amino acids exist as dipolar Zwitterions at isoelectric point (pH at which amino acid carries no net electric charge)."
      ],
      "formulas": [
        {
          "title": "Peptide Bond Formation",
          "formula": "-COOH + -NH_2 implies -CO-NH- + H_2O"
        }
      ],
      "neetImportantPoints": [
        "Denaturation of proteins disrupts secondary and tertiary structures by breaking H-bonds, but PRIMARY structure remains INTACT."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Amino Acids & Protein Structures.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Amino Acids & Protein Structures.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "Denaturation destroys 2° and 3° structures; 1° structure intact"
      ]
    },
    "pyqs": []
  },
  "chem-nucleic-acids-enzymes": {
    "id": "chem-nucleic-acids-enzymes",
    "title": "Nucleic Acids (DNA/RNA) & Enzymes",
    "chapterId": "biomolecules",
    "estimatedReadTimeMinutes": 15,
    "importanceWeight": "High Yield",
    "summary": "Purines, Pyrimidines, DNA double helix hydrogen bonding, and lock-and-key enzyme catalysis.",
    "notes": {
      "learn": [
        "Nucleoside = Nitrogenous Base + Sugar; Nucleotide = Nitrogenous Base + Sugar + Phosphate group.",
        "DNA Pyrimidines: Cytosine (C) and Thymine (T). RNA Pyrimidines: Cytosine (C) and Uracil (U). Adenine pairs with Thymine (2 H-bonds); Guanine pairs with Cytosine (3 H-bonds)."
      ],
      "keyConcepts": [
        "Nucleoside = Nitrogenous Base + Sugar; Nucleotide = Nitrogenous Base + Sugar + Phosphate group."
      ],
      "formulas": [
        {
          "title": "DNA Base Pairing",
          "formula": "A = T (2 H-bonds), quad G equiv C (3 H-bonds)"
        }
      ],
      "neetImportantPoints": [
        "Vitamins: Vitamin B12 contains Cobalt (Co). Deficiency of Vitamin C causes Scurvy; Vitamin D causes Rickets."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing concepts in Nucleic Acids (DNA/RNA) & Enzymes.",
          "correctFact": "Strictly follow NCERT chemistry definitions and electronic rules for Nucleic Acids (DNA/RNA) & Enzymes.",
          "whyItMattersForNEET": "Frequently tested in NEET Chemistry."
        }
      ],
      "quickRevision": [
        "A=T (2 H-bonds), G≡C (3 H-bonds), Uracil in RNA"
      ]
    },
    "pyqs": []
  },
  "chem-practical-functional-groups": {
    "id": "chem-practical-functional-groups",
    "title": "Qualitative Analysis & Practical Identification",
    "chapterId": "practical-chemistry",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Qualitative inorganic analysis, preliminary dry tests, Bunsen flame excitation colors, systematic cation separation (Groups 0 to VI) via Ksp & common-ion effect, anion detection, precipitate colors, and gas tests.",
    "notes": {
      "learn": [
        "Systematic Cation Group Separation: Group 0 (NH₄⁺) tested on original salt with NaOH/Nessler's; Group I (Pb²⁺) precipitated as white PbCl₂ with dil HCl; Group II (Cu²⁺, Pb²⁺) precipitated as black sulfides with H₂S in dil HCl (low [S²⁻] due to H⁺ common-ion effect); Group III (Fe³⁺, Al³⁺, Cr³⁺) precipitated as hydroxides with NH₄OH + NH₄Cl (low [OH⁻] due to NH₄⁺ common-ion effect); Group IV (Zn²⁺, Mn²⁺, Ni²⁺, Co²⁺) precipitated as sulfides with H₂S in NH₄OH; Group V (Ba²⁺, Sr²⁺, Ca²⁺) precipitated as white carbonates with (NH₄)₂CO₃ + NH₄OH + NH₄Cl; Group VI (Mg²⁺) precipitated as white Mg(NH₄)PO₄ with Na₂HPO₄.",
        "Flame Tests: Volatile chlorides in Bunsen flame emit characteristic visible light: Na⁺ (golden yellow), K⁺ (lilac / crimson via cobalt glass), Ca²⁺ (brick red), Sr²⁺ (crimson red), Ba²⁺ (apple green), Cu²⁺ (bluish green). Be²⁺ and Mg²⁺ impart NO color due to high ionization energies.",
        "Confirmatory Reactions: NH₄⁺ + Nessler's reagent -> Iodide of Millon's base (brown ppt H₂N-Hg-O-Hg-I); Pb²⁺ + KI -> PbI₂ (golden yellow spangles on cooling); Cu²⁺ + excess NH₄OH -> [Cu(NH₃)₄]²⁺ (deep azure blue); Fe³⁺ + K₄[Fe(CN)₆] -> Prussian Blue (Fe₄[Fe(CN)₆]₃); Ni²⁺ + DMG in NH₄OH -> Scarlet red [Ni(dmg)₂]; NO₃⁻ + FeSO₄ + conc H₂SO₄ -> Dark brown ring [Fe(H₂O)₅(NO)]SO₄ (Fe has +1 oxidation state).",
        "Anion Tests: CO₃²⁻ + dil acid -> CO₂ (turns lime water milky); SO₃²⁻ + dil acid -> SO₂ (turns acidified K₂Cr₂O₇ emerald green); S²⁻ + dil acid -> H₂S (blackens lead acetate paper, turns nitroprusside purple); Cl⁻ + conc H₂SO₄ + K₂Cr₂O₇ -> CrO₂Cl₂ (red-brown vapors); SO₄²⁻ + BaCl₂ -> BaSO₄ (white ppt insoluble in conc HCl); PO₄³⁻ + (NH₄)₂MoO₄ + conc HNO₃ -> Canary-yellow (NH₄)₃[PMo₁₂O₄₀]."
      ],
      "keyConcepts": [
        "Solubility Product Principle: Precipitation occurs when Ionic Product Qsp > Ksp.",
        "Common-Ion Effect: Dilute HCl suppresses [S²⁻] in Group II; NH₄Cl suppresses [OH⁻] in Group III to prevent premature precipitation of Group IV/V cations.",
        "In the brown ring complex [Fe(H₂O)₅(NO)]SO₄, iron is in the +1 oxidation state (3d⁷) and nitric oxide is present as NO⁺."
      ],
      "formulas": [
        {
          "title": "Nessler's Reagent Reaction",
          "formula": "2 K_2[HgI_4] + NH_3 + 3 KOH \\implies H_2N-Hg-O-Hg-I\\downarrow (\\text{Brown ppt}) + 7 KI + 2 H_2O"
        },
        {
          "title": "Brown Ring Complex Formation",
          "formula": "[Fe(H_2O)_6]^{2+} + NO + SO_4^{2-} \\implies [Fe(H_2O)_5(NO)]SO_4 (\\text{Dark Brown Ring}) + H_2O"
        },
        {
          "title": "Chromyl Chloride Reaction",
          "formula": "K_2Cr_2O_7 + 4 NaCl + 6 H_2SO_4 \\implies 2 CrO_2Cl_2\\uparrow (\\text{Red-Brown}) + 2 KHSO_4 + 4 NaHSO_4 + 3 H_2O"
        }
      ],
      "neetImportantPoints": [
        "Be²⁺ and Mg²⁺ do NOT give any flame test because their high ionization enthalpies prevent thermal electron excitation.",
        "AgCl is white (soluble in dil NH₄OH), AgBr is pale yellow (sparingly soluble in conc NH₄OH), and AgI is yellow (insoluble in NH₄OH).",
        "Chromyl chloride test fails for covalent or insoluble chlorides: Hg₂Cl₂, AgCl, PbCl₂, SnCl₄.",
        "Ni(DMG)₂ is a square planar, diamagnetic, scarlet-red complex stabilized by two symmetrical intramolecular hydrogen bonds."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming iron in the brown ring complex is Fe²⁺ or Fe³⁺.",
          "correctFact": "In [Fe(H₂O)₅(NO)]SO₄, iron has an oxidation state of +1 (d⁷, paramagnetic with 3 unpaired electrons, μ = 3.87 BM).",
          "whyItMattersForNEET": "Extremely high-frequency NEET question in coordination chemistry and practical analysis."
        },
        {
          "commonConfusion": "Confusing solubility of silver halides in aqueous ammonia.",
          "correctFact": "AgCl is soluble in dil. NH₄OH; AgBr is sparingly soluble in conc. NH₄OH; AgI is completely insoluble in NH₄OH.",
          "whyItMattersForNEET": "Directly tested in halide identification questions."
        }
      ],
      "quickRevision": [
        "Group I (dil HCl) -> Pb²⁺; Group II (H₂S + dil HCl) -> Cu²⁺; Group III (NH₄OH + NH₄Cl) -> Fe³⁺, Al³⁺",
        "Group IV (H₂S + NH₄OH) -> Zn²⁺, Mn²⁺, Ni²⁺; Group V ((NH₄)₂CO₃) -> Ba²⁺, Sr²⁺, Ca²⁺; Group VI -> Mg²⁺",
        "Flame: Na⁺ golden yellow, K⁺ lilac, Ca²⁺ brick red, Sr²⁺ crimson, Ba²⁺ apple green, Cu²⁺ bluish green",
        "Brown ring complex = [Fe(H₂O)₅(NO)]SO₄ (Fe has +1 oxidation state)"
      ]
    },
    "pyqs": []
  },
  "chem-practical-titrations": {
    "id": "chem-practical-titrations",
    "title": "Volumetric Analysis & Organic Functional-Group Tests",
    "chapterId": "practical-chemistry",
    "estimatedReadTimeMinutes": 20,
    "importanceWeight": "High Yield",
    "summary": "Volumetric analysis, molarity, normality, equivalent weight, acid-base indicator pH transitions, KMnO₄ self-indicating redox titrations, primary standards, and diagnostic organic functional-group detection tests.",
    "notes": {
      "learn": [
        "Volumetric Analysis: Equivalence Point is the theoretical stoichiometric point; End Point is the experimental point signaled by indicator color change. Normality N = Molarity × n-factor. Law of Equivalence: N₁V₁ = N₂V₂.",
        "Acid-Base Indicators: Phenolphthalein (pH 8.3–10.0: colorless in acid -> pink in alkali) is used for Strong Acid vs Strong Base and Weak Acid vs Strong Base. Methyl Orange (pH 3.1–4.4: red in acid -> yellow in alkali) is used for Strong Acid vs Strong Base and Strong Acid vs Weak Base.",
        "KMnO₄ Redox Titration: KMnO₄ acts as a SELF-INDICATOR in acidic medium (dilute H₂SO₄): MnO₄⁻ + 8H⁺ + 5e⁻ -> Mn²⁺ + 4H₂O (n-factor = 5, Eq. Wt. = 158/5 = 31.6 g/eq). Endpoint is first permanent faint pink tinge. Dilute H₂SO₄ is used; HCl is avoided (oxidized to Cl₂) and HNO₃ is avoided (competing oxidant). Oxalic acid titration requires heating to 60–70°C (reaction is autocatalytic via Mn²⁺); Mohr's salt titration is done at room temperature.",
        "Primary vs Secondary Standards: Oxalic acid ((COOH)₂·2H₂O) and Mohr's salt (FeSO₄·(NH₄)₂SO₄·6H₂O) are primary standards (stable, high purity). KMnO₄ and NaOH are secondary standards.",
        "Organic Functional Group Tests: Alcohols (Lucas test: 3° immediate, 2° in 5 min, 1° on heating); Phenols (neutral FeCl₃ gives deep violet [Fe(OAr)₆]³⁻, Br₂ water gives white 2,4,6-tribromophenol ppt); Aldehydes (Tollens' silver mirror, Fehling's red Cu₂O for aliphatic aldehydes); Ketones (2,4-DNP orange ppt, yellow iodoform CHI₃ with I₂/NaOH for CH₃-C=O); Carboxylic acids (saturated NaHCO₃ gives brisk CO₂ effervescence); Amines (Carbylamine test gives foul R-NC for 1° amines; Hinsberg test C₆H₅SO₂Cl separates 1°/2°/3° amines); Unsaturation (Br₂ in CCl₄ & Baeyer's cold alk. KMnO₄ decolourization)."
      ],
      "keyConcepts": [
        "KMnO₄ acts as a Self-Indicator (intense purple MnO₄⁻ reduced to colorless Mn²⁺).",
        "Primary standards can be accurately weighed directly; secondary standards must be standardized.",
        "Phenols do NOT liberate CO₂ with NaHCO₃ (unlike carboxylic acids); Benzaldehyde fails Fehling's test (unlike aliphatic aldehydes)."
      ],
      "formulas": [
        {
          "title": "Molarity & Normality Relation",
          "formula": "N = M \\times n\\text{-factor}"
        },
        {
          "title": "KMnO₄ Reaction with Oxalic Acid",
          "formula": "2 MnO_4^- + 5 C_2O_4^{2-} + 16 H^+ \\implies 2 Mn^{2+} + 10 CO_2\\uparrow + 8 H_2O"
        },
        {
          "title": "KMnO₄ Reaction with Mohr's Salt",
          "formula": "MnO_4^- + 5 Fe^{2+} + 8 H^+ \\implies Mn^{2+} + 5 Fe^{3+} + 4 H_2O"
        },
        {
          "title": "Iodoform Reaction",
          "formula": "CH_3\\text{-}CO\\text{-}R + 3 I_2 + 4 NaOH \\implies CHI_3\\downarrow (\\text{Yellow}) + R\\text{-}COONa + 3 NaI + 3 H_2O"
        }
      ],
      "neetImportantPoints": [
        "Dilute H₂SO₄ is the ONLY acid used in KMnO₄ titrations; HCl is oxidized to Cl₂ and HNO₃ is a competing oxidant.",
        "Weak Acid vs Strong Base ⟶ Phenolphthalein ONLY (equivalence pH ≈ 8.8).",
        "Strong Acid vs Weak Base ⟶ Methyl Orange ONLY (equivalence pH ≈ 5.2).",
        "Carbylamine test is specific to PRIMARY (1°) aliphatic and aromatic amines."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Using HCl to acidify KMnO₄ titrations.",
          "correctFact": "KMnO₄ oxidizes Cl⁻ in HCl to Cl₂ gas, leading to an artificially high titer value. Dilute H₂SO₄ must be used.",
          "whyItMattersForNEET": "Classic laboratory procedure trap tested frequently in NEET."
        },
        {
          "commonConfusion": "Believing benzaldehyde gives a red precipitate with Fehling's solution.",
          "correctFact": "Benzaldehyde (aromatic aldehyde) reduces Tollens' reagent but FAILS to reduce Fehling's solution.",
          "whyItMattersForNEET": "A frequent distinction question in organic chemistry."
        }
      ],
      "quickRevision": [
        "KMnO₄ in acidic medium: n-factor = 5, Eq Wt = 31.6 g/eq, self-indicator",
        "Dilute H₂SO₄ only for KMnO₄ (never HCl or HNO₃)",
        "Weak Acid + Strong Base -> Phenolphthalein; Strong Acid + Weak Base -> Methyl Orange",
        "Oxalic acid & Mohr's salt = Primary standards; KMnO₄ & NaOH = Secondary standards",
        "Carboxylic acid gives CO₂ with NaHCO₃ (Phenol does not); 1° Amine gives foul R-NC with CHCl₃/KOH"
      ]
    },
    "pyqs": []
  },
  "chem-purification-characterisation": {
    "id": "chem-purification-characterisation",
    "title": "Purification & Characterisation of Organic Compounds",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Purification methods (crystallization, sublimation, distillation, chromatography) and qualitative/quantitative analysis (Lassaigne's test, Dumas, Kjeldahl estimation of N, S, P, halogens).",
    "notes": {
      "learn": [
        "Purification Methods: Sublimation (sublimable from non-sublimable), Crystallization (difference in solubilities in suitable solvent), Distillation (volatile liquids from non-volatile/liquids with sufficient boiling point difference), Fractional Distillation (close boiling points), Steam Distillation (steam-volatile, water-immiscible e.g., aniline), Differential Extraction, and Chromatography (paper, column, thin layer).",
        "Qualitative Analysis: Lassaigne's Test detects N (Prussian blue [Fe₄[Fe(CN)₆]₃]), S (black PbS ppt or violet with sodium nitroprusside), and Halogens (AgCl white, AgBr pale yellow, AgI yellow ppt).",
        "Quantitative Analysis: Carbon & Hydrogen estimated as CO₂ and H₂O using CuO. Nitrogen estimated by Dumas Method (N₂ gas collected over KOH) and Kjeldahl Method (NH₃ absorbed in known excess H₂SO₄; not applicable to nitro, azo, and pyridine N). Halogens estimated by Carius Method (as AgX)."
      ],
      "keyConcepts": [
        "Lassaigne's Test: Na + C + N -> NaCN; 4 NaCN + FeSO₄ -> Na₄[Fe(CN)₆]; 3 Na₄[Fe(CN)₆] + 4 FeCl₃ -> Fe₄[Fe(CN)₆]₃ (Prussian Blue).",
        "Kjeldahl Method %N = [1.4 × M × V (mEq acid consumed)] / Mass of organic compound (g).",
        "Chromatography Principle: Differential adsorption/partitioning of components between stationary and mobile phases."
      ],
      "formulas": [
        {
          "title": "Kjeldahl Nitrogen Percentage",
          "formula": "% N = \frac{1.4 \times M \times V}{m}"
        },
        {
          "title": "Carius Halogen Percentage",
          "formula": "% X = \frac{\text{Atomic Mass of } X}{\text{Molar Mass of } AgX} \times \frac{\text{Mass of } AgX}{\text{Mass of Compound}} \times 100"
        },
        {
          "title": "Dumas Nitrogen Percentage",
          "formula": "% N = \frac{28}{22400} \times \frac{V_{STP}}{\text{Mass of Compound}} \times 100"
        }
      ],
      "neetImportantPoints": [
        "Kjeldahl's method fails for compounds containing nitrogen in ring (e.g., pyridine, quinoline) and nitro (-NO₂) or azo (-N=N-) groups because nitrogen in these compounds is not converted to ammonium sulphate.",
        "Aniline is purified by steam distillation because it is steam volatile and immiscible with water.",
        "Chromatography R_f value = (Distance moved by substance) / (Distance moved by solvent front)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing Kjeldahl applicability with all nitrogen compounds.",
          "correctFact": "Nitro, azo, and ring nitrogen (pyridine) CANNOT be estimated by Kjeldahl method; Dumas method must be used.",
          "whyItMattersForNEET": "Extremely high yield conceptual question tested repeatedly in NEET."
        }
      ],
      "quickRevision": [
        "Prussian blue = Fe₄[Fe(CN)₆]₃ for Lassaigne N test",
        "Steam distillation for Aniline & o-nitrophenol",
        "Kjeldahl fails for nitro, azo, pyridine N"
      ]
    },
    "pyqs": []
  },
  "chem-classification-iupac": {
    "id": "chem-classification-iupac",
    "title": "Classification & IUPAC Nomenclature",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Classification of organic compounds (acyclic, cyclic, homocyclic, heterocyclic) and IUPAC nomenclature rules for polyfunctional organic compounds.",
    "notes": {
      "learn": [
        "Classification: Organic compounds are classified into Acyclic (open-chain/aliphatic) and Cyclic (closed-chain/ring). Cyclic compounds are divided into Homocyclic/Carbocyclic (alicyclic and aromatic e.g., benzene) and Heterocyclic (e.g., furan, thiophene, pyridine).",
        "Functional Groups & Homologous Series: Homologous series share same functional group, general formula, and consecutive members differ by -CH₂- (14 u mass).",
        "IUPAC Rules: 1. Select longest carbon chain containing principal functional group & maximum multiple bonds. 2. Number chain to give lowest locants to principal functional group > multiple bonds > substituents. 3. Name format: Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix."
      ],
      "keyConcepts": [
        "Principal Functional Group Priority: -COOH > -SO₃H > -COOR > -COCl > -CONH₂ > -CN > -CHO > >C=O > -OH > -NH₂ > >C=C< > -C≡C-.",
        "Substituents named alphabetically: Bromo before Chloro, Ethyl before Methyl (ignore di, tri prefixes when alphabetizing)."
      ],
      "formulas": [
        {
          "title": "IUPAC Name Structure",
          "formula": "\text{Prefix (Substituents)} + \text{Word Root (Chain length)} + \text{Primary Suffix (en/yn)} + \text{Secondary Suffix (Principal FG)}"
        }
      ],
      "neetImportantPoints": [
        "When carboxylic acid carbon is included in main chain, suffix is '-oic acid'; when carbon is excluded (e.g., attached directly to ring or in tricarboxylic acids), suffix is 'carboxylic acid'.",
        "Halogens (-F, -Cl, -Br, -I), Nitro (-NO₂), and Alkoxy (-OR) are ALWAYS treated as substituents (secondary prefixes), never as principal suffixes."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming di/tri/tetra prefixes count in alphabetical order of substituents.",
          "correctFact": "Prefixes like di, tri, tetra are IGNORED in alphabetization (e.g., 'dimethyl' comes under 'm', 'ethyl' comes under 'e').",
          "whyItMattersForNEET": "A frequent trap in NEET IUPAC naming options."
        }
      ],
      "quickRevision": [
        "Priority: -COOH > -CHO > -C=O > -OH > -NH₂ > C=C > C≡C",
        "-NO₂, -X, -OR are always prefixes, never principal suffixes"
      ]
    },
    "pyqs": []
  },
  "chem-isomerism": {
    "id": "chem-isomerism",
    "title": "Isomerism",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Structural isomerism (chain, position, functional, metamerism, ring-chain) and stereoisomerism (geometrical cis/trans E/Z, optical isomerism).",
    "notes": {
      "learn": [
        "Structural Isomerism: 1. Chain (different carbon skeleton). 2. Position (different position of functional group/multiple bond). 3. Functional (different functional groups e.g., alcohol & ether, aldehyde & ketone, carboxylic acid & ester). 4. Metamerism (different alkyl groups on either side of polyvalent heteroatom e.g., ethers, 2° amines, esters). 5. Ring-Chain (open chain & cyclic with same molecular formula).",
        "Stereoisomerism: Geometrical isomerism arises from restricted rotation around C=C or ring bonds. Requires each sp² carbon to have two DIFFERENT groups attached. Cis (same sides), Trans (opposite sides); E/Z nomenclature based on CIP priority rules.",
        "Optical Isomerism: Requires chiral carbon (asymmetric carbon with 4 different attached groups). Non-superimposable mirror images are Enantiomers. Equal mixture of d and l enantiomers forms optically inactive Racemic Mixture (external compensation)."
      ],
      "keyConcepts": [
        "Geometrical Isomerism condition: Carbon-carbon double bond with structural pattern abC=Cab or abC=Ccd (a ≠ b and c ≠ d).",
        "CIP Priority Rules for E/Z: Higher atomic number gets higher priority. If atoms attached directly are identical, compare next atoms attached."
      ],
      "formulas": [
        {
          "title": "Number of Optical Isomers",
          "formula": "For unsymmetrical molecule with n asymmetric carbons: N = 2^n"
        }
      ],
      "neetImportantPoints": [
        "Trans isomer generally has HIGHER melting point (symmetrical crystal packing) and LOWER dipole moment/boiling point than Cis isomer.",
        "Meso compounds possess chiral carbons and a plane of symmetry (internal compensation), making them optically inactive."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing Metamerism with Position Isomerism.",
          "correctFact": "Metamerism specifically requires a polyvalent functional group (-O-, -S-, -NH-, -COO-) with different alkyl groups attached on either side.",
          "whyItMattersForNEET": "Frequently tested distinction in NEET structural isomerism questions."
        }
      ],
      "quickRevision": [
        "Metamerism needs polyvalent heteroatom (-O-, -NH-, -COO-)",
        "Cis has higher dipole moment; Trans has higher melting point",
        "Meso is optically inactive due to internal compensation"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-iso-1",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "Which amongst the following compounds will show geometrical isomerism?",
        "options": [
          "1. Propene",
          "2. 1-Phenylpropene",
          "3. 2-Methylbut-2-ene",
          "4. But-1-ene"
        ],
        "correctAnswer": 1,
        "explanation": "In 1-Phenylpropene (C₆H₅-CH=CH-CH₃), C1 is bonded to (-H, -C₆H₅) and C2 is bonded to (-H, -CH₃). This satisfies abC=Cab pattern and exhibits cis/trans geometrical isomerism.",
        "difficulty": "Medium",
        "conceptTested": "Conditions required for Geometrical Isomerism in Alkenes",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      },
      {
        "id": "pyq-iso-2",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "Which of the following molecules is CHIRAL in nature?",
        "options": [
          "1. 2-Bromobutane",
          "2. 1-Bromobutane",
          "3. 2-Bromopropane",
          "4. 2-Bromopropan-2-ol"
        ],
        "correctAnswer": 0,
        "explanation": "In 2-Bromobutane [CH₃-*CH(Br)-CH₂CH₃], C2 is attached to 4 completely different groups: -H, -Br, -CH₃, and -CH₂CH₃. Thus C2 is a chiral carbon (*C), making 2-bromobutane chiral.",
        "difficulty": "Easy",
        "conceptTested": "Identification of Chiral Center (*C) and Chiral Molecules",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      },
      {
        "id": "pyq-iso-3",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Diethoxymethane and 1-methoxypropane are examples of:",
        "options": [
          "1. Chain isomers",
          "2. Position isomers",
          "3. Metamers",
          "4. Functional isomers"
        ],
        "correctAnswer": 2,
        "explanation": "Both compounds are ethers containing a polyvalent oxygen atom (-O-) with different alkyl groups attached on either side. Hence they are metamers.",
        "difficulty": "Medium",
        "conceptTested": "Metamerism in Ethers",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      },
      {
        "id": "pyq-iso-4",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Which of the following compounds is optically INACTIVE due to internal compensation?",
        "options": [
          "1. d-Tartaric acid",
          "2. l-Tartaric acid",
          "3. Meso-tartaric acid",
          "4. Racemic tartaric acid"
        ],
        "correctAnswer": 2,
        "explanation": "Meso-tartaric acid possesses two chiral centers but contains an internal plane of symmetry. This self-cancellation within a single molecule is called INTERNAL COMPENSATION.",
        "difficulty": "Easy",
        "conceptTested": "Meso Compounds & Internal Compensation",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      },
      {
        "id": "pyq-iso-5",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "How many structural isomers are possible for the molecular formula C₅H₁₂?",
        "options": [
          "1. 2",
          "2. 3",
          "3. 4",
          "4. 5"
        ],
        "correctAnswer": 1,
        "explanation": "C₅H₁₂ (Pentane) has 3 chain isomers: 1) n-Pentane, 2) Isopentane (2-Methylbutane), and 3) Neopentane (2,2-Dimethylpropane).",
        "difficulty": "Easy",
        "conceptTested": "Chain Isomer Count for Alkanes",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      },
      {
        "id": "pyq-iso-6",
        "year": 2018,
        "exam": "NEET UG 2018",
        "question": "The type of isomerism shown by Pentan-2-one and Pentan-3-one is:",
        "options": [
          "1. Chain isomerism",
          "2. Position isomerism",
          "3. Functional isomerism",
          "4. Metamerism"
        ],
        "correctAnswer": 1,
        "explanation": "Pentan-2-one and Pentan-3-one have identical carbon skeletons (5 carbons) and ketone functional group (>C=O), but differ in the locant position of carbonyl group (C2 vs C3). This is Position Isomerism.",
        "difficulty": "Easy",
        "conceptTested": "Position Isomerism in Ketones",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      },
      {
        "id": "pyq-iso-7",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "Which of the following pairs of compounds are FUNCTIONAL ISOMERS?",
        "options": [
          "1. CH₃-CH₂-OH and CH₃-O-CH₃",
          "2. CH₃-CH₂-CH₂-OH and CH₃-CH(OH)-CH₃",
          "3. CH₃-CH₂-CH₂-CH₃ and CH₃-CH(CH₃)-CH₃",
          "4. C₂H₅-O-C₂H₅ and CH₃-O-C₃H₇"
        ],
        "correctAnswer": 0,
        "explanation": "Ethanol (an Alcohol) and Dimethyl ether (an Ether) share molecular formula C₂H₆O but belong to different functional group classes.",
        "difficulty": "Easy",
        "conceptTested": "Functional Group Isomerism (Alcohol vs Ether)",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      },
      {
        "id": "pyq-iso-8",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "An organic compound C₄H₁₀O does not react with sodium metal. On reaction with excess HI, it yields single alkyl iodide C₂H₅I. The compound is:",
        "options": [
          "1. Ethoxyethane (Diethyl ether)",
          "2. Methoxypropane",
          "3. Butan-1-ol",
          "4. Butan-2-ol"
        ],
        "correctAnswer": 0,
        "explanation": "Ethoxyethane (Diethyl ether, C₂H₅-O-C₂H₅) does not react with sodium metal. On reaction with excess HI, both C-O bonds are cleaved to yield Ethyl iodide (C₂H₅I).",
        "difficulty": "Hard",
        "conceptTested": "Chemical Distinctions & Cleavage of Ether Metamers",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-isomerism"
      }
    ]
  },
  "chem-electronic-effects-intermediates": {
    "id": "chem-electronic-effects-intermediates",
    "title": "Electronic Effects & Reaction Intermediates",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Inductive effect (+I/-I), resonance/mesomeric (+M/-M), hyperconjugation, electromeric effect, and stability of carbocations, carbanions, and free radicals.",
    "notes": {
      "learn": [
        "Inductive Effect (I-effect): Permanent displacement of σ-electrons along carbon chain due to electronegativity difference. Distance-dependent (diminishes after 3 carbons). -I groups: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH > -Ph. +I groups: -O⁻ > -COO⁻ > 3° alkyl > 2° alkyl > 1° alkyl > -CH₃.",
        "Resonance / Mesomeric Effect (M/R-effect): Permanent delocalization of π-electrons/lone pairs through conjugated system. Distance independent. +M (electron donating via lone pair): -O⁻ > -NH₂ > -OH > -OR > -NHCOCH₃ > -X. -M (electron withdrawing via double/triple bond to electronegative atom): -NO₂ > -CN > -CHO > >C=O > -COOH.",
        "Hyperconjugation (No-Bond Resonance / Baker-Nathan Effect): Delocalization of σ-electrons of C-H bond of an alkyl group directly attached to an unsaturated system or atom with unshared p-orbital (carbocation, free radical). Stability proportional to number of α-hydrogens.",
        "Reaction Intermediates: Carbocation (sp², planar, 6 e⁻, paramagnetic = false, stability: Allyl/Benzyl > 3° > 2° > 1° > CH₃⁺). Carbanion (sp³, pyramidal, 8 e⁻, stability: CH₃⁻ > 1° > 2° > 3°). Free Radical (sp²/planar, 7 e⁻, stability: Allyl/Benzyl > 3° > 2° > 1° > CH₃•)."
      ],
      "keyConcepts": [
        "Stability Order Rule: Benzyl/Allyl carbocations stabilized by resonance > Alkyl carbocations stabilized by hyperconjugation (α-H count) and +I effect.",
        "Carbanion stability is INCREASED by -I / -M groups and DECREASED by +I / +M groups."
      ],
      "formulas": [
        {
          "title": "Carbocation / Radical Hyperconjugative Structures",
          "formula": "Number of hyperconjugative structures = Number of α-hydrogens + 1"
        }
      ],
      "neetImportantPoints": [
        "Halogens (-Cl, -Br, -I) exhibit -I effect OVERPOWERING +M effect in electrophilic substitution reactions, so they are DEACTIVATING yet ORTHO/PARA directing.",
        "Stability of carbocations: (C₆H₅)₃C⁺ > (C₆H₅)₂CH⁺ > C₆H₅CH₂⁺ ≈ CH₂=CH-CH₂⁺ > (CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺.",
        "Acidic strength of carboxylic acids increases with -I groups (stabilize carboxylate anion RCOO⁻) and decreases with +I groups."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing halogen behavior on benzene rings.",
          "correctFact": "Halogens are net DEACTIVATING (due to strong -I effect) but ORTHO/PARA directing (due to weak +M lone pair donation).",
          "whyItMattersForNEET": "A classical NEET trap in electrophilic substitution stability & orientation."
        }
      ],
      "quickRevision": [
        "Carbocation stability: Benzyl > Allyl > 3° > 2° > 1° > CH₃⁺",
        "Carbanion stability: CH₃⁻ > 1° > 2° > 3°",
        "Halogens: Deactivating (-I > +M) but Ortho/Para directing"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-eei-1",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "Which among the following carbocations is expected to be the most stable?",
        "options": [
          "(C₆H₅)₃C⁺ (Triphenylmethyl carbocation)",
          "(CH₃)₃C⁺ (tert-Butyl carbocation)",
          "(CH₃)₂CH⁺ (Isopropyl carbocation)",
          "CH₃-CH₂⁺ (Ethyl carbocation)"
        ],
        "correctAnswer": 0,
        "explanation": "Triphenylmethyl carbocation (C₆H₅)₃C⁺ is stabilized by extensive resonance delocalization across 3 phenyl rings (9 canonical structures), overruling simple hyperconjugative stability.",
        "difficulty": "Medium",
        "conceptTested": "Resonance vs Hyperconjugation Stabilization of Carbocations",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-2",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "Which of the following carbocations is the most stable due to hyperconjugation?",
        "options": [
          "(CH₃)₃C⁺",
          "(CH₃)₂CH⁺",
          "CH₃-CH₂⁺",
          "CH₃⁺"
        ],
        "correctAnswer": 0,
        "explanation": "Hyperconjugation stability depends directly on α-hydrogen count. (CH₃)₃C⁺ has 9 α-hydrogens, (CH₃)₂CH⁺ has 6, CH₃-CH₂⁺ has 3, and CH₃⁺ has 0.",
        "difficulty": "Easy",
        "conceptTested": "Hyperconjugation & α-Hydrogen Count in Carbocations",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-3",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Which of the following species acts as an ELECTROPHILE?",
        "options": [
          "BF₃ (Boron trifluoride)",
          "NH₃ (Ammonia)",
          "H₂O (Water)",
          "OH⁻ (Hydroxide ion)"
        ],
        "correctAnswer": 0,
        "explanation": "BF₃ has an incomplete octet (6 valence electrons) and a vacant 2p orbital, making it an electron-pair acceptor (electrophile). NH₃, H₂O, and OH⁻ are nucleophiles.",
        "difficulty": "Easy",
        "conceptTested": "Identification of Neutral Electrophiles vs Nucleophiles",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-4",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Homolytic fission of a covalent C-C bond in an organic molecule results in the formation of:",
        "options": [
          "Free Radicals",
          "Carbocations only",
          "Carbanions only",
          "Zwitterions"
        ],
        "correctAnswer": 0,
        "explanation": "Homolytic fission involves equal splitting of bonding electrons, yielding neutral species carrying an unpaired electron, known as Free Radicals.",
        "difficulty": "Easy",
        "conceptTested": "Homolytic Bond Cleavage & Free Radical Generation",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-5",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "The correct stability order of simple alkyl carbanions is:",
        "options": [
          "CH₃⁻ > 1° > 2° > 3°",
          "3° > 2° > 1° > CH₃⁻",
          "1° > 3° > 2° > CH₃⁻",
          "3° > 1° > 2° > CH₃⁻"
        ],
        "correctAnswer": 0,
        "explanation": "In carbanions, alkyl groups donate electron density (+I effect) onto a negatively charged carbon, increasing charge density and destabilizing it. CH₃⁻ > 1° > 2° > 3°.",
        "difficulty": "Medium",
        "conceptTested": "Inductive Effect (+I) on Carbanion Stability",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-6",
        "year": 2018,
        "exam": "NEET UG 2018",
        "question": "Which of the following organic groups exhibits the strongest -I (electron-withdrawing inductive) effect?",
        "options": [
          "-NO₂",
          "-CN",
          "-COOH",
          "-F"
        ],
        "correctAnswer": 0,
        "explanation": "The established NEET order of -I effect is: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH. Nitro (-NO₂) is the strongest electron-withdrawing group.",
        "difficulty": "Medium",
        "conceptTested": "Relative Strength Order of -I Groups",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-7",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "Hyperconjugation involves the delocalization of which type of electrons?",
        "options": [
          "σ electrons of C-H bond into empty p-orbital or π-system",
          "π electrons into another π-system",
          "Lone pair electrons into a σ-orbital",
          "σ electrons of C-C bond only"
        ],
        "correctAnswer": 0,
        "explanation": "Hyperconjugation is the delocalization of σ-electrons of an alkyl C-H bond attached directly to an unsaturated carbon or a carbon with an unshared p-orbital.",
        "difficulty": "Easy",
        "conceptTested": "Definition and Mechanism of Hyperconjugation",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-8",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "Regarding halogens (-Cl, -Br) attached to a benzene ring, which statement correctly describes their electronic effects in electrophilic substitution?",
        "options": [
          "Deactivating due to -I effect, but Ortho/Para directing due to +M effect",
          "Activating and Ortho/Para directing due to +M effect",
          "Deactivating and Meta directing due to -I effect",
          "Activating and Meta directing due to -M effect"
        ],
        "correctAnswer": 0,
        "explanation": "In halogenobenzenes, -I effect is stronger than +M resonance donation, deactivating the ring, but +M lone pair donation stabilizes ortho/para intermediates.",
        "difficulty": "Hard",
        "conceptTested": "Halogen Anomaly in Electrophilic Aromatic Substitution (-I vs +M)",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      }
    ]
  },
  "chem-basic-reaction-mechanisms": {
    "id": "chem-basic-reaction-mechanisms",
    "title": "Basic Organic Reaction Mechanisms",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Bond cleavage (homolytic & heterolytic), electrophiles, nucleophiles, curved-arrow notation, substitution, addition, elimination, and rearrangement reactions.",
    "notes": {
      "learn": [
        "Bond Cleavage: Homolytic cleavage gives FREE RADICALS (equal electron sharing, favoured by UV light, peroxide, high temperature, non-polar solvent). Heterolytic cleavage gives CARBOCATION and CARBANION (unequal sharing, favoured by polar solvents).",
        "Attacking Reagents: Electrophiles (E⁺ / electron loving, e.g., H⁺, NO₂⁺, Cl⁺, BF₃, AlCl₃, SO₃, carbene). Nucleophiles (Nu⁻ / nucleus loving, e.g., OH⁻, CN⁻, H₂O, NH₃, R-OH, RMgX). Ambiphiles act as both (e.g., H₂O, ROH).",
        "Curved Arrow Notation: Curved arrow indicates movement of an electron pair (from electron source/lone pair/bond to electron sink). Half-headed arrow (fishhook) shows single electron movement in homolysis.",
        "Types of Organic Reactions: 1. Substitution (Nucleophilic SN1/SN2, Electrophilic SE, Free Radical). 2. Addition (Electrophilic, Nucleophilic, Free Radical). 3. Elimination (E1, E2, E1cB). 4. Rearrangement (carbocation 1,2-hydride/methyl shift)."
      ],
      "keyConcepts": [
        "Carbocation Rearrangement Rule: Any less stable carbocation (1° or 2°) will spontaneously rearrange to a more stable carbocation (2° or 3°) via 1,2-hydride or 1,2-methyl shift if possible.",
        "Electrophiles have vacant orbitals or positive charge; Nucleophiles have lone pair of electrons or negative charge."
      ],
      "formulas": [
        {
          "title": "Heterolytic Cleavage",
          "formula": "A-B xrightarrow{\text{Heterolysis}} A^+ + :B^-"
        },
        {
          "title": "Homolytic Cleavage",
          "formula": "A-B xrightarrow[\text{or } h\nu]{Delta} A^\bullet + B^\bullet"
        }
      ],
      "neetImportantPoints": [
        "BF₃, AlCl₃, and FeCl₃ are Lewis acids and act as ELECTROPHILES despite having no positive charge, due to incomplete octets.",
        "Water and Ammonia are neutral nucleophiles because oxygen and nitrogen carry unshared electron pairs.",
        "Carbocation rearrangements occur in SN1 and E1 reactions, but NOT in SN2 or E2 reactions."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming neutral molecules cannot be electrophiles or nucleophiles.",
          "correctFact": "BF₃ / AlCl₃ are neutral electrophiles (incomplete octet); H₂O / NH₃ / ROH are neutral nucleophiles (lone pairs).",
          "whyItMattersForNEET": "Frequently tested in NEET identification questions."
        }
      ],
      "quickRevision": [
        "Heterolysis -> Carbocation + Carbanion; Homolysis -> Free Radicals",
        "BF₃, AlCl₃ = Lewis Acid Electrophiles",
        "H₂O, NH₃ = Neutral Nucleophiles"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-mechanisms-1",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "Which of the following species acts as an electrophile in the nitration of benzene?",
        "options": ["NO₂⁻", "NO₂⁺", "NO⁺", "HNO₃"],
        "correctAnswer": 1,
        "explanation": "In the nitration of benzene using a mixture of concentrated HNO₃ and concentrated H₂SO₄, H₂SO₄ protonates HNO₃ to generate the nitronium ion (NO₂⁺). NO₂⁺ is a powerful electrophile that attacks the aromatic benzene ring.",
        "conceptTested": "Electrophiles in Aromatic Substitution",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-2",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "Which among the following species is a neutral electrophile?",
        "options": ["H₂O", "NH₃", "BF₃", "OH⁻"],
        "correctAnswer": 2,
        "explanation": "Boron trifluoride (BF₃) has 6 valence electrons around the central Boron atom (an incomplete octet). It possesses a vacant 2p orbital capable of accepting an electron pair, making it a neutral electrophile (Lewis acid). H₂O and NH₃ are neutral nucleophiles, while OH⁻ is an anionic nucleophile.",
        "conceptTested": "Identification of Neutral Electrophiles",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-3",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Homolytic cleavage of a covalent C─C bond results in the formation of:",
        "options": ["Carbocations", "Carbanions", "Free Radicals", "Electrophiles"],
        "correctAnswer": 2,
        "explanation": "Homolytic cleavage (symmetrical bond fission) divides the shared bonding electron pair equally between the two bonded atoms, producing two neutral free radicals each carrying one unpaired electron.",
        "conceptTested": "Homolytic Bond Cleavage",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-4",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Which of the following alkyl carbocations is the most stable?",
        "options": ["(CH₃)₃C⁺", "(CH₃)₂CH⁺", "CH₃CH₂⁺", "CH₃⁺"],
        "correctAnswer": 0,
        "explanation": "The tert-butyl carbocation, (CH₃)₃C⁺, is a tertiary (3°) carbocation with 9 hyperconjugative α-hydrogens and three +I methyl groups. This provides maximum electron delocalization into the empty 2p orbital, making it the most stable alkyl carbocation.",
        "conceptTested": "Carbocation Stability Order",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-5",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "Which of the following acts as a neutral nucleophile?",
        "options": ["AlCl₃", "BF₃", "NH₃", "H⁺"],
        "correctAnswer": 2,
        "explanation": "Ammonia (NH₃) possesses an unshared lone pair of electrons on the Nitrogen atom, which it can donate to electron-deficient species, acting as a neutral nucleophile (Lewis base). AlCl₃ and BF₃ are Lewis acids (electrophiles), and H⁺ is a positively charged electrophile.",
        "conceptTested": "Identification of Neutral Nucleophiles",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-6",
        "year": 2018,
        "exam": "NEET UG 2018",
        "question": "The correct order of stability of alkyl free radicals is:",
        "options": [
          "3° > 2° > 1° > CH₃•",
          "CH₃• > 1° > 2° > 3°",
          "3° > 1° > 2° > CH₃•",
          "1° > 2° > 3° > CH₃•"
        ],
        "correctAnswer": 0,
        "explanation": "Alkyl free radicals are electron-deficient (7 valence electrons) and are stabilized by hyperconjugation from α-hydrogens and +I effect of alkyl groups. Thus, 3° (9 α-H) > 2° (6 α-H) > 1° (3 α-H) > CH₃• (0 α-H).",
        "conceptTested": "Free Radical Relative Stability",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-7",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "Addition of HBr to propene in the presence of benzoyl peroxide follows which of the following mechanism pathways?",
        "options": [
          "Electrophilic Addition",
          "Free Radical Addition",
          "Nucleophilic Addition",
          "Free Radical Substitution"
        ],
        "correctAnswer": 1,
        "explanation": "In the presence of peroxides (R-O-O-R), HBr undergoes homolytic cleavage initiated by alkoxy radicals to produce bromine free radicals (Br•). The Br• attacks propene to form the more stable 2° free radical intermediate, resulting in Anti-Markovnikov Free Radical Addition (Kharasch Effect).",
        "conceptTested": "Peroxide Effect & Reaction Mechanisms",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-8",
        "year": 2015,
        "exam": "AIPMT 2015",
        "question": "The correct decreasing order of stability of simple alkyl carbanions is:",
        "options": [
          "CH₃⁻ > 1° > 2° > 3°",
          "3° > 2° > 1° > CH₃⁻",
          "1° > 2° > 3° > CH₃⁻",
          "3° > 1° > 2° > CH₃⁻"
        ],
        "correctAnswer": 0,
        "explanation": "Carbanions carry a negative charge (8 electrons). Alkyl groups exert electron-donating (+I) inductive effect, which increases electron density on the negative carbon, thereby destabilizing the carbanion. Therefore, methyl carbanion (CH₃⁻) with no alkyl groups is most stable, and 3° carbanion is least stable.",
        "conceptTested": "Carbanion Stability Order",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-9",
        "year": 2012,
        "exam": "AIPMT 2012",
        "question": "Which of the following carbanions is the most stable due to high s-character of the negatively charged carbon?",
        "options": ["CH₃─CH₂⁻", "CH₂═CH⁻", "HC≡C⁻", "(CH₃)₃C⁻"],
        "correctAnswer": 2,
        "explanation": "In HC≡C⁻, the negatively charged carbon atom is sp hybridized, containing 50% s-character. Electrons in orbitals with higher s-character are held closer to the positively charged nucleus, resulting in higher electronegativity and extraordinary stability for the carbanion.",
        "conceptTested": "Hybridization Effect on Carbanions",
        "difficulty": "Medium",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      },
      {
        "id": "pyq-mechanisms-10",
        "year": 2010,
        "exam": "AIPMT 2010",
        "question": "The reaction CH₃Br + aq. KOH ──► CH₃OH + KBr belongs to which reaction type?",
        "options": [
          "Nucleophilic Substitution (SN2)",
          "Electrophilic Substitution",
          "Elimination Reaction",
          "Electrophilic Addition"
        ],
        "correctAnswer": 0,
        "explanation": "Aqueous KOH provides hydroxide nucleophile (OH⁻) which attacks the primary methyl carbon of CH₃Br from the backside in a single concerted step, displacing bromide ion (Br⁻) to form methanol via Bimolecular Nucleophilic Substitution (SN2).",
        "conceptTested": "Classification of Organic Reactions",
        "difficulty": "Easy",
        "verified": true,
        "classification": "Direct",
        "marks": 4,
        "topicId": "chem-basic-reaction-mechanisms"
      }
    ]
  },
  "chem-purification-methods": {
    "id": "chem-purification-characterisation",
    "title": "Purification & Characterisation of Organic Compounds",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Purification methods (crystallization, sublimation, distillation, chromatography) and qualitative/quantitative analysis (Lassaigne's test, Dumas, Kjeldahl estimation of N, S, P, halogens).",
    "notes": {
      "learn": [
        "Purification Methods: Sublimation (sublimable from non-sublimable), Crystallization (difference in solubilities in suitable solvent), Distillation (volatile liquids from non-volatile/liquids with sufficient boiling point difference), Fractional Distillation (close boiling points), Steam Distillation (steam-volatile, water-immiscible e.g., aniline), Differential Extraction, and Chromatography (paper, column, thin layer).",
        "Qualitative Analysis: Lassaigne's Test detects N (Prussian blue [Fe₄[Fe(CN)₆]₃]), S (black PbS ppt or violet with sodium nitroprusside), and Halogens (AgCl white, AgBr pale yellow, AgI yellow ppt).",
        "Quantitative Analysis: Carbon & Hydrogen estimated as CO₂ and H₂O using CuO. Nitrogen estimated by Dumas Method (N₂ gas collected over KOH) and Kjeldahl Method (NH₃ absorbed in known excess H₂SO₄; not applicable to nitro, azo, and pyridine N). Halogens estimated by Carius Method (as AgX)."
      ],
      "keyConcepts": [
        "Lassaigne's Test: Na + C + N -> NaCN; 4 NaCN + FeSO₄ -> Na₄[Fe(CN)₆]; 3 Na₄[Fe(CN)₆] + 4 FeCl₃ -> Fe₄[Fe(CN)₆]₃ (Prussian Blue).",
        "Kjeldahl Method %N = [1.4 × M × V (mEq acid consumed)] / Mass of organic compound (g).",
        "Chromatography Principle: Differential adsorption/partitioning of components between stationary and mobile phases."
      ],
      "formulas": [
        {
          "title": "Kjeldahl Nitrogen Percentage",
          "formula": "% N = \frac{1.4 \times M \times V}{m}"
        },
        {
          "title": "Carius Halogen Percentage",
          "formula": "% X = \frac{\text{Atomic Mass of } X}{\text{Molar Mass of } AgX} \times \frac{\text{Mass of } AgX}{\text{Mass of Compound}} \times 100"
        },
        {
          "title": "Dumas Nitrogen Percentage",
          "formula": "% N = \frac{28}{22400} \times \frac{V_{STP}}{\text{Mass of Compound}} \times 100"
        }
      ],
      "neetImportantPoints": [
        "Kjeldahl's method fails for compounds containing nitrogen in ring (e.g., pyridine, quinoline) and nitro (-NO₂) or azo (-N=N-) groups because nitrogen in these compounds is not converted to ammonium sulphate.",
        "Aniline is purified by steam distillation because it is steam volatile and immiscible with water.",
        "Chromatography R_f value = (Distance moved by substance) / (Distance moved by solvent front)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing Kjeldahl applicability with all nitrogen compounds.",
          "correctFact": "Nitro, azo, and ring nitrogen (pyridine) CANNOT be estimated by Kjeldahl method; Dumas method must be used.",
          "whyItMattersForNEET": "Extremely high yield conceptual question tested repeatedly in NEET."
        }
      ],
      "quickRevision": [
        "Prussian blue = Fe₄[Fe(CN)₆]₃ for Lassaigne N test",
        "Steam distillation for Aniline & o-nitrophenol",
        "Kjeldahl fails for nitro, azo, pyridine N"
      ]
    },
    "pyqs": []
  },
  "chem-qualitative-quantitative": {
    "id": "chem-purification-characterisation",
    "title": "Purification & Characterisation of Organic Compounds",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Purification methods (crystallization, sublimation, distillation, chromatography) and qualitative/quantitative analysis (Lassaigne's test, Dumas, Kjeldahl estimation of N, S, P, halogens).",
    "notes": {
      "learn": [
        "Purification Methods: Sublimation (sublimable from non-sublimable), Crystallization (difference in solubilities in suitable solvent), Distillation (volatile liquids from non-volatile/liquids with sufficient boiling point difference), Fractional Distillation (close boiling points), Steam Distillation (steam-volatile, water-immiscible e.g., aniline), Differential Extraction, and Chromatography (paper, column, thin layer).",
        "Qualitative Analysis: Lassaigne's Test detects N (Prussian blue [Fe₄[Fe(CN)₆]₃]), S (black PbS ppt or violet with sodium nitroprusside), and Halogens (AgCl white, AgBr pale yellow, AgI yellow ppt).",
        "Quantitative Analysis: Carbon & Hydrogen estimated as CO₂ and H₂O using CuO. Nitrogen estimated by Dumas Method (N₂ gas collected over KOH) and Kjeldahl Method (NH₃ absorbed in known excess H₂SO₄; not applicable to nitro, azo, and pyridine N). Halogens estimated by Carius Method (as AgX)."
      ],
      "keyConcepts": [
        "Lassaigne's Test: Na + C + N -> NaCN; 4 NaCN + FeSO₄ -> Na₄[Fe(CN)₆]; 3 Na₄[Fe(CN)₆] + 4 FeCl₃ -> Fe₄[Fe(CN)₆]₃ (Prussian Blue).",
        "Kjeldahl Method %N = [1.4 × M × V (mEq acid consumed)] / Mass of organic compound (g).",
        "Chromatography Principle: Differential adsorption/partitioning of components between stationary and mobile phases."
      ],
      "formulas": [
        {
          "title": "Kjeldahl Nitrogen Percentage",
          "formula": "% N = \frac{1.4 \times M \times V}{m}"
        },
        {
          "title": "Carius Halogen Percentage",
          "formula": "% X = \frac{\text{Atomic Mass of } X}{\text{Molar Mass of } AgX} \times \frac{\text{Mass of } AgX}{\text{Mass of Compound}} \times 100"
        },
        {
          "title": "Dumas Nitrogen Percentage",
          "formula": "% N = \frac{28}{22400} \times \frac{V_{STP}}{\text{Mass of Compound}} \times 100"
        }
      ],
      "neetImportantPoints": [
        "Kjeldahl's method fails for compounds containing nitrogen in ring (e.g., pyridine, quinoline) and nitro (-NO₂) or azo (-N=N-) groups because nitrogen in these compounds is not converted to ammonium sulphate.",
        "Aniline is purified by steam distillation because it is steam volatile and immiscible with water.",
        "Chromatography R_f value = (Distance moved by substance) / (Distance moved by solvent front)."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing Kjeldahl applicability with all nitrogen compounds.",
          "correctFact": "Nitro, azo, and ring nitrogen (pyridine) CANNOT be estimated by Kjeldahl method; Dumas method must be used.",
          "whyItMattersForNEET": "Extremely high yield conceptual question tested repeatedly in NEET."
        }
      ],
      "quickRevision": [
        "Prussian blue = Fe₄[Fe(CN)₆]₃ for Lassaigne N test",
        "Steam distillation for Aniline & o-nitrophenol",
        "Kjeldahl fails for nitro, azo, pyridine N"
      ]
    },
    "pyqs": []
  },
  "chem-iupac-nomenclature": {
    "id": "chem-classification-iupac",
    "title": "Classification & IUPAC Nomenclature",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Classification of organic compounds (acyclic, cyclic, homocyclic, heterocyclic) and IUPAC nomenclature rules for polyfunctional organic compounds.",
    "notes": {
      "learn": [
        "Classification: Organic compounds are classified into Acyclic (open-chain/aliphatic) and Cyclic (closed-chain/ring). Cyclic compounds are divided into Homocyclic/Carbocyclic (alicyclic and aromatic e.g., benzene) and Heterocyclic (e.g., furan, thiophene, pyridine).",
        "Functional Groups & Homologous Series: Homologous series share same functional group, general formula, and consecutive members differ by -CH₂- (14 u mass).",
        "IUPAC Rules: 1. Select longest carbon chain containing principal functional group & maximum multiple bonds. 2. Number chain to give lowest locants to principal functional group > multiple bonds > substituents. 3. Name format: Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix."
      ],
      "keyConcepts": [
        "Principal Functional Group Priority: -COOH > -SO₃H > -COOR > -COCl > -CONH₂ > -CN > -CHO > >C=O > -OH > -NH₂ > >C=C< > -C≡C-.",
        "Substituents named alphabetically: Bromo before Chloro, Ethyl before Methyl (ignore di, tri prefixes when alphabetizing)."
      ],
      "formulas": [
        {
          "title": "IUPAC Name Structure",
          "formula": "\text{Prefix (Substituents)} + \text{Word Root (Chain length)} + \text{Primary Suffix (en/yn)} + \text{Secondary Suffix (Principal FG)}"
        }
      ],
      "neetImportantPoints": [
        "When carboxylic acid carbon is included in main chain, suffix is '-oic acid'; when carbon is excluded (e.g., attached directly to ring or in tricarboxylic acids), suffix is 'carboxylic acid'.",
        "Halogens (-F, -Cl, -Br, -I), Nitro (-NO₂), and Alkoxy (-OR) are ALWAYS treated as substituents (secondary prefixes), never as principal suffixes."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming di/tri/tetra prefixes count in alphabetical order of substituents.",
          "correctFact": "Prefixes like di, tri, tetra are IGNORED in alphabetization (e.g., 'dimethyl' comes under 'm', 'ethyl' comes under 'e').",
          "whyItMattersForNEET": "A frequent trap in NEET IUPAC naming options."
        }
      ],
      "quickRevision": [
        "Priority: -COOH > -CHO > -C=O > -OH > -NH₂ > C=C > C≡C",
        "-NO₂, -X, -OR are always prefixes, never principal suffixes"
      ]
    },
    "pyqs": []
  },
  "chem-isomerism-types": {
    "id": "chem-isomerism",
    "title": "Isomerism",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Structural isomerism (chain, position, functional, metamerism, ring-chain) and stereoisomerism (geometrical cis/trans E/Z, optical isomerism).",
    "notes": {
      "learn": [
        "Structural Isomerism: 1. Chain (different carbon skeleton). 2. Position (different position of functional group/multiple bond). 3. Functional (different functional groups e.g., alcohol & ether, aldehyde & ketone, carboxylic acid & ester). 4. Metamerism (different alkyl groups on either side of polyvalent heteroatom e.g., ethers, 2° amines, esters). 5. Ring-Chain (open chain & cyclic with same molecular formula).",
        "Stereoisomerism: Geometrical isomerism arises from restricted rotation around C=C or ring bonds. Requires each sp² carbon to have two DIFFERENT groups attached. Cis (same sides), Trans (opposite sides); E/Z nomenclature based on CIP priority rules.",
        "Optical Isomerism: Requires chiral carbon (asymmetric carbon with 4 different attached groups). Non-superimposable mirror images are Enantiomers. Equal mixture of d and l enantiomers forms optically inactive Racemic Mixture (external compensation)."
      ],
      "keyConcepts": [
        "Geometrical Isomerism condition: Carbon-carbon double bond with structural pattern abC=Cab or abC=Ccd (a ≠ b and c ≠ d).",
        "CIP Priority Rules for E/Z: Higher atomic number gets higher priority. If atoms attached directly are identical, compare next atoms attached."
      ],
      "formulas": [
        {
          "title": "Number of Optical Isomers",
          "formula": "\text{For molecule with } n \text{ asymmetric carbons (unsymmetrical): } N = 2^n"
        }
      ],
      "neetImportantPoints": [
        "Trans isomer generally has HIGHER melting point (symmetrical crystal packing) and LOWER dipole moment/boiling point than Cis isomer.",
        "Meso compounds possess chiral carbons and a plane of symmetry (internal compensation), making them optically inactive."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing Metamerism with Position Isomerism.",
          "correctFact": "Metamerism specifically requires a polyvalent functional group (-O-, -S-, -NH-, -COO-) with different alkyl groups attached on either side.",
          "whyItMattersForNEET": "Frequently tested distinction in NEET structural isomerism questions."
        }
      ],
      "quickRevision": [
        "Metamerism needs polyvalent heteroatom (-O-, -NH-, -COO-)",
        "Cis has higher dipole moment; Trans has higher melting point",
        "Meso is optically inactive due to internal compensation"
      ]
    },
    "pyqs": []
  },
  "chem-electronic-effects": {
    "id": "chem-electronic-effects-intermediates",
    "title": "Electronic Effects & Reaction Intermediates",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 18,
    "importanceWeight": "High Yield",
    "summary": "Inductive effect (+I/-I), resonance/mesomeric (+M/-M), hyperconjugation, electromeric effect, and stability of carbocations, carbanions, and free radicals.",
    "notes": {
      "learn": [
        "Inductive Effect (I-effect): Permanent displacement of σ-electrons along carbon chain due to electronegativity difference. Distance-dependent (diminishes after 3 carbons). -I groups: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH > -Ph. +I groups: -O⁻ > -COO⁻ > 3° alkyl > 2° alkyl > 1° alkyl > -CH₃.",
        "Resonance / Mesomeric Effect (M/R-effect): Permanent delocalization of π-electrons/lone pairs through conjugated system. Distance independent. +M (electron donating via lone pair): -O⁻ > -NH₂ > -OH > -OR > -NHCOCH₃ > -X. -M (electron withdrawing via double/triple bond to electronegative atom): -NO₂ > -CN > -CHO > >C=O > -COOH.",
        "Hyperconjugation (No-Bond Resonance / Baker-Nathan Effect): Delocalization of σ-electrons of C-H bond of an alkyl group directly attached to an unsaturated system or atom with unshared p-orbital (carbocation, free radical). Stability proportional to number of α-hydrogens.",
        "Reaction Intermediates: Carbocation (sp², planar, 6 e⁻, paramagnetic = false, stability: Allyl/Benzyl > 3° > 2° > 1° > CH₃⁺). Carbanion (sp³, pyramidal, 8 e⁻, stability: CH₃⁻ > 1° > 2° > 3°). Free Radical (sp²/planar, 7 e⁻, stability: Allyl/Benzyl > 3° > 2° > 1° > CH₃•)."
      ],
      "keyConcepts": [
        "Stability Order Rule: Benzyl/Allyl carbocations stabilized by resonance > Alkyl carbocations stabilized by hyperconjugation (α-H count) and +I effect.",
        "Carbanion stability is INCREASED by -I / -M groups and DECREASED by +I / +M groups."
      ],
      "formulas": [
        {
          "title": "Carbocation / Radical Hyperconjugative Structures",
          "formula": "Number of hyperconjugative structures = Number of α-hydrogens + 1"
        }
      ],
      "neetImportantPoints": [
        "Halogens (-Cl, -Br, -I) exhibit -I effect OVERPOWERING +M effect in electrophilic substitution reactions, so they are DEACTIVATING yet ORTHO/PARA directing.",
        "Stability of carbocations: (C₆H₅)₃C⁺ > (C₆H₅)₂CH⁺ > C₆H₅CH₂⁺ ≈ CH₂=CH-CH₂⁺ > (CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺.",
        "Acidic strength of carboxylic acids increases with -I groups (stabilize carboxylate anion RCOO⁻) and decreases with +I groups."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Confusing halogen behavior on benzene rings.",
          "correctFact": "Halogens are net DEACTIVATING (due to strong -I effect) but ORTHO/PARA directing (due to weak +M lone pair donation).",
          "whyItMattersForNEET": "A classical NEET trap in electrophilic substitution stability & orientation."
        }
      ],
      "quickRevision": [
        "Carbocation stability: Benzyl > Allyl > 3° > 2° > 1° > CH₃⁺",
        "Carbanion stability: CH₃⁻ > 1° > 2° > 3°",
        "Halogens: Deactivating (-I > +M) but Ortho/Para directing"
      ]
    },
    "pyqs": [
      {
        "id": "pyq-eei-1",
        "year": 2023,
        "exam": "NEET UG 2023",
        "question": "Which among the following carbocations is expected to be the most stable?",
        "options": [
          "(C₆H₅)₃C⁺ (Triphenylmethyl carbocation)",
          "(CH₃)₃C⁺ (tert-Butyl carbocation)",
          "(CH₃)₂CH⁺ (Isopropyl carbocation)",
          "CH₃-CH₂⁺ (Ethyl carbocation)"
        ],
        "correctAnswer": 0,
        "explanation": "Triphenylmethyl carbocation (C₆H₅)₃C⁺ is stabilized by extensive resonance delocalization across 3 phenyl rings (9 canonical structures), overruling simple hyperconjugative stability.",
        "difficulty": "Medium",
        "conceptTested": "Resonance vs Hyperconjugation Stabilization of Carbocations",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-2",
        "year": 2022,
        "exam": "NEET UG 2022",
        "question": "Which of the following carbocations is the most stable due to hyperconjugation?",
        "options": [
          "(CH₃)₃C⁺",
          "(CH₃)₂CH⁺",
          "CH₃-CH₂⁺",
          "CH₃⁺"
        ],
        "correctAnswer": 0,
        "explanation": "Hyperconjugation stability depends directly on α-hydrogen count. (CH₃)₃C⁺ has 9 α-hydrogens, (CH₃)₂CH⁺ has 6, CH₃-CH₂⁺ has 3, and CH₃⁺ has 0.",
        "difficulty": "Easy",
        "conceptTested": "Hyperconjugation & α-Hydrogen Count in Carbocations",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-3",
        "year": 2021,
        "exam": "NEET UG 2021",
        "question": "Which of the following species acts as an ELECTROPHILE?",
        "options": [
          "BF₃ (Boron trifluoride)",
          "NH₃ (Ammonia)",
          "H₂O (Water)",
          "OH⁻ (Hydroxide ion)"
        ],
        "correctAnswer": 0,
        "explanation": "BF₃ has an incomplete octet (6 valence electrons) and a vacant 2p orbital, making it an electron-pair acceptor (electrophile). NH₃, H₂O, and OH⁻ are nucleophiles.",
        "difficulty": "Easy",
        "conceptTested": "Identification of Neutral Electrophiles vs Nucleophiles",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-4",
        "year": 2020,
        "exam": "NEET UG 2020",
        "question": "Homolytic fission of a covalent C-C bond in an organic molecule results in the formation of:",
        "options": [
          "Free Radicals",
          "Carbocations only",
          "Carbanions only",
          "Zwitterions"
        ],
        "correctAnswer": 0,
        "explanation": "Homolytic fission involves equal splitting of bonding electrons, yielding neutral species carrying an unpaired electron, known as Free Radicals.",
        "difficulty": "Easy",
        "conceptTested": "Homolytic Bond Cleavage & Free Radical Generation",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-5",
        "year": 2019,
        "exam": "NEET UG 2019",
        "question": "The correct stability order of simple alkyl carbanions is:",
        "options": [
          "CH₃⁻ > 1° > 2° > 3°",
          "3° > 2° > 1° > CH₃⁻",
          "1° > 3° > 2° > CH₃⁻",
          "3° > 1° > 2° > CH₃⁻"
        ],
        "correctAnswer": 0,
        "explanation": "In carbanions, alkyl groups donate electron density (+I effect) onto a negatively charged carbon, increasing charge density and destabilizing it. CH₃⁻ > 1° > 2° > 3°.",
        "difficulty": "Medium",
        "conceptTested": "Inductive Effect (+I) on Carbanion Stability",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-6",
        "year": 2018,
        "exam": "NEET UG 2018",
        "question": "Which of the following organic groups exhibits the strongest -I (electron-withdrawing inductive) effect?",
        "options": [
          "-NO₂",
          "-CN",
          "-COOH",
          "-F"
        ],
        "correctAnswer": 0,
        "explanation": "The established NEET order of -I effect is: -NO₂ > -CN > -COOH > -F > -Cl > -Br > -I > -OH. Nitro (-NO₂) is the strongest electron-withdrawing group.",
        "difficulty": "Medium",
        "conceptTested": "Relative Strength Order of -I Groups",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-7",
        "year": 2017,
        "exam": "NEET UG 2017",
        "question": "Hyperconjugation involves the delocalization of which type of electrons?",
        "options": [
          "σ electrons of C-H bond into empty p-orbital or π-system",
          "π electrons into another π-system",
          "Lone pair electrons into a σ-orbital",
          "σ electrons of C-C bond only"
        ],
        "correctAnswer": 0,
        "explanation": "Hyperconjugation is the delocalization of σ-electrons of an alkyl C-H bond attached directly to an unsaturated carbon or a carbon with an unshared p-orbital.",
        "difficulty": "Easy",
        "conceptTested": "Definition and Mechanism of Hyperconjugation",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      },
      {
        "id": "pyq-eei-8",
        "year": 2016,
        "exam": "NEET UG 2016",
        "question": "Regarding halogens (-Cl, -Br) attached to a benzene ring, which statement correctly describes their electronic effects in electrophilic substitution?",
        "options": [
          "Deactivating due to -I effect, but Ortho/Para directing due to +M effect",
          "Activating and Ortho/Para directing due to +M effect",
          "Deactivating and Meta directing due to -I effect",
          "Activating and Meta directing due to -M effect"
        ],
        "correctAnswer": 0,
        "explanation": "In halogenobenzenes, -I effect is stronger than +M resonance donation, deactivating the ring, but +M lone pair donation stabilizes ortho/para intermediates.",
        "difficulty": "Hard",
        "conceptTested": "Halogen Anomaly in Electrophilic Aromatic Substitution (-I vs +M)",
        "marks": 4,
        "classification": "Direct",
        "verified": true,
        "topicId": "chem-electronic-effects-intermediates"
      }
    ]
  },
  "chem-reaction-intermediates": {
    "id": "chem-basic-reaction-mechanisms",
    "title": "Basic Organic Reaction Mechanisms",
    "chapterId": "organic-chemistry-basic-principles",
    "estimatedReadTimeMinutes": 16,
    "importanceWeight": "High Yield",
    "summary": "Bond cleavage (homolytic & heterolytic), electrophiles, nucleophiles, curved-arrow notation, substitution, addition, elimination, and rearrangement reactions.",
    "notes": {
      "learn": [
        "Bond Cleavage: Homolytic cleavage gives FREE RADICALS (equal electron sharing, favoured by UV light, peroxide, high temperature, non-polar solvent). Heterolytic cleavage gives CARBOCATION and CARBANION (unequal sharing, favoured by polar solvents).",
        "Attacking Reagents: Electrophiles (E⁺ / electron loving, e.g., H⁺, NO₂⁺, Cl⁺, BF₃, AlCl₃, SO₃, carbene). Nucleophiles (Nu⁻ / nucleus loving, e.g., OH⁻, CN⁻, H₂O, NH₃, R-OH, RMgX). Ambiphiles act as both (e.g., H₂O, ROH).",
        "Curved Arrow Notation: Curved arrow indicates movement of an electron pair (from electron source/lone pair/bond to electron sink). Half-headed arrow (fishhook) shows single electron movement in homolysis.",
        "Types of Organic Reactions: 1. Substitution (Nucleophilic SN1/SN2, Electrophilic SE, Free Radical). 2. Addition (Electrophilic, Nucleophilic, Free Radical). 3. Elimination (E1, E2, E1cB). 4. Rearrangement (carbocation 1,2-hydride/methyl shift)."
      ],
      "keyConcepts": [
        "Carbocation Rearrangement Rule: Any less stable carbocation (1° or 2°) will spontaneously rearrange to a more stable carbocation (2° or 3°) via 1,2-hydride or 1,2-methyl shift if possible.",
        "Electrophiles have vacant orbitals or positive charge; Nucleophiles have lone pair of electrons or negative charge."
      ],
      "formulas": [
        {
          "title": "Heterolytic Cleavage",
          "formula": "A-B xrightarrow{\text{Heterolysis}} A^+ + :B^-"
        },
        {
          "title": "Homolytic Cleavage",
          "formula": "A-B xrightarrow[\text{or } h\nu]{Delta} A^\bullet + B^\bullet"
        }
      ],
      "neetImportantPoints": [
        "BF₃, AlCl₃, and FeCl₃ are Lewis acids and act as ELECTROPHILES despite having no positive charge, due to incomplete octets.",
        "Water and Ammonia are neutral nucleophiles because oxygen and nitrogen carry unshared electron pairs.",
        "Carbocation rearrangements occur in SN1 and E1 reactions, but NOT in SN2 or E2 reactions."
      ],
      "commonConfusions": [
        {
          "commonConfusion": "Assuming neutral molecules cannot be electrophiles or nucleophiles.",
          "correctFact": "BF₃ / AlCl₃ are neutral electrophiles (incomplete octet); H₂O / NH₃ / ROH are neutral nucleophiles (lone pairs).",
          "whyItMattersForNEET": "Frequently tested in NEET identification questions."
        }
      ],
      "quickRevision": [
        "Heterolysis -> Carbocation + Carbanion; Homolysis -> Free Radicals",
        "BF₃, AlCl₃ = Lewis Acid Electrophiles",
        "H₂O, NH₃ = Neutral Nucleophiles"
      ]
    },
    "pyqs": []
  }
};
