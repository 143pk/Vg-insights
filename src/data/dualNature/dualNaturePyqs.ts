// Verified NEET UG & AIPMT Previous Year Questions + Original Practice MCQs for Dual Nature of Radiation and Matter

export interface DualNaturePYQ {
  id: string;
  year: string;
  exam: string;
  question: string;
  options: string[];
  correctAnswer: number;
  solution: string;
  conceptTested: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface DualNaturePracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const DUAL_NATURE_VERIFIED_PYQS: DualNaturePYQ[] = [
  {
    id: "pyq-neet-2023",
    year: "2023",
    exam: "NEET UG 2023",
    question: "The work function of a substance is 4.0 eV. The longest wavelength of light that can cause photoelectron emission from this substance is approximately:",
    options: [
      "540 nm",
      "400 nm",
      "310 nm",
      "220 nm"
    ],
    correctAnswer: 2,
    solution: "The longest (maximum) wavelength is the threshold wavelength λ₀.\nFormula: φ₀ = hc / λ₀ ⟹ λ₀ = hc / φ₀.\nUsing shortcut hc ≈ 1240 eV·nm:\nλ₀ = 1240 / 4.0 = 310 nm.\nTherefore, the correct option is (3) 310 nm.",
    conceptTested: "Threshold wavelength calculation from work function (λ₀ = hc / φ₀).",
    difficulty: "Easy"
  },
  {
    id: "pyq-neet-2022",
    year: "2022",
    exam: "NEET UG 2022",
    question: "When light of frequency 2ν₀ (where ν₀ is threshold frequency) is incident on a metal plate, the maximum velocity of electrons emitted is v₁. When the frequency of the incident radiation is increased to 5ν₀, the maximum velocity of electrons emitted is v₂. The ratio of v₁ to v₂ is:",
    options: [
      "1 : 2",
      "1 : 4",
      "1 : 8",
      "1 : 16"
    ],
    correctAnswer: 0,
    solution: "By Einstein's equation: K_max = ½ m v² = hν - hν₀ = h(ν - ν₀).\nCase 1 (ν = 2ν₀): ½ m v₁² = h(2ν₀ - ν₀) = hν₀  --- (1)\nCase 2 (ν = 5ν₀): ½ m v₂² = h(5ν₀ - ν₀) = 4hν₀  --- (2)\nDividing (1) by (2):\n(v₁ / v₂)² = hν₀ / (4hν₀) = 1/4\nTaking square root on both sides:\nv₁ / v₂ = √(1/4) = 1/2 = 1 : 2.",
    conceptTested: "Ratio of photoelectron maximum velocities using Einstein's equation.",
    difficulty: "Medium"
  },
  {
    id: "pyq-neet-2021",
    year: "2021",
    exam: "NEET UG 2021",
    question: "An electromagnetic wave of wavelength λ is incident on a photosensitive surface of negligible work function. If m mass is of an electron emitted from the surface has de-Broglie wavelength λ_d, then:",
    options: [
      "λ = (2mc/h) λ_d²",
      "λ = (2h/mc) λ_d²",
      "λ = (2m/hc) λ_d²",
      "λ_d = (2mc/h) λ²"
    ],
    correctAnswer: 0,
    solution: "1. Incident photon energy: E = hc / λ.\n2. Since work function φ₀ ≈ 0, Kinetic energy of electron K = E = hc / λ.\n3. The de Broglie wavelength of the emitted electron is: λ_d = h / √(2mK).\nSquaring both sides: λ_d² = h² / (2mK) = h² / [2m (hc / λ)] = (h² λ) / (2mhc) = (h λ) / (2mc).\nRearranging for λ:\nλ = (2mc / h) λ_d².",
    conceptTested: "Connecting incident photon wavelength to emitted electron de Broglie wavelength.",
    difficulty: "Medium"
  },
  {
    id: "pyq-neet-2020",
    year: "2020",
    exam: "NEET UG 2020",
    question: "An electron is accelerated from rest through a potential difference of V volt. If the de Broglie wavelength of the electron is 1.227 × 10⁻² nm, the potential difference is:",
    options: [
      "10 V",
      "10² V",
      "10³ V",
      "10⁴ V"
    ],
    correctAnswer: 3,
    solution: "Formula for electron de Broglie wavelength: λ = 1.227 / √V  nm.\nGiven λ = 1.227 × 10⁻² nm.\nEquating: 1.227 × 10⁻² = 1.227 / √V\n10⁻² = 1 / √V ⟹ √V = 10² = 100\nSquaring both sides: V = (100)² = 10,000 V = 10⁴ V.",
    conceptTested: "Direct application of electron de Broglie shortcut (λ = 1.227 / √V nm).",
    difficulty: "Easy"
  },
  {
    id: "pyq-neet-2019",
    year: "2019",
    exam: "NEET UG 2019",
    question: "The work function of a photosensitive material is 4.0 eV. The longest wavelength of light that can cause photon emission from the substance is approximately (Given: hc = 1240 eV·nm):",
    options: [
      "3100 nm",
      "966 nm",
      "310 nm",
      "31 nm"
    ],
    correctAnswer: 2,
    solution: "Longest wavelength λ₀ = hc / φ₀ = 1240 eV·nm / 4.0 eV = 310 nm.",
    conceptTested: "Threshold cut-off wavelength.",
    difficulty: "Easy"
  },
  {
    id: "pyq-neet-2018",
    year: "2018",
    exam: "NEET UG 2018",
    question: "An electron of mass m with an initial velocity v = v₀ î (v₀ > 0) enters an electric field E = -E₀ î (E₀ = constant > 0) at t = 0. If λ₀ is its de-Broglie wavelength initially, then its de-Broglie wavelength at time t is:",
    options: [
      "λ₀",
      "λ₀ (1 + eE₀t / mv₀)",
      "λ₀ / (1 + eE₀t / mv₀)",
      "λ₀ t"
    ],
    correctAnswer: 2,
    solution: "1. Initial velocity = v₀ î, initial momentum p₀ = mv₀ ⟹ λ₀ = h / (mv₀).\n2. Force on electron in electric field E = -E₀ î: F = -e E = -e(-E₀ î) = +eE₀ î.\n3. Acceleration a = eE₀ / m (in the direction of motion).\n4. Velocity at time t: v(t) = v₀ + a t = v₀ + (eE₀ / m) t = v₀ [ 1 + (eE₀ t / mv₀) ].\n5. Momentum at time t: p(t) = m v(t) = mv₀ [ 1 + (eE₀ t / mv₀) ].\n6. New de Broglie wavelength: λ(t) = h / p(t) = [ h / (mv₀) ] / [ 1 + (eE₀ t / mv₀) ] = λ₀ / [ 1 + (eE₀ t / mv₀) ].",
    conceptTested: "de Broglie wavelength of particle accelerating in an electric field.",
    difficulty: "Hard"
  },
  {
    id: "pyq-aipmt-2015",
    year: "2015",
    exam: "AIPMT 2015",
    question: "Light of wavelength 500 nm falls on a metal plate of work function 1.9 eV. The kinetic energy of the emitted photoelectrons is (take h = 6.6 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s):",
    options: [
      "0.58 eV",
      "2.48 eV",
      "1.24 eV",
      "0.69 eV"
    ],
    correctAnswer: 0,
    solution: "Incident photon energy: E = 1240 / λ(nm) = 1240 / 500 = 2.48 eV.\nMaximum Kinetic Energy: K_max = E - φ₀ = 2.48 eV - 1.90 eV = 0.58 eV.",
    conceptTested: "Einstein's photoelectric equation.",
    difficulty: "Easy"
  },
  {
    id: "pyq-aipmt-2014",
    year: "2014",
    exam: "AIPMT 2014",
    question: "If the kinetic energy of a free electron doubles, its de-Broglie wavelength changes by the factor:",
    options: [
      "2",
      "1/2",
      "√2",
      "1/√2"
    ],
    correctAnswer: 3,
    solution: "Formula: λ = h / √(2mK) ⟹ λ ∝ 1 / √K.\nWhen K' = 2K:\nλ' / λ = √(K / 2K) = 1 / √2.\nThus, wavelength changes by a factor of 1/√2.",
    conceptTested: "Kinetic energy dependence of de Broglie wavelength.",
    difficulty: "Easy"
  }
];

export const DUAL_NATURE_PRACTICE_QUESTIONS: DualNaturePracticeQuestion[] = [
  {
    id: "prac-1",
    question: "In a photoelectric experiment, if both the intensity and the frequency of incident radiation are doubled, then:",
    options: [
      "Photocurrent doubles and stopping potential doubles",
      "Photocurrent becomes more than double and stopping potential doubles",
      "Photocurrent doubles and stopping potential becomes more than double",
      "Photocurrent remains constant and stopping potential doubles"
    ],
    correctAnswer: 2,
    explanation: "1. Photocurrent is proportional to light intensity, so doubling intensity doubles the photocurrent (number of photons per second).\n2. Initial stopping potential: eV₀₁ = hν - φ₀. When frequency is doubled (2ν): eV₀₂ = 2hν - φ₀ = 2(eV₀₁) + φ₀. Since work function φ₀ > 0, V₀₂ > 2V₀₁ (more than double!).",
    category: "Intensity & Frequency Variation",
    difficulty: "Medium"
  },
  {
    id: "prac-2",
    question: "The stopping potential V₀ versus frequency ν graph for two metals A and B are straight lines. Which of the following statements is ALWAYS true?",
    options: [
      "Both lines have different slopes because work functions are different",
      "Both lines are parallel and have the same slope equal to h/e",
      "The line with smaller threshold frequency has a steeper slope",
      "The slope depends on the intensity of the incident light"
    ],
    correctAnswer: 1,
    explanation: "Einstein's equation in linear form is V₀ = (h/e)ν - (φ₀/e). The slope of this line is h/e, which is a universal constant independent of the material or intensity. Thus, graphs for all metals are strictly parallel straight lines.",
    category: "Graphical Analysis",
    difficulty: "Easy"
  },
  {
    id: "prac-3",
    question: "A proton, a deuteron, and an alpha particle are accelerated through the same potential difference V. The ratio of their de Broglie wavelengths (λ_p : λ_d : λ_α) is:",
    options: [
      "2 : √2 : 1",
      "2√2 : 2 : 1",
      "1 : √2 : 2",
      "√2 : 1 : 2"
    ],
    correctAnswer: 1,
    explanation: "Formula: λ = h / √(2mqV) ⟹ λ ∝ 1 / √(m·q).\n• Proton: m_p = 1, q_p = 1 ⟹ √(m·q) = √(1 × 1) = 1 ⟹ λ_p ∝ 1\n• Deuteron: m_d = 2, q_d = 1 ⟹ √(m·q) = √(2 × 1) = √2 ⟹ λ_d ∝ 1/√2\n• Alpha: m_α = 4, q_α = 2 ⟹ √(m·q) = √(4 × 2) = √8 = 2√2 ⟹ λ_α ∝ 1/(2√2)\nRatio λ_p : λ_d : λ_α = 1 : (1/√2) : (1/2√2) = 2√2 : 2 : 1.",
    category: "Matter Waves of Charged Particles",
    difficulty: "Medium"
  },
  {
    id: "prac-4",
    question: "Which of the following phenomena CANNOT be explained by the classical wave theory of light?",
    options: [
      "Interference of light waves in Young's double slit",
      "Diffraction of light around a sharp edge",
      "Instantaneous emission of electrons in photoelectric effect",
      "Polarisation of light by reflection"
    ],
    correctAnswer: 2,
    explanation: "Classical wave theory predicts a noticeable time lag (minutes to hours) for an electron to absorb enough energy spread continuously over the wavefront. In reality, photoelectric emission occurs instantaneously (< 10⁻⁹ s), which requires Einstein's quantum photon model.",
    category: "Wave Theory Failure",
    difficulty: "Easy"
  },
  {
    id: "prac-5",
    question: "An electron and a photon each have energy of 100 eV. The ratio of their de Broglie wavelengths (λ_electron / λ_photon) is approximately (Take m_e = 9.1 × 10⁻³¹ kg, c = 3 × 10⁸ m/s):",
    options: [
      "1 : 1",
      "0.01 : 1",
      "100 : 1",
      "0.1 : 1"
    ],
    correctAnswer: 1,
    explanation: "1. Electron: E = 100 eV ⟹ λ_e = 12.27 / √100 = 1.227 Å = 1.227 × 10⁻¹⁰ m.\n2. Photon: E = 100 eV ⟹ λ_ph = 12400 / 100 = 124 Å = 124 × 10⁻¹⁰ m.\n3. Ratio λ_e / λ_ph = 1.227 / 124 ≈ 0.01 (around 10⁻²).",
    category: "Electron vs Photon Comparison",
    difficulty: "Medium"
  },
  {
    id: "prac-6",
    question: "In the Davisson–Germer experiment, the maximum intensity of the diffracted electron beam was observed at an accelerating voltage of:",
    options: [
      "44 V and scattering angle 60°",
      "54 V and scattering angle 50°",
      "64 V and scattering angle 45°",
      "54 V and scattering angle 65°"
    ],
    correctAnswer: 1,
    explanation: "In the Davisson–Germer experiment, a prominent peak in the scattered electron intensity was observed at an accelerating potential of exactly 54 Volts and a scattering angle θ = 50° (corresponding to glancing angle ϕ = 65°).",
    category: "Davisson–Germer Experiment",
    difficulty: "Easy"
  },
  {
    id: "prac-7",
    question: "If a light source of power P is placed at a distance r from a photoelectric cell, the saturation photocurrent is I. If the distance is doubled (2r), the saturation photocurrent becomes:",
    options: [
      "I / 2",
      "I / 4",
      "2 I",
      "4 I"
    ],
    correctAnswer: 1,
    explanation: "By the inverse square law of point sources, intensity I_light ∝ 1/r². When distance is doubled (2r), intensity becomes 1/4th of the initial value. Since saturation photocurrent is directly proportional to intensity, photocurrent becomes I/4.",
    category: "Inverse Square Law & Photocurrent",
    difficulty: "Easy"
  },
  {
    id: "prac-8",
    question: "The de Broglie wavelength of a gas molecule of mass m at absolute temperature T is given by:",
    options: [
      "h / √(2mkT)",
      "h / √(3mkT)",
      "h / √(mkT)",
      "h / (3mkT)"
    ],
    correctAnswer: 1,
    explanation: "The translational kinetic energy of a monoatomic gas molecule at temperature T is K = (3/2) kT. Substituting into λ = h / √(2mK) gives λ = h / √[ 2m (3/2 kT) ] = h / √(3mkT).",
    category: "Thermal Matter Waves",
    difficulty: "Easy"
  },
  {
    id: "prac-9",
    question: "When ultraviolet light of wavelength 100 nm falls on a metal surface, photoelectrons are emitted. Which of the following changes will DEFINITELY increase the maximum kinetic energy of the emitted photoelectrons?",
    options: [
      "Increasing the intensity of the UV light",
      "Decreasing the wavelength of the incident UV light",
      "Moving the light source closer to the metal",
      "Increasing the surface area of the metal plate"
    ],
    correctAnswer: 1,
    explanation: "Maximum kinetic energy K_max = hc/λ - φ₀. To increase K_max, the incident photon energy must increase, which requires decreasing the incident wavelength λ (or increasing frequency). Intensity and distance only affect the number of emitted electrons, not their maximum kinetic energy.",
    category: "Einstein Photoelectric Law",
    difficulty: "Easy"
  },
  {
    id: "prac-10",
    question: "A metal has a work function of 2.5 eV. If radiation of wavelength 4000 Å illuminates the metal, what is the maximum velocity of the emitted photoelectrons? (Take hc = 12400 eV·Å, m_e = 9.1 × 10⁻³¹ kg, 1 eV = 1.6 × 10⁻¹⁹ J)",
    options: [
      "4.6 × 10⁵ m/s",
      "2.3 × 10⁵ m/s",
      "9.2 × 10⁵ m/s",
      "Zero (no emission)"
    ],
    correctAnswer: 0,
    explanation: "1. Incident photon energy: E = 12400 / 4000 = 3.10 eV.\n2. Maximum Kinetic energy: K_max = 3.10 - 2.50 = 0.60 eV = 0.60 × 1.6 × 10⁻¹⁹ = 0.96 × 10⁻¹⁹ J.\n3. Velocity v_max = √(2 K_max / m) = √[ (2 × 0.96 × 10⁻¹⁹) / (9.1 × 10⁻³¹) ] = √(2.11 × 10¹²) ≈ 4.6 × 10⁵ m/s.",
    category: "Photoelectron Velocity",
    difficulty: "Medium"
  }
];
