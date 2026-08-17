import { DetailedTopicContent } from '../../types/neet';
import { ALDEHYDES_KETONES_DIAGRAMS } from '../aldehydesKetones/aldehydesKetonesDiagrams';
import { ALDEHYDES_KETONES_CONCEPTS } from '../aldehydesKetones/aldehydesKetonesTermsAndConcepts';
import { ALDEHYDES_KETONES_PYQS } from '../aldehydesKetones/aldehydesKetonesPyqs';
import { ALDEHYDES_KETONES_PRACTICE } from '../aldehydesKetones/aldehydesKetonesPracticeSets';

export const chemCarboxylicAcidsAcidityDetails: DetailedTopicContent = {
  topicId: "chem-carboxylic-acids-acidity",
  topicName: "Carboxylic Acids — Structure, Acidity, Preparation & Reactions",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Aldehydes, Ketones and Carboxylic Acids",

  whatIsThisTopic: "Comprehensive carboxylic acid chemistry: Carboxyl group structure, cyclic dimer hydrogen bonding, high boiling points, side-chain oxidation, Grignard synthesis on dry ice, carboxylate resonance vs phenoxide, inductive effects, Ortho effect in aromatic acids, Fischer esterification mechanism, SOCl₂ reaction, HVZ α-bromination, soda-lime decarboxylation, and non-reactivity in Friedel-Crafts.",

  basicIdea: [
    "Carboxylic acids exist as stable cyclic dimers held by two strong intermolecular hydrogen bonds even in vapour phase and non-polar solvents, explaining their exceptionally high boiling points.",
    "Carboxylate anion (RCOO⁻) is exceptionally stable because the negative charge is delocalised equally over two equivalent, highly electronegative oxygen atoms [–C(=O)–O⁻ ⟷ –C(–O⁻)=O]. In contrast, phenoxide delocalises charge onto less electronegative carbon atoms.",
    "Electron-withdrawing groups (-I, -M) increase acidity (lower pKa) by dispersing negative charge; electron-donating groups (+I, +M) decrease acidity.",
    "Ortho Effect: Any ortho-substituted benzoic acid (o-NO₂, o-Cl, o-CH₃, o-OCH₃) is STRONGER than benzoic acid due to steric inhibition of resonance with the ring.",
    "Carboxylic acids decompose aqueous NaHCO₃ to liberate CO₂ gas with brisk effervescence; phenols (except picric acid) do not.",
    "Hell-Volhard-Zelinsky (HVZ) reaction: Carboxylic acids with α-hydrogen react with X₂ (Cl₂, Br₂) in the presence of Red Phosphorus to selectively yield α-halo carboxylic acids.",
    "Benzoic acid does NOT undergo Friedel-Crafts alkylation or acylation because –COOH is strongly deactivating and complexes with anhydrous AlCl₃ catalyst."
  ],

  importantTerms: ALDEHYDES_KETONES_CONCEPTS.carboxylicAcidsTerms,

  conceptExplanation: [
    {
      heading: "1. Structure, Bonding & Intermolecular Hydrogen-Bonded Cyclic Dimers",
      paragraphs: [
        "The carboxyl functional group (–COOH) combines a carbonyl group (>C=O) and a hydroxyl group (–OH) attached to the same carbon atom. The carboxyl carbon is sp² hybridized and planar with approximately 120° bond angles.",
        "Due to resonance donation of the lone pair from the hydroxyl oxygen into the carbonyl π-system [–C(=O)–OH ⟷ –C(–O⁻)=O⁺H], the carboxyl carbon is significantly less electrophilic than an aldehyde or ketone carbonyl carbon.",
        "Boiling Points: Carboxylic acids have higher boiling points than alcohols, aldehydes, ketones, and esters of similar molecular weight. They form exceptionally strong intermolecular hydrogen bonds and exist as stable cyclic dimers held by two intermolecular H-bonds even in the vapour state and in non-polar solvents (e.g., benzene).",
        "Comparison (MW ~ 60): Acetic acid (bp 391 K) > Propan-1-ol (bp 370 K) > Acetone (bp 329 K) > Propanal (bp 322 K) > Butane (bp 272 K)."
      ],
      visual: {
        type: 'svg',
        svgContent: ALDEHYDES_KETONES_DIAGRAMS.carboxylicAcidResonanceAndAcidity,
        caption: "Figure 21.5: Carboxylate resonance stabilization, inductive effect polarity, and the Ortho Effect in benzoic acids.",
        guide: "Observe the two equivalent resonance structures where negative charge resides exclusively on electronegative oxygen atoms."
      },
      importantPoints: [
        "Carboxylic acids exist as cyclic dimers in vapour phase and non-polar solvents.",
        "Carboxyl carbon is less electrophilic than carbonyl carbon due to +R donation from hydroxyl oxygen."
      ]
    },
    {
      heading: "2. Preparative Methods of Carboxylic Acids",
      paragraphs: [
        "1. Oxidation of Primary Alcohols and Aldehydes: Using alkaline KMnO₄ (followed by acidification) or Jones reagent (CrO₃ + dil. H₂SO₄ in acetone).",
        "2. Side-Chain Oxidation of Alkylbenzenes: Vigorous oxidation of alkylbenzenes with alkaline KMnO₄ at high temperature yields potassium benzoate, which upon acidification with dilute HCl gives Benzoic Acid. High-Yield Rule: Any alkyl side chain (methyl, ethyl, isopropyl) is oxidised all the way to a –COOH group, PROVIDED AT LEAST ONE BENZYLIC HYDROGEN IS PRESENT. tert-Butylbenzene [(CH₃)₃C–C₆H₅] lacks a benzylic hydrogen and CANNOT be oxidised by alkaline KMnO₄!",
        "3. Hydrolysis of Nitriles and Amides: Nitriles (R–CN) undergo mild partial hydrolysis to Amides (R–CONH₂), which on further boiling with dilute mineral acid or aqueous alkali undergo complete hydrolysis to Carboxylic Acids (R–COOH) and NH₄⁺/NH₃.",
        "4. Grignard Reagents with Carbon Dioxide (Dry Ice): RMgX reacts with solid carbon dioxide in dry ether to form a halomagnesium carboxylate [R–COO⁻(MgX)⁺], which on acidic hydrolysis yields a carboxylic acid with ONE MORE carbon atom than the original alkyl halide.",
        "5. Hydrolysis of Acyl Halides, Anhydrides & Esters: Acyl chlorides hydrolyse rapidly in water to carboxylic acids; esters undergo acidic hydrolysis (reversible) or basic hydrolysis (irreversible, saponification)."
      ],
      importantPoints: [
        "Alkylbenzene side-chain oxidation requires at least one benzylic hydrogen; tert-butylbenzene fails.",
        "Grignard + CO₂ increases the carbon chain length by exactly 1 carbon."
      ]
    },
    {
      heading: "3. Acidity of Carboxylic Acids: Resonance, Substituent Effects & Ortho Effect",
      paragraphs: [
        "Carboxylic acids are the most acidic class of simple organic compounds (pKa ≈ 4–5, whereas phenols have pKa ≈ 10, alcohols have pKa ≈ 16–18, and terminal alkynes have pKa ≈ 25).",
        "Why are Carboxylic Acids more acidic than Phenols? When a carboxylic acid loses a proton, the carboxylate anion (RCOO⁻) is stabilized by resonance between TWO EQUIVALENT canonical structures where the negative charge is distributed equally over two highly electronegative oxygen atoms. In phenoxide (C₆H₅O⁻), the negative charge is delocalised onto less electronegative carbon atoms in the benzene ring, which provides significantly less stabilization.",
        "Substituent Effects on Aliphatic Acids: Electron-withdrawing groups (-I effect: –NO₂ > –CN > –F > –Cl > –Br > –I > –C₆H₅) stabilize the carboxylate anion by dispersing negative charge, thereby increasing acidity. The effect increases with greater electronegativity, greater number of halogen atoms, and closer proximity to the –COOH group.",
        "Inductive Hierarchy: CF₃COOH > CCl₃COOH > CHCl₂COOH > NO₂CH₂COOH > FCH₂COOH > ClCH₂COOH > BrCH₂COOH > HCOOH > C₆H₅COOH > CH₃COOH > CH₃CH₂COOH.",
        "Substituent Effects & Ortho Effect in Benzoic Acids: Any ortho substituent (–NO₂, –Cl, –CH₃, –OCH₃) significantly increases the acidity of benzoic acid compared to meta/para isomers and unsubstituted benzoic acid. This is the Ortho Effect: steric crowding twists the –COOH group out of coplanarity with the benzene ring, preventing destabilizing cross-conjugation while allowing the local -I effect to strongly stabilize the conjugate base."
      ],
      tables: [
        {
          title: "Comprehensive pKa Values of High-Yield NEET Carboxylic Acids",
          headers: ["Compound Name", "Formula", "pKₐ Value", "Acidity Ranking & NEET High-Yield Note"],
          rows: [
            ["Trifluoroacetic acid", "CF₃COOH", "0.23", "Strongest organic acid; three highly electronegative F atoms."],
            ["Trichloroacetic acid", "CCl₃COOH", "0.64", "Extremely strong acid; three -I chlorine substituents."],
            ["Dichloroacetic acid", "CHCl₂COOH", "1.29", "Significantly more acidic than monochloroacetic acid."],
            ["o-Nitrobenzoic acid", "o-NO₂-C₆H₄-COOH", "2.17", "Strongest nitrobenzoic acid due to powerful Ortho Effect."],
            ["Fluoroacetic acid", "FCH₂COOH", "2.59", "More acidic than chloroacetic acid due to higher electronegativity of F."],
            ["Chloroacetic acid", "ClCH₂COOH", "2.87", "Stronger than bromoacetic and acetic acid."],
            ["Bromoacetic acid", "BrCH₂COOH", "2.90", "Moderately strong α-halo acid."],
            ["p-Nitrobenzoic acid", "p-NO₂-C₆H₄-COOH", "3.44", "Strong -M and -I effect stabilizes carboxylate anion."],
            ["Formic acid", "HCOOH", "3.75", "Stronger than benzoic acid and acetic acid (no +I alkyl group)."],
            ["Benzoic acid", "C₆H₅COOH", "4.20", "Standard aromatic reference acid."],
            ["Acetic acid", "CH₃COOH", "4.76", "Standard aliphatic acid; +I methyl group destabilizes anion."],
            ["Propanoic acid", "CH₃CH₂COOH", "4.88", "Weaker than acetic acid due to larger +I ethyl group."]
          ]
        }
      ]
    },
    {
      heading: "4. Chemical Reactions of Carboxylic Acids: O–H, C–OH & –COOH Cleavages",
      paragraphs: [
        "1. Cleavage of O–H Bond: Carboxylic acids react with active metals (Na, K, Mg) to liberate H₂ gas, and react with aqueous NaOH, Na₂CO₃, and NaHCO₃ to form salts. The reaction with aqueous NaHCO₃ liberates CO₂ gas with brisk effervescence, serving as the definitive qualitative test to distinguish carboxylic acids from phenols and alcohols.",
        "2. Cleavage of C–OH Bond (Acyl Derivatives):",
        "• Anhydride Formation: Heating with mineral acids (H₂SO₄) or P₂O₅ causes intermolecular dehydration to yield acid anhydrides [2 RCOOH ⟶ (RCO)₂O + H₂O].",
        "• Fischer Esterification: Heating with alcohols in the presence of concentrated H₂SO₄ or dry HCl gas forms esters [RCOOH + R'OH ⇌ RCOOR' + H₂O]. Isotopic tracing with ¹⁸O confirms that the –OH group comes from the carboxylic acid and the –H comes from the alcohol!",
        "• Reactions with PCl₅, PCl₃, and SOCl₂: Forms acyl chlorides (RCOCl). Thionyl chloride (SOCl₂) is the PREFERRED REAGENT because both side products (SO₂ and HCl) are escape-ready gases, leaving behind pure liquid acyl chloride.",
        "• Reaction with Ammonia: Reacts to form ammonium carboxylate salts, which upon heating lose water to yield Amides (RCONH₂). Phthalic acid + NH₃ followed by strong heating yields Phthalimide.",
        "3. Reduction: Reduced specifically to primary alcohols (RCH₂OH) by LiAlH₄ or Diborane (B₂H₆ in THF). Diborane does not reduce esters, nitro, or halo groups.",
        "4. Decarboxylation:",
        "• Soda-Lime Decarboxylation: Sodium salts of carboxylic acids heated with soda lime (NaOH + CaO in 3:1 ratio) lose CO₂ as Na₂CO₃ to yield an alkane with ONE LESS carbon atom [RCOONa + NaOH xrightarrow[Δ]{CaO} R–H + Na₂CO₃].",
        "• Kolbe's Electrolytic Decarboxylation: Electrolysis of concentrated aqueous potassium carboxylate yields symmetrical alkanes at the anode [2 RCOO⁻ ⟶ R–R + 2 CO₂ + 2 e⁻]."
      ],
      visual: {
        type: 'svg',
        svgContent: ALDEHYDES_KETONES_DIAGRAMS.aldehydesKetonesMasterMap,
        caption: "Figure 21.6: Master reaction mind map for carboxylic acids (Synthesis, Derivatives, HVZ, and Decarboxylation).",
        guide: "Trace the 4 distinct reaction modes: O-H cleavage, C-OH substitution, -COOH decarboxylation, and α-C halogenation."
      }
    },
    {
      heading: "5. Halogenation in Hydrocarbon Part & Aromatic Ring Substitution",
      paragraphs: [
        "1. Hell-Volhard-Zelinsky (HVZ) Reaction: Carboxylic acids possessing at least one α-hydrogen react with chlorine (Cl₂) or bromine (Br₂) in the presence of a catalytic amount of Red Phosphorus (Red P) to form α-halocarboxylic acids [R–CH₂–COOH xrightarrow{(i) X₂ / Red P, (ii) H₂O} R–CH(X)–COOH].",
        "Significance: Converts aliphatic acids into versatile α-halo derivatives, which can be treated with aq. KOH (to make α-hydroxy acids / lactic acid) or NH₃ (to make α-amino acids / glycine/alanine).",
        "2. Electrophilic Aromatic Ring Substitution: The –COOH group is a strongly deactivating and meta-directing group due to its -M and -I electron-withdrawing nature.",
        "Nitration (conc. HNO₃ + conc. H₂SO₄) yields m-nitrobenzoic acid; Bromination (Br₂ + FeBr₃) yields m-bromobenzoic acid.",
        "CRITICAL NEET FACT: Benzoic acid DOES NOT undergo Friedel-Crafts Alkylation or Friedel-Crafts Acylation because the –COOH group strongly deactivates the benzene ring and complexes with the anhydrous AlCl₃ Lewis acid catalyst!"
      ]
    }
  ],

  formulae: [
    {
      title: "Hell-Volhard-Zelinsky (HVZ) Reaction",
      formula: "R-CH_2-COOH xrightarrow{(i)\\text{ } X_2 / \\text{Red P}, \\text{ }(ii)\\text{ } H_2O} R-CH(X)-COOH \\quad (X = Cl, Br)",
      meaning: "Selective α-halogenation of carboxylic acids possessing α-hydrogens.",
      whenToUse: "Synthesis of α-halo acids, α-hydroxy acids, and α-amino acids."
    },
    {
      title: "Soda-Lime Decarboxylation",
      formula: "R-COONa + NaOH xrightarrow[\\Delta]{CaO \\text{ (3:1)}} R-H + Na_2CO_3",
      meaning: "Loss of carbon dioxide forming an alkane with one less carbon atom.",
      whenToUse: "Shortening a carbon chain by 1 carbon atom."
    },
    {
      title: "Fischer Esterification Mechanism",
      formula: "R-CO-OH + H-^{18}OR' xrightarrow{H^+} R-CO-^{18}OR' + H_2O",
      meaning: "Nucleophilic acyl substitution where oxygen of ester originates from the alcohol.",
      whenToUse: "Predicting isotopic distribution and equilibrium esterification products."
    },
    {
      title: "Thionyl Chloride Chlorination",
      formula: "R-COOH + SOCl_2 ⟶ R-COCl + SO_2\\uparrow + HCl\\uparrow",
      meaning: "Synthesis of pure acyl chlorides with gaseous escaping by-products.",
      whenToUse: "Preferred method for preparation of acid chlorides."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: ALDEHYDES_KETONES_DIAGRAMS.aldehydesKetonesMasterMap,
    caption: "Carboxylic acids master reaction mind map: Synthesis, functional transformations, HVZ α-halogenation, and decarboxylation."
  },

  neetImportantPoints: [
    "Carboxylic acid cyclic dimers: Held by two intermolecular hydrogen bonds even in the vapour phase and benzene solution, giving exceptionally high boiling points.",
    "Alkylbenzene side-chain oxidation: Requires at least one benzylic hydrogen; tert-butylbenzene is inert to alkaline KMnO₄.",
    "Carboxylate anion stability: Negative charge is delocalised over two equivalent oxygen atoms (much more stable than phenoxide, where charge is on carbons).",
    "Ortho Effect: Any ortho-substituted benzoic acid is a STRONGER acid than benzoic acid due to steric suppression of resonance.",
    "Sodium bicarbonate test: Carboxylic acids liberate CO₂ with brisk effervescence; phenols (except picric acid) do not.",
    "SOCl₂ preference: Side products SO₂ and HCl are gases that escape into the atmosphere, leaving behind pure acyl chloride.",
    "Diborane (B₂H₆) reduction: Selectively reduces –COOH to –CH₂OH without reducing ester, nitro, or halo groups.",
    "HVZ reaction: Strictly requires at least one α-hydrogen; formic acid and pivalic acid [(CH₃)₃CCOOH] cannot undergo HVZ.",
    "Friedel-Crafts reaction: Benzoic acid FAILS to undergo Friedel-Crafts alkylation and acylation because –COOH deactivates the ring and poisons the AlCl₃ catalyst."
  ],

  commonConfusions: [
    {
      commonConfusion: "Believing that tert-butylbenzene can be oxidised to benzoic acid by alkaline KMnO₄.",
      correctFact: "tert-Butylbenzene has a quaternary benzylic carbon (zero benzylic hydrogens) and resists oxidation by KMnO₄ completely.",
      whyItMattersForNEET: "Frequently tested in side-chain oxidation questions."
    },
    {
      commonConfusion: "Assuming that in Fischer esterification, the –OH comes from the alcohol and the –H from the carboxylic acid.",
      correctFact: "Isotopic ¹⁸O tracing proves that the –OH is cleaved from the carboxylic acid and the –H from the alcohol: R–CO–OH + H–¹⁸O–R' ⟶ R–CO–¹⁸O–R' + H₂O.",
      whyItMattersForNEET: "Frequently asked mechanism and isotopic labeling MCQ in NEET."
    },
    {
      commonConfusion: "Assuming benzoic acid undergoes Friedel-Crafts alkylation like other benzene derivatives.",
      correctFact: "Benzoic acid does NOT undergo Friedel-Crafts reaction because –COOH is strongly electron-withdrawing (-M) and coordinates with AlCl₃ catalyst.",
      whyItMattersForNEET: "Key exception tested in electrophilic aromatic substitution."
    }
  ],

  quickRevision: [
    "Carboxylic acids = cyclic dimers (two H-bonds) ⟶ bp higher than alcohols of same MW.",
    "Side-chain KMnO₄ oxidation: Alkylbenzene ⟶ Benzoic acid (Needs at least one benzylic H; tert-butylbenzene fails!).",
    "Acidity: CF₃COOH > CCl₃COOH > CHCl₂COOH > NO₂CH₂COOH > FCH₂COOH > ClCH₂COOH > HCOOH > C₆H₅COOH > CH₃COOH.",
    "Ortho Effect: o-substituted benzoic acids > benzoic acid.",
    "NaHCO₃ test: RCOOH + NaHCO₃ ⟶ RCOONa + H₂O + CO₂↑ (Brisk effervescence).",
    "SOCl₂: RCOOH + SOCl₂ ⟶ RCOCl + SO₂↑ + HCl↑ (Best method for acyl chlorides).",
    "HVZ Reaction: RCH₂COOH + X₂/Red P followed by H₂O ⟶ RCH(X)COOH (Requires α-H).",
    "Decarboxylation: RCOONa + NaOH/CaO (3:1), Δ ⟶ R–H + Na₂CO₃ (Shortens chain by 1 carbon).",
    "Benzoic acid does NOT undergo Friedel-Crafts reactions."
  ],

  practiceQuestions: ALDEHYDES_KETONES_PRACTICE.topic3Practice,
  pyqs: ALDEHYDES_KETONES_PYQS.topic3
};
