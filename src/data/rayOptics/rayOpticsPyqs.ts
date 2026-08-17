// Genuine, Traceable NEET & AIPMT Previous-Year Questions for Ray Optics

export interface VerifiedPyq {
  id: string;
  exam: string;
  year: number;
  question: string;
  options: string[];
  correctAnswer: string;
  solution: string;
  conceptTested: string;
  trapWarning: string;
}

export const rayOpticsVerifiedPyqs: VerifiedPyq[] = [
  {
    id: "pyq-1",
    exam: "NEET UG",
    year: 2023,
    question: "An equiconvex lens has power P. It is cut into two symmetrical halves by a plane normal to the principal axis. The power of each half will be:",
    options: ["(a) P / 2", "(b) 2P", "(c) P", "(d) Zero"],
    correctAnswer: "(a) P / 2",
    solution: "For the original equiconvex lens with radii R₁ = +R, R₂ = -R: 1/f = (μ - 1)[1/R - (-1/R)] = 2(μ - 1)/R, so Power P = 1/f. When cut vertically normal to the principal axis, each resulting half is a plano-convex lens with R₁ = +R and R₂ = ∞. For each half: 1/f' = (μ - 1)[1/R - 0] = (μ - 1)/R = (1/2) · [2(μ - 1)/R] = 1/(2f). Therefore, the new focal length f' = 2f, and the new power P' = 1/f' = P / 2.",
    conceptTested: "Lens Maker's Formula and Power Variation upon Slicing Lenses",
    trapWarning: "NEET Trap: If the lens is cut HORIZONTALLY along the principal axis, the focal length and power of each half remain UNCHANGED (P' = P), but intensity is halved (I/2). When cut VERTICALLY, power is halved (P' = P/2)."
  },
  {
    id: "pyq-2",
    exam: "NEET UG",
    year: 2022,
    question: "A biconvex lens has radii of curvature, 20 cm each. If the refractive index of the material of the lens is 1.5, the power of the lens is:",
    options: ["(a) +2 D", "(b) +20 D", "(c) +5 D", "(d) Infinity"],
    correctAnswer: "(c) +5 D",
    solution: "Using the Lens Maker's Formula for a biconvex lens in air: R₁ = +20 cm = +0.2 m, R₂ = -20 cm = -0.2 m, μ = 1.5. 1/f = (μ - 1)[1/R₁ - 1/R₂] = (1.5 - 1)[1/20 - (-1/20)] = 0.5 × (2/20) = 0.5 × (1/10) = 1/20 cm⁻¹. Therefore, focal length f = +20 cm = +0.20 m. Power P = 1 / f(in m) = 1 / 0.20 = +5.0 Dioptres.",
    conceptTested: "Lens Maker's Formula with Cartesian Radii and Power in Dioptres",
    trapWarning: "Always convert focal length from cm into metres before computing Power P = 1/f(m) = 100/f(cm) = 100/20 = +5 D."
  },
  {
    id: "pyq-3",
    exam: "NEET UG",
    year: 2020,
    question: "An astronomical refracting telescope will have large angular magnification and high angular resolution, when it has an objective lens of:",
    options: [
      "(a) Small focal length and large diameter",
      "(b) Large focal length and small diameter",
      "(c) Large focal length and large diameter",
      "(d) Small focal length and small diameter"
    ],
    correctAnswer: "(c) Large focal length and large diameter",
    solution: "1. Angular Magnification for an astronomical telescope in normal adjustment is M = f_o / f_e. To make M large, the objective focal length f_o must be LARGE. 2. Angular Resolution (Resolving Power) of a telescope is given by RP = D / (1.22 λ), where D is the aperture diameter of the objective lens. To have high angular resolution (small limit of resolution θ = 1.22 λ / D), the aperture diameter D must be LARGE. Therefore, the objective lens must have a large focal length and a large diameter.",
    conceptTested: "Telescope Magnification and Resolving Power Dependencies",
    trapWarning: "Do not confuse telescope with microscope! In a compound microscope, the objective must have a very small focal length."
  },
  {
    id: "pyq-4",
    exam: "NEET UG",
    year: 2019,
    question: "In total internal reflection when the angle of incidence is equal to the critical angle for the pair of media in contact, what will be angle of refraction?",
    options: ["(a) 90°", "(b) 180°", "(c) 0°", "(d) Equal to angle of incidence"],
    correctAnswer: "(a) 90°",
    solution: "By the exact definition of Critical Angle (C), when a light ray in an optically denser medium is incident at angle i = C at the boundary with a rarer medium, the refracted ray grazes along the interface boundary, meaning the angle of refraction r = 90°.",
    conceptTested: "Definition and Snell's Law Evaluation at the Critical Angle",
    trapWarning: "Some students mistakenly choose 0° thinking the ray doesn't enter the second medium; at i = C, grazing emergence occurs with r = 90°."
  },
  {
    id: "pyq-5",
    exam: "NEET UG",
    year: 2017,
    question: "A beam of light consisting of red, green and blue colours is incident on a right angled prism. The refractive index of the material of the prism for the above red, green and blue wavelengths are 1.39, 1.44 and 1.47 respectively. The prism will:",
    options: [
      "(a) Separate all the three colours",
      "(b) Not separate the three colours",
      "(c) Separate the red colour part from the green and blue colours",
      "(d) Separate the blue colour part from the red and green colours"
    ],
    correctAnswer: "(c) Separate the red colour part from the green and blue colours",
    solution: "For a standard 45°-90°-45° right-angled glass prism with normal incidence on the vertical face, the light strikes the hypotenuse face at an angle of incidence i = 45°. Total internal reflection occurs if i > C ⇒ sin i > sin C ⇒ sin 45° > 1/μ ⇒ 1/√2 > 1/μ ⇒ μ > √2 ≈ 1.414. Comparing refractive indices: • For Red: μ_r = 1.39 < 1.414 ⇒ i < C_red ⇒ Red light does NOT undergo TIR and refracts OUT through the hypotenuse face. • For Green: μ_g = 1.44 > 1.414 ⇒ i > C_green ⇒ Green undergoes TIR. • For Blue: μ_b = 1.47 > 1.414 ⇒ i > C_blue ⇒ Blue undergoes TIR. Thus, Red is transmitted while Green and Blue are totally internally reflected.",
    conceptTested: "Wavelength-Dependent Critical Angle & Selective TIR in Prisms",
    trapWarning: "Remember: Condition for TIR at 45° incidence is μ > √2 = 1.414. Colors with μ < 1.414 refract out; colors with μ > 1.414 undergo TIR."
  },
  {
    id: "pyq-6",
    exam: "NEET UG (Phase 1)",
    year: 2016,
    question: "The angle of incidence for a ray of light at a refracting surface of a prism is 45°. The angle of prism is 60°. If the ray suffers minimum deviation through the prism, the angle of minimum deviation and refractive index of the material of the prism respectively, are:",
    options: ["(a) 45°, 1/√2", "(b) 30°, √2", "(c) 45°, √2", "(d) 30°, 1/√2"],
    correctAnswer: "(b) 30°, √2",
    solution: "At minimum deviation: i = e = 45°, A = 60°. Using relation δ_m = 2i - A = 2(45°) - 60° = 90° - 60° = 30°. Angle of refraction r = A/2 = 60°/2 = 30°. Then refractive index μ = sin i / sin r = sin 45° / sin 30° = (1/√2) / (1/2) = 2/√2 = √2.",
    conceptTested: "Prism Formula and Angle of Minimum Deviation Relations",
    trapWarning: "Refractive index of glass in air is always > 1, so options with 1/√2 (≈ 0.707) are physically impossible and can be eliminated immediately."
  },
  {
    id: "pyq-7",
    exam: "NEET UG",
    year: 2021,
    question: "A convex lens A of focal length 20 cm and a concave lens B of focal length 5 cm are kept along the same axis with a distance d between them. If a parallel beam of light falling on A leaves B as a parallel beam, then the distance d in cm will be:",
    options: ["(a) 25", "(b) 15", "(c) 50", "(d) 30"],
    correctAnswer: "(b) 15",
    solution: "Parallel beam incident on convex lens A (f_A = +20 cm) is focused at a point 20 cm behind A. For concave lens B (f_B = -5 cm) to produce an emergent parallel beam, this focal point of A must coincide with the virtual focus of concave lens B. Since the virtual focus of B lies 5 cm in front of B, the separation between lenses must be d = f_A - |f_B| = 20 cm - 5 cm = 15 cm.",
    conceptTested: "Combination of Separated Convex and Concave Lenses (Galilean Telescopic System)",
    trapWarning: "Do not blindly add focal lengths (20 + 5 = 25 cm). Because B is a concave lens, its virtual focus is in front of it, so d = f_A - f_B = 20 - 5 = 15 cm."
  },
  {
    id: "pyq-8",
    exam: "NEET UG",
    year: 2018,
    question: "An object is placed at a distance of 40 cm from a concave mirror of focal length 15 cm. If the object is displaced through a distance of 20 cm towards the mirror, the displacement of the image will be:",
    options: [
      "(a) 30 cm away from the mirror",
      "(b) 36 cm away from the mirror",
      "(c) 30 cm towards the mirror",
      "(d) 36 cm towards the mirror"
    ],
    correctAnswer: "(b) 36 cm away from the mirror",
    solution: "Initial position: u₁ = -40 cm, f = -15 cm. 1/v₁ = 1/f - 1/u₁ = -1/15 - (-1/40) = -1/15 + 1/40 = (-8 + 3)/120 = -5/120 = -1/24 ⇒ v₁ = -24 cm. When object is moved 20 cm towards the mirror: new object distance u₂ = -(40 - 20) = -20 cm. 1/v₂ = 1/f - 1/u₂ = -1/15 - (-1/20) = -1/15 + 1/20 = (-4 + 3)/60 = -1/60 ⇒ v₂ = -60 cm. Image displacement Δv = |v₂| - |v₁| = 60 cm - 24 cm = 36 cm away from the mirror.",
    conceptTested: "Two-Step Concave Mirror Position Calculation",
    trapWarning: "Moving the object closer to the mirror pushes the real image farther away from the mirror."
  },
  {
    id: "pyq-9",
    exam: "AIPMT",
    year: 2014,
    question: "If the focal length of objective lens is increased then magnifying power of:",
    options: [
      "(a) Microscope will increase but that of telescope decrease",
      "(b) Microscope and telescope both will increase",
      "(c) Microscope and telescope both will decrease",
      "(d) Microscope will decrease but that of telescope will increase"
    ],
    correctAnswer: "(d) Microscope will decrease but that of telescope will increase",
    solution: "1. For a Compound Microscope: M ≈ (L / f_o) · (D / f_e). Magnifying power is inversely proportional to objective focal length (M ∝ 1/f_o). Increasing f_o DECREASES microscope magnification. 2. For an Astronomical Telescope: M = f_o / f_e. Magnifying power is directly proportional to objective focal length (M ∝ f_o). Increasing f_o INCREASES telescope magnification. Therefore, microscope magnification decreases while telescope magnification increases.",
    conceptTested: "Objective Focal Length Dependence in Microscope vs Telescope",
    trapWarning: "Remember: Microscope has f_o in denominator (M ∝ 1/f_o); Telescope has f_o in numerator (M ∝ f_o)."
  },
  {
    id: "pyq-10",
    exam: "AIPMT (Re-Exam)",
    year: 2015,
    question: "Two identical thin plano-convex glass lenses (refractive index 1.5) each having radius of curvature of 20 cm are placed with their curved surfaces in contact at the centre. The intervening space is filled with oil of refractive index 1.7. The focal length of the combination is:",
    options: ["(a) -50 cm", "(b) +50 cm", "(c) -20 cm", "(d) -25 cm"],
    correctAnswer: "(a) -50 cm",
    solution: "For each glass plano-convex lens (μ_g = 1.5, R = 20 cm): 1/f₁ = (1.5 - 1)(1/20 - 0) = 0.5/20 = 1/40 cm⁻¹ ⇒ P₁ = 100/40 = +2.5 D. For the second glass lens: P₃ = +2.5 D. The intervening space forms an equibiconcave oil lens with μ_oil = 1.7 and R₁ = -20 cm, R₂ = +20 cm: 1/f₂ = (1.7 - 1)[-1/20 - 1/20] = 0.7 × (-2/20) = -0.7/10 = -1.4/20 = -7/100 cm⁻¹ ⇒ P₂ = -7.0 D. Net Power P_total = P₁ + P₂ + P₃ = +2.5 D + (-7.0 D) + 2.5 D = -2.0 D. Equivalent focal length F = 100 / P_total = 100 / (-2.0) = -50 cm.",
    conceptTested: "Liquid Lens Formed in Intervening Spaces & Lens Combination",
    trapWarning: "The oil layer acts as a diverging (biconcave) lens with negative power because its curved surfaces curve inward."
  }
];
