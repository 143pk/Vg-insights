import { DetailedTopicContent } from '../../types/neet';
import { ALDEHYDES_KETONES_DIAGRAMS } from '../aldehydesKetones/aldehydesKetonesDiagrams';
import { ALDEHYDES_KETONES_CONCEPTS } from '../aldehydesKetones/aldehydesKetonesTermsAndConcepts';
import { ALDEHYDES_KETONES_PYQS } from '../aldehydesKetones/aldehydesKetonesPyqs';
import { ALDEHYDES_KETONES_PRACTICE } from '../aldehydesKetones/aldehydesKetonesPracticeSets';
import { ALDEHYDES_KETONES_TABLES_AND_TRAPS } from '../aldehydesKetones/aldehydesKetonesTrapsAndTables';

export const chemAldolCannizzaroDetails: DetailedTopicContent = {
  topicId: "chem-aldol-cannizzaro",
  topicName: "Important Reactions, Tests & Named Reactions",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Aldehydes, Ketones and Carboxylic Acids",

  whatIsThisTopic: "High-yield named reactions, redox chemistry, and diagnostic tests: Aldol condensation, Cannizzaro reaction, Haloform (Iodoform) test, Tollens' silver mirror, Fehling's test, Schiff's test, Clemmensen and Wolff-Kishner reductions, and Popoff's rule.",

  basicIdea: [
    "Aldehydes are easily oxidised to carboxylic acids by mild reagents (Tollens', Fehling's, Benedict's); ordinary ketones resist mild oxidation and undergo destructive C–C cleavage under vigorous conditions (Popoff's rule).",
    "Tollens' reagent ([Ag(NH₃)₂]⁺ OH⁻) gives a silver mirror with ALL aldehydes and formic acid; Fehling's solution gives red Cu₂O precipitate with ALIPHATIC ALDEHYDES ONLY (aromatic aldehydes like benzaldehyde fail Fehling's test!).",
    "Aldol Condensation occurs in carbonyls with AT LEAST ONE α-hydrogen in dilute base (10% NaOH), forming a β-hydroxy carbonyl which dehydrates on heating to an α,β-unsaturated carbonyl compound.",
    "Cannizzaro Reaction occurs in aldehydes LACKING α-hydrogens (HCHO, C₆H₅CHO, (CH₃)₃CCHO) in concentrated base (50% NaOH), undergoing disproportionation to 1 molecule alcohol + 1 molecule carboxylic acid salt.",
    "In Crossed Cannizzaro with HCHO, formaldehyde is ALWAYS oxidised to sodium formate because it is more electrophilic.",
    "Haloform / Iodoform test (I₂ + NaOH) gives a yellow crystalline precipitate of CHI₃ with compounds containing the CH₃–CO– (methyl ketone/ethanal) or CH₃–CH(OH)– (ethanol/2-alkanols) grouping.",
    "Clemmensen reduction [Zn(Hg)/conc. HCl, acidic] and Wolff-Kishner reduction [NH₂NH₂/KOH/glycol, basic] deoxygenate carbonyl groups (>C=O ⟶ >CH₂) into methylene groups."
  ],

  importantTerms: ALDEHYDES_KETONES_CONCEPTS.reactionsTerms,

  conceptExplanation: [
    {
      heading: "1. Oxidation of Aldehydes & Ketones: Tollens', Fehling's & Schiff's Diagnostic Tests",
      paragraphs: [
        "Aldehydes differ fundamentally from ketones in their oxidation behavior. Aldehydes possess a hydrogen atom directly bonded to the carbonyl carbon (aldehydic C–H), which is easily cleaved without breaking any carbon-carbon bonds. Therefore, aldehydes are readily oxidised to carboxylic acids by mild oxidizing agents (Ag⁺, Cu²⁺, Br₂/H₂O).",
        "Ketones lack a C–H bond on the carbonyl carbon and resist mild oxidation. Ketones can be oxidised only under vigorous conditions (hot concentrated HNO₃, alkaline KMnO₄, or acidic K₂Cr₂O₇), involving destructive C–C bond cleavage following Popoff's Rule: the carbonyl group preferentially stays with the smaller alkyl group during cleavage.",
        "Tollens' Test (Silver Mirror Test): Tollens' reagent is an ammoniacal solution of silver nitrate ([Ag(NH₃)₂]⁺ OH⁻). When warmed with an aldehyde, the aldehyde is oxidised to a carboxylate anion, while Ag⁺ is reduced to metallic silver, depositing as a brilliant shining silver mirror on the clean test tube wall. Responds to ALL aldehydes (aliphatic and aromatic), formic acid, and α-hydroxy ketones.",
        "Fehling's Test: Fresh mixture of Fehling A (aq CuSO₄) and Fehling B (alkaline sodium potassium tartrate / Rochelle salt). Aliphatic aldehydes reduce blue Cu²⁺ to a brick-red precipitate of cuprous oxide (Cu₂O). AROMATIC ALDEHYDES (e.g., benzaldehyde C₆H₅CHO) DO NOT reduce Fehling's solution due to resonance stabilization with the benzene ring!",
        "Schiff's Test: Aldehydes rapidly restore the pink/magenta color of sulfur dioxide-decolorized p-rosaniline hydrochloride (Schiff's reagent) at room temperature. Ketones do not respond."
      ],
      visual: {
        type: 'svg',
        svgContent: ALDEHYDES_KETONES_DIAGRAMS.haloformAndDistinctionTests,
        caption: "Figure 21.3: Haloform (Iodoform) test structural criteria and Tollens'/Fehling's redox distinction pathways.",
        guide: "Memorize the yellow CHI₃ precipitate formation for methyl ketones and the failure of aromatic aldehydes in Fehling's test."
      },
      importantPoints: [
        "Tollens' oxidizes both aliphatic and aromatic aldehydes (gives Silver Mirror Ag↓).",
        "Fehling's oxidizes aliphatic aldehydes only (gives Brick-Red Cu₂O↓); Benzaldehyde gives a NEGATIVE Fehling's test.",
        "Formic acid (HCOOH) is the only carboxylic acid that reduces Tollens' and Fehling's reagents because it has an oxidisable formyl C–H bond."
      ]
    },
    {
      heading: "2. Reduction of Aldehydes & Ketones: Alcohol Synthesis vs Carbonyl Deoxygenation",
      paragraphs: [
        "1. Reduction to Alcohols: Aldehydes are reduced to 1° alcohols and ketones to 2° alcohols using NaBH₄ in ethanol or LiAlH₄ in dry ether. Catalytic hydrogenation (H₂ / Ni, Pt, Pd) also reduces carbonyls to alcohols but also hydrogenates alkene C=C double bonds.",
        "2. Reduction to Hydrocarbons (>C=O ⟶ >CH₂): Carbonyl compounds can be directly deoxygenated into corresponding alkanes using two complementary named reactions:",
        "• Clemmensen Reduction: Involves heating the carbonyl compound with zinc amalgam and concentrated hydrochloric acid [Zn(Hg) / conc. HCl] under reflux. Operates in strongly ACIDIC medium. It is unsuitable for substrates with acid-sensitive groups (–OH, –OR, C=C).",
        "• Wolff-Kishner Reduction: Involves heating the carbonyl compound with hydrazine (NH₂NH₂) to form a hydrazone, which is then heated with KOH in high-boiling ethylene glycol at 453–473 K, liberating inert nitrogen gas (N₂↑). Operates in strongly BASIC medium. It is ideal for acid-sensitive compounds, but unsuitable for base-sensitive groups (esters, halides)."
      ],
      tables: [
        {
          title: "Clemmensen vs Wolff-Kishner Reduction Comparison",
          headers: ["Parameter", "Clemmensen Reduction", "Wolff-Kishner Reduction"],
          rows: [
            ["Reagents", "Zn(Hg) + Conc. HCl (reflux)", "NH₂NH₂ + KOH in ethylene glycol, Δ"],
            ["Medium", "Strongly Acidic", "Strongly Basic"],
            ["Gas Evolved", "None (ZnCl₂ + H₂O)", "Nitrogen Gas (N₂↑)"],
            ["Preferred For", "Base-sensitive substrates (esters, halides)", "Acid-sensitive substrates (–OH, –OR, acetals)"]
          ]
        }
      ]
    },
    {
      heading: "3. Aldol Condensation: α-Hydrogen Acidity, Enolate Chemistry & Conjugated Enals",
      paragraphs: [
        "The α-hydrogens of aldehydes and ketones are remarkably acidic (pKa ≈ 19–20) due to two major factors: (1) Strong -I electron-withdrawing effect of the carbonyl group, and (2) Resonance stabilization of the conjugate base (enolate carbanion) where the negative charge is delocalised onto the electronegative oxygen atom [:⁻CH₂–CHO ⟷ CH₂=CH–O⁻].",
        "Mechanism of Aldol Condensation:",
        "Step 1: Deprotonation. A dilute base (dil. NaOH, Ba(OH)₂) abstracts an α-hydrogen from one aldehyde molecule to generate the resonance-stabilized enolate carbanion.",
        "Step 2: Nucleophilic Addition. The nucleophilic enolate carbanion attacks the electrophilic carbonyl carbon of a second aldehyde molecule to form an alkoxide intermediate.",
        "Step 3: Protonation. The alkoxide captures a proton from water to yield a β-hydroxy aldehyde (Aldol) or β-hydroxy ketone (Ketol).",
        "Step 4: Dehydration (Condensation). Upon warming or heating, the aldol undergoes facile dehydration (loss of water between α-H and β-OH) to form an exceptionally stable α,β-unsaturated carbonyl compound (conjugated enal/enone, e.g., 2 CH₃CHO ⟶ CH₃–CH=CH–CHO / Crotonaldehyde).",
        "Crossed (Mixed) Aldol Condensation: When two different carbonyl compounds both possessing α-hydrogens are reacted, a complex mixture of four condensation products is obtained. However, if one carbonyl compound LACKS α-hydrogens (e.g., Benzaldehyde + Acetone), a single major crossed condensation product is obtained in high yield (Claisen-Schmidt reaction ⟶ Benzalacetone)."
      ],
      visual: {
        type: 'svg',
        svgContent: ALDEHYDES_KETONES_DIAGRAMS.aldolAndCannizzaroMechanisms,
        caption: "Figure 21.4: Step-by-step mechanisms of Aldol Condensation (α-H present) vs Cannizzaro Disproportionation (no α-H).",
        guide: "Carefully trace enolate generation in Aldol vs hydride transfer in Cannizzaro."
      }
    },
    {
      heading: "4. Cannizzaro Reaction: Disproportionation of Aldehydes Lacking α-Hydrogen",
      paragraphs: [
        "Aldehydes that possess ZERO α-hydrogens (such as Formaldehyde HCHO, Benzaldehyde C₆H₅CHO, and Trimethylacetaldehyde (CH₃)₃C–CHO) cannot form an enolate in base. Instead, when heated with concentrated alkali (50% NaOH or KOH), they undergo self oxidation-reduction (disproportionation).",
        "Cannizzaro Mechanism: A hydroxide ion (OH⁻) attacks the carbonyl carbon to form a tetrahedral gem-diolate monoanion / dianion. In the slow rate-determining step, a hydride ion (:H⁻) is transferred directly from this intermediate to the carbonyl carbon of a second aldehyde molecule. The hydride donor is oxidised to a carboxylic acid (which rapidly converts to a carboxylate salt), while the hydride acceptor is reduced to an alkoxide (which protonates to an alcohol).",
        "Crossed Cannizzaro Reaction: When an aromatic aldehyde (C₆H₅CHO) is reacted with Formaldehyde (HCHO) in concentrated NaOH, Formaldehyde is preferentially attacked by OH⁻ because it is sterically unhindered and more electrophilic. Consequently, Formaldehyde is ALWAYS oxidised to Sodium Formate (HCOONa), and Benzaldehyde is reduced to Benzyl Alcohol (C₆H₅CH₂OH)."
      ],
      importantPoints: [
        "Aldol requires α-H; Cannizzaro requires NO α-H.",
        "Cannizzaro is a disproportionation redox reaction (1 eq oxidised, 1 eq reduced).",
        "In Crossed Cannizzaro with HCHO, HCHO is ALWAYS oxidised to formate (HCOONa)."
      ]
    },
    {
      heading: "5. Haloform (Iodoform) Reaction: Structural Specificity & Diagnostic Utility",
      paragraphs: [
        "The haloform reaction is a characteristic reaction given by compounds containing the CH₃–C(=O)– (methyl ketone or ethanal) or CH₃–CH(OH)– (ethanol or 2-alkanols) structural unit.",
        "Reaction Scheme: When treated with halogen (X₂ = Cl₂, Br₂, I₂) and excess aqueous NaOH (sodium hypohalite, NaOX), the three α-hydrogens of the methyl group are successively replaced by halogens via enolate intermediates to form a trihalomethyl ketone (R–CO–CX₃). The –CX₃ group is a good leaving group; attack of OH⁻ on the carbonyl carbon cleaves the C–C bond, yielding a haloform (CHX₃) and a sodium carboxylate salt (RCOONa).",
        "Iodoform Test (I₂ + NaOH / NaOI): Generates a characteristic yellow crystalline precipitate of triiodomethane / Iodoform (CHI₃, melting point 119°C) with a distinct antiseptic odor.",
        "Diagnostic Distinctions:",
        "• Ethanal (+ve) vs all other aldehydes (-ve).",
        "• Ethanol (+ve) vs Methanol and Propan-1-ol (-ve).",
        "• Pentan-2-one (+ve) vs Pentan-3-one (-ve).",
        "• Acetophenone (+ve) vs Benzophenone (-ve)."
      ]
    }
  ],

  formulae: [
    {
      title: "Aldol Condensation Equation",
      formula: "2 CH_3CHO xrightarrow{dil. NaOH} CH_3CH(OH)CH_2CHO xrightarrow{\\Delta, -H_2O} CH_3CH=CHCHO",
      meaning: "Two molecules of ethanal condense to form 3-hydroxybutanal (aldol), dehydrating to but-2-enal (crotonaldehyde).",
      whenToUse: "Synthesis of α,β-unsaturated aldehydes and ketones."
    },
    {
      title: "Cannizzaro Disproportionation",
      formula: "2 C_6H_5CHO + 50\\% \\text{ NaOH} xrightarrow{\\Delta} C_6H_5CH_2OH + C_6H_5COONa",
      meaning: "Benzaldehyde disproportionates into benzyl alcohol and sodium benzoate in concentrated base.",
      whenToUse: "Reaction of aldehydes lacking α-hydrogens with concentrated alkali."
    },
    {
      title: "Crossed Cannizzaro with Formaldehyde",
      formula: "C_6H_5CHO + HCHO + \\text{conc. NaOH} ⟶ C_6H_5CH_2OH + HCOONa",
      meaning: "Formaldehyde is preferentially oxidised to sodium formate; benzaldehyde is reduced to benzyl alcohol.",
      whenToUse: "Predicting products when formaldehyde is one of the aldehyde reactants."
    },
    {
      title: "Iodoform Reaction",
      formula: "R-CO-CH_3 + 3 I_2 + 4 NaOH ⟶ R-COONa + CHI_3\\downarrow\\text{ (Yellow)} + 3 NaI + 3 H_2O",
      meaning: "Oxidative cleavage of methyl ketones to yellow crystalline iodoform precipitate.",
      whenToUse: "Identifying CH₃CO– and CH₃CH(OH)– compounds."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: ALDEHYDES_KETONES_DIAGRAMS.aldolAndCannizzaroMechanisms,
    caption: "Comparative blueprint: Aldol Condensation mechanism vs Cannizzaro Reaction mechanism."
  },

  neetImportantPoints: [
    "Tollens' reagent oxidizes ALL aldehydes (aliphatic and aromatic) to silver mirror (Ag↓).",
    "Fehling's solution oxidizes ALIPHATIC aldehydes ONLY; Benzaldehyde gives a NEGATIVE Fehling's test.",
    "Formic acid (HCOOH) reduces both Tollens' and Fehling's reagents because it possesses an oxidisable aldehydic C–H bond.",
    "Aldol condensation requires at least one α-hydrogen; Cannizzaro requires ZERO α-hydrogens.",
    "Crossed Cannizzaro with HCHO: Formaldehyde is ALWAYS oxidised to Sodium Formate (HCOONa).",
    "Iodoform test requires CH₃–CO– or CH₃–CH(OH)–; Pentan-2-one (+ve) is distinguished from Pentan-3-one (-ve).",
    "Clemmensen reduction [Zn(Hg)/conc. HCl] operates in ACIDIC medium; Wolff-Kishner [NH₂NH₂/KOH/glycol] operates in BASIC medium.",
    "Popoff's rule: During vigorous oxidation of unsymmetrical ketones, C=O stays with the smaller alkyl group."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming that benzaldehyde reduces Fehling's solution because it is an aldehyde.",
      correctFact: "Aromatic aldehydes (C₆H₅CHO) DO NOT reduce Fehling's solution! However, they DO reduce Tollens' reagent.",
      whyItMattersForNEET: "A favorite NEET trap tested across multiple previous years."
    },
    {
      commonConfusion: "Thinking that Chloral (CCl₃CHO) undergoes Cannizzaro reaction because it lacks α-hydrogen.",
      correctFact: "Chloral undergoes Haloform-type cleavage with NaOH to give Chloroform (CHCl₃) and Sodium formate (HCOONa), because –CCl₃ is an excellent leaving group.",
      whyItMattersForNEET: "Classic exceptional question in organic chemistry."
    },
    {
      commonConfusion: "Confusing the condition of Clemmensen vs Wolff-Kishner reduction for acid-sensitive vs base-sensitive compounds.",
      correctFact: "Clemmensen uses concentrated HCl (strongly acidic, destroys –OH/–OR/C=C); Wolff-Kishner uses KOH (strongly basic, destroys esters/halides).",
      whyItMattersForNEET: "Critical for choosing the correct reagent in multi-step synthesis MCQs."
    }
  ],

  quickRevision: [
    "Tollens' = [Ag(NH₃)₂]⁺ OH⁻, oxidizes all aldehydes + HCOOH ⟶ Silver Mirror (Ag↓).",
    "Fehling's = Cu²⁺ tartrate, oxidizes aliphatic aldehydes ⟶ Brick-Red Cu₂O↓ (Benzaldehyde fails!).",
    "Aldol = Requires α-H, dil. NaOH, gives β-hydroxy carbonyl ⟶ α,β-unsaturated enal on heating.",
    "Cannizzaro = No α-H (HCHO, C₆H₅CHO, (CH₃)₃CCHO), 50% NaOH ⟶ 1 eq alcohol + 1 eq acid salt.",
    "Crossed Cannizzaro with HCHO ⟶ HCHO always becomes HCOONa; other aldehyde becomes alcohol.",
    "Iodoform (I₂/NaOH) ⟶ Yellow CHI₃↓ with CH₃CO– and CH₃CH(OH)–.",
    "Clemmensen = Zn(Hg)/conc. HCl (Acidic); Wolff-Kishner = NH₂NH₂/KOH, glycol, Δ (Basic); both reduce >C=O ⟶ >CH₂."
  ],

  practiceQuestions: ALDEHYDES_KETONES_PRACTICE.topic2Practice,
  pyqs: ALDEHYDES_KETONES_PYQS.topic2
};
