import { DetailedTopicContent } from '../../types/neet';

export const physEarthsMagnetismDetails: DetailedTopicContent = {
  topicId: 'phys-earths-magnetism',
  topicName: 'Earth’s Magnetism & Magnetic Elements (Declination, Dip/Inclination, Horizontal Component)',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Magnetism and Matter',

  whatIsThisTopic:
    'Comprehensive first-principles masterclass on Earth’s Magnetism, Dynamo effect, Geographic vs Magnetic poles and meridians, the Three Magnetic Elements of Earth (Magnetic Declination D, Angle of Dip / Inclination δ, Horizontal Component B_H), Apparent Dip formulas in non-meridian planes, Compass needle behaviour, Solved Numericals, Verified Real PYQs, and 25+ NEET Traps.',

  basicIdea: [
    'Origin of Earth’s Magnetic Field (Dynamo Effect): Earth’s magnetism arises from convective electric currents circulating in the molten outer metallic core (composed primarily of molten iron and nickel) driven by the planet’s rotation.',
    'Earth as a Giant Magnetic Dipole:',
    '• Earth behaves as if an enormous fictitious magnetic dipole of moment M_E ≈ 8.0 × 10²² J/T (or A·m²) is situated at its center.',
    '• Polarity Inversion Rule: The magnetic pole residing near the Geographic North Pole is physically a MAGNETIC SOUTH POLE (which attracts the north-seeking pole of our compasses). The magnetic pole near Geographic South is physically a MAGNETIC NORTH POLE.',
    '• Tilt of Magnetic Axis: The magnetic dipole axis is tilted by approximately 11.3° with respect to the Earth’s rotational geographic axis.',
    'Meridians:',
    '• Geographic Meridian: The vertical plane passing through the geographic north and south poles and the observer’s position.',
    '• Magnetic Meridian: The vertical plane passing through the magnetic north and south poles and the line connecting the poles of a freely suspended magnetic compass needle.',
    'The Three Magnetic Elements of Earth (Completely Specify B_E at any point):',
    '1. Magnetic Declination (D or θ): The acute angle between the Geographic Meridian and Magnetic Meridian at a given location.',
    '2. Magnetic Inclination / Angle of Dip (δ or I): The angle made by Earth’s total magnetic field vector B_E with the horizontal plane inside the magnetic meridian.',
    '• At Magnetic Equator: Total field is purely horizontal ⇒ Dip angle δ = 0°, B_H = B_E, B_V = 0.',
    '• At Magnetic Poles: Total field is purely vertical ⇒ Dip angle δ = 90°, B_H = 0, B_V = B_E.',
    '3. Horizontal Component of Earth’s Field (B_H): The projection of Earth’s total field along the horizontal direction in the magnetic meridian.',
    '• B_H = B_E · cosδ',
    '• Vertical Component: B_V = B_E · sinδ',
    '• Key Formulas: tanδ = B_V / B_H, \\quad B_E = √(B_H² + B_V²)',
    'Apparent Dip (δ\') in a Vertical Plane inclined at angle θ to Magnetic Meridian:',
    '• tanδ\' = tanδ / cosθ \\quad \\text{or} \\quad cot²δ\' = cot²δ · cos²θ',
    '• Two Mutually Perpendicular Vertical Planes (θ and 90° - θ):',
    'cot²δ = cot²δ₁ + cot²δ₂  (Extremely High-Yield NEET Formula!)',
    'Vibration of Compass Needle in Horizontal Plane:',
    'A horizontal compass oscillates under the restoring torque of B_H only: T = 2π √(I_moment / (M B_H)).'
  ],

  importantTerms: [
    {
      term: 'Geographic Meridian',
      definition:
        'The vertical plane passing through the geographic North Pole, geographic South Pole, and the observer’s location on Earth’s surface.',
      neetNote: 'Fixed by the astronomical rotation axis of Earth.'
    },
    {
      term: 'Magnetic Meridian',
      definition:
        'The vertical plane passing through the magnetic axis of a freely suspended, balanced magnetic needle in equilibrium.',
      neetNote: 'The total magnetic field vector B_E lies entirely within the magnetic meridian.'
    },
    {
      term: 'Magnetic Declination (D)',
      symbol: 'D or θ',
      definition:
        'The acute horizontal angle between the Geographic Meridian and the Magnetic Meridian at a particular place on Earth.',
      neetNote: 'Used by navigators to find true geographic north from compass readings (True North = Compass Reading ± Declination).'
    },
    {
      term: 'Angle of Dip / Magnetic Inclination (δ)',
      symbol: 'δ or I',
      definition:
        'The angle made by Earth’s total magnetic field vector B_E with the horizontal direction in the magnetic meridian.',
      neetNote: 'δ = 0° at the magnetic equator, δ = 90° at the magnetic poles.'
    },
    {
      term: 'Horizontal Component of Earth’s Field',
      symbol: 'B_H = B_E cosδ',
      definition:
        'The component of Earth’s total magnetic field along the horizontal direction in the magnetic meridian. Typical magnitude: ~10⁻⁴ T to 10⁻⁵ T (~0.3 to 0.4 Gauss).',
      neetNote: 'Controls the oscillation period of a horizontal vibration magnetometer: T = 2π √(I / (M B_H)).'
    },
    {
      term: 'Apparent Dip',
      symbol: 'δ\'',
      definition:
        'The angle made by a dip circle needle with the horizontal when the plane of the dip circle is NOT in the magnetic meridian (inclined at angle θ to it).',
      neetNote: 'tanδ\' = tanδ / cosθ. Since cosθ ≤ 1, apparent dip δ\' is ALWAYS GREATER than or equal to true dip δ.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Origin of Earth’s Magnetism: The Geodynamo Effect & Global Polarity',
      paragraphs: [
        'Why does Earth have a magnetic field?',
        'Early physicists hypothesized a permanent bar magnet buried inside Earth’s core. However, this is physically impossible because the core temperature exceeds 3000°C–5000°C, which is vastly higher than the Curie temperature of iron (~770°C). At such temperatures, ferromagnetism is completely destroyed.',
        'The Modern Geodynamo Theory:',
        'Earth’s magnetic field is dynamically generated and maintained by circulating convective electric currents in the liquid outer core (composed of molten iron and nickel), driven by thermal buoyancy and the Coriolis force from planetary rotation.',
        'Polarity of Earth’s Dipole:',
        '• A freely suspended magnetic needle has its North pole pointing roughly toward the Arctic (Geographic North).',
        '• Because opposite magnetic poles attract, the magnetic pole residing near Geographic North must physically be a MAGNETIC SOUTH POLE (referred to as Magnetic North in geography).',
        '• The magnetic pole near Geographic South is physically a MAGNETIC NORTH POLE.',
        '• Magnetic Dipole Axis Tilt: The axis connecting Earth’s magnetic poles does NOT coincide with the geographic rotation axis; it is tilted by approximately 11.3°.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="270" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Earth’s Magnetic Field &amp; Fictitious Central Dipole</text><g transform="translate(360, 145)"><circle cx="0" cy="0" r="85" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><line x1="0" y1="-115" x2="0" y2="115" stroke="#64748b" stroke-width="2" stroke-dasharray="4 2"/><text x="5" y="-120" fill="#334155" font-size="10" font-weight="bold">Geographic North (N_g)</text><text x="5" y="130" fill="#334155" font-size="10" font-weight="bold">Geographic South (S_g)</text><g transform="rotate(-11.3)"><line x1="0" y1="-115" x2="0" y2="115" stroke="#ef4444" stroke-width="2.5"/><rect x="-18" y="-70" width="36" height="70" fill="#3b82f6" rx="3"/><text x="0" y="-30" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">S_m</text><rect x="-18" y="0" width="36" height="70" fill="#ef4444" rx="3"/><text x="0" y="45" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">N_m</text><text x="10" y="-95" fill="#1e40af" font-size="10" font-weight="bold">Magnetic South (near N_g)</text><text x="10" y="105" fill="#b91c1c" font-size="10" font-weight="bold">Magnetic North (near S_g)</text></g><path d="M 0 85 C 160 130, 160 -130, 0 -85" fill="none" stroke="#2563eb" stroke-width="1.8"/><path d="M 0 85 C -160 130, -160 -130, 0 -85" fill="none" stroke="#2563eb" stroke-width="1.8"/><path d="M 160 0 L 160 -5" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><path d="M -160 0 L -160 -5" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/></g><text x="360" y="250" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Tilt of Magnetic Axis = 11.3° | Field lines exit Southern Hemisphere &amp; enter Northern Hemisphere</text></svg>',
        caption: 'Figure 5.7: Earth’s magnetic field lines behaving as a central dipole tilted at 11.3° with magnetic S pole near geographic North.',
        guide: 'Magnetic field lines emerge from the southern hemisphere (magnetic North) and enter the northern hemisphere (magnetic South).'
      },
      importantPoints: [
        'Geodynamo effect: Originates from circulating convective currents in molten iron outer core.',
        'Core temperature > Curie point ⇒ Permanent core magnet cannot exist.',
        'Magnetic South pole lies near Geographic North; Magnetic North pole lies near Geographic South.',
        'Tilt between geographic and magnetic axes is ~11.3°.'
      ]
    },
    {
      heading: '2. The Three Magnetic Elements of Earth: Declination, Dip & Horizontal Component',
      paragraphs: [
        'To completely describe the direction and magnitude of Earth’s magnetic field B_E at any point on the globe, three independent quantities—called the Magnetic Elements of Earth—are required:',
        '1. Magnetic Declination (D or θ):',
        'The acute horizontal angle between the Geographic Meridian (true north) and the Magnetic Meridian (compass north).',
        '• Declination varies from place to place across Earth’s surface.',
        '• Declination in India is small (~0°41\' W in Delhi, ~0°58\' W in Mumbai), meaning compass needles point very close to true North.',
        '2. Magnetic Inclination / Angle of Dip (δ or I):',
        'The angle that Earth’s total magnetic field vector B_E makes with the horizontal plane in the magnetic meridian.',
        '• At the Magnetic Equator: B_E is purely horizontal ⇒ Dip angle δ = 0°.',
        '• At the Magnetic Poles: B_E is purely vertical (points straight into Earth at North magnetic pole, straight out at South magnetic pole) ⇒ Dip angle δ = 90°.',
        '3. Horizontal Component (B_H) and Vertical Component (B_V):',
        'Resolving total field B_E inside the magnetic meridian:',
        '• B_H = B_E cosδ  (Horizontal component)',
        '• B_V = B_E sinδ  (Vertical component)',
        '• Mathematical Relations:',
        'tanδ = B_V / B_H \\quad \\text{and} \\quad B_E = √(B_H² + B_V²)',
        'Special Cases at Equator vs Poles for NEET:',
        '• Magnetic Equator (δ = 0°): B_H = B_E cos 0° = B_E (Maximum), B_V = B_E sin 0° = 0.',
        '• Magnetic Poles (δ = 90°): B_H = B_E cos 90° = 0 (Minimum), B_V = B_E sin 90° = B_E (Maximum).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Vector Resolution of Earth’s Magnetic Field in Magnetic Meridian</text><g transform="translate(100, 60)"><line x1="0" y1="120" x2="260" y2="120" stroke="#059669" stroke-width="2.5" marker-end="url(#arr-green)"/><text x="270" y="125" fill="#065f46" font-size="11" font-weight="bold">Horizontal Component (B_H = B_E cosδ)</text><line x1="0" y1="120" x2="0" y2="0" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)"/><text x="5" y="-8" fill="#991b1b" font-size="11" font-weight="bold">Vertical Component (B_V = B_E sinδ)</text><line x1="0" y1="120" x2="220" y2="35" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-blue)"/><text x="225" y="30" fill="#1e40af" font-size="12" font-weight="bold">Total Earth Field B_E</text><path d="M 60 120 A 60 60 0 0 0 52 100" fill="none" stroke="#d97706" stroke-width="2.5"/><text x="75" y="105" fill="#b45309" font-size="12" font-weight="bold">δ (Dip)</text></g><g transform="translate(420, 60)"><rect x="0" y="0" width="260" height="175" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="130" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Master Formulas for NEET</text><text x="15" y="48" fill="#1e40af" font-size="11" font-weight="bold">1. B_H = B_E · cosδ</text><text x="15" y="70" fill="#b91c1c" font-size="11" font-weight="bold">2. B_V = B_E · sinδ</text><text x="15" y="94" fill="#047857" font-size="11" font-weight="bold">3. tanδ = B_V / B_H</text><text x="15" y="118" fill="#7c3aed" font-size="11" font-weight="bold">4. B_E = √(B_H² + B_V²)</text><line x1="15" y1="128" x2="245" y2="128" stroke="#cbd5e1" stroke-width="1"/><text x="15" y="145" fill="#334155" font-size="10.5">• If B_V = B_H  ⇒  tanδ = 1  ⇒  δ = 45°</text><text x="15" y="162" fill="#334155" font-size="10.5">• If B_V = √3 B_H  ⇒  tanδ = √3  ⇒  δ = 60°</text></g><defs><marker id="arr-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#059669"/></marker></defs></svg>',
        caption: 'Figure 5.8: Vector triangle inside the magnetic meridian relating B_H, B_V, total field B_E, and dip angle δ.',
        guide: 'When B_V = B_H, dip is 45°; when B_V = √3 B_H, dip is 60°; when B_H = √3 B_V, dip is 30°.'
      },
      importantPoints: [
        '3 Magnetic Elements: Declination (D), Dip/Inclination (δ), Horizontal Component (B_H).',
        'B_H = B_E cosδ, B_V = B_E sinδ, tanδ = B_V / B_H, B_E = √(B_H² + B_V²).',
        'At Magnetic Equator: δ = 0°, B_H = B_E (Max), B_V = 0.',
        'At Magnetic Poles: δ = 90°, B_H = 0 (Min), B_V = B_E (Max).'
      ]
    },
    {
      heading: '3. Apparent Dip in Non-Meridian Planes: Derivation & Perpendicular Planes Formula',
      paragraphs: [
        'What is Apparent Dip (δ\')?',
        'When a dip circle (a magnetic needle pivoted to rotate in a vertical plane) is placed strictly in the MAGNETIC MERIDIAN, it measures the TRUE DIP δ.',
        'If the plane of the dip circle is rotated by an angle θ relative to the magnetic meridian:',
        '• The vertical component of Earth’s field remains UNCHANGED: B_V\' = B_V.',
        '• The effective horizontal component in the new plane becomes the projection of B_H along that plane: B_H\' = B_H cosθ.',
        '• Therefore, the Apparent Dip δ\' measured in this plane is given by:',
        'tanδ\' = B_V\' / B_H\' = B_V / (B_H cosθ) = (B_V / B_H) · (1 / cosθ) = tanδ / cosθ.',
        '• Formula: tanδ\' = tanδ / cosθ  or  cotδ\' = cotδ cosθ.',
        'Since cosθ ≤ 1 for any non-zero angle θ, tanδ\' ≥ tanδ, meaning Apparent Dip δ\' is ALWAYS GREATER than True Dip δ!',
        'Master Formula for Two Mutually Perpendicular Vertical Planes:',
        'Suppose apparent dips δ₁ and δ₂ are measured in two mutually perpendicular vertical planes inclined at angles θ and (90° - θ) to the magnetic meridian:',
        '• In Plane 1: cotδ₁ = cotδ cosθ ⇒ cot²δ₁ = cot²δ cos²θ.',
        '• In Plane 2: cotδ₂ = cotδ cos(90° - θ) = cotδ sinθ ⇒ cot²δ₂ = cot²δ sin²θ.',
        'Adding both equations:',
        'cot²δ₁ + cot²δ₂ = cot²δ (cos²θ + sin²θ) = cot²δ · 1 = cot²δ.',
        '• Master NEET Formula: cot²δ = cot²δ₁ + cot²δ₂  (or  1/tan²δ = 1/tan²δ₁ + 1/tan²δ₂).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Apparent Dip in Arbitrary &amp; Perpendicular Vertical Planes</text><g transform="translate(60, 48)"><rect x="0" y="0" width="280" height="150" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="24" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Plane at Angle θ to Meridian</text><text x="20" y="55" fill="#1e3a8a" font-size="11">• Vertical field: B_V\' = B_V</text><text x="20" y="80" fill="#1e3a8a" font-size="11">• Horizontal field: B_H\' = B_H cosθ</text><text x="20" y="110" fill="#b91c1c" font-size="12" font-weight="bold">tanδ\' = tanδ / cosθ</text><text x="20" y="135" fill="#047857" font-size="10.5" font-weight="bold">Apparent dip δ\' &gt; True dip δ always!</text></g><g transform="translate(380, 48)"><rect x="0" y="0" width="280" height="150" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5" rx="6"/><text x="140" y="24" fill="#6b21a8" font-size="12" font-weight="bold" text-anchor="middle">Two Perpendicular Planes (θ &amp; 90°-θ)</text><text x="20" y="55" fill="#4c1d95" font-size="11">Plane 1: cotδ₁ = cotδ cosθ</text><text x="20" y="80" fill="#4c1d95" font-size="11">Plane 2: cotδ₂ = cotδ sinθ</text><rect x="15" y="95" width="250" height="42" fill="#ffffff" stroke="#9333ea" stroke-width="1.5" rx="4"/><text x="140" y="122" fill="#7e22ce" font-size="13" font-weight="bold" text-anchor="middle">cot²δ = cot²δ₁ + cot²δ₂</text></g></svg>',
        caption: 'Figure 5.9: Apparent dip geometry: tanδ\' = tanδ/cosθ and the high-yield perpendicular planes relation cot²δ = cot²δ₁ + cot²δ₂.',
        guide: 'When given apparent dip in two mutually perpendicular planes, use cot²δ = cot²δ₁ + cot²δ₂ directly.'
      },
      importantPoints: [
        'Apparent dip formula: tanδ\' = tanδ / cosθ.',
        'Since cosθ ≤ 1, apparent dip δ\' is ALWAYS larger than true dip δ.',
        'Perpendicular planes formula: cot²δ = cot²δ₁ + cot²δ₂ (or 1/tan²δ = 1/tan²δ₁ + 1/tan²δ₂).',
        'At plane perpendicular to magnetic meridian (θ = 90°): B_H\' = 0 ⇒ tanδ\' = ∞ ⇒ δ\' = 90° (needle stands vertical).'
      ]
    },
    {
      heading: '4. Compass Needle Dynamics & Vibration Magnetometer',
      paragraphs: [
        'Behaviour of a Magnetic Compass in Earth’s Field:',
        '• In the Horizontal Plane: A standard compass needle rotates freely about a vertical pivot. The vertical component B_V exerts forces along the pivot axis that are neutralized by the physical support. Hence, the compass aligns SOLELY with the Horizontal Component B_H along the Magnetic Meridian.',
        '• At the Magnetic Poles (δ = 90°): B_H = 0. There is ZERO horizontal magnetic force! A horizontal compass needle can point in ANY arbitrary direction (it becomes directionally useless at the poles).',
        '• In a Vertical Plane (Dip Circle): In the magnetic meridian, a dip needle aligns with total field B_E, pointing horizontal at equator (δ=0°) and pointing straight vertical at poles (δ=90°).',
        'Vibration Magnetometer in Earth\'s Horizontal Field:',
        'When a magnetic needle of moment M and moment of inertia I is deflected slightly by angle θ from the magnetic meridian in the horizontal plane, restoring torque is τ = -M B_H sinθ ≈ -M B_H θ.',
        '• Time Period: T = 2π √(I_moment / (M B_H)).',
        '• Frequency: f = (1 / 2π) √(M B_H / I_moment).',
        'Comparing Earth\'s Field at Two Places (Same Magnet):',
        'T₁ / T₂ = √(B_{H2} / B_{H1})  ⇒  B_{H1} / B_{H2} = T₂² / T₁² = f₁² / f₂².',
        'Comparing Magnetic Moments of Two Magnets at Same Place:',
        'M₁ / M₂ = (I₁ / I₂) · (T₂² / T₁²).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Vibration Magnetometer &amp; Compass Mechanics</text><g transform="translate(60, 50)"><rect x="0" y="0" width="280" height="150" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Vibration Magnetometer</text><text x="140" y="55" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">T = 2π √(I / M B_H)</text><text x="20" y="85" fill="#334155" font-size="10.5">• T² ∝ 1 / B_H  (At same M, I)</text><text x="20" y="105" fill="#334155" font-size="10.5">• B_{H1} / B_{H2} = (T₂ / T₁)² = (n₁ / n₂)²</text><text x="20" y="125" fill="#334155" font-size="10.5">• n = oscillations per minute (f)</text></g><g transform="translate(380, 50)"><rect x="0" y="0" width="280" height="150" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">Compass Needle Behaviour</text><text x="15" y="50" fill="#047857" font-size="10.5" font-weight="bold">• At Magnetic Equator (δ = 0°):</text><text x="25" y="68" fill="#334155" font-size="10">B_H = B_E (Max), Compass needle points strongly to N_m</text><text x="15" y="92" fill="#b91c1c" font-size="10.5" font-weight="bold">• At Magnetic Poles (δ = 90°):</text><text x="25" y="110" fill="#334155" font-size="10">B_H = 0. Needle is free to rest in ANY direction!</text><text x="15" y="134" fill="#1e40af" font-size="10.5" font-weight="bold">• Dip needle stands strictly vertical at poles</text></g></svg>',
        caption: 'Figure 5.10: Vibration magnetometer time period relation T = 2π√(I/MB_H) and compass needle behaviour at equator vs poles.',
        guide: 'At the magnetic poles, B_H = 0, so a horizontal compass needle has no preferred direction and can rest in any orientation.'
      },
      importantPoints: [
        'Vibration magnetometer oscillation period: T = 2π √(I / (M B_H)).',
        'Field comparison: B_{H1} / B_{H2} = T₂² / T₁² = f₁² / f₂².',
        'At magnetic poles: B_H = 0 ⇒ horizontal compass needle is useless and points in any random direction.',
        'Dip circle needle stands vertical at magnetic poles and horizontal at magnetic equator.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Earth Magnetic Field Components & Dip',
      formula: 'B_H = B_E \\cos\\delta, \\quad B_V = B_E \\sin\\delta, \\quad \\tan\\delta = \\frac{B_V}{B_H}, \\quad B_E = \\sqrt{B_H^2 + B_V^2}',
      variables: 'B_E = total Earth field (T), B_H = horizontal component (T), B_V = vertical component (T), δ = angle of dip (degrees)',
      whenToUse: 'Calculate any component of Earth’s magnetic field given total field and angle of dip, or determine dip from components.'
    },
    {
      title: 'Apparent Dip in Plane at Angle θ to Magnetic Meridian',
      formula: '\\tan\\delta\' = \\frac{\\tan\\delta}{\\cos\\theta}, \\quad \\cot\\delta\' = \\cot\\delta \\cos\\theta',
      variables: 'δ\' = apparent dip angle, δ = true dip angle, θ = angle between measurement plane and magnetic meridian',
      whenToUse: 'Calculate apparent dip measured when dip circle is not aligned with magnetic meridian.'
    },
    {
      title: 'True Dip from Two Perpendicular Planes',
      formula: '\\cot^2\\delta = \\cot^2\\delta_1 + \\cot^2\\delta_2 \\quad \\left( \\text{or } \\frac{1}{\\tan^2\\delta} = \\frac{1}{\\tan^2\\delta_1} + \\frac{1}{\\tan^2\\delta_2} \\right)',
      variables: 'δ = true dip angle, δ₁, δ₂ = apparent dips in two mutually perpendicular vertical planes',
      whenToUse: 'Find true dip when dip circle measurements are taken in two perpendicular arbitrary planes.'
    },
    {
      title: 'Vibration Magnetometer in Earth\'s Horizontal Field',
      formula: 'T = 2\\pi \\sqrt{\\frac{I}{M B_H}}, \\quad \\frac{B_{H1}}{B_{H2}} = \\frac{T_2^2}{T_1^2} = \\frac{f_1^2}{f_2^2}',
      variables: 'T = time period (s), I = moment of inertia (kg·m²), M = magnetic moment (A·m²), B_H = horizontal field (T), f = frequency',
      whenToUse: 'Compare horizontal magnetic field at two places or determine magnetic moment of magnet.'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Summary Matrix: Magnetic Equator vs Magnetic Poles</text><rect x="30" y="42" width="660" height="160" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="65" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Property</text><text x="340" y="65" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">Magnetic Equator</text><text x="560" y="65" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">Magnetic Poles</text><line x1="30" y1="75" x2="690" y2="75" stroke="#cbd5e1" stroke-width="1.5"/><text x="50" y="96" fill="#334155" font-size="10.5">Angle of Dip (δ)</text><text x="340" y="96" fill="#065f46" font-size="10.5" font-weight="bold" text-anchor="middle">δ = 0°</text><text x="560" y="96" fill="#991b1b" font-size="10.5" font-weight="bold" text-anchor="middle">δ = 90°</text><text x="50" y="118" fill="#334155" font-size="10.5">Horizontal Component (B_H)</text><text x="340" y="118" fill="#065f46" font-size="10.5" font-weight="bold" text-anchor="middle">B_H = B_E (Maximum)</text><text x="560" y="118" fill="#991b1b" font-size="10.5" font-weight="bold" text-anchor="middle">B_H = 0 (Zero!)</text><text x="50" y="140" fill="#334155" font-size="10.5">Vertical Component (B_V)</text><text x="340" y="140" fill="#065f46" font-size="10.5" font-weight="bold" text-anchor="middle">B_V = 0 (Zero!)</text><text x="560" y="140" fill="#991b1b" font-size="10.5" font-weight="bold" text-anchor="middle">B_V = B_E (Maximum)</text><text x="50" y="162" fill="#334155" font-size="10.5">Compass Needle Alignment</text><text x="340" y="162" fill="#065f46" font-size="10.5" text-anchor="middle">Points strongly along N_m</text><text x="560" y="162" fill="#991b1b" font-size="10.5" text-anchor="middle">Free in any direction</text><text x="50" y="184" fill="#334155" font-size="10.5">Dip Needle Orientation</text><text x="340" y="184" fill="#065f46" font-size="10.5" text-anchor="middle">Horizontal</text><text x="560" y="184" fill="#991b1b" font-size="10.5" text-anchor="middle">Strictly Vertical</text></svg>',
    caption: 'Comparison matrix of Earth’s magnetic elements between Magnetic Equator and Magnetic Poles.'
  },

  neetImportantPoints: [
    'Geodynamo effect generates Earth\'s B field from molten core convective currents (not a permanent magnet!).',
    'Magnetic South pole lies near geographic north; magnetic North pole lies near geographic south.',
    'B_H = B_E cosδ, B_V = B_E sinδ, tanδ = B_V / B_H, B_E = √(B_H² + B_V²).',
    'At Magnetic Equator: δ = 0°, B_H = B_E, B_V = 0.',
    'At Magnetic Poles: δ = 90°, B_H = 0, B_V = B_E.',
    'Apparent Dip in plane at angle θ: tanδ\' = tanδ / cosθ (δ\' > δ always).',
    'Two perpendicular planes: cot²δ = cot²δ₁ + cot²δ₂.',
    'Vibration magnetometer: T = 2π √(I / (M B_H)) ⇒ B_{H1}/B_{H2} = T₂²/T₁².'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking Geographic North is a physical Magnetic North pole.',
      correctFact:
        'Geographic North attracts North poles of magnets, which means it is physically a MAGNETIC SOUTH POLE.',
      whyItMattersForNEET: 'Tested repeatedly in conceptual statements and assertion-reason questions.'
    },
    {
      commonConfusion: 'Confusing the values of B_H and B_V at the equator and poles.',
      correctFact:
        'At the equator: δ = 0°, so B_H is maximum (B_H = B_E) and B_V = 0. At the poles: δ = 90°, so B_H = 0 and B_V is maximum (B_V = B_E).',
      whyItMattersForNEET: 'Directly tested in formula-based MCQs in almost every 2-3 NEET cycles.'
    },
    {
      commonConfusion: 'Believing apparent dip is smaller than true dip.',
      correctFact:
        'Because cosθ ≤ 1, tanδ\' = tanδ / cosθ ≥ tanδ, so Apparent Dip δ\' is ALWAYS GREATER than or equal to True Dip δ.',
      whyItMattersForNEET: 'Common conceptual trap in NEET options.'
    },
    {
      commonConfusion: 'Applying B_E instead of B_H in horizontal vibration magnetometer formula.',
      correctFact:
        'A horizontal vibration magnetometer responds ONLY to the horizontal component B_H, so T = 2π √(I / (M B_H)).',
      whyItMattersForNEET: 'Using total field B_E instead of B_H yields incorrect numerical answers.'
    }
  ],

  quickRevision: [
    'Origin: Geodynamo convective currents in molten iron outer core.',
    'Axis Tilt: Magnetic axis is tilted by 11.3° to geographic axis.',
    'Magnetic Elements: Declination D, Dip δ, Horizontal Component B_H.',
    'Formulas: B_H = B_E cosδ, B_V = B_E sinδ, tanδ = B_V / B_H, B_E = √(B_H² + B_V²).',
    'Equator: δ = 0°, B_H = B_E, B_V = 0. Poles: δ = 90°, B_H = 0, B_V = B_E.',
    'Apparent Dip: tanδ\' = tanδ / cosθ; Perpendicular planes: cot²δ = cot²δ₁ + cot²δ₂.',
    'Vibration Magnetometer: T = 2π √(I / (M B_H)).'
  ],

  practiceQuestions: [
    {
      id: 'em-p1',
      question:
        'At a certain location on Earth, the horizontal component of Earth’s magnetic field is B_H = 0.3 Gauss and the total magnetic field is B_E = 0.6 Gauss. The angle of dip at this location is:',
      options: ['60°', '30°', '45°', '90°'],
      correctAnswer: 0,
      explanation:
        'We know that B_H = B_E cosδ. Given B_H = 0.3 G and B_E = 0.6 G: cosδ = B_H / B_E = 0.3 / 0.6 = 0.5 = 1/2. Therefore, angle of dip δ = arccos(1/2) = 60°.'
    },
    {
      id: 'em-p2',
      question:
        'The apparent dip values measured in two mutually perpendicular vertical planes are 45° and 45°. The true dip at that place is:',
      options: ['45°', '35.26° (cot⁻¹√2)', '60°', '30°'],
      correctAnswer: 1,
      explanation:
        'Using the master formula for two perpendicular planes: cot²δ = cot²δ₁ + cot²δ₂. Given δ₁ = 45° (cot 45° = 1) and δ₂ = 45° (cot 45° = 1): cot²δ = 1² + 1² = 2 ⇒ cotδ = √2 ⇒ tanδ = 1/√2 ⇒ δ = cot⁻¹(√2) ≈ 35.26°.'
    },
    {
      id: 'em-p3',
      question:
        'At what angle of dip is the vertical component of Earth’s magnetic field equal to √3 times the horizontal component?',
      options: ['60°', '30°', '45°', '0°'],
      correctAnswer: 0,
      explanation:
        'Given B_V = √3 B_H. We know tanδ = B_V / B_H = (√3 B_H) / B_H = √3. Therefore, δ = arctan(√3) = 60°.'
    },
    {
      id: 'em-p4',
      question:
        'A vibration magnetometer makes 30 oscillations per minute at a place where B_H = 0.24 × 10⁻⁴ T. The number of oscillations it will make per minute at a place where B_H = 0.54 × 10⁻⁴ T is:',
      options: ['45', '60', '35', '50'],
      correctAnswer: 0,
      explanation:
        'Frequency of oscillation f ∝ √B_H. Therefore: f₂ / f₁ = √(B_{H2} / B_{H1}) = √(0.54 × 10⁻⁴ / 0.24 × 10⁻⁴) = √(54 / 24) = √(9 / 4) = 3 / 2 = 1.5. Given f₁ = 30 oscillations/min ⇒ f₂ = 1.5 × 30 = 45 oscillations per minute.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2021,
      question:
        'A magnetic compass needle oscillates 30 times per minute at a place where the horizontal component of Earth’s magnetic field is 0.1 × 10⁻⁴ T and 40 times per minute at another place. The horizontal component of Earth’s magnetic field at the second place is:',
      options: [
        '0.177 × 10⁻⁴ T',
        '0.056 × 10⁻⁴ T',
        '0.22 × 10⁻⁴ T',
        '0.32 × 10⁻⁴ T'
      ],
      correctAnswer: 0,
      explanation:
        'For a vibration magnetometer needle: f ∝ √B_H ⇒ B_H ∝ f². Given f₁ = 30 osc/min, B_{H1} = 0.1 × 10⁻⁴ T, f₂ = 40 osc/min: B_{H2} / B_{H1} = (f₂ / f₁)² = (40 / 30)² = (4/3)² = 16 / 9 ≈ 1.778. Therefore: B_{H2} = 1.778 × 0.1 × 10⁻⁴ T = 0.1778 × 10⁻⁴ T ≈ 0.177 × 10⁻⁴ T.',
      conceptTested: 'Vibration Magnetometer Field Relation (B_H ∝ f²)'
    },
    {
      exam: 'NEET UG',
      year: 2020,
      question:
        'At a point on Earth, the angle of dip is 60° and the horizontal component of Earth’s magnetic field is 0.4 × 10⁻⁴ T. The total magnetic field of Earth at this point is:',
      options: [
        '0.8 × 10⁻⁴ T',
        '0.2 × 10⁻⁴ T',
        '0.4 × 10⁻⁴ T',
        '1.6 × 10⁻⁴ T'
      ],
      correctAnswer: 0,
      explanation:
        'We know that B_H = B_E cosδ. Given B_H = 0.4 × 10⁻⁴ T and δ = 60° (cos 60° = 0.5): B_E = B_H / cos 60° = (0.4 × 10⁻⁴ T) / 0.5 = 0.8 × 10⁻⁴ T.',
      conceptTested: 'Earth Magnetic Field Components (B_E = B_H / cosδ)'
    },
    {
      exam: 'NEET UG',
      year: 2018,
      question:
        'At a place on Earth, the vertical component of Earth’s magnetic field is √3 times the horizontal component. The angle of dip at this place is:',
      options: ['60°', '30°', '45°', '0°'],
      correctAnswer: 0,
      explanation:
        'Formula: tanδ = B_V / B_H. Given B_V = √3 B_H ⇒ tanδ = (√3 B_H) / B_H = √3. Therefore, δ = arctan(√3) = 60°.',
      conceptTested: 'Angle of Dip Calculation (tanδ = B_V / B_H)'
    },
    {
      exam: 'AIPMT',
      year: 2011,
      question:
        'A dip circle is at right angle to the magnetic meridian. What will be the apparent dip shown by it?',
      options: ['90°', '0°', '45°', '60°'],
      correctAnswer: 0,
      explanation:
        'When the dip circle is at right angles to the magnetic meridian (θ = 90°), the effective horizontal component is B_H\' = B_H cos 90° = 0. The apparent dip is tanδ\' = B_V / B_H\' = B_V / 0 = ∞ ⇒ δ\' = 90°. The needle stands completely vertical!',
      conceptTested: 'Apparent Dip at Right Angle to Meridian (δ\' = 90°)'
    }
  ]
};
