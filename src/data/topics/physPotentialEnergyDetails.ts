import { DetailedTopicContent } from '../../types/neet';

export const physPotentialEnergyDetails: DetailedTopicContent = {
  topicId: 'phys-potential-energy',
  topicName: 'Electrostatic Potential Energy & Dipole in E-Field',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electrostatics',
  chapter: 'Electrostatic Potential and Capacitance',

  whatIsThisTopic:
    'Electrostatic Potential Energy (U) is the stored energy of a configuration of electric charges, equal to the external work required to assemble the charges from infinite separation against Coulomb forces. This module covers two-charge systems, multi-charge systems via pairwise summation, the potential energy of an electric dipole in an external field (U = -p⃗ · E⃗), stable vs. unstable equilibrium states, and work required to rotate dipoles.',

  basicIdea: [
    'The potential energy of a system of charges represents the work done by an external agent in bringing the charges from infinity to their respective positions without acceleration.',
    'For two point charges q₁ and q₂ separated by distance r in vacuum: U = (1 / 4πε₀) · (q₁ q₂ / r). Both charges MUST be substituted with their proper algebraic signs (+ / -).',
    'If q₁ q₂ > 0 (like charges), U > 0 (repulsive system, positive potential energy; work must be supplied to bring them together).',
    'If q₁ q₂ < 0 (unlike charges), U < 0 (attractive bound system; energy is released upon assembly).',
    'For a system of n point charges, the total electrostatic potential energy is the algebraic sum over all unique interacting pairs: U_total = ∑_{i < j} (k qᵢ qⱼ / r_{ij}). Total number of pairs = n(n - 1) / 2.',
    'The potential energy of an electric dipole p⃗ in a uniform electric field E⃗ is U = -p⃗ · E⃗ = -pE cos θ.',
    'Equilibrium states of a dipole: θ = 0° corresponds to Stable Equilibrium (U_min = -pE, torque τ = 0). θ = 180° corresponds to Unstable Equilibrium (U_max = +pE, torque τ = 0).',
    'The external work required to rotate a dipole in a uniform electric field from angle θ₁ to θ₂ is W_ext = ΔU = pE(cos θ₁ - cos θ₂).'
  ],

  importantTerms: [
    {
      term: 'Electrostatic Potential Energy (U)',
      symbol: 'U',
      definition:
        'The work done by an external force to assemble a configuration of charges from infinity to their final geometrical coordinates without kinetic energy change: U = W_ext.',
      neetNote: 'SI Unit: Joule (J). Dimensional formula: [M L² T⁻²].'
    },
    {
      term: 'Pairwise Summation Rule',
      symbol: 'U = ∑_{i < j} (k qᵢ qⱼ / r_{ij})',
      definition:
        'A systematic mathematical method to compute the total potential energy of an n-charge system by summing the potential energy of all distinct 2-charge combinations.',
      neetNote: 'For 3 charges: 3 pairs. For 4 charges: 6 pairs (4 side pairs + 2 diagonal pairs).'
    },
    {
      term: 'Stable Equilibrium (θ = 0°)',
      definition:
        'The orientation where the dipole moment vector p⃗ is aligned parallel to the electric field vector E⃗. Potential energy is at its global minimum: U_min = -pE.',
      neetNote: 'If perturbed by a small angle dθ, a restoring torque τ = -pE sin θ acts to return the dipole to θ = 0°.'
    },
    {
      term: 'Unstable Equilibrium (θ = 180°)',
      definition:
        'The orientation where the dipole moment vector p⃗ is antiparallel to the electric field vector E⃗. Potential energy is at its maximum: U_max = +pE.',
      neetNote: 'Any tiny perturbation produces a deflecting torque that drives the dipole away from 180°.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Potential Energy of a Two-Charge System',
      paragraphs: [
        'Imagine bringing charge q₁ from infinity to position r₁ in empty space. Since there is initially no electric field present, no force opposes q₁, so W₁ = 0.',
        'Charge q₁ now produces an electrostatic potential V₁(r) = k q₁ / r at distance r. When a second charge q₂ is brought from infinity to distance r from q₁, the external work required is W₂ = q₂ V₁(r) = k q₁ q₂ / r.',
        'The total stored potential energy of the two-charge system is: U = (1 / 4πε₀) · (q₁ q₂ / r). Always include the algebraic signs of both charges! If both are positive or both are negative, U > 0 (repulsive energy). If one is positive and one is negative, U < 0 (attractive bound system).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><circle cx="200" cy="110" r="26" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/><text x="200" y="116" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">q₁</text><circle cx="500" cy="110" r="26" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/><text x="500" y="116" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">q₂</text><line x1="226" y1="110" x2="474" y2="110" stroke="#64748b" stroke-width="2.5"/><text x="350" y="95" fill="#475569" font-size="14" font-weight="bold" text-anchor="middle">Distance r</text><rect x="250" y="140" width="200" height="50" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" rx="8"/><text x="350" y="170" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">U = k · (q₁ q₂) / r</text></svg>',
        caption:
          'Figure 2.6: Electrostatic potential energy of two point charges q₁ and q₂ separated by distance r.',
        guide:
          'Remember: If the system is released, positive potential energy converts to kinetic energy as charges fly apart; negative potential energy requires external work to separate charges to infinity.'
      },
      importantPoints: [
        'U = (1 / 4πε₀) · (q₁ q₂ / r).',
        'Always substitute the algebraic signs (+ / -) of charges.',
        'Binding energy = -U (work required to separate the system to infinity).'
      ]
    },
    {
      heading: '2. Multi-Charge Configurations & Pairwise Assembly',
      paragraphs: [
        'For an n-particle configuration, the total potential energy is the sum of energies over every distinct pair: U = ∑_{i < j} k qᵢ qⱼ / r_{ij}.',
        'For 3 charges (q₁, q₂, q₃): U = k [q₁q₂/r₁₂ + q₂q₃/r₂₃ + q₁q₃/r₁₃] (Total 3 pairs).',
        'For 4 charges arranged at the vertices of a square of side a: There are 4 side pairs with separation a and 2 diagonal pairs with separation a√2. Total pairs = 4(3)/2 = 6. Total energy U = 4(k q² / a) + 2(k q² / a√2) if all charges are identical +q.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><line x1="230" y1="60" x2="470" y2="60" stroke="#3b82f6" stroke-width="2"/><line x1="230" y1="180" x2="470" y2="180" stroke="#3b82f6" stroke-width="2"/><line x1="230" y1="60" x2="230" y2="180" stroke="#3b82f6" stroke-width="2"/><line x1="470" y1="60" x2="470" y2="180" stroke="#3b82f6" stroke-width="2"/><line x1="230" y1="60" x2="470" y2="180" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4"/><line x1="230" y1="180" x2="470" y2="60" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4"/><circle cx="230" cy="60" r="16" fill="#10b981"/><text x="230" y="65" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">q₁</text><circle cx="470" cy="60" r="16" fill="#10b981"/><text x="470" y="65" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">q₂</text><circle cx="470" cy="180" r="16" fill="#10b981"/><text x="470" y="185" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">q₃</text><circle cx="230" cy="180" r="16" fill="#10b981"/><text x="230" y="185" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">q₄</text><text x="350" y="50" fill="#3b82f6" font-size="12" font-weight="bold" text-anchor="middle">Side a (4 pairs)</text><text x="350" y="125" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Diagonal a√2 (2 pairs)</text></svg>',
        caption:
          'Figure 2.7: Pairwise assembly of 4 point charges on a square: 4 edge interactions + 2 diagonal interactions = 6 total pairs.',
        guide: 'Formula for total number of interacting pairs in n charges is N = n(n - 1) / 2.'
      },
      importantPoints: [
        'Total pairs = n(n - 1) / 2.',
        'Sum all distinct interaction energies algebraically.',
        'Work done to assemble system from infinity = U_total.'
      ]
    },
    {
      heading: '3. Potential Energy of an Electric Dipole in an External E-Field',
      paragraphs: [
        'When an electric dipole of moment p⃗ is placed in a uniform electric field E⃗ at angle θ, the torque acting on it is τ = pE sin θ. To rotate the dipole through an angle dθ against this torque, external work done is dW = τ dθ = pE sin θ dθ.',
        'Integrating from standard zero reference θ₀ = 90° (where U = 0) to angle θ: U(θ) = ∫_{90°}^θ pE sin θ dθ = -pE cos θ = -p⃗ · E⃗.',
        'Equilibrium analysis: (1) θ = 0° (p⃗ ∥ E⃗): Torque τ = 0, Potential energy U = -pE (Minimum). This is STABLE EQUILIBRIUM. (2) θ = 90°: Torque τ = pE (Maximum), Potential energy U = 0. (3) θ = 180° (p⃗ antiparallel to E⃗): Torque τ = 0, Potential energy U = +pE (Maximum). This is UNSTABLE EQUILIBRIUM.',
        'Work done to rotate dipole from θ₁ to θ₂: W_ext = U(θ₂) - U(θ₁) = -pE cos θ₂ - (-pE cos θ₁) = pE(cos θ₁ - cos θ₂). Work from 0° to 180° = pE(1 - (-1)) = 2pE.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><text x="180" y="30" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">Stable Equilibrium (θ = 0°)</text><line x1="80" y1="120" x2="280" y2="120" stroke="#64748b" stroke-width="2" marker-end="url(#arr-gr)"/><circle cx="120" cy="120" r="14" fill="#3b82f6"/><text x="120" y="124" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">-q</text><circle cx="220" cy="120" r="14" fill="#ef4444"/><text x="220" y="124" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">+q</text><line x1="135" y1="145" x2="205" y2="145" stroke="#10b981" stroke-width="2" marker-end="url(#arr-gr)"/><text x="170" y="162" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">p⃗ ∥ E⃗</text><text x="180" y="195" fill="#047857" font-size="13" font-weight="bold" text-anchor="middle">U_min = -pE,  τ = 0</text><text x="520" y="30" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">Unstable Equilibrium (θ = 180°)</text><line x1="420" y1="120" x2="620" y2="120" stroke="#64748b" stroke-width="2" marker-end="url(#arr-gr)"/><circle cx="460" cy="120" r="14" fill="#ef4444"/><text x="460" y="124" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">+q</text><circle cx="560" cy="120" r="14" fill="#3b82f6"/><text x="560" y="124" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">-q</text><line x1="545" y1="145" x2="475" y2="145" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-red-pe)"/><text x="510" y="162" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">p⃗ opposes E⃗</text><text x="520" y="195" fill="#b91c1c" font-size="13" font-weight="bold" text-anchor="middle">U_max = +pE,  τ = 0</text><defs><marker id="arr-gr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker><marker id="arr-red-pe" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker></defs></svg>',
        caption:
          'Figure 2.8: Stable (θ = 0°, minimum energy) and Unstable (θ = 180°, maximum energy) equilibrium configurations of a dipole in a uniform electric field.',
        guide:
          'In stable equilibrium, the dipole moment vector p⃗ points along the direction of E⃗.'
      },
      importantPoints: [
        'U = -p⃗ · E⃗ = -pE cos θ.',
        'Stable equilibrium at θ = 0° (U = -pE).',
        'Unstable equilibrium at θ = 180° (U = +pE).',
        'Work to rotate from θ₁ to θ₂: W = pE(cos θ₁ - cos θ₂).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Potential Energy of Two Point Charges',
      formula: 'U = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r} = \\frac{k q_1 q_2}{r}',
      variables: 'q₁, q₂ = point charges with sign (C), r = separation (m), k = 9 × 10⁹ N·m²/C²'
    },
    {
      title: 'Potential Energy of an Electric Dipole',
      formula: 'U = -\\vec{p} \\cdot \\vec{E} = -pE \\cos\\theta',
      variables: 'p = dipole moment (C·m), E = electric field (N/C), θ = angle between p⃗ and E⃗'
    },
    {
      title: 'Work Done to Rotate a Dipole',
      formula: 'W_{\\text{ext}} = pE(\\cos\\theta_1 - \\cos\\theta_2)',
      variables: 'θ₁ = initial angle, θ₂ = final angle, W_ext = external work done (J)'
    },
    {
      title: 'Work to Rotate Dipole from 0° to 180°',
      formula: 'W = 2pE',
      variables: 'p = dipole moment, E = uniform electric field magnitude'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="40" y="30" width="180" height="180" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="10"/><text x="130" y="60" fill="#15803d" font-size="14" font-weight="bold" text-anchor="middle">θ = 0° (Stable)</text><text x="130" y="100" fill="#14532d" font-size="13" text-anchor="middle">• p⃗ ∥ E⃗</text><text x="130" y="130" fill="#14532d" font-size="13" text-anchor="middle">• τ = 0</text><text x="130" y="160" fill="#14532d" font-size="13" text-anchor="middle">• U = -pE (Min)</text><text x="130" y="190" fill="#14532d" font-size="13" text-anchor="middle">• Stable Rest</text><rect x="260" y="30" width="180" height="180" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="10"/><text x="350" y="60" fill="#b45309" font-size="14" font-weight="bold" text-anchor="middle">θ = 90° (Max Torque)</text><text x="350" y="100" fill="#78350f" font-size="13" text-anchor="middle">• p⃗ ⟂ E⃗</text><text x="350" y="130" fill="#78350f" font-size="13" text-anchor="middle">• τ = pE (Max)</text><text x="350" y="160" fill="#78350f" font-size="13" text-anchor="middle">• U = 0 (Ref)</text><text x="350" y="190" fill="#78350f" font-size="13" text-anchor="middle">• Tendency to Align</text><rect x="480" y="30" width="180" height="180" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="10"/><text x="570" y="60" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">θ = 180° (Unstable)</text><text x="570" y="100" fill="#7f1d1d" font-size="13" text-anchor="middle">• p⃗  antiparallel E⃗</text><text x="570" y="130" fill="#7f1d1d" font-size="13" text-anchor="middle">• τ = 0</text><text x="570" y="160" fill="#7f1d1d" font-size="13" text-anchor="middle">• U = +pE (Max)</text><text x="570" y="190" fill="#7f1d1d" font-size="13" text-anchor="middle">• Unstable Peak</text></svg>',
    caption:
      'Comparison of Dipole Orientations: Stable (0°), Maximum Torque (90°), and Unstable Equilibrium (180°).'
  },

  neetImportantPoints: [
    'Always include signs of charges in U = k(q₁q₂)/r.',
    'Total interaction pairs for n charges is n(n - 1) / 2.',
    'Minimum potential energy is at θ = 0° (U_min = -pE); maximum at θ = 180° (U_max = +pE).',
    'Work done in rotating a dipole from stable to unstable equilibrium is W = 2pE.',
    'Binding energy of a bound system is equal to the magnitude of its negative potential energy |U|.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Confusing torque angle formula with potential energy formula.',
      correctFact:
        'Torque τ = pE sin θ (depends on sin θ; max at 90°); Potential energy U = -pE cos θ (depends on cos θ; min at 0°, max at 180°).',
      whyItMattersForNEET:
        'Very common formula mix-up leading to incorrect option selection in MCQs.'
    },
    {
      commonConfusion: 'Ignoring the negative sign in U = -pE cos θ.',
      correctFact:
        'When θ = 0°, cos 0° = +1, so U = -pE (the most negative/lowest possible energy).',
      whyItMattersForNEET: 'Essential for determining stability of physical systems in NEET.'
    }
  ],

  quickRevision: [
    'U_two = k q₁ q₂ / r (Include signs).',
    'U_system = ∑ k qᵢ qⱼ / r_{ij} over n(n - 1)/2 pairs.',
    'U_dipole = -pE cos θ.',
    'Stable: θ = 0°, U = -pE. Unstable: θ = 180°, U = +pE.',
    'W(0° → 180°) = 2pE; W(0° → 90°) = pE.'
  ],

  practiceQuestions: [
    {
      id: 'pe-p1',
      question:
        'Three charges +q, +q, and -q are placed at the vertices of an equilateral triangle of side a. The total electrostatic potential energy of the system is:',
      options: ['+kq²/a', '-kq²/a', '+3kq²/a', 'Zero'],
      correctAnswer: 1,
      explanation:
        'The three pairs are: (+q, +q), (+q, -q), and (+q, -q). Total energy U = k[(+q)(+q)/a + (+q)(-q)/a + (+q)(-q)/a] = k[q²/a - q²/a - q²/a] = -kq²/a.'
    },
    {
      id: 'pe-p2',
      question:
        'An electric dipole of moment p is aligned along a uniform electric field E. The work done in rotating it through an angle of 60° is:',
      options: ['pE', 'pE / 2', '2pE', '√3 pE / 2'],
      correctAnswer: 1,
      explanation:
        'W = pE(cos θ₁ - cos θ₂) = pE(cos 0° - cos 60°) = pE(1 - 0.5) = pE / 2.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2023,
      question:
        'An electric dipole is placed at an angle of 30° with an electric field of intensity 2 × 10⁵ N/C. It experiences a torque equal to 4 N·m. The charge on the dipole of length 2 cm is:',
      options: ['8 mC', '2 mC', '5 mC', '7 μC'],
      correctAnswer: 1,
      explanation:
        'τ = pE sin θ = (q · 2a) E sin 30° => 4 = q × (0.02) × (2 × 10⁵) × (0.5) => 4 = 2000 q => q = 4 / 2000 = 2 × 10⁻³ C = 2 mC.',
      conceptTested: 'Dipole Torque and Parameter Extraction'
    }
  ]
};
