import { DetailedTopicContent } from '../../types/neet';
import { AMINES_DIAGRAMS } from '../amines/aminesDiagrams';
import { AMINES_CONCEPTS } from '../amines/aminesTermsAndConcepts';
import { AMINES_TRAPS_AND_TABLES } from '../amines/aminesTrapsAndTables';
import { AMINES_PYQS } from '../amines/aminesPyqs';
import { AMINES_PRACTICE_QUESTIONS } from '../amines/aminesPracticeSets';

export const chemAminesBasicityDetails: DetailedTopicContent = {
  topicId: "chem-amines-basicity",
  topicName: "Amines — Structure, Basicity, Preparation & Reactions",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Organic Chemistry & Practical (Class 12)",
  chapter: "Amines & Diazonium Salts",

  whatIsThisTopic: "Complete NCERT study module on classification, IUPAC nomenclature, sp³ pyramidal geometry, pyramidal umbrella inversion, rigorous basicity comparison in gas vs aqueous phases (inductive, solvation, and steric effects), substituent effects on aniline basicity (ortho effect), master preparation methods (Gabriel phthalimide, Hofmann bromamide degradation, reduction of nitro/nitriles/amides), and characteristic reactions (acylation, carbylamine test, Hinsberg test, and nitrous acid pathways).",

  basicIdea: [
    "Amines are nitrogen derivatives of ammonia (NH₃) where one or more hydrogen atoms are replaced by alkyl or aryl groups. They are classified into 1° (RNH₂), 2° (R₂NH), and 3° (R₃N) based on the number of carbons directly bonded to nitrogen.",
    "Nitrogen in amines is sp³ hybridized with a trigonal pyramidal geometry and a lone pair in the fourth vertex. In aliphatic amines, rapid umbrella inversion occurs (activation barrier ~25 kJ/mol), preventing optical resolution of chiral 3° amines at room temperature.",
    "Basicity is governed by lone pair availability and conjugate ammonium cation stability. In the gas phase, basicity follows pure inductive order: 3° > 2° > 1° > NH₃. In aqueous solution, three competing factors (+I effect, hydration enthalpy, and steric hindrance) dictate the order: Methyl substituted follows (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃, '213'); Ethyl substituted follows (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ (2° > 3° > 1° > NH₃, '231').",
    "Aromatic amines (Aniline) are ~10⁶ times weaker bases than aliphatic amines due to +R resonance delocalization of the nitrogen lone pair into the benzene ring (pKb ≈ 9.38 vs ~3.3 for alkylamines). Almost all ortho-substituted anilines are weaker bases than aniline due to the Ortho Effect.",
    "Gabriel Phthalimide synthesis selectively produces pure 1° aliphatic amines via SN2 substitution on potassium phthalimide. Aromatic primary amines CANNOT be prepared by this method as aryl halides do not undergo SN2.",
    "Hofmann Bromamide degradation converts a 1° carboxamide (RCONH₂) into a 1° amine (RNH₂) with ONE LESS carbon atom (step-down reaction). The migrating group migrates with complete retention of stereochemical configuration.",
    "Carbylamine test is given EXCLUSIVELY by 1° amines (aliphatic and aromatic) with CHCl₃ + alc. KOH to form intensely foul-smelling isocyanides (R–NC) via a dichlorocarbene (:CCl₂) intermediate.",
    "Hinsberg test using benzenesulphonyl chloride (C₆H₅SO₂Cl) cleanly separates 1° amines (gives alkali-soluble sulphonamide), 2° amines (gives alkali-insoluble sulphonamide), and 3° amines (no reaction)."
  ],

  importantTerms: AMINES_CONCEPTS.aminesTerms,

  conceptExplanation: [
    {
      heading: "1. Classification, IUPAC Nomenclature & Structure of Amines",
      paragraphs: [
        "Amines are classified as Primary (1°), Secondary (2°), or Tertiary (3°) based solely on the number of alkyl or aryl groups attached directly to the nitrogen atom. In contrast to alkyl halides or alcohols (where 1°, 2°, 3° refers to the carbon atom attached to the functional group), tert-butylamine (CH₃)₃C–NH₂ is a PRIMARY amine because the nitrogen bears only one carbon substituent.",
        "In IUPAC nomenclature, aliphatic amines are named as alkanamines by replacing the terminal '-e' of the alkane with '-amine' (e.g., CH₃CH₂NH₂ is ethanamine, CH₃CH(NH₂)CH₃ is propan-2-amine). Secondary and tertiary amines are named as N-substituted derivatives (e.g., CH₃NHCH₂CH₃ is N-methylethanamine, (CH₃)₃N is N,N-dimethylmethanamine). Aromatic amines are named as benzenamine (Aniline) or its derivatives.",
        "Structure & Geometry: The nitrogen atom in amines is sp³ hybridized with three bond pairs and one non-bonding lone pair. The molecular geometry is trigonal pyramidal. Due to lone pair-bond pair repulsion, the bond angle is slightly compressed from the ideal tetrahedral 109.5° (in trimethylamine, C–N–C angle is 108°).",
        "Pyramidal Umbrella Inversion: Simple tertiary aliphatic amines with three different alkyl groups (e.g., N-ethyl-N-methylpropan-1-amine) are theoretically chiral but cannot be resolved into enantiomers at room temperature because the molecule rapidly flips (umbrella inversion) through a planar sp² transition state with a very low activation barrier of ~25 kJ/mol."
      ],
      visual: {
        type: 'svg',
        svgContent: AMINES_DIAGRAMS.amineStructureAndHybridisation,
        caption: "Figure 1: Pyramidal Geometry, Hybridisation, and Aniline Resonance Delocalisation.",
        guide: "Observe the sp³ trigonal pyramidal geometry of aliphatic amines and compare it with the 5 resonance structures of aniline showing delocalization of the nitrogen lone pair into the aromatic ring."
      },
      importantPoints: [
        "Classification depends on the number of alkyl/aryl groups on nitrogen (1°: –NH₂, 2°: –NH–, 3°: –N<).",
        "tert-Butylamine is a 1° amine; isopropylamine is a 1° amine.",
        "Rapid nitrogen umbrella inversion prevents resolution of non-cyclic chiral tertiary amines.",
        "C–N bond length in aniline is 1.37 Å (shorter than aliphatic C–N of 1.47 Å) due to partial double-bond character."
      ]
    },
    {
      heading: "2. Basicity of Amines — Gas Phase vs Aqueous Phase Interplay",
      paragraphs: [
        "Amines act as Lewis bases (lone pair donors) and Brønsted-Lowry bases (proton acceptors). The basic strength of an amine is quantified by its base dissociation constant (Kb) or pKb value: pKb = –log₁₀ Kb. A smaller pKb corresponds to a larger Kb and a stronger base.",
        "Gas Phase / Non-Polar Solvents: In the absence of solvent interactions, basicity is governed entirely by the electron-donating inductive (+I) effect of alkyl groups. Alkyl groups donate electron density to nitrogen, making the lone pair more accessible and stabilizing the conjugate ammonium cation by dispersing its positive charge. Thus, gas-phase basicity follows the pure inductive order: 3° > 2° > 1° > NH₃.",
        "Aqueous Phase — The 3-Factor Interplay: In water, three competing thermodynamic factors simultaneously operate:",
        "1. Inductive Effect (+I): Increases electron density on nitrogen (3° > 2° > 1° > NH₃).",
        "2. Hydration Effect (Solvation Enthalpy): The conjugate ammonium cation (RNH₃⁺, R₂NH₂⁺, R₃NH⁺) is stabilized by hydrogen bonding with surrounding water molecules. Greater number of H-atoms on nitrogen allows more extensive H-bonding and higher hydration energy: 1° cation (3 H-bonds) > 2° cation (2 H-bonds) > 3° cation (1 H-bond).",
        "3. Steric Hindrance: Bulky alkyl groups crowd the nitrogen atom, hindering proton approach and impeding solvent molecules from stabilizing the conjugate cation: 1° (minimal crowding) < 2° < 3° (maximum crowding).",
        "The Combined Aqueous Basicity Orders: For Methyl-substituted amines, the small methyl group permits significant hydration stabilization of 1° and 2° cations, yielding the '213' order: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃). For Ethyl-substituted amines, the larger ethyl groups increase the +I contribution, making 3° edge out 1°, yielding the '231' order: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ (2° > 3° > 1° > NH₃).",
        "Aromatic Amines (Aniline): Aniline (pKb = 9.38) is much weaker than ammonia (pKb = 4.75) and aliphatic amines (pKb ≈ 3.25) because the lone pair on nitrogen is delocalized over the ortho and para positions of the benzene ring through resonance (+R effect). Furthermore, the unprotonated aniline molecule is stabilized by 5 canonical resonance forms, whereas the protonated anilinium ion (C₆H₅NH₃⁺) has only 2 resonance structures, making protonation energetically disfavoured."
      ],
      visual: {
        type: 'svg',
        svgContent: AMINES_DIAGRAMS.aminesBasicitySolvationAndInductive,
        caption: "Figure 2: Basicity Comparison in Gas Phase vs Aqueous Phase (Rule 213 vs Rule 231).",
        guide: "Master the exact aqueous basicity orders: Methyl (213) and Ethyl (231), and understand why 2° amine is universally the strongest in both aqueous series."
      },
      importantPoints: [
        "Gas phase basicity: 3° > 2° > 1° > NH₃ (pure +I effect).",
        "Aqueous phase Methylamines: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃, '213').",
        "Aqueous phase Ethylamines: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ (2° > 3° > 1° > NH₃, '231').",
        "Aliphatic amines >> NH₃ > Aniline.",
        "Substituent effect on Aniline: Electron-donating groups (–OCH₃, –CH₃, –NH₂) at para increase basicity; electron-withdrawing groups (–NO₂, –CN, –CF₃) decrease basicity.",
        "Ortho Effect: Almost all ortho-substituted anilines (e.g., o-toluidine, o-nitroaniline) are weaker bases than aniline due to steric crowding inhibiting protonation."
      ],
      tables: [
        AMINES_TRAPS_AND_TABLES.memoryTables[0]
      ]
    },
    {
      heading: "3. Methods of Preparation of Amines",
      paragraphs: [
        "1. Reduction of Nitro Compounds: Nitroalkanes and nitroarenes are reduced to primary amines using H₂/Pd in ethanol, Sn/HCl, or Fe/HCl. Reduction with iron scrap and hydrochloric acid (Fe + HCl) is industrially preferred because the FeCl₂ produced is hydrolysed by water to regenerate HCl, requiring only a small initiating quantity of hydrochloric acid.",
        "2. Ammonolysis of Alkyl Halides (Hofmann Ammonolysis): Reaction of alkyl halides with ethanolic ammonia in a sealed tube at 373 K. The primary amine formed acts as a nucleophile to react further with alkyl halide, producing a mixture of 1°, 2°, 3° amines and quaternary ammonium salts. To obtain primarily 1° amine, a large excess of ammonia (NH₃) is used. If excess alkyl halide is used, quaternary ammonium salt (R₄N⁺ X⁻) is the major product.",
        "3. Reduction of Nitriles (Mendius Reaction): Nitriles (alkyl cyanides, R–C≡N) are reduced to primary amines containing ONE MORE carbon atom than the original alkyl halide using catalytic hydrogenation (H₂/Ni) or lithium aluminium hydride (LiAlH₄) or Na(Hg)/C₂H₅OH: R–C≡N + 4[H] ⟶ R–CH₂NH₂.",
        "4. Reduction of Amides: Primary amides on reduction with LiAlH₄ followed by aqueous workup yield primary amines with the SAME number of carbon atoms: R–CONH₂ + LiAlH₄ ⟶ R–CH₂NH₂.",
        "5. Gabriel Phthalimide Synthesis: Phthalimide is treated with ethanolic KOH to form potassium phthalimide. Reaction with primary alkyl halide (R–X) yields N-alkylphthalimide via SN2 nucleophilic substitution. Alkaline hydrolysis with aqueous NaOH yields pure primary aliphatic amine (R–NH₂) and sodium phthalate. Aromatic primary amines (aniline) CANNOT be prepared by this method because aryl halides do not undergo nucleophilic SN2 substitution with potassium phthalimide.",
        "6. Hofmann Bromamide Degradation: Primary carboxamides on treatment with bromine in aqueous or ethanolic NaOH undergo degradation to give a primary amine containing ONE LESS carbon atom than the starting amide: R–CONH₂ + Br₂ + 4 NaOH ⟶ R–NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O. Mechanism involves N-bromoamide, acylnitrene, and alkyl isocyanate (R–N=C=O) intermediates. The alkyl/aryl group migrates with complete retention of stereochemical configuration."
      ],
      visual: {
        type: 'svg',
        svgContent: AMINES_DIAGRAMS.amineSynthesisMechanisms,
        caption: "Figure 3: Gabriel Phthalimide Synthesis & Hofmann Bromamide Degradation Pathways.",
        guide: "Follow the multi-step pathway of Gabriel phthalimide synthesis and note why aryl halides fail; trace the stoichiometry (1 amide : 1 Br₂ : 4 NaOH) and carbon loss in Hofmann bromamide degradation."
      },
      importantPoints: [
        "Gabriel phthalimide yields PURE 1° aliphatic amines only (no 2°/3° contamination).",
        "Aromatic amines CANNOT be made by Gabriel synthesis.",
        "Hofmann bromamide is a step-down reaction (1 less carbon; carbonyl carbon released as Na₂CO₃).",
        "Stoichiometry: 1 mole Amide consumes 1 mole Br₂ and 4 moles NaOH.",
        "Migrating group moves with complete retention of stereochemistry.",
        "Fe/HCl is preferred for nitro reduction because FeCl₂ hydrolyses to regenerate HCl."
      ],
      tables: [
        AMINES_TRAPS_AND_TABLES.memoryTables[1]
      ]
    },
    {
      heading: "4. Chemical Reactions & Diagnostic Distinction Tests",
      paragraphs: [
        "1. Alkylation: Amines react with alkyl halides via nucleophilic substitution (SN2) to form secondary amines, tertiary amines, and finally quaternary ammonium salts (exhaustive alkylation).",
        "2. Acylation (Protection of –NH₂): Primary and secondary amines react with acid chlorides or acid anhydrides in the presence of a base stronger than amine (e.g., pyridine) to form N-substituted amides. Pyridine removes the HCl formed, shifting the equilibrium forward. For example, Aniline + Ac₂O / Pyridine ⟶ Acetanilide (C₆H₅NHCOCH₃). Acylation reduces the activating power of the –NH₂ group by resonance delocalization into the acetyl carbonyl group, preventing polybromination and oxidation during electrophilic aromatic substitution.",
        "3. Schotten-Baumann Reaction: Reaction of amines with benzoyl chloride (C₆H₅COCl) in the presence of aqueous NaOH: C₆H₅NH₂ + C₆H₅COCl + NaOH ⟶ Benzanilide (C₆H₅NHCOC₆H₅) + NaCl + H₂O.",
        "4. Carbylamine Reaction (Isocyanide Test): Exclusively given by primary (1°) aliphatic and aromatic amines. When heated with chloroform (CHCl₃) and ethanolic KOH, 1° amines form intensely foul-smelling isocyanides (carbylamines, R–NC) through a reactive dichlorocarbene (:CCl₂) intermediate: R–NH₂ + CHCl₃ + 3 KOH (alc.) ⟶ R–NC + 3 KCl + 3 H₂O. 2° and 3° amines DO NOT respond.",
        "5. Hinsberg Test: Benzenesulphonyl chloride (C₆H₅SO₂Cl) reacts with 1° amines to form N-alkylbenzenesulphonamide (soluble in aqueous KOH due to acidic N–H). 2° amines react to form N,N-dialkylbenzenesulphonamide (insoluble in KOH due to lack of acidic H). 3° amines do not react with Hinsberg reagent.",
        "6. Reaction with Nitrous Acid (HNO₂): Primary aliphatic amines react with NaNO₂ + HCl at 0–5 °C to form unstable alkyldiazonium salts, which spontaneously decompose into carbocations, yielding a quantitative liberation of nitrogen gas (N₂↑) and a mixture of alcohol, alkene, and alkyl chloride. Primary aromatic amines form stable arenediazonium salts (Ar–N₂⁺Cl⁻) at 0–5 °C. Secondary amines form yellow oily N-nitrosamines (R₂N–N=O). Tertiary aliphatic amines form soluble nitrite salts.",
        "7. Electrophilic Aromatic Substitution of Aniline: Bromination with bromine water yields 2,4,6-tribromoaniline (white ppt). Monobromination requires protection by acetylation. Direct nitration gives 51% para, 47% meta (due to anilinium ion formation), and 2% ortho nitroaniline. Aniline does NOT undergo Friedel-Crafts alkylation or acylation due to adduct formation with AlCl₃ catalyst."
      ],
      visual: {
        type: 'svg',
        svgContent: AMINES_DIAGRAMS.amineDistinctionTests,
        caption: "Figure 4: Carbylamine Test and Hinsberg Reagent Separation Matrix.",
        guide: "Compare the definitive chemical responses of 1°, 2°, and 3° amines under Carbylamine and Hinsberg conditions."
      },
      importantPoints: [
        "Carbylamine test is exclusive to 1° amines (aliphatic and aromatic); foul smell of R–NC.",
        "Hinsberg reagent: 1° gives alkali-soluble product, 2° gives alkali-insoluble product, 3° does not react.",
        "1° aliphatic amine + HNO₂ ⟶ Alcohol + N₂↑ gas (used in Van Slyke amino acid estimation).",
        "Aniline nitration produces 47% meta-nitroaniline due to –NH₃⁺ anilinium ion formation.",
        "Aniline fails Friedel-Crafts reaction because –NH₂ coordinates with Lewis acid AlCl₃."
      ],
      tables: [
        AMINES_TRAPS_AND_TABLES.memoryTables[2]
      ]
    }
  ],

  formulae: [
    {
      title: "Hofmann Bromamide Degradation Equation",
      formula: "R–CONH₂ + Br₂ + 4 NaOH ⟶ R–NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O",
      meaning: "Conversion of primary carboxamide to primary amine with loss of carbonyl carbon as sodium carbonate.",
      variables: "R = alkyl or aryl group; stoichiometric ratio = 1 mol amide : 1 mol Br₂ : 4 mol NaOH",
      whenToUse: "Step-down organic synthesis to shorten carbon chain length by 1 carbon atom."
    },
    {
      title: "Carbylamine (Isocyanide) Reaction",
      formula: "R–NH₂ + CHCl₃ + 3 KOH (alc.) ⟶(Δ)⟶ R–NC (Carbylamine) + 3 KCl + 3 H₂O",
      meaning: "Diagnostic identification test for 1° aliphatic and 1° aromatic amines.",
      variables: "Reactive intermediate = Dichlorocarbene (:CCl₂); Product = Intensely foul-smelling isocyanide",
      whenToUse: "Distinguishing 1° amines from 2° and 3° amines in qualitative analysis."
    },
    {
      title: "Hinsberg Reaction for Primary Amine",
      formula: "C₆H₅SO₂Cl + R–NH₂ ⟶ C₆H₅SO₂NHR + HCl ⟶(+KOH)⟶ [C₆H₅SO₂NR]⁻ K⁺ + H₂O",
      meaning: "Formation of N-alkylbenzenesulphonamide containing acidic hydrogen, soluble in aqueous alkali.",
      variables: "C₆H₅SO₂Cl = Benzenesulphonyl chloride (Hinsberg reagent)",
      whenToUse: "Separation and chemical distinction of primary from secondary and tertiary amines."
    },
    {
      title: "Aqueous Basicity Rule (Methyl vs Ethyl)",
      formula: "Methyl: 2° > 1° > 3° > NH₃ (213) | Ethyl: 2° > 3° > 1° > NH₃ (231)",
      meaning: "Empirical aqueous basicity orders balancing +I inductive effect, hydration enthalpy, and steric hindrance.",
      whenToUse: "Ranking aliphatic amines in aqueous solution."
    }
  ],

  neetImportantPoints: [
    "Basicity order in aqueous solution: Methylamines ⟶ (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃, '213').",
    "Basicity order in aqueous solution: Ethylamines ⟶ (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ (2° > 3° > 1° > NH₃, '231').",
    "Basicity order in gas phase: 3° > 2° > 1° > NH₃ (governed purely by +I inductive effect).",
    "Aniline is ~10⁶ times weaker base than aliphatic amines due to +R resonance delocalization of the lone pair into the ring (pKb = 9.38).",
    "Ortho Effect: Ortho-substituted anilines (e.g., o-toluidine, o-nitroaniline) are weaker bases than aniline due to steric crowding inhibiting protonation.",
    "Gabriel Phthalimide synthesis prepares PURE primary ALIPHATIC amines only; aryl halides do not undergo SN2.",
    "Hofmann Bromamide degradation converts R–CONH₂ to R–NH₂ with ONE LESS carbon; migrating group retains configuration.",
    "Carbylamine test (CHCl₃ + alc. KOH) is given EXCLUSIVELY by 1° amines (both aliphatic and aromatic) forming foul-smelling isocyanides.",
    "Hinsberg reagent (C₆H₅SO₂Cl): 1° amine gives alkali-soluble sulphonamide; 2° amine gives alkali-insoluble sulphonamide; 3° amine does not react.",
    "1° aliphatic amines react with HNO₂ to give alcohols and quantitative liberation of N₂ gas (Van Slyke estimation).",
    "Direct nitration of aniline gives 51% para, 47% meta, and 2% ortho nitroaniline due to formation of meta-directing anilinium ion (–NH₃⁺).",
    "Aniline DOES NOT undergo Friedel-Crafts alkylation or acylation due to Lewis acid-base adduct formation with AlCl₃.",
    "Bromination of aniline with bromine water yields 2,4,6-tribromoaniline (white ppt); monobromination requires protection by acetylation."
  ],

  commonConfusions: AMINES_TRAPS_AND_TABLES.neetReactionTraps.map(trap => ({
    misconception: trap.trap,
    correction: trap.fact,
    whyItMattersForNEET: trap.whyItMatters
  })),

  quickRevision: [
    "Amines Classification: 1° (RNH₂), 2° (R₂NH), 3° (R₃N) based on nitrogen substitution (tert-butylamine is 1°).",
    "Geometry & Hybridisation: sp³ pyramidal, C–N–C angle 108° in (CH₃)₃N; undergoes rapid umbrella inversion.",
    "Gas Phase Basicity: 3° > 2° > 1° > NH₃ (pure +I inductive effect).",
    "Aqueous Phase Basicity: Methyl = 2° > 1° > 3° > NH₃ (213); Ethyl = 2° > 3° > 1° > NH₃ (231).",
    "Aromatic Basicity: Aliphatic amines >> NH₃ > Aniline (+R delocalization, pKb = 9.38). Ortho-substituted anilines are weaker bases (Ortho Effect).",
    "Gabriel Synthesis: Pure 1° aliphatic amines only (phthalimide + KOH ⟶ RX ⟶ aq. NaOH); aryl halides fail.",
    "Hofmann Bromamide: RCONH₂ + Br₂ + 4 NaOH ⟶ RNH₂ + Na₂CO₃ (1 less carbon, retention of configuration).",
    "Carbylamine Test: 1° amines + CHCl₃ + alc. KOH ⟶ foul-smelling R–NC (:CCl₂ intermediate). 2°/3° do not react.",
    "Hinsberg Test: C₆H₅SO₂Cl ⟶ 1° (alkali-soluble), 2° (alkali-insoluble), 3° (no reaction).",
    "Nitrous Acid: 1° aliphatic ⟶ Alcohol + N₂↑; 1° aromatic (0–5 °C) ⟶ Ar–N₂⁺Cl⁻; 2° ⟶ yellow oily N-nitrosamine.",
    "Aniline Nitration: 51% para, 47% meta, 2% ortho due to –NH₃⁺ anilinium ion formation.",
    "Friedel-Crafts: Fails completely with aniline due to AlCl₃ complexation."
  ],

  practiceQuestions: AMINES_PRACTICE_QUESTIONS,

  pyqs: AMINES_PYQS.filter(q => q.topicId === "chem-amines-basicity"),

  neetMarksPotential: {
    topicName: "Amines — Structure, Basicity, Preparation & Reactions",
    confidenceLabel: "HIGH",
    confidenceText: "High-yield core Organic Chemistry topic appearing in 100% of NEET UG papers with 1 to 2 direct questions (4 to 8 marks).",
    totalAnalyzedPapers: 12,
    papersWithDirectPyqs: 12,
    totalDirectPyqs: 16,
    totalHistoricalMarks: 64,
    averageDirectPyqsPerPaper: 1.33,
    maxDirectPyqsInSinglePaper: 2,
    minDirectPyqsInSinglePaper: 1,
    minDirectMarks: 4,
    maxDirectMarks: 8,
    avgDirectMarksPerPaper: 5.33,
    whatThisMeansForYou: "Mastering the basicity rules ('213' and '231'), Gabriel phthalimide limitations, Hofmann bromamide carbon-loss mechanism, and Carbylamine/Hinsberg distinction tests guarantees 4 to 8 marks in NEET Organic Chemistry.",
    typicalContributionMarks: 4,
    historicalMarksRangeText: "4 – 8 Marks",
    weightagePercentage: 4.5,
    expectedQuestionsCount: 2,
    totalMarksPotential: 8,
    historicalFrequencyYears: "NEET 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016",
    trendAnalysis: "Consistently tested through direct basicity ranking, multi-step reaction sequences involving Gabriel/Hofmann methods, and qualitative test identification.",
    preparationStrategy: "Memorize aqueous basicity orders (213 and 231), Gabriel phthalimide limitations, Hofmann bromamide stoichiometry (1:1:4), and Carbylamine/Hinsberg reaction pathways.",
    averageQuestionsPerYear: 1.5,
    scoreWeightage: "High Yield (4 - 8 Marks)",
    difficultyRating: "Medium",
    highYieldStatus: true
  }
};
