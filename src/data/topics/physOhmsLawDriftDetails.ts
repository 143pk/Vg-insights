import { DetailedTopicContent } from '../../types/neet';

export const physOhmsLawDriftDetails: DetailedTopicContent = {
  topicId: 'phys-ohms-law-drift',
  topicName: 'Electric Current, Drift Velocity & Ohm\'s Law',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Current Electricity',
  chapter: 'Current Electricity',

  whatIsThisTopic:
    'Current Electricity deals with charges in steady motion through conductors. This master module covers the fundamental origin of electric current from first principles: potential difference creating internal electric fields, microscopic random thermal motion vs. directed electron drift, derivation of drift velocity and current (I = n e A v_d), current density (J = I/A), conductivity and resistivity, experimental verification of Ohm\'s law (V = IR), and comprehensive V-I vs I-V characteristic analysis for ohmic and non-ohmic conductors.',

  basicIdea: [
    'Electric current is the net rate of flow of electric charge across any cross-section of a conductor: I = Q/t (steady) or I = dQ/dt (instantaneous). SI unit is the ampere (1 A = 1 C/s).',
    'Conceptual Flow: Potential Difference (V) → Internal Electric Field (E = V/L) → Directed Acceleration of Free Electrons → Collisions with Lattice Ions → Steady Drift Velocity (v_d) → Macro Electric Current (I = n e A v_d) → Resistance (R) → Circuit Behaviour.',
    'Free electrons in a metallic lattice undergo chaotic random thermal motion at speeds of ~10⁵ m/s with zero net displacement (average thermal velocity = 0). When an external electric field is applied, electrons experience an electrostatic force (F = -eE) and acquire a tiny net drift velocity (v_d ~ 10⁻⁴ m/s = 0.1 mm/s) opposite to the field.',
    'The fundamental relation between macroscopic current I and microscopic electron drift v_d is I = n e A v_d, where n is the electron number density, e is elementary charge (1.6 × 10⁻¹⁹ C), and A is conductor cross-sectional area.',
    'Current Density J⃗ = I/A = n e v⃗_d is a vector quantity pointing in the direction of conventional current (along the electric field), with SI unit A/m².',
    'Microscopic Form of Ohm\'s Law: J⃗ = σ E⃗ or E⃗ = ρ J⃗, where conductivity σ = n e² τ / m and resistivity ρ = m / (n e² τ), with τ being the average relaxation time between electron-ion collisions.',
    'Macroscopic Ohm\'s Law states that at constant temperature and physical dimensions, the potential difference V across a conductor is directly proportional to the current I flowing through it: V = I R, where R = ρ L / A.',
    'V-I vs I-V Graphs: The slope of a V-versus-I graph represents Resistance (R = ΔV/ΔI), whereas the slope of an I-versus-V graph represents Conductance (G = 1/R = ΔI/ΔV). Always verify which axis represents Voltage before calculating resistance!'
  ],

  importantTerms: [
    {
      term: 'Electric Current (I)',
      symbol: 'I = dQ/dt',
      definition:
        'The time rate of flow of electric charge across any cross-sectional area of a conductor.',
      neetNote: 'SI Unit: Ampere (A). Current is a SCALAR quantity because it follows ordinary scalar algebra, not vector addition, even though it has a designated direction of flow.'
    },
    {
      term: 'Conventional Current vs. Electron Flow',
      definition:
        'Conventional current is defined as the direction in which positive charges would move (from positive terminal to negative terminal, high to low potential). Electron flow is the physical motion of negative conduction electrons from low potential to high potential.',
      neetNote: 'Conventional current flows OPPOSITE to the actual physical drift direction of electrons.'
    },
    {
      term: 'Relaxation Time (τ)',
      symbol: 'τ',
      definition:
        'The average time interval elapsed between two successive collisions of a conduction electron with the positive lattice ions of the metal conductor.',
      neetNote: 'Order of magnitude: ~10⁻¹⁴ seconds in copper at room temperature. Decreases with increasing temperature.'
    },
    {
      term: 'Drift Velocity (v_d)',
      symbol: 'v_d = (e E τ) / m',
      definition:
        'The small, steady average velocity with which free electrons drift through a conductor under the influence of an applied external electric field.',
      neetNote: 'Typical magnitude is tiny: ~10⁻⁴ m/s (0.1 to 1 mm/s). Do NOT confuse with the huge random thermal speed (~10⁵ m/s) or the electromagnetic signal propagation speed (~3 × 10⁸ m/s).'
    },
    {
      term: 'Current Density (J⃗)',
      symbol: 'J⃗ = (I / A) n̂ = n e v⃗_d',
      definition:
        'The electric current per unit cross-sectional area oriented perpendicular to the direction of current flow. It is a VECTOR quantity pointing along the electric field.',
      neetNote: 'SI Unit: A/m² (or A·m⁻²). Dimensional formula: [A L⁻²].'
    },
    {
      term: 'Conductivity (σ) & Resistivity (ρ)',
      symbol: 'σ = 1/ρ = (n e² τ) / m',
      definition:
        'Resistivity (ρ) measures a material\'s intrinsic opposition to electric current, while Conductivity (σ) measures its intrinsic ability to conduct current.',
      neetNote: 'Resistivity SI unit: Ω·m (ohm-metre). Conductivity SI unit: Ω⁻¹·m⁻¹ or Siemens/metre (S/m). Both are intrinsic material properties independent of dimensions.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Chapter Introduction & Conceptual Flow of Current Electricity',
      paragraphs: [
        'Why does electric current flow? In an isolated metallic conductor, millions of valence electrons detach from their parent atoms to form an "electron gas" roaming among stationary positive lattice ions. However, their velocities are completely randomized by thermal agitation, resulting in zero net transport of charge across any cross-section.',
        'When a battery connects across the conductor, it establishes a Potential Difference (V). This creates a longitudinal Electric Field (E = V/L) inside the conductor that exerts a continuous electrostatic force (F = -eE) on every free electron.',
        'Although accelerated by this force, electrons repeatedly collide with lattice ions, losing their acquired forward momentum and re-accelerating. The net result is a slow, steady superimposed migration known as Electron Drift.',
        'This steady drift of billions of electrons constitutes Electric Current (I = n e A v_d). The internal collisions represent the microscopic origin of Electrical Resistance (R). Understanding this chain of causation is essential for mastering Current Electricity in NEET UG.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="20" y="20" width="140" height="70" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="8"/><text x="90" y="48" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">POTENTIAL</text><text x="90" y="68" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">DIFFERENCE (V)</text><line x1="160" y1="55" x2="190" y2="55" stroke="#64748b" stroke-width="2.5" marker-end="url(#flow-arr)"/><rect x="190" y="20" width="140" height="70" fill="#e0e7ff" stroke="#6366f1" stroke-width="2" rx="8"/><text x="260" y="48" fill="#3730a3" font-size="13" font-weight="bold" text-anchor="middle">ELECTRIC</text><text x="260" y="68" fill="#3730a3" font-size="13" font-weight="bold" text-anchor="middle">FIELD (E = V/L)</text><line x1="330" y1="55" x2="360" y2="55" stroke="#64748b" stroke-width="2.5" marker-end="url(#flow-arr)"/><rect x="360" y="20" width="140" height="70" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="8"/><text x="430" y="48" fill="#92400e" font-size="13" font-weight="bold" text-anchor="middle">ELECTRON</text><text x="430" y="68" fill="#92400e" font-size="13" font-weight="bold" text-anchor="middle">DRIFT (v_d)</text><line x1="500" y1="55" x2="530" y2="55" stroke="#64748b" stroke-width="2.5" marker-end="url(#flow-arr)"/><rect x="530" y="20" width="150" height="70" fill="#dcfce7" stroke="#10b981" stroke-width="2" rx="8"/><text x="605" y="48" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">ELECTRIC</text><text x="605" y="68" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">CURRENT (I)</text><line x1="605" y1="90" x2="605" y2="135" stroke="#64748b" stroke-width="2.5" marker-end="url(#flow-arr)"/><rect x="530" y="135" width="150" height="70" fill="#fee2e2" stroke="#ef4444" stroke-width="2" rx="8"/><text x="605" y="163" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">RESISTANCE (R)</text><text x="605" y="183" fill="#991b1b" font-size="11" text-anchor="middle">Lattice Collisions</text><line x1="530" y1="170" x2="380" y2="170" stroke="#64748b" stroke-width="2.5" marker-end="url(#flow-arr)"/><rect x="180" y="135" width="200" height="70" fill="#f1f5f9" stroke="#475569" stroke-width="2" rx="8"/><text x="280" y="163" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">CIRCUIT BEHAVIOUR</text><text x="280" y="183" fill="#475569" font-size="11" text-anchor="middle">Ohm\'s Law: V = IR</text><defs><marker id="flow-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs></svg>',
        caption:
          'Figure 3.1: Complete conceptual causal chain of Current Electricity from applied voltage to circuit behaviour.',
        guide:
          'Trace the causal sequence: A potential difference creates an electric field, which exerts force driving electron drift, producing measurable current against collision-induced resistance.'
      },
      importantPoints: [
        'Electric current requires a closed circuit and a non-zero potential difference.',
        'The electric field inside a current-carrying conductor is non-zero (E = V/L), unlike electrostatics where E = 0 inside conductors.',
        'Current Electricity forms 3 to 4 direct questions (12-16 marks) in NEET UG every year.'
      ]
    },
    {
      heading: '2. Electric Current: Fundamentals, Charge Flow & Scalar Nature',
      paragraphs: [
        'Definition: Electric current is defined as the net quantity of charge ΔQ passing through a given cross-section of a conductor in time interval Δt: I = ΔQ / Δt. For continuously varying charge flow, Instantaneous Current is I = dQ/dt.',
        'If a charge q rotates in a circular path of radius r with frequency f (or angular speed ω and speed v), the effective current is I = q / T = q f = (q ω) / (2π) = (q v) / (2π r).',
        'Conventional Current vs. Electron Flow: By historical convention established by Benjamin Franklin, the direction of electric current is taken as the direction of flow of positive charge (from positive terminal to negative terminal). In metals, charge carriers are negative electrons, which physically drift from negative to positive terminals. Hence, Conventional Current is always OPPOSITE to electron drift.',
        'Scalar Nature of Current: Although electric current has both magnitude and a designated direction along a wire, it is a SCALAR quantity. When two wires carrying currents I₁ and I₂ intersect at an angle θ, the resultant current is simply I₁ + I₂ (algebraic addition) and does NOT depend on the angle θ between the wires (violating vector addition laws).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><rect x="80" y="60" width="540" height="100" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2" rx="10"/><line x1="80" y1="35" x2="620" y2="35" stroke="#ef4444" stroke-width="3" marker-end="url(#arr-red-cur)"/><text x="350" y="25" fill="#b91c1c" font-size="13" font-weight="bold" text-anchor="middle">Conventional Current Direction (High Potential + to Low Potential -)</text><line x1="620" y1="185" x2="80" y2="185" stroke="#3b82f6" stroke-width="3" marker-end="url(#arr-blu-cur)"/><text x="350" y="208" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">Physical Electron Drift Direction (Low Potential - to High Potential +)</text><circle cx="160" cy="110" r="14" fill="#3b82f6"/><text x="160" y="115" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">e⁻</text><line x1="140" y1="110" x2="110" y2="110" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arr-blu-cur)"/><circle cx="320" cy="110" r="14" fill="#3b82f6"/><text x="320" y="115" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">e⁻</text><line x1="300" y1="110" x2="270" y2="110" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arr-blu-cur)"/><circle cx="480" cy="110" r="14" fill="#3b82f6"/><text x="480" y="115" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">e⁻</text><line x1="460" y1="110" x2="430" y2="110" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arr-blu-cur)"/><text x="350" y="90" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">Conductor Cross-Section Area A</text><defs><marker id="arr-red-cur" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker><marker id="arr-blu-cur" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/></marker></defs></svg>',
        caption:
          'Figure 3.2: Comparison of Conventional Current (positive to negative) and Physical Electron Drift (negative to positive).',
        guide:
          'Always remember: In circuit analysis, arrows show conventional current direction, which is directly opposite to the real physical motion of electrons.'
      },
      importantPoints: [
        'I = Q/t = ne/t = dQ/dt.',
        'Current is a scalar because it obeys scalar algebraic addition: I_total = I₁ + I₂.',
        'Conventional current flows from higher potential (+) to lower potential (-).'
      ]
    },
    {
      heading: '3. Drift of Electrons & First-Principles Derivation of I = n e A v_d',
      paragraphs: [
        'Random Thermal Motion: At absolute temperature T, free electrons possess thermal kinetic energy (½ m u_rms² = 3/2 k_B T). They move in random zigzag paths at immense speeds (u_rms ~ 10⁵ m/s). Because the directions of motion are isotropic (completely random), the average thermal velocity vector is zero: ⟨u⃗⟩ = (1/N) ∑ u⃗ᵢ = 0. Hence, thermal agitation alone produces no electric current.',
        'Origin of Drift Velocity: When an electric field E⃗ is established, each electron experiences an electrostatic force F⃗ = -e E⃗, producing an acceleration a⃗ = F⃗/m = -e E⃗ / m. Between two successive collisions (relaxation time τ), the electron gains a directed velocity component: v⃗_d = a⃗ τ = -(e E⃗ τ) / m. In magnitude: v_d = (e E τ) / m = (e V τ) / (m L).',
        'Derivation of I = n e A v_d: Consider a conductor of length L and cross-sectional area A containing n free electrons per unit volume. The total number of free electrons in the conductor is N = n × Volume = n A L. The total mobile charge is Q = N e = n A L e. In time interval t, all electrons within length L = v_d t cross the end plane. Thus, time t = L / v_d. Electric current I = Q / t = (n A L e) / (L / v_d) = n e A v_d.',
        'Why is electrical response instantaneous despite tiny v_d? When a light switch is closed, the electric field sets up throughout the entire circuit virtually at the speed of light (~3 × 10⁸ m/s). Free electrons everywhere begin to drift simultaneously, like water pushing out immediately from an already filled garden hose!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><ellipse cx="140" cy="120" rx="30" ry="60" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/><rect x="140" y="60" width="420" height="120" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/><ellipse cx="560" cy="120" rx="30" ry="60" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/><rect x="360" y="60" width="100" height="120" fill="#dbeafe" opacity="0.6"/><ellipse cx="360" cy="120" rx="20" ry="60" fill="#bfdbfe" stroke="#3b82f6" stroke-dasharray="4,4"/><ellipse cx="460" cy="120" rx="20" ry="60" fill="#93c5fd" stroke="#3b82f6"/><text x="410" y="45" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">Volume element: dV = A · (v_d · dt)</text><line x1="360" y1="195" x2="460" y2="195" stroke="#3b82f6" stroke-width="2"/><text x="410" y="215" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">dx = v_d dt</text><line x1="140" y1="225" x2="560" y2="225" stroke="#64748b" stroke-width="2"/><text x="350" y="238" fill="#475569" font-size="12" text-anchor="middle">Length L</text><text x="80" y="125" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Area A</text><text x="350" y="115" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">I = n e A v_d</text><line x1="500" y1="140" x2="420" y2="140" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arr-red-vd)"/><text x="460" y="160" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">v_d (Drift)</text><defs><marker id="arr-red-vd" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444"/></marker></defs></svg>',
        caption:
          'Figure 3.3: Charge crossing conductor cross-section of area A in time dt, establishing the fundamental relation I = n e A v_d.',
        guide:
          'Notice that charge dQ = n e A v_d dt flows through area A in time dt. Dividing by dt gives the current I = n e A v_d.'
      },
      importantPoints: [
        'v_d = (e E τ) / m = (e V τ) / (m L).',
        'I = n e A v_d.',
        'Drift speed is directly proportional to electric field: v_d = μ E, where μ = eτ/m is electron mobility.',
        'Thermal speed (~10⁵ m/s) is random with zero average; Drift speed (~10⁻⁴ m/s) is directed and creates current.'
      ]
    },
    {
      heading: '4. Current Density (J⃗) & Microscopic Form of Ohm\'s Law',
      paragraphs: [
        'Current Density (J⃗) is defined as the current per unit area normal to the flow of charge: J = I / A. Substituting I = n e A v_d gives: J = n e v_d. Since it has a specific spatial direction (parallel to E⃗ and conventional current), J⃗ is a true vector quantity.',
        'If the cross-sectional area vector A⃗ makes an angle θ with the current direction, the current is the dot product: I = J⃗ · A⃗ = J A cos θ.',
        'Derivation of Microscopic Ohm\'s Law: Substituting v_d = (e E τ) / m into J = n e v_d yields: J = n e [(e E τ) / m] = [(n e² τ) / m] E. Defining Electrical Conductivity as σ = (n e² τ) / m, we get the microscopic Ohm\'s law: J⃗ = σ E⃗.',
        'Electrical Resistivity (ρ) is the reciprocal of conductivity: ρ = 1 / σ = m / (n e² τ). Hence, E⃗ = ρ J⃗. This shows that resistivity depends only on electron mass m, elementary charge e, electron number density n, and relaxation time τ (material properties and temperature).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="200" fill="#f8fafc" rx="14"/><rect x="60" y="30" width="580" height="140" fill="#f1f5f9" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="350" y="65" fill="#1e3a8a" font-size="16" font-weight="bold" text-anchor="middle">Microscopic Form of Ohm\'s Law</text><text x="350" y="105" fill="#2563eb" font-size="18" font-weight="bold" text-anchor="middle">J⃗ = σ E⃗   and   E⃗ = ρ J⃗</text><text x="350" y="145" fill="#047857" font-size="14" font-weight="bold" text-anchor="middle">σ = (n e² τ) / m   |   ρ = m / (n e² τ)   |   J = I / A = n e v_d</text></svg>',
        caption:
          'Figure 3.4: Microscopic Ohm\'s law relating current density J, electric field E, conductivity σ, and resistivity ρ.',
        guide:
          'In vector form, J⃗ and E⃗ are always collinear in isotropic materials.'
      },
      importantPoints: [
        'J = I / A = n e v_d (SI unit: A/m²).',
        'J⃗ is a vector; I is a scalar.',
        'Microscopic Ohm\'s law: J⃗ = σ E⃗ or E⃗ = ρ J⃗.'
      ]
    },
    {
      heading: '5. Macroscopic Ohm\'s Law & Experimental Verification Circuit',
      paragraphs: [
        'Statement: At constant temperature and other physical conditions (such as pressure and strain), the electric current I flowing through a conductor is directly proportional to the potential difference V applied across its ends: V ∝ I => V = I R, where R is the Electrical Resistance of the conductor.',
        'Derivation from Microscopic Form: Since E = V/L and J = I/A, substituting into E = ρ J gives: V/L = ρ (I/A) => V = I [ρ L / A]. Comparing with V = IR gives the macroscopic resistance: R = ρ L / A = [m / (n e² τ)] · (L / A).',
        'Experimental Circuit Setup: To verify Ohm\'s law, a circuit is assembled containing: a DC power source (battery), a plug key/switch, a variable rheostat (to vary current), an Ammeter connected in SERIES (to measure current I), a Voltmeter connected in PARALLEL across the test resistor (to measure potential difference V), and the test metallic resistor wire.',
        'Procedure & Observation: By adjusting the rheostat to different positions, corresponding readings of V and I are recorded. Plotting V on the y-axis against I on the x-axis yields a straight line passing through the origin (y = mx), confirming V ∝ I. The slope of this straight line gives the resistance R = ΔV / ΔI.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="260" fill="#f8fafc" rx="14"/><line x1="100" y1="180" x2="100" y2="70" stroke="#334155" stroke-width="2.5"/><line x1="100" y1="70" x2="220" y2="70" stroke="#334155" stroke-width="2.5"/><circle cx="250" cy="70" r="22" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="250" y="76" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="40" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Ammeter (Series)</text><line x1="272" y1="70" x2="350" y2="70" stroke="#334155" stroke-width="2.5"/><rect x="350" y="55" width="100" height="30" fill="#fee2e2" stroke="#ef4444" stroke-width="2" rx="4"/><text x="400" y="75" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">Resistor R</text><line x1="450" y1="70" x2="580" y2="70" stroke="#334155" stroke-width="2.5"/><line x1="580" y1="70" x2="580" y2="180" stroke="#334155" stroke-width="2.5"/><line x1="330" y1="70" x2="330" y2="130" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="130" x2="378" y2="130" stroke="#334155" stroke-width="1.5"/><circle cx="400" cy="130" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="400" y="136" fill="#b45309" font-size="14" font-weight="bold" text-anchor="middle">V</text><text x="400" y="165" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">Voltmeter (Parallel)</text><line x1="422" y1="130" x2="470" y2="130" stroke="#334155" stroke-width="1.5"/><line x1="470" y1="130" x2="470" y2="70" stroke="#334155" stroke-width="1.5"/><line x1="100" y1="180" x2="220" y2="180" stroke="#334155" stroke-width="2.5"/><line x1="220" y1="165" x2="220" y2="195" stroke="#ef4444" stroke-width="3"/><line x1="230" y1="172" x2="230" y2="188" stroke="#334155" stroke-width="3"/><line x1="240" y1="165" x2="240" y2="195" stroke="#ef4444" stroke-width="3"/><line x1="250" y1="172" x2="250" y2="188" stroke="#334155" stroke-width="3"/><text x="235" y="215" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Battery (+ -)</text><line x1="250" y1="180" x2="340" y2="180" stroke="#334155" stroke-width="2.5"/><circle cx="360" cy="180" r="4" fill="#334155"/><circle cx="380" cy="180" r="4" fill="#334155"/><line x1="360" y1="180" x2="380" y2="170" stroke="#334155" stroke-width="2"/><text x="370" y="215" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Switch (Key)</text><line x1="380" y1="180" x2="460" y2="180" stroke="#334155" stroke-width="2.5"/><rect x="460" y="170" width="60" height="20" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/><line x1="490" y1="160" x2="490" y2="170" stroke="#64748b" stroke-width="2" marker-end="url(#flow-arr)"/><text x="490" y="215" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Rheostat (Rh)</text><line x1="520" y1="180" x2="580" y2="180" stroke="#334155" stroke-width="2.5"/></svg>',
        caption:
          'Figure 3.5: Standard experimental circuit for verifying Ohm\'s law showing ammeter in series, voltmeter in parallel, battery, switch, and rheostat.',
        guide:
          'Remember: Ammeter is always connected in SERIES (ideal resistance = 0), and Voltmeter is always connected in PARALLEL (ideal resistance = ∞).'
      },
      importantPoints: [
        'V = I R where R = ρ L / A.',
        'Ammeter in SERIES; Voltmeter in PARALLEL across the resistor.',
        'Ohm\'s law is valid only when temperature and other physical parameters remain constant.'
      ]
    },
    {
      heading: '6. V-I & I-V Characteristics: Ohmic vs. Non-Ohmic Conductors',
      paragraphs: [
        'Ohmic Conductors: Materials that strictly obey Ohm\'s law (such as copper, silver, aluminium, and standard metallic alloy resistors at constant temperature). Their V-I graph is a perfectly straight line passing through the origin.',
        'Slope Rules (CRITICAL NEET TRAP):',
        '(1) On a V-versus-I graph (V on y-axis, I on x-axis): Slope = ΔV / ΔI = Resistance R. A steeper slope indicates greater resistance (R₁ > R₂ if slope₁ > slope₂). If temperature increases for a metal, the slope increases (T₁ > T₂).',
        '(2) On an I-versus-V graph (I on y-axis, V on x-axis): Slope = ΔI / ΔV = Conductance G = 1/R. A steeper slope indicates lower resistance (R₁ < R₂ if slope₁ > slope₂).',
        'Non-Ohmic Devices: Materials or components where V is NOT linearly proportional to I (V/I is not constant). Examples:',
        '(a) Incandescent Filament Lamp: At higher currents, Joule heating raises the filament temperature, causing resistance to increase. The V-I graph curves upward (slope steepens).',
        '(b) P-N Junction Diode: Highly non-linear and asymmetric. Conducts readily under forward bias above knee voltage (~0.7 V for Si) but blocks current under reverse bias.',
        '(c) Gallium Arsenide (GaAs) / Thyristor: Exhibits a unique Negative Differential Resistance region where an increase in voltage produces a decrease in current (dV/dI < 0).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" rx="8"/><text x="180" y="42" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">V-I Graph (Slope = R)</text><line x1="70" y1="180" x2="300" y2="180" stroke="#334155" stroke-width="2"/><text x="290" y="195" fill="#334155" font-size="11" font-weight="bold">I (Current)</text><line x1="70" y1="180" x2="70" y2="50" stroke="#334155" stroke-width="2"/><text x="60" y="60" fill="#334155" font-size="11" font-weight="bold" text-anchor="end">V (Volts)</text><line x1="70" y1="180" x2="260" y2="80" stroke="#ef4444" stroke-width="2.5"/><text x="240" y="70" fill="#b91c1c" font-size="11" font-weight="bold">T₁ (Higher R)</text><line x1="70" y1="180" x2="280" y2="120" stroke="#3b82f6" stroke-width="2.5"/><text x="270" y="140" fill="#1d4ed8" font-size="11" font-weight="bold">T₂ (Lower R)</text><text x="180" y="210" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Slope = ΔV/ΔI = R => T₁ > T₂</text><rect x="370" y="20" width="300" height="200" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" rx="8"/><text x="520" y="42" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">Non-Ohmic Devices</text><line x1="410" y1="180" x2="640" y2="180" stroke="#334155" stroke-width="2"/><text x="630" y="195" fill="#334155" font-size="11" font-weight="bold">V</text><line x1="410" y1="180" x2="410" y2="50" stroke="#334155" stroke-width="2"/><text x="400" y="60" fill="#334155" font-size="11" font-weight="bold" text-anchor="end">I</text><path d="M 410 180 Q 480 180 500 150 T 540 60" fill="none" stroke="#8b5cf6" stroke-width="2.5"/><text x="550" y="80" fill="#6d28d9" font-size="11" font-weight="bold">Diode (Forward)</text><path d="M 410 180 Q 470 140 580 100" fill="none" stroke="#f59e0b" stroke-width="2.5"/><text x="590" y="115" fill="#b45309" font-size="11" font-weight="bold">Filament Lamp</text></svg>',
        caption:
          'Figure 3.6: V-I characteristics of Ohmic conductors at different temperatures (left) vs. Non-Ohmic devices (right).',
        guide:
          'Carefully check the axis variables: On a V-I graph, slope is R; on an I-V graph, slope is 1/R!'
      },
      importantPoints: [
        'V-I graph slope = R = ΔV / ΔI.',
        'I-V graph slope = 1/R = ΔI / ΔV.',
        'For metals, higher temperature means higher resistance (steeper on V-I, shallower on I-V).',
        'Semiconductor diodes, electrolytes, and vacuum tubes are non-ohmic.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Electric Current Definition',
      formula: 'I = \\frac{Q}{t} = \\frac{n e}{t} = \\frac{dQ}{dt}',
      variables: 'Q = net charge (C), t = time (s), n = number of electrons, e = 1.6 × 10⁻¹⁹ C'
    },
    {
      title: 'Drift Velocity Expression',
      formula: 'v_d = \\frac{e E \\tau}{m} = \\frac{e V \\tau}{m L}',
      variables: 'e = electronic charge, E = electric field (V/m), τ = relaxation time (s), m = electron mass (9.1 × 10⁻³¹ kg), V = voltage, L = length'
    },
    {
      title: 'Relation Between Current and Drift Velocity',
      formula: 'I = n e A v_d',
      variables: 'n = free electron number density (m⁻³), A = cross-sectional area (m²), v_d = drift speed (m/s)'
    },
    {
      title: 'Current Density (Vector)',
      formula: 'J = \\frac{I}{A} = n e v_d \\implies \\vec{J} = \\sigma \\vec{E}',
      variables: 'J = current density (A/m²), σ = electrical conductivity (S/m), E = electric field (V/m)'
    },
    {
      title: 'Microscopic Conductivity & Resistivity',
      formula: '\\sigma = \\frac{n e^2 \\tau}{m}, \\quad \\rho = \\frac{m}{n e^2 \\tau}',
      variables: 'σ = conductivity, ρ = resistivity (Ω·m), τ = relaxation time'
    },
    {
      title: 'Ohm\'s Law (Macroscopic)',
      formula: 'V = I R = I \\left(\\frac{\\rho L}{A}\\right)',
      variables: 'V = potential difference (V), I = current (A), R = resistance (Ω)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="40" y="25" width="280" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="180" y="55" fill="#1d4ed8" font-size="15" font-weight="bold" text-anchor="middle">Electric Current (I)</text><text x="180" y="85" fill="#1e3a8a" font-size="13" text-anchor="middle">• Macroscopic scalar property</text><text x="180" y="110" fill="#1e3a8a" font-size="13" text-anchor="middle">• Defined across entire cross-section</text><text x="180" y="135" fill="#1e3a8a" font-size="13" text-anchor="middle">• SI Unit: Ampere (A = C/s)</text><text x="180" y="160" fill="#1e3a8a" font-size="13" text-anchor="middle">• I = ∫ J⃗ · dA⃗</text><text x="180" y="185" fill="#1e3a8a" font-size="13" text-anchor="middle">• Same in series regardless of wire gauge</text><rect x="380" y="25" width="280" height="190" fill="#ecfdf5" stroke="#10b981" stroke-width="2" rx="10"/><text x="520" y="55" fill="#047857" font-size="15" font-weight="bold" text-anchor="middle">Current Density (J⃗)</text><text x="520" y="85" fill="#065f46" font-size="13" text-anchor="middle">• Microscopic vector property</text><text x="520" y="110" fill="#065f46" font-size="13" text-anchor="middle">• Defined at a specific point</text><text x="520" y="135" fill="#065f46" font-size="13" text-anchor="middle">• SI Unit: A/m²</text><text x="520" y="160" fill="#065f46" font-size="13" text-anchor="middle">• J⃗ = n e v⃗_d = σ E⃗</text><text x="520" y="185" fill="#065f46" font-size="13" text-anchor="middle">• Increases where wire is constricted (J ∝ 1/A)</text></svg>',
    caption: 'High-yield comparison table: Electric Current (Scalar) vs. Current Density (Vector).'
  },

  neetImportantPoints: [
    'Current is a scalar, but Current Density (J⃗) is a vector pointing in the direction of conventional current.',
    'In a wire of non-uniform cross-section connected across a battery: Current I is CONSTANT throughout, but Current Density J, Electric Field E, and Drift Velocity v_d all vary inversely with area A (J ∝ 1/A, E ∝ 1/A, v_d ∝ 1/A).',
    'Drift velocity is directly proportional to applied voltage and inversely proportional to conductor length: v_d ∝ V/L.',
    'Relaxation time τ decreases with temperature in metals due to increased ionic vibration amplitude, causing resistivity to increase.',
    'On a V-versus-I graph, slope is R. On an I-versus-V graph, slope is 1/R.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking that current decreases along the length of a resistor as energy is used up.',
      correctFact:
        'Electric current (charge flow rate) is strictly conserved at steady state (Conservation of Charge). What gets dropped across the resistor is Electric Potential (voltage), not electric charge or current!',
      whyItMattersForNEET:
        'Fundamental conceptual trap tested in series circuits and non-uniform conductor questions.'
    },
    {
      commonConfusion: 'Confusing random thermal velocity with drift velocity.',
      correctFact:
        'Random thermal speed is ~10⁵ m/s with zero net direction; drift speed is ~10⁻⁴ m/s (0.1 mm/s) directed opposite to electric field.',
      whyItMattersForNEET: 'Direct numerical and conceptual question trap in NEET UG.'
    },
    {
      commonConfusion: 'Interchanging slopes of V-I and I-V graphs.',
      correctFact:
        'Slope of V-I graph = ΔV/ΔI = R. Slope of I-V graph = ΔI/ΔV = 1/R = G (Conductance).',
      whyItMattersForNEET: 'Very common blunder causing students to pick the exact inverse option.'
    }
  ],

  quickRevision: [
    'I = Q/t = n e A v_d (Scalar, SI: A).',
    'v_d = (e E τ) / m = (e V τ) / (m L) (~10⁻⁴ m/s).',
    'J = I / A = n e v_d = σ E (Vector, SI: A/m²).',
    'σ = (n e² τ) / m; ρ = m / (n e² τ) (SI: Ω·m).',
    'V = IR; R = ρ L / A.',
    'V-I slope = R; I-V slope = 1/R.',
    'In non-uniform wire: I = const, but J, E, v_d ∝ 1/A.'
  ],

  practiceQuestions: [
    {
      id: 'ohm-p1',
      question:
        'A steady current of 1.6 A flows through a copper wire of cross-sectional area 1 mm². If the number density of free electrons in copper is 8 × 10²⁸ m⁻³, the drift velocity of electrons is:',
      options: ['1.25 × 10⁻⁴ m/s', '2.5 × 10⁻⁴ m/s', '1.25 × 10⁻³ m/s', '0.625 × 10⁻⁴ m/s'],
      correctAnswer: 0,
      explanation:
        'Formula: I = n e A v_d => v_d = I / (n e A). Given: I = 1.6 A, n = 8 × 10²⁸ m⁻³, e = 1.6 × 10⁻¹⁹ C, A = 1 mm² = 1 × 10⁻⁶ m². v_d = 1.6 / [8 × 10²⁸ × 1.6 × 10⁻¹⁹ × 10⁻⁶] = 1.6 / [8 × 1.6 × 10³] = 1 / [8 × 10³] = 0.125 × 10⁻³ = 1.25 × 10⁻⁴ m/s.'
    },
    {
      id: 'ohm-p2',
      question:
        'A potential difference V is applied across a copper wire of length L and diameter d. If V is doubled and length L is halved, the drift velocity of electrons will:',
      options: ['Double', 'Become 4 times', 'Halve', 'Remain unchanged'],
      correctAnswer: 1,
      explanation:
        'Drift velocity v_d = (e V τ) / (m L) ∝ V / L. When V becomes 2V and L becomes L/2, new drift velocity v_d\' ∝ (2V) / (L/2) = 4 (V/L) = 4 v_d. Thus, drift velocity becomes 4 times.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2023,
      question:
        'The drift speed of electrons in a copper wire of diameter d and length L is v_d when a potential difference V is applied across it. If the potential difference is increased to 2V, the drift speed becomes:',
      options: ['v_d / 2', 'v_d', '2 v_d', '4 v_d'],
      correctAnswer: 2,
      explanation:
        'Since v_d = (e V τ) / (m L), drift velocity is directly proportional to the applied potential difference V (v_d ∝ V). When V is doubled, v_d becomes 2 v_d.',
      conceptTested: 'Dependence of Drift Velocity on Potential Difference'
    },
    {
      exam: 'NEET UG',
      year: 2020,
      question:
        'Which of the following graph represents the variation of resistivity (ρ) with temperature (T) for copper (a conductor)?',
      options: [
        'Non-linear curve increasing smoothly with temperature',
        'Straight line with negative slope',
        'Rectangular hyperbola decreasing asymptotically',
        'Horizontal line independent of temperature'
      ],
      correctAnswer: 0,
      explanation:
        'For copper (metal conductor), at absolute temperatures around room temperature and below, resistivity increases non-linearly with temperature as ρ(T) curves upward due to enhanced electron-phonon collisions (decreasing τ).',
      conceptTested: 'Temperature Dependence of Resistivity for Metals (NCERT Graph)'
    }
  ]
};
