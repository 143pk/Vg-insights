import { DetailedTopicContent } from '../../types/neet';
import { ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersDiagrams';
import { ALCOHOLS_PHENOLS_ETHERS_CONCEPTS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersTermsAndConcepts';
import { ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersTrapsAndTables';
import { ALCOHOLS_PHENOLS_ETHERS_PYQS } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersPyqs';
import { ALCOHOLS_PHENOLS_ETHERS_PRACTICE } from '../alcoholsPhenolsEthers/alcoholsPhenolsEthersPracticeSets';

export const chemPhenolsReactionsDetails: DetailedTopicContent = {
  topicId: "chem-phenols-reactions",
  topicName: "Phenols — Acidity, Reactions & Named Reactions",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Alcohols, Phenols and Ethers",

  whatIsThisTopic: "Detailed study of aromatic hydroxy compounds (Phenols): structure and resonance, industrial preparation (Cumene process, Dow's process, Diazonium hydrolysis, Sulphonation), comparative acidic strength and pKₐ values, substituent electronic effects (-R, +R, -I, +I), reactions with Na/NaOH/NaHCO₃, electrophilic substitutions (bromination in water vs CS₂, nitration, sulphonation), master named reactions (Kolbe-Schmitt, Reimer-Tiemann with :CCl₂ intermediate), reduction with Zinc dust, and oxidation to benzoquinone.",

  basicIdea: [
    "Phenol (C₆H₅OH) contains a hydroxyl group bonded directly to an sp²-hybridized benzene ring carbon (C–O bond length 136 pm with partial double bond character).",
    "Phenol is ~10⁶ times more acidic than aliphatic alcohols because phenoxide ion (C₆H₅O⁻) is resonance stabilized with negative charge dispersed over ortho and para positions across 5 canonical structures.",
    "Electron-withdrawing groups (–NO₂, –CN, –X) stabilize phenoxide and increase acidity (Para > Ortho > Meta). Picric acid (2,4,6-trinitrophenol, pKₐ = 0.71) is more acidic than acetic acid.",
    "Electron-donating groups (–CH₃, –OCH₃) destabilize phenoxide and decrease acidity (Cresols < Phenol).",
    "Phenol dissolves in aqueous NaOH, but DOES NOT react with aqueous NaHCO₃ to liberate CO₂ gas (since phenol is weaker than carbonic acid).",
    "Bromination of phenol in water (polar) yields 2,4,6-tribromophenol (white precipitate); in non-polar CS₂ at 273 K, it gives p-bromophenol as major product.",
    "Kolbe-Schmitt reaction: Sodium phenoxide + CO₂ (400 K, 4–7 atm) followed by H⁺ yields Salicylic acid (precursor for Aspirin).",
    "Reimer-Tiemann reaction: Phenol + CHCl₃ + aq. NaOH (340 K) proceeds via Dichlorocarbene (:CCl₂) intermediate to give Salicylaldehyde.",
    "Phenol heated with Zinc dust reduces to Benzene; oxidation with chromic acid yields p-Benzoquinone; neutral FeCl₃ gives a deep violet complex."
  ],

  importantTerms: ALCOHOLS_PHENOLS_ETHERS_CONCEPTS.phenolsTerms,

  conceptExplanation: [
    {
      heading: "1. Structure, Industrial Preparation & Physical Properties of Phenol",
      paragraphs: [
        "Phenol (Carbolic acid, C₆H₅OH) consists of a hydroxyl group attached to an sp² aromatic ring carbon. The C–O bond length in phenol is 136 pm, significantly shorter than the C–O bond in methanol (142 pm). This bond shortening arises from two factors: (i) delocalization of oxygen lone pairs into the aromatic π-system giving partial double bond character, and (ii) the greater s-character of the sp² carbon (33.3% s-character) holding bonding electrons closer to the nucleus.",
        "Industrial Preparation Methods:",
        "1. Cumene Hydroperoxide Process (Primary Industrial Source): Benzene is alkylated with propene in the presence of H₃PO₄ to form Cumene (Isopropylbenzene). Aerial oxidation of cumene at 368–408 K generates cumene hydroperoxide [C₆H₅C(CH₃)₂OOH]. Subsequent acid hydrolysis with dilute H₂SO₄ at 323–363 K induces a Hock rearrangement with phenyl migration to oxygen, producing Phenol and an equimolar quantity of Acetone (valuable industrial byproduct).",
        "2. From Benzene Diazonium Chloride: Aniline is diazotized (NaNO₂ + HCl at 273–278 K) to form benzene diazonium chloride (C₆H₅N₂⁺Cl⁻). Warming the diazonium salt solution with water or dilute acid evolves nitrogen gas and hydrolyzes to phenol: C₆H₅N₂⁺Cl⁻ + H₂O xrightarrow{warm} C₆H₅OH + N₂↑ + HCl.",
        "3. Dow's Process (From Chlorobenzene): Chlorobenzene heated with 6–8% aqueous NaOH at 623 K and 300 atm pressure forms sodium phenoxide, which upon acidification with dilute HCl yields phenol.",
        "4. From Benzene Sulphonic Acid: Benzene is sulphonated with oleum to benzene sulphonic acid (C₆H₅SO₃H), which is neutralized with NaOH to sodium benzene sulphonate. Fusion with solid NaOH at 573 K yields sodium phenoxide, followed by acidification to phenol."
      ],
      tables: [
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.alcoholVsPhenol,
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.phenolVsCarboxylicAcid
      ],
      importantPoints: [
        "Cumene process generates Phenol and Acetone in an exact 1:1 equimolar ratio.",
        "Phenol is a white crystalline solid (mp 43°C) that turns pink upon aerial oxidation.",
        "Phenol forms intermolecular hydrogen bonds with high boiling point (182°C) and moderate water solubility."
      ]
    },
    {
      heading: "2. Mechanistic Origin of Phenol Acidity & Substituent Electronic Effects",
      paragraphs: [
        "Phenol is a weak Brønsted acid (pKₐ ≈ 9.98). When phenol ionizes in water, it establishes an equilibrium: C₆H₅OH + H₂O ⇌ C₆H₅O⁻ (Phenoxide ion) + H₃O⁺.",
        "Why is Phenol ~10⁶ times more acidic than Alcohols (pKₐ ~ 16–18)?",
        "1. Resonance Stabilization of Phenoxide Ion: In un-ionized phenol, resonance involves charge separation (+ on oxygen, - on carbon), which is energetically less favorable. In contrast, the phenoxide ion possesses a full negative charge that is delocalized over 5 resonance contributors, distributing negative electron density to the ortho and para ring carbons without charge separation.",
        "2. Destabilization of Alkoxide Ion: In aliphatic alkoxides (RO⁻), the negative charge is strictly localized on oxygen and further intensified by the +I inductive electron donation of the alkyl group.",
        "Substituent Electronic Effects on Acidity:",
        "• Electron-Withdrawing Groups (EWG: –NO₂, –CN, –CHO, –COOH, –X): Disperse negative charge away from oxygen through -R resonance and -I inductive withdrawal, stabilizing the phenoxide ion and dramatically INCREASING acidic strength (lowering pKₐ).",
        "• Electron-Donating Groups (EDG: –CH₃, –OCH₃, –NH₂): Push electron density into the ring through +I and +R effects, intensifying negative charge on oxygen, destabilizing the phenoxide ion and DECREASING acidic strength (raising pKₐ).",
        "Positional Impact of Nitro Groups:",
        "• Para-Nitrophenol (pKₐ = 7.15): Strongest mononitrophenol acid due to direct -R resonance delocalization into the nitro group and -I effect.",
        "• Ortho-Nitrophenol (pKₐ = 7.23): Slightly less acidic than para because intramolecular hydrogen bonding between –OH and the ortho –NO₂ group stabilizes the un-ionized phenol, hindering proton departure.",
        "• Meta-Nitrophenol (pKₐ = 8.35): Nitro group cannot delocalize negative charge via resonance from the meta position; only -I inductive withdrawal operates.",
        "• 2,4,6-Trinitrophenol (Picric Acid, pKₐ = 0.71): Symmetrical -R and -I stabilization by three nitro groups makes it stronger than acetic acid and benzoic acid!"
      ],
      visual: {
        type: 'svg',
        svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.phenolAcidityAndResonance,
        caption: "Resonance Structures of Phenoxide Ion & Quantitative Substituent Acidity Orders.",
        guide: "Observe the negative charge distribution at ortho and para carbons and the stabilizing pull of electron-withdrawing groups."
      },
      tables: [
        ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS.comparisonTables.substituentEffectsPhenolAcidity
      ],
      importantPoints: [
        "Master Acidity Order: Picric acid (0.71) > 2,4-Dinitrophenol (4.01) > p-Nitrophenol (7.15) > o-Nitrophenol (7.23) > m-Nitrophenol (8.35) > Phenol (9.98) > p-Cresol (10.26) > Ethanol (15.9).",
        "o-Nitrophenol is steam volatile (intramolecular H-bond); p-nitrophenol is non-volatile (intermolecular H-bond).",
        "Phenol does NOT liberate CO₂ from aqueous NaHCO₃."
      ]
    },
    {
      heading: "3. Master Named Reactions: Kolbe-Schmitt & Reimer-Tiemann Formylation",
      paragraphs: [
        "1. Kolbe's Reaction (Kolbe-Schmitt Carboxylation):",
        "Treatment of phenol with aqueous NaOH converts it into sodium phenoxide, which possesses much greater nucleophilic reactivity than un-ionized phenol. When sodium phenoxide is heated with carbon dioxide (a weak electrophile, CO₂) at 400 K under 4–7 atm pressure, electrophilic aromatic substitution occurs predominantly at the ortho position (directed and stabilized by Na⁺ ion chelation). Acidification with dilute HCl yields Salicylic acid (2-hydroxybenzoic acid) as the major product.",
        "Industrial Conversion of Salicylic Acid: (i) Reaction with acetic anhydride in the presence of conc. H₂SO₄ yields Aspirin (Acetylsalicylic acid), a potent analgesic/antipyretic; (ii) Reaction with methanol in conc. H₂SO₄ yields Methyl salicylate (Oil of Wintergreen, topical liniment); (iii) Reaction with phenol in POCl₃ yields Phenyl salicylate (Salol, internal antiseptic).",
        "2. Reimer-Tiemann Reaction (Formylation):",
        "When phenol is treated with chloroform (CHCl₃) in the presence of aqueous sodium hydroxide at 340 K, an aldehyde group (–CHO) is introduced at the ortho position, yielding Salicylaldehyde (2-hydroxybenzaldehyde) as the major product.",
        "Mechanism & Active Electrophile:",
        "Step 1: Hydroxide ion abstracts an acidic proton from chloroform to generate the trichloromethyl carbanion (⁻CCl₃), which spontaneously undergoes α-elimination of Cl⁻ to yield Dichlorocarbene (:CCl₂). Dichlorocarbene is an electron-deficient, neutral singlet carbene with 6 valence electrons that serves as the active electrophile.",
        "Step 2: Electrophilic attack of :CCl₂ on sodium phenoxide occurs at the ortho position, forming an intermediate benzylidene dichloride species [o-O⁻–C₆H₄–CHCl₂].",
        "Step 3: Alkaline hydrolysis of the –CHCl₂ group converts it into an unstable gem-diol [–CH(OH)₂], which spontaneously loses H₂O to generate the ortho-aldehyde (–CHO).",
        "Reimer-Tiemann Variation with CCl₄: When Carbon tetrachloride (CCl₄) is used instead of CHCl₃ in aqueous NaOH, the intermediate formed is –CCl₃, whose hydrolysis yields Salicylic acid (2-hydroxybenzoic acid) as the major product!"
      ],
      visual: {
        type: 'svg',
        svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.kolbeAndReimerTiemannMechanisms,
        caption: "Mechanistic Blueprints for Kolbe-Schmitt and Reimer-Tiemann Reactions.",
        guide: "Trace the generation of singlet dichlorocarbene (:CCl₂) and the role of sodium phenoxide ring activation."
      },
      importantPoints: [
        "Kolbe's reaction electrophile: Carbon dioxide (CO₂); Product: Salicylic acid.",
        "Reimer-Tiemann electrophile: Dichlorocarbene (:CCl₂); Product: Salicylaldehyde.",
        "If CCl₄ is used in Reimer-Tiemann, Salicylic acid is formed."
      ]
    },
    {
      heading: "4. Electrophilic Substitution, Reduction & Oxidation Reactions of Phenol",
      paragraphs: [
        "1. Bromination of Phenol:",
        "• In Polar Aqueous Medium (Bromine Water, Br₂ / H₂O): Phenol ionizes into the strongly activating phenoxide ion, causing instantaneous, exhaustive electrophilic substitution at all available ortho and para positions to precipitate a white crystalline solid of 2,4,6-Tribromophenol.",
        "• In Non-Polar Medium (Br₂ in CS₂ or CHCl₃ at 273 K): Phenol remains largely un-ionized; the activating effect of –OH is moderate, yielding selective monobromination with 4-Bromophenol (p-bromophenol) as the major product (~85%) due to minimal steric hindrance.",
        "2. Nitration of Phenol:",
        "• With Dilute HNO₃ at 298 K: Phenol undergoes mononitration yielding a mixture of ortho-nitrophenol (steam volatile due to intramolecular H-bonding) and para-nitrophenol (non-volatile due to intermolecular H-bonding), readily separated by steam distillation.",
        "• With Concentrated HNO₃ (+ conc. H₂SO₄): Yields 2,4,6-Trinitrophenol (Picric Acid). To prevent oxidative destruction of the aromatic ring, industrial synthesis first sulphonates phenol to 2,4-phenoldisulphonic acid followed by nitration with conc. HNO₃.",
        "3. Reduction with Zinc Dust (Zn / Δ): Heating phenol with zinc dust removes oxygen to form Benzene (C₆H₆) and solid Zinc oxide (ZnO).",
        "4. Oxidation with Acidified Sodium Dichromate (Na₂Cr₂O₇ / H₂SO₄): Chromic acid oxidation of phenol produces conjugated Benzo-1,4-quinone (p-Benzoquinone). In air, phenol slowly oxidizes to a pink mixture containing phenoquinone.",
        "5. Qualitative Distinction Test (Neutral FeCl₃): Phenols react with neutral aqueous FeCl₃ solution to form intense violet/purple colored coordination complexes of the formula [Fe(OC₆H₅)₆]³⁻. Aliphatic alcohols give NO colour."
      ],
      importantPoints: [
        "Br₂ / H₂O → 2,4,6-Tribromophenol (white ppt); Br₂ / CS₂ → p-Bromophenol (major).",
        "Steam distillation separates o-nitrophenol (volatile) from p-nitrophenol (non-volatile).",
        "Phenol + Zn dust / Δ → Benzene + ZnO.",
        "Phenol + neutral FeCl₃ → Violet colouration."
      ]
    }
  ],

  formulae: [
    {
      title: "Phenol Ionization Constant",
      formula: "K_a = \\frac{[\\text{C}_6\\text{H}_5\\text{O}^-][\\text{H}_3\\text{O}^+]}{[\\text{C}_6\\text{H}_5\\text{OH}]} \\approx 1.0 \\times 10^{-10} \\quad (pK_a = 9.98)",
      meaning: "Quantitative measure of phenol acidic dissociation in water at 298 K."
    },
    {
      title: "Kolbe-Schmitt Carboxylation",
      formula: "\\text{C}_6\\text{H}_5\\text{ONa} + \\text{CO}_2 \\xrightarrow{400\\text{ K, 4-7 atm}} o-\\text{NaO–C}_6\\text{H}_4\\text{–COONa} \\xrightarrow{\\text{H}^+} o-\\text{HO–C}_6\\text{H}_4\\text{–COOH} \\text{ (Salicylic Acid)}",
      meaning: "Industrial synthesis of salicylic acid from sodium phenoxide."
    },
    {
      title: "Reimer-Tiemann Formylation",
      formula: "\\text{C}_6\\text{H}_5\\text{OH} + \\text{CHCl}_3 + 3\\text{ NaOH} \\xrightarrow{340\\text{ K}} o-\\text{NaO–C}_6\\text{H}_4\\text{–CHO} \\xrightarrow{\\text{H}^+} o-\\text{HO–C}_6\\text{H}_4\\text{–CHO} \\text{ (Salicylaldehyde)}",
      meaning: "Formylation of phenol via dichlorocarbene intermediate."
    },
    {
      title: "Reduction to Benzene",
      formula: "\\text{C}_6\\text{H}_5\\text{OH} + \\text{Zn} \\xrightarrow{\\Delta} \\text{C}_6\\text{H}_6 + \\text{ZnO}",
      meaning: "Reductive deoxygenation of phenol using zinc dust."
    }
  ],

  visualLearning: {
    type: 'svg',
    caption: "Resonance, Acidity & Master Named Reactions of Phenol.",
    svgContent: ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS.phenolAcidityAndResonance
  },

  neetImportantPoints: [
    "Phenol is 10⁶ times more acidic than ethanol due to resonance stabilization of the phenoxide ion.",
    "Master Acidity: Picric acid > p-Nitrophenol > o-Nitrophenol > m-Nitrophenol > Phenol > p-Cresol > Alcohols.",
    "o-Nitrophenol is steam volatile (chelation / intramolecular H-bonding); p-nitrophenol is non-volatile.",
    "Phenol dissolves in aqueous NaOH, but DOES NOT react with aqueous NaHCO₃ to evolve CO₂.",
    "Reimer-Tiemann active electrophile is Dichlorocarbene (:CCl₂); product is Salicylaldehyde.",
    "Kolbe-Schmitt reaction uses CO₂ under 4–7 atm to yield Salicylic acid (used to make Aspirin).",
    "Bromine water gives white precipitate of 2,4,6-tribromophenol; Br₂/CS₂ gives p-bromophenol.",
    "Cumene process yields Phenol and Acetone in an equimolar 1:1 ratio.",
    "Phenol + Zn dust / Δ yields Benzene; neutral FeCl₃ gives a deep violet complex."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming Phenol undergoes nucleophilic substitution of –OH when treated with HX or Lucas reagent.",
      correctFact: "Phenol does NOT react with HX or Lucas reagent because the aromatic C(sp²)–O bond has partial double bond character due to resonance.",
      whyItMattersForNEET: "Frequently tested in organic reagent reactivity questions."
    },
    {
      commonConfusion: "Believing meta-nitrophenol is stabilized by -R resonance.",
      correctFact: "Resonance (+R / -R) operates strictly at ortho and para positions. At the meta position, –NO₂ exerts ONLY -I inductive withdrawal.",
      whyItMattersForNEET: "Crucial for correctly answering pKₐ ranking questions."
    },
    {
      commonConfusion: "Thinking Picric acid is a carboxylic acid because of its name.",
      correctFact: "Picric acid is 2,4,6-trinitrophenol. It has NO –COOH group; its acidity (pKₐ 0.71) comes from three strong -R/-I nitro groups.",
      whyItMattersForNEET: "Classic NEET structural identification trap."
    }
  ],

  quickRevision: [
    "Phenol Acidity: Picric > p-NO₂ > o-NO₂ > m-NO₂ > Phenol > p-Cresol > EtOH",
    "Cumene + O₂ → Cumene hydroperoxide xrightarrow{H⁺} Phenol + Acetone",
    "Kolbe: Phenoxide + CO₂ (400 K, 4-7 atm) xrightarrow{H⁺} Salicylic acid",
    "Reimer-Tiemann: Phenol + CHCl₃ + NaOH → Salicylaldehyde (Electrophile: :CCl₂)",
    "Br₂ in H₂O → 2,4,6-Tribromophenol (White ppt); Br₂ in CS₂ → p-Bromophenol",
    "Phenol + Zn dust / Δ → Benzene; Phenol + Na₂Cr₂O₇/H₂SO₄ → p-Benzoquinone",
    "Phenol + Neutral FeCl₃ → Intense Violet Complex [Fe(OC₆H₅)₆]³⁻"
  ],

  pyqs: ALCOHOLS_PHENOLS_ETHERS_PYQS.phenols,
  practiceQuestions: ALCOHOLS_PHENOLS_ETHERS_PRACTICE.topic2Phenols
};
