// Comprehensive NCERT-Aligned Conceptual Master Data for Chapter 19: Haloalkanes and Haloarenes

export const HALOALKANES_CONCEPTS = {
  // 1. Core Terminology & Basic Definitions
  fundamentalTerms: [
    {
      term: "Haloalkane (Alkyl Halide)",
      definition: "Halogen derivatives of alkanes in which one or more hydrogen atoms of an aliphatic hydrocarbon are replaced by halogen atoms (–F, –Cl, –Br, –I). General formula: CₙH₂ₙ₊₁X or R–X.",
      example: "CH₃Cl (Chloromethane), CH₃CH₂Br (Bromoethane), (CH₃)₃CBr (2-Bromo-2-methylpropane)",
      neetSignificance: "Undergo nucleophilic substitution (S_N1, S_N2) and β-elimination (E2) reactions."
    },
    {
      term: "Haloarene (Aryl Halide)",
      definition: "Compounds containing halogen atom(s) directly bonded to an sp²-hybridized carbon atom of an aromatic ring. General formula: Ar–X.",
      example: "C₆H₅Cl (Chlorobenzene), C₆H₅Br (Bromobenzene), o-Chlorotoluene",
      neetSignificance: "Extremely inert to nucleophilic substitution due to resonance (partial double bond character) and sp² hybridization."
    },
    {
      term: "Allylic Halide",
      definition: "Compounds in which the halogen atom is bonded to an sp³-hybridized carbon atom adjacent to a carbon-carbon double bond (–C=C–C(X)–).",
      example: "CH₂=CH–CH₂–Cl (3-Chloroprop-1-ene or Allyl chloride)",
      neetSignificance: "Highly reactive in S_N1 reactions because the resulting allylic carbocation (CH₂=CH–CH₂⁺) is resonance-stabilized."
    },
    {
      term: "Benzylic Halide",
      definition: "Compounds in which the halogen atom is bonded to an sp³-hybridized carbon atom directly attached to an aromatic benzene ring (Ar–CH₂–X).",
      example: "C₆H₅–CH₂–Cl (Benzyl chloride), C₆H₅–CH(Cl)–CH₃ (1-Phenylethyl chloride)",
      neetSignificance: "Undergoes rapid S_N1 substitution due to exceptional resonance stabilization of the benzyl carbocation (C₆H₅–CH₂⁺)."
    },
    {
      term: "Vinylic Halide",
      definition: "Compounds in which the halogen atom is directly bonded to an sp²-hybridized carbon atom of a carbon-carbon double bond (–C=C(X)–).",
      example: "CH₂=CH–Cl (Vinyl chloride or Chloroethene)",
      neetSignificance: "Extremely unreactive towards nucleophilic substitution because lone pair delocalisation imparts partial double bond character to the C–X bond."
    },
    {
      term: "Aryl Halide vs Benzylic Halide",
      definition: "In aryl halides, the halogen is bonded directly to an sp² aromatic ring carbon (e.g. C₆H₅–Cl), whereas in benzylic halides, the halogen is on an sp³ side-chain carbon (e.g. C₆H₅–CH₂–Cl).",
      example: "Chlorobenzene (Aryl, inert to S_N) vs Benzyl chloride (Benzylic, very reactive in S_N1 and S_N2)",
      neetSignificance: "Classic NEET confusion: Benzyl chloride readily gives white ppt with aqueous AgNO₃, but Chlorobenzene gives NO reaction."
    },
    {
      term: "Ambidentate Nucleophile",
      definition: "Nucleophiles having two different nucleophilic donor centres through either of which they can attack an electrophilic carbon.",
      example: "Cyanide ion (:C≡N:⁻), Nitrite ion (:Ö–N̈=Ö⁻)",
      neetSignificance: "KCN gives R–CN (nitrile via C-attack), while AgCN gives R–NC (isocyanide via N-attack); KNO₂ gives R–ONO, while AgNO₂ gives R–NO₂."
    },
    {
      term: "Walden Inversion (Umbrella Inversion)",
      definition: "The complete 100% inversion of optical configuration at an asymmetric carbon centre during an S_N2 reaction due to backside attack of the incoming nucleophile.",
      example: "Reaction of (-)-2-Bromooctane with aqueous NaOH gives (+)-Octan-2-ol.",
      neetSignificance: "Hallmark stereochemical feature of S_N2 reactions."
    },
    {
      term: "Racemisation",
      definition: "The process of converting an optically active compound into an equimolar mixture of (+) and (-) enantiomers (d,l-mixture) resulting in zero net optical rotation.",
      example: "Hydrolysis of optically active 2-Bromobutane via S_N1 gives (±)-Butan-2-ol.",
      neetSignificance: "S_N1 reactions on chiral alkyl halides lead to predominant racemisation accompanied by partial inversion due to shielding of the leaving group."
    },
    {
      term: "Saytzeff (Zaitsev) Rule",
      definition: "In dehydrohalogenation (β-elimination) reactions of alkyl halides, the major product is the more substituted alkene (i.e. the alkene possessing the greater number of alkyl groups attached to the double-bonded carbons).",
      example: "2-Bromobutane + alc. KOH → But-2-ene (80%, Major, more stable) + But-1-ene (20%, Minor).",
      neetSignificance: "Governs regioselectivity in E2 elimination with unhindered strong bases."
    },
    {
      term: "Grignard Reagent",
      definition: "Organomagnesium halides (R–MgX) formed by reacting alkyl or aryl halides with magnesium metal in dry ether. Possesses a highly polarized covalent carbon-magnesium bond (R^{\\delta-}–Mg^{\\delta+}X).",
      example: "CH₃MgBr (Methylmagnesium bromide), C₆H₅MgBr (Phenylmagnesium bromide)",
      neetSignificance: "Acts as a powerful nucleophile/base. Reacts violently with any active hydrogen compound (H₂O, ROH, NH₃) to produce hydrocarbons (R–H). Must be prepared in strictly anhydrous conditions."
    },
    {
      term: "Dow's Process",
      definition: "Commercial method for the conversion of chlorobenzene into phenol by heating with 6-8% aqueous NaOH under harsh conditions (623 K temperature and 300 atm pressure) followed by acidification.",
      example: "C₆H₅Cl + 2NaOH (623 K, 300 atm) → C₆H₅ONa → (H⁺) C₆H₅OH",
      neetSignificance: "Demonstrates that haloarenes require extreme conditions for nucleophilic aromatic substitution (S_NAr)."
    }
  ],

  // 2. Comprehensive Classification of Halogen Compounds
  classifications: [
    {
      category: "Classification based on Number of Halogen Atoms",
      details: [
        { type: "Monohaloalkane", formula: "R–X (e.g. C₂H₅Cl)", description: "Contains one halogen atom per molecule." },
        { type: "Dihaloalkane (Geminal Dihalide)", formula: "R–CHX₂ (e.g. CH₃–CHCl₂)", description: "Both halogen atoms are attached to the SAME carbon atom (Alkylidene halides)." },
        { type: "Dihaloalkane (Vicinal Dihalide)", formula: "R–CH(X)–CH₂(X) (e.g. Cl–CH₂–CH₂–Cl)", description: "Halogen atoms are attached to two ADJACENT carbon atoms (Alkylene dihalides)." },
        { type: "Polyhaloalkane / Haloform", formula: "CHX₃ (e.g. CHCl₃, CHI₃), CX₄ (e.g. CCl₄)", description: "Tri- and tetra-halogen derivatives." }
      ]
    },
    {
      category: "Classification based on Carbon-Halogen Hybridisation",
      details: [
        { type: "Alkyl Halides (sp³ C–X)", formula: "1° (RCH₂X), 2° (R₂CHX), 3° (R₃CX)", description: "Halogen is bonded to an sp³ alkyl carbon." },
        { type: "Allylic Halides (sp³ C–X)", formula: "–C=C–C(X)– (e.g. CH₂=CH–CH₂–Br)", description: "Halogen bonded to sp³ carbon next to C=C." },
        { type: "Benzylic Halides (sp³ C–X)", formula: "Ar–C(X)– (e.g. C₆H₅–CH₂–Cl)", description: "Halogen bonded to sp³ carbon attached to aromatic ring." },
        { type: "Vinylic Halides (sp² C–X)", formula: "–C=C(X)– (e.g. CH₂=CH–Cl)", description: "Halogen directly bonded to sp² carbon of double bond." },
        { type: "Aryl Halides (sp² C–X)", formula: "Ar–X (e.g. C₆H₅–Br)", description: "Halogen directly bonded to sp² aromatic ring carbon." }
      ]
    }
  ],

  // 3. Nature of the C–X Bond (NCERT Quantitative Data & Qualitative Trends)
  carbonHalogenBondProperties: {
    overview: "Due to the higher electronegativity of halogen atoms compared to carbon (Electronegativities: F = 4.0, Cl = 3.0, Br = 2.8, I = 2.5, C = 2.5), the carbon-halogen bond is polar with a partial positive charge on carbon (C^{\\delta+}) and a partial negative charge on halogen (X^{\\delta-}).",
    quantitativeTrends: [
      { bond: "CH₃–F", bondLength: "139 pm", bondEnthalpy: "452 kJ/mol", dipoleMoment: "1.847 D", leavingGroupAbility: "Poorest (Strongest bond)" },
      { bond: "CH₃–Cl", bondLength: "178 pm", bondEnthalpy: "351 kJ/mol", dipoleMoment: "1.860 D (Highest!)", leavingGroupAbility: "Moderate" },
      { bond: "CH₃–Br", bondLength: "193 pm", bondEnthalpy: "293 kJ/mol", dipoleMoment: "1.830 D", leavingGroupAbility: "Good" },
      { bond: "CH₃–I", bondLength: "214 pm", bondEnthalpy: "234 kJ/mol", dipoleMoment: "1.636 D", leavingGroupAbility: "Best (Weakest bond)" }
    ],
    neetTakeaways: [
      "Dipole Moment Order: CH₃Cl (1.860 D) > CH₃F (1.847 D) > CH₃Br (1.830 D) > CH₃I (1.636 D). Why? Dipole moment μ = q × d. Even though F is more electronegative (larger charge q), the C–F bond distance (d) is exceptionally small, so the product q × d is maximum for CH₃Cl!",
      "Bond Enthalpy Order: C–F (452) > C–Cl (351) > C–Br (293) > C–I (234 kJ/mol).",
      "Bond Length Order: C–I (214 pm) > C–Br (193 pm) > C–Cl (178 pm) > C–F (139 pm).",
      "Reactivity / Leaving Group Ability Order: R–I > R–Br > R–Cl >> R–F. Governed by bond enthalpy (C–I is weakest) and stability of the halide anion (I⁻ is largest and most stable conjugate base of strong acid HI)."
    ]
  },

  // 4. Detailed Preparations of Haloalkanes
  preparations: [
    {
      methodName: "From Alcohols (Best Synthetic Route)",
      reactions: [
        {
          reagent: "SOCl₂ (Thionyl chloride) + Pyridine (Darzen's Process)",
          equation: "R–OH + SOCl₂ → R–Cl + SO₂↑ + HCl↑",
          advantage: "BEST method for preparing chloroalkanes because both by-products (SO₂ and HCl) are escapeable gases, leaving the pure alkyl chloride behind without tedious purification."
        },
        {
          reagent: "HX + anhydrous ZnCl₂ (Lucas Reagent)",
          equation: "R–OH + HCl (conc.) xrightarrow{anh. ZnCl₂} R–Cl + H₂O",
          advantage: "Reactivity of alcohols follows carbocation stability: 3° > 2° > 1°. 3° gives immediate cloudiness; 2° in 5 min; 1° gives no cloudiness at room temp."
        },
        {
          reagent: "PCl₅ (Phosphorus pentachloride)",
          equation: "R–OH + PCl₅ → R–Cl + POCl₃ (Phosphorus oxychloride) + HCl↑",
          advantage: "Good yield; POCl₃ is a high-boiling liquid."
        },
        {
          reagent: "PCl₃ (Phosphorus trichloride)",
          equation: "3 R–OH + PCl₃ → 3 R–Cl + H₃PO₃ (Phosphorous acid)",
          advantage: "Stoichiometry: 3 moles of alcohol react per mole of PCl₃."
        },
        {
          reagent: "Red P + Br₂ / Red P + I₂",
          equation: "R–OH xrightarrow{Red P / X₂ (X=Br, I)} R–X",
          advantage: "Generated in situ (PBr₃ or PI₃) because PBr₃/PI₃ are unstable."
        }
      ],
      neetExceptions: [
        "Phenols CANNOT be converted to haloarenes using HX, PCl₃, PCl₅ or SOCl₂ because the C–O bond in phenol has partial double bond character due to resonance and is too strong to break!"
      ]
    },
    {
      methodName: "From Hydrocarbons (Alkanes & Alkenes)",
      reactions: [
        {
          reagent: "Free Radical Halogenation of Alkanes (Cl₂ / hν)",
          equation: "CH₃CH₂CH₃ + Cl₂ xrightarrow{hν} CH₃CH₂CH₂Cl (45%) + CH₃CH(Cl)CH₃ (55%)",
          details: "Gives a complex mixture of isomeric monohaloalkanes and polyhaloalkanes which are difficult to separate. Bromination (Br₂/hν) is vastly more selective than chlorination (3° > 2° > 1° hydrogen abstraction)."
        },
        {
          reagent: "Addition of HX to Alkenes (Markovnikov Rule)",
          equation: "CH₃–CH=CH₂ + HBr → CH₃–CH(Br)–CH₃ (2-Bromopropane, Major)",
          details: "In electrophilic addition to unsymmetrical alkenes, the negative part of the reagent (X⁻) adds to the carbon with fewer hydrogen atoms (forming the more stable secondary carbocation intermediate)."
        },
        {
          reagent: "Addition of HBr with Peroxide (Kharasch / Anti-Markovnikov Effect)",
          equation: "CH₃–CH=CH₂ + HBr xrightarrow{(C₆H₅CO)₂O₂ / Peroxide} CH₃–CH₂–CH₂–Br (1-Bromopropane, Major)",
          details: "Free-radical addition mechanism. Operates ONLY with HBr! HCl and HI do NOT show peroxide effect because H–Cl bond is too strong (step 1 endothermic) and H–I bond gives I· radicals that rapidly dimerize to I₂ (step 2 endothermic)."
        },
        {
          reagent: "Addition of Halogens (Br₂ in CCl₄)",
          equation: "CH₂=CH₂ + Br₂ / CCl₄ → Br–CH₂–CH₂–Br (1,2-Dibromoethane, Vicinal Dihalide)",
          details: "Accompanied by discharge of reddish-brown colour of bromine; standard NCERT diagnostic test for unsaturation (C=C or C≡C)."
        },
        {
          reagent: "Allylic Halogenation (NBS or Cl₂ at 773 K)",
          equation: "CH₃–CH=CH₂ + Cl₂ xrightarrow{773 K} Cl–CH₂–CH=CH₂ + HCl",
          details: "High temperature or N-Bromosuccinimide (NBS) selectively substitutes allylic hydrogens via stable allylic free radicals without adding to the double bond."
        }
      ]
    },
    {
      methodName: "Halogen Exchange Reactions (High-Yield Named Reactions)",
      reactions: [
        {
          name: "Finkelstein Reaction (Preparation of Iodoalkanes)",
          equation: "R–Cl / R–Br + NaI xrightarrow{Dry Acetone} R–I + NaCl↓ / NaBr↓",
          principle: "Dry acetone acts as a polar aprotic solvent. NaI is soluble in acetone, but NaCl and NaBr are insoluble and precipitate out. By Le Chatelier's principle, precipitation shifts the equilibrium forward to 100% completion!"
        },
        {
          name: "Swarts Reaction (Preparation of Fluoroalkanes)",
          equation: "CH₃–Br + AgF → CH₃–F + AgBr↓ (or using Hg₂F₂, CoF₂, SbF₃)",
          principle: "Heating alkyl chloride/bromide with heavy metal fluorides (AgF, Hg₂F₂, CoF₃, SbF₃) yields pure alkyl fluorides. Direct fluorination of alkanes is explosive, so Swarts reaction is the premier synthetic route."
        }
      ]
    }
  ],

  // 5. Nucleophilic Substitution Mechanisms (SN1 vs SN2 In-Depth)
  substitutionMechanisms: {
    sn1Details: {
      mechanismName: "S_N1 (Substitution Nucleophilic Unimolecular)",
      kinetics: "Two-step mechanism. Rate = k [R–X]. First-order kinetics (molecularity = 1).",
      step1: "Formation of Carbocation (Rate-Determining Step / RDS): R–X ⇌ R⁺ + X⁻. Heterolytic cleavage of C–X bond facilitated by polar protic solvent.",
      step2: "Nucleophilic Attack (Fast): R⁺ + Nu⁻ → R–Nu. Nucleophile attacks the planar sp² carbocation with equal probability from top and bottom lobes.",
      reactivityOrder: "3° > 2° > 1° > CH₃–X (Governed by Carbocation Stability).",
      specialSubstrates: "Allylic (CH₂=CH–CH₂–X) and Benzylic (C₆H₅–CH₂–X) halides undergo very fast S_N1 because their carbocations are stabilized by resonance.",
      stereochemistry: "Racemisation with partial inversion (due to leaving group shielding the front side immediately after ionization).",
      rearrangement: "Carbocations undergo 1,2-hydride or 1,2-methyl shifts to yield more stable 3° carbocations prior to nucleophilic capture.",
      favourableConditions: "3° substrate, weak nucleophile (H₂O, ROH), low nucleophile concentration, polar protic solvent (H₂O, alcohol, acetic acid)."
    },
    sn2Details: {
      mechanismName: "S_N2 (Substitution Nucleophilic Bimolecular)",
      kinetics: "One-step concerted mechanism. Rate = k [R–X] [Nu⁻]. Second-order kinetics (molecularity = 2).",
      step1: "Concerted Backside Attack & Transition State: Nu⁻ approaches from 180° opposite to leaving group. Forms a pentacoordinate transition state [Nu···C···X]‡ with trigonal bipyramidal geometry (C is sp² in TS plane).",
      reactivityOrder: "CH₃–X > 1° > 2° >> 3° (Governed by Steric Hindrance).",
      specialSubstrates: "Neopentyl halide (CH₃)₃C–CH₂–X is 1° but undergoes S_N2 extremely slowly due to severe steric crowding by the bulky tert-butyl group!",
      stereochemistry: "100% Inversion of Configuration (Walden Inversion / Umbrella flip).",
      rearrangement: "NO intermediate carbocation formed; hence NO rearrangement ever occurs in S_N2.",
      favourableConditions: "Methyl/1° substrate, strong nucleophile (OH⁻, CN⁻, I⁻), high nucleophile concentration, polar aprotic solvent (DMSO, DMF, Acetone)."
    }
  },

  // 6. Ambidentate Nucleophiles & Key Substitution Reactions
  nucleophilicReactionsMatrix: [
    {
      reagent: "Aqueous KOH / NaOH",
      attackingSpecies: "OH⁻",
      product: "R–OH (Alcohol)",
      reactionType: "S_N (S_N2 for 1°, S_N1 for 3°)",
      trap: "Confusing with alcoholic KOH (which gives Alkene via E2 elimination)."
    },
    {
      reagent: "KCN (Potassium Cyanide in alc. aq. solution)",
      attackingSpecies: "Carbon atom (:C⁻≡N)",
      product: "R–CN (Alkyl Cyanide / Alkane Nitrile)",
      reactionType: "S_N",
      trap: "KCN is ionic [K⁺ (:C≡N:⁻)]. C–C bond is stronger than C–N bond, so attack occurs through carbon forming nitrile."
    },
    {
      reagent: "AgCN (Silver Cyanide)",
      attackingSpecies: "Nitrogen atom (Ag–C≡N̈:)",
      product: "R–NC (Alkyl Isocyanide / Carbylamine)",
      reactionType: "S_N",
      trap: "AgCN is predominantly covalent. Silver is bonded to carbon, leaving only nitrogen lone pair free for nucleophilic attack!"
    },
    {
      reagent: "KNO₂ (Potassium Nitrite)",
      attackingSpecies: "Oxygen atom (K⁺ ⁻O–N=O)",
      product: "R–O–N=O (Alkyl Nitrite)",
      reactionType: "S_N",
      trap: "KNO₂ is ionic; oxygen carries the negative charge and attacks carbon."
    },
    {
      reagent: "AgNO₂ (Silver Nitrite)",
      attackingSpecies: "Nitrogen atom (Ag–O–N̈=O)",
      product: "R–NO₂ (Nitroalkane)",
      reactionType: "S_N",
      trap: "AgNO₂ is covalent; nitrogen lone pair donates electron density to carbon."
    },
    {
      reagent: "NH₃ (Ammonia / Ammonolysis)",
      attackingSpecies: "NH₃ (Nitrogen lone pair)",
      product: "R–NH₂ (1° amine) → R₂NH (2°) → R₃N (3°) → [R₄N]⁺X⁻",
      reactionType: "S_N2",
      trap: "To obtain predominantly 1° amine, use EXCESS ammonia; using excess R–X yields quaternary ammonium salt."
    },
    {
      reagent: "R'ONa (Sodium Alkoxide - Williamson Synthesis)",
      attackingSpecies: "R'O⁻",
      product: "R–O–R' (Ether)",
      reactionType: "S_N2",
      trap: "R–X MUST be 1° or methyl! If 3° R–X is used with R'ONa, alkoxide acts as strong base causing 100% elimination (alkene)."
    },
    {
      reagent: "R'COOAg (Silver Carboxylate)",
      attackingSpecies: "R'COO⁻",
      product: "R'COOR (Ester) + AgX↓",
      reactionType: "S_N2",
      trap: "Excellent route for esters; Ag⁺ precipitates halide efficiently."
    },
    {
      reagent: "LiAlH₄ (Lithium Aluminium Hydride)",
      attackingSpecies: "Hydride ion (H⁻)",
      product: "R–H (Alkane)",
      reactionType: "Reduction / S_N",
      trap: "Direct reduction of alkyl halides to parent alkanes."
    }
  ],

  // 7. Elimination Reactions & Saytzeff vs Hofmann Regioselectivity
  eliminationConcepts: {
    definition: "When a haloalkane with a β-hydrogen atom is heated with a concentrated alcoholic solution of potassium hydroxide (alc. KOH), a molecule of hydrogen halide (HX) is eliminated, yielding an alkene. Also termed β-elimination or 1,2-dehydrohalogenation.",
    mechanism: "E2 mechanism: Ethoxide ion (C₂H₅O⁻) abstracts a proton from the β-carbon simultaneously with the departure of halide ion from the α-carbon in an anti-periplanar conformation.",
    saytzeffRule: "In dehydrohalogenation, the predominant product is the more substituted alkene (possessing the maximum number of alkyl substituents attached to the doubly bonded carbons), which is thermodynamically more stable due to greater hyperconjugative and resonance stabilization.",
    hofmannRule: "When the alkyl halide has a bulky base (e.g. potassium tert-butoxide (CH₃)₃CO⁻K⁺) or poor leaving group (like –F), the less substituted alkene (Hofmann product) becomes the major product due to steric difficulty in abstracting the internal β-hydrogen.",
    substrateReactivity: "Reactivity towards elimination: 3° > 2° > 1° alkyl halides (because 3° forms more substituted, hyperconjugated stable alkenes)."
  },

  // 8. Reactions with Metals (Wurtz & Grignard Synthesis)
  organometallicReactions: [
    {
      reactionName: "Wurtz Reaction",
      equation: "2 R–X + 2 Na xrightarrow{Dry Ether} R–R (Symmetrical Alkane) + 2 NaX",
      keyPoints: [
        "Exclusively suitable for preparing symmetrical alkanes with an EVEN number of carbon atoms (e.g. Ethane, Butane, Hexane).",
        "If two different alkyl halides (R–X + R'–X) are mixed with sodium, a mixture of 3 alkanes (R–R, R'–R', and R–R') is obtained which have close boiling points and are impossible to separate cleanly.",
        "Methane (CH₄) CANNOT be synthesized by Wurtz reaction because the product must contain at least 2 carbon atoms (R–R)."
      ]
    },
    {
      reactionName: "Grignard Reagent Synthesis & Properties",
      equation: "R–X + Mg xrightarrow{Dry Ether} R–MgX (Alkylmagnesium Halide)",
      keyPoints: [
        "In RMgX, the C–Mg bond is covalent but highly polar (C^{\\delta-}–Mg^{\\delta+}), while the Mg–X bond is ionic.",
        "The carbon atom acts as a potent carbanionic nucleophile (R⁻) and strong base.",
        "Moisture Destruction: RMgX reacts rapidly with any compound containing active hydrogen (H₂O, ROH, RCOOH, NH₃, terminal alkynes) to form alkanes: RMgX + H₂O → R–H + Mg(OH)X.",
        "Absolute Dry Ether: Preparation must strictly exclude moisture; even trace water destroys the Grignard reagent."
      ]
    }
  ],

  // 9. Haloarenes: Structure, Reactivity, & Nucleophilic Substitution (Dow's & SNAr)
  haloarenesReactivity: {
    whyUnreactiveToSN: [
      {
        reason: "1. Resonance Delocalisation (Partial Double Bond Character)",
        explanation: "The unshared electron pairs on the halogen atom are in conjugation with the π-electrons of the benzene ring. Delocalisation creates 4 resonance contributors, imparting partial double bond character to the C–X bond. Bond cleavage is far more difficult than in haloalkanes (C–Cl in chlorobenzene is 169 pm vs 177 pm in CH₃Cl)."
      },
      {
        reason: "2. Difference in Hybridisation of Carbon Atom",
        explanation: "In haloarenes, halogen is bonded to an sp²-hybridized carbon (33.3% s-character), whereas in haloalkanes it is bonded to an sp³ carbon (25% s-character). An sp² carbon is more electronegative, holds bonding electrons more tightly, and forms a shorter, stronger, less easily cleaved C–X bond."
      },
      {
        reason: "3. Instability of Phenyl Cation (No S_N1)",
        explanation: "Heterolytic cleavage of C–X bond would generate a phenyl cation (C₆H₅⁺), where the positive charge resides in an sp² orbital perpendicular to the aromatic π-system. The phenyl cation cannot be stabilized by resonance and is extremely unstable, completely ruling out the S_N1 mechanism."
      },
      {
        reason: "4. Electrostatic π-Electron Cloud Repulsion (No S_N2)",
        explanation: "The aromatic benzene ring has a dense π-electron cloud above and below the plane. This repels incoming electron-rich nucleophiles from attacking the ring, preventing backside S_N2 attack."
      }
    ],
    nucleophilicAromaticSubstitutionSNAr: {
      dowProcess: "Chlorobenzene heated with 6-8% aqueous NaOH at 623 K and 300 atm followed by acidification yields Phenol (Dow's Process).",
      activationByNitroGroups: [
        {
          substrate: "4-Nitrochlorobenzene (o/p-NO₂)",
          conditions: "Aqueous NaOH, 443 K, followed by H⁺",
          product: "4-Nitrophenol",
          note: "Significant rate acceleration compared to chlorobenzene."
        },
        {
          substrate: "2,4-Dinitrochlorobenzene",
          conditions: "Aqueous Na₂CO₃ / NaOH, 368 K, followed by H⁺",
          product: "2,4-Dinitrophenol",
          note: "Requires only mild heating with sodium carbonate."
        },
        {
          substrate: "2,4,6-Trinitrochlorobenzene (Picryl Chloride)",
          conditions: "Warm Water (H₂O), 323 K (Warm)",
          product: "2,4,6-Trinitrophenol (Picric Acid)",
          note: "Hydrolyzes rapidly just with warm water without any alkali!"
        }
      ],
      whyOrthoParaOnly: "The incoming nucleophile attacks the ring to form a resonance-stabilized carbanionic Meisenheimer σ-complex (arenium anion). When the electron-withdrawing –NO₂ group is at ORTHO or PARA positions, the negative charge is delocalized directly onto the electronegative oxygen atoms of –NO₂ in one of the resonance contributors. When –NO₂ is at the META position, no resonance contributor places the negative charge on the carbon bearing the nitro group; hence meta-NO₂ does NOT stabilize the carbanion through resonance!"
    }
  },

  // 10. Electrophilic Substitution of Haloarenes (o/p-Directing & Deactivating)
  electrophilicSubstitution: {
    corePrinciple: "Halogen atoms on a benzene ring exhibit TWO opposing electronic effects: (1) Strong –I (Inductive) effect: pulls electron density from the ring via σ-bonds (deactivating the ring towards electrophilic attack compared to benzene); (2) +R (Resonance / Mesomeric) effect: donates lone pair into the ring, increasing electron density specifically at ORTHO and PARA positions. Because resonance stabilizes the carbocation intermediate at ortho/para positions more than at meta, halogens are ORTHO/PARA DIRECTING. However, because the –I effect is stronger than the +R effect, the ring is OVERALL DEACTIVATED. Electrophilic substitutions of chlorobenzene are slower and require more vigorous conditions than benzene.",
    paraMajorRule: "In all electrophilic substitutions of haloarenes, the PARA ISOMER is the MAJOR PRODUCT due to minimal steric hindrance and higher symmetry.",
    reactions: [
      {
        reaction: "Halogenation",
        reagents: "Cl₂ / anhydrous FeCl₃ (Lewis acid catalyst)",
        products: "1,4-Dichlorobenzene (p-isomer, Major) + 1,2-Dichlorobenzene (o-isomer, Minor)"
      },
      {
        reaction: "Nitration",
        reagents: "conc. HNO₃ + conc. H₂SO₄ (Nitrating mixture, electrophile: NO₂⁺)",
        products: "1-Chloro-4-nitrobenzene (p-isomer, Major) + 1-Chloro-2-nitrobenzene (o-isomer, Minor)"
      },
      {
        reaction: "Sulphonation",
        reagents: "conc. H₂SO₄ / Heat (Δ, electrophile: SO₃)",
        products: "4-Chlorobenzenesulphonic acid (p-isomer, Major) + 2-Chlorobenzenesulphonic acid (o-isomer, Minor)"
      },
      {
        reaction: "Friedel-Crafts Alkylation",
        reagents: "CH₃Cl + anhydrous AlCl₃",
        products: "1-Chloro-4-methylbenzene (p-Chlorotoluene, Major) + 1-Chloro-2-methylbenzene (Minor)"
      },
      {
        reaction: "Friedel-Crafts Acylation",
        reagents: "CH₃COCl (Acetyl chloride) + anhydrous AlCl₃",
        products: "4-Chloroacetophenone (Major) + 2-Chloroacetophenone (Minor)"
      }
    ]
  },

  // 11. Named Reactions of Haloarenes
  haloareneNamedReactions: [
    {
      name: "Sandmeyer Reaction",
      equation: "Ar–N₂⁺Cl⁻ xrightarrow{Cu₂Cl₂ / HCl} Ar–Cl + N₂↑ (or Cu₂Br₂/HBr → Ar–Br, CuCN/KCN → Ar–CN)",
      significance: "High-yield conversion of diazonium salts into aryl chlorides, bromides, and cyanides using cuprous salts."
    },
    {
      name: "Gattermann Reaction",
      equation: "Ar–N₂⁺Cl⁻ xrightarrow{Cu \\text{ powder} / HCl} Ar–Cl + N₂↑ (or Cu powder / HBr → Ar–Br)",
      significance: "Uses finely divided copper powder with halogen acid; yields are generally lower than Sandmeyer."
    },
    {
      name: "Balz-Schiemann Reaction",
      equation: "Ar–N₂⁺Cl⁻ + HBF₄ → Ar–N₂⁺BF₄⁻ xrightarrow{\\Delta} Ar–F + BF₃ + N₂↑",
      significance: "Pre-eminent method for preparing aryl fluorides by thermal decomposition of dry benzenediazonium fluoroborate."
    },
    {
      name: "Preparation of Iodoarene from Diazonium Salt",
      equation: "Ar–N₂⁺Cl⁻ + KI xrightarrow{Warm / \\Delta} Ar–I + KCl + N₂↑",
      significance: "Requires merely warming with aqueous potassium iodide; NO cuprous or copper catalyst is required!"
    },
    {
      name: "Wurtz-Fittig Reaction",
      equation: "Ar–X + R–X + 2 Na xrightarrow{Dry Ether} Ar–R (Alkylarene) + 2 NaX",
      significance: "Cross-coupling of an aryl halide with an alkyl halide in presence of sodium in dry ether to form alkylbenzenes."
    },
    {
      name: "Fittig Reaction",
      equation: "2 Ar–X + 2 Na xrightarrow{Dry Ether} Ar–Ar (Diphenyl / Biphenyl) + 2 NaX",
      significance: "Self-coupling of two moles of aryl halide using sodium in dry ether to synthesize biaryl systems."
    },
    {
      name: "Ullmann Reaction",
      equation: "2 Ar–I + Cu xrightarrow{Heat in sealed tube} Ar–Ar (Diphenyl) + CuI₂",
      significance: "Coupling of aryl iodides by heating with copper powder to produce diphenyl derivatives."
    }
  ],

  // 12. Polyhalogen Compounds (NCERT High-Yield Facts)
  polyhalogenCompounds: [
    {
      compound: "Dichloromethane (Methylene Chloride, CH₂Cl₂)",
      uses: "Widely used as an industrial solvent in paint strippers, pharmaceutical manufacturing, and aerosol propellant.",
      healthEnvironmental: "Depresses central nervous system; high exposure causes dizziness, nausea, numbness, and corneal burning."
    },
    {
      compound: "Trichloromethane (Chloroform, CHCl₃)",
      uses: "Historically used as a general inhalational anesthetic; industrial production of Freon-22 (CHClF₂).",
      healthEnvironmental: "Oxidation to Phosgene: When exposed to air and sunlight, chloroform is slowly oxidized into highly poisonous phosgene gas (Carbonyl chloride, COCl₂): 2 CHCl₃ + O₂ xrightarrow{light} 2 COCl₂ + 2 HCl. Prevention: Stored in dark brown, tightly sealed glass bottles filled to the brim (to exclude air) with 1% ethanol added (ethanol converts toxic phosgene into harmless, non-toxic diethyl carbonate: COCl₂ + 2 C₂H₅OH → (C₂H₅O)₂CO + 2 HCl)."
    },
    {
      compound: "Triiodomethane (Iodoform, CHI₃)",
      uses: "Used as an antiseptic. Antiseptic action is due to the liberation of free iodine, NOT due to iodoform itself. Yellow crystalline solid with a distinct characteristic pungent odour.",
      healthEnvironmental: "Obtained via the classic Iodoform test with I₂ + NaOH on compounds containing CH₃–C=O or CH₃–CH(OH)– groups."
    },
    {
      compound: "Tetrachloromethane (Carbon Tetrachloride, CCl₄)",
      uses: "Commercial solvent, fire extinguisher under trade name 'Pyrene' (non-flammable heavy vapors smother flames).",
      healthEnvironmental: "When heated in steam at high temperatures, forms phosgene gas: CCl₄ + H₂O xrightarrow{\\Delta} COCl₂ + 2 HCl. Severe liver toxin (causes liver cancer and liver damage) and ozone-depleting substance."
    },
    {
      compound: "Freons (Chlorofluorocarbons / CFCs, e.g. Freon-12, CCl₂F₂)",
      uses: "Extremely stable, non-toxic, non-corrosive, easily liquefiable gases used in refrigeration, air conditioning, and aerosol propellants.",
      healthEnvironmental: "Synthesized via Swarts reaction: CCl₄ + 2SbF₃ xrightarrow{SbCl₅} CCl₂F₂ + 2SbCl₃. In the stratosphere, UV radiation homolytically cleaves C–Cl bonds generating chlorine free radicals (Cl·), which catalytically destroy the protective ozone layer: Cl· + O₃ → ClO· + O₂."
    },
    {
      compound: "p,p'-Dichlorodiphenyltrichloroethane (DDT)",
      uses: "First chlorinated organic pesticide; developed by Paul Müller (Nobel Prize in 1948); eradicated malaria mosquitoes and typhus lice post-WWII.",
      healthEnvironmental: "Prepared by condensing chloral (CCl₃CHO) with 2 molecules of chlorobenzene in presence of conc. H₂SO₄. Highly non-biodegradable and lipid-soluble. Undergoes biomagnification along food chains, causing reproductive failure in birds (thinning of eggshells). Banned in the USA in 1973 and globally."
    }
  ]
};
