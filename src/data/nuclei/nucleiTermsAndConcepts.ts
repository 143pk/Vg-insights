// High-yield terms, concepts, comparisons, conceptual Q&As, and 5-minute revision for Nuclei

export const NUCLEI_IMPORTANT_TERMS = [
  {
    term: "Nucleus & Nucleons",
    definition: "The dense, positively charged core of an atom of radius ~10⁻¹⁵ m containing protons (charge +e) and neutrons (charge 0), collectively designated as nucleons.",
    neetNote: "Nucleons are bound by the strong nuclear force. The number of nucleons equals the mass number A = Z + N."
  },
  {
    term: "Atomic Number (Z), Neutron Number (N), Mass Number (A)",
    definition: "Z is the number of protons (determines chemical identity); N is the number of neutrons; A = Z + N is the total mass number (integer nucleon count).",
    neetNote: "Represented as ᴬ_Z X. In all nuclear reactions, total Z (charge) and total A (nucleon number) are strictly conserved."
  },
  {
    term: "Nuclide",
    definition: "A specific nuclear species characterized by its atomic number Z and mass number A, written as ᴬ_Z X.",
    neetNote: "Distinguishes specific nuclear configurations from general chemical elements."
  },
  {
    term: "Isotopes, Isobars, and Isotones",
    definition: "Isotopes: same Z, different A (e.g., ¹H, ²H, ³H; same chemical properties). Isobars: same A, different Z (e.g., ⁴⁰Ar, ⁴⁰K, ⁴⁰Ca; different elements). Isotones: same neutron number N = A - Z (e.g., ¹⁴₆C, ¹⁵₇N, ¹⁶₈O with N = 8).",
    neetNote: "NEET Trap: Isotopes have identical chemical reactivity and identical position in periodic table, but different nuclear mass and stability."
  },
  {
    term: "Nuclear Radius Formula (R = R₀ A¹/³)",
    definition: "The empirical formula relating nuclear radius R to mass number A, where R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm (sometimes taken as 1.1 to 1.4 fm in numericals).",
    neetNote: "Nuclear volume V = ⁴/₃πR³ = ⁴/₃πR₀³A ∝ A. Radius scales as A¹/³."
  },
  {
    term: "Nuclear Density (ρ)",
    definition: "Mass per unit volume of nuclear matter, ρ = M/V ≈ (A · m_n) / (⁴/₃πR₀³A) = m_n / (⁴/₃πR₀³) ≈ 2.3 × 10¹⁷ kg/m³.",
    neetNote: "Nuclear density is CONSTANT and INDEPENDENT of mass number A. All nuclei (from hydrogen to uranium) have approximately the same density."
  },
  {
    term: "Strong Nuclear Force",
    definition: "The fundamental force of nature that binds protons and neutrons inside the nucleus. It is the strongest known force, short-range (~1-3 fm), charge-independent (F_pp ≈ F_nn ≈ F_pn), and non-central.",
    neetNote: "At distances r < 0.8 fm, nuclear force becomes strongly repulsive, preventing the nucleus from collapsing into a mathematical point."
  },
  {
    term: "Mass Defect (Δm)",
    definition: "The difference between the total mass of the individual, separated constituent nucleons and the actual rest mass of the bound nucleus: Δm = [Z·m_p + (A−Z)·m_n] − M_nucleus.",
    neetNote: "When using atomic masses: Δm = [Z·m_H + (A−Z)·m_n] − M_atom, because the Z electron masses cancel out."
  },
  {
    term: "Mass-Energy Equivalence (E = mc² & 1 u ≈ 931.5 MeV)",
    definition: "Einstein's principle stating that mass and energy are interconvertible. 1 atomic mass unit (1 u = 1.660539 × 10⁻²⁷ kg) corresponds to 931.5 MeV of energy.",
    neetNote: "Golden calculation formula in NEET: Binding Energy (MeV) = Δm (in u) × 931.5 MeV."
  },
  {
    term: "Nuclear Binding Energy (E_b)",
    definition: "The energy required to completely disassemble a nucleus into its constituent free protons and neutrons at infinite separation, or equivalently, the energy released when free nucleons condense to form the nucleus.",
    neetNote: "Total binding energy E_b increases with mass number A, but total E_b does NOT measure relative stability."
  },
  {
    term: "Binding Energy per Nucleon (E_bn = E_b / A)",
    definition: "The average binding energy per nucleon inside a nucleus, E_bn = E_b / A. It is the true quantitative measure of nuclear stability.",
    neetNote: "Higher E_bn means greater stability. Peak occurs at ⁵⁶₂₆Fe with E_bn ≈ 8.75 MeV/nucleon. For 30 ≤ A ≤ 170, E_bn is roughly constant at ~8.5 MeV."
  },
  {
    term: "Nuclear Fission",
    definition: "A nuclear reaction in which a heavy, unstable nucleus (e.g., ²³⁵U) absorbs a thermal neutron and splits into two intermediate-mass daughter fragments with the release of prompt neutrons and ~200 MeV of energy.",
    neetNote: "Energy release occurs because E_bn increases from ~7.6 MeV/nucleon in ²³⁵U to ~8.5 MeV/nucleon in the fragments."
  },
  {
    term: "Nuclear Fusion",
    definition: "A nuclear reaction in which two light nuclei (e.g., ²H and ³H) combine under extreme temperature (10⁷-10⁸ K) and pressure to form a heavier, more tightly bound nucleus (⁴He) and release enormous energy (~17.6 MeV).",
    neetNote: "Energy released per unit mass in fusion is ~4 times greater than in fission because light nuclei have very low E_bn and jump to 7.07 MeV in ⁴He."
  },
  {
    term: "Radioactivity & Radioactive Decay Law",
    definition: "The spontaneous disintegration of unstable atomic nuclei by emitting ionizing radiation (α, β, or γ). Governed by Rutherford-Soddy law: dN/dt = −λN ⟹ N(t) = N₀ e^(−λt).",
    neetNote: "Radioactivity is purely a nuclear, spontaneous, and random process unaffected by external temperature, pressure, or chemical bonding."
  },
  {
    term: "Decay Constant (λ), Half-Life (T₁/₂), Mean Life (τ)",
    definition: "λ is the decay probability per unit time (s⁻¹); Half-life T₁/₂ = ln(2)/λ ≈ 0.693/λ is time for N₀/2 nuclei to remain; Mean life τ = 1/λ is average lifetime of a nucleus (T₁/₂ = 0.693τ).",
    neetNote: "After n half-lives: N = N₀ / 2^n, Activity A = A₀ / 2^n, where n = t / T₁/₂."
  },
  {
    term: "Activity (A or R) & Becquerel (Bq)",
    definition: "The rate of nuclear disintegrations occurring in a radioactive sample: A = −dN/dt = λN = A₀ e^(−λt). SI unit is Becquerel (1 Bq = 1 decay/s). 1 Curie (Ci) = 3.7 × 10¹⁰ Bq.",
    neetNote: "Activity depends on both the number of undecayed nuclei N and the decay constant λ."
  },
  {
    term: "Q-Value of Nuclear Reaction",
    definition: "The net energy released or absorbed in a nuclear reaction: Q = [Σm_initial − Σm_final] · c². If Q > 0, the reaction is exoergic (exothermic); if Q < 0, it is endoergic (endothermic).",
    neetNote: "In terms of binding energy: Q = [ΣE_b(products) − ΣE_b(reactants)]."
  }
];

