import { DetailedTopicContent } from '../../types/neet';
import { P_BLOCK_12_DIAGRAMS } from '../pBlock12/pBlock12Diagrams';
import { P_BLOCK_12_VERIFIED_PYQS } from '../pBlock12/pBlock12Pyqs';

export const chemGroup16ElementsDetails: DetailedTopicContent = {
  topicId: "chem-group-16-elements",
  topicName: "Group 16 Elements (Oxygen Family — O₂, O₃, Sulphur Allotropes, SO₂, H₂SO₄ & Oxoacids)",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry (Class 12)",
  chapter: "p-Block Elements (Group 15 to 18)",

  whatIsThisTopic:
    "Group 16 of the periodic table, known as the Chalcogens (ore-forming elements), comprises Oxygen (O), Sulphur (S), Selenium (Se), Tellurium (Te), and Polonium (Po). This high-yield NEET module covers the general valence electronic configuration (ns² np⁴), periodic trends in atomic/ionic radii, ionization enthalpy, electron gain enthalpy (highlighting the critical anomaly where S > Se > Te > Po > O in negative ΔegH), oxidation states (-2, +2, +4, +6) and inert pair effect, the anomalous behavior of oxygen, chemical reactivity and trends in Group 16 hydrides (acidic strength, thermal stability, reducing character, boiling points), preparation and properties of Dioxygen (O₂) and Ozone (O₃ with its resonance hybrid and quantitative estimation using KI), Allotropes of Sulphur (α-Rhombic, β-Monoclinic, Crown S₈ puckered ring, and paramagnetic S₂ vapor at 1000 K), Sulphur Dioxide (SO₂ and its reducing/bleaching action), and Sulphuric Acid (Contact process, dehydrating action, oxidizing power, and master classification of sulphur oxoacids).",

  basicIdea: [
    "1. Electronic Configuration & Negative Electron Gain Enthalpy Anomaly: Group 16 elements possess valence shell configuration ns² np⁴. Because oxygen has an extremely compact 2p subshell, adding an incoming electron causes intense inter-electronic repulsion. Consequently, the negative electron gain enthalpy of Oxygen (-141 kJ/mol) is LESS negative than Sulphur (-200 kJ/mol). Negative ΔegH order: S (-200) > Se (-195) > Te (-190) > Po (-174) > O (-141 kJ/mol).",
    "2. Oxidation States & Inert Pair Effect: Oxygen exhibits -2 oxidation state predominantly, -1 in peroxides (H₂O₂), -1/2 in superoxides (KO₂), +2 in OF₂, and +1 in O₂F₂. Down the group from S to Po, the stability of the +6 oxidation state DECREASES while that of the +4 state INCREASES due to the Inert Pair Effect. Compounds in the +6 state (like SF₆) are stable, but Te(VI) and Se(VI) compounds are strong oxidizing agents.",
    "3. Anomalous Behavior of Oxygen: Oxygen is a diatomic gas (O=O) due to strong pπ-pπ multiple bonding, whereas sulphur exists as an octa-atomic solid (S₈ crown ring) with single S-S bonds. Oxygen cannot expand its octet beyond 4 because it lacks vacant d-orbitals (OF₆ does not exist, but SF₆ exists and is exceptionally inert due to steric hindrance).",
    "4. Group 16 Hydrides Periodic Trends (H₂E: H₂O, H₂S, H₂Se, H₂Te, H₂Po): Acidic strength INCREASES down the group: H₂O < H₂S < H₂Se < H₂Te (due to decrease in E-H bond dissociation enthalpy). Thermal stability DECREASES: H₂O > H₂S > H₂Se > H₂Te > H₂Po. Reducing power INCREASES: H₂O (non-reducing) < H₂S < H₂Se < H₂Te. Boiling point order has an anomaly due to hydrogen bonding: H₂S (213 K) < H₂Se (232 K) < H₂Te (269 K) < H₂O (373 K).",
    "5. Ozone (O₃): An allotrope of oxygen with a bent angular structure (bond angle 117°) and resonance hybrid of two canonical structures (both O-O bond lengths identical at 128 pm). O₃ is thermodynamically unstable relative to O₂ (ΔH is negative and ΔS is positive, making ΔG highly negative). Quantitative estimation: Reacts with excess neutral buffered KI to liberate I₂: O₃ + 2 I⁻ + H₂O → 2 OH⁻ + I₂ + O₂, which is titrated against standard sodium thiosulphate (Na₂S₂O₃) with starch indicator.",
    "6. Sulphur Allotropes & Paramagnetic S₂: α-Sulphur (Rhombic, stable below 369 K) transforms reversibly into β-Sulphur (Monoclinic, needle-shaped, stable above 369 K). The temperature 369 K is the Transition Temperature where both allotropes co-exist. Both α and β forms contain puckered S₈ crown rings. In the vapor phase at elevated temperatures (~1000 K), S₂ is formed which, like O₂, is PARAMAGNETIC due to 2 unpaired electrons in antibonding π* molecular orbitals.",
    "7. Contact Process for H₂SO₄ & Oxoacids: Key exothermic reversible step: 2 SO₂ + O₂ ⇌ 2 SO₃ (V₂O₅ catalyst, 720 K, 2 bar, ΔH = -196.6 kJ/mol). SO₃ is absorbed in 98% H₂SO₄ to form Oleum (H₂S₂O₇), which is diluted with water to give pure H₂SO₄. Master oxoacids: Sulphuric acid (H₂SO₄, dibasic), Peroxodisulphuric acid (H₂S₂O₈, Marshall's acid, contains -O-O- peroxy bridge), Pyrosulphuric acid (H₂S₂O₇, Oleum, contains -S-O-S- bridge)."
  ],

  importantTerms: [
    {
      term: "Negative Electron Gain Enthalpy Anomaly",
      definition: "The unexpected lower magnitude of negative electron gain enthalpy for oxygen compared to sulphur due to high electron density in the compact 2p orbital.",
      neetNote: "Exact order of negative ΔegH: S > Se > Te > Po > O. Oxygen has the lowest negative electron gain enthalpy in Group 16."
    },
    {
      term: "Transition Temperature of Sulphur (369 K)",
      definition: "The precise equilibrium temperature at which rhombic sulphur (α-S) and monoclinic sulphur (β-S) are in dynamic thermodynamic equilibrium.",
      neetNote: "Below 369 K: α-Sulphur (Rhombic) is stable; Above 369 K: β-Sulphur (Monoclinic) is stable. Both contain S₈ puckered crown rings."
    },
    {
      term: "Paramagnetic S₂ Vapor",
      definition: "Diatomic gaseous sulphur formed at elevated temperatures (~1000 K) which exhibits paramagnetism due to unpaired electrons.",
      neetNote: "Like O₂ in MOT, S₂ contains two unpaired electrons in degenerate antibonding π*3px and π*3py orbitals, making it paramagnetic."
    },
    {
      term: "Quantitative Estimation of Ozone",
      definition: "The analytical titration technique where ozone oxidizes iodide to iodine in a borate buffer solution (pH 9.2).",
      neetNote: "O₃ + 2 I⁻ + H₂O → 2 OH⁻ + I₂ + O₂. The liberated I₂ is titrated with standardized Na₂S₂O₃ using starch indicator."
    },
    {
      term: "Contact Process",
      definition: "The industrial manufacturing method of sulphuric acid based on the catalytic oxidation of SO₂ to SO₃ over vanadium pentoxide (V₂O₅).",
      neetNote: "Key Le Chatelier conditions: Low temperature (optimum 720 K), high pressure (2 bar), excess oxygen, and V₂O₅ catalyst."
    },
    {
      term: "Charring Action of Sulphuric Acid",
      definition: "The vigorous dehydrating reaction of concentrated H₂SO₄ on carbohydrates, removing elements of water and leaving pure black porous carbon.",
      neetNote: "Reaction: C₁₂H₂₂O₁₁ (Cane sugar) ⎯(conc. H₂SO₄)⎯→ 12 C (Sugar charcoal) + 11 H₂O."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Group 16 Elements, Electronic Configuration & Periodic Trends",
      paragraphs: [
        "Group 16 elements (Oxygen Family or Chalcogens) comprise Oxygen (₈O), Sulphur (₁₆S), Selenium (₃₄Se), Tellurium (₅₂Te), and Polonium (₈₄Po). The valence electronic configuration is ns² np⁴.",
        "Atomic & Ionic Radii: Covalent and ionic radii increase down the group from O to Po. The increase from O to S is sharp, while that from S to Po is gradual due to shielding limitations of inner d and f subshells.",
        "Ionization Enthalpy: IE₁ decreases down the group: O (1314) > S (1000) > Se (941) > Te (869) > Po (812 kJ/mol). Crucially, the IE₁ of Group 16 is LOWER than the corresponding Group 15 element (e.g. O: 1314 vs N: 1402 kJ/mol) because removing one electron from Group 16 (np⁴) leaves behind an extra-stable half-filled np³ subshell, whereas Group 15 already has an exceptionally stable half-filled np³ subshell.",
        "Electron Gain Enthalpy Anomaly: Across Period 2, oxygen has high electronegativity (3.5), but its negative electron gain enthalpy (-141 kJ/mol) is surprisingly lower than sulphur (-200 kJ/mol). The compact size of the 2p orbital in oxygen creates intense electron-electron repulsion that resists the addition of an extra electron. Sulphur has a larger, more spacious 3p orbital that accommodates the added electron with minimal repulsion. Negative ΔegH order: S > Se > Te > Po > O.",
        "Electronegativity: Decreases down the group: O (3.5) > S (2.58) > Se (2.55) > Te (2.01) > Po (1.76). Oxygen is the second most electronegative element in the entire periodic table after fluorine."
      ],
      visual: {
        type: 'svg',
        svgContent: P_BLOCK_12_DIAGRAMS.group16TrendsAndStructures,
        caption: "Figure 16.2: Group 16 Ozone Resonance, Sulphur Allotropes & Oxoacids Matrix.",
        guide: "Diagram Guide: Note the identical 128 pm bond lengths in O₃ due to resonance, and the distinct linkages in Marshall's acid (-O-O-) and Oleum (-S-O-S-)."
      },
      importantPoints: [
        "Oxygen has the least negative electron gain enthalpy among Group 16 elements (S > Se > Te > Po > O).",
        "Group 16 IE₁ is lower than Group 15 IE₁ due to the extra stability of half-filled np³ configurations in Group 15.",
        "Oxygen shows positive oxidation states ONLY in fluorides: OF₂ (+2) and O₂F₂ (+1)."
      ]
    },
    {
      heading: "2. Group 16 Hydrides Periodic Trends (H₂O, H₂S, H₂Se, H₂Te, H₂Po)",
      paragraphs: [
        "All Group 16 elements form covalent hydrides of the type H₂E (H₂O, H₂S, H₂Se, H₂Te, H₂Po). These hydrides display striking periodic trends:",
        "1. Acidic Strength: Increases steadily down the group: H₂O < H₂S < H₂Se < H₂Te. Reason: As the central atom size increases from O to Te, the E-H bond length increases and the E-H bond dissociation enthalpy decreases (H-O: 463 kJ/mol down to H-Te: 238 kJ/mol). The weaker the E-H bond, the more readily the hydride releases H⁺ ions in aqueous solution.",
        "2. Thermal Stability: Decreases down the group: H₂O > H₂S > H₂Se > H₂Te > H₂Po. Water is exceptionally stable to heat, whereas H₂Te decomposes into Te and H₂ around 420 K.",
        "3. Reducing Character: Increases down the group: H₂O (non-reducing) < H₂S < H₂Se < H₂Te. Reducing power is directly related to the weakness of the E-H bond.",
        "4. Boiling Point Anomaly: H₂O exists as a liquid at room temperature with a boiling point of 373 K (100°C) due to extensive intermolecular hydrogen bonding. H₂S, H₂Se, and H₂Te are foul-smelling toxic gases held only by weak London dispersion forces. Boiling point sequence: H₂S (213 K) < H₂Se (232 K) < H₂Te (269 K) < H₂O (373 K).",
        "5. Bond Angle: Decreases sharply from H₂O to H₂Te: H₂O (104.5°) > H₂S (92.1°) > H₂Se (91.0°) > H₂Te (90.0°). Drago's rule explains that in H₂S, H₂Se, and H₂Te, bonding occurs through nearly pure p-orbitals."
      ],
      importantPoints: [
        "H₂Te is the strongest acid and strongest reducing agent among Group 16 hydrides.",
        "H₂S has the lowest boiling point among Group 16 hydrides.",
        "H₂O is the only hydride in Group 16 that exhibits intermolecular hydrogen bonding."
      ]
    },
    {
      heading: "3. Dioxygen (O₂), Ozone (O₃) & Sulphur Allotropes",
      paragraphs: [
        "Dioxygen (O₂): Prepared by heating oxygen-rich salts such as potassium chlorate: 2 KClO₃ ⎯(MnO₂, Δ)⎯→ 2 KCl + 3 O₂. Industrially, obtained by fractional distillation of liquefied air. Liquid and solid O₂ are pale blue and paramagnetic with 2 unpaired electrons in antibonding π*2p orbitals.",
        "Ozone (O₃): Formed when a silent electric discharge is passed through dry, cold oxygen (to prevent decomposition): 3 O₂ ⇌ 2 O₃ (ΔH = +142 kJ/mol). Ozone is thermodynamically unstable relative to O₂ (ΔH < 0 and ΔS > 0 for 2 O₃ → 3 O₂, making ΔG negative, which can lead to explosive decomposition at high concentrations).",
        "Oxidizing Properties of Ozone: O₃ is a powerful oxidizing agent (O₃ → O₂ + [O]):",
        "• Oxidizes black lead sulphide to white lead sulphate: PbS + 4 O₃ → PbSO₄ + 4 O₂",
        "• Quantitative estimation: O₃ + 2 KI + H₂O ⎯(borate buffer, pH 9.2)⎯→ 2 KOH + I₂ + O₂. Titration of I₂ with standardized Na₂S₂O₃ gives exact O₃ concentration.",
        "• Tailing of Mercury: Ozone oxidizes shiny liquid mercury to mercurous oxide (Hg₂O), which loses its meniscus and sticks to glass walls: 2 Hg + O₃ → Hg₂O + O₂ (restored by shaking with water).",
        "Allotropes of Sulphur: Sulphur forms numerous allotropes. The two most important crystalline forms are:",
        "1. α-Sulphur (Rhombic sulphur): Bright yellow crystalline solid, melting point 385.8 K, insoluble in water, readily soluble in CS₂. Stable below 369 K.",
        "2. β-Sulphur (Monoclinic / Prismatic sulphur): Colorless/pale yellow needle-like crystals, melting point 393 K, soluble in CS₂. Stable above 369 K.",
        "3. Transition Temperature (369 K): At 369 K, both α and β forms are in equilibrium and have equal stability. Both contain puckered crown S₈ rings with S-S bond length 204 pm and S-S-S angle 107°.",
        "4. Paramagnetic S₂: At ~1000 K in the vapor state, sulphur exists as S₂ molecules which are paramagnetic (like O₂) due to 2 unpaired electrons in degenerate π* antibonding orbitals."
      ],
      importantPoints: [
        "Passing a silent electric discharge through cold dry O₂ is mandatory to prevent thermal decomposition of formed O₃.",
        "O₃ oxidizes PbS (black) to PbSO₄ (white).",
        "Transition temperature of sulphur is 369 K.",
        "At high temperature (~1000 K), S₂ vapor is PARAMAGNETIC."
      ]
    },
    {
      heading: "4. Sulphur Dioxide (SO₂), Sulphuric Acid (H₂SO₄) & Oxoacids",
      paragraphs: [
        "Sulphur Dioxide (SO₂): Prepared in the laboratory by treating a sulphite with dilute H₂SO₄: SO₃²⁻ + 2 H⁺ → H₂O + SO₂. Industrial preparation: Roasting of sulphide ores: 4 FeS₂ + 11 O₂ → 2 Fe₂O₃ + 8 SO₂.",
        "Chemical Behavior of SO₂: Angular molecule with resonance hybrid (bond angle 119.5°).",
        "• Reducing Action: In presence of moisture, acts as a reducing agent: decolourises acidified KMnO₄ solution (5 SO₂ + 2 MnO₄⁻ + 2 H₂O → 5 SO₄²⁻ + 4 H⁺ + 2 Mn²⁺) and turns orange acidified K₂Cr₂O₇ solution GREEN (3 SO₂ + Cr₂O₇²⁻ + 2 H⁺ → 3 SO₄²⁻ + 2 Cr³⁺(green) + H₂O).",
        "• Bleaching Action: Bleaches by REDUCTION in presence of moisture: SO₂ + 2 H₂O → H₂SO₄ + 2 [H]. Bleaching is TEMPORARY (air oxidizes article back to original color).",
        "Contact Process for H₂SO₄: 3-step industrial synthesis:",
        "1. Combustion of sulphur or iron pyrites to produce SO₂.",
        "2. Catalytic oxidation: 2 SO₂ + O₂ ⇌ 2 SO₃ (V₂O₅ catalyst, 720 K, 2 bar, ΔH = -196.6 kJ/mol).",
        "3. Absorption of SO₃ in 98% H₂SO₄ to form Oleum (H₂S₂O₇), followed by dilution with calculated water: H₂S₂O₇ + H₂O → 2 H₂SO₄. (Direct addition of SO₃ to water produces a dense acid fog that resists condensation).",
        "Reactions & Properties of H₂SO₄: High boiling point (611 K) and viscosity due to strong H-bonding.",
        "• Acidic Nature: Dibasic acid. Ionizes in two steps: H₂SO₄ + H₂O → H₃O⁺ + HSO₄⁻ (Ka₁ > 10, very large); HSO₄⁻ + H₂O ⇌ H₃O⁺ + SO₄²⁻ (Ka₂ = 1.2 × 10⁻²).",
        "• Dehydrating Action: Absorbs water vigorously: Charring of cane sugar (C₁₂H₂₂O₁₁ → 12 C + 11 H₂O), dehydration of formic acid (HCOOH ⎯(conc. H₂SO₄)⎯→ CO + H₂O), and oxalic acid ((COOH)₂ ⎯(conc. H₂SO₄)⎯→ CO + CO₂ + H₂O).",
        "• Oxidizing Action: Hot concentrated H₂SO₄ is a moderately strong oxidizer: Cu + 2 H₂SO₄ → CuSO₄ + SO₂ + 2 H₂O; C + 2 H₂SO₄ → CO₂ + 2 SO₂ + 2 H₂O; S + 2 H₂SO₄ → 3 SO₂ + 2 H₂O."
      ],
      importantPoints: [
        "Acidified K₂Cr₂O₇ turns GREEN in the presence of SO₂ gas due to formation of Cr³⁺ ions.",
        "SO₂ bleaching is temporary (reduction), whereas Cl₂ bleaching is permanent (oxidation).",
        "Ka₁ of H₂SO₄ is very large (Ka₁ >> Ka₂), meaning H₂SO₄ is essentially 100% dissociated into H⁺ and HSO₄⁻ in first step."
      ]
    }
  ],

  formulae: [
    {
      title: "Contact Process Key Reversible Oxidation",
      formula: "2 SO_2(g) + O_2(g) \\xrightleftharpoons[720\\text{ K}, 2\\text{ bar}]{\\text{V}_2\\text{O}_5} 2 SO_3(g), \\quad \\Delta_r H^\\circ = -196.6\\text{ kJ/mol}",
      meaning: "Catalytic oxidation of sulfur dioxide to sulfur trioxide",
      symbols: "V₂O₅ = Vanadium pentoxide catalyst",
      unit: "kJ/mol",
      conditions: "720 K, 2 bar pressure, V₂O₅ catalyst",
      whenToUse: "Use in sulphuric acid manufacture analysis and Le Chatelier equilibrium questions."
    },
    {
      title: "Oleum Formation & Dilution",
      formula: "SO_3(g) + H_2SO_4(l, 98\\%) \\rightarrow H_2S_2O_7(l) \\text{ (Oleum)} \\\\ H_2S_2O_7(l) + H_2O(l) \\rightarrow 2 H_2SO_4(l)",
      meaning: "Safe industrial absorption of SO₃ without creating dangerous acid aerosols",
      symbols: "H₂S₂O₇ = Pyrosulphuric acid (Oleum)",
      unit: "Stoichiometric mass",
      conditions: "Controlled dilution with water",
      whenToUse: "Use in industrial process step questions and oleum percentage labeling problems."
    },
    {
      title: "Ozone Quantitative Iodometric Titration",
      formula: "O_3(g) + 2 I^-(aq) + H_2O(l) \\xrightarrow{\\text{Borate buffer (pH 9.2)}} 2 OH^-(aq) + I_2(s) + O_2(g) \\\\ I_2 + 2 Na_2S_2O_3 \\rightarrow 2 NaI + Na_2S_4O_6",
      meaning: "Quantitative estimation of atmospheric ozone",
      symbols: "1 mole O₃ produces 1 mole I₂ which consumes 2 moles Na₂S₂O₃",
      unit: "Molar equivalence (1:1 with I₂)",
      conditions: "Neutral phosphate/borate buffer",
      whenToUse: "Use in analytical estimation stoichiometry of ozone."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: P_BLOCK_12_DIAGRAMS.group16TrendsAndStructures,
    caption: "Group 16 Master Schematic: Ozone Resonance, Crown S₈ Ring & Contact Process Oxoacids."
  },

  neetImportantPoints: [
    "Negative electron gain enthalpy order: S > Se > Te > Po > O (Oxygen has least negative ΔegH due to compact 2p size and electron repulsion).",
    "Acidic strength of Group 16 hydrides: H₂O < H₂S < H₂Se < H₂Te (H₂Te is strongest acid due to lowest E-H bond enthalpy).",
    "Thermal stability order of hydrides: H₂O > H₂S > H₂Se > H₂Te > H₂Po.",
    "Boiling point of Group 16 hydrides: H₂S < H₂Se < H₂Te < H₂O (H₂O is highest due to strong intermolecular H-bonding).",
    "Ozone has bent structure with 2 identical O-O bonds of 128 pm (intermediate between single bond 148 pm and double bond 121 pm) due to resonance.",
    "Transition temperature of sulphur is 369 K (α-rhombic below 369 K, β-monoclinic above 369 K).",
    "S₂ molecule in vapor phase at 1000 K is PARAMAGNETIC (has 2 unpaired electrons in π* antibonding MOs, like O₂).",
    "Peroxodisulphuric acid (H₂S₂O₈, Marshall's acid) contains a peroxy (-O-O-) linkage; Oleum (H₂S₂O₇) contains an -S-O-S- bridge.",
    "Concentrated H₂SO₄ chars sugar into pure black porous carbon (C₁₂H₂₂O₁₁ → 12 C + 11 H₂O) via vigorous dehydration."
  ],

  commonConfusions: [
    {
      commonConfusion: "Thinking Oxygen has a more negative electron gain enthalpy than Sulphur because of higher electronegativity.",
      correctFact: "Sulphur (-200 kJ/mol) has a MORE negative electron gain enthalpy than Oxygen (-141 kJ/mol). Oxygen's compact 2p orbital creates intense electron-electron repulsion that opposes the incoming electron.",
      whyItMattersForNEET: "A favorite NEET trap tested across statement and ranking questions."
    },
    {
      commonConfusion: "Confusing the bleaching mechanism of SO₂ with Cl₂.",
      correctFact: "SO₂ bleaches by REDUCTION in presence of moisture (temporary; air re-oxidizes the material). Cl₂ bleaches by OXIDATION (permanent).",
      whyItMattersForNEET: "Repeatedly asked in AIPMT/NEET chemistry papers."
    },
    {
      commonConfusion: "Assuming S₂ gas at high temperatures is diamagnetic like N₂.",
      correctFact: "S₂ in vapor phase at ~1000 K contains 2 unpaired electrons in antibonding π* orbitals, making it PARAMAGNETIC, exactly like O₂.",
      whyItMattersForNEET: "NCERT Class 12 Chemistry explicit question."
    }
  ],

  quickRevision: [
    "⚡ Negative ΔegH order: S > Se > Te > Po > O (O is lowest in Group 16).",
    "⚡ Hydride acidity: H₂O < H₂S < H₂Se < H₂Te (Te-H bond is weakest).",
    "⚡ Hydride thermal stability: H₂O > H₂S > H₂Se > H₂Te > H₂Po.",
    "⚡ Hydride boiling point: H₂S < H₂Se < H₂Te < H₂O (H₂O elevated by H-bonding).",
    "⚡ O₃ structure: Bent, 117° angle, identical O-O bonds (128 pm) due to resonance.",
    "⚡ O₃ quantitative estimation: Reaction with neutral buffered KI, titrate I₂ against Na₂S₂O₃.",
    "⚡ Sulphur transition temp: 369 K (α-Rhombic ⇌ β-Monoclinic).",
    "⚡ S₂ at 1000 K is PARAMAGNETIC (two unpaired electrons in π* orbitals).",
    "⚡ Marshall's acid (H₂S₂O₈) has -O-O- peroxy bridge; Oleum (H₂S₂O₇) has -S-O-S- bridge.",
    "⚡ Contact process: 2 SO₂ + O₂ ⇌ 2 SO₃ (V₂O₅ catalyst, 720 K, 2 bar); absorb in H₂SO₄ to give Oleum."
  ],

  practiceQuestions: [
    {
      id: "prac-pblock-16-1",
      question: "Which of the following orders of negative electron gain enthalpy is correct for Group 16 elements?",
      options: [
        "S > Se > Te > Po > O",
        "O > S > Se > Te > Po",
        "S > O > Se > Te > Po",
        "Po > Te > Se > S > O"
      ],
      correctAnswer: 0,
      explanation: "Due to the small size and high electron density of the 2p orbitals of oxygen, an incoming electron experiences severe repulsion. Thus, oxygen has the least negative electron gain enthalpy in Group 16. The correct order of negative ΔegH is: S (-200) > Se (-195) > Te (-190) > Po (-174) > O (-141 kJ/mol).",
      conceptTested: "Negative Electron Gain Enthalpy Anomaly in Group 16",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-16-elements"
    },
    {
      id: "prac-pblock-16-2",
      question: "Which of the following compounds contains a peroxy (-O-O-) linkage?",
      options: [
        "H₂S₂O₈ (Marshall's acid)",
        "H₂S₂O₇ (Oleum)",
        "H₂S₂O₆ (Dithionic acid)",
        "H₂SO₄ (Sulphuric acid)"
      ],
      correctAnswer: 0,
      explanation: "Peroxodisulphuric acid (H₂S₂O₈, Marshall's acid) has two -SO₂OH groups linked by a peroxy (-O-O-) bond: HO-SO₂-O-O-SO₂-OH. H₂S₂O₇ has an -S-O-S- linkage, H₂S₂O₆ has an -S-S- linkage, and H₂SO₄ has no S-O-S or O-O linkage.",
      conceptTested: "Oxoacids of Sulphur Structures & Linkages",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-16-elements"
    },
    {
      id: "prac-pblock-16-3",
      question: "At 1000 K, sulphur exists as S₂ in vapor phase. Which of the following statements is correct regarding S₂?",
      options: [
        "It is paramagnetic like O₂ with 2 unpaired electrons in π* orbitals",
        "It is diamagnetic with all electrons paired",
        "It is ferromagnetic in nature",
        "It contains a triple bond like N₂"
      ],
      correctAnswer: 0,
      explanation: "According to Molecular Orbital Theory, diatomic S₂ in vapor state at elevated temperatures (~1000 K) has 2 unpaired electrons in degenerate antibonding π* orbitals (π*3px and π*3py), exactly like O₂. Therefore, S₂ is paramagnetic.",
      conceptTested: "Paramagnetism of S2 Vapor",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-16-elements"
    },
    {
      id: "prac-pblock-16-4",
      question: "Quantitative estimation of ozone (O₃) in a gas sample is performed by passing it through:",
      options: [
        "Excess neutral potassium iodide (KI) solution buffered with borate buffer",
        "Acidified potassium dichromate solution",
        "Alkaline pyrogallol solution",
        "Acidified potassium permanganate solution"
      ],
      correctAnswer: 0,
      explanation: "Ozone quantitatively oxidizes iodide ions to iodine in a neutral borate buffer (pH 9.2): O₃ + 2 I⁻ + H₂O → 2 OH⁻ + I₂ + O₂. The liberated I₂ is titrated with standard sodium thiosulphate (Na₂S₂O₃) using starch as indicator to determine O₃.",
      conceptTested: "Quantitative Estimation of Ozone",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-16-elements"
    }
  ],

  pyqs: P_BLOCK_12_VERIFIED_PYQS.filter(q => q.topicId === "chem-group-16-elements")
};
