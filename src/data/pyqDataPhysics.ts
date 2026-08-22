import { PYQQuestion } from './pyqDatabase';

export const PHYSICS_PYQS_ARCHIVE: PYQQuestion[] = [
  // ================= 2026 / 2025 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2026-1',
    year: 2026,
    subject: 'physics',
    chapterId: 'electric-charges-and-fields',
    chapterTitle: 'Electric Charges and Fields',
    topicId: 'coulombs-law',
    topicTitle: 'Coulomb\'s Law & Superposition Principle',
    question: 'Two point charges +q and -q are placed at a distance 2a apart in vacuum. The electric dipole moment p is directed from:',
    options: [
      'Positive charge +q to negative charge -q',
      'Negative charge -q to positive charge +q with magnitude 2aq',
      'Perpendicular to dipole axis along equatorial line',
      'Radially outward in all directions'
    ],
    correctIndex: 1,
    explanation: 'By convention in electrostatics, the electric dipole moment vector **p** is directed along the dipole axis from negative charge (-q) to positive charge (+q). Its magnitude is |**p**| = q × (2a).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 1, Page 27'
  },
  {
    id: 'phy-pyq-2025-1',
    year: 2025,
    subject: 'physics',
    chapterId: 'current-electricity',
    chapterTitle: 'Current Electricity',
    topicId: 'drift-velocity-ohms-law',
    topicTitle: 'Drift Velocity, Mobility & Resistance',
    question: 'A wire of resistance R is stretched uniformly such that its length becomes n times its original length. The new resistance of the wire will be:',
    options: [
      'n × R',
      'R / n',
      'n² × R',
      'R / n²'
    ],
    correctIndex: 2,
    explanation: 'When a wire is stretched, its volume V = A × L remains constant. If new length L\' = nL, then new cross-sectional area A\' = A / n. New resistance R\' = ρ(L\' / A\') = ρ(nL / (A/n)) = n² (ρL / A) = n² R.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 3, Page 96'
  },
  {
    id: 'phy-pyq-2025-2',
    year: 2025,
    subject: 'physics',
    chapterId: 'dual-nature-of-radiation-and-matter',
    chapterTitle: 'Dual Nature of Radiation and Matter',
    topicId: 'photoelectric-effect',
    topicTitle: 'Einstein\'s Photoelectric Equation & de Broglie Wavelength',
    question: 'An electron is accelerated from rest through a potential difference of V volts. Its de Broglie wavelength λ is given by:',
    options: [
      'λ = 12.27 / √V Å',
      'λ = 0.286 / √V Å',
      'λ = 1.227 × √V Å',
      'λ = 12.27 / V² Å'
    ],
    correctIndex: 0,
    explanation: 'de Broglie wavelength for an accelerated electron: λ = h / p = h / √(2m_e q V) = h / √(2m_e e V). Substituting values of Planck\'s constant h, mass of electron m_e, and elementary charge e yields λ = 1.227 / √V nm = 12.27 / √V Å.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 11, Page 401'
  },

  // ================= 2024 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2024-1',
    year: 2024,
    subject: 'physics',
    chapterId: 'ray-optics-and-optical-instruments',
    chapterTitle: 'Ray Optics and Optical Instruments',
    topicId: 'lens-maker-formula',
    topicTitle: 'Refraction at Spherical Surfaces & Thin Lenses',
    question: 'A convex lens of focal length 20 cm in air is immersed in water (refractive index μ_w = 4/3). Given refractive index of glass μ_g = 3/2. The focal length of the lens in water becomes:',
    options: [
      '40 cm',
      '80 cm',
      '20 cm',
      '10 cm'
    ],
    correctIndex: 1,
    explanation: 'From Lens Maker\'s Formula in air: 1/f_air = (μ_g - 1)(1/R₁ - 1/R₂) = (3/2 - 1) × K = 0.5 × K. In water: 1/f_water = (μ_g/μ_w - 1) × K = ((3/2)/(4/3) - 1) × K = (9/8 - 1) × K = 1/8 × K. Taking ratio: f_water / f_air = (0.5) / (1/8) = 4. Therefore, f_water = 4 × 20 cm = 80 cm.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 12, Chapter 9, Page 326'
  },
  {
    id: 'phy-pyq-2024-2',
    year: 2024,
    subject: 'physics',
    chapterId: 'laws-of-motion',
    chapterTitle: 'Laws of Motion',
    topicId: 'circular-motion-banking',
    topicTitle: 'Banking of Roads & Centripetal Acceleration',
    question: 'The optimum speed v_0 with which a vehicle can negotiate a curve of radius r on a road banked at an angle θ without relying on friction is:',
    options: [
      'v_0 = √(rg tan θ)',
      'v_0 = rg sin θ',
      'v_0 = √(rg / tan θ)',
      'v_0 = √(rg cos θ)'
    ],
    correctIndex: 0,
    explanation: 'Resolving normal reaction N: Vertical component N cos θ = mg, Horizontal component provides centripetal force N sin θ = m v_0² / r. Dividing gives tan θ = v_0² / (rg) ⇒ v_0 = √(rg tan θ).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 5, Page 104'
  },

  // ================= 2023 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2023-phy-1',
    year: 2023,
    subject: 'physics',
    chapterId: 'semiconductor-electronics',
    chapterTitle: 'Semiconductor Electronics',
    topicId: 'pn-junction-diode',
    topicTitle: 'p-n Junction Diode & Rectifiers',
    question: 'In a full-wave rectifier circuit operating at an input AC frequency of 50 Hz, the fundamental ripple frequency of the output DC voltage is:',
    options: [
      '25 Hz',
      '50 Hz',
      '100 Hz',
      '200 Hz'
    ],
    correctIndex: 2,
    explanation: 'In a full-wave rectifier, both positive and negative half cycles of input AC are rectified into positive pulses. Therefore, for every 1 cycle of input, 2 output pulses are produced. Output frequency = 2 × f_in = 2 × 50 Hz = 100 Hz.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 14, Page 483'
  },
  {
    id: 'phy-pyq-2023-phy-2',
    year: 2023,
    subject: 'physics',
    chapterId: 'thermodynamics',
    chapterTitle: 'Thermodynamics',
    topicId: 'first-law-thermodynamics',
    topicTitle: 'First Law of Thermodynamics & Carnot Engine',
    question: 'A Carnot heat engine operates between temperatures T_H = 500 K and T_C = 300 K. Its thermodynamic efficiency η is:',
    options: [
      '60%',
      '40%',
      '25%',
      '50%'
    ],
    correctIndex: 1,
    explanation: 'Efficiency of Carnot engine η = 1 - (T_C / T_H) = 1 - (300 / 500) = 1 - 0.6 = 0.40 = 40%.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 12, Page 313'
  },

  // ================= 2022 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2022-phy-1',
    year: 2022,
    subject: 'physics',
    chapterId: 'gravitation',
    chapterTitle: 'Gravitation',
    topicId: 'escape-velocity',
    topicTitle: 'Acceleration due to Gravity & Escape Speed',
    question: 'The escape speed from Earth\'s surface is v_e = 11.2 km/s. If a body is launched from the surface of a planet having twice the radius and twice the mass of Earth, its escape speed will be:',
    options: [
      '11.2 km/s',
      '22.4 km/s',
      '5.6 km/s',
      '15.8 km/s'
    ],
    correctIndex: 0,
    explanation: 'Escape velocity formula: v_e = √(2GM / R). For the new planet: v\'_e = √(2G (2M) / (2R)) = √(2GM / R) = v_e = 11.2 km/s.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 8, Page 193'
  },
  {
    id: 'phy-pyq-2022-phy-2',
    year: 2022,
    subject: 'physics',
    chapterId: 'alternating-current',
    chapterTitle: 'Alternating Current',
    topicId: 'lcr-series-resonance',
    topicTitle: 'Series LCR Circuit & Resonance Quality Factor',
    question: 'In a series LCR resonant circuit, the impedance Z at resonance frequency ω_0 is:',
    options: [
      'Zero',
      'Purely inductive (ωL)',
      'Purely resistive and equal to R (minimum)',
      'Infinite'
    ],
    correctIndex: 2,
    explanation: 'In a series LCR circuit, impedance Z = √[R² + (X_L - X_C)²]. At resonance, inductive reactance X_L = capacitive reactance X_C, so Z_min = R (purely resistive and current is in phase with voltage).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 7, Page 248'
  },

  // ================= 2021 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2021-phy-1',
    year: 2021,
    subject: 'physics',
    chapterId: 'electrostatic-potential-and-capacitance',
    chapterTitle: 'Electrostatic Potential and Capacitance',
    topicId: 'capacitors-dielectrics',
    topicTitle: 'Parallel Plate Capacitor & Energy Stored',
    question: 'A parallel plate capacitor with air between the plates has a capacitance C_0 = 10 μF. If a dielectric slab of dielectric constant K = 5 is inserted filling the entire space, the new capacitance becomes:',
    options: [
      '2 μF',
      '15 μF',
      '50 μF',
      '25 μF'
    ],
    correctIndex: 2,
    explanation: 'Capacitance with dielectric medium C = K × C_0 = 5 × 10 μF = 50 μF.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 2, Page 76'
  },
  {
    id: 'phy-pyq-2021-phy-2',
    year: 2021,
    subject: 'physics',
    chapterId: 'moving-charges-and-magnetism',
    chapterTitle: 'Moving Charges and Magnetism',
    topicId: 'biot-savart-ampere',
    topicTitle: 'Magnetic Field on Axis of Circular Current Loop',
    question: 'A charged particle carrying charge q enters a uniform magnetic field B with velocity v perpendicular to B. The radius of its circular trajectory is:',
    options: [
      'r = mv / (qB)',
      'r = qB / (mv)',
      'r = qv / (mB)',
      'r = m / (qvB)'
    ],
    correctIndex: 0,
    explanation: 'Magnetic Lorentz force provides the necessary centripetal force: q v B = m v² / r ⇒ r = (m v) / (q B) = p / (q B).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 4, Page 138'
  },

  // ================= 2020 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2020-phy-1',
    year: 2020,
    subject: 'physics',
    chapterId: 'units-and-measurements',
    chapterTitle: 'Units and Measurements',
    topicId: 'dimensions-errors',
    topicTitle: 'Dimensional Analysis & Significant Figures',
    question: 'The dimensions of universal gravitational constant G are:',
    options: [
      '[M⁻¹ L³ T⁻²]',
      '[M¹ L² T⁻¹]',
      '[M⁻² L³ T⁻¹]',
      '[M¹ L³ T⁻²]'
    ],
    correctIndex: 0,
    explanation: 'From Newton\'s Law of Gravitation: F = G (m₁ m₂) / r² ⇒ G = (F r²) / (m₁ m₂). Substituting dimensions: [G] = ([M L T⁻²] [L²]) / ([M] [M]) = [M⁻¹ L³ T⁻²].',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 2, Page 31'
  },
  {
    id: 'phy-pyq-2020-phy-2',
    year: 2020,
    subject: 'physics',
    chapterId: 'work-energy-and-power',
    chapterTitle: 'Work, Energy and Power',
    topicId: 'work-energy-theorem',
    topicTitle: 'Kinetic Energy, Potential Energy & Power',
    question: 'A particle moves with uniform speed v in a horizontal circle of radius r under the action of a centripetal force F = -k / r². The total mechanical energy (E = K + U) of the particle is:',
    options: [
      '-k / (2r)',
      'k / (2r)',
      '-k / r',
      'Zero'
    ],
    correctIndex: 0,
    explanation: 'Centripetal force m v² / r = k / r² ⇒ Kinetic Energy K = 1/2 m v² = k / (2r). Potential energy U = -∫ F dr = -∫ (-k/r²) dr = -k/r. Total Mechanical Energy E = K + U = k / (2r) - k/r = -k / (2r).',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 6, Page 121'
  },

  // ================= 2019 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2019-phy-1',
    year: 2019,
    subject: 'physics',
    chapterId: 'wave-optics',
    chapterTitle: 'Wave Optics',
    topicId: 'young-double-slit-experiment',
    topicTitle: 'Interference of Light & Fringe Width',
    question: 'In Young\'s double slit experiment, if the separation between slits is halved and distance between slits and screen is doubled, the fringe width β becomes:',
    options: [
      'Remains unchanged',
      'Doubled',
      '4 times',
      'Halved'
    ],
    correctIndex: 2,
    explanation: 'Fringe width in YDSE is given by β = (λ D) / d. When D\' = 2D and d\' = d / 2, new fringe width β\' = (λ (2D)) / (d / 2) = 4 (λ D / d) = 4 β.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 10, Page 364'
  },
  {
    id: 'phy-pyq-2019-phy-2',
    year: 2019,
    subject: 'physics',
    chapterId: 'atoms',
    chapterTitle: 'Atoms',
    topicId: 'bohr-model-hydrogen',
    topicTitle: 'Bohr Postulates, Energy Levels & Spectral Series',
    question: 'The ratio of kinetic energy to the total energy of an electron in a Bohr orbit of hydrogen atom is:',
    options: [
      '1 : -1',
      '1 : 1',
      '1 : 2',
      '2 : -1'
    ],
    correctIndex: 0,
    explanation: 'In Bohr\'s hydrogen atom model: Kinetic Energy K = +e² / (8πε₀ r) = -E_total. Total Energy E = -e² / (8πε₀ r). Therefore, Ratio K / E = K / (-K) = -1 = 1 : -1.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 12, Page 424'
  },

  // ================= 2018 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2018-phy-1',
    year: 2018,
    subject: 'physics',
    chapterId: 'electromagnetic-induction',
    chapterTitle: 'Electromagnetic Induction',
    topicId: 'faradays-lenz-law',
    topicTitle: 'Faraday\'s Laws of Induction & Lenz\'s Rule',
    question: 'A circular coil of 100 turns and area 0.05 m² is placed perpendicular to a magnetic field of 0.2 T. If the magnetic field reduces to zero in 0.1 s, the induced emf in the coil is:',
    options: [
      '5 V',
      '10 V',
      '1 V',
      '20 V'
    ],
    correctIndex: 1,
    explanation: 'Initial magnetic flux Φ₁ = N B A = 100 × 0.2 × 0.05 = 1.0 Wb. Final flux Φ₂ = 0. Induced electromotive force e = |ΔΦ / Δt| = |(0 - 1.0) / 0.1| = 10 V.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 6, Page 208'
  },
  {
    id: 'phy-pyq-2018-phy-2',
    year: 2018,
    subject: 'physics',
    chapterId: 'oscillations',
    chapterTitle: 'Oscillations',
    topicId: 'simple-harmonic-motion',
    topicTitle: 'Displacement, Velocity & Acceleration in SHM',
    question: 'A particle executes Simple Harmonic Motion with amplitude A. At what displacement x from mean position is its kinetic energy equal to its potential energy?',
    options: [
      'x = A / 2',
      'x = A / √2',
      'x = A / √3',
      'x = A / 4'
    ],
    correctIndex: 1,
    explanation: 'In SHM: Kinetic Energy K = 1/2 k (A² - x²), Potential Energy U = 1/2 k x². Setting K = U: 1/2 k (A² - x²) = 1/2 k x² ⇒ A² - x² = x² ⇒ 2x² = A² ⇒ x = A / √2.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 14, Page 349'
  },

  // ================= 2017 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2017-phy-1',
    year: 2017,
    subject: 'physics',
    chapterId: 'nuclei',
    chapterTitle: 'Nuclei',
    topicId: 'radioactivity-half-life',
    topicTitle: 'Law of Radioactive Decay & Half-Life',
    question: 'The half-life of a radioactive substance is 30 minutes. The time taken between 40% decay and 85% decay of the radioactive substance is:',
    options: [
      '30 minutes',
      '60 minutes',
      '90 minutes',
      '45 minutes'
    ],
    correctIndex: 1,
    explanation: 'When 40% has decayed, remaining fraction N₁ = 60% = 0.60 N₀. When 85% has decayed, remaining fraction N₂ = 15% = 0.15 N₀. Notice N₂ / N₁ = 0.15 / 0.60 = 1/4 = (1/2)². Therefore, 2 half-lives have elapsed. Elapsed time Δt = 2 × t_{1/2} = 2 × 30 min = 60 minutes.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 12, Chapter 13, Page 447'
  },
  {
    id: 'phy-pyq-2017-phy-2',
    year: 2017,
    subject: 'physics',
    chapterId: 'system-of-particles-and-rotational-motion',
    chapterTitle: 'System of Particles and Rotational Motion',
    topicId: 'moment-of-inertia-torque',
    topicTitle: 'Moment of Inertia & Conservation of Angular Momentum',
    question: 'A solid sphere, a hollow sphere, and a solid cylinder of same mass M and radius R roll down an inclined plane without slipping from rest. Which one reaches the bottom FIRST?',
    options: [
      'Solid cylinder',
      'Hollow sphere',
      'Solid sphere',
      'All reach simultaneously'
    ],
    correctIndex: 2,
    explanation: 'Acceleration on an inclined plane during pure rolling is a = (g sin θ) / (1 + I / (MR²)) = (g sin θ) / (1 + k²/R²). Values of k²/R²: Solid Sphere (2/5 = 0.4), Solid Cylinder (1/2 = 0.5), Hollow Sphere (2/3 = 0.67). Smaller k²/R² gives greatest acceleration, so the solid sphere reaches first.',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 7, Page 179'
  },

  // ================= 2016 NEET UG PHYSICS =================
  {
    id: 'phy-pyq-2016-phy-1',
    year: 2016,
    subject: 'physics',
    chapterId: 'mechanical-properties-of-fluids',
    chapterTitle: 'Mechanical Properties of Fluids',
    topicId: 'bernoulli-surface-tension',
    topicTitle: 'Bernoulli\'s Equation & Terminal Velocity',
    question: 'Two small spherical raindrops of radii r₁ and r₂ falling in air with terminal velocities have their radii in the ratio 1 : 2. The ratio of their terminal velocities v₁ : v₂ is:',
    options: [
      '1 : 2',
      '1 : 4',
      '1 : 8',
      '1 : 16'
    ],
    correctIndex: 1,
    explanation: 'Terminal velocity of a spherical body falling through viscous fluid is given by Stokes\' law: v_t = (2/9) × (r² (ρ - σ) g) / η. Therefore, terminal velocity is directly proportional to the square of the radius (v_t ∝ r²). Ratio v₁ : v₂ = (r₁ / r₂)² = (1 / 2)² = 1 : 4.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 10, Page 264'
  },
  {
    id: 'phy-pyq-2016-phy-2',
    year: 2016,
    subject: 'physics',
    chapterId: 'electromagnetic-waves',
    chapterTitle: 'Electromagnetic Waves',
    topicId: 'em-spectrum',
    topicTitle: 'Electromagnetic Spectrum & Energy Density',
    question: 'In a plane electromagnetic wave traveling in vacuum, the relation between the peak electric field amplitude E_0 and peak magnetic field amplitude B_0 is:',
    options: [
      'E_0 = c × B_0',
      'B_0 = c × E_0',
      'E_0 = B_0 / c²',
      'E_0 = √(μ₀ / ε₀) × B_0²'
    ],
    correctIndex: 0,
    explanation: 'In vacuum, the ratio of electric field amplitude to magnetic field amplitude equals the speed of light in vacuum: E_0 / B_0 = c = 1 / √(μ₀ ε₀) ⇒ E_0 = c B_0.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 12, Chapter 8, Page 277'
  },

  // ================= 2015 AIPMT / NEET PHYSICS =================
  {
    id: 'phy-pyq-2015-phy-1',
    year: 2015,
    subject: 'physics',
    chapterId: 'motion-in-a-straight-line',
    chapterTitle: 'Motion in a Straight Line',
    topicId: 'kinematics-equations',
    topicTitle: 'Kinematics Equations & Free Fall',
    question: 'A ball dropped from the top of a building reaches the ground in 4 seconds (take g = 10 m/s²). The height of the building is:',
    options: [
      '40 m',
      '60 m',
      '80 m',
      '100 m'
    ],
    correctIndex: 2,
    explanation: 'From equation of motion for free fall: h = u t + 1/2 g t² = 0 + 1/2 × (10 m/s²) × (4 s)² = 1/2 × 10 × 16 = 80 m.',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 3, Page 50'
  },
  {
    id: 'phy-pyq-2015-phy-2',
    year: 2015,
    subject: 'physics',
    chapterId: 'thermal-properties-of-matter',
    chapterTitle: 'Thermal Properties of Matter',
    topicId: 'newton-law-cooling-stefan',
    topicTitle: 'Stefan-Boltzmann Law & Wien\'s Displacement Law',
    question: 'According to Wien\'s displacement law for blackbody radiation, the relationship between wavelength corresponding to maximum intensity (λ_m) and absolute temperature T is:',
    options: [
      'λ_m × T = constant (b)',
      'λ_m / T = constant',
      'λ_m × T⁴ = constant',
      'λ_m² × T = constant'
    ],
    correctIndex: 0,
    explanation: 'Wien\'s displacement law states that the blackbody radiation curve for different temperatures peaks at a wavelength λ_m inversely proportional to the absolute temperature T: λ_m × T = b (where b ≈ 2.898 × 10⁻³ m·K is Wien\'s constant).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 11, Page 294'
  },

  // ================= 2014 AIPMT / NEET PHYSICS =================
  {
    id: 'phy-pyq-2014-phy-1',
    year: 2014,
    subject: 'physics',
    chapterId: 'motion-in-a-plane',
    chapterTitle: 'Motion in a Plane',
    topicId: 'projectile-motion',
    topicTitle: 'Trajectory, Maximum Height & Range of Projectile',
    question: 'The horizontal range R of a projectile launched with velocity u at an angle θ with horizontal is equal to its maximum height H. The launch angle θ is:',
    options: [
      'θ = tan⁻¹(1)',
      'θ = tan⁻¹(2)',
      'θ = tan⁻¹(4)',
      'θ = tan⁻¹(1/4)'
    ],
    correctIndex: 2,
    explanation: 'Range R = (u² sin 2θ) / g = (2 u² sin θ cos θ) / g. Maximum Height H = (u² sin² θ) / (2g). Equating R = H: (2 u² sin θ cos θ) / g = (u² sin² θ) / (2g) ⇒ 2 cos θ = sin θ / 2 ⇒ sin θ / cos θ = 4 ⇒ tan θ = 4 ⇒ θ = tan⁻¹(4).',
    difficulty: 'Medium',
    ncertReference: 'NCERT Class 11, Chapter 4, Page 78'
  },
  {
    id: 'phy-pyq-2014-phy-2',
    year: 2014,
    subject: 'physics',
    chapterId: 'kinetic-theory-of-gases',
    chapterTitle: 'Kinetic Theory of Gases',
    topicId: 'rms-speed-degrees-freedom',
    topicTitle: 'Ideal Gas Law, RMS Speed & Equipartition of Energy',
    question: 'The root-mean-square (RMS) speed of molecules of an ideal gas at temperature T is proportional to:',
    options: [
      'T',
      '√T',
      'T²',
      '1 / √T'
    ],
    correctIndex: 1,
    explanation: 'The RMS speed of gas molecules is v_rms = √(3RT / M) = √(3k_B T / m). Hence, v_rms is directly proportional to the square root of absolute temperature (v_rms ∝ √T).',
    difficulty: 'Easy',
    ncertReference: 'NCERT Class 11, Chapter 13, Page 326'
  }
];
