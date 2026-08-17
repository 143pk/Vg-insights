import { DetailedTopicContent } from '../../types/neet';
import { ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersDiagrams';
import { ALCOHOLS_PHENOLS_ETHERS_CONCEPTS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersTermsAndConcepts';
import { ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersTrapsAndTables';
import { ALCOHOLS_PHENOLS_ETHERS_PYQS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersPyqs';
import { ALCOHOLS_PHENOLS_ETHERS_PRACTICE } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersPracticeSets';

export const chemAlcoholsPropertiesDetails: DetailedTopicContent = {
  topicId: "chem-alcohols-properties",
  topicName: "Alcohols — Structure, Preparation, Properties & Reactions",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Alcohols, Phenols and Ethers",

  whatIsThisTopic: "Comprehensive study of aliphatic alcohols: classification (1°, 2°, 3°), IUPAC nomenclature, preparation methods (acid-catalysed hydration, hydroboration-oxidation, Grignard addition, carbonyl reduction), physical properties (hydrogen bonding, boiling point, solubility), Lucas test, Victor Meyer test, oxidation, dehydration, and catalytic dehydrogenation over heated Cu.",

  basicIdea: [
    "Alcohols contain a hydroxyl (–OH) functional group bonded to an sp³-hybridized saturated carbon atom (General Formula: CₙH₂ₙ₊₁OH).",
    "Hydroboration-oxidation (B₂H₆ / alkaline H₂O₂) converts alkenes to primary alcohols via syn-addition with overall Anti-Markovnikov orientation and NO carbocation rearrangement.",
    "Acid-catalysed hydration of alkenes follows Markovnikov's rule, generating carbocations prone to 1,2-hydride or 1,2-methyl shifts.",
    "Grignard reagents (RMgX) add to Formaldehyde → 1° Alcohols, other Aldehydes → 2° Alcohols, and Ketones → 3° Alcohols upon subsequent acidic hydrolysis.",
    "Lucas Test (conc. HCl + anh. ZnCl₂) distinguishes alcohols by carbocation stability: 3° (instant turbidity) > 2° (~5 min) > 1° (no turbidity at room temp). Benzylic and allylic alcohols give immediate turbidity.",
    "Victor Meyer Test gives Blood RED (1° alcohol / nitrolic acid salt), Intense BLUE (2° alcohol / pseudonitrol), and COLOURLESS (3° alcohol / no reaction with HNO₂).",
    "PCC in CH₂Cl₂ selectively oxidizes 1° alcohols to aldehydes, while hot acidified KMnO₄ oxidizes them directly to carboxylic acids.",
    "Vapour-phase dehydrogenation over hot Cu at 573 K yields aldehydes (from 1°), ketones (from 2°), and alkenes (via dehydration from 3°)."
  ],

  importantTerms: ALCOHOLS_PHENOLS_ETHERS_CONCEPTS.alcoholsTerms,

  conceptExplanation: [
    {
      heading: "1. Structure, Classification & IUPAC Nomenclature of Alcohols",
      paragraphs: [
        "Alcohols are organic hydroxy derivatives where the hydroxyl group (–OH) is directly bonded to an aliphatic carbon atom. In aliphatic alcohols, the oxygen atom is sp³-hybridized with a bent C–O–H bond angle (~108.9° in methanol, slightly less than the tetrahedral angle 109.5° due to lone pair-lone pair repulsion on oxygen).",
        "Classification by Degree of Hydroxyl Attachment:",
        "1. Primary (1°) Alcohol: The –OH group is attached to a primary carbon bonded to only one other carbon (R–CH₂–OH), possessing 2 α-hydrogens (e.g., Ethanol, Propan-1-ol).",
        "2. Secondary (2°) Alcohol: The –OH group is attached to a secondary carbon bonded to two other carbons (R₂CH–OH), possessing 1 α-hydrogen (e.g., Propan-2-ol, Butan-2-ol).",
        "3. Tertiary (3°) Alcohol: The –OH group is attached to a tertiary carbon bonded to three other carbons (R₃C–OH), possessing 0 α-hydrogens (e.g., 2-Methylpropan-2-ol / tert-butanol).",
        "Classification by Number of Hydroxyl Groups: Monohydric (1 –OH, e.g., C₂H₅OH), Dihydric/Glycols (2 –OH, e.g., Ethane-1,2-diol), Trihydric (3 –OH, e.g., Propane-1,2,3-triol / Glycerol), and Polyhydric alcohols.",
        "Allylic and Benzylic Alcohols: Allylic alcohols [–C=C–C(OH)–] and Benzylic alcohols [C₆H₅–CH₂OH] have –OH on an sp³ carbon adjacent to a double bond or aromatic ring. While classified as 1°/2°/3° by carbon degree, they generate resonance-stabilized carbocations that exhibit exceptional reactivity in nucleophilic substitution and Lucas testing."
      ],
      visual: {
        type: 'svg',
        svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.alcoholPreparationMechanisms,
        caption: "Preparation Pathways for Alcohols: Acid Hydration vs Hydroboration-Oxidation vs Grignard Addition Matrix.",
        guide: "Compare Markovnikov addition with carbocation intermediate versus Anti-Markovnikov addition via syn-stereospecific four-center cyclic transition state."
      },
      importantPoints: [
        "In IUPAC nomenclature, the longest continuous carbon chain containing the –OH group is chosen as parent; numbering starts from the end nearer to the –OH group (suffix: -ol).",
        "Cyclic alcohols use the prefix 'cyclo-' with the ring carbon bonded to –OH assigned position C-1.",
        "Benzyl alcohol (C₆H₅CH₂OH) is an ALIPHATIC alcohol; it is NOT a phenol!"
      ]
    },
    {
      heading: "2. Master Preparation Methods: Hydration, Hydroboration & Grignard Additions",
      paragraphs: [
        "1. Acid-Catalysed Hydration of Alkenes: Alkenes react with water in the presence of an acid catalyst (conc. H₂SO₄) to form alcohols according to Markovnikov's rule. Step 1 involves electrophilic addition of H₃O⁺ to generate a planar carbocation intermediate (rate-determining step). Step 2 is nucleophilic attack of H₂O on the carbocation. Step 3 is deprotonation to yield the alcohol. Since carbocation intermediates are formed, rearrangements (1,2-hydride or 1,2-methyl shifts) readily occur to form more stable 3° carbocations.",
        "2. Hydroboration-Oxidation (B₂H₆ / H₂O₂, OH⁻): Discovered by H.C. Brown. Alkenes react with diborane [(BH₃)₂] in THF solvent to form trialkylboranes [(RCH₂CH₂)₃B], which are oxidized by alkaline hydrogen peroxide to yield 1° alcohols in 100% Anti-Markovnikov regioselectivity. The addition of BH₃ across the double bond is concerted, syn-stereospecific (H and B add to the same face), and involves a cyclic four-membered transition state with NO carbocation rearrangement!",
        "3. Reduction of Carbonyl Compounds:",
        "• Aldehydes reduced by NaBH₄ in ethanol or LiAlH₄ in dry ether yield Primary (1°) Alcohols (RCHO → RCH₂OH).",
        "• Ketones reduced by NaBH₄ or catalytic hydrogenation (H₂/Ni) yield Secondary (2°) Alcohols (RCOR' → RCH(OH)R').",
        "• Carboxylic acids and Esters are reduced quantitatively to Primary Alcohols using powerful Lithium Aluminium Hydride (LiAlH₄). Catalytic hydrogenation of esters (RCOOR' + 2 H₂ xrightarrow{catalyst} RCH₂OH + R'OH) is used commercially.",
        "4. Grignard Reagent (R–MgX) Carbonyl Addition Synthesis:",
        "• Formaldehyde (HCHO) + RMgX xrightarrow{H₃O⁺} Primary (1°) Alcohol (R–CH₂OH) [Ascent of carbon series by R group].",
        "• Any Other Aldehyde (R'CHO) + RMgX xrightarrow{H₃O⁺} Secondary (2°) Alcohol [R'–CH(OH)–R].",
        "• Ketones (R'COR'') + RMgX xrightarrow{H₃O⁺} Tertiary (3°) Alcohol [R'R''C(OH)–R]."
      ],
      tables: [
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.oxidationReagentsComparison
      ],
      importantPoints: [
        "Hydroboration-oxidation adds H and OH to the alkene double bond in Anti-Markovnikov orientation with Syn addition.",
        "NaBH₄ reduces aldehydes and ketones selectively; it CANNOT reduce carboxylic acids, esters, or amides.",
        "Grignard reaction with formaldehyde always yields a primary alcohol."
      ]
    },
    {
      heading: "3. Distinction Tests: Lucas Test, Victor Meyer Test & Cu Dehydrogenation",
      paragraphs: [
        "1. Lucas Test (Conc. HCl + Anhydrous ZnCl₂):",
        "Based on the conversion of soluble alcohols into insoluble alkyl chlorides (R–Cl) which appear as milky turbidity. Anhydrous ZnCl₂ acts as a Lewis acid coordinator to weaken the C–O bond. Mechanism follows S_N1 through carbocation formation:",
        "• 3° Alcohols: Form exceptionally stable tertiary carbocations; turbidity appears IMMEDIATELY (within seconds) at room temperature.",
        "• 2° Alcohols: Form secondary carbocations; turbidity appears in ~5 MINUTES at room temperature.",
        "• 1° Alcohols: Primary carbocations are too unstable to form; NO TURBIDITY is produced at room temperature (turbidity appears only upon prolonged heating).",
        "• Allylic and Benzylic Alcohols: Produce immediate turbidity due to resonance stabilization of allylic/benzylic carbocations.",
        "2. Victor Meyer Test (R-B-W Test Sequence):",
        "Four-step sequential reaction: (1) ROH + P/I₂ → RI; (2) RI + AgNO₂ → RNO₂ (Nitroalkane); (3) RNO₂ + HNO₂ (Nitrous acid); (4) Alkalinization with excess aqueous NaOH.",
        "• 1° Alcohol: R–CH₂NO₂ has 2 α-H; reacts with HNO₂ to form Nitrolic acid [R–C(=NOH)NO₂], which dissolves in NaOH to produce an intense BLOOD RED sodium salt.",
        "• 2° Alcohol: R₂CHNO₂ has 1 α-H; reacts with HNO₂ to form Pseudonitrol [R₂C(NO)NO₂], which is insoluble in alkali and retains an intense BLUE colour.",
        "• 3° Alcohol: R₃C–NO₂ has 0 α-H; does not react with HNO₂ and the solution remains COLOURLESS / WHITE upon adding NaOH.",
        "3. Catalytic Dehydrogenation over Heated Copper (Cu at 573 K / 300°C):",
        "• Primary Alcohols undergo catalytic dehydrogenation (loss of H₂) to give Aldehydes: RCH₂OH xrightarrow{Cu, 573 K} RCHO + H₂↑.",
        "• Secondary Alcohols undergo catalytic dehydrogenation to give Ketones: R₂CHOH xrightarrow{Cu, 573 K} R₂C=O + H₂↑.",
        "• Tertiary Alcohols have NO α-hydrogens and cannot lose H₂; instead, they undergo catalytic DEHYDRATION (loss of H₂O) to give Alkenes: (CH₃)₃COH xrightarrow{Cu, 573 K} CH₂=C(CH₃)₂ (2-Methylpropene) + H₂O."
      ],
      visual: {
        type: 'svg',
        svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.lucasAndVictorMeyerDistinction,
        caption: "Master Distinction Tests for 1°, 2°, 3° Alcohols: Lucas Reagent & Victor Meyer Test.",
        guide: "Observe the time elapsed for cloudiness in Lucas test vs the characteristic R-B-W colorimetric response in Victor Meyer test."
      },
      tables: [
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.primarySecondaryTertiaryAlcohols,
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.lucasVsVictorMeyer
      ],
      importantPoints: [
        "Mnemonic for Victor Meyer test: R – B – W (1° Red, 2° Blue, 3° White/Colourless).",
        "Cu at 573 K converts 3° alcohol to ALKENE (not a ketone!).",
        "Lucas reagent speed is governed by Carbocation Stability."
      ]
    },
    {
      heading: "4. Dehydration & Selective Oxidation Pathways",
      paragraphs: [
        "1. Acid-Catalysed Dehydration of Alcohols to Alkenes:",
        "Alcohols undergo β-elimination (loss of H₂O) when heated with concentrated protic acids (H₂SO₄, H₃PO₄) or heated alumina (Al₂O₃ at 623 K).",
        "• Ease of Dehydration Order: Tertiary (3°) > Secondary (2°) > Primary (1°).",
        "• 3° Alcohols dehydrate in mild 20% H₂SO₄ at 358 K.",
        "• 2° Alcohols dehydrate in 85% H₃PO₄ at 440 K.",
        "• 1° Alcohols require harsh conc. H₂SO₄ at 443 K.",
        "• Mechanism: (i) Rapid reversible protonation of –OH to form oxonium ion; (ii) Slow heterolytic loss of water forming carbocation intermediate (Rate-determining step); (iii) Loss of β-proton to give alkene following Saytzeff's Rule (the more substituted, more stable alkene is the major product). Carbocation rearrangements (pinacol-type, hydride/methyl shifts) frequently yield unexpected rearranged alkenes.",
        "2. Selective Oxidation of Alcohols:",
        "• PCC (Pyridinium Chlorochromate in CH₂Cl₂): Converts 1° alcohols to aldehydes and 2° alcohols to ketones without affecting carbon-carbon double bonds.",
        "• Collin's Reagent (CrO₃·2Py in CH₂Cl₂) & Jones Reagent (CrO₃ / H₂SO₄ / aq. Acetone): Collin's yields aldehydes from 1° alcohols; Jones oxidizes 1° alcohols directly to carboxylic acids.",
        "• Acidified KMnO₄ or K₂Cr₂O₇: Aggressive oxidants converting 1° alcohols directly to carboxylic acids with the same number of carbon atoms. 2° alcohols oxidize to ketones. 3° alcohols resist oxidation under neutral/alkaline conditions; prolonged heating with acidic oxidants cleaves C–C bonds to give a mixture of carboxylic acids containing fewer carbon atoms."
      ],
      importantPoints: [
        "Saytzeff Rule: In dehydration, the alkene with the greater number of alkyl substituents on the double bond is the major product.",
        "PCC halts 1° alcohol oxidation strictly at the aldehyde stage.",
        "Ethanol at 413 K with conc. H₂SO₄ gives Diethyl ether; at 443 K it gives Ethene."
      ]
    }
  ],

  formulae: [
    {
      title: "Lucas Reagent Composition",
      formula: "\\text{Lucas Reagent} = \\text{Concentrated HCl} + \\text{Anhydrous ZnCl}_2",
      meaning: "Reagent used to distinguish 1°, 2°, 3° alcohols based on carbocation stability.",
      symbols: "HCl (conc.), ZnCl_2 (anhydrous Lewis acid catalyst)",
      unit: "Equimolar molar ratio"
    },
    {
      title: "Hydroboration-Oxidation Net Stoichiometry",
      formula: "6\\text{ R–CH=CH}_2 + \\text{B}_2\\text{H}_6 \\rightarrow 2(\\text{RCH}_2\\text{CH}_2)_3\\text{B} \\xrightarrow{3\\text{ H}_2\\text{O}_2 / \\text{OH}^-} 6\\text{ R–CH}_2\\text{CH}_2\\text{OH} + 2\\text{ H}_3\\text{BO}_3",
      meaning: "Net Anti-Markovnikov syn-addition of water across an alkene double bond.",
      symbols: "R = alkyl group, H_3BO_3 = boric acid byproduct"
    },
    {
      title: "Grignard Addition to Carbonyls",
      formula: "\\text{HCHO} + \\text{RMgX} \\rightarrow 1^\\circ\\text{ ROH}; \\quad \\text{R'CHO} + \\text{RMgX} \\rightarrow 2^\\circ\\text{ ROH}; \\quad \\text{R'COR''} + \\text{RMgX} \\rightarrow 3^\\circ\\text{ ROH}",
      meaning: "Nucleophilic addition of carbanion to carbonyl carbon followed by acidic hydrolysis."
    },
    {
      title: "Cu Dehydrogenation & Dehydration at 573 K",
      formula: "1^\\circ\\text{ ROH} \\xrightarrow{\\text{Cu, 573 K}} \\text{RCHO} + \\text{H}_2\\uparrow; \\quad 2^\\circ\\text{ ROH} \\xrightarrow{\\text{Cu, 573 K}} \\text{R}_2\\text{C=O} + \\text{H}_2\\uparrow; \\quad 3^\\circ\\text{ ROH} \\xrightarrow{\\text{Cu, 573 K}} \\text{Alkene} + \\text{H}_2\\text{O}",
      meaning: "Gas-phase distinction of 1°, 2°, 3° alcohols over metallic copper."
    }
  ],

  visualLearning: {
    type: 'svg',
    caption: "Synthesis, Distinction & Reactivity Hub for Aliphatic Alcohols.",
    svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.alcoholPreparationMechanisms
  },

  neetImportantPoints: [
    "Acid-catalysed hydration of alkenes follows Markovnikov's rule with carbocation intermediate (rearrangements occur).",
    "Hydroboration-oxidation gives Anti-Markovnikov syn-addition of H₂O without any carbocation rearrangement.",
    "Lucas test turbidity rate: 3° (instant) > 2° (~5 min) > 1° (no turbidity at room temp). Benzylic and allylic alcohols give instant turbidity.",
    "Victor Meyer test colors: 1° = Blood Red, 2° = Intense Blue, 3° = Colourless (R-B-W mnemonic).",
    "PCC in CH₂Cl₂ oxidizes 1° alcohols to aldehydes selectively; acidified KMnO₄ oxidizes 1° alcohols to carboxylic acids.",
    "Cu at 573 K oxidizes 1° to aldehyde and 2° to ketone, but DEHYDRATES 3° alcohol to an ALKENE.",
    "Ethanol + conc. H₂SO₄ at 413 K yields Diethyl ether; at 443 K it yields Ethene.",
    "Grignard reagent + Formaldehyde = 1° Alcohol; + Other Aldehydes = 2° Alcohol; + Ketones = 3° Alcohol."
  ],

  commonConfusions: [
    {
      commonConfusion: "Confusing the products of Hydroboration-Oxidation and Acid-Catalysed Hydration for unsymmetrical alkenes.",
      correctFact: "Acid hydration gives Markovnikov alcohol (Propan-2-ol from propene), while Hydroboration-Oxidation gives Anti-Markovnikov primary alcohol (Propan-1-ol from propene).",
      whyItMattersForNEET: "Consistently tested in NEET synthesis-based multiple choice questions."
    },
    {
      commonConfusion: "Assuming 3° alcohols produce ketones over heated Copper at 573 K.",
      correctFact: "3° alcohols have NO α-hydrogens to undergo dehydrogenation; they undergo catalytic DEHYDRATION to form an ALKENE (e.g., tert-butanol gives 2-methylpropene).",
      whyItMattersForNEET: "Extremely high-frequency NEET trap."
    },
    {
      commonConfusion: "Believing Benzyl alcohol (C₆H₅CH₂OH) gives a violet colour with neutral FeCl₃ or behaves like Phenol.",
      correctFact: "Benzyl alcohol is an aliphatic alcohol (–OH is on sp³ carbon). It does NOT give a violet colour with FeCl₃ and does NOT dissolve in aqueous NaOH.",
      whyItMattersForNEET: "Frequently used as a distractor in organic functional group distinction questions."
    }
  ],

  quickRevision: [
    "Alkene + B₂H₆/H₂O₂,OH⁻ → 1° Alcohol (Anti-Markovnikov, Syn, No rearrangement)",
    "Alkene + H₂O/H⁺ → 2°/3° Alcohol (Markovnikov, Carbocation intermediate)",
    "Lucas Test: 3° instant, 2° in 5 min, 1° no turbidity at room temp",
    "Victor Meyer Test: 1° Red, 2° Blue, 3° White/Colourless (R-B-W)",
    "PCC / CH₂Cl₂: 1° ROH → Aldehyde (stops at CHO); 2° ROH → Ketone",
    "Cu at 573 K: 1° → Aldehyde, 2° → Ketone, 3° → Alkene (Dehydration!)",
    "Grignard: HCHO → 1° ROH; RCHO → 2° ROH; RCOR → 3° ROH"
  ],

  pyqs: ALCOHOLS_PHENOLS_ETHERS_PYQS.alcohols,
  practiceQuestions: ALCOHOLS_PHENOLS_ETHERS_PRACTICE.topic1Alcohols
};
