import { DetailedTopicContent } from '../../types/neet';
import { BIOMOLECULES_DIAGRAMS } from '../biomolecules/biomoleculesDiagrams';

export const chemProteinsAminoAcidsDetails: DetailedTopicContent = {
  topicId: "chem-proteins-amino-acids",
  topicName: "Amino Acids, Proteins, Enzymes & Vitamins",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Biomolecules",

  whatIsThisTopic: "Complete NCERT breakdown of Amino Acids (20 standard L-α-amino acids, Zwitterion, Isoelectric point, Essential vs Non-essential), Peptide Linkage, Primary/Secondary (α-helix, β-pleated sheet)/Tertiary (Fibrous vs Globular)/Quaternary Protein Structures, Denaturation, Enzymes, and Vitamins (Classification into Fat/Water-soluble and Deficiency Diseases).",

  basicIdea: [
    "Amino acids contain both an amino (–NH₂) and a carboxylic acid (–COOH) group on the α-carbon. Naturally occurring amino acids have the L-configuration. Glycine (H₂N–CH₂–COOH) is the only achiral amino acid.",
    "In aqueous solution, amino acids exist as dipolar ions called Zwitterions (⁺H₃N–CH(R)–COO⁻). At the isoelectric point (pI), the net charge is zero and there is no net migration in an electric field.",
    "Ten Essential Amino Acids cannot be synthesised by the human body and must be supplied in diet (Mnemonic: PVT TIM HaLL).",
    "Peptide linkage (–CO–NH–) is a rigid, planar planar amide bond with ~40% partial double bond character due to resonance.",
    "Protein Denaturation destroys 2°, 3°, and 4° structures by disrupting hydrogen and disulfide bonds while leaving 1° covalent structure intact (e.g., coagulation of egg white on boiling, curdling of milk).",
    "Vitamins are micronutrients classified into Fat-Soluble (A, D, E, K - stored in liver/adipose tissue) and Water-Soluble (B-complex and C - must be supplied regularly in diet as they are excreted in urine, except B₁₂)."
  ],

  importantTerms: [
    {
      term: "Zwitterion (Dipolar Ion)",
      definition: "An electrically neutral internal salt form of an amino acid containing both a positively charged ammonium group (-NH₃⁺) and a negatively charged carboxylate group (-COO⁻).",
      neetNote: "In acidic medium (pH < pI), exists as cation and migrates to cathode; in basic medium (pH > pI), exists as anion and migrates to anode."
    },
    {
      term: "Isoelectric Point (pI)",
      definition: "The specific pH at which an amino acid exists exclusively in its dipolar zwitterionic form with net charge = 0 and exhibits zero electrophoretic mobility and minimum aqueous solubility.",
      neetNote: "Neutral amino acids have pI ≈ 5.5–6.3; Acidic amino acids (Asp, Glu) have pI ≈ 2.8–3.2; Basic amino acids (Lys, Arg, His) have pI ≈ 7.6–10.8."
    },
    {
      term: "Essential vs Non-Essential Amino Acids",
      definition: "Essential amino acids cannot be synthesised in human metabolism and must be ingested in food. Non-essential amino acids are readily synthesised endogenously.",
      neetNote: "10 Essential: Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine (PVT TIM HaLL)."
    },
    {
      term: "Peptide Bond (Amide Linkage)",
      definition: "The covalent –CO–NH– linkage formed between the α-carboxyl group of one amino acid and the α-amino group of an adjacent amino acid with elimination of water.",
      neetNote: "Resonance gives the C–N bond ~40% partial double bond character (length 1.32 Å vs normal C-N 1.47 Å), restricting free rotation and keeping the 6 peptide atoms strictly planar."
    },
    {
      term: "Fibrous vs Globular Proteins",
      definition: "Fibrous proteins consist of parallel polypeptide chains held together by H-bonds and disulfide bridges to form thread-like insoluble structures (Keratin, Myosin, Collagen). Globular proteins have polypeptide chains folded into compact spherical shapes and are water-soluble (Albumin, Haemoglobin, Insulin).",
      neetNote: "Keratin is fibrous (insoluble); Albumin and Insulin are globular (soluble)."
    },
    {
      term: "Protein Denaturation",
      definition: "Loss of biological activity and native three-dimensional conformation of a protein caused by physical (heat, radiation) or chemical (pH changes, heavy metals) disruptions of hydrogen, ionic, and hydrophobic bonds.",
      neetNote: "Primary structure (covalent peptide sequence) remains completely intact during denaturation."
    },
    {
      term: "Apoenzyme & Coenzyme / Prosthetic Group",
      definition: "A complete active conjugated enzyme is a Holoenzyme = Apoenzyme (protein part) + Cofactor (non-protein part). An organic cofactor is called a Coenzyme (if loosely bound, e.g., NAD⁺) or a Prosthetic group (if tightly covalently bound, e.g., Haem, Biotin).",
      neetNote: "Metal ions like Zn²⁺ in Carbonic Anhydrase are essential inorganic cofactors."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Amino Acids: Classification, Stereochemistry & Zwitterionic State",
      paragraphs: [
        "Amino acids are organic compounds containing both an amino group (–NH₂) and a carboxylic acid group (–COOH). In standard proteinogenic α-amino acids, both functional groups are attached to the same α-carbon atom (General formula: R–CH(NH₂)–COOH).",
        "Stereochemistry: Except for Glycine (where R = H, making the α-carbon symmetric and achiral), all other 19 standard amino acids contain an asymmetric chiral α-carbon atom and exist as optically active D- and L-enantiomers. Naturally occurring amino acids in proteins belong exclusively to the L-series (the –NH₂ group is drawn on the LEFT side of the Fischer projection with –COOH on top).",
        "Classification by Acid-Base Properties:",
        "1. Neutral Amino Acids: Equal number of –NH₂ and –COOH groups (e.g., Glycine, Alanine, Valine, Leucine, Isoleucine, Serine, Threonine, Cysteine, Methionine, Phenylalanine, Tyrosine, Tryptophan, Proline).",
        "2. Acidic Amino Acids: Possess more –COOH groups than –NH₂ groups, giving a net negative charge at neutral pH (e.g., Aspartic acid, Glutamic acid).",
        "3. Basic Amino Acids: Possess more –NH₂ / basic nitrogenous groups than –COOH groups, giving a net positive charge at neutral pH (e.g., Lysine, Arginine, Histidine).",
        "Zwitterionic Equilibrium and Electrophoretic Behavior: In aqueous solution, the carboxyl group loses a proton (–COO⁻) while the amino group accepts a proton (–NH₃⁺), creating an internal dipolar Zwitterion. In acidic medium (low pH), the zwitterion accepts a proton to become a Cation (⁺H₃N–CH(R)–COOH) and migrates toward the negative electrode (Cathode). In alkaline medium (high pH), it loses a proton from –NH₃⁺ to become an Anion (H₂N–CH(R)–COO⁻) and migrates toward the positive electrode (Anode)."
      ],
      visual: {
        type: 'svg',
        svgContent: BIOMOLECULES_DIAGRAMS.aminoAcidsAndProteinStructures,
        caption: "Chemical structure of Zwitterion at pI, Cation at acidic pH, Anion at alkaline pH, and the 4 levels of Protein Structure.",
        guide: "Remember: at pH < pI, amino acids are cationic (move to cathode); at pH > pI, amino acids are anionic (move to anode)."
      },
      importantPoints: [
        "Glycine (H₂N–CH₂–COOH) is the ONLY optically inactive, achiral standard amino acid.",
        "Cysteine has a thiol (–SH) side chain capable of forming covalent Disulfide Bridges (–S–S–) in proteins."
      ]
    },
    {
      heading: "2. The Peptide Bond & Four Levels of Protein Structural Hierarchy",
      paragraphs: [
        "Polypeptides and proteins are condensation polymers of α-amino acids joined by PEPTIDE BONDS (–CO–NH–).",
        "Structural Hierarchy of Proteins:",
        "1. Primary (1°) Structure: The exact linear sequence in which amino acids are covalently linked together in a polypeptide chain. Any change in a single amino acid in this sequence alters biological function (e.g., in Sickle Cell Haemoglobin, Glutamic acid at position 6 of the β-chain is replaced by Valine).",
        "2. Secondary (2°) Structure: The spatial conformation of the polypeptide backbone stabilized by regular hydrogen bonds between the carbonyl oxygen (>C=O) of one peptide bond and the amide hydrogen (–NH–) of another:",
        "  • α-Helix: Right-handed spiral coil stabilized by INTRAMOLECULAR hydrogen bonding between the >C=O of amino acid n and the –NH of amino acid (n+4). Pitch = 0.54 nm (3.6 amino acid residues per turn). All side chain R-groups project outward.",
        "  • β-Pleated Sheet: Polypeptide chains lie side-by-side in fully extended zigzag conformation held together by INTERMOLECULAR hydrogen bonds forming pleated sheets (e.g., Silk Fibroin).",
        "3. Tertiary (3°) Structure: The overall 3D folding and super-coiling of secondary structural domains into compact units stabilized by: (a) Disulfide bridges (–S–S–), (b) Hydrogen bonds, (c) Hydrophobic interactions, (d) Ionic/salt bridges, and (e) van der Waals forces.",
        "  • Fibrous Proteins: Long, insoluble, parallel linear chains (α-Keratin in hair/nails, Myosin in muscle, Collagen).",
        "  • Globular Proteins: Folded spheroidal structures, highly water-soluble (Insulin, Albumin, Myoglobin).",
        "4. Quaternary (4°) Structure: Spatial arrangement of multiple folded polypeptide subunits (protomers) into a functional multi-subunit oligomeric protein complex (e.g., adult Haemoglobin is an α₂β₂ tetramer of 4 subunits)."
      ],
      importantPoints: [
        "Peptide bond has ~40% partial double bond character due to resonance and is strictly planar.",
        "Sickle cell anaemia is caused by a point mutation replacing polar Glutamic acid with non-polar Valine at position 6 of the β-globin chain."
      ]
    },
    {
      heading: "3. Denaturation of Proteins & Enzyme Catalysis",
      paragraphs: [
        "Protein Denaturation: When a native protein in its biologically active conformation is subjected to physical changes (temperature change, heat) or chemical changes (pH alteration, addition of urea, heavy metal salts), hydrogen bonds, hydrophobic interactions, and ionic bridges are disrupted.",
        "The globular protein unfolds, the helix unwinds, and the protein loses its specific biological activity.",
        "Crucial NEET Principle: During denaturation, secondary, tertiary, and quaternary structures are completely destroyed, but the PRIMARY (1°) STRUCTURE (covalent peptide bonds) REMAINS COMPLETELY INTACT.",
        "Classic Examples of Denaturation: (1) Coagulation of egg white (albumen) on boiling; (2) Curdling of milk (lactic acid bacteria produce lactic acid which lowers pH, precipitating casein protein).",
        "Enzymes: Biological catalysts of extraordinary specificity and catalytic efficiency (accelerating reactions by 10⁶ to 10¹² fold) by drastically lowering the activation energy (Ea) without altering the equilibrium constant (Keq) or free energy change (ΔG)."
      ],
      importantPoints: [
        "Denaturation does NOT hydrolyse peptide bonds; primary amino acid sequence is preserved.",
        "Most enzymes are globular proteins, but catalytic RNA molecules called Ribozymes also exist."
      ]
    },
    {
      heading: "4. Vitamins: Master Classification & Deficiency Disorders",
      paragraphs: [
        "Vitamins are essential organic micronutrients required in trace quantities in the human diet to perform specific vital biological functions. They cannot be synthesised in adequate amounts by human tissues (except Vitamin D from sunlight and small amounts of Niacin from Tryptophan).",
        "Master Classification of Vitamins:",
        "A. FAT-SOLUBLE VITAMINS (Vitamins A, D, E, K):",
        "• Insoluble in water, soluble in fats and non-polar organic solvents. Stored in the liver and adipose tissues. Excess intake can cause toxic hypervitaminosis.",
        "1. Vitamin A (Retinol / Carotenoids): Essential for rhodopsin synthesis in retina. Deficiency ⟶ Night blindness (Nyctalopia), Xerophthalmia (keratinisation of cornea), and dermatosis.",
        "2. Vitamin D (Calciferol / Ergocalciferol D₂ / Cholecalciferol D₃): Regulates calcium and phosphate metabolism. Deficiency ⟶ Rickets in children (bowed legs, deformed bones) and Osteomalacia in adults (soft, fragile bones).",
        "3. Vitamin E (Tocopherols): Powerful lipid-soluble antioxidant protecting cell membranes from free radical oxidation. Deficiency ⟶ Increased red blood cell fragility, muscular weakness, and loss of fertility/sterility in animals.",
        "4. Vitamin K (Phylloquinone K₁ / Menaquinone K₂): Required for hepatic synthesis of blood clotting factors (Prothrombin, Factors VII, IX, X). Deficiency ⟶ Increased blood clotting time and haemorrhage.",
        "B. WATER-SOLUBLE VITAMINS (Vitamin B-Complex & Vitamin C):",
        "• Readily soluble in water. Cannot be stored in the body in large amounts and are continuously excreted in urine, so they MUST be supplied regularly in the daily diet.",
        "• EXCEPTION: Vitamin B₁₂ (Cyanocobalamin) is stored in substantial quantities in the liver (sufficient for several years) and contains the metal Cobalt.",
        "1. Vitamin B₁ (Thiamine): Coenzyme (TPP) in carbohydrate decarboxylation. Deficiency ⟶ Beriberi (neurological polyneuritis and cardiac failure).",
        "2. Vitamin B₂ (Riboflavin): Constituent of FMN and FAD coenzymes. Deficiency ⟶ Cheilosis (fissuring at corners of mouth), glossitis (magenta tongue), and digestive disorders.",
        "3. Vitamin B₃ (Niacin / Nicotinic acid): Constituent of NAD⁺ and NADP⁺. Deficiency ⟶ Pellagra (4 Ds: Dermatitis, Diarrhoea, Dementia, Death).",
        "4. Vitamin B₆ (Pyridoxine): Coenzyme (PLP) for amino acid transamination. Deficiency ⟶ Convulsions, peripheral neuropathy.",
        "5. Vitamin B₉ (Folic acid / Folate): One-carbon metabolism and DNA synthesis. Deficiency ⟶ Megaloblastic anaemia.",
        "6. Vitamin B₁₂ (Cyanocobalamin): Contains Cobalt; required for RBC maturation. Deficiency ⟶ Pernicious (Megaloblastic) Anaemia and demyelinating spinal cord neuropathy.",
        "7. Vitamin C (Ascorbic Acid): Powerful water-soluble antioxidant, essential for proline/lysine hydroxylation in Collagen synthesis. Heat-labile (destroyed by cooking). Deficiency ⟶ Scurvy (bleeding gums, petechial haemorrhages, delayed wound healing, loose teeth)."
      ],
      importantPoints: [
        "Vitamin C is heat-labile and destroyed by prolonged cooking; it is excreted in urine and cannot be stored.",
        "Vitamin B₁₂ is the ONLY vitamin that contains a metallic coordination center (Cobalt, Co³⁺)."
      ]
    }
  ],

  formulae: [
    {
      title: "Isoelectric Point (pI) of Neutral Amino Acid",
      formula: "\\text{pI} = \\frac{\\text{p}K_{a1} (\\text{–COOH}) + \\text{p}K_{a2} (\\text{–NH}_3^+)}{2}",
      meaning: "The pH at which the concentration of the neutral zwitterionic form is at maximum and net electric charge is exactly zero.",
      symbols: "\\text{p}K_{a1} = \\text{acidity constant of carboxyl group}; \\text{p}K_{a2} = \\text{acidity constant of ammonium group}",
      unit: "pH units",
      conditions: "Monoamino-monocarboxylic neutral amino acids (e.g., Alanine, Glycine).",
      whenToUse: "Use to calculate the isoelectric point of neutral amino acids."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: BIOMOLECULES_DIAGRAMS.aminoAcidsAndProteinStructures,
    caption: "Diagrammatic representation of Amino Acid Zwitterion, Peptide Bond Planarity, Secondary α-Helix / β-Sheet, and Master Vitamins Summary."
  },

  neetImportantPoints: [
    "Glycine is the only standard amino acid lacking a chiral center (optically inactive).",
    "All standard natural amino acids in proteins have the L-configuration.",
    "Zwitterion has net charge = 0 at pI; at pH < pI it is a cation (migrates to cathode); at pH > pI it is an anion (migrates to anode).",
    "10 Essential Amino Acids: Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine (PVT TIM HaLL).",
    "Peptide bond (–CO–NH–) is planar with partial double bond character due to resonance.",
    "During protein denaturation, 2°, 3°, and 4° structures are destroyed, but the 1° structure remains intact.",
    "Fat-soluble vitamins: A, D, E, K; Water-soluble vitamins: B-complex and C (excreted in urine).",
    "Vitamin B₁₂ contains Cobalt and is stored in the liver; deficiency causes Pernicious Anaemia.",
    "Vitamin C is heat-labile (destroyed on cooking); deficiency causes Scurvy."
  ],

  commonConfusions: [
    {
      commonConfusion: "Thinking protein denaturation breaks peptide bonds into individual amino acids.",
      correctFact: "Denaturation breaks ONLY non-covalent secondary, tertiary, and quaternary interactions (H-bonds, salt bridges, hydrophobic bonds). Peptide bonds remain intact.",
      whyItMattersForNEET: "High-frequency NEET assertion-reason and MCQ trap."
    },
    {
      commonConfusion: "Believing all vitamins are water-soluble or all are excreted in urine.",
      correctFact: "Vitamins A, D, E, and K are fat-soluble and stored in liver/adipose tissue. Water-soluble vitamins (B and C) are excreted in urine (except B₁₂ which is stored in the liver).",
      whyItMattersForNEET: "Standard classification question in NEET Chemistry and Biology."
    },
    {
      commonConfusion: "Thinking all 20 standard amino acids are chiral.",
      correctFact: "Glycine (H₂N–CH₂–COOH) has two hydrogen atoms on the α-carbon, making it completely symmetric and optically inactive.",
      whyItMattersForNEET: "Tested repeatedly in NEET exam."
    }
  ],

  quickRevision: [
    "Glycine = Only achiral, optically inactive standard amino acid",
    "All natural protein amino acids have L-configuration",
    "Zwitterion: Net charge = 0 at pI; cation at acidic pH, anion at basic pH",
    "10 Essential Amino Acids: PVT TIM HaLL",
    "Peptide Bond = Rigid, planar –CO–NH– with partial double bond character",
    "α-Helix = Right-handed coil stabilized by INTRAMOLECULAR H-bonds",
    "β-Sheet = Extended pleated sheets stabilized by INTERMOLECULAR H-bonds",
    "Denaturation: Destroys 2°, 3°, 4° structures; 1° structure remains intact",
    "Fat-soluble: A, D, E, K; Water-soluble: B-complex, C",
    "Vitamin B₁₂ = Contains Cobalt; deficiency causes Pernicious Anaemia",
    "Vitamin C = Ascorbic acid; heat-labile, excreted in urine; deficiency causes Scurvy"
  ],

  practiceQuestions: [
    {
      id: "prac-prot-1",
      topicId: "chem-proteins-amino-acids",
      difficulty: "Easy",
      question: "Which of the following α-amino acids is optically inactive and lacks a chiral carbon atom?",
      options: [
        "Alanine",
        "Valine",
        "Glycine",
        "Leucine"
      ],
      correctAnswer: 2,
      explanation: "Glycine has the chemical formula H₂N-CH₂-COOH. The α-carbon is bonded to two identical hydrogen atoms (-H), meaning it lacks four distinct substituent groups and is therefore achiral and optically inactive. All other 19 standard amino acids have chiral α-carbons."
    },
    {
      id: "prac-prot-2",
      topicId: "chem-proteins-amino-acids",
      difficulty: "Easy",
      question: "During denaturation of a globular protein, which structural level remains intact?",
      options: [
        "Secondary structure",
        "Tertiary structure",
        "Quaternary structure",
        "Primary structure"
      ],
      correctAnswer: 3,
      explanation: "Denaturation involves the disruption of weaker non-covalent interactions (hydrogen bonds, ionic attractions, disulfide bonds, and hydrophobic interactions) that maintain secondary, tertiary, and quaternary structures. The covalent peptide linkages forming the primary sequence remain completely unbroken."
    },
    {
      id: "prac-prot-3",
      topicId: "chem-proteins-amino-acids",
      difficulty: "Medium",
      question: "In an electric field at a pH significantly below its isoelectric point (pH < pI), an amino acid exists predominantly as a:",
      options: [
        "Dipolar zwitterion and does not migrate",
        "Cation and migrates toward the cathode",
        "Anion and migrates toward the anode",
        "Neutral uncharged molecule"
      ],
      correctAnswer: 1,
      explanation: "At pH below the isoelectric point (acidic medium), excess H⁺ ions protonate the carboxylate group (-COO⁻ + H⁺ ⟶ -COOH) while the amino group remains protonated as -NH₃⁺. Thus, the amino acid carries a net positive charge (Cation) and migrates toward the negatively charged electrode (Cathode)."
    },
    {
      id: "prac-prot-4",
      topicId: "chem-proteins-amino-acids",
      difficulty: "Medium",
      question: "Assertion (A): Vitamin C cannot be stored in our body and must be supplied regularly in diet.\nReason (R): Vitamin C is water-soluble and is readily excreted in urine.",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "(A) is true but (R) is false.",
        "(A) is false but (R) is true."
      ],
      correctAnswer: 0,
      explanation: "Vitamin C (ascorbic acid) is a water-soluble vitamin. Unlike fat-soluble vitamins (A, D, E, K) that accumulate in the liver and adipose tissues, water-soluble vitamins dissolve readily in aqueous body fluids and are continuously excreted in urine. Therefore, both (A) and (R) are true, and (R) correctly explains (A)."
    },
    {
      id: "prac-prot-5",
      topicId: "chem-proteins-amino-acids",
      difficulty: "Medium",
      question: "Match the Vitamin in Column I with its corresponding deficiency disease in Column II:\nColumn I:\n(A) Vitamin B₁ (Thiamine)\n(B) Vitamin B₁₂ (Cyanocobalamin)\n(C) Vitamin C (Ascorbic acid)\n(D) Vitamin D (Calciferol)\nColumn II:\n(1) Scurvy\n(2) Pernicious Anaemia\n(3) Beriberi\n(4) Rickets",
      options: [
        "A-3, B-2, C-1, D-4",
        "A-2, B-3, C-1, D-4",
        "A-3, B-1, C-2, D-4",
        "A-4, B-2, C-1, D-3"
      ],
      correctAnswer: 0,
      explanation: "Vitamin B₁ deficiency causes Beriberi (A-3). Vitamin B₁₂ deficiency causes Pernicious Anaemia (B-2). Vitamin C deficiency causes Scurvy (C-1). Vitamin D deficiency causes Rickets in children (D-4)."
    }
  ],

  pyqs: [
    {
      id: "pyq-biomol-2023-3",
      year: 2023,
      examYear: "2023",
      exam: "NEET UG",
      topicId: "chem-proteins-amino-acids",
      question: "Which of the following vitamins is water-soluble?",
      options: [
        "Vitamin A",
        "Vitamin C",
        "Vitamin D",
        "Vitamin K"
      ],
      correctAnswer: 1,
      explanation: "Vitamins are classified into fat-soluble (A, D, E, K) and water-soluble (B-complex and C). Therefore, Vitamin C (Ascorbic acid) is water-soluble and excreted in urine.",
      conceptTested: "Classification of vitamins into fat-soluble and water-soluble"
    },
    {
      id: "pyq-biomol-2022-3",
      year: 2022,
      examYear: "2022",
      exam: "NEET UG",
      topicId: "chem-proteins-amino-acids",
      question: "Which of the following is NOT an essential amino acid for the human body?",
      options: [
        "Valine",
        "Leucine",
        "Lysine",
        "Alanine"
      ],
      correctAnswer: 3,
      explanation: "Essential amino acids must be supplied in food (PVT TIM HaLL: Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine). Alanine is a non-essential amino acid synthesised endogenously by the human body.",
      conceptTested: "Identification of Essential vs Non-essential amino acids"
    },
    {
      id: "pyq-biomol-2021-1",
      year: 2021,
      examYear: "2021",
      exam: "NEET UG",
      topicId: "chem-proteins-amino-acids",
      question: "Deficiency of which vitamin causes Pernicious Anaemia?",
      options: [
        "Vitamin B₁",
        "Vitamin B₂",
        "Vitamin B₆",
        "Vitamin B₁₂"
      ],
      correctAnswer: 3,
      explanation: "Pernicious (Megaloblastic) anaemia is caused by the deficiency of Vitamin B₁₂ (Cyanocobalamin), which contains the trace metal Cobalt and is required for normal erythropoiesis and RBC maturation.",
      conceptTested: "Vitamin B₁₂ and its classic deficiency disease"
    },
    {
      id: "pyq-biomol-2018-1",
      year: 2018,
      examYear: "2018",
      exam: "NEET UG",
      topicId: "chem-proteins-amino-acids",
      question: "Which of the following statements is NOT correct about proteins?",
      options: [
        "Proteins are polymers of L-α-amino acids.",
        "Denaturation of protein destroys primary structure.",
        "α-Keratin is a fibrous protein.",
        "Insulin is a globular protein."
      ],
      correctAnswer: 1,
      explanation: "Denaturation disrupts secondary, tertiary, and quaternary structures of proteins by breaking hydrogen and disulfide bonds, but the covalent primary peptide sequence (1° structure) remains completely intact. Hence Option B is the incorrect statement.",
      conceptTested: "Effect of protein denaturation on primary, secondary, and tertiary structures"
    }
  ]
};