export const NUCLEI_COMPARISON_TABLES = [
  {
    title: "1. Isotopes vs Isobars vs Isotones vs Nuclear Isomers",
    headers: ["Characteristic", "Isotopes", "Isobars", "Isotones", "Nuclear Isomers"],
    rows: [
      ["Atomic Number (Z)", "SAME (identical protons)", "DIFFERENT", "DIFFERENT", "SAME"],
      ["Mass Number (A)", "DIFFERENT", "SAME", "DIFFERENT", "SAME"],
      ["Neutron Count (N = A−Z)", "DIFFERENT", "DIFFERENT", "SAME", "SAME"],
      ["Chemical Properties", "IDENTICAL (same valence electrons)", "DIFFERENT (different elements)", "DIFFERENT", "IDENTICAL"],
      ["Physical / Nuclear Properties", "DIFFERENT (mass, stability)", "DIFFERENT", "DIFFERENT", "DIFFERENT (internal energy state/half-life)"],
      ["Periodic Table Position", "Same slot", "Different slots", "Different slots", "Same slot"],
      ["NCERT Examples", "¹₁H, ²₁H, ³₁H | ¹²₆C, ¹⁴₆C", "⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca | ³₁H, ³₂He", "¹⁴₆C, ¹⁵₇N, ¹⁶₈O (N=8)", "⁹⁹ᵐ₄₃Tc and ⁹⁹₄₃Tc"]
    ]
  },
  {
    title: "2. Alpha (α) vs Beta (β) vs Gamma (γ) Radiations",
    headers: ["Property", "Alpha (α) Particle", "Beta (β⁻ / β⁺) Particle", "Gamma (γ) Ray"],
    rows: [
      ["Nature", "Helium nucleus (⁴₂He²⁺, 2p + 2n)", "Fast electron (e⁻) or positron (e⁺)", "High-energy EM photon"],
      ["Rest Mass", "4 u ≈ 6.64 × 10⁻²⁷ kg (m_α = 7300 m_e)", "m_e ≈ 9.1 × 10⁻³¹ kg ≈ 0.00055 u", "Zero rest mass"],
      ["Electric Charge", "+2e (+3.2 × 10⁻¹⁹ C)", "−e (β⁻) or +e (β⁺) (±1.6 × 10⁻¹⁹ C)", "0 (neutral)"],
      ["Speed", "~1.4 × 10⁷ to 2.2 × 10⁷ m/s (~0.05 c)", "~0.3 c to 0.99 c (variable spectrum)", "c = 3 × 10⁸ m/s in vacuum"],
      ["Ionising Power", "Extremely High (Relative: 10,000)", "Moderate (Relative: 100)", "Lowest (Relative: 1)"],
      ["Penetrating Power", "Lowest (stopped by a sheet of paper or 5 cm air)", "Moderate (stopped by 5 mm Aluminium)", "Highest (requires several cm of Lead / meters of concrete)"],
      ["Deflection in E & B fields", "Deflected slightly toward negative plate (large inertia)", "Deflected strongly toward positive plate (β⁻) or negative (β⁺)", "Completely undeflected"],
      ["Energy Spectrum", "Discrete, line spectrum (fixed E_α)", "Continuous energy spectrum (due to sharing with neutrino/antineutrino)", "Discrete, line spectrum (nuclear energy levels)"]
    ]
  },
  {
    title: "3. Strong Nuclear Force vs Electrostatic Coulomb Force vs Gravitational Force",
    headers: ["Parameter", "Strong Nuclear Force", "Electrostatic Force", "Gravitational Force"],
    rows: [
      ["Relative Strength", "1 (Strongest in Nature)", "10⁻² (~100 times weaker than nuclear)", "10⁻³⁸ (Weakest in Nature)"],
      ["Range", "Extremely Short (~10⁻¹⁵ m = 1 to 3 fm)", "Infinite (1/r² law)", "Infinite (1/r² law)"],
      ["Charge Dependence", "Charge Independent (F_pp ≈ F_nn ≈ F_pn)", "Strictly Charge Dependent (+ attracts −, repels +)", "Independent of charge (mass only)"],
      ["Nature of Force", "Attractive for 0.8 fm < r < 3 fm; Repulsive for r < 0.8 fm", "Attractive between unlike; Repulsive between like charges", "Always strictly attractive"],
      ["Mediating Particle", "Mesons / Gluons", "Photons", "Gravitons (hypothetical)"],
      ["Saturation Property", "Exhibits saturation (interacts only with immediate neighbors)", "Non-saturating (every charge interacts with all charges)", "Non-saturating"]
    ]
  },
  {
    title: "4. Nuclear Fission vs Nuclear Fusion",
    headers: ["Criteria", "Nuclear Fission", "Nuclear Fusion"],
    rows: [
      ["Definition", "Heavy nucleus splits into 2 medium-mass nuclei", "Two light nuclei combine to form a heavier nucleus"],
      ["Reactants", "Heavy elements (²³⁵U, ²³⁹Pu, A ≈ 240)", "Light elements (¹H, ²H, ³H, A ≤ 4)"],
      ["Operating Conditions", "Thermal neutrons at normal room temperature", "Extreme temperatures (~10⁷ to 10⁸ K) and pressures"],
      ["Energy per Reaction Event", "~200 MeV per fission event", "~17.6 MeV per D-T fusion event"],
      ["Energy per Unit Mass (Specific Energy)", "~0.85 MeV / nucleon (Lower)", "~3.52 MeV / nucleon (~4 times greater than fission!)"],
      ["Chain Reaction", "Can sustain a chain reaction (via prompt neutrons)", "No chain reaction; requires sustained plasma confinement"],
      ["Radioactive Waste", "Generates highly hazardous, long-lived radioactive waste", "Virtually clean (reaction product ⁴He is stable and harmless)"],
      ["Real-World Examples", "Nuclear power reactors, Atomic bomb", "Core of the Sun/stars, Hydrogen bomb, ITER Tokamak"]
    ]
  },
  {
    title: "5. Half-Life (T₁/₂) vs Mean Life (τ)",
    headers: ["Parameter", "Half-Life (T₁/₂)", "Mean Life (τ)"],
    rows: [
      ["Mathematical Formula", "T₁/₂ = ln(2)/λ = 0.693 / λ", "τ = 1 / λ"],
      ["Physical Significance", "Time taken for 50% of the active nuclei to disintegrate", "Average lifetime of all the radioactive nuclei in the sample"],
      ["Fraction Undecayed", "N = N₀ / 2 = 0.50 N₀ (50% remaining)", "N = N₀ / e ≈ 0.368 N₀ (36.8% remaining)"],
      ["Fraction Decayed", "50% (0.50 N₀)", "1 − 1/e ≈ 63.2% (0.632 N₀)"],
      ["Inter-relation", "T₁/₂ = 0.693 τ (T₁/₂ < τ always)", "τ = 1.443 T₁/₂ (τ > T₁/₂ always)"],
      ["Slope of ln(N) vs t graph", "Slope = −λ = −0.693 / T₁/₂", "Slope = −λ = −1 / τ"]
    ]
  }
];

