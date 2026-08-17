// 40+ High-Yield NEET Traps, Common Misconceptions, Master Formula Sheet, and Fundamental Constants

export interface NeetTrap {
  trapNumber: number;
  misconception: string;
  correction: string;
  whyItMattersForNEET: string;
}

export const NUCLEI_NEET_TRAPS: NeetTrap[] = [
  {
    trapNumber: 1,
    misconception: "Thinking isotopes have the same mass number A instead of the same atomic number Z.",
    correction: "Isotopes have the SAME atomic number Z (same number of protons) and DIFFERENT mass numbers A (different neutron counts). Isobars have the same A.",
    whyItMattersForNEET: "Frequent definition trap in assertion-reason and match-the-column questions."
  },
  {
    trapNumber: 2,
    misconception: "Assuming nuclear density increases with heavier mass numbers (thinking Uranium is denser than Carbon).",
    correction: "Nuclear density ρ ≈ 2.3 × 10¹⁷ kg/m³ is CONSTANT and identical for all nuclei because both mass and volume scale linearly with A, canceling out in the ratio M/V.",
    whyItMattersForNEET: "Extremely popular NEET conceptual trap: ρ(U) / ρ(C) = 1:1, NOT 238:12."
  },
  {
    trapNumber: 3,
    misconception: "Using R ∝ A instead of R ∝ A^(1/3) for nuclear radius.",
    correction: "Nuclear radius is proportional to the CUBE ROOT of mass number: R = R₀ A^(1/3). Volume is proportional to A.",
    whyItMattersForNEET: "If A increases by 8, radius only doubles (8^(1/3) = 2), while volume increases by 8."
  },
  {
    trapNumber: 4,
    misconception: "Believing total binding energy determines nuclear stability.",
    correction: "Total binding energy E_b does NOT determine stability. ²³⁸U has E_b ≈ 1800 MeV while ⁵⁶Fe has E_b ≈ 492 MeV, yet ⁵⁶Fe is far more stable. Stability is governed strictly by Binding Energy per Nucleon (E_bn = E_b / A).",
    whyItMattersForNEET: "Examiners give total E_b values to trap students into picking the heaviest nucleus."
  },
  {
    trapNumber: 5,
    misconception: "Confusing atomic mass with nuclear mass when calculating mass defect.",
    correction: "If atomic masses are provided, use Δm = [Z·m(¹H) + N·m_n] − M_atom. The Z electron masses in Z·m(¹H) exactly cancel the Z electron masses in M_atom.",
    whyItMattersForNEET: "Do not subtract electron masses if hydrogen atom mass m(¹H) is supplied in the problem."
  },
  {
    trapNumber: 6,
    misconception: "Thinking 1 u = 931.5 MeV instead of 1 u = 931.5 MeV/c².",
    correction: "1 u is a unit of MASS (1.66 × 10⁻²⁷ kg). Its energy EQUIVALENT is 931.5 MeV (via E = mc²). The mass 1 u = 931.5 MeV/c².",
    whyItMattersForNEET: "Unit consistency in theoretical and dimensional analysis questions."
  },
  {
    trapNumber: 7,
    misconception: "Believing nuclear forces are electrostatic or gravitational in origin.",
    correction: "The nuclear force is a distinct fundamental interaction (strong interaction) mediated by meson/gluon exchange, ~100× stronger than electrostatic forces and completely charge-independent.",
    whyItMattersForNEET: "Questions testing fundamental forces of nature."
  },
  {
    trapNumber: 8,
    misconception: "Thinking the strong nuclear force is attractive at ALL distances.",
    correction: "The nuclear force is strongly ATTRACTIVE between 0.8 fm and 3.0 fm, but becomes strongly REPULSIVE for r < 0.8 fm, preventing the collapse of the nucleus.",
    whyItMattersForNEET: "Tested frequently in potential energy vs separation graphs (U(r) vs r)."
  },
  {
    trapNumber: 9,
    misconception: "Confusing decay constant λ with wavelength λ in nuclear physics.",
    correction: "In nuclear physics, λ is the radioactive decay constant (unit: s⁻¹ or day⁻¹), representing the fractional decay probability per unit time, NOT wavelength.",
    whyItMattersForNEET: "Avoid dimensional and formula confusion between Modern Physics chapters."
  },
  {
    trapNumber: 10,
    misconception: "Thinking half-life T₁/₂ = 1 / λ instead of ln(2) / λ.",
    correction: "Half-life T₁/₂ = ln(2)/λ = 0.693 / λ. Mean life τ = 1 / λ. Thus T₁/₂ = 0.693 τ < τ.",
    whyItMattersForNEET: "Students regularly mix up the factor 0.693 between half-life and mean life."
  },
  {
    trapNumber: 11,
    misconception: "Assuming the fraction of nuclei decayed after n half-lives is (1/2)^n.",
    correction: "(1/2)^n is the fraction of undecayed (REMAINING) nuclei. The fraction DECAYED is 1 − (1/2)^n.",
    whyItMattersForNEET: "Major negative marking trap: when asked for 'decayed fraction', students often select the 'remaining fraction'."
  },
  {
    trapNumber: 12,
    misconception: "Believing radioactive decay rate (activity) can be sped up by heating or high pressure.",
    correction: "Radioactivity is completely spontaneous and nuclear; chemical bonds, temperature, and pressure have zero impact on decay constant λ.",
    whyItMattersForNEET: "Direct conceptual question in NEET exams."
  },
  {
    trapNumber: 13,
    misconception: "Assuming beta-minus (β⁻) emission decreases the atomic number Z.",
    correction: "In β⁻ decay, a neutron converts to a proton (¹₀n ➔ ¹₁p + e⁻ + ν̄_e). Therefore, Z INCREASES by 1 (Z ➔ Z + 1). In β⁺ decay, Z decreases by 1.",
    whyItMattersForNEET: "Essential for balancing nuclear decay chain equations."
  },
  {
    trapNumber: 14,
    misconception: "Thinking mass number A changes during beta decay.",
    correction: "In both β⁻ and β⁺ decay, a nucleon converts into another nucleon (n ➔ p or p ➔ n), so the total mass number A remains strictly CONSTANT (isobaric transition).",
    whyItMattersForNEET: "Parent and daughter in beta decay are always ISOBARS."
  },
  {
    trapNumber: 15,
    misconception: "Thinking gamma emission changes Z or A.",
    correction: "Gamma decay is purely a de-excitation of the nucleus from an excited nuclear state to a lower/ground state. Neither Z nor A changes.",
    whyItMattersForNEET: "Nuclear reaction balancing questions."
  },
  {
    trapNumber: 16,
    misconception: "Assuming beta particles are atomic orbital electrons.",
    correction: "Beta particles are created inside the nucleus at the very instant of decay through the weak interaction (n ➔ p + e⁻ + ν̄_e); they do NOT originate from orbital electron shells.",
    whyItMattersForNEET: "Fundamental physics concept in NCERT."
  },
  {
    trapNumber: 17,
    misconception: "Thinking the beta particle spectrum is discrete like alpha decay.",
    correction: "Beta decay spectrum is CONTINUOUS because the decay energy Q is shared in variable proportions between the beta particle and the neutrino/antineutrino (three-body decay).",
    whyItMattersForNEET: "Direct NCERT assertion tested in NEET."
  },
  {
    trapNumber: 18,
    misconception: "Assuming alpha particles deflect more than beta particles in electric/magnetic fields because α has +2e charge.",
    correction: "Although α has twice the charge of β, it has ~7300 times the mass of an electron. Hence, the charge-to-mass ratio (q/m) of β is thousands of times larger, so BETA particles deflect far more strongly than alpha particles.",
    whyItMattersForNEET: "Diagram-based trajectory questions in electric and magnetic fields."
  },
  {
    trapNumber: 19,
    misconception: "Thinking gamma rays can be deflected by strong magnetic fields.",
    correction: "Gamma rays are neutral photons (charge q = 0) and experience zero Lorentz force (F = q(E + v × B) = 0). They travel straight without any deflection.",
    whyItMattersForNEET: "Identifying undeflected central beams in radiation experiments."
  },
  {
    trapNumber: 20,
    misconception: "Confusing ionizing power with penetrating power.",
    correction: "Ionizing power: α > β > γ (α has +2e and large mass). Penetrating power: γ > β > α (γ is neutral photon). They are inversely related.",
    whyItMattersForNEET: "Frequently swapped in options by examiners."
  },
  {
    trapNumber: 21,
    misconception: "Believing nuclear fission yields more energy per unit mass than nuclear fusion.",
    correction: "Fission yields ~200 MeV per reaction (~0.85 MeV/nucleon), but fusion yields ~17.6 MeV per reaction (~3.52 MeV/nucleon). Per kilogram of fuel, FUSION produces ~4 times more energy than fission.",
    whyItMattersForNEET: "NEET assertion questions on fuel efficiency of stars vs reactors."
  },
  {
    trapNumber: 22,
    misconception: "Assuming control rods slow down neutrons in a nuclear reactor.",
    correction: "Control rods (Cadmium, Boron) ABSORB neutrons to control the multiplication factor k. The MODERATOR (Heavy water, graphite) SLOWS DOWN fast neutrons.",
    whyItMattersForNEET: "Common confusion between moderator function and control rod function."
  },
  {
    trapNumber: 23,
    misconception: "Thinking thermal neutrons are hot, high-energy neutrons.",
    correction: "'Thermal neutrons' are SLOW neutrons in thermal equilibrium with the moderator at room temperature (kinetic energy ≈ 0.025 eV, speed ≈ 2200 m/s), not fast 2 MeV neutrons.",
    whyItMattersForNEET: "Crucial for understanding why ²³⁵U fission requires a moderator."
  },
  {
    trapNumber: 24,
    misconception: "Believing Q-value is always positive in all reactions.",
    correction: "If Q > 0, the reaction is exoergic (exothermic, energy released). If Q < 0, it is endoergic (endothermic, energy must be supplied as threshold kinetic energy).",
    whyItMattersForNEET: "Sign convention in Q-value numericals."
  },
  {
    trapNumber: 25,
    misconception: "Calculating Q-value as E_b(reactants) − E_b(products).",
    correction: "Using Binding Energies: Q = Σ E_b(products) − Σ E_b(reactants). Using rest masses: Q = [Σ m(reactants) − Σ m(products)] c².",
    whyItMattersForNEET: "Notice the reverse order: Masses are (Initial − Final), but Binding Energies are (Final − Initial)!"
  },
  {
    trapNumber: 26,
    misconception: "Thinking the peak of the binding energy curve is at Uranium.",
    correction: "The peak is at Iron-56 (⁵⁶₂₆Fe) with E_bn ≈ 8.75 MeV/nucleon. Heavy nuclei like ²³⁸U have lower E_bn (~7.6 MeV/nucleon) due to proton Coulomb repulsion.",
    whyItMattersForNEET: "Graph interpretation questions."
  },
  {
    trapNumber: 27,
    misconception: "Assuming after 2 half-lives, 100% of the sample has decayed.",
    correction: "Radioactive decay is exponential, not linear. After 1 half-life, 50% remains. After 2 half-lives, 25% remains (75% decayed), NOT 0%.",
    whyItMattersForNEET: "Linear vs exponential decay confusion."
  },
  {
    trapNumber: 28,
    misconception: "Thinking the number of undecayed nuclei reaches zero after a finite time.",
    correction: "Mathematically, N(t) = N₀ e^(−λt) approaches zero only as t ➔ ∞. A sample never completely decays to absolute zero in finite time.",
    whyItMattersForNEET: "Asymptotic nature of decay curve."
  },
  {
    trapNumber: 29,
    misconception: "Forgetting that Activity A = λN depends on the sample size N.",
    correction: "A sample with a short half-life (large λ) but tiny N can have lower activity than a sample with a long half-life (small λ) but huge mass N.",
    whyItMattersForNEET: "Comparing activities of different masses of isotopes."
  },
  {
    trapNumber: 30,
    misconception: "Thinking 1 Curie is the SI unit of radioactivity.",
    correction: "The SI unit of radioactivity is the Becquerel (1 Bq = 1 decay/s). Curie is a non-SI historical unit (1 Ci = 3.7 × 10¹⁰ Bq).",
    whyItMattersForNEET: "SI unit definitions in NEET."
  },
  {
    trapNumber: 31,
    misconception: "Assuming neutrino has electric charge.",
    correction: "Neutrinos (ν) and antineutrinos (ν̄) are neutral leptons with zero electric charge, extremely tiny mass, and spin 1/2.",
    whyItMattersForNEET: "Charge conservation in beta decay."
  },
  {
    trapNumber: 32,
    misconception: "Thinking the mass of a neutron equals the mass of a proton.",
    correction: "Neutron mass (m_n = 1.008665 u) is slightly greater than proton mass (m_p = 1.007276 u). A free isolated neutron is unstable and undergoes beta decay (half-life ~14 minutes).",
    whyItMattersForNEET: "Free neutron decay: n ➔ p + e⁻ + ν̄_e."
  },
  {
    trapNumber: 33,
    misconception: "Assuming fusion can occur spontaneously at room temperature.",
    correction: "Positively charged light nuclei face immense Coulomb electrostatic repulsion. Fusion requires temperatures ~10⁷-10⁸ K to provide sufficient kinetic energy to overcome the Coulomb barrier.",
    whyItMattersForNEET: "Why fusion is termed 'thermonuclear fusion'."
  },
  {
    trapNumber: 34,
    misconception: "Believing mass number A is always conserved in chemical reactions but not in nuclear reactions.",
    correction: "Total mass number A (nucleon number) and total electric charge Z are strictly conserved in ALL nuclear reactions as well as chemical reactions.",
    whyItMattersForNEET: "Conservation laws in physics."
  },
  {
    trapNumber: 35,
    misconception: "Thinking the slope of ln(N) vs t graph gives half-life directly.",
    correction: "ln(N) = ln(N₀) − λt. The slope of the straight line is −λ (decay constant). Half-life is obtained by T₁/₂ = 0.693 / |slope|.",
    whyItMattersForNEET: "Graph-based numericals in NEET."
  },
  {
    trapNumber: 36,
    misconception: "Assuming the multiplication factor k in a reactor must be greater than 1 for steady power.",
    correction: "For steady, constant power output, k must be EXACTLY equal to 1 (critical state). If k > 1, power increases exponentially (supercritical); if k < 1, reactor shuts down (subcritical).",
    whyItMattersForNEET: "Reactor control theory."
  },
  {
    trapNumber: 37,
    misconception: "Thinking alpha particles carry electrons with them.",
    correction: "Alpha particles are bare Helium nuclei (⁴₂He²⁺) consisting of 2 protons and 2 neutrons with NO orbital electrons.",
    whyItMattersForNEET: "Charge of alpha particle is exactly +2e = +3.2 × 10⁻¹⁹ C."
  },
  {
    trapNumber: 38,
    misconception: "Assuming binding energy per nucleon is zero for all single nucleons.",
    correction: "A single isolated proton (¹₁H) or single free neutron has no nuclear bonds, so its binding energy is exactly ZERO.",
    whyItMattersForNEET: "Calculating Q-value in reactions involving ¹H or neutrons."
  },
  {
    trapNumber: 39,
    misconception: "Forgetting that emitted alpha particle does not take 100% of Q in alpha decay.",
    correction: "Due to momentum conservation with the recoiling daughter nucleus: K_α = [(A − 4) / A] · Q. The alpha particle carries ~98% of the energy, but not 100%.",
    whyItMattersForNEET: "Recoil kinetic energy calculations."
  },
  {
    trapNumber: 40,
    misconception: "Confusing mean life τ with the time for complete decay.",
    correction: "Mean life τ is the average lifetime of a nucleus (time for N to drop to N₀/e ≈ 36.8%), NOT the total time for all nuclei to decay.",
    whyItMattersForNEET: "Definition of mean life in NCERT."
  }
];

