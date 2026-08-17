import { DetailedTopicContent } from '../../types/neet';

export const physFaradaysLenzLawDetails: DetailedTopicContent = {
  topicId: 'phys-faradays-lenz-law',
  topicName: 'Magnetic Flux, Faraday’s Laws, Lenz’s Law, Motional EMF & Eddy Currents',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Electromagnetic Induction & Alternating Current',
  chapter: 'Electromagnetic Induction',

  whatIsThisTopic:
    'Electromagnetic Induction (EMI) is the phenomenon in which an electromotive force (emf) and electric current are induced in a closed circuit whenever the magnetic flux linked with that circuit changes with time. This chapter connects stationary and time-varying magnetic fields to electric circuits, establishing the operational foundation for electric generators, transformers, inductors, magnetic braking, and modern power grids.',

  basicIdea: [
    'The Conceptual Chain of Electromagnetic Induction:',
    'MAGNETIC FIELD (B) → CHANGE IN MAGNETIC FLUX (ΔΦ) → INDUCED EMF (ε) → INDUCED CURRENT (I = ε/R) → LENZ’S LAW (Opposition) → MOTIONAL EMF (B·l·v) → EDDY CURRENTS (Bulk Conductor Loops) → ENERGY CONSERVATION.',
    '• What is Magnetic Flux (Φ)? It is the total number of magnetic field lines passing through a given surface area: Φ = B · A = B A cosθ, where θ is the angle between the magnetic field vector B and the AREA VECTOR A (the outward normal to the surface). SI Unit: Weber (Wb) = Tesla·meter² (T·m²).',
    '• Faraday’s First Law: Whenever the magnetic flux linked with a circuit changes with time, an emf is induced in the circuit. If the circuit is closed, an induced current flows. The induced emf persists ONLY as long as the flux is actively changing.',
    '• Faraday’s Second Law: The magnitude of induced emf is directly proportional to the time rate of change of magnetic flux linked with the circuit: ε = -N (dΦ/dt). For average emf: ε_avg = -N (ΔΦ/Δt).',
    '• Lenz’s Law: The polarity of the induced emf (and the direction of induced current) is always such that it OPPOSES the very change in magnetic flux that produces it. Lenz’s law is a direct consequence of the LAW OF CONSERVATION OF ENERGY.',
    '• Motional EMF: When a conducting rod of length l moves with velocity v perpendicular to a uniform magnetic field B, free electrons experience a magnetic Lorentz force (F_m = q v × B), causing charge accumulation at the ends until the internal electrostatic force balances the magnetic force (qE = qvB). The resulting potential difference is: ε = B l v sinθ (maximum when B, l, and v are mutually perpendicular: ε = B l v).',
    '• Moving Rod on Conducting Rails: For a rod sliding at speed v on frictionless rails with resistance R: Induced Current I = (B l v) / R; Opposing Magnetic Force F_mag = I l B = (B² l² v) / R; Mechanical Power supplied P_mech = F · v = (B² l² v²) / R = Electrical Power dissipated P_elec = I² R.',
    '• Eddy Currents (Foucault Currents): Closed circulating loops of induced electric currents generated within the volume of bulk metallic conductors when exposed to changing magnetic flux. Eddy currents cause Joule heating loss (reduced by using laminated sheets separated by insulating varnish) and enable vital technologies like electromagnetic braking, induction furnaces, speedometers, and dead-beat galvanometers.'
  ],

  importantTerms: [
    {
      term: 'Magnetic Flux (Φ)',
      symbol: 'Φ = B · A = B A cosθ',
      definition:
        'The dot product of the magnetic field vector B and the surface area vector A, representing the total magnetic field penetrating through the surface.',
      neetNote: 'SI Unit: Weber (Wb) = T·m² = V·s. Dimensions: [M¹ L² T⁻² A⁻¹]. θ is measured with the NORMAL to the surface.'
    },
    {
      term: 'Induced Electromotive Force (ε)',
      symbol: 'ε = -dΦ/dt',
      definition:
        'The work done per unit charge around a closed loop created by a time-varying magnetic flux or motional conductor in a magnetic field.',
      neetNote: 'Unlike electrostatic potential difference, induced electric field is NON-CONSERVATIVE (∮ E·dl = -dΦ/dt ≠ 0).'
    },
    {
      term: 'Lenz’s Law Opposition',
      symbol: 'Negative Sign in ε = -dΦ/dt',
      definition:
        'The physical law stating that the direction of an induced current is always such that its own magnetic field opposes the change in external flux producing it.',
      neetNote: 'Strictly complies with the First Law of Thermodynamics (Conservation of Energy).'
    },
    {
      term: 'Motional EMF',
      symbol: 'ε = B l v',
      definition:
        'The electromotive force generated across the terminals of a conductor of length l moving with velocity v across a magnetic field B.',
      neetNote: 'Microscopic origin: Magnetic Lorentz force on mobile charge carriers F_m = q(v × B).'
    },
    {
      term: 'Eddy Currents',
      symbol: 'I_eddy',
      definition:
        'Induced circulating currents produced in solid, bulk conducting masses when subjected to changing magnetic flux.',
      neetNote: 'Minimised in transformer cores by stacking thin, varnished laminated sheets parallel to the magnetic field.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Magnetic Flux (Φ = B·A cosθ) & The Area Vector Convention',
      paragraphs: [
        'What is Magnetic Flux?',
        'Imagine rain falling through a rectangular picture frame. The amount of water passing through the frame depends on: (1) How heavy the rain is (Field strength B), (2) The size of the frame (Area A), and (3) How you tilt the frame relative to the falling rain (Angle θ).',
        'In electromagnetism, the number of magnetic field lines passing perpendicularly through a given surface area is called the Magnetic Flux (Φ).',
        'Mathematical Definition:',
        'Φ = B · A = B A cosθ',
        'where:',
        '• B = Magnitude of uniform magnetic field (in Tesla, T)',
        '• A = Area of the cross-section (in m²)',
        '• θ = Angle between the Magnetic Field Vector (B) and the AREA VECTOR (A), which is perpendicular (normal) to the surface.',
        'CRITICAL NEET ANGLE DISTINCTION:',
        '1. θ is the angle between B and the NORMAL (n̂) to the surface.',
        '2. If the problem states "Magnetic field is PERPENDICULAR to the plane of the coil", then B is parallel to the normal n̂ ⇒ θ = 0° ⇒ Φ = B A (MAXIMUM FLUX).',
        '3. If the problem states "Magnetic field is PARALLEL to the plane of the coil (in the plane of the coil)", then B is perpendicular to the normal n̂ ⇒ θ = 90° ⇒ Φ = B A cos(90°) = 0 (ZERO FLUX).',
        '4. If the plane of the coil makes an angle α with the magnetic field, then θ = 90° - α ⇒ Φ = B A cos(90° - α) = B A sin α.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Magnetic Flux: Area Vector (A) vs Field (B) Alignment</text><g transform="translate(60, 45)"><rect x="0" y="0" width="180" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="90" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Case 1: B ⊥ Plane (θ = 0°)</text><ellipse cx="90" cy="110" rx="60" ry="25" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><line x1="90" y1="110" x2="90" y2="40" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f)"/><text x="98" y="48" fill="#dc2626" font-size="10" font-weight="bold">Area Vector A (Normal)</text><line x1="50" y1="150" x2="50" y2="50" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr-blue-f)"/><line x1="90" y1="150" x2="90" y2="50" stroke="#2563eb" stroke-width="1.5"/><line x1="130" y1="150" x2="130" y2="50" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arr-blue-f)"/><text x="90" y="175" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">Φ_max = B A (cos 0° = 1)</text></g><g transform="translate(270, 45)"><rect x="0" y="0" width="180" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="90" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Case 2: B || Plane (θ = 90°)</text><ellipse cx="90" cy="110" rx="60" ry="25" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><line x1="90" y1="110" x2="90" y2="45" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f)"/><text x="98" y="55" fill="#dc2626" font-size="10" font-weight="bold">Normal A</text><line x1="20" y1="110" x2="160" y2="110" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue-f)"/><text x="140" y="100" fill="#2563eb" font-size="10" font-weight="bold">B Field</text><text x="90" y="175" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">Φ = 0 (cos 90° = 0)</text></g><g transform="translate(480, 45)"><rect x="0" y="0" width="180" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="90" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Case 3: General Tilted Plane</text><ellipse cx="90" cy="115" rx="55" ry="22" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" transform="rotate(-25 90 115)"/><line x1="90" y1="115" x2="115" y2="50" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f)"/><text x="122" y="60" fill="#dc2626" font-size="10" font-weight="bold">A</text><line x1="90" y1="150" x2="90" y2="40" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue-f)"/><text x="75" y="50" fill="#2563eb" font-size="10" font-weight="bold">B</text><path d="M 90 85 A 25 25 0 0 1 100 87" fill="none" stroke="#047857" stroke-width="2"/><text x="105" y="80" fill="#047857" font-size="10" font-weight="bold">θ</text><text x="90" y="175" fill="#047857" font-size="10.5" font-weight="bold" text-anchor="middle">Φ = B A cosθ</text></g><defs><marker id="arr-red-f" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626"/></marker><marker id="arr-blue-f" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb"/></marker></defs></svg>',
        caption: 'Figure 6.1: Magnetic flux geometry showing the Area Vector normal to the surface and angle θ relative to B field.',
        guide: 'Always identify the normal vector to the coil face. θ is between the normal and B.'
      },
      importantPoints: [
        'Magnetic Flux: Φ = B A cosθ (Scalar quantity, SI unit: Weber = Wb = T·m² = J/A).',
        'Dimensions of Flux: [M¹ L² T⁻² A⁻¹].',
        'B perpendicular to surface plane ⇒ θ = 0° ⇒ Φ = B·A (Maximum).',
        'B parallel to surface plane ⇒ θ = 90° ⇒ Φ = 0.',
        'Total flux through an N-turn coil: Φ_total = N B A cosθ.'
      ]
    },
    {
      heading: '2. Faraday’s Experiments & Laws of Electromagnetic Induction',
      paragraphs: [
        'Faraday’s Classic Experiments (1831):',
        'Michael Faraday conducted a series of seminal experiments using a coil connected to a sensitive galvanometer and a permanent bar magnet:',
        '1. Magnet moving TOWARD the coil (North pole entering): The galvanometer needle deflects momentarily in one direction, proving that a current is induced during motion.',
        '2. Magnet held STATIONARY inside or near the coil: The galvanometer deflection drops to ZERO immediately, regardless of how strong the magnetic field is.',
        '3. Magnet moving AWAY from the coil (North pole withdrawing): The galvanometer needle deflects momentarily in the OPPOSITE direction.',
        '4. Faster Motion: When the magnet is moved faster, the deflection is substantially larger.',
        '5. Reversing Poles (South pole approaching): The deflection direction reverses compared to North pole approach.',
        'Core Physical Deduction: An emf is induced if and only if the magnetic flux linked with the circuit is actively CHANGING with time.',
        'Faraday’s Second Law (Quantitative Law):',
        'The magnitude of induced emf in a circuit is equal to the time rate of change of magnetic flux linked with the circuit:',
        '\\varepsilon = - \\frac{d\\Phi}{dt} \\quad \\text{(For 1 turn)}, \\qquad \\varepsilon = - N \\frac{d\\Phi}{dt} \\quad \\text{(For } N \\text{ turns)}.',
        'For a finite time interval Δt, the average induced emf is:',
        '\\varepsilon_{\\text{avg}} = - N \\frac{\\Delta \\Phi}{\\Delta t} = - N \\frac{\\Phi_{\\text{final}} - \\Phi_{\\text{initial}}}{t_2 - t_1}.',
        'Induced Current and Induced Charge:',
        '• Induced Current: I = |ε| / R = (N / R) |dΦ/dt|.',
        '• Induced Charge: ΔQ = ∫ I dt = (N / R) ∫ |dΦ/dt| dt = (N / R) |ΔΦ| = |ΔΦ_total| / R.',
        'CRITICAL NEET INSIGHT ON INDUCED CHARGE: The total induced charge ΔQ depends ONLY on the net change in flux (ΔΦ) and the circuit resistance (R). It is COMPLETELY INDEPENDENT of the time interval Δt or speed of movement!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="230" fill="#f8fafc" rx="12"/><text x="360" y="22" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Faraday’s Magnet-Coil Experiment: Dynamic Flux Induces EMF</text><g transform="translate(60, 45)"><rect x="0" y="0" width="180" height="165" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="90" y="20" fill="#0f172a" font-size="10.5" font-weight="bold" text-anchor="middle">1. N-pole Approaching</text><rect x="20" y="45" width="45" height="25" fill="#dc2626" rx="3"/><text x="42" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">N</text><rect x="65" y="45" width="45" height="25" fill="#2563eb" rx="3"/><text x="87" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">S</text><line x1="42" y1="80" x2="80" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f)"/><text x="60" y="95" fill="#dc2626" font-size="9.5" font-weight="bold">v →</text><circle cx="140" cy="57" r="22" fill="none" stroke="#059669" stroke-width="3"/><circle cx="90" cy="130" r="18" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/><line x1="90" y1="130" x2="78" y2="118" stroke="#dc2626" stroke-width="2"/><text x="90" y="158" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Deflection (Right)</text></g><g transform="translate(270, 45)"><rect x="0" y="0" width="180" height="165" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="90" y="20" fill="#0f172a" font-size="10.5" font-weight="bold" text-anchor="middle">2. Magnet Stationary (v = 0)</text><rect x="35" y="45" width="45" height="25" fill="#dc2626" rx="3"/><text x="57" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">N</text><rect x="80" y="45" width="45" height="25" fill="#2563eb" rx="3"/><text x="102" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">S</text><text x="70" y="95" fill="#64748b" font-size="10" font-weight="bold">v = 0</text><circle cx="145" cy="57" r="22" fill="none" stroke="#059669" stroke-width="3"/><circle cx="90" cy="130" r="18" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/><line x1="90" y1="130" x2="90" y2="114" stroke="#475569" stroke-width="2"/><text x="90" y="158" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Zero Deflection (I = 0)</text></g><g transform="translate(480, 45)"><rect x="0" y="0" width="180" height="165" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="90" y="20" fill="#0f172a" font-size="10.5" font-weight="bold" text-anchor="middle">3. N-pole Moving Away</text><rect x="35" y="45" width="45" height="25" fill="#dc2626" rx="3"/><text x="57" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">N</text><rect x="80" y="45" width="45" height="25" fill="#2563eb" rx="3"/><text x="102" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">S</text><line x1="57" y1="80" x2="25" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f)"/><text x="40" y="95" fill="#dc2626" font-size="9.5" font-weight="bold">← v</text><circle cx="145" cy="57" r="22" fill="none" stroke="#059669" stroke-width="3"/><circle cx="90" cy="130" r="18" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/><line x1="90" y1="130" x2="102" y2="118" stroke="#dc2626" stroke-width="2"/><text x="90" y="158" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Deflection (Left)</text></g></svg>',
        caption: 'Figure 6.2: Faraday’s observations — induced emf and galvanometer deflection exist ONLY when relative motion causes dΦ/dt ≠ 0.',
        guide: 'Remember: Stationary magnet in strong B yields zero induced emf. Moving magnet with speed v yields ε = -dΦ/dt.'
      },
      importantPoints: [
        'Faraday’s Law: ε = -N (dΦ/dt) (Magnitude: |ε| = N |dΦ/dt|).',
        'Induced Current: I = |ε| / R = (N / R) |dΦ/dt|.',
        'Induced Charge: ΔQ = |ΔΦ_total| / R (Independent of time taken Δt!).',
        'Flux change can occur by: (1) Changing B, (2) Changing Area A, (3) Changing orientation θ.'
      ]
    },
    {
      heading: '3. Lenz’s Law, Polarity Determination & Conservation of Energy',
      paragraphs: [
        'Statement of Lenz’s Law (Heinrich Lenz, 1834):',
        'The polarity of the induced emf (and hence the direction of induced current in a closed loop) is always such that it produces a magnetic field that opposes the CHANGE in magnetic flux that caused it.',
        'Key Understanding: Lenz’s law opposes the CHANGE in flux (ΔΦ), not necessarily the magnetic field B itself!',
        'Systematic 5-Step Method for NEET Direction Questions:',
        '• STEP 1: Identify the direction of the external magnetic field B_ext (e.g., into the page ⊗ or out of the page ⊙).',
        '• STEP 2: Determine whether the external magnetic flux through the loop is INCREASING or DECREASING with time.',
        '• STEP 3: Apply Lenz’s Opposition Principle:',
        '  - If Flux is INCREASING: Induced field B_ind must point in the OPPOSITE direction to B_ext (to cancel the increase).',
        '  - If Flux is DECREASING: Induced field B_ind must point in the SAME direction as B_ext (to reinforce the decreasing flux).',
        '• STEP 4: Use Right-Hand Thumb Rule: Point your right thumb along B_ind; your curled fingers indicate the direction of induced current I_ind (Clockwise ↻ for into the page ⊗, Counter-Clockwise ↺ for out of the page ⊙).',
        'Lenz’s Law and Conservation of Energy:',
        'Why MUST Lenz’s law hold true?',
        'Suppose Lenz’s law were false, and the induced current aided the change instead of opposing it. When a North pole approaches a coil, an induced South pole would appear on the near face. The South pole would attract the North pole, accelerating the magnet automatically without any external force!',
        'This would result in kinetic energy and electrical energy being created out of nothing, violating the First Law of Thermodynamics (Conservation of Energy).',
        'In reality, the near face develops a NORTH pole, creating a repulsive magnetic force. The mechanical work done by an external agent against this repulsive force is exactly converted into electrical energy and Joule heat: W_external = Electrical Energy = I² R t.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="250" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Lenz’s Law Polarity Rules &amp; Work-Energy Conversion</text><g transform="translate(60, 48)"><rect x="0" y="0" width="280" height="185" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">N-Pole Approaching (Flux Increasing)</text><rect x="30" y="45" width="45" height="25" fill="#dc2626" rx="3"/><text x="52" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">N</text><rect x="75" y="45" width="45" height="25" fill="#2563eb" rx="3"/><text x="97" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">S</text><line x1="52" y1="80" x2="90" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f)"/><text x="70" y="95" fill="#dc2626" font-size="9.5" font-weight="bold">v →</text><ellipse cx="190" cy="57" rx="16" ry="38" fill="none" stroke="#b91c1c" stroke-width="3"/><text x="190" y="62" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="middle">N</text><text x="140" y="125" fill="#1e3a8a" font-size="10.5" font-weight="bold" text-anchor="middle">Near Face becomes NORTH Pole</text><text x="140" y="145" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Repulsive Force Opposes Motion</text><text x="140" y="165" fill="#047857" font-size="9.5" text-anchor="middle">Work done against repulsion = Joule Heat</text></g><g transform="translate(380, 48)"><rect x="0" y="0" width="280" height="185" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#991b1b" font-size="11.5" font-weight="bold" text-anchor="middle">N-Pole Receding (Flux Decreasing)</text><rect x="30" y="45" width="45" height="25" fill="#dc2626" rx="3"/><text x="52" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">N</text><rect x="75" y="45" width="45" height="25" fill="#2563eb" rx="3"/><text x="97" y="62" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">S</text><line x1="52" y1="80" x2="20" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red-f)"/><text x="35" y="95" fill="#dc2626" font-size="9.5" font-weight="bold">← v</text><ellipse cx="190" cy="57" rx="16" ry="38" fill="none" stroke="#2563eb" stroke-width="3"/><text x="190" y="62" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">S</text><text x="140" y="125" fill="#1e3a8a" font-size="10.5" font-weight="bold" text-anchor="middle">Near Face becomes SOUTH Pole</text><text x="140" y="145" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Attractive Force Opposes Withdrawal</text><text x="140" y="165" fill="#047857" font-size="9.5" text-anchor="middle">Work done against attraction = Joule Heat</text></g></svg>',
        caption: 'Figure 6.3: Lenz’s Law in action — coil faces develop opposing poles (N to oppose approach, S to oppose recession), satisfying energy conservation.',
        guide: 'Approaching pole ⇒ Same polarity developed on coil face. Receding pole ⇒ Opposite polarity developed on coil face.'
      },
      importantPoints: [
        'Lenz’s law is a direct consequence of the Law of Conservation of Energy.',
        'Negative sign in ε = -dΦ/dt mathematically represents Lenz’s law.',
        'Mechanical work done moving the magnet against magnetic force = Electrical energy dissipated as heat in the coil.',
        'Induced current direction: Counter-Clockwise (CCW) viewed from front produces an outward N-pole; Clockwise (CW) produces an inward S-pole.'
      ]
    },
    {
      heading: '4. Motional EMF: Microscopic Origin, Moving Rod on Rails & Power Equality',
      paragraphs: [
        'What is Motional EMF?',
        'When a straight conductor of length l moves with velocity v across a uniform magnetic field B, an electromotive force is induced across its ends purely due to motion. This is called Motional EMF.',
        'Microscopic Derivation from Lorentz Force:',
        '1. Consider a straight metallic conductor of length l moving with velocity v perpendicular to a uniform magnetic field B pointing into the page (⊗).',
        '2. Inside the conductor, every conduction electron of charge -e moves with velocity v, experiencing a magnetic Lorentz force:',
        'F_m = q (v × B) = -e (v × B).',
        '3. By Fleming’s Left-Hand Rule / Right-Hand Vector Cross Product, positive charges are pushed upward (to end P) and negative electrons are pushed downward (to end Q).',
        '4. This charge accumulation creates an internal electrostatic field E directed from P to Q, exerting an upward electrostatic force on electrons: F_e = q E.',
        '5. Charge transfer continues until equilibrium is reached where the electrostatic force exactly balances the magnetic force:',
        'q E = q v B \\quad \\Rightarrow \\quad E = v B.',
        '6. The potential difference (induced motional emf) developed across the conductor of length l is:',
        '\\varepsilon = E \\cdot l = B l v.',
        'General Vector Formula: \\varepsilon = \\int (v \\times B) \\cdot dl = B l v \\sin\\theta.',
        'Moving Rod on Conducting Rails (The Complete System):',
        'When the rod slides on two parallel conducting rails connected across a resistor R:',
        '• Induced EMF: \\varepsilon = B l v.',
        '• Induced Current: I = \\frac{\\varepsilon}{R} = \\frac{B l v}{R}.',
        '• Opposing Magnetic Braking Force: By Fleming’s Left Hand Rule, the current-carrying rod in field B experiences a magnetic force: F_{\\text{mag}} = I l B = \\left(\\frac{B l v}{R}\\right) l B = \\frac{B^2 l^2 v}{R}.',
        '• External Force Required: To keep the rod moving at constant velocity v, an external agent must apply an equal and opposite forward force: F_{\\text{ext}} = \\frac{B^2 l^2 v}{R}.',
        '• Power Balance (Conservation of Energy Proof):',
        'Mechanical Power supplied by external agent:',
        'P_{\\text{mech}} = F_{\\text{ext}} \\cdot v = \\left(\\frac{B^2 l^2 v}{R}\\right) v = \\frac{B^2 l^2 v^2}{R}.',
        'Rate of Electrical Heat Dissipated across the Resistor:',
        'P_{\\text{elec}} = I^2 R = \\left(\\frac{B l v}{R}\\right)^2 R = \\frac{B^2 l^2 v^2}{R}.',
        'Hence: P_{\\text{mechanical}} = P_{\\text{electrical}} strictly, verifying energy conservation!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Motional EMF on Conducting Rails: Force &amp; Power Balance</text><g transform="translate(60, 48)"><rect x="0" y="0" width="360" height="190" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><line x1="40" y1="50" x2="320" y2="50" stroke="#475569" stroke-width="3"/><line x1="40" y1="150" x2="320" y2="150" stroke="#475569" stroke-width="3"/><rect x="35" y="70" width="10" height="60" fill="#ef4444" rx="2"/><text x="25" y="105" fill="#b91c1c" font-size="11" font-weight="bold">R</text><line x1="40" y1="50" x2="40" y2="70" stroke="#475569" stroke-width="2"/><line x1="40" y1="130" x2="40" y2="150" stroke="#475569" stroke-width="2"/><rect x="200" y="35" width="16" height="130" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5" rx="3"/><text x="208" y="28" fill="#1d4ed8" font-size="10.5" font-weight="bold" text-anchor="middle">P (+)</text><text x="208" y="180" fill="#1d4ed8" font-size="10.5" font-weight="bold" text-anchor="middle">Q (-)</text><line x1="220" y1="100" x2="280" y2="100" stroke="#059669" stroke-width="2.5" marker-end="url(#arr-green-f)"/><text x="250" y="90" fill="#047857" font-size="11" font-weight="bold">v →</text><line x1="195" y1="100" x2="145" y2="100" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red-f)"/><text x="170" y="90" fill="#dc2626" font-size="10.5" font-weight="bold">F_mag ←</text><line x1="120" y1="50" x2="90" y2="50" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue-f)"/><line x1="208" y1="130" x2="208" y2="70" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue-f)"/><text x="110" y="40" fill="#2563eb" font-size="10" font-weight="bold">I (CCW)</text><text x="270" y="140" fill="#64748b" font-size="14" font-weight="bold">⊗ B</text><text x="130" y="140" fill="#64748b" font-size="14" font-weight="bold">⊗ B</text></g><g transform="translate(440, 48)"><rect x="0" y="0" width="220" height="190" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="110" y="22" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">Core Governing Relations</text><text x="15" y="48" fill="#1e3a8a" font-size="11" font-weight="bold">• ε = B l v</text><text x="15" y="74" fill="#1e3a8a" font-size="11" font-weight="bold">• I = (B l v) / R</text><text x="15" y="100" fill="#b91c1c" font-size="11" font-weight="bold">• F_ext = (B² l² v) / R</text><text x="15" y="126" fill="#047857" font-size="11" font-weight="bold">• P_mech = F · v = B²l²v²/R</text><text x="15" y="152" fill="#047857" font-size="11" font-weight="bold">• P_elec = I² R = B²l²v²/R</text><text x="110" y="176" fill="#1e40af" font-size="10.5" font-weight="bold" text-anchor="middle">P_mech = P_elec (Conserved)</text></g><defs><marker id="arr-green-f" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker></defs></svg>',
        caption: 'Figure 6.4: Sliding conducting rod on parallel rails in perpendicular B field, illustrating motional emf, magnetic braking force, and power balance.',
        guide: 'Motional EMF ε = Blv. Magnetic force opposes motion F = B²l²v/R. Mechanical power supplied equals Joule heating power.'
      },
      importantPoints: [
        'Motional EMF: ε = B l v (when B, l, v are mutually perpendicular).',
        'Rotational Motional EMF (Rod rotating about one end): ε = (1/2) B ω l² = B f π l².',
        'Current in moving rod on rails: I = B l v / R.',
        'Magnetic Braking Force: F = B² l² v / R.',
        'Power dissipated: P = B² l² v² / R (Strictly equal to mechanical power input F·v).'
      ]
    },
    {
      heading: '5. Eddy Currents: Physical Origin, Heating Losses, Lamination & Applications',
      paragraphs: [
        'What are Eddy Currents (Foucault Currents)?',
        'When a solid, bulk piece of metal or conductor (rather than a thin wire loop) is subjected to a changing magnetic flux, circulating closed loops of induced currents are set up throughout the bulk material. These swirling current paths resemble eddies or whirlpools in water, giving them the name Eddy Currents.',
        'Heating Losses and the Need for Lamination:',
        '• Since solid metal blocks have very low electrical resistance (R = ρ l / A), the magnitude of induced eddy currents (I = ε / R) is extremely large.',
        '• By Joule’s Law (H = I² R t), this produces enormous unwanted heat energy, causing severe power losses in electrical machines.',
        '• How to reduce Eddy Currents: Transformer cores, dynamo armatures, and motor cores are NOT made of a single solid block. Instead, they are constructed from multiple thin sheets called LAMINATIONS, coated with an insulating layer of varnish and stacked together parallel to the magnetic field lines. This breaks the large continuous circulating loops into tiny loops with high resistance, drastically minimizing eddy current heating losses.',
        'High-Yield NEET Applications of Eddy Currents:',
        '1. Electromagnetic Braking (High-speed Electric Trains): Powerful electromagnets above the rails generate eddy currents in the metal wheels and rails when switched on. By Lenz’s law, the magnetic field of the eddy currents opposes the wheel rotation, providing smooth, wear-free, contactless braking.',
        '2. Induction Furnace: Rapidly alternating high-frequency magnetic fields induce massive eddy currents in a metal placed in a coil, producing temperatures exceeding 2000°C to melt scrap metal and prepare alloys.',
        '3. Electromagnetic Damping (Dead-Beat Galvanometer): The coil is wound on a non-magnetic metallic frame (copper/aluminum). As the coil swings in the magnetic field, eddy currents in the frame quickly damp out oscillations, bringing the pointer to rest instantly at the final reading.',
        '4. Induction Motors: Rotating magnetic fields induce eddy currents in a conducting rotor cylinder, causing it to rotate according to Lenz’s law.',
        '5. Electric Power Meters & Speedometers: Rotating aluminum discs driven by eddy currents drive the pointer mechanism.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="230" fill="#f8fafc" rx="12"/><text x="360" y="22" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Eddy Currents in Solid Metal vs Laminated Core Reduction</text><g transform="translate(60, 45)"><rect x="0" y="0" width="280" height="165" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">1. Solid Bulk Conductor (Massive Heat Loss)</text><rect x="50" y="38" width="180" height="85" fill="#fee2e2" stroke="#dc2626" stroke-width="2" rx="4"/><ellipse cx="140" cy="80" rx="65" ry="25" fill="none" stroke="#b91c1c" stroke-width="2.5" stroke-dasharray="4 2"/><ellipse cx="140" cy="80" rx="35" ry="14" fill="none" stroke="#b91c1c" stroke-width="2"/><text x="140" y="84" fill="#7f1d1d" font-size="10" font-weight="bold" text-anchor="middle">Large Eddy Loops</text><text x="140" y="145" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">Low R ⇒ High I_eddy ⇒ Huge I²R Heat</text></g><g transform="translate(380, 45)"><rect x="0" y="0" width="280" height="165" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="140" y="20" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">2. Laminated Sheets (Varnish Insulation)</text><rect x="50" y="38" width="30" height="85" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/><rect x="85" y="38" width="30" height="85" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/><rect x="120" y="38" width="30" height="85" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/><rect x="155" y="38" width="30" height="85" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/><rect x="190" y="38" width="30" height="85" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/><ellipse cx="65" cy="80" rx="10" ry="25" fill="none" stroke="#047857" stroke-width="1.5"/><ellipse cx="100" cy="80" rx="10" ry="25" fill="none" stroke="#047857" stroke-width="1.5"/><ellipse cx="135" cy="80" rx="10" ry="25" fill="none" stroke="#047857" stroke-width="1.5"/><text x="140" y="145" fill="#047857" font-size="10.5" font-weight="bold" text-anchor="middle">High R ⇒ Tiny Loops ⇒ Negligible Loss</text></g></svg>',
        caption: 'Figure 6.5: Solid metallic conductor generating large eddy loops vs laminated varnished core breaking loops to reduce Joule heat loss.',
        guide: 'Lamination must be parallel to the magnetic field. Key applications: Electromagnetic brakes, Induction furnaces, Dead-beat galvanometers.'
      },
      importantPoints: [
        'Eddy currents are induced in bulk metallic masses subjected to changing magnetic flux.',
        'Laminated cores reduce eddy current losses by increasing effective circuit resistance.',
        'Major NEET applications: Electromagnetic braking, Induction furnace, Dead-beat galvanometer damping, Induction motors.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Magnetic Flux & Faraday’s Laws',
      formula: '\\Phi = B A \\cos\\theta, \\quad \\varepsilon = -N \\frac{d\\Phi}{dt}, \\quad \\varepsilon_{\\text{avg}} = -N \\frac{\\Delta\\Phi}{\\Delta t}',
      variables: 'Φ = magnetic flux (Wb), B = magnetic field (T), A = area (m²), θ = angle with normal, N = number of turns, ε = induced emf (V)',
      whenToUse: 'Calculate magnetic flux or magnitude/direction of induced emf due to time-varying flux.'
    },
    {
      title: 'Induced Current & Induced Charge',
      formula: 'I = \\frac{|\\varepsilon|}{R} = \\frac{N}{R} \\left|\\frac{d\\Phi}{dt}\\right|, \\quad \\Delta Q = \\frac{|\\Delta\\Phi_{\\text{total}}|}{R}',
      variables: 'I = induced current (A), R = circuit resistance (Ω), ΔQ = total induced charge (C), ΔΦ = net flux change (Wb)',
      whenToUse: 'Find instantaneous induced current or total charge flowing through a circuit during a magnetic flux transition.'
    },
    {
      title: 'Linear & Rotational Motional EMF',
      formula: '\\varepsilon_{\\text{linear}} = B l v \\sin\\theta, \\quad \\varepsilon_{\\text{rotational}} = \\frac{1}{2} B \\omega l^2 = B f \\pi l^2',
      variables: 'B = magnetic field (T), l = length of rod (m), v = velocity (m/s), ω = angular velocity (rad/s), f = frequency of rotation (rev/s)',
      whenToUse: 'Calculate emf induced in a translating conducting rod or a rotating spoke/rod about one fixed pivot in magnetic field.'
    },
    {
      title: 'Sliding Rod on Rails (Force & Power)',
      formula: 'F_{\\text{mag}} = \\frac{B^2 l^2 v}{R}, \\quad P_{\\text{mech}} = F \\cdot v = \\frac{B^2 l^2 v^2}{R} = P_{\\text{elec}} = I^2 R',
      variables: 'F = external force required (N), P = mechanical/electrical power (W), R = resistance (Ω)',
      whenToUse: 'Compute braking force, external driving force, and electrical heat dissipation in sliding rail problems.'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="270" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Electromagnetic Induction: Master High-Yield Summary Architecture</text><rect x="30" y="45" width="200" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="130" y="68" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">1. Flux &amp; Faraday Laws</text><text x="45" y="95" fill="#334155" font-size="10">• Φ = B A cosθ  [Wb]</text><text x="45" y="118" fill="#334155" font-size="10">• ε = -N (dΦ/dt)  [V]</text><text x="45" y="141" fill="#334155" font-size="10">• I = |ε| / R  [A]</text><text x="45" y="164" fill="#b91c1c" font-size="10.5" font-weight="bold">• ΔQ = |ΔΦ| / R  [C]</text><text x="45" y="187" fill="#047857" font-size="9.5">Charge is independent of Δt!</text><text x="45" y="208" fill="#475569" font-size="9.5">Non-conservative E field</text><rect x="260" y="45" width="200" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="360" y="68" fill="#dc2626" font-size="11.5" font-weight="bold" text-anchor="middle">2. Lenz’s Law &amp; Motional EMF</text><text x="275" y="95" fill="#334155" font-size="10">• Opposes CHANGE in flux</text><text x="275" y="118" fill="#334155" font-size="10">• Energy conservation basis</text><text x="275" y="141" fill="#1e40af" font-size="10.5" font-weight="bold">• ε_trans = B l v</text><text x="275" y="164" fill="#1e40af" font-size="10.5" font-weight="bold">• ε_rot = (1/2) B ω l²</text><text x="275" y="187" fill="#b91c1c" font-size="10">• F_brake = B²l²v / R</text><text x="275" y="208" fill="#047857" font-size="10">• P = B²l²v² / R</text><rect x="490" y="45" width="200" height="200" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="590" y="68" fill="#059669" font-size="11.5" font-weight="bold" text-anchor="middle">3. Eddy Currents &amp; Tech</text><text x="505" y="95" fill="#334155" font-size="10">• Bulk conductor loops</text><text x="505" y="118" fill="#334155" font-size="10">• High Joule heating loss</text><text x="505" y="141" fill="#b91c1c" font-size="10">• Lamination reduces loss</text><text x="505" y="164" fill="#047857" font-size="10">• Electromagnetic brakes</text><text x="505" y="187" fill="#047857" font-size="10">• Induction furnace (&gt;2000°C)</text><text x="505" y="208" fill="#047857" font-size="10">• Dead-beat galvanometer</text></svg>',
    caption: 'Master comprehensive high-yield map for Magnetic Flux, Faraday’s Laws, Lenz’s Law, Motional EMF, and Eddy Currents.'
  },

  neetImportantPoints: [
    'Magnetic Flux: Φ = B A cosθ; θ is with normal to the plane. In the plane of the coil ⇒ θ = 90° ⇒ Φ = 0.',
    'Induced Charge: ΔQ = |ΔΦ| / R is completely independent of the time interval Δt taken for the flux change.',
    'Lenz’s law is a direct consequence of the Law of Conservation of Energy.',
    'Motional EMF: ε = B l v for straight translating rod; ε = (1/2) B ω l² for rotating rod about one end.',
    'Sliding rod on rails: Mechanical power supplied F·v strictly equals electrical heat dissipation I²R = B²l²v²/R.',
    'Eddy current reduction: Stacking laminated sheets separated by insulating varnish parallel to magnetic field.',
    'Applications of Eddy Currents: Electromagnetic braking, Induction furnace, Dead-beat galvanometers.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Measuring angle θ from the surface plane instead of the surface normal.',
      correctFact:
        'In Φ = B A cosθ, θ is the angle between B and the NORMAL (Area vector) to the surface. If B makes angle 30° with the surface, θ = 90° - 30° = 60°.',
      whyItMattersForNEET: 'One of the top 3 calculation traps in NEET flux problems.'
    },
    {
      commonConfusion: 'Thinking induced charge depends on how fast the magnet moves.',
      correctFact:
        'Induced charge ΔQ = |ΔΦ| / R depends ONLY on total flux change and resistance, NOT on the speed of the magnet or time taken.',
      whyItMattersForNEET: 'Frequently asked conceptual question in NEET.'
    },
    {
      commonConfusion: 'Assuming Lenz’s law opposes the magnetic field itself.',
      correctFact:
        'Lenz’s law opposes the CHANGE in flux. If external flux is decreasing, induced B points in the SAME direction as external B.',
      whyItMattersForNEET: 'Crucial for determining induced current direction in complex loop questions.'
    },
    {
      commonConfusion: 'Forgetting the factor of 1/2 in rotational motional emf.',
      correctFact:
        'For a rod rotating about one end: ε = (1/2) B ω l² (since average velocity of points on the rod is v_avg = ωl/2).',
      whyItMattersForNEET: 'Direct numerical formula tested repeatedly.'
    }
  ],

  quickRevision: [
    'Φ = B A cosθ (Wb). θ = angle with normal. Normal ⊥ B ⇒ Φ = 0.',
    'Faraday’s Law: ε = -N (dΦ/dt). Induced current I = ε/R. Induced charge ΔQ = |ΔΦ|/R.',
    'Lenz’s Law: Induced polarity opposes the change in flux (Conservation of Energy).',
    'Motional EMF: ε = B l v; Rotating rod: ε = (1/2) B ω l².',
    'Rails: I = Blv/R, F_ext = B²l²v/R, P_mech = P_elec = B²l²v²/R.',
    'Eddy Currents: Circulating loops in bulk metal. Reduced by laminated varnished sheets.'
  ],

  practiceQuestions: [
    {
      id: 'fl-p1',
      question:
        'A circular coil of 500 turns and radius 10 cm is placed perpendicular to a uniform magnetic field of 0.2 T. If the magnetic field is reduced to zero in 0.1 s, the average induced emf in the coil is:',
      options: ['31.4 V', '15.7 V', '3.14 V', '62.8 V'],
      correctAnswer: 0,
      explanation:
        'Area of coil A = π r² = π (0.1 m)² = 0.01π m². Initial flux per turn Φ₁ = B A = 0.2 × 0.01π = 0.002π Wb. Final flux Φ₂ = 0. Change in flux ΔΦ = 0 - 0.002π = -0.002π Wb. Average induced emf ε = -N (ΔΦ / Δt) = -500 × (-0.002π / 0.1) = 500 × 0.02π = 10π ≈ 31.4 V.'
    },
    {
      id: 'fl-p2',
      question:
        'A conducting rod of length 1 m is rotated with an angular frequency of 100 rad/s about an axis passing through one of its ends, normal to the rod, in a uniform magnetic field of 0.5 T parallel to the axis of rotation. The emf developed between the center of the rod and the outer end is:',
      options: ['18.75 V', '25.0 V', '12.5 V', '6.25 V'],
      correctAnswer: 0,
      explanation:
        'Rotational emf between radius r₁ and r₂: ε = (1/2) B ω (r₂² - r₁²). Here, center of rod has r₁ = 0.5 m, outer end has r₂ = 1.0 m. Thus, ε = (1/2) × 0.5 × 100 × (1.0² - 0.5²) = 25 × (1 - 0.25) = 25 × 0.75 = 18.75 V.'
    },
    {
      id: 'fl-p3',
      question:
        'A metallic square loop of side 10 cm and resistance 0.5 Ω is moved with a constant velocity v in a uniform magnetic field B = 0.1 T perpendicular to the plane of the loop. If the induced current in the loop is 2 mA, the velocity v is:',
      options: ['0.1 m/s', '1.0 m/s', '0.01 m/s', '10 m/s'],
      correctAnswer: 0,
      explanation:
        'Induced emf ε = B l v. Induced current I = ε / R = (B l v) / R. Given I = 2 × 10⁻³ A, B = 0.1 T, l = 0.1 m, R = 0.5 Ω: 2 × 10⁻³ = (0.1 × 0.1 × v) / 0.5 ⇒ 2 × 10⁻³ = 0.02 v ⇒ v = (2 × 10⁻³) / 0.02 = 0.1 m/s.'
    },
    {
      id: 'fl-p4',
      question:
        'The magnetic flux linked with a coil varies with time t (in seconds) as Φ = 5t³ - 100t + 300 (Wb). The induced emf at t = 2 s is:',
      options: ['40 V', '-40 V', '60 V', '-60 V'],
      correctAnswer: 0,
      explanation:
        'By Faraday’s law: ε = -dΦ/dt = -d/dt (5t³ - 100t + 300) = -(15t² - 100). At t = 2 s: ε = -(15(2)² - 100) = -(60 - 100) = -(-40) = +40 V.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2023,
      question:
        'An aeroplane with a wing span of 20 m flies horizontally from east to west with a speed of 1800 km/h in a region where the vertical component of the earth’s magnetic field is 5 × 10⁻⁴ T. The potential difference developed across the ends of the wing is:',
      options: ['5 V', '2 V', '0.5 V', '50 V'],
      correctAnswer: 0,
      explanation:
        'Speed v = 1800 km/h = 1800 × (5/18) = 500 m/s. Wings cut the vertical component of Earth’s magnetic field B_V = 5 × 10⁻⁴ T. Induced motional emf across wings ε = B_V · l · v = (5 × 10⁻⁴ T) × (20 m) × (500 m/s) = 5.0 V.',
      conceptTested: 'Motional EMF cutting Earth’s Vertical Field B_V'
    },
    {
      exam: 'NEET UG',
      year: 2022,
      question:
        'A wheel with 20 metallic spokes each 1 m long is rotated with a speed of 120 rev/min in a plane normal to the horizontal component of earth’s magnetic field B_H at a place. If B_H = 0.4 G at the place, then the induced emf between the axle and the rim of the wheel is (1 G = 10⁻⁴ T):',
      options: [
        '2.51 × 10⁻⁴ V',
        '5.02 × 10⁻⁴ V',
        '2.51 × 10⁻⁵ V',
        '0 V'
      ],
      correctAnswer: 0,
      explanation:
        'All 20 spokes are connected in parallel between the axle and the rim, so the net emf is equal to the emf induced in a single spoke. Frequency f = 120 rev/min = 120/60 = 2 rev/s. Angular velocity ω = 2π f = 4π rad/s. Field B = 0.4 × 10⁻⁴ T. Length l = 1 m. Induced emf ε = (1/2) B ω l² = (1/2) × (0.4 × 10⁻⁴) × (4π) × (1)² = 0.8π × 10⁻⁴ ≈ 2.51 × 10⁻⁴ V.',
      conceptTested: 'Rotational Motional EMF of Spokes in Parallel'
    },
    {
      exam: 'NEET UG',
      year: 2021,
      question:
        'A rectangular loop of sides 10 cm and 5 cm with a cut is moving out of a region of uniform magnetic field of 0.4 T directed normal to the loop with a velocity of 1 cm/s. The emf developed across the cut if the velocity is normal to the (i) longer side, (ii) shorter side will be:',
      options: [
        '4 × 10⁻⁴ V, 2 × 10⁻⁴ V',
        '2 × 10⁻⁴ V, 4 × 10⁻⁴ V',
        '4 × 10⁻² V, 2 × 10⁻² V',
        '0.4 V, 0.2 V'
      ],
      correctAnswer: 0,
      explanation:
        'Motional emf ε = B l v. (i) When velocity is normal to the longer side (l = 10 cm = 0.1 m): ε₁ = B l₁ v = (0.4) × (0.1) × (10⁻²) = 4 × 10⁻⁴ V. (ii) When velocity is normal to the shorter side (l = 5 cm = 0.05 m): ε₂ = B l₂ v = (0.4) × (0.05) × (10⁻²) = 2 × 10⁻⁴ V.',
      conceptTested: 'Motional EMF Dependence on Active Cutting Length'
    },
    {
      exam: 'NEET UG',
      year: 2019,
      question:
        'A 800 turn coil of effective area 0.05 m² is kept perpendicular to a magnetic field 5 × 10⁻⁵ T. When the plane of the coil is rotated by 90° around any of its coplanar axis in 0.1 s, the emf induced in the coil will be:',
      options: ['0.02 V', '2 V', '0.2 V', '2 × 10⁻³ V'],
      correctAnswer: 0,
      explanation:
        'Initial angle with normal θ₁ = 0° ⇒ Φ₁ = N B A cos(0°) = 800 × (5 × 10⁻⁵) × 0.05 = 2 × 10⁻³ Wb. When rotated by 90°, plane becomes parallel to B ⇒ θ₂ = 90° ⇒ Φ₂ = 0. Change in flux |ΔΦ| = 2 × 10⁻³ Wb. Induced emf ε = |ΔΦ| / Δt = (2 × 10⁻³ Wb) / (0.1 s) = 0.02 V.',
      conceptTested: 'Induced EMF by Coil Rotation (Faraday’s Law)'
    }
  ]
};
