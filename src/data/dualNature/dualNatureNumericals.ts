// 15 Comprehensive Original Worked Numerical Problems with all 9-step Solution Structures for Dual Nature of Radiation and Matter

export interface DualNatureWorkedExample {
  id: string;
  topicCategory: string;
  problem: string;
  given: string;
  required: string;
  concept: string;
  formula: string;
  unitConversion: string;
  substitution: string;
  calculation: string;
  finalAnswer: string;
  neetShortcut: string;
}

export const DUAL_NATURE_WORKED_EXAMPLES: DualNatureWorkedExample[] = [
  // 1. Photon Energy and Frequency
  {
    id: "num-1",
    topicCategory: "Photon Energy & Wavelength",
    problem: "Calculate the energy in electron-volts (eV) and the momentum of a single photon of yellow light having a wavelength of 6000 Å in vacuum.",
    given: "Wavelength λ = 6000 Å = 6000 × 10⁻¹⁰ m = 600 nm; Planck's constant h = 6.626 × 10⁻³⁴ J·s; Speed of light c = 3 × 10⁸ m/s; 1 eV = 1.6 × 10⁻¹⁹ J.",
    required: "1. Photon energy E in eV\n2. Photon momentum p in kg·m/s.",
    concept: "Photon energy is given by Planck's quantum relation E = hc/λ. Photon momentum is p = h/λ = E/c.",
    formula: "E = hc / λ  and  p = h / λ",
    unitConversion: "λ = 6000 Å = 6 × 10⁻⁷ m",
    substitution: "Using shortcut hc ≈ 12400 eV·Å:\nE = 12400 / 6000 eV\np = (6.626 × 10⁻³⁴) / (6 × 10⁻⁷)",
    calculation: "1. E = 12400 / 6000 = 2.067 eV ≈ 2.07 eV\nIn Joules: E = 2.067 × 1.6 × 10⁻¹⁹ = 3.31 × 10⁻¹⁹ J\n2. p = 6.626 × 10⁻³⁴ / 6 × 10⁻⁷ = 1.104 × 10⁻²⁷ kg·m/s",
    finalAnswer: "Energy E = 2.07 eV (or 3.31 × 10⁻¹⁹ J); Momentum p = 1.104 × 10⁻²⁷ kg·m/s",
    neetShortcut: "Always use E(in eV) = 12400 / λ(in Å) or 1240 / λ(in nm). For 6000 Å: E = 12400 / 6000 = 2.07 eV directly in 5 seconds!"
  },

  // 2. Photon Flux from a Light Source
  {
    id: "num-2",
    topicCategory: "Photon Flux & Power",
    problem: "A monochromatic sodium lamp emits yellow light of wavelength 589 nm with an electric power output of 100 W. Assuming 60% of electric energy is converted into light, calculate the number of photons emitted per second by the lamp.",
    given: "Total electrical power P_total = 100 W; Efficiency η = 60% = 0.60; Light wavelength λ = 589 nm = 5.89 × 10⁻⁷ m; h = 6.626 × 10⁻³⁴ J·s; c = 3 × 10⁸ m/s.",
    required: "Number of photons emitted per second (n = N/t).",
    concept: "Optical power is related to photon emission rate by P_opt = n × E_photon = n × (hc/λ).",
    formula: "P_opt = η × P_total; n = P_opt / (hc/λ) = (P_opt × λ) / (hc)",
    unitConversion: "P_opt = 0.60 × 100 W = 60 W (J/s); λ = 5.89 × 10⁻⁷ m",
    substitution: "n = (60 × 5.89 × 10⁻⁷) / (6.626 × 10⁻³⁴ × 3 × 10⁸)",
    calculation: "Numerator = 3.534 × 10⁻⁵\nDenominator = 1.9878 × 10⁻²⁵\nn = (3.534 × 10⁻⁵) / (1.9878 × 10⁻²⁵) = 1.778 × 10²⁰ photons/sec",
    finalAnswer: "Photon emission rate n = 1.78 × 10²⁰ photons per second",
    neetShortcut: "Photon rate n = (P_optical in W) / (Energy per photon in J) = P / (2.0 × 10⁻²⁵ / λ) ≈ 5 × 10¹⁸ × P(W) × λ(μm)."
  },

  // 3. Work Function and Threshold Wavelength
  {
    id: "num-3",
    topicCategory: "Work Function & Threshold Conditions",
    problem: "The threshold wavelength for photoelectric emission in a certain metal is 5000 Å. Find: (a) the work function of the metal in eV, and (b) whether light of wavelength 6000 Å will cause photoelectric emission.",
    given: "Threshold wavelength λ₀ = 5000 Å; Test wavelength λ = 6000 Å; hc ≈ 12400 eV·Å.",
    required: "(a) Work function φ₀ in eV\n(b) Photoelectric emission feasibility for λ = 6000 Å.",
    concept: "Work function φ₀ = hc/λ₀. Photoelectric emission occurs only if incident wavelength λ ≤ λ₀ (or frequency ν ≥ ν₀).",
    formula: "φ₀(eV) = 12400 / λ₀(Å)",
    unitConversion: "λ₀ = 5000 Å",
    substitution: "φ₀ = 12400 / 5000 eV",
    calculation: "(a) φ₀ = 12400 / 5000 = 2.48 eV\n(b) Incident wavelength λ = 6000 Å > λ₀ (5000 Å). Thus, incident photon energy E = 12400/6000 = 2.07 eV < φ₀ (2.48 eV).",
    finalAnswer: "(a) Work function φ₀ = 2.48 eV\n(b) NO photoelectric emission will occur because λ > λ₀ (energy of photon 2.07 eV is less than work function 2.48 eV).",
    neetShortcut: "For emission, condition is λ ≤ λ₀. Since 6000 Å > 5000 Å, answer is immediately NO without calculating."
  },

  // 4. Maximum Kinetic Energy and Stopping Potential
  {
    id: "num-4",
    topicCategory: "Einstein's Equation & Stopping Potential",
    problem: "Monochromatic light of wavelength 310 nm falls on a photosensitive caesium surface having a work function of 2.14 eV. Calculate: (a) the maximum kinetic energy of the ejected photoelectrons in eV and in Joules, and (b) the stopping potential required to cut off the photocurrent.",
    given: "Incident wavelength λ = 310 nm; Work function φ₀ = 2.14 eV; hc ≈ 1240 eV·nm; e = 1.6 × 10⁻¹⁹ C.",
    required: "(a) K_max in eV and Joules\n(b) Stopping potential V₀ in Volts.",
    concept: "Einstein's photoelectric equation: K_max = hν - φ₀ = hc/λ - φ₀. The stopping potential is directly related by K_max = e V₀.",
    formula: "E = 1240 / λ(nm); K_max = E - φ₀; V₀ = K_max(eV) / 1 e",
    unitConversion: "λ = 310 nm",
    substitution: "E = 1240 / 310 = 4.00 eV\nK_max = 4.00 eV - 2.14 eV\nV₀ = K_max / e",
    calculation: "(a) K_max = 4.00 - 2.14 = 1.86 eV\nIn Joules: K_max = 1.86 × 1.6 × 10⁻¹⁹ J = 2.976 × 10⁻¹⁹ J\n(b) Since K_max = 1.86 eV, the stopping potential V₀ = 1.86 Volts.",
    finalAnswer: "(a) Maximum Kinetic Energy K_max = 1.86 eV = 2.98 × 10⁻¹⁹ J\n(b) Stopping Potential V₀ = 1.86 V",
    neetShortcut: "Numerical magnitude of stopping potential in Volts is ALWAYS numerically identical to K_max in electron-volts (eV). If K_max = 1.86 eV ⟹ V₀ = 1.86 V instantly!"
  },

  // 5. Maximum Speed of Photoelectrons
  {
    id: "num-5",
    topicCategory: "Photoelectron Velocity",
    problem: "Light of frequency 8 × 10¹⁴ Hz is incident on a metal surface of work function 2.0 eV. Find the maximum velocity with which photoelectrons are ejected. (Given: mass of electron m = 9.1 × 10⁻³¹ kg, h = 6.63 × 10⁻³⁴ J·s).",
    given: "Frequency ν = 8 × 10¹⁴ Hz; Work function φ₀ = 2.0 eV = 2.0 × 1.6 × 10⁻¹⁹ J = 3.2 × 10⁻¹⁹ J; m = 9.1 × 10⁻³¹ kg.",
    required: "Maximum velocity v_max of photoelectrons in m/s.",
    concept: "Einstein's equation yields K_max = hν - φ₀. Since K_max = ½ m v_max², v_max = √(2 K_max / m).",
    formula: "K_max = hν - φ₀; v_max = √(2 K_max / m)",
    unitConversion: "hν = 6.63 × 10⁻³⁴ × 8 × 10¹⁴ = 5.304 × 10⁻¹⁹ J; φ₀ = 3.2 × 10⁻¹⁹ J",
    substitution: "K_max = 5.304 × 10⁻¹⁹ - 3.200 × 10⁻¹⁹ = 2.104 × 10⁻¹⁹ J\nv_max = √[ (2 × 2.104 × 10⁻¹⁹) / (9.1 × 10⁻³¹) ]",
    calculation: "v_max² = 4.208 × 10⁻¹⁹ / 9.1 × 10⁻³¹ = 0.4624 × 10¹² = 4.624 × 10¹¹ m²/s² = 46.24 × 10¹⁰ m²/s²\nv_max = √(46.24 × 10¹⁰) = 6.80 × 10⁵ m/s",
    finalAnswer: "Maximum velocity v_max = 6.80 × 10⁵ m/s (or 680 km/s)",
    neetShortcut: "For speed calculations, ensure K_max is converted to Joules BEFORE dividing by mass in kg."
  },

  // 6. Frequency Doubling Ratio Problem
  {
    id: "num-6",
    topicCategory: "Ratio & Frequency Variation",
    problem: "When light of frequency ν is incident on a metal plate, the stopping potential is V₁. When light of frequency 2.5ν is incident on the same metal plate, the stopping potential becomes 3V₁. Find the threshold frequency ν₀ of the metal in terms of ν.",
    given: "Case 1: Incident frequency = ν, Stopping potential = V₁\nCase 2: Incident frequency = 2.5ν, Stopping potential = 3V₁.",
    required: "Threshold frequency ν₀ in terms of ν.",
    concept: "Einstein's stopping potential equation: e V₀ = hν - hν₀ = h(ν - ν₀).",
    formula: "eV₁ = h(ν - ν₀)  --- (1)\ne(3V₁) = h(2.5ν - ν₀)  --- (2)",
    unitConversion: "Equations are in consistent algebraic units.",
    substitution: "Divide equation (2) by equation (1):\n3 = (2.5ν - ν₀) / (ν - ν₀)",
    calculation: "3(ν - ν₀) = 2.5ν - ν₀\n3ν - 3ν₀ = 2.5ν - ν₀\n3ν - 2.5ν = 3ν₀ - ν₀\n0.5ν = 2ν₀\nν₀ = 0.5ν / 2 = 0.25ν = ν / 4",
    finalAnswer: "Threshold frequency ν₀ = ν / 4 = 0.25 ν",
    neetShortcut: "Equate ratio of stopping potentials: V₂/V₁ = (ν₂ - ν₀)/(ν₁ - ν₀). Substitute values and cross-multiply in two lines!"
  },

  // 7. Slope and Work Function from Graph
  {
    id: "num-7",
    topicCategory: "Graphical Analysis & Slope",
    problem: "In a photoelectric experiment, a graph of stopping potential V₀ versus incident frequency ν is plotted. The graph is a straight line cutting the frequency axis at ν = 5 × 10¹⁴ Hz and having a slope of 4.14 × 10⁻¹⁵ V·s. Determine: (a) Planck's constant in SI units, and (b) the work function of the metal in eV.",
    given: "Threshold frequency (x-intercept) ν₀ = 5 × 10¹⁴ Hz; Slope m = 4.14 × 10⁻¹⁵ V·s; Elementary charge e = 1.6 × 10⁻¹⁹ C.",
    required: "(a) Planck's constant h\n(b) Work function φ₀ in eV.",
    concept: "From V₀ = (h/e)ν - (φ₀/e), Slope = h/e ⟹ h = e × Slope. Threshold frequency is the x-intercept where V₀ = 0.",
    formula: "h = e × Slope; φ₀ = hν₀ (or φ₀ in eV = (Slope × ν₀))",
    unitConversion: "Slope in V·s, e in Coulombs.",
    substitution: "h = 1.6 × 10⁻¹⁹ C × 4.14 × 10⁻¹⁵ V·s\nφ₀(in eV) = (h/e) × ν₀ = (4.14 × 10⁻¹⁵) × (5 × 10¹⁴)",
    calculation: "(a) h = 6.624 × 10⁻³⁴ J·s\n(b) φ₀(eV) = 4.14 × 10⁻¹⁵ × 5 × 10¹⁴ = 2.07 eV",
    finalAnswer: "(a) Planck's constant h = 6.624 × 10⁻³⁴ J·s\n(b) Work function φ₀ = 2.07 eV",
    neetShortcut: "Slope is h/e = 4.14 × 10⁻¹⁵ eV·s/Hz. Simply multiply slope by ν₀ directly to get work function in eV: 4.14 × 10⁻¹⁵ × 5 × 10¹⁴ = 2.07 eV!"
  },

  // 8. de Broglie Wavelength of Electron Accelerated by V
  {
    id: "num-8",
    topicCategory: "de Broglie Wavelength of Accelerated Electron",
    problem: "An electron is accelerated from rest through a potential difference of 100 Volts. Calculate its: (a) kinetic energy in eV and Joules, (b) de Broglie wavelength in Ångströms and nanometers, and (c) momentum.",
    given: "Accelerating potential V = 100 V; Electron mass m_e = 9.11 × 10⁻³¹ kg; e = 1.6 × 10⁻¹⁹ C; h = 6.63 × 10⁻³⁴ J·s.",
    required: "(a) Kinetic energy K\n(b) de Broglie wavelength λ_e\n(c) Momentum p.",
    concept: "An electron accelerated through potential difference V acquires kinetic energy K = eV. Its de Broglie wavelength is λ = h/√(2m_e eV) = 12.27/√V Å.",
    formula: "K = eV; λ = 12.27 / √V  Å; p = h / λ",
    unitConversion: "V = 100 V ⟹ √V = 10",
    substitution: "λ = 12.27 / √100 = 12.27 / 10 Å",
    calculation: "(a) K = 100 eV = 100 × 1.6 × 10⁻¹⁹ J = 1.6 × 10⁻¹⁷ J\n(b) λ = 1.227 Å = 0.1227 nm = 1.227 × 10⁻¹⁰ m\n(c) p = h / λ = 6.63 × 10⁻³⁴ / (1.227 × 10⁻¹⁰) = 5.40 × 10⁻²⁴ kg·m/s",
    finalAnswer: "(a) K = 100 eV (1.60 × 10⁻¹⁷ J)\n(b) λ_e = 1.227 Å (0.1227 nm)\n(c) Momentum p = 5.40 × 10⁻²⁴ kg·m/s",
    neetShortcut: "Golden formula for electron: λ = 12.27 / √V Å. For V = 100 V, λ = 12.27 / 10 = 1.227 Å. Instantaneous!"
  },

  // 9. Comparison of de Broglie Wavelengths (Proton vs Alpha Particle)
  {
    id: "num-9",
    topicCategory: "Particle Comparison Ratios",
    problem: "A proton and an alpha particle are accelerated through the same potential difference V. Find the ratio of their de Broglie wavelengths (λ_p / λ_α). (Take mass of alpha particle m_α = 4 m_p, charge of alpha particle q_α = 2 q_p).",
    given: "Potential difference V_p = V_α = V; m_α = 4 m_p; q_p = e; q_α = 2e.",
    required: "Ratio of wavelengths λ_p / λ_α.",
    concept: "de Broglie wavelength for a charged particle accelerated through potential V is λ = h / √(2mqV).",
    formula: "λ ∝ 1 / √(m q)  (since h and V are constant)",
    unitConversion: "m_α / m_p = 4; q_α / q_p = 2",
    substitution: "λ_p / λ_α = √[ (m_α × q_α) / (m_p × q_p) ]",
    calculation: "λ_p / λ_α = √[ (4 m_p × 2 q_p) / (m_p × q_p) ] = √(4 × 2) = √8 = 2√2 ≈ 2.828",
    finalAnswer: "Ratio λ_p / λ_α = 2√2 : 1 ≈ 2.83 : 1",
    neetShortcut: "Memorize: For SAME ACCELERATING POTENTIAL V:\nλ_e : λ_p : λ_d : λ_α = 1 : √(m_p/m_e) : ...\nSpecifically, λ_p / λ_α = √(m_α q_α / m_p q_p) = √(4 × 2) = 2√2."
  },

  // 10. Thermal Neutron de Broglie Wavelength
  {
    id: "num-10",
    topicCategory: "Thermal Neutrons & Temperature",
    problem: "Find the de Broglie wavelength of a thermal neutron in thermal equilibrium with matter at a temperature of 27 °C. (Given: mass of neutron m_n = 1.67 × 10⁻²⁷ kg, Boltzmann constant k = 1.38 × 10⁻²³ J/K, h = 6.63 × 10⁻³⁴ J·s).",
    given: "Temperature T = 27 °C = 27 + 273 = 300 K; m_n = 1.67 × 10⁻²⁷ kg; k = 1.38 × 10⁻²³ J/K; h = 6.63 × 10⁻³⁴ J·s.",
    required: "de Broglie wavelength λ of the thermal neutron in Ångströms.",
    concept: "Average kinetic energy of a gas particle at absolute temperature T is K = (3/2) kT. Thus, λ = h / √(2mK) = h / √(3mkT).",
    formula: "λ = h / √(3 m_n k T)",
    unitConversion: "T = 300 K (MUST use Kelvin, never Celsius!)",
    substitution: "λ = 6.63 × 10⁻³⁴ / √[ 3 × (1.67 × 10⁻²⁷) × (1.38 × 10⁻²³) × 300 ]",
    calculation: "Denominator term: 3 × 1.67 × 1.38 × 300 × 10⁻⁵⁰ = 2074.14 × 10⁻⁵⁰\n√2074.14 × 10⁻⁵⁰ = 45.54 × 10⁻²⁵\nλ = (6.63 × 10⁻³⁴) / (45.54 × 10⁻²⁵) = 0.1456 × 10⁻⁹ m = 1.456 × 10⁻¹⁰ m = 1.46 Å",
    finalAnswer: "Thermal neutron de Broglie wavelength λ = 1.46 Å = 0.146 nm",
    neetShortcut: "For thermal neutron shortcut at T(Kelvin): λ ≈ 25.6 / √T Å. For T = 300 K: λ = 25.6 / √300 = 25.6 / 17.32 = 1.47 Å!"
  },

  // 11. Photon vs Electron Equal Wavelength Comparison
  {
    id: "num-11",
    topicCategory: "Photon vs Particle Equal Wavelength",
    problem: "A photon and an electron each have a wavelength of 1.00 Å. Find the ratio of: (a) their momenta, and (b) the total energy of the photon to the kinetic energy of the electron.",
    given: "λ_photon = λ_electron = λ = 1.00 Å = 10⁻¹⁰ m; m_e = 9.1 × 10⁻³¹ kg; c = 3 × 10⁸ m/s; h = 6.63 × 10⁻³⁴ J·s.",
    required: "(a) Ratio of momenta p_photon / p_electron\n(b) Ratio of energies E_photon / K_electron.",
    concept: "By de Broglie relation, momentum p = h/λ. If wavelengths are identical, momenta are identical. Energy of photon is E = pc = hc/λ. Kinetic energy of electron is K = p²/(2m) = h²/(2mλ²).",
    formula: "p = h/λ; E_ph = hc/λ; K_e = h² / (2mλ²); E_ph / K_e = (hc/λ) / [h²/(2mλ²)] = 2 m c λ / h",
    unitConversion: "λ = 10⁻¹⁰ m",
    substitution: "(a) p_ph / p_e = (h/λ) / (h/λ) = 1\n(b) E_ph / K_e = 2 × (9.1 × 10⁻³¹) × (3 × 10⁸) × 10⁻¹⁰ / (6.63 × 10⁻³⁴)",
    calculation: "(a) p_ph : p_e = 1 : 1\n(b) Numerator = 5.46 × 10⁻³²; Denominator = 6.63 × 10⁻³⁴\nRatio = 5.46 × 10⁻³² / 6.63 × 10⁻³⁴ = 0.8235 × 10² = 82.4",
    finalAnswer: "(a) Ratio of momenta = 1 : 1\n(b) Ratio of energy of photon to KE of electron = 82.4 : 1",
    neetShortcut: "If λ is same, p is ALWAYS identical! For energy ratio, E_photon / K_electron = 2 c / v_electron."
  },

  // 12. Percentage Change in de Broglie Wavelength
  {
    id: "num-12",
    topicCategory: "Percentage & Fractional Changes",
    problem: "If the kinetic energy of a free electron is increased by a factor of 4, by what percentage does its de Broglie wavelength change?",
    given: "Initial kinetic energy = K₁; Final kinetic energy K₂ = 4 K₁.",
    required: "Percentage change in de Broglie wavelength (% Δλ).",
    concept: "de Broglie wavelength is inversely proportional to the square root of kinetic energy: λ ∝ 1/√K.",
    formula: "λ₂ / λ₁ = √(K₁ / K₂) = √(K₁ / 4K₁) = 1/2",
    unitConversion: "Fractional change = (λ₂ - λ₁) / λ₁",
    substitution: "λ₂ = 0.5 λ₁\nΔλ = λ₂ - λ₁ = 0.5 λ₁ - λ₁ = -0.5 λ₁",
    calculation: "% change = (Δλ / λ₁) × 100% = (-0.5 λ₁ / λ₁) × 100% = -50%",
    finalAnswer: "The de Broglie wavelength DECREASES by 50%.",
    neetShortcut: "If K increases 4 times ⟹ λ becomes 1/√4 = 1/2 = 50% of original ⟹ Decrease of 50%."
  },

  // 13. Davisson–Germer Peak Calculation
  {
    id: "num-13",
    topicCategory: "Davisson–Germer & Bragg Law",
    problem: "In the Davisson–Germer experiment, a sharp peak in the electron diffraction pattern is observed at an accelerating potential of 54 V and scattering angle θ = 50°. If the interplanar spacing for nickel crystal is d = 0.91 Å, calculate: (a) the de Broglie wavelength from accelerating voltage, and (b) the wavelength using Bragg's law for first-order diffraction (n = 1).",
    given: "Voltage V = 54 V; Scattering angle θ = 50°; Interplanar spacing d = 0.91 Å; Diffraction order n = 1.",
    required: "(a) λ_deBroglie from formula\n(b) λ_Bragg from crystal geometry.",
    concept: "1. Theoretical de Broglie wavelength: λ = 12.27 / √V Å.\n2. In D-G geometry, glancing angle ϕ is related to scattering angle θ by ϕ = 90° - θ/2. Bragg's condition is 2d sin ϕ = nλ.",
    formula: "λ_dB = 12.27 / √V; ϕ = 90° - 50°/2 = 65°; λ_Bragg = 2d sin ϕ / n",
    unitConversion: "V = 54 V; d = 0.91 Å; sin 65° ≈ 0.9063",
    substitution: "(a) λ_dB = 12.27 / √54\n(b) λ_Bragg = 2 × 0.91 × sin(65°) / 1",
    calculation: "(a) √54 ≈ 7.348 ⟹ λ_dB = 12.27 / 7.348 = 1.670 Å\n(b) λ_Bragg = 2 × 0.91 × 0.9063 = 1.649 Å ≈ 1.65 Å",
    finalAnswer: "(a) Theoretical de Broglie wavelength = 1.67 Å\n(b) Experimental Bragg wavelength = 1.65 Å (Flawless verification of wave hypothesis!)",
    neetShortcut: "Glancing angle formula: ϕ = 90° - θ/2. For θ = 50°, ϕ = 90 - 25 = 65° (NEET trap: don't use θ directly in Bragg's law!)."
  },

  // 14. Radiation Force and Pressure on Perfectly Absorbing Surface
  {
    id: "num-14",
    topicCategory: "Radiation Force & Momentum Transfer",
    problem: "A parallel beam of light of total power 30 W is incident normally on a perfectly absorbing black flat plate. Calculate: (a) the total momentum delivered to the plate per second, and (b) the radiation force exerted on the plate.",
    given: "Incident power P = 30 W; Speed of light c = 3 × 10⁸ m/s; Surface is 100% absorbing (reflectivity R = 0).",
    required: "(a) Momentum transferred per second (dp/dt)\n(b) Force exerted F.",
    concept: "By Newton's second law, Force F = dp/dt. For a perfectly absorbing surface, momentum carried by energy E is p = E/c. Thus, F = P / c.",
    formula: "F = P / c",
    unitConversion: "P = 30 W = 30 J/s",
    substitution: "F = 30 / (3 × 10⁸)",
    calculation: "F = 10 × 10⁻⁸ = 1.0 × 10⁻⁷ N\nMomentum delivered per second = Force = 1.0 × 10⁻⁷ kg·m/s²",
    finalAnswer: "(a) Momentum delivered per second = 1.0 × 10⁻⁷ N·s/s\n(b) Radiation force F = 1.0 × 10⁻⁷ N",
    neetShortcut: "For normal incidence:\n• Perfectly Absorbing: F = P/c\n• Perfectly Reflecting: F = 2P/c (force is doubled due to rebound!)."
  },

  // 15. Einstein Linear Equation with Two Unknown Wavelengths
  {
    id: "num-15",
    topicCategory: "Simultaneous Equations in Photoelectric Effect",
    problem: "When a metal surface is illuminated with radiation of wavelength λ, the stopping potential is 4.8 V. When the same surface is illuminated with radiation of wavelength 2λ, the stopping potential is 1.6 V. Determine: (a) the threshold wavelength λ₀ of the metal, and (b) the value of incident wavelength λ.",
    given: "Case 1: Wavelength = λ, Stopping potential V₁ = 4.8 V\nCase 2: Wavelength = 2λ, Stopping potential V₂ = 1.6 V.",
    required: "(a) Threshold wavelength λ₀\n(b) Incident wavelength λ in Ångströms.",
    concept: "Einstein's equation: eV₀ = hc/λ - hc/λ₀.",
    formula: "eV₁ = hc/λ - hc/λ₀  --- (1) [with eV₁ = 4.8 eV]\neV₂ = hc/(2λ) - hc/λ₀  --- (2) [with eV₂ = 1.6 eV]",
    unitConversion: "Using energies in eV: hc = 12400 eV·Å",
    substitution: "4.8 = hc/λ - hc/λ₀  --- (1)\n1.6 = (1/2)(hc/λ) - hc/λ₀  --- (2)",
    calculation: "Subtract (2) from (1):\n4.8 - 1.6 = hc/λ - (1/2)(hc/λ)\n3.2 = (1/2)(hc/λ) ⟹ hc/λ = 6.4 eV\nSubstitute hc/λ = 6.4 into (1):\n4.8 = 6.4 - hc/λ₀\nhc/λ₀ = 6.4 - 4.8 = 1.6 eV (Work function φ₀ = 1.6 eV)\nNow compute wavelengths:\nλ = hc / 6.4 = 12400 / 6.4 = 1937.5 Å\nλ₀ = hc / 1.6 = 12400 / 1.6 = 7750 Å",
    finalAnswer: "(a) Threshold wavelength λ₀ = 7750 Å\n(b) Incident wavelength λ = 1937.5 Å (Work function φ₀ = 1.60 eV)",
    neetShortcut: "Subtract equations: eV₁ - eV₂ = hc(1/λ₁ - 1/λ₂) = (1/2)(hc/λ). Instantly hc/λ = 2(4.8 - 1.6) = 6.4 eV ⟹ φ₀ = 6.4 - 4.8 = 1.6 eV!"
  }
];