export const NUCLEI_CONCEPTUAL_QAS = [
  {
    question: "Why is nuclear density approximately constant for all nuclei regardless of mass number A?",
    answer: "The mass of a nucleus is proportional to A (M ≈ A · m_nucleon), and its volume is V = 4/3 π R³ = 4/3 π (R₀ A¹/³)³ = 4/3 π R₀³ A, which is also directly proportional to A. Thus, in the density ratio ρ = M/V, the mass number A cancels out completely, leaving ρ = m_nucleon / (4/3 π R₀³) ≈ 2.3 × 10¹⁷ kg/m³, a constant for all atomic nuclei."
  },
  {
    question: "What is mass defect, and why is the actual mass of a bound nucleus always less than the sum of its free nucleons?",
    answer: "Mass defect Δm is the difference between the sum of the masses of separate free nucleons and the actual mass of the bound nucleus: Δm = [Z·m_p + (A−Z)·m_n] − M_nucleus. When nucleons bind together via the strong nuclear force, potential energy decreases to establish a bound, stable state. By Einstein's mass-energy equivalence (E = mc²), this released binding energy corresponds to lost mass."
  },
  {
    question: "Why is Binding Energy per Nucleon (E_bn = E_b / A) a better indicator of nuclear stability than Total Binding Energy?",
    answer: "A larger nucleus (like ²³⁸U) naturally has more nucleons and thus a larger total binding energy (~1800 MeV) than a smaller nucleus (like ⁵⁶Fe with ~492 MeV). However, stability depends on how tightly each individual nucleon is bound. ⁵⁶Fe has E_bn ≈ 8.75 MeV/nucleon, whereas ²³⁸U has only E_bn ≈ 7.6 MeV/nucleon. Therefore, ⁵⁶Fe is far more stable than ²³⁸U."
  },
  {
    question: "Why do very light nuclei undergo nuclear fusion while very heavy nuclei undergo nuclear fission to release energy?",
    answer: "From the binding energy curve, E_bn is low for very light nuclei (e.g., ²H has 1.11 MeV/n) and drops for heavy nuclei (²³⁸U has 7.6 MeV/n), peaking at ⁵⁶Fe (8.75 MeV/n). When light nuclei fuse, they form heavier nuclei with higher E_bn, releasing energy. When heavy nuclei split into middle-mass fragments, the fragments also have higher E_bn, releasing energy. In both cases, the system moves toward the high-stability peak."
  },
  {
    question: "Why is the iron/nickel (⁵⁶Fe) region the most tightly bound and stable in the universe?",
    answer: "In intermediate nuclei (A ≈ 50 to 80), the strong nuclear force reaches optimal saturation because nucleons interact with immediate neighbors, while the repulsive Coulomb force between protons is not yet large enough to destabilize the nucleus. Above A ≈ 60, long-range proton-proton electrostatic repulsion grows as Z², reducing E_bn."
  },
  {
    question: "What are the four defining characteristics of the strong nuclear force at the NEET level?",
    answer: "(1) Short Range: acts effectively only up to 1-3 fm, falling to zero beyond 3 fm. (2) Very Strong: approximately 100 times stronger than Coulomb electrostatic force. (3) Charge Independent: force between p-p, n-n, and p-n is identical. (4) Saturating & Repulsive at tiny distances: becomes strongly repulsive for r < 0.8 fm to prevent nuclear collapse."
  },
  {
    question: "Why does beta-minus (β⁻) emission produce a continuous energy spectrum while alpha (α) decay produces discrete energy lines?",
    answer: "In alpha decay, a two-body disintegration occurs (Parent ➔ Daughter + α). Conservation of energy and momentum uniquely fixes the kinetic energy of the alpha particle. In beta decay, a three-body process occurs (Parent ➔ Daughter + e⁻ + ν̄_e). The fixed reaction energy Q is shared continuously between the beta electron and the antineutrino, resulting in a continuous spectrum from 0 to Q_max."
  },
  {
    question: "Which radiation has the greatest penetrating power, and which has the greatest ionizing power?",
    answer: "Penetrating power: Gamma (γ) > Beta (β) > Alpha (α). Gamma rays are uncharged high-energy photons that interact weakly with matter. Ionizing power: Alpha (α) > Beta (β) > Gamma (γ). Alpha particles have the largest charge (+2e) and mass, creating intense Coulomb ionization along their path."
  },
  {
    question: "Does radioactive decay depend on temperature, pressure, chemical state, or gravitational fields?",
    answer: "No. Radioactive decay is an intrinsic, spontaneous nuclear process governed entirely by nuclear forces and quantum tunneling. Atomic electrons, chemical bonds, thermal kinetic energies (eV scale), and ordinary laboratory pressures are billions of times weaker than nuclear energy levels (MeV scale) and have zero effect on decay constant λ."
  },
  {
    question: "What fraction of a radioactive substance remains undecayed and what fraction has decayed after 4 half-lives?",
    answer: "Using N = N₀ / 2^n with n = 4: Remaining fraction = 1 / 2⁴ = 1/16 = 6.25% (or 0.0625 N₀). Decayed fraction = 1 − 1/16 = 15/16 = 93.75% (or 0.9375 N₀)."
  },
  {
    question: "What is the relation between half-life T₁/₂ and mean life τ?",
    answer: "T₁/₂ = ln(2)/λ = 0.693 / λ, while τ = 1/λ. Therefore, T₁/₂ = (ln 2) · τ ≈ 0.693 τ, and τ = 1.443 T₁/₂. The mean life is always longer than the half-life."
  },
  {
    question: "What is a nuclear chain reaction, and what are the roles of the moderator and control rods in a nuclear reactor?",
    answer: "A chain reaction occurs when prompt neutrons emitted during fission trigger further fission events in neighboring nuclei. The moderator (e.g., D₂O, graphite) slows down fast neutrons (2 MeV) to thermal energies (0.025 eV) where fission cross-section is high. Control rods (cadmium, boron) absorb excess neutrons to maintain the multiplication factor k = 1 (critical condition)."
  },
  {
    question: "Why does nuclear fusion require temperatures of the order of 10⁷ to 10⁸ K to occur?",
    answer: "Positively charged nuclei (like protons or deuterons) experience strong Coulomb electrostatic repulsion as they approach each other. High temperature gives the nuclei sufficient thermal kinetic energy (3/2 k_B T) to overcome the Coulomb potential barrier and get within ~1 fm, where the strong attractive nuclear force takes over."
  },
  {
    question: "What is the Q-value of a nuclear reaction, and how do you calculate it using mass defect or binding energies?",
    answer: "Q = [m_reactants − m_products] · c² in terms of rest masses. In terms of binding energies: Q = [ΣE_b(products) − ΣE_b(reactants)]. If Q > 0, energy is released (exoergic). If Q < 0, energy is absorbed (endoergic)."
  }
];