export const NUCLEI_MASTER_FORMULAE = [
  {
    name: "Mass Number & Nucleon Count",
    formula: "A = Z + N",
    variables: "A = Mass number, Z = Atomic number (protons), N = Neutron number (A − Z)",
    units: "Dimensionless integers",
    whenToUse: "Balancing nuclear equations, determining neutron count, nuclide classification",
    commonMistake: "Confusing atomic number Z with mass number A."
  },
  {
    name: "Nuclear Radius Formula",
    formula: "R = R₀ A^(1/3)",
    variables: "R = Nuclear radius, R₀ ≈ 1.2 × 10⁻¹⁵ m (1.2 fm), A = Mass number",
    units: "m or Fermi (fm)",
    whenToUse: "Finding nuclear size or ratio of radii of two nuclei: R₁/R₂ = (A₁/A₂)^(1/3)",
    commonMistake: "Taking square root or direct proportionality instead of cube root."
  },
  {
    name: "Nuclear Volume & Density",
    formula: "V = (4/3) π R₀³ A ∝ A ; ρ = m_n / ((4/3) π R₀³) ≈ 2.3 × 10¹⁷ kg/m³",
    variables: "V = Volume, ρ = Density, m_n = Mass of a nucleon (~1.66 × 10⁻²⁷ kg)",
    units: "kg/m³",
    whenToUse: "Calculating nuclear volume or comparing nuclear density across elements",
    commonMistake: "Assuming heavy nuclei have greater nuclear density than light nuclei."
  },
  {
    name: "Mass Defect (Nuclear Mass Form)",
    formula: "Δm = [Z·m_p + (A − Z)·m_n] − M_nucleus",
    variables: "Δm = Mass defect, m_p = Proton mass, m_n = Neutron mass, M_nucleus = Measured nuclear mass",
    units: "kg or atomic mass units (u)",
    whenToUse: "Calculating mass defect when bare nuclear masses are provided",
    commonMistake: "Forgetting to multiply m_p by Z and m_n by (A−Z)."
  },
  {
    name: "Mass Defect (Atomic Mass Form)",
    formula: "Δm = [Z·m(¹H) + (A − Z)·m_n] − M_atom",
    variables: "m(¹H) = Hydrogen atom mass (1.007825 u), M_atom = Neutral atomic mass",
    units: "u",
    whenToUse: "Calculating mass defect when standard atomic masses are given in exam problem",
    commonMistake: "Subtracting electron mass when hydrogen atom mass is already used."
  },
  {
    name: "Mass-Energy Equivalence & Binding Energy",
    formula: "E = mc² ; E_b (MeV) = Δm (in u) × 931.5 MeV",
    variables: "E_b = Nuclear binding energy, Δm = Mass defect in u, 1 u c² = 931.5 MeV",
    units: "MeV (or Joules: multiply by 1.602 × 10⁻¹³ J/MeV)",
    whenToUse: "Fast conversion of mass defect in u directly into binding energy in MeV",
    commonMistake: "Multiplying by c² again after multiplying by 931.5."
  },
  {
    name: "Binding Energy per Nucleon (Stability Indicator)",
    formula: "E_bn = E_b / A",
    variables: "E_bn = Binding energy per nucleon, E_b = Total binding energy, A = Mass number",
    units: "MeV / nucleon",
    whenToUse: "Comparing relative stability of two or more nuclides",
    commonMistake: "Using total E_b instead of E_bn to judge stability."
  },
  {
    name: "Radioactive Decay Law (Exponential Form)",
    formula: "N(t) = N₀ e^(−λt)",
    variables: "N(t) = Undecayed nuclei at time t, N₀ = Initial nuclei at t = 0, λ = Decay constant",
    units: "N is count; λ is s⁻¹ or day⁻¹ or yr⁻¹",
    whenToUse: "Calculating remaining nuclei after continuous time elapsed",
    commonMistake: "Forgetting the minus sign in the exponent."
  },
  {
    name: "Decay Law after Integral Half-Lives",
    formula: "N = N₀ / 2^n ; A = A₀ / 2^n  (where n = t / T₁/₂)",
    variables: "n = Number of half-lives elapsed, N = Remaining nuclei, A = Remaining activity",
    units: "Dimensionless ratio",
    whenToUse: "Fast solving of NEET numericals when time is a multiple of half-life",
    commonMistake: "Confusing remaining fraction (1/2^n) with decayed fraction (1 − 1/2^n)."
  },
  {
    name: "Activity (Disintegration Rate)",
    formula: "A = −dN/dt = λN = A₀ e^(−λt)",
    variables: "A = Activity, λ = Decay constant (in s⁻¹), N = Current number of nuclei",
    units: "Becquerel (Bq = 1 decay/s) or Curie (1 Ci = 3.7 × 10¹⁰ Bq)",
    whenToUse: "Finding rate of decay or sample activity from mass/nuclei",
    commonMistake: "Using λ in days⁻¹ when calculating activity in Becquerels (must convert to s⁻¹)."
  },
  {
    name: "Half-Life & Decay Constant Relation",
    formula: "T₁/₂ = ln(2) / λ = 0.693 / λ",
    variables: "T₁/₂ = Half-life, λ = Decay constant",
    units: "s, min, hours, days, or years",
    whenToUse: "Interconverting between half-life and decay constant",
    commonMistake: "Writing T₁/₂ = 1/λ instead of 0.693/λ."
  },
  {
    name: "Mean Life (Average Lifetime)",
    formula: "τ = 1 / λ = T₁/₂ / 0.693 = 1.443 T₁/₂",
    variables: "τ = Mean life, λ = Decay constant, T₁/₂ = Half-life",
    units: "Same time units as half-life",
    whenToUse: "Calculating average life or finding time when N drops to N₀/e",
    commonMistake: "Thinking mean life is less than half-life (τ > T₁/₂ always)."
  },
  {
    name: "Q-Value of a Nuclear Reaction",
    formula: "Q = [Σ m_reactants − Σ m_products] c² = [Σ E_b(products) − Σ E_b(reactants)]",
    variables: "Q = Energy released (> 0) or absorbed (< 0), m = Rest masses, E_b = Binding energies",
    units: "MeV",
    whenToUse: "Calculating energy released in fission, fusion, or alpha/beta decay",
    commonMistake: "Mixing up reactant and product order between mass vs binding energy formulas."
  },
  {
    name: "Alpha Decay Kinetic Energy Sharing",
    formula: "K_α = [(A − 4) / A] · Q",
    variables: "K_α = Kinetic energy of emitted alpha particle, A = Parent mass number, Q = Total decay energy",
    units: "MeV",
    whenToUse: "Determining kinetic energy of alpha particle taking daughter recoil into account",
    commonMistake: "Assuming alpha particle takes 100% of Q."
  }
];

