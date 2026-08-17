import { DetailedTopicContent } from '../../types/neet';
import { EXP_DIAGRAMS } from './expDiagrams';

export const EXP_TOPICS_3: Record<string, DetailedTopicContent> = {
  'phys-exp-focal-length-parallax': {
    topicId: 'phys-exp-focal-length-parallax',
    topicName: '13. Focal Length of Convex Lens, Concave Mirror & Convex Mirror by Parallax Method',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the focal length (f) of a convex lens, concave mirror, and convex mirror (using an auxiliary convex lens) by locating real inverted images and removing optical parallax between object and image pins on an optical bench.',
    basicIdea: [
      'Removal of Parallax: When an observer moves their eye sideways, if two objects at different distances shift relative to each other, parallax exists. When the tip of the image pin coincides in space with the tip of the real inverted image, they move together without relative shift (no parallax).',
      'Convex Lens formula: 1/f = 1/v − 1/u (with Cartesian sign conventions).',
      'Concave Mirror formula: 1/f = 1/v + 1/u.',
      'Convex Mirror: Forms virtual image; focal length determined using an auxiliary convex lens that produces a converging beam. When rays retrace their path upon normal reflection from convex mirror, image coincides with object pin at center of curvature (R = 2f).'
    ],
    importantTerms: [
      {
        term: 'Optical Parallax',
        definition: 'The apparent relative shift between two objects situated at different depths along the line of sight when the observer moves their eye sideways.',
        neetNote: 'The further object moves in the SAME direction as the eye; the nearer object appears to move in the OPPOSITE direction.'
      },
      {
        term: 'Index Correction / Bench Correction',
        symbol: 'e = \\text{Actual distance} - \\text{Observed bench distance}',
        definition: 'Correction applied to account for the thickness of pin uprights and non-coincidence of optical centers with index marks.',
        neetNote: 'Measured using an index needle of known physical length.'
      },
      {
        term: 'Rough Focal Length',
        definition: 'Focal length estimated by focusing a distant outdoor object (e.g. tree/window) onto a white screen.',
        neetNote: 'Essential starting step before arranging pins on the optical bench.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Convex Lens u–v Method & Parallax Elimination',
        paragraphs: [
          'An optical bench has 4 uprights: Object Pin (O), Convex Lens (L), Image Pin (I), and screen.',
          'Object pin is placed beyond principal focus (u > f) so that a real, inverted image is formed on the other side.',
          'Looking through the lens from the image side, the observer sees the inverted image. The image pin I is shifted until its tip touches the tip of the inverted image and both move together without relative shift upon eye movement (no parallax).',
          'Cartesian Sign Convention: Object distance u = −|u|, Image distance v = +|v|. Lens equation: 1/f = 1/v − 1/(−u) = 1/v + 1/u ⟹ f = (u v) / (u + v).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.focalLengthOpticsParallax,
          caption: 'Optical Bench Parallax Method: Convex lens at 50 cm, object pin O, tip-to-tip real inverted image coincidence at image pin I, and u–v graph.',
          guide: 'Notice how the line u = v intersects the rectangular hyperbolic u–v curve at point (2f, 2f).'
        },
        formulas: [
          {
            title: 'Lens Formula & Focal Length',
            formula: '\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} \\implies f = \\frac{u v}{u - v}',
            variables: 'u = -\\text{object distance}, v = +\\text{image distance} \\implies f = \\frac{|u||v|}{|u| + |v|}',
            unit: '\\text{cm}'
          },
          {
            title: 'Mirror Formula (Concave Mirror)',
            formula: '\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} \\implies f = \\frac{u v}{u + v}',
            variables: 'u < 0, v < 0 \\implies f = -\\frac{|u||v|}{|u| + |v|}',
            unit: '\\text{cm}'
          }
        ]
      },
      {
        heading: '2. Graphical Methods for Convex Lens',
        paragraphs: [
          '1. u vs v Graph: A rectangular hyperbola. The straight line u = v intersects the curve at (2f, 2f).',
          '2. (1/v) vs (1/u) Graph: A straight line with slope −1. X-intercept = 1/f, Y-intercept = 1/f.'
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Displacement Method Focal Length',
        expression: 'f = \\frac{D^2 - d^2}{4 D}',
        description: 'Where D = distance between object and screen (D > 4f), d = distance between two lens positions forming sharp images.'
      }
    ],
    neetImportantPoints: [
      'In displacement method, size of object O = √(I₁ · I₂), where I₁ and I₂ are image heights at the two conjugate positions.',
      'Minimum distance between a real object and its real image formed by a convex lens is 4f (at u = 2f, v = 2f).',
      'For a convex mirror, radius of curvature R is measured by placing the mirror behind an auxiliary convex lens such that reflected rays retrace to form image at object pin itself.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Placing object pin within focal length (u < f).',
        correctFact: 'If u < f, convex lens forms a virtual erect image that cannot be caught on a screen or localized tip-to-tip with a physical image pin behind the lens.',
        whyItMattersForNEET: 'Condition for real image formation in optical bench experiments.'
      }
    ],
    quickRevision: [
      'No parallax: Image and pin tips move together with sideways eye motion',
      'Convex lens: f = (|u| |v|) / (|u| + |v|)',
      'u–v graph intersects u = v line at (2f, 2f)',
      '1/v vs 1/u graph has slope = −1 and intercepts = 1/f',
      'Displacement method: f = (D² − d²) / (4D), Object size O = √(I₁ I₂)'
    ],
    practiceQuestions: [
      {
        question: 'In an experiment with a convex lens, a student plots a graph of 1/v versus 1/u. The intercepts on the 1/v and 1/u axes are both 0.05 cm⁻¹. The focal length of the convex lens is:',
        options: ['20 cm', '10 cm', '5 cm', '50 cm'],
        correctAnswer: 0,
        explanation: 'Intercept on axis = 1/f = 0.05 cm⁻¹ = 1/20 cm⁻¹. Therefore, focal length f = 20 cm.'
      }
    ],
    pyqs: [
      {
        year: 2022,
        exam: 'NEET UG',
        question: 'In displacement method to find the focal length of a convex lens, the ratio of sizes of images in two positions of the lens is 4. If the distance between two positions is 30 cm, then focal length of the lens is:',
        options: ['20 cm', '15 cm', '10 cm', '25 cm'],
        correctAnswer: 0,
        explanation: 'm₁/m₂ = 4 => (v₁/u₁)/(v₂/u₂) = 4. Since v₂ = u₁ and u₂ = v₁, (v₁/u₁)² = 4 => v₁/u₁ = 2 => v₁ = 2u₁. Distance between positions d = v₁ - u₁ = u₁ = 30 cm => v₁ = 60 cm. D = u₁ + v₁ = 30 + 60 = 90 cm. f = (D² - d²)/(4D) = (90² - 30²)/(4 × 90) = (8100 - 900)/360 = 7200/360 = 20 cm.'
      }
    ]
  },

  'phys-exp-prism-minimum-deviation': {
    topicId: 'phys-exp-prism-minimum-deviation',
    topicName: '14. Angle of Minimum Deviation for a Triangular Prism & Refractive Index (μ)',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Studying the variation of angle of deviation (δ) with angle of incidence (i) for a triangular glass prism, determining the angle of minimum deviation (δ_m), and calculating the refractive index (μ) of the prism glass.',
    basicIdea: [
      'When a monochromatic light ray passes through a prism of refracting angle A, total deviation is δ = (i + e) − A, where i = angle of incidence and e = angle of emergence.',
      'As angle of incidence i increases, deviation δ initially decreases, reaches a unique minimum value δ_m, and then increases.',
      'At Minimum Deviation (δ = δ_m): Angle of incidence equals angle of emergence (i = e), internal refracted ray travels parallel to base (r₁ = r₂ = A / 2).',
      'Prism Formula: μ = sin[(A + δ_m) / 2] / sin(A / 2).'
    ],
    importantTerms: [
      {
        term: 'Angle of Deviation (δ)',
        symbol: '\\delta = i + e - A',
        definition: 'The angle between the direction of the incident ray and the emergent ray after two successive refractions.',
        unit: 'degrees (^\\circ)'
      },
      {
        term: 'Angle of Minimum Deviation (δ_m)',
        symbol: '\\delta_m',
        definition: 'The smallest angle of deviation through which light is bent by the prism.',
        neetNote: 'At δ_m, ray passes symmetrically: i = e, r₁ = r₂ = A/2.'
      },
      {
        term: 'Refracting Angle of Prism (A)',
        symbol: 'A = r_1 + r_2',
        definition: 'The vertex angle between the two active refracting faces of the prism (typically 60° for equilateral prism).',
        neetNote: 'Measured by reflecting light from both faces: A = (Difference between reflected beams) / 2.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Prism Geometry & Prism Formula Derivation',
        paragraphs: [
          'First face refraction: sin i = μ sin r₁.',
          'Second face refraction: μ sin r₂ = sin e.',
          'From quadrilateral and triangle geometry: A = r₁ + r₂.',
          'Total deviation: δ = (i − r₁) + (e − r₂) = i + e − (r₁ + r₂) = i + e − A.',
          'At minimum deviation: i = e and r₁ = r₂ = A / 2. Then δ_m = 2i − A ⟹ i = (A + δ_m) / 2.',
          'Applying Snell’s Law: μ = sin i / sin r₁ = sin[(A + δ_m) / 2] / sin(A / 2).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.prismDeviation,
          caption: 'Prism Refraction & Minimum Deviation: Ray path, angles i, r₁, r₂, e, δ, symmetrical path at δ_m, and U-shaped i–δ curve.',
          guide: 'Observe that the i–δ graph is asymmetric with a single minimum at i = e.'
        },
        formulas: [
          {
            title: 'Prism Formula for Refractive Index',
            formula: '\\mu = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}',
            variables: 'A = \\text{angle of prism (60° for equilateral)}, \\delta_m = \\text{minimum deviation}',
            unit: '\\text{dimensionless}'
          },
          {
            title: 'Small-Angle / Thin Prism Deviation',
            formula: '\\delta \\approx (\\mu - 1) A',
            variables: 'A < 10^\\circ',
            unit: 'degrees'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Dispersive Power of Prism Material',
        expression: '\\omega = \\frac{\\delta_V - \\delta_R}{\\delta_Y} = \\frac{\\mu_V - \\mu_R}{\\mu_Y - 1}',
        description: 'Ratio of angular dispersion to mean deviation.'
      }
    ],
    neetImportantPoints: [
      'At minimum deviation, the refracted ray inside the prism is strictly PARALLEL to the base for an equilateral/isosceles prism.',
      'For any deviation δ > δ_m, there are TWO distinct angles of incidence (i and e) that produce the same deviation δ.',
      'For thin prism (A ≤ 10°), deviation δ = (μ − 1)A is independent of angle of incidence.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Assuming the i–δ graph is completely symmetric.',
        correctFact: 'The i–δ curve is asymmetric; deviation rises much more steeply at smaller angles of incidence than at larger angles.',
        whyItMattersForNEET: 'Tested in graphical identification questions.'
      }
    ],
    quickRevision: [
      'δ = i + e − A',
      'At minimum deviation: i = e, r₁ = r₂ = A/2, ray parallel to base',
      'Prism Formula: μ = sin[(A + δ_m)/2] / sin(A/2)',
      'Thin prism: δ = (μ − 1) A',
      'Dispersive power ω = (μ_V − μ_R) / (μ_Y − 1)'
    ],
    practiceQuestions: [
      {
        question: 'An equilateral glass prism has refractive index μ = √3. The angle of minimum deviation for this prism is:',
        options: ['60°', '30°', '45°', '90°'],
        correctAnswer: 0,
        explanation: 'For equilateral prism, A = 60°. μ = sin[(60° + δ_m)/2] / sin(30°) => √3 = sin[(60° + δ_m)/2] / 0.5 => sin[(60° + δ_m)/2] = √3/2 => (60° + δ_m)/2 = 60° => 60° + δ_m = 120° => δ_m = 60°.'
      }
    ],
    pyqs: [
      {
        year: 2023,
        exam: 'NEET UG',
        question: 'The angle of a prism is A. One of its refracting surfaces is silvered. Light rays falling at an angle of incidence 2A on the first surface return back through the same path after suffering reflection at the silvered surface. The refractive index of the prism is:',
        options: ['2 cos A', '2 sin A', 'cos A', 'sin A'],
        correctAnswer: 0,
        explanation: 'For ray to retrace, it must strike silvered second face normally: r₂ = 0. Since A = r₁ + r₂ = r₁ + 0 = r₁. At first surface: sin i = μ sin r₁ => sin(2A) = μ sin A => 2 sin A cos A = μ sin A => μ = 2 cos A.'
      }
    ]
  },

  'phys-exp-travelling-microscope-refractive-index': {
    topicId: 'phys-exp-travelling-microscope-refractive-index',
    topicName: '15. Refractive Index of a Glass Slab using Travelling Microscope',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the refractive index (μ) of a rectangular glass slab by measuring real and apparent thickness using a vertical Travelling Microscope.',
    basicIdea: [
      'When an ink mark on paper is viewed through a glass slab of thickness t and refractive index μ, normal refraction causes the mark to appear raised by an apparent normal shift: s = t (1 − 1/μ).',
      'Apparent Thickness = Real Thickness / μ ⟹ μ = Real Thickness / Apparent Thickness.',
      'Three Vertical Microscope Readings are taken:',
      '  R₁ = Focused directly on the ink mark on paper (without glass slab).',
      '  R₂ = Focused on the apparent image of the mark viewed through the glass slab.',
      '  R₃ = Focused on lycopodium powder / chalk dust sprinkled on the top surface of the glass slab.',
      'Real Thickness = R₃ − R₁, Apparent Thickness = R₃ − R₂ ⟹ μ = (R₃ − R₁) / (R₃ − R₂).'
    ],
    importantTerms: [
      {
        term: 'Travelling Microscope',
        definition: 'A compound microscope fitted on vertical and horizontal rails with a main scale and vernier scale to measure displacements with 0.01 mm precision.',
        neetNote: 'Least count = 1 MSD − 1 VSD (typically 0.001 cm = 0.01 mm).'
      },
      {
        term: 'Normal Shift (Apparent Elevation)',
        symbol: 's = t \\left(1 - \\frac{1}{\\mu}\\right) = R_2 - R_1',
        definition: 'The upward displacement of the virtual image of an object when placed in a denser optical medium.',
        unit: '\\text{mm or cm}'
      },
      {
        term: 'Lycopodium Powder',
        definition: 'Fine dry spore powder sprinkled on the top surface of the transparent glass slab to provide focusable particles for reading R₃.',
        neetNote: 'Essential because clear polished glass surface has no visible texture to focus.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Three-Reading Experimental Procedure & Calculation',
        paragraphs: [
          'Step 1 (Base Mark R₁): An ink cross mark is made on paper on the base. Microscope is focused sharply on this mark. Reading R₁ = MSR + VSR × LC.',
          'Step 2 (Apparent Image R₂): Glass slab is placed over the mark. The mark goes out of focus. Microscope is racked upwards until the virtual raised image P\' is sharply focused. Reading R₂ is recorded (R₂ > R₁).',
          'Step 3 (Top Surface R₃): Fine lycopodium powder is sprinkled on the top face of the slab. Microscope is racked upwards again until powder particles are in sharp focus. Reading R₃ is recorded (R₃ > R₂ > R₁).',
          'Real Thickness of Slab: t_{real} = R₃ − R₁.',
          'Apparent Thickness of Slab: t_{apparent} = R₃ − R₂.',
          'Refractive Index: μ = Real Thickness / Apparent Thickness = (R₃ − R₁) / (R₃ − R₂).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.travellingMicroscope,
          caption: 'Travelling Microscope 3-Stage Method: Reading R₁ (base mark), Reading R₂ (apparent raised mark P\'), Reading R₃ (top surface powder), and μ formula.',
          guide: 'Follow the vertical progression of microscope readings R₁ < R₂ < R₃.'
        },
        formulas: [
          {
            title: 'Refractive Index from Microscope Readings',
            formula: '\\mu = \\frac{\\text{Real Thickness}}{\\text{Apparent Thickness}} = \\frac{R_3 - R_1}{R_3 - R_2}',
            variables: 'R_1 = \\text{bottom mark}, R_2 = \\text{apparent image}, R_3 = \\text{top surface powder}',
            unit: '\\text{dimensionless}'
          },
          {
            title: 'Normal Apparent Shift',
            formula: 's = R_2 - R_1 = t \\left(1 - \\frac{1}{\\mu}\\right) = (R_3 - R_1)\\left(1 - \\frac{1}{\\mu}\\right)',
            variables: 's = \\text{upward apparent displacement}',
            unit: '\\text{cm}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Multiple Medium Composite Shift',
        expression: 's_{\\text{total}} = \\sum t_i \\left(1 - \\frac{1}{\\mu_i}\\right)',
        description: 'Total apparent shift through multiple transparent layers.'
      }
    ],
    neetImportantPoints: [
      'Microscope must ALWAYS be moved in ONE direction (upwards) while taking readings R₁, R₂, R₃ to eliminate backlash error in rack-and-pinion screw.',
      'Order of readings on the vertical scale: R₁ < R₂ < R₃.',
      'Refractive index μ is always greater than 1 (μ > 1 for optical medium denser than air).'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Calculating apparent thickness as (R₂ − R₁) instead of (R₃ − R₂).',
        correctFact: 'R₂ − R₁ is the normal shift (apparent elevation). Apparent thickness is the depth from top to apparent image: R₃ − R₂.',
        whyItMattersForNEET: 'Major conceptual pitfall in NEET optics.'
      }
    ],
    quickRevision: [
      'R₁ = Base paper mark reading (without slab)',
      'R₂ = Apparent mark through slab (R₂ > R₁)',
      'R₃ = Top surface lycopodium powder reading (R₃ > R₂)',
      'Real thickness = R₃ − R₁, Apparent thickness = R₃ − R₂',
      'μ = (R₃ − R₁) / (R₃ − R₂)',
      'Shift s = R₂ − R₁ = t (1 − 1/μ)'
    ],
    practiceQuestions: [
      {
        question: 'In an experiment to determine the refractive index of a glass slab using a travelling microscope, the readings are: Mark on paper R₁ = 1.50 cm, Apparent mark through slab R₂ = 2.50 cm, Top surface powder R₃ = 4.50 cm. The refractive index of the glass slab is:',
        options: ['1.50', '1.33', '1.60', '1.40'],
        correctAnswer: 0,
        explanation: 'Real thickness = R₃ - R₁ = 4.50 - 1.50 = 3.00 cm. Apparent thickness = R₃ - R₂ = 4.50 - 2.50 = 2.00 cm. μ = Real Thickness / Apparent Thickness = 3.00 / 2.00 = 1.50.'
      }
    ],
    pyqs: [
      {
        year: 2020,
        exam: 'NEET UG',
        question: 'A microscope is focused on a mark on a piece of paper and then a slab of glass of thickness 3 cm and refractive index 1.5 is placed on the mark. How should the microscope be moved to get the mark in focus again?',
        options: ['1 cm upward', '2 cm upward', '1 cm downward', '4.5 cm upward'],
        correctAnswer: 0,
        explanation: 'Apparent normal shift s = t(1 - 1/μ) = 3(1 - 1/1.5) = 3(1 - 2/3) = 3 × 1/3 = 1 cm upward. Since the virtual image is formed 1 cm above the real mark, microscope must be racked 1 cm upward.'
      }
    ]
  },

  'phys-exp-pn-junction-diode-characteristics': {
    topicId: 'phys-exp-pn-junction-diode-characteristics',
    topicName: '16. Characteristic Curves of a p–n Junction Diode in Forward & Reverse Bias',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Drawing the V–I characteristic curves of a semiconductor p–n junction diode in forward bias and reverse bias, determining the knee voltage (threshold voltage V_th), and calculating forward and reverse dynamic resistance.',
    basicIdea: [
      'Forward Bias: p-side connected to positive terminal, n-side to negative terminal. Depletion layer width decreases, barrier potential is overcome, and current (in mA) increases exponentially above Knee Voltage (V_th ≈ 0.7 V for Si, 0.3 V for Ge).',
      'Reverse Bias: p-side connected to negative terminal, n-side to positive terminal. Depletion layer widens, barrier height increases, and only a tiny minority carrier reverse saturation current (in μA) flows, almost independent of applied voltage until breakdown.',
      'Dynamic Resistance: r_d = ΔV / ΔI (evaluated as reciprocal of slope at the operating point on the V–I curve).'
    ],
    importantTerms: [
      {
        term: 'Knee / Threshold Voltage (V_th)',
        symbol: 'V_{\\text{th}}',
        definition: 'Forward voltage at which the forward current starts increasing rapidly and non-linearly.',
        neetNote: 'Silicon: V_th ≈ 0.7 V; Germanium: V_th ≈ 0.3 V.'
      },
      {
        term: 'Dynamic (AC) Resistance',
        symbol: 'r_d = \\frac{\\Delta V}{\\Delta I}',
        definition: 'Reciprocal of slope of V–I characteristic curve at a given operating point.',
        unit: '\\Omega \\text{ (forward: } \\approx 10\\text{--}100\\,\\Omega\\text{; reverse: } > 10^6\\,\\Omega\\text{)}'
      },
      {
        term: 'Reverse Saturation Current (I_0)',
        symbol: 'I_0',
        definition: 'Extremely small drift current caused by minority charge carriers across the junction in reverse bias.',
        neetNote: 'Doubles for every 10°C rise in temperature.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Circuit Differences: Forward vs Reverse Bias',
        paragraphs: [
          'Forward Bias Circuit: Low voltage power supply (0–3 V), series current-limiting resistor, Milliammeter (0–100 mA in series), and Voltmeter (0–3 V in parallel).',
          'Reverse Bias Circuit: High voltage power supply (0–30 V), Microammeter (0–100 μA in series), and Voltmeter (0–30 V in parallel).',
          'Forward Dynamic Resistance: r_f = ΔV_f / ΔI_f (small, ~10–50 Ω).',
          'Reverse Dynamic Resistance: r_r = ΔV_r / ΔI_r (huge, ~10⁵–10⁶ Ω).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.diodesAndComponentIdentification,
          caption: 'p–n Junction & Zener Characteristics: Forward knee, reverse saturation current, Zener breakdown voltage V_z, and component multimeter identification matrix.',
          guide: 'Note the quadrant difference: Forward current is in mA, while reverse current is in μA.'
        },
        formulas: [
          {
            title: 'Dynamic Forward Resistance',
            formula: 'r_f = \\frac{\\Delta V_F}{\\Delta I_F}',
            variables: '\\Delta V_F = \\text{change in forward voltage}, \\Delta I_F = \\text{change in forward current (mA)}',
            unit: '\\Omega'
          },
          {
            title: 'Dynamic Reverse Resistance',
            formula: 'r_r = \\frac{\\Delta V_R}{\\Delta I_R}',
            variables: '\\Delta I_R = \\text{change in reverse current (}\\mu\\text{A)}',
            unit: '\\Omega\\text{ or }\\text{M}\\Omega'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Shockley Diode Equation',
        expression: 'I = I_0 \\left(e^{e V / \\eta k_B T} - 1\\right)',
        description: 'Exponential V–I characteristic of p–n junction.'
      }
    ],
    neetImportantPoints: [
      'In forward bias, current is measured in MILLIAMPERES (mA); in reverse bias, current is measured in MICROAMPERES (μA).',
      'Ideal diode acts as a closed switch (R = 0) in forward bias and an open switch (R = ∞) in reverse bias.',
      'Reverse saturation current I_0 is independent of reverse voltage but strongly dependent on temperature.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Using a microammeter for forward bias and milliammeter for reverse bias.',
        correctFact: 'Forward current is large (mA) due to majority carriers; Reverse current is tiny (μA) due to minority carriers.',
        whyItMattersForNEET: 'Frequent question testing instrument meter selection in practical exams.'
      }
    ],
    quickRevision: [
      'Forward bias: p to (+), n to (−) → depletion layer narrows → I in mA',
      'Reverse bias: p to (−), n to (+) → depletion layer widens → I in μA',
      'Knee voltage: Si ≈ 0.7 V, Ge ≈ 0.3 V',
      'Dynamic resistance r_d = ΔV / ΔI = 1 / slope',
      'Ideal diode: Forward R = 0, Reverse R = ∞'
    ],
    practiceQuestions: [
      {
        question: 'In the forward characteristics of a silicon diode, when voltage changes from 0.7 V to 0.8 V, the current increases from 10 mA to 30 mA. The dynamic resistance of the diode is:',
        options: ['5 Ω', '10 Ω', '20 Ω', '2.5 Ω'],
        correctAnswer: 0,
        explanation: 'r_d = ΔV / ΔI = (0.8 - 0.7) V / (30 - 10) mA = 0.1 V / (20 × 10⁻³ A) = 0.1 / 0.02 = 5 Ω.'
      }
    ],
    pyqs: [
      {
        year: 2021,
        exam: 'NEET UG',
        question: 'An ideal diode is connected in a circuit with a 5 V battery and a 100 Ω resistor in forward bias. The current flowing through the resistor is:',
        options: ['50 mA', '25 mA', '100 mA', '0 mA'],
        correctAnswer: 0,
        explanation: 'For an ideal diode in forward bias, resistance R_diode = 0 V drop. Current I = V / R = 5 V / 100 Ω = 0.05 A = 50 mA.'
      }
    ]
  },

  'phys-exp-zener-diode-characteristics': {
    topicId: 'phys-exp-zener-diode-characteristics',
    topicName: '17. Characteristic Curves of a Zener Diode & Reverse Breakdown Voltage',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Drawing the reverse V–I characteristic curve of a heavily doped Zener diode, determining the sharp Zener Breakdown Voltage (V_Z), and studying its application as a DC voltage regulator.',
    basicIdea: [
      'A Zener diode is a heavily doped p–n junction diode designed to operate safely in the reverse breakdown region without damage.',
      'Heavy doping creates an extremely narrow depletion layer (< 1 μm) and an intense internal electric field (~10⁶ V/m).',
      'At Zener Breakdown Voltage (V_Z), internal field emission ruptures covalent bonds, causing reverse current to increase tremendously while voltage across diode remains strictly constant.',
      'Voltage Regulator: When unregulated input voltage V_in > V_Z, excess voltage drops across series resistor R_s: V_in = I R_s + V_Z. Output voltage across load remains stabilized at V_out = V_Z.'
    ],
    importantTerms: [
      {
        term: 'Zener Breakdown Voltage (V_Z)',
        symbol: 'V_Z',
        definition: 'Specific reverse voltage at which sharp breakdown occurs and reverse current increases indefinitely with negligible change in voltage.',
        neetNote: 'Operates via internal field emission of electrons from valence band to conduction band.'
      },
      {
        term: 'Series Current-Limiting Resistor (R_s)',
        symbol: 'R_s',
        definition: 'Resistor placed in series with Zener diode to drop excess input voltage and protect the diode from exceeding maximum power rating P_max = V_Z · I_Zmax.',
        neetNote: 'R_s = (V_{in,min} − V_Z) / (I_{Z,min} + I_L).'
      },
      {
        term: 'Dynamic Zener Resistance (r_Z)',
        symbol: 'r_Z = \\frac{\\Delta V_Z}{\\Delta I_Z}',
        definition: 'The small AC resistance in the breakdown region (almost zero for ideal Zener: r_Z ≈ 0).',
        unit: '\\Omega'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Zener Diode Characteristics & Voltage Regulator Circuit',
        paragraphs: [
          'In reverse bias, before breakdown, tiny leakage current flows. At V = V_Z, the curve drops almost vertically.',
          'In the voltage regulator circuit: Unregulated DC supply V_in is connected across series resistor R_s and Zener diode. Load resistor R_L is connected in parallel with Zener diode.',
          'Total current: I = I_Z + I_L.',
          'Voltage relations: V_in = I R_s + V_Z ⟹ V_L = V_out = V_Z.',
          'If input voltage increases: I increases, I_Z absorbs the excess current, but V_Z and V_out remain perfectly constant.'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.diodesAndComponentIdentification,
          caption: 'Zener Diode Characteristics & Voltage Regulation: Sharp reverse breakdown V_z, constant voltage drop, and multimeter testing.',
          guide: 'Observe that in the reverse breakdown regime, ΔV is near zero while ΔI is large.'
        },
        formulas: [
          {
            title: 'Zener Voltage Regulator Formula',
            formula: 'V_{\\text{out}} = V_Z, \\quad I = I_Z + I_L = \\frac{V_{\\text{in}} - V_Z}{R_s}',
            variables: 'I_L = \\frac{V_Z}{R_L}, \\quad P_Z = V_Z I_Z',
            unit: '\\text{V, A, W}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Minimum Series Resistance for Zener',
        expression: 'R_{s,\\text{min}} = \\frac{V_{\\text{in,max}} - V_Z}{I_{Z,\\text{max}}}',
        description: 'Prevents thermal destruction of diode.'
      }
    ],
    neetImportantPoints: [
      'Zener diode is ALWAYS connected in REVERSE BIAS when used as a voltage regulator.',
      'Zener breakdown occurs in heavily doped diodes at low reverse voltages (< 6 V) via quantum mechanical tunneling.',
      'Avalanche breakdown occurs in lightly doped diodes at higher voltages (> 6 V) via impact ionization collision multiplication.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Connecting Zener in forward bias for voltage regulation.',
        correctFact: 'In forward bias, Zener acts like an ordinary diode (0.7 V drop). Voltage regulation requires REVERSE BIAS breakdown.',
        whyItMattersForNEET: 'Crucial concept tested repeatedly in NEET.'
      }
    ],
    quickRevision: [
      'Zener diode: Heavily doped p–n junction, thin depletion layer',
      'Operates in REVERSE BREAKDOWN as DC voltage regulator',
      'Output voltage V_out = V_Z = constant',
      'Series resistor drops excess voltage: V_in = I R_s + V_Z',
      'Zener breakdown: field emission (<6 V); Avalanche breakdown: impact ionization (>6 V)'
    ],
    practiceQuestions: [
      {
        question: 'A Zener diode of breakdown voltage 10 V is used as a voltage regulator in a circuit with input voltage 15 V and series resistance R_s = 200 Ω. If load resistance R_L = 1 kΩ, the Zener current I_Z is:',
        options: ['15 mA', '25 mA', '10 mA', '5 mA'],
        correctAnswer: 0,
        explanation: 'V_out = V_Z = 10 V. Load current I_L = V_out / R_L = 10 V / 1000 Ω = 10 mA. Total current from supply: I = (V_in - V_Z) / R_s = (15 - 10) / 200 = 5 / 200 = 25 mA. Zener current: I_Z = I - I_L = 25 mA - 10 mA = 15 mA.'
      }
    ],
    pyqs: [
      {
        year: 2022,
        exam: 'NEET UG',
        question: 'In a Zener regulated power supply, a Zener diode with V_Z = 6.0 V is used for regulation. The load current is to be 4.0 mA and the unregulated input is 10.0 V. The value of series resistor R_s if Zener current is 5 times load current is:',
        options: ['166.7 Ω', '200.0 Ω', '150.0 Ω', '250.0 Ω'],
        correctAnswer: 0,
        explanation: 'I_L = 4 mA. I_Z = 5 × 4 mA = 20 mA. Total current I = I_L + I_Z = 4 + 20 = 24 mA = 0.024 A. Voltage across R_s: V_Rs = V_in - V_Z = 10.0 - 6.0 = 4.0 V. R_s = V_Rs / I = 4.0 / 0.024 = 166.67 Ω.'
      }
    ]
  },

  'phys-exp-component-identification': {
    topicId: 'phys-exp-component-identification',
    topicName: '18. Identification of Diode, LED, Transistor, IC, Resistor & Capacitor from a Mixed Collection',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Identifying electronic components (Resistor, Capacitor, Diode, LED, Transistor, Integrated Circuit) from a mixed collection using visual inspection, terminal counting, and Multimeter (Ohmmeter) unidirectional vs bidirectional conduction tests.',
    basicIdea: [
      'Visual / Terminal Identification:',
      '  • Resistor: 2 terminals, cylindrical body with colored bands (BBROYGBVGW code) or fixed printed value.',
      '  • Capacitor: 2 terminals, cylindrical or disc shape. Electrolytic capacitors have marked polarity (+ / −) and one longer positive lead.',
      '  • Diode (Rectifier): 2 terminals, black cylindrical package with a silver/white ring marking the Cathode (n-side).',
      '  • LED: 2 terminals, transparent/colored epoxy lens. Longer lead is Anode (+), flat edge on rim indicates Cathode (−).',
      '  • Transistor: 3 terminals (Emitter, Base, Collector), metallic D-shaped or plastic TO-92 casing with flat face.',
      '  • IC (Integrated Circuit): Multi-terminal rectangular flat package (DIP) with 8, 14, 16 or more dual in-line pins and an indexing notch at Pin 1.',
      'Multimeter Conduction Testing (Resistance Mode):',
      '  • Resistor: Conducts equally in both directions with constant finite resistance.',
      '  • Capacitor: Initially shows low resistance (pointer deflects due to charging), then resistance increases to infinity (no steady conduction in DC).',
      '  • Diode & LED: Unidirectional conduction! High resistance when reverse biased; low resistance when forward biased. LED emits light during forward conduction.',
      '  • Transistor: Exhibits two back-to-back p–n junctions (Base-Emitter and Base-Collector conduct unidirectionally).'
    ],
    importantTerms: [
      {
        term: 'Multimeter (AVO Meter)',
        definition: 'Electronic measuring instrument capable of measuring AC/DC voltage (V), direct current (A), and resistance in ohms (Ω).',
        neetNote: 'When set to resistance mode (Ω), the red lead is connected to the internal battery positive in digital multimeters.'
      },
      {
        term: 'Resistor Colour Code',
        symbol: 'R = (AB \\times 10^C \\pm D\\%)',
        definition: 'Standard color band coding mnemonic: B B R O Y of Great Britain had Very Good Wife (0 to 9) with Gold (±5%) and Silver (±10%) tolerance.',
        neetNote: 'Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Grey=8, White=9.'
      },
      {
        term: 'Unidirectional vs Bidirectional Device',
        definition: 'Bidirectional devices (Resistors) conduct current equally regardless of polarity. Unidirectional devices (Diodes, LEDs) conduct current in only one direction.',
        neetNote: 'Core test used in laboratory component sorting.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Identification Flowchart & Multimeter Testing Matrix',
        paragraphs: [
          'Step 1: Count the number of terminals:',
          '  • If 2 terminals: Could be Resistor, Capacitor, Diode, or LED.',
          '  • If 3 terminals: Transistor (BJT / FET).',
          '  • If more than 3 terminals (8, 14, 16+): Integrated Circuit (IC).',
          'Step 2: Connect Multimeter in Resistance (Ω) mode across the two terminals and observe deflection in both polarities:',
          '  • Case A (Resistor): Same finite resistance R in both forward and reverse connections.',
          '  • Case B (Capacitor): Multimeter needle deflects momentarily and then quickly decays back to infinite resistance (charging curve).',
          '  • Case C (Diode): Shows low resistance in one direction (forward bias) and infinite resistance upon reversing leads (reverse bias).',
          '  • Case D (LED): Shows low resistance and GLOWS with light in forward bias, and shows infinite resistance in reverse bias.',
          'Step 3: Transistor testing (3 terminals): Identify the common Base terminal that shows diode-like forward conduction to both remaining terminals (Emitter and Collector).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.diodesAndComponentIdentification,
          caption: 'Electronic Component Identification Matrix: Resistor, capacitor, diode, LED, transistor, IC, and multimeter testing rules.',
          guide: 'Review the comparison between 2-terminal, 3-terminal, and multi-pin IC packages.'
        },
        tables: [
          {
            title: 'Multimeter Component Identification Summary Table',
            headers: ['Component', 'Terminals', 'Forward Connection', 'Reverse Connection', 'Key Characteristic'],
            rows: [
              ['Resistor', '2', 'Finite resistance R', 'Same finite resistance R', 'Bidirectional constant resistance'],
              ['Capacitor', '2', 'Momentary deflection → ∞', 'Momentary deflection → ∞', 'Charges via DC, blocks steady DC'],
              ['Diode', '2', 'Low resistance (~10–50 Ω)', 'Infinite resistance (∞)', 'Unidirectional conduction'],
              ['LED', '2', 'Low resistance & Emits light', 'Infinite resistance (no light)', 'Glows only in forward bias'],
              ['Transistor', '3 (E, B, C)', 'Conducts E-B and C-B', 'Infinite in reverse', 'Two p-n junctions sharing Base'],
              ['IC Chip', '8 to 16+', 'Specific pinout matrix', 'Specific pinout matrix', 'Dual In-line Package (DIP) with notch']
            ]
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Resistor Colour Code Value',
        expression: 'R = (d_1 \\times 10 + d_2) \\times 10^n \\pm \\text{Tolerance}\\%',
        description: 'First two bands = significant digits, 3rd band = multiplier 10^n, 4th band = tolerance.'
      }
    ],
    neetImportantPoints: [
      'In an LED, the longer lead is ALWAYS the Anode (positive terminal) and shorter lead / flat notch is the Cathode (negative terminal).',
      'An electrolytic capacitor has marked polarity; connecting it in reverse bias across high voltage can rupture the dielectric and cause it to explode.',
      'Colour code mnemonic: B B R O Y Great Britain Very Good Wife (0, 1, 2, 3, 4, 5, 6, 7, 8, 9).'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Confusing a diode with a resistor during continuity check.',
        correctFact: 'A resistor gives identical reading in both probe orientations; a diode conducts in ONLY ONE probe orientation.',
        whyItMattersForNEET: 'Direct question on component distinguishing logic.'
      }
    ],
    quickRevision: [
      '2 terminals: Resistor (bidirectional), Capacitor (decay to ∞), Diode/LED (unidirectional)',
      '3 terminals: Transistor (Emitter, Base, Collector)',
      '8+ pins: Integrated Circuit (IC / DIP)',
      'LED: Emits light in forward bias only; longer lead is Anode (+)',
      'Resistor color code: BBROYGBVGW (0 to 9), Gold = ±5%, Silver = ±10%'
    ],
    practiceQuestions: [
      {
        question: 'A student tests a two-terminal electronic component with a multimeter. In one orientation of probes, the multimeter reads a low resistance of 30 Ω and emits light. When the probes are reversed, it reads infinite resistance. The component is:',
        options: ['LED', 'p-n junction diode', 'Resistor', 'Capacitor'],
        correctAnswer: 0,
        explanation: 'Low resistance in one direction with light emission and infinite resistance in reverse direction uniquely identifies an LED (Light Emitting Diode).'
      }
    ],
    pyqs: [
      {
        year: 2023,
        exam: 'NEET UG',
        question: 'A carbon resistor has colored strips in the order Yellow, Violet, Brown and Gold. The resistance value of the resistor is:',
        options: ['(47 × 10¹ ± 5%) Ω = (470 ± 5%) Ω', '(47 × 10² ± 5%) Ω', '(47 × 10¹ ± 10%) Ω', '(57 × 10¹ ± 5%) Ω'],
        correctAnswer: 0,
        explanation: 'Yellow = 4, Violet = 7, Brown = 10¹, Gold = ±5%. R = 47 × 10¹ Ω ± 5% = (470 ± 23.5) Ω = (470 ± 5%) Ω.'
      }
    ]
  }
};
