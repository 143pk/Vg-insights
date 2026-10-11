import { PYQQuestion } from './pyqDatabase';

export const PHYSICS_PYQS_ARCHIVE: PYQQuestion[] = [
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
