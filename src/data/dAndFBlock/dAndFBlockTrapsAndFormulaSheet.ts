export const D_AND_F_BLOCK_TRAPS_AND_FORMULAS = {
  commonTraps: [
    {
      id: "trap-df-1",
      topic: "Definition of Transition Elements",
      wrongAssumption: "Assuming Zinc (Zn), Cadmium (Cd), and Mercury (Hg) are transition elements because they belong to the d-block.",
      correctConcept: "By IUPAC definition, a transition element is defined as an element which has incompletely filled d-orbitals in its ground state OR in any of its common oxidation states. Zn, Cd, and Hg have full d¹⁰ configurations in both their ground state (d¹⁰ s²) and +2 ionic state (d¹⁰). Thus, they are d-block elements but NOT transition elements.",
      whyItMattersForNEET: "Classic NEET statement-based and assertion-reasoning question."
    },
    {
      id: "trap-df-2",
      topic: "Electronic Configuration of Cr & Cu",
      wrongAssumption: "Writing Chromium as [Ar] 3d⁴ 4s² and Copper as [Ar] 3d⁹ 4s² according to the Aufbau principle.",
      correctConcept: "Chromium is [Ar] 3d⁵ 4s¹ and Copper is [Ar] 3d¹⁰ 4s¹ because exactly half-filled (3d⁵) and completely filled (3d¹⁰) subshells have symmetrical charge distribution and maximum exchange energy, granting extra stability.",
      whyItMattersForNEET: "Tested frequently in electron counting and quantum number questions."
    },
    {
      id: "trap-df-3",
      topic: "Electron Removal Order in Ion Formation",
      wrongAssumption: "Removing electrons from the 3d orbital first when ionizing transition metals because 3d fills after 4s.",
      correctConcept: "When neutral atoms are ionized (e.g. Fe → Fe²⁺), electrons are ALWAYS removed from the outermost 4s orbital first, not from 3d! Thus, Fe = [Ar] 3d⁶ 4s² becomes Fe²⁺ = [Ar] 3d⁶ 4s⁰.",
      whyItMattersForNEET: "Prevents wrong unpaired electron counting and magnetic moment values."
    },
    {
      id: "trap-df-4",
      topic: "Stability of Cu²⁺(aq) vs Cu⁺(aq)",
      wrongAssumption: "Assuming Cu⁺(aq) (3d¹⁰) is more stable in water than Cu²⁺(aq) (3d⁹) due to its fully filled d-subshell.",
      correctConcept: "In aqueous solution, Cu²⁺(aq) is much more stable than Cu⁺(aq). In fact, Cu⁺ undergoes spontaneous disproportionation in water (2 Cu⁺(aq) → Cu²⁺(aq) + Cu(s)). This is because the high hydration enthalpy of the small, doubly-charged Cu²⁺ ion more than compensates for the second ionization enthalpy of copper.",
      whyItMattersForNEET: "High-yield NCERT reasoning question in NEET."
    },
    {
      id: "trap-df-5",
      topic: "Origin of Colour in KMnO₄ & K₂Cr₂O₇",
      wrongAssumption: "Assuming the intense purple colour of KMnO₄ and orange colour of K₂Cr₂O₇ is due to d-d transitions.",
      correctConcept: "In KMnO₄ (Mn⁷⁺) and K₂Cr₂O₇ (Cr⁶⁺), both central metal ions have 3d⁰ configurations (zero d-electrons). Therefore, d-d transitions are impossible! Their intense colours arise from Ligand-to-Metal Charge Transfer (L → M CT), where charge is momentarily transferred from O²⁻ (2p) to the empty d-orbitals of Mn⁷⁺ or Cr⁶⁺.",
      whyItMattersForNEET: "Favorite assertion-reasoning trap in NEET."
    },
    {
      id: "trap-df-6",
      topic: "Oxidation of Iodide by KMnO₄ in Neutral vs Acidic Medium",
      wrongAssumption: "Assuming KMnO₄ oxidizes I⁻ to I₂ in all media.",
      correctConcept: "In ACIDIC medium, KMnO₄ oxidizes I⁻ to I₂ (violet/brown). However, in NEUTRAL or FAINTLY ALKALINE medium (Bayer's reagent), KMnO₄ oxidizes I⁻ to Iodate ion (IO₃⁻), while MnO₄⁻ is reduced to brown MnO₂.",
      whyItMattersForNEET: "Appeared in NEET 2022 directly as a 4-mark question."
    },
    {
      id: "trap-df-7",
      topic: "Acidification of KMnO₄ with HCl",
      wrongAssumption: "Thinking that concentrated or dilute HCl can be used to acidify KMnO₄ solutions for redox titrations.",
      correctConcept: "HCl cannot be used because KMnO₄ is a stronger oxidizing agent than Cl₂. KMnO₄ would oxidize Cl⁻ ions in HCl to chlorine gas (Cl₂), leading to an erroneous titration titre. Dilute H₂SO₄ is the only suitable acid because sulphate cannot be further oxidized.",
      whyItMattersForNEET: "Practical chemistry and theory question in NEET."
    },
    {
      id: "trap-df-8",
      topic: "Chromate-Dichromate pH Equilibrium",
      wrongAssumption: "Assuming adding acid (lowering pH) turns potassium dichromate solution yellow.",
      correctConcept: "2 CrO₄²⁻ (Yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (Orange) + H₂O. Adding acid (low pH) shifts equilibrium to the right, forming orange Cr₂O₇²⁻. Adding alkali / base (high pH) consumes H⁺ and shifts equilibrium to the left, forming yellow CrO₄²⁻.",
      whyItMattersForNEET: "Crucial Le Chatelier & inorganic reaction concept."
    },
    {
      id: "trap-df-9",
      topic: "Lanthanoid Contraction and Zr-Hf Twin Pair",
      wrongAssumption: "Assuming Hafnium (Hf) has a much larger atomic radius than Zirconium (Zr) because Hf has an extra shell of electrons.",
      correctConcept: "Because the 14 lanthanoid elements (4f filling) lie between La and Hf, the poor shielding of 4f electrons causes the Lanthanoid Contraction. This contraction pulls the 5d electrons inward, making the atomic radius of Hf (159 pm) almost identical to Zr (160 pm).",
      whyItMattersForNEET: "NEET 2023, 2020, and 2018 question."
    },
    {
      id: "trap-df-10",
      topic: "Basicity of Lanthanoid Hydroxides",
      wrongAssumption: "Thinking Lu(OH)₃ is more basic than La(OH)₃ because atomic number is higher.",
      correctConcept: "Due to Lanthanoid Contraction, ionic radius decreases: La³⁺ (106 pm) > ... > Lu³⁺ (86 pm). By Fajan's rule, smaller Lu³⁺ has higher polarizing power, increasing covalent character of the Lu-OH bond. Thus, La(OH)₃ is the MOST basic and Lu(OH)₃ is the LEAST basic.",
      whyItMattersForNEET: "NEET 2021 verified question."
    },
    {
      id: "trap-df-11",
      topic: "Reducing Nature of Eu²⁺ vs Oxidizing Nature of Ce⁴⁺",
      wrongAssumption: "Assuming Ce⁴⁺ and Eu²⁺ both act as reducing agents because both achieve stable configurations.",
      correctConcept: "Ce⁴⁺ achieves noble gas [Xe] 4f⁰ configuration, but +3 is the most stable state for lanthanoids. Therefore, Ce⁴⁺ acts as a STRONG OXIDIZING AGENT to become Ce³⁺. Conversely, Eu²⁺ has [Xe] 4f⁷ (half-filled), but easily oxidizes to Eu³⁺, making Eu²⁺ a STRONG REDUCING AGENT.",
      whyItMattersForNEET: "Repeatedly tested in lanthanoid redox chemistry."
    },
    {
      id: "trap-df-12",
      topic: "Actinoid Contraction vs Lanthanoid Contraction",
      wrongAssumption: "Assuming Lanthanoid contraction is greater in magnitude than Actinoid contraction.",
      correctConcept: "Actinoid contraction is GREATER than Lanthanoid contraction because 5f orbitals extend further into space than 4f orbitals and exhibit even poorer shielding effect than 4f electrons.",
      whyItMattersForNEET: "Fundamental inorganic comparison question."
    },
    {
      id: "trap-df-13",
      topic: "Interstitial Compounds Chemical Reactivity",
      wrongAssumption: "Assuming interstitial compounds are reactive because they contain trapped non-metal atoms.",
      correctConcept: "Interstitial compounds (e.g. TiC, Fe₃H) are chemically INERT, extremely hard, have high melting points, and retain metallic electrical and thermal conductivity.",
      whyItMattersForNEET: "NEET 2020 verified question."
    },
    {
      id: "trap-df-14",
      topic: "Mischmetal Composition",
      wrongAssumption: "Thinking Mischmetal is an alloy of transition metals like iron, nickel, and chromium.",
      correctConcept: "Mischmetal is a pyrophoric alloy consisting of ~95% Lanthanoid metals (mostly Cerium ~40-50% and Lanthanum/Neodymium), ~5% Iron (Fe), and traces of S, C, Ca, and Al. It is used to make lighter flints and tracer bullets.",
      whyItMattersForNEET: "Direct NCERT factual question."
    },
    {
      id: "trap-df-15",
      topic: "Standard Electrode Potential E°(M²⁺/M) for Copper",
      wrongAssumption: "Assuming all 3d metals have negative E°(M²⁺/M) reduction potentials.",
      correctConcept: "Copper (Cu) is the ONLY 3d transition metal with a POSITIVE standard reduction potential (E°(Cu²⁺/Cu) = +0.34 V). This is because the high sum of its sublimation enthalpy and ionization enthalpy is not compensated by its hydration enthalpy. Consequently, Cu cannot liberate H₂ gas from dilute acids (e.g., dilute HCl or dilute H₂SO₄).",
      whyItMattersForNEET: "Fundamental electrochemistry & inorganic question in NEET."
    },
    {
      id: "trap-df-16",
      topic: "Enthalpy of Atomization across 3d Series",
      wrongAssumption: "Assuming Zinc has a very high enthalpy of atomization because it has 10 d-electrons.",
      correctConcept: "Enthalpy of atomization depends on the number of UNPAIRED d-electrons available for metallic bonding. Zinc has no unpaired electrons (3d¹⁰ 4s²), resulting in weak metallic bonding and the LOWEST enthalpy of atomization (126 kJ/mol) and lowest boiling point in the 3d series. Vanadium and Chromium with high unpaired electrons have the highest atomization enthalpies.",
      whyItMattersForNEET: "Tested in physical properties comparison questions."
    },
    {
      id: "trap-df-17",
      topic: "Magnetic Moment of d⁵ vs d⁴ Ions",
      wrongAssumption: "Calculating Fe²⁺ as having 5 unpaired electrons because atomic number of Fe is 26.",
      correctConcept: "Fe (Z = 26) is [Ar] 3d⁶ 4s². Fe²⁺ loses 4s² electrons to become [Ar] 3d⁶. In 3d⁶, 2 electrons pair up in one d-orbital, leaving 4 UNPAIRED electrons (n = 4 ⇒ μ = 4.90 BM). Fe³⁺ is [Ar] 3d⁵ with 5 unpaired electrons (n = 5 ⇒ μ = 5.92 BM).",
      whyItMattersForNEET: "High-frequency calculation trap."
    },
    {
      id: "trap-df-18",
      topic: "Number of Unpaired Electrons in d⁸ and d⁹",
      wrongAssumption: "Thinking d⁸ has 8 unpaired electrons and d⁹ has 9 unpaired electrons.",
      correctConcept: "By Hund's rule: In d⁸ (e.g. Ni²⁺), 3 orbitals have paired electrons and 2 orbitals have unpaired electrons (n = 2 ⇒ μ = 2.84 BM). In d⁹ (e.g. Cu²⁺), 4 orbitals have paired electrons and 1 has an unpaired electron (n = 1 ⇒ μ = 1.73 BM).",
      whyItMattersForNEET: "Basic electron distribution trap."
    },
    {
      id: "trap-df-19",
      topic: "Acidity of Transition Metal Oxides",
      wrongAssumption: "Assuming all oxides of a given metal like Cr or Mn have the same pH nature.",
      correctConcept: "Nature of oxide changes with oxidation state: CrO (+2) is Basic, Cr₂O₃ (+3) is Amphoteric, and CrO₃ (+6) is strongly Acidic. Similarly, MnO (+2) is Basic, MnO₂ (+4) is Amphoteric, and Mn₂O₇ (+7) is Acidic.",
      whyItMattersForNEET: "NEET 2021 matched oxide question."
    },
    {
      id: "trap-df-20",
      topic: "Primary vs Secondary Standard in Redox",
      wrongAssumption: "Assuming KMnO₄ is used as a primary standard in titrations.",
      correctConcept: "KMnO₄ is NOT a primary standard because it cannot be obtained in a state of high purity and slowly decomposes in the presence of sunlight and traces of organic matter. K₂Cr₂O₇ is a PRIMARY standard because it is non-hygroscopic, stable, and can be weighed accurately.",
      whyItMattersForNEET: "NCERT practical volumetric analysis question."
    },
    {
      id: "trap-df-21",
      topic: "Radioactivity of Lanthanoids",
      wrongAssumption: "Believing all lanthanoids are non-radioactive.",
      correctConcept: "All lanthanoids are non-radioactive EXCEPT Promethium (Pm, Z = 61), which is a synthetic radioactive element. In contrast, ALL actinoids are radioactive.",
      whyItMattersForNEET: "Quick factual NCERT elimination point."
    },
    {
      id: "trap-df-22",
      topic: "Alloy Formation Criteria",
      wrongAssumption: "Assuming any two metals can form substitutional alloys easily.",
      correctConcept: "According to the Hume-Rothery rules, transition metals form substitutional alloys because their atomic radii are very similar (differ by less than 15%). Examples: Brass (Cu + Zn), Bronze (Cu + Sn), and Stainless Steel (Fe + Cr + Ni).",
      whyItMattersForNEET: "NCERT property explanation question."
    },
    {
      id: "trap-df-23",
      topic: "Chromyl Chloride Test",
      wrongAssumption: "Assuming covalent chlorides like HgCl₂, AgCl, and SnCl₄ give a positive chromyl chloride test.",
      correctConcept: "The chromyl chloride test (heating salt with solid K₂Cr₂O₇ and conc. H₂SO₄ to evolve red-orange vapours of CrO₂Cl₂) is given ONLY by ionic metal chlorides (e.g. NaCl, KCl). Covalent chlorides (HgCl₂, AgCl, PbCl₂, SnCl₄) do NOT give this test because they do not furnish free Cl⁻ ions.",
      whyItMattersForNEET: "High-yield practical salt analysis and d-block question."
    },
    {
      id: "trap-df-24",
      topic: "Reduction Product of Acidic Dichromate",
      wrongAssumption: "Assuming Cr₂O₇²⁻ is reduced to Cr²⁺ in acidic medium.",
      correctConcept: "In acidic medium, Cr₂O₇²⁻ (Cr in +6, orange) is reduced to green Cr³⁺ ions (Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O). It does NOT reduce to Cr²⁺ under normal conditions.",
      whyItMattersForNEET: "Essential redox calculation and reaction completion."
    },
    {
      id: "trap-df-25",
      topic: "Disproportionation of Manganate in Acid",
      wrongAssumption: "Assuming potassium manganate (K₂MnO₄) is stable in acidic solution.",
      correctConcept: "In neutral or acidic solutions, dark green manganate (MnO₄²⁻, Mn in +6) disproportionates immediately into purple permanganate (MnO₄⁻, Mn in +7) and brown manganese dioxide (MnO₂, Mn in +4): 3 MnO₄²⁻ + 4 H⁺ → 2 MnO₄⁻ + MnO₂ + 2 H₂O.",
      whyItMattersForNEET: "Key industrial preparation step of KMnO₄."
    }
  ],

  mustKnowReactions: [
    {
      category: "K₂Cr₂O₇ Preparation & Redox",
      reactions: [
        {
          name: "Chromite Ore Fusion with Na₂CO₃",
          equation: "4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ → 8 Na₂CrO₄ (Yellow) + 2 Fe₂O₃ + 8 CO₂",
          significance: "Step 1 of K₂Cr₂O₇ synthesis. Cr(+3) is oxidized to Cr(+6)."
        },
        {
          name: "Acidification of Chromate to Dichromate",
          equation: "2 Na₂CrO₄ + 2 H⁺ → Na₂Cr₂O₇ (Orange) + 2 Na⁺ + H₂O",
          significance: "Step 2. Sodium dichromate is highly water-soluble."
        },
        {
          name: "Conversion to K₂Cr₂O₇ with KCl",
          equation: "Na₂Cr₂O₇ + 2 KCl → K₂Cr₂O₇ (Orange crystals) + 2 NaCl",
          significance: "Step 3. K₂Cr₂O₇ is less soluble than Na₂Cr₂O₇ and crystallizes out cleanly."
        },
        {
          name: "Oxidation of Fe²⁺ by Acidified Dichromate",
          equation: "Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ (Green) + 6 Fe³⁺ + 7 H₂O",
          significance: "Quantitative determination of iron in volumetric analysis."
        },
        {
          name: "Oxidation of Iodide (I⁻) by Acidified Dichromate",
          equation: "Cr₂O₇²⁻ + 14 H⁺ + 6 I⁻ → 2 Cr³⁺ + 3 I₂ + 7 H₂O",
          significance: "Iodometric titrations."
        },
        {
          name: "Oxidation of H₂S by Acidified Dichromate",
          equation: "Cr₂O₇²⁻ + 8 H⁺ + 3 H₂S → 2 Cr³⁺ + 3 S↓ (Turbid white/yellow) + 7 H₂O",
          significance: "Identification of sulphide."
        },
        {
          name: "Chromyl Chloride Reaction",
          equation: "K₂Cr₂O₇ + 4 NaCl + 6 H₂SO₄ → 2 CrO₂Cl₂ (Red Vapour) + 2 KHSO₄ + 4 NaHSO₄ + 3 H₂O",
          significance: "Confirmative test for ionic chlorides. CrO₂Cl₂ + 4 NaOH → Na₂CrO₄ (Yellow) + 2 NaCl + 2 H₂O."
        }
      ]
    },
    {
      category: "KMnO₄ Preparation & Redox",
      reactions: [
        {
          name: "Alkaline Fusion of Pyrolusite (MnO₂)",
          equation: "2 MnO₂ + 4 KOH + O₂ → 2 K₂MnO₄ (Dark Green) + 2 H₂O",
          significance: "Step 1 of KMnO₄ synthesis. Mn(+4) is oxidized to Mn(+6)."
        },
        {
          name: "Disproportionation of Manganate in Acid",
          equation: "3 MnO₄²⁻ + 4 H⁺ → 2 MnO₄⁻ (Purple) + MnO₂↓ + 2 H₂O",
          significance: "Chemical route to KMnO₄."
        },
        {
          name: "Oxidation of Oxalate in Acidic Medium",
          equation: "2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O",
          significance: "Standardisation of KMnO₄ against primary standard oxalic acid."
        },
        {
          name: "Oxidation of Iodide in Acidic Medium",
          equation: "2 MnO₄⁻ + 16 H⁺ + 10 I⁻ → 2 Mn²⁺ + 8 H₂O + 5 I₂",
          significance: "Liberation of violet iodine."
        },
        {
          name: "Oxidation of Iodide in Neutral / Faintly Alkaline Medium",
          equation: "2 MnO₄⁻ + H₂O + I⁻ → 2 MnO₂↓ + 2 OH⁻ + IO₃⁻ (Iodate)",
          significance: "Bayer's reagent test for unsaturation / iodide oxidation."
        },
        {
          name: "Oxidation of Thiosulphate (S₂O₃²⁻) in Neutral Medium",
          equation: "8 MnO₄⁻ + 3 S₂O₃²⁻ + H₂O → 8 MnO₂ + 6 SO₄²⁻ + 2 OH⁻",
          significance: "Thiosulphate is oxidized almost quantitatively to sulphate."
        },
        {
          name: "Thermal Decomposition of KMnO₄",
          equation: "2 KMnO₄ \\xrightarrow{\\Delta, 513\\text{ K}} K₂MnO₄ + MnO₂ + O₂",
          significance: "Laboratory preparation of pure dioxygen gas."
        }
      ]
    }
  ]
};
