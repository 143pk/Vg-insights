import { DetailedTopicContent } from '../../types/neet';
import { HALOALKANES_DIAGRAMS } from '../haloalkanesHaloarenes/haloalkanesDiagrams';
import { HALOALKANES_CONCEPTS } from '../haloalkanesHaloarenes/haloalkanesTermsAndConcepts';
import { HALOALKANES_TRAPS_AND_SHEET } from '../haloalkanesHaloarenes/haloalkanesTrapsAndFormulaSheet';
import { HALOALKANES_PYQS } from '../haloalkanesHaloarenes/haloalkanesPyqs';
import { HALOALKANES_PRACTICE_SETS } from '../haloalkanesHaloarenes/haloalkanesPracticeSets';

export const chemHaloarenesReactionsDetails: DetailedTopicContent = {
  topicId: "chem-haloarenes-reactions",
  topicName: "Haloarenes — Reactivity, Named Reactions & Electrophilic Substitution",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Haloalkanes and Haloarenes",

  whatIsThisTopic: "Haloarenes (aryl halides) are organic compounds in which a halogen atom is directly bonded to an sp² hybridized carbon atom of an aromatic benzene ring (Ar–X). This topic explores the synthetic routes to haloarenes (electrophilic nuclear halogenation, Sandmeyer, Gattermann, Balz-Schiemann, and KI reactions), the four fundamental NCERT electronic factors explaining why haloarenes are extremely inert towards nucleophilic substitution, the conditions under which nucleophilic aromatic substitution (S_NAr) occurs (Dow's process and activation by ortho/para nitro groups via the carbanionic Meisenheimer complex), electrophilic aromatic substitution reactions (halogenation, nitration, sulphonation, Friedel-Crafts alkylation and acylation) wherein the halogen atom is uniquely deactivating due to -I effect yet ortho/para directing due to +R lone pair resonance, classic named coupling reactions (Fittig and Wurtz-Fittig), and the chemistry and environmental significance of polyhalogen compounds (Dichloromethane, Chloroform, Iodoform, Carbon tetrachloride, Freons, and DDT).",

  basicIdea: [
    "Structure & Inertness: Haloarenes are exceptionally unreactive towards nucleophilic substitution due to: (1) Partial double bond character (resonance, C–Cl length is 169 pm vs 178 pm in CH₃Cl), (2) sp² carbon hybridization holding bonding electrons tighter, (3) Extreme instability of the phenyl cation (preventing S_N1), and (4) Repulsion between incoming nucleophiles and the aromatic π-electron cloud (preventing S_N2).",
    "Preparations: Direct electrophilic halogenation (Ar–H + Cl₂/anh. FeCl₃ in dark); Sandmeyer reaction (Ar–N₂⁺Cl⁻ + Cu₂Cl₂/HCl → Ar–Cl + N₂↑); Gattermann reaction (Cu powder/HCl); Balz-Schiemann reaction (Ar–N₂⁺BF₄⁻ xrightarrow{\\Delta} Ar–F + BF₃ + N₂↑); Iodobenzene from Diazonium + KI without catalyst.",
    "Nucleophilic Aromatic Substitution (S_NAr): Chlorobenzene converts to Phenol only under severe conditions (Dow's Process: 623 K, 300 atm, aq. NaOH). However, strong electron-withdrawing nitro groups (–NO₂) at ORTHO and PARA positions dramatically activate the ring by stabilizing the carbanionic Meisenheimer complex through resonance (Picryl chloride hydrolyzes in warm water at 323 K!). Meta position is ineffective.",
    "Electrophilic Aromatic Substitution: Halogen on benzene is the ONLY common group that is simultaneously DEACTIVATING (due to powerful –I electron withdrawal) yet ORTHO/PARA DIRECTING (due to +R resonance stabilization of ortho/para Wheland intermediates). Para isomer is the major product due to minimal steric hindrance.",
    "Named Coupling Reactions: Fittig Reaction (2 Ar–X + 2 Na xrightarrow{dry ether} Biphenyl); Wurtz-Fittig Reaction (Ar–X + R–X + 2 Na xrightarrow{dry ether} Ar–R + 2 NaX).",
    "Polyhalogen High-Yield Facts: Chloroform (CHCl₃) oxidizes to toxic Phosgene (COCl₂) in air and light; stored in dark bottles with 1% ethanol (forming harmless diethyl carbonate). Iodoform (CHI₃) antiseptic action is due to liberation of free iodine. Freon-12 (CF₂Cl₂) causes stratospheric ozone destruction via chlorine radicals (Cl·). DDT is a persistent biomagnifying insecticide."
  ],

  importantTerms: HALOALKANES_CONCEPTS.fundamentalTerms.slice(7, 14),

  conceptExplanation: [
    {
      heading: "1. Structure, Anatomy & Synthetic Routes to Haloarenes",
      paragraphs: [
        "In haloarenes (Ar–X), the halogen atom is directly bonded to an sp² hybridized aromatic ring carbon. Because of resonance delocalization of the halogen's unshared lone pairs into the aromatic π-system, the C–X bond acquires partial double bond character.",
        "Primary Synthetic Routes:",
        "1. Nuclear Electrophilic Halogenation: Benzene or substituted benzenes react with Cl₂ or Br₂ in the presence of a Lewis acid catalyst (anh. FeCl₃, FeBr₃, or AlCl₃) in the dark: C₆H₆ + Cl₂ xrightarrow{anh. FeCl₃} C₆H₅Cl + HCl. Toluene gives a mixture of o-chlorotoluene and p-chlorotoluene, easily separated by fractional distillation due to significant differences in melting and boiling points.",
        "2. Sandmeyer Reaction: Primary aromatic amines undergo diazotization with nitrous acid (NaNO₂ + 2 HCl at 273–278 K) to form benzenediazonium chloride (Ar–N₂⁺Cl⁻). Treating this freshly prepared solution with cuprous chloride (Cu₂Cl₂/HCl) or cuprous bromide (Cu₂Br₂/HBr) replaces the diazonium group with Cl or Br: Ar–N₂⁺Cl⁻ xrightarrow{Cu₂Cl₂/HCl} Ar–Cl + N₂↑ (70–80% yield).",
        "3. Gattermann Reaction: Diazonium salt is treated with metallic copper powder and halogen acid (Cu/HCl or Cu/HBr). Gives lower yield (50–60%) than Sandmeyer.",
        "4. Balz-Schiemann Reaction: Diazonium chloride treated with fluoroboric acid (HBF₄) precipitates stable benzenediazonium fluoroborate (Ar–N₂⁺BF₄⁻), which upon dry heating decomposes cleanly into fluorobenzene: Ar–N₂⁺BF₄⁻ xrightarrow{\\Delta} Ar–F + BF₃ + N₂↑.",
        "5. Iodoarene Synthesis: Benzenediazonium chloride is simply warmed with aqueous potassium iodide (KI): Ar–N₂⁺Cl⁻ + KI xrightarrow{warm} Ar–I + KCl + N₂↑ (No copper catalyst needed!)."
      ],
      tables: [
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.sandmeyerVsGattermann
      ]
    },
    {
      heading: "2. The Four Pillars of Haloarene Inertness towards Nucleophilic Substitution",
      paragraphs: [
        "Unlike alkyl halides which hydrolyze readily, haloarenes are exceptionally unreactive towards nucleophilic substitution. NCERT identifies four fundamental reasons:",
        "1. Resonance Effect & Partial Double Bond Character: The lone pair electrons on halogen are conjugated with the π-electrons of the benzene ring. Resonance structures (canonical forms I to V) show that the carbon-chlorine bond possesses significant partial double bond character. Consequently, the C–Cl bond length in chlorobenzene is only 169 pm (substantially shorter and stronger than the 178 pm single bond in chloroethane), making bond cleavage extremely difficult.",
        "2. sp² Hybridisation of the Carbon: The carbon bonded to halogen in haloarenes is sp² hybridized (33.3% s-character) compared to sp³ (25% s-character) in haloalkanes. The greater s-character makes the sp² orbital smaller, more electronegative, and holds the bonding electrons tighter to the nucleus, increasing C–X bond dissociation energy.",
        "3. Instability of Phenyl Cation (No S_N1): Heterolytic cleavage of the C–X bond would generate a phenyl cation (C₆H₅⁺), where the positive charge resides in an sp² orbital perpendicular to the aromatic π-system. The phenyl cation CANNOT be stabilized by resonance and is energetically extremely unfavorable, ruling out the S_N1 pathway.",
        "4. Electronic π-Cloud Repulsion (No S_N2): An incoming electron-rich nucleophile is repelled electrostatically by the dense π-electron clouds above and below the aromatic benzene ring, while backside approach is blocked by the ring geometry, ruling out the S_N2 pathway."
      ],
      visual: {
        caption: "Resonance Structures and Inertness Mechanism in Chlorobenzene.",
        guide: "Examine the delocalisation of chlorine lone pairs into the ring creating partial double bond character and negative charge at ortho/para positions.",
        svgContent: HALOALKANES_DIAGRAMS.haloarenesResonanceStability
      },
      tables: [
        HALOALKANES_TRAPS_AND_SHEET.comparisonTables.haloalkanesVsHaloarenes
      ]
    },
    {
      heading: "3. Nucleophilic Aromatic Substitution (S_NAr) & The Activating Effect of Ortho/Para Nitro Groups",
      paragraphs: [
        "Under extreme conditions, chlorobenzene can undergo nucleophilic substitution:",
        "Dow's Process: Chlorobenzene is heated with 6–8% aqueous NaOH at 623 K and 300 atm pressure in a sealed autoclave, followed by acidification with dilute HCl to form Phenol: C₆H₅Cl + 2 NaOH xrightarrow{623 K, 300 atm} C₆H₅ONa + NaCl + H₂O xrightarrow{HCl} C₆H₅OH + NaCl.",
        "Activating Effect of Nitro (–NO₂) Groups:",
        "When strong electron-withdrawing groups (–NO₂) are attached at the ORTHO and PARA positions relative to the halogen, the rate of nucleophilic aromatic substitution increases exponentially, and the required reaction conditions become progressively milder:",
        "• 4-Nitrochlorobenzene: Reacts with aqueous NaOH at 443 K (dilute acid workup) → 4-Nitrophenol.",
        "• 2,4-Dinitrochlorobenzene: Reacts with aqueous Na₂CO₃ at 368 K → 2,4-Dinitrophenol.",
        "• 2,4,6-Trinitrochlorobenzene (Picryl chloride): Hydrolyzes simply on warming with warm water at 323 K (no alkali needed!) → 2,4,6-Trinitrophenol (Picric Acid).",
        "Mechanistic Reason (Meisenheimer Complex): The rate-determining step is the attack of Nu⁻ (OH⁻) onto the halogen-bearing carbon, generating a resonance-stabilized carbanionic intermediate (Meisenheimer complex). In the ortho and para positions, resonance structures place the negative carbanionic charge directly on the ring carbon attached to the –NO₂ group, allowing the nitro group's oxygen atoms to disperse and stabilize the negative charge. At the meta position, NO resonance structure ever places the negative charge on the carbon bearing the –NO₂ group; hence meta-nitrochlorobenzene shows negligible activation!"
      ]
    },
    {
      heading: "4. Electrophilic Aromatic Substitution in Haloarenes: Deactivating yet Ortho/Para Directing",
      paragraphs: [
        "The behaviour of halogens in electrophilic aromatic substitution is unique in organic chemistry:",
        "1. Deactivating Nature (-I Effect): Halogen atoms are strongly electronegative and withdraw electron density from the aromatic ring through their powerful inductive effect (-I), making the benzene ring overall less electron-rich (deactivated) than unsubstituted benzene. Electrophilic substitutions in haloarenes are therefore slower and require harsher conditions (higher temperatures, stronger catalysts) than in benzene.",
        "2. Ortho/Para Directing Nature (+R Effect): Through resonance (+R effect), the unshared lone pair on the halogen atom is delocalized into the ring, increasing electron density specifically at the ORTHO and PARA positions relative to meta. When an electrophile attacks at the ortho or para position, the developing arenium ion (Wheland intermediate) is stabilized by resonance contribution from the halogen lone pair (giving a fourth resonance structure where every atom has a complete octet).",
        "Key Electrophilic Reactions of Chlorobenzene:",
        "• Halogenation: C₆H₅Cl + Cl₂ xrightarrow{anh. FeCl₃} 1,4-Dichlorobenzene (p-isomer, 80% Major) + 1,2-Dichlorobenzene (o-isomer, 20% Minor).",
        "• Nitration: C₆H₅Cl + conc. HNO₃ + conc. H₂SO₄ xrightarrow{\\Delta} 1-Chloro-4-nitrobenzene (Major) + 1-Chloro-2-nitrobenzene (Minor).",
        "• Sulphonation: C₆H₅Cl + conc. H₂SO₄ xrightarrow{\\Delta} 4-Chlorobenzenesulphonic acid (Major) + 2-Chlorobenzenesulphonic acid (Minor).",
        "• Friedel-Crafts Alkylation: C₆H₅Cl + CH₃Cl xrightarrow{anh. AlCl₃} 1-Chloro-4-methylbenzene (p-Chlorotoluene, Major) + 1-Chloro-2-methylbenzene (Minor).",
        "• Friedel-Crafts Acylation: C₆H₅Cl + CH₃COCl xrightarrow{anh. AlCl₃} 4-Chloroacetophenone (Major) + 2-Chloroacetophenone (Minor).",
        "Why Para Isomer Dominates: The para isomer is invariably the major product because the ortho position experiences significant steric hindrance (crowding) between the bulky chlorine atom and the incoming electrophilic group."
      ]
    },
    {
      heading: "5. Named Coupling Reactions of Haloarenes (Fittig & Wurtz-Fittig)",
      paragraphs: [
        "1. Fittig Reaction: When two molecules of an aryl halide are heated with sodium metal in dry ether, coupling of the two aryl rings occurs to yield a symmetrical biaryl (Diphenyl / Biphenyl): 2 C₆H₅–Br + 2 Na xrightarrow{Dry Ether} C₆H₅–C₆H₅ (Biphenyl) + 2 NaBr.",
        "2. Wurtz-Fittig Reaction: When an equimolar mixture of an aryl halide and an alkyl halide is treated with sodium metal in dry ether, an alkylarene is synthesized: C₆H₅–Br + CH₃–Br + 2 Na xrightarrow{Dry Ether} C₆H₅–CH₃ (Toluene) + 2 NaBr.",
        "3. Ullmann Reaction: Heating iodobenzene with copper powder in a sealed tube also produces biphenyl: 2 C₆H₅–I + Cu xrightarrow{\\Delta} C₆H₅–C₆H₅ + CuI₂."
      ]
    },
    {
      heading: "6. Polyhalogen Compounds: Chemistry, Uses, Hazards & NCERT Facts",
      paragraphs: [
        "Polyhalogen compounds contain more than one halogen atom per molecule. NCERT highlights six compounds frequently tested in NEET:",
        "1. Dichloromethane (Methylene Chloride, CH₂Cl₂): Widely used as an industrial solvent for paint strippers, propellants in aerosols, and process solvent in pharmaceutical manufacturing. Health hazard: Depresses central nervous system; high exposure impairs vision and hearing.",
        "2. Trichloromethane (Chloroform, CHCl₃): Historically used as a general inhalation anesthetic (now replaced by safer ethers like halothane). Key Reaction: On exposure to air and sunlight, chloroform slowly oxidizes to form lethal Phosgene gas (Carbonyl chloride, COCl₂): 2 CHCl₃ + O₂ xrightarrow{h\\nu} 2 COCl₂ + 2 HCl. Prevention: Stored in completely filled, dark brown glass bottles (excluding air) containing 1% ethanol, which converts any phosgene formed into non-toxic diethyl carbonate: COCl₂ + 2 C₂H₅OH → (C₂H₅O)₂CO + 2 HCl.",
        "3. Triiodomethane (Iodoform, CHI₃): Yellow crystalline solid with a characteristic pungent smell. Antiseptic Action: NCERT explicitly notes that its antiseptic action is due to the SLOW LIBERATION OF FREE IODINE (I₂), not due to the iodoform molecule itself.",
        "4. Tetrachloromethane (Carbon Tetrachloride, CCl₄): Colourless, non-flammable liquid sold under the commercial trade name 'Pyrene' for fire extinguishers. Caution: High temperature flame in contact with steam/water hydrolyzes CCl₄ to toxic phosgene: CCl₄ + H₂O xrightarrow{\\Delta} COCl₂ + 2 HCl. Also causes liver damage and depletes the ozone layer.",
        "5. Freons (Chlorofluorocarbons, CFCs): Extremely stable, unreactive, non-toxic, non-corrosive liquids/gases used as refrigerants and air conditioning fluids. Freon-12 (Dichlorodifluoromethane, CCl₂F₂) is manufactured from CCl₄ via the Swarts reaction (CCl₄ + SbF₃ xrightarrow{SbCl₅} CCl₂F₂). Hazard: In the stratosphere, solar UV radiation cleaves C–Cl bonds to release Chlorine Free Radicals (Cl·), which catalytically destroy the protective ozone layer (Cl· + O₃ → ClO· + O₂).",
        "6. p,p'-Dichlorodiphenyltrichloroethane (DDT): First modern synthetic insecticide discovered by Paul Müller (Nobel Prize 1948). Prepared by condensing chloral (CCl₃CHO) with 2 moles of chlorobenzene in conc. H₂SO₄. Hazard: Highly non-biodegradable and lipophilic (fat-soluble); undergoes massive biomagnification in food chains and thins bird eggshells, leading to its global ban."
      ],
      tables: [
        {
          title: "NEET Master Polyhalogen Comparison Table",
          headers: ["Compound & Formula", "IUPAC Name / Trade Name", "Primary Industrial / Medical Use", "Critical Hazard & NEET NCERT Fact"],
          rows: [
            ["CH₂Cl₂", "Dichloromethane (Methylene chloride)", "Paint remover solvent, aerosol propellant", "Central nervous system depression; impairs vision."],
            ["CHCl₃", "Trichloromethane (Chloroform)", "Solvent for fats/alkaloids; ancient anesthetic", "Oxidizes to lethal Phosgene (COCl₂); stabilized by 1% ethanol."],
            ["CHI₃", "Triiodomethane (Iodoform)", "Antiseptic for wounds (yellow crystals)", "Antiseptic property is due to liberation of FREE IODINE, not CHI₃ itself."],
            ["CCl₄", "Tetrachloromethane (Pyrene)", "Fire extinguisher, dry cleaning solvent", "Hydrolyzes to phosgene with steam at high flame temperature."],
            ["CCl₂F₂", "Dichlorodifluoromethane (Freon-12)", "Refrigerant & propellant (Swarts reaction)", "Catalytic destruction of stratospheric ozone layer via Cl· radicals."],
            ["DDT (C₁₄H₉Cl₅)", "2,2-bis(p-chlorophenyl)-1,1,1-trichloroethane", "Agricultural & anti-malarial insecticide", "Non-biodegradable, accumulates in animal fat tissue (biomagnification)."]
          ]
        }
      ]
    },
    {
      heading: "7. Master Reaction Prediction Engine & High-Yield Conversions",
      paragraphs: [
        "To achieve a perfect score in NEET organic chemistry, you must be able to instantly predict reaction outcomes across multistep sequences involving haloalkanes, haloarenes, and aromatic derivatives.",
        "Review the master reaction matrix and 15 prediction cases to master every standard NEET synthetic challenge."
      ],
      tables: [
        {
          title: "Master 14-Reaction Condition & Product Matrix",
          headers: ["Substrate", "Reagent & Conditions", "Major Product", "Reaction Type", "High-Yield NEET Trap"],
          rows: HALOALKANES_TRAPS_AND_SHEET.reactionMatrix.map(r => [
            r.substrate,
            `${r.reagent} (${r.condition})`,
            r.majorProduct,
            r.reactionType,
            r.neetTrap
          ])
        }
      ]
    }
  ],

  formulae: [
    {
      title: "Dow's Process (Phenol Synthesis)",
      formula: "\\text{C}_6\\text{H}_5\\text{Cl} + 2\\text{NaOH} \\xrightarrow{623\\text{ K}, 300\\text{ atm}} \\text{C}_6\\text{H}_5\\text{ONa} \\xrightarrow{\\text{HCl}} \\text{C}_6\\text{H}_5\\text{OH} + \\text{NaCl}",
      meaning: "Harsh industrial conditions required to overcome haloarene resonance inertness."
    },
    {
      title: "Sandmeyer Reaction",
      formula: "\\text{Ar–N}_2^+\\text{Cl}^- \\xrightarrow{\\text{Cu}_2\\text{Cl}_2 / \\text{HCl}} \\text{Ar–Cl} + \\text{N}_2\\uparrow",
      meaning: "Cuprous chloride catalyzed replacement of diazonium group (70-80% yield)."
    },
    {
      title: "Balz-Schiemann Reaction",
      formula: "\\text{Ar–N}_2^+\\text{BF}_4^- \\xrightarrow{\\Delta} \\text{Ar–F} + \\text{BF}_3 + \\text{N}_2\\uparrow",
      meaning: "Thermal decomposition of diazonium fluoroborate to pure aryl fluoride."
    },
    {
      title: "Fittig Biaryl Coupling",
      formula: "2 \\text{ Ar–X} + 2\\text{ Na} \\xrightarrow{\\text{Dry Ether}} \\text{Ar–Ar (Biphenyl)} + 2\\text{ NaX}",
      meaning: "Sodium-mediated coupling of two aryl halides."
    },
    {
      title: "Wurtz-Fittig Alkylarene Synthesis",
      formula: "\\text{Ar–X} + \\text{R–X} + 2\\text{ Na} \\xrightarrow{\\text{Dry Ether}} \\text{Ar–R} + 2\\text{ NaX}",
      meaning: "Cross-coupling of aryl and alkyl halides."
    },
    {
      title: "Phosgene Formation & Quenching",
      formula: "2\\text{ CHCl}_3 + \\text{O}_2 \\xrightarrow{h\\nu} 2\\text{ COCl}_2 + 2\\text{ HCl}; \\quad \\text{COCl}_2 + 2\\text{ C}_2\\text{H}_5\\text{OH} \\rightarrow (\\text{C}_2\\text{H}_5\\text{O})_2\\text{CO} + 2\\text{ HCl}",
      meaning: "Chloroform oxidation to toxic phosgene and neutralization by 1% ethanol."
    }
  ],

  visualLearning: {
    type: 'svg',
    caption: "Resonance Structures and S_NAr Activation Mechanism in Chlorobenzene.",
    svgContent: HALOALKANES_DIAGRAMS.haloarenesResonanceStability
  },

  neetImportantPoints: [
    "Chlorobenzene is inert to nucleophiles due to: (1) partial double bond (169 pm), (2) sp² carbon, (3) phenyl cation instability, and (4) π-cloud repulsion.",
    "Dow's process converts chlorobenzene to phenol at 623 K and 300 atm pressure.",
    "Ortho and Para –NO₂ groups strongly activate chlorobenzene to S_NAr (Picryl chloride hydrolyzes in warm water at 323 K). Meta –NO₂ has negligible resonance activation.",
    "Halogen on benzene is the ONLY substituent that is DEACTIVATING (-I effect) yet ORTHO/PARA DIRECTING (+R effect).",
    "Para isomer is the major product in electrophilic aromatic substitutions due to minimal steric hindrance.",
    "Sandmeyer uses Cu₂X₂/HX; Gattermann uses Cu powder/HX; Balz-Schiemann uses HBF₄ followed by heat (Δ).",
    "Fittig reaction: 2 Ar–X + 2 Na → Biphenyl. Wurtz-Fittig: Ar–X + R–X + 2 Na → Ar–R.",
    "Chloroform exposed to air and light forms deadly Phosgene (COCl₂); prevented by 1% ethanol (forming diethyl carbonate).",
    "Iodoform (CHI₃) antiseptic action is due to slow liberation of FREE IODINE (I₂), not CHI₃ itself.",
    "Freons destroy stratospheric ozone via catalytic chlorine free radicals (Cl·)."
  ],

  commonConfusions: HALOALKANES_TRAPS_AND_SHEET.commonTraps.slice(4, 24).map(trap => ({
    commonConfusion: trap.wrongThinking,
    correctFact: trap.correctConcept,
    whyItMattersForNEET: trap.neetTip
  })),

  quickRevision: [
    "Chlorobenzene inert to S_N (Resonance 169 pm + sp² carbon)",
    "Dow's Process = 623 K, 300 atm, aq. NaOH → Phenol",
    "o/p -NO₂ activates S_NAr (Meisenheimer carbanion) | Meta = No activation",
    "Halogen = Deactivating (-I) + Ortho/Para Directing (+R) | Para Major",
    "Sandmeyer = Cu₂X₂ | Gattermann = Cu powder | Balz-Schiemann = HBF₄ + Δ → Ar-F",
    "Fittig = 2 Ar-X + 2 Na → Biphenyl | Wurtz-Fittig = Ar-X + R-X + 2 Na → Ar-R",
    "CHCl₃ + air/light → Phosgene (COCl₂) | 1% EtOH neutralizes to (EtO)₂CO",
    "CHI₃ antiseptic = Free I₂ | Freons = Ozone depletion via Cl· radicals"
  ],

  practiceQuestions: HALOALKANES_PRACTICE_SETS.topic2PracticeQuestions,

  pyqs: HALOALKANES_PYQS.filter(p => [2020, 2018, 2016].includes(p.year || 0))
};
