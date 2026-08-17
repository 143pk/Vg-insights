import { DetailedTopicContent } from '../../types/neet';
import { HALOALKANES_DIAGRAMS } from '../haloalkanesHaloarenes/haloalkanesDiagrams';
import { HALOALKANES_CONCEPTS } from '../haloalkanesHaloarenes/haloalkanesTermsAndConcepts';
import { HALOALKANES_TRAPS_AND_SHEET } from '../haloalkanesHaloarenes/haloalkanesTrapsAndFormulaSheet';
import { HALOALKANES_PYQS } from '../haloalkanesHaloarenes/haloalkanesPyqs';
import { HALOALKANES_PRACTICE_SETS } from '../haloalkanesHaloarenes/haloalkanesPracticeSets';

export const chemSn1Sn2MechanismsDetails: DetailedTopicContent = {
  topicId: "chem-sn1-sn2-mechanisms",
  topicName: "Haloalkanes — Structure, Preparation & Substitution/Elimination",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Haloalkanes and Haloarenes",

  whatIsThisTopic: "Haloalkanes (alkyl halides) are halogen derivatives of alkanes where one or more hydrogen atoms are replaced by halogens. This foundational organic module covers structural classification (1°, 2°, 3°, allylic, benzylic, vinylic), IUPAC nomenclature, the polar nature and reactivity of the C–X bond, all premier laboratory preparations (from alcohols via Darzen's SOCl₂, from alkenes via Markovnikov and Kharasch peroxide Anti-Markovnikov addition, and halogen exchange via Finkelstein and Swarts reactions), physical properties, deep mechanistic contrast between S_N1 and S_N2 nucleophilic substitutions, stereochemical outcomes (Walden inversion vs racemisation), ambidentate nucleophiles (KCN vs AgCN, KNO₂ vs AgNO₂), β-elimination dehydrohalogenation under Saytzeff's rule, and organometallic synthesis (Wurtz reaction and Grignard reagents).",

  basicIdea: [
    "Classification: Alkyl halides are classified by carbon degree (1°, 2°, 3°) and bonding environment into allylic (–C=C–C(X)–), benzylic (Ar–C(X)–), vinylic (–C=C(X)–), and aryl (Ar–X) halides.",
    "Nature of C–X Bond: Highly polar with partial positive charge on carbon (C^{\\delta+}) and negative on halogen (X^{\\delta-}). Reactivity/leaving group order is R–I > R–Br > R–Cl >> R–F (governed by C–X bond enthalpy: C–I is weakest at 234 kJ/mol). Dipole moment is maximum for CH₃Cl (1.860 D) due to the bond length factor (q × d).",
    "Preparation Highlights: Alcohols + SOCl₂/pyridine (Darzen's) is the cleanest method because by-products (SO₂, HCl) are gases. Markovnikov addition of HX to alkenes gives 2° halide; Anti-Markovnikov peroxide effect (Kharasch) works EXCLUSIVELY with HBr.",
    "S_N1 vs S_N2 Mechanisms: S_N1 is a 2-step unimolecular process (Rate = k[R–X]) proceeding via a planar carbocation intermediate (3° > 2° > 1°) accompanied by racemisation; S_N2 is a 1-step concerted bimolecular process (Rate = k[R–X][Nu⁻]) proceeding via a pentacoordinate transition state (CH₃X > 1° > 2° >> 3°) with 100% Walden inversion.",
    "Ambidentate Nucleophiles: KCN (ionic) attacks via carbon giving Alkyl Cyanide (R–CN); AgCN (covalent) attacks via nitrogen giving Alkyl Isocyanide (R–NC). KNO₂ (ionic) gives Alkyl Nitrite (R–ONO); AgNO₂ (covalent) gives Nitroalkane (R–NO₂).",
    "Elimination vs Substitution: Aqueous KOH favors nucleophilic substitution (giving Alcohols); Alcoholic KOH + heat acts as a strong base causing β-elimination dehydrohalogenation (E2) following Saytzeff's rule (giving the more substituted, stable alkene as major).",
    "Organometallics: Wurtz reaction (2 R–X + 2 Na xrightarrow{dry ether} R–R) couples alkyl halides into symmetrical alkanes; Grignard reagents (R–MgX in dry ether) possess carbanionic reactivity and react with any active hydrogen to form alkanes (R–H)."
  ],

  importantTerms: HALOALKANES_CONCEPTS.fundamentalTerms.slice(0, 7),

  conceptExplanation: [
    {
      heading: "1. Classification, Structural Anatomy & IUPAC Nomenclature of Haloalkanes",
      paragraphs: [
        "Haloalkanes (alkyl halides) have the general formula CₙH₂ₙ₊₁X (or R–X). Depending on the nature of the carbon atom bearing the halogen, they are categorized into Primary (1°, RCH₂X), Secondary (2°, R₂CHX), and Tertiary (3°, R₃CX).",
        "Crucial structural distinctions frequently tested in NEET include: (1) Allylic Halides: Halogen attached to an sp³ carbon next to a carbon-carbon double bond (e.g. Allyl chloride, CH₂=CH–CH₂–Cl); (2) Benzylic Halides: Halogen attached to an sp³ carbon directly attached to an aromatic ring (e.g. Benzyl chloride, C₆H₅–CH₂–Cl); (3) Vinylic Halides: Halogen directly bonded to an sp² carbon of a double bond (e.g. Vinyl chloride, CH₂=CH–Cl); (4) Aryl Halides: Halogen directly bonded to an sp² carbon of an aromatic ring (e.g. Chlorobenzene, C₆H₅–Cl).",
        "In IUPAC nomenclature, the longest continuous carbon chain containing the halogen is selected as the principal chain. Numbering begins from the end that gives the lowest locant set to all substituents. Halogens are always treated as prefixes (fluoro-, chloro-, bromo-, iodo-) in alphabetical order."
      ],
      tables: [
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.primaryVsSecondaryVsTertiary,
        {
          title: "NEET Structural Classification Matrix",
          headers: ["Class of Halide", "Hybridisation of C–X", "Representative Formula", "S_N1 / S_N2 Reactivity Trend", "NEET High-Yield Trap"],
          rows: [
            ["Alkyl (1°)", "sp³", "CH₃CH₂–Cl", "S_N2 Very Fast; S_N1 Sluggish", "Neopentyl chloride (CH₃)₃CCH₂Cl is 1° but S_N2 is very slow due to steric hindrance."],
            ["Alkyl (2°)", "sp³", "(CH₃)₂CH–Br", "Moderate S_N1 & S_N2", "Solvent determines pathway: Protic favors S_N1, Aprotic favors S_N2."],
            ["Alkyl (3°)", "sp³", "(CH₃)₃C–Br", "S_N1 Very Fast; S_N2 Zero", "Alkoxides or strong bases cause 100% E2 elimination (alkene) rather than substitution."],
            ["Allylic", "sp³", "CH₂=CH–CH₂–Cl", "Exceptionally Fast S_N1 & S_N2", "Allylic carbocation is resonance-stabilized (CH₂=CH–CH₂⁺ ↔ ⁺CH₂–CH=CH₂)."],
            ["Benzylic", "sp³", "C₆H₅–CH₂–Cl", "Exceptionally Fast S_N1 & S_N2", "Forms stable benzyl carbocation; gives white ppt of AgCl with aqueous AgNO₃."],
            ["Vinylic", "sp²", "CH₂=CH–Cl", "Extremely Inert to S_N", "C–Cl bond has partial double bond character due to resonance with C=C."],
            ["Aryl", "sp²", "C₆H₅–Cl", "Extremely Inert to S_N", "Resonance + sp² carbon + phenyl cation instability prevents S_N substitution."]
          ]
        }
      ]
    },
    {
      heading: "2. Nature of the C–X Bond: Dipole Moments, Bond Enthalpies & Leaving Group Ability",
      paragraphs: [
        "The carbon-halogen bond is polarized due to the higher electronegativity of halogens relative to carbon (Electronegativity: F > Cl > Br > I > C). Carbon carries a partial positive charge (C^{\\delta+}) making it susceptible to nucleophilic attack, while halogen carries a partial negative charge (X^{\\delta-}).",
        "As we descend Group 17, atomic size increases (F < Cl < Br < I). Consequently, the C–X bond length increases: C–F (139 pm) < C–Cl (178 pm) < C–Br (193 pm) < C–I (214 pm), and the C–X bond enthalpy decreases: C–F (452 kJ/mol) > C–Cl (351 kJ/mol) > C–Br (293 kJ/mol) > C–I (234 kJ/mol).",
        "Anomalous Dipole Moment Trend (NCERT): Dipole moment is the product of charge and distance (μ = q × d). Although fluorine is more electronegative than chlorine, the exceptionally small bond distance of C–F makes the product q × d maximum for chloromethane! Dipole moment order: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D).",
        "Leaving Group Ability: The weaker the C–X bond and the more stable the departing halide anion (I⁻ is the largest, most polarizable, and conjugate base of strong acid HI), the faster the substitution. Reactivity order: R–I > R–Br > R–Cl >> R–F."
      ]
    },
    {
      heading: "3. Synthetic Preparations of Haloalkanes: Alcohols, Alkenes & Halogen Exchange",
      paragraphs: [
        "1. From Alcohols: Alcohols react with halogenating reagents to replace –OH by –X. (A) Darzen's Process: ROH + SOCl₂ xrightarrow{Pyridine} RCl + SO₂↑ + HCl↑. This is the BEST industrial and laboratory method because the by-products (SO₂ and HCl) are gases that escape automatically, leaving pure RCl. (B) Lucas Reagent: ROH + conc. HCl xrightarrow{anh. ZnCl₂} RCl + H₂O. Turbidity order: 3° (immediate) > 2° (5 min) > 1° (no ppt at room temp). (C) Phosphorus Halides: 3 ROH + PCl₃ → 3 RCl + H₃PO₃; ROH + PCl₅ → RCl + POCl₃ + HCl; ROH + Red P/Br₂ or I₂ → R–Br or R–I.",
        "2. From Alkenes: (A) Markovnikov Addition: CH₃–CH=CH₂ + HX → CH₃–CH(X)–CH₃ (2° halide major via more stable 2° carbocation). (B) Kharasch Peroxide Effect (Anti-Markovnikov): CH₃–CH=CH₂ + HBr xrightarrow{Peroxide} CH₃–CH₂–CH₂–Br (1-Bromopropane). Operates EXCLUSIVELY with HBr via bromine free-radical chain addition. HCl and HI do NOT show peroxide effect due to endothermic propagation steps.",
        "3. Halogen Exchange Reactions: (A) Finkelstein Reaction: R–Cl / R–Br + NaI xrightarrow{Dry Acetone} R–I + NaCl↓ / NaBr↓. Insoluble NaCl/NaBr precipitates in acetone, driving equilibrium forward. (B) Swarts Reaction: R–Cl / R–Br + AgF (or Hg₂F₂, CoF₃, SbF₃) → R–F + AgCl↓. The premier synthetic method for pure alkyl fluorides."
      ],
      tables: [
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.markovnikovVsAntiMarkovnikov
      ]
    },
    {
      heading: "4. Physical Properties of Alkyl Halides (Boiling Points, Density & Solubility)",
      paragraphs: [
        "1. Boiling Points: For a given alkyl group, boiling point decreases in the order: R–I > R–Br > R–Cl > R–F. This is because larger halogen atoms have higher polarizability and greater van der Waals dispersion forces.",
        "2. Isomeric Branching Effect: For isomeric alkyl halides, boiling point decreases with increased branching: n-Butyl bromide (375 K) > Isobutyl bromide (364 K) > sec-Butyl bromide (364 K) > tert-Butyl bromide (346 K). Branching causes the molecule to assume a more compact spherical shape with smaller surface area, reducing van der Waals intermolecular attraction.",
        "3. Solubility: Haloalkanes are polar molecules, yet they are practically IMMISCIBLE with water! To dissolve in water, energy is required to overcome existing strong hydrogen bonds between water molecules and dipole-dipole attractions between haloalkanes. The new dipole-induced dipole interactions formed between haloalkane and water molecules do not release enough energy to compensate for the disruption of water's H-bonded network.",
        "4. Density: Density increases with atomic mass of halogen and number of halogen atoms: R–I > R–Br > R–Cl; and CH₂Cl₂ < CHCl₃ < CCl₄. Polybromo and polyiodo derivatives are heavier than water."
      ]
    },
    {
      heading: "5. S_N1 vs S_N2 Nucleophilic Substitution Mechanisms & Stereochemical Outcomes",
      paragraphs: [
        "Nucleophilic substitution involves displacement of the halide leaving group (X⁻) by an electron-rich nucleophile (Nu⁻). Two distinct mechanistic pathways exist depending on substrate structure, nucleophile strength, and solvent.",
        "S_N1 Mechanism (Two-Step, Unimolecular): Step 1 is the slow heterolytic cleavage of the C–X bond to form a planar sp² carbocation intermediate (Rate = k[R–X]). Step 2 is the fast attack of the nucleophile from either the top or bottom lobe of the planar carbocation. Substrate reactivity: 3° > 2° > 1° > methyl (governed by carbocation stability). Allylic and benzylic halides react very rapidly due to resonance. Stereochemistry: Racemisation (d,l pair) accompanied by partial inversion due to shielding by the departing leaving group.",
        "S_N2 Mechanism (One-Step, Bimolecular): The nucleophile attacks from the backside (180° opposite to leaving group) simultaneously as the C–X bond breaks, passing through a pentacoordinate transition state [Nu···C···X]‡ with trigonal bipyramidal geometry (Rate = k[R–X][Nu⁻]). Substrate reactivity: methyl > 1° > 2° >> 3° (governed by steric hindrance). Stereochemistry: 100% Walden Inversion (Umbrella inversion). Rearrangements never occur.",
        "Solvent Effects: Polar Protic solvents (H₂O, ROH) stabilize carbocations and halide leaving groups via hydrogen bonding, strongly accelerating S_N1. Polar Aprotic solvents (DMSO, DMF, Acetone) solvate only cations, leaving nucleophile anions naked, unshielded, and hyper-reactive, strongly accelerating S_N2."
      ],
      visuals: [
        {
          caption: "S_N1 Two-Step Energy Profile & Planar Carbocation Racemisation.",
          guide: "Observe the slow rate-determining ionization generating a planar sp² carbocation followed by rapid nucleophilic attack.",
          svgContent: HALOALKANES_DIAGRAMS.sn1ReactionCoordinateMechanism
        },
        {
          caption: "S_N2 One-Step Concerted Transition State & Walden Inversion.",
          guide: "Observe the 180° backside approach, pentacoordinate trigonal bipyramidal transition state, and 100% umbrella inversion.",
          svgContent: HALOALKANES_DIAGRAMS.sn2WaldenInversionMechanism
        }
      ],
      tables: [
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.sn1VsSn2Master
      ]
    },
    {
      heading: "6. Ambidentate Nucleophiles (KCN vs AgCN & KNO₂ vs AgNO₂)",
      paragraphs: [
        "Ambidentate nucleophiles possess two distinct nucleophilic donor atoms through either of which they can attack an electrophilic carbon centre.",
        "1. Cyanide Ion (:C≡N:⁻): Reaction with KCN yields Alkyl Cyanide / Nitrile (R–C≡N). KCN is ionic [K⁺ (:C≡N:⁻)], and because the C–C bond (347 kJ/mol) is thermodynamically stronger and more stable than the C–N bond (305 kJ/mol), attack occurs through carbon. In contrast, reaction with AgCN yields Alkyl Isocyanide (R–N≡C). AgCN is predominantly covalent (Ag–C≡N:); the carbon atom is engaged in covalent bonding with silver, leaving only the nitrogen lone pair available to attack.",
        "2. Nitrite Ion (⁻O–N=O): Reaction with KNO₂ yields Alkyl Nitrite (R–O–N=O). KNO₂ is ionic, and the negative charge resides on the electronegative oxygen atom, which attacks carbon. Reaction with AgNO₂ yields Nitroalkane (R–NO₂). AgNO₂ is covalent (Ag–O–N=O); the oxygen is bonded to silver, leaving the nitrogen lone pair to donate electrons to carbon.",
        "Ammonolysis: R–X + alcoholic NH₃ (excess) xrightarrow{373 K} R–NH₂ (1° amine major). If excess R–X is used, progressive alkylation yields 2° amine, 3° amine, and finally quaternary ammonium salt [R₄N]⁺X⁻."
      ],
      tables: [
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.kcnVsAgcn,
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.kno2VsAgno2
      ]
    },
    {
      heading: "7. Elimination Reactions: β-Dehydrohalogenation & Saytzeff Regioselectivity",
      paragraphs: [
        "When an alkyl halide with β-hydrogen atoms is heated with concentrated alcoholic KOH, a hydrogen atom from the β-carbon and the halogen atom from the α-carbon are eliminated as HX, forming an alkene (β-elimination / E2 mechanism).",
        "Saytzeff (Zaitsev) Rule: When dehydrohalogenation can yield more than one alkene, the major product is the MORE SUBSTITUTED ALKENE (i.e. the alkene carrying the greater number of alkyl groups attached to the doubly bonded carbons). Example: 2-Bromobutane + alc. KOH / Δ → But-2-ene (80%, Saytzeff major, more stable due to 6 hyperconjugative α-hydrogens) + But-1-ene (20%, minor, 2 α-hydrogens).",
        "Hofmann Rule Exception: When a bulky base (such as potassium tert-butoxide, (CH₃)₃CO⁻K⁺) or a poor leaving group (such as alkyl fluoride) is employed, steric hindrance prevents proton abstraction from the more substituted internal carbon, making the LESS substituted alkene (Hofmann product) the major product.",
        "Aqueous KOH vs Alcoholic KOH: Aqueous KOH provides hydrated OH⁻ ions (nucleophile) giving substitution (Alcohol); Alcoholic KOH generates ethoxide ions (C₂H₅O⁻, powerful base) causing elimination (Alkene)."
      ],
      visual: {
        caption: "Competition between Aqueous KOH (Substitution) and Alcoholic KOH (Saytzeff Elimination).",
        guide: "Note the role of base strength and solvent in governing whether an alcohol or alkene is produced.",
        svgContent: HALOALKANES_DIAGRAMS.eliminationVsSubstitutionCoordinate
      },
      tables: [
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.aqueousKohVsAlcoholicKoh
      ]
    },
    {
      heading: "8. Organometallic Compounds: Wurtz Reaction & Grignard Reagents (RMgX)",
      paragraphs: [
        "1. Wurtz Reaction: Heating an alkyl halide with sodium metal in dry ether produces a symmetrical alkane containing double the number of carbon atoms: 2 R–X + 2 Na xrightarrow{Dry Ether} R–R + 2 NaX. Limitations: Suitable only for symmetrical alkanes with an even number of carbon atoms. Mixing two different alkyl halides (e.g. CH₃Cl + C₂H₅Cl) yields an inseparable mixture of 3 alkanes (Ethane, Propane, Butane). Methane (CH₄) cannot be prepared.",
        "2. Grignard Reagents (R–MgX): Alkyl halides react with magnesium ribbon in dry ether to form alkylmagnesium halides (RMgX). In RMgX, the C–Mg bond is covalent and highly polarized (R^{\\delta-}–Mg^{\\delta+}X), endowing the carbon atom with powerful carbanionic nucleophilic and basic character.",
        "Moisture Destruction: Grignard reagents react instantaneously with any substance containing active hydrogen (H₂O, D₂O, ROH, RCOOH, NH₃, terminal alkynes) to form hydrocarbons: R–MgX + H₂O → R–H + Mg(OH)X; R–MgX + D₂O → R–D + Mg(OD)X. Therefore, strictly anhydrous dry ether must be maintained during preparation and storage."
      ],
      visual: {
        caption: "Master Reaction Roadmap for Alkyl Halides (R–X).",
        guide: "Review all eight core synthetic pathways starting from alkyl halides.",
        svgContent: HALOALKANES_DIAGRAMS.haloalkanesMasterReactionMap
      }
    }
  ],

  formulae: HALOALKANES_TRAPS_AND_SHEET.formulaAndOrderBank,

  visualLearning: {
    type: 'svg',
    caption: "Complete Reaction Roadmap for Alkyl Halides (R–X).",
    svgContent: HALOALKANES_DIAGRAMS.haloalkanesMasterReactionMap
  },

  neetImportantPoints: [
    "Darzen's process (ROH + SOCl₂ → RCl + SO₂↑ + HCl↑) is the cleanest preparation method because by-products escape as gases.",
    "Peroxide effect (Anti-Markovnikov addition) operates EXCLUSIVELY with HBr; fails with HCl and HI.",
    "Dipole moment order: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D).",
    "S_N1 reactivity: Allylic ≈ Benzylic > 3° > 2° > 1° > methyl (Racemisation with partial inversion).",
    "S_N2 reactivity: methyl > 1° > 2° >> 3° (100% Walden inversion; accelerated by polar aprotic solvents like DMSO/DMF/Acetone).",
    "KCN gives alkyl cyanide (R–CN); AgCN gives alkyl isocyanide (R–NC).",
    "KNO₂ gives alkyl nitrite (R–ONO); AgNO₂ gives nitroalkane (R–NO₂).",
    "Saytzeff rule: β-elimination with alc. KOH gives the more substituted, stable alkene as major.",
    "Williamson synthesis with 3° alkyl halide yields 100% alkene (elimination) instead of ether.",
    "Grignard reagent (RMgX) must be prepared in strictly dry ether; reacts with water to form alkane (R–H)."
  ],

  commonConfusions: HALOALKANES_TRAPS_AND_SHEET.commonTraps.slice(0, 14).map(trap => ({
    commonConfusion: trap.wrongThinking,
    correctFact: trap.correctConcept,
    whyItMattersForNEET: trap.neetTip
  })),

  quickRevision: [
    "S_N1 = 3° > 2° > 1° (Carbocation, Racemisation, Polar Protic)",
    "S_N2 = Methyl > 1° > 2° >> 3° (Transition State, Walden Inversion, Polar Aprotic)",
    "Leaving Group = I⁻ > Br⁻ > Cl⁻ >> F⁻ | C–I is weakest bond",
    "KCN = Nitrile (R–CN) | AgCN = Isocyanide (R–NC)",
    "KNO₂ = Nitrite (R–ONO) | AgNO₂ = Nitroalkane (R–NO₂)",
    "Aq. KOH = Substitution (Alcohol) | Alc. KOH + Δ = Elimination (Saytzeff Alkene)",
    "Wurtz = 2 R–X + 2 Na → R–R (Symmetrical alkane) | Grignard = RMgX + H₂O → R–H"
  ],

  practiceQuestions: HALOALKANES_PRACTICE_SETS.topic1PracticeQuestions,

  pyqs: HALOALKANES_PYQS.filter(p => [2023, 2022, 2021, 2020, 2019, 2014, 2010].includes(p.year || 0))
};
