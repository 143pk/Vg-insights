import { PYQuestion } from '../../types/neet';

export interface PracticeMCQ {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  conceptTested: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

// Traceable, authentic NEET/AIPMT Previous Year Questions
export const NUCLEI_VERIFIED_PYQS: PYQuestion[] = [
  {
    exam: "NEET",
    examYear: "2023",
    question: "The ratio of radius of two nuclei having mass numbers in the ratio 1 : 8 is:",
    options: ["1 : 2", "1 : 4", "1 : 8", "1 : √2"],
    correctAnswer: 0,
    explanation: "Nuclear radius is given by R = R₀ A^(1/3). Therefore, R₁ / R₂ = (A₁ / A₂)^(1/3) = (1 / 8)^(1/3) = 1 / 2. Thus, the ratio of radii is 1 : 2.",
    conceptTested: "Nuclear radius relation R = R₀ A^(1/3)",
    difficulty: "Easy",
    isVerifiedPYQ: true
  },
  {
    exam: "NEET",
    examYear: "2022",
    question: "The energy equivalent of 0.5 g of a substance is:",
    options: ["4.5 × 10¹³ J", "1.5 × 10¹³ J", "0.5 × 10¹³ J", "4.5 × 10¹⁶ J"],
    correctAnswer: 0,
    explanation: "According to Einstein's mass-energy equivalence: E = m c² = (0.5 × 10⁻³ kg) × (3 × 10⁸ m/s)² = (0.5 × 10⁻³) × (9 × 10¹⁶) = 4.5 × 10¹³ J.",
    conceptTested: "Einstein's mass-energy equivalence E = mc²",
    difficulty: "Easy",
    isVerifiedPYQ: true
  },
  {
    exam: "NEET",
    examYear: "2021",
    question: "A radioactive nucleus ᴬ_Z X undergoes spontaneous decay in the sequence: ᴬ_Z X ➔ _{Z−1}B ➔ _{Z−3}C ➔ _{Z−2}D, where the atomic number of the element is written in the subscript. The possible decay particles emitted in each step are:",
    options: ["β⁺, α, β⁻", "β⁻, α, β⁺", "α, β⁻, β⁺", "α, β⁺, β⁻"],
    correctAnswer: 0,
    explanation: "Step 1: Z decreases by 1 (Z ➔ Z−1), which corresponds to β⁺ decay (positron emission or electron capture). Step 2: Z decreases by 2 (Z−1 ➔ Z−3), which corresponds to α decay (emission of ⁴₂He). Step 3: Z increases by 1 (Z−3 ➔ Z−2), which corresponds to β⁻ decay (electron emission). Hence, the sequence is β⁺, α, β⁻.",
    conceptTested: "Radioactive decay modes and changes in atomic number Z",
    difficulty: "Medium",
    isVerifiedPYQ: true
  },
  {
    exam: "NEET",
    examYear: "2020",
    question: "The half-life of a radioactive sample is 5 years. The fraction of the original sample that will remain undecayed after 15 years is:",
    options: ["1/8", "1/4", "1/2", "1/16"],
    correctAnswer: 0,
    explanation: "Number of half-lives elapsed n = t / T₁/₂ = 15 / 5 = 3 half-lives. The fraction of original nuclei remaining undecayed is N / N₀ = (1/2)^n = (1/2)³ = 1/8.",
    conceptTested: "Radioactive decay law after n half-lives",
    difficulty: "Easy",
    isVerifiedPYQ: true
  },
  {
    exam: "NEET",
    examYear: "2019",
    question: "When an alpha particle of mass 'm' moving with velocity 'v' bombards a heavy nucleus of charge 'Ze', its distance of closest approach from the nucleus depends on m as:",
    options: ["1/m", "1/√m", "1/m²", "m"],
    correctAnswer: 0,
    explanation: "At distance of closest approach r₀, initial kinetic energy converts entirely to electrostatic potential energy: 1/2 m v² = (1 / 4πε₀) (2Ze² / r₀) ⟹ r₀ = (1 / 4πε₀) (4Ze² / (m v²)). Thus, r₀ ∝ 1/m.",
    conceptTested: "Distance of closest approach and alpha scattering mechanics",
    difficulty: "Medium",
    isVerifiedPYQ: true
  },
  {
    exam: "NEET",
    examYear: "2018",
    question: "The binding energy per nucleon of ⁷₃Li and ⁴₂He are 5.60 MeV and 7.06 MeV, respectively. In the nuclear reaction ⁷₃Li + ¹₁H ➔ 2 ⁴₂He + Q, the value of energy released Q is:",
    options: ["17.3 MeV", "19.6 MeV", "8.4 MeV", "14.1 MeV"],
    correctAnswer: 0,
    explanation: "Total Binding Energy of reactants = E_b(⁷Li) = 7 × 5.60 MeV = 39.2 MeV (for ¹H, E_b = 0). Total Binding Energy of products = 2 × E_b(⁴He) = 2 × (4 × 7.06 MeV) = 56.48 MeV. Energy released Q = E_b(products) − E_b(reactants) = 56.48 − 39.20 = 17.28 MeV ≈ 17.3 MeV.",
    conceptTested: "Q-value calculation from binding energy per nucleon",
    difficulty: "Medium",
    isVerifiedPYQ: true
  },
  {
    exam: "NEET",
    examYear: "2017",
    question: "The radioactive isotope X with a half-life of 1.4 × 10⁹ years decays to Y which is stable. A sample of rock was found to contain X and Y in the ratio 1 : 7. The age of the rock is:",
    options: ["4.2 × 10⁹ years", "2.8 × 10⁹ years", "1.4 × 10⁹ years", "5.6 × 10⁹ years"],
    correctAnswer: 0,
    explanation: "Given ratio of parent to daughter N_X / N_Y = 1 / 7. Total original parent nuclei N₀ = N_X + N_Y = 1 + 7 = 8 parts. Remaining parent fraction N_X / N₀ = 1 / 8 = (1/2)³. Therefore, number of half-lives elapsed n = 3. Age of rock t = n × T₁/₂ = 3 × 1.4 × 10⁹ = 4.2 × 10⁹ years.",
    conceptTested: "Radioactive dating and parent-daughter population kinetics",
    difficulty: "Medium",
    isVerifiedPYQ: true
  },
  {
    exam: "AIPMT",
    examYear: "2015",
    question: "If radius of the ²⁷₁₃Al nucleus is estimated to be 3.6 Fermi, then the radius of ⁵⁶₁₂₅Te nucleus is nearly:",
    options: ["6.0 Fermi", "5.0 Fermi", "8.0 Fermi", "4.0 Fermi"],
    correctAnswer: 0,
    explanation: "R ∝ A^(1/3) ⟹ R(Te) / R(Al) = (125 / 27)^(1/3) = 5 / 3. R(Te) = (5 / 3) × 3.6 Fermi = 5 × 1.2 = 6.0 Fermi.",
    conceptTested: "Nuclear radius scaling R = R₀ A^(1/3)",
    difficulty: "Easy",
    isVerifiedPYQ: true
  },
  {
    exam: "AIPMT",
    examYear: "2013",
    question: "The half-life of a radioactive substance is 30 minutes. The time (in minutes) taken between 40% decay and 85% decay of the same radioactive substance is:",
    options: ["60", "30", "45", "15"],
    correctAnswer: 0,
    explanation: "When 40% has decayed, 60% remains (N₁ = 0.60 N₀). When 85% has decayed, 15% remains (N₂ = 0.15 N₀). The ratio N₂ / N₁ = 0.15 / 0.60 = 1 / 4 = (1/2)². This corresponds to exactly 2 half-lives. Time elapsed = 2 × T₁/₂ = 2 × 30 minutes = 60 minutes.",
    conceptTested: "Relative time elapsed between two fractional remaining states",
    difficulty: "Hard",
    isVerifiedPYQ: true
  }
];

// 20 Original High-Yield Practice MCQs for Self-Assessment
export const NUCLEI_PRACTICE_MCQS: PracticeMCQ[] = [
  {
    id: "mcq-1",
    question: "Which of the following statements correctly describes the nuclear density of different atomic nuclei?",
    options: [
      "Nuclear density increases linearly with mass number A.",
      "Nuclear density is proportional to A^(1/3).",
      "Nuclear density is approximately constant for all nuclei and independent of A.",
      "Nuclear density decreases with increasing atomic number Z due to Coulomb repulsion."
    ],
    correctOptionIndex: 2,
    explanation: "Mass M ∝ A and Volume V ∝ R³ ∝ (A^(1/3))³ ∝ A. Hence, density ρ = M/V is completely independent of mass number A and equals ~2.3 × 10¹⁷ kg/m³ for all nuclei.",
    conceptTested: "Nuclear density constancy",
    difficulty: "Easy"
  },
  {
    id: "mcq-2",
    question: "The nuclides ¹⁴₆C and ¹⁶₈O are classified as:",
    options: [
      "Isotopes",
      "Isobars",
      "Isotones",
      "Nuclear isomers"
    ],
    correctOptionIndex: 2,
    explanation: "For ¹⁴₆C: N = 14 − 6 = 8. For ¹⁶₈O: N = 16 − 8 = 8. Since both nuclides have the exact same neutron number N = 8 but different Z, they are isotones.",
    conceptTested: "Classification of nuclides (Isotones)",
    difficulty: "Easy"
  },
  {
    id: "mcq-3",
    question: "The binding energy per nucleon is maximum for which of the following nuclei?",
    options: [
      "⁴₂He",
      "⁵⁶₂₆Fe",
      "¹²₆C",
      "²³⁸₉₂U"
    ],
    correctOptionIndex: 1,
    explanation: "Iron-56 (⁵⁶₂₆Fe) lies at the peak of the binding energy per nucleon curve with E_bn ≈ 8.75 MeV/nucleon, making it the most tightly bound nucleus.",
    conceptTested: "Binding energy curve maximum",
    difficulty: "Easy"
  },
  {
    id: "mcq-4",
    question: "If mass defect for a nucleus is 0.04 u, its total binding energy is approximately:",
    options: [
      "37.26 MeV",
      "93.15 MeV",
      "23.28 MeV",
      "3.726 MeV"
    ],
    correctOptionIndex: 0,
    explanation: "E_b = Δm (in u) × 931.5 MeV = 0.04 × 931.5 MeV = 37.26 MeV.",
    conceptTested: "Mass defect to binding energy conversion",
    difficulty: "Easy"
  },
  {
    id: "mcq-5",
    question: "In the binding energy per nucleon curve, the constancy of E_bn ≈ 8.5 MeV/nucleon in the mass range 30 ≤ A ≤ 170 is a direct consequence of:",
    options: [
      "Long-range nature of nuclear force",
      "Saturation property of the short-range strong nuclear force",
      "Charge independence of electrostatic force",
      "Continuous variation of gravitational force"
    ],
    correctOptionIndex: 1,
    explanation: "The short range of the nuclear force causes saturation: a nucleon inside a medium/large nucleus interacts only with its immediate nearest neighbors, keeping E_bn roughly constant.",
    conceptTested: "Nuclear force saturation property",
    difficulty: "Medium"
  },
  {
    id: "mcq-6",
    question: "A radioactive sample has initial activity A₀. After 4 half-lives, its remaining activity is:",
    options: [
      "A₀ / 4",
      "A₀ / 8",
      "A₀ / 16",
      "A₀ / 32"
    ],
    correctOptionIndex: 2,
    explanation: "Activity A(t) = A₀ (1/2)^n. For n = 4, A = A₀ / 2⁴ = A₀ / 16.",
    conceptTested: "Activity after n half-lives",
    difficulty: "Easy"
  },
  {
    id: "mcq-7",
    question: "When a radioactive parent nucleus emits a β⁻ particle, the atomic number (Z) and mass number (A) of the daughter nucleus become:",
    options: [
      "Z becomes Z + 1, A remains unchanged",
      "Z becomes Z − 1, A remains unchanged",
      "Z becomes Z − 2, A becomes A − 4",
      "Z remains unchanged, A becomes A − 1"
    ],
    correctOptionIndex: 0,
    explanation: "Beta-minus decay converts a neutron to a proton (¹₀n ➔ ¹₁p + e⁻ + ν̄_e). Thus, Z increases by 1 (Z ➔ Z + 1) while mass number A is unchanged.",
    conceptTested: "Beta-minus decay mechanics",
    difficulty: "Easy"
  },
  {
    id: "mcq-8",
    question: "The relation between half-life (T₁/₂) and mean life (τ) of a radioactive substance is:",
    options: [
      "T₁/₂ = τ / 0.693",
      "T₁/₂ = 0.693 τ",
      "T₁/₂ = τ²",
      "T₁/₂ = 1.44 τ"
    ],
    correctOptionIndex: 1,
    explanation: "T₁/₂ = ln(2)/λ = 0.693 / λ. Since mean life τ = 1/λ, we have T₁/₂ = 0.693 τ (or τ = 1.443 T₁/₂).",
    conceptTested: "Relation between T₁/₂ and τ",
    difficulty: "Easy"
  },
  {
    id: "mcq-9",
    question: "Which of the following radiations has the MAXIMUM ionizing power and the MINIMUM penetrating power?",
    options: [
      "Alpha (α) particles",
      "Beta (β⁻) particles",
      "Gamma (γ) rays",
      "X-rays"
    ],
    correctOptionIndex: 0,
    explanation: "Alpha particles have the largest mass and charge (+2e), giving them the greatest ionizing power (10,000 relative to gamma) and the least penetrating power (stopped by paper).",
    conceptTested: "Radiation properties comparison",
    difficulty: "Easy"
  },
  {
    id: "mcq-10",
    question: "In a nuclear reactor, the primary purpose of heavy water (D₂O) or graphite as a moderator is to:",
    options: [
      "Absorb thermal neutrons completely to stop the reaction",
      "Slow down energetic fast neutrons to thermal energies without capturing them",
      "Cool the exterior biological concrete shield",
      "Accelerate slow neutrons to relativistic speeds"
    ],
    correctOptionIndex: 1,
    explanation: "Fission neutrons are born with high kinetic energy (~2 MeV). The moderator slows them down via elastic collisions to thermal energies (~0.025 eV) where fission probability is highest.",
    conceptTested: "Nuclear reactor moderator function",
    difficulty: "Medium"
  },
  {
    id: "mcq-11",
    question: "In an electric field directed from top to bottom, which radiation will be deflected UPWARD toward the positive plate?",
    options: [
      "Alpha rays",
      "Beta-minus (β⁻) rays",
      "Beta-plus (β⁺) rays",
      "Gamma rays"
    ],
    correctOptionIndex: 1,
    explanation: "Negatively charged particles are attracted to the positive plate. Beta-minus particles (electrons) carry charge −e and deflect strongly upward toward the positive plate.",
    conceptTested: "Deflection in electric field",
    difficulty: "Easy"
  },
  {
    id: "mcq-12",
    question: "If a radioactive isotope has a decay constant λ = 0.05 day⁻¹, the time required for its activity to drop to 1/e of its initial value is:",
    options: [
      "20 days",
      "13.86 days",
      "50 days",
      "10 days"
    ],
    correctOptionIndex: 0,
    explanation: "Activity drops to 1/e after one mean life τ = 1/λ. Here, τ = 1 / (0.05 day⁻¹) = 20 days.",
    conceptTested: "Mean life and exponential decay",
    difficulty: "Medium"
  },
  {
    id: "mcq-13",
    question: "In a controlled nuclear fission reactor, the reproduction (multiplication) factor k must be maintained at:",
    options: [
      "k = 0",
      "k < 1",
      "k = 1",
      "k > 1"
    ],
    correctOptionIndex: 2,
    explanation: "For a steady, controlled rate of power output (critical state), k must equal exactly 1. If k > 1, the reaction becomes supercritical (explosive); if k < 1, it dies down.",
    conceptTested: "Multiplication factor in nuclear reactors",
    difficulty: "Easy"
  },
  {
    id: "mcq-14",
    question: "The energy released per unit mass in nuclear fusion is greater than that in nuclear fission primarily because:",
    options: [
      "Light nuclei have greater mass than heavy nuclei",
      "The change in binding energy per nucleon (ΔE_bn) is much larger for light nuclei fusing than for heavy nuclei fissioning",
      "Fusion does not obey mass-energy conservation",
      "Fission does not release neutrons"
    ],
    correctOptionIndex: 1,
    explanation: "Light reactants start with very low E_bn (~1.1 MeV/n in ²H) and jump to 7.07 MeV/n in ⁴He (ΔE_bn ≈ 6 MeV/n), compared to fission where E_bn only changes from 7.6 to 8.5 MeV/n (ΔE_bn ≈ 0.9 MeV/n).",
    conceptTested: "Specific energy comparison between fusion and fission",
    difficulty: "Hard"
  },
  {
    id: "mcq-15",
    question: "Cadmium or Boron rods are used as control rods in a nuclear reactor because:",
    options: [
      "They have very high neutron absorption cross-sections",
      "They act as excellent thermal conductors to generate steam",
      "They emit neutrons when struck by gamma rays",
      "They are transparent to all radiation"
    ],
    correctOptionIndex: 0,
    explanation: "Cadmium and boron nuclei readily absorb thermal neutrons without undergoing fission, allowing precise control of the neutron population and multiplication factor k.",
    conceptTested: "Control rod materials and function",
    difficulty: "Easy"
  },
  {
    id: "mcq-16",
    question: "If a radioactive substance decays to 1/32 of its initial mass in 25 hours, its half-life is:",
    options: [
      "5 hours",
      "2.5 hours",
      "10 hours",
      "12.5 hours"
    ],
    correctOptionIndex: 0,
    explanation: "Remaining fraction N / N₀ = 1/32 = (1/2)⁵ ⟹ n = 5 half-lives. Half-life T₁/₂ = t / n = 25 hours / 5 = 5 hours.",
    conceptTested: "Calculating half-life from multiple half-lives",
    difficulty: "Easy"
  },
  {
    id: "mcq-17",
    question: "Which of the following conservation laws is strictly obeyed in EVERY nuclear reaction?",
    options: [
      "Conservation of total mass number (A) and total electric charge (Z)",
      "Conservation of mass alone",
      "Conservation of number of neutrons alone",
      "Conservation of atomic number alone"
    ],
    correctOptionIndex: 0,
    explanation: "In all nuclear reactions, total nucleon number (A) and total electric charge (Z) are strictly conserved. Mass alone is not conserved (mass-energy is conserved).",
    conceptTested: "Conservation laws in nuclear reactions",
    difficulty: "Easy"
  },
  {
    id: "mcq-18",
    question: "The nuclear force between two protons (F_pp), two neutrons (F_nn), and a proton and a neutron (F_pn) at the same separation of 1.5 fm satisfies:",
    options: [
      "F_pp > F_pn > F_nn",
      "F_nn > F_pp > F_pn",
      "F_pp ≈ F_nn ≈ F_pn",
      "F_pn = 0"
    ],
    correctOptionIndex: 2,
    explanation: "The strong nuclear force is charge-independent at nuclear distances: F_pp ≈ F_nn ≈ F_pn (ignoring the much weaker Coulomb repulsion).",
    conceptTested: "Charge independence of strong nuclear force",
    difficulty: "Easy"
  },
  {
    id: "mcq-19",
    question: "A stationary ²³⁴₉₀Th nucleus emits an alpha particle with speed v. The recoil speed of the daughter ²³⁰₈₈Ra nucleus is:",
    options: [
      "4v / 230",
      "230v / 4",
      "v / 234",
      "4v / 234"
    ],
    correctOptionIndex: 0,
    explanation: "By conservation of linear momentum: m_Ra · v_Ra = m_α · v_α ⟹ 230 · v_Ra = 4 · v ⟹ v_Ra = (4/230) v.",
    conceptTested: "Recoil mechanics in alpha decay",
    difficulty: "Medium"
  },
  {
    id: "mcq-20",
    question: "The activity of a sample is 16 Bq at t = 0 and drops to 2 Bq at t = 9 minutes. Its mean life is:",
    options: [
      "3 minutes",
      "4.33 minutes",
      "2.08 minutes",
      "6 minutes"
    ],
    correctOptionIndex: 1,
    explanation: "A / A₀ = 2 / 16 = 1/8 = (1/2)³ ⟹ 3 half-lives elapsed in 9 minutes. T₁/₂ = 9 / 3 = 3 minutes. Mean life τ = T₁/₂ / 0.693 = 3 / 0.693 ≈ 4.33 minutes.",
    conceptTested: "Activity, half-life, and mean life calculation",
    difficulty: "Hard"
  }
];
