export const BIOMOLECULES_TRAPS_AND_TABLES = {
  // ----------------------------------------------------
  // TOPIC 1: CARBOHYDRATES TRAPS
  // ----------------------------------------------------
  carbohydrateNeetTraps: [
    {
      id: "carb-trap-1",
      trap: "Assuming all carbohydrates strictly fit the empirical hydrate formula Cx(H2O)y and non-carbohydrates cannot fit it.",
      reality: "Formaldehyde (HCHO = C(H2O)) and Acetic acid (CH3COOH = C2(H2O)2) fit the formula but are NOT carbohydrates. Conversely, Rhamnose (C6H12O5) and Deoxyribose (C5H10O4) are genuine carbohydrates but do NOT fit Cx(H2O)y.",
      neetTip: "NCERT defines carbohydrates chemically as optically active polyhydroxy aldehydes or polyhydroxy ketones or compounds which produce such units on hydrolysis."
    },
    {
      id: "carb-trap-2",
      trap: "Thinking Fructose cannot reduce Tollens' or Fehling's solution because it contains a ketone (-C=O) group.",
      reality: "Fructose is a powerful REDUCING SUGAR in alkaline medium. Under alkaline conditions (Tollens/Fehling reagents), fructose undergoes Lobry de Bruyn-Alberda van Ekenstein enediol rearrangement into Glucose and Mannose.",
      neetTip: "All natural monosaccharides (both aldoses and ketoses) are reducing sugars without exception!"
    },
    {
      id: "carb-trap-3",
      trap: "Confusing the anomeric carbons of Glucose vs Fructose.",
      reality: "For Glucose (aldohexose), the anomeric carbon is C-1 (derived from -CHO). For Fructose (ketohexose), the anomeric carbon is C-2 (derived from >C=O).",
      neetTip: "Always check C-1 for glucose and C-2 for fructose when identifying glycosidic linkages and reducing ends."
    },
    {
      id: "carb-trap-4",
      trap: "Assuming Sucrose is a reducing sugar because it is composed of glucose and fructose.",
      reality: "Sucrose is strictly NON-REDUCING because the glycosidic bond links C-1 of α-D-glucose directly to C-2 of β-D-fructose. Both reducing/anomeric groups are locked in the glycosidic bond.",
      neetTip: "Sucrose does not form osazone, does not reduce Tollens/Fehling, and does not show mutarotation."
    },
    {
      id: "carb-trap-5",
      trap: "Thinking Maltose is non-reducing because both constituent units are glucose.",
      reality: "Maltose is a REDUCING sugar because the glycosidic linkage is α(1→4). The C-1 anomeric carbon of the second glucose unit is free as a hemiacetal.",
      neetTip: "Maltose undergoes mutarotation and reduces Tollens and Fehling reagents."
    },
    {
      id: "carb-trap-6",
      trap: "Thinking Lactose consists of two glucose units.",
      reality: "Lactose consists of β-D-Galactopyranose (C-1) linked via β(1→4) glycosidic bond to β-D-Glucopyranose (C-4). The second ring has a free C-1 hemiacetal, making lactose reducing.",
      neetTip: "Galactose is the C-4 epimer of Glucose (OH at C-4 is in the UP position in Haworth projection)."
    },
    {
      id: "carb-trap-7",
      trap: "Believing Invert Sugar is dextrorotatory because it is formed by hydrolysing dextrorotatory sucrose.",
      reality: "Sucrose is dextrorotatory ([α] = +66.5°), but upon hydrolysis it produces D-(+)-glucose ([α] = +52.5°) and D-(-)-fructose ([α] = -92.4°). The net optical rotation becomes LAEVOROTATORY ([α] = -19.95° or ~ -20°).",
      neetTip: "Because the sign of optical rotation 'inverts' from dextro (+) to laevo (-), the equimolar hydrolysed mixture is called Invert Sugar."
    },
    {
      id: "carb-trap-8",
      trap: "Confusing D/L configuration with optical rotation (+)/(-).",
      reality: "D and L designate the relative spatial stereochemical configuration of the lowest asymmetric carbon (C-5 in hexoses) relative to D-(+)-glyceraldehyde. (+) and (-) indicate experimental optical rotation direction.",
      neetTip: "D-glucose is dextrorotatory (D-(+)-glucose), but D-fructose is laevorotatory (D-(-)-fructose). 'D' does NOT mean dextrorotatory!"
    },
    {
      id: "carb-trap-9",
      trap: "Assuming glucose forms an oxime and pentaacetate, therefore it must have a free aldehyde group at all times.",
      reality: "Glucose exists >99% in cyclic hemiacetal forms (α and β). The pentaacetate of glucose does NOT react with hydroxylamine (NH2OH) because its anomeric -OH is esterified, preventing ring opening!",
      neetTip: "This absence of reaction between glucose pentaacetate and NH2OH was key historical proof that glucose exists as a cyclic hemiacetal."
    },
    {
      id: "carb-trap-10",
      trap: "Thinking Bromine water (Br2/H2O) oxidises both glucose and fructose.",
      reality: "Bromine water is a mild, selective oxidising agent that oxidises aldoses (Glucose ⟶ Gluconic acid, a monocarboxylic acid) but does NOT oxidise ketoses (Fructose).",
      neetTip: "Br2/H2O is the classic diagnostic reagent to distinguish an aldose (glucose) from a ketose (fructose)."
    },
    {
      id: "carb-trap-11",
      trap: "Confusing oxidation of glucose by Nitric acid (HNO3) vs Bromine water (Br2/H2O).",
      reality: "Br2/H2O oxidises ONLY C-1 to yield Gluconic acid (monocarboxylic acid). Concentrated HNO3 oxidises BOTH C-1 (-CHO) and C-6 (-CH2OH) to yield Saccharic acid / Glucaric acid (dicarboxylic acid).",
      neetTip: "Gluconic acid = C1 carboxylic acid; Saccharic acid = C1 and C6 dicarboxylic acid."
    },
    {
      id: "carb-trap-12",
      trap: "Thinking glucose reacts with 5 moles of acetic anhydride to form a pentaacetate, indicating 5 primary -OH groups.",
      reality: "Glucose reacts with 5 moles of (CH3CO)2O to form glucose pentaacetate, confirming presence of 5 hydroxyl (-OH) groups. However, ONE is primary (-CH2OH at C-6) and FOUR are secondary (-CH(OH)- at C-2, C-3, C-4, C-5).",
      neetTip: "Because glucose is stable, each of the 5 -OH groups is attached to a separate carbon atom."
    },
    {
      id: "carb-trap-13",
      trap: "Confusing α-D-glucose and β-D-glucose as enantiomers.",
      reality: "α-D-glucose and β-D-glucose differ in configuration ONLY at C-1 (the anomeric carbon). They are diastereomers called ANOMERS, not enantiomers (which must be non-superimposable mirror images at all chiral centers).",
      neetTip: "Anomers are diastereomers that differ only at the hemiacetal/hemiketal carbon (C-1 in glucose, C-2 in fructose)."
    },
    {
      id: "carb-trap-14",
      trap: "Assuming Amylose is branched because it is a component of starch.",
      reality: "Amylose is a purely LINEAR, unbranched polymer of 200–1000 α-D-glucose units joined exclusively by α(1→4) glycosidic bonds. Amylopectin is the branched component with α(1→4) main chains and α(1→6) branches.",
      neetTip: "Amylose is water-soluble (15–20% of starch); Amylopectin is water-insoluble (80–85% of starch)."
    },
    {
      id: "carb-trap-15",
      trap: "Thinking Starch and Cellulose have the same glycosidic linkage because both are polymers of glucose.",
      reality: "Starch is composed of α-D-glucose units joined by α-glycosidic bonds (α(1→4) and α(1→6)). Cellulose is composed of β-D-glucose units joined by β(1→4) glycosidic bonds.",
      neetTip: "Human amylase enzymes only hydrolyse α-linkages; humans lack cellulase to hydrolyse β(1→4) linkages of cellulose."
    },
    {
      id: "carb-trap-16",
      trap: "Believing Cellulose gives a blue color with iodine like starch.",
      reality: "Cellulose does NOT give a blue color with iodine because its straight β-chains form tight rigid microfibrils with no helical helical cavities to trap molecular iodine (I2).",
      neetTip: "Only Amylose (with its continuous α-helical structure) traps I2 molecules inside its helix to give the intense blue-black complex."
    },
    {
      id: "carb-trap-17",
      trap: "Confusing the storage polysaccharide of animals (Glycogen) with plant starch.",
      reality: "Glycogen is called 'animal starch' because its structure is similar to amylopectin, but it is MUCH MORE HIGHLY BRANCHED (branching every 8–12 glucose units compared to every 20–25 in amylopectin).",
      neetTip: "Glycogen is stored in liver and muscles in animals; when glucose is needed, enzymes break it down rapidly from its numerous branch ends."
    },
    {
      id: "carb-trap-18",
      trap: "Thinking Mutarotation occurs in solid crystals of α-D-glucose or β-D-glucose.",
      reality: "Mutarotation occurs ONLY in aqueous solution where the cyclic ring can reversibly open into the open-chain free carbonyl intermediate and reclose into the alternate anomer.",
      neetTip: "Pure crystalline α-D-glucose (+112°) or β-D-glucose (+19°) is stable; in water, both spontaneously equilibrate to +52.7°."
    },
    {
      id: "carb-trap-19",
      trap: "Assuming glucose reaction with prolonged heating with HI yields 2-iodohexane or hexanol.",
      reality: "Prolonged heating of glucose with concentrated hydroiodic acid (HI) and red phosphorus yields n-HEXANE (CH3-CH2-CH2-CH2-CH2-CH3), proving all 6 carbons are linked in a straight unbranched chain.",
      neetTip: "NCERT landmark reaction: Glucose + HI (heat) ⟶ n-Hexane."
    },
    {
      id: "carb-trap-20",
      trap: "Thinking Schiff's reagent and NaHSO3 react with glucose like normal aldehydes.",
      reality: "Despite having an aldehyde group in open-chain form, glucose DOES NOT give 2,4-DNP test, Schiff's test, and does not form hydrogen sulphite addition product with NaHSO3 because the -CHO group is locked in the cyclic hemiacetal ring.",
      neetTip: "This is standard NCERT evidence that open-chain glucose exists only in minute concentration (~0.02%)."
    }
  ],

  // ----------------------------------------------------
  // TOPIC 2: AMINO ACIDS, PROTEINS, ENZYMES & VITAMINS TRAPS
  // ----------------------------------------------------
  proteinAndVitaminNeetTraps: [
    {
      id: "prot-trap-1",
      trap: "Assuming all natural amino acids are optically active and have a chiral carbon.",
      reality: "GLYCINE (H2N-CH2-COOH, R = H) has two identical hydrogen atoms on its α-carbon and is therefore ACHIRAL and OPTICALLY INACTIVE. All other 19 natural amino acids are chiral and optically active.",
      neetTip: "Glycine is the ONLY achiral proteinogenic amino acid in the NCERT syllabus!"
    },
    {
      id: "prot-trap-2",
      trap: "Thinking natural amino acids belong to the D-series because D-glucose is dominant in nature.",
      reality: "All natural amino acids found in proteins belong to the L-CONFIGURATION (with the -NH2 group on the LEFT in the standard Fischer projection with -COOH at top).",
      neetTip: "Sugars are mostly D-series; Amino acids in proteins are exclusively L-series."
    },
    {
      id: "prot-trap-3",
      trap: "Assuming the Zwitterionic form of an amino acid carries no electrical charges.",
      reality: "A Zwitterion carries BOTH a positive charge (-NH3+) and a negative charge (-COO-), but its NET electric charge is ZERO at its isoelectric point (pI).",
      neetTip: "Zwitterions are dipolar ions with high dipole moments, leading to high melting points and salt-like water solubility."
    },
    {
      id: "prot-trap-4",
      trap: "Thinking amino acids in acidic solution (pH < pI) migrate to the positive anode during electrophoresis.",
      reality: "At low pH (acidic medium), -COO- accepts H+ to become -COOH, leaving the molecule with a net positive charge (+H3N-CH(R)-COOH). As a CATION, it migrates to the negative CATHODE.",
      neetTip: "Acidic pH ⟶ Cation ⟶ Migrates to Cathode (-ve electrode). Basic pH ⟶ Anion ⟶ Migrates to Anode (+ve electrode)."
    },
    {
      id: "prot-trap-5",
      trap: "Thinking the human body can synthesize all 20 amino acids internally.",
      reality: "10 amino acids are ESSENTIAL and CANNOT be synthesized by the human body; they must be supplied through the diet: Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine, Arginine.",
      neetTip: "Mnemonic: 'V-L-I-K-M-P-T-T-H-A' or 'PVT TIM HaLL' (Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine)."
    },
    {
      id: "prot-trap-6",
      trap: "Assuming the peptide bond (-CO-NH-) can freely rotate like a single C-N bond.",
      reality: "Due to resonance between the carbonyl oxygen and nitrogen lone pair, the peptide bond has ~40% PARTIAL DOUBLE BOND CHARACTER, making it planar, rigid, and restricted from free rotation.",
      neetTip: "This planarity of the peptide unit is the fundamental geometrical basis of α-helix and β-sheet secondary structures."
    },
    {
      id: "prot-trap-7",
      trap: "Thinking Denaturation of a protein breaks covalent peptide bonds and destroys primary structure.",
      reality: "Denaturation disrupts only weak non-covalent interactions (hydrogen bonds, ionic bonds, hydrophobic interactions) and disulfide bridges, destroying 2°, 3°, and 4° structures. The PRIMARY STRUCTURE (covalent sequence of amino acids) remains COMPLETELY INTACT.",
      neetTip: "Hydrolysis is required to break primary peptide bonds; Denaturation does NOT hydrolyse peptide bonds!"
    },
    {
      id: "prot-trap-8",
      trap: "Confusing Fibrous proteins with Globular proteins in terms of water solubility.",
      reality: "Fibrous proteins (e.g., Keratin in hair/nails, Myosin in muscles, Collagen) run parallel in fiber-like strands and are WATER-INSOLUBLE. Globular proteins (e.g., Albumin, Insulin, Haemoglobin) fold into compact spherical shapes and are WATER-SOLUBLE.",
      neetTip: "Fibrous = Insoluble, structural; Globular = Soluble, functional/catalytic."
    },
    {
      id: "prot-trap-9",
      trap: "Thinking α-helix secondary structure is stabilized by intermolecular hydrogen bonding.",
      reality: "α-Helix is stabilized by INTRAMOLECULAR hydrogen bonding between the -NH- group of an amino acid residue and the >C=O group of the 4th amino acid residue further along the same chain.",
      neetTip: "α-Helix = Intramolecular H-bonds; β-Pleated Sheet = Intermolecular H-bonds between adjacent chains."
    },
    {
      id: "prot-trap-10",
      trap: "Thinking all vitamins are fat-soluble because they are organic compounds.",
      reality: "Vitamins are divided into FAT-SOLUBLE (A, D, E, K; stored in liver and adipose tissue) and WATER-SOLUBLE (B-complex and Vitamin C; excreted in urine, not stored in body except B12).",
      neetTip: "Vitamin B12 is the ONLY water-soluble vitamin stored in the human liver for significant periods (several years)."
    },
    {
      id: "prot-trap-11",
      trap: "Assuming excess intake of water-soluble vitamins leads to toxic hypervitaminosis.",
      reality: "Water-soluble vitamins (B and C) are readily excreted in urine and must be supplied regularly in the diet; they rarely cause toxicity. Excess FAT-SOLUBLE vitamins (especially A and D) accumulate in liver/adipose tissue and can cause toxic Hypervitaminosis.",
      neetTip: "Vitamin C cannot be stored in the body because it is excreted continuously in urine."
    },
    {
      id: "prot-trap-12",
      trap: "Confusing Vitamin B1 (Thiamine) deficiency with Vitamin B3 (Niacin) deficiency.",
      reality: "Deficiency of Vitamin B1 (Thiamine) causes BERIBERI (loss of appetite, nerve damage). Deficiency of Vitamin B3 (Niacin / Nicotinic acid) causes PELLAGRA (4Ds: dermatitis, diarrhoea, dementia, death).",
      neetTip: "B1 = Beriberi; B2 = Cheilosis / digestive disorders; B3 = Pellagra; B12 = Pernicious Anaemia; C = Scurvy; D = Rickets; K = Increased blood clotting time."
    },
    {
      id: "prot-trap-13",
      trap: "Thinking Vitamin B12 contains iron or zinc as its central metal ion.",
      reality: "Vitamin B12 (Cyanocobalamin) contains COBALT (Co) as its central metal ion in a corrin ring.",
      neetTip: "High-frequency NEET question: Metal in chlorophyll = Mg; Metal in haemoglobin = Fe; Metal in Vitamin B12 = Co."
    },
    {
      id: "prot-trap-14",
      trap: "Confusing Scurvy (Vitamin C deficiency) with Rickets (Vitamin D deficiency).",
      reality: "Scurvy (bleeding gums, fragile capillaries) is caused by deficiency of Vitamin C (Ascorbic acid). Rickets (in children, soft deformed bones) and Osteomalacia (in adults) are caused by deficiency of Vitamin D.",
      neetTip: "Vitamin C is destroyed by prolonged heating/cooking as it is heat-labile."
    },
    {
      id: "prot-trap-15",
      trap: "Thinking Vitamin K is synthesized exclusively from fruits and vegetables in the diet.",
      reality: "Vitamin K (Phylloquinone/Menaquinone) is required for synthesis of prothrombin and blood clotting. A major portion of human Vitamin K requirement is synthesized by symbiotic intestinal bacteria (gut microbiota).",
      neetTip: "Deficiency of Vitamin K increases blood clotting time (excessive bleeding from minor cuts)."
    },
    {
      id: "prot-trap-16",
      trap: "Assuming enzymes increase the equilibrium constant (Keq) of a biochemical reaction.",
      reality: "Enzymes are biological catalysts that lower activation energy (Ea) and increase the rate of reaction by millions of times, but they DO NOT alter equilibrium constant (Keq) or standard Gibbs free energy (ΔG°).",
      neetTip: "Enzymes speed up attainment of equilibrium without changing the equilibrium position."
    },
    {
      id: "prot-trap-17",
      trap: "Thinking boiling curdles milk because of enzyme activation.",
      reality: "Milk curdles because lactic acid bacteria produce lactic acid, lowering pH. The acidic pH protonates lactalbumin/casein, causing Denaturation and coagulation (precipitation) of globular milk proteins.",
      neetTip: "Curdling of milk is a classic real-world example of protein denaturation."
    },
    {
      id: "prot-trap-18",
      trap: "Confusing Acidic amino acids (Aspartic acid, Glutamic acid) with Basic amino acids (Lysine, Arginine, Histidine).",
      reality: "Acidic amino acids have more carboxyl (-COOH) groups than amino (-NH2) groups (e.g., Aspartic acid, Glutamic acid). Basic amino acids have more amino (-NH2) groups than carboxyl (-COOH) groups (e.g., Lysine, Arginine, Histidine).",
      neetTip: "Neutral amino acids (e.g., Alanine, Glycine, Valine) have equal numbers of -NH2 and -COOH groups."
    },
    {
      id: "prot-trap-19",
      trap: "Assuming Haemoglobin has tertiary structure only.",
      reality: "Haemoglobin has QUATERNARY STRUCTURE composed of 4 distinct polypeptide subunits (two identical α-chains of 141 amino acids and two identical β-chains of 146 amino acids) arranged tetrahedrally around 4 iron-heme groups.",
      neetTip: "Proteins composed of two or more polypeptide chains (subunits/protomers) possess quaternary structure."
    },
    {
      id: "prot-trap-20",
      trap: "Thinking Vitamin E deficiency causes night blindness.",
      reality: "Night blindness (Xerophthalmia) is caused by deficiency of VITAMIN A (Retinol). Deficiency of VITAMIN E (Tocopherol) causes muscular weakness and increased fragility of RBCs / loss of reproductive fertility in animals.",
      neetTip: "Vitamin A = Night blindness / Xerophthalmia; Vitamin E = Antisterility vitamin / RBC fragility."
    }
  ],

  // ----------------------------------------------------
  // TOPIC 3: NUCLEIC ACIDS TRAPS
  // ----------------------------------------------------
  nucleicAcidsNeetTraps: [
    {
      id: "na-trap-1",
      trap: "Confusing a Nucleoside with a Nucleotide.",
      reality: "A Nucleoside = Base + Pentose Sugar (linked via N-glycosidic bond at C-1′). A Nucleotide = Base + Pentose Sugar + Phosphate Group (esterified at C-5′ of the sugar).",
      neetTip: "Nucleotide = Nucleoside + Phosphate. Monomers of nucleic acids are nucleotides, NOT nucleosides!"
    },
    {
      id: "na-trap-2",
      trap: "Assuming DNA and RNA have the exact same pyrimidine bases.",
      reality: "Cytosine (C) is present in both DNA and RNA. THYMINE (5-methyluracil, T) is present ONLY in DNA. URACIL (U) is present ONLY in RNA.",
      neetTip: "DNA bases = A, G, C, T; RNA bases = A, G, C, U. Purines (A, G) are common to both."
    },
    {
      id: "na-trap-3",
      trap: "Thinking the pentose sugar in DNA is an aldohexose.",
      reality: "The sugar in DNA is β-D-2-deoxyribose, which is an ALDOPENTOSE (5-carbon sugar) lacking an oxygen atom at C-2′ (-H instead of -OH).",
      neetTip: "RNA contains β-D-ribose (with -OH at C-2′). The absence of 2′-OH in deoxyribose makes DNA significantly more stable chemically."
    },
    {
      id: "na-trap-4",
      trap: "Assuming Adenine pairs with Thymine through 3 hydrogen bonds.",
      reality: "Adenine (A) pairs with Thymine (T) via TWO (2) hydrogen bonds (A=T). Guanine (G) pairs with Cytosine (C) via THREE (3) hydrogen bonds (G≡C).",
      neetTip: "GC-rich DNA has a higher melting temperature (Tm) because G≡C base pairs with 3 H-bonds require more thermal energy to denature than A=T pairs."
    },
    {
      id: "na-trap-5",
      trap: "Thinking nucleotides in a nucleic acid chain are joined by peptide bonds or glycosidic bonds.",
      reality: "Nucleotides are linked together by 3′ ⟶ 5′ PHOSPHODIESTER BONDS between the 3′-OH of one pentose sugar and the 5′-phosphate of the adjacent nucleotide.",
      neetTip: "Glycosidic bond connects Base to C-1′ of sugar; Phosphodiester bond connects adjacent nucleotides in the backbone."
    },
    {
      id: "na-trap-6",
      trap: "Assuming the two strands of the DNA double helix run parallel in the same 5′ ⟶ 3′ direction.",
      reality: "The two polynucleotide chains in the Watson-Crick DNA double helix run ANTIPARALLEL to each other: one strand runs 5′ ⟶ 3′ while the complementary strand runs 3′ ⟶ 5′.",
      neetTip: "Antiparallel orientation is essential for proper alignment of hydrogen-bonding donor and acceptor groups between base pairs."
    },
    {
      id: "na-trap-7",
      trap: "Applying Chargaff's rules ([A] = [T] and [G] = [C]) to single-stranded RNA or single-stranded DNA.",
      reality: "Chargaff's rules apply STRICTLY to DOUBLE-STRANDED DNA (dsDNA) where base pairing is 100% complementary. In single-stranded RNA or ssDNA, [A] does not necessarily equal [U] or [T].",
      neetTip: "If a nucleic acid has [A] = 30% and [T] = 20%, it is definitely single-stranded!"
    },
    {
      id: "na-trap-8",
      trap: "Thinking Adenine and Guanine are single-ring pyrimidines.",
      reality: "Adenine and Guanine are double-ring bicyclic PURINES. Cytosine, Thymine, and Uracil are single six-membered ring PYRIMIDINES.",
      neetTip: "Mnemonic: 'CUT the Py' (Cytosine, Uracil, Thymine are Pyrimidines). 'PURe As Gold' (Purines = Adenine & Guanine)."
    },
    {
      id: "na-trap-9",
      trap: "Confusing DNA replication with transcription.",
      reality: "Replication is the process of synthesizing an identical duplicate copy of DNA from a DNA template. Transcription is the synthesis of RNA (mRNA) from a specific DNA sequence template.",
      neetTip: "Translation is the synthesis of a polypeptide protein chain from an mRNA template at the ribosome."
    },
    {
      id: "na-trap-10",
      trap: "Assuming RNA contains no hydrogen bonds because it is single-stranded.",
      reality: "Single-stranded RNA (especially tRNA and rRNA) folds back upon itself to form extensive secondary cloverleaf or hairpin loop structures stabilized by intramolecular base pairing hydrogen bonds (A-U and G-C).",
      neetTip: "tRNA has an anticodon loop and an amino acid acceptor stem held by base-pairing H-bonds."
    },
    {
      id: "na-trap-11",
      trap: "Thinking the pitch of the B-DNA double helix is 2.0 nm.",
      reality: "The pitch of B-DNA is 3.4 nm (34 Å) per complete helical turn, containing 10 base pairs (0.34 nm distance between successive base pairs). The DIAMETER of the helix is 2.0 nm (20 Å).",
      neetTip: "Helical rise per base pair = 0.34 nm (3.4 Å); Pitch = 3.4 nm; Diameter = 2.0 nm."
    },
    {
      id: "na-trap-12",
      trap: "Assuming DNA fingerprinting is based on the coding gene sequences of enzymes.",
      reality: "DNA fingerprinting is based on non-coding Variable Number Tandem Repeats (VNTRs / microsatellites) and restriction fragment length polymorphisms that are unique to every individual (except identical twins).",
      neetTip: "DNA fingerprinting remains unchanged regardless of the cell/tissue sample tested (blood, hair root, skin, semen)."
    },
    {
      id: "na-trap-13",
      trap: "Thinking RNA is more chemically stable than DNA.",
      reality: "RNA is MUCH LESS stable and more reactive than DNA because the free 2′-OH group on ribose acts as an internal nucleophile, making RNA susceptible to alkaline hydrolysis. DNA lacks the 2′-OH.",
      neetTip: "The 2′-H in deoxyribose and the presence of Thymine instead of Uracil impart evolutionary stability to DNA as the genetic material."
    },
    {
      id: "na-trap-14",
      trap: "Confusing mRNA, tRNA, and rRNA functions in protein synthesis.",
      reality: "mRNA (messenger) carries the genetic code from DNA to ribosomes; tRNA (transfer) carries specific activated amino acids to the ribosome via its anticodon; rRNA (ribosomal) forms the structural and catalytic core of ribosomes.",
      neetTip: "rRNA is the most abundant type of RNA in cells (~80% of total cellular RNA)."
    },
    {
      id: "na-trap-15",
      trap: "Assuming the sugar-phosphate backbone is located inside the DNA double helix.",
      reality: "The hydrophilic sugar-phosphate backbone is on the OUTSIDE of the double helix exposed to aqueous cellular fluid, while the hydrophobic nitrogenous bases project INWARD toward the center axis.",
      neetTip: "Base pairs are stacked perpendicular to the helix axis, providing stability via π-π hydrophobic stacking interactions."
    },
    {
      id: "na-trap-16",
      trap: "Thinking ATP is a protein or carbohydrate.",
      reality: "ATP (Adenosine Triphosphate) is a ribonucleotide derivative consisting of Adenine + Ribose + 3 Phosphate groups joined by high-energy phosphoanhydride bonds.",
      neetTip: "ATP is the universal energy currency of living cells."
    },
    {
      id: "na-trap-17",
      trap: "Believing heating DNA causes permanent destruction of primary nucleotide sequence.",
      reality: "Heating double-stranded DNA causes thermal DENATURATION (melting) by breaking hydrogen bonds and unzipping the two strands. Upon slow cooling (annealing), complementary strands spontaneously reform native dsDNA (renaturation). Covalent phosphodiester bonds are NOT broken.",
      neetTip: "Denaturation of DNA is reversible (melting & annealing), forming the basis of PCR (Polymerase Chain Reaction)."
    },
    {
      id: "na-trap-18",
      trap: "Confusing the nitrogen atom involved in the N-glycosidic bond in purines vs pyrimidines.",
      reality: "In nucleosides, the C-1′ of pentose sugar is linked to N-9 of Purines (Adenine, Guanine) and N-1 of Pyrimidines (Cytosine, Thymine, Uracil).",
      neetTip: "Purine linkage = C1′–N9; Pyrimidine linkage = C1′–N1."
    },
    {
      id: "na-trap-19",
      trap: "Thinking Uracil is 5-methyluracil.",
      reality: "THYMINE is 5-methyluracil. Uracil is simply pyrimidine-2,4-dione (lacks the 5-methyl group).",
      neetTip: "Thymine = Uracil + Methyl group at C-5."
    },
    {
      id: "na-trap-20",
      trap: "Assuming genetic code is overlapping and ambiguous.",
      reality: "The genetic code is TRIPLET, NON-OVERLAPPING, COMMA-LESS, UNIVERSAL, and UNAMBIGUOUS (each codon codes for only ONE specific amino acid, though an amino acid can have multiple degenerate codons).",
      neetTip: "AUG is the universal start codon coding for Methionine; UAA, UAG, and UGA are stop codons."
    }
  ],

  // ----------------------------------------------------
  // COMPARISON TABLES
  // ----------------------------------------------------
  glucoseVsFructoseTable: [
    { feature: "Molecular Formula", glucose: "C₆H₁₂O₆ (Molar mass 180 g/mol)", fructose: "C₆H₁₂O₆ (Molar mass 180 g/mol)" },
    { feature: "Classification", glucose: "Aldohexose (Aldehyde at C-1)", fructose: "Ketohexose (Ketone at C-2)" },
    { feature: "Chiral Carbons (Open Chain)", glucose: "4 chiral carbons (C-2, C-3, C-4, C-5) ⟹ 2⁴ = 16 stereoisomers", fructose: "3 chiral carbons (C-3, C-4, C-5) ⟹ 2³ = 8 stereoisomers" },
    { feature: "Natural Optical Rotation", glucose: "Dextrorotatory ([α] = +52.7° at equilibrium) ⟹ 'Dextrose'", fructose: "Laevorotatory ([α] = -92.4° at equilibrium) ⟹ 'Laevulose'" },
    { feature: "Cyclic Ring Form", glucose: "Six-membered Pyranose ring (C1–O–C5 hemiacetal)", fructose: "Five-membered Furanose ring (C2–O–C5 hemiketal)" },
    { feature: "Anomeric Carbon", glucose: "C-1 (C1 has –H and –OH attached)", fructose: "C-2 (C2 has –CH₂OH and –OH attached)" },
    { feature: "Reaction with Br₂ Water", glucose: "Oxidised to Gluconic acid (decolorises Br₂ water)", fructose: "NO reaction (Br₂ water does not oxidise ketoses)" },
    { feature: "Tollens' & Fehling's Test", glucose: "Reduces both (+ve mirror & red Cu₂O ppt)", fructose: "Reduces both (due to enediol rearrangement in alkaline medium)" },
    { feature: "Osazone Formation", glucose: "Forms identical Glucosazone (with 3 mol PhNHNH₂)", fructose: "Forms identical Glucosazone (differs only at C1 and C2)" }
  ],

  starchVsCelluloseTable: [
    { feature: "Primary Biological Role", starch: "Plant energy storage polysaccharide", cellulose: "Plant cell wall structural polysaccharide" },
    { feature: "Monomer Unit", starch: "α-D-Glucopyranose", cellulose: "β-D-Glucopyranose" },
    { feature: "Glycosidic Linkages", starch: "α(1→4) in linear chains, α(1→6) at branch points", cellulose: "Strictly linear β(1→4) glycosidic linkages" },
    { feature: "Components", starch: "Amylose (15–20%, linear) + Amylopectin (80–85%, branched)", cellulose: "Homogeneous single linear unbranched polymer" },
    { feature: "Molecular Shape", starch: "Helical coiled structure", cellulose: "Flat, linear ribbon chains stacked by interchain H-bonds" },
    { feature: "Iodine (I₂) Color Test", starch: "Intense Blue color with Amylose (entraps I₂ in helix)", cellulose: "No color change (no helical cavity)" },
    { feature: "Human Digestibility", starch: "Easily digested by salivary & pancreatic α-amylases", cellulose: "Cannot be digested by humans (lacks cellulase / β-glucosidase)" },
    { feature: "Solubility in Water", starch: "Amylose is water-soluble; Amylopectin forms paste", cellulose: "Completely insoluble in water" }
  ],

  amyloseVsAmylopectinTable: [
    { feature: "Abundance in Starch", amylose: "15–20% of total starch", amylopectin: "80–85% of total starch" },
    { feature: "Water Solubility", amylose: "Water-soluble", amylopectin: "Water-insoluble (swells in hot water to form starch paste)" },
    { feature: "Polymer Architecture", amylose: "Long, unbranched straight chain (200–1000 glucose units)", amylopectin: "Highly branched network (>1000 glucose units)" },
    { feature: "Glycosidic Bonds", amylose: "Exclusively α(1→4) glycosidic bonds", amylopectin: "α(1→4) in main linear chain; α(1→6) at branch points" },
    { feature: "Branching Frequency", amylose: "Zero branching", amylopectin: "Branches every 20–25 glucose residues" },
    { feature: "Iodine (I₂) Reaction", amylose: "Gives deep Blue color (coils tightly around I₂)", amylopectin: "Gives Red-Violet / Purple color" }
  ],

  disaccharidesMasterTable: [
    {
      sugar: "Sucrose (Cane Sugar / Invert Sugar)",
      monomers: "α-D-Glucopyranose + β-D-Fructofuranose",
      linkage: "α(1) ⟷ β(2) Glycosidic Bond (C1 of Glc to C2 of Fru)",
      reducingNature: "NON-REDUCING (No free anomeric -OH)",
      mutarotation: "NO (Anomeric carbons are locked)",
      specialFact: "Hydrolysis inverts optical rotation from +66.5° to -20° ⟹ Invert Sugar"
    },
    {
      sugar: "Maltose (Malt Sugar)",
      monomers: "α-D-Glucopyranose + α-D-Glucopyranose",
      linkage: "α(1 ⟶ 4) Glycosidic Bond (C1 of 1st Glc to C4 of 2nd Glc)",
      reducingNature: "REDUCING (Free C-1 hemiacetal on 2nd ring)",
      mutarotation: "YES (Undergoes mutarotation)",
      specialFact: "Produced during enzymatic digestion of starch by amylase"
    },
    {
      sugar: "Lactose (Milk Sugar)",
      monomers: "β-D-Galactopyranose + β-D-Glucopyranose",
      linkage: "β(1 ⟶ 4) Glycosidic Bond (C1 of Gal to C4 of Glc)",
      reducingNature: "REDUCING (Free C-1 hemiacetal on glucose ring)",
      mutarotation: "YES (Undergoes mutarotation)",
      specialFact: "Galactose is C-4 epimer of glucose; present in mammalian milk (4–6%)"
    }
  ],

  vitaminsMasterTable: [
    {
      vitamin: "Vitamin A (Retinol)",
      solubility: "Fat-soluble",
      sources: "Fish liver oil, carrots, butter, milk, papaya",
      functions: "Component of visual pigment (Rhodopsin) in retina; epithelial maintenance",
      deficiencyDisease: "Night blindness (Nyctalopia), Xerophthalmia (hardening of cornea)"
    },
    {
      vitamin: "Vitamin B₁ (Thiamine)",
      solubility: "Water-soluble",
      sources: "Yeast, whole wheat, unpolished rice, milk, eggs",
      functions: "Coenzyme (TPP) in carbohydrate metabolism and pyruvate decarboxylation",
      deficiencyDisease: "Beriberi (loss of appetite, peripheral neuropathy, muscle wasting)"
    },
    {
      vitamin: "Vitamin B₂ (Riboflavin)",
      solubility: "Water-soluble",
      sources: "Milk, egg white, liver, kidney, green vegetables",
      functions: "Component of FAD and FMN coenzymes in cellular redox reactions",
      deficiencyDisease: "Cheilosis (fissuring at corners of mouth), Glossitis (inflamed tongue), burning eyes"
    },
    {
      vitamin: "Vitamin B₃ (Niacin / Nicotinic acid)",
      solubility: "Water-soluble",
      sources: "Meat, fish, yeast, whole grains, nuts",
      functions: "Component of NAD⁺ and NADP⁺ coenzymes in cellular respiration",
      deficiencyDisease: "Pellagra (4Ds: Dermatitis, Diarrhoea, Dementia, Death)"
    },
    {
      vitamin: "Vitamin B₅ (Pantothenic acid)",
      solubility: "Water-soluble",
      sources: "Yeast, eggs, meat, vegetables",
      functions: "Constituent of Coenzyme A (CoA) in Krebs cycle and fatty acid metabolism",
      deficiencyDisease: "Burning feet syndrome, fatigue, muscle cramps"
    },
    {
      vitamin: "Vitamin B₆ (Pyridoxine)",
      solubility: "Water-soluble",
      sources: "Yeast, milk, egg yolk, cereals, grams",
      functions: "Coenzyme (PLP) in amino acid transamination and decarboxylation",
      deficiencyDisease: "Convulsions in infants, peripheral neuropathy, anaemia"
    },
    {
      vitamin: "Vitamin B₇ / H (Biotin)",
      solubility: "Water-soluble",
      sources: "Yeast, liver, kidney, egg yolk",
      functions: "Coenzyme in carboxylation reactions (CO₂ transfer)",
      deficiencyDisease: "Dermatitis, loss of hair (alopecia), muscular pain"
    },
    {
      vitamin: "Vitamin B₉ (Folic acid / Folate)",
      solubility: "Water-soluble",
      sources: "Green leafy vegetables, yeast, liver, pulses",
      functions: "One-carbon transfer in nucleotide (purine/thymine) synthesis & RBC maturation",
      deficiencyDisease: "Megaloblastic anaemia, neural tube defects in foetus"
    },
    {
      vitamin: "Vitamin B₁₂ (Cyanocobalamin)",
      solubility: "Water-soluble (Stored in liver)",
      sources: "Meat, fish, egg, curd (NOT present in plant foods!)",
      functions: "Contains Cobalt; coenzyme in DNA synthesis and RBC maturation",
      deficiencyDisease: "Pernicious Anaemia (RBC deficiency due to intrinsic factor lack), neurological damage"
    },
    {
      vitamin: "Vitamin C (Ascorbic acid)",
      solubility: "Water-soluble (Excreted in urine)",
      sources: "Citrus fruits (amla, lemon, orange), green peppers, tomatoes",
      functions: "Collagen hydroxylation, antioxidant, immune function, iron absorption",
      deficiencyDisease: "Scurvy (bleeding gums, petechial haemorrhages, delayed wound healing)"
    },
    {
      vitamin: "Vitamin D (Ergocalciferol D₂ / Cholecalciferol D₃)",
      solubility: "Fat-soluble",
      sources: "Sunlight exposure on skin (7-dehydrocholesterol), fish liver oil, milk",
      functions: "Maintains blood calcium and phosphate homeostasis; bone mineralization",
      deficiencyDisease: "Rickets in children (bowed legs, soft bones); Osteomalacia in adults"
    },
    {
      vitamin: "Vitamin E (Tocopherols)",
      solubility: "Fat-soluble",
      sources: "Wheat germ oil, sunflower oil, vegetable oils, nuts, leafy greens",
      functions: "Lipid-soluble antioxidant protecting cell membranes from free radical oxidation",
      deficiencyDisease: "Increased fragility of RBCs (haemolytic anaemia), muscular weakness, antisterility factor"
    },
    {
      vitamin: "Vitamin K (Phylloquinone / Menaquinone)",
      solubility: "Fat-soluble",
      sources: "Green leafy vegetables, synthesized by intestinal gut microbiota",
      functions: "Essential cofactor for γ-carboxylation of prothrombin & blood clotting factors (VII, IX, X)",
      deficiencyDisease: "Increased blood clotting time (haemorrhagic disorders, excessive bleeding)"
    }
  ],

  proteinStructureLevelsTable: [
    {
      level: "1° Primary Structure",
      definition: "Linear sequence of amino acid residues joined by covalent bonds",
      forcesInvolved: "Covalent Peptide Bonds (–CO–NH–)",
      effectOfDenaturation: "REMAINS INTACT (not disrupted by heat/pH)",
      significance: "Determines 3D folding and biological identity; encoded by DNA"
    },
    {
      level: "2° Secondary Structure",
      definition: "Local conformational folding of polypeptide chain into α-helix or β-pleated sheet",
      forcesInvolved: "Hydrogen bonds between >C=O and –NH– of peptide backbone",
      effectOfDenaturation: "COMPLETELY DESTROYED (uncoils to random coil)",
      significance: "α-Helix (Keratin, Myosin) and β-Pleated Sheet (Silk Fibroin)"
    },
    {
      level: "3° Tertiary Structure",
      definition: "Overall 3-dimensional biological conformation (folding of secondary structures)",
      forcesInvolved: "Disulfide bonds (–S–S–), H-bonds, Ionic/salt bridges, Hydrophobic interactions, van der Waals",
      effectOfDenaturation: "COMPLETELY DESTROYED (loss of active sites & biological activity)",
      significance: "Divides proteins into Fibrous (insoluble) and Globular (soluble enzymes/hormones)"
    },
    {
      level: "4° Quaternary Structure",
      definition: "Spatial arrangement of two or more independent polypeptide subunits (protomers)",
      forcesInvolved: "Non-covalent interactions (H-bonds, ionic bonds, hydrophobic forces) between subunits",
      effectOfDenaturation: "COMPLETELY DISSOCIATED into individual inactive subunits",
      significance: "Haemoglobin (tetramer: 2α + 2β chains with 4 heme groups)"
    }
  ],

  dnaVsRnaMasterTable: [
    { feature: "Full Name", dna: "Deoxyribonucleic Acid", rna: "Ribonucleic Acid" },
    { feature: "Pentose Sugar", dna: "β-D-2-Deoxyribose (–H at C-2′)", rna: "β-D-Ribose (–OH at C-2′)" },
    { feature: "Pyrimidines Present", dna: "Cytosine (C) and THYMINE (T)", rna: "Cytosine (C) and URACIL (U)" },
    { feature: "Purines Present", dna: "Adenine (A) and Guanine (G)", rna: "Adenine (A) and Guanine (G)" },
    { feature: "Strand Architecture", dna: "Double-stranded double helix (Watson-Crick), antiparallel", rna: "Single-stranded (can fold locally into hairpin/cloverleaf)" },
    { feature: "Base Pairing Rule", dna: "A = T (2 H-bonds) and G ≡ C (3 H-bonds)", rna: "A = U (2 H-bonds) and G ≡ C (3 H-bonds) in folded regions" },
    { feature: "Chargaff's Rule ([A]=[T], [G]=[C])", dna: "Strictly OBEYED ([A+G] = [T+C])", rna: "DOES NOT OBEY Chargaff's rule (single-stranded)" },
    { feature: "Chemical Stability", dna: "Highly stable (lacks 2′-OH; resistant to alkaline hydrolysis)", rna: "Labile and reactive (2′-OH acts as internal nucleophile)" },
    { feature: "Major Biological Function", dna: "Permanent storage and transmission of genetic information", rna: "Protein synthesis (mRNA, tRNA, rRNA) and gene regulation" },
    { feature: "Location in Eukaryotes", dna: "Nucleus, Mitochondria, Chloroplasts", rna: "Nucleolus, Ribosomes, Cytoplasm" }
  ],

  // ----------------------------------------------------
  // MASTER BIOMOLECULE REVISION MEMORY TABLE
  // ----------------------------------------------------
  masterBiomoleculeMemoryTable: [
    {
      biomolecule: "Carbohydrates",
      buildingBlock: "Monosaccharides (Glucose, Fructose, Galactose)",
      linkage: "Glycosidic Bond (Ether linkage –C–O–C–)",
      majorExamples: "Sucrose, Maltose, Lactose, Starch, Cellulose, Glycogen",
      majorFunction: "Primary cellular fuel (glucose), energy storage (starch/glycogen), structural integrity (cellulose)",
      keyNeetFact: "Sucrose is non-reducing (1→2 linkage); Mutarotation occurs due to dynamic α ⇌ open ⇌ β equilibrium."
    },
    {
      biomolecule: "Amino Acids",
      buildingBlock: "α-Amino Carboxylic Acids (H₂N–CH(R)–COOH)",
      linkage: "Zwitterionic dipolar state at isoelectric point (pI)",
      majorExamples: "20 standard amino acids (10 Essential: Val, Leu, Ile, Lys, Met, Phe, Thr, Trp, His, Arg)",
      majorFunction: "Building blocks of proteins, precursors of neurotransmitters and hormones",
      keyNeetFact: "Glycine is the only achiral amino acid; all natural proteinogenic amino acids have L-configuration."
    },
    {
      biomolecule: "Proteins",
      buildingBlock: "Polypeptide chains of amino acids",
      linkage: "Peptide Bond (Amide linkage –CO–NH– with partial double bond character)",
      majorExamples: "Fibrous (Keratin, Collagen, Myosin); Globular (Albumin, Insulin, Haemoglobin)",
      majorFunction: "Enzymatic biocatalysis, structural support, oxygen transport, antibodies, cellular signaling",
      keyNeetFact: "Denaturation destroys 2° and 3° structures via H-bond breaking, but 1° peptide backbone remains intact."
    },
    {
      biomolecule: "Enzymes",
      buildingBlock: "Globular proteins (often with cofactors / coenzymes)",
      linkage: "Folded active site with precise substrate-binding clefts",
      majorExamples: "Amylase, Pepsin, DNA Polymerase, Lactase, Carbonic Anhydrase",
      majorFunction: "Biological catalysts that accelerate reaction rates by up to 10¹⁴ times by lowering Ea",
      keyNeetFact: "Enzymes are highly substrate-specific; do NOT alter equilibrium constant (Keq) or ΔG°."
    },
    {
      biomolecule: "Vitamins",
      buildingBlock: "Heterogeneous organic micronutrients",
      linkage: "Fat-soluble (A, D, E, K) vs Water-soluble (B-complex, C)",
      majorExamples: "Retinol (A), Thiamine (B₁), Cobalamin (B₁₂ with Co), Ascorbic acid (C), Cholecalciferol (D)",
      majorFunction: "Coenzymes in vital metabolic pathways, visual cycle, antioxidant defense, blood clotting",
      keyNeetFact: "Vitamin C is water-soluble & excreted in urine; Vitamin B₁₂ contains Cobalt and is stored in liver."
    },
    {
      biomolecule: "Nucleic Acids",
      buildingBlock: "Nucleotides (Nitrogenous Base + Pentose Sugar + Phosphate Group)",
      linkage: "3′ ⟶ 5′ Phosphodiester Bond in backbone; N-Glycosidic Bond to base; H-Bonds between bases",
      majorExamples: "DNA (Double-stranded B-form), RNA (mRNA, tRNA, rRNA)",
      majorFunction: "Storage, replication, transcription, and translation of genetic hereditary instructions",
      keyNeetFact: "DNA has A=T (2 H-bonds) and G≡C (3 H-bonds); 2′-deoxyribose lacks 2′-OH, making DNA chemically stable."
    }
  ],

  // ----------------------------------------------------
  // COMMON MISTAKES
  // ----------------------------------------------------
  commonMistakes: [
    {
      id: "mistake-1",
      wrongThinking: "Fructose is a ketose, therefore it cannot reduce Fehling's or Tollens' solution.",
      correctThinking: "Wrong! In alkaline medium (Tollens/Fehling), fructose undergoes Lobry de Bruyn-Alberda van Ekenstein enediol rearrangement into Glucose/Mannose and strongly reduces both reagents."
    },
    {
      id: "mistake-2",
      wrongThinking: "Sucrose is formed by joining two glucose molecules.",
      correctThinking: "Wrong! Sucrose is composed of one α-D-glucose and one β-D-fructose molecule joined by an α(1)→β(2) glycosidic bond."
    },
    {
      id: "mistake-3",
      wrongThinking: "Nucleotide and nucleoside mean the exact same thing.",
      correctThinking: "Wrong! A Nucleoside contains only Base + Sugar. A Nucleotide contains Base + Sugar + Phosphate Group."
    },
    {
      id: "mistake-4",
      wrongThinking: "Protein denaturation cleaves peptide bonds into free amino acids.",
      correctThinking: "Wrong! Denaturation breaks weak non-covalent interactions (H-bonds, hydrophobic bonds), destroying 2° and 3° structures. Peptide bonds (1° structure) remain completely intact."
    },
    {
      id: "mistake-5",
      wrongThinking: "All 20 natural amino acids are optically active.",
      correctThinking: "Wrong! Glycine (H2N-CH2-COOH) has two -H atoms on the α-carbon and is achiral and optically inactive."
    },
    {
      id: "mistake-6",
      wrongThinking: "D-Glucose is dextrorotatory, so D-Fructose must also be dextrorotatory.",
      correctThinking: "Wrong! D/L designates spatial stereochemistry relative to D-glyceraldehyde. Natural D-glucose is dextrorotatory (+52.7°), but natural D-fructose is laevorotatory (-92.4°)."
    },
    {
      id: "mistake-7",
      wrongThinking: "Maltose is non-reducing because both constituent monomers are glucose.",
      correctThinking: "Wrong! The linkage in maltose is α(1→4), leaving the C-1 anomeric hemiacetal of the second glucose unit free to open and reduce reagents."
    },
    {
      id: "mistake-8",
      wrongThinking: "Amylose and Amylopectin both have branched structures.",
      correctThinking: "Wrong! Amylose is strictly linear and unbranched with α(1→4) bonds. Only Amylopectin is branched via α(1→6) bonds."
    },
    {
      id: "mistake-9",
      wrongThinking: "Cellulose can be digested by human stomach acid and pepsin.",
      correctThinking: "Wrong! Humans lack the enzyme cellulase (β-glucosidase) required to hydrolyse the β(1→4) glycosidic bonds of cellulose."
    },
    {
      id: "mistake-10",
      wrongThinking: "At the isoelectric point, an amino acid has no electrical charges.",
      correctThinking: "Wrong! At pI, an amino acid exists as a dipolar Zwitterion with both a +ve charge (-NH3+) and a -ve charge (-COO-), but its NET electrical charge is zero."
    },
    {
      id: "mistake-11",
      wrongThinking: "Vitamin C can be stored in the human liver for several years.",
      correctThinking: "Wrong! Vitamin C is water-soluble and is excreted continuously in urine. It must be supplied daily in the diet. Only Vitamin B12 is stored in the liver."
    },
    {
      id: "mistake-12",
      wrongThinking: "Vitamins A, D, E, and K are water-soluble.",
      correctThinking: "Wrong! Vitamins A, D, E, and K are fat-soluble. Vitamins B-complex and C are water-soluble."
    },
    {
      id: "mistake-13",
      wrongThinking: "DNA and RNA both contain thymine.",
      correctThinking: "Wrong! Thymine is present only in DNA. In RNA, thymine is replaced by Uracil."
    },
    {
      id: "mistake-14",
      wrongThinking: "Adenine pairs with Thymine with 3 hydrogen bonds.",
      correctThinking: "Wrong! A=T base pair has 2 hydrogen bonds; G≡C base pair has 3 hydrogen bonds."
    },
    {
      id: "mistake-15",
      wrongThinking: "Bromine water oxidises glucose to saccharic acid.",
      correctThinking: "Wrong! Bromine water (mild oxidant) oxidises glucose only at C-1 to form Gluconic acid. Nitric acid (HNO3, strong oxidant) is required to form Saccharic acid."
    },
    {
      id: "mistake-16",
      wrongThinking: "Glucose pentaacetate reacts with hydroxylamine (NH2OH) to form an oxime.",
      correctThinking: "Wrong! In glucose pentaacetate, the C-1 anomeric -OH is esterified, preventing ring opening. It does NOT react with NH2OH."
    },
    {
      id: "mistake-17",
      wrongThinking: "Invert sugar is dextrorotatory because sucrose is dextrorotatory.",
      correctThinking: "Wrong! The specific rotation of fructose (-92.4°) exceeds that of glucose (+52.5°), making the equimolar hydrolysed mixture laevorotatory (-20°)."
    },
    {
      id: "mistake-18",
      wrongThinking: "Enzymes shift the equilibrium position of a reaction to favor product formation.",
      correctThinking: "Wrong! Enzymes speed up both forward and reverse reaction rates equally by lowering activation energy; they do not alter Keq or ΔG°."
    },
    {
      id: "mistake-19",
      wrongThinking: "In double-stranded DNA, the ratio of (A+T) to (G+C) is always equal to 1.0.",
      correctThinking: "Wrong! According to Chargaff's rule, [A] = [T] and [G] = [C], so [A+G]/[T+C] = 1.0 (Purines = Pyrimidines). The ratio (A+T)/(G+C) varies widely among species."
    },
    {
      id: "mistake-20",
      wrongThinking: "Keratin in hair is a globular protein because hair can bend.",
      correctThinking: "Wrong! Keratin is a classic FIBROUS protein arranged in insoluble α-helical polypeptide ropes held by disulfide bridges."
    }
  ],

  // ----------------------------------------------------
  // 40 ACTIVE RECALL QUESTIONS & ANSWERS
  // ----------------------------------------------------
  activeRecallQuestions: [
    { q: "What is an aldohexose? Give the primary NCERT example.", a: "A 6-carbon monosaccharide containing an aldehyde (-CHO) functional group at C-1. Primary example: D-(+)-Glucose." },
    { q: "What is a ketohexose? Give the primary NCERT example.", a: "A 6-carbon monosaccharide containing a ketone (>C=O) functional group at C-2. Primary example: D-(-)-Fructose." },
    { q: "How many chiral carbon atoms are present in open-chain D-glucose vs cyclic D-glucopyranose?", a: "Open-chain D-glucose has 4 chiral carbons (C-2, C-3, C-4, C-5). Cyclic D-glucopyranose has 5 chiral carbons (C-1 becomes anomeric chiral center)." },
    { q: "What product is formed when glucose is heated with concentrated HI for a prolonged time?", a: "n-Hexane (CH3-CH2-CH2-CH2-CH2-CH3), confirming a straight chain of 6 carbon atoms." },
    { q: "What is formed when glucose is treated with Bromine water (Br2/H2O)?", a: "Gluconic acid (monocarboxylic acid, oxidised at C-1 only)." },
    { q: "What is formed when glucose is treated with concentrated Nitric Acid (HNO3)?", a: "Saccharic acid / Glucaric acid (dicarboxylic acid, oxidised at both C-1 and C-6)." },
    { q: "Why does glucose pentaacetate fail to react with hydroxylamine (NH2OH)?", a: "Because the anomeric C-1 hydroxyl group is acetylated into an acetate ester, locking the cyclic ring and preventing opening to the free -CHO form." },
    { q: "Define anomers with reference to glucose.", a: "Anomers are cyclic diastereomers that differ in stereochemical configuration ONLY at the hemiacetal carbon (C-1 in glucose: α-form has -OH down, β-form has -OH up)." },
    { q: "What is mutarotation?", a: "The spontaneous change in specific optical rotation of an optically active sugar solution until a dynamic equilibrium between α, open-chain, and β forms is reached (e.g., Glucose +112° / +19° ⟶ +52.7°)." },
    { q: "Why is fructose a reducing sugar despite containing a ketonic group?", a: "In alkaline medium (Tollens/Fehling reagents), fructose undergoes Lobry de Bruyn-Alberda van Ekenstein enediol rearrangement into aldoses (glucose and mannose)." },
    { q: "Which disaccharide is non-reducing among Sucrose, Maltose, and Lactose?", a: "Sucrose is strictly non-reducing because both anomeric carbons (C-1 of glucose and C-2 of fructose) are tied in the glycosidic bond." },
    { q: "What are the monomer units and glycosidic linkage in Maltose?", a: "Two α-D-glucopyranose units joined by an α(1 ⟶ 4) glycosidic linkage." },
    { q: "What are the monomer units and glycosidic linkage in Lactose?", a: "β-D-galactopyranose and β-D-glucopyranose joined by a β(1 ⟶ 4) glycosidic linkage." },
    { q: "Why is the hydrolysed mixture of sucrose called 'Invert Sugar'?", a: "Because sucrose is dextrorotatory (+66.5°), but upon hydrolysis produces D-(+)-glucose (+52.5°) and D-(-)-fructose (-92.4°), inverting the net rotation to laevorotatory (-20°)." },
    { q: "Distinguish Amylose from Amylopectin in terms of structure and water solubility.", a: "Amylose is water-soluble, linear with α(1→4) bonds; Amylopectin is water-insoluble, branched with α(1→4) main chains and α(1→6) branch points." },
    { q: "Why cannot humans digest cellulose?", a: "Humans lack the enzyme cellulase (β-glucosidase) required to cleave the β(1→4) glycosidic linkages of cellulose." },
    { q: "Which polysaccharide is known as 'animal starch' and where is it stored?", a: "Glycogen; stored in the liver and muscle tissues of animals." },
    { q: "What is the only achiral (optically inactive) standard amino acid?", a: "Glycine (H2N-CH2-COOH, R = H)." },
    { q: "What is a Zwitterion?", a: "A dipolar neutral ion formed by internal proton transfer from -COOH to -NH2, carrying both +H3N- and -COO- with a net charge of zero." },
    { q: "How does an amino acid migrate in electrophoresis at pH < pI (acidic medium)?", a: "It exists as a cation (+H3N-CH(R)-COOH) and migrates toward the negative cathode." },
    { q: "List any five essential amino acids for humans.", a: "Valine, Leucine, Isoleucine, Lysine, Methionine (also Phenylalanine, Threonine, Tryptophan, Histidine, Arginine)." },
    { q: "Describe the chemical nature of a peptide bond.", a: "A covalent amide linkage (–CO–NH–) formed by condensation of –COOH of one amino acid with –NH2 of another, possessing ~40% partial double bond character." },
    { q: "What forces stabilize the α-helix secondary structure of proteins?", a: "Intramolecular hydrogen bonding between the >C=O of amino acid residue 'n' and the –NH– of residue 'n+4'." },
    { q: "Name one fibrous protein and one globular protein.", a: "Fibrous: Keratin (hair) / Collagen; Globular: Albumin (egg white) / Insulin / Haemoglobin." },
    { q: "What structural levels of a protein are destroyed during denaturation, and which remains intact?", a: "Secondary, tertiary, and quaternary structures are destroyed; the Primary structure (covalent peptide sequence) remains intact." },
    { q: "Give two everyday examples of protein denaturation.", a: "1. Coagulation of egg white on boiling. 2. Curdling of milk by lactic acid bacteria." },
    { q: "How do enzymes affect the activation energy and equilibrium constant of a reaction?", a: "Enzymes lower the activation energy (Ea), increasing reaction rate; they do NOT alter the equilibrium constant (Keq) or ΔG°." },
    { q: "Classify Vitamins A, B, C, D, E, and K into fat-soluble and water-soluble.", a: "Fat-soluble: A, D, E, K. Water-soluble: B-complex vitamins and Vitamin C." },
    { q: "Which water-soluble vitamin is stored in significant amounts in the human liver?", a: "Vitamin B12 (Cyanocobalamin)." },
    { q: "Which metal ion is present in Vitamin B12?", a: "Cobalt (Co)." },
    { q: "Deficiency of which vitamin causes Scurvy? What are its symptoms?", a: "Vitamin C (Ascorbic acid); symptoms include bleeding gums, loose teeth, and delayed wound healing." },
    { q: "Deficiency of which vitamin causes Rickets in children and Osteomalacia in adults?", a: "Vitamin D (Calciferol)." },
    { q: "Deficiency of which vitamin causes prolonged blood clotting time?", a: "Vitamin K." },
    { q: "What are the two structural components of a nucleoside?", a: "A nitrogenous base + a pentose sugar (ribose or 2-deoxyribose)." },
    { q: "What are the three structural components of a nucleotide?", a: "A nitrogenous base + a pentose sugar + a phosphate group." },
    { q: "Which nitrogenous bases are Purines and which are Pyrimidines?", a: "Purines (2 rings): Adenine (A) and Guanine (G). Pyrimidines (1 ring): Cytosine (C), Thymine (T), Uracil (U)." },
    { q: "Which base is present in DNA but absent in RNA?", a: "Thymine (T) is present in DNA; replaced by Uracil (U) in RNA." },
    { q: "How many hydrogen bonds exist between A-T and G-C base pairs in DNA?", a: "A=T base pair has 2 hydrogen bonds; G≡C base pair has 3 hydrogen bonds." },
    { q: "What is the chemical name of the bond linking adjacent nucleotides in a nucleic acid chain?", a: "3′ ⟶ 5′ Phosphodiester bond." },
    { q: "State Chargaff's rule for double-stranded DNA.", a: "In dsDNA, molar ratio of Adenine equals Thymine ([A] = [T]) and Guanine equals Cytosine ([G] = [C]); total purines equal total pyrimidines ([A+G] = [T+C])." }
  ],

  // ----------------------------------------------------
  // ONE-PAGE LAST-MINUTE REVISION SHEET
  // ----------------------------------------------------
  lastMinuteRevisionSheet: {
    title: "⚡ BIOMOLECULES — LAST-MINUTE NEET REVISION SHEET",
    carbohydrates: [
      "Glucose = Aldohexose, C₆H₁₂O₆ | 4 chiral carbons in open chain (2⁴=16 isomers), 5 in cyclic pyranose.",
      "Glucose Reactions: + HI (heat) ⟶ n-Hexane; + NH₂OH ⟶ Oxime; + HCN ⟶ Cyanohydrin; + Br₂/H₂O ⟶ Gluconic acid; + conc. HNO₃ ⟶ Saccharic acid; + 5 Ac₂O ⟶ Pentaacetate.",
      "Glucose pentaacetate does NOT react with NH₂OH (proves cyclic hemiacetal structure).",
      "Mutarotation: α-D-Glucopyranose (+112°) ⇌ Open chain (0.02%) ⇌ β-D-Glucopyranose (+19°) ⟹ Equilibrium [α] = +52.7°.",
      "Fructose = Ketohexose, C₆H₁₂O₆ | C-2 is anomeric carbon, forms 5-membered Furanose ring, natural [α] = -92.4° (Laevulose).",
      "Fructose reduces Tollens & Fehling due to enediol rearrangement in alkaline medium.",
      "Sucrose = α-D-Glc (C1) + β-D-Fru (C2) | NON-REDUCING, no mutarotation, Invert Sugar (+66.5° ⟶ -20°).",
      "Maltose = α-D-Glc (C1) + α-D-Glc (C4) | REDUCING sugar, α(1→4) bond, undergoes mutarotation.",
      "Lactose = β-D-Gal (C1) + β-D-Glc (C4) | REDUCING sugar, β(1→4) bond, Gal is C4-epimer of Glc.",
      "Starch: Amylose (15–20%, linear α(1→4), water-soluble, blue with I₂) + Amylopectin (80–85%, branched α(1→4) + α(1→6), water-insoluble).",
      "Cellulose: Linear unbranched β(1→4) glucan; rigid H-bonded microfibrils; humans cannot digest (no cellulase).",
      "Glycogen: Animal storage polysaccharide in liver/muscle; highly branched (branch every 8–12 units)."
    ],
    proteins: [
      "Amino Acid: H₂N–CH(R)–COOH | 20 natural, all L-series; Glycine is the ONLY achiral amino acid.",
      "Zwitterion: ⁺H₃N–CH(R)–COO⁻ (dipolar, net charge = 0 at isoelectric point pI). At pH < pI ⟶ Cation (migrates to cathode); at pH > pI ⟶ Anion (migrates to anode).",
      "10 Essential Amino Acids: Val, Leu, Ile, Lys, Met, Phe, Thr, Trp, His, Arg (PVT TIM HaLL).",
      "Peptide Bond: –CO–NH– amide linkage with ~40% partial double bond character (planar & rigid).",
      "1° Structure = Covalent amino acid sequence (intact in denaturation).",
      "2° Structure = α-Helix (intramolecular H-bonds) & β-Pleated Sheet (intermolecular H-bonds).",
      "3° Structure = Overall 3D fold (Fibrous = insoluble Keratin/Collagen; Globular = soluble Albumin/Insulin/Enzymes).",
      "4° Structure = Spatial arrangement of multiple subunits (Haemoglobin = 2α + 2β).",
      "Denaturation: Physical/chemical stress unfolds 2°, 3°, 4° structures with loss of activity; 1° structure remains intact (Egg boiling, milk curdling).",
      "Enzymes: Substrate-specific globular protein catalysts; lower Ea, do NOT change Keq or ΔG°."
    ],
    vitamins: [
      "Fat-Soluble: A, D, E, K | Stored in liver & adipose tissue.",
      "Water-Soluble: B-complex, C | Excreted in urine (must be supplied regularly; B₁₂ is stored in liver).",
      "Vit A (Retinol) ⟶ Night blindness, Xerophthalmia.",
      "Vit B₁ (Thiamine) ⟶ Beriberi.",
      "Vit B₂ (Riboflavin) ⟶ Cheilosis, Glossitis.",
      "Vit B₃ (Niacin) ⟶ Pellagra (4Ds).",
      "Vit B₁₂ (Cyanocobalamin, contains Cobalt) ⟶ Pernicious Anaemia.",
      "Vit C (Ascorbic acid) ⟶ Scurvy (bleeding gums).",
      "Vit D (Calciferol) ⟶ Rickets (children), Osteomalacia (adults).",
      "Vit E (Tocopherol) ⟶ Increased RBC fragility, antisterility factor.",
      "Vit K (Phylloquinone) ⟶ Prolonged blood clotting time."
    ],
    nucleicAcids: [
      "Nucleoside = Base + Pentose Sugar (N-glycosidic bond at C-1′).",
      "Nucleotide = Base + Pentose Sugar + Phosphate Group (esterified at C-5′).",
      "Purines (2 rings) = Adenine (A), Guanine (G).",
      "Pyrimidines (1 ring) = Cytosine (C), Thymine (T, DNA only), Uracil (U, RNA only).",
      "Sugar: DNA = β-D-2-Deoxyribose (–H at C-2′); RNA = β-D-Ribose (–OH at C-2′).",
      "Phosphodiester Bond = 3′ ⟶ 5′ linkage forming sugar-phosphate backbone.",
      "DNA Double Helix: Antiparallel (5′→3′ & 3′→5′), Pitch = 3.4 nm (10 bp/turn), Diameter = 2.0 nm.",
      "Base Pairing: A = T (2 H-bonds), G ≡ C (3 H-bonds).",
      "Chargaff's Rule: In dsDNA, [A] = [T], [G] = [C], [A+G] = [T+C] (Purines = Pyrimidines)."
    ]
  },

  // ----------------------------------------------------
  // FINAL NEET CHECKLIST
  // ----------------------------------------------------
  finalNeetChecklist: [
    "Classify carbohydrates into monosaccharides, oligosaccharides, and polysaccharides",
    "Distinguish aldoses and ketoses with open-chain Fischer structures",
    "State the chemical reactions proving the open-chain structure of D-glucose (HI, NH2OH, HCN, Br2/H2O, HNO3, Ac2O)",
    "Explain why glucose pentaacetate does not form an oxime with NH2OH",
    "Identify the anomeric carbon in glucose (C-1) and fructose (C-2)",
    "Draw and differentiate α-D-glucopyranose and β-D-glucopyranose Haworth projections",
    "Explain the mechanism and equilibrium specific rotation of Mutarotation (+52.7°)",
    "Explain why fructose acts as a reducing sugar in alkaline medium (enediol rearrangement)",
    "Identify reducing vs non-reducing sugars based on free anomeric hemiacetal carbons",
    "Recall the monomers and glycosidic linkage of Sucrose (α-1 ⟷ β-2, non-reducing, Invert sugar)",
    "Recall the monomers and glycosidic linkage of Maltose (α-1 ⟶ 4, reducing)",
    "Recall the monomers and glycosidic linkage of Lactose (β-1 ⟶ 4, reducing)",
    "Compare Amylose (linear α-1,4) vs Amylopectin (branched α-1,4 + α-1,6) in starch",
    "Explain the structural difference between starch and cellulose and why humans cannot digest cellulose",
    "Draw the general structure of α-amino acids and explain why Glycine is achiral",
    "Describe the Zwitterionic dipolar form of amino acids and their amphoteric behaviour",
    "Predict the electrophoretic migration of amino acids at pH < pI and pH > pI",
    "List the 10 essential amino acids required in the human diet",
    "Explain the formation, planarity, and partial double bond character of the peptide bond (–CO–NH–)",
    "Differentiate primary, secondary (α-helix, β-sheet), tertiary, and quaternary protein structures",
    "Explain the mechanism of protein denaturation and why primary structure remains intact",
    "Explain enzyme action, substrate specificity, and effect on activation energy (Ea) vs Keq",
    "Classify vitamins into fat-soluble (A, D, E, K) and water-soluble (B-complex, C)",
    "Memorize the major deficiency diseases for vitamins A, B1, B2, B3, B12, C, D, E, and K",
    "Distinguish nucleosides (base + sugar) from nucleotides (base + sugar + phosphate)",
    "Classify nitrogenous bases into Purines (A, G) and Pyrimidines (C, T, U)",
    "Compare DNA (2-deoxyribose, thymine, double-stranded) and RNA (ribose, uracil, single-stranded)",
    "State Watson-Crick base pairing: A=T (2 H-bonds) and G≡C (3 H-bonds)",
    "Describe the 3′ ⟶ 5′ phosphodiester linkage in nucleic acid backbones",
    "Apply Chargaff's rule ([A]=[T], [G]=[C], [Purines]=[Pyrimidines]) to solve dsDNA base composition numericals"
  ]
};