export const NUCLEI_CONSTANTS_CARD = [
  { name: "Speed of Light in Vacuum (c)", value: "3.00 × 10⁸ m/s" },
  { name: "Atomic Mass Unit (1 u)", value: "1.660539 × 10⁻²⁷ kg" },
  { name: "Energy Equivalent of 1 u", value: "931.5 MeV / c²" },
  { name: "Electron Volt (1 eV)", value: "1.602 × 10⁻¹⁹ J" },
  { name: "Mega Electron Volt (1 MeV)", value: "10⁶ eV = 1.602 × 10⁻¹³ J" },
  { name: "Fermi (1 fm)", value: "10⁻¹⁵ m" },
  { name: "Nuclear Radius Constant (R₀)", value: "1.2 × 10⁻¹⁵ m = 1.2 fm" },
  { name: "Proton Rest Mass (m_p)", value: "1.007276 u = 1.6726 × 10⁻²⁷ kg" },
  { name: "Neutron Rest Mass (m_n)", value: "1.008665 u = 1.6749 × 10⁻²⁷ kg" },
  { name: "Hydrogen Atom Mass (m_H)", value: "1.007825 u" },
  { name: "Becquerel (1 Bq)", value: "1 disintegration per second" },
  { name: "Curie (1 Ci)", value: "3.7 × 10¹⁰ Bq (decays/s)" },
  { name: "Avogadro's Number (N_A)", value: "6.022 × 10²³ mol⁻¹" }
];
