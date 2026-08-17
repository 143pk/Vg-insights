export const D_AND_F_BLOCK_CONCEPTS = {
  electronicConfigurations3d: [
    { element: "Sc (Scandium)", z: 21, groundState: "[Ar] 3d¹ 4s²", commonOS: "+3", importantIons: "Sc³⁺ (3d⁰, colourless, diamagnetic)", keyNeetFact: "Scandium is a transition element, but shows ONLY +3 oxidation state (forms noble gas [Ar] core)." },
    { element: "Ti (Titanium)", z: 22, groundState: "[Ar] 3d² 4s²", commonOS: "+2, +3, +4", importantIons: "Ti⁴⁺ (3d⁰, colourless), Ti³⁺ (3d¹, purple)", keyNeetFact: "TiO₂ is widely used as a white pigment; TiCl₄ is used in Ziegler-Natta catalysis." },
    { element: "V (Vanadium)", z: 23, groundState: "[Ar] 3d³ 4s²", commonOS: "+2, +3, +4, +5", importantIons: "VO²⁺ (+4, blue), VO₂⁺ (+5, yellow)", keyNeetFact: "V₂O₅ is the catalyst used in the Contact process for H₂SO₄ manufacture." },
    { element: "Cr (Chromium)", z: 24, groundState: "[Ar] 3d⁵ 4s¹", commonOS: "+2, +3, +6", importantIons: "Cr³⁺ (3d³, green, stable t₂g³), Cr₂O₇²⁻ (+6, orange)", keyNeetFact: "Anomalous configuration due to extra stability of exactly half-filled 3d⁵ subshell." },
    { element: "Mn (Manganese)", z: 25, groundState: "[Ar] 3d⁵ 4s²", commonOS: "+2, +3, +4, +6, +7", importantIons: "Mn²⁺ (3d⁵, pale pink, μ=5.92 BM), MnO₄⁻ (+7, purple)", keyNeetFact: "Exhibits maximum number of oxidation states (+2 to +7) in the 3d series." },
    { element: "Fe (Iron)", z: 26, groundState: "[Ar] 3d⁶ 4s²", commonOS: "+2, +3", importantIons: "Fe²⁺ (3d⁶, pale green, μ=4.90 BM), Fe³⁺ (3d⁵, yellow, μ=5.92 BM)", keyNeetFact: "Fe³⁺ (3d⁵) is more stable than Fe²⁺ (3d⁶) because of half-filled stable 3d⁵ subshell." },
    { element: "Co (Cobalt)", z: 27, groundState: "[Ar] 3d⁷ 4s²", commonOS: "+2, +3", importantIons: "Co²⁺ (3d⁷, pink, μ=3.87 BM), [Co(NH₃)₆]³⁺ (3d⁶, diamagnetic in strong field)", keyNeetFact: "Co(III) complexes are exceptionally stable in the presence of strong field ligands." },
    { element: "Ni (Nickel)", z: 28, groundState: "[Ar] 3d⁸ 4s²", commonOS: "+2", importantIons: "Ni²⁺ (3d⁸, green, μ=2.84 BM)", keyNeetFact: "Finely divided Raney nickel is an effective hydrogenation catalyst for organic oils." },
    { element: "Cu (Copper)", z: 29, groundState: "[Ar] 3d¹⁰ 4s¹", commonOS: "+1, +2", importantIons: "Cu⁺ (3d¹⁰, colourless, diamagnetic), Cu²⁺ (3d⁹, blue, μ=1.73 BM)", keyNeetFact: "Cu²⁺(aq) is more stable than Cu⁺(aq) in water due to much higher negative hydration enthalpy." },
    { element: "Zn (Zinc)", z: 30, groundState: "[Ar] 3d¹⁰ 4s²", commonOS: "+2", importantIons: "Zn²⁺ (3d¹⁰, colourless, diamagnetic)", keyNeetFact: "Not considered a true transition element because it has completely filled 3d¹⁰ in both ground and +2 state." }
  ],

  oxidationStateTrends: [
    "Transition metals exhibit variable oxidation states because the energy difference between (n-1)d and ns orbitals is very small, allowing both ns and (n-1)d electrons to participate in bond formation.",
    "Across the 3d series, the maximum oxidation state increases from +3 in Sc to +7 in Mn, and then decreases sharply through Fe (+6), Co (+4), Ni (+4), Cu (+2), down to +2 in Zn.",
    "Early transition metals (Sc to Mn) easily achieve their maximum group oxidation state by utilizing all 4s and 3d electrons. Towards the end of the series (Fe to Zn), higher nuclear charge binds d electrons more tightly, stabilizing lower oxidation states (+2).",
    "In lower oxidation states (+2, +3), transition metal compounds are predominantly ionic and basic (e.g. MnO, FeO, CrO).",
    "In higher oxidation states (+6, +7), compounds are covalent and strongly acidic (e.g. Mn₂O₇, CrO₃, KMnO₄, K₂Cr₂O₇) with high oxidizing power."
  ],

  magneticFormulasAndExamples: [
    { ion: "Sc³⁺, Ti⁴⁺, V⁵⁺", dConfig: "3d⁰", unpaired: 0, magneticNature: "Diamagnetic", spinOnlyBM: "0 BM" },
    { ion: "Ti³⁺, V⁴⁺ (VO²⁺), Cu²⁺", dConfig: "3d¹, 3d⁹", unpaired: 1, magneticNature: "Paramagnetic", spinOnlyBM: "1.73 BM (√3)" },
    { ion: "Ti²⁺, V³⁺, Ni²⁺", dConfig: "3d², 3d⁸", unpaired: 2, magneticNature: "Paramagnetic", spinOnlyBM: "2.84 BM (√8)" },
    { ion: "V²⁺, Cr³⁺, Co²⁺", dConfig: "3d³, 3d⁷", unpaired: 3, magneticNature: "Paramagnetic", spinOnlyBM: "3.87 BM (√15)" },
    { ion: "Cr²⁺, Mn³⁺, Fe²⁺, Co³⁺", dConfig: "3d⁴, 3d⁶", unpaired: 4, magneticNature: "Paramagnetic", spinOnlyBM: "4.90 BM (√24)" },
    { ion: "Mn²⁺, Fe³⁺", dConfig: "3d⁵", unpaired: 5, magneticNature: "Paramagnetic (Max)", spinOnlyBM: "5.92 BM (√35)" },
    { ion: "Cu⁺, Zn²⁺, Sc²⁺(non-exist)", dConfig: "3d¹⁰", unpaired: 0, magneticNature: "Diamagnetic", spinOnlyBM: "0 BM" }
  ],

  kmno4VsK2cr2o7Comparison: [
    { property: "1. Chemical Formula & Name", kmno4: "Potassium permanganate (KMnO₄)", k2cr2o7: "Potassium dichromate (K₂Cr₂O₇)" },
    { property: "2. Colour & Physical State", kmno4: "Deep purple / dark violet crystalline solid", k2cr2o7: "Bright orange-red crystalline solid" },
    { property: "3. Central Metal Oxidation State", kmno4: "+7 (Mn in MnO₄⁻, 3d⁰)", k2cr2o7: "+6 (Cr in Cr₂O₇²⁻, 3d⁰)" },
    { property: "4. Origin of Deep Colour", kmno4: "Ligand-to-Metal Charge Transfer (L → M CT, not d-d)", k2cr2o7: "Ligand-to-Metal Charge Transfer (L → M CT, not d-d)" },
    { property: "5. Starting Ore / Raw Material", kmno4: "Pyrolusite ore (MnO₂)", k2cr2o7: "Chromite ore (FeCr₂O₄ or FeO·Cr₂O₃)" },
    { property: "6. Primary Intermediate Compound", kmno4: "Potassium manganate (K₂MnO₄, dark green)", k2cr2o7: "Sodium chromate (Na₂CrO₄, yellow solution)" },
    { property: "7. Reduction in Acidic Medium", kmno4: "MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ (pale pink) + 4 H₂O", k2cr2o7: "Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ (green) + 7 H₂O" },
    { property: "8. n-factor & Equivalent Weight (Acid)", kmno4: "n = 5 ⇒ Equiv. Wt = M / 5 = 158 / 5 = 31.6", k2cr2o7: "n = 6 ⇒ Equiv. Wt = M / 6 = 294.2 / 6 = 49.03" },
    { property: "9. Primary Standard in Volumetric Analysis", kmno4: "Secondary standard (photochemically decomposes, titrated vs oxalic acid)", k2cr2o7: "Primary standard (does not absorb moisture, non-hygroscopic, stable in air)" },
    { property: "10. Reaction with Iodide (I⁻)", kmno4: "Acid: gives I₂; Neutral/alkaline: gives IO₃⁻ (Iodate)", k2cr2o7: "Acidic: gives I₂ (Cr₂O₇²⁻ + 14H⁺ + 6I⁻ → 2Cr³⁺ + 3I₂ + 7H₂O)" },
    { property: "11. Compatibility with HCl", kmno4: "CANNOT be acidified with HCl (oxidizes Cl⁻ to Cl₂)", k2cr2o7: "CAN be used with dilute HCl without oxidizing Cl⁻" }
  ],

  lanthanoidsVsActinoidsComparison: [
    { feature: "1. Differentiating Subshell", lanthanoids: "4f subshell is progressively filled (Ce₅₈ to Lu₇₁)", actinoids: "5f subshell is progressively filled (Th₉₀ to Lr₁₀₃)" },
    { feature: "2. Common & Other Oxidation States", lanthanoids: "Predominantly +3; rarely +2 (Eu²⁺, Yb²⁺) and +4 (Ce⁴⁺, Tb⁴⁺)", actinoids: "Shows wide range: +3, +4, +5, +6, +7 (Np and Pu show +7)" },
    { feature: "3. Energy Gap with (n-1)d & ns", lanthanoids: "Large energy difference between 4f and 5d subshells", actinoids: "Small / comparable energy gap between 5f, 6d, and 7s subshells" },
    { feature: "4. Radioactivity", lanthanoids: "Non-radioactive except Promethium (Pm₆₁)", actinoids: "All actinoids are strictly radioactive elements" },
    { feature: "5. Complex Formation Tendency", lanthanoids: "Relatively low tendency to form coordination complexes", actinoids: "Much higher tendency due to higher charge density & smaller ionic sizes" },
    { feature: "6. Magnetic Susceptibility Trends", lanthanoids: "Magnetic moments arise from combined spin & orbital angular momentum (J)", actinoids: "Magnetic moments are lower and more complex due to 5f orbital interactions" },
    { feature: "7. Magnitude of Contraction", lanthanoids: "Lanthanoid contraction (steady ionic radius decrease)", actinoids: "Actinoid contraction is GREATER from element to element (poorer 5f shielding)" },
    { feature: "8. Basicity of Hydroxides", lanthanoids: "Less basic than actinoids; basicity decreases from La(OH)₃ to Lu(OH)₃", actinoids: "More basic than lanthanoid hydroxides" }
  ]
};
