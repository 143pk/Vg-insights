import { DetailedTopicContent } from '../../types/neet';
import { ALDEHYDES_KETONES_DIAGRAMS } from '../aldehydesKetones/aldehydesKetonesDiagrams';
import { ALDEHYDES_KETONES_CONCEPTS } from '../aldehydesKetones/aldehydesKetonesTermsAndConcepts';
import { ALDEHYDES_KETONES_PYQS } from '../aldehydesKetones/aldehydesKetonesPyqs';
import { ALDEHYDES_KETONES_PRACTICE } from '../aldehydesKetones/aldehydesKetonesPracticeSets';

export const chemCarbonylAdditionDetails: DetailedTopicContent = {
  topicId: "chem-carbonyl-addition",
  topicName: "Aldehydes & Ketones — Structure, Preparation & Nucleophilic Addition",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Aldehydes, Ketones and Carboxylic Acids",

  whatIsThisTopic: "Fundamental carbonyl chemistry: sp² planar hybridization, C=O dipole polarity, comprehensive IUPAC/common nomenclature, high-yield preparation methods (Rosenmund, Stephen, Etard, Gattermann-Koch, Ozonolysis, Kucherov hydration), and nucleophilic addition mechanisms (HCN, NaHSO₃, alcohols/acetals, ammonia derivatives, and Grignard reagents).",

  basicIdea: [
    "The carbonyl carbon is sp² hybridized, planar (120°), and strongly polarized (Cδ+ and Oδ-) with dipole moment μ ≈ 2.3–2.8 D due to oxygen's electronegativity.",
    "Nucleophiles attack the electrophilic carbonyl carbon along the ~107° Bürgi-Dunitz trajectory, converting the sp² planar geometry into an sp³ tetrahedral alkoxide intermediate.",
    "Reactivity toward nucleophilic addition follows: Formaldehyde (HCHO) > Aliphatic Aldehydes (RCHO) > Aromatic Aldehydes (ArCHO) > Ketones (RCOR') > Aromatic Ketones (ArCOR) due to steric hindrance and +I / +R electronic donation.",
    "Ammonia derivatives (H₂N–Z) undergo nucleophilic addition-elimination at pH 4.5 to form crystalline derivatives: Oximes, Hydrazones, 2,4-DNP hydrazones (Brady's test: orange-yellow ppt), and Semicarbazones (only hydrazine –NH₂ reacts).",
    "Grignard reagents (RMgX) convert Formaldehyde to 1° alcohols, other aldehydes to 2° alcohols, and ketones to 3° alcohols upon acidic hydrolysis."
  ],

  importantTerms: ALDEHYDES_KETONES_CONCEPTS.carbonylTerms,

  conceptExplanation: [
    {
      heading: "1. Carbonyl Group Structure, Electronic Polarity & Molecular Orbital Geometry",
      paragraphs: [
        "The carbonyl functional group (>C=O) consists of a carbon atom doubly bonded to an oxygen atom. The carbon is sp² hybridized and forms three coplanar σ-bonds at approximately 120° angles. The remaining unhybridized 2p orbital on carbon overlaps sideways with a 2p orbital on oxygen to form a π-bond.",
        "Because oxygen is significantly more electronegative than carbon (Pauling scale: 3.44 vs 2.55), the π-electron cloud is strongly shifted toward oxygen. This creates a permanent dipole moment (μ ≈ 2.3–2.8 D), rendering the carbonyl carbon strongly electrophilic (Cδ+) and the carbonyl oxygen nucleophilic and basic (Oδ-).",
        "Resonance description: The neutral canonical form [>C=O] is in resonance with the dipolar form [>C⁺–O⁻]. The substantial contribution of the dipolar form gives the carbonyl carbon significant carbocation character, making it the prime target for attack by electron-rich nucleophiles."
      ],
      visual: {
        type: 'svg',
        svgContent: ALDEHYDES_KETONES_DIAGRAMS.carbonylPolarityAndNucleophilicAddition,
        caption: "Figure 21.1: Carbonyl group electronic polarity, resonance forms, Bürgi-Dunitz trajectory (~107°), and nucleophilic addition mechanism.",
        guide: "Observe the shift from sp² trigonal planar to sp³ tetrahedral intermediate during the slow rate-determining nucleophilic attack."
      },
      importantPoints: [
        "Carbonyl carbon is an electrophilic center (Lewis acid site); carbonyl oxygen is a nucleophilic center (Lewis base site).",
        "The Bürgi-Dunitz angle of approach (~107°) maximizes overlap with the π* antibonding orbital while minimizing lone-pair repulsion from oxygen."
      ]
    },
    {
      heading: "2. Systematic IUPAC & Common Nomenclature of Carbonyl Compounds",
      paragraphs: [
        "In IUPAC nomenclature, aliphatic aldehydes are named by replacing the terminal '-e' of the parent alkane with '-al' (e.g., methanal, ethanal, propanal). The –CHO carbon is ALWAYS assigned position 1 in the parent chain.",
        "Ketones are named by replacing '-e' with '-one', with numbering indicating the carbonyl position from the end closer to the >C=O group (e.g., propan-2-one, pentan-2-one, pentan-3-one).",
        "Cyclic aldehydes where –CHO is directly attached to a ring use the suffix 'carbaldehyde' (e.g., cyclohexanecarbaldehyde, cyclopentanecarbaldehyde). Aromatic ketones include acetophenone (1-phenylethan-1-one) and benzophenone (diphenylmethanone)."
      ],
      tables: [
        {
          title: "IUPAC & Common Names of Key NEET Carbonyl Compounds",
          headers: ["Structure", "IUPAC Name", "Common / Trivial Name", "High-Yield NEET Observation"],
          rows: [
            ["HCHO", "Methanal", "Formaldehyde (40% aq = Formalin)", "Gas at room temp; preservative for biological specimens; zero α-H."],
            ["CH₃CHO", "Ethanal", "Acetaldehyde", "Volatile liquid (bp 20°C); gives positive iodoform, aldol, and Tollens' test."],
            ["(CH₃)₂CH–CHO", "2-Methylpropanal", "Isobutyraldehyde", "Branched aliphatic aldehyde with 1 α-hydrogen."],
            ["CH₃–CO–CH₃", "Propan-2-one", "Acetone / Dimethyl ketone", "Simplest ketone; volatile solvent; gives positive iodoform test."],
            ["CH₃–CO–CH₂CH₂CH₃", "Pentan-2-one", "Methyl propyl ketone", "Methyl ketone; gives positive yellow CHI₃ precipitate."],
            ["CH₃CH₂–CO–CH₂CH₃", "Pentan-3-one", "Diethyl ketone", "Symmetrical ketone; gives NEGATIVE iodoform test."],
            ["C₆H₅–CHO", "Benzaldehyde", "Oil of bitter almonds", "Aromatic aldehyde; reduces Tollens' but FAILS Fehling's test!"],
            ["C₆H₅–CO–CH₃", "1-Phenylethan-1-one", "Acetophenone", "Aromatic methyl ketone; gives positive iodoform test."],
            ["C₆H₅–CO–C₆H₅", "Diphenylmethanone", "Benzophenone", "Symmetrical aromatic ketone; gives negative iodoform and Fehling's."]
          ]
        }
      ]
    },
    {
      heading: "3. Comprehensive Preparation Methods of Aldehydes & Ketones",
      paragraphs: [
        "1. Oxidation of Alcohols: Primary alcohols are oxidised to aldehydes using Pyridinium Chlorochromate (PCC / CH₂Cl₂) or Collin's reagent in anhydrous media to prevent over-oxidation to carboxylic acids. Secondary alcohols are oxidised to ketones by CrO₃ (Jones reagent) or acidified K₂Cr₂O₇.",
        "2. Catalytic Dehydrogenation over Heated Copper (Cu at 573 K): Vapour of 1° alcohol gives aldehyde + H₂↑; 2° alcohol gives ketone + H₂↑; 3° alcohol undergoes dehydration (loss of H₂O) to give alkene.",
        "3. Reductive Ozonolysis of Alkenes: Ozonolysis [O₃ followed by Zn / H₂O] cleaves >C=C< bonds. Terminal =CH₂ gives HCHO; =CHR gives RCHO; =CR₂ gives ketones. Zinc dust is essential to destroy H₂O₂ and prevent aldehyde oxidation.",
        "4. Hydration of Alkynes (Kucherov Reaction): Alkynes add water in the presence of 40% H₂SO₄ and 1% HgSO₄ at 333 K. Ethyne gives Ethanal (only alkyne giving aldehyde); all higher alkynes give Methyl Ketones according to Markovnikov's rule.",
        "5. Rosenmund Reduction: Hydrogenation of acyl chlorides (RCOCl) over Pd–BaSO₄ poisoned with sulfur/quinoline in boiling xylene yields aldehydes.",
        "6. Stephen Reduction: Nitriles (R–CN) are reduced by SnCl₂ + conc. HCl to aldimine hydrochloride [RCH=NH·HCl], which on steam hydrolysis yields aldehydes. (Alternatively, DIBAL-H at -78°C reduces esters and nitriles to aldehydes).",
        "7. Etard Reaction: Toluene treated with chromyl chloride (CrO₂Cl₂) in CS₂ forms a brown chromium complex [C₆H₅CH(OCrOHCl₂)₂], hydrolysed to benzaldehyde.",
        "8. Gattermann-Koch Formylation: Benzene treated with CO + HCl in the presence of anhydrous AlCl₃/CuCl gives benzaldehyde."
      ],
      importantPoints: [
        "Ethyne + Hg²⁺/H₂SO₄ ⟶ Ethanal; Propyne + Hg²⁺/H₂SO₄ ⟶ Acetone.",
        "Rosenmund catalyst is poisoned to halt reduction at the aldehyde stage.",
        "DIBAL-H selectively reduces esters (RCOOR') and nitriles (RCN) to aldehydes at -78°C without reducing C=C bonds."
      ]
    },
    {
      heading: "4. Physical Properties & Hydrogen Bonding Comparison",
      paragraphs: [
        "Boiling Points: Carbonyl compounds possess polar C=O dipole-dipole interactions. Their boiling points are substantially higher than non-polar hydrocarbons and ethers of comparable molecular mass, but lower than alcohols and carboxylic acids because aldehydes/ketones cannot form intermolecular hydrogen bonds with themselves.",
        "Comparison of compounds of molecular mass ~58–60: Butane (bp 272 K) < Methoxyethane (bp 281 K) < Propanal (bp 322 K) < Acetone (bp 329 K) < Propan-1-ol (bp 370 K) < Ethanoic acid (bp 391 K).",
        "Water Solubility: Lower aldehydes and ketones (formaldehyde, acetaldehyde, acetone) are completely miscible with water in all proportions because the carbonyl oxygen forms strong intermolecular hydrogen bonds with water molecules (–C=O···H–O–H). Solubility drops sharply as the hydrophobic non-polar alkyl chain length exceeds 4 carbons."
      ]
    },
    {
      heading: "5. Nucleophilic Addition Reactions: General Mechanism & Substrate Reactivity",
      paragraphs: [
        "The general mechanism of nucleophilic addition consists of two distinct steps:",
        "Step 1 (Slow, Rate-Determining Step): The nucleophile (Nu⁻) attacks the electrophilic carbonyl carbon along the Bürgi-Dunitz trajectory (~107°). The π-electron pair shifts completely onto oxygen, converting the planar sp² carbon into an sp³ tetrahedral alkoxide intermediate.",
        "Step 2 (Fast): The tetrahedral alkoxide captures a proton (H⁺) from the solvent/medium to yield the neutral addition product.",
        "Reactivity Order: HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅CHO > C₆H₅COCH₃.",
        "Governing Factors: (1) Steric Effect: Bulky alkyl groups crowd the tetrahedral transition state. (2) Inductive (+I) Effect: Alkyl groups donate electron density, diminishing the δ+ charge on the carbonyl carbon."
      ]
    },
    {
      heading: "6. Addition of HCN, NaHSO₃, Alcohols (Acetals/Ketals) & Ammonia Derivatives",
      paragraphs: [
        "1. Addition of HCN (Cyanohydrins): HCN + OH⁻ (pH 9–10) generates :CN⁻. Attack on >C=O yields cyanohydrin [>C(OH)CN]. Acid hydrolysis of cyanohydrin yields α-hydroxy acids [>C(OH)COOH]; reduction with LiAlH₄ produces β-amino alcohols.",
        "2. Addition of NaHSO₃: Saturated aqueous sodium bisulfite reacts with aldehydes and methyl ketones to form crystalline, water-soluble bisulfite addition compounds [>C(OH)SO₃⁻Na⁺]. Useful for separation and purification because treating with dilute acid/alkali regenerates the pure carbonyl.",
        "3. Addition of Alcohols (Hemiacetals & Acetals): Aldehydes react with 1 eq of alcohol in dry HCl gas to form an unstable Hemiacetal [RCH(OH)OR'], which reacts with a 2nd eq to produce a stable gem-dialkoxy Acetal [RCH(OR')₂]. Ketones react with 1,2-diols (ethylene glycol) to form cyclic ethylene ketals.",
        "4. Nucleophilic Addition-Elimination of Ammonia Derivatives (H₂N–Z): Carried out at controlled pH 4.5. The carbinolamine intermediate dehydrates to give >C=N–Z derivatives: Hydroxylamine ⟶ Oximes; Hydrazine ⟶ Hydrazones; Phenylhydrazine ⟶ Phenylhydrazones; 2,4-DNP (Brady's reagent) ⟶ 2,4-DNP hydrazone (yellow/orange ppt); Semicarbazide ⟶ Semicarbazones (only hydrazine –NH₂ reacts)."
      ],
      visual: {
        type: 'svg',
        svgContent: ALDEHYDES_KETONES_DIAGRAMS.ammoniaDerivativesAdditionMechanism,
        caption: "Figure 21.2: Step-by-step addition-elimination mechanism of ammonia derivatives and derivative identification chart.",
        guide: "Note the specific participation of the hydrazine nitrogen in semicarbazide due to resonance deactivation of the amide nitrogen."
      }
    },
    {
      heading: "7. Grignard Reagent Reactions with Carbonyl Compounds",
      paragraphs: [
        "Grignard reagents (RMgX, where R acts as a nucleophilic carbanion R:⁻) undergo nucleophilic addition across the carbonyl group:",
        "1. Formaldehyde (HCHO) + RMgX ⟶ Primary Alcohol (R–CH₂–OH).",
        "2. Any other Aldehyde (R'CHO) + RMgX ⟶ Secondary Alcohol [R'–CH(OH)–R].",
        "3. Ketones (R'–CO–R'') + RMgX ⟶ Tertiary Alcohol [R'–C(OH)(R)–R''].",
        "4. Carbon Dioxide (O=C=O) + RMgX ⟶ Carboxylic Acid (R–COOH).",
        "The reaction is carried out in anhydrous ether to prevent protonolysis of the Grignard reagent, followed by aqueous acidic workup."
      ]
    }
  ],

  formulae: [
    {
      title: "Nucleophilic Addition Reactivity Order",
      formula: "HCHO > RCHO > ArCHO > RCOR > ArCOR",
      meaning: "Formaldehyde > Aliphatic Aldehydes > Aromatic Aldehydes > Ketones > Aromatic Ketones",
      whenToUse: "Determining rate and equilibrium conversion in nucleophilic addition reactions."
    },
    {
      title: "Rosenmund Aldehyde Synthesis",
      formula: "R-COCl + H_2 xrightarrow{Pd-BaSO_4 / S, \\Delta} R-CHO + HCl",
      meaning: "Selective reduction of acyl chloride to aldehyde without over-reduction to alcohol.",
      whenToUse: "Synthesis of aliphatic or aromatic aldehydes from acid chlorides."
    },
    {
      title: "Cyanohydrin Formation",
      formula: ">C=O + HCN xrightarrow{OH^- (pH 9-10)} >C(OH)CN",
      meaning: "Base-catalysed addition of cyanide ion to carbonyl compounds.",
      whenToUse: "Synthesis of α-hydroxy acids via acid hydrolysis of cyanohydrin."
    },
    {
      title: "Grignard Addition Matrix",
      formula: "HCHO xrightarrow{RMgX / H_3O^+} 1^\\circ\\text{ ROH}; \\quad R'CHO xrightarrow{RMgX / H_3O^+} 2^\\circ\\text{ ROH}; \\quad R'COR'' xrightarrow{RMgX / H_3O^+} 3^\\circ\\text{ ROH}",
      meaning: "Carbon-carbon bond formation yielding 1°, 2°, or 3° alcohols from carbonyls.",
      whenToUse: "Predicting alcohol products in multi-step organic synthesis."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: ALDEHYDES_KETONES_DIAGRAMS.carbonylPolarityAndNucleophilicAddition,
    caption: "Master visual diagram: Carbonyl polarity, Bürgi-Dunitz angle (~107°), and nucleophilic addition pathways."
  },

  neetImportantPoints: [
    "Reactivity in nucleophilic addition: Formaldehyde (HCHO) is always the most reactive because it has zero +I alkyl groups and minimal steric crowding.",
    "Rosenmund reduction: Catalyst is Pd supported on BaSO₄ and poisoned with sulfur or quinoline to prevent over-reduction to alcohol. Formaldehyde cannot be prepared this way as formyl chloride is unstable.",
    "Stephen reduction: Nitriles (RCN) are reduced by SnCl₂ + conc. HCl to aldimine [RCH=NH·HCl], which upon steam hydrolysis yields aldehydes (RCHO).",
    "Etard reaction: Toluene treated with chromyl chloride (CrO₂Cl₂ / CS₂) forms a brown chromium complex, giving benzaldehyde upon hydrolysis.",
    "Gattermann-Koch reaction: Benzene + CO + HCl in the presence of anhydrous AlCl₃/CuCl gives benzaldehyde.",
    "Kucherov alkyne hydration: Ethyne + Hg²⁺/H₂SO₄ gives Ethanal; all other terminal and internal alkynes give Ketones.",
    "2,4-DNP (Brady's test): Universal test for aldehydes and ketones, producing an intense orange-yellow crystalline precipitate.",
    "Semicarbazide (H₂N–NH–CO–NH₂): Only the hydrazine –NH₂ reacts because the amide –NH₂ lone pair is delocalised into the C=O group by resonance!",
    "Acetals and Ketals: Stable in aqueous alkaline base, but rapidly hydrolyze in dilute aqueous acid to regenerate the parent carbonyl compound."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming that both –NH₂ groups in semicarbazide (H₂N–NH–CO–NH₂) can react with aldehydes and ketones.",
      correctFact: "Only the hydrazine –NH₂ group is nucleophilic. The amide –NH₂ has its lone pair conjugated with the carbonyl group [–CO–NH₂ ⟷ –C(O⁻)=N⁺H₂], making it completely non-nucleophilic.",
      whyItMattersForNEET: "Frequently tested in NEET; product is always >C=N–NH–CO–NH₂, never >C=N–CO–NH–NH₂."
    },
    {
      commonConfusion: "Thinking that addition of HCN can be carried out in strongly acidic medium without a base catalyst.",
      correctFact: "Pure HCN is a very weak acid (Ka ≈ 4.9 × 10⁻¹⁰) and produces negligible :CN⁻ ions. A catalytic amount of base (OH⁻, pH 9-10) is essential to generate the active nucleophile :CN⁻.",
      whyItMattersForNEET: "Examiners test the role of OH⁻ catalyst in cyanohydrin formation."
    },
    {
      commonConfusion: "Confusing the products of Grignard reaction with formaldehyde vs other aldehydes vs ketones.",
      correctFact: "HCHO gives 1° alcohol; RCHO (other aldehydes) gives 2° alcohol; RCOR' (ketones) gives 3° alcohol; CO₂ gives carboxylic acid.",
      whyItMattersForNEET: "Core foundation for reaction sequence and structure elucidation MCQs."
    }
  ],

  quickRevision: [
    "Carbonyl carbon = sp² planar (120°), C is δ+ (electrophilic), O is δ- (nucleophilic); dipole moment μ ≈ 2.3–2.8 D.",
    "Nu addition reactivity: HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅CHO > C₆H₅COCH₃.",
    "Rosenmund: RCOCl + H₂ xrightarrow{Pd-BaSO₄, quinoline} RCHO.",
    "Stephen: RCN + SnCl₂/HCl ⟶ Aldimine xrightarrow{H₃O⁺} RCHO.",
    "Etard: Toluene + CrO₂Cl₂/CS₂ ⟶ Brown complex xrightarrow{H₃O⁺} Benzaldehyde.",
    "Gattermann-Koch: Benzene + CO + HCl xrightarrow{anh. AlCl₃/CuCl} Benzaldehyde.",
    "Kucherov: CH≡CH + Hg²⁺/H₂SO₄ ⟶ CH₃CHO; CH₃C≡CH ⟶ CH₃COCH₃.",
    "Ammonia derivatives (pH 4.5): NH₂OH ⟶ Oxime; NH₂NH₂ ⟶ Hydrazone; 2,4-DNP ⟶ 2,4-DNP hydrazone (Orange-yellow ppt); Semicarbazide ⟶ Semicarbazone (only 1 N reacts).",
    "Grignard (RMgX / H₃O⁺): HCHO ⟶ 1° ROH; RCHO ⟶ 2° ROH; RCOR ⟶ 3° ROH; CO₂ ⟶ RCOOH."
  ],

  practiceQuestions: ALDEHYDES_KETONES_PRACTICE.topic1Practice,
  pyqs: ALDEHYDES_KETONES_PYQS.topic1
};