export const NUCLEI_RAPID_REVISION_POINTS = [
  "Atomic Nucleus: Contains Z protons and N neutrons. Mass number A = Z + N. Radius R = R₀ A¹/³ with R₀ ≈ 1.2 fm.",
  "Nuclear Volume & Density: V ∝ R³ ∝ A. Nuclear density ρ ≈ 2.3 × 10¹⁷ kg/m³ is CONSTANT for all nuclei (independent of A).",
  "Isotopes: Same Z, different A (¹H, ²H, ³H). Isobars: Same A, different Z (⁴⁰Ar, ⁴⁰Ca). Isotones: Same N = A−Z (¹⁴C, ¹⁵N, ¹⁶O).",
  "Nuclear Force: Strongest force in nature, short-range (1-3 fm), charge-independent (F_pp = F_nn = F_pn), repulsive below 0.8 fm.",
  "Mass Defect: Δm = [Z·m_p + (A−Z)·m_n] − M_nucleus. In atomic masses: Δm = [Z·m_H + (A−Z)·m_n] − M_atom.",
  "Mass-Energy Equivalence: E = mc². 1 u = 931.5 MeV/c². Binding Energy E_b (MeV) = Δm (in u) × 931.5.",
  "Binding Energy per Nucleon: E_bn = E_b / A. True measure of nuclear stability. Maximum at ⁵⁶₂₆Fe (8.75 MeV/nucleon).",
  "Fission & Fusion: Light nuclei fuse (fusion) and heavy nuclei split (fission) to increase E_bn toward ~8.5 MeV and release energy.",
  "Radioactive Decay Law: N(t) = N₀ e^(−λt). Decay rate (Activity) A = −dN/dt = λN = A₀ e^(−λt). SI unit: 1 Becquerel (Bq) = 1 decay/s.",
  "Half-Life & Mean Life: T₁/₂ = 0.693 / λ. Mean life τ = 1 / λ. T₁/₂ = 0.693 τ ≈ 0.7 τ. After n half-lives, N = N₀ / 2^n.",
  "Alpha Decay: ᴬ_Z X ➔ ᴬ⁻⁴_{Z-2} Y + ⁴₂He. Beta-minus Decay: ¹₀n ➔ ¹₁p + e⁻ + ν̄_e (Z increases by 1, A constant). Beta-plus Decay: ¹₁p ➔ ¹₀n + e⁺ + ν_e (Z decreases by 1, A constant). Gamma Decay: excited nucleus de-excites with zero change in A or Z.",
  "Radiation Properties: Ionising power: α (10,000) > β (100) > γ (1). Penetrating power: γ > β > α. Deflection in E/B field: β deflects strongly, α deflects slightly opposite, γ is undeflected."
];
