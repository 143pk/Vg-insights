import { PYQuestion } from '../../types/neet';

export const D_AND_F_BLOCK_VERIFIED_PYQS: PYQuestion[] = [
  // --- NEET 2024 ---
  {
    id: "pyq-dfblock-2024-1",
    year: 2024,
    exam: "NEET UG 2024",
    question: "Which one of the following transition metal ions is diamagnetic in nature?",
    options: [
      "Cu⁺ (Z = 29)",
      "Cu²⁺ (Z = 29)",
      "Fe²⁺ (Z = 26)",
      "Co²⁺ (Z = 27)"
    ],
    correctAnswer: 0,
    explanation: "Electronic configurations:\n• Cu (Z = 29) has the ground state configuration [Ar] 3d¹⁰ 4s¹.\n• Cu⁺ ion is formed by losing the 4s¹ electron, resulting in [Ar] 3d¹⁰. Since the 3d subshell is completely filled, all 10 electrons are paired (n = 0 unpaired electrons). Hence, Cu⁺ is DIAMAGNETIC.\n\nIn contrast:\n• Cu²⁺: [Ar] 3d⁹ (n = 1 unpaired electron, paramagnetic, μ = 1.73 BM)\n• Fe²⁺: [Ar] 3d⁶ (n = 4 unpaired electrons, paramagnetic, μ = 4.90 BM)\n• Co²⁺: [Ar] 3d⁷ (n = 3 unpaired electrons, paramagnetic, μ = 3.87 BM)",
    conceptTested: "Electronic Configuration & Diamagnetism in 3d Ions",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-3d-transition-trends"
  },
  {
    id: "pyq-dfblock-2024-2",
    year: 2024,
    exam: "NEET UG 2024",
    question: "When acidified potassium permanganate (KMnO₄) reacts with oxalic acid (H₂C₂O₄), the oxidation state of carbon changes from:",
    options: [
      "+3 to +4",
      "+2 to +4",
      "+3 to +2",
      "+4 to +3"
    ],
    correctAnswer: 0,
    explanation: "In oxalic acid (H₂C₂O₄) or oxalate ion (C₂O₄²⁻):\n• Let oxidation number of C be x:\n  2x + 4(-2) = -2 ⇒ 2x - 8 = -2 ⇒ 2x = +6 ⇒ x = +3.\n\nDuring oxidation by acidified KMnO₄, oxalate is oxidized to CO₂:\n• In CO₂: x + 2(-2) = 0 ⇒ x = +4.\n\nOverall redox equation in acidic medium:\n2 MnO₄⁻ + 5 C₂O₄²⁻ + 16 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O\nCarbon is oxidized from +3 to +4, while Manganese is reduced from +7 (in MnO₄⁻) to +2 (in Mn²⁺).",
    conceptTested: "Redox Titration of KMnO4 with Oxalic Acid & Oxidation States",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-kmno4-k2cr2o7"
  },

  // --- NEET 2023 ---
  {
    id: "pyq-dfblock-2023-1",
    year: 2023,
    exam: "NEET UG 2023",
    question: "The pair of elements having almost identical atomic/covalent radii due to lanthanoid contraction is:",
    options: [
      "Zr and Hf",
      "Ti and Zr",
      "Zr and Nb",
      "Mo and W"
    ],
    correctAnswer: 0,
    explanation: "Zirconium (Zr, 4d series, Z = 40, covalent radius ~160 pm) and Hafnium (Hf, 5d series, Z = 72, covalent radius ~159 pm) have nearly identical atomic/covalent and ionic radii.\n\nReason: The 14 lanthanoid elements (Ce₅₈ to Lu₇₁) intervene between La₅₇ and Hf₇₂. In these elements, the 4f subshell is progressively filled. Due to the diffuse shape and poor shielding effect of 4f electrons, the effective nuclear charge increases steadily, pulling outer valence shells inward (Lanthanoid Contraction). This almost exactly cancels out the expected normal increase in size from 4d to 5d row.",
    conceptTested: "Lanthanoid Contraction & Chemical Twin Elements (Zr-Hf)",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-lanthanoids-actinoids"
  },
  {
    id: "pyq-dfblock-2023-2",
    year: 2023,
    exam: "NEET UG 2023",
    question: "Calculate the spin-only magnetic moment of Cr²⁺ ion (Atomic number of Cr = 24):",
    options: [
      "4.90 BM",
      "3.87 BM",
      "2.84 BM",
      "5.92 BM"
    ],
    correctAnswer: 0,
    explanation: "Step 1: Write electronic configuration of Chromium (Cr, Z = 24):\nCr = [Ar] 3d⁵ 4s¹\n\nStep 2: Remove 2 electrons to form Cr²⁺ ion (1 from 4s and 1 from 3d):\nCr²⁺ = [Ar] 3d⁴\n\nStep 3: Count unpaired electrons (n):\nIn 3d⁴, there are n = 4 unpaired electrons.\n\nStep 4: Calculate spin-only magnetic moment using μ = √[n(n+2)] BM:\nμ = √[4(4+2)] = √[4 × 6] = √24 ≈ 4.899 ≈ 4.90 BM.",
    conceptTested: "Spin-Only Magnetic Moment Calculation for 3d Ions",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-3d-transition-trends"
  },

  // --- NEET 2022 ---
  {
    id: "pyq-dfblock-2022-1",
    year: 2022,
    exam: "NEET UG 2022",
    question: "In neutral or faintly alkaline medium, potassium permanganate (KMnO₄) oxidises iodide ion (I⁻) into:",
    options: [
      "Iodate ion (IO₃⁻)",
      "Iodine (I₂)",
      "Periodate ion (IO₄⁻)",
      "Iodite ion (IO₂⁻)"
    ],
    correctAnswer: 0,
    explanation: "Reaction of KMnO₄ with Iodide in different media:\n1. In Neutral or Faintly Alkaline Medium (e.g. Bayer's reagent):\n2 MnO₄⁻ + H₂O + I⁻ → 2 MnO₂ (brown ppt) + 2 OH⁻ + IO₃⁻ (Iodate ion)\nHere Mn is reduced from +7 to +4, and I⁻ is oxidized to Iodate (IO₃⁻).\n\n2. In Acidic Medium:\n2 MnO₄⁻ + 16 H⁺ + 10 I⁻ → 2 Mn²⁺ + 8 H₂O + 5 I₂ (Iodine)\n\nThis is one of the most tested differentiation traps in NEET Chemistry.",
    conceptTested: "KMnO4 Oxidation of Iodide in Neutral vs Acidic Media",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-kmno4-k2cr2o7"
  },
  {
    id: "pyq-dfblock-2022-2",
    year: 2022,
    exam: "NEET UG 2022",
    question: "Which of the following 3d-transition series elements exhibits the highest number of oxidation states?",
    options: [
      "Manganese (Mn)",
      "Chromium (Cr)",
      "Iron (Fe)",
      "Vanadium (V)"
    ],
    correctAnswer: 0,
    explanation: "Manganese (Mn, Z = 25) has the electronic configuration [Ar] 3d⁵ 4s². Because it possesses 5 unpaired electrons in the 3d subshell and 2 electrons in the 4s subshell, all 7 electrons can participate in bonding.\n\nMn exhibits the widest range of oxidation states in the 3d series: +2, +3, +4, +5, +6, and +7 (e.g., in MnO, Mn₂O₃, MnO₂, K₂MnO₄, and KMnO₄).",
    conceptTested: "Maximum Oxidation States across 3d Transition Metals",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-3d-transition-trends"
  },

  // --- NEET 2021 ---
  {
    id: "pyq-dfblock-2021-1",
    year: 2021,
    exam: "NEET UG 2021",
    question: "The basicity of lanthanoid hydroxides Ln(OH)₃ decreases across the series from La(OH)₃ to Lu(OH)₃ because of:",
    options: [
      "Decrease in size of Ln³⁺ ions leading to increased covalent character of Ln-OH bond",
      "Increase in size of Ln³⁺ ions leading to ionic bonding",
      "Increase in stability of +3 oxidation state",
      "Higher electronegativity of La compared to Lu"
    ],
    correctAnswer: 0,
    explanation: "Due to Lanthanoid Contraction, the size of Ln³⁺ ion decreases steadily from La³⁺ (106 pm) to Lu³⁺ (86 pm).\n\nAccording to Fajan's Rule, smaller cation size results in greater polarising power, which increases the covalent character of the Ln-OH bond. As covalent character increases, cleavage of the Ln-OH bond to release OH⁻ in water becomes harder.\n\nTherefore, basic strength decreases in the order: La(OH)₃ (most basic) > Ce(OH)₃ > ... > Lu(OH)₃ (least basic).",
    conceptTested: "Consequences of Lanthanoid Contraction on Hydroxide Basicity",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-lanthanoids-actinoids"
  },
  {
    id: "pyq-dfblock-2021-2",
    year: 2021,
    exam: "NEET UG 2021",
    question: "Match the oxide of manganese with its acid-base characteristic:\n(A) MnO\n(B) Mn₂O₃\n(C) MnO₂\n(D) Mn₂O₇\n\n(i) Acidic, (ii) Amphoteric, (iii) Basic, (iv) Weakly Basic",
    options: [
      "(A)-(iii), (B)-(iv), (C)-(ii), (D)-(i)",
      "(A)-(i), (B)-(ii), (C)-(iii), (D)-(iv)",
      "(A)-(iii), (B)-(i), (C)-(ii), (D)-(iv)",
      "(A)-(ii), (B)-(iii), (C)-(iv), (D)-(i)"
    ],
    correctAnswer: 0,
    explanation: "As the oxidation state of a transition metal increases, its electropositive/metallic character decreases and its polarizing power increases, shifting its oxide character from basic to amphoteric to acidic:\n• MnO (+2): Strongly basic (forms ionic salts with acids)\n• Mn₂O₃ (+3): Weakly basic\n• MnO₂ (+4): Amphoteric (reacts with both concentrated acids and bases)\n• Mn₂O₇ (+7): Strongly acidic green covalent liquid (reacts with water to form permanganic acid HMnO₄)",
    conceptTested: "Oxidation State vs Acid-Base Nature of Transition Metal Oxides",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-3d-transition-trends"
  },

  // --- NEET 2020 ---
  {
    id: "pyq-dfblock-2020-1",
    year: 2020,
    exam: "NEET UG 2020",
    question: "The reason for the greater range of oxidation states shown by actinoids than lanthanoids is:",
    options: [
      "Comparable energies of 5f, 6d and 7s levels in actinoids",
      "4f orbitals are more diffused than 5f orbitals",
      "Lesser energy difference between 4f and 5d orbitals in lanthanoids",
      "Radioactive nature of actinoids"
    ],
    correctAnswer: 0,
    explanation: "In actinoids, the 5f, 6d, and 7s energy levels are very close to each other in energy (comparable energies). Therefore, electrons from all three subshells (5f, 6d, 7s) can be removed or participate in bonding, leading to a wide range of oxidation states (+3, +4, +5, +6, and +7 in Np and Pu).\n\nIn lanthanoids, the 4f orbitals are buried deeply inside the atom and have significantly lower energy than 5d and 6s, so only 6s and 5d (and rarely 4f) electrons participate, restricting lanthanoids mostly to the +3 state.",
    conceptTested: "Actinoids Wide Range of Oxidation States vs Energy Gap",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-lanthanoids-actinoids"
  },
  {
    id: "pyq-dfblock-2020-2",
    year: 2020,
    exam: "NEET UG 2020",
    question: "Identify the incorrect statement regarding interstitial compounds of transition metals:",
    options: [
      "They are chemically very reactive",
      "They have high melting points, higher than those of pure metals",
      "They are very hard",
      "They retain metallic conductivity"
    ],
    correctAnswer: 0,
    explanation: "NCERT properties of Interstitial Compounds (formed when small non-metal atoms like H, C, B, N occupy holes in the metal lattice):\n1. High melting points (higher than parent pure metals).\n2. Extremely hard (some borides approach diamond in hardness).\n3. Retain metallic electrical and thermal conductivity.\n4. They are CHEMICALLY INERT (unreactive), NOT chemically very reactive!\n\nTherefore, option 1 is the incorrect statement.",
    conceptTested: "Properties of Transition Metal Interstitial Compounds",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-kmno4-k2cr2o7"
  },

  // --- NEET 2019 & AIPMT ---
  {
    id: "pyq-dfblock-2019-1",
    year: 2019,
    exam: "NEET UG 2019",
    question: "Which of the following lanthanoid ions is diamagnetic in nature?",
    options: [
      "Yb²⁺ (Z = 70)",
      "Ce²⁺ (Z = 58)",
      "Sm²⁺ (Z = 62)",
      "Eu²⁺ (Z = 63)"
    ],
    correctAnswer: 0,
    explanation: "Electronic configurations of relevant lanthanoid ions:\n• Ytterbium (Yb, Z = 70): [Xe] 4f¹⁴ 6s² ⇒ Yb²⁺ = [Xe] 4f¹⁴ (completely filled 4f subshell, n = 0 unpaired electrons ⇒ DIAMAGNETIC)\n• Europium (Eu, Z = 63): [Xe] 4f⁷ 6s² ⇒ Eu²⁺ = [Xe] 4f⁷ (half-filled, n = 7 unpaired electrons ⇒ Paramagnetic)\n• Samarium (Sm²⁺): [Xe] 4f⁶ (n = 6 unpaired electrons ⇒ Paramagnetic)\n• Cerium (Ce²⁺): [Xe] 4f² (n = 2 unpaired electrons ⇒ Paramagnetic)",
    conceptTested: "Lanthanoid Electronic Configurations & Diamagnetism",
    difficulty: "Medium",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-lanthanoids-actinoids"
  },
  {
    id: "pyq-dfblock-2018-1",
    year: 2018,
    exam: "NEET UG 2018",
    question: "In the conversion of chromite ore (FeCr₂O₄) to potassium dichromate (K₂Cr₂O₇), the oxidation state of chromium in the yellow intermediate compound formed after sodium carbonate fusion is:",
    options: [
      "+6",
      "+3",
      "+4",
      "+2"
    ],
    correctAnswer: 0,
    explanation: "Step 1 in K₂Cr₂O₇ industrial preparation:\n4 FeCr₂O₄ (Chromite ore, Cr in +3) + 8 Na₂CO₃ + 7 O₂ → 8 Na₂CrO₄ (Sodium chromate, yellow) + 2 Fe₂O₃ + 8 CO₂.\n\nIn Na₂CrO₄ (yellow solution):\n2(+1) + x + 4(-2) = 0 ⇒ 2 + x - 8 = 0 ⇒ x = +6.\nChromium is in the +6 oxidation state.",
    conceptTested: "Preparation of K2Cr2O7 & Oxidation State of Chromate",
    difficulty: "Easy",
    verified: true,
    classification: "Direct",
    marks: 4,
    topicId: "chem-kmno4-k2cr2o7"
  }
];
