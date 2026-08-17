import { DetailedTopicContent } from '../../types/neet';
import { EXP_DIAGRAMS } from './expDiagrams';

export const EXP_TOPICS_1: Record<string, DetailedTopicContent> = {
  'phys-exp-vernier-calipers': {
    topicId: 'phys-exp-vernier-calipers',
    topicName: '1. Vernier Calipers — Principle, Least Count & Zero Error',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Vernier Calipers is a precision measuring instrument designed by Pierre Vernier to measure internal diameter, external diameter, depth of cylindrical/spherical objects, and length with an accuracy of 0.1 mm (0.01 cm).',
    basicIdea: [
      'The principle of Vernier is that N divisions of the Vernier Scale (VSD) coincide with (N - 1) divisions of the Main Scale (MSD).',
      'The difference between the length of 1 Main Scale Division and 1 Vernier Scale Division is known as the Least Count (Vernier Constant).',
      'Total Reading = Main Scale Reading (MSR) + (Vernier Scale Reading (VSR) × Least Count) − (Zero Error with sign).'
    ],
    importantTerms: [
      {
        term: 'Main Scale Division (MSD)',
        symbol: '1\\text{ MSD}',
        definition: 'The smallest value directly readable on the fixed main ruler scale, typically 1 mm or 0.1 cm.',
        neetNote: 'Always check if 1 cm is divided into 10 or 20 divisions in the question statement.'
      },
      {
        term: 'Vernier Scale Division (VSD)',
        symbol: '1\\text{ VSD}',
        definition: 'The length of one single division marked on the sliding vernier plate.',
        neetNote: 'If n VSD = (n - 1) MSD, then 1 VSD = ((n - 1)/n) MSD.'
      },
      {
        term: 'Least Count / Vernier Constant (VC)',
        symbol: 'LC = 1\\text{ MSD} - 1\\text{ VSD}',
        definition: 'The smallest measurement that can be reliably measured by the instrument.',
        neetNote: 'Standard metric calipers: LC = 1 mm - 0.9 mm = 0.1 mm = 0.01 cm.'
      },
      {
        term: 'Positive Zero Error',
        definition: 'When the zero mark of the vernier scale lies to the RIGHT of the main scale zero mark when jaws touch. It reads more than actual.',
        neetNote: 'Correction is NEGATIVE: True Reading = Observed Reading − (+e).'
      },
      {
        term: 'Negative Zero Error',
        definition: 'When the zero mark of the vernier scale lies to the LEFT of the main scale zero mark when jaws touch. It reads less than actual.',
        neetNote: 'Correction is POSITIVE: If p-th vernier division coincides, e = −(N − p) × LC.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Instrument Anatomy, Principle & Formulae',
        paragraphs: [
          'A standard Vernier Calipers consists of a fixed steel frame with a Main Scale calibrated in mm/cm, fixed and movable lower jaws (for external dimensions), upper jaws (for internal dimensions), and a thin metallic metallic strip/tail at the back (for measuring depth of cavities).',
          'Mathematical Principle: Let 1 MSD = s. If n divisions of vernier scale coincide with m divisions of main scale (usually m = n - 1), then n · VSD = m · MSD, so 1 VSD = (m/n) · MSD.',
          'Least Count (LC) = 1 MSD − 1 VSD = s − (m/n)s = s(1 − m/n) = s/n (when m = n - 1).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.vernierCalipers,
          caption: 'Complete Anatomy of Vernier Calipers: Main scale, sliding vernier scale, jaws, depth strip, and least count evaluation.',
          guide: 'Inspect the alignment between 0 of vernier scale and main scale, and locate the coinciding division.'
        },
        formulas: [
          {
            title: 'Least Count (Vernier Constant)',
            formula: 'LC = 1\\text{ MSD} - 1\\text{ VSD} = \\frac{1\\text{ MSD}}{n}',
            variables: 'n = \\text{total number of vernier divisions}',
            unit: '\\text{mm or cm}'
          },
          {
            title: 'True Measured Length',
            formula: 'L_{\\text{true}} = \\text{MSR} + (n_{\\text{coinciding}} \\times LC) - (\\text{Zero Error})',
            variables: 'MSR = \\text{Main Scale Reading}, n_{\\text{coinciding}} = \\text{Vernier coincidence}',
            unit: '\\text{cm or mm}'
          }
        ],
        importantPoints: [
          'If n VSD = (n - 1) MSD, LC = 1 MSD / n.',
          'If n VSD = (n + 1) MSD (retrograde vernier), LC = 1 VSD - 1 MSD = 1 MSD / n.',
          'Never forget to subtract the zero error with its proper algebraic sign.'
        ]
      },
      {
        heading: '2. Zero Error Determination & Correction',
        paragraphs: [
          'Positive Zero Error (+e): When jaws are brought in contact without any object, if 0 of vernier is to the RIGHT of 0 of main scale, say the 4th VSD coincides, then Zero Error = +4 × LC. True Reading = Observed Reading − (+4 × LC).',
          'Negative Zero Error (−e): When jaws are in contact, if 0 of vernier is to the LEFT of 0 of main scale, say total divisions N = 10 and 6th division coincides, then Zero Error = −(10 − 6) × LC = −4 × LC. True Reading = Observed Reading − (−4 × LC) = Observed Reading + 4 × LC.'
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'General Least Count Formula',
        expression: 'LC = 1\\text{ MSD} - 1\\text{ VSD} = \\text{MSD} \\times \\left(1 - \\frac{m}{n}\\right)',
        description: 'Where m main scale divisions equal n vernier divisions.'
      },
      {
        formulaName: 'Volume of Cylinder / Sphere',
        expression: 'V_{\\text{cylinder}} = \\pi \\left(\\frac{D}{2}\\right)^2 L, \\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi \\left(\\frac{D}{2}\\right)^3',
        description: 'Using diameter D and height L measured with calipers.'
      }
    ],
    neetImportantPoints: [
      'In NEET 2024 / 2023 / 2021 questions, examiner changes the number of divisions: e.g., 20 VSD = 16 MSD, where 1 MSD = 1 mm. Then 1 VSD = 16/20 = 0.8 mm, LC = 1 - 0.8 = 0.2 mm = 0.02 cm.',
      'Always check the units of MSR and LC before adding them — MSR is often in cm or mm.',
      'Zero error is an INSTRUMENTAL systematic error. It can be completely eliminated by algebraic subtraction.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Adding positive zero error instead of subtracting it.',
        correctFact: 'True Reading = Observed Reading − (Zero Error). A positive error must be subtracted; a negative error becomes an addition (+ |e|).',
        whyItMattersForNEET: 'Direct question in NEET on zero error correction signs.'
      },
      {
        commonConfusion: 'Calculating negative zero error as −(p × LC) instead of −(N − p) × LC.',
        correctFact: 'For negative zero error, count backwards from the N-th division: e = −(N − p) × LC.',
        whyItMattersForNEET: 'Most common numerical trap in vernier calipers questions.'
      }
    ],
    quickRevision: [
      'LC = 1 MSD − 1 VSD = 1 MSD / n (if n VSD = n - 1 MSD)',
      'Total Reading = MSR + (Coinciding VSD × LC) − (Zero Error)',
      'Positive Zero Error: Vernier 0 is to right of Main 0 → Subtract from reading',
      'Negative Zero Error: Vernier 0 is to left of Main 0 → Add |e| to reading',
      'Uses: Internal diameter (upper jaws), external diameter (lower jaws), depth (tail strip)'
    ],
    practiceQuestions: [
      {
        question: 'A Vernier Calipers has 1 mm marks on the main scale. 20 vernier scale divisions coincide with 19 main scale divisions. When measuring the diameter of a cylinder, the zero of the vernier lies between 3.2 cm and 3.3 cm, and the 8th vernier division coincides with a main scale mark. The instrument has a zero error of −0.01 cm. The true diameter is:',
        options: ['3.24 cm', '3.25 cm', '3.23 cm', '3.28 cm'],
        correctAnswer: 1,
        explanation: '1 MSD = 1 mm = 0.1 cm. 20 VSD = 19 MSD => 1 VSD = 19/20 MSD = 0.095 cm. LC = 0.1 - 0.095 = 0.005 cm. MSR = 3.2 cm. Observed Reading = 3.2 + 8 × 0.005 = 3.2 + 0.040 = 3.24 cm. True Reading = Observed - (Zero Error) = 3.24 - (-0.01) = 3.25 cm.'
      }
    ],
    pyqs: [
      {
        year: 2021,
        exam: 'NEET UG',
        question: 'A screw gauge or vernier calipers with 1 MSD = 1 mm has 10 divisions on vernier scale coinciding with 9 divisions on main scale. When jaws are closed, 0 of vernier lies to the right of main scale zero and 6th division coincides. What is the zero error?',
        options: ['+0.06 cm', '+0.06 mm', '−0.06 cm', '−0.06 mm'],
        correctAnswer: 1,
        explanation: 'LC = 1 mm - 9/10 mm = 0.1 mm = 0.01 cm. Since vernier 0 is to the right, zero error is positive: e = +6 × LC = +6 × 0.1 mm = +0.6 mm (or +0.06 cm). In mm units, +0.6 mm; in cm, +0.06 cm.'
      }
    ]
  },

  'phys-exp-screw-gauge': {
    topicId: 'phys-exp-screw-gauge',
    topicName: '2. Screw Gauge (Micrometer) — Pitch, Least Count & Backlash Error',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'A Screw Gauge (micrometer) is an instrument based on the principle of a screw and nut mechanism, used to measure extremely small dimensions such as the diameter of a thin metallic wire or thickness of a glass sheet with a precision of 0.01 mm (0.001 cm).',
    basicIdea: [
      'Principle: Linear displacement along the axis is directly proportional to the angle of rotation of the circular screw head.',
      'Pitch = Linear distance moved on pitch scale in one complete rotation of the circular head.',
      'Least Count = Pitch / Total number of circular scale divisions (CSD).',
      'Total Reading = Linear Pitch Scale Reading (PSR) + (Coinciding Circular Scale Reading (CSR) × LC) − (Zero Error).'
    ],
    importantTerms: [
      {
        term: 'Pitch',
        symbol: 'p',
        definition: 'The distance advanced by the screw spindle on the linear pitch scale per one complete 360° rotation.',
        neetNote: 'Pitch = (Distance advanced on pitch scale) / (Number of full rotations).'
      },
      {
        term: 'Least Count of Screw Gauge',
        symbol: 'LC = \\frac{\\text{Pitch}}{N}',
        definition: 'The linear distance travelled by the screw spindle when the circular thimble is turned through 1 circular division.',
        neetNote: 'Standard: Pitch = 1 mm, N = 100 divisions → LC = 1 mm / 100 = 0.01 mm = 0.001 cm.'
      },
      {
        term: 'Positive Zero Error (Screw Gauge)',
        definition: 'When the stud and spindle touch, if the zero mark of the circular scale lies BELOW the reference baseline.',
        neetNote: 'Circular reading is n divisions: Zero Error = +n × LC. Subtracted from observed reading.'
      },
      {
        term: 'Negative Zero Error (Screw Gauge)',
        definition: 'When the stud and spindle touch, if the zero mark of the circular scale lies ABOVE the reference baseline.',
        neetNote: 'If n-th division coincides: Zero Error = −(N − n) × LC. Correction is positive.'
      },
      {
        term: 'Backlash Error',
        definition: 'Play or looseness between screw threads caused by wear and tear. When the direction of rotation is reversed, the screw rotates without moving forward linearly.',
        neetNote: 'Avoided by always turning the ratchet in ONE single direction during a measurement.'
      },
      {
        term: 'Ratchet Head',
        definition: 'A spring-loaded friction clutch at the end of the thimble that slips when uniform pressure is reached.',
        neetNote: 'Prevents over-tightening and deformation of delicate specimens.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Working Principle, Construction & Formulae',
        paragraphs: [
          'A micrometer screw gauge consists of a U-shaped metal frame, a fixed stud (anvil), a movable screw spindle, a linear main sleeve (pitch scale), and a rotating thimble (circular scale) with a ratchet head.',
          'Ratchet ensures constant measuring force across multiple readings by slipping with a click sound when optimal contact is made.'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.screwGauge,
          caption: 'Screw Gauge Anatomy: U-frame, anvil, spindle, pitch scale, reference line, circular scale, and ratchet mechanism.',
          guide: 'Note the reference baseline alignment with circular scale graduations and pitch scale linear markers.'
        },
        formulas: [
          {
            title: 'Least Count of Micrometer',
            formula: 'LC = \\frac{\\text{Pitch}}{\\text{Total Number of Circular Divisions (N)}}',
            variables: 'N = \\text{divisions on circular thimble}',
            unit: '\\text{mm or cm}'
          },
          {
            title: 'Observed Diameter / Thickness',
            formula: 'D = \\text{PSR} + (n_{\\text{circular}} \\times LC) - (\\pm \\text{Zero Error})',
            variables: 'PSR = \\text{Pitch Scale Reading}, n_{\\text{circular}} = \\text{coinciding CSD}',
            unit: '\\text{mm or cm}'
          }
        ]
      },
      {
        heading: '2. Density & Cross-Sectional Area Calculations',
        paragraphs: [
          'When measuring wire radius r = D/2, cross-sectional area A = πr² = π(D/2)². Fractional error in area: ΔA/A = 2(ΔD/D).',
          'Volume of wire of length L: V = π(D/2)²L. Fractional error in volume: ΔV/V = 2(ΔD/D) + ΔL/L.'
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Screw Gauge Reading Formula',
        expression: 'D_{\\text{true}} = \\text{PSR} + (\\text{CSR} \\times LC) - (\\text{Zero Error})',
        description: 'True thickness/diameter accounting for instrumental zero error.'
      }
    ],
    neetImportantPoints: [
      'In NEET, if the question says "screw moves 0.5 mm in 2 rotations", then Pitch = 0.5 mm / 2 = 0.25 mm! Do NOT blindly assume pitch is 1 mm.',
      'Ratchet must be used to take the final reading — never rotate forcefully via the thimble.',
      'Backlash error is eliminated by rotating only in the forward direction.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Assuming circular scale 0 above reference line is positive error.',
        correctFact: 'If 0 is ABOVE reference line, the screw has already overshot 0, so it is a NEGATIVE zero error: e = −(N − n) × LC.',
        whyItMattersForNEET: 'Frequent question in NEET Physics testing micrometer zero reading.'
      }
    ],
    quickRevision: [
      'Pitch = Linear distance in 1 rotation',
      'Least Count = Pitch / Total Circular Divisions',
      'Positive Zero Error: Circular 0 is below baseline → Subtract (+e)',
      'Negative Zero Error: Circular 0 is above baseline → Add |e| where e = −(N − n) × LC',
      'Backlash error is minimized by turning in one continuous direction'
    ],
    practiceQuestions: [
      {
        question: 'A screw gauge has a pitch of 0.5 mm and there are 50 divisions on its circular scale. Before starting measurement, when the two studs touch, 45th division of circular scale coincides with reference line and zero of pitch scale is not visible. What is the zero error?',
        options: ['+0.05 mm', '−0.05 mm', '−0.45 mm', '+0.45 mm'],
        correctAnswer: 1,
        explanation: 'LC = 0.5 mm / 50 = 0.01 mm. Since 45th division coincides and 0 is not visible (circular 0 is above reference line), it has negative zero error: e = -(50 - 45) × 0.01 mm = -5 × 0.01 mm = -0.05 mm.'
      }
    ],
    pyqs: [
      {
        year: 2020,
        exam: 'NEET UG',
        question: 'A screw gauge has least count of 0.01 mm and there are 50 divisions in its circular scale. The pitch of the screw gauge is:',
        options: ['0.01 mm', '0.25 mm', '0.5 mm', '1.0 mm'],
        correctAnswer: 2,
        explanation: 'LC = Pitch / N => Pitch = LC × N = 0.01 mm × 50 = 0.5 mm.'
      }
    ]
  },

  'phys-exp-simple-pendulum': {
    topicId: 'phys-exp-simple-pendulum',
    topicName: '3. Simple Pendulum — L–T² Graph & Acceleration due to Gravity (g)',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the acceleration due to gravity (g) and studying the variation of time period (T) of a simple pendulum with its effective length (L) using an L–T² straight-line graph.',
    basicIdea: [
      'Time period of simple pendulum for small angular amplitude (θ < 10°): T = 2π√(L/g).',
      'Squaring both sides: T² = (4π²/g) · L, which is of the form y = mx (a straight line passing through the origin).',
      'Effective length L = length of suspension thread (l) + hook length (h) + radius of bob (r) = l + h + r.',
      'Acceleration due to gravity: g = 4π² · (L / T²) = 4π² · (1 / slope of T² vs L graph) = 4π² · (slope of L vs T² graph).'
    ],
    importantTerms: [
      {
        term: 'Effective Length of Pendulum',
        symbol: 'L = l + h + r',
        definition: 'Distance from the point of suspension (knife-edge/split cork) to the center of gravity (C.G.) of the spherical bob.',
        neetNote: 'r is measured with Vernier Calipers as Diameter / 2.'
      },
      {
        term: 'Time Period',
        symbol: 'T = \\frac{t}{n}',
        definition: 'Time taken for one complete back-and-forth oscillation. Measured by timing n oscillations (usually n = 20 or 30).',
        neetNote: 'Timing 20-30 oscillations reduces the human reaction time error Δt / t.'
      },
      {
        term: 'Seconds Pendulum',
        definition: 'A pendulum whose time period is exactly 2.0 seconds (frequency = 0.5 Hz).',
        neetNote: 'On Earth (g = 9.8 m/s²), effective length of seconds pendulum L ≈ 99.4 cm ≈ 1 metre.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Theoretical Derivation, Experimental Setup & L–T² Graph',
        paragraphs: [
          'Restoring torque for small angle θ: τ = −mg L sinθ ≈ −mgL θ = I α = (mL²) α.',
          'Therefore α = −(g/L)θ = −ω²θ, giving SHM with angular frequency ω = √(g/L) and time period T = 2π√(L/g).',
          'Graph of L (y-axis) vs T² (x-axis) is a straight line passing through origin with slope m = L / T² = g / (4π²). Thus g = 4π² × (slope).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.simplePendulum,
          caption: 'Experimental Setup of Simple Pendulum: Rigid support, split cork, effective length L = l + r, and L vs T² linear graph.',
          guide: 'Notice how the L vs T² graph has slope = g / (4π²), yielding experimental g value.'
        },
        formulas: [
          {
            title: 'Time Period of Simple Pendulum',
            formula: 'T = 2\\pi \\sqrt{\\frac{L}{g}} \\implies T^2 = \\frac{4\\pi^2}{g} L',
            variables: 'L = \\text{effective length}, g = \\text{acceleration due to gravity}',
            unit: '\\text{s}'
          },
          {
            title: 'Acceleration due to Gravity',
            formula: 'g = 4\\pi^2 \\left(\\frac{L}{T^2}\\right) = 4\\pi^2 \\cdot \\text{Slope}(L \\text{ vs } T^2)',
            variables: 'g = 9.8\\text{ m/s}^2',
            unit: '\\text{m/s}^2'
          },
          {
            title: 'Percentage Error in g',
            formula: '\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta T}{T} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta t}{t}',
            variables: 't = \\text{total time for } n \\text{ oscillations}, \\Delta t = \\text{least count of stopwatch}',
            unit: '\\%'
          }
        ]
      },
      {
        heading: '2. Error Minimization & Experimental Precautions',
        paragraphs: [
          'Angular amplitude must be kept very small (θ < 4° to 6°) so that sinθ ≈ θ holds accurately.',
          'To minimize percentage error in time, measure the time of 30 to 50 oscillations instead of a single oscillation.',
          'Bob should move in a vertical plane without any circular or conical wobbling.'
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Length of Seconds Pendulum',
        expression: 'L_{\\text{seconds}} = \\frac{g T^2}{4\\pi^2} = \\frac{9.8 \\times (2)^2}{4\\pi^2} \\approx 0.993\\text{ m} = 99.3\\text{ cm}',
        description: 'Effective length required for T = 2 s.'
      }
    ],
    neetImportantPoints: [
      'Time period is independent of mass, density, or material of the bob, provided effective length L remains constant.',
      'If hollow bob is filled with water that slowly leaks from a hole at bottom: C.G. first lowers (L increases, T increases), reaches a maximum, and when completely empty C.G. returns to center (L returns to original, T decreases back to original).',
      'Fractional error formula: Δg/g = (ΔL/L) + 2(Δt/t).'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Thinking T increases as mass of bob increases.',
        correctFact: 'T = 2π√(L/g) is completely independent of the mass of the bob.',
        whyItMattersForNEET: 'Conceptual NEET trap question.'
      }
    ],
    quickRevision: [
      'T = 2π√(L/g) → T² ∝ L (L–T² graph is linear through origin)',
      'g = 4π² (L / T²) = 4π² × slope(L vs T²)',
      'Effective length L = thread length + hook + bob radius',
      'Δg/g = (ΔL/L) + 2(ΔT/T) = (ΔL/L) + 2(Δt/t)',
      'Seconds Pendulum: T = 2 s, L ≈ 1 metre on Earth'
    ],
    practiceQuestions: [
      {
        question: 'In an experiment to determine g using a simple pendulum, the measured length is L = 100.0 cm with accuracy 1 mm, and the time for 100 oscillations is 200.0 s with a stopwatch of 0.1 s resolution. The percentage error in g is:',
        options: ['0.2%', '0.1%', '0.3%', '0.5%'],
        correctAnswer: 0,
        explanation: 'ΔL/L = 0.1 cm / 100.0 cm = 0.001 (0.1%). ΔT/T = Δt/t = 0.1 s / 200.0 s = 0.0005 (0.05%). Δg/g = ΔL/L + 2(Δt/t) = 0.1% + 2(0.05%) = 0.1% + 0.1% = 0.2%.'
      }
    ],
    pyqs: [
      {
        year: 2019,
        exam: 'NEET UG',
        question: 'The period of oscillation of a simple pendulum is T = 2π√(L/g). Measured value of L is 20.0 cm known to 1 mm accuracy and time for 100 oscillations of the pendulum is found to be 90 s using a wrist watch of 1 s resolution. The accuracy in the determination of g is:',
        options: ['3%', '1%', '5%', '2%'],
        correctAnswer: 0,
        explanation: 'ΔL/L = 0.1/20.0 = 0.005. Δt/t = 1/90 ≈ 0.0111. Δg/g = 0.005 + 2(0.0111) = 0.005 + 0.0222 = 0.0272 ≈ 3%.'
      }
    ]
  },

  'phys-exp-metre-scale-moments': {
    topicId: 'phys-exp-metre-scale-moments',
    topicName: '4. Metre Scale — Principle of Moments & Mass Determination',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the mass of a metre stick or an unknown body using the Principle of Moments (Rotational Equilibrium) on a knife-edge fulcrum.',
    basicIdea: [
      'Principle of Moments: For a body in rotational equilibrium about a pivot, the sum of clockwise moments equals the sum of anticlockwise moments.',
      'Torque τ = Force × Perpendicular distance from fulcrum = m g · d.',
      'Unknown Mass: m₁ · d₁ = m₂ · d₂ ⟹ m₁ = m₂ · (d₂ / d₁).',
      'Mass of Metre Stick (M): Balancing scale at off-center pivot O with known mass m at one arm gives M · (x_G − x_O) = m · (x_O − x_m).'
    ],
    importantTerms: [
      {
        term: 'Principle of Moments',
        symbol: '\\sum \\tau_{\\text{anticlockwise}} = \\sum \\tau_{\\text{clockwise}}',
        definition: 'Condition for rotational equilibrium: total net external torque about any axis of rotation is zero.',
        neetNote: 'Forces acting at the fulcrum itself produce zero torque because perpendicular distance d = 0.'
      },
      {
        term: 'Center of Gravity (C.G.) of Metre Stick',
        symbol: 'x_G \\approx 50.0\\text{ cm}',
        definition: 'The point where the whole weight of the uniform metre scale acts vertically downwards.',
        neetNote: 'If the scale is non-uniform, find G first by balancing the scale alone on the knife edge.'
      },
      {
        term: 'Knife-Edge Fulcrum',
        definition: 'A sharp wedge support providing a line contact for the scale to rotate freely without significant friction.',
        neetNote: 'Normal reaction R = (m₁ + m₂ + M)g acts vertically upwards at the fulcrum.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Theoretical Framework & Balancing Equations',
        paragraphs: [
          'Rotational equilibrium requires ∑τ = 0. For a metre scale pivoted at distance d from knife edge, each suspended mass m_i creates torque τ_i = m_i g · d_i.',
          'Determining mass of unknown body (m_1) using known mass (m_2): Place pivot at 50 cm mark (C.G. of scale). Suspend m_1 at distance d_1 on left and m_2 at distance d_2 on right. In balance: m_1 g d_1 = m_2 g d_2 ⟹ m_1 = m_2 (d_2 / d_1).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.metreScaleMoments,
          caption: 'Principle of Moments Apparatus: Metre scale balanced on knife-edge fulcrum with unknown mass m₁ and known mass m₂.',
          guide: 'Check how the weight of the scale acts through 50 cm mark and cancels out when pivoted at center.'
        },
        formulas: [
          {
            title: 'Principle of Moments Equation',
            formula: 'm_1 g d_1 = m_2 g d_2 \\implies m_1 d_1 = m_2 d_2',
            variables: 'd_1, d_2 = \\text{arm lengths from knife edge}',
            unit: '\\text{g or kg}'
          },
          {
            title: 'Mass of Metre Stick (M)',
            formula: 'M = m \\cdot \\frac{d_m}{d_G} = m \\cdot \\frac{|x_O - x_m|}{|x_G - x_O|}',
            variables: 'x_O = \\text{fulcrum position}, x_G = \\text{center of gravity (50 cm)}, x_m = \\text{known mass position}',
            unit: '\\text{g}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Metre Stick Mass Determination',
        expression: 'M (50 - x_0) = m (x_0 - x_1)',
        description: 'When fulcrum is at x_0 (between 50 cm and x_1).'
      }
    ],
    neetImportantPoints: [
      'When the scale is NOT pivoted at the 50 cm mark, you MUST include the weight of the metre scale (M g) acting at its C.G. (50 cm).',
      'The reaction force at the knife edge R = (M + m₁ + m₂)g does not create any torque about the knife edge.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Forgetting the torque due to the weight of the scale itself when the knife edge is not at 50 cm.',
        correctFact: 'Whenever the fulcrum is displaced from 50 cm, the scale mass M exerts a moment M g × |50 − x_fulcrum|.',
        whyItMattersForNEET: 'Classic 4-mark trap question in NEET rotational equilibrium.'
      }
    ],
    quickRevision: [
      'Clockwise Moment = Anticlockwise Moment (m₁d₁ = m₂d₂)',
      'Scale weight Mg acts at 50 cm mark (Center of Gravity)',
      'Normal reaction at fulcrum: R = (m₁ + m₂ + M)g',
      'Thread loops must be thin and vertical to measure true horizontal distances'
    ],
    practiceQuestions: [
      {
        question: 'A uniform metre stick of mass M is balanced on a knife edge at the 40 cm mark when a mass of 20 g is suspended at the 10 cm mark. The mass M of the metre stick is:',
        options: ['40 g', '60 g', '30 g', '80 g'],
        correctAnswer: 1,
        explanation: 'Fulcrum is at 40 cm. C.G. of scale is at 50 cm (lever arm = 50 - 40 = 10 cm). Mass of 20 g is at 10 cm (lever arm = 40 - 10 = 30 cm). Anticlockwise moment = 20 g × 30 cm = 600 g·cm. Clockwise moment = M × 10 cm. Equilibrium: M × 10 = 600 => M = 60 g.'
      }
    ],
    pyqs: [
      {
        year: 2022,
        exam: 'NEET UG',
        question: 'A metre stick is balanced on a knife edge at its centre. When two coins, each of mass 5 g are put on top of the other at the 12.0 cm mark, the stick is found to be balanced at 45.0 cm. The mass of the metre stick is:',
        options: ['66.0 g', '56.0 g', '60.0 g', '72.0 g'],
        correctAnswer: 0,
        explanation: 'Coins total mass = 10 g at 12 cm. New fulcrum = 45 cm. Coin lever arm = 45 - 12 = 33 cm. C.G. of stick is at 50 cm, so stick lever arm = 50 - 45 = 5 cm. Anticlockwise moment = 10 g × 33 cm = 330 g·cm. Clockwise moment = M × 5 cm. Equilibrium: 5 M = 330 => M = 66 g.'
      }
    ]
  },

  'phys-exp-youngs-modulus': {
    topicId: 'phys-exp-youngs-modulus',
    topicName: "5. Young's Modulus of a Metallic Wire — Searle's Apparatus",
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: "Determining Young's Modulus of elasticity (Y) of a metallic wire using Searle's apparatus by measuring elongation (ΔL) produced by suspended loads (M) with a spherometer/micrometer spirit level.",
    basicIdea: [
      "Young's Modulus Y = Normal Stress / Longitudinal Strain = (F / A) / (ΔL / L) = (M g L) / (π r² ΔL).",
      "Searle's apparatus uses two identical wires (Reference/Dummy wire and Experimental wire) suspended from the same ceiling to eliminate errors due to thermal expansion and ceiling yield.",
      'Elongation ΔL is measured with a micrometer screw/spherometer attached to a sensitive spirit level.'
    ],
    importantTerms: [
      {
        term: "Young's Modulus",
        symbol: 'Y = \\frac{M g L}{\\pi r^2 \\Delta L}',
        definition: 'Ratio of longitudinal tensile stress to longitudinal strain within the elastic limit.',
        neetNote: 'Depends ONLY on the material and temperature of the wire, independent of wire length or radius.'
      },
      {
        term: 'Reference Wire & Experimental Wire',
        definition: 'Two wires of identical material, length, and cross-section suspended side-by-side.',
        neetNote: 'Compensates automatically for room temperature expansion and sagging of ceiling support.'
      },
      {
        term: 'Dead Load (Initial Tension)',
        definition: 'A small constant load (e.g. 1 kg) hung on both wires to remove kinks and keep them straight and taut.',
        neetNote: 'Not included in the load M that produces the measured elongation ΔL.'
      }
    ],
    conceptExplanation: [
      {
        heading: "1. Construction of Searle's Apparatus & Formula",
        paragraphs: [
          "Searle's apparatus consists of two rectangular metal frames suspended by two long thin wires of the same material and length from a rigid ceiling.",
          'The reference wire carries a constant dead weight, while the experimental wire carries a slotted weight hanger.',
          'A sensitive spirit level is pivoted between the two frames. When experimental wire stretches under load M, the spirit level tilts. The micrometer screw is rotated to level the air bubble back to center, giving elongation ΔL directly.'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.youngsModulus,
          caption: "Searle's Apparatus for Young's Modulus: Reference wire, experimental wire, spirit level, micrometer screw, and load-elongation curve.",
          guide: 'Notice how the slope of Load (M) vs Elongation (ΔL) graph yields Young Modulus Y directly.'
        },
        formulas: [
          {
            title: "Young's Modulus Formula",
            formula: 'Y = \\frac{\\text{Stress}}{\\text{Strain}} = \\frac{M g / (\\pi r^2)}{\\Delta L / L} = \\frac{M g L}{\\pi r^2 \\Delta L}',
            variables: 'L = \\text{initial length}, r = \\text{wire radius}, M = \\text{load}, \\Delta L = \\text{elongation}',
            unit: '\\text{N/m}^2\\text{ or Pa}'
          },
          {
            title: 'Maximum Fractional Error in Y',
            formula: '\\frac{\\Delta Y}{Y} = \\frac{\\Delta M}{M} + \\frac{\\Delta g}{g} + \\frac{\\Delta L}{L} + 2\\frac{\\Delta r}{r} + \\frac{\\Delta(\\Delta L)}{\\Delta L}',
            variables: '\\Delta r = \\text{least count of screw gauge used to measure radius}',
            unit: '\\%'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: "Young's Modulus using Slope of M vs ΔL",
        expression: 'Y = \\frac{g L}{\\pi r^2} \\cdot \\text{Slope}\\left(\\frac{M}{\\Delta L}\\right)',
        description: 'Derived from linear load vs elongation graph.'
      }
    ],
    neetImportantPoints: [
      'The radius r appears as r² in the denominator, so error in measuring radius (Δr/r) contributes TWICE (2Δr/r) to total percentage error in Y.',
      'Always take readings while loading AND while unloading to check for elastic hysteresis or exceeding elastic limit.',
      'Y is an intensive material property — breaking a wire in half does NOT change its Young Modulus.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Thinking thicker or longer wire has higher Young modulus.',
        correctFact: 'Young modulus Y is a constant for a given material. Force constant k = Y A / L changes, but Y does not.',
        whyItMattersForNEET: 'Fundamental conceptual question in NEET elasticity.'
      }
    ],
    quickRevision: [
      'Y = (M g L) / (π r² ΔL)',
      'Searle’s dual-wire system eliminates thermal expansion & support sagging errors',
      'Spirit level + Micrometer measures micro-elongation ΔL',
      'Error in radius (r) contributes 2 × (Δr/r) to ΔY/Y'
    ],
    practiceQuestions: [
      {
        question: 'In an experiment to determine Young’s modulus of a wire, length L = 2.0 m, radius r = 0.5 mm, load M = 2.0 kg produces elongation ΔL = 0.25 mm. Taking g = 9.8 m/s², Young’s modulus is:',
        options: ['1.99 × 10¹¹ N/m²', '0.99 × 10¹¹ N/m²', '3.98 × 10¹¹ N/m²', '1.50 × 10¹¹ N/m²'],
        correctAnswer: 0,
        explanation: 'Y = (M g L) / (π r² ΔL) = (2.0 × 9.8 × 2.0) / (π × (0.5 × 10⁻³)² × 0.25 × 10⁻³) = 39.2 / (3.1416 × 0.25 × 10⁻⁶ × 0.25 × 10⁻³) = 39.2 / (1.9635 × 10⁻¹⁰) = 1.996 × 10¹¹ N/m².'
      }
    ],
    pyqs: [
      {
        year: 2018,
        exam: 'NEET UG',
        question: 'In Searle’s experiment to find Young’s modulus, the diameter of wire is measured using a screw gauge of least count 0.001 cm. The length is measured with a metre scale of least count 0.1 cm. Which measurement contributes most to error?',
        options: ['Length of wire', 'Diameter of wire', 'Load applied', 'Elongation'],
        correctAnswer: 1,
        explanation: 'Because diameter appears squared in denominator (A = π d²/4), percentage error in d is multiplied by 2, making it the most critical measurement.'
      }
    ]
  },

  'phys-exp-surface-tension-capillary': {
    topicId: 'phys-exp-surface-tension-capillary',
    topicName: '6. Surface Tension by Capillary Rise & Effect of Detergents',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the surface tension (T) of water by measuring the height (h) of liquid column in a capillary tube of internal radius r using a travelling microscope, and studying the effect of adding detergent.',
    basicIdea: [
      "Jurin's Law: The height of capillary rise is inversely proportional to the radius of capillary tube: h = (2 T cosθ) / (r ρ g).",
      'Surface Tension T = (r (h + r/3) ρ g) / (2 cosθ). For pure water on clean glass, angle of contact θ ≈ 0° (cosθ = 1), so T = (r (h + r/3) ρ g) / 2.',
      'The term r/3 represents the meniscus correction factor for the volume of liquid in the hemispherical meniscus.',
      'Effect of Detergents: Adding detergent or surfactant lowers the surface tension and increases the contact angle, dramatically reducing capillary rise h.'
    ],
    importantTerms: [
      {
        term: 'Surface Tension (T or S)',
        symbol: 'T = \\frac{F}{L}',
        definition: 'Tensile force per unit length acting in the surface plane perpendicular to an imaginary line drawn on the liquid surface.',
        unit: '\\text{N/m or J/m}^2'
      },
      {
        term: 'Capillary Rise (h)',
        symbol: 'h = \\frac{2 T \\cos\\theta}{r \\rho g}',
        definition: 'The vertical elevation of liquid inside a narrow-bore tube above the free liquid level in the trough.',
        neetNote: 'Measured from bottom of meniscus to the level surface in trough.'
      },
      {
        term: 'Meniscus Correction (r/3)',
        definition: 'Correction added to measured height h to account for the liquid volume contained in the concave meniscus.',
        neetNote: 'Corrected height h_c = h + (r / 3).'
      },
      {
        term: 'Angle of Contact (θ)',
        definition: 'Angle between tangent to liquid surface at point of contact and solid surface inside the liquid.',
        neetNote: 'Pure water on glass: θ ≈ 0°. Water with detergent: θ > 0°.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Theoretical Derivation & Jurin’s Law',
        paragraphs: [
          'Upward surface tension force around circumference: F_up = (2π r) · T cosθ.',
          'Downward weight of liquid column: W = mass × g = (Volume × ρ) × g = [π r² h + (π r³ − (2/3)π r³)] ρ g = π r² (h + r/3) ρ g.',
          'At equilibrium: (2π r) T cosθ = π r² (h + r/3) ρ g ⟹ T = [r (h + r/3) ρ g] / (2 cosθ).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.capillaryRise,
          caption: 'Capillary Rise Apparatus: Clean capillary tube, travelling microscope focus, meniscus correction r/3, and detergent comparison.',
          guide: 'Observe the inverted concave meniscus and how detergent lowers h by reducing surface tension.'
        },
        formulas: [
          {
            title: 'Surface Tension by Capillary Rise',
            formula: 'T = \\frac{r (h + r/3) \\rho g}{2 \\cos\\theta} \\approx \\frac{r h \\rho g}{2} \\quad (\\text{when } \\theta = 0^\\circ)',
            variables: 'r = \\text{internal radius}, h = \\text{height of rise}, \\rho = \\text{liquid density}',
            unit: '\\text{N/m}'
          }
        ]
      },
      {
        heading: '2. Effect of Detergents & Impurities',
        paragraphs: [
          'Detergent molecules consist of hydrophobic tails and hydrophilic heads that concentrate at the surface, disrupting cohesive hydrogen bonds between water molecules.',
          'This lowers surface tension T significantly (from ~0.072 N/m for clean water to ~0.030 N/m for soapy water).',
          'Consequently, the capillary rise height h drops sharply upon adding detergent.'
        ]
      }
    ],
    formulae: [
      {
        formulaName: "Jurin's Law",
        expression: 'h \\cdot r = \\frac{2 T \\cos\\theta}{\\rho g} = \\text{constant}',
        description: 'Capillary rise is inversely proportional to tube bore radius.'
      }
    ],
    neetImportantPoints: [
      'If a capillary tube is insufficient in length (L < h), the liquid rises to the top L and adjust its radius of curvature R such that h r = L R. Liquid DOES NOT overflow!',
      'In a zero-gravity satellite (g = 0), liquid rises to the full top of the tube regardless of length.',
      'Surface tension decreases with increase in temperature and vanishes at critical temperature.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Thinking water overflows from an insufficient capillary tube.',
        correctFact: 'Water never overflows; the meniscus flattens out (radius of curvature R increases) so that h_actual × R = constant.',
        whyItMattersForNEET: 'Frequently asked assertion-reasoning question in NEET.'
      }
    ],
    quickRevision: [
      'T = (r (h + r/3) ρ g) / (2 cosθ)',
      'Jurin’s Law: h ∝ 1/r (narrower tube → higher rise)',
      'Detergent lowers surface tension → reduces capillary rise h',
      'Insufficient length tube: liquid reaches top and flattens without overflowing'
    ],
    practiceQuestions: [
      {
        question: 'Water rises to a height of 10 cm in a capillary tube of radius r. When 2 drops of detergent are added, the surface tension is reduced to 1/2 of its original value and contact angle remains nearly 0°. The new height of capillary rise is:',
        options: ['5 cm', '10 cm', '20 cm', '2.5 cm'],
        correctAnswer: 0,
        explanation: 'h = (2 T cosθ) / (r ρ g) ∝ T. If T becomes T/2, then new height h\' = h / 2 = 10 cm / 2 = 5 cm.'
      }
    ],
    pyqs: [
      {
        year: 2020,
        exam: 'NEET UG',
        question: 'A capillary tube of radius r is immersed in water and water rises in it to a height h. The mass of water in the capillary is 5 g. Another capillary tube of radius 2r is immersed in water. The mass of water that will rise in this tube is:',
        options: ['2.5 g', '5.0 g', '10.0 g', '20.0 g'],
        correctAnswer: 2,
        explanation: 'Mass m = π r² h ρ. Since h = (2T)/(r ρ g) ∝ 1/r, we have m = π r² (2T / r ρ g) ρ = (2π T / g) · r ∝ r. When radius doubles (2r), mass doubles: m\' = 2 × 5 g = 10.0 g.'
      }
    ]
  }
};
