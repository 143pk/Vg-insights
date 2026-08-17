// Master Tables, Reagent Sheets, Named Reactions, 25+ NEET Traps, and 15-Minute Revision for Chapter 21: Aldehydes, Ketones and Carboxylic Acids

export const ALDEHYDES_KETONES_TABLES_AND_TRAPS = {
  // 1. Master Comparison Tables
  comparisonTables: [
    {
      title: "1. Aldehydes vs Ketones: Comparative Properties & Reactivity",
      headers: ["Property / Reaction", "Aldehydes (R–CHO)", "Ketones (R–CO–R')", "NEET Core Concept / Reason"],
      rows: [
        ["Carbonyl Position", "Terminal (>C=O bonded to at least one H)", "Internal (>C=O flanked by two alkyl/aryl groups)", "Terminal position leaves carbonyl carbon less sterically hindered."],
        ["Nucleophilic Reactivity", "Significantly more reactive (HCHO > RCHO)", "Less reactive due to dual alkyl +I and steric crowd", "+I electron release neutralizes δ+ charge on carbon; bulkier groups impede ~107° Bürgi-Dunitz approach."],
        ["Tollens' Test", "Positive: Forms shining Silver Mirror (Ag↓)", "Negative: No reaction with ordinary ketones", "Aldehydes have oxidisable aldehydic C–H bond; ketones lack C–H on carbonyl carbon."],
        ["Fehling's Test", "Positive for Aliphatic aldehydes (Red Cu₂O↓)", "Negative: No reaction", "Aromatic aldehydes (C₆H₅CHO) also fail Fehling's due to resonance stabilization."],
        ["Schiff's Reagent", "Rapidly restores pink/magenta color", "Negative (or extremely slow with acetone)", "Mild diagnostic test at room temperature."],
        ["Oxidation ease", "Easily oxidised by mild agents (Ag⁺, Cu²⁺, Br₂/H₂O)", "Oxidised only under vigorous conditions (hot KMnO₄)", "Ketone oxidation involves destructive C–C bond cleavage following Popoff's rule."],
        ["Reaction with 1° Alcohols", "Forms Hemiacetal ⟶ Acetal", "Resists monohydric alcohols; forms Cyclic Ketals with 1,2-glycols", "Cyclic ketal formation is driven by favorable entropy of ring closure."]
      ]
    },
    {
      title: "2. Tollens' vs Fehling's vs Benedict's vs Schiff's Diagnostic Reagents",
      headers: ["Reagent Name", "Composition / Active Ion", "Positive Observation", "Substrates That Respond (+ve)", "Substrates That Fail (-ve)"],
      rows: [
        ["Tollens' Reagent", "Ammoniacal AgNO₃: [Ag(NH₃)₂]⁺ OH⁻", "Shining Silver Mirror (Ag↓) or black ppt", "All Aliphatic & Aromatic Aldehydes, Formic Acid (HCOOH), α-Hydroxy Ketones", "Ordinary Ketones, Esters, Carboxylic Acids, Alcohols"],
        ["Fehling's Solution", "Fehling A (aq CuSO₄) + Fehling B (Alk. Rochelle salt)", "Brick-Red Precipitate of Cu₂O↓", "Aliphatic Aldehydes (HCHO, CH₃CHO), Reducing Sugars", "Aromatic Aldehydes (C₆H₅CHO), Ordinary Ketones, Acetic Acid"],
        ["Benedict's Solution", "CuSO₄ + Sodium citrate + Na₂CO₃", "Red / Yellow / Green Precipitate of Cu₂O↓", "Aliphatic Aldehydes, Glucose, Fructose (in urine)", "Aromatic Aldehydes, Ketones (except α-hydroxy)"],
        ["Schiff's Reagent", "p-Rosaniline hydrochloride decolorized with SO₂", "Restoration of Pink / Magenta / Violet colour", "Aliphatic & Aromatic Aldehydes", "Ketones, Carboxylic acids, Esters"]
      ]
    },
    {
      title: "3. Aldol Condensation vs Cannizzaro Reaction Comparison",
      headers: ["Parameter", "Aldol Condensation", "Cannizzaro Reaction", "Crossed Variant Rule"],
      rows: [
        ["Substrate Requirement", "Must contain AT LEAST ONE α-Hydrogen", "Must LACK α-Hydrogen (Zero α-H)", "Mixed Aldol gives 4 products unless one lacks α-H; Crossed Cannizzaro with HCHO always oxidises HCHO."],
        ["Reagent / Base Used", "Dilute base (dil. NaOH, Ba(OH)₂, 10%)", "Concentrated base (50% NaOH / KOH, heat)", "Cannizzaro requires strongly concentrated base for dianion formation."],
        ["Core Intermediate", "Resonance-stabilized Enolate carbanion (:⁻CH₂–CHO)", "Gem-diolate dianion intermediate / Hydride transfer", "Enolate acts as C-nucleophile; in Cannizzaro, Hydride (:H⁻) is transferred."],
        ["Primary Product", "β-Hydroxy carbonyl (Aldol/Ketol)", "Equimolar 1° Alcohol + Carboxylate salt", "Aldol undergoes spontaneous dehydration on heating to α,β-unsaturated enal."],
        ["Nature of Reaction", "Nucleophilic addition-condensation", "Disproportionation (Self Redox)", "1 molecule oxidised, 1 molecule reduced simultaneously."],
        ["Classic Examples", "Acetaldehyde, Acetone, Propanal, Acetophenone", "Formaldehyde (HCHO), Benzaldehyde (C₆H₅CHO), Trimethylacetaldehyde ((CH₃)₃CCHO)", "Chloral (CCl₃CHO) reacts with conc. NaOH to give CHCl₃ + HCOONa (Haloform-type cleavage, not Cannizzaro!)."]
      ]
    },
    {
      title: "4. Clemmensen vs Wolff-Kishner Carbonyl Deoxygenation (>C=O ⟶ >CH₂)",
      headers: ["Parameter", "Clemmensen Reduction", "Wolff-Kishner Reduction", "NEET Selection Strategy"],
      rows: [
        ["Reagents", "Zinc Amalgam + Conc. HCl [Zn(Hg) / conc. HCl]", "Hydrazine + KOH / Ethylene glycol, Δ [NH₂NH₂ / KOH, 453-473 K]", "Choose Clemmensen for base-sensitive compounds; choose Wolff-Kishner for acid-sensitive compounds."],
        ["Reaction Medium", "Strongly ACIDIC", "Strongly BASIC", "Acid-sensitive groups (–OH, –OR, C=C) degrade in Clemmensen."],
        ["By-products", "ZnCl₂, H₂O", "Nitrogen gas (N₂↑), H₂O", "Evolution of inert N₂ gas drives Wolff-Kishner irreversibly forward."],
        ["Incompatible Groups", "Acid-sensitive: –OH (dehydrates), –OR (cleaves), C=C (adds HCl)", "Base-sensitive: –COOR (hydrolyses), –X (undergoes E2/S_N2 elimination)", "Critical NEET question: Reduction of 4-hydroxyacetophenone requires Wolff-Kishner, not Clemmensen!"]
      ]
    },
    {
      title: "5. Reducing Agents Selectivity Matrix",
      headers: ["Functional Group", "NaBH₄ in EtOH", "LiAlH₄ in dry ether", "DIBAL-H at -78°C", "H₂ / Pd-C or Ni"],
      rows: [
        ["Aldehydes (RCHO)", "Reduces to 1° Alcohol", "Reduces to 1° Alcohol", "Reduces to 1° Alcohol", "Reduces to 1° Alcohol"],
        ["Ketones (RCOR')", "Reduces to 2° Alcohol", "Reduces to 2° Alcohol", "Reduces to 2° Alcohol", "Reduces to 2° Alcohol"],
        ["Carboxylic Acids (RCOOH)", "NO REACTION (Inactive)", "Reduces to 1° Alcohol", "NO REACTION", "Resists catalytic hydrogenation"],
        ["Esters (RCOOR')", "NO REACTION (Generally)", "Reduces to 2 Alcohols (RCH₂OH + R'OH)", "STOPS at Aldehyde (RCHO)!", "Resists (requires copper chromite at high T/P)"],
        ["Acid Chlorides (RCOCl)", "Reduces to 1° Alcohol", "Reduces to 1° Alcohol", "STOPS at Aldehyde (RCHO)", "Rosenmund (Pd/BaSO₄) stops at Aldehyde"],
        ["Nitriles (R–C≡N)", "NO REACTION", "Reduces to 1° Amine (RCH₂NH₂)", "STOPS at Aldehyde (RCHO)!", "Reduces to 1° Amine (RCH₂NH₂)"],
        ["Alkene C=C double bond", "NO REACTION (Preserves C=C)", "NO REACTION (Preserves C=C, except cinnamyl)", "NO REACTION (Preserves C=C)", "Reduces C=C to Alkane C–C"]
      ]
    },
    {
      title: "6. Quantitative Acidity Ranking & pKa Scale of Carboxylic Acids",
      headers: ["Carboxylic Acid Compound", "Structure", "pKₐ Value (approx.)", "Relative Acidic Strength Factor"],
      rows: [
        ["Trifluoroacetic acid", "CF₃COOH", "0.23", "Strongest aliphatic: 3 powerful -I Fluorine atoms maximally disperse negative charge."],
        ["Trichloroacetic acid", "CCl₃COOH", "0.64", "Extremely strong: 3 -I Chlorine atoms stabilize CCl₃COO⁻."],
        ["Dichloroacetic acid", "CHCl₂COOH", "1.29", "Two -I Chlorine atoms."],
        ["Nitroacetic acid", "NO₂CH₂COOH", "1.68", "Strong -I and -M withdrawing nitro group."],
        ["Cyanoacetic acid", "NCCH₂COOH", "2.47", "Strong -I cyano group."],
        ["Fluoroacetic acid", "FCH₂COOH", "2.59", "Single -I Fluorine."],
        ["Chloroacetic acid", "ClCH₂COOH", "2.87", "Single -I Chlorine."],
        ["Bromoacetic acid", "BrCH₂COOH", "2.90", "Single -I Bromine (less electronegative than Cl)."],
        ["Iodoacetic acid", "ICH₂COOH", "3.17", "Single -I Iodine."],
        ["Formic acid (Methanoic acid)", "HCOOH", "3.75", "Stronger than all un-substituted aliphatic acids because it lacks +I alkyl groups."],
        ["2-Chlorobutanoic acid", "CH₃CH₂CH(Cl)COOH", "2.86", "α-Halogen: -I group is close to –COOH (strong effect)."],
        ["3-Chlorobutanoic acid", "CH₃CH(Cl)CH₂COOH", "4.05", "β-Halogen: -I group is farther (moderate effect)."],
        ["4-Chlorobutanoic acid", "ClCH₂CH₂CH₂COOH", "4.52", "γ-Halogen: -I group is very far (minimal effect)."],
        ["Benzoic acid", "C₆H₅COOH", "4.20", "Aromatic acid; stronger than acetic acid due to sp² phenyl ring electronegativity."],
        ["o-Nitrobenzoic acid", "o-NO₂–C₆H₄COOH", "2.17", "Ortho effect + strong -I/-M makes it much stronger than meta and para isomers."],
        ["Acetic acid (Ethanoic acid)", "CH₃COOH", "4.76", "+I effect of methyl group destabilizes CH₃COO⁻."],
        ["Propanoic acid", "CH₃CH₂COOH", "4.87", "+I effect of ethyl group further decreases acidity."]
      ]
    }
  ],

  // 2. Master Reagent & Reaction Table
  masterReagents: [
    { reaction: "Rosenmund Reduction", reactant: "Acyl Chloride (RCOCl)", reagent: "H₂ / Pd–BaSO₄, Quinoline / Sulfur in boiling xylene", product: "Aldehyde (RCHO)", keyPoint: "BaSO₄/quinoline poisons catalyst to prevent further reduction to alcohol. Formaldehyde cannot be made." },
    { reaction: "Stephen Reduction", reactant: "Nitrile (R–CN)", reagent: "(i) SnCl₂ + conc. HCl, (ii) H₃O⁺ / steam", product: "Aldehyde (RCHO)", keyPoint: "Aldimine intermediate [RCH=NH·HCl] hydrolysed to aldehyde." },
    { reaction: "DIBAL-H Reduction", reactant: "Ester (RCOOR') or Nitrile (RCN)", reagent: "(i) DIBAL-H at 195 K (-78°C), (ii) H₂O", product: "Aldehyde (RCHO)", keyPoint: "Selectively stops at aldehyde stage without attacking C=C bonds." },
    { reaction: "Etard Reaction", reactant: "Toluene (C₆H₅CH₃)", reagent: "(i) CrO₂Cl₂ / CS₂ or CCl₄, (ii) H₃O⁺", product: "Benzaldehyde (C₆H₅CHO)", keyPoint: "Brown chromium complex intermediate [C₆H₅CH(OCrOHCl₂)₂] hydrolysed." },
    { reaction: "Gattermann-Koch Reaction", reactant: "Benzene (C₆H₆)", reagent: "CO + HCl, anh. AlCl₃ / CuCl", product: "Benzaldehyde (C₆H₅CHO)", keyPoint: "Formyl chloride [HCOCl] generated in situ acts as electrophile." },
    { reaction: "Friedel-Crafts Acylation", reactant: "Benzene + RCOCl or (RCO)₂O", reagent: "Anhydrous AlCl₃", product: "Aromatic Ketone (C₆H₅COR)", keyPoint: "Acylium ion [R–C⁺=O] electrophile; does not undergo carbocation rearrangement." },
    { reaction: "Ozonolysis of Alkenes", reactant: "Alkene (>C=C<)", reagent: "(i) O₃ / CH₂Cl₂, (ii) Zn / H₂O (reductive)", product: "Aldehydes and/or Ketones", keyPoint: "Cleaves C=C double bond cleanly; Zn prevents oxidation of aldehydes to acids." },
    { reaction: "Kucherov Reaction (Alkyne Hydration)", reactant: "Ethyne (CH≡CH) / Propyne (CH₃C≡CH)", reagent: "40% H₂SO₄ + 1% HgSO₄ at 333 K", product: "Ethyne ⟶ Ethanal; Propyne ⟶ Acetone", keyPoint: "Markovnikov addition of H₂O followed by enol-keto tautomerization." },
    { reaction: "Cyanohydrin Formation", reactant: "Aldehyde / Ketone", reagent: "HCN + catalytic base (OH⁻)", product: "Cyanohydrin [>C(OH)CN]", keyPoint: "Hydrolysis with dil. acid gives α-hydroxy acid; reduction with LiAlH₄ gives β-amino alcohol." },
    { reaction: "Bisulfite Addition", reactant: "Aldehyde / Methyl Ketone", reagent: "Saturated aqueous NaHSO₃", product: "Bisulfite Adduct [>C(OH)SO₃Na]", keyPoint: "White crystalline solid; used to purify/separate carbonyl compounds." },
    { reaction: "Acetal / Ketal Formation", reactant: "Aldehyde + 2 R'OH", reagent: "Dry HCl gas (catalyst + dehydrating)", product: "Acetal [RCH(OR')₂]", keyPoint: "Ketones require 1,2-diols to form cyclic ketals. Stable to base, hydrolysed by acid." },
    { reaction: "Reaction with 2,4-DNP (Brady's)", reactant: "Aldehyde / Ketone", reagent: "2,4-Dinitrophenylhydrazine (H⁺, pH 4.5)", product: "2,4-DNP derivative (Hydrazone)", keyPoint: "Forms bright yellow/orange/red crystalline precipitate. Universal test for carbonyl group." },
    { reaction: "Reaction with Semicarbazide", reactant: "Aldehyde / Ketone", reagent: "H₂N–NH–CO–NH₂ (Semicarbazide)", product: "Semicarbazone", keyPoint: "🚨 Only the hydrazine –NH₂ reacts; amide –NH₂ lone pair is delocalised into C=O!" },
    { reaction: "Tollens' Test", reactant: "All Aldehydes + Formic acid", reagent: "[Ag(NH₃)₂]⁺ OH⁻, warm", product: "Carboxylate ion + Silver Mirror (Ag↓)", keyPoint: "Responds to both aliphatic & aromatic aldehydes. Ketones do not respond." },
    { reaction: "Fehling's Test", reactant: "Aliphatic Aldehydes ONLY", reagent: "Fehling A (CuSO₄) + Fehling B (Rochelle salt)", product: "Carboxylate ion + Brick-Red Cu₂O↓", keyPoint: "🚨 Aromatic aldehydes (C₆H₅CHO) give a NEGATIVE Fehling's test!" },
    { reaction: "Haloform (Iodoform) Test", reactant: "CH₃–CO– or CH₃–CH(OH)– compounds", reagent: "I₂ + aqueous NaOH (or NaOI)", product: "RCOONa + Yellow CHI₃↓ (mp 119°C)", keyPoint: "Distinguishes Pentan-2-one (+ve) from Pentan-3-one (-ve); Ethanol (+ve) from Methanol (-ve)." },
    { reaction: "Aldol Condensation", reactant: "Carbonyls with α-Hydrogen", reagent: "Dilute NaOH (10%), warm", product: "α,β-Unsaturated enal/enone", keyPoint: "Requires α-H; intermediate is β-hydroxy carbonyl which dehydrates on heating." },
    { reaction: "Cannizzaro Reaction", reactant: "Aldehydes WITHOUT α-Hydrogen", reagent: "50% Conc. NaOH / KOH, heat", product: "Alcohol + Carboxylic Acid Salt", keyPoint: "Disproportionation redox. In Crossed Cannizzaro with HCHO, HCHO is ALWAYS oxidised." },
    { reaction: "Clemmensen Reduction", reactant: "Aldehydes / Ketones", reagent: "Zn(Hg) / Conc. HCl, reflux", product: "Alkane (>C=O ⟶ >CH₂)", keyPoint: "Strongly acidic medium. Incompatible with acid-sensitive groups (–OH, –OR, C=C)." },
    { reaction: "Wolff-Kishner Reduction", reactant: "Aldehydes / Ketones", reagent: "(i) NH₂NH₂, (ii) KOH in ethylene glycol, Δ", product: "Alkane (>C=O ⟶ >CH₂) + N₂↑", keyPoint: "Strongly basic medium. Incompatible with base-sensitive groups (esters, halides)." },
    { reaction: "Grignard with Carbon Dioxide", reactant: "RMgX (Grignard Reagent)", reagent: "(i) Solid CO₂ (dry ice) in ether, (ii) H₃O⁺", product: "Carboxylic Acid (RCOOH)", keyPoint: "Increases carbon chain length by one carbon atom." },
    { reaction: "Fischer Esterification", reactant: "RCOOH + R'OH", reagent: "Conc. H₂SO₄ (catalyst + dehydrating)", product: "Ester (RCOOR') + H₂O", keyPoint: "Reversible; –OH is lost from carboxylic acid and –H from alcohol (proven by ¹⁸O tracer)." },
    { reaction: "Soda-Lime Decarboxylation", reactant: "Sodium Carboxylate (RCOONa)", reagent: "NaOH + CaO (3:1 by weight), heat", product: "Alkane (R–H) + Na₂CO₃", keyPoint: "Chain shortening by one carbon. CaO keeps mixture porous and prevents glass damage." },
    { reaction: "Hell-Volhard-Zelinsky (HVZ)", reactant: "Carboxylic Acid with α-H", reagent: "(i) X₂ (Cl₂/Br₂) / Red P, (ii) H₂O", product: "α-Halocarboxylic acid", keyPoint: "Requires α-H. Formic acid, benzoic acid, and (CH₃)₃CCOOH do NOT undergo HVZ." }
  ],

  // 3. Named Reactions Master Registry
  namedReactions: [
    { name: "Rosenmund Reduction", equation: "RCOCl + H₂ xrightarrow{Pd-BaSO₄, S/quinoline} RCHO + HCl", importance: "Prep of aldehydes from acid chlorides without over-reduction." },
    { name: "Stephen Reduction", equation: "R–CN + SnCl₂ + HCl ⟶ RCH=NH·HCl xrightarrow{H₃O⁺} RCHO + NH₄Cl", importance: "Prep of aldehydes from alkyl/aryl nitriles via aldimine." },
    { name: "Etard Reaction", equation: "C₆H₅CH₃ + 2 CrO₂Cl₂ xrightarrow{CS₂} [Complex] xrightarrow{H₃O⁺} C₆H₅CHO", importance: "Controlled oxidation of toluene to benzaldehyde." },
    { name: "Gattermann-Koch Reaction", equation: "C₆H₆ + CO + HCl xrightarrow{anh. AlCl₃ / CuCl} C₆H₅CHO + HCl", importance: "Industrial formylation of benzene to benzaldehyde." },
    { name: "Aldol Condensation", equation: "2 CH₃CHO xrightarrow{dil. NaOH} CH₃CH(OH)CH₂CHO xrightarrow{Δ, -H₂O} CH₃CH=CHCHO", importance: "Forms C–C bond using enolate nucleophile; requires α-H." },
    { name: "Cannizzaro Reaction", equation: "2 C₆H₅CHO + 50% NaOH xrightarrow{Δ} C₆H₅CH₂OH + C₆H₅COONa", importance: "Disproportionation of aldehydes lacking α-hydrogen." },
    { name: "Haloform Reaction", equation: "RCOCH₃ + 3 X₂ + 4 NaOH ⟶ RCOONa + CHX₃↓ + 3 NaX + 3 H₂O", importance: "Specific test for methyl ketones and CH₃CH(OH)– compounds." },
    { name: "Clemmensen Reduction", equation: ">C=O + 4 [H] xrightarrow{Zn(Hg) / conc. HCl} >CH₂ + H₂O", importance: "Direct deoxygenation in acidic medium." },
    { name: "Wolff-Kishner Reduction", equation: ">C=O + NH₂NH₂ ⟶ >C=N–NH₂ xrightarrow{KOH / glycol, Δ} >CH₂ + N₂↑", importance: "Direct deoxygenation in basic medium." },
    { name: "HVZ Reaction", equation: "RCH₂COOH + Br₂ xrightarrow{Red P} RCH(Br)COOH + HBr", importance: "Selective α-bromination of carboxylic acids." }
  ],

  // 4. Dedicated 25+ NEET Traps & Common Mistakes
  neetTraps: [
    {
      id: "trap-1",
      title: "🚨 Trap 1: Fehling's Test with Benzaldehyde (Aromatic Aldehyde)",
      trap: "Assuming that because benzaldehyde (C₆H₅CHO) has an aldehyde group, it will give a positive brick-red precipitate with Fehling's solution.",
      reality: "Aromatic aldehydes DO NOT reduce Fehling's solution! The C=O group in benzaldehyde is conjugated with the aromatic ring (+R effect), decreasing electrophilicity and oxidation susceptibility towards the weaker Cu²⁺ tartrate complex. However, benzaldehyde DOES give a positive Tollens' test!",
      neetTip: "Fehling's test distinguishes Aliphatic Aldehydes (+ve) from Aromatic Aldehydes (-ve)."
    },
    {
      id: "trap-2",
      title: "🚨 Trap 2: Semicarbazide Reaction — Which Nitrogen is Nucleophilic?",
      trap: "Assuming that both –NH₂ groups in semicarbazide (H₂N–NH–C(=O)–NH₂) can react with aldehydes/ketones.",
      reality: "Only the HYDRAZINE –NH₂ group (attached to –NH–) acts as a nucleophile. The amide –NH₂ group has its lone pair completely delocalised into the adjacent carbonyl group by resonance [–C(=O)–NH₂ ⟷ –C(–O⁻)=N⁺H₂], making it non-nucleophilic!",
      neetTip: "Product structure is ALWAYS >C=N–NH–CO–NH₂, NEVER >C=N–CO–NH–NH₂."
    },
    {
      id: "trap-3",
      title: "🚨 Trap 3: Crossed Cannizzaro with Formaldehyde (HCHO)",
      trap: "Predicting that in the reaction C₆H₅CHO + HCHO + conc. NaOH, benzaldehyde will be oxidised to sodium benzoate.",
      reality: "Formaldehyde is smaller and far more electrophilic than benzaldehyde (no +R resonance stabilization). Therefore, OH⁻ attacks HCHO first. HCHO is ALWAYS oxidised to sodium formate (HCOONa), and benzaldehyde is reduced to benzyl alcohol (C₆H₅CH₂OH)!",
      neetTip: "In Crossed Cannizzaro involving HCHO, HCHO ALWAYS becomes Formate (HCOONa)."
    },
    {
      id: "trap-4",
      title: "🚨 Trap 4: Iodoform Test for 2-Pentanol vs 3-Pentanol",
      trap: "Thinking that all secondary alcohols give a positive iodoform test.",
      reality: "Only secondary alcohols with the –OH on C-2 [having the CH₃–CH(OH)– unit] give a positive iodoform test upon in situ oxidation to a methyl ketone. Pentan-2-ol gives a yellow CHI₃ precipitate, whereas Pentan-3-one and Pentan-3-ol give a NEGATIVE test!",
      neetTip: "Pentan-2-ol (+ve) vs Pentan-3-ol (-ve); Butan-2-ol (+ve) vs Butan-1-ol (-ve)."
    },
    {
      id: "trap-5",
      title: "🚨 Trap 5: Sodium Bicarbonate Test — Carboxylic Acids vs Phenols",
      trap: "Believing that phenols also give brisk effervescence of CO₂ with aqueous NaHCO₃.",
      reality: "Normal phenol (pKa ≈ 10) is a WEAKER acid than carbonic acid (H₂CO₃, pKa ≈ 6.35). Thus, phenol cannot displace CO₂ from NaHCO₃. Carboxylic acids (pKa ≈ 4-5) are stronger than H₂CO₃ and vigorously evolve CO₂ gas.",
      neetTip: "Exception: Picric acid (2,4,6-trinitrophenol, pKa = 0.71) is stronger than carbonic acid and gives effervescence with NaHCO₃."
    },
    {
      id: "trap-6",
      title: "🚨 Trap 6: Reduction Choice for Carbonyl Compounds with –OH or –OR Groups",
      trap: "Using Clemmensen reduction [Zn(Hg)/HCl] to deoxygenate 4-hydroxyacetophenone or methoxyacetophenone to corresponding hydrocarbons.",
      reality: "Conc. HCl in Clemmensen reduction will protonate and eliminate/substitute the –OH or cleave ether –OR bonds! For substrates with acid-sensitive groups, Wolff-Kishner reduction [NH₂NH₂/KOH, glycol, Δ] MUST be selected.",
      neetTip: "Acid-sensitive group ⟶ Use Wolff-Kishner. Base-sensitive group (e.g. ester/halide) ⟶ Use Clemmensen."
    },
    {
      id: "trap-7",
      title: "🚨 Trap 7: Ortho Effect in Substituted Benzoic Acids",
      trap: "Thinking that ortho-toluic acid (o-methylbenzoic acid) is weaker than benzoic acid because –CH₃ is an electron-donating (+I) group.",
      reality: "Due to the ORTHO EFFECT (steric inhibition of resonance), virtually ALL ortho-substituted benzoic acids (even with +I / +M groups like –CH₃, –OCH₃) are STRONGER acids than benzoic acid! Steric crowding twists –COOH out of the benzene plane.",
      neetTip: "Acidity order: o-Toluic acid > Benzoic acid > m-Toluic acid > p-Toluic acid."
    },
    {
      id: "trap-8",
      title: "🚨 Trap 8: Hell-Volhard-Zelinsky (HVZ) Reaction Requirements",
      trap: "Attempting HVZ reaction on Formic acid (HCOOH), Benzoic acid (C₆H₅COOH), or Trimethylacetic acid ((CH₃)₃CCOOH).",
      reality: "HVZ bromination/chlorination occurs EXCLUSIVELY at the α-carbon. If the carboxylic acid has no α-hydrogen, it CANNOT undergo HVZ reaction!",
      neetTip: "HCOOH, C₆H₅COOH, and (CH₃)₃CCOOH fail HVZ because they have zero α-hydrogens."
    },
    {
      id: "trap-9",
      title: "🚨 Trap 9: NaBH₄ Inability to Reduce Carboxylic Acids & Esters",
      trap: "Writing that NaBH₄ reduces acetic acid (CH₃COOH) to ethanol (CH₃CH₂OH).",
      reality: "NaBH₄ is a mild reducing agent that reduces ONLY aldehydes, ketones, and acid chlorides. It DOES NOT reduce carboxylic acids, esters, amides, or nitriles! To reduce carboxylic acids to 1° alcohols, LiAlH₄ or B₂H₆/THF must be used.",
      neetTip: "RCOOH xrightarrow{NaBH₄} NO REACTION; RCOOH xrightarrow{LiAlH₄} RCH₂OH."
    },
    {
      id: "trap-10",
      title: "🚨 Trap 10: Formic Acid (HCOOH) Dual Chemical Nature",
      trap: "Treating formic acid as a typical carboxylic acid that cannot act as a reducing agent.",
      reality: "Formic acid (H–COOH) contains BOTH an aldehyde group (H–C=O) and a carboxyl group (–COOH). Therefore, formic acid acts as a reducing agent: it reduces Tollens' reagent to a silver mirror, reduces Fehling's solution to red Cu₂O, and decolorizes acidified KMnO₄!",
      neetTip: "Formic acid is the ONLY simple carboxylic acid that gives positive Tollens' and Fehling's tests."
    },
    {
      id: "trap-11",
      title: "🚨 Trap 11: Chloral (CCl₃CHO) with Concentrated Alkali",
      trap: "Predicting that Chloral (CCl₃CHO) will undergo Cannizzaro reaction because it lacks α-hydrogen.",
      reality: "Because the –CCl₃ group is an exceptional leaving group (stabilized by three electronegative chlorines), OH⁻ attack on CCl₃CHO causes cleavage into Chloroform (CHCl₃) and Sodium Formate (HCOONa)—a Haloform-type cleavage, NOT Cannizzaro!",
      neetTip: "CCl₃CHO + NaOH ⟶ CHCl₃ (liquid) + HCOONa."
    },
    {
      id: "trap-12",
      title: "🚨 Trap 12: Tollens' Test with Fructose (a Ketose Sugar)",
      trap: "Assuming that because fructose is a keto-hexose, it will give a negative Tollens' and Fehling's test.",
      reality: "In alkaline Tollens' and Fehling's media, fructose undergoes Lobry de Bruyn-van Ekenstein transformation (keto-enol tautomerization through an enediol intermediate) into glucose and mannose (aldoses), thus giving a POSITIVE silver mirror and red Cu₂O precipitate!",
      neetTip: "All reducing sugars (including fructose) give positive Tollens' and Fehling's tests."
    },
    {
      id: "trap-13",
      title: "🚨 Trap 13: Hydrogen Cyanide (HCN) Addition pH Requirement",
      trap: "Carrying out HCN addition to carbonyl compounds in strongly acidic medium.",
      reality: "Pure HCN is a very weak acid (Ka = 4.9 × 10⁻¹⁰) and produces negligible :CN⁻ ions. A catalytic amount of base (OH⁻, pH 9-10) MUST be added to generate the active nucleophile :CN⁻. If pH is too acidic, no reaction occurs; if too basic, aldol occurs.",
      neetTip: "Base catalyst is essential for cyanohydrin synthesis: HCN + OH⁻ ⇌ CN⁻ + H₂O."
    },
    {
      id: "trap-14",
      title: "🚨 Trap 14: Origin of Oxygen in Fischer Esterification",
      trap: "Assuming the –OH group in the formed H₂O molecule comes from the alcohol and –H comes from the carboxylic acid.",
      reality: "Isotopic tracer experiments using ¹⁸O-labeled alcohol (R'–¹⁸O–H) prove that the –OH is eliminated from the CARBOXYLIC ACID and only –H is lost from the ALCOHOL: R–CO–OH + H–¹⁸O–R' ⇌ R–CO–¹⁸O–R' + H₂O.",
      neetTip: "The ester retains the ¹⁸O isotopic label from the alcohol."
    },
    {
      id: "trap-15",
      title: "🚨 Trap 15: Distance Rule of Inductive Effects on Carboxylic Acidity",
      trap: "Assuming that 4-chlorobutanoic acid and 2-chlorobutanoic acid have identical acidity because both have one chlorine.",
      reality: "Inductive effect is extremely distance-dependent and drops off sharply beyond 2 carbons. In 2-chlorobutanoic acid, Cl is on the α-carbon (pKa = 2.86); in 4-chlorobutanoic acid, Cl is on the γ-carbon (pKa = 4.52, almost as weak as butanoic acid pKa 4.82).",
      neetTip: "Acidity order: 2-Chlorobutanoic acid > 3-Chlorobutanoic acid > 4-Chlorobutanoic acid."
    },
    {
      id: "trap-16",
      title: "🚨 Trap 16: Grignard Addition on Carbon Dioxide",
      trap: "Predicting that RMgX reacting with dry ice (solid CO₂) will add two molecules of RMgX to give a ketone or tertiary alcohol.",
      reality: "When RMgX is added to excess solid CO₂ (dry ice), the initial product is the halomagnesium carboxylate [R–COO⁻(MgX)⁺]. The resonance-stabilized carboxylate oxygen delocalizes the negative charge and resists further nucleophilic attack by RMgX. Aqueous acid workup yields ONLY the carboxylic acid (RCOOH).",
      neetTip: "RMgX + CO₂ xrightarrow{H₃O⁺} RCOOH (Single-addition product)."
    },
    {
      id: "trap-17",
      title: "🚨 Trap 17: Soda-Lime Decarboxylation Carbon Count",
      trap: "Forgetting that soda-lime decarboxylation shortens the carbon skeleton by exactly one carbon.",
      reality: "Heating sodium propanoate (CH₃CH₂COONa) with soda lime gives Ethane (CH₃CH₃, 2 carbons), NOT propane! The carboxyl carbon is lost as Na₂CO₃.",
      neetTip: "RCOONa + NaOH xrightarrow[Δ]{CaO} R–H + Na₂CO₃ (1 less carbon than starting acid salt)."
    },
    {
      id: "trap-18",
      title: "🚨 Trap 18: Mixed Aldol Condensation with Two Different Aldehydes having α-H",
      trap: "Expecting a single clean product when ethanal (CH₃CHO) and propanal (CH₃CH₂CHO) are mixed with dilute NaOH.",
      reality: "Both aldehydes have α-hydrogens, so both can form enolates and both can act as electrophiles. This generates a complex mixture of FOUR distinct aldol condensation products (2 self-condensation + 2 cross-condensation products), making it synthetically inefficient.",
      neetTip: "Crossed aldol is only synthetically useful when ONE carbonyl compound completely lacks α-H (e.g. C₆H₅CHO + CH₃CHO)."
    },
    {
      id: "trap-19",
      title: "🚨 Trap 19: Oxidation of Unsymmetrical Ketones (Popoff's Rule)",
      trap: "Randomly splitting unsymmetrical ketones during vigorous oxidation with conc. HNO₃.",
      reality: "Popoff's rule states that during destructive oxidation of unsymmetrical ketones, the carbonyl group preferentially remains attached to the SMALLER alkyl group. For example, Butan-2-one (CH₃–CO–CH₂CH₃) cleaves primarily at C2–C3 to yield 2 molecules of CH₃COOH.",
      neetTip: "Major cleavage keeps C=O with the smaller alkyl fragment."
    },
    {
      id: "trap-20",
      title: "🚨 Trap 20: Reversibility of Acetal vs Hydrazone Formation",
      trap: "Assuming acetals and hydrazones hydrolyze under the same conditions.",
      reality: "Acetals are stable in aqueous BASE and hydrolyze rapidly only in dilute ACID. In contrast, 2,4-DNP derivatives and hydrazones are crystalline solids with very high melting points, making them stable, robust derivatives for characterizing carbonyl compounds.",
      neetTip: "Acetal protection: Stable to LiAlH₄, RMgX, and base; removed cleanly by aqueous acid."
    }
  ],

  // 5. Memory Aids & Mnemonics
  memoryAids: [
    {
      concept: "Aldol vs Cannizzaro Distinction",
      mnemonic: "Aldol = Alpha-H Always | Cannizzaro = CANNOT have Alpha-H",
      explanation: "Aldol requires at least one α-hydrogen to generate an enolate; Cannizzaro occurs only when the aldehyde has ZERO α-hydrogens."
    },
    {
      concept: "Tollens' vs Fehling's Specificity",
      mnemonic: "Tollens Takes 'Em ALL (Aliphatic + Aromatic) | Fehling Fails on Fragrant (Aromatic C₆H₅CHO fails!)",
      explanation: "Tollens oxidizes both aliphatic and aromatic aldehydes; Fehling oxidizes ONLY aliphatic aldehydes."
    },
    {
      concept: "Iodoform Positive Structural Unit",
      mnemonic: "M-K & E-2: Methyl Ketone (CH₃CO–) & Ethanol/2-ols (CH₃CH(OH)–)",
      explanation: "Only compounds possessing the CH₃–C(=O)– or CH₃–CH(OH)– group give the yellow CHI₃ precipitate."
    },
    {
      concept: "Reduction Conditions Medium",
      mnemonic: "Clemmensen = Chlorine (Conc. HCl, Acidic) | Wolff-Kishner = Potassium (KOH, Basic)",
      explanation: "Clemmensen uses Zn(Hg)/HCl (acidic); Wolff-Kishner uses NH₂NH₂/KOH (basic)."
    },
    {
      concept: "Acidic Strength of Carboxylic Acids vs Phenols vs Alcohols",
      mnemonic: "C-P-A Scale: Carboxylic acid > Phenol > Alcohol",
      explanation: "pKa ~ 4-5 (Carboxylic) < pKa ~ 10 (Phenol) < pKa ~ 16 (Alcohol). Carboxylic acids liberate CO₂ from NaHCO₃; phenols do not."
    }
  ],

  // 6. Must Remember Formula & Fact Sheet
  mustRememberSheet: [
    { title: "Carbonyl Polarity", fact: "C=O dipole moment μ ≈ 2.3–2.8 D; C is δ+ (electrophilic) and O is δ- (nucleophilic)." },
    { title: "Nu Addition Reactivity", fact: "HCHO > RCHO > ArCHO > R–CO–R > Ar–CO–R (governed by steric hindrance and +I / +R electronic effects)." },
    { title: "Grignard Addition to Carbonyls", fact: "Formaldehyde (HCHO) ⟶ 1° Alcohol; Other Aldehydes (RCHO) ⟶ 2° Alcohol; Ketones (RCOR') ⟶ 3° Alcohol." },
    { title: "Rosenmund Poisoned Catalyst", fact: "Pd–BaSO₄ poisoned with sulfur/quinoline converts RCOCl ⟶ RCHO without over-reduction to RCH₂OH." },
    { title: "DIBAL-H Selective Reduction", fact: "DIBAL-H at -78°C converts esters (RCOOR') and nitriles (RCN) selectively into aldehydes (RCHO)." },
    { title: "Carboxylate Equivalent Resonance", fact: "RCOO⁻ has 2 completely equivalent resonance structures with equal C–O bond lengths (127 pm)." },
    { title: "Substituent Effect on RCOOH Acidity", fact: "-I / -M groups increase acidity; +I groups decrease acidity. CF₃COOH > CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > HCOOH > CH₃COOH." },
    { title: "HVZ α-Halogenation", fact: "RCH₂COOH + X₂ / Red P ⟶ RCH(X)COOH (Requires α-hydrogen; does not occur in HCOOH or C₆H₅COOH)." },
    { title: "Soda-Lime Decarboxylation", fact: "RCOONa + NaOH/CaO (3:1) xrightarrow{Δ} R–H + Na₂CO₃ (Shortens chain by 1 carbon atom)." }
  ],

  // 7. 15-Minute Rapid Revision Summary
  rapidRevision: [
    "Carbonyl carbon is sp² planar (120°), attacked by Nu⁻ at ~107° (Bürgi-Dunitz angle) to form sp³ tetrahedral alkoxide intermediate.",
    "Reactivity toward nucleophilic addition: HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅CHO > C₆H₅COCH₃.",
    "Grignard Reagents: HCHO + RMgX ⟶ 1° alcohol; RCHO + R'MgX ⟶ 2° alcohol; RCOR' + R''MgX ⟶ 3° alcohol.",
    "Ammonia derivatives (H₂N–Z): NH₂OH ⟶ Oxime; NH₂NH₂ ⟶ Hydrazone; 2,4-DNP ⟶ 2,4-DNP Hydrazone (Yellow/Orange ppt); Semicarbazide (H₂NNHCONH₂) ⟶ Semicarbazone (only hydrazine –NH₂ reacts!).",
    "Tollens' reagent ([Ag(NH₃)₂]⁺ OH⁻) gives Silver Mirror with ALL aldehydes (aliphatic & aromatic) and Formic acid. Ketones do not respond.",
    "Fehling's solution (Cu²⁺ tartrate) gives Brick-Red Cu₂O↓ with Aliphatic Aldehydes ONLY. Benzaldehyde (C₆H₅CHO) fails Fehling's test!",
    "Iodoform test (I₂ + NaOH) gives Yellow CHI₃↓ (mp 119°C) with CH₃CO– (methyl ketones, ethanal) and CH₃CH(OH)– (ethanol, 2-alkanols).",
    "Aldol Condensation: Requires α-H, catalyzed by dilute base (10% NaOH), forms β-hydroxy aldehyde which dehydrates on heating to α,β-unsaturated enal.",
    "Cannizzaro Reaction: Requires ZERO α-H (HCHO, C₆H₅CHO, (CH₃)₃CCHO), 50% conc. NaOH, disproportionates to 1 eq alcohol + 1 eq carboxylate salt.",
    "In Crossed Cannizzaro with HCHO, HCHO is ALWAYS oxidised to sodium formate (HCOONa) because it is more electrophilic.",
    "Clemmensen reduction [Zn(Hg)/conc. HCl, acidic] and Wolff-Kishner reduction [NH₂NH₂/KOH/glycol, basic] deoxygenate >C=O to >CH₂.",
    "Carboxylic acids are stronger acids than phenols and alcohols because carboxylate anion (RCOO⁻) has 2 equivalent resonance structures on electronegative oxygens.",
    "Acidity Order: CF₃COOH > CCl₃COOH > CHCl₂COOH > NO₂CH₂COOH > NCCH₂COOH > FCH₂COOH > ClCH₂COOH > HCOOH > C₆H₅COOH > CH₃COOH > CH₃CH₂COOH.",
    "Ortho effect: o-substituted benzoic acids (even with +I / +M groups like –CH₃, –OCH₃) are stronger acids than benzoic acid and m-/p-isomers.",
    "Carboxylic acids give brisk effervescence of CO₂ with aqueous NaHCO₃; normal phenols do NOT.",
    "Fischer Esterification: RCOOH + R'OH xrightarrow{H⁺} RCOOR' + H₂O. Isotopic ¹⁸O proves –OH comes from RCOOH and –H from R'OH.",
    "HVZ Reaction: RCH₂COOH + Br₂/Red P ⟶ RCH(Br)COOH. Requires α-hydrogen."
  ]
};
