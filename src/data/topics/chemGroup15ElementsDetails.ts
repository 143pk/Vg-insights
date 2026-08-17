import { DetailedTopicContent } from '../../types/neet';
import { P_BLOCK_12_DIAGRAMS } from '../pBlock12/pBlock12Diagrams';
import { P_BLOCK_12_VERIFIED_PYQS } from '../pBlock12/pBlock12Pyqs';

export const chemGroup15ElementsDetails: DetailedTopicContent = {
  topicId: "chem-group-15-elements",
  topicName: "Group 15 Elements (Nitrogen Family — Trends, Anomalies, N₂, NH₃, HNO₃, Oxides & Phosphine)",
  subject: "Chemistry",
  class: "Class 12",
  classification: "Inorganic Chemistry (Class 12)",
  chapter: "p-Block Elements (Group 15 to 18)",

  whatIsThisTopic:
    "Group 15 of the periodic table comprises Nitrogen (N), Phosphorus (P), Arsenic (As), Antimony (Sb), and Bismuth (Bi). This comprehensive NEET module covers the general valence electronic configuration (ns² np³), periodic trends across atomic/ionic radii, ionization enthalpy, electronegativity, oxidation states (+5, +3, -3) and the Inert Pair Effect, the anomalous behavior of nitrogen due to small size, high electronegativity and absence of d-orbitals, chemical reactivity of Group 15 hydrides (basic strength, thermal stability, reducing character, bond angle and boiling point anomalies), chemistry of Dinitrogen (N₂), Ammonia (Haber process), Oxides of Nitrogen (structures, oxidation states, acidic/neutral nature), Nitric Acid (Ostwald's process, oxidizing action, passivity of metals), Allotropes of Phosphorus (White, Red, Black P), Phosphine (PH₃), and Oxoacids of Phosphorus.",

  basicIdea: [
    "1. Electronic Configuration & Half-Filled Stability: Group 15 elements have the valence shell configuration ns² np³. The exactly half-filled np³ subshell imparts extra thermodynamic stability, making their first ionization enthalpies significantly higher than corresponding Group 14 and Group 16 elements (e.g., IE₁ of N > O).",
    "2. Oxidation States & Inert Pair Effect: Group 15 elements exhibit -3, +3, and +5 oxidation states. Down the group, the stability of the -3 state decreases due to decreasing electronegativity and increasing metallic character. Due to the Inert Pair Effect (poor shielding by d and f electrons), the stability of the +5 state DECREASES while that of the +3 state INCREASES: Bi³⁺ is much more stable than Bi⁵⁺, making Bi(V) a powerful oxidizing agent (e.g. BiF₅ is formed, but BiCl₅ is not).",
    "3. Anomalous Behavior of Nitrogen: Nitrogen differs fundamentally from heavier congeners because of: (a) Extremely small size, (b) High electronegativity, (c) High ionization enthalpy, and (d) Non-availability of vacant d-orbitals. Nitrogen forms strong pπ-pπ multiple bonds (N≡N), making it a stable, inert diatomic gas. Heavier elements form single bonds (P-P, As-As) and exist as polyatomic tetrahedral solids (P₄, As₄). Nitrogen has a maximum covalency of 4 (cannot form NCl₅).",
    "4. Group 15 Hydrides Trends (EH₃: NH₃, PH₃, AsH₃, SbH₃, BiH₃): Basic strength decreases down the group (NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃) because lone pair electron density is highest on the small nitrogen atom. Thermal stability decreases (NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃) due to increasing E-H bond length. Reducing character increases (BiH₃ is the strongest reducing agent). Boiling point order shows an anomaly: PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃ (intermolecular H-bonding elevates NH₃).",
    "5. Dinitrogen (N₂) & Ammonia (NH₃): N₂ is chemically inert at room temperature due to its exceptionally high bond dissociation enthalpy (941.4 kJ/mol). NH₃ is industrially synthesized by Haber's Process: N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92.4 kJ/mol) at 700 K, 200 atm in the presence of iron oxide catalyst promoted with K₂O and Al₂O₃. NH₃ acts as a Lewis base and forms coordination complexes (e.g., [Cu(NH₃)₄]²⁺ deep blue solution).",
    "6. Nitric Acid (HNO₃): Manufactured industrially by Ostwald's Process (catalytic oxidation of NH₃ to NO over Pt/Rh gauze at 500 K, 9 bar). Concentrated HNO₃ is a potent oxidizing agent: oxidizes non-metals to their highest oxoacids (I₂ → HIO₃, C → CO₂, S₈ → H₂SO₄, P₄ → H₃PO₄) and renders Fe, Cr, and Al PASSIVE by creating an impervious surface oxide film.",
    "7. Allotropes of Phosphorus & Oxoacids: White phosphorus (discrete P₄ tetrahedron, 60° angle strain, highly reactive, chemiluminescent in air, soluble in CS₂) converts to polymeric Red phosphorus on heating at 573 K in inert CO₂. In oxoacids of phosphorus, P-H bonds confer reducing properties: H₃PO₂ (two P-H bonds) is the strongest reducing oxoacid."
  ],

  importantTerms: [
    {
      term: "Inert Pair Effect in Group 15",
      definition: "The reluctance of the valence 6s² electrons in Bismuth to unpair and participate in covalent bonding due to poor screening by intervening 4f¹⁴ and 5d¹⁰ subshells.",
      neetNote: "Bi(V) compounds act as strong oxidizing agents because Bi⁵⁺ readily accepts 2 electrons to form the highly stable Bi³⁺ (e.g., BiF₅ acts as an oxidizing and fluorinating agent)."
    },
    {
      term: "Maximum Covalency of Nitrogen",
      definition: "The maximum number of covalent and coordinate bonds nitrogen can form, which is strictly limited to 4.",
      neetNote: "Nitrogen has only four valence orbitals (one 2s and three 2p) with NO vacant 2d subshell. Thus, NCl₅, NF₅, and [NCl₆]⁻ CANNOT exist, whereas PCl₅, PF₅, and [PCl₆]⁻ are readily formed."
    },
    {
      term: "Haber's Process",
      definition: "The direct exothermic catalytic combination of dinitrogen and dihydrogen to produce ammonia gas under high pressure.",
      neetNote: "Key Le Chatelier conditions: High pressure (200 atm), optimum temperature (~700 K), catalyst: FeO with promoter K₂O and Al₂O₃."
    },
    {
      term: "Ostwald's Process",
      definition: "The three-stage industrial process for manufacturing nitric acid from catalytic air oxidation of ammonia.",
      neetNote: "Stage 1: 4 NH₃ + 5 O₂ ⎯(Pt/Rh gauze, 500 K, 9 bar)⎯→ 4 NO + 6 H₂O. NO is then oxidized to NO₂ and absorbed in water to yield ~68% HNO₃."
    },
    {
      term: "Phosphine (PH₃)",
      definition: "A highly poisonous, colorless gas with a rotten fish smell, prepared by heating white phosphorus with concentrated NaOH in an inert atmosphere.",
      neetNote: "Reaction: P₄ + 3 NaOH + 3 H₂O ⎯(CO₂ atm)⎯→ PH₃ + 3 NaH₂PO₂ (Sodium hypophosphite). PH₃ is non-flammable when pure, but catches fire due to presence of P₂H₄ or P₄ vapors."
    },
    {
      term: "Holme's Signals",
      definition: "Marine smoke signals utilizing containers filled with a mixture of calcium carbide (CaC₂) and calcium phosphide (Ca₃P₂).",
      neetNote: "When dropped in water: Ca₃P₂ + 6 H₂O → 3 Ca(OH)₂ + 2 PH₃ and CaC₂ + 2 H₂O → Ca(OH)₂ + C₂H₂. Spontaneous combustion of PH₃ ignites acetylene, producing brilliant light and smoke."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Group 15 Elements, Electronic Configuration & Periodic Trends",
      paragraphs: [
        "Group 15 elements (Nitrogen Family or Pnictogens) comprise Nitrogen (₇N), Phosphorus (₁₅P), Arsenic (₃₃As), Antimony (₅₁Sb), and Bismuth (₈₃Bi). The general valence shell electronic configuration is ns² np³. Nitrogen and phosphorus are non-metals, arsenic and antimony are metalloids, and bismuth is a true post-transition metal.",
        "Atomic and Ionic Radii: Covalent and ionic radii increase down the group from N to Bi. However, the increase in covalent radius from N to P is large (~30 pm), whereas from As to Bi the increase is modest (~9 pm). This attenuation is caused by the poor shielding effect of completely filled 3d, 4d, and 4f subshells in the heavier members.",
        "Ionization Enthalpy: First ionization enthalpy decreases down the group: N (1402) > P (1012) > As (947) > Sb (834) > Bi (703 kJ/mol). Crucially, the IE₁ of any Group 15 element is significantly HIGHER than that of the adjacent Group 16 element (e.g., N: 1402 kJ/mol vs O: 1314 kJ/mol) because the stable, exactly half-filled np³ subshell in Group 15 requires substantially more energy to remove an electron.",
        "Electronegativity: Decreases down the group: N (3.0) > P (2.1) > As (2.0) > Sb (1.9) ≈ Bi (1.9). Nitrogen is the fourth most electronegative element in the periodic table."
      ],
      visual: {
        type: 'svg',
        svgContent: P_BLOCK_12_DIAGRAMS.group15TrendsAndStructures,
        caption: "Figure 16.1: Group 15 Electronic Structures, Phosphorus Allotropes & Master Hydride Matrix.",
        guide: "Diagram Guide: Note the 60° angle strain in white P₄ tetrahedron, and compare the basicity vs reducing power trends in the hydrides table."
      },
      importantPoints: [
        "IE₁ order across Period 2: C < O < N < F < Ne (Nitrogen is greater than Oxygen due to half-filled 2p³ configuration!).",
        "Nitrogen does not possess d-orbitals in its valence shell, strictly limiting its maximum covalency to 4.",
        "Bi³⁺ is more stable than Bi⁵⁺ due to the inert pair effect; Bi(V) compounds act as powerful oxidizing agents."
      ]
    },
    {
      heading: "2. Chemical Reactivity of Group 15 Hydrides (EH₃)",
      paragraphs: [
        "All Group 15 elements form volatile, covalent trihydrides of the general formula EH₃ (NH₃, PH₃, AsH₃, SbH₃, BiH₃). The properties of these hydrides exhibit pronounced periodic variations that are among the most frequently tested topics in NEET UG.",
        "1. Thermal Stability: Decreases systematically down the group: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃. As the central atom size increases from N to Bi, the E-H bond length increases and the E-H bond dissociation enthalpy decreases from 389 kJ/mol in N-H to only 247 kJ/mol in Sb-H. BiH₃ decomposes rapidly even at room temperature.",
        "2. Reducing Character: Inversely related to thermal stability. Since the E-H bond becomes progressively weaker, hydrogen is released most readily down the group. Reducing power order: NH₃ (mild) < PH₃ < AsH₃ < SbH₃ < BiH₃ (strongest reducing agent).",
        "3. Basic Strength (Lewis Basicity): All EH₃ molecules possess one non-bonding lone pair of electrons on the central atom (pyramidal geometry). Basic strength order: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃. In NH₃, the small size of nitrogen concentrates the lone pair in a compact orbital with high electron density. Down the group, the lone pair occupies a large, diffuse orbital, reducing its electron-donating ability.",
        "4. Boiling Point Anomaly: The normal trend of boiling point increases with molecular mass due to increasing London dispersion forces (PH₃ < AsH₃ < SbH₃ < BiH₃). However, NH₃ exhibits extensive intermolecular hydrogen bonding (N-H···N), causing its boiling point to be higher than PH₃ and AsH₃. Exact NCERT Boiling Point Order: PH₃ (185.5 K) < AsH₃ (210.6 K) < NH₃ (238.5 K) < SbH₃ (254.6 K) < BiH₃ (290 K).",
        "5. Bond Angle Variation (Drago's Rule): In NH₃, sp³ hybridization operates with lone pair-bond pair repulsion reducing the tetrahedral angle to 107.8°. In PH₃, AsH₃, and SbH₃, the central atoms are large and of low electronegativity; bonding occurs through almost pure p-orbitals without significant hybridization. Consequently, bond angles drop drastically: NH₃ (107.8°) > PH₃ (93.6°) > AsH₃ (91.8°) > SbH₃ (91.3°)."
      ],
      importantPoints: [
        "BiH₃ is the strongest reducing hydride in Group 15.",
        "NH₃ has the highest basic strength and highest dipole moment among Group 15 hydrides.",
        "PH₃ has the lowest boiling point among all Group 15 hydrides."
      ]
    },
    {
      heading: "3. Dinitrogen (N₂), Ammonia (NH₃) & Oxides of Nitrogen",
      paragraphs: [
        "Dinitrogen (N₂): Comprises ~78% of air by volume. Prepared in the laboratory by treating aqueous ammonium chloride with sodium nitrite: NH₄Cl(aq) + NaNO₂(aq) → N₂(g) + 2 H₂O(l) + NaCl(aq). Very pure N₂ is obtained by the thermal decomposition of sodium or barium azide: Ba(N₃)₂ ⎯Δ⎯→ Ba + 3 N₂.",
        "Ammonia (NH₃): Colorless gas with a pungent odor. Highly soluble in water due to hydrogen bonding; aqueous solution is weakly basic: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻. In the Haber Process, FeO with promoters K₂O and Al₂O₃ is used to increase the rate of attainment of equilibrium. NH₃ forms deep blue complexes with Cu²⁺: Cu²⁺(aq) + 4 NH₃(aq) ⇌ [Cu(NH₃)₄]²⁺(aq) (tetraamminecopper(II) ion), and a colorless soluble complex with AgCl: AgCl(s) + 2 NH₃(aq) → [Ag(NH₃)₂]Cl(aq).",
        "Oxides of Nitrogen: Nitrogen forms a remarkable series of oxides in oxidation states from +1 to +5:",
        "• N₂O (Nitrous oxide, +1): Colorless neutral gas (Laughing gas). Prepared by heating ammonium nitrate: NH₄NO₃ ⎯Δ⎯→ N₂O + 2 H₂O.",
        "• NO (Nitric oxide, +2): Colorless neutral gas, paramagnetic in gas phase due to 1 odd electron, but diamagnetic when condensed to liquid/solid (dimerizes to N₂O₂). Prepared by: 2 NaNO₂ + 2 FeSO₄ + 3 H₂SO₄ → Fe₂(SO₄)₃ + 2 NaHSO₄ + 2 H₂O + 2 NO.",
        "• N₂O₃ (Dinitrogen trioxide, +3): Blue solid, acidic oxide. Prepared by mixing equimolar NO and NO₂ at 250 K: NO + NO₂ ⇌ N₂O₃.",
        "• NO₂ (Nitrogen dioxide, +4): Brown acidic gas, paramagnetic with 1 unpaired electron. Readily dimerizes to colorless diamagnetic N₂O₄ solid/liquid at low temperature: 2 NO₂ ⇌ N₂O₄ (ΔH < 0).",
        "• N₂O₅ (Dinitrogen pentoxide, +5): Colorless acidic solid. Exists as an ionic solid [NO₂]⁺ [NO₃]⁻ in the crystalline state. Prepared by dehydrating concentrated HNO₃ with P₄O₁₀: 4 HNO₃ + P₄O₁₀ → 2 N₂O₅ + 4 HPO₃."
      ],
      importantPoints: [
        "N₂O and NO are the ONLY two neutral oxides of nitrogen; all other nitrogen oxides (N₂O₃, NO₂, N₂O₄, N₂O₅) are acidic.",
        "NO and NO₂ are odd-electron paramagnetic molecules in the gaseous state, which dimerize to diamagnetic dimers at low temperatures.",
        "Crystalline N₂O₅ is ionic: Nitronium cation [NO₂]⁺ and Nitrate anion [NO₃]⁻."
      ]
    },
    {
      heading: "4. Nitric Acid (HNO₃) & Phosphorus Allotropes",
      paragraphs: [
        "Nitric Acid (HNO₃): In the laboratory, prepared by heating NaNO₃ with concentrated H₂SO₄. In industry, manufactured by Ostwald's Process: 4 NH₃ + 5 O₂ ⎯(Pt/Rh, 500 K, 9 bar)⎯→ 4 NO + 6 H₂O; 2 NO + O₂ ⇌ 2 NO₂; 3 NO₂ + H₂O → 2 HNO₃ + NO.",
        "Reactions with Metals: Dilute HNO₃ acts as a moderately strong oxidizer; concentrated HNO₃ acts as a very strong oxidizer:",
        "• Copper: 3 Cu + 8 HNO₃(dilute) → 3 Cu(NO₃)₂ + 2 NO + 4 H₂O",
        "• Copper: Cu + 4 HNO₃(concentrated) → Cu(NO₃)₂ + 2 NO₂ + 2 H₂O",
        "• Zinc: 4 Zn + 10 HNO₃(dilute) → 4 Zn(NO₃)₂ + N₂O + 5 H₂O (Yields Laughing Gas!)",
        "• Zinc: Zn + 4 HNO₃(concentrated) → Zn(NO₃)₂ + 2 NO₂ + 2 H₂O",
        "• Passive Metals: Fe, Cr, and Al do not dissolve in concentrated HNO₃ due to formation of a passive protective surface oxide film.",
        "Oxoacids of Phosphorus: Key NCERT species:",
        "1. Hypophosphorous / Phosphinic acid (H₃PO₂): Oxidation state +1. Monobasic (contains one P-OH bond and two P-H bonds). Very strong reducing agent.",
        "2. Phosphorous / Phosphonic acid (H₃PO₃): Oxidation state +3. Dibasic (contains two P-OH bonds and one P-H bond). Reducing agent. Undergoes disproportionation on heating: 4 H₃PO₃ ⎯Δ⎯→ 3 H₃PO₄ + PH₃.",
        "3. Orthophosphoric acid (H₃PO₄): Oxidation state +5. Tribasic (contains three P-OH bonds and zero P-H bonds). Non-reducing acid."
      ],
      importantPoints: [
        "Reaction of Zn with dilute HNO₃ produces N₂O, whereas with Cu it produces NO!",
        "Basicity of phosphorus oxoacids = number of P-OH bonds; Reducing capacity = number of P-H bonds.",
        "H₃PO₃ disproportionates on heating to form Orthophosphoric acid (H₃PO₄, +5) and Phosphine (PH₃, -3)."
      ]
    }
  ],

  formulae: [
    {
      title: "Haber's Process Equilibrium",
      formula: "N_2(g) + 3H_2(g) \\xrightleftharpoons[700\\text{ K}, 200\\text{ atm}]{\\text{FeO} + \\text{K}_2\\text{O} + \\text{Al}_2\\text{O}_3} 2NH_3(g), \\quad \\Delta_r H^\\circ = -92.4\\text{ kJ/mol}",
      meaning: "Industrial production of ammonia",
      symbols: "ΔrH° = Standard reaction enthalpy",
      unit: "kJ/mol",
      conditions: "High pressure (200 atm), optimum T ~700 K, catalyst FeO",
      whenToUse: "Use in industrial inorganic reaction questions and Le Chatelier equilibrium problems."
    },
    {
      title: "Ostwald's Process Catalytic Oxidation",
      formula: "4 NH_3(g) + 5 O_2(g) \\xrightarrow[500\\text{ K}, 9\\text{ bar}]{\\text{Pt/Rh gauze}} 4 NO(g) + 6 H_2O(g), \\quad \\Delta H < 0",
      meaning: "Primary conversion of ammonia to nitric oxide",
      symbols: "Pt/Rh = Platinum-Rhodium gauze catalyst",
      unit: "bar, Kelvin",
      conditions: "500 K, 9 bar pressure",
      whenToUse: "Use in nitric acid manufacture and industrial catalyst identification."
    },
    {
      title: "Phosphine Synthesis from White Phosphorus",
      formula: "P_4(s) + 3 NaOH(aq) + 3 H_2O(l) \\xrightarrow{\\text{Inert } \\text{CO}_2} PH_3(g) + 3 NaH_2PO_2(aq)",
      meaning: "Disproportionation of white phosphorus in alkaline medium",
      symbols: "P (0) undergoes simultaneous reduction to PH₃ (-3) and oxidation to NaH₂PO₂ (+1)",
      unit: "Dimensionless stoichiometry",
      conditions: "Boiling with concentrated NaOH in inert CO₂ atmosphere",
      whenToUse: "Use for disproportionation reaction identification and PH₃ preparation."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: P_BLOCK_12_DIAGRAMS.group15TrendsAndStructures,
    caption: "Group 15 Master Visualization: Nitrogen Anomaly, Phosphorus Structures & Hydride Periodic Trends."
  },

  neetImportantPoints: [
    "Nitrogen forms pπ-pπ triple bonds (N≡N) due to small size; heavier elements cannot form effective pπ-pπ bonds and form single bonds (P-P, As-As).",
    "Single N-N bond is weaker than P-P bond (159 vs 213 kJ/mol) because of strong repulsion between non-bonding electron pairs on compact nitrogen atoms.",
    "Bismuth in +5 state is an extremely strong oxidizing agent due to the inert pair effect (Bi⁵⁺ + 2e⁻ → Bi³⁺).",
    "Boiling point sequence of Group 15 hydrides: PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃ (NH₃ is abnormally high due to H-bonding).",
    "Thermal stability order of hydrides: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃; Reducing character is the exact reverse: NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃.",
    "H₃PO₂ is monobasic and strongest reducing agent among phosphorus oxoacids due to presence of 2 P-H bonds.",
    "Brown ring test for nitrates: FeSO₄ + NO₃⁻ + conc. H₂SO₄ forms brown coordination complex [Fe(H₂O)₅(NO)]SO₄ where Fe is in +1 formal oxidation state and NO is NO⁺.",
    "White phosphorus is stored under water because it catches fire in air (spontaneous ignition temp ~303 K); red phosphorus is stable in air."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming Nitrogen can form NCl₅ because it is in Group 15 with valence 5.",
      correctFact: "Nitrogen has only 4 valence orbitals (one 2s, three 2p) and NO vacant d-orbitals in period 2. Its maximum covalency is strictly 4. NCl₅ does NOT exist.",
      whyItMattersForNEET: "Frequently tested in NEET assertion-reasoning and multiple-choice questions."
    },
    {
      commonConfusion: "Confusing the gas produced when Copper vs Zinc reacts with dilute HNO₃.",
      correctFact: "Cu + dilute HNO₃ produces Nitric Oxide (NO), while Zn + dilute HNO₃ produces Nitrous Oxide (N₂O, Laughing Gas). Concentrated HNO₃ produces NO₂ with both metals.",
      whyItMattersForNEET: "Classic NEET question pattern with high negative marking rate."
    },
    {
      commonConfusion: "Thinking that H₃PO₄ is a stronger reducing agent than H₃PO₂ because it has more oxygens.",
      correctFact: "Reducing property in phosphorus oxoacids depends strictly on the number of direct P-H bonds, NOT oxygen atoms. H₃PO₂ has 2 P-H bonds (strong reducing agent), H₃PO₄ has 0 P-H bonds (non-reducing).",
      whyItMattersForNEET: "Direct NCERT fact repeatedly tested in NEET UG."
    }
  ],

  quickRevision: [
    "⚡ N₂ is inert at room temp (N≡N bond enthalpy = 941.4 kJ/mol).",
    "⚡ Covalency of N is strictly ≤ 4; NCl₅ does not exist due to lack of d-orbitals.",
    "⚡ Hydride reducing power: NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃ (BiH₃ is strongest reducing).",
    "⚡ Hydride basicity: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃ (compact N has highest lp density).",
    "⚡ Hydride boiling points: PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃ (NH₃ elevated by H-bonding).",
    "⚡ Neutral oxides of N: N₂O and NO; Acidic oxides: N₂O₃, NO₂, N₂O₄, N₂O₅.",
    "⚡ White P₄ (60° strain, poisonous, soluble in CS₂) ⎯573K/CO₂⎯→ Red P (polymeric, stable).",
    "⚡ Cu + dil HNO₃ → NO; Cu + conc HNO₃ → NO₂; Zn + dil HNO₃ → N₂O; Zn + conc HNO₃ → NO₂.",
    "⚡ Passive metals in conc HNO₃: Fe, Cr, Al (protective oxide film).",
    "⚡ H₃PO₂ has 1 P-OH (monobasic) and 2 P-H (strongest reducing oxoacid)."
  ],

  practiceQuestions: [
    {
      id: "prac-pblock-15-1",
      question: "Which of the following hydrides of Group 15 has the lowest boiling point?",
      options: ["PH₃", "NH₃", "AsH₃", "SbH₃"],
      correctAnswer: 0,
      explanation: "Boiling point order of Group 15 hydrides is: PH₃ (185.5 K) < AsH₃ (210.6 K) < NH₃ (238.5 K) < SbH₃ (254.6 K) < BiH₃ (290 K). PH₃ has the lowest boiling point because it lacks intermolecular hydrogen bonding and has smaller van der Waals forces than AsH₃, SbH₃, and BiH₃.",
      conceptTested: "Group 15 Hydride Boiling Point Anomaly",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-15-elements"
    },
    {
      id: "prac-pblock-15-2",
      question: "When white phosphorus is heated with concentrated sodium hydroxide solution in an inert atmosphere of CO₂, the products formed are:",
      options: [
        "PH₃ and NaH₂PO₂",
        "PH₃ and Na₃PO₄",
        "P₂O₅ and Na₃PO₃",
        "H₃PO₃ and NaH"
      ],
      correctAnswer: 0,
      explanation: "White phosphorus undergoes disproportionation in alkaline solution: P₄ + 3 NaOH + 3 H₂O → PH₃ (Phosphine) + 3 NaH₂PO₂ (Sodium hypophosphite). Phosphorus in oxidation state 0 is simultaneously reduced to -3 in PH₃ and oxidized to +1 in NaH₂PO₂.",
      conceptTested: "Preparation of Phosphine & Disproportionation",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-15-elements"
    },
    {
      id: "prac-pblock-15-3",
      question: "A metallic element M dissolves in dilute HNO₃ to give gas A, but in concentrated HNO₃ to give gas B. If M is copper, gases A and B are respectively:",
      options: [
        "NO and NO₂",
        "N₂O and NO₂",
        "NO₂ and NO",
        "N₂ and NO₂"
      ],
      correctAnswer: 0,
      explanation: "With copper metal:\n• 3 Cu + 8 HNO₃(dilute) → 3 Cu(NO₃)₂ + 2 NO(g) + 4 H₂O (Gas A = NO)\n• Cu + 4 HNO₃(concentrated) → Cu(NO₃)₂ + 2 NO₂(g) + 2 H₂O (Gas B = NO₂).\nThus, Gas A is NO and Gas B is NO₂.",
      conceptTested: "Reactions of Copper with Nitric Acid",
      difficulty: "Medium",
      marks: 4,
      topicId: "chem-group-15-elements"
    },
    {
      id: "prac-pblock-15-4",
      question: "Which of the following statements regarding phosphorus allotropes is INCORRECT?",
      options: [
        "White phosphorus is less reactive than red phosphorus due to angle strain",
        "White phosphorus is a waxy translucent solid that glows in the dark (chemiluminescence)",
        "Red phosphorus is obtained by heating white phosphorus at 573 K in an inert atmosphere",
        "Black phosphorus is thermodynamically the most stable allotrope of phosphorus"
      ],
      correctAnswer: 0,
      explanation: "Statement (1) is INCORRECT because white phosphorus is MUCH MORE reactive than red phosphorus due to high angular strain in the P₄ tetrahedron (bond angle = 60° compared to normal 109.5°). Red phosphorus is polymeric and stable.",
      conceptTested: "Phosphorus Allotropes Comparison & Reactivity",
      difficulty: "Easy",
      marks: 4,
      topicId: "chem-group-15-elements"
    }
  ],

  pyqs: P_BLOCK_12_VERIFIED_PYQS.filter(q => q.topicId === "chem-group-15-elements")
};
