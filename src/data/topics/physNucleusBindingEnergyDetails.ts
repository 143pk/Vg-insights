import { DetailedTopicContent } from '../../types/neet';
import { NUCLEI_SVGS } from '../nuclei/nucleiDiagrams';
import { NUCLEI_IMPORTANT_TERMS, NUCLEI_COMPARISON_TABLES, NUCLEI_CONCEPTUAL_QAS, NUCLEI_RAPID_REVISION_POINTS } from '../nuclei/nucleiTermsAndConcepts';
import { NUCLEI_NUMERICALS } from '../nuclei/nucleiNumericals';
import { NUCLEI_VERIFIED_PYQS, NUCLEI_PRACTICE_MCQS } from '../nuclei/nucleiPyqs';
import { NUCLEI_NEET_TRAPS, NUCLEI_MASTER_FORMULAE, NUCLEI_CONSTANTS_CARD } from '../nuclei/nucleiTrapsAndFormulaSheet';

export const physNucleusBindingEnergyDetails: DetailedTopicContent = {
  topicId: "phys-nucleus-binding-energy",
  topicName: "Nuclear Structure, Mass Defect & Binding Energy",
  subject: "Physics",
  class: "Class 12",
  classification: "Modern Physics",
  chapter: "Nuclei",

  whatIsThisTopic: "First-principles NEET UG 2026 masterclass covering the discovery, composition, size, and constant density of atomic nuclei, classification of nuclides (isotopes, isobars, isotones), the strong nuclear force and its potential energy curve, Einstein's mass-energy equivalence (E = mc²), mass defect (Δm), nuclear binding energy, and the comprehensive analysis of the Binding Energy per Nucleon (E_bn) curve explaining nuclear stability, fusion, and fission.",

  basicIdea: [
    "Every atom contains an unimaginably dense, positively charged nucleus at its center, packing 99.9% of the atom's mass into a femtometre-scale radius (10⁻¹⁵ m). Protons and neutrons (nucleons) are held together against enormous electrostatic repulsion by the short-range strong nuclear force.",
    "When free protons and neutrons coalesce into a bound nucleus, a measurable fraction of their rest mass is converted into binding energy according to Einstein's relation E = mc² (1 u ≈ 931.5 MeV). This missing mass is called the Mass Defect (Δm).",
    "Nuclear stability is not determined by total binding energy, but strictly by Binding Energy per Nucleon (E_bn = E_b / A). The E_bn curve peaks at Iron-56 (8.75 MeV/nucleon). Nuclei lighter than Iron release energy via Nuclear Fusion to climb the curve, while heavy nuclei split via Nuclear Fission to move toward the stable peak."
  ],

  importantTerms: NUCLEI_IMPORTANT_TERMS.slice(0, 11),

  conceptExplanation: [
    {
      heading: "1. Conceptual Development & Architecture of the Nucleus",
      paragraphs: [
        "In 1911, Ernest Rutherford's alpha-scattering experiment shattered the classical Thomson 'plum pudding' model by proving that the entire positive charge and over 99.95% of an atom's mass reside in an ultra-compact central volume called the NUCLEUS.",
        "The conceptual chain of nuclear physics moves logically from the atom to nuclear energy: Atom ➔ Nucleus ➔ Nucleons (Protons + Neutrons) ➔ Nuclear Size & Mass ➔ Mass Defect ➔ Binding Energy ➔ Stability Curve ➔ Fission & Fusion.",
        "A typical atom has a radius of R_atom ≈ 10⁻¹⁰ m (1 Å), while a nucleus has a radius of R_nucleus ≈ 10⁻¹⁵ m (1 fm). The atom is approximately 100,000 times larger in diameter than its nucleus, meaning the nucleus occupies only about 10⁻¹⁵ (one quadrillionth) of the atom's total volume! Despite this tiny volume, almost all mass is concentrated inside it."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.conceptFlow,
        caption: "Conceptual Evolution of Nuclear Physics from Atomic Structure to Nuclear Energetics.",
        guide: "Observe the uninterrupted chain from atomic structure to nuclear forces, mass defect, binding energy curve, and nuclear reactions."
      },
      importantPoints: [
        "Atomic radius ≈ 10⁻¹⁰ m (1 Å); Nuclear radius ≈ 10⁻¹⁵ m (1 fm = 1 Fermi).",
        "Volume ratio: V_atom / V_nucleus ≈ (10⁻¹⁰ / 10⁻¹⁵)³ = 10¹⁵.",
        "Total mass number A = Z (protons) + N (neutrons)."
      ]
    },
    {
      heading: "2. Nuclear Composition & Discovery of the Neutron",
      paragraphs: [
        "A nucleus is composed of two types of fundamental subatomic particles collectively called NUCLEONS: (1) Protons (discovered by Rutherford, charge +e = +1.602 × 10⁻¹⁹ C, rest mass m_p = 1.007276 u = 1.6726 × 10⁻²⁷ kg), and (2) Neutrons (discovered by James Chadwick in 1932, charge = 0, rest mass m_n = 1.008665 u = 1.6749 × 10⁻²⁷ kg).",
        "Chadwick's Discovery of the Neutron (1932): When a beryllium target was bombarded with alpha particles from a polonium source, highly penetrating neutral radiation was emitted: ⁴₂He + ⁹₄Be ➔ ¹²₆C + ¹₀n. Chadwick proved by momentum and energy conservation that this radiation consisted of neutral particles with mass nearly equal to that of a proton.",
        "A specific nuclear species (nuclide) is represented symbolically as ᴬ_Z X, where X is the chemical symbol, Z is the atomic number (number of protons = number of orbital electrons in neutral atom), and A is the mass number (total integer count of nucleons). The neutron number is N = A − Z."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.nucleusStructure,
        caption: "Internal Composition of the Nucleus: Protons (+e) and Neutrons (0) Bound by Strong Nuclear Force.",
        guide: "Observe that protons repel each other electrostatically (+ +), but all nucleons attract via the short-range strong nuclear force."
      },
      importantPoints: [
        "Neutron is slightly heavier than proton: m_n (1.008665 u) > m_p (1.007276 u).",
        "Free isolated neutron is unstable: decays via beta decay (¹₀n ➔ ¹₁p + e⁻ + ν̄_e) with a half-life of ~14 minutes (881.5 s).",
        "Inside a stable nucleus, neutrons are completely stable due to nuclear binding."
      ]
    },
    {
      heading: "3. Classification of Nuclides: Isotopes, Isobars, and Isotones",
      paragraphs: [
        "1. Isotopes: Nuclides having the SAME atomic number Z (same number of protons) but DIFFERENT mass numbers A (different numbers of neutrons). Because Z determines orbital electron configuration, isotopes possess IDENTICAL chemical properties and occupy the exact same slot in the periodic table. Examples: Hydrogen isotopes (¹₁H Protium, ²₁H Deuterium, ³₁H Tritium), Carbon isotopes (¹²₆C, ¹⁴₆C), Uranium isotopes (²³⁵₉₂U, ²³⁸₉₂U).",
        "2. Isobars: Nuclides having the SAME mass number A (same total nucleons) but DIFFERENT atomic numbers Z (different proton and neutron counts). They are different chemical elements with different chemical properties. Examples: ⁴⁰₁₈Ar, ⁴⁰₁₉K, ⁴⁰₂₀Ca (all A = 40); ³₁H and ³₂He (both A = 3).",
        "3. Isotones: Nuclides having the SAME neutron number N = A − Z, but different Z and different A. Examples: ¹⁴₆C (N = 14−6 = 8), ¹⁵₇N (N = 15−7 = 8), and ¹⁶₈O (N = 16−8 = 8).",
        "4. Isomers (Nuclear Isomers): Nuclides with the same Z and same A, but existing in different internal nuclear energy states and having different half-lives (e.g., Technetium-99m and Technetium-99)."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.nuclideClassification,
        caption: "Nuclide Classification: Comparison of Isotopes (same Z), Isobars (same A), and Isotones (same N).",
        guide: "Check the colour-coded nucleon representations: Isotopes share proton count, Isobars share total nucleon count, Isotones share neutron count."
      },
      importantPoints: [
        "Isotopes: Same Z, different A, identical chemical reactivity.",
        "Isobars: Same A, different Z, completely different elements.",
        "Isotones: Same N = A − Z, different Z and A."
      ]
    },
    {
      heading: "4. Nuclear Size, Volume, and Constant Nuclear Density",
      paragraphs: [
        "Through high-energy electron scattering and fast neutron scattering experiments, the effective nuclear radius R has been proven to follow an exact empirical power-law relation with mass number A: R = R₀ A^(1/3), where R₀ is a constant with an experimental value of R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm (ranging between 1.1 fm and 1.4 fm in various contexts).",
        "First-Principles Derivation of Constant Nuclear Density: Nuclear volume assuming spherical symmetry is V = ⁴/₃ π R³ = ⁴/₃ π (R₀ A^(1/3))³ = ⁴/₃ π R₀³ A. Therefore, Nuclear Volume is DIRECTLY PROPORTIONAL to mass number A (V ∝ A).",
        "The mass of a nucleus containing A nucleons is M_nucleus ≈ A · m_N (where m_N ≈ 1.66 × 10⁻²⁷ kg is the average mass of a nucleon). The nuclear density ρ is given by: ρ = Mass / Volume = (A · m_N) / [ ⁴/₃ π R₀³ A ] = m_N / [ ⁴/₃ π R₀³ ].",
        "Remarkable Physical Insight: The mass number A cancels out completely from the numerator and denominator! Nuclear density is entirely INDEPENDENT of mass number A. All nuclei, from tiny Helium (A=4) to massive Uranium (A=238), have the exact same density of approximately ρ ≈ 2.3 × 10¹⁷ kg/m³ (230 trillion kg per cubic meter). A single teaspoon (~5 cm³) of nuclear matter would weigh over 1 billion tonnes on Earth!"
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.nuclearRadiusScaling,
        caption: "Nuclear Radius vs Mass Number (R ∝ A^(1/3)) and Constancy of Nuclear Density (ρ = constant).",
        guide: "Left plot demonstrates the cube root scaling of radius R with A; right panel shows that density ρ remains constant at 2.3 × 10¹⁷ kg/m³ across all nuclides."
      },
      importantPoints: [
        "Radius formula: R = R₀ A^(1/3) with R₀ ≈ 1.2 fm.",
        "Volume formula: V ∝ A (Volume doubles if A doubles).",
        "Density formula: ρ ≈ 2.3 × 10¹⁷ kg/m³ = CONSTANT for all nuclei.",
        "NEET Ratio Shortcut: R₁ / R₂ = (A₁ / A₂)^(1/3) and ρ₁ / ρ₂ = 1 : 1."
      ]
    },
    {
      heading: "5. Strong Nuclear Force & Nuclear Potential Energy Curve",
      paragraphs: [
        "Why don't the positively charged protons inside a nucleus fly apart under intense electrostatic Coulomb repulsion? At a distance of ~1 fm, the electrostatic repulsive force between two protons is F_e = (1/4πε₀) e²/r² ≈ (9 × 10⁹)(1.6 × 10⁻¹⁹)² / (10⁻¹⁵)² ≈ 230 Newtons — an immense force for a microscopic particle! The nucleus is held together by the STRONG NUCLEAR FORCE, the most powerful fundamental force in the universe.",
        "Four Fundamental Properties of the Strong Nuclear Force:",
        "1. Short-Range: It is effective only over distances of 1 to 3 fm (10⁻¹⁵ m). Beyond ~3 fm, it drops rapidly to zero.",
        "2. Strongest Force in Nature: Within its range, it is approximately 100 times stronger than the electrostatic Coulomb force and 10³⁸ times stronger than gravitational force.",
        "3. Charge Independent: The nuclear attractive force between two protons (F_pp), two neutrons (F_nn), and a proton and a neutron (F_pn) is virtually identical: F_pp ≈ F_nn ≈ F_pn.",
        "4. Non-Central & Saturating: A nucleon interacts only with its immediate nearest neighbors (saturation), unlike long-range 1/r² Coulomb forces where every charge interacts with all other charges in the volume.",
        "Nuclear Potential Energy Well U(r) vs Separation r:",
        "For r > r₀ ≈ 0.8 fm: Potential energy U(r) is negative, representing strong attractive force (F = −dU/dr). The potential reaches a deep minimum at r₀ ≈ 0.8 fm (equilibrium separation) with a potential depth of ~−100 MeV.",
        "For r < 0.8 fm: Potential energy shoots up steeply to positive values (extremely steep positive slope), indicating a POWERFUL REPULSIVE CORE. This repulsive core prevents nucleons from collapsing into one another, giving the nucleus a definite finite volume and incompressible density."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.nuclearForce,
        caption: "Nuclear Potential Energy U(r) vs Nucleon Separation Distance r.",
        guide: "Note the repulsive core at r < 0.8 fm (positive U), the potential energy minimum at r₀ ≈ 0.8 fm (~−100 MeV), and the short-range attractive region dying out by r > 3 fm."
      },
      importantPoints: [
        "Equilibrium separation r₀ ≈ 0.8 fm (where attractive force balances repulsive core, potential is minimum).",
        "For r > 0.8 fm: Force is ATTRACTIVE.",
        "For r < 0.8 fm: Force is STRONGLY REPULSIVE.",
        "Strong nuclear force is charge-independent and exhibits saturation."
      ]
    },
    {
      heading: "6. Mass-Energy Equivalence, Mass Defect (Δm) & Binding Energy",
      paragraphs: [
        "In 1905, Albert Einstein established the equivalence of mass and energy through Special Relativity: E = mc², where m is the relativistic/rest mass and c = 3.0 × 10⁸ m/s is the speed of light in vacuum.",
        "Atomic Mass Unit (u) Energy Equivalent: 1 u = 1.660539 × 10⁻²⁷ kg. Applying E = mc²: E = (1.660539 × 10⁻²⁷ kg) × (2.99792458 × 10⁸ m/s)² = 1.492418 × 10⁻¹⁰ Joules. Converting to MeV (1 eV = 1.602176 × 10⁻¹⁹ J): E = (1.492418 × 10⁻¹⁰ J) / (1.602176 × 10⁻¹³ J/MeV) = 931.494 MeV ≈ 931.5 MeV. Thus, 1 atomic mass unit is equivalent to 931.5 MeV of energy: 1 u c² = 931.5 MeV.",
        "Mass Defect (Δm): Precise mass spectrometry reveals a startling fact: the actual measured rest mass of any bound nucleus M_nucleus is ALWAYS LESS than the sum of the rest masses of its individual separated constituent protons and neutrons! The difference is called the MASS DEFECT (Δm):",
        "Δm = [ Z · m_p + (A − Z) · m_n ] − M_nucleus",
        "Why does mass vanish? When free nucleons coalesce into a bound nucleus, they fall into the deep nuclear potential well, releasing potential energy. By E = mc², this released energy corresponds to lost mass. Conversely, to separate a nucleus into free constituent nucleons, an equal amount of energy must be supplied from outside. This energy is the NUCLEAR BINDING ENERGY (E_b):",
        "E_b = Δm · c² = [ Z · m_p + (A − Z) · m_n − M_nucleus ] · c²",
        "In terms of atomic masses: When problems supply neutral atomic masses M_atom and hydrogen atom mass m(¹H), we use: Δm = [ Z · m(¹H) + (A − Z) · m_n ] − M_atom, because the Z electron masses cancel out exactly."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.massDefect,
        caption: "Concept of Mass Defect (Δm) and Conversion into Nuclear Binding Energy (E_b = Δm · c²).",
        guide: "Free separate nucleons on the left have higher total mass than the assembled bound nucleus on the right; the mass difference Δm is radiated as Binding Energy."
      },
      importantPoints: [
        "1 u = 1.660539 × 10⁻²⁷ kg corresponds to 931.5 MeV.",
        "E_b (in MeV) = Δm (in u) × 931.5 MeV.",
        "Mass of bound nucleus < Sum of individual free nucleon masses.",
        "If atomic masses are given, use m(¹H) instead of m_p; electron masses cancel."
      ]
    },
    {
      heading: "7. Binding Energy per Nucleon (E_bn) Curve & Nuclear Stability",
      paragraphs: [
        "Does a larger total binding energy mean a nucleus is more stable? NO! A Uranium-238 nucleus has a total binding energy of ~1800 MeV, while Iron-56 has ~492 MeV. Yet Iron-56 is vastly more stable than Uranium! The true measure of nuclear stability is the BINDING ENERGY PER NUCLEON (E_bn), defined as: E_bn = Total Binding Energy / Mass Number = E_b / A.",
        "Detailed Features of the NCERT Binding Energy per Nucleon Curve:",
        "1. Intermediate Mass Flat Plateau (30 ≤ A ≤ 170): For mass numbers between 30 and 170, the curve is remarkably flat with E_bn ≈ 8.5 MeV/nucleon. This constancy is a direct consequence of the SATURATION of the short-range strong nuclear force: each nucleon inside a medium/large nucleus is surrounded by a fixed number of neighbors and only interacts with them.",
        "2. Maximum Stability Peak (A = 56): The curve reaches its absolute maximum at Iron-56 (⁵⁶₂₆Fe) with E_bn ≈ 8.75 MeV/nucleon (and Nickel-62 with 8.79 MeV/n). ⁵⁶Fe is the most tightly bound and stable nuclide in the universe.",
        "3. Low Mass Region (A < 30): E_bn is very low for light nuclei (e.g., Deuteron ²₁H has E_bn = 1.11 MeV/nucleon). There are sharp local peaks at ⁴₂He (7.07 MeV/n), ¹²₆C (7.68 MeV/n), and ¹⁶₈O (7.98 MeV/n), indicating extraordinary stability of even-even (magic number) alpha-cluster nuclei compared to their neighbors (e.g., ⁶Li, ¹⁰B, ¹⁴N).",
        "4. Heavy Mass Region (A > 170): E_bn drops steadily from ~8.5 MeV/n down to ~7.6 MeV/n for Uranium-238 (²³⁸U). This drop occurs because electrostatic Coulomb repulsion between protons is long-range (acts across the entire nuclear diameter) and grows as Z(Z−1) ∝ Z², overpowering the short-range saturated strong nuclear force."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.bePerNucleonCurve,
        caption: "Standard NCERT Binding Energy per Nucleon (E_bn = E_b / A) vs Mass Number A Curve.",
        guide: "Key landmarks: Fusion zone for light nuclei (A < 30) climbing toward ⁴He and ⁵⁶Fe; Plateau region (30 ≤ A ≤ 170) at ~8.5 MeV/n; Peak at ⁵⁶Fe (8.75 MeV/n); Fission zone for heavy nuclei (A > 200) splitting into medium fragments."
      },
      importantPoints: [
        "E_bn = E_b / A is the sole quantitative indicator of nuclear stability.",
        "Peak of curve: ⁵⁶₂₆Fe with E_bn = 8.75 MeV / nucleon.",
        "Constant plateau: 30 ≤ A ≤ 170 with E_bn ≈ 8.5 MeV/n due to nuclear force saturation.",
        "Local peaks at A = 4, 8, 12, 16 (⁴He, ⁸Be, ¹²C, ¹⁶O) represent tightly bound α-particle clusters."
      ]
    },
    {
      heading: "8. Physical Origins of Nuclear Fusion and Nuclear Fission from E_bn",
      paragraphs: [
        "The shape of the Binding Energy per Nucleon curve provides the ultimate thermodynamic justification for why both Nuclear Fusion and Nuclear Fission release colossal amounts of energy:",
        "1. Nuclear Fusion (Light Nuclei, A < 30): When two very light nuclei (such as Deuterium ²H with E_bn = 1.11 MeV/n and Tritium ³H with E_bn = 2.83 MeV/n) combine to form a heavier nucleus like Helium (⁴He with E_bn = 7.07 MeV/n), the binding energy per nucleon jumps dramatically by ΔE_bn ≈ 6 MeV/nucleon. Because the nucleons become much more tightly bound, the product has less total rest mass, releasing enormous energy (17.6 MeV per D-T reaction event).",
        "2. Nuclear Fission (Heavy Nuclei, A > 200): When a heavy, unstable nucleus (such as ²³⁵₉₂U with E_bn ≈ 7.6 MeV/n) splits into two intermediate-mass daughter nuclei (A ≈ 100 to 140 with E_bn ≈ 8.5 MeV/n), the binding energy per nucleon increases by ΔE_bn ≈ 8.5 − 7.6 = 0.9 MeV/nucleon. Multiplying by 235 nucleons gives the total energy released: Q ≈ 235 × 0.9 MeV ≈ 200 MeV per fission event!",
        "Universal Rule for Nuclear Reactions: Energy is released (reaction is exoergic) whenever the total binding energy of the reaction products is GREATER than the total binding energy of the reactants: Q = Σ E_b(products) − Σ E_b(reactants) > 0."
      ],
      visual: {
        type: 'svg',
        svgContent: NUCLEI_SVGS.nuclearFission,
        caption: "Mechanisms of Energy Release in Fission and Fusion Explained by the Binding Energy Curve.",
        guide: "Both fusion (moving left to right) and fission (moving right to left) progress TOWARD the high-stability iron plateau, resulting in positive Q-values."
      },
      importantPoints: [
        "Fusion: Light nuclei combine ➔ E_bn increases ➔ Energy released (~17.6 MeV per event, ~3.5 MeV/nucleon).",
        "Fission: Heavy nucleus splits ➔ E_bn increases from 7.6 to 8.5 MeV/n ➔ Energy released (~200 MeV per event, ~0.85 MeV/nucleon).",
        "Specific energy (energy per unit mass) is ~4 times greater in fusion than in fission!"
      ]
    }
  ],

  formulae: NUCLEI_MASTER_FORMULAE.slice(0, 7),

  visualLearning: {
    type: 'svg',
    svgContent: NUCLEI_SVGS.bePerNucleonCurve,
    caption: "Master Visual Summary: The Binding Energy per Nucleon Curve governing Nuclear Stability, Fusion, and Fission."
  },

  neetImportantPoints: [
    "Nuclear density ρ ≈ 2.3 × 10¹⁷ kg/m³ is CONSTANT for all nuclei, independent of mass number A.",
    "Nuclear radius scales as R = R₀ A^(1/3) with R₀ ≈ 1.2 fm.",
    "Binding Energy per Nucleon E_bn = E_b / A determines stability; peak is at ⁵⁶₂₆Fe (8.75 MeV/n).",
    "1 atomic mass unit (1 u) = 1.660539 × 10⁻²⁷ kg = 931.5 MeV/c².",
    "Mass defect Δm = [Z·m_p + (A−Z)·m_n] − M_nucleus. E_b (MeV) = Δm (in u) × 931.5 MeV.",
    "Strong nuclear force is charge-independent (F_pp ≈ F_nn ≈ F_pn), short-range (1-3 fm), and saturating.",
    "Potential energy is minimum at r₀ ≈ 0.8 fm; repulsive core for r < 0.8 fm prevents nuclear collapse.",
    "In nuclear reactions: Q = [Σ m_reactants − Σ m_products] c² = [Σ E_b(products) − Σ E_b(reactants)]."
  ],

  commonConfusions: NUCLEI_NEET_TRAPS.slice(0, 10).map(t => ({
    commonConfusion: t.misconception,
    correctFact: t.correction,
    whyItMattersForNEET: t.whyItMattersForNEET
  })),

  quickRevision: NUCLEI_RAPID_REVISION_POINTS.slice(0, 7),

  practiceQuestions: NUCLEI_PRACTICE_MCQS.slice(0, 10),

  pyqs: NUCLEI_VERIFIED_PYQS.slice(0, 5)
};
