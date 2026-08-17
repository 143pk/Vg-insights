import { DetailedTopicContent } from '../../types/neet';
import { ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersDiagrams';
import { ALCOHOLS_PHENOLS_ETHERS_CONCEPTS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersTermsAndConcepts';
import { ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersTrapsAndTables';
import { ALCOHOLS_PHENOLS_ETHERS_PYQS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersPyqs';
import { ALCOHOLS_PHENOLS_ETHERS_PRACTICE } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersPracticeSets';

export const chemEthersWilliamsonDetails: DetailedTopicContent = {
  topicId: "chem-ethers-williamson",
  topicName: "Ethers — Preparation, Reactions & Cleavage",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Alcohols, Phenols and Ethers",

  whatIsThisTopic: "Complete coverage of dialkyl, alkyl aryl, and diaryl ethers (R–O–R'): structure, C–O–C bond angle (111.7°), preparation by intermolecular dehydration of alcohols vs Williamson Ether Synthesis (S_N2 mechanism and substrate limitations), physical properties (dipole moments, boiling points, solubility), acidic cleavage mechanisms by HI/HBr (S_N2 for 1°/2° vs S_N1 for 3°/benzylic ethers), selective cleavage of Anisole (C₆H₅OCH₃) to Phenol and Methyl iodide, electrophilic substitutions of anisole (bromination, nitration, Friedel-Crafts), and ether peroxide hazards.",

  basicIdea: [
    "Ethers have a bent C–O–C geometry with a bond angle of ~111.7° in dimethyl ether (larger than 109.5° due to steric repulsion between bulky alkyl groups).",
    "Williamson Ether Synthesis follows an S_N2 mechanism: R–O⁻Na⁺ + R'–X → R–O–R' + NaX. The alkyl halide (R'–X) MUST be primary (1°) or methyl.",
    "If a tertiary (3°) alkyl halide is used with alkoxide in Williamson synthesis, E2 elimination occurs exclusively to form an ALKENE.",
    "Acidic cleavage with 1 equivalent of HI at 373 K: Primary/secondary ethers cleave via S_N2, where I⁻ attacks the smaller alkyl group to yield smaller alkyl iodide + larger alcohol.",
    "Tertiary alkyl ethers cleave via S_N1 with HI: stable 3° carbocation forms first and reacts with I⁻ to give 3° alkyl iodide + methanol.",
    "Anisole (C₆H₅OCH₃) with HI gives Phenol and Methyl iodide (the sp² C_aryl–O bond is strengthened by resonance and cannot be attacked).",
    "Excess concentrated HI converts all alkyl ether fragments into alkyl iodides (R–O–R' + 2 HI → R–I + R'–I + H₂O).",
    "The methoxy group (–OCH₃) in anisole activates the aromatic ring and directs incoming electrophiles to ortho and para positions.",
    "Ethers exposed to atmospheric oxygen and light slowly form explosive organic peroxides (detected by FeSO₄ + KCNS blood-red test)."
  ],

  importantTerms: ALCOHOLS_PHENOLS_ETHERS_CONCEPTS.ethersTerms,

  conceptExplanation: [
    {
      heading: "1. Structure, Nomenclature & Synthesis of Ethers",
      paragraphs: [
        "Ethers are organic compounds where an oxygen atom is linked to two alkyl or aryl groups (R–O–R' or Ar–O–R). In dimethyl ether (CH₃–O–CH₃), the oxygen atom is sp³-hybridized with two bonding pairs and two non-bonding lone pairs. The C–O–C bond angle is 111.7°, which is noticeably larger than the normal tetrahedral angle (109.5°) and water bond angle (104.5°) due to the significant steric repulsive forces between the two bulky methyl groups.",
        "Nomenclature: In IUPAC system, ethers are named as 'Alkoxyalkanes'. The larger alkyl group is chosen as the parent alkane chain, while the smaller alkyl group along with the oxygen is treated as an alkoxy substituent (e.g., C₂H₅OCH₃ is 1-Methoxyethane; C₆H₅OCH₃ is Methoxybenzene / Anisole).",
        "Synthesis of Ethers:",
        "1. Intermolecular Dehydration of Alcohols: Heating primary alcohols (e.g., Ethanol) with concentrated H₂SO₄ at 413 K (140°C) produces symmetrical ethers (Diethyl ether). Mechanism involves S_N2 nucleophilic attack by unprotonated alcohol on protonated ethyl oxonium ion. Limitations: Only suitable for symmetrical ethers of primary alcohols. Secondary and tertiary alcohols undergo intramolecular elimination (E1/E2) to form alkenes.",
        "2. Williamson Ether Synthesis: The most versatile laboratory route for both symmetrical and unsymmetrical ethers. Discovered by Alexander Williamson in 1850. Involves the nucleophilic substitution (S_N2) of an alkyl halide by sodium or potassium alkoxide or phenoxide: R–O⁻ Na⁺ + R'–X → R–O–R' + NaX."
      ],
      visual: {
        type: 'svg',
        svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.williamsonSynthesisAndEtherCleavage,
        caption: "Williamson Ether Synthesis (S_N2) & Cleavage Mechanism by HI.",
        guide: "Examine the requirement of 1° alkyl halide in Williamson synthesis and contrast S_N2 vs S_N1 pathways during HI cleavage."
      },
      tables: [
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.williamsonVsDehydration
      ],
      importantPoints: [
        "C–O–C bond angle in dimethyl ether is 111.7° due to steric repulsion between alkyl groups.",
        "Williamson synthesis follows an S_N2 mechanism with backside attack on alkyl halide.",
        "Ethanol + conc. H₂SO₄ gives Diethyl ether at 413 K, but Ethene at 443 K."
      ]
    },
    {
      heading: "2. The Williamson Synthesis Substrate Rule & Elimination Competition",
      paragraphs: [
        "In Williamson ether synthesis, alkoxide ions (RO⁻) are not only powerful nucleophiles but also strong Brønsted bases.",
        "The Fundamental Substrate Rule: The alkyl halide (R'–X) MUST be PRIMARY (1°) or METHYL.",
        "Case 1 (Successful Synthesis of Mixed 3°/1° Ether): To prepare tert-Butyl methyl ether [(CH₃)₃C–O–CH₃], use Sodium tert-butoxide (3° alkoxide) + Methyl bromide (1° halide):",
        "(CH₃)₃C–O⁻ Na⁺ + CH₃–Br xrightarrow{S_N2} (CH₃)₃C–O–CH₃ + NaBr (100% Ether Yield).",
        "Even though the alkoxide is sterically bulky, methyl bromide is completely unhindered, allowing smooth S_N2 backside displacement.",
        "Case 2 (The Fatal Elimination Trap): If the roles are reversed and Sodium methoxide (CH₃ONa) is reacted with tert-Butyl bromide [(CH₃)₃C–Br], backside S_N2 attack is physically blocked by the three methyl groups. The strongly basic methoxide abstracts a β-proton, undergoing 100% E2 elimination to yield 2-Methylpropene (Isobutylene) and Methanol:",
        "CH₃O⁻ Na⁺ + (CH₃)₃C–Br xrightarrow{E2} CH₂=C(CH₃)₂ + CH₃OH + NaBr (0% Ether!).",
        "Aromatic Ethers: Phenols can be converted to alkyl aryl ethers (e.g., Anisole) by treating sodium phenoxide with alkyl halides (C₆H₅O⁻Na⁺ + CH₃I → C₆H₅OCH₃). However, aryl halides (C₆H₅Cl) CANNOT be used because the sp² C–Cl bond is unreactive toward S_N2 displacement."
      ],
      importantPoints: [
        "Sodium tert-butoxide + Methyl bromide = tert-Butyl methyl ether (Substitution, S_N2).",
        "Sodium methoxide + tert-Butyl bromide = 2-Methylpropene (Elimination, E2).",
        "Aryl halides cannot be used as substrates in Williamson synthesis."
      ]
    },
    {
      heading: "3. Acidic Cleavage of Ethers by Hydrogen Halides (HI / HBr)",
      paragraphs: [
        "Ethers are relatively unreactive toward bases, oxidizing agents, and active metals. However, the C–O ether linkage is cleaved by heating with concentrated hydriodic acid (HI) or hydrobromic acid (HBr) at 373 K.",
        "Step 1 (Protonation): The ether oxygen donates a lone pair to H⁺ to form a dialkyl oxonium ion intermediate [R–O⁺(H)–R'].",
        "Mechanistic Bifurcation in Step 2:",
        "• Case A (Primary & Secondary Dialkyl Ethers — S_N2 Cleavage): When both alkyl groups are primary or secondary, iodide ion (I⁻) executes an S_N2 backside attack on the LESS HINDERED (smaller) alkyl carbon. For example: CH₃–O–CH₂CH₃ + HI → CH₃–I (Methyl iodide) + CH₃CH₂–OH (Ethanol).",
        "• Case B (Ethers containing a Tertiary Alkyl Group — S_N1 Cleavage): If one of the alkyl groups is tertiary (e.g., tert-butyl methyl ether), the protonated oxonium ion undergoes spontaneous heterolytic cleavage via an S_N1 pathway to generate a stable tertiary carbocation [(CH₃)₃C⁺] and methanol. Iodide ion then attacks the 3° carbocation: (CH₃)₃C–O–CH₃ + HI → (CH₃)₃C–I (tert-Butyl iodide) + CH₃–OH (Methanol).",
        "• Case C (Alkyl Aryl Ethers — Anisole Cleavage): In anisole (C₆H₅OCH₃), the oxygen is protonated to form methylphenyl oxonium ion [C₆H₅–O⁺(H)–CH₃]. The bond between oxygen and the phenyl ring (C_aryl–O) possesses partial double bond character due to resonance (+R) and is much stronger than the alkyl C(sp³)–O bond. Iodide attacks the methyl group via S_N2, yielding Phenol (C₆H₅OH) and Methyl iodide (CH₃I). Phenol is NEVER converted to iodobenzene.",
        "• Case D (Excess HI): If excess concentrated HI is heated with an ether, the alcohol formed in the first step reacts with the second equivalent of HI, converting both alkyl fragments into alkyl iodides: R–O–R' + 2 HI (excess) xrightarrow{Δ} R–I + R'–I + H₂O."
      ],
      tables: [
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.etherCleavageMechanisms
      ],
      importantPoints: [
        "1°/2° ether + HI → Smaller Alkyl Iodide + Larger Alcohol (S_N2).",
        "3° ether + HI → 3° Alkyl Iodide + Methanol (S_N1).",
        "Anisole + HI → Phenol + Methyl Iodide (Aryl C–O never breaks).",
        "Excess HI → 2 Alkyl Iodides + H₂O."
      ]
    },
    {
      heading: "4. Electrophilic Aromatic Substitution of Anisole & Ether Peroxides",
      paragraphs: [
        "1. Electrophilic Substitution of Anisole (Methoxybenzene, C₆H₅OCH₃):",
        "The methoxy group (–OCH₃) is an activating and ortho/para-directing group due to the +R resonance effect (+R > -I), which increases electron density at ortho and para positions.",
        "• Halogenation (Bromination): Anisole reacts with bromine in ethanoic acid (CH₃COOH) without requiring a Lewis acid catalyst (FeBr₃) to give 4-Bromoanisole (p-bromoanisole, Major ~90%) and 2-Bromoanisole (o-bromoanisole, Minor ~10%).",
        "• Nitration: Anisole reacts with a mixture of concentrated HNO₃ and concentrated H₂SO₄ to yield 4-Nitroanisole (para, Major) and 2-Nitroanisole (ortho, Minor).",
        "• Friedel-Crafts Alkylation: Anisole + CH₃Cl in the presence of anhydrous AlCl₃ yields 4-Methoxytoluene (para, Major) and 2-Methoxytoluene (ortho, Minor).",
        "• Friedel-Crafts Acylation: Anisole + CH₃COCl in the presence of anhydrous AlCl₃ yields 4-Methoxyacetophenone (para, Major) and 2-Methoxyacetophenone (ortho, Minor).",
        "2. Auto-Oxidation & Ether Peroxide Hazards:",
        "When ethers (especially diethyl ether and diisopropyl ether) are stored in contact with atmospheric oxygen in the presence of light, they slowly undergo free-radical auto-oxidation at the α-carbon to form explosive organic peroxides and hydroperoxides [CH₃CH(OOH)–O–C₂H₅]. Distilling old ether can concentrate these non-volatile peroxides and cause catastrophic laboratory explosions.",
        "Detection and Removal of Peroxides: Shaking ether with acidified ferrous sulphate (FeSO₄) followed by potassium thiocyanate (KCNS) produces a blood-red complex [Fe(SCN)]²⁺ if peroxides are present. Peroxides are destroyed prior to distillation by washing with aqueous FeSO₄ or sodium bisulphite."
      ],
      visual: {
        type: 'svg',
        svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.alcoholsPhenolsEthersMasterMap,
        caption: "Master One-Page Reaction Map: Alcohols, Phenols and Ethers.",
        guide: "Review the interconversions, named transformations, and specific reagents connecting all three functional groups."
      },
      importantPoints: [
        "–OCH₃ activates the benzene ring and directs electrophiles to Ortho and Para (Para is major due to steric factors).",
        "Bromination of anisole requires NO catalyst (occurs smoothly in CH₃COOH).",
        "Old ethers form explosive peroxides; detected with FeSO₄ + KCNS (blood red test)."
      ]
    }
  ],

  formulae: [
    {
      title: "Williamson Ether Synthesis",
      formula: "\\text{R–O}^- \\text{Na}^+ + \\text{R'–X} \\xrightarrow{S_N2} \\text{R–O–R'} + \\text{NaX} \\quad (\\text{R'X = } 1^\\circ\\text{ or Methyl})",
      meaning: "S_N2 nucleophilic substitution of primary alkyl halide by alkoxide/phenoxide."
    },
    {
      title: "Anisole Cleavage by HI",
      formula: "\\text{C}_6\\text{H}_5\\text{–O–CH}_3 + \\text{HI} \\xrightarrow{373\\text{ K}} \\text{C}_6\\text{H}_5\\text{–OH (Phenol)} + \\text{CH}_3\\text{–I (Methyl Iodide)}",
      meaning: "Selective cleavage of alkyl aryl ethers without breaking the aryl–oxygen bond."
    },
    {
      title: "Tertiary Ether S_N1 Cleavage",
      formula: "(\\text{CH}_3)_3\\text{C–O–CH}_3 + \\text{HI} \\rightarrow (\\text{CH}_3)_3\\text{C–I (tert-Butyl Iodide)} + \\text{CH}_3\\text{OH (Methanol)}",
      meaning: "S_N1 cleavage of tertiary ethers via stable 3° carbocation intermediate."
    },
    {
      title: "Excess HI Ether Cleavage",
      formula: "\\text{R–O–R'} + 2\\text{ HI} \\xrightarrow{\\Delta} \\text{R–I} + \\text{R'–I} + \\text{H}_2\\text{O}",
      meaning: "Exhaustive cleavage of dialkyl ethers into two alkyl iodides."
    }
  ],

  visualLearning: {
    type: 'svg',
    caption: "Williamson Synthesis Matrix & Acidic Cleavage Pathways for Ethers.",
    svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.williamsonSynthesisAndEtherCleavage
  },

  neetImportantPoints: [
    "Williamson synthesis requires 1° alkyl halide. With 3° alkyl halide, E2 elimination produces an ALKENE.",
    "tert-Butyl methyl ether is made from Sodium tert-butoxide + Methyl bromide.",
    "Cleavage of 1°/2° ethers with HI gives Smaller Alkyl Iodide + Larger Alcohol (S_N2).",
    "Cleavage of 3° alkyl ethers with HI gives 3° Alkyl Iodide + Methanol (S_N1).",
    "Anisole + HI yields Phenol + Methyl iodide; Iodobenzene is NEVER formed.",
    "Bromination of anisole occurs in CH₃COOH without FeBr₃ catalyst (90% para product).",
    "C–O–C bond angle in dimethyl ether is 111.7° due to steric repulsion between methyl groups.",
    "Ethers form explosive peroxides on air storage; detected by FeSO₄ + KCNS blood-red test."
  ],

  commonConfusions: [
    {
      commonConfusion: "Attempting to synthesize tert-Butyl methyl ether from Sodium methoxide + tert-Butyl bromide.",
      correctFact: "CH₃ONa + (CH₃)₃C–Br gives 100% 2-methylpropene via E2 elimination. To get the ether, use (CH₃)₃C–ONa + CH₃Br.",
      whyItMattersForNEET: "One of the most frequently asked Williamson synthesis traps in NEET."
    },
    {
      commonConfusion: "Thinking Anisole + HI gives Iodobenzene + Methanol.",
      correctFact: "Aryl C–O has partial double bond character (+R effect) and cannot be attacked. Cleavage gives Phenol + Methyl iodide.",
      whyItMattersForNEET: "Standard NEET ether cleavage question."
    },
    {
      commonConfusion: "Assuming Ethers have higher boiling points than alcohols.",
      correctFact: "Alcohols form strong intermolecular Hydrogen bonds and boil much higher (Ethanol bp 78°C vs Dimethyl ether bp -24°C).",
      whyItMattersForNEET: "Crucial for physical property and boiling point ranking questions."
    }
  ],

  quickRevision: [
    "Williamson: R–O⁻Na⁺ + R'–X (must be 1°) → R–O–R' (S_N2)",
    "3° Alkyl Halide + Alkoxide → Alkene (E2 elimination!)",
    "1°/2° Ether + HI → Smaller R–I + Larger R–OH (S_N2)",
    "3° Alkyl Ether + HI → 3° R–I + Methanol (S_N1)",
    "Anisole + HI → Phenol + CH₃I (sp² C–O never breaks)",
    "Anisole + Br₂ / CH₃COOH → p-Bromoanisole (Major, No catalyst needed)",
    "Peroxide Test: FeSO₄ + KCNS → Blood Red [Fe(SCN)]²⁺ complex"
  ],

  pyqs: ALCOHOLS_PHENOLS_ETHERS_PYQS.ethers,
  practiceQuestions: ALCOHOLS_PHENOLS_ETHERS_PRACTICE.topic3Ethers
};
