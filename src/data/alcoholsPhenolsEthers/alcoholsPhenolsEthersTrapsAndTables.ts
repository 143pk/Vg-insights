// Master Comparison Tables, Reagent Cheat Sheets, Named Reactions, 40 NEET Traps, Solved Reaction Problems, and Rapid Revision for Chapter 20: Alcohols, Phenols and Ethers

export const ALCOHOLS_PHENOLS_ETHERS_TABLES_AND_TRAPS = {
  // 12 Master Comparison Tables
  comparisonTables: {
    // Table 1: 1° vs 2° vs 3° Alcohols
    primarySecondaryTertiaryAlcohols: {
      title: "Master Comparison: 1° vs 2° vs 3° Alcohols Across Physical & Chemical Parameters",
      headers: ["Parameter", "Primary (1°) Alcohol (R–CH₂OH)", "Secondary (2°) Alcohol (R₂CHOH)", "Tertiary (3°) Alcohol (R₃COH)"],
      rows: [
        ["Structure & Alpha-Hydrogens", "2 Alpha-hydrogens attached to α-carbon", "1 Alpha-hydrogen attached to α-carbon", "0 Alpha-hydrogens attached to α-carbon"],
        ["Lucas Test (Conc. HCl + ZnCl₂)", "No turbidity at room temp (requires boiling)", "Turbidity appears in ~5 minutes", "Immediate turbidity (within seconds)"],
        ["Victor Meyer Test", "Blood RED colour (forms nitrolic acid salt)", "Intense BLUE colour (forms pseudonitrol)", "COLOURLESS / WHITE (no reaction with HNO₂)"],
        ["Oxidation with PCC / CH₂Cl₂", "Selectively oxidizes to Aldehyde (R–CHO)", "Oxidizes to Ketone (R₂C=O)", "Resistant to oxidation (no α-H)"],
        ["Oxidation with Acidic KMnO₄ / K₂Cr₂O₇", "Oxidizes directly to Carboxylic Acid (R–COOH)", "Oxidizes to Ketone; harsh conditions cleave C–C", "Resistant under normal conditions; drastic heat gives acid with fewer carbons"],
        ["Dehydrogenation over Cu at 573 K", "Dehydrogenates to Aldehyde (RCHO + H₂)", "Dehydrogenates to Ketone (RCOR + H₂)", "Undergoes DEHYDRATION to Alkene (Alkene + H₂O)"],
        ["Ease of Acid-Catalysed Dehydration", "Least easy (conc. H₂SO₄ at 443 K)", "Moderate (85% H₃PO₄ at 440 K)", "Most facile (20% H₂SO₄ at 358 K, 3° carbocation)"],
        ["Substitution by HX (Mechanism)", "Follows S_N2 mechanism via oxonium ion", "Follows S_N1 / S_N2 mixed pathway", "Follows S_N1 mechanism via stable 3° carbocation"],
        ["Boiling Point (for isomeric alcohols)", "Highest (least steric hindrance for H-bonding)", "Intermediate", "Lowest (spherical shape, minimal contact area)"],
        ["Esterification Rate with RCOOH", "Fastest (minimal steric hindrance around –OH)", "Moderate", "Slowest (heavy steric crowding at 3° carbon)"]
      ]
    },

    // Table 2: Alcohol vs Phenol
    alcoholVsPhenol: {
      title: "Comprehensive Comparison: Aliphatic Alcohols (R–OH) vs Phenols (Ar–OH)",
      headers: ["Property / Reaction", "Aliphatic Alcohols (R–OH)", "Phenols (Ar–OH)", "Underlying Mechanistic Reason"],
      rows: [
        ["Hybridisation of Carbon bonded to –OH", "sp³-hybridized alkyl carbon", "sp²-hybridized aromatic ring carbon", "sp² has 33.3% s-character; holds electrons tighter"],
        ["C–O Bond Length", "~142 pm (single bond)", "~136 pm (shorter bond)", "Partial double bond character due to resonance (+R)"],
        ["C–O Bond Dissociation Energy", "Lower (~385 kJ/mol; easily cleaved)", "Higher (~468 kJ/mol; very difficult to cleave)", "Resonance stabilization strengthens aromatic C–O bond"],
        ["Acidity (pKₐ value)", "pKₐ ≈ 16 – 18 (weaker acid than water)", "pKₐ ≈ 10 (10⁶ times more acidic than alcohols)", "Phenoxide ion (C₆H₅O⁻) is resonance stabilized over ring"],
        ["Action on Blue Litmus", "Neutral (no change in colour)", "Weakly acidic (turns blue litmus red)", "Sufficiently ionizes in aqueous medium to donate H⁺"],
        ["Reaction with Aqueous NaOH", "No reaction (cannot displace OH⁻)", "Reacts quantitatively to form Sodium Phenoxide", "Phenol is stronger acid than water; alcohol is weaker"],
        ["Reaction with Aqueous NaHCO₃", "No reaction (no CO₂ effervescence)", "No reaction (except nitrophenols/picric acid)", "Carbonic acid (pKₐ 6.35) is stronger acid than phenol"],
        ["Neutral FeCl₃ Test", "No characteristic colour", "Forms intense Violet/Purple coordination complex", "Forms [Fe(OC₆H₅)₆]³⁻ chromophoric complex"],
        ["Bromine Water (Br₂ / H₂O)", "No white precipitate", "Instant white precipitate of 2,4,6-tribromophenol", "Ring is hyper-activated in polar ionizing aqueous medium"],
        ["Reaction with Lucas Reagent", "Gives alkyl chloride turbidity (3° > 2° > 1°)", "No reaction (phenyl cation cannot form)", "C(sp²)–OH bond is immune to nucleophilic substitution"]
      ]
    },

    // Table 3: Phenol vs Carboxylic Acid
    phenolVsCarboxylicAcid: {
      title: "Diagnostic Comparison: Phenol vs Carboxylic Acid (R–COOH)",
      headers: ["Chemical Diagnostic Parameter", "Phenol (C₆H₅OH)", "Carboxylic Acid (R–COOH)", "NEET Distinction Significance"],
      rows: [
        ["Relative Acidity & pKₐ", "pKₐ ≈ 10 (weaker acid)", "pKₐ ≈ 4 – 5 (much stronger acid)", "Carboxylic acids are ~10⁵–10⁶ times more acidic than phenol"],
        ["Resonance Structure of Conjugate Base", "Negative charge delocalized over 1 O and 3 C atoms", "Negative charge delocalized over 2 equivalent electronegative O atoms", "Equivalent resonance structures in carboxylate ion give superior stability"],
        ["Effervescence with NaHCO₃", "❌ Negative (NO CO₂ gas evolution)", "✅ Positive (Brilliant effervescence of CO₂ gas)", "Standard qualitative test to separate phenol and carboxylic acid"],
        ["Reaction with Aqueous NaOH", "✅ Forms Sodium Phenoxide (C₆H₅ONa + H₂O)", "✅ Forms Sodium Carboxylate (RCOONa + H₂O)", "Both dissolve in strong base NaOH"],
        ["Neutral FeCl₃ Reaction", "✅ Intense Violet / Purple colouration", "❌ Buff-coloured precipitate (with neutral ferric acetate)", "Specific colour test for phenolic –OH"],
        ["Esterification with Alcohols", "Requires acid chloride/anhydride (Schotten-Baumann)", "Directly esterifies with alcohol in presence of conc. H₂SO₄", "Phenolic –OH is less nucleophilic than alcoholic –OH"]
      ]
    },

    // Table 4: Lucas Test vs Victor Meyer Test
    lucasVsVictorMeyer: {
      title: "Master Diagnostic Comparison: Lucas Test vs Victor Meyer Test",
      headers: ["Diagnostic Test", "Reagent / Sequence", "Primary (1°) Alcohol", "Secondary (2°) Alcohol", "Tertiary (3°) Alcohol"],
      rows: [
        ["Lucas Test", "Conc. HCl + Anhydrous ZnCl₂ at room temperature", "No turbidity at room temp (milky on heating)", "Turbidity in ~5 minutes", "Immediate turbidity within seconds"],
        ["Victor Meyer Test", "(1) P + I₂ → (2) AgNO₂ → (3) HNO₂ → (4) NaOH", "Blood RED Solution (forms Sodium Nitrolic Salt)", "Intense BLUE Solution (forms Pseudonitrol)", "COLOURLESS / WHITE Solution (No reaction)"],
        ["Chemical Basis", "Carbocation stability (S_N1 rate order: 3° > 2° > 1°)", "Presence and number of α-hydrogens on carbinol carbon", "2 α-H in 1°; 1 α-H in 2°; 0 α-H in 3°"],
        ["Allylic / Benzylic Alcohols", "Give IMMEDIATE turbidity in Lucas test!", "Show 1° / 2° / 3° behavior in Victor Meyer test", "Resonance-stabilized carbocations mimic 3° in Lucas test"]
      ]
    },

    // Table 5: Oxidation Reagents for Alcohols
    oxidationReagentsComparison: {
      title: "Selectivity of Oxidizing Agents for Alcohols (PCC vs KMnO₄ vs K₂Cr₂O₇ vs Cu)",
      headers: ["Oxidizing Agent", "Primary (1°) Alcohol (R–CH₂OH)", "Secondary (2°) Alcohol (R₂CHOH)", "Tertiary (3°) Alcohol (R₃COH)", "Key NEET Selective Advantage"],
      rows: [
        ["PCC (Corey's Reagent, CH₂Cl₂)", "R–CHO (Aldehyde only)", "R₂C=O (Ketone)", "No Reaction", "Stops primary alcohol oxidation strictly at aldehyde; no water in medium"],
        ["Acidified KMnO₄ (H⁺ / Δ)", "R–COOH (Carboxylic Acid)", "R₂C=O (Ketone; harsh gives acids)", "No reaction; destructive cleavage", "Strong, non-selective oxidation directly to carboxylic acid"],
        ["Acidified K₂Cr₂O₇ (H⁺)", "R–COOH (Carboxylic Acid)", "R₂C=O (Ketone)", "No Reaction", "Solution changes from Orange (Cr⁶⁺) to Green (Cr³⁺)"],
        ["Collin's Reagent (CrO₃·2Py / CH₂Cl₂)", "R–CHO (Aldehyde)", "R₂C=O (Ketone)", "No Reaction", "Mild selective oxidation of 1° alcohol to aldehyde in anhydrous medium"],
        ["Jones Reagent (CrO₃ / aq. Acetone / H₂SO₄)", "R–COOH (Carboxylic Acid)", "R₂C=O (Ketone)", "No Reaction", "Rapidly oxidizes 1° alcohols to carboxylic acids in aqueous acetone"],
        ["Copper Metal (Cu at 573 K)", "R–CHO + H₂↑ (Aldehyde)", "R₂C=O + H₂↑ (Ketone)", "Alkene + H₂O (DEHYDRATION)", "Differentiates 1°, 2°, 3° alcohols in gas-phase; 3° gives alkene!"]
      ]
    },

    // Table 6: Williamson Synthesis vs Intermolecular Dehydration
    williamsonVsDehydration: {
      title: "Synthesis of Ethers: Williamson Synthesis vs Acid Dehydration of Alcohols",
      headers: ["Comparison Parameter", "Williamson Ether Synthesis", "Acid-Catalysed Intermolecular Dehydration", "Strategic Synthesis Note"],
      rows: [
        ["Starting Reactants", "Sodium Alkoxide (RO⁻Na⁺) + Alkyl Halide (R'–X)", "2 Molecules of Alcohol (2 R–OH) + Conc. H₂SO₄ at 413 K", "Williamson is broad; dehydration is narrow"],
        ["Mechanism", "Bimolecular Nucleophilic Substitution (S_N2)", "S_N2 substitution by unprotonated alcohol on protonated alcohol", "Both require unhindered substrate"],
        ["Scope of Ethers", "Both Symmetrical and Unsymmetrical (Mixed) Ethers", "Only Symmetrical Ethers (e.g. Diethyl ether)", "Dehydration of mixed alcohols yields inseparable ternary mixture"],
        ["Substrate Limitation", "Alkyl halide MUST be 1° or methyl; 3° halide gives ALKENE", "Alcohol MUST be primary (1°); 2°/3° alcohols give ALKENES", "Strong base/acid causes E2/E1 elimination with branched substrates"],
        ["Synthesis of Aromatic Ethers (Anisole)", "✅ Readily synthesized: C₆H₅O⁻Na⁺ + CH₃–I → C₆H₅OCH₃", "❌ Fails completely (phenol does not dehydrate to ether)", "Aromatic ethers can only be made via phenoxide + alkyl halide"],
        ["Side Reactions", "E2 Elimination when 2° or 3° alkyl halides are used", "Intramolecular dehydration to alkene at higher temp (443 K)", "Precise temperature control (413 K) essential in dehydration"]
      ]
    },

    // Table 7: Ether Cleavage by HI
    etherCleavageMechanisms: {
      title: "Acidic Cleavage of Ethers by Hydrogen Iodide (HI): Mechanistic Rules Matrix",
      headers: ["Type of Ether Substrate", "Reaction Equation with 1 Eq. HI (373 K)", "Mechanism Operative", "Major Products Formed", "Governing Chemical Reason"],
      rows: [
        ["Dialkyl Ether (Both 1° or 2°)", "CH₃–O–CH₂CH₃ + HI → CH₃I + CH₃CH₂OH", "S_N2 Mechanism", "Methyl Iodide + Ethanol", "I⁻ attacks smaller, less sterically hindered alkyl group"],
        ["Mixed Ether with one 3° Group", "(CH₃)₃C–O–CH₃ + HI → (CH₃)₃C–I + CH₃OH", "S_N1 Mechanism", "tert-Butyl Iodide + Methanol", "Stable 3° carbocation [(CH₃)₃C⁺] forms prior to nucleophilic attack"],
        ["Mixed Ether with Benzylic Group", "C₆H₅CH₂–O–CH₂CH₃ + HI → C₆H₅CH₂–I + CH₃CH₂OH", "S_N1 Mechanism", "Benzyl Iodide + Ethanol", "Benzyl carbocation (C₆H₅CH₂⁺) is resonance stabilized"],
        ["Alkyl Aryl Ether (Anisole)", "C₆H₅–O–CH₃ + HI → C₆H₅–OH + CH₃–I", "S_N2 at alkyl group", "Phenol + Methyl Iodide", "Aryl C–O has partial double bond character; never cleaves to C₆H₅I"],
        ["Diaryl Ether (Diphenyl Ether)", "C₆H₅–O–C₆H₅ + HI → NO REACTION", "No reaction under normal conditions", "Unreactive to HI cleavage", "Both C–O bonds have strong partial double bond character"],
        ["Any Dialkyl Ether with EXCESS HI", "R–O–R' + 2 HI (excess, Δ) → R–I + R'–I + H₂O", "Sequential S_N2 / S_N1", "Two Alkyl Iodides + Water", "Alcohol formed in first step is converted to alkyl iodide by 2nd eq. HI"]
      ]
    },

    // Table 8: Substituent Effects on Phenol Acidity
    substituentEffectsPhenolAcidity: {
      title: "Quantitative Substituent Effects on Phenol Acidity (pKₐ Data & Ranking)",
      headers: ["Compound Name", "Structure / Substituent", "pKₐ Value (298 K)", "Relative Acidic Strength", "Electronic & Resonance Origin"],
      rows: [
        ["2,4,6-Trinitrophenol (Picric Acid)", "2,4,6-(NO₂)₃–C₆H₂OH", "0.71", "Ultra-Strong Acid (Stronger than acetic acid!)", "Three -R & -I groups stabilize phenoxide symmetrically"],
        ["2,4-Dinitrophenol", "2,4-(NO₂)₂–C₆H₃OH", "4.01", "Extremely Strong Phenol Acid", "Two -R & -I groups at ortho and para positions"],
        ["4-Nitrophenol (p-Nitrophenol)", "4-NO₂–C₆H₄OH", "7.15", "Very Strong Acid", "Strong -R resonance and -I inductive stabilization"],
        ["2-Nitrophenol (o-Nitrophenol)", "2-NO₂–C₆H₄OH", "7.23", "Strong Acid (slightly weaker than para)", "Intramolecular H-bonding stabilizes un-ionized phenol slightly"],
        ["3-Nitrophenol (m-Nitrophenol)", "3-NO₂–C₆H₄OH", "8.35", "Moderate Acid (weaker than ortho/para)", "Only -I operates at meta position; NO -R resonance stabilization"],
        ["4-Chlorophenol (p-Chlorophenol)", "4-Cl–C₆H₄OH", "9.38", "More acidic than phenol", "-I effect of chlorine dominates over weak +R effect"],
        ["Phenol (Carbolic Acid)", "C₆H₅OH", "9.98", "Standard Reference Acid", "Unsubstituted phenoxide resonance stabilization"],
        ["4-Methoxyphenol (p-Methoxyphenol)", "4-CH₃O–C₆H₄OH", "10.20", "Weaker acid than phenol", "Strong +R electron-donation destabilizes phenoxide ion"],
        ["4-Methylphenol (p-Cresol)", "4-CH₃–C₆H₄OH", "10.26", "Weaker acid than phenol", "+I inductive and hyperconjugation destabilize phenoxide ion"],
        ["Ethanol (Aliphatic Alcohol)", "C₂H₅OH", "15.90", "10⁶ times weaker acid than phenol", "No resonance; +I effect of ethyl group destabilizes ethoxide"]
      ]
    }
  },

  // Master Reagent Cheat Sheet (20 Key Reagents)
  masterReagents: [
    {
      reagent: "PCC (Pyridinium Chlorochromate)",
      startingMaterial: "1° Alcohol (RCH₂OH) or 2° Alcohol (R₂CHOH)",
      product: "Aldehyde (RCHO) or Ketone (R₂CO)",
      keyPoint: "Selectively halts oxidation of 1° alcohol at aldehyde. Anhydrous solvent (CH₂Cl₂). Does not oxidize double bonds."
    },
    {
      reagent: "Acidified KMnO₄ (KMnO₄ / H₂SO₄, Δ)",
      startingMaterial: "1° Alcohol or 2° Alcohol",
      product: "Carboxylic Acid (RCOOH) or Ketone (R₂CO)",
      keyPoint: "Strong, non-selective oxidizing agent. 3° alcohols resist oxidation under neutral/mild conditions."
    },
    {
      reagent: "Acidified K₂Cr₂O₇ (K₂Cr₂O₇ / H₂SO₄)",
      startingMaterial: "1° Alcohol or 2° Alcohol",
      product: "Carboxylic Acid (RCOOH) or Ketone (R₂CO)",
      keyPoint: "Chromate oxidation; orange solution turns green (Cr³⁺) as alcohol is oxidized."
    },
    {
      reagent: "Copper Metal at 573 K (Cu / 300°C)",
      startingMaterial: "1°, 2°, 3° Alcohols (gas phase)",
      product: "1° → Aldehyde; 2° → Ketone; 3° → ALKENE (Dehydration)",
      keyPoint: "Classic NEET diagnostic: 3° alcohol has no α-H, so it undergoes catalytic dehydration to 2-methylpropene."
    },
    {
      reagent: "Lucas Reagent (Conc. HCl + Anh. ZnCl₂)",
      startingMaterial: "Alcohols (1°, 2°, 3°, Allylic, Benzylic)",
      product: "Alkyl Chloride Turbidity (R–Cl insoluble)",
      keyPoint: "Rate: 3°, Allylic, Benzylic (Immediate) > 2° (5 min) > 1° (No turbidity at room temp). S_N1 carbocation rate."
    },
    {
      reagent: "Hydroboration Reagent (B₂H₆/THF then H₂O₂/OH⁻)",
      startingMaterial: "Alkenes (e.g. Propene)",
      product: "1° Alcohol (Propan-1-ol)",
      keyPoint: "Overall Anti-Markovnikov addition of H₂O; Syn-addition stereochemistry; NO carbocation rearrangement."
    },
    {
      reagent: "Acid Hydration (H₂O / H₂SO₄)",
      startingMaterial: "Alkenes (e.g. Propene)",
      product: "2° Alcohol (Propan-2-ol)",
      keyPoint: "Markovnikov addition; involves carbocation intermediate (hydride/methyl shifts possible!)."
    },
    {
      reagent: "Grignard Reagent (R–MgX then H₃O⁺)",
      startingMaterial: "Formaldehyde / Aldehydes / Ketones",
      product: "HCHO → 1° ROH; RCHO → 2° ROH; R₂CO → 3° ROH",
      keyPoint: "Nucleophilic addition of carbanion R⁻ to carbonyl carbon followed by protonation."
    },
    {
      reagent: "Sodium Borohydride (NaBH₄ / MeOH or EtOH)",
      startingMaterial: "Aldehydes, Ketones, Acid Chlorides",
      product: "1° Alcohols and 2° Alcohols",
      keyPoint: "Mild hydride donor. Reduces aldehydes and ketones only; DOES NOT reduce carboxylic acids or esters."
    },
    {
      reagent: "Lithium Aluminium Hydride (LiAlH₄ / Ether then H₂O)",
      startingMaterial: "Acids, Esters, Aldehydes, Ketones, Amides",
      product: "1° and 2° Alcohols",
      keyPoint: "Powerful hydride donor. Quantitative reduction of carboxylic acids (RCOOH) and esters (RCOOR') to 1° alcohols."
    },
    {
      reagent: "Thionyl Chloride in Pyridine (SOCl₂ / Pyridine)",
      startingMaterial: "Alcohols (R–OH)",
      product: "Alkyl Chloride (R–Cl) + SO₂↑ + HCl↑",
      keyPoint: "Darzens procedure. Best method because gaseous byproducts (SO₂, HCl) escape, leaving pure alkyl chloride."
    },
    {
      reagent: "Phosphorus Pentachloride / Trichloride (PCl₅ / PCl₃)",
      startingMaterial: "Alcohols (R–OH)",
      product: "R–Cl + POCl₃ + HCl (with PCl₅) or 3 R–Cl + H₃PO₃ (with PCl₃)",
      keyPoint: "Inverts configuration in chiral secondary alcohols via S_N2 mechanism."
    },
    {
      reagent: "Bromine Water (Br₂ / H₂O)",
      startingMaterial: "Phenol (C₆H₅OH)",
      product: "2,4,6-Tribromophenol (White precipitate)",
      keyPoint: "Polar aqueous medium ionizes phenol into phenoxide, hyper-activating all 2, 4, 6 positions."
    },
    {
      reagent: "Bromine in CS₂ or CHCl₃ at 273 K (Br₂ / Non-polar)",
      startingMaterial: "Phenol (C₆H₅OH)",
      product: "4-Bromophenol (p-Bromophenol, Major) + o-isomer",
      keyPoint: "Un-ionized phenol in non-polar solvent prevents polybromination, yielding selective monobromination."
    },
    {
      reagent: "Dilute Nitric Acid (dil. HNO₃ at 298 K)",
      startingMaterial: "Phenol (C₆H₅OH)",
      product: "o-Nitrophenol + p-Nitrophenol",
      keyPoint: "Separated by steam distillation: o-nitrophenol is steam volatile (intramolecular H-bond); p-isomer is non-volatile."
    },
    {
      reagent: "Concentrated HNO₃ + Conc. H₂SO₄",
      startingMaterial: "Phenol (C₆H₅OH)",
      product: "2,4,6-Trinitrophenol (Picric Acid, Yellow solid)",
      keyPoint: "Poor yield due to extensive oxidation; modern prep sulphonates first to 2,4-phenoldisulphonic acid."
    },
    {
      reagent: "Reimer-Tiemann Reagent (CHCl₃ + aq. NaOH, 340 K)",
      startingMaterial: "Phenol (C₆H₅OH)",
      product: "Salicylaldehyde (2-Hydroxybenzaldehyde, Major)",
      keyPoint: "Active electrophile is Dichlorocarbene (:CCl₂). If CCl₄ + NaOH is used, Salicylic acid is formed!"
    },
    {
      reagent: "Kolbe Reagent (NaOH then CO₂ at 400 K, 4-7 atm then H⁺)",
      startingMaterial: "Phenol (C₆H₅OH)",
      product: "Salicylic Acid (2-Hydroxybenzoic Acid, Major)",
      keyPoint: "Sodium phenoxide reacts with weak electrophile CO₂. Precursor to Aspirin (acetylsalicylic acid)."
    },
    {
      reagent: "Zinc Dust and Heat (Zn dust / Δ)",
      startingMaterial: "Phenol (C₆H₅OH)",
      product: "Benzene (C₆H₆) + ZnO",
      keyPoint: "Reductive deoxygenation of phenolic –OH group to aromatic hydrocarbon."
    },
    {
      reagent: "Hydrogen Iodide (HI at 373 K)",
      startingMaterial: "Ethers (R–O–R' or Ar–O–R)",
      product: "Alkyl Iodide + Alcohol (or 2 Alkyl Iodides if excess HI)",
      keyPoint: "S_N2 cleavage on smaller alkyl group (1°/2°); S_N1 on 3° alkyl group; Anisole cleaves to Phenol + Methyl iodide."
    }
  ],

  // Master Named Reactions Table
  masterNamedReactions: [
    {
      name: "Kolbe-Schmitt Reaction",
      startingMaterial: "Phenol (C₆H₅OH)",
      reagents: "(i) Aqueous NaOH (forms Sodium Phenoxide) (ii) CO₂ (400 K, 4–7 atm) (iii) Dilute HCl (acidification)",
      majorProduct: "Salicylic Acid (2-Hydroxybenzoic acid)",
      mechanismConcept: "Electrophilic aromatic substitution of electron-rich phenoxide ring by weak electrophile CO₂. Chelation of Na⁺ directs attack to ortho position.",
      neetTrap: "The electrophile is neutral CO₂ (not CO₃²⁻). Ortho isomer dominates due to sodium ion coordination bridge."
    },
    {
      name: "Reimer-Tiemann Reaction",
      startingMaterial: "Phenol (C₆H₅OH)",
      reagents: "(i) Chloroform (CHCl₃) + aqueous NaOH at 340 K (ii) Acidification (dil. HCl)",
      majorProduct: "Salicylaldehyde (2-Hydroxybenzaldehyde)",
      mechanismConcept: "Generation of singlet Dichlorocarbene (:CCl₂) via α-elimination from CHCl₃ by OH⁻; electrophilic attack on phenoxide at ortho position.",
      neetTrap: "The intermediate is benzylidene dichloride [o-O⁻–C₆H₄–CHCl₂]. If CCl₄ is substituted for CHCl₃, Salicylic acid is formed!"
    },
    {
      name: "Williamson Ether Synthesis",
      startingMaterial: "Sodium/Potassium Alkoxide (R–O⁻ Na⁺) or Phenoxide (Ar–O⁻ Na⁺) + Alkyl Halide (R'–X)",
      reagents: "Dry ethanol/ether solvent, reflux",
      majorProduct: "Symmetrical or Unsymmetrical Ether (R–O–R' or Ar–O–R')",
      mechanismConcept: "Bimolecular nucleophilic substitution (S_N2) backside attack of alkoxide nucleophile on primary alkyl carbon with simultaneous halide displacement.",
      neetTrap: "Alkyl halide MUST be 1° or methyl. If a 3° alkyl halide is used with alkoxide, E2 elimination produces exclusively an ALKENE!"
    },
    {
      name: "Cumene Industrial Phenol Process",
      startingMaterial: "Cumene (Isopropylbenzene, C₆H₅CH(CH₃)₂)",
      reagents: "(i) Air / O₂ at 368–408 K (aerial oxidation) (ii) Dilute H₂SO₄ at 323–363 K",
      majorProduct: "Phenol (C₆H₅OH) + Acetone (CH₃COCH₃, equimolar byproduct)",
      mechanismConcept: "Free radical aerial oxidation yields cumene hydroperoxide, which undergoes acid-catalysed Hock rearrangement with phenyl migration to electron-deficient oxygen.",
      neetTrap: "Acetone is formed as a high-value coproduct in equal molar amounts. Cumene is synthesized from Benzene + Propene in presence of H₃PO₄."
    },
    {
      name: "Dow's Process for Phenol",
      startingMaterial: "Chlorobenzene (C₆H₅Cl)",
      reagents: "(i) 6–8% aqueous NaOH at 623 K (350°C) and 300 atm (ii) Acidification with dil. HCl",
      majorProduct: "Phenol (C₆H₅OH) + NaCl",
      mechanismConcept: "Drastic industrial nucleophilic aromatic substitution involving benzyne intermediate or high-temperature S_NAr displacement.",
      neetTrap: "Chlorobenzene does not react with NaOH under mild room temperature conditions due to resonance partial double bond character of C–Cl."
    },
    {
      name: "Schotten-Baumann Reaction (Acylation of Phenol)",
      startingMaterial: "Phenol (C₆H₅OH)",
      reagents: "Benzoyl Chloride (C₆H₅COCl) in presence of aqueous NaOH",
      majorProduct: "Phenyl Benzoate (C₆H₅OCOC₆H₅) + NaCl + H₂O",
      mechanismConcept: "Nucleophilic acyl substitution; base NaOH neutralizes HCl byproduct to shift equilibrium completely toward ester product.",
      neetTrap: "Aqueous NaOH is essential to deprotonate phenol to phenoxide, which is much more nucleophilic than neutral phenol."
    }
  ],

  // ⚠️ TOP 40 NEET TRAPS for Chapter 20
  neetTraps: [
    {
      id: 1,
      mistake: "Assuming Phenol undergoes nucleophilic substitution of –OH like aliphatic alcohols when treated with HX or Lucas reagent.",
      correct: "Phenol does NOT react with HX, PCl₃, or Lucas reagent to form chlorobenzene because the C(sp²)–O bond has partial double bond character due to resonance (+R) and phenyl cation is extremely unstable.",
      trick: "Aromatic –OH is welded to the ring by resonance; it cannot be knocked off by S_N1 or S_N2."
    },
    {
      id: 2,
      mistake: "Believing Phenol dissolves in aqueous NaHCO₃ and evolves CO₂ effervescence.",
      correct: "Phenol (pKₐ ~ 10) is a weaker acid than carbonic acid (H₂CO₃, pKₐ ~ 6.35) and DOES NOT evolve CO₂ from NaHCO₃. (Only picric acid and dinitrophenols evolve CO₂).",
      trick: "NaHCO₃ test separates Carboxylic Acids (CO₂ yes) from ordinary Phenols (CO₂ no)."
    },
    {
      id: 3,
      mistake: "Predicting that tert-Butyl Methyl Ether can be prepared from Sodium Methoxide (CH₃ONa) + tert-Butyl Bromide.",
      correct: "CH₃ONa + (CH₃)₃C–Br undergoes 100% E2 elimination to give 2-Methylpropene (Isobutylene) + Methanol. To prepare tert-butyl methyl ether, use (CH₃)₃C–ONa (3° alkoxide) + CH₃Br (methyl halide).",
      trick: "In Williamson: Keep the HALIDE small/primary and make the ALKOXIDE bulky!"
    },
    {
      id: 4,
      mistake: "Thinking that treating Anisole (C₆H₅OCH₃) with concentrated HI yields Iodobenzene + Methanol.",
      correct: "Anisole + HI yields Phenol (C₆H₅OH) + Methyl Iodide (CH₃I). The sp² C(aryl)–O bond is strengthened by resonance and cannot undergo nucleophilic attack by I⁻.",
      trick: "In aryl-alkyl ethers, the aromatic ring always keeps the Oxygen to become PHENOL."
    },
    {
      id: 5,
      mistake: "Expecting Primary Alcohols to produce turbidity in the Lucas test within 10–15 minutes.",
      correct: "Primary alcohols show NO turbidity at room temperature even after hours; turbidity appears only upon vigorous, prolonged heating.",
      trick: "Lucas Turbidity: 3° (0 sec) > 2° (5 min) > 1° (No ppt / room temp)."
    },
    {
      id: 6,
      mistake: "Thinking that Benzylic (C₆H₅CH₂OH) and Allylic (CH₂=CHCH₂OH) alcohols follow primary alcohol rules in the Lucas test.",
      correct: "Benzylic and Allylic alcohols are primary by structure, but they produce turbidity IMMEDIATELY in the Lucas test because their carbocations are resonance stabilized!",
      trick: "Lucas speed tests Carbocation Stability, NOT structural degree."
    },
    {
      id: 7,
      mistake: "Assuming PCC (Pyridinium Chlorochromate) oxidizes primary alcohols all the way to carboxylic acids.",
      correct: "PCC operates in anhydrous dichloromethane (CH₂Cl₂) and selectively stops oxidation of primary alcohols at the ALDEHYDE stage without over-oxidation.",
      trick: "PCC = 'Preserves Carbonyl Cleavage' → Stops at Aldehyde."
    },
    {
      id: 8,
      mistake: "Expecting Tertiary Alcohols to yield ketones upon catalytic dehydrogenation over heated Copper at 573 K.",
      correct: "Tertiary alcohols have NO α-hydrogens to lose H₂; instead, heated Cu at 573 K causes DEHYDRATION to form an Alkene (2-methylpropene from tert-butanol).",
      trick: "Cu at 573 K: 1° → Aldehyde; 2° → Ketone; 3° → ALKENE!"
    },
    {
      id: 9,
      mistake: "Confusing the products of Hydroboration-Oxidation and Acid-Catalysed Hydration of Propene.",
      correct: "Acid-catalysed hydration of Propene gives Propan-2-ol (Markovnikov, via 2° carbocation). Hydroboration-oxidation gives Propan-1-ol (Anti-Markovnikov, no carbocation).",
      trick: "Hydroboration-Oxidation = Anti-Markovnikov 1° alcohol; Acid Hydration = Markovnikov 2° alcohol."
    },
    {
      id: 10,
      mistake: "Thinking that ortho-Nitrophenol is more acidic than para-Nitrophenol.",
      correct: "para-Nitrophenol (pKₐ = 7.15) is MORE ACIDIC than ortho-Nitrophenol (pKₐ = 7.23) because intramolecular hydrogen bonding in ortho-nitrophenol stabilizes the un-ionized phenol, hindering proton release.",
      trick: "Acidity order: Para > Ortho > Meta > Phenol."
    },
    {
      id: 11,
      mistake: "Believing meta-Nitrophenol benefits from -R resonance stabilization.",
      correct: "Resonance (+R / -R) operates strictly at Ortho and Para positions. At the meta position, –NO₂ exerts ONLY -I inductive electron withdrawal; hence m-nitrophenol is less acidic than ortho and para.",
      trick: "Resonance is blind to the Meta position; only Inductive sees Meta."
    },
    {
      id: 12,
      mistake: "Assuming ortho-Nitrophenol and para-Nitrophenol have the same boiling point and volatility.",
      correct: "ortho-Nitrophenol has INTRAmolecular H-bonding (chelation) and is steam volatile with lower boiling point. para-Nitrophenol has INTERmolecular H-bonding (association) and is non-volatile with higher boiling point.",
      trick: "Intra = internal/volatile (steam distillable); Inter = between molecules/sticky (non-volatile)."
    },
    {
      id: 13,
      mistake: "Thinking the active electrophile in Reimer-Tiemann reaction is a carbocation (⁺CHCl₂).",
      correct: "The active electrophile is Dichlorocarbene (:CCl₂), a neutral, electron-deficient singlet carbene generated in situ via α-elimination from CHCl₃ by base.",
      trick: ":CCl₂ has only 6 valence electrons; it acts as a neutral electrophile."
    },
    {
      id: 14,
      mistake: "Expecting Phenol + CCl₄ + NaOH to give Salicylaldehyde.",
      correct: "Phenol + CCl₄ + NaOH yields Salicylic Acid (2-hydroxybenzoic acid), because hydrolysis of the –CCl₃ intermediate introduces three –OH groups yielding –COOH.",
      trick: "CHCl₃ gives Salicylaldehyde (CHO); CCl₄ gives Salicylic Acid (COOH)."
    },
    {
      id: 15,
      mistake: "Assuming Phenol + Br₂ / H₂O (bromine water) gives monobromophenol.",
      correct: "Aqueous bromine water ionizes phenol to phenoxide, causing exhaustive bromination to yield a white precipitate of 2,4,6-tribromophenol. To get monobromophenol (p-bromophenol), use non-polar Br₂/CS₂ at 273 K.",
      trick: "Br₂ in Water = 2,4,6-Tribromo White Ppt; Br₂ in CS₂ = p-Bromophenol."
    },
    {
      id: 16,
      mistake: "Predicting that heating Ethanol with conc. H₂SO₄ always gives Diethyl Ether.",
      correct: "Temperature determines the pathway: at 413 K (140°C), intermolecular dehydration gives Diethyl Ether (C₂H₅OC₂H₅). At 443 K (170°C), intramolecular dehydration gives Ethene (CH₂=CH₂).",
      trick: "413 K = Ether (2 molecules join); 443 K = Alkene (1 molecule eliminates)."
    },
    {
      id: 17,
      mistake: "Believing cleavage of (CH₃)₃C–O–CH₃ by HI gives (CH₃)₃C–OH + CH₃I via S_N2.",
      correct: "Because tert-butyl forms an exceptionally stable 3° carbocation, the cleavage proceeds via S_N1 to give tert-Butyl Iodide [(CH₃)₃C–I] + Methanol (CH₃OH).",
      trick: "3° alkyl ether + HI = 3° Alkyl Iodide (S_N1); 1° alkyl ether + HI = Smaller Alkyl Iodide (S_N2)."
    },
    {
      id: 18,
      mistake: "Thinking Phenol is converted to Benzene by reaction with NaBH₄ or LiAlH₄.",
      correct: "Phenol is converted to Benzene exclusively by heating with ZINC DUST (Zn / Δ). Hydride reducing agents cannot reduce phenolic –OH.",
      trick: "Zn dust strips Oxygen from Phenol to leave Benzene + ZnO."
    },
    {
      id: 19,
      mistake: "Assuming oxidation of Phenol with Na₂Cr₂O₇/H₂SO₄ destroys the ring or gives benzoic acid.",
      correct: "Oxidation of phenol with acidified sodium dichromate produces p-Benzoquinone (a conjugated 1,4-diketone).",
      trick: "Phenol + Chromic Acid = p-Benzoquinone (deeply coloured diketone)."
    },
    {
      id: 20,
      mistake: "Confusing Aspirin synthesis starting materials and reagents.",
      correct: "Aspirin (Acetylsalicylic Acid) is prepared by acetylation of Salicylic Acid with Acetic Anhydride [(CH₃CO)₂O] in the presence of a catalytic drop of conc. H₂SO₄.",
      trick: "Salicylic Acid + Acetic Anhydride → Aspirin + Acetic Acid."
    },
    {
      id: 21,
      mistake: "Believing Picric Acid contains a carboxylic acid (–COOH) group because of the name 'Acid'.",
      correct: "Picric acid is 2,4,6-trinitrophenol. It contains NO –COOH group; its extreme acidity (pKₐ 0.71) arises solely from the powerful -R/-I effects of three nitro groups.",
      trick: "Picric Acid is a Phenol, NOT a Carboxylic Acid!"
    },
    {
      id: 22,
      mistake: "Assuming Victor Meyer test gives red colour for secondary alcohols.",
      correct: "Victor Meyer test gives RED for 1° alcohols (nitrolic acid salt), BLUE for 2° alcohols (pseudonitrol), and COLOURLESS/WHITE for 3° alcohols.",
      trick: "Victor Meyer Mnemonic: R – B – W (1° Red, 2° Blue, 3° White)."
    },
    {
      id: 23,
      mistake: "Predicting that reacting Grignard reagent (CH₃MgBr) with Acetone gives a secondary alcohol.",
      correct: "Formaldehyde gives 1° alcohol; any other Aldehyde gives 2° alcohol; KETONES give 3° alcohols (Acetone + CH₃MgBr → tert-Butanol).",
      trick: "HCHO → 1°; RCHO → 2°; Ketone → 3° Alcohol."
    },
    {
      id: 24,
      mistake: "Assuming Ethers have higher boiling points than isomeric alcohols due to two alkyl groups.",
      correct: "Alcohols form strong intermolecular Hydrogen bonds, giving them much higher boiling points (e.g. Ethanol bp 78°C vs Dimethyl ether bp -24°C). Ethers have only weak dipole-dipole forces.",
      trick: "Alcohol bp >> Ether bp (H-bonding beats Dipole-Dipole every time)."
    },
    {
      id: 25,
      mistake: "Thinking Ethers are completely insoluble in water.",
      correct: "Lower ethers (dimethyl ether, diethyl ether) are moderately soluble in water because the ether oxygen can accept Hydrogen bonds from water molecules (H–O–H···O(R)₂).",
      trick: "Ethers can ACCEPT H-bonds from water, making lower ethers water-soluble."
    },
    {
      id: 26,
      mistake: "Assuming Bromination of Anisole requires FeBr₃ or AlCl₃ Lewis acid catalyst.",
      correct: "The methoxy group (–OCH₃) is so strongly activating (+R) that bromination occurs smoothly in ethanoic acid (CH₃COOH) solvent WITHOUT any Lewis acid catalyst, yielding 90% p-bromoanisole.",
      trick: "Anisole is hyperactive; Br₂ / CH₃COOH is sufficient for bromination."
    },
    {
      id: 27,
      mistake: "Thinking Diphenyl Ether (C₆H₅–O–C₆H₅) can be cleaved by heating with HI.",
      correct: "Diphenyl ether is completely resistant to HI cleavage because both C(aryl)–O bonds have partial double bond character due to resonance and phenyl cations cannot form.",
      trick: "Ar–O–Ar has dual double-bond character; HI cannot cleave it."
    },
    {
      id: 28,
      mistake: "Believing that Diethyl Ether stored in open air is completely safe for distillation.",
      correct: "Ethers react with atmospheric O₂ in sunlight to form explosive organic PEROXIDES. Distilling old ether can cause violent explosions. Always test with FeSO₄ + KCNS first.",
      trick: "Old Ether + Light = Explosive Peroxide hazard."
    },
    {
      id: 29,
      mistake: "Predicting that reacting Phenol with Benzoyl Chloride in aqueous NaOH is called Kolbe reaction.",
      correct: "Reaction of phenol with benzoyl chloride in aqueous NaOH to form phenyl benzoate is called the SCHOTTEN-BAUMANN reaction.",
      trick: "Benzoylation of Phenol / Aniline in NaOH = Schotten-Baumann."
    },
    {
      id: 30,
      mistake: "Thinking 1-Methylcyclohexanol dehydrated with acid gives 3-methylcyclohexene.",
      correct: "Dehydration follows the Saytzeff rule via the most stable 3° carbocation to give 1-Methylcyclohexene (the most substituted alkene, tetrasubstituted double bond).",
      trick: "Saytzeff Rule: The more substituted, more stable alkene is always major."
    },
    {
      id: 31,
      mistake: "Assuming reduction of Carboxylic Acids to Alcohols can be carried out using NaBH₄.",
      correct: "NaBH₄ is too weak to reduce carboxylic acids or esters. Reduction of RCOOH to RCH₂OH requires powerful LITHIUM ALUMINIUM HYDRIDE (LiAlH₄) or Diborane (B₂H₆).",
      trick: "Acids/Esters need LiAlH₄; NaBH₄ only reduces Aldehydes & Ketones."
    },
    {
      id: 32,
      mistake: "Assuming boiling point increases with branching in isomeric alcohols.",
      correct: "Branching increases molecular spherical shape, decreasing surface area and van der Waals contact; therefore, boiling point DECREASES with branching (n-butanol > isobutanol > sec-butanol > tert-butanol).",
      trick: "More Branching = More Spherical = Lower Boiling Point."
    },
    {
      id: 33,
      mistake: "Thinking that in the Victor Meyer test, 3° alcohol turns yellow.",
      correct: "3° alcohol has no α-hydrogen, does not react with nitrous acid (HNO₂), and remains completely COLOURLESS upon adding aqueous NaOH.",
      trick: "3° Alcohol in Victor Meyer = No reaction = Colourless."
    },
    {
      id: 34,
      mistake: "Believing the industrial preparation of Phenol from Cumene produces Methanol as byproduct.",
      correct: "The cumene process yields PHENOL and ACETONE (Propan-2-one) in an exact 1:1 equimolar ratio.",
      trick: "Cumene + O₂ then H⁺ = Phenol + ACETONE (nail polish remover byproduct!)."
    },
    {
      id: 35,
      mistake: "Predicting that Friedel-Crafts alkylation of Anisole gives meta product.",
      correct: "The –OCH₃ group is ortho/para-directing (+R). Reaction of Anisole with CH₃Cl/anh. AlCl₃ gives 4-Methoxytoluene (para, major) and 2-Methoxytoluene (ortho, minor).",
      trick: "–OCH₃ directs electrophiles to Ortho and Para; Para is major due to less steric clash."
    },
    {
      id: 36,
      mistake: "Assuming treating Phenol with neutral FeCl₃ gives a white precipitate.",
      correct: "Phenol + neutral FeCl₃ produces an intense VIOLET / PURPLE water-soluble coordination complex [Fe(OC₆H₅)₆]³⁻.",
      trick: "Phenol + FeCl₃ = Violet solution; Phenol + Br₂ water = White precipitate."
    },
    {
      id: 37,
      mistake: "Thinking that Ethyl alcohol and Methyl alcohol can both be distinguished by the Iodoform test.",
      correct: "Ethanol (CH₃CH₂OH) contains the CH₃–CH(OH)– group and gives a POSITIVE yellow precipitate of iodoform (CHI₃) with I₂/NaOH. Methanol (CH₃OH) lacks this group and gives a NEGATIVE test.",
      trick: "Ethanol gives Yellow Iodoform; Methanol gives No ppt."
    },
    {
      id: 38,
      mistake: "Assuming sodium metal reacts violently with Ethers.",
      correct: "Ethers have no acidic hydroxylic hydrogens and DO NOT react with active metals like Sodium (Na). Sodium is used to dry diethyl ether!",
      trick: "Alcohols react with Na (evolve H₂); Ethers are inert to Na."
    },
    {
      id: 39,
      mistake: "Believing Salol is methyl salicylate.",
      correct: "Salol is PHENYL SALICYLATE (used as an internal intestinal antiseptic). Oil of Wintergreen is METHYL SALICYLATE (used for muscular pain relief).",
      trick: "Salol = Phenyl Salicylate; Wintergreen = Methyl Salicylate; Aspirin = Acetylsalicylic Acid."
    },
    {
      id: 40,
      mistake: "Thinking that reaction of Phenol with dilute HNO₃ gives Picric acid.",
      correct: "Dilute HNO₃ at 298 K gives a mixture of ortho-Nitrophenol and para-Nitrophenol. Concentrated HNO₃ (+ conc. H₂SO₄) is required to produce Picric Acid (2,4,6-trinitrophenol).",
      trick: "Dilute HNO₃ = o/p-Nitrophenols; Conc. HNO₃ = Picric Acid."
    }
  ],

  // 20 Solved Reaction Prediction Problems (Step-by-Step Mechanism)
  solvedReactionProblems: [
    {
      id: 1,
      question: "Predict the major product when 3,3-Dimethylbutan-2-ol is heated with concentrated H₂SO₄ at 440 K.",
      steps: [
        "Step 1 (Functional Group): Secondary alcohol containing a bulky quaternary carbon adjacent to the carbinol center.",
        "Step 2 (Reagent & Conditions): Conc. H₂SO₄ at 440 K initiates acid-catalysed dehydration.",
        "Step 3 (Mechanism): Protonation of –OH followed by loss of H₂O generates a secondary carbocation: (CH₃)₃C–C⁺H–CH₃.",
        "Step 4 (Rearrangement): Rapid 1,2-Methyl shift converts the 2° carbocation into a more stable 3° carbocation: (CH₃)₂C⁺–CH(CH₃)₂.",
        "Step 5 (Elimination): Deprotonation by conjugate base follows the Saytzeff rule to yield the most substituted alkene."
      ],
      finalProduct: "2,3-Dimethylbut-2-ene [(CH₃)₂C=C(CH₃)₂, tetrasubstituted alkene, Major ~90%]",
      neetTrap: "Students forget the 1,2-methyl carbocation rearrangement and incorrectly predict 3,3-dimethylbut-1-ene."
    },
    {
      id: 2,
      question: "Predict the product when Sodium tert-butoxide is treated with Ethyl iodide.",
      steps: [
        "Step 1: Identify reactants — (CH₃)₃C–O⁻ Na⁺ (3° alkoxide nucleophile/base) and CH₃CH₂–I (1° alkyl halide substrate).",
        "Step 2: Check mechanism type — Williamson ether synthesis.",
        "Step 3: Evaluate substrate hindrance — Ethyl iodide is primary (1°), unhindered, and an excellent S_N2 substrate.",
        "Step 4: Substitution vs Elimination — With a 1° alkyl halide, substitution (S_N2) heavily predominates over elimination."
      ],
      finalProduct: "tert-Butyl ethyl ether [(CH₃)₃C–O–CH₂CH₃] + NaI",
      neetTrap: "Do not confuse this with Sodium ethoxide + tert-Butyl bromide (which gives 100% elimination to alkene)."
    },
    {
      id: 3,
      question: "Predict the major product when Anisole is treated with HI at 373 K.",
      steps: [
        "Step 1: Protonation of ether oxygen gives methyl phenyl oxonium ion [C₆H₅–O⁺(H)–CH₃].",
        "Step 2: Evaluate bond strengths — C(phenyl)–O bond has partial double bond character due to resonance (+R) and cannot be attacked.",
        "Step 3: Iodide ion (I⁻) executes an S_N2 nucleophilic backside attack on the less hindered methyl carbon.",
        "Step 4: Cleavage releases Phenol and Methyl iodide."
      ],
      finalProduct: "Phenol (C₆H₅OH) + Methyl iodide (CH₃I)",
      neetTrap: "Iodobenzene is NEVER formed because the phenyl–oxygen bond is too strong and phenyl cation cannot form."
    },
    {
      id: 4,
      question: "Predict the product when Phenol is heated with Chloroform in aqueous NaOH at 340 K followed by acid hydrolysis.",
      steps: [
        "Step 1: Named reaction — Reimer-Tiemann formylation.",
        "Step 2: Generation of electrophile — Base abstracts proton from CHCl₃ followed by loss of Cl⁻ yielding Dichlorocarbene (:CCl₂).",
        "Step 3: Electrophilic attack on sodium phenoxide occurs predominantly at the ortho position.",
        "Step 4: Hydrolysis of the resulting –CHCl₂ intermediate converts it into an aldehyde (–CHO)."
      ],
      finalProduct: "Salicylaldehyde (2-Hydroxybenzaldehyde, Major)",
      neetTrap: "Ortho isomer is major due to favorable intramolecular hydrogen bonding in the product."
    },
    {
      id: 5,
      question: "Predict the major product when Phenol is treated with Sodium hydroxide followed by CO₂ at 400 K and 4–7 atm pressure, then acidified.",
      steps: [
        "Step 1: Named reaction — Kolbe-Schmitt carboxylation.",
        "Step 2: Phenol is converted by NaOH to Sodium Phenoxide (C₆H₅ONa), generating high ring electron density.",
        "Step 3: Weak electrophile CO₂ attacks at the ortho position (guided by Na⁺ coordination bridge).",
        "Step 4: Acidification yields 2-hydroxybenzoic acid."
      ],
      finalProduct: "Salicylic Acid (2-Hydroxybenzoic Acid)",
      neetTrap: "The starting electrophile is neutral carbon dioxide (CO₂), not carbonate."
    },
    {
      id: 6,
      question: "Predict the product when tert-Butyl methyl ether is cleaved by heating with 1 equivalent of HI.",
      steps: [
        "Step 1: Protonation of oxygen forms [(CH₃)₃C–O⁺(H)–CH₃].",
        "Step 2: Substrate contains a tertiary alkyl group (tert-butyl).",
        "Step 3: Heterolytic cleavage of the 3° C–O bond occurs spontaneously via S_N1 to produce a stable 3° carbocation [(CH₃)₃C⁺] and Methanol.",
        "Step 4: Nucleophile I⁻ attacks the 3° carbocation."
      ],
      finalProduct: "tert-Butyl iodide [(CH₃)₃C–I] + Methanol (CH₃OH)",
      neetTrap: "Students mistakenly apply S_N2 rules to 3° ethers; 3° ethers cleave strictly via S_N1 to give 3° alkyl iodide."
    },
    {
      id: 7,
      question: "Predict the major organic product when Propene is treated with (i) B₂H₆ / THF, and (ii) alkaline H₂O₂.",
      steps: [
        "Step 1: Hydroboration of propene: 6 CH₃CH=CH₂ + B₂H₆ → 2 (CH₃CH₂CH₂)₃B (Tri-n-propylborane).",
        "Step 2: Boron adds to the less hindered terminal carbon (Anti-Markovnikov regiochemistry).",
        "Step 3: Alkaline H₂O₂ replaces the B–C bond with an –OH group with retention of stereochemistry."
      ],
      finalProduct: "Propan-1-ol (CH₃CH₂CH₂OH, 1° Alcohol, 100%)",
      neetTrap: "No carbocation is formed; syn-addition ensures pure primary alcohol without rearrangement."
    },
    {
      id: 8,
      question: "Predict the product when Phenol is heated with Zinc dust.",
      steps: [
        "Step 1: Reductive deoxygenation of phenol.",
        "Step 2: Zinc acts as a reducing agent, accepting oxygen to form solid Zinc oxide (ZnO).",
        "Step 3: The aromatic core is converted to the parent hydrocarbon."
      ],
      finalProduct: "Benzene (C₆H₆) + ZnO",
      neetTrap: "This is a direct method to eliminate the phenolic –OH group from an aromatic ring."
    },
    {
      id: 9,
      question: "Predict the major product when Salicylic acid is treated with Acetic anhydride in the presence of concentrated H₂SO₄.",
      steps: [
        "Step 1: Esterification / Acetylation of phenolic –OH group.",
        "Step 2: Acetic anhydride [(CH₃CO)₂O] acts as the acetylating agent.",
        "Step 3: Phenolic –OH attacks the carbonyl of acetic anhydride, forming an acetyl ester."
      ],
      finalProduct: "Aspirin (2-Acetoxybenzoic acid / Acetylsalicylic acid) + Acetic acid",
      neetTrap: "Acetylation occurs at the phenolic –OH group, NOT at the carboxylic –COOH group!"
    },
    {
      id: 10,
      question: "Predict the product when Phenol is treated with Excess Bromine water.",
      steps: [
        "Step 1: Aqueous medium ionizes phenol into phenoxide ion.",
        "Step 2: Phenoxide ion activates ortho and para positions intensely (+R effect).",
        "Step 3: Exhaustive electrophilic substitution occurs simultaneously at positions 2, 4, and 6."
      ],
      finalProduct: "2,4,6-Tribromophenol (White crystalline precipitate)",
      neetTrap: "In non-polar CS₂, only monobromination (p-bromophenol) occurs."
    },
    {
      id: 11,
      question: "Predict the product when Propan-2-ol is passed over heated Copper metal at 573 K.",
      steps: [
        "Step 1: Propan-2-ol is a secondary (2°) alcohol possessing 1 α-hydrogen.",
        "Step 2: Over hot Cu at 573 K, secondary alcohols undergo catalytic dehydrogenation (loss of H₂).",
        "Step 3: Conversion of –CH(OH)– into –C(=O)–."
      ],
      finalProduct: "Propan-2-one (Acetone / Dimethyl ketone) + H₂↑",
      neetTrap: "1° alcohols give aldehydes; 2° give ketones; 3° undergo dehydration to alkenes."
    },
    {
      id: 12,
      question: "Predict the major product when Anisole is treated with Bromine in ethanoic acid.",
      steps: [
        "Step 1: Anisole contains the methoxy group (–OCH₃), which is an activating and ortho/para-directing group.",
        "Step 2: In ethanoic acid, bromination occurs smoothly without any Lewis acid catalyst.",
        "Step 3: Due to steric hindrance at the ortho position, the para isomer heavily dominates (~90%)."
      ],
      finalProduct: "4-Bromoanisole (p-Bromoanisole, Major ~90%) + 2-Bromoanisole (Minor ~10%)",
      neetTrap: "No catalyst (FeBr₃) is needed because –OCH₃ strongly activates the benzene ring."
    },
    {
      id: 13,
      question: "Predict the product when 2-Methylpropan-2-ol (tert-butanol) is oxidized with PCC in CH₂Cl₂.",
      steps: [
        "Step 1: 2-Methylpropan-2-ol is a tertiary (3°) alcohol.",
        "Step 2: Tertiary alcohols possess NO α-hydrogens on the carbinol carbon.",
        "Step 3: PCC is a mild reagent and cannot cleave strong C–C bonds."
      ],
      finalProduct: "No Reaction (Resistant to PCC oxidation)",
      neetTrap: "Do not attempt to write a ketone for 3° alcohols with PCC."
    },
    {
      id: 14,
      question: "Predict the product when Formaldehyde (HCHO) reacts with Ethylmagnesium bromide (C₂H₅MgBr) followed by acidic hydrolysis.",
      steps: [
        "Step 1: Grignard addition to formaldehyde.",
        "Step 2: Nucleophilic attack of ethyl group (C₂H₅⁻) on H–CH=O forms magnesium alkoxide intermediate [C₂H₅–CH₂–O⁻ MgBr⁺].",
        "Step 3: Hydrolysis with H₃O⁺ protonates alkoxide to primary alcohol."
      ],
      finalProduct: "Propan-1-ol (CH₃CH₂CH₂OH, 1° Alcohol)",
      neetTrap: "Formaldehyde always yields a 1° alcohol with one more carbon chain length than the Grignard reagent."
    },
    {
      id: 15,
      question: "Predict the product when Anisole is treated with Acetyl chloride in the presence of anhydrous AlCl₃.",
      steps: [
        "Step 1: Friedel-Crafts acylation of anisole.",
        "Step 2: Electrophile is the acylium ion (CH₃–C⁺=O).",
        "Step 3: Attack directed to ortho and para positions; para is major due to steric factors."
      ],
      finalProduct: "4-Methoxyacetophenone (Major) + 2-Methoxyacetophenone (Minor)",
      neetTrap: "The major product is the para isomer; –OCH₃ activates the ring."
    },
    {
      id: 16,
      question: "Predict the product when Diethyl ether is heated with excess concentrated HI.",
      steps: [
        "Step 1: First equivalent of HI cleaves diethyl ether to Ethyl iodide (CH₃CH₂I) and Ethanol (CH₃CH₂OH).",
        "Step 2: The second equivalent of HI reacts with Ethanol to convert it into a second mole of Ethyl iodide.",
        "Step 3: Total stoichiometry: (C₂H₅)₂O + 2 HI → 2 C₂H₅I + H₂O."
      ],
      finalProduct: "2 moles of Ethyl Iodide (CH₃CH₂I) + H₂O",
      neetTrap: "With 1 eq. HI you get 1 mole alcohol + 1 mole iodide; with EXCESS HI you get 2 moles of alkyl iodide."
    },
    {
      id: 17,
      question: "Predict the major product when Cumene is aerially oxidized and subsequently treated with dilute H₂SO₄.",
      steps: [
        "Step 1: Aerial oxidation of cumene produces cumene hydroperoxide [C₆H₅C(CH₃)₂–O–O–H].",
        "Step 2: Acid treatment triggers Hock rearrangement with phenyl migration to oxygen.",
        "Step 3: Cleavage produces phenol and acetone."
      ],
      finalProduct: "Phenol (C₆H₅OH) + Acetone (CH₃COCH₃, Equimolar coproduct)",
      neetTrap: "This is the principal commercial route to phenol worldwide."
    },
    {
      id: 18,
      question: "Predict the product when 1-Phenylethanol is treated with Lucas reagent at room temperature.",
      steps: [
        "Step 1: 1-Phenylethanol [C₆H₅CH(OH)CH₃] is a secondary benzylic alcohol.",
        "Step 2: Protonation and water loss generate a highly resonance-stabilized benzylic carbocation [C₆H₅C⁺H–CH₃].",
        "Step 3: Nucleophilic attack by Cl⁻ occurs rapidly."
      ],
      finalProduct: "1-Chloro-1-phenylethane (Immediate Turbidity within seconds)",
      neetTrap: "Benzylic alcohols mimic 3° alcohols in the Lucas test and give immediate turbidity due to resonance."
    },
    {
      id: 19,
      question: "Predict the major product when Phenol is reacted with neutral Ferric chloride solution.",
      steps: [
        "Step 1: Coordination of phenolic oxygen lone pairs with Fe³⁺ ions.",
        "Step 2: Formation of a hexaphenoxidoferrate(III) complex anion.",
        "Step 3: Deep violet/purple colouration emerges."
      ],
      finalProduct: "Violet-coloured complex [Fe(OC₆H₅)₆]³⁻",
      neetTrap: "Aliphatic alcohols give no colour with neutral FeCl₃; this is a diagnostic test for phenolic –OH."
    },
    {
      id: 20,
      question: "Predict the product when Ethyl alcohol is heated with concentrated H₂SO₄ at 413 K (140°C).",
      steps: [
        "Step 1: Excess ethyl alcohol reacts with conc. H₂SO₄ at controlled temperature 413 K.",
        "Step 2: S_N2 nucleophilic attack by unprotonated ethanol on protonated ethyl oxonium ion.",
        "Step 3: Loss of proton yields diethyl ether."
      ],
      finalProduct: "Diethyl ether (Ethoxyethane, CH₃CH₂OCH₂CH₃)",
      neetTrap: "At 443 K (170°C), ethene (alkene) is formed via intramolecular elimination."
    }
  ]
};
