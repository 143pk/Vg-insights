export const AMINES_TRAPS_AND_TABLES = {
  neetReactionTraps: [
    {
      id: "trap-1",
      title: "Carbylamine Test Exclusivity",
      trap: "Assuming that secondary or tertiary aliphatic amines give a carbylamine test.",
      fact: "Carbylamine (isocyanide) test is given EXCLUSIVELY by primary (1°) amines (both aliphatic and aromatic). Secondary (2°) and tertiary (3°) amines give NO reaction.",
      whyItMatters: "Standard question in NEET to identify an unknown compound containing an –NH₂ group."
    },
    {
      id: "trap-2",
      title: "Hofmann Bromamide Carbon Loss",
      trap: "Forgetting that the amine formed in Hofmann bromamide reaction has ONE LESS carbon atom than the starting amide.",
      fact: "R–CONH₂ + Br₂ + 4 NaOH ⟶ R–NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O. The carbonyl carbon is completely eliminated as sodium carbonate (Na₂CO₃).",
      whyItMatters: "Frequent in conversion questions: Propanamide (3 carbons) yields Ethanamine (2 carbons), NOT propanamine."
    },
    {
      id: "trap-3",
      title: "Gabriel Phthalimide Aniline Failure",
      trap: "Thinking that aniline (C₆H₅NH₂) can be prepared by Gabriel phthalimide synthesis.",
      fact: "Aryl halides (chlorobenzene, bromobenzene) do NOT undergo nucleophilic SN2 substitution with potassium phthalimide due to partial double-bond character of C–X bond and resonance repulsion. Only 1° aliphatic amines can be prepared.",
      whyItMatters: "Repeatedly tested in NEET option-elimination questions."
    },
    {
      id: "trap-4",
      title: "Aqueous Basicity Rule (213 vs 231)",
      trap: "Applying the gas-phase basicity order (3° > 2° > 1° > NH₃) to aqueous solutions.",
      fact: "In aqueous solution, basicity is governed by the interplay of +I effect, hydration enthalpy (solvation), and steric hindrance. For Methyl: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃, '213'). For Ethyl: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ (2° > 3° > 1° > NH₃, '231').",
      whyItMatters: "One of the most frequently asked basicity ranking questions in NEET Chemistry."
    },
    {
      id: "trap-5",
      title: "Aniline vs Aliphatic Amines Basicity",
      trap: "Believing that aniline is a stronger base than ammonia because of the electron-rich benzene ring.",
      fact: "Aniline (pKb ≈ 9.38) is ~10⁶ times WEAKER base than aliphatic amines (pKb ≈ 3.25) and significantly weaker than NH₃ (pKb = 4.75) because the lone pair on nitrogen delocalises into the aromatic ring (+R effect).",
      whyItMatters: "Vital for ranking mixed aliphatic/aromatic amine series."
    },
    {
      id: "trap-6",
      title: "Ortho Effect in Substituted Anilines",
      trap: "Assuming that an ortho-methyl group (+I, +hyperconjugation) makes o-toluidine a stronger base than aniline.",
      fact: "Due to the Ortho Effect (steric hindrance to protonation and steric inhibition of resonance), almost ALL ortho-substituted anilines (e.g., o-toluidine, o-chloroaniline, o-nitroaniline) are WEAKER bases than aniline.",
      whyItMatters: "Examiners use o-toluidine to trick students who only look at the +I effect of methyl."
    },
    {
      id: "trap-7",
      title: "Diazotisation Strict Temperature Limit",
      trap: "Performing diazotisation of aniline at room temperature (25 °C).",
      fact: "Diazotisation requires strict ice-cold temperature (0–5 °C or 273–278 K). At temperatures above 5 °C, benzenediazonium chloride undergoes spontaneous hydrolysis with water to give Phenol (C₆H₅OH) and nitrogen gas (N₂↑).",
      whyItMatters: "Crucial reagent condition in multi-step organic reaction pathways."
    },
    {
      id: "trap-8",
      title: "Aryl Iodide Synthesis from Diazonium",
      trap: "Adding Cu₂I₂ or CuI to benzenediazonium chloride to make iodobenzene (confusing with Sandmeyer).",
      fact: "Iodobenzene does NOT require a cuprous salt catalyst. Simply warming benzenediazonium chloride with aqueous potassium iodide (KI) gives iodobenzene in high yield: Ar–N₂⁺Cl⁻ + KI ⟶ Ar–I + KCl + N₂↑.",
      whyItMatters: "Directly tested in reagent-identification questions."
    },
    {
      id: "trap-9",
      title: "Balz-Schiemann Reaction Reagent",
      trap: "Thinking that fluorobenzene is prepared by treating diazonium salt with HF or CuF.",
      fact: "Fluorobenzene is prepared exclusively by the Balz-Schiemann reaction: Ar–N₂⁺Cl⁻ + HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓ (isolated as a dry precipitate) ⟶ (heat Δ) ⟶ Ar–F + BF₃ + N₂↑.",
      whyItMatters: "Only recognized laboratory method for preparing pure fluorobenzene from aniline."
    },
    {
      id: "trap-10",
      title: "Reduction of Diazonium to Benzene (Deamination)",
      trap: "Forgetting which reducing agents convert Ar–N₂⁺Cl⁻ to Ar–H.",
      fact: "Two reagents reduce diazonium salts to benzene: (1) Hypophosphorous acid / phosphinic acid (H₃PO₂ + H₂O in presence of Cu⁺), or (2) Ethanol (CH₃CH₂OH), which gets oxidised to ethanal (CH₃CHO).",
      whyItMatters: "Central step in directing-group removal to synthesize meta-substituted derivatives."
    },
    {
      id: "trap-11",
      title: "Azo Coupling pH Conditions",
      trap: "Coupling phenol at acidic pH or coupling aniline at basic pH.",
      fact: "Coupling with Phenol requires a mildly alkaline medium (pH 9–10) to convert phenol into reactive phenoxide ion (C₆H₅O⁻) ⟶ Orange dye. Coupling with Aniline requires a mildly acidic medium (pH 4–5) so aniline remains free base without being completely protonated into unreactive anilinium ⟶ Yellow dye.",
      whyItMatters: "High-yield NEET trap on reaction conditions and dye colors."
    },
    {
      id: "trap-12",
      title: "Hinsberg Distinction of 1°, 2°, 3° Amines",
      trap: "Confusing which sulphonamide dissolves in alkali.",
      fact: "1° Amine + C₆H₅SO₂Cl ⟶ N-alkylbenzenesulphonamide (has acidic H on N) ⟶ SOLUBLE in KOH. 2° Amine + C₆H₅SO₂Cl ⟶ N,N-dialkylbenzenesulphonamide (NO acidic H) ⟶ INSOLUBLE in KOH. 3° Amine ⟶ DOES NOT REACT with C₆H₅SO₂Cl.",
      whyItMatters: "Classic experimental distinction and qualitative analysis question."
    },
    {
      id: "trap-13",
      title: "Aniline Direct Nitration Meta-Product",
      trap: "Expecting direct nitration of aniline with conc. HNO₃ + conc. H₂SO₄ to give only ortho and para nitroaniline.",
      fact: "In strongly acidic nitration medium, aniline is protonated to anilinium ion (–NH₃⁺), which is strongly META-DIRECTING and deactivating! Consequently, direct nitration yields 51% para-nitroaniline, 47% meta-nitroaniline, and only 2% ortho-nitroaniline.",
      whyItMatters: "Frequent numerical percentage / product distribution trap in NEET."
    },
    {
      id: "trap-14",
      title: "Aniline Protection by Acetylation",
      trap: "Attempting to synthesize monobromoaniline by direct reaction with Br₂ water.",
      fact: "Direct reaction of aniline with Br₂ water produces 2,4,6-tribromoaniline (white ppt) due to intense activation by –NH₂. To get monobromo product, the –NH₂ group must be PROTECTED by acetylation with acetic anhydride (Ac₂O) in pyridine to form acetanilide before bromination.",
      whyItMatters: "Crucial synthetic strategy question in NEET Organic Chemistry."
    },
    {
      id: "trap-15",
      title: "Aniline Fails Friedel-Crafts Alkylation & Acylation",
      trap: "Trying to perform Friedel-Crafts alkylation or acylation on aniline using AlCl₃.",
      fact: "Aniline DOES NOT undergo Friedel-Crafts reactions because the Lewis basic –NH₂ group reacts with the Lewis acid catalyst (AlCl₃) to form an insoluble complex: C₆H₅NH₂ + AlCl₃ ⟶ C₆H₅NH₂⁺–AlCl₃⁻. Nitrogen acquires a positive charge, strongly deactivating the aromatic ring.",
      whyItMatters: "Repeatedly tested as an Assertion-Reason or direct MCQ in NEET."
    },
    {
      id: "trap-16",
      title: "Primary Aliphatic Amine with Nitrous Acid",
      trap: "Expecting 1° aliphatic amines to form a stable diazonium salt at 0–5 °C.",
      fact: "1° Aliphatic amines (e.g., C₂H₅NH₂) react with NaNO₂ + HCl to form highly unstable alkyldiazonium salts (R–N₂⁺), which immediately decompose quantitatively liberating N₂ gas and forming a mixture of alcohol, alkene, and alkyl halide.",
      whyItMatters: "Used in Van Slyke method for estimation of amino acids and proteins."
    },
    {
      id: "trap-17",
      title: "Secondary Amines with Nitrous Acid (Liebermann's Test)",
      trap: "Thinking secondary amines liberate N₂ gas with HNO₂.",
      fact: "Secondary amines (aliphatic and aromatic) react with HNO₂ to form yellow oily N-nitrosamines (R₂N–N=O), which do NOT liberate N₂ gas. They give Liebermann's nitroso test.",
      whyItMatters: "Distinction test between primary and secondary amines."
    },
    {
      id: "trap-18",
      title: "Fe/HCl Preference in Nitro Reduction",
      trap: "Assuming Sn/HCl is industrially preferred over Fe/HCl for reducing Ar–NO₂ to Ar–NH₂.",
      fact: "Reduction with Iron scrap and hydrochloric acid (Fe + HCl) is preferred because the FeCl₂ formed during the reaction is hydrolysed by water to regenerate HCl, requiring only a catalytic initiation amount of hydrochloric acid.",
      whyItMatters: "Direct NCERT line frequently picked for statement-based questions."
    },
    {
      id: "trap-19",
      title: "Sulphanilic Acid Zwitterion",
      trap: "Believing sulphanilic acid exists as a neutral uncharged molecule in solid state.",
      fact: "Sulphanilic acid undergoes internal acid-base proton transfer between the basic –NH₂ group and acidic –SO₃H group to form a dipolar Zwitterion: ⁺H₃N–C₆H₄–SO₃⁻. It is insoluble in organic solvents and has a high melting point.",
      whyItMatters: "Fundamental concept in aromatic sulphonation of aniline."
    },
    {
      id: "trap-20",
      title: "Sandmeyer vs Gattermann Reagents",
      trap: "Confusing the catalyst in Sandmeyer with that in Gattermann.",
      fact: "Sandmeyer reaction uses Cuprous halides (Cu₂Cl₂/HCl or Cu₂Br₂/HBr or CuCN/KCN). Gattermann reaction uses metallic Copper powder (Cu powder / HCl or Cu powder / HBr).",
      whyItMatters: "Direct match-the-following and reagent identification MCQs."
    }
  ],

  memoryTables: [
    {
      title: "Table 1: Basicity Orders Across Media & Substituted Series",
      headers: ["Medium / Substrate", "Basicity Order", "Governing Factors / Key Rule"],
      rows: [
        ["Gas Phase (Aliphatic)", "3° > 2° > 1° > NH₃", "Pure +I inductive effect of alkyl groups"],
        ["Aqueous Phase (Methyl)", "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃)", "Rule 213: Solvation + +I + minimal sterics"],
        ["Aqueous Phase (Ethyl)", "(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ (2° > 3° > 1° > NH₃)", "Rule 231: +I dominance with higher alkyl group"],
        ["Aliphatic vs Aromatic", "Aliphatic Amines >> NH₃ > Aniline", "+R delocalization in aniline lowers lone pair availability"],
        ["Substituted Anilines (p-position)", "p-Toluidine > Aniline > p-Chloroaniline > p-Nitroaniline", "EDGs (+I, +M) increase basicity; EWGs (–I, –M) decrease basicity"],
        ["Ortho-Substituted Anilines", "Aniline > o-Toluidine > o-Chloroaniline > o-Nitroaniline", "Ortho Effect: Steric hindrance and non-coplanarity reduce basicity"]
      ]
    },
    {
      title: "Table 2: Master Preparation Methods of Amines",
      headers: ["Method", "Starting Material & Reagent", "Product Type", "Key NEET Memory Point"],
      rows: [
        ["Reduction of Nitro", "R–NO₂ + Fe/HCl or H₂/Pd", "1° Amine (R–NH₂)", "Fe/HCl preferred industrially (regenerates HCl)"],
        ["Ammonolysis of Halides", "R–X + alc. NH₃ (excess)", "1° > 2° > 3° + R₄N⁺X⁻ mixture", "Excess NH₃ yields 1° amine; excess RX yields 4° salt"],
        ["Reduction of Nitriles", "R–C≡N + LiAlH₄ or H₂/Ni", "1° Amine (R–CH₂NH₂)", "Mendius reaction; increases chain length by 1 carbon"],
        ["Reduction of Amides", "R–CONH₂ + LiAlH₄ / H₂O", "1° Amine (R–CH₂NH₂)", "Same number of carbons as parent amide"],
        ["Gabriel Phthalimide", "Phthalimide + KOH ⟶ RX ⟶ aq. NaOH", "Pure 1° Aliphatic Amine", "Ar–X fails; pure 1° aliphatic amines only"],
        ["Hofmann Bromamide", "R–CONH₂ + Br₂ + 4 NaOH", "1° Amine (R–NH₂)", "Step-down reaction: ONE LESS CARBON than amide!"]
      ]
    },
    {
      title: "Table 3: Diagnostic Distinction Tests Matrix (1°, 2°, 3° Amines)",
      headers: ["Test / Reagent", "Primary (1°) Amine", "Secondary (2°) Amine", "Tertiary (3°) Amine"],
      rows: [
        ["Carbylamine Test (CHCl₃ + alc. KOH, Δ)", "Foul-smelling isocyanide (R–NC) formed", "No reaction (negative)", "No reaction (negative)"],
        ["Hinsberg Test (C₆H₅SO₂Cl + aq. KOH)", "Sulphonamide soluble in KOH (acidic H)", "Sulphonamide insoluble in KOH (no acidic H)", "Does not react with reagent; dissolves in HCl"],
        ["Nitrous Acid (NaNO₂ + HCl, 0–5 °C)", "Aliphatic: alcohol + N₂↑ gas; Aromatic: Diazonium salt", "Yellow oily N-nitrosamine (R₂N–NO)", "Aliphatic: Soluble nitrite salt; Aromatic: p-Nitroso derivative"],
        ["Acylation (CH₃COCl / Pyridine)", "Monoacetyl derivative (R–NHCOCH₃)", "Di-substituted acetyl derivative (R₂NCOCH₃)", "No reaction (no replaceable H on N)"],
        ["Azo Dye Coupling (after diazotisation)", "Aromatic 1° forms orange/yellow azo dye", "Negative (no diazonium formed)", "Negative"]
      ]
    },
    {
      title: "Table 4: Diazonium Replacement Reactions (Ar–N₂⁺Cl⁻ Transformations)",
      headers: ["Target Group", "Reagent & Condition", "Product Formed", "Named Reaction / Note"],
      rows: [
        ["–Cl (Chloro)", "Cu₂Cl₂ + HCl, Δ", "Chlorobenzene (Ar–Cl)", "Sandmeyer Reaction (higher yield)"],
        ["–Cl (Chloro)", "Cu powder + HCl, Δ", "Chlorobenzene (Ar–Cl)", "Gattermann Reaction"],
        ["–Br (Bromo)", "Cu₂Br₂ + HBr, Δ", "Bromobenzene (Ar–Br)", "Sandmeyer Reaction"],
        ["–Br (Bromo)", "Cu powder + HBr, Δ", "Bromobenzene (Ar–Br)", "Gattermann Reaction"],
        ["–CN (Cyano)", "CuCN + KCN, Δ", "Benzonitrile (Ar–CN)", "Sandmeyer Reaction (adds 1 carbon)"],
        ["–I (Iodo)", "Aqueous KI, warm", "Iodobenzene (Ar–I)", "Direct substitution; NO copper catalyst required!"],
        ["–F (Fluoro)", "(i) HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓; (ii) Heat (Δ)", "Fluorobenzene (Ar–F)", "Balz-Schiemann Reaction"],
        ["–OH (Hydroxyl)", "H₂O, warm / dil. H₂SO₄, Δ", "Phenol (Ar–OH)", "Hydrolysis with liberation of N₂ gas"],
        ["–H (Hydrogen)", "H₃PO₂ + H₂O (Cu⁺) OR CH₃CH₂OH", "Benzene (Ar–H)", "Deamination / Reduction of diazo group"],
        ["–NO₂ (Nitro)", "HBF₄ ⟶ Ar–N₂⁺BF₄⁻ + NaNO₂ / Cu, Δ", "Nitrobenzene (Ar–NO₂)", "Thermal decomposition with NaNO₂/Cu"]
      ]
    },
    {
      title: "Table 5: Azo Coupling Reactions Summary",
      headers: ["Coupling Partner", "Reaction Medium & pH", "Product Formed", "Dye Color & Application"],
      rows: [
        ["Phenol (C₆H₅OH)", "Mildly alkaline (pH 9 – 10)", "p-hydroxyazobenzene (C₆H₅–N=N–C₆H₄–OH)", "Brilliant ORANGE dye"],
        ["Aniline (C₆H₅NH₂)", "Mildly acidic (pH 4 – 5)", "p-aminoazobenzene (C₆H₅–N=N–C₆H₄–NH₂)", "Brilliant YELLOW dye"],
        ["β-Naphthol (2-Naphthol)", "Alkaline solution (10% NaOH)", "1-(phenylazo)-2-naphthol", "Deep SCARLET RED dye (Azo dye test)"]
      ]
    }
  ],

  commonMistakes: [
    {
      wrong: "Assuming that converting ethanamide (CH₃CONH₂) by Hofmann bromamide degradation produces ethanamine (CH₃CH₂NH₂).",
      correct: "Hofmann bromamide is a degradation / step-down reaction where the carbonyl carbon is lost as Na₂CO₃. Ethanamide (2 carbons) produces Methanamine (CH₃NH₂, 1 carbon)."
    },
    {
      wrong: "Classifying (CH₃)₃C–NH₂ (tert-butylamine) as a 3° (tertiary) amine because it has a tert-butyl group.",
      correct: "tert-Butylamine is a PRIMARY (1°) amine because the nitrogen atom is bonded to only ONE carbon group (–NH₂ group present). Amine degree is based on nitrogen substitution, not carbon classification."
    },
    {
      wrong: "Thinking that Gabriel phthalimide synthesis can prepare methylamine and aniline with equal efficiency.",
      correct: "Gabriel synthesis prepares ONLY 1° aliphatic amines. Aryl halides do not undergo nucleophilic SN2 substitution, so aniline cannot be synthesized by this method."
    },
    {
      wrong: "Writing the aqueous basicity order of methylamines as 3° > 2° > 1° > NH₃.",
      correct: "In aqueous solution, the basicity order of methylamines is (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃, '213') due to hydration stabilization and steric effects."
    },
    {
      wrong: "Believing that CuI is needed with KI to convert diazonium salt to iodobenzene.",
      correct: "No copper catalyst is required for iodination. Simply shaking diazonium salt solution with aqueous KI gives iodobenzene smoothly."
    },
    {
      wrong: "Assuming diazonium coupling with phenol works best in strongly acidic medium.",
      correct: "Coupling with phenol requires mildly basic medium (pH 9–10) to convert phenol into the strongly nucleophilic phenoxide ion (C₆H₅O⁻)."
    },
    {
      wrong: "Thinking that secondary amines give the carbylamine test because they contain nitrogen.",
      correct: "Carbylamine test strictly requires a –NH₂ group (two protons on nitrogen) to eliminate 2 moles of HCl with chloroform. Only 1° amines respond."
    },
    {
      wrong: "Believing aniline undergoes Friedel-Crafts acylation easily because –NH₂ is an activating group.",
      correct: "Aniline forms an acid-base adduct with the Lewis acid catalyst AlCl₃ (C₆H₅NH₂⁺–AlCl₃⁻), deactivating the benzene ring and completely inhibiting Friedel-Crafts reaction."
    },
    {
      wrong: "Assuming direct nitration of aniline produces only ortho and para nitroaniline.",
      correct: "In strong acid (HNO₃ + H₂SO₄), aniline is protonated to meta-directing anilinium ion, yielding 51% para, 47% meta, and 2% ortho nitroaniline."
    },
    {
      wrong: "Believing that benzenesulphonamide formed from 2° amine is soluble in KOH.",
      correct: "The sulphonamide from a 2° amine (C₆H₅SO₂NR₂) has no acidic proton on nitrogen and is completely INSOLUBLE in aqueous KOH."
    },
    {
      wrong: "Thinking that aliphatic diazonium salts can be isolated and coupled like aromatic diazonium salts.",
      correct: "Aliphatic diazonium salts (R–N₂⁺) are extremely unstable and decompose spontaneously even at 0 °C to evolve N₂ gas."
    },
    {
      wrong: "Believing that H₃PO₂ oxidises diazonium salt to benzoic acid.",
      correct: "H₃PO₂ is a reducing agent that reduces the diazonium group (–N₂⁺) to hydrogen (–H), forming benzene."
    },
    {
      wrong: "Assuming that tertiary amines react with Hinsberg reagent to give an alkali-insoluble solid.",
      correct: "Tertiary amines have no replaceable hydrogen on nitrogen and DO NOT REACT with Hinsberg reagent at all."
    },
    {
      wrong: "Thinking o-toluidine is a stronger base than aniline because –CH₃ is an electron-donating group.",
      correct: "Due to the Ortho Effect in anilines, almost all ortho-substituted anilines are weaker bases than aniline."
    },
    {
      wrong: "Expecting monobromoaniline directly when aniline is treated with bromine water.",
      correct: "Bromine water is so activating that it polybrominates aniline to 2,4,6-tribromoaniline (white ppt). Acetylation is mandatory to obtain monobromoaniline."
    }
  ],

  activeRecallQuestions: [
    {
      q: "1. Which class of amines gives the Carbylamine (isocyanide) test?",
      a: "Only PRIMARY (1°) amines (both aliphatic and aromatic) give the carbylamine test, forming foul-smelling isocyanides (R–NC)."
    },
    {
      q: "2. What is the reactive intermediate in the Carbylamine reaction?",
      a: "Dichlorocarbene (:CCl₂), generated from CHCl₃ and alc. KOH."
    },
    {
      q: "3. What is the stoichiometric ratio of Amide : Br₂ : NaOH in Hofmann bromamide degradation?",
      a: "1 mole Amide : 1 mole Br₂ : 4 moles NaOH (or KOH)."
    },
    {
      q: "4. Why cannot aniline be prepared by Gabriel Phthalimide synthesis?",
      a: "Aryl halides (Ar–X) do not undergo nucleophilic SN2 displacement with potassium phthalimide due to partial double-bond character."
    },
    {
      q: "5. What is the basicity order of methyl-substituted amines in aqueous solution?",
      a: "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃, '213' rule)."
    },
    {
      q: "6. What is the basicity order of ethyl-substituted amines in aqueous solution?",
      a: "(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ (2° > 3° > 1° > NH₃, '231' rule)."
    },
    {
      q: "7. Why is aniline a much weaker base than cyclohexylamine?",
      a: "The lone pair on aniline's nitrogen is delocalised into the benzene ring (+R effect), whereas in cyclohexylamine it is localized on sp³ nitrogen."
    },
    {
      q: "8. What happens to the basicity of aniline when an ortho-substituent (like –CH₃ or –NO₂) is introduced?",
      a: "Basicity DECREASES in almost all cases due to the Ortho Effect (steric hindrance to protonation and loss of coplanarity)."
    },
    {
      q: "9. What is the chemical formula and name of the Hinsberg reagent?",
      a: "C₆H₅SO₂Cl (Benzenesulphonyl chloride)."
    },
    {
      q: "10. How does the Hinsberg test distinguish a 1° amine from a 2° amine?",
      a: "1° Amine gives N-alkylbenzenesulphonamide which is SOLUBLE in alkali (KOH); 2° amine gives N,N-dialkylbenzenesulphonamide which is INSOLUBLE in alkali."
    },
    {
      q: "11. What temperature range must be maintained during diazotisation of aniline?",
      a: "0–5 °C (273–278 K). Above 5 °C, benzenediazonium chloride hydrolyses to phenol."
    },
    {
      q: "12. What gas is quantitatively evolved when a primary aliphatic amine reacts with HNO₂?",
      a: "Nitrogen gas (N₂↑), used in the Van Slyke method for amino acid estimation."
    },
    {
      q: "13. What product is obtained when secondary amines react with nitrous acid?",
      a: "Yellow oily N-nitrosamines (R₂N–N=O), giving Liebermann's nitroso reaction."
    },
    {
      q: "14. What catalyst is used in the Sandmeyer reaction to prepare chlorobenzene?",
      a: "Cuprous chloride (Cu₂Cl₂ / HCl)."
    },
    {
      q: "15. How does the Gattermann reaction differ from the Sandmeyer reaction?",
      a: "Gattermann uses finely divided Copper powder (Cu/HCl) instead of cuprous salt (Cu₂Cl₂/HCl)."
    },
    {
      q: "16. Which reagent converts benzenediazonium chloride to iodobenzene?",
      a: "Aqueous Potassium Iodide (KI) with gentle warming (no copper catalyst needed)."
    },
    {
      q: "17. Name the named reaction used to prepare fluorobenzene from aniline.",
      a: "Balz-Schiemann reaction (via benzenediazonium fluoroborate, Ar–N₂⁺BF₄⁻, followed by thermal decomposition)."
    },
    {
      q: "18. Which reagents convert benzenediazonium chloride into benzene?",
      a: "Hypophosphorous acid (H₃PO₂ + H₂O / Cu⁺) or Ethanol (CH₃CH₂OH)."
    },
    {
      q: "19. What color dye is formed when benzenediazonium chloride couples with phenol at pH 9–10?",
      a: "p-hydroxyazobenzene, which is an ORANGE dye."
    },
    {
      q: "20. What color dye is formed when benzenediazonium chloride couples with aniline at pH 4–5?",
      a: "p-aminoazobenzene, which is a YELLOW dye."
    },
    {
      q: "21. Why does direct nitration of aniline give a significant amount (47%) of meta-nitroaniline?",
      a: "Because in strong acid, aniline is protonated to anilinium ion (–NH₃⁺), which is meta-directing."
    },
    {
      q: "22. How is the activating effect of the –NH₂ group in aniline controlled during electrophilic substitution?",
      a: "By acetylation with acetic anhydride (Ac₂O) in pyridine to convert it to acetanilide (–NHCOCH₃)."
    },
    {
      q: "23. Why doesn't aniline undergo Friedel-Crafts alkylation or acylation?",
      a: "Aniline forms an acid-base complex with the Lewis acid catalyst (AlCl₃), deactivating the benzene ring."
    },
    {
      q: "24. What is the structure of the Zwitterion of sulphanilic acid?",
      a: "⁺H₃N–C₆H₄–SO₃⁻ (dipolar ion with protonated amino and deprotonated sulphonate)."
    },
    {
      q: "25. Why is Fe/HCl preferred over Sn/HCl for the reduction of nitrobenzene?",
      a: "FeCl₂ formed hydrolyses to regenerate HCl, requiring only a small initiating amount of acid."
    },
    {
      q: "26. What is the product when benzamide (C₆H₅CONH₂) is treated with Br₂ and NaOH?",
      a: "Aniline (C₆H₅NH₂), via Hofmann bromamide degradation (1 less carbon)."
    },
    {
      q: "27. What is the geometry and hybridisation of nitrogen in trimethylamine?",
      a: "sp³ hybridised, Trigonal Pyramidal geometry with C–N–C bond angle of 108°."
    },
    {
      q: "28. Can tertiary amines with three different alkyl groups be resolved into enantiomers at room temperature?",
      a: "No, because of rapid pyramidal umbrella inversion (activation energy ~25 kJ/mol)."
    },
    {
      q: "29. What product is obtained when benzenediazonium chloride is boiled with water?",
      a: "Phenol (C₆H₅OH), with evolution of N₂ gas and HCl."
    },
    {
      q: "30. What reagent converts nitrobenzene directly to aniline in one step?",
      a: "Fe / conc. HCl (or Sn / HCl, or H₂ / Pd)."
    }
  ],

  neetChecklist: [
    "Classify amines into 1°, 2°, 3° and quaternary ammonium salts correctly based on nitrogen substitution.",
    "Name primary, secondary, and tertiary amines following IUPAC nomenclature rules.",
    "Explain the sp³ hybridisation, pyramidal geometry, and rapid umbrella inversion of amines.",
    "Compare basicity using +I, -I, resonance, solvation (hydration), and steric hindrance.",
    "State the aqueous basicity order for methylamines ('213') and ethylamines ('231').",
    "Explain why aniline is a weaker base than ammonia and aliphatic amines (+R delocalization).",
    "Describe the Ortho Effect in substituted anilines causing reduced basicity.",
    "Master Gabriel phthalimide synthesis and explain why aromatic 1° amines cannot be prepared.",
    "Write the complete equation and stoichiometry for Hofmann bromamide degradation (1 less carbon).",
    "Identify products in reduction of nitro compounds, nitriles, and amides.",
    "Master the Carbylamine (isocyanide) reaction and recognize that only 1° amines respond.",
    "Explain how the Hinsberg test (C₆H₅SO₂Cl) differentiates 1°, 2°, and 3° amines.",
    "Predict products of primary, secondary, and tertiary amines with nitrous acid (HNO₂).",
    "Write the diazotisation reaction of aniline at 0–5 °C and explain in-situ HNO₂ generation.",
    "Explain the resonance stability of arenediazonium salts vs instability of alkyldiazonium salts.",
    "Master the Sandmeyer reaction (Cu₂Cl₂, Cu₂Br₂, CuCN) and compare with Gattermann (Cu powder).",
    "State the reagent for replacing –N₂⁺ with –I (aqueous KI, warm) without copper catalyst.",
    "Master the Balz-Schiemann reaction for preparing pure fluorobenzene (HBF₄, heat).",
    "Explain the reduction of diazonium salts to benzene using H₃PO₂ or CH₃CH₂OH.",
    "Describe azo coupling of diazonium salts with phenol (pH 9–10, orange) and aniline (pH 4–5, yellow).",
    "Explain the protection of aniline by acetylation to achieve monobromination or mononitration.",
    "Explain why aniline fails to undergo Friedel-Crafts alkylation and acylation."
  ],

  lastMinuteRevisionSheet: {
    title: "AMINES & DIAZONIUM SALTS — 30-SECOND MASTER REVISION SHEET",
    sections: [
      {
        heading: "1. Basicity Golden Rules",
        points: [
          "Gas Phase: 3° > 2° > 1° > NH₃ (Pure +I effect)",
          "Aqueous Methyl: 2° > 1° > 3° > NH₃ (Rule 213: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃)",
          "Aqueous Ethyl: 2° > 3° > 1° > NH₃ (Rule 231: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃)",
          "Aliphatic amines >> NH₃ > Aniline (pKb: Alkylamines ~3.3 < NH₃ 4.75 < Aniline 9.38)",
          "Ortho Effect: Ortho-substituted anilines are ALWAYS weaker bases than aniline!"
        ]
      },
      {
        heading: "2. Key Preparations",
        points: [
          "Gabriel Phthalimide: Phthalimide + KOH ⟶ RX ⟶ aq. NaOH ⟶ PURE 1° Aliphatic Amine (Ar–X fails!)",
          "Hofmann Bromamide: R–CONH₂ + Br₂ + 4 NaOH ⟶ R–NH₂ + Na₂CO₃ (Amine has 1 LESS carbon!)",
          "Nitro Reduction: Ar–NO₂ + Fe/HCl ⟶ Ar–NH₂ (FeCl₂ hydrolyses to regenerate HCl)"
        ]
      },
      {
        heading: "3. Distinction Tests",
        points: [
          "Carbylamine: 1° Amine + CHCl₃ + 3 alc. KOH, Δ ⟶ R–NC (foul smell). 2° & 3° fail!",
          "Hinsberg: C₆H₅SO₂Cl ⟶ 1° gives alkali-SOLUBLE sulphonamide; 2° gives alkali-INSOLUBLE; 3° NO reaction.",
          "HNO₂: 1° aliphatic ⟶ Alcohol + N₂↑; 1° aromatic ⟶ Ar–N₂⁺Cl⁻; 2° ⟶ Yellow oily N-nitrosamine."
        ]
      },
      {
        heading: "4. Diazonium Transformations (Ar–N₂⁺Cl⁻)",
        points: [
          "Diazotisation: Aniline + NaNO₂ + 2 HCl (0–5 °C) ⟶ Ar–N₂⁺Cl⁻ (T > 5 °C gives Phenol)",
          "Sandmeyer: Cu₂Cl₂/HCl ⟶ Ar–Cl; Cu₂Br₂/HBr ⟶ Ar–Br; CuCN/KCN ⟶ Ar–CN",
          "Gattermann: Cu powder + HCl ⟶ Ar–Cl; Cu powder + HBr ⟶ Ar–Br",
          "Iodination: Ar–N₂⁺Cl⁻ + KI, warm ⟶ Ar–I + N₂↑ (NO Cu needed!)",
          "Balz-Schiemann: Ar–N₂⁺Cl⁻ + HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓ ⟶ (Δ) ⟶ Ar–F + BF₃ + N₂↑",
          "Hydrolysis: Ar–N₂⁺Cl⁻ + H₂O, warm ⟶ Phenol + N₂↑",
          "Deamination: Ar–N₂⁺Cl⁻ + H₃PO₂ / CH₃CH₂OH ⟶ Benzene (Ar–H) + N₂↑",
          "Azo Coupling: + Phenol (pH 9–10) ⟶ Orange Dye; + Aniline (pH 4–5) ⟶ Yellow Dye"
        ]
      }
    ]
  }
};
