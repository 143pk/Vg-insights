// NCERT-aligned Terms, Concepts, and Comprehensive Explanations for Chapter 21: Aldehydes, Ketones and Carboxylic Acids

export const ALDEHYDES_KETONES_CONCEPTS = {
  // Topic 1: Aldehydes & Ketones Terms
  carbonylTerms: [
    {
      term: "Carbonyl Functional Group (>C=O)",
      definition: "A divalent functional group consisting of a carbon atom doubly bonded to an oxygen atom (>C=O). The carbonyl carbon is sp² hybridized, planar (120° bond angles), and strongly polarized due to oxygen's higher electronegativity (3.44 vs 2.55).",
      neetNote: "The electrophilic nature of the carbonyl carbon (δ+) makes it the primary site for nucleophilic addition reactions (Nu⁻ attack), while the carbonyl oxygen (δ-) acts as a nucleophile or proton acceptor."
    },
    {
      term: "Aldehyde vs Ketone Structural Distinction",
      definition: "In aldehydes (R–CHO), the carbonyl group is bonded to at least one hydrogen atom and one alkyl/aryl group (or two H in HCHO), positioning the C=O at the chain terminus. In ketones (R–CO–R'), the carbonyl carbon is bonded to two carbon-containing groups (symmetrical or unsymmetrical).",
      neetNote: "Aldehydes are substantially more reactive than ketones towards nucleophilic addition due to lower steric hindrance and smaller +I inductive electron donation."
    },
    {
      term: "Bürgi-Dunitz Trajectory (~107°)",
      definition: "The optimal angle of nucleophilic attack on a trigonal planar sp² carbonyl carbon. The nucleophile approaches at approximately 107° relative to the C=O double bond rather than perpendicular (90°) to maximize overlap with the π* antibonding orbital while minimizing electrostatic repulsion from oxygen lone pairs.",
      neetNote: "This trajectory causes tetrahedral deformation of the planar carbonyl center into an sp³-hybridized tetrahedral alkoxide intermediate."
    },
    {
      term: "Cyanohydrin Formation",
      definition: "Addition of hydrogen cyanide (HCN) to aldehydes or ketones in the presence of a base (catalytic OH⁻) to yield cyanohydrins [>C(OH)CN]. Base generates the active nucleophile :CN⁻ from weak acid HCN (Ka = 4.9 × 10⁻¹⁰).",
      neetNote: "Cyanohydrins are synthetic linchpins: complete acid hydrolysis yields α-hydroxy carboxylic acids [>C(OH)COOH, e.g., lactic acid], while reduction with LiAlH₄ produces β-amino alcohols [>C(OH)CH₂NH₂]."
    },
    {
      term: "Sodium Bisulfite Addition Compound",
      definition: "Reversible nucleophilic addition of saturated aqueous NaHSO₃ to aldehydes and methyl ketones to form crystalline, water-soluble bisulfite addition adducts [>C(OH)SO₃⁻Na⁺]. The nucleophilic attack occurs through sulfur rather than oxygen due to sulfur's higher polarizability.",
      neetNote: "Crucial for purification and separation: treatment of the bisulfite adduct with dilute acid or aqueous alkali regenerates the pure original carbonyl compound."
    },
    {
      term: "Acetal and Ketal Formation",
      definition: "Reversible addition of alcohols to aldehydes/ketones catalyzed by dry HCl gas. Addition of 1 equivalent of monohydric alcohol yields an unstable Hemiacetal [R–CH(OH)(OR')], which reacts with a 2nd equivalent to produce a stable gem-dialkoxy Acetal [R–CH(OR')₂]. Ketones react with 1,2-glycols to form stable cyclic ethylene ketals.",
      neetNote: "Dry HCl protonates the carbonyl oxygen to increase electrophilicity and absorbs water to shift the equilibrium forward. Acetals and ketals are stable in aqueous base but hydrolyze rapidly in aqueous dilute acid."
    },
    {
      term: "Rosenmund Reduction",
      definition: "Catalytic hydrogenation of acyl chlorides (acid chlorides, RCOCl) over palladium supported on barium sulfate poisoned with sulfur or quinoline (Pd–BaSO₄ / S, Lindlar-type poisoned catalyst) in boiling xylene to yield aldehydes.",
      neetNote: "The catalyst poison (BaSO₄ + sulfur/quinoline) selectively deactivates the catalyst to prevent further reduction of the resulting aldehyde into a primary alcohol. Formaldehyde cannot be prepared this way as formyl chloride is unstable at room temperature."
    },
    {
      term: "Stephen Reduction",
      definition: "Reduction of alkyl or aryl nitriles (R–C≡N) with stannous chloride and concentrated hydrochloric acid (SnCl₂ + HCl) at room temperature to form an aldimine hydrochloride intermediate [R–CH=NH·HCl], which upon subsequent steam distillation/hydrolysis yields the corresponding aldehyde (R–CHO).",
      neetNote: "Alternative modern reagent: DIBAL-H (Diisobutylaluminium hydride, [(i-Bu)₂AlH]) selectively reduces nitriles and esters to aldehydes at -78°C without reducing double bonds."
    },
    {
      term: "Etard Reaction",
      definition: "Controlled mild oxidation of toluene or substituted methylbenzenes to benzaldehydes using chromyl chloride (CrO₂Cl₂) in non-polar solvent (CS₂ or CCl₄). It forms a brown chromium complex [C₆H₅CH(OCrOHCl₂)₂], which on mild aqueous hydrolysis gives benzaldehyde.",
      neetNote: "Chromyl chloride prevents over-oxidation of the methyl side chain to benzoic acid, stopping cleanly at the aldehyde stage."
    },
    {
      term: "Gattermann-Koch Reaction",
      definition: "Formylation of benzene or substituted arenes by treatment with carbon monoxide (CO) and hydrogen chloride (HCl) gas in the presence of anhydrous aluminium chloride (anh. AlCl₃) and a trace of cuprous chloride (CuCl) to yield benzaldehyde.",
      neetNote: "The formylating species generated in situ is formyl chloride [H–C(=O)–Cl], acting as an electrophile in Friedel-Crafts formylation."
    }
  ],

  // Topic 2: Important Reactions & Named Reactions Terms
  reactionsTerms: [
    {
      term: "Tollens' Test (Silver Mirror Test)",
      definition: "Oxidation of aldehydes using Tollens' reagent—an ammoniacal solution of silver nitrate ([Ag(NH₃)₂]⁺ OH⁻) prepared by adding aqueous ammonia to AgNO₃ until the initial Ag₂O precipitate redissolves. Aldehydes are oxidized to carboxylate anions, while Ag⁺ is reduced to metallic silver.",
      neetNote: "Responds to ALL aldehydes (both aliphatic and aromatic), formic acid (HCOOH), and α-hydroxy ketones (fructose). Ordinary ketones do NOT give this test."
    },
    {
      term: "Fehling's Test",
      definition: "Redox diagnostic test using Fehling's reagent, a freshly prepared mixture of equal volumes of Fehling A (aqueous copper sulphate, CuSO₄) and Fehling B (alkaline solution of sodium potassium tartrate / Rochelle salt). Aldehydes reduce blue Cu²⁺ to a brick-red precipitate of cuprous oxide (Cu₂O).",
      neetNote: "CRITICAL NEET EXCEPTION: Aliphatic aldehydes give a positive brick-red precipitate; AROMATIC ALDEHYDES (e.g., benzaldehyde C₆H₅CHO) DO NOT reduce Fehling's solution!"
    },
    {
      term: "Schiff's Test",
      definition: "Diagnostic test for aldehydes using Schiff's reagent (p-rosaniline hydrochloride / fuchsine dye decolorized by bubbling sulfur dioxide SO₂ gas). Aldehydes restore the characteristic pink/magenta/violet color without heating.",
      neetNote: "Ketones generally do not restore the color (acetone restores it very slowly). Does not require boiling, preventing degradation of heat-sensitive aldehydes."
    },
    {
      term: "Aldol Condensation",
      definition: "Base-catalyzed reaction of aldehydes or ketones containing at least one α-hydrogen in the presence of dilute alkali (dil. NaOH, Ba(OH)₂). Generates a β-hydroxy aldehyde (aldol) or β-hydroxy ketone (ketol), which upon subsequent warming easily eliminates water to form an α,β-unsaturated carbonyl compound.",
      neetNote: "Requirement: AT LEAST ONE α-HYDROGEN. The α-hydrogens are acidic (pKa ~ 19-20) due to resonance stabilization of the enolate carbanion by the adjacent C=O group."
    },
    {
      term: "Crossed (Mixed) Aldol Condensation",
      definition: "Aldol condensation between two different carbonyl compounds. If both contain α-hydrogens, a mixture of four distinct condensation products is obtained. If one partner lacks α-hydrogens (e.g., benzaldehyde or formaldehyde) and is reacted with one having α-hydrogens in excess, a single major crossed condensation product is cleanly formed (Claisen-Schmidt reaction).",
      neetNote: "Example: Benzaldehyde + Acetophenone + dil. NaOH ⟶ 1,3-Diphenylprop-2-en-1-one (Benzalacetophenone / Chalcone, 100% crossed product)."
    },
    {
      term: "Cannizzaro Reaction",
      definition: "Self oxidation-reduction (disproportionation / redox) of aldehydes LACKING α-hydrogens upon heating with concentrated alkali (50% NaOH or KOH). One molecule is reduced to an alcohol, while the other is oxidized to a carboxylic acid salt.",
      neetNote: "Key examples: Formaldehyde (HCHO ⟶ CH₃OH + HCOONa), Benzaldehyde (C₆H₅CHO ⟶ C₆H₅CH₂OH + C₆H₅COONa), and Trimethylacetaldehyde ((CH₃)₃C–CHO). In Crossed Cannizzaro with HCHO, formaldehyde is ALWAYS oxidized to formate because of superior electrophilicity."
    },
    {
      term: "Haloform Reaction & Iodoform Test",
      definition: "Oxidative cleavage of methyl ketones (R–CO–CH₃) or compounds containing the CH₃–C(=O)– or CH₃–CH(OH)– structural unit when treated with halogen (X₂ = Cl₂, Br₂, I₂) and excess aqueous NaOH (sodium hypohalite, NaOX). Produces a haloform (CHX₃) and a sodium carboxylate salt containing one less carbon.",
      neetNote: "Iodoform test (I₂ + NaOH / NaOI) forms a characteristic yellow crystalline precipitate of triiodomethane (CHI₃, mp 119°C) with an antiseptic smell. Distinguishes ethanal from other aldehydes, and pentan-2-one from pentan-3-one!"
    },
    {
      term: "Clemmensen Reduction",
      definition: "Deoxygenation of aldehydes and ketones to corresponding alkanes (>C=O ⟶ >CH₂) using zinc amalgam and concentrated hydrochloric acid [Zn(Hg) / conc. HCl] under reflux.",
      neetNote: "Takes place in strongly ACIDIC medium. Suitable for acid-stable substrates; completely unsuitable for compounds containing acid-sensitive groups like –OH, –OR, or C=C (which undergo addition/dehydration)."
    },
    {
      term: "Wolff-Kishner Reduction",
      definition: "Reduction of carbonyl compounds to methylene groups (>C=O ⟶ >CH₂) by heating the hydrazone intermediate with potassium hydroxide (KOH) in a high-boiling solvent like ethylene glycol (453-473 K), liberating nitrogen gas (N₂↑).",
      neetNote: "Takes place in strongly BASIC medium. Ideal for acid-sensitive compounds, but unsuitable for base-sensitive substrates (e.g., compounds with ester or alkyl halide groups)."
    },
    {
      term: "Popoff's Rule",
      definition: "Empirical rule governing the destructive vigorous oxidation of unsymmetrical ketones with concentrated HNO₃ or hot alkaline KMnO₄: the carbonyl group stays preferentially with the smaller alkyl group during C–C bond cleavage.",
      neetNote: "Example: Butan-2-one (CH₃–CO–CH₂–CH₃) upon vigorous oxidation cleaves predominantly between C2 and C3 yielding 2 molecules of ethanoic acid (CH₃COOH)."
    }
  ],

  // Topic 3: Carboxylic Acids Terms
  carboxylicAcidsTerms: [
    {
      term: "Carboxyl Group (–COOH)",
      definition: "A composite functional group consisting of a carbonyl group (>C=O) directly attached to a hydroxyl group (–OH). The carbon atom is sp² hybridized, planar, and exhibits substantial resonance delocalization.",
      neetNote: "Unlike isolated carbonyl compounds, the –COOH group does not undergo typical nucleophilic addition reactions because resonance donation from the hydroxyl oxygen lone pair reduces the electrophilicity of the carbonyl carbon."
    },
    {
      term: "Carboxylate Anion Resonance Stabilization",
      definition: "The conjugate base (RCOO⁻) formed upon deprotonation of a carboxylic acid. It is stabilized by two completely equivalent resonance structures where the negative charge is distributed symmetrically over two electronegative oxygen atoms with identical C–O bond lengths (127 pm).",
      neetNote: "Explains why carboxylic acids (pKa ~ 4-5) are far more acidic than phenols (pKa ~ 10) and alcohols (pKa ~ 16). In phenoxide, negative charge is delocalized over less electronegative carbons in non-equivalent forms."
    },
    {
      term: "Substituent Inductive & Mesomeric Effects on Acidity",
      definition: "Electron-withdrawing groups (–I / –M, e.g., –NO₂, –CN, –F, –Cl) stabilize the carboxylate anion by dispersing negative charge, markedly increasing acid strength (lowering pKa). Electron-donating groups (+I / +M, e.g., –CH₃, –OCH₃) destabilize the anion, decreasing acid strength.",
      neetNote: "Inductive effect diminishes rapidly with distance from the –COOH group: 2-chlorobutanoic acid > 3-chlorobutanoic acid > 4-chlorobutanoic acid > butanoic acid."
    },
    {
      term: "Ortho Effect in Substituted Benzoic Acids",
      definition: "Steric and electronic phenomenon wherein almost all ortho-substituted benzoic acids (e.g., o-nitrobenzoic acid, o-toluic acid, o-halobenzoic acids) are significantly stronger acids than benzoic acid and their corresponding meta- and para-isomers, regardless of whether the ortho substituent is electron-withdrawing or electron-donating.",
      neetNote: "Steric crowding forces the –COOH group out of the plane of the benzene ring, preventing destabilizing cross-conjugation of the ring π-electrons with the carbonyl group, thereby enhancing carboxylate resonance."
    },
    {
      term: "Sodium Bicarbonate Test (NaHCO₃ Test)",
      definition: "Diagnostic chemical test for carboxylic acids: treatment of RCOOH with saturated aqueous sodium bicarbonate (NaHCO₃) produces vigorous effervescence due to liberation of carbon dioxide gas (CO₂↑).",
      neetNote: "RCOOH + NaHCO₃ ⟶ RCOONa + H₂O + CO₂↑. Phenols (except highly acidic nitrophenols like picric acid) do NOT decompose NaHCO₃, providing a foolproof distinction between carboxylic acids and phenols."
    },
    {
      term: "Fischer Esterification",
      definition: "Reversible acid-catalyzed nucleophilic acyl substitution reaction between a carboxylic acid and an alcohol in the presence of concentrated H₂SO₄ or dry HCl gas to yield an ester and water.",
      neetNote: "Isotopic labeling (¹⁸O) proves that the –OH group is lost from the CARBOXYLIC ACID and the –H is lost from the ALCOHOL: R–CO–OH + H–O*–R' ⇌ R–CO–O*–R' + H₂O."
    },
    {
      term: "Soda-Lime Decarboxylation",
      definition: "Thermal cleavage of carbon dioxide from sodium salts of carboxylic acids (RCOONa) by heating with soda lime (a dry mixture of NaOH and CaO in 3:1 ratio by weight) to produce an alkane containing ONE LESS carbon atom (carbon chain degradation).",
      neetNote: "RCOONa + NaOH xrightarrow[Δ]{CaO} R–H + Na₂CO₃. CaO keeps the mixture porous, prevents glass corrosion, and acts as a dehydrating agent."
    },
    {
      term: "Hell-Volhard-Zelinsky (HVZ) Reaction",
      definition: "Selective α-halogenation of aliphatic carboxylic acids having at least one α-hydrogen upon treatment with chlorine (Cl₂) or bromine (Br₂) in the presence of a catalytic amount of red phosphorus (P), followed by aqueous workup to yield α-halocarboxylic acids.",
      neetNote: "R–CH₂–COOH xrightarrow[H₂O]{(i) Br₂ / Red P} R–CH(Br)–COOH (α-Bromocarboxylic acid). Carboxylic acids lacking α-hydrogen (e.g., HCOOH, (CH₃)₃CCOOH, C₆H₅COOH) DO NOT undergo the HVZ reaction."
    }
  ]
};
