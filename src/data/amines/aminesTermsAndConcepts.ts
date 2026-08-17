export const AMINES_CONCEPTS = {
  aminesTerms: [
    {
      term: "Primary, Secondary & Tertiary Amines",
      definition: "Organic nitrogen derivatives of ammonia (NH₃) classified by the number of carbon atoms directly attached to the nitrogen atom: 1° (R–NH₂, one C–N bond), 2° (R₂NH, two C–N bonds), and 3° (R₃N, three C–N bonds). Quaternary ammonium salts (R₄N⁺ X⁻) have four C–N bonds with a formal positive charge on nitrogen.",
      neetNote: "Classification depends entirely on the number of alkyl/aryl groups on NITROGEN, NOT on the nature of the carbon atom (unlike alcohols or alkyl halides where 1°/2°/3° refers to the carbon bearing –OH or –X)."
    },
    {
      term: "Pyramidal Geometry & Nitrogen Inversion",
      definition: "Nitrogen in amines is sp³ hybridized with a trigonal pyramidal geometry (one vertex occupied by a non-bonding lone pair). In trimethylamine, the C–N–C bond angle is 108°. Aliphatic amines undergo rapid pyramidal umbrella inversion (flipping) through a planar sp² transition state with an activation barrier of ~25 kJ/mol at room temperature.",
      neetNote: "Due to rapid nitrogen inversion at room temperature, chiral tertiary amines with three different alkyl groups cannot be resolved into enantiomers."
    },
    {
      term: "Basicity of Amines & pKb Values",
      definition: "Amines are basic due to the availability of an unshared lone pair of electrons on nitrogen to accept a proton (Brønsted-Lowry base) or coordinate with an electron-deficient species (Lewis base). Basicity is quantified by Kb (equilibrium constant of protonation) and pKb = –log₁₀ Kb. A smaller pKb value signifies a stronger base.",
      neetNote: "Aliphatic amines (pKb ≈ 3.0 to 3.5) are stronger bases than ammonia (pKb = 4.75), which in turn is ~10⁶ times stronger than aniline (pKb = 9.38)."
    },
    {
      term: "Resonance in Aniline (+R Effect)",
      definition: "In aromatic amines like aniline (C₆H₅NH₂), the unshared lone pair of electrons on nitrogen is delocalised into the aromatic ring through resonance across 5 canonical structures. This creates partial double-bond character in the C–N bond (1.37 Å vs 1.47 Å in aliphatic amines) and lowers electron density on nitrogen, drastically reducing its basicity.",
      neetNote: "Protonated anilinium ion (C₆H₅NH₃⁺) has only 2 resonance structures, making protonation of aniline thermodynamically disfavoured compared to alkylamines."
    },
    {
      term: "Ortho Effect in Substituted Anilines",
      definition: "Regardless of whether the ortho-substituent is electron-donating (+I, +M like –CH₃, –OCH₃) or electron-withdrawing (–I, –M like –NO₂, –Cl), almost ALL ortho-substituted anilines are weaker bases than aniline itself. This is due to steric hindrance to protonation and loss of coplanarity causing steric inhibition of resonance.",
      neetNote: "o-Toluidine and o-nitroaniline are both weaker bases than aniline. (Compare with ortho effect in benzoic acids where ortho-substituted acids are always STRONGER acids)."
    },
    {
      term: "Gabriel Phthalimide Synthesis",
      definition: "A specific synthetic method for preparing pure primary aliphatic amines. Phthalimide reacts with ethanolic KOH to form potassium phthalimide, which undergoes nucleophilic SN2 substitution with an alkyl halide (R–X) to give N-alkylphthalimide. Subsequent alkaline hydrolysis with aqueous NaOH yields a pure 1° aliphatic amine and sodium phthalate.",
      neetNote: "Aromatic primary amines (aniline) CANNOT be prepared by Gabriel synthesis because aryl halides do not undergo nucleophilic SN2 substitution under these conditions."
    },
    {
      term: "Hofmann Bromamide Degradation",
      definition: "Conversion of a primary carboxamide (R–CONH₂) into a primary amine (R–NH₂) having ONE LESS carbon atom by treatment with bromine (Br₂) in aqueous or ethanolic sodium hydroxide (NaOH/KOH). Intermediates include N-bromoamide, acylnitrene, and alkyl isocyanate (R–N=C=O).",
      neetNote: "The migrating alkyl/aryl group migrates from carbonyl carbon to electron-deficient nitrogen with COMPLETE RETENTION of stereochemical configuration. 1 mol amide consumes 1 mol Br₂ and 4 mol NaOH."
    },
    {
      term: "Carbylamine Reaction (Isocyanide Test)",
      definition: "Diagnostic test exclusively for PRIMARY amines (both aliphatic and aromatic). When warmed with chloroform (CHCl₃) and alcoholic potassium hydroxide (alc. KOH), 1° amines form intensely foul-smelling isocyanides (carbylamines, R–NC) via a dichlorocarbene (:CCl₂) reactive intermediate.",
      neetNote: "Secondary (2°) and tertiary (3°) amines lack two acidic protons on nitrogen and DO NOT give this reaction. This is the definitive test to identify primary amines."
    },
    {
      term: "Hinsberg Reagent (Benzenesulphonyl Chloride)",
      definition: "Benzenesulphonyl chloride (C₆H₅SO₂Cl), used to separate and distinguish 1°, 2°, and 3° amines. 1° amines form N-alkylbenzenesulphonamide (soluble in alkali due to acidic N–H). 2° amines form N,N-dialkylbenzenesulphonamide (insoluble in alkali, no acidic H). 3° amines do not react.",
      neetNote: "p-Toluenesulphonyl chloride (Tosyl chloride) is also used as an alternative Hinsberg reagent in modern laboratory practice."
    },
    {
      term: "Schotten-Baumann Reaction (Benzoylation)",
      definition: "The reaction of primary or secondary amines (or phenols/alcohols) with benzoyl chloride (C₆H₅COCl) in the presence of an aqueous base (such as NaOH or pyridine) to produce benzamides. The base neutralizes the liberated HCl, driving the acylation to completion.",
      neetNote: "Aniline + C₆H₅COCl + aq. NaOH ⟶ Benzanilide (C₆H₅NHCOC₆H₅) + NaCl + H₂O."
    }
  ],

  diazoniumTerms: [
    {
      term: "Arenediazonium Salts (Ar–N₂⁺ X⁻)",
      definition: "Ionic compounds containing the diazonium group (–N⁺≡N) directly attached to an aromatic ring, balanced by an anion (X⁻ = Cl⁻, Br⁻, HSO₄⁻, BF₄⁻). Aromatic diazonium salts are stable in ice-cold aqueous solution (0–5 °C) due to resonance delocalisation of positive charge into the benzene ring.",
      neetNote: "Aliphatic diazonium salts (R–N₂⁺) are extremely unstable and spontaneously decompose at 0 °C to evolve N₂ gas and generate carbocations."
    },
    {
      term: "Diazotisation Reaction",
      definition: "The conversion of a primary aromatic amine (e.g., aniline) into an arenediazonium salt by reaction with sodium nitrite (NaNO₂) and excess mineral acid (HCl or H₂SO₄) at 273–278 K (0–5 °C). Nitrous acid (HNO₂) is generated in situ, forming the reactive nitrosonium ion electrophile (:N⁺=O).",
      neetNote: "Temperature must be strictly maintained between 0–5 °C. Above 5 °C, benzenediazonium chloride undergoes spontaneous hydrolysis with water to yield phenol and nitrogen gas."
    },
    {
      term: "Sandmeyer Reaction",
      definition: "The replacement of the diazonium group (–N₂⁺) in arenediazonium chloride by chloro (–Cl), bromo (–Br), or cyano (–CN) groups by treating with cuprous salts (Cu₂Cl₂/HCl, Cu₂Br₂/HBr, or CuCN/KCN). Proceeds via aryl radical intermediates.",
      neetNote: "Sandmeyer reaction gives significantly higher yields than the Gattermann reaction. Note: Preparation of Ar–I does NOT use cuprous iodide; it requires only warm aqueous potassium iodide (KI)."
    },
    {
      term: "Gattermann Reaction",
      definition: "Modification of the Sandmeyer reaction wherein the diazonium group is replaced by chlorine or bromine using finely divided metallic copper powder in the presence of concentrated hydrochloric acid (HCl) or hydrobromic acid (HBr).",
      neetNote: "Reagents: Cu powder / HCl ⟶ Ar–Cl; Cu powder / HBr ⟶ Ar–Br. Gives lower yields compared to cuprous halide (Sandmeyer) method."
    },
    {
      term: "Balz-Schiemann Reaction",
      definition: "The premier method for the synthesis of aryl fluorides (Ar–F). Benzenediazonium chloride is treated with fluoroboric acid (HBF₄) to precipitate water-insoluble benzenediazonium fluoroborate (Ar–N₂⁺ BF₄⁻), which upon dry heating decomposes smoothly to give fluorobenzene, boron trifluoride (BF₃), and nitrogen gas (N₂).",
      neetNote: "Direct fluorination of benzene is violently explosive. Balz-Schiemann is the only controlled laboratory route for preparing pure fluorobenzene."
    },
    {
      term: "Azo Coupling Reaction",
      definition: "Electrophilic aromatic substitution where the weakly electrophilic arenediazonium cation (Ar–N₂⁺) attacks an electron-rich aromatic substrate (phenol or aromatic amine) at the para-position to form brightly colored azo compounds containing the –N=N– azo linkage.",
      neetNote: "Coupling with Phenol requires mildly alkaline pH (9–10) to generate phenoxide ion nucleophile ⟶ p-hydroxyazobenzene (Orange dye). Coupling with Aniline requires mildly acidic pH (4–5) ⟶ p-aminoazobenzene (Yellow dye)."
    },
    {
      term: "Deamination (Replacement of –N₂⁺ by –H)",
      definition: "Reduction of arenediazonium salts to parent arenes (e.g., benzenediazonium chloride to benzene) by mild reducing agents such as hypophosphorous acid (phosphinic acid, H₃PO₂ in the presence of catalytic Cu⁺) or ethanol (CH₃CH₂OH), with the simultaneous liberation of N₂ gas.",
      neetNote: "H₃PO₂ is oxidised to phosphorous acid (H₃PO₃), and CH₃CH₂OH is oxidised to ethanal (CH₃CHO). Crucial in directing-group removal strategies."
    }
  ]
};
