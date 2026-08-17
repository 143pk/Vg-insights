// Master Comparison Tables, Formula Sheet, Reaction Matrices, 24 NEET Traps & Prediction Engine for Chapter 19

export const HALOALKANES_TRAPS_AND_SHEET = {
  // 1. Core Orders & Formula Reference Bank
  formulaAndOrderBank: [
    {
      title: "S_N1 Reaction Rate Law",
      formula: "\\text{Rate} = k [\\text{R–X}]",
      meaning: "First-order unimolecular kinetics. Rate depends solely on alkyl halide concentration, completely independent of nucleophile concentration and strength."
    },
    {
      title: "S_N2 Reaction Rate Law",
      formula: "\\text{Rate} = k [\\text{R–X}] [\\text{Nu}^-]",
      meaning: "Second-order bimolecular kinetics. Rate is directly proportional to both substrate concentration and nucleophile concentration."
    },
    {
      title: "Substrate S_N1 Reactivity Order",
      formula: "\\text{Benzylic} \\approx \\text{Allylic} > 3^\\circ > 2^\\circ > 1^\\circ > \\text{CH}_3\\text{X}",
      meaning: "Directly governed by Carbocation Stability (Resonance > 3° Hyperconjugation > 2° > 1°)."
    },
    {
      title: "Substrate S_N2 Reactivity Order",
      formula: "\\text{CH}_3\\text{X} > 1^\\circ > 2^\\circ \\gg 3^\\circ \\text{ (3° unreactive due to steric block)}",
      meaning: "Directly governed by Steric Hindrance at the α-carbon during backside transition state attack."
    },
    {
      title: "Halide Leaving Group Ability Order",
      formula: "\\text{I}^- > \\text{Br}^- > \\text{Cl}^- \\gg \\text{F}^-",
      meaning: "Weakest base (I⁻, conjugate base of strongest acid HI) with the lowest bond enthalpy (C–I = 234 kJ/mol) is the best leaving group."
    },
    {
      title: "Dipole Moment Anomalous Order (NCERT)",
      formula: "\\text{CH}_3\\text{Cl } (1.860\\text{ D}) > \\text{CH}_3\\text{F } (1.847\\text{ D}) > \\text{CH}_3\\text{Br } (1.830\\text{ D}) > \\text{CH}_3\\text{I } (1.636\\text{ D})",
      meaning: "Dipole moment μ = q × d. Even though F has higher charge (q), C–Cl bond length (d) makes the product q × d maximum for CH₃Cl."
    },
    {
      title: "Boiling Point Trends",
      formula: "\\text{R–I} > \\text{R–Br} > \\text{R–Cl} > \\text{R–F} \\quad \\text{and} \\quad n\\text{-butyl} > \\text{isobutyl} > \\text{sec-butyl} > \\text{tert-butyl}",
      meaning: "Increases with molecular mass and van der Waals surface area; decreases with branching as spherical molecules have smaller surface area."
    }
  ],

  // 2. Eight Master Comparison Tables
  comparisonTables: {
    haloalkanesVsHaloarenes: {
      title: "Master Table 1: Haloalkanes (R–X) vs Haloarenes (Ar–X)",
      headers: ["Parameter", "Haloalkanes (R–X)", "Haloarenes (Ar–X)", "NEET Significance"],
      rows: [
        ["C–X Carbon Hybridisation", "sp³ (25% s-character)", "sp² (33.3% s-character)", "sp² carbon is more electronegative, holding bonding electrons tighter."],
        ["C–X Bond Character", "Pure single bond (no resonance)", "Partial double bond character (resonance)", "C–Cl bond in chlorobenzene (169 pm) is shorter and stronger than in CH₃Cl (178 pm)."],
        ["S_N1 Substitution Reactivity", "Readily occurs via stable R⁺", "Practically impossible (phenyl cation C₆H₅⁺ is extremely unstable)", "Chlorobenzene does NOT react with aqueous AgNO₃."],
        ["S_N2 Substitution Reactivity", "Fast for 1° / CH₃X (backside open)", "Impossible (π-electron cloud repels Nu⁻)", "Backside attack blocked by aromatic ring."],
        ["Reaction with aq. NaOH", "Hydrolyzes easily at room temp/mild heat", "Requires harsh conditions (Dow's: 623 K, 300 atm)", "Haloarenes require extreme heat/pressure or o/p-NO₂ groups."],
        ["Dipole Moment (Chlorobenzene vs Cyclohexyl chloride)", "Cyclohexyl chloride (μ = 1.94 D)", "Chlorobenzene (μ = 1.69 D)", "Chlorobenzene has lower μ due to sp² carbon pulling e⁻ back and partial double bond resonance opposing C–Cl dipole."]
      ]
    },

    sn1VsSn2Master: {
      title: "Master Table 2: Complete NCERT Comparison of S_N1 vs S_N2 Mechanisms",
      headers: ["Feature / Property", "S_N1 (Substitution Nucleophilic Unimolecular)", "S_N2 (Substitution Nucleophilic Bimolecular)"],
      rows: [
        ["Number of Steps", "Two-step mechanism (Ionization → Attack)", "One-step concerted mechanism (Simultaneous bond make/break)"],
        ["Rate Law & Order", "Rate = k [R–X] (First Order)", "Rate = k [R–X] [Nu⁻] (Second Order)"],
        ["Molecularity", "Unimolecular (1)", "Bimolecular (2)"],
        ["Reaction Intermediate", "Carbocation intermediate (Planar sp², 120°)", "No intermediate; Pentacoordinate Transition State [Nu···C···X]‡"],
        ["Substrate Reactivity Order", "3° > 2° > 1° > CH₃X (Governed by Carbocation stability)", "CH₃X > 1° > 2° >> 3° (Governed by Steric Hindrance)"],
        ["Nucleophile Requirement", "Weak neutral nucleophile (H₂O, ROH); [Nu] does not affect rate", "Strong charged nucleophile (OH⁻, CN⁻, I⁻); High [Nu] accelerates rate"],
        ["Solvent Preference", "Polar Protic Solvent (H₂O, ROH, HCOOH) to stabilize R⁺ and X⁻", "Polar Aprotic Solvent (DMSO, DMF, Acetone) to keep Nu⁻ naked/unsolvated"],
        ["Stereochemical Result", "Racemisation (d,l pair) with partial inversion", "100% Inversion of Configuration (Walden Inversion)"],
        ["Carbocation Rearrangement", "Frequent (1,2-Hydride / 1,2-Methyl shifts to more stable 3° C⁺)", "NEVER occurs (no intermediate is formed)"],
        ["Energy Profile", "Two energy peaks with an intermediate valley (TS₁ is highest RDS)", "Single energy peak with a single transition state [‡]"],
        ["Effect of Doubling [Nu⁻]", "Reaction rate remains UNCHANGED", "Reaction rate is DOUBLED"],
        ["Effect of Doubling [R–X]", "Reaction rate is DOUBLED", "Reaction rate is DOUBLED"]
      ]
    },

    primaryVsSecondaryVsTertiary: {
      title: "Master Table 3: Primary (1°) vs Secondary (2°) vs Tertiary (3°) Halides",
      headers: ["Property / Reaction", "Primary (1°) Alkyl Halide", "Secondary (2°) Alkyl Halide", "Tertiary (3°) Alkyl Halide"],
      rows: [
        ["Typical Example", "CH₃CH₂Br (Bromoethane)", "(CH₃)₂CHBr (2-Bromopropane)", "(CH₃)₃CBr (tert-Butyl bromide)"],
        ["Preferred S_N Route", "Exclusively S_N2", "Borderline (S_N1 in protic / S_N2 in aprotic)", "Exclusively S_N1"],
        ["Elimination (E2) with Base", "Low yield of alkene (Substitution dominates with unhindered Nu)", "Moderate alkene yield (Saytzeff)", "Exclusively Elimination (Alkene 100% with alc. KOH or alkoxide)"],
        ["Lucas Test Reaction", "No cloudiness at room temperature (clear solution)", "Cloudiness appears in ~5 minutes", "Immediate cloudiness / turbidity formed"],
        ["Wurtz Coupling", "Gives excellent yield of symmetrical alkane", "Lower yield (alkene by-product)", "Extremely poor yield (Elimination dominates)"]
      ]
    },

    kcnVsAgcn: {
      title: "Master Table 4: Ambidentate Cyanide Nucleophile — KCN vs AgCN",
      headers: ["Reagent", "Bonding Nature", "Attacking Atom", "Major Product", "Underlying Chemical Reason"],
      rows: [
        ["Potassium Cyanide (KCN)", "Predominantly IONIC (K⁺ [:C≡N:]⁻)", "Carbon atom (:C⁻)", "Alkyl Cyanide / Alkane Nitrile (R–C≡N)", "Because C–C bond is stronger (347 kJ/mol) and more stable than C–N bond (305 kJ/mol)."],
        ["Silver Cyanide (AgCN)", "Predominantly COVALENT (Ag–C≡N:)", "Nitrogen atom (:N)", "Alkyl Isocyanide / Isonitrile (R–N≡C)", "Silver is covalently bonded to carbon, so carbon's lone pair is unavailable; only nitrogen's lone pair attacks."]
      ]
    },

    kno2VsAgno2: {
      title: "Master Table 5: Ambidentate Nitrite Nucleophile — KNO₂ vs AgNO₂",
      headers: ["Reagent", "Bonding Nature", "Attacking Atom", "Major Product", "Underlying Chemical Reason"],
      rows: [
        ["Potassium Nitrite (KNO₂)", "Predominantly IONIC (K⁺ [⁻O–N=O])", "Oxygen atom (O⁻)", "Alkyl Nitrite (R–O–N=O)", "Negative charge resides on the more electronegative oxygen atom in the ionic lattice."],
        ["Silver Nitrite (AgNO₂)", "Predominantly COVALENT (Ag–O–N=O)", "Nitrogen atom (:N)", "Nitroalkane (R–NO₂)", "Oxygen is bonded covalently to silver; lone pair on nitrogen atom attacks the alkyl carbon."]
      ]
    },

    aqueousKohVsAlcoholicKoh: {
      title: "Master Table 6: Aqueous KOH vs Alcoholic KOH",
      headers: ["Reagent", "Active Attacking Species", "Primary Role", "Reaction Pathway", "Major Product"],
      rows: [
        ["Aqueous KOH", "Hydrated Hydroxide ion (OH⁻ · xH₂O)", "Strong Nucleophile (Weak Base due to hydration)", "Nucleophilic Substitution (S_N1/S_N2)", "Alcohol (R–OH)"],
        ["Alcoholic KOH (KOH in C₂H₅OH)", "Alkoxide ion (C₂H₅O⁻) in equilibrium", "Very Strong Base (Unhydrated, powerful proton abstractor)", "β-Dehydrohalogenation (E2)", "Alkene (Saytzeff major)"]
      ]
    },

    sandmeyerVsGattermann: {
      title: "Master Table 7: Sandmeyer Reaction vs Gattermann Reaction",
      headers: ["Parameter", "Sandmeyer Reaction", "Gattermann Reaction", "NEET Distinction"],
      rows: [
        ["Reagents for Ar–Cl", "Benzenediazonium chloride + Cu₂Cl₂ / HCl", "Benzenediazonium chloride + Cu powder / HCl", "Sandmeyer uses cuprous halide salt; Gattermann uses metallic copper powder."],
        ["Reagents for Ar–Br", "Benzenediazonium chloride + Cu₂Br₂ / HBr", "Benzenediazonium chloride + Cu powder / HBr", "Sandmeyer yields are significantly higher (~70-80%) than Gattermann (~50-60%)."],
        ["Cyanation (Ar–CN)", "CuCN / KCN (Excellent yield)", "Not typically applicable with Cu powder", "Sandmeyer is the standard route to Benzonitrile."]
      ]
    },

    markovnikovVsAntiMarkovnikov: {
      title: "Master Table 8: Markovnikov vs Anti-Markovnikov (Peroxide Effect) Addition",
      headers: ["Parameter", "Markovnikov Addition (No Peroxide)", "Anti-Markovnikov Addition (with Peroxide)", "NEET Traps"],
      rows: [
        ["Applicable Reagents", "HCl, HBr, HI, H₂O/H⁺", "HBr ONLY! (HCl and HI DO NOT show peroxide effect)", "Peroxide effect fails with HCl and HI due to endothermic propagation steps."],
        ["Reaction Mechanism", "Electrophilic Addition via Carbocation intermediate", "Free Radical Chain Addition via Carbon Free Radical", "Carbocation rearrangements can occur in Markovnikov; radical additions do not rearrange."],
        ["Major Product with Propene", "CH₃–CH(Br)–CH₃ (2-Bromopropane)", "CH₃–CH₂–CH₂–Br (1-Bromopropane)", "Remember: Peroxide + HCl STILL gives 2-Chloropropane (Markovnikov)!"]
      ]
    }
  },

  // 3. Complete NEET Reaction Condition Master Matrix
  reactionMatrix: [
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "Aqueous KOH / NaOH",
      condition: "Warm aqueous solution",
      majorProduct: "R–OH (Alcohol)",
      reactionType: "Nucleophilic Substitution (S_N)",
      neetTrap: "Do not use alcoholic KOH if alcohol is desired."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "Alcoholic KOH",
      condition: "Heat / Reflux",
      majorProduct: "Alkene (Saytzeff more substituted)",
      reactionType: "β-Elimination / Dehydrohalogenation (E2)",
      neetTrap: "Saytzeff rule dictates loss of H from β-carbon with fewer hydrogens."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "KCN in aq. ethanol",
      condition: "Reflux",
      majorProduct: "R–CN (Alkyl Cyanide / Nitrile)",
      reactionType: "Nucleophilic Substitution",
      neetTrap: "Adds ONE extra carbon atom to the carbon chain (Chain ascent)."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "AgCN",
      condition: "Reflux in aq. ethanol",
      majorProduct: "R–NC (Alkyl Isocyanide / Isonitrile)",
      reactionType: "Nucleophilic Substitution",
      neetTrap: "Nitrogen attaches to alkyl group; foul-smelling carbylamine."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "KNO₂",
      condition: "Aq. ethanol",
      majorProduct: "R–O–N=O (Alkyl Nitrite)",
      reactionType: "Nucleophilic Substitution",
      neetTrap: "Oxygen attaches to carbon."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "AgNO₂",
      condition: "Aq. ethanol",
      majorProduct: "R–NO₂ (Nitroalkane)",
      reactionType: "Nucleophilic Substitution",
      neetTrap: "Nitrogen attaches to carbon."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "Excess alcoholic NH₃",
      condition: "Sealed tube, 373 K",
      majorProduct: "R–NH₂ (1° Amine)",
      reactionType: "Ammonolysis (S_N2)",
      neetTrap: "If excess R–X is used instead, quaternary ammonium salt [R₄N]⁺X⁻ is major."
    },
    {
      substrate: "R–X (1° Alkyl Halide)",
      reagent: "R'ONa (Sodium Alkoxide)",
      condition: "Dry ether",
      majorProduct: "R–O–R' (Ether)",
      reactionType: "Williamson Ether Synthesis (S_N2)",
      neetTrap: "If 3° R–X is used with R'ONa, 100% Alkene is formed (Elimination)."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "2 Na (Sodium Metal)",
      condition: "Dry Ether",
      majorProduct: "R–R (Symmetrical Alkane)",
      reactionType: "Wurtz Reaction",
      neetTrap: "Cannot prepare methane; unsymmetrical alkanes give complex mixtures."
    },
    {
      substrate: "R–X (Alkyl Halide)",
      reagent: "Mg (Magnesium Ribbon)",
      condition: "Dry Ether (Anhydrous)",
      majorProduct: "R–MgX (Grignard Reagent)",
      reactionType: "Organometallic Formation",
      neetTrap: "Traces of moisture destroy it instantly into R–H + Mg(OH)X."
    },
    {
      substrate: "Ar–N₂⁺Cl⁻ (Diazonium)",
      reagent: "Cu₂Cl₂ / HCl or Cu₂Br₂ / HBr",
      condition: "Room temp",
      majorProduct: "Ar–Cl or Ar–Br + N₂↑",
      reactionType: "Sandmeyer Reaction",
      neetTrap: "Cuprous salts are mandatory for high yield."
    },
    {
      substrate: "Ar–N₂⁺Cl⁻ (Diazonium)",
      reagent: "HBF₄, then heat (Δ)",
      condition: "Thermal decomposition",
      majorProduct: "Ar–F + BF₃ + N₂↑",
      reactionType: "Balz-Schiemann Reaction",
      neetTrap: "Only reliable route to prepare fluorobenzene from diazonium salt."
    },
    {
      substrate: "Ar–N₂⁺Cl⁻ (Diazonium)",
      reagent: "Aqueous KI",
      condition: "Gentle warming",
      majorProduct: "Ar–I + KCl + N₂↑",
      reactionType: "Direct Nucleophilic Substitution",
      neetTrap: "No Cu catalyst is needed for iodobenzene synthesis."
    },
    {
      substrate: "Ar–X + R–X",
      reagent: "2 Na",
      condition: "Dry Ether",
      majorProduct: "Ar–R (Alkylarene)",
      reactionType: "Wurtz-Fittig Reaction",
      neetTrap: "Couples aryl and alkyl halides together."
    }
  ],

  // 4. 24 Detailed NEET Common Traps
  commonTraps: [
    {
      id: 1,
      title: "KCN vs AgCN Ambidentate Divergence",
      wrongThinking: "Both KCN and AgCN contain cyanide groups, so both will attach to alkyl halide to form alkyl cyanides (R–CN).",
      correctConcept: "KCN is ionic [K⁺ (:C≡N:⁻)], where the carbon has a negative charge and forms a stronger C–C bond (R–CN). AgCN is covalent (Ag–C≡N:), where carbon's electrons are engaged in bonding with Ag, so only the nitrogen lone pair is available to attack, giving Alkyl Isocyanide (R–NC).",
      neetTip: "KCN gives Nitrile (R–CN); AgCN gives Isocyanide (R–NC)."
    },
    {
      id: 2,
      title: "KNO₂ vs AgNO₂ Ambidentate Divergence",
      wrongThinking: "KNO₂ and AgNO₂ both yield nitroalkanes (R–NO₂).",
      correctConcept: "KNO₂ is ionic; attack occurs through the negatively charged oxygen atom, yielding Alkyl Nitrite (R–O–N=O). AgNO₂ is covalent; attack occurs through nitrogen's lone pair, yielding Nitroalkane (R–NO₂).",
      neetTip: "KNO₂ → Alkyl Nitrite (R–ONO); AgNO₂ → Nitroalkane (R–NO₂)."
    },
    {
      id: 3,
      title: "Aqueous KOH vs Alcoholic KOH",
      wrongThinking: "Both contain hydroxide ions (OH⁻), so both will replace halogen with –OH to give alcohols.",
      correctConcept: "Aqueous KOH provides hydrated OH⁻ ions, which act as good nucleophiles and carry out nucleophilic substitution (giving Alcohols). Alcoholic KOH contains ethoxide ions (C₂H₅O⁻), which are much stronger bases and abstract a β-proton, carrying out E2 β-elimination (giving Alkenes).",
      neetTip: "Aq. KOH = Substitution (Alcohol); Alc. KOH + Δ = Elimination (Alkene)."
    },
    {
      id: 4,
      title: "Peroxide Effect Scope (HBr ONLY)",
      wrongThinking: "The peroxide effect (Anti-Markovnikov addition) works with all hydrogen halides: HF, HCl, HBr, and HI.",
      correctConcept: "The peroxide effect works EXCLUSIVELY with HBr. For HCl, the H–Cl bond is too strong (430.5 kJ/mol), making step 1 of propagation endothermic. For HI, the H–I bond is weak, but iodine radicals rapidly recombine to form I₂ instead of adding to the double bond, making step 2 of propagation endothermic.",
      neetTip: "Propene + HCl + Peroxide STILL gives 2-Chloropropane (Markovnikov)!"
    },
    {
      id: 5,
      title: "Halogen Atom Directing vs Deactivating Effect on Benzene",
      wrongThinking: "Because halogens are ortho/para directing, they must be activating like other o/p-directing groups (–OH, –NH₂).",
      correctConcept: "Halogens are DEACTIVATING due to their powerful –I (inductive) effect pulling electrons from the ring, but ORTHO/PARA DIRECTING due to +R (resonance) lone-pair donation stabilizing the carbocation specifically at ortho and para positions.",
      neetTip: "Halogen on benzene is the ONLY common group that is DEACTIVATING yet ORTHO/PARA DIRECTING."
    },
    {
      id: 6,
      title: "Chlorobenzene Reactivity towards Nucleophiles",
      wrongThinking: "Chlorobenzene has a polar C–Cl bond, so it will readily substitute with aqueous NaOH like chloroethane.",
      correctConcept: "Chlorobenzene is extremely inert to nucleophilic substitution due to: (1) Partial double bond character (resonance, 169 pm), (2) sp² carbon holding electrons tighter, (3) Instability of phenyl cation (no S_N1), and (4) Repulsion from aromatic π-cloud (no S_N2). It requires 623 K and 300 atm (Dow's Process) to react.",
      neetTip: "Chlorobenzene does NOT give a white precipitate with aqueous AgNO₃ solution."
    },
    {
      id: 7,
      title: "Benzylic Halide vs Aryl Halide Distinction",
      wrongThinking: "Benzyl chloride (C₆H₅CH₂Cl) and Chlorobenzene (C₆H₅Cl) both have benzene rings, so both are inert to nucleophilic substitution.",
      correctConcept: "In Chlorobenzene, –Cl is on an sp² ring carbon (inert). In Benzyl chloride, –Cl is on an sp³ side-chain carbon; upon ionization it forms the highly resonance-stabilized benzyl carbocation (C₆H₅CH₂⁺). Benzyl chloride undergoes rapid S_N1 and S_N2 reactions and readily precipitates AgCl with AgNO₃!",
      neetTip: "C₆H₅CH₂Cl gives white ppt with AgNO₃; C₆H₅Cl gives no ppt."
    },
    {
      id: 8,
      title: "Allylic Halide vs Vinylic Halide Distinction",
      wrongThinking: "Vinyl chloride (CH₂=CH–Cl) and Allyl chloride (CH₂=CH–CH₂–Cl) both contain double bonds and are equally reactive.",
      correctConcept: "In Vinyl chloride, –Cl is on an sp² carbon; resonance gives partial double bond character (inert). In Allyl chloride, –Cl is on an sp³ carbon; ionization gives the stable allylic carbocation (CH₂=CH–CH₂⁺ ↔ ⁺CH₂–CH=CH₂), making it exceptionally reactive in S_N1.",
      neetTip: "Allylic = highly reactive in S_N1; Vinylic = inert."
    },
    {
      id: 9,
      title: "Leaving Group Ability: Bond Enthalpy vs Electronegativity",
      wrongThinking: "Fluorine is the most electronegative, so C–F is the most polarized and therefore F⁻ should be the best leaving group.",
      correctConcept: "Leaving group ability depends on C–X bond weakness and stability of the departing anion. C–I bond is the weakest (234 kJ/mol) and I⁻ is the largest, most polarizable, and weakest conjugate base of the superacid HI. Hence I⁻ is by far the best leaving group: R–I > R–Br > R–Cl >> R–F.",
      neetTip: "Leaving group ability order: I⁻ > Br⁻ > Cl⁻ >> F⁻."
    },
    {
      id: 10,
      title: "Carbocation Rearrangement in S_N1",
      wrongThinking: "Neopentyl bromide (CH₃)₃C–CH₂–Br will undergo substitution to form neopentyl alcohol (CH₃)₃C–CH₂–OH as the major product.",
      correctConcept: "Ionization of neopentyl bromide generates a 1° carbocation (CH₃)₃C–CH₂⁺, which immediately undergoes a 1,2-methyl shift to form the highly stable 3° carbocation (CH₃)₂C⁺–CH₂CH₃. Nucleophile then attacks to give 2-methylbutan-2-ol as the major product!",
      neetTip: "Whenever an S_N1 carbocation is formed adjacent to a 3° or 4° carbon, expect 1,2-hydride or 1,2-methyl rearrangement."
    },
    {
      id: 11,
      title: "Stereochemistry of S_N1 (Not Pure 50:50 Racemisation)",
      wrongThinking: "S_N1 always produces an exact 50:50 racemic mixture with zero net optical activity.",
      correctConcept: "While the planar carbocation is symmetrical, the departed leaving group often shields the front face (forming an intimate ion pair), making backside attack slightly preferred. Hence, S_N1 results in racemisation accompanied by partial (excess) inversion.",
      neetTip: "NCERT note: S_N1 gives predominantly racemisation with partial inversion."
    },
    {
      id: 12,
      title: "Williamson Ether Synthesis with 3° Alkyl Halide",
      wrongThinking: "Mixing sodium ethoxide (C₂H₅ONa) with tert-butyl bromide ((CH₃)₃CBr) will synthesize tert-butyl ethyl ether.",
      correctConcept: "Alkoxides (RO⁻) are powerful bases as well as nucleophiles. With 3° alkyl halides, steric hindrance blocks S_N2 backside attack, and the alkoxide causes 100% E2 elimination to yield 2-Methylpropene (Isobutylene) and ethanol.",
      neetTip: "To prepare tert-butyl ethyl ether, use (CH₃)₃C–O⁻Na⁺ (3° alkoxide) + CH₃CH₂–Br (1° alkyl halide)!"
    },
    {
      id: 13,
      title: "Wurtz Reaction Limitations",
      wrongThinking: "Wurtz reaction can be used to synthesize propane with high yield from CH₃Cl and C₂H₅Cl.",
      correctConcept: "Using a mixture of two different alkyl halides (CH₃Cl + C₂H₅Cl) yields a mixture of THREE alkanes: Ethane (CH₃–CH₃), Butane (C₂H₅–C₂H₅), and Propane (CH₃–C₂H₅). Their boiling points are close, making fractional separation extremely inefficient.",
      neetTip: "Wurtz reaction is synthetic only for symmetrical alkanes (even carbon count)."
    },
    {
      id: 14,
      title: "Grignard Reagent Moisture Sensitivity",
      wrongThinking: "Grignard reagents can be prepared in wet or standard alcohol solvents.",
      correctConcept: "The carbon in R–MgX is strongly carbanionic (R^{\\delta-}) and acts as a powerful base. It reacts instantaneously with any proton source (water, alcohol, amine, carboxylic acid) to produce an alkane: R–MgX + H₂O → R–H + Mg(OH)X. Hence, strictly anhydrous dry ether is required.",
      neetTip: "RMgX + D₂O → R–D (Deuterated alkane)."
    },
    {
      id: 15,
      title: "Sandmeyer vs Gattermann Reagents",
      wrongThinking: "Sandmeyer and Gattermann reactions use the same reagents and give the same yields.",
      correctConcept: "Sandmeyer uses cuprous halide salts (Cu₂Cl₂/HCl, Cu₂Br₂/HBr, CuCN/KCN) giving ~70-80% yield. Gattermann uses metallic copper powder with halogen acids (Cu/HCl, Cu/HBr) and gives lower yields (~50-60%).",
      neetTip: "Cu₂X₂ = Sandmeyer; Cu powder = Gattermann."
    },
    {
      id: 16,
      title: "Preparation of Iodoarenes from Diazonium Salts",
      wrongThinking: "Preparation of iodobenzene from diazonium salt requires cuprous iodide (Cu₂I₂) catalyst in a Sandmeyer reaction.",
      correctConcept: "No copper catalyst is required! Benzenediazonium chloride simply reacts with aqueous potassium iodide (KI) with gentle warming to yield iodobenzene + N₂↑ + KCl.",
      neetTip: "Ar–N₂⁺Cl⁻ + KI / warm → Ar–I (No Cu needed)."
    },
    {
      id: 17,
      title: "Balz-Schiemann Reaction Exclusivity",
      wrongThinking: "Aryl fluorides can be prepared by direct fluorination of benzene with F₂ or by heating diazonium salt with HF.",
      correctConcept: "Direct fluorination is violently explosive, and HF gives poor results. Balz-Schiemann involves isolating the stable precipitate of benzenediazonium fluoroborate (Ar–N₂⁺BF₄⁻) followed by controlled dry thermal decomposition to yield pure Ar–F + BF₃ + N₂↑.",
      neetTip: "Ar–N₂⁺BF₄⁻ xrightarrow{\\Delta} Ar–F + BF₃ + N₂↑ (Balz-Schiemann)."
    },
    {
      id: 18,
      title: "Saytzeff vs Hofmann Regioselectivity",
      wrongThinking: "Dehydrohalogenation of alkyl halides always gives the Saytzeff (more substituted) alkene under every condition.",
      correctConcept: "Saytzeff product is major with normal unhindered bases (alc. KOH). However, if a bulky base (like potassium tert-butoxide, (CH₃)₃CO⁻K⁺) or alkyl fluorides (poor leaving group) are used, the less substituted Hofmann alkene becomes the major product due to steric hindrance.",
      neetTip: "Alc. KOH → Saytzeff; (CH₃)₃CO⁻K⁺ → Hofmann."
    },
    {
      id: 19,
      title: "Dipole Moment of Chlorobenzene vs Cyclohexyl Chloride",
      wrongThinking: "Chlorobenzene has more double bonds, so it should have a higher dipole moment than cyclohexyl chloride.",
      correctConcept: "Cyclohexyl chloride has μ = 1.94 D, whereas Chlorobenzene has μ = 1.69 D (lower!). This is because: (1) sp² carbon in chlorobenzene is more electronegative and pulls σ-electrons towards the ring (opposing C–Cl dipole), and (2) +R resonance causes delocalisation of chlorine lone pair into the ring, creating a dipole in the opposite direction.",
      neetTip: "μ of Cyclohexyl chloride > μ of Chlorobenzene."
    },
    {
      id: 20,
      title: "Effect of Nitro Groups on Chlorobenzene S_NAr (Meta Ineffective)",
      wrongThinking: "A nitro group (–NO₂) at the meta position activates chlorobenzene towards nucleophilic substitution as effectively as ortho and para positions.",
      correctConcept: "The carbanion intermediate (Meisenheimer complex) generated during S_NAr places negative charge exclusively on ortho and para carbons. Only when –NO₂ is at ortho/para positions can the negative charge be delocalized into the nitro group's oxygen atoms. At the meta position, no resonance structure places negative charge on the carbon bearing –NO₂.",
      neetTip: "o/p-Nitrochlorobenzene is activated; m-nitrochlorobenzene shows negligible resonance activation."
    },
    {
      id: 21,
      title: "Chloroform Storage and Phosgene Formation",
      wrongThinking: "Chloroform is safe to store in clear glass bottles exposed to light.",
      correctConcept: "In the presence of light and atmospheric oxygen, chloroform is slowly oxidized into lethal, suffocating Phosgene gas (Carbonyl chloride, COCl₂): 2 CHCl₃ + O₂ xrightarrow{hν} 2 COCl₂ + 2 HCl. To prevent this, it is stored in dark brown bottles filled to the brim (no air space) with 1% ethanol added (converts phosgene to non-toxic diethyl carbonate).",
      neetTip: "Dark bottle + 1% ethanol converts COCl₂ → (C₂H₅O)₂CO."
    },
    {
      id: 22,
      title: "Iodoform Antiseptic Action Mechanism",
      wrongThinking: "The antiseptic property of iodoform (CHI₃) is due to the iodoform molecule itself.",
      correctConcept: "According to NCERT, iodoform was used as an antiseptic, but its antiseptic action is due to the slow liberation of FREE IODINE and NOT due to iodoform itself. Because of its objectionable foul smell, it has been replaced by other iodine-containing formulations.",
      neetTip: "Antiseptic action is due to liberation of free I₂."
    },
    {
      id: 23,
      title: "Pyrene (CCl₄) Fire Extinguisher Hazard",
      wrongThinking: "Carbon tetrachloride is completely non-hazardous when sprayed onto open flames.",
      correctConcept: "While CCl₄ is non-flammable and smothers flames (trade name Pyrene), at high flame temperatures in the presence of steam/water vapors, it hydrolyzes to form deadly phosgene gas (COCl₂): CCl₄ + H₂O xrightarrow{\\Delta} COCl₂ + 2 HCl.",
      neetTip: "Pyrene + steam/heat → Toxic Phosgene (COCl₂)."
    },
    {
      id: 24,
      title: "Freon-12 Ozone Depletion Mechanism",
      wrongThinking: "Freons directly oxidize ozone molecules via simple molecular reactions.",
      correctConcept: "Freons (like CF₂Cl₂) diffuse into the stratosphere where solar UV radiation breaks the C–Cl bond to generate Chlorine Free Radicals (Cl·). One chlorine radical catalytically destroys up to 100,000 ozone molecules through a free radical chain reaction (Cl· + O₃ → ClO· + O₂).",
      neetTip: "Ozone depletion is mediated by chlorine free radicals (Cl·)."
    }
  ],

  // 5. Fifteen Reaction Prediction Engine Cases
  reactionPredictionCases: [
    {
      id: 1,
      reactant: "CH₃–CH₂–CH₂–Br",
      reagent: "KCN (aq. alc.)",
      predictedProduct: "CH₃–CH₂–CH₂–CN (Butanenitrile / Butyronitrile)",
      reactionType: "S_N2 Nucleophilic Substitution",
      mechanismReason: "KCN is ionic; cyanide ion attacks via carbon forming a stable C–C bond with 1° alkyl halide."
    },
    {
      id: 2,
      reactant: "CH₃–CH₂–CH₂–Br",
      reagent: "AgCN",
      predictedProduct: "CH₃–CH₂–CH₂–NC (Propyl isocyanide / Propyl carbylamine)",
      reactionType: "S_N2 Nucleophilic Substitution",
      mechanismReason: "AgCN is covalent; carbon is bonded to Ag, so nitrogen lone pair attacks to give isocyanide."
    },
    {
      id: 3,
      reactant: "(CH₃)₃C–Br (tert-Butyl bromide)",
      reagent: "Aqueous KOH",
      predictedProduct: "(CH₃)₃C–OH (2-Methylpropan-2-ol / tert-Butyl alcohol)",
      reactionType: "S_N1 Nucleophilic Substitution",
      mechanismReason: "3° alkyl halide readily ionizes in aqueous polar protic medium to form stable 3° carbocation, followed by fast attack of H₂O/OH⁻."
    },
    {
      id: 4,
      reactant: "(CH₃)₃C–Br (tert-Butyl bromide)",
      reagent: "Alcoholic KOH / Heat (Δ)",
      predictedProduct: "CH₂=C(CH₃)₂ (2-Methylpropene / Isobutylene)",
      reactionType: "E2 β-Elimination",
      mechanismReason: "Strong ethoxide base abstracts β-hydrogen from 3° substrate, causing 100% dehydrohalogenation."
    },
    {
      id: 5,
      reactant: "CH₃–CH(Br)–CH₂–CH₃ (2-Bromobutane)",
      reagent: "Alcoholic KOH / Heat (Δ)",
      predictedProduct: "CH₃–CH=CH–CH₃ (But-2-ene, 80% Major) + CH₃–CH₂–CH=CH₂ (But-1-ene, 20% Minor)",
      reactionType: "E2 Elimination (Saytzeff Rule)",
      mechanismReason: "Saytzeff rule: Proton is lost from the β-carbon having fewer hydrogens (C3), giving the more stable, more substituted alkene."
    },
    {
      id: 6,
      reactant: "CH₃–CH=CH₂ (Propene)",
      reagent: "HBr + Benzoyl Peroxide ((C₆H₅CO)₂O₂)",
      predictedProduct: "CH₃–CH₂–CH₂–Br (1-Bromopropane)",
      reactionType: "Free Radical Addition (Kharasch / Anti-Markovnikov)",
      mechanismReason: "Br· radical adds first to terminal carbon to generate more stable 2° carbon free radical (CH₃–ĊH–CH₂Br)."
    },
    {
      id: 7,
      reactant: "CH₃–CH=CH₂ (Propene)",
      reagent: "HCl + Benzoyl Peroxide",
      predictedProduct: "CH₃–CH(Cl)–CH₃ (2-Chloropropane)",
      reactionType: "Electrophilic Addition (Markovnikov)",
      mechanismReason: "Peroxide effect FAILS for HCl because H–Cl bond is too strong for free-radical chain propagation; proceeds via standard Markovnikov 2° carbocation."
    },
    {
      id: 8,
      reactant: "CH₃–CH₂–Cl",
      reagent: "NaI in Dry Acetone (Finkelstein)",
      predictedProduct: "CH₃–CH₂–I (Iodoethane) + NaCl↓ (precipitate)",
      reactionType: "S_N2 Halogen Exchange",
      mechanismReason: "NaCl precipitates in dry acetone, driving the equilibrium completely forward according to Le Chatelier's principle."
    },
    {
      id: 9,
      reactant: "CH₃–Br",
      reagent: "AgF (Swarts Reaction)",
      predictedProduct: "CH₃–F (Fluoromethane) + AgBr↓",
      reactionType: "Halogen Exchange",
      mechanismReason: "Heavy metal fluoride exchanges fluorine for bromide; the only safe and direct method to prepare pure alkyl fluorides."
    },
    {
      id: 10,
      reactant: "(CH₃)₃C–O⁻Na⁺ (Sodium tert-butoxide) + CH₃–Br",
      reagent: "Dry Ether",
      predictedProduct: "(CH₃)₃C–O–CH₃ (tert-Butyl methyl ether)",
      reactionType: "Williamson Ether Synthesis (S_N2)",
      mechanismReason: "Methyl halide has zero steric hindrance; alkoxide easily attacks backside to yield ether."
    },
    {
      id: 11,
      reactant: "(CH₃)₃C–Br + CH₃–O⁻Na⁺ (Sodium methoxide)",
      reagent: "Methanol",
      predictedProduct: "CH₂=C(CH₃)₂ (2-Methylpropene) + CH₃OH + NaBr",
      reactionType: "E2 Elimination (Not substitution!)",
      mechanismReason: "3° alkyl halide undergoes 100% elimination with strong alkoxide base; no ether is formed."
    },
    {
      id: 12,
      reactant: "C₆H₅–N₂⁺Cl⁻ (Benzenediazonium chloride)",
      reagent: "Cu₂Cl₂ / HCl (Sandmeyer)",
      predictedProduct: "C₆H₅–Cl (Chlorobenzene) + N₂↑",
      reactionType: "Sandmeyer Substitution",
      mechanismReason: "Cuprous chloride catalyzes replacement of diazonium group by chlorine with excellent yield."
    },
    {
      id: 13,
      reactant: "C₆H₅–N₂⁺Cl⁻ (Benzenediazonium chloride)",
      reagent: "HBF₄, then heat (Δ) (Balz-Schiemann)",
      predictedProduct: "C₆H₅–F (Fluorobenzene) + BF₃ + N₂↑",
      reactionType: "Balz-Schiemann Thermal Decomposition",
      mechanismReason: "Benzenediazonium fluoroborate precipitate decomposes on heating to yield pure fluorobenzene."
    },
    {
      id: 14,
      reactant: "C₆H₅–Cl (Chlorobenzene)",
      reagent: "CH₃COCl + anhydrous AlCl₃",
      predictedProduct: "4-Chloroacetophenone (p-isomer, Major) + 2-Chloroacetophenone (o-isomer, Minor)",
      reactionType: "Friedel-Crafts Acylation (Electrophilic Aromatic Substitution)",
      mechanismReason: "Chlorine directs incoming acetyl cation (CH₃CO⁺) to ortho and para positions; para isomer dominates due to minimal steric crowding."
    },
    {
      id: 15,
      reactant: "2 C₆H₅–Cl + 2 Na",
      reagent: "Dry Ether (Fittig Reaction)",
      predictedProduct: "C₆H₅–C₆H₅ (Diphenyl / Biphenyl) + 2 NaCl",
      reactionType: "Fittig Biaryl Coupling",
      mechanismReason: "Two aryl halide molecules couple together in presence of sodium in dry ether to yield biphenyl."
    }
  ],

  // 6. Ten Key Organic Conversions
  organicConversions: [
    {
      conversion: "1. Propene to Propan-1-ol",
      steps: [
        "Step 1: CH₃–CH=CH₂ + HBr xrightarrow{Peroxide} CH₃–CH₂–CH₂–Br (1-Bromopropane via Anti-Markovnikov addition).",
        "Step 2: CH₃–CH₂–CH₂–Br + aq. KOH xrightarrow{\\Delta} CH₃–CH₂–CH₂–OH (Propan-1-ol via S_N2 substitution)."
      ]
    },
    {
      conversion: "2. Ethanol to But-1-yne",
      steps: [
        "Step 1: CH₃CH₂OH + SOCl₂ xrightarrow{Pyridine} CH₃CH₂Cl + SO₂↑ + HCl↑.",
        "Step 2: HC≡CH + NaNH₂ → HC≡C⁻Na⁺ (Sodium acetylide).",
        "Step 3: CH₃CH₂Cl + HC≡C⁻Na⁺ → CH₃–CH₂–C≡CH (But-1-yne) + NaCl."
      ]
    },
    {
      conversion: "3. 1-Bromopropane to 2-Bromopropane",
      steps: [
        "Step 1: CH₃–CH₂–CH₂–Br + alc. KOH xrightarrow{\\Delta} CH₃–CH=CH₂ (Propene via E2 dehydrohalogenation).",
        "Step 2: CH₃–CH=CH₂ + HBr → CH₃–CH(Br)–CH₃ (2-Bromopropane via Markovnikov addition)."
      ]
    },
    {
      conversion: "4. Toluene to Benzyl Alcohol",
      steps: [
        "Step 1: C₆H₅–CH₃ + Cl₂ xrightarrow{h\\nu / \\Delta} C₆H₅–CH₂Cl (Benzyl chloride via free-radical side-chain chlorination).",
        "Step 2: C₆H₅–CH₂Cl + aq. KOH xrightarrow{\\Delta} C₆H₅–CH₂OH (Benzyl alcohol via S_N substitution)."
      ]
    },
    {
      conversion: "5. Benzene to 4-Bromonitrobenzene",
      steps: [
        "Step 1: C₆H₆ + Br₂ xrightarrow{anh. FeBr₃} C₆H₅–Br (Bromobenzene).",
        "Step 2: C₆H₅–Br + conc. HNO₃ + conc. H₂SO₄ xrightarrow{\\Delta} 1-Bromo-4-nitrobenzene (Para Major, separated by distillation)."
      ]
    },
    {
      conversion: "6. Benzyl alcohol to 2-Phenylethanamine",
      steps: [
        "Step 1: C₆H₅–CH₂OH + PCl₅ → C₆H₅–CH₂Cl + POCl₃ + HCl.",
        "Step 2: C₆H₅–CH₂Cl + KCN (alc.) → C₆H₅–CH₂–CN (Phenylacetonitrile / 1 extra carbon).",
        "Step 3: C₆H₅–CH₂–CN + LiAlH₄ (or Na/C₂H₅OH) → C₆H₅–CH₂–CH₂–NH₂ (2-Phenylethanamine)."
      ]
    },
    {
      conversion: "7. Aniline to Chlorobenzene",
      steps: [
        "Step 1: C₆H₅–NH₂ + NaNO₂ + 2 HCl (273–278 K) → C₆H₅–N₂⁺Cl⁻ (Benzenediazonium chloride).",
        "Step 2: C₆H₅–N₂⁺Cl⁻ + Cu₂Cl₂ / HCl → C₆H₅–Cl (Chlorobenzene via Sandmeyer reaction) + N₂↑."
      ]
    },
    {
      conversion: "8. 2-Chlorobutane to 3,4-Dimethylhexane",
      steps: [
        "Step 1: 2 CH₃–CH₂–CH(Cl)–CH₃ + 2 Na xrightarrow{Dry Ether} CH₃–CH₂–CH(CH₃)–CH(CH₃)–CH₂–CH₃ (3,4-Dimethylhexane via Wurtz coupling)."
      ]
    },
    {
      conversion: "9. Chlorobenzene to p-Nitrophenol",
      steps: [
        "Step 1: C₆H₅–Cl + conc. HNO₃ + conc. H₂SO₄ → 1-Chloro-4-nitrobenzene (p-isomer major).",
        "Step 2: 1-Chloro-4-nitrobenzene + aq. NaOH (443 K), followed by dil. HCl → 4-Nitrophenol."
      ]
    },
    {
      conversion: "10. Chloroethane to Butanoic Acid",
      steps: [
        "Step 1: CH₃CH₂Cl + KCN (alc.) → CH₃CH₂CN (Propanenitrile).",
        "Step 2: CH₃CH₂CN + H₃O⁺ (complete acid hydrolysis) → CH₃CH₂COOH (Propanoic acid).",
        "Step 3: Alternative for butanoic acid: CH₃CH₂CH₂Cl + KCN → CH₃CH₂CH₂CN xrightarrow{H₃O⁺} CH₃CH₂CH₂COOH."
      ]
    }
  ],

  // 7. NCERT Fact Bank & 15-Minute Rapid Revision Summary
  ncertFactBank: [
    "Darzen's process (ROH + SOCl₂ → RCl + SO₂↑ + HCl↑) is the cleanest method for preparing chloroalkanes because by-products are gaseous.",
    "Phenols cannot be converted to chlorobenzene using SOCl₂ or PCl₅ because C–O bond has partial double bond character due to resonance.",
    "Finkelstein reaction uses NaI in dry acetone (exploiting precipitation of insoluble NaCl/NaBr).",
    "Swarts reaction uses heavy metal fluorides (AgF, Hg₂F₂, CoF₃, SbF₃) to synthesize pure alkyl fluorides.",
    "Dipole moments order: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D).",
    "Boiling point decreases with branching: n-butyl > isobutyl > sec-butyl > tert-butyl.",
    "Haloalkanes are insoluble in water despite being polar because they cannot form hydrogen bonds with water nor break existing water-water H-bonds.",
    "S_N1 reaction rate depends only on alkyl halide concentration (Rate = k [R–X]); 3° > 2° > 1° > methyl; racemisation with partial inversion.",
    "S_N2 reaction rate depends on both substrate and nucleophile (Rate = k [R–X] [Nu⁻]); methyl > 1° > 2° >> 3°; 100% Walden inversion.",
    "Allylic and benzylic halides undergo very fast S_N1 reactions due to resonance stabilization of their carbocations.",
    "KCN gives alkyl cyanide (R–CN) via C-attack; AgCN gives alkyl isocyanide (R–NC) via N-attack.",
    "KNO₂ gives alkyl nitrite (R–ONO) via O-attack; AgNO₂ gives nitroalkane (R–NO₂) via N-attack.",
    "Williamson synthesis of ethers fails with 3° alkyl halides; yields 100% alkene (elimination).",
    "Saytzeff rule: β-elimination gives the more substituted, more stable alkene as the major product.",
    "Grignard reagent (RMgX) must be prepared in strictly dry ether; reacts with any active hydrogen to give alkane (R–H).",
    "Chlorobenzene is inert to nucleophiles due to: (1) resonance partial double bond (169 pm), (2) sp² carbon, (3) phenyl cation instability, (4) π-cloud repulsion.",
    "Halogen on benzene ring is DEACTIVATING (due to strong -I effect) but ORTHO/PARA DIRECTING (due to +R resonance effect).",
    "Para isomer is the major product in electrophilic substitution of haloarenes due to minimal steric hindrance.",
    "Sandmeyer reaction uses Cu₂X₂/HX; Gattermann uses Cu powder/HX.",
    "Balz-Schiemann reaction converts Ar–N₂⁺BF₄⁻ on heating into Ar–F + BF₃ + N₂↑.",
    "Fittig reaction: 2 Ar–X + 2 Na → Diphenyl + 2 NaX. Wurtz-Fittig: Ar–X + R–X + 2 Na → Ar–R + 2 NaX.",
    "Chloroform exposed to air and light oxidizes to poisonous phosgene (COCl₂); prevented by storing in dark bottles with 1% ethanol.",
    "Iodoform (CHI₃) antiseptic action is due to liberation of free iodine, not the CHI₃ molecule itself.",
    "Freon-12 (CCl₂F₂) depletes stratospheric ozone via chlorine free radicals (Cl·).",
    "DDT (p,p'-dichlorodiphenyltrichloroethane) is a persistent organochlorine pesticide causing biomagnification."
  ]
};
