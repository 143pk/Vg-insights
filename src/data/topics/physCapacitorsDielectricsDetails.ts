import { DetailedTopicContent } from '../../types/neet';

export const physCapacitorsDielectricsDetails: DetailedTopicContent = {
  topicId: 'phys-capacitors-dielectrics',
  topicName: 'Capacitance, Dielectrics & Energy Stored',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electrostatics',
  chapter: 'Electrostatic Potential and Capacitance',

  whatIsThisTopic:
    'A Capacitor is a passive two-conductor device designed to store electrostatic charge and electrical potential energy in the electric field between its plates. This comprehensive module covers capacitance fundamentals (C = Q/V), parallel-plate capacitor derivation (C = ε₀A/d), dielectric polarization and bound charges, the complete comparative analysis of dielectric insertion with Battery Connected vs. Battery Disconnected, stored energy derivations (U = ½CV² = Q²/2C), energy density (u = ½ε₀E²), and the interplate electrostatic force.',

  basicIdea: [
    'Capacitance (C = Q/V) is the ratio of the magnitude of charge on either conductor plate to the potential difference between them. SI Unit: Farad (1 F = 1 C/V).',
    'Capacitance is purely GEOMETRIC and MEDIUM-DEPENDENT. It does NOT depend on Q or V independently. For a parallel-plate air capacitor of area A and separation d: C₀ = ε₀A/d.',
    'Dielectric materials contain bound charges that polarize in an external electric field. This polarization sets up an internal opposing electric field (E_p), reducing the net electric field to E_net = E₀ / K, where K is the dielectric constant (relative permittivity K ≥ 1).',
    'When a dielectric slab of dielectric constant K completely fills the plate gap, the capacitance increases K-fold: C = K C₀ = Kε₀A/d.',
    'For a dielectric slab of thickness t < d: C = ε₀A / [d - t(1 - 1/K)]. For a conducting/metallic slab (K → ∞), C = ε₀A / (d - t).',
    'Battery Connected with Dielectric: Potential difference V remains CONSTANT (V = V₀). Capacitance C = K C₀, Charge Q = K Q₀, Electric Field E = E₀ (constant), Stored Energy U = K U₀.',
    'Battery Disconnected with Dielectric: Charge Q remains CONSTANT (Q = Q₀). Capacitance C = K C₀, Potential difference V = V₀ / K, Electric Field E = E₀ / K, Stored Energy U = U₀ / K.',
    'Electrostatic energy stored in a capacitor: U = ½ C V² = Q² / (2C) = ½ Q V. This energy is distributed throughout the electric field with energy density u = ½ ε₀ E² (in vacuum) or u = ½ K ε₀ E² (in dielectric).',
    'The attractive electrostatic force between the plates of an isolated parallel-plate capacitor is F = Q² / (2ε₀A) = ½ Q E, which is completely independent of plate separation d.'
  ],

  importantTerms: [
    {
      term: 'Capacitance (C)',
      symbol: 'C = Q/V',
      definition:
        'The ability of a system of conductors to store electric charge per unit potential difference: C = Q / V.',
      neetNote: 'SI Unit: Farad (F). Microfarad (μF = 10⁻⁶ F), Picofarad (pF = 10⁻¹² F). Dimensional formula: [M⁻¹ L⁻² T⁴ A²].'
    },
    {
      term: 'Dielectric Constant (K or ε_r)',
      symbol: 'K = ε / ε₀',
      definition:
        'The ratio of the permittivity of a dielectric medium to that of free space. It equals the factor by which the electric field is reduced inside the dielectric: K = E₀ / E_net.',
      neetNote: 'For vacuum K = 1; for air K ≈ 1.0006; for water K ≈ 81; for ideal conductors K → ∞.'
    },
    {
      term: 'Dielectric Polarization (P⃗)',
      symbol: 'P⃗ = χ_e ε₀ E⃗',
      definition:
        'The induced electric dipole moment per unit volume of a dielectric material when subjected to an external electric field.',
      neetNote: 'Produces induced bound surface charge density σ_p = P.'
    },
    {
      term: 'Energy Density (u)',
      symbol: 'u = ½ ε₀ E²',
      definition:
        'The electrostatic potential energy stored per unit volume of the electric field: u = U / Volume = ½ ε₀ E² (J/m³).',
      neetNote: 'Applicable to any electrostatic field configuration in space.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Fundamentals of Capacitance & Parallel-Plate Derivation',
      paragraphs: [
        'A capacitor consists of two conducting plates carrying equal and opposite charges +Q and -Q. The potential difference V between them is directly proportional to Q: Q ∝ V => Q = CV. Capacitance C is the constant of proportionality.',
        'Consider two large parallel plates of area A separated by distance d with surface charge densities +σ and -σ (where σ = Q/A). Outside the plates, the electric fields cancel to zero. Between the plates, the fields reinforce: E = σ / (2ε₀) + σ / (2ε₀) = σ / ε₀ = Q / (ε₀ A).',
        'The potential difference across the uniform field is V = E · d = (Q d) / (ε₀ A). Applying C = Q / V yields: C₀ = ε₀ A / d.',
        'Physical implications: Increasing plate area A increases capacitance (more surface to hold charge). Decreasing plate separation d increases capacitance (stronger attractive binding between opposite plates, reducing the voltage needed to hold charge Q).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="200" y="40" width="24" height="160" fill="#fee2e2" stroke="#ef4444" stroke-width="2" rx="4"/><text x="212" y="125" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">+Q</text><rect x="460" y="40" width="24" height="160" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="4"/><text x="472" y="125" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle">-Q</text><line x1="240" y1="70" x2="445" y2="70" stroke="#10b981" stroke-width="2.5" marker-end="url(#arr-grn)"/><line x1="240" y1="120" x2="445" y2="120" stroke="#10b981" stroke-width="2.5" marker-end="url(#arr-grn)"/><line x1="240" y1="170" x2="445" y2="170" stroke="#10b981" stroke-width="2.5" marker-end="url(#arr-grn)"/><text x="345" y="110" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">E = σ/ε₀ = Q/(ε₀A)</text><line x1="200" y1="220" x2="484" y2="220" stroke="#64748b" stroke-width="2"/><text x="345" y="215" fill="#475569" font-size="13" font-weight="bold" text-anchor="middle">Separation d</text><text x="212" y="25" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">Area A</text><defs><marker id="arr-grn" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs></svg>',
        caption:
          'Figure 2.9: Parallel-plate capacitor geometry showing plate area A, separation d, charge ±Q, and uniform electric field E = σ/ε₀.',
        guide:
          'Notice that electric field lines exist purely in the gap between the plates (neglecting small edge fringing effects).'
      },
      importantPoints: [
        'C₀ = ε₀ A / d.',
        'C depends ONLY on geometry (A, d) and the dielectric medium.',
        'C does not change when Q or V is varied.'
      ]
    },
    {
      heading: '2. Dielectric Polarization & Slab Insertion',
      paragraphs: [
        'A dielectric material has no free conduction electrons. When placed in an external field E₀, microscopic molecular dipoles align along E₀. This creates induced bound surface charges of density -σ_p on the face near the positive plate and +σ_p near the negative plate.',
        'These bound charges create an internal opposing field E_p = σ_p / ε₀. The resultant net field inside the dielectric is reduced: E_net = E₀ - E_p = E₀ / K, where K is the dielectric constant.',
        'Because the electric field is reduced by factor K, the potential difference drops to V = E_net · d = V₀ / K. Consequently, capacitance increases by factor K: C = Q / V = K C₀ = K ε₀ A / d.',
        'Dielectric slab of partial thickness t < d: In the vacuum region (thickness d - t), field is E₀. In the dielectric slab (thickness t), field is E₀/K. Total voltage V = E₀(d - t) + (E₀/K)t = E₀ [d - t + t/K]. Substituting E₀ = Q/(ε₀A) gives: C = ε₀ A / [d - t(1 - 1/K)]. If a metal slab of thickness t is inserted (K → ∞), C = ε₀ A / (d - t).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="150" y="30" width="18" height="180" fill="#fee2e2" stroke="#ef4444" stroke-width="2" rx="3"/><text x="159" y="125" fill="#b91c1c" font-size="13" font-weight="bold" text-anchor="middle">+Q</text><rect x="530" y="30" width="18" height="180" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="3"/><text x="539" y="125" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">-Q</text><rect x="240" y="45" width="220" height="150" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="8"/><text x="350" y="75" fill="#b45309" font-size="14" font-weight="bold" text-anchor="middle">Dielectric Slab (Constant K)</text><text x="260" y="125" fill="#ef4444" font-size="12" font-weight="bold">-σ_p</text><text x="440" y="125" fill="#3b82f6" font-size="12" font-weight="bold">+σ_p</text><line x1="420" y1="120" x2="280" y2="120" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-pol-left)"/><text x="350" y="140" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">E_p (Polarization Field)</text><line x1="180" y1="170" x2="510" y2="170" stroke="#10b981" stroke-width="2.5" marker-end="url(#arr-pol-right)"/><text x="350" y="190" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">E_net = E₀ - E_p = E₀ / K</text><defs><marker id="arr-pol-left" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker><marker id="arr-pol-right" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981"/></marker></defs></svg>',
        caption:
          'Figure 2.10: Dielectric polarization inside a capacitor showing induced bound charges ±σ_p and reduced net electric field E_net = E₀/K.',
        guide:
          'The induced polarization charges partially cancel the surface charge on the metal plates, reducing the internal electric field.'
      },
      importantPoints: [
        'C = K C₀ (with dielectric fully filling gap).',
        'Partial slab: C = ε₀A / [d - t(1 - 1/K)].',
        'Metal slab (K → ∞): C = ε₀A / (d - t).'
      ]
    },
    {
      heading: '3. Dielectric Insertion: Battery Connected vs. Battery Disconnected',
      paragraphs: [
        'Case A: Battery REMAINS CONNECTED during dielectric insertion. (1) Voltage V is fixed by the battery: V = V₀. (2) Capacitance increases: C = K C₀. (3) Charge increases: Q = C V = (K C₀) V₀ = K Q₀ (battery pumps extra charge). (4) Electric field remains constant: E = V/d = V₀/d = E₀. (5) Stored Energy increases: U = ½ C V² = ½ (K C₀) V₀² = K U₀.',
        'Case B: Battery DISCONNECTED before dielectric insertion. (1) Charge is trapped on isolated plates: Q = Q₀ = constant. (2) Capacitance increases: C = K C₀. (3) Potential difference drops: V = Q/C = Q₀ / (K C₀) = V₀ / K. (4) Electric field drops: E = E₀ / K. (5) Stored Energy decreases: U = Q² / (2C) = Q₀² / (2 K C₀) = U₀ / K.',
        'Where did the energy go in Case B? The dielectric is physically attracted into the capacitor gap by electrostatic fringing forces. The electrostatic potential energy decreases because work is done by the electric field on the dielectric slab!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="40" y="20" width="290" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="10"/><text x="185" y="48" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">Battery Connected (V = Constant)</text><text x="185" y="80" fill="#065f46" font-size="13" text-anchor="middle">• Potential: V = V₀ (Fixed)</text><text x="185" y="110" fill="#065f46" font-size="13" text-anchor="middle">• Capacitance: C = K · C₀ (↑)</text><text x="185" y="140" fill="#065f46" font-size="13" text-anchor="middle">• Charge: Q = K · Q₀ (↑)</text><text x="185" y="170" fill="#065f46" font-size="13" text-anchor="middle">• Electric Field: E = E₀ (Constant)</text><text x="185" y="200" fill="#065f46" font-size="13" text-anchor="middle">• Stored Energy: U = K · U₀ (↑)</text><rect x="370" y="20" width="290" height="200" fill="#fff7ed" stroke="#f97316" stroke-width="2" rx="10"/><text x="515" y="48" fill="#c2410c" font-size="14" font-weight="bold" text-anchor="middle">Battery Disconnected (Q = Constant)</text><text x="515" y="80" fill="#9a3412" font-size="13" text-anchor="middle">• Charge: Q = Q₀ (Trapped)</text><text x="515" y="110" fill="#9a3412" font-size="13" text-anchor="middle">• Capacitance: C = K · C₀ (↑)</text><text x="515" y="140" fill="#9a3412" font-size="13" text-anchor="middle">• Potential: V = V₀ / K (↓)</text><text x="515" y="170" fill="#9a3412" font-size="13" text-anchor="middle">• Electric Field: E = E₀ / K (↓)</text><text x="515" y="200" fill="#9a3412" font-size="13" text-anchor="middle">• Stored Energy: U = U₀ / K (↓)</text></svg>',
        caption:
          'Figure 2.11: Master comparison of Battery Connected (V constant) vs. Battery Disconnected (Q constant) during dielectric insertion.',
        guide:
          'Memorize this exact table: In battery connected, U increases by K; in battery disconnected, U decreases by factor 1/K.'
      },
      importantPoints: [
        'Battery Connected: V = const => Q ↑ (K×), C ↑ (K×), U ↑ (K×), E = const.',
        'Battery Disconnected: Q = const => V ↓ (/K), E ↓ (/K), U ↓ (/K), C ↑ (K×).',
        'Capacitance C ALWAYS increases by K in both cases.'
      ]
    },
    {
      heading: '4. Stored Energy, Energy Density & Interplate Force',
      paragraphs: [
        'Derivation of Stored Energy: Bringing small charge dq against potential v = q/C requires work dW = (q/C) dq. Total energy U = ∫₀^Q (q/C) dq = Q² / (2C). Substituting Q = CV gives the three equivalent expressions: U = ½ C V² = Q² / (2C) = ½ Q V.',
        'Energy Density (u): The stored energy is localized in the electric field between the plates (volume = A · d). Energy density u = U / (A d) = (½ C V²) / (A d) = ½ (ε₀A/d)(Ed)² / (Ad) = ½ ε₀ E² (in J/m³).',
        'Attractive Force Between Plates: Charge +Q on one plate is sitting in the electric field produced by the OTHER plate (E_other = σ / 2ε₀ = Q / 2ε₀A). Thus, force F = Q · E_other = Q² / (2ε₀A) = ½ Q E = ½ ε₀ A (V/d)². Notice the factor of ½: the field of the test plate itself does not exert force on itself!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><rect x="80" y="35" width="540" height="150" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2" rx="10"/><text x="350" y="65" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Energy Storage in the Electrostatic Field</text><text x="350" y="105" fill="#2563eb" font-size="16" font-weight="bold" text-anchor="middle">U = ½ C V² = Q² / 2C = ½ Q V</text><text x="350" y="140" fill="#047857" font-size="15" font-weight="bold" text-anchor="middle">Energy Density: u = ½ ε₀ E²  (J/m³)</text><text x="350" y="170" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">Interplate Force: F = Q² / (2ε₀A) = ½ Q E</text></svg>',
        caption: 'Figure 2.12: Master summary of capacitor energy, field energy density, and interplate attraction force.',
        guide: 'The attractive force between capacitor plates is independent of the separation distance d.'
      },
      importantPoints: [
        'U = ½ C V² = Q² / 2C = ½ Q V.',
        'Energy density u = ½ ε₀ E².',
        'Interplate attraction force F = Q² / (2ε₀A) (independent of d).'
      ]
    }
  ],

  formulae: [
    {
      title: 'Capacitance of Parallel Plate Capacitor',
      formula: 'C_0 = \\frac{\\varepsilon_0 A}{d}',
      variables: 'A = plate area (m²), d = separation (m), ε₀ = 8.854 × 10⁻¹² F/m'
    },
    {
      title: 'Capacitor with Full Dielectric',
      formula: 'C = K C_0 = \\frac{K \\varepsilon_0 A}{d}',
      variables: 'K = dielectric constant (relative permittivity), C₀ = vacuum capacitance'
    },
    {
      title: 'Capacitor with Partial Dielectric Slab',
      formula: 'C = \\frac{\\varepsilon_0 A}{d - t(1 - 1/K)}',
      variables: 't = slab thickness (m), d = plate separation, K = dielectric constant'
    },
    {
      title: 'Electrostatic Energy Stored in Capacitor',
      formula: 'U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V',
      variables: 'U = stored energy (J), C = capacitance (F), V = potential difference (V), Q = charge (C)'
    },
    {
      title: 'Energy Density of Electric Field',
      formula: 'u = \\frac{1}{2} \\varepsilon_0 E^2',
      variables: 'u = energy density (J/m³), E = electric field magnitude (V/m)'
    },
    {
      title: 'Attractive Force Between Capacitor Plates',
      formula: 'F = \\frac{Q^2}{2\\varepsilon_0 A} = \\frac{1}{2} Q E',
      variables: 'F = attractive force (N), Q = plate charge (C), A = plate area (m²)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="40" y="30" width="190" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="135" y="60" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle">Formula: U = ½ CV²</text><text x="135" y="100" fill="#1e3a8a" font-size="13" text-anchor="middle">• Best when V is fixed</text><text x="135" y="130" fill="#1e3a8a" font-size="13" text-anchor="middle">• Battery connected</text><text x="135" y="160" fill="#1e3a8a" font-size="13" text-anchor="middle">• Parallel circuits</text><text x="135" y="190" fill="#1e3a8a" font-size="13" text-anchor="middle">• U ∝ C</text><rect x="255" y="30" width="190" height="180" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="10"/><text x="350" y="60" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">Formula: U = Q²/2C</text><text x="350" y="100" fill="#065f46" font-size="13" text-anchor="middle">• Best when Q is fixed</text><text x="350" y="130" fill="#065f46" font-size="13" text-anchor="middle">• Battery disconnected</text><text x="350" y="160" fill="#065f46" font-size="13" text-anchor="middle">• Series circuits</text><text x="350" y="190" fill="#065f46" font-size="13" text-anchor="middle">• U ∝ 1/C</text><rect x="470" y="30" width="190" height="180" fill="#fef2f2" stroke="#ef4444" stroke-width="2" rx="10"/><text x="565" y="60" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">Formula: U = ½ QV</text><text x="565" y="100" fill="#7f1d1d" font-size="13" text-anchor="middle">• Direct given Q and V</text><text x="565" y="130" fill="#7f1d1d" font-size="13" text-anchor="middle">• Work done by battery</text><text x="565" y="160" fill="#7f1d1d" font-size="13" text-anchor="middle">  is W = QV</text><text x="565" y="190" fill="#7f1d1d" font-size="13" text-anchor="middle">• 50% lost as heat!</text></svg>',
    caption: 'Guideline for selecting the optimal capacitor energy formula in NEET questions.'
  },

  neetImportantPoints: [
    'Capacitance C depends strictly on geometry and dielectric medium, NOT on Q or V.',
    'Dielectric insertion with battery connected increases stored energy (U = K U₀).',
    'Dielectric insertion with battery disconnected decreases stored energy (U = U₀ / K).',
    'Interplate attraction force F = Q² / (2ε₀A) does NOT depend on distance d.',
    'When charging a capacitor from a battery, work done by battery is W = QV = CV², but stored energy is only ½CV². 50% is ALWAYS lost as heat in the circuit.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking interplate force is F = Q² / (ε₀A).',
      correctFact:
        'The correct force is F = Q² / (2ε₀A). A plate cannot interact with its own electric field; it only feels the field created by the other plate (E_other = σ / 2ε₀).',
      whyItMattersForNEET: 'Very popular trap in NEET Physics options.'
    },
    {
      commonConfusion: 'Assuming battery-disconnected dielectric insertion increases energy.',
      correctFact:
        'In battery disconnected, Q is trapped. C increases by K, so U = Q² / (2KC₀) = U₀ / K (energy decreases because field does work to pull dielectric in).',
      whyItMattersForNEET: 'Directly tested in multiple previous NEET/AIPMT exam papers.'
    }
  ],

  quickRevision: [
    'C₀ = ε₀ A / d; with dielectric C = K C₀.',
    'Partial slab: C = ε₀A / [d - t(1 - 1/K)].',
    'Battery Connected: V = const => Q ↑ (K×), C ↑ (K×), U ↑ (K×).',
    'Battery Disconnected: Q = const => V ↓ (/K), E ↓ (/K), U ↓ (/K), C ↑ (K×).',
    'U = ½ CV² = Q² / 2C = ½ QV; u = ½ ε₀ E²; F = Q² / (2ε₀A).'
  ],

  practiceQuestions: [
    {
      id: 'cap-p1',
      question:
        'A parallel-plate capacitor of capacitance 10 μF is charged to 100 V and then disconnected from the battery. A dielectric slab of K = 5 is now inserted between the plates. The new potential difference and stored energy are:',
      options: ['20 V and 0.01 J', '500 V and 0.25 J', '20 V and 0.25 J', '100 V and 0.05 J'],
      correctAnswer: 0,
      explanation:
        'Initial energy U₀ = ½ C₀ V₀² = ½ (10 × 10⁻⁶) (100)² = 0.05 J. Since battery is disconnected, Q is constant. New potential V = V₀ / K = 100 / 5 = 20 V. New energy U = U₀ / K = 0.05 / 5 = 0.01 J.'
    },
    {
      id: 'cap-p2',
      question:
        'The separation between the plates of a charged isolated parallel-plate capacitor is increased from d to 2d. What happens to the electrostatic force between the plates?',
      options: ['Doubles', 'Halves', 'Remains unchanged', 'Becomes four times'],
      correctAnswer: 2,
      explanation:
        'The force between plates is F = Q² / (2ε₀A). For an isolated capacitor, Q and A are constant; hence F is strictly independent of plate separation d.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2021,
      question:
        'A parallel-plate capacitor with air between the plates has a capacitance of 9 pF. The separation between its plates is d. The space between the plates is now filled with two dielectrics. One dielectric has dielectric constant K₁ = 3 and thickness d/3 while the other one has dielectric constant K₂ = 6 and thickness 2d/3. Capacitance of the capacitor is now:',
      options: ['45 pF', '40.5 pF', '20.25 pF', '1.8 pF'],
      correctAnswer: 1,
      explanation:
        'Two dielectric slabs across separation d form two series capacitors: C₁ = K₁ε₀A / (d/3) = 3 × 3(ε₀A/d) = 9 C₀ = 9 × 9 = 81 pF. C₂ = K₂ε₀A / (2d/3) = 6 × (3/2)(ε₀A/d) = 9 C₀ = 9 × 9 = 81 pF. In series: C_eq = (C₁ C₂) / (C₁ + C₂) = (81 × 81) / (81 + 81) = 81 / 2 = 40.5 pF.',
      conceptTested: 'Dielectric Slabs in Series'
    },
    {
      exam: 'NEET UG',
      year: 2018,
      question:
        'The electrostatic force between the metal plates of an isolated parallel plate capacitor C having a charge Q and area A, is:',
      options: [
        'Independent of the distance between the plates',
        'Linearly proportional to the distance between the plates',
        'Inversely proportional to the distance between the plates',
        'Proportional to the square root of the distance between the plates'
      ],
      correctAnswer: 0,
      explanation:
        'F = Q² / (2ε₀A). For an isolated capacitor, Q, A, and ε₀ are constants, so F is independent of distance d.',
      conceptTested: 'Interplate Attraction Force'
    }
  ]
};
