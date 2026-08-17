import { DetailedTopicContent } from '../../types/neet';
import { EXP_DIAGRAMS } from './expDiagrams';

export const EXP_TOPICS_2: Record<string, DetailedTopicContent> = {
  'phys-exp-viscosity-terminal-velocity': {
    topicId: 'phys-exp-viscosity-terminal-velocity',
    topicName: '7. Coefficient of Viscosity using Terminal Velocity (Stokes’ Law)',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the coefficient of viscosity (η) of a highly viscous liquid (e.g. glycerine or castor oil) by measuring the terminal velocity (v_t) of spherical steel/glass balls of known radius r falling under gravity.',
    basicIdea: [
      'When a small spherical body of radius r and density ρ falls through a viscous fluid of density σ and viscosity η, it experiences downward weight, upward buoyancy, and upward viscous drag.',
      "Stokes' Law Viscous Drag: F_v = 6 π η r v.",
      'Terminal Velocity (v_t) is attained when net force becomes zero: W = F_B + F_v ⟹ (4/3) π r³ ρ g = (4/3) π r³ σ g + 6 π η r v_t.',
      'Viscosity Coefficient: η = [2 r² (ρ − σ) g] / (9 v_t).',
      'Terminal velocity v_t is measured by recording time t taken by the sphere to fall a marked distance s in steady state: v_t = s / t.'
    ],
    importantTerms: [
      {
        term: 'Coefficient of Viscosity (η)',
        symbol: '\\eta',
        definition: 'Measure of internal fluid friction / resistance of liquid layers to relative sliding motion.',
        unit: '\\text{Pa}\\cdot\\text{s or N}\\cdot\\text{s/m}^2 = \\text{kg}/(\\text{m}\\cdot\\text{s}) = 10\\text{ Poise}'
      },
      {
        term: "Stokes' Law",
        symbol: 'F_v = 6\\pi \\eta r v',
        definition: 'Viscous resistive force opposing the motion of a smooth spherical particle through an infinite viscous fluid.',
        neetNote: 'Valid only for streamline laminar flow (low Reynolds number Re < 1).'
      },
      {
        term: 'Terminal Velocity (v_t)',
        symbol: 'v_t = \\frac{2 r^2 (\\rho - \\sigma) g}{9 \\eta}',
        definition: 'The constant maximum downward velocity attained by a falling body when gravitational pull is balanced by buoyancy and viscous drag.',
        neetNote: 'v_t ∝ r² (velocity increases with square of radius).'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Theoretical Derivation & Force Balance Equilibrium',
        paragraphs: [
          'Forces acting on sphere at steady state:',
          '1. Downward Weight: W = m g = (4/3) π r³ ρ g.',
          '2. Upward Buoyant Force (Archimedes): F_B = (4/3) π r³ σ g.',
          '3. Upward Viscous Drag (Stokes): F_v = 6 π η r v_t.',
          'Dynamic equilibrium: W − F_B = F_v ⟹ (4/3) π r³ (ρ − σ) g = 6 π η r v_t ⟹ η = [2 r² (ρ − σ) g] / (9 v_t).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.viscosityTerminalVelocity,
          caption: 'Viscosity Experiment by Terminal Velocity: Cylindrical jar with markings A, B, C, free-body diagram of falling sphere, and v_t vs r² graph.',
          guide: 'Inspect the equilibrium between weight (downwards), buoyant force (upwards), and Stokes drag 6πηrv_t (upwards).'
        },
        formulas: [
          {
            title: 'Terminal Velocity Expression',
            formula: 'v_t = \\frac{2}{9} \\frac{r^2 (\\rho - \\sigma) g}{\\eta}',
            variables: 'r = \\text{radius}, \\rho = \\text{sphere density}, \\sigma = \\text{liquid density}, \\eta = \\text{viscosity}',
            unit: '\\text{m/s}'
          },
          {
            title: 'Coefficient of Viscosity Formula',
            formula: '\\eta = \\frac{2 r^2 (\\rho - \\sigma) g}{9 v_t} = \\frac{2 r^2 (\\rho - \\sigma) g t}{9 s}',
            variables: 's = \\text{distance between reference marks B and C}, t = \\text{time of transit}',
            unit: '\\text{Pa}\\cdot\\text{s}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Relation between Terminal Velocity and Radius',
        expression: 'v_t \\propto r^2 \\implies \\frac{v_{t1}}{v_{t2}} = \\left(\\frac{r_1}{r_2}\\right)^2',
        description: 'Direct proportionality between terminal speed and square of radius.'
      }
    ],
    neetImportantPoints: [
      'If density of body is less than liquid (ρ < σ, e.g. air bubble in water), (ρ − σ) is negative, so terminal velocity is UPWARDS (bubble rises).',
      'The graph between terminal velocity v_t and r² is a straight line passing through origin with slope m = [2 (ρ − σ) g] / (9 η).',
      'Measurements must begin well below the liquid entry point (below mark B) to ensure terminal velocity is completely established.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Thinking terminal velocity is proportional to radius r instead of r².',
        correctFact: 'Weight ∝ r³, Stokes drag per unit velocity ∝ r, therefore net terminal velocity v_t ∝ r³/r = r².',
        whyItMattersForNEET: 'Very frequent numerical topic in NEET Fluids.'
      }
    ],
    quickRevision: [
      'Stokes Drag: F_v = 6 π η r v',
      'Terminal Velocity: v_t = 2 r² (ρ − σ) g / (9 η) ∝ r²',
      'Viscosity: η = 2 r² (ρ − σ) g / (9 v_t)',
      'If ρ < σ (air bubble in water), terminal velocity is directed upwards',
      '1 Decapoise (Pa·s) = 10 Poise (CGS unit)'
    ],
    practiceQuestions: [
      {
        question: 'Two spherical steel balls of radii r and 2r are dropped into a long column of glycerine. The ratio of their terminal velocities v₁/v₂ is:',
        options: ['1 : 2', '1 : 4', '1 : 8', '4 : 1'],
        correctAnswer: 1,
        explanation: 'v_t ∝ r². Therefore, v₁/v₂ = (r / 2r)² = 1 / 4.'
      }
    ],
    pyqs: [
      {
        year: 2023,
        exam: 'NEET UG',
        question: 'A spherical ball of radius r falls through a viscous fluid of viscosity η with terminal velocity v. The viscous force acting on the sphere is:',
        options: ['6πηrv', '6πηr²v', '6πηr/v', '6πηv/r'],
        correctAnswer: 0,
        explanation: 'According to Stokes\' law, the viscous resistive force acting on a sphere of radius r moving at terminal velocity v is F = 6πηrv.'
      }
    ]
  },

  'phys-exp-resonance-tube-sound': {
    topicId: 'phys-exp-resonance-tube-sound',
    topicName: '8. Speed of Sound using Resonance Tube & End Correction',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the speed of sound in air (v) at room temperature using a variable-length closed organ pipe (Resonance Tube) with tuning forks of known frequencies (f), and evaluating the acoustic end correction (e).',
    basicIdea: [
      'A resonance tube acts as an organ pipe closed at one end (water surface) and open at the other.',
      'First resonance occurs at fundamental node: l₁ + e = λ / 4.',
      'Second resonance occurs at first overtone: l₂ + e = 3λ / 4.',
      'Subtracting equations eliminates end correction: (l₂ − l₁) = λ / 2 ⟹ λ = 2 (l₂ − l₁).',
      'Speed of sound: v = f λ = 2 f (l₂ − l₁).',
      'End Correction: e = (l₂ − 3 l₁) / 2 = 0.6 r (where r = inner radius of tube).'
    ],
    importantTerms: [
      {
        term: 'Resonance',
        definition: 'Condition where the frequency of vibrating tuning fork matches the natural acoustic frequency of the air column, producing maximum sound intensity.',
        neetNote: 'Water level is adjusted until a sharp loudness peak is heard.'
      },
      {
        term: 'End Correction (e)',
        symbol: 'e \\approx 0.6 r = 0.3 D',
        definition: 'Distance beyond the physical rim of the tube where the acoustic antinode actually forms due to air particle momentum.',
        neetNote: 'Discovered by Lord Rayleigh. e = 0.6 r for open end.'
      },
      {
        term: 'Resonance Tube Ratio',
        definition: 'Theoretical ratio of resonant lengths: l₂ ≈ 3 l₁ (approximately, when e is neglected). With end correction, l₂ > 3 l₁.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Resonance Tube Mechanics & Mathematical Formulation',
        paragraphs: [
          'The apparatus consists of a vertical glass tube connected to a water reservoir. Tuning fork of known frequency f is struck on rubber pad and held horizontally above the mouth.',
          'At the closed bottom (water surface), air particles are fixed (displacement node). At the open top, particles oscillate freely forming a displacement antinode slightly outside the tube (at distance e).',
          'First Resonance (fundamental mode): l₁ + e = λ / 4.',
          'Second Resonance (3rd harmonic): l₂ + e = 3 λ / 4.',
          'Wavelength λ = 2 (l₂ − l₁), completely free from end correction error!',
          'Speed of sound: v = 2 f (l₂ − l₁).'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.resonanceTube,
          caption: 'Resonance Tube Apparatus: 1st resonance (l₁ + e = λ/4), 2nd resonance (l₂ + e = 3λ/4), antinode end correction e, and speed of sound calculation.',
          guide: 'Observe that subtracting l₁ from l₂ directly gives λ/2 without needing the end correction value.'
        },
        formulas: [
          {
            title: 'Speed of Sound in Air',
            formula: 'v = f \\lambda = 2 f (l_2 - l_1)',
            variables: 'f = \\text{frequency of tuning fork}, l_1, l_2 = \\text{1st and 2nd resonating lengths}',
            unit: '\\text{m/s}'
          },
          {
            title: 'End Correction (Rayleigh Formula)',
            formula: 'e = \\frac{l_2 - 3l_1}{2} = 0.6 r',
            variables: 'r = \\text{internal radius of tube}',
            unit: '\\text{cm or m}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Temperature Correction for Sound Velocity',
        expression: 'v_0 = v_t - 0.61 t',
        description: 'Speed of sound at 0°C from speed v_t measured at room temperature t in °C.'
      }
    ],
    neetImportantPoints: [
      'Tuning fork must be held so that its prongs vibrate along the axis of the tube (vertical motion of prongs).',
      'The formula v = 2f(l₂ − l₁) is completely independent of end correction e.',
      'Third resonance (if tube is long enough) occurs at l₃ + e = 5λ/4, so l₃ − l₂ = λ/2.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Thinking l₂ = 3 l₁ exactly.',
        correctFact: 'Because of end correction, l₂ + e = 3(l₁ + e) ⟹ l₂ = 3 l₁ + 2 e > 3 l₁.',
        whyItMattersForNEET: 'Direct question on comparing l₂ with 3l₁.'
      }
    ],
    quickRevision: [
      '1st resonance: l₁ + e = λ / 4',
      '2nd resonance: l₂ + e = 3λ / 4',
      'λ = 2 (l₂ − l₁) → Speed of sound v = 2 f (l₂ − l₁)',
      'End correction e = (l₂ − 3l₁) / 2 = 0.6 r',
      'Node at water surface, Antinode at (tube mouth + e)'
    ],
    practiceQuestions: [
      {
        question: 'In a resonance tube experiment with a tuning fork of frequency 512 Hz, the first and second resonance lengths are observed at 16.0 cm and 49.0 cm respectively. The speed of sound in air is:',
        options: ['337.9 m/s', '330.0 m/s', '348.2 m/s', '312.5 m/s'],
        correctAnswer: 0,
        explanation: 'v = 2 f (l₂ - l₁) = 2 × 512 × (49.0 - 16.0) cm/s = 1024 × 33.0 cm/s = 33792 cm/s = 337.92 m/s.'
      }
    ],
    pyqs: [
      {
        year: 2022,
        exam: 'NEET UG',
        question: 'In a resonance tube, the first resonance with a tuning fork occurs at 16 cm and the second at 49 cm. If the speed of sound is 330 m/s, the end correction of the tube is:',
        options: ['0.5 cm', '1.0 cm', '0.8 cm', '0.2 cm'],
        correctAnswer: 0,
        explanation: 'e = (l₂ - 3l₁) / 2 = (49 - 3 × 16) / 2 = (49 - 48) / 2 = 1 / 2 = 0.5 cm.'
      }
    ]
  },

  'phys-exp-calorimetry-mixtures': {
    topicId: 'phys-exp-calorimetry-mixtures',
    topicName: '9. Specific Heat Capacity by Method of Mixtures',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the specific heat capacity (s) of a given solid/metal cylinder or liquid using the Method of Mixtures in a Regnault’s copper calorimeter under the Law of Conservation of Heat Energy.',
    basicIdea: [
      'Principle of Calorimetry: In an insulated container, Heat Lost by Hot Body = Heat Gained by Cold Body + Heat Gained by Calorimeter & Stirrer.',
      'Heat Q = m · s · ΔT.',
      'Water Equivalent of Calorimeter (W) = m_c · s_c.',
      'Specific heat of solid: s = [(m_w s_w + m_c s_c) (T_m − T_1)] / [m (T_2 − T_m)], where T_2 is hot solid temperature, T_1 is initial water temperature, and T_m is equilibrium mixture temperature.'
    ],
    importantTerms: [
      {
        term: 'Specific Heat Capacity (s or c)',
        symbol: 's = \\frac{Q}{m \\Delta T}',
        definition: 'Amount of heat energy required to raise the temperature of unit mass (1 kg) of a substance by 1°C (or 1 K).',
        unit: '\\text{J}/(\\text{kg}\\cdot\\text{K}) = \\text{cal}/(\\text{g}\\cdot^\\circ\\text{C})'
      },
      {
        term: 'Water Equivalent (W)',
        symbol: 'W = m_c s_c',
        definition: 'Mass of water that would absorb or release the same amount of heat as the calorimeter for the same change in temperature.',
        unit: '\\text{g or kg}'
      },
      {
        term: 'Radiation Correction',
        definition: 'Correction added to observed final equilibrium temperature T_m to compensate for heat lost to surrounding air during mixing.',
        neetNote: 'Minimised by polishing calorimeter outer surface and double-wall air insulation.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Experimental Setup & Mathematical Balance',
        paragraphs: [
          'A copper calorimeter with copper stirrer is placed inside an outer wooden box insulated with felt/cotton.',
          'Mass of empty calorimeter + stirrer = m_c.',
          'Calorimeter is filled 2/3 with water (mass m_w = m_{cw} − m_c) at initial temperature T_1.',
          'Solid metal cylinder of mass m is heated in a steam heater/boiling water bath to steady temperature T_2 (usually 100°C).',
          'Hot solid is quickly transferred into the calorimeter, stirred vigorously, and maximum steady equilibrium temperature T_m is recorded.'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.calorimetryMixtures,
          caption: 'Method of Mixtures Apparatus: Polished copper calorimeter, wooden enclosure with air insulation, stirrer, thermometer, and heat conservation equation.',
          guide: 'Follow the heat flow: heat lost by hot solid is absorbed by water and the copper vessel.'
        },
        formulas: [
          {
            title: 'Heat Conservation Equation',
            formula: 'm s (T_2 - T_m) = (m_w s_w + m_c s_c)(T_m - T_1)',
            variables: 'm = \\text{solid mass}, s = \\text{solid specific heat}, s_w = 4200\\text{ J/kg K}, s_c = \\text{copper specific heat}',
            unit: '\\text{J}'
          },
          {
            title: 'Specific Heat of Solid',
            formula: 's = \\frac{(m_w s_w + m_c s_c)(T_m - T_1)}{m (T_2 - T_m)}',
            variables: 'T_2 = \\text{hot temperature}, T_1 = \\text{initial water temp}, T_m = \\text{mixture temp}',
            unit: '\\text{J}/(\\text{kg}\\cdot\\text{K})'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Water Equivalent Formula',
        expression: 'W = m_c \\frac{s_c}{s_w}',
        description: 'Effective equivalent mass of water for calorimeter.'
      }
    ],
    neetImportantPoints: [
      'Transfer of the hot solid from heater to calorimeter must be as rapid as possible to prevent convective heat loss in air.',
      'Calorimeter surface is polished highly reflective to minimize heat transfer via radiation.',
      'Specific heat of water s_w = 1 cal/(g·°C) = 4186 J/(kg·K).'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Forgetting the heat absorbed by the calorimeter and stirrer.',
        correctFact: 'The calorimeter vessel and stirrer warm up along with the water from T₁ to T_m: heat absorbed = (m_w s_w + m_c s_c)(T_m − T₁).',
        whyItMattersForNEET: 'Common calculation omission in NEET numerical problems.'
      }
    ],
    quickRevision: [
      'Heat Lost = Heat Gained: m s (T_hot − T_mix) = (m_w s_w + m_c s_c)(T_mix − T_cold)',
      'Specific heat: s = [(m_w s_w + m_c s_c)(T_m − T₁)] / [m (T₂ − T_m)]',
      'Water Equivalent W = m_c · (s_c / s_w)',
      'Insulating wooden box + air gap prevents conductive and convective losses'
    ],
    practiceQuestions: [
      {
        question: 'A 100 g metal block at 100°C is dropped into 150 g of water at 20°C contained in a copper calorimeter of mass 50 g and specific heat 0.1 cal/(g·°C). If the final mixture temperature is 25°C, the specific heat of the metal is (take specific heat of water = 1 cal/(g·°C)):',
        options: ['0.103 cal/(g·°C)', '0.205 cal/(g·°C)', '0.052 cal/(g·°C)', '0.315 cal/(g·°C)'],
        correctAnswer: 0,
        explanation: 'Heat gained by water & calorimeter = (150 × 1 + 50 × 0.1)(25 - 20) = (150 + 5) × 5 = 155 × 5 = 775 cal. Heat lost by metal = 100 × s × (100 - 25) = 100 × s × 75 = 7500 s. 7500 s = 775 => s = 775 / 7500 = 0.1033 cal/(g·°C).'
      }
    ],
    pyqs: [
      {
        year: 2019,
        exam: 'NEET UG',
        question: 'In a calorimetry experiment, heat capacity of calorimeter is 10 cal/°C. It contains 90 g of water at 20°C. When 100 g of hot liquid at 80°C is added, the equilibrium temperature is 40°C. Specific heat of the liquid is (s_water = 1 cal/g°C):',
        options: ['0.5 cal/(g·°C)', '0.25 cal/(g·°C)', '0.75 cal/(g·°C)', '1.0 cal/(g·°C)'],
        correctAnswer: 0,
        explanation: 'Heat gained = (m_w s_w + C_cal)(40 - 20) = (90 × 1 + 10)(20) = 100 × 20 = 2000 cal. Heat lost = m_liq · s_liq · (80 - 40) = 100 · s_liq · 40 = 4000 s_liq. 4000 s_liq = 2000 => s_liq = 0.5 cal/(g·°C).'
      }
    ]
  },

  'phys-exp-metre-bridge-resistivity': {
    topicId: 'phys-exp-metre-bridge-resistivity',
    topicName: '10. Resistivity of a Wire using Metre Bridge (Wheatstone Principle)',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the unknown resistance (X) and specific resistance / resistivity (ρ) of a metallic wire using a Metre Bridge based on the balanced Wheatstone Bridge principle.',
    basicIdea: [
      'A Metre Bridge is a practical form of Wheatstone Bridge with a 1-metre (100 cm) uniform manganin/constantan wire.',
      'At balance point (null deflection in galvanometer at length l): P / Q = R / X ⟹ l / (100 − l) = R / X ⟹ X = R · (100 − l) / l.',
      'Resistivity: ρ = (X · A) / L = (X · π r²) / L = [X · π (D/2)²] / L.',
      'Bridge Sensitivity is maximum when balance point is near the center (l ≈ 50 cm).'
    ],
    importantTerms: [
      {
        term: 'Balanced Wheatstone Condition',
        symbol: '\\frac{P}{Q} = \\frac{R}{S}',
        definition: 'When potential at galvanometer junctions is equal (V_B = V_D), zero current flows through the galvanometer.',
        neetNote: 'Galvanometer and cell positions can be interchanged without altering the balance point.'
      },
      {
        term: 'End Errors in Metre Bridge',
        symbol: '\\alpha, \\beta',
        definition: 'Systematic errors due to contact resistance at thick copper strips and non-coincidence of scale zero with wire ends.',
        neetNote: 'Eliminated by repeating experiment after interchanging known resistance R and unknown X in the gaps.'
      },
      {
        term: 'Manganin / Constantan Wire',
        definition: 'Alloy used for metre bridge wire due to high resistivity and near-zero temperature coefficient of resistance (α ≈ 0).',
        neetNote: 'Prevents resistance changes due to Joule heating during the experiment.'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Circuit Diagram & Balancing Equation',
        paragraphs: [
          'A uniform 1 m wire AC is stretched over a wooden board along a metre scale.',
          'Thick copper strips of negligible resistance form left and right gaps.',
          'Known resistance box R is connected in left gap; unknown wire X in right gap.',
          'A jockey connected through a sensitive galvanometer G is slid along wire AC until galvanometer reads zero deflection at balance point D (length AD = l cm, DC = 100 − l cm).',
          'Resistance of wire segment AD: P = r_0 · l; segment DC: Q = r_0 · (100 − l).',
          'Balance condition: P / Q = R / X ⟹ l / (100 − l) = R / X ⟹ X = R (100 − l) / l.'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.metreBridge,
          caption: 'Metre Bridge Circuit: 1 m wire, thick copper strips, resistance box R, unknown wire X, galvanometer G, sliding jockey, and Wheatstone bridge equivalence.',
          guide: 'Note that when balance point is at l = 50 cm, bridge sensitivity is at its peak and percentage error is minimum.'
        },
        formulas: [
          {
            title: 'Unknown Resistance Formula',
            formula: 'X = R \\left(\\frac{100 - l}{l}\\right)',
            variables: 'R = \\text{known resistance}, l = \\text{balancing length from zero end in cm}',
            unit: '\\Omega'
          },
          {
            title: 'Resistivity (Specific Resistance)',
            formula: '\\rho = \\frac{X \\cdot A}{L} = \\frac{X \\pi r^2}{L} = \\frac{X \\pi D^2}{4 L}',
            variables: 'L = \\text{length of unknown wire}, D = \\text{diameter measured with screw gauge}',
            unit: '\\Omega\\cdot\\text{m}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Maximum Fractional Error in Resistivity',
        expression: '\\frac{\\Delta\\rho}{\\rho} = \\frac{\\Delta X}{X} + 2\\frac{\\Delta D}{D} + \\frac{\\Delta L}{L}',
        description: 'Error propagation for wire resistivity.'
      }
    ],
    neetImportantPoints: [
      'Bridge sensitivity is highest when all 4 arm resistances are nearly equal (P ≈ Q ≈ R ≈ X), which places balancing length l close to 50 cm.',
      'Jockey should be pressed gently — NEVER dragged along the wire, which would scrape the wire and make its cross-sectional area non-uniform.',
      'Interchanging R and X and taking the average eliminates end errors.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Dragging the jockey forcefully along the wire.',
        correctFact: 'Dragging scratches the wire, alters uniformity of cross-sectional area A, and introduces resistance gradients.',
        whyItMattersForNEET: 'Direct question on experimental precautions.'
      }
    ],
    quickRevision: [
      'Metre Bridge principle: Wheatstone Bridge (P/Q = R/X)',
      'X = R (100 − l) / l',
      'Resistivity ρ = (X π r²) / L',
      'Wire material: Manganin/Constantan (high ρ, negligible α)',
      'Sensitivity is maximum at l = 50 cm; end errors eliminated by interchanging gaps'
    ],
    practiceQuestions: [
      {
        question: 'In a metre bridge, the balance point is found at 40 cm from the zero end when a known resistance of 3 Ω is connected in the left gap. The value of unknown resistance in the right gap is:',
        options: ['4.5 Ω', '2.0 Ω', '6.0 Ω', '1.5 Ω'],
        correctAnswer: 0,
        explanation: 'X = R (100 - l) / l = 3 × (100 - 40) / 40 = 3 × (60 / 40) = 3 × 1.5 = 4.5 Ω.'
      }
    ],
    pyqs: [
      {
        year: 2021,
        exam: 'NEET UG',
        question: 'A metre bridge is balanced with known resistance R in left gap and unknown X in right gap at length l. If X is shunted with an equal resistance X, to keep the balance point at the same position, the resistance in the left gap must be changed to:',
        options: ['R / 2', '2 R', 'R', '4 R'],
        correctAnswer: 0,
        explanation: 'Parallel combination of X with X gives X\' = X/2. Balance condition: R\' / X\' = l / (100 - l) = R / X => R\' / (X/2) = R / X => R\' = R / 2.'
      }
    ]
  },

  'phys-exp-ohms-law-resistance': {
    topicId: 'phys-exp-ohms-law-resistance',
    topicName: '11. Resistance using Ohm’s Law & V–I Characteristics',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Verifying Ohm’s Law (V = I R), determining the resistance per unit length of a given wire by plotting a linear V–I graph, and studying ohmic vs non-ohmic conductor behavior.',
    basicIdea: [
      'Ohm’s Law: Electric current (I) flowing through a metallic conductor is directly proportional to potential difference (V) across its ends, provided physical conditions (temperature, strain) remain constant.',
      'V = I · R ⟹ R = V / I = 1 / slope of I–V graph = slope of V–I graph.',
      'Circuit requires Ammeter in series (measures current I) and Voltmeter in parallel across resistor (measures voltage V).',
      'Rheostat is used as potential divider or variable resistor to vary current in steps.'
    ],
    importantTerms: [
      {
        term: "Ohm's Law",
        symbol: 'V = I R',
        definition: 'Linear relationship between applied voltage and resultant drift current in ohmic conductors.',
        neetNote: 'Temperature must remain strictly constant; prolonged current causes Joule heating (I²Rt) and increases R.'
      },
      {
        term: 'Ideal Ammeter & Voltmeter',
        definition: 'Ideal ammeter has ZERO resistance (connected in series); Ideal voltmeter has INFINITE resistance (connected in parallel).',
        neetNote: 'Real voltmeter draws tiny current, leading to slight systematic error: R_observed = V / I < R_actual.'
      },
      {
        term: 'Resistance per unit length',
        symbol: '\\rho_l = \\frac{R}{L}',
        definition: 'Resistance of wire divided by its length L measured with a metre scale.',
        unit: '\\Omega/\\text{m}'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Circuit Configuration & Graphical Determination',
        paragraphs: [
          'The circuit consists of a DC battery, plug key, rheostat (for current control), ammeter (in series), experimental resistance wire, and voltmeter (in parallel across wire).',
          'Current is varied in steps using the rheostat, and corresponding readings of Ammeter (I) and Voltmeter (V) are recorded.',
          'Graph of V (y-axis) vs I (x-axis) is a straight line passing through origin. Resistance R = ΔV / ΔI = slope.'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.ohmsLaw,
          caption: 'Ohm’s Law Circuit Diagram: Battery, key, rheostat, ammeter (series), voltmeter (parallel), and linear V–I characteristic graph.',
          guide: 'Note that V–I graph slope equals resistance R; higher slope represents higher resistance (or higher temperature).'
        },
        formulas: [
          {
            title: "Ohm's Law Resistance",
            formula: 'R = \\frac{V}{I} = \\text{Slope}(V \\text{ vs } I) = \\frac{\\Delta V}{\\Delta I}',
            variables: 'V = \\text{voltmeter reading in V}, I = \\text{ammeter reading in A}',
            unit: '\\Omega'
          },
          {
            title: 'Temperature Dependence of Resistance',
            formula: 'R_T = R_0 (1 + \\alpha \\Delta T)',
            variables: '\\alpha = \\text{temperature coefficient of resistance}',
            unit: '^\\circ\\text{C}^{-1}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Resistance per unit length',
        expression: 'r = \\frac{R}{L}',
        description: 'Where L is the stretched length of the resistance wire.'
      }
    ],
    neetImportantPoints: [
      'Slope of V–I graph = Resistance R. Slope of I–V graph = Conductance G = 1/R.',
      'For metallic conductors, as temperature increases, resistance increases (slope of V–I graph steepens).',
      'The key must be plugged in ONLY while taking readings to prevent Joule heating.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Confusing slope of V vs I with slope of I vs V.',
        correctFact: 'V on y-axis, I on x-axis ⟹ Slope = R. I on y-axis, V on x-axis ⟹ Slope = 1/R.',
        whyItMattersForNEET: 'Frequent graph interpretation question in NEET.'
      }
    ],
    quickRevision: [
      'V = I R → V–I graph is linear through origin',
      'R = Slope of (V vs I) graph = 1 / Slope of (I vs V) graph',
      'Ammeter in series (low R), Voltmeter in parallel (high R)',
      'Ohmic conductors: metals at constant temp; Non-ohmic: diodes, electrolytes'
    ],
    practiceQuestions: [
      {
        question: 'The V–I graphs for a metallic wire at two different temperatures T₁ and T₂ are straight lines with angles 30° and 60° with the current (I) axis respectively. The ratio of resistances R₁/R₂ is:',
        options: ['1 : 3', '3 : 1', '1 : √3', '√3 : 1'],
        correctAnswer: 0,
        explanation: 'Resistance R = slope = tanθ. R₁ = tan(30°) = 1/√3. R₂ = tan(60°) = √3. R₁/R₂ = (1/√3) / √3 = 1/3.'
      }
    ],
    pyqs: [
      {
        year: 2020,
        exam: 'NEET UG',
        question: 'For a metallic conductor, with increase in temperature, the slope of V–I graph (V on y-axis):',
        options: ['Increases', 'Decreases', 'Remains constant', 'First increases then decreases'],
        correctAnswer: 0,
        explanation: 'Slope of V–I graph represents resistance R. For metals, resistance increases with temperature (R = R₀(1+αΔT)), so the slope increases.'
      }
    ]
  },

  'phys-exp-galvanometer-half-deflection': {
    topicId: 'phys-exp-galvanometer-half-deflection',
    topicName: '12. Resistance & Figure of Merit of Galvanometer by Half-Deflection Method',
    subject: 'Physics',
    class: 'Class 11 & 12',
    classification: 'Unit 20: Experimental Skills',
    chapter: 'Unit 20 — Experimental Skills',
    whatIsThisTopic: 'Determining the internal resistance (G) and Figure of Merit (k) of a Moving Coil Galvanometer using the Half-Deflection Method.',
    basicIdea: [
      'Galvanometer deflection θ is directly proportional to current passing through it: I = k · θ, where k is the Figure of Merit.',
      'Full deflection θ is produced with high series resistance R: I_1 = E / (R + G) = k θ.',
      'When shunt resistance S is connected in parallel with galvanometer and key K₂ closed, deflection is reduced to exactly half (θ / 2).',
      'Galvanometer Resistance: G = (R · S) / (R − S).',
      'Figure of Merit: k = E / [(R + G) · θ]. Current for full scale deflection (N divisions): I_g = N · k.'
    ],
    importantTerms: [
      {
        term: 'Figure of Merit (k)',
        symbol: 'k = \\frac{I}{\\theta}',
        definition: 'The current required to produce a unit deflection (1 division) in the galvanometer scale.',
        unit: '\\text{A/division or }\\mu\\text{A/div}'
      },
      {
        term: 'Galvanometer Resistance (G)',
        symbol: 'G = \\frac{R S}{R - S}',
        definition: 'Internal resistance of the moving coil winding of the galvanometer.',
        unit: '\\Omega'
      },
      {
        term: 'Full Scale Deflection Current (I_g)',
        symbol: 'I_g = N \\cdot k',
        definition: 'Total current needed to deflect the pointer across all N divisions on the scale.',
        neetNote: 'Used for converting galvanometer into ammeter (S = I_g G / (I − I_g)) or voltmeter (R_s = V/I_g − G).'
      }
    ],
    conceptExplanation: [
      {
        heading: '1. Circuit Operation & Mathematical Derivation',
        paragraphs: [
          'Primary circuit: Cell of EMF E, key K₁, high resistance box R (thousands of ohms), and galvanometer G in series.',
          'With K₁ closed and K₂ open, R is adjusted to get an even deflection θ (e.g. 30 divisions). Current I = E / (R + G) = k θ.',
          'Secondary circuit: Shunt resistance box S and key K₂ connected across galvanometer G.',
          'With K₂ closed, S is adjusted until deflection drops to exactly θ/2.',
          'Current through galvanometer: I_g\' = I_total · [S / (S + G)] = k (θ / 2).',
          'Equating and simplifying: G = (R · S) / (R − S). Since R >> S, G ≈ S.'
        ],
        visual: {
          type: 'svg',
          svgContent: EXP_DIAGRAMS.galvanometerHalfDeflection,
          caption: 'Half-Deflection Method Circuit: Battery E, primary key K₁, series resistance R, galvanometer G, shunt resistance S, and shunt key K₂.',
          guide: 'Inspect the two-step sequence: Full deflection θ with K₂ open, then shunt S adjusted for θ/2 with K₂ closed.'
        },
        formulas: [
          {
            title: 'Galvanometer Resistance Formula',
            formula: 'G = \\frac{R S}{R - S}',
            variables: 'R = \\text{high series resistance}, S = \\text{shunt resistance for half deflection}',
            unit: '\\Omega'
          },
          {
            title: 'Figure of Merit Formula',
            formula: 'k = \\frac{E}{(R + G) \\theta}',
            variables: 'E = \\text{EMF of cell}, \\theta = \\text{deflection in divisions}',
            unit: '\\text{A/div}'
          }
        ]
      }
    ],
    formulae: [
      {
        formulaName: 'Conversion of Galvanometer into Ammeter',
        expression: 'S = \\frac{I_g G}{I - I_g}',
        description: 'Shunt resistance S connected in parallel.'
      },
      {
        formulaName: 'Conversion of Galvanometer into Voltmeter',
        expression: 'R_s = \\frac{V}{I_g} - G',
        description: 'High resistance R_s connected in series.'
      }
    ],
    neetImportantPoints: [
      'In half-deflection method, EMF of cell E must remain strictly constant throughout both steps.',
      'Series resistance R must be very large (typically > 2000 Ω) so that total circuit current does not change significantly when shunt S is introduced.',
      'If R >> S, then G ≈ S directly.'
    ],
    commonConfusions: [
      {
        commonConfusion: 'Thinking galvanometer resistance G = S always.',
        correctFact: 'Exact formula is G = (R S)/(R − S). G ≈ S is valid only when R >> S.',
        whyItMattersForNEET: 'Numerical questions with smaller R values test exact G formula.'
      }
    ],
    quickRevision: [
      'Half-deflection formula: G = (R · S) / (R − S)',
      'Figure of merit: k = E / [(R + G) θ]',
      'Full scale current: I_g = N · k',
      'Conversion to Ammeter: Low shunt S in parallel',
      'Conversion to Voltmeter: High resistance R_s in series'
    ],
    practiceQuestions: [
      {
        question: 'In a half-deflection experiment, with series resistance R = 5000 Ω, the deflection is 30 divisions. When a shunt S = 100 Ω is connected across the galvanometer, deflection becomes 15 divisions. The resistance of the galvanometer is:',
        options: ['102.04 Ω', '100.00 Ω', '98.00 Ω', '105.20 Ω'],
        correctAnswer: 0,
        explanation: 'G = (R S) / (R - S) = (5000 × 100) / (5000 - 100) = 500000 / 4900 = 5000 / 49 = 102.04 Ω.'
      }
    ],
    pyqs: [
      {
        year: 2023,
        exam: 'NEET UG',
        question: 'A galvanometer of resistance 50 Ω gives a full scale deflection for a current of 0.05 A. The value of resistance required to convert it into an ammeter of range 0 to 5 A is:',
        options: ['0.505 Ω', '0.25 Ω', '0.05 Ω', '1.0 Ω'],
        correctAnswer: 0,
        explanation: 'S = (I_g · G) / (I - I_g) = (0.05 × 50) / (5 - 0.05) = 2.5 / 4.95 = 0.505 Ω in parallel.'
      }
    ]
  }
};
