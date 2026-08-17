import { DetailedTopicContent } from '../../types/neet';
import { NUCLEI_SVGS } from '../nuclei/nucleiDiagrams';
import { NUCLEI_IMPORTANT_TERMS, NUCLEI_COMPARISON_TABLES, NUCLEI_CONCEPTUAL_QAS, NUCLEI_RAPID_REVISION_POINTS } from '../nuclei/nucleiTermsAndConcepts';
import { NUCLEI_NUMERICALS } from '../nuclei/nucleiNumericals';
import { NUCLEI_VERIFIED_PYQS, NUCLEI_PRACTICE_MCQS } from '../nuclei/nucleiPyqs';
import { NUCLEI_NEET_TRAPS, NUCLEI_MASTER_FORMULAE, NUCLEI_CONSTANTS_CARD } from '../nuclei/nucleiTrapsAndFormulaSheet';

export const physRadioactivityFissionDetails: DetailedTopicContent = {
  topicId: "phys-radioactivity-fission",
  topicName: "Radioactivity, Nuclear Fission & Fusion",
  subject: "Physics",
  class: "Class 12",
  classification: "Modern Physics",
  chapter: "Nuclei",

  whatIsThisTopic: "First-principles NEET UG 2026 masterclass covering the discovery of radioactivity, the Rutherford-Soddy radioactive decay law, complete mathematical derivations of exponential decay, decay constant (λ), half-life (T₁/₂), mean life (τ), activity (A = λN) and units (Bq, Ci), detailed mechanics of Alpha (α), Beta (β⁻ and β⁺), and Gamma (γ) decays with neutrino hypothesis, radiation property comparisons, nuclear fission chain reactions, nuclear reactor engineering physics (moderator, control rods, coolant, reproduction factor k), and thermonuclear fusion in stars and tokamaks.",

  basicIdea: [
    "Radioactivity is the spontaneous, probabilistic disintegration of unstable atomic nuclei through the emission of alpha particles (⁴He nuclei), beta particles (electrons or positrons), or gamma photons. It is completely unaffected by temperature, pressure, or chemical bonding.",
    "Radioactive decay obeys the Rutherford-Soddy statistical law: dN/dt = −λN, leading to exponential population decay N(t) = N₀ e^(−λt). The half-life is T₁/₂ = ln(2)/λ = 0.693/λ, and the mean life is τ = 1/λ = 1.443 T₁/₂.",
    "Nuclear Fission occurs when a heavy nucleus (²³⁵U) captures a thermal neutron and splits into two medium fragments, releasing ~200 MeV of energy and prompt neutrons to sustain a chain reaction. Nuclear Fusion combines light nuclei (²H, ³H) under extreme temperatures (>10⁷ K) to form ⁴He, releasing ~17.6 MeV per event and powering the stars."
  ],

  importantTerms: NUCLEI_IMPORTANT_TERMS.slice(10),

  conceptExplanation: [
    {
      heading: "1. Discovery of Radioactivity & Spontaneous Nuclear Decay",
      paragraphs: [
        "In 1896, Henri Becquerel accidentally discovered radioactivity when uranium potassium sulphate wrapped in thick black paper spontaneously darkened photographic plates without any exposure to sunlight. Subsequently, Marie Curie and Pierre Curie discovered the intensely radioactive elements Polonium and Radium in pitchblende ore.",
        "Definition of Radioactivity: Radioactivity is a spontaneous nuclear phenomenon in which an unstable nucleus disintegrates by emitting ionizing radiation (alpha particles, beta particles, or gamma rays) to achieve a more stable nuclear configuration.",
        "Key Fundamental Realities of Radioactive Decay:",
        "1. Purely Nuclear Origin: Radiations originate strictly from the nucleus, not from orbital electron shells.",
        "2. Spontaneous & Stochastic: Radioactive decay is a purely random, probabilistic quantum tunneling process. It is impossible to predict when a specific individual nucleus will disintegrate, but for a large ensemble of nuclei, it follows precise statistical laws.",
        "3. Immune to External Influences: The decay constant λ is completely independent of external physical and chemical conditions: temperature, pressure, electric/magnetic fields, state of aggregation (solid/liquid/gas), and chemical compounds."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.decayCurve,
        caption: "Becquerel's Discovery of Spontaneous Nuclear Radioactivity and Discovery of Radium & Polonium.",
        guide: "Observe the spontaneous emission of ionizing rays from uranium salt penetrating opaque black paper to expose a photographic plate."
      },
      importantPoints: [
        "Discovered by Henri Becquerel (1896); Radium & Polonium isolated by Marie and Pierre Curie.",
        "Decay constant λ is unaffected by temperature, pressure, or chemical bonding.",
        "Decay is a spontaneous statistical quantum process."
      ]
    },
    {
      heading: "2. Rutherford-Soddy Law of Radioactive Decay & Exponential Derivations",
      paragraphs: [
        "In 1902, Ernest Rutherford and Frederick Soddy formulated the statistical law of radioactive decay: 'The rate of disintegration of radioactive nuclei at any instant is directly proportional to the total number of active, undecayed nuclei present in the sample at that instant.'",
        "Mathematical First-Principles Derivation:",
        "Let N(t) be the number of active, undecayed nuclei present at time t. In a small time interval dt, let dN be the number of nuclei that decay.",
        "Rate of decay: −dN/dt ∝ N  ⟹  −dN/dt = λ N, where λ is the radioactive DECAY CONSTANT (or disintegration constant). The negative sign indicates that N decreases as time t increases.",
        "Separating variables: dN / N = −λ dt.",
        "Integrating both sides from initial time t = 0 (when N = N₀) to time t (when N = N):",
        "∫[N₀ to N] (1/N) dN = −λ ∫[0 to t] dt  ⟹  [ln N]_[N₀]^N = −λ t  ⟹  ln(N / N₀) = −λ t.",
        "Taking the natural exponential of both sides: N(t) = N₀ e^(−λ t).",
        "Physical Significance of Decay Constant λ: λ = (−dN/dt) / N. The decay constant λ represents the fractional decay probability of an individual nucleus per unit time (SI unit: s⁻¹ or day⁻¹ or year⁻¹)."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.decayCurve,
        caption: "Radioactive Exponential Decay Curve N(t) = N₀ e^(−λt) Showing Half-Life (T₁/₂) and Mean-Life (τ).",
        guide: "Trace the decay curve: at t = T₁/₂, N = N₀/2 (50%); at t = τ, N = N₀/e ≈ 0.368 N₀ (36.8%); at t = 2 T₁/₂, N = N₀/4 (25%)."
      },
      importantPoints: [
        "Differential law: dN/dt = −λN.",
        "Integrated law: N(t) = N₀ e^(−λt).",
        "Number of decayed nuclei: ΔN(t) = N₀ − N(t) = N₀ (1 − e^(−λt)).",
        "Logarithmic linear relation: ln(N) = ln(N₀) − λt (Straight line graph with slope = −λ)."
      ]
    },
    {
      heading: "3. Half-Life (T₁/₂), Mean-Life (τ), and Activity (A)",
      paragraphs: [
        "1. Half-Life (T₁/₂): The time interval during which the number of radioactive nuclei in a sample decreases to exactly HALF (50%) of its initial value.",
        "Derivation: Setting N = N₀ / 2 at t = T₁/₂ in the decay law: N₀ / 2 = N₀ e^(−λ T₁/₂)  ⟹  1/2 = e^(−λ T₁/₂)  ⟹  e^(λ T₁/₂) = 2  ⟹  λ T₁/₂ = ln(2) = 0.69315.",
        "Therefore: T₁/₂ = ln(2) / λ = 0.693 / λ  (and λ = 0.693 / T₁/₂).",
        "Decay after n Half-Lives: After 1 half-life: N₁ = N₀ / 2. After 2 half-lives: N₂ = N₀ / 4. After n half-lives (where n = t / T₁/₂): N(t) = N₀ / 2^n = N₀ (1/2)^(t / T₁/₂).",
        "2. Mean-Life or Average-Life (τ): The average lifespan of all the radioactive nuclei in a given sample before they disintegrate.",
        "Mathematical Definition: τ = (Sum of lifetimes of all nuclei) / (Total initial number of nuclei N₀) = (1/N₀) ∫[0 to ∞] t · λN₀ e^(−λt) dt = 1 / λ.",
        "Relation between Half-Life and Mean-Life: T₁/₂ = (ln 2) · τ = 0.693 τ  (or τ = T₁/₂ / 0.693 = 1.443 T₁/₂).",
        "At time t = τ (one mean-life): N = N₀ e^(−1) = N₀ / e = 0.3678 N₀ ≈ 36.8% remaining (and 63.2% decayed!).",
        "3. Activity (A or R): The rate of disintegration occurring in a radioactive sample: A = −dN/dt = λ N = λ N₀ e^(−λ t) = A₀ e^(−λ t).",
        "Activity after n half-lives: A = A₀ / 2^n. Units of Activity: SI Unit is the Becquerel (1 Bq = 1 disintegration per second). Non-SI Unit is the Curie (1 Ci = 3.7 × 10¹⁰ Bq = activity of 1 gram of Radium-226). 1 Rutherford (Rd) = 10⁶ Bq."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.halfLifeMeanLife,
        caption: "Mathematical and Conceptual Comparison of Half-Life (T₁/₂) vs Mean-Life (τ).",
        guide: "Notice that Mean-Life τ (1/λ) is always longer than Half-Life T₁/₂ (0.693/λ): τ = 1.44 T₁/₂. After 1 half-life, 50% remains; after 1 mean-life, 36.8% remains."
      },
      importantPoints: [
        "T₁/₂ = 0.693 / λ ; τ = 1 / λ ⟹ T₁/₂ = 0.693 τ.",
        "After n half-lives (n = t / T₁/₂): Remaining N = N₀ / 2^n, Decayed = N₀ (1 − 1/2^n).",
        "Activity A = λN = A₀ e^(−λt). Units: 1 Bq = 1 dps; 1 Ci = 3.7 × 10¹⁰ Bq."
      ]
    },
    {
      heading: "4. Alpha (α), Beta (β⁻, β⁺), and Gamma (γ) Decay Modes",
      paragraphs: [
        "1. Alpha (α) Decay: A heavy parent nucleus emits an alpha particle (a bare Helium-4 nucleus ⁴₂He²⁺, 2 protons + 2 neutrons) to reduce electrostatic Coulomb stress.",
        "Decay Equation: ᴬ_Z X ➔ ᴬ⁻⁴_{Z−2} Y + ⁴₂He + Q.",
        "Energy Sharing in Alpha Decay: Q = [m(X) − m(Y) − m(α)] c². By conservation of linear momentum in 2-body decay: p_Y = p_α. The kinetic energy of the alpha particle is: K_α = [(A − 4) / A] · Q. The alpha particle carries ~98% of the total decay energy!",
        "2. Beta-Minus (β⁻) Decay: Occurs in neutron-rich nuclei. A neutron inside the nucleus transforms into a proton, emitting an electron (β⁻) and an electron antineutrino (ν̄_e):",
        "¹₀n ➔ ¹₁p + e⁻ + ν̄_e   ⟹   ᴬ_Z X ➔ ᴬ_{Z+1} Y + e⁻ + ν̄_e + Q.",
        "Mass number A remains unchanged (isobaric decay), atomic number Z increases by 1.",
        "3. Beta-Plus (β⁺) Decay (Positron Emission): Occurs in proton-rich nuclei. A proton transforms into a neutron, emitting a positron (e⁺, antimatter electron) and an electron neutrino (ν_e):",
        "¹₁p ➔ ¹₀n + e⁺ + ν_e   ⟹   ᴬ_Z X ➔ ᴬ_{Z−1} Y + e⁺ + ν_e + Q.",
        "Atomic number Z decreases by 1, mass number A remains unchanged.",
        "Pauli's Neutrino Hypothesis & Continuous Beta Spectrum: Unlike alpha decay which produces discrete energy lines, the beta particle spectrum is continuous from 0 up to Q_max. Wolfgang Pauli (1930) hypothesized that an elusive neutral, almost massless spin-1/2 particle (neutrino/antineutrino) is co-emitted, sharing the fixed decay energy Q continuously with the beta electron: E_β + E_ν = Q.",
        "4. Gamma (γ) Decay & Nuclear De-excitation: Following α or β decay, the daughter nucleus is often left in an excited nuclear energy state (Y*). It de-excites to a lower energy state or the ground state by emitting high-energy electromagnetic photons called GAMMA RAYS (γ):",
        "ᴬ_Z Y* ➔ ᴬ_Z Y + γ (hν = E_excited − E_ground). There is ZERO change in atomic number Z and ZERO change in mass number A."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.alphaDecay,
        caption: "Nuclear Transformations: Alpha Decay (A−4, Z−2), Beta-Minus Decay (Z+1), Beta-Plus Decay (Z−1), and Gamma Emission.",
        guide: "Study the nucleon transformations: Alpha ejects ⁴₂He; Beta-minus converts n➔p; Beta-plus converts p➔n; Gamma de-excites the nucleus with no change in Z or A."
      },
      importantPoints: [
        "Alpha Decay: Z ➔ Z − 2, A ➔ A − 4; K_α = [(A−4)/A] Q.",
        "Beta-Minus Decay: Z ➔ Z + 1, A constant; emits e⁻ + antineutrino (ν̄_e).",
        "Beta-Plus Decay: Z ➔ Z − 1, A constant; emits e⁺ + neutrino (ν_e).",
        "Gamma Decay: Z constant, A constant; de-excitation via photon emission.",
        "Beta energy spectrum is continuous due to energy sharing with neutrino."
      ]
    },
    {
      heading: "5. Radiation Properties & Deflection in Electric & Magnetic Fields",
      paragraphs: [
        "Comparison of Alpha, Beta, and Gamma Radiations in External Fields:",
        "1. Deflection in Electric Field: Alpha particles (charge +2e) deflect toward the negative plate. Beta-minus particles (charge −e) deflect toward the positive plate. Beta-plus particles (charge +e) deflect toward the negative plate. Gamma rays (charge 0) pass straight through with zero deflection.",
        "Why Beta Deflects More Than Alpha: The lateral deflection y in an electric field is proportional to charge-to-mass ratio: y ∝ q/m. For an electron: (q/m)_β = e / m_e. For an alpha particle: (q/m)_α = 2e / (4 × 1836 m_e) ≈ e / (3672 m_e). Thus, (q/m)_β is nearly 4000 times larger than (q/m)_α! Therefore, beta particles experience far greater acceleration and curve much more sharply than alpha particles.",
        "2. Ionizing Power vs Penetrating Power (The Inverse Law):",
        "Ionizing Power: α (10,000) > β (100) > γ (1). Alpha particles have the greatest charge (+2e) and largest mass, creating dense ionization tracks in air.",
        "Penetrating Power: γ (10,000) > β (100) > α (1). Gamma rays are uncharged photons that interact weakly, requiring thick lead or concrete shields. Alpha particles are stopped by a single sheet of paper or 5 cm of air; beta particles are stopped by a few millimeters of aluminum."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.radiationDeflection,
        caption: "Trajectories of Alpha (α), Beta (β⁻), and Gamma (γ) Radiations in Electric and Magnetic Fields.",
        guide: "Observe that Beta-minus bends sharply toward the positive plate; Alpha bends gently toward the negative plate; Gamma continues straight through without deflection."
      },
      importantPoints: [
        "Deflection in E/B fields: β⁻ deflects strongly to (+), α deflects gently to (−), γ is undeflected.",
        "Ionizing Power: α > β > γ (α has maximum ionization).",
        "Penetrating Power: γ > β > α (γ has maximum penetration).",
        "Paper stops α; 5 mm Al stops β; thick Lead stops γ."
      ]
    },
    {
      heading: "6. Nuclear Fission, Chain Reactions & Nuclear Reactor Physics",
      paragraphs: [
        "Discovered by Otto Hahn and Fritz Strassmann (1938) and explained by Lise Meitner and Otto Frisch (1939): When a slow thermal neutron (energy ≈ 0.025 eV) is absorbed by a heavy Uranium-235 nucleus, it forms an unstable compound nucleus ²³⁶₉₂U* which oscillates, elongates, and splits into two middle-mass daughter nuclei, 2 to 3 prompt neutrons, and ~200 MeV of energy:",
        "¹₀n + ²³⁵₉₂U ➔ ²³⁶₉₂U* ➔ ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n + 200 MeV",
        "Nuclear Chain Reaction & Multiplication Factor (k): The prompt neutrons emitted during fission can strike other ²³⁵U nuclei to cause further fissions, creating a self-sustaining chain reaction. The neutron multiplication (reproduction) factor k is defined as:",
        "k = (Number of neutrons present in present generation) / (Number of neutrons in preceding generation)",
        "• k = 1: Critical (Chain reaction is steady and controlled at constant power — normal operating condition of nuclear power reactors).",
        "• k > 1: Supercritical (Chain reaction grows exponentially — explosive state in nuclear weapons).",
        "• k < 1: Subcritical (Chain reaction dies down and reactor shuts down).",
        "Core Components of a Controlled Nuclear Reactor:",
        "1. Nuclear Fuel: Enriched Uranium containing ~3-5% ²³⁵U (or ²³⁹Pu).",
        "2. Moderator: Slows down fast 2 MeV fission neutrons to thermal energies (~0.025 eV) via elastic collisions without absorbing them. Common materials: Heavy water (D₂O) and Graphite (Carbon). Light water (H₂O) can also be used.",
        "3. Control Rods: Made of strong neutron-absorbing materials (Cadmium or Boron). Inserted or withdrawn from the reactor core to maintain k = 1.",
        "4. Coolant: Circulates through the core to extract heat and generate steam to drive electricity turbines. Examples: Heavy water, ordinary pressurized water, liquid sodium.",
        "5. Biological Shielding: Thick concrete walls (2-3 meters) and lead barriers to absorb lethal gamma radiation and stray neutrons."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.nuclearReactor,
        caption: "Schematic Engineering Physics Diagram of a Thermal Nuclear Fission Reactor Core.",
        guide: "Identify the critical components: Fuel rods (U-235), Moderator (D₂O/Graphite), Control rods (Cadmium/Boron), Coolant loop, and Heavy Concrete Biological Shield."
      },
      importantPoints: [
        "Fission of 1 ²³⁵U nucleus releases ~200 MeV energy and 2-3 neutrons.",
        "Multiplication factor k: k=1 (Critical/steady), k>1 (Supercritical), k<1 (Subcritical).",
        "Moderator (D₂O, Graphite): Slows fast neutrons to thermal speeds (~0.025 eV).",
        "Control rods (Cd, B): Absorb neutrons to regulate power.",
        "Coolant: Transfers nuclear heat to steam turbines."
      ]
    },
    {
      heading: "7. Thermonuclear Fusion & Stellar Energy Generation",
      paragraphs: [
        "Nuclear Fusion is the process in which two or more light atomic nuclei combine to form a single heavier, more tightly bound nucleus with the release of massive energy.",
        "The Coulomb Barrier & High Temperature Requirement: Positively charged nuclei experience intense electrostatic Coulomb repulsion as they approach each other. At a separation of ~1 fm, the Coulomb potential energy barrier between two protons is U_c ≈ 400 keV. For nuclei to overcome this barrier and get within the reach of the strong nuclear force (~1 fm), they must possess high kinetic energy (K_avg = ³/₂ k_B T). This requires temperatures on the order of 10⁷ to 10⁸ Kelvin! Hence, nuclear fusion at high temperatures is called THERMONUCLEAR FUSION.",
        "Stellar Fusion in the Sun (Proton-Proton Cycle): In the core of the Sun (T ≈ 1.5 × 10⁷ K), hydrogen nuclei fuse into helium via the Proton-Proton (p-p) cycle:",
        "1. ¹₁H + ¹₁H ➔ ²₁H + e⁺ + ν_e + 0.42 MeV",
        "2. e⁺ + e⁻ ➔ 2γ + 1.02 MeV (Positron-electron annihilation)",
        "3. ²₁H + ¹₁H ➔ ³₂He + γ + 5.49 MeV",
        "4. ³₂He + ³₂He ➔ ⁴₂He + 2 ¹₁H + 12.86 MeV",
        "Net Reaction: 4 ¹₁H + 2 e⁻ ➔ ⁴₂He + 2 ν_e + 6 γ + 26.7 MeV.",
        "Every time 4 protons fuse to form one Helium-4 nucleus in the Sun, 26.7 MeV of energy is liberated!",
        "Deuterium-Tritium (D-T) Fusion in Fusion Reactors (ITER / Tokamak):",
        "²₁H + ³₁H ➔ ⁴₂He (3.5 MeV) + ¹₀n (14.1 MeV) + 17.6 MeV.",
        "At temperatures of ~10⁸ K, matter exists as an ionized PLASMA of free nuclei and electrons. Because no material container can withstand 100 million degrees, magnetic confinement in a doughnut-shaped TOKAMAK uses powerful magnetic fields to trap the plasma away from the chamber walls."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.nuclearFusion,
        caption: "Thermonuclear Fusion: Proton-Proton Cycle in the Sun and D-T Fusion in Tokamak Reactors.",
        guide: "Trace the 4 protons fusing into Helium-4 releasing 26.7 MeV in the solar core, and D-T fusion releasing 17.6 MeV inside magnetic plasma confinement."
      },
      importantPoints: [
        "Fusion requires T ~ 10⁷-10⁸ K to overcome the Coulomb electrostatic repulsion barrier.",
        "Solar net p-p reaction: 4 ¹H + 2 e⁻ ➔ ⁴He + 2 ν_e + 6 γ + 26.7 MeV.",
        "D-T Fusion: ²H + ³H ➔ ⁴He (3.5 MeV) + n (14.1 MeV) + 17.6 MeV.",
        "Specific energy in fusion (~3.5 MeV/n) is ~4 times greater than in fission (~0.85 MeV/n)!",
        "Magnetic confinement (Tokamak) holds 100-million-degree plasma using magnetic field cages."
      ]
    }
  ],

  formulae: NUCLEI_MASTER_FORMULAE.slice(7),

  visualLearning: {
    type: 'svg',
    svgContent: NUCLEI_SVGS.decayCurve,
    caption: "Master Visual Summary: Radioactive Exponential Decay Law, Half-Life, and Activity Kinetics."
  },

  neetImportantPoints: [
    "Decay Law: N(t) = N₀ e^(−λt) ; A(t) = A₀ e^(−λt) = λN.",
    "Half-Life: T₁/₂ = 0.693 / λ ; Mean-Life: τ = 1 / λ = 1.443 T₁/₂.",
    "After n half-lives (n = t / T₁/₂): N = N₀ / 2^n, Activity A = A₀ / 2^n.",
    "Alpha Decay: ᴬ_Z X ➔ ᴬ⁻⁴_{Z-2} Y + ⁴₂He ; K_α = [(A−4)/A] Q.",
    "Beta-minus Decay: ¹₀n ➔ ¹₁p + e⁻ + ν̄_e (Z increases by 1, A constant).",
    "Beta-plus Decay: ¹₁p ➔ ¹₀n + e⁺ + ν_e (Z decreases by 1, A constant).",
    "Gamma Decay: excited nucleus de-excites with zero change in Z or A.",
    "Ionizing power: α (10,000) > β (100) > γ (1). Penetrating power: γ (10,000) > β (100) > α (1).",
    "Fission: heavy nucleus splits into 2 fragments + 2-3 neutrons + ~200 MeV energy.",
    "Fusion: light nuclei combine under T ~ 10⁷-10⁸ K to form ⁴He + energy (~17.6 MeV in D-T, 26.7 MeV in Sun)."
  ],

  commonConfusions: NUCLEI_NEET_TRAPS.slice(10, 20).map(t => ({
    commonConfusion: t.misconception,
    correctFact: t.correction,
    whyItMattersForNEET: t.whyItMattersForNEET
  })),

  quickRevision: NUCLEI_RAPID_REVISION_POINTS.slice(7),

  practiceQuestions: NUCLEI_PRACTICE_MCQS.slice(10),

  pyqs: NUCLEI_VERIFIED_PYQS.slice(5)
};
