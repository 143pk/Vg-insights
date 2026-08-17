import { DetailedTopicContent } from '../../types/neet';
import { BIOMOLECULES_DIAGRAMS } from '../biomolecules/biomoleculesDiagrams';

export const chemNucleicAcidsEnzymesDetails: DetailedTopicContent = {
  topicId: "chem-nucleic-acids-enzymes",
  topicName: "Nucleic Acids (DNA/RNA) & Biological Functions",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Biomolecules",

  whatIsThisTopic: "Complete NCERT breakdown of Nucleic Acids: Chemical Composition, Pentose Sugars (Ribose vs 2-Deoxyribose), Purines (A, G) & Pyrimidines (C, T, U), Nucleosides vs Nucleotides, 3′ ⟶ 5′ Phosphodiester Linkages, Watson-Crick B-DNA Double Helix Model, Chargaff's Rules, Types of RNA (mRNA, tRNA, rRNA), Replication, and DNA Fingerprinting.",

  basicIdea: [
    "Nucleic acids are biopolymers of repeating nucleotide units. A Nucleoside = Base + Pentose Sugar (linked via N-glycosidic bond at C-1′). A Nucleotide = Base + Pentose Sugar + Phosphate Group (esterified at C-5′).",
    "DNA contains β-D-2′-deoxyribose and bases Adenine, Guanine, Cytosine, and Thymine (A, G, C, T). RNA contains β-D-ribose and bases Adenine, Guanine, Cytosine, and Uracil (A, G, C, U).",
    "Nucleotides in a polynucleotide strand are linked together by 3′ ⟶ 5′ phosphodiester bonds forming the sugar-phosphate backbone.",
    "Watson-Crick B-DNA is a right-handed double helix of two antiparallel polynucleotide strands (5′→3′ and 3′→5′) held by complementary base pairs: A = T (2 H-bonds) and G ≡ C (3 H-bonds).",
    "Chargaff's Rule: In double-stranded DNA, [A] = [T] and [G] = [C]; total purines equal total pyrimidines ([A + G] = [T + C])."
  ],

  importantTerms: [
    {
      term: "Nucleoside vs Nucleotide",
      definition: "A Nucleoside consists of a nitrogenous base attached to C-1′ of a pentose sugar via an N-glycosidic bond. A Nucleotide is a phosphorylated nucleoside with a phosphate group attached to C-5′ of the sugar.",
      neetNote: "Monomers of DNA and RNA are nucleotides, NOT nucleosides."
    },
    {
      term: "Purines & Pyrimidines",
      definition: "Purines are bicyclic 9-membered nitrogenous aromatic bases (Adenine and Guanine). Pyrimidines are monocyclic 6-membered nitrogenous bases (Cytosine, Thymine, Uracil).",
      neetNote: "Thymine is present ONLY in DNA; Uracil is present ONLY in RNA. Thymine = 5-Methyluracil."
    },
    {
      term: "Phosphodiester Linkage",
      definition: "The covalent ester bridge linking the 3′-hydroxyl group of one pentose sugar to the 5′-hydroxyl group of the adjacent pentose sugar via a phosphate group.",
      neetNote: "Directs the 5′ ⟶ 3′ polarity of polynucleotide chains."
    },
    {
      term: "Chargaff's Equivalence Rule",
      definition: "In any double-stranded DNA molecule, the molar concentration of Adenine equals Thymine ([A] = [T]) and Guanine equals Cytosine ([G] = [C]).",
      neetNote: "Applies ONLY to double-stranded DNA; invalid for single-stranded DNA or RNA."
    },
    {
      term: "DNA Denaturation (Melting) & Renaturation",
      definition: "Thermal or pH-induced separation of double-stranded DNA into single strands by breaking hydrogen bonds without cleaving covalent phosphodiester bonds.",
      neetNote: "Higher G-C content increases DNA melting temperature (Tm) because G≡C has 3 H-bonds."
    },
    {
      term: "DNA Fingerprinting",
      definition: "A forensic and genetic identification technique based on highly variable non-coding tandem repeat sequences (VNTRs) unique to every individual.",
      neetNote: "Cannot distinguish between identical (monozygotic) twins."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Chemical Composition of Nucleic Acids: Sugars, Bases & Nucleotides",
      paragraphs: [
        "Nucleic acids are high-molecular-weight biopolymers (polynucleotides) responsible for the storage, transmission, and expression of genetic information in all living organisms.",
        "Complete hydrolysis of a nucleic acid yields three distinct chemical components:",
        "1. Pentose Sugar: An aldopentose in furanose form. RNA contains β-D-Ribose (with –OH at C-2′). DNA contains β-D-2′-Deoxyribose (where the –OH at C-2′ is replaced by –H). The lack of the 2′-OH group makes DNA remarkably resistant to alkaline hydrolysis and significantly more chemically stable than RNA.",
        "2. Nitrogenous Bases: Heterocyclic aromatic amines classified into two families:",
        "  • PURINES (Two fused rings: 6-membered pyrimidine + 5-membered imidazole): ADENINE (A, 6-aminopurine) and GUANINE (G, 2-amino-6-oxypurine). Both are present in DNA and RNA.",
        "  • PYRIMIDINES (Single 6-membered ring): CYTOSINE (C, 4-amino-2-oxypyrimidine, present in both DNA and RNA), THYMINE (T, 5-methyluracil, present ONLY in DNA), and URACIL (U, 2,4-dioxypyrimidine, present ONLY in RNA).",
        "3. Phosphoric Acid (H₃PO₄): Provides the phosphate group that links nucleotides via ester bonds, giving nucleic acids their polyanionic acidic nature."
      ],
      visual: {
        type: 'svg',
        svgContent: BIOMOLECULES_DIAGRAMS.nucleicAcidsDnaRnaStructure,
        caption: "Chemical structure of Pentose Sugars (Ribose vs 2-Deoxyribose), Purine & Pyrimidine Bases, Nucleoside, and Nucleotide.",
        guide: "Observe the N-glycosidic bond at C-1′ (N-9 of purine or N-1 of pyrimidine) and the phosphate ester bond at C-5′."
      },
      importantPoints: [
        "Thymine is chemically 5-methyluracil; adding a methyl group at C-5 provides additional stability and photochemical resistance to DNA.",
        "Nucleoside + Phosphate = Nucleotide (e.g., Adenosine + Phosphate = Adenosine Monophosphate / AMP)."
      ]
    },
    {
      heading: "2. Polynucleotide Chain Architecture & The 3′ ⟶ 5′ Phosphodiester Bond",
      paragraphs: [
        "Nucleotides polymerize by condensation reactions to form long polynucleotide chains.",
        "Phosphodiester Linkage: The 5′-phosphate group of an incoming nucleoside triphosphate reacts with the 3′-hydroxyl group of the existing nucleotide chain, eliminating inorganic pyrophosphate (PPi). This creates a 3′ ⟶ 5′ PHOSPHODIESTER BOND.",
        "Directionality and Backbone Polarity: Every nucleic acid strand has distinct structural polarity:",
        "  • 5′-End: Has a free phosphate group attached to carbon C-5′ of the terminal pentose sugar.",
        "  • 3′-End: Has a free hydroxyl (–OH) group attached to carbon C-3′ of the terminal pentose sugar.",
        "By universal scientific convention, nucleic acid sequences are always written and read in the 5′ ⟶ 3′ direction (e.g., 5′-ATGCCG-3′)."
      ],
      importantPoints: [
        "The alternating sugar-phosphate chain forms the hydrophilic outer structural backbone of the nucleic acid.",
        "Genetic information is stored in the specific linear sequence of the nitrogenous bases extending inward from the backbone."
      ]
    },
    {
      heading: "3. Watson-Crick B-DNA Double Helix Model & Chargaff's Rules",
      paragraphs: [
        "In 1953, James Watson and Francis Crick proposed the double-helical structure of B-DNA based on X-ray diffraction data collected by Rosalind Franklin and Maurice Wilkins and base-ratio data from Erwin Chargaff.",
        "Salient Structural Features of B-DNA:",
        "1. Two Polynucleotide Strands: The molecule consists of two helical polynucleotide chains wound around a central common axis in a right-handed spiral.",
        "2. Antiparallel Orientation: The two strands run in opposite polarities: one strand runs in the 5′ ⟶ 3′ direction, while the complementary strand runs in the 3′ ⟶ 5′ direction.",
        "3. Complementary Base Pairing (Hydrogen Bonding):",
        "  • Adenine (A) always pairs exclusively with Thymine (T) through TWO hydrogen bonds: A = T.",
        "  • Guanine (G) always pairs exclusively with Cytosine (C) through THREE hydrogen bonds: G ≡ C.",
        "4. Helical Dimensions: The pitch (one complete 360° helical turn) is 3.4 nm (34 Å) and contains 10 base pairs, giving a distance (rise) of 0.34 nm (3.4 Å) between successive base pairs. The diameter of the double helix is 2.0 nm (20 Å).",
        "5. Base Stacking Stability: Planar purine-pyrimidine base pairs lie perpendicular to the helix axis and stack closely on top of each other, providing strong van der Waals / π-π stacking stabilization.",
        "Chargaff's Equivalence Rules (For dsDNA): [A] = [T] and [G] = [C]; Total Purines = Total Pyrimidines ([A + G] = [T + C]); However, the ratio (A + T) / (G + C) is species-specific and varies widely."
      ],
      importantPoints: [
        "In dsDNA, %A = %T and %G = %C. If %A = 30%, then %T = 30%, %G = 20%, and %C = 20%.",
        "Chargaff's rule fails completely for single-stranded RNA and single-stranded DNA viruses (e.g., φX174)."
      ]
    },
    {
      heading: "4. Types of RNA, Protein Synthesis & DNA Fingerprinting",
      paragraphs: [
        "Ribonucleic Acid (RNA) is typically single-stranded but folds back on itself to generate localized double-helical hairpin loops and cloverleaf domains.",
        "Major Types of Cellular RNA:",
        "1. Messenger RNA (mRNA): Transcribes the genetic blueprint from nuclear DNA and carries it as triplet codons to ribosomes for translation into proteins.",
        "2. Ribosomal RNA (rRNA): The most abundant RNA (~80% of cellular RNA); associates with ribosomal proteins to form the structural and catalytic core of ribosomes (ribozymes like 28S / 23S peptidyl transferase).",
        "3. Transfer RNA (tRNA): Adapter molecule (~73–93 nucleotides) with a cloverleaf secondary structure possessing an amino acid attachment site (CCA-3′ end) and an anticodon triplet loop that base-pairs with mRNA codons during translation.",
        "Biological Central Dogma: DNA ⟶ (Transcription) ⟶ RNA ⟶ (Translation) ⟶ Protein.",
        "DNA Fingerprinting (Genetic Profiling): Every human (except monozygotic identical twins) has unique, highly variable non-coding repetitive DNA sequences called Variable Number Tandem Repeats (VNTRs) or microsatellites. Enzymatic digestion (restriction endonucleases), gel electrophoresis, Southern blotting, and radioactive hybridization generate unique DNA band patterns used in paternity disputes, forensic murder/rape investigations, and evolutionary phylogenetics."
      ],
      visual: {
        type: 'svg',
        svgContent: BIOMOLECULES_DIAGRAMS.nucleicAcidsDnaRnaStructure,
        caption: "Central Dogma of Molecular Biology and DNA Fingerprinting VNTR analysis principles.",
        guide: "DNA fingerprinting is permanent and identical across every tissue (blood, semen, skin, hair follicle) of an individual."
      },
      importantPoints: [
        "rRNA is the most abundant type of RNA in cells; tRNA is the smallest and functions as an adapter.",
        "DNA replication is semi-conservative: each daughter double helix contains one original parent strand and one newly synthesized strand (proven by Meselson & Stahl)."
      ]
    }
  ],

  formulae: [
    {
      title: "Chargaff's Molar Equivalence in dsDNA",
      formula: "[A] = [T], \\quad [G] = [C], \\quad \\frac{[A] + [G]}{[T] + [C]} = 1.0",
      meaning: "In any double-stranded DNA molecule, molar amount of Adenine equals Thymine, Guanine equals Cytosine, and total purines equal total pyrimidines.",
      symbols: "[A], [T], [G], [C] = molar percentages of respective nitrogenous bases",
      unit: "mole percent (%)",
      conditions: "Applies strictly to double-stranded DNA.",
      whenToUse: "Use to solve base percentage calculation numericals in NEET exams."
    },
    {
      title: "B-DNA Helical Pitch & Base Rise",
      formula: "\\text{Pitch} = 3.4\\text{ nm} = 34\\text{ Å} = 10\\text{ bp} \\times 0.34\\text{ nm/bp}",
      meaning: "One complete 360° turn of B-DNA spans 3.4 nm and accommodates 10 base pairs with an axial rise of 0.34 nm per base pair.",
      symbols: "bp = base pairs; nm = nanometers (1 nm = 10⁻⁹ m)",
      unit: "nm or Å",
      conditions: "Standard B-form hydrated physiological DNA.",
      whenToUse: "Use to calculate DNA length from number of base pairs (Length = Number of bp × 0.34 nm)."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: BIOMOLECULES_DIAGRAMS.nucleicAcidsDnaRnaStructure,
    caption: "Molecular base pairing in DNA: Adenine-Thymine (2 H-bonds) and Guanine-Cytosine (3 H-bonds)."
  },

  neetImportantPoints: [
    "Nucleoside = Base + Pentose Sugar (N-glycosidic bond at C-1′).",
    "Nucleotide = Base + Pentose Sugar + Phosphate Group (esterified at C-5′).",
    "DNA sugar is β-D-2′-deoxyribose (lacks 2′-OH); RNA sugar is β-D-ribose (has 2′-OH).",
    "DNA bases: A, G, C, T; RNA bases: A, G, C, U (Thymine = 5-Methyluracil).",
    "Adjacent nucleotides are linked by 3′ ⟶ 5′ phosphodiester bonds.",
    "Watson-Crick B-DNA: Antiparallel double helix, A=T (2 H-bonds), G≡C (3 H-bonds), Pitch = 3.4 nm (10 bp), Rise = 0.34 nm, Diameter = 2.0 nm.",
    "Chargaff's Rule: In dsDNA, [A]=[T] and [G]=[C] ⟹ Purines = Pyrimidines.",
    "DNA Fingerprinting relies on VNTRs (Variable Number Tandem Repeats) and remains identical in all body tissues."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing a Nucleoside with a Nucleotide.",
      correctFact: "A nucleoside contains only Base + Sugar. A nucleotide contains Base + Sugar + Phosphate Group.",
      whyItMattersForNEET: "Standard terminology trap in NEET Chemistry and Biology."
    },
    {
      commonConfusion: "Applying Chargaff's rule to single-stranded RNA.",
      correctFact: "Chargaff's rules apply strictly to double-stranded DNA where base pairing is 100% complementary; they do not apply to single-stranded RNA.",
      whyItMattersForNEET: "Common trick question where examiners give base percentages for RNA."
    },
    {
      commonConfusion: "Thinking Adenine pairs with Thymine via 3 hydrogen bonds.",
      correctFact: "A=T pair has TWO hydrogen bonds; G≡C pair has THREE hydrogen bonds.",
      whyItMattersForNEET: "Crucial for calculating DNA melting temperature (Tm) and thermal stability."
    }
  ],

  quickRevision: [
    "Nucleoside = Base + Sugar (C-1′ N-glycosidic bond)",
    "Nucleotide = Base + Sugar + Phosphate (C-5′ ester)",
    "DNA: β-D-2-Deoxyribose + A, G, C, T (Thymine = 5-methyluracil)",
    "RNA: β-D-Ribose + A, G, C, U",
    "Linkage = 3′ ⟶ 5′ Phosphodiester bond",
    "B-DNA: Antiparallel (5′→3′ & 3′→5′), Pitch = 3.4 nm (10 bp), Diameter = 2.0 nm",
    "Base Pairing: A = T (2 H-bonds), G ≡ C (3 H-bonds)",
    "Chargaff's Rule: [A] = [T], [G] = [C], [Purines] = [Pyrimidines]",
    "DNA Fingerprinting: Based on VNTRs; identical in all cells of an individual"
  ],

  practiceQuestions: [
    {
      id: "prac-na-1",
      topicId: "chem-nucleic-acids-enzymes",
      difficulty: "Easy",
      question: "A Nucleoside differs from a Nucleotide because a Nucleoside lacks:",
      options: [
        "Nitrogenous purine base",
        "Phosphate group",
        "Pentose sugar",
        "Pyrimidines"
      ],
      correctAnswer: 1,
      explanation: "A Nucleoside consists strictly of a nitrogenous base attached to C-1′ of a pentose sugar (Base + Sugar). A Nucleotide contains a phosphate group esterified to C-5′ of the pentose sugar in addition to the base and sugar (Base + Sugar + Phosphate)."
    },
    {
      id: "prac-na-2",
      topicId: "chem-nucleic-acids-enzymes",
      difficulty: "Easy",
      question: "In double-stranded DNA, the nitrogenous base Guanine pairs with Cytosine through:",
      options: [
        "One hydrogen bond",
        "Two hydrogen bonds",
        "Three hydrogen bonds",
        "A covalent phosphodiester bond"
      ],
      correctAnswer: 2,
      explanation: "According to Watson-Crick base pairing in B-DNA, Guanine (purine) pairs with Cytosine (pyrimidine) through THREE hydrogen bonds (G≡C), whereas Adenine pairs with Thymine through TWO hydrogen bonds (A=T)."
    },
    {
      id: "prac-na-3",
      topicId: "chem-nucleic-acids-enzymes",
      difficulty: "Medium",
      question: "A sample of double-stranded DNA is analyzed and found to contain 28% Adenine. What is the percentage of Cytosine in this DNA sample?",
      options: [
        "28%",
        "22%",
        "44%",
        "56%"
      ],
      correctAnswer: 1,
      explanation: "According to Chargaff's rule in double-stranded DNA:\n[A] = [T] = 28% ⟹ [A + T] = 56%.\nTherefore, [G + C] = 100% - 56% = 44%.\nSince [G] = [C], the percentage of Cytosine = 44% / 2 = 22%."
    },
    {
      id: "prac-na-4",
      topicId: "chem-nucleic-acids-enzymes",
      difficulty: "Medium",
      question: "Assertion (A): DNA is chemically more stable and less reactive than RNA as the genetic material.\nReason (R): 2′-Deoxyribose sugar in DNA lacks a free 2′-hydroxyl (-OH) group, preventing internal base-catalysed strand cleavage.",
      options: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "(A) is true but (R) is false.",
        "(A) is false but (R) is true."
      ],
      correctAnswer: 0,
      explanation: "In RNA, the presence of a free 2′-OH group on ribose makes it labile and susceptible to alkaline hydrolysis and nucleophilic cleavage. DNA contains 2′-deoxyribose (which lacks this 2′-OH), making the DNA phosphodiester backbone much more chemically stable. Both (A) and (R) are true and (R) is the correct explanation."
    },
    {
      id: "prac-na-5",
      topicId: "chem-nucleic-acids-enzymes",
      difficulty: "Hard",
      question: "The chemical linkage connecting successive nucleotide units in a single polynucleotide strand of DNA is:",
      options: [
        "1′ ⟶ 4′ Glycosidic linkage",
        "3′ ⟶ 5′ Phosphodiester bond",
        "2′ ⟶ 5′ Amide bond",
        "Peptide linkage"
      ],
      correctAnswer: 1,
      explanation: "Adjacent nucleotides in a nucleic acid chain are linked by 3′ ⟶ 5′ phosphodiester bonds formed between the 3′-hydroxyl group of one pentose sugar and the 5′-phosphate group of the adjacent nucleotide, forming the hydrophilic sugar-phosphate backbone."
    }
  ],

  pyqs: [
    {
      id: "pyq-biomol-2023-2",
      year: 2023,
      examYear: "2023",
      exam: "NEET UG",
      topicId: "chem-nucleic-acids-enzymes",
      question: "The correct statement regarding RNA and DNA is:",
      options: [
        "The sugar component in RNA is 2′-deoxyribose and the base is thymine.",
        "The sugar component in RNA is arabinose and the base is uracil.",
        "The sugar component in DNA is 2′-deoxyribose and the base is thymine.",
        "The sugar component in DNA is ribose and the base is uracil."
      ],
      correctAnswer: 2,
      explanation: "DNA contains β-D-2′-deoxyribose as its pentose sugar and the nitrogenous base Thymine (along with Adenine, Guanine, and Cytosine). In contrast, RNA contains β-D-ribose and Uracil (in place of Thymine). Thus, Option C is the correct factual statement from NCERT.",
      conceptTested: "Distinction between sugars and nitrogenous bases of DNA vs RNA"
    },
    {
      id: "pyq-biomol-2022-2",
      year: 2022,
      examYear: "2022",
      exam: "NEET UG",
      topicId: "chem-nucleic-acids-enzymes",
      question: "Which of the following nitrogenous bases is NOT present in DNA?",
      options: [
        "Adenine",
        "Guanine",
        "Cytosine",
        "Uracil"
      ],
      correctAnswer: 3,
      explanation: "DNA contains four nitrogenous bases: Adenine (A), Guanine (G), Cytosine (C), and Thymine (T). Uracil (U) is a pyrimidine base present exclusively in RNA in place of Thymine.",
      conceptTested: "Nitrogenous base composition in DNA vs RNA"
    }
  ]
};
