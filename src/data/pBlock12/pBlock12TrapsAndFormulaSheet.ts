export const P_BLOCK_12_TRAPS_AND_FORMULAS = {
  neetTraps: [
    {
      trap: "Assuming Nitrogen Can Expand its Octet to Form NCl₅",
      explanation: "Nitrogen belongs to the second period with valence shell n = 2. It has only 2s and 2p orbitals (total 4 orbitals) and strictly NO vacant d-orbitals. Therefore, its maximum covalency is 4 (as in NH₄⁺). It CANNOT form NCl₅ or NF₅, whereas Phosphorus (n = 3, has 3d orbitals) readily forms PCl₅ and PF₅.",
      prevention: "Remember: Second period elements (B, C, N, O, F) NEVER expand their octet beyond 4."
    },
    {
      trap: "Predicting Bond Dissociation Enthalpy Order of Halogens as F₂ > Cl₂ > Br₂ > I₂",
      explanation: "Actual order is Cl₂ (242.6) > Br₂ (192.8) > F₂ (158.8) > I₂ (151.1 kJ/mol). F₂ has an exceptionally low bond dissociation enthalpy because the fluorine atom is so small that the 3 non-bonding lone pairs on each F atom experience extreme electrostatic inter-electronic repulsions across the short F-F bond.",
      prevention: "Always remember: Cl₂ is highest, and F₂ drops below Br₂ in bond dissociation enthalpy!"
    },
    {
      trap: "Confusing Basicity vs Reducing Power of Group 15 Hydrides",
      explanation: "Basic strength: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃ (determined by lone pair electron density on central atom). Reducing power: NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃ (determined by E-H bond weakness / low bond enthalpy). NH₃ is the strongest Lewis base but the weakest reducing agent; BiH₃ is the strongest reducing agent.",
      prevention: "Base = lone pair donor (compact N wins); Reducing agent = H-donor (weak Bi-H bond wins)."
    },
    {
      trap: "Believing H₃PO₄ is a Stronger Reducing Agent than H₃PO₂",
      explanation: "Reducing power in phosphorus oxoacids is NOT related to the number of -OH groups or the oxidation state of P; it is SOLELY due to direct P-H bonds. H₃PO₂ (one -OH, two P-H bonds) is the strongest reducing agent (reduces AgNO₃ to Ag). H₃PO₃ (two -OH, one P-H) is intermediate. H₃PO₄ (three -OH, zero P-H) is NON-REDUCING.",
      prevention: "Count P-H bonds: H₃PO₂ (2 P-H) > H₃PO₃ (1 P-H) > H₃PO₄ (0 P-H)."
    },
    {
      trap: "Confusing Reaction of Copper with Dilute vs Concentrated HNO₃",
      explanation: "With Cu: Dilute HNO₃ produces Nitric oxide (NO): 3 Cu + 8 HNO₃(dil) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O. Concentrated HNO₃ produces Nitrogen dioxide (NO₂): Cu + 4 HNO₃(conc) → Cu(NO₃)₂ + 2 NO₂ + 2 H₂O. With Zn: Dilute HNO₃ gives N₂O (Laughing gas!), while concentrated HNO₃ gives NO₂.",
      prevention: "Cu + dil = NO; Cu + conc = NO₂; Zn + dil = N₂O; Zn + conc = NO₂."
    },
    {
      trap: "Assuming Halogen Acid Strength Follows HF > HCl > HBr > HI based on Electronegativity",
      explanation: "In aqueous solution, acidic strength of halogen hydracids is determined by H-X Bond Dissociation Enthalpy (H-F: 574 kJ/mol >> H-I: 295 kJ/mol), NOT electronegativity. The H-I bond is the weakest and breaks most easily. Actual acidic strength order: HF (weak acid) < HCl < HBr < HI (strongest acid).",
      prevention: "Hydracid acidity down any group is dictated by bond length/strength: HI > HBr > HCl > HF; H₂Te > H₂Se > H₂S > H₂O."
    },
    {
      trap: "Confusing Bleaching Action of SO₂ (Temporary) with Cl₂ (Permanent)",
      explanation: "SO₂ bleaches by REDUCTION via nascent hydrogen (SO₂ + 2H₂O → H₂SO₄ + 2[H]). In atmospheric air, the bleached article absorbs O₂ and gets re-oxidized, restoring color (temporary). Cl₂ bleaches by OXIDATION via nascent oxygen (Cl₂ + H₂O → 2HCl + [O]), permanently destroying the chromophore.",
      prevention: "SO₂ = Reduction (temporary); Cl₂ = Oxidation (permanent)."
    },
    {
      trap: "Assuming Electron Gain Enthalpy (ΔegH) is Most Negative for Fluorine",
      explanation: "Negative electron gain enthalpy order: Chlorine (-349 kJ/mol) > Fluorine (-333 kJ/mol) > Bromine (-325 kJ/mol) > Iodine (-295 kJ/mol). Fluorine has a less negative ΔegH than Chlorine because adding an electron to the compact 2p orbital of F experiences intense electron-electron repulsion, whereas Cl has a more spacious 3p orbital.",
      prevention: "Cl has the highest negative electron gain enthalpy in the entire periodic table!"
    },
    {
      trap: "Misidentifying the Linkage in Marshall's Acid (H₂S₂O₈) vs Oleum (H₂S₂O₇)",
      explanation: "Marshall's acid (H₂S₂O₈, Peroxodisulphuric acid) contains a PEROXY linkage (-O-O-), so both S atoms are in +6 oxidation state. Oleum (H₂S₂O₇, Pyrosulphuric acid) contains an -S-O-S- bridge. Dithionic acid (H₂S₂O₆) contains an -S-S- direct bond.",
      prevention: "H₂S₂O₈ = -O-O- (peroxy); H₂S₂O₇ = -S-O-S- (ether-like bridge); H₂S₂O₆ = -S-S-."
    },
    {
      trap: "Thinking S₂ Gas at High Temperature is Diamagnetic like N₂",
      explanation: "In the vapor phase at ~1000 K, sulphur exists as diatomic S₂ molecules. Just like O₂ in Molecular Orbital Theory, S₂ has two unpaired electrons in degenerate antibonding π* orbitals (π*2px¹ and π*2py¹). Therefore, S₂ is PARAMAGNETIC.",
      prevention: "S₂ vapor is paramagnetic, exactly like O₂."
    },
    {
      trap: "Confusing Passivity of Metals in Concentrated HNO₃",
      explanation: "Metals like Aluminium (Al), Iron (Fe), and Chromium (Cr) do not dissolve in concentrated HNO₃; they become chemically PASSIVE due to the instantaneous formation of an impervious, protective thin film of insoluble oxide on their metal surface.",
      prevention: "Conc. HNO₃ + Fe/Al/Cr = Passivity (Protective oxide layer)."
    },
    {
      trap: "Assuming Xe Compounds are Formed with All Non-Metals",
      explanation: "Xenon forms true chemical compounds ONLY with the two most electronegative elements: Fluorine (F) and Oxygen (O). Xenon does not form direct stable binary compounds with chlorine, bromine, or nitrogen under standard conditions.",
      prevention: "Xenon compounds = Xe-F and Xe-O only (highest electronegativity / oxidizers)."
    },
    {
      trap: "Confusing Hydrolysis Products of Interhalogen Compounds (XX'ₙ)",
      explanation: "In the hydrolysis of XX'ₙ (where X is larger/less electronegative and X' is smaller/more electronegative), the smaller halogen X' always forms halide acid (HX'), while the larger halogen X forms an oxoacid/halate: XX' + H₂O → HX' + HOX; XX'₃ + 2H₂O → 3 HX' + HXO₂; XX'₅ + 3H₂O → 5 HX' + HXO₃.",
      prevention: "Smaller halogen becomes simple halide (HX'); larger halogen becomes oxoacid (HXOₙ)."
    },
    {
      trap: "Misidentifying the VSEPR Geometry of XeF₂ as Bent or Angular",
      explanation: "In XeF₂, Xe has 8 valence electrons. With 2 bonding pairs to F atoms, there are (8 - 2)/2 = 3 lone pairs. Total electron pairs = 5 (sp³d hybridization). To minimize repulsion, all 3 lone pairs occupy equatorial positions, making the molecular geometry perfectly LINEAR (F-Xe-F angle = 180°).",
      prevention: "XeF₂ = sp³d with 3 equatorial lone pairs ⇒ LINEAR."
    },
    {
      trap: "Assuming White Phosphorus is Less Reactive than Red Phosphorus",
      explanation: "White phosphorus (P₄) has a discrete tetrahedral structure with PPP bond angles of only 60°. This severe angular strain (normal tetrahedral is 109.5°) makes white phosphorus highly unstable and chemically reactive (ignites spontaneously in air at 30°C: chemiluminescence). Red P is polymeric and far less reactive.",
      prevention: "White P₄ = 60° angle strain, highly reactive, poisonous, soluble in CS₂. Red P = polymeric chain, stable, non-poisonous."
    }
  ],

  formulaSheet: [
    {
      title: "Group 15 Master Hydride Stability & Acidity Orders",
      formula: "\\text{Thermal Stability: } NH_3 > PH_3 > AsH_3 > SbH_3 > BiH_3 \\\\ \\text{Reducing Power: } NH_3 < PH_3 < AsH_3 < SbH_3 < BiH_3 \\\\ \\text{Basic Strength: } NH_3 > PH_3 > AsH_3 > SbH_3 > BiH_3 \\\\ \\text{Boiling Point: } PH_3 < AsH_3 < NH_3 < SbH_3 < BiH_3",
      variables: "E = N, P, As, Sb, Bi",
      notes: "NH₃ has higher boiling point than PH₃ and AsH₃ due to intermolecular hydrogen bonding."
    },
    {
      title: "Ostwald's Process (Manufacture of Nitric Acid)",
      formula: "4 NH_3 + 5 O_2 \\xrightarrow[500\\text{ K}, 9\\text{ bar}]{\\text{Pt/Rh gauze}} 4 NO + 6 H_2O \\\\ 2 NO + O_2 \\rightleftharpoons 2 NO_2 \\\\ 3 NO_2 + H_2O \\rightarrow 2 HNO_3 + NO",
      variables: "Yields ~68% HNO₃ by mass; concentrated to 98% by distillation over conc. H₂SO₄",
      notes: "Catalytic oxidation of ammonia to nitric oxide is the rate-determining industrial step."
    },
    {
      title: "Contact Process for Sulphuric Acid (Key Exothermic Step)",
      formula: "2 SO_2(g) + O_2(g) \\xrightleftharpoons[720\\text{ K}, 2\\text{ bar}]{\\text{V}_2\\text{O}_5} 2 SO_3(g), \\quad \\Delta H = -196.6\\text{ kJ/mol} \\\\ SO_3 + H_2SO_4(98\\%) \\rightarrow H_2S_2O_7 \\text{ (Oleum)} \\\\ H_2S_2O_7 + H_2O \\rightarrow 2 H_2SO_4",
      variables: "Optimum conditions: 720 K, 2 bar pressure, V₂O₅ catalyst",
      notes: "SO₃ is NOT directly dissolved in water because it produces an unmanageable dense acid fog."
    },
    {
      title: "Halogen Key Periodic Trend Sequences",
      formula: "\\text{Oxidizing Power: } F_2 > Cl_2 > Br_2 > I_2 \\\\ \\text{Negative } \\Delta_{eg}H: Cl > F > Br > I \\\\ \\text{Bond Dissociation Enthalpy: } Cl_2 > Br_2 > F_2 > I_2 \\\\ \\text{Hydracid Acidic Strength: } HF < HCl < HBr < HI",
      variables: "X = F, Cl, Br, I",
      notes: "F₂ is the strongest oxidizing agent in aqueous solution due to low bond enthalpy and huge hydration enthalpy."
    },
    {
      title: "Xenon Fluorides Preparation Conditions",
      formula: "Xe + F_2 \\xrightarrow[673\\text{ K}, 1\\text{ bar}]{\\text{Ratio } 1:1} XeF_2(s) \\\\ Xe + 2 F_2 \\xrightarrow[873\\text{ K}, 7\\text{ bar}]{\\text{Ratio } 1:5} XeF_4(s) \\\\ Xe + 3 F_2 \\xrightarrow[573\\text{ K}, 60-70\\text{ bar}]{\\text{Ratio } 1:20} XeF_6(s) \\\\ XeF_4 + O_2F_2 \\xrightarrow{143\\text{ K}} XeF_6 + O_2",
      variables: "All Xenon fluorides are colorless crystalline solids that sublime readily and undergo rapid hydrolysis.",
      notes: "XeF₆ undergoes complete hydrolysis to give explosive solid XeO₃: XeF₆ + 3 H₂O → XeO₃ + 6 HF."
    }
  ],

  oneMinuteRevision: [
    "⚡ Anomalous behavior of N, O, F: Small size, high electronegativity, high IE, and absence of d-orbitals (covalency strictly ≤ 4).",
    "⚡ N₂ is exceptionally unreactive at room temperature due to its strong triple bond (Bond Enthalpy = 941.4 kJ/mol).",
    "⚡ Group 15 hydride reducing power: NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃ (Bi-H is weakest). Basic strength: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃.",
    "⚡ White P₄ has 60° angle strain (highly reactive, chemiluminescent in air); Red P is polymeric and stable; Black P is thermodynamically most stable.",
    "⚡ H₃PO₂ is the strongest reducing oxoacid of phosphorus (contains two direct P-H bonds).",
    "⚡ O₃ quantitative estimation: React with excess KI in borate buffer (pH 9.2); titrate liberated I₂ against standard Na₂S₂O₃.",
    "⚡ Sulphur transition temperature is 369 K (α-Rhombic ⇌ β-Monoclinic). S₂ vapor at 1000 K is PARAMAGNETIC (two unpaired electrons in π* MOs).",
    "⚡ Marshall's acid (H₂S₂O₈) contains a peroxy (-O-O-) linkage; Oleum (H₂S₂O₇) contains an -S-O-S- bridge.",
    "⚡ Bleaching: SO₂ bleaches by reduction (temporary); Cl₂ bleaches by oxidation (permanent).",
    "⚡ Halogen bond dissociation enthalpy: Cl₂ > Br₂ > F₂ > I₂ (F₂ is lower than Cl₂ & Br₂ due to lp-lp repulsion).",
    "⚡ Negative electron gain enthalpy: Cl > F > Br > I (compact 2p orbital in F causes inter-electronic repulsion).",
    "⚡ Interhalogen reactivity: XX'ₙ > X₂ (except F₂) because X-X' polar bond is weaker than X-X covalent bond.",
    "⚡ ClF₃ is T-shaped (sp³d, 2 lone pairs in equatorial positions); BrF₅ is square pyramidal (sp³d², 1 lone pair); IF₇ is pentagonal bipyramidal (sp³d³).",
    "⚡ Xenon VSEPR shapes: XeF₂ (Linear, 3 lp), XeF₄ (Square Planar, 2 lp), XeF₆ (Distorted Octahedral, 1 lp), XeO₃ (Pyramidal, 1 lp), XeOF₄ (Square Pyramidal, 1 lp).",
    "⚡ Neil Bartlett prepared first noble gas compound Xe⁺[PtF₆]⁻ by comparing IE of Xe (1170 kJ/mol) with O₂ (1175 kJ/mol)."
  ]
};
