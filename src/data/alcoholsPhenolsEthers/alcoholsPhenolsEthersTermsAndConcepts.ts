// NCERT-aligned Terms, Concepts, and Comprehensive Explanations for Chapter 20: Alcohols, Phenols and Ethers

export const ALCOHOLS_PHENOLS_ETHERS_CONCEPTS = {
  // Topic 1: Alcohols Terms
  alcoholsTerms: [
    {
      term: "Aliphatic Alcohol (R–OH)",
      definition: "Organic hydroxy derivatives where the hydroxyl (–OH) functional group is directly bonded to a saturated, sp³-hybridized alkyl carbon atom. General molecular formula: CₙH₂ₙ₊₁OH or CₙH₂ₙ₊₂O.",
      neetNote: "Classified into monohydric (1 –OH), dihydric/glycols (2 –OH), trihydric/glycerol (3 –OH), and polyhydric alcohols based on the number of hydroxyl groups."
    },
    {
      term: "Primary (1°), Secondary (2°), and Tertiary (3°) Alcohols",
      definition: "Classification based on the degree of the α-carbon bonded to the –OH group. Primary (R–CH₂–OH) has 1 alkyl attachment; Secondary (R₂CH–OH) has 2 alkyl attachments; Tertiary (R₃C–OH) has 3 alkyl attachments.",
      neetNote: "Directly dictates reaction mechanisms: 1° alcohols undergo S_N2 substitution and oxidation to acids; 3° alcohols undergo S_N1 substitution, instantaneous Lucas turbidity, and resist ordinary oxidation, preferring dehydration to alkenes."
    },
    {
      term: "Hydroboration-Oxidation Reaction",
      definition: "Indirect hydration of alkenes using diborane (B₂H₆ / THF) followed by alkaline hydrogen peroxide (H₂O₂ / OH⁻) oxidation. Adds water molecules across the double bond in an overall Anti-Markovnikov fashion with Syn-stereospecificity without carbocation rearrangement.",
      neetNote: "Classic NEET question: Propene + B₂H₆ followed by alkaline H₂O₂ produces 100% Propan-1-ol (1° alcohol), whereas acid-catalysed hydration produces Propan-2-ol (2° alcohol)."
    },
    {
      term: "Lucas Reagent & Lucas Test",
      definition: "An equimolar solution of concentrated hydrochloric acid (conc. HCl) and anhydrous zinc chloride (anh. ZnCl₂). It distinguishes 1°, 2°, and 3° alcohols based on the relative rate of alkyl chloride turbidity formation via carbocation stability.",
      neetNote: "3° alcohol gives instant turbidity; 2° alcohol gives turbidity in ~5 minutes; 1° alcohol does not produce turbidity at room temperature and requires prolonged boiling. Benzylic and allylic alcohols also give immediate turbidity due to resonance-stabilized carbocations!"
    },
    {
      term: "Victor Meyer Test (R-B-W Test)",
      definition: "A classic chemical test to distinguish primary, secondary, and tertiary alcohols through a four-step sequence: (1) P + I₂ → RI; (2) AgNO₂ → RNO₂; (3) HNO₂; (4) Excess aqueous NaOH.",
      neetNote: "Mnemonic R–B–W: 1° Alcohol → Blood Red colour (nitrolic acid sodium salt); 2° Alcohol → Intense Blue colour (pseudonitrol); 3° Alcohol → Colourless/White (no α-hydrogen, no reaction with HNO₂)."
    },
    {
      term: "Pyridinium Chlorochromate (PCC / Corey's Reagent)",
      definition: "A mild, selective oxidizing agent composed of CrO₃, pyridine, and HCl in dichloromethane (CH₂Cl₂). Selectively oxidizes primary alcohols to aldehydes without over-oxidation to carboxylic acids and oxidizes secondary alcohols to ketones.",
      neetNote: "Unlike acidified KMnO₄ or K₂Cr₂O₇ (which aggressively oxidize 1° alcohols to carboxylic acids), PCC stops strictly at the aldehyde stage because of the anhydrous reaction medium."
    },
    {
      term: "Catalytic Dehydrogenation over Heated Copper (Cu, 573 K)",
      definition: "Vapour-phase dehydrogenation/dehydration of alcohols over metallic copper at 300°C (573 K). 1° alcohols lose H₂ to give aldehydes; 2° alcohols lose H₂ to give ketones; 3° alcohols undergo dehydration (lose H₂O) to give alkenes.",
      neetNote: "Crucial NEET distinction: 3° alcohols have no α-hydrogen to undergo dehydrogenation, so they undergo β-elimination (dehydration) to form alkenes (e.g., tert-butanol gives 2-methylpropene)."
    },
    {
      term: "Acid-Catalysed Dehydration of Alcohols",
      definition: "Elimination of a water molecule from an alcohol using concentrated protic acids (conc. H₂SO₄ or H₃PO₄) at elevated temperatures. Mechanism involves protonation of –OH, loss of H₂O to form a carbocation intermediate (rate-determining step), followed by deprotonation yielding the most substituted alkene (Saytzeff rule).",
      neetNote: "Ease of dehydration: 3° alcohol (20% H₂SO₄, 358 K) > 2° alcohol (85% H₃PO₄, 440 K) > 1° alcohol (conc. H₂SO₄, 443 K). Carbocation rearrangements (hydride and methyl shifts) readily occur!"
    },
    {
      term: "Intermolecular Hydrogen Bonding in Alcohols",
      definition: "Strong dipole-dipole electrostatic attractions occurring between the electronegative oxygen atom (with lone pairs) of one alcohol molecule and the electropositive hydroxylic hydrogen of an adjacent molecule (–O–H···O–H–).",
      neetNote: "Responsible for abnormally high boiling points of alcohols compared to isomeric ethers, haloalkanes, and hydrocarbons of comparable molecular mass. Boiling point decreases with branching due to decreased surface area."
    }
  ],

  // Topic 2: Phenols Terms
  phenolsTerms: [
    {
      term: "Phenol (Carbolic Acid, C₆H₅OH)",
      definition: "An aromatic hydroxy compound where the hydroxyl group (–OH) is directly bonded to an sp²-hybridized aromatic benzene ring carbon atom. First isolated from coal tar by Runge in 1834.",
      neetNote: "Phenols are chemically distinct from aliphatic alcohols. Phenols are significantly more acidic, turn blue litmus red, form colored complexes with neutral FeCl₃, and do not undergo nucleophilic substitution of –OH under standard conditions."
    },
    {
      term: "Cumene Hydroperoxide Process",
      definition: "The principal commercial industrial synthesis of phenol from cumene (isopropylbenzene). Cumene is oxidized by air/O₂ to cumene hydroperoxide, which is then hydrolysed by dilute acid (H₂SO₄) to yield phenol and an equimolar quantity of acetone (valuable byproduct).",
      neetNote: "Highest-yield industrial method. Cumene is prepared by Friedel-Crafts alkylation of benzene with propene in the presence of H₃PO₄."
    },
    {
      term: "Resonance Stabilization of Phenoxide Ion",
      definition: "Upon loss of a proton, phenol forms the phenoxide ion (C₆H₅O⁻), where the negative charge on the oxygen atom is delocalized over the aromatic π-system across 5 resonance structures (with significant negative electron density localized at the ortho and para carbon positions).",
      neetNote: "Phenoxide ion has higher resonance stabilization energy than un-ionized phenol (which involves charge separation in resonance contributors). In contrast, aliphatic alkoxide ions (RO⁻) have localized negative charge without resonance stabilization."
    },
    {
      term: "Substituent Electronic Effects on Phenol Acidity",
      definition: "Electron-withdrawing groups (–NO₂, –CN, –X) stabilize the phenoxide ion by dispersing the negative charge, dramatically increasing acidity (lowering pKₐ). Electron-donating groups (–CH₃, –OCH₃) intensify the negative charge, destabilizing phenoxide and decreasing acidity.",
      neetNote: "Resonance (+R / -R) operates strictly at Ortho and Para positions, whereas Inductive (-I / +I) operates at all positions (decreasing with distance). Picric acid (2,4,6-trinitrophenol, pKₐ = 0.71) is more acidic than many carboxylic acids!"
    },
    {
      term: "Kolbe-Schmitt Reaction (Kolbe Carboxylation)",
      definition: "Reaction of sodium phenoxide with carbon dioxide (a weak electrophile, CO₂) at 400 K and 4–7 atm pressure, followed by acidification to produce 2-hydroxybenzoic acid (Salicylic acid) as the major product.",
      neetNote: "Sodium phenoxide generates high electron density on the ring. Salicylic acid is the direct industrial precursor for Aspirin (acetylsalicylic acid, prepared via acetylation with acetic anhydride)."
    },
    {
      term: "Reimer-Tiemann Reaction (Formylation)",
      definition: "Treatment of phenol with chloroform (CHCl₃) in the presence of aqueous alkali (NaOH) at 340 K, followed by acidic hydrolysis to yield 2-hydroxybenzaldehyde (Salicylaldehyde) as the major product.",
      neetNote: "Active electrophile is Dichlorocarbene (:CCl₂), a neutral, singlet carbene intermediate generated in situ via α-elimination of HCl from chloroform by base. If CCl₄ is used instead of CHCl₃, Salicylic acid is formed!"
    },
    {
      term: "2,4,6-Tribromophenol (Bromine Water Test)",
      definition: "When phenol is treated with aqueous bromine water (Br₂ / H₂O), it undergoes instantaneous, exhaustive electrophilic substitution at all activated positions (2, 4, 6) to precipitate a white crystalline solid of 2,4,6-tribromophenol.",
      neetNote: "In aqueous medium, phenol ionizes into phenoxide ion, which activates the ring immensely. In non-polar solvents (CS₂ or CHCl₃ at 273 K), phenol remains un-ionized and monobromination yields p-bromophenol as the major product!"
    },
    {
      term: "Picric Acid (2,4,6-Trinitrophenol)",
      definition: "An intensely yellow, strongly acidic crystalline aromatic compound obtained by treating phenol with concentrated nitric acid (conc. HNO₃) in the presence of concentrated H₂SO₄. Industrially prepared via 2,4-phenoldisulphonic acid to prevent oxidative ring destruction.",
      neetNote: "Contains NO carboxylic group (–COOH), yet its pKₐ is 0.71 (stronger than acetic acid and benzoic acid) because three strongly electron-withdrawing –NO₂ groups at positions 2, 4, and 6 disperse the negative charge exceptionally."
    },
    {
      term: "Neutral Ferric Chloride Test (FeCl₃ Test)",
      definition: "Phenols react with neutral aqueous ferric chloride solution to produce intense characteristic purple/violet or green colored water-soluble coordination complexes of the general formula [Fe(OC₆H₅)₆]³⁻.",
      neetNote: "Definitive qualitative laboratory test to distinguish phenols from aliphatic alcohols (which give no colour with neutral FeCl₃)."
    },
    {
      term: "Sodium Bicarbonate Non-Reaction Trap",
      definition: "Phenols are weaker acids (pKₐ ~ 10) than carbonic acid (H₂CO₃, pKₐ ~ 6.35) and therefore CANNOT decompose sodium bicarbonate (NaHCO₃) to evolve effervescence of CO₂ gas under ordinary conditions.",
      neetNote: "Critical NEET diagnostic trap: Carboxylic acids evolve CO₂ with NaHCO₃, but ordinary phenol does not. Exception: Strongly acidic nitrophenols like Picric acid (pKₐ 0.71) and 2,4-dinitrophenol DO evolve CO₂ from NaHCO₃!"
    }
  ],

  // Topic 3: Ethers Terms
  ethersTerms: [
    {
      term: "Ether (Alkoxyalkane, R–O–R')",
      definition: "Organic compounds in which an oxygen atom is bonded to two alkyl or aryl groups (R–O–R' or Ar–O–R). Regarded as dialkyl derivatives of water or monoalkyl derivatives of alcohols with a bent tetrahedral geometry (C–O–C bond angle ~ 111.7° in dimethyl ether due to steric repulsion between bulky alkyl groups).",
      neetNote: "Classified into symmetrical/simple ethers (R = R', e.g., diethyl ether) and unsymmetrical/mixed ethers (R ≠ R', e.g., ethyl methyl ether, anisole)."
    },
    {
      term: "Williamson Ether Synthesis",
      definition: "The most versatile laboratory method for the preparation of symmetrical and unsymmetrical ethers. Involves the nucleophilic substitution (S_N2 mechanism) of an alkyl halide (R'–X) by a sodium or potassium alkoxide (R–O⁻ Na⁺) or phenoxide (Ar–O⁻ Na⁺).",
      neetNote: "Crucial NEET rule: The alkyl halide MUST be PRIMARY (1°) or methyl. If a 3° alkyl halide is used with alkoxide base, E2 elimination completely predominates, yielding exclusively an ALKENE instead of an ether!"
    },
    {
      term: "Acidic Cleavage of Ethers by Hydrogen Halides (HI / HBr)",
      definition: "The cleavage of the dialkyl C–O ether bond by heating with concentrated hydriodic acid (HI) or hydrobromic acid (HBr) at 373 K. Reactivity of hydrogen halides follows: HI > HBr > HCl (due to bond dissociation energy and iodide nucleophilicity).",
      neetNote: "Mechanism bifurcates based on alkyl substitution: (1) Primary/secondary ethers cleave via S_N2, where I⁻ attacks the smaller, less sterically hindered alkyl group; (2) Tertiary alkyl ethers cleave via S_N1, where the stable 3° carbocation forms first and reacts with I⁻ to give 3° alkyl iodide."
    },
    {
      term: "Anisole (Methoxybenzene, C₆H₅OCH₃) Cleavage with HI",
      definition: "When an alkyl aryl ether like anisole is heated with concentrated HI, it undergoes selective cleavage to produce phenol (C₆H₅OH) and methyl iodide (CH₃I). Phenol is NEVER converted to iodobenzene.",
      neetNote: "Why: The C(sp²)–O bond in anisole possesses partial double bond character due to resonance and is much stronger (higher bond dissociation energy) than the alkyl C(sp³)–O bond. Protonated oxygen remains with the phenyl ring to form phenol."
    },
    {
      term: "Electrophilic Substitution of Anisole",
      definition: "The methoxy group (–OCH₃) in anisole is a strong activating group and an ortho/para-director due to the +R resonance effect (+R > -I). It activates the aromatic ring toward electrophilic aromatic substitution (bromination, nitration, Friedel-Crafts alkylation and acylation).",
      neetNote: "Bromination of anisole occurs in ethanoic acid (CH₃COOH) even without a Lewis acid catalyst (FeBr₃) to yield 90% p-bromoanisole (major product) due to massive ring activation."
    },
    {
      term: "Ether Peroxide Formation & Hazard",
      definition: "Ethers containing α-hydrogens slowly react with atmospheric oxygen in the presence of light to form hazardous, highly explosive dialkyl peroxides and hydroperoxides [R–CH(OOH)–O–R].",
      neetNote: "NEET practical test: Detected by adding acidified ferrous sulphate (FeSO₄) followed by potassium thiocyanate (KCNS) — oxidation of Fe²⁺ to Fe³⁺ produces an intense blood-red complex [Fe(SCN)]²⁺. Peroxides are removed by distillation with ferrous salts."
    }
  ]
};
