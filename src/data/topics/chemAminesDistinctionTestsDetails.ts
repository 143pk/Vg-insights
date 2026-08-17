import { DetailedTopicContent } from '../../types/neet';
import { AMINES_DIAGRAMS } from '../amines/aminesDiagrams';
import { AMINES_CONCEPTS } from '../amines/aminesTermsAndConcepts';
import { AMINES_TRAPS_AND_TABLES } from '../amines/aminesTrapsAndTables';
import { AMINES_PYQS } from '../amines/aminesPyqs';
import { DIAZONIUM_PRACTICE_QUESTIONS } from '../amines/aminesPracticeSets';

export const chemAminesDistinctionTestsDetails: DetailedTopicContent = {
  topicId: "chem-amines-distinction-tests",
  topicName: "Diazonium Salts — Preparation, Reactions & Applications",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Amines & Diazonium Salts",

  whatIsThisTopic: "Complete NCERT-first study module on arenediazonium salts (Ar–N₂⁺ X⁻), resonance stabilization, diazotisation of aniline with in-situ HNO₂ at 0–5 °C (273–278 K), temperature sensitivity and explosive nature of dry salts, complete suite of replacement reactions (Sandmeyer, Gattermann, KI iodination, Balz-Schiemann fluorination, hydrolysis to phenol, deamination with H₃PO₂/ethanol to benzene), and electrophilic azo coupling reactions with phenols and aromatic amines to produce azo dyes.",

  basicIdea: [
    "Arenediazonium salts have the general formula Ar–N₂⁺ X⁻ (where X⁻ = Cl⁻, Br⁻, HSO₄⁻, BF₄⁻). They are stabilized by resonance delocalization of positive charge into the benzene ring, remaining stable in aqueous solution at 0–5 °C (273–278 K).",
    "Aliphatic diazonium salts (R–N₂⁺) lack resonance stabilization and decompose spontaneously even at 0 °C to evolve nitrogen gas (N₂↑) and form carbocations.",
    "Diazotisation: Conversion of primary aromatic amines (aniline) into arenediazonium salts by reaction with NaNO₂ and mineral acid (HCl) at 273–278 K. Nitrous acid (HNO₂) is formed in situ, generating the nitrosonium ion (:N⁺=O) electrophile. Strict temperature control (0–5 °C) is mandatory; warming above 5 °C causes hydrolysis to phenol.",
    "Sandmeyer Reaction: Replacement of the diazonium group (–N₂⁺) by –Cl, –Br, or –CN using cuprous salts (Cu₂Cl₂/HCl, Cu₂Br₂/HBr, or CuCN/KCN) via aryl radicals, giving high yields.",
    "Gattermann Reaction: Replacement of –N₂⁺ by –Cl or –Br using finely divided metallic copper powder and halogen acid (Cu/HCl or Cu/HBr), yielding slightly lower product yields than Sandmeyer.",
    "Iodobenzene Synthesis: Diazonium group is replaced by –I simply by warming with aqueous potassium iodide (KI). No copper catalyst is required.",
    "Balz-Schiemann Reaction: Treatment of Ar–N₂⁺Cl⁻ with fluoroboric acid (HBF₄) precipitates stable benzenediazonium fluoroborate (Ar–N₂⁺BF₄⁻), which upon dry thermal decomposition yields pure fluorobenzene (Ar–F), BF₃, and N₂↑.",
    "Deamination (Reduction): Arenediazonium salts are reduced to parent arenes (benzene) using hypophosphorous acid (H₃PO₂ + H₂O in presence of Cu⁺) or ethanol (CH₃CH₂OH), liberating N₂ gas.",
    "Azo Coupling: Mildly electrophilic diazonium cations attack activated aromatic substrates at the para-position. Coupling with Phenol at pH 9–10 (mildly basic) yields p-hydroxyazobenzene (Orange dye). Coupling with Aniline at pH 4–5 (mildly acidic) yields p-aminoazobenzene (Yellow dye)."
  ],

  importantTerms: AMINES_CONCEPTS.diazoniumTerms,

  conceptExplanation: [
    {
      heading: "1. Structure, Resonance Stability & Diazotisation Mechanism",
      paragraphs: [
        "Arenediazonium salts contain the diazonium cation [Ar–N⁺≡N], in which the nitrogen atom directly bonded to the aromatic ring bears a formal positive charge. Unlike aliphatic diazonium ions which decompose spontaneously with rapid nitrogen loss, arenediazonium ions are resonance-stabilized through delocalization of the positive charge into the pi-electron cloud of the benzene ring across four canonical structures.",
        "Physical State & Safety: Benzenediazonium chloride is a colourless crystalline solid, highly soluble in water. It is stable only in cold aqueous solutions (0–5 °C) and is dangerously explosive in the dry state. Therefore, it is never isolated dry and is consumed immediately in situ. In contrast, benzenediazonium fluoroborate (Ar–N₂⁺BF₄⁻) is insoluble in water and stable at room temperature.",
        "Diazotisation Reaction: Primary aromatic amines (e.g., Aniline) react with sodium nitrite (NaNO₂) and excess mineral acid (HCl) at 273–278 K (0–5 °C) to form benzenediazonium chloride: C₆H₅NH₂ + NaNO₂ + 2 HCl ⟶(0–5 °C)⟶ C₆H₅N₂⁺Cl⁻ + NaCl + 2 H₂O.",
        "Active Electrophile & In-Situ Generation: Nitrous acid (HNO₂) is unstable and generated in situ from NaNO₂ + HCl. In acidic medium, HNO₂ is protonated and loses water to generate the nitrosonium ion electrophile (:N⁺=O). Nucleophilic attack of aniline's nitrogen on :N⁺=O followed by proton transfers and elimination of water yields the diazonium cation.",
        "Temperature Constraint: Diazotisation must be performed strictly below 5 °C. At temperatures exceeding 5 °C, benzenediazonium chloride reacts rapidly with water to undergo hydrolysis, producing Phenol (C₆H₅OH), nitrogen gas (N₂↑), and HCl."
      ],
      visual: {
        type: 'svg',
        svgContent: AMINES_DIAGRAMS.diazotisationAndDiazoniumStability,
        caption: "Figure 1: Diazotisation Reaction, Active Electrophile Generation & Temperature Stability.",
        guide: "Observe the in-situ generation of nitrosonium ion (:N⁺=O) at 0–5 °C and the resonance delocalization of positive charge into the benzene ring of arenediazonium cations."
      },
      importantPoints: [
        "Aromatic diazonium salts are resonance-stabilized; aliphatic diazonium salts decompose spontaneously to carbocations and N₂↑.",
        "Diazotisation requires ice-cold conditions: 0–5 °C (273–278 K).",
        "At T > 5 °C, benzenediazonium chloride hydrolyses to Phenol (C₆H₅OH) and N₂↑.",
        "Solid benzenediazonium chloride is explosive when dry; prepared and used fresh in aqueous solution.",
        "Benzenediazonium fluoroborate (Ar–N₂⁺BF₄⁻) is water-insoluble and stable at room temperature."
      ]
    },
    {
      heading: "2. Sandmeyer, Gattermann, Iodination & Balz-Schiemann Reactions",
      paragraphs: [
        "Replacement of the diazonium group (–N₂⁺) by halogen or cyano groups provides the premier synthetic entry into aromatic substitution products that cannot be prepared by direct electrophilic substitution.",
        "1. Sandmeyer Reaction: When a fresh solution of benzenediazonium chloride is treated with cuprous chloride (Cu₂Cl₂ in HCl), cuprous bromide (Cu₂Br₂ in HBr), or cuprous cyanide (CuCN in KCN), the diazonium group is replaced by –Cl, –Br, or –CN respectively, with the evolution of N₂ gas: Ar–N₂⁺Cl⁻ + Cu₂Cl₂/HCl ⟶ Ar–Cl + N₂↑; Ar–N₂⁺Cl⁻ + CuCN/KCN ⟶ Ar–CN + N₂↑. The reaction proceeds via aryl free radical intermediates.",
        "2. Gattermann Reaction: Chlorine or bromine can also be introduced into the benzene ring by treating the diazonium salt solution with metallic copper powder in the presence of the corresponding halogen acid (HCl or HBr): Ar–N₂⁺Cl⁻ + Cu powder / HCl ⟶ Ar–Cl + N₂ + CuCl. The yield in the Gattermann reaction is generally lower than in the Sandmeyer reaction.",
        "3. Replacement by Iodine (Iodobenzene): Aryl iodides cannot be prepared by direct iodination because the reaction is reversible. However, treatment of benzenediazonium chloride with aqueous potassium iodide (KI) and gentle warming smoothly yields iodobenzene: Ar–N₂⁺Cl⁻ + KI ⟶ Ar–I + KCl + N₂↑. Note: NO copper or cuprous catalyst is required because iodide ion (I⁻) is an exceptionally strong nucleophile.",
        "4. Balz-Schiemann Reaction (Fluorobenzene): Direct fluorination of benzene is violently explosive and uncontrollable. Pure fluorobenzene is synthesized exclusively by treating benzenediazonium chloride with fluoroboric acid (HBF₄) to precipitate benzenediazonium fluoroborate (Ar–N₂⁺BF₄⁻). The dry precipitate is then heated (pyrolysis), decomposing smoothly into fluorobenzene, boron trifluoride, and nitrogen gas: Ar–N₂⁺Cl⁻ + HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓ ⟶(Δ)⟶ Ar–F + BF₃ + N₂↑."
      ],
      visual: {
        type: 'svg',
        svgContent: AMINES_DIAGRAMS.masterDiazoniumReactionMap,
        caption: "Figure 2: Master Synthetic Reaction Map of Benzene Diazonium Chloride (Ar–N₂⁺Cl⁻).",
        guide: "Follow each branch from central BDC: Sandmeyer (Cu(I) salts), Gattermann (Cu powder), KI (Iodobenzene), Balz-Schiemann (Fluorobenzene), H₃PO₂ (Benzene), and Azo Coupling (Dyes)."
      },
      importantPoints: [
        "Sandmeyer reaction uses Cuprous salts (Cu₂Cl₂, Cu₂Br₂, CuCN); gives higher yields than Gattermann.",
        "Gattermann reaction uses metallic Copper powder (Cu/HCl or Cu/HBr).",
        "Preparation of Iodobenzene requires ONLY aqueous KI with gentle warming (no copper catalyst).",
        "Balz-Schiemann reaction is the only controlled laboratory route to Fluorobenzene (HBF₄ followed by heat).",
        "All replacement reactions release thermodynamic nitrogen gas (N₂↑) as the ultimate driving force."
      ],
      tables: [
        AMINES_TRAPS_AND_TABLES.memoryTables[3]
      ]
    },
    {
      heading: "3. Hydrolysis, Deamination & Multi-Step Synthetic Strategies",
      paragraphs: [
        "1. Replacement by Hydroxyl Group (–OH) / Hydrolysis to Phenol: When an aqueous solution of benzenediazonium chloride is warmed to ~50 °C or boiled with dilute sulphuric acid, it undergoes nucleophilic displacement by water, forming Phenol with vigorous evolution of nitrogen gas: C₆H₅N₂⁺Cl⁻ + H₂O ⟶(warm)⟶ C₆H₅OH + N₂↑ + HCl.",
        "2. Replacement by Hydrogen (–H) / Deamination / Reduction: Arenediazonium salts can be reduced to parent hydrocarbons (e.g., benzenediazonium chloride to benzene) by treatment with mild reducing agents:",
        "• Hypophosphorous acid (phosphinic acid, H₃PO₂) in the presence of catalytic cuprous ions: C₆H₅N₂⁺Cl⁻ + H₃PO₂ + H₂O ⟶(Cu⁺)⟶ C₆H₆ + H₃PO₃ + HCl + N₂↑. (H₃PO₂ is oxidized to H₃PO₃).",
        "• Ethanol (CH₃CH₂OH): C₆H₅N₂⁺Cl⁻ + CH₃CH₂OH ⟶ C₆H₆ + CH₃CHO + HCl + N₂↑. (Ethanol is oxidized to ethanal/acetaldehyde).",
        "3. Replacement by Nitro Group (–NO₂): Benzenediazonium fluoroborate on heating with aqueous sodium nitrite in the presence of copper powder yields nitrobenzene: Ar–N₂⁺BF₄⁻ + NaNO₂ ⟶(Cu, Δ)⟶ Ar–NO₂ + NaBF₄ + N₂↑.",
        "4. Strategic Synthetic Utility in NEET: Diazonium salts enable the synthesis of substituted benzene derivatives that cannot be prepared by direct electrophilic aromatic substitution due to directing rules. For example, to prepare 1,3,5-tribromobenzene (symmetrical tribromobenzene): Aniline is treated with Br₂/H₂O to give 2,4,6-tribromoaniline, followed by diazotisation (NaNO₂ + HCl, 0–5 °C) and subsequent deamination with H₃PO₂ to remove the –NH₂/–N₂⁺ directing group, yielding pure 1,3,5-tribromobenzene.",
        "Similarly, m-bromophenol and m-nitrotoluene can be prepared by introducing substituents while the amino group directs to desired positions, followed by diazotisation and replacement."
      ],
      importantPoints: [
        "Hydrolysis: Warming diazonium salt with water gives Phenol + N₂↑.",
        "Deamination reagents: H₃PO₂ + H₂O (Cu⁺) or CH₃CH₂OH reduce Ar–N₂⁺ to Ar–H.",
        "Ethanol is oxidised to ethanal (CH₃CHO) during diazonium reduction.",
        "Deamination is key for removing directing groups in multi-step synthesis (e.g., 1,3,5-tribromobenzene).",
        "Nitro substitution: Ar–N₂⁺BF₄⁻ + NaNO₂ / Cu, Δ ⟶ Ar–NO₂."
      ]
    },
    {
      heading: "4. Azo Coupling Reactions & Dye Synthesis",
      paragraphs: [
        "Azo coupling is an electrophilic aromatic substitution reaction in which the weakly electrophilic arenediazonium cation (Ar–N₂⁺) attacks strongly activated aromatic substrates (such as phenols, naphthols, or aromatic amines) predominantly at the para-position to form stable, brightly coloured azo compounds containing the –N=N– chromophore.",
        "1. Coupling with Phenol (Orange Dye): Benzenediazonium chloride reacts with phenol in a mildly alkaline medium (pH 9–10) at 0–5 °C to form p-hydroxyazobenzene (an intense orange dye): C₆H₅N₂⁺Cl⁻ + C₆H₅OH ⟶(pH 9–10, 273–278 K)⟶ C₆H₅–N=N–C₆H₄–OH (p-hydroxyazobenzene, Orange Dye) + Cl⁻ + H₂O.",
        "Role of Basic pH: In basic medium, phenol is converted into the strongly nucleophilic phenoxide ion (C₆H₅O⁻), which possesses much higher electron density than neutral phenol and readily attacks the weak diazonium electrophile. However, pH must not exceed 12, or the diazonium cation converts into unreactive diazotate ion [Ar–N=N–O⁻].",
        "2. Coupling with Aniline (Yellow Dye): Benzenediazonium chloride reacts with aniline in a mildly acidic medium (pH 4–5) at 0–5 °C to form p-aminoazobenzene (an intense yellow dye): C₆H₅N₂⁺Cl⁻ + C₆H₅NH₂ ⟶(pH 4–5, 273–278 K)⟶ C₆H₅–N=N–C₆H₄–NH₂ (p-aminoazobenzene, Yellow Dye) + Cl⁻ + H₂O.",
        "Role of Acidic pH: Mildly acidic pH (4–5) ensures that aniline exists predominantly in its reactive free base form without undergoing complete protonation to anilinium ion (which is deactivating and unreactive towards electrophilic coupling).",
        "3. Coupling with β-Naphthol (Azo Dye Test): When an aromatic primary amine is diazotised and added to an alkaline solution of β-naphthol (2-naphthol), a brilliant scarlet red dye (1-phenylazo-2-naphthol) precipitates immediately. This is the definitive confirmatory test for primary aromatic amines in qualitative analysis.",
        "Orientation of Coupling: Coupling occurs strictly at the position of highest electron density, which is the para-position relative to –OH or –NH₂. If the para-position is already blocked by a substituent, coupling occurs at the ortho-position."
      ],
      importantPoints: [
        "Azo coupling is an electrophilic aromatic substitution where Ar–N₂⁺ is the electrophile.",
        "Phenol coupling requires mildly alkaline pH (9–10) ⟶ p-hydroxyazobenzene (ORANGE DYE).",
        "Aniline coupling requires mildly acidic pH (4–5) ⟶ p-aminoazobenzene (YELLOW DYE).",
        "β-Naphthol test gives deep SCARLET RED dye (confirmatory test for 1° aromatic amines).",
        "Coupling occurs at the para-position; if para is occupied, it occurs at the ortho-position."
      ],
      tables: [
        AMINES_TRAPS_AND_TABLES.memoryTables[4]
      ]
    }
  ],

  formulae: [
    {
      title: "Diazotisation Reaction Equation",
      formula: "C₆H₅NH₂ + NaNO₂ + 2 HCl ⟶(273–278 K)⟶ C₆H₅N₂⁺Cl⁻ + NaCl + 2 H₂O",
      meaning: "In-situ generation of nitrous acid and conversion of aniline to benzenediazonium chloride at 0–5 °C.",
      whenToUse: "Synthesis of aromatic diazonium salts from primary aromatic amines."
    },
    {
      title: "Sandmeyer Reaction",
      formula: "Ar–N₂⁺Cl⁻ ⟶(Cu₂X₂ / HX)⟶ Ar–X + N₂↑ (where X = Cl, Br, CN)",
      meaning: "Cuprous salt-catalyzed nucleophilic substitution of diazonium group by halogen or cyano.",
      whenToUse: "High-yield preparation of chlorobenzene, bromobenzene, and benzonitrile."
    },
    {
      title: "Balz-Schiemann Reaction",
      formula: "Ar–N₂⁺Cl⁻ + HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓ ⟶(Δ)⟶ Ar–F + BF₃ + N₂↑",
      meaning: "Two-step preparation of pure fluorobenzene via thermal pyrolysis of diazonium fluoroborate.",
      whenToUse: "Exclusive laboratory method for synthesizing aryl fluorides."
    },
    {
      title: "Deamination (Reduction to Benzene)",
      formula: "Ar–N₂⁺Cl⁻ + H₃PO₂ + H₂O ⟶(Cu⁺)⟶ Ar–H + H₃PO₃ + HCl + N₂↑",
      meaning: "Reduction of diazonium group to hydrogen using hypophosphorous acid or ethanol.",
      whenToUse: "Removing –NH₂ directing groups in multi-step organic synthesis."
    },
    {
      title: "Azo Coupling with Phenol (Orange Dye)",
      formula: "C₆H₅N₂⁺Cl⁻ + C₆H₅OH ⟶(pH 9–10, 0–5 °C)⟶ C₆H₅–N=N–C₆H₄–OH + HCl",
      meaning: "Electrophilic coupling with phenoxide ion at para-position to yield orange azo dye.",
      whenToUse: "Synthesis of azo dyes and qualitative confirmation of primary aromatic amines."
    }
  ],

  neetImportantPoints: [
    "Diazotisation requires strict ice-cold temperature (0–5 °C or 273–278 K); above 5 °C, benzenediazonium chloride hydrolyses to Phenol.",
    "Aromatic diazonium salts are resonance-stabilized, whereas aliphatic diazonium salts decompose spontaneously with N₂ gas evolution.",
    "Sandmeyer reaction uses Cuprous halides (Cu₂Cl₂/HCl, Cu₂Br₂/HBr, CuCN/KCN) and gives higher yields than Gattermann reaction.",
    "Gattermann reaction uses metallic Copper powder with halogen acid (Cu/HCl or Cu/HBr).",
    "Iodobenzene is prepared simply by warming diazonium salt with aqueous KI (no copper catalyst needed!).",
    "Balz-Schiemann reaction: Ar–N₂⁺Cl⁻ + HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓ ⟶(Δ)⟶ Ar–F + BF₃ + N₂↑ (only safe route to fluorobenzene).",
    "Deamination reagents: H₃PO₂ + H₂O (Cu⁺) or CH₃CH₂OH convert Ar–N₂⁺ to Ar–H, liberating N₂ gas.",
    "Coupling with Phenol occurs at pH 9–10 (mildly basic) to give p-hydroxyazobenzene (Orange dye).",
    "Coupling with Aniline occurs at pH 4–5 (mildly acidic) to give p-aminoazobenzene (Yellow dye).",
    "Azo Dye Test: 1° aromatic amine diazotised and added to alkaline β-naphthol forms a scarlet red dye.",
    "Multi-step strategy: Diazonium salts allow synthesis of meta-substituted products (e.g., 1,3,5-tribromobenzene) impossible by direct electrophilic aromatic substitution."
  ],

  commonConfusions: AMINES_TRAPS_AND_TABLES.neetReactionTraps.slice(6).map(trap => ({
    misconception: trap.trap,
    correction: trap.fact,
    whyItMattersForNEET: trap.whyItMatters
  })),

  quickRevision: [
    "Diazonium Structure: Ar–N⁺≡N Cl⁻, resonance stabilized in cold aqueous solution (0–5 °C).",
    "Diazotisation: Aniline + NaNO₂ + 2 HCl (0–5 °C) ⟶ C₆H₅N₂⁺Cl⁻ (T > 5 °C gives Phenol + N₂↑).",
    "Sandmeyer: Cu₂Cl₂/HCl ⟶ Ar–Cl; Cu₂Br₂/HBr ⟶ Ar–Br; CuCN/KCN ⟶ Ar–CN (high yield).",
    "Gattermann: Cu powder + HCl ⟶ Ar–Cl; Cu powder + HBr ⟶ Ar–Br (moderate yield).",
    "Iodination: Ar–N₂⁺Cl⁻ + KI, warm ⟶ Ar–I + N₂↑ (NO Cu needed!).",
    "Balz-Schiemann: Ar–N₂⁺Cl⁻ + HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓ ⟶(Δ)⟶ Ar–F + BF₃ + N₂↑.",
    "Hydrolysis: Ar–N₂⁺Cl⁻ + H₂O (warm) ⟶ Phenol + N₂↑ + HCl.",
    "Deamination: Ar–N₂⁺Cl⁻ + H₃PO₂ / CH₃CH₂OH ⟶ Benzene (Ar–H) + N₂↑.",
    "Phenol Coupling: pH 9–10 (mildly basic) ⟶ p-hydroxyazobenzene (Orange dye).",
    "Aniline Coupling: pH 4–5 (mildly acidic) ⟶ p-aminoazobenzene (Yellow dye).",
    "β-Naphthol Test: Scarlet red azo dye formed with 1° aromatic amines.",
    "1,3,5-Tribromobenzene Synthesis: Aniline ⟶(Br₂/H₂O)⟶ 2,4,6-tribromoaniline ⟶(NaNO₂/HCl)⟶ Diazonium ⟶(H₃PO₂)⟶ 1,3,5-tribromobenzene."
  ],

  practiceQuestions: DIAZONIUM_PRACTICE_QUESTIONS,

  pyqs: AMINES_PYQS.filter(q => q.topicId === "chem-amines-distinction-tests"),

  neetMarksPotential: {
    topicName: "Diazonium Salts — Preparation, Reactions & Applications",
    confidenceLabel: "HIGH",
    confidenceText: "High-yield conversion hub appearing in virtually every NEET UG paper as direct named reactions or multi-step organic synthesis questions (4 to 8 marks).",
    totalAnalyzedPapers: 12,
    papersWithDirectPyqs: 12,
    totalDirectPyqs: 14,
    totalHistoricalMarks: 56,
    averageDirectPyqsPerPaper: 1.17,
    maxDirectPyqsInSinglePaper: 2,
    minDirectPyqsInSinglePaper: 1,
    minDirectMarks: 4,
    maxDirectMarks: 8,
    avgDirectMarksPerPaper: 4.67,
    whatThisMeansForYou: "Diazonium salts act as the master synthetic bridge connecting aromatic nitro compounds and anilines with haloarenes, phenols, benzonitriles, and azo dyes. Scoring full marks on this topic requires mastering the exact reagents (Cu₂X₂ vs Cu powder vs KI vs HBF₄ vs H₃PO₂) and azo coupling pH conditions.",
    typicalContributionMarks: 4,
    historicalMarksRangeText: "4 – 8 Marks",
    weightagePercentage: 4.0,
    expectedQuestionsCount: 2,
    totalMarksPotential: 8,
    historicalFrequencyYears: "NEET 2023, 2022, 2021, 2020, 2019, 2018, 2017",
    trendAnalysis: "Frequently tested through multi-step conversion flowcharts (A ⟶ B ⟶ C), reagent matching, and coupling dye identification.",
    preparationStrategy: "Trace all 8 branches of the Master Diazonium Reaction Map and memorize pH conditions for orange vs yellow azo dye formation.",
    averageQuestionsPerYear: 1.3,
    scoreWeightage: "High Yield (4 - 8 Marks)",
    difficultyRating: "Medium",
    highYieldStatus: true
  }
};
