import { DetailedTopicContent } from '../../types/neet';

export const physMagneticMaterialsDetails: DetailedTopicContent = {
  topicId: 'phys-magnetic-materials',
  topicName: 'Magnetic Materials (Dia, Para, Ferro), Magnetisation, Susceptibility, Curie Law & Hysteresis',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Magnetic Effects of Current & Magnetism',
  chapter: 'Magnetism and Matter',

  whatIsThisTopic:
    'Comprehensive first-principles masterclass on Magnetic Properties of Matter: Magnetisation M, Magnetising Field H, Magnetic Permeability μ, Relative Permeability μ_r, Magnetic Susceptibility χ_m, full comparative breakdown of Diamagnetic, Paramagnetic and Ferromagnetic materials, Domain Theory, Curie’s Law and Curie-Weiss Law, Curie Temperature T_C, Hysteresis Loop (B-H curve, Retentivity, Coercivity, Hysteresis Loss), Soft Iron vs Hard Steel, Permanent Magnets and Electromagnets, Solved Numericals, Verified Real PYQs, and 30+ NEET Traps.',

  basicIdea: [
    'Origin of Atomic Magnetism: Atomic magnetic dipoles originate from: (1) Orbital angular momentum of revolving electrons, and (2) Intrinsic spin angular momentum of electrons. According to quantum electrodynamics, the electron spin magnetic moment dominates in most magnetic materials.',
    'Fundamental Macroscopic Magnetic Field Vectors inside Matter:',
    '1. Magnetisation (M): The net magnetic dipole moment per unit volume of the material: M = m_net / V. SI Unit: A/m (or A·m⁻¹). Dimensions: [M⁰ L⁻¹ T⁰ A¹].',
    '2. Magnetising Field Intensity (H): The external magnetic field applied to magnetise a material: H = B₀ / μ₀. SI Unit: A/m.',
    '3. Total Magnetic Induction inside Material (B): B = μ₀ (H + M).',
    '4. Magnetic Susceptibility (χ_m): The ease with which a material can be magnetised: χ_m = M / H (Dimensionless scalar).',
    '5. Relative Magnetic Permeability (μ_r): μ_r = μ / μ₀ = 1 + χ_m (Dimensionless scalar).',
    '• Total Field in Linear Media: B = μ H = μ₀ μ_r H = μ₀ (1 + χ_m) H.',
    'Three Classes of Magnetic Materials (The Core Classification):',
    '1. Diamagnetic Materials (e.g., Bi, Cu, Pb, H₂O, Au, N₂ at STP):',
    '• Origin: Paired electrons; induced opposite orbital magnetic moments (Lenz’s Law).',
    '• Behaviour: Feebly repelled by a magnetic field; tends to move from stronger to weaker parts of non-uniform B.',
    '• Susceptibility: Negative and small (-10⁻⁵ to -10⁻⁹); INDEPENDENT of temperature.',
    '• Permeability: μ_r < 1 (slightly less than 1), μ < μ₀.',
    '• Perfect Diamagnetism (Superconductors): χ_m = -1, μ_r = 0, B_inside = 0 (Meissner Effect).',
    '2. Paramagnetic Materials (e.g., Al, Na, Ca, O₂ at STP, Pt, CuCl₂):',
    '• Origin: Unpaired electrons giving permanent atomic magnetic dipoles; randomly oriented due to thermal agitation.',
    '• Behaviour: Feebly attracted by a magnetic field; tends to move from weaker to stronger parts of non-uniform B.',
    '• Susceptibility: Positive and small (+10⁻⁵ to +10⁻³); follows Curie’s Law: χ_m = C / T (inversely proportional to Kelvin temperature).',
    '• Permeability: μ_r > 1 (slightly greater than 1), μ > μ₀.',
    '3. Ferromagnetic Materials (e.g., Fe, Co, Ni, Gd, Alnico):',
    '• Origin: Strong quantum exchange coupling causing spontaneous parallel alignment of atomic dipoles into macroscopic domains (~1 mm³ containing ~10¹¹ atoms).',
    '• Behaviour: Strongly attracted by a magnetic field; moves vigorously toward stronger parts of non-uniform B.',
    '• Susceptibility: Positive and extremely large (χ_m ≫ 1000).',
    '• Permeability: μ_r ≫ 1000, μ ≫ μ₀.',
    '• Temperature Behaviour: Above Curie Temperature (T_C), ferromagnetic domains break down and the material becomes PARAMAGNETIC, obeying the Curie-Weiss Law: χ_m = C\' / (T - T_C) for T > T_C.',
    'Hysteresis Loop (B-H Curve):',
    '• Retentivity (Remanence): The residual magnetic field B remaining inside the material when the magnetising field H is reduced to zero (H = 0).',
    '• Coercivity (Coercive Force H_c): The reverse magnetising field required to completely demagnetise the material (reduce B to zero, B = 0).',
    '• Hysteresis Loss: Energy dissipated as heat per unit volume per cycle of magnetisation = Area of B-H loop (∮ H dB).',
    '• Soft Magnetic Materials (e.g., Soft Iron): High permeability, low retentivity, low coercivity, narrow B-H loop, small hysteresis loss ⇒ Ideal for Transformer Cores & Electromagnets.',
    '• Hard Magnetic Materials (e.g., Alnico, Steel): High retentivity, high coercivity, broad B-H loop, high resistance to demagnetisation ⇒ Ideal for Permanent Magnets.'
  ],

  importantTerms: [
    {
      term: 'Magnetisation (M)',
      symbol: 'M = m_net / V',
      definition:
        'The net magnetic dipole moment developed per unit volume of a magnetic specimen when placed in an external magnetising field.',
      neetNote: 'SI Unit: A/m (Ampere per meter). Dimensions: [L⁻¹ A].'
    },
    {
      term: 'Magnetising Field (H)',
      symbol: 'H = B₀ / μ₀',
      definition:
        'The external magnetic field capability to magnetise a material. In a solenoid of n turns/m carrying current I: H = n I.',
      neetNote: 'SI Unit: A/m. Independent of the material medium inserted.'
    },
    {
      term: 'Magnetic Susceptibility (χ_m)',
      symbol: 'χ_m = M / H',
      definition:
        'A dimensionless physical ratio measuring how easily a substance becomes magnetised in response to an applied magnetising field.',
      neetNote: 'χ_m < 0 (negative) for Diamagnetic; χ_m > 0 (small) for Paramagnetic; χ_m ≫ 1 (huge) for Ferromagnetic.'
    },
    {
      term: 'Relative Magnetic Permeability (μ_r)',
      symbol: 'μ_r = 1 + χ_m = μ / μ₀',
      definition:
        'The ratio of the magnetic permeability of a medium (μ) to the permeability of free space (μ₀).',
      neetNote: 'μ_r < 1 for Diamagnetic; μ_r > 1 for Paramagnetic; μ_r ≫ 1 for Ferromagnetic.'
    },
    {
      term: 'Curie Temperature (T_C)',
      symbol: 'T_C',
      definition:
        'The critical temperature above which a ferromagnetic substance loses its spontaneous domain structure and transitions into a paramagnetic substance.',
      neetNote: 'For Iron (Fe): T_C = 1043 K (770°C); Cobalt (Co): 1394 K; Nickel (Ni): 631 K; Gadolinium (Gd): 289 K (16°C).'
    },
    {
      term: 'Retentivity (Remanence)',
      symbol: 'B_r',
      definition:
        'The value of magnetic induction B remaining in a ferromagnetic specimen when the external magnetising field H is reduced to zero.',
      neetNote: 'Must be high for permanent magnets.'
    },
    {
      term: 'Coercivity (H_c)',
      symbol: 'H_c',
      definition:
        'The magnitude of the reverse magnetising field (-H) required to reduce the residual magnetic induction B inside the specimen to zero.',
      neetNote: 'Must be HIGH for permanent magnets (Alnico) and LOW for transformer cores (soft iron).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Microscopic Origin of Magnetism & the Fundamental Field Vectors (M, H, B, χ_m, μ_r)',
      paragraphs: [
        'How does matter interact with magnetic fields?',
        'At the subatomic level, electrons in atoms generate magnetic dipoles via two mechanisms:',
        '1. Orbital Magnetic Dipole Moment (μ_l): Arising from the revolving electron forming a microscopic current loop: μ_l = - (e / 2m_e) L, where L is orbital angular momentum.',
        '2. Spin Magnetic Dipole Moment (μ_s): Arising from the intrinsic quantum mechanical spin of the electron. The Bohr Magneton μ_B = eħ / (2m_e) = 9.27 × 10⁻²⁴ A·m² is the fundamental quantum unit of atomic magnetic moment.',
        'The Fundamental Macroscopic Field Vectors:',
        '• Magnetisation Vector (M): When a material of volume V acquires net magnetic moment m_net: M = m_net / V (Unit: A/m).',
        '• Magnetising Field (H): The external driving field: H = B₀ / μ₀ (Unit: A/m). Inside a long solenoid with n turns/m carrying current I: H = n I.',
        '• Total Magnetic Field B: Inside the material, the total magnetic induction is the sum of the external field (μ₀ H) and the field created by internal aligned dipoles (μ₀ M):',
        'B = μ₀ (H + M).',
        '• Magnetic Susceptibility (χ_m): Defined as χ_m = M / H. It measures how readily the material magnetises per unit applied field.',
        '• Permeability Relations:',
        'B = μ₀ (H + M) = μ₀ (H + χ_m H) = μ₀ (1 + χ_m) H = μ H.',
        'where μ = μ₀ (1 + χ_m) is the absolute magnetic permeability and μ_r = μ / μ₀ = 1 + χ_m is the dimensionless relative permeability.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="250" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Interrelation of Magnetic Vectors: B, H, M, χ_m, and μ_r</text><g transform="translate(60, 48)"><rect x="0" y="0" width="280" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">Vector Definitions &amp; Units</text><text x="15" y="48" fill="#1e3a8a" font-size="11" font-weight="bold">• M = m_net / V  [Unit: A/m]</text><text x="15" y="72" fill="#1e3a8a" font-size="11" font-weight="bold">• H = B₀ / μ₀ = n I  [Unit: A/m]</text><text x="15" y="96" fill="#b91c1c" font-size="11.5" font-weight="bold">• B = μ₀ (H + M)  [Unit: Tesla (T)]</text><text x="15" y="122" fill="#047857" font-size="11" font-weight="bold">• χ_m = M / H  [Dimensionless]</text><text x="15" y="148" fill="#7c3aed" font-size="11.5" font-weight="bold">• μ_r = 1 + χ_m  [Dimensionless]</text><text x="15" y="168" fill="#475569" font-size="10.5">• B = μ H = μ₀ μ_r H</text></g><g transform="translate(380, 48)"><rect x="0" y="0" width="280" height="180" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Susceptibility Sign &amp; Meaning</text><rect x="15" y="38" width="250" height="38" fill="#fef2f2" stroke="#ef4444" stroke-width="1" rx="4"/><text x="25" y="54" fill="#991b1b" font-size="10.5" font-weight="bold">Diamagnetic: χ_m &lt; 0 (Negative)</text><text x="25" y="68" fill="#b91c1c" font-size="9.5">μ_r &lt; 1 (Slightly less than 1), Independent of T</text><rect x="15" y="84" width="250" height="38" fill="#ecfdf5" stroke="#10b981" stroke-width="1" rx="4"/><text x="25" y="100" fill="#065f46" font-size="10.5" font-weight="bold">Paramagnetic: χ_m &gt; 0 (Small Positive)</text><text x="25" y="114" fill="#047857" font-size="9.5">μ_r &gt; 1 (Slightly greater than 1), χ ∝ 1/T</text><rect x="15" y="130" width="250" height="38" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" rx="4"/><text x="25" y="146" fill="#1e40af" font-size="10.5" font-weight="bold">Ferromagnetic: χ_m ≫ 1000 (Huge)</text><text x="25" y="160" fill="#1e3a8a" font-size="9.5">μ_r ≫ 1000, Domains align spontaneously</text></g></svg>',
        caption: 'Figure 5.11: Master relationship map between B, H, M, susceptibility χ_m, and relative permeability μ_r.',
        guide: 'B = μ₀(H + M) and μ_r = 1 + χ_m are the two most frequently combined equations in NEET numericals.'
      },
      importantPoints: [
        'Magnetisation: M = m_net / V (Unit: A/m); Magnetising field: H = B₀/μ₀ = nI (Unit: A/m).',
        'Total field: B = μ₀(H + M) = μ₀(1 + χ_m)H = μ H.',
        'Susceptibility: χ_m = M / H; Relative permeability: μ_r = 1 + χ_m = μ / μ₀.',
        'Bohr Magneton: μ_B = eħ / 2m_e = 9.27 × 10⁻²⁴ A·m².'
      ]
    },
    {
      heading: '2. Diamagnetism: Lenz’s Law Origin, Meissner Effect & Superconductors',
      paragraphs: [
        'Origin of Diamagnetism:',
        '• Diamagnetism is present in ALL substances, but it is masked when paramagnetism or ferromagnetism is present.',
        '• It occurs in materials where atoms have completely paired electrons (zero net permanent magnetic dipole moment in ground state).',
        '• When an external field B is applied, electrons orbiting in opposite senses accelerate or decelerate in accordance with Lenz’s Law, inducing an opposing magnetic dipole moment.',
        'Key Physical Properties of Diamagnets:',
        '1. Feeble Repulsion: Diamagnetic materials are feebly repelled by a magnetic field. When placed in a non-uniform field, they move slowly from STRONGER to WEAKER parts of the field.',
        '2. Magnetic Field Expulsion: Magnetic field lines are slightly expelled from the interior of a diamagnetic substance (B_inside < B_outside).',
        '3. Susceptibility (χ_m): Small and NEGATIVE (-10⁻⁵ to -10⁻⁹).',
        '4. Relative Permeability (μ_r): Slightly less than 1 (0 ≤ μ_r < 1).',
        '5. Temperature Independence: Diamagnetic susceptibility is COMPLETELY INDEPENDENT of temperature (since it does not rely on thermal alignment of dipoles).',
        '6. Perfect Diamagnetism & The Meissner Effect:',
        'Superconductors cooled below their critical transition temperature exhibit ZERO electrical resistance and PERFECT DIAMAGNETISM:',
        '• χ_m = -1 exactly.',
        '• μ_r = 1 + χ_m = 1 + (-1) = 0 exactly.',
        '• Total internal field B_inside = μ₀ μ_r H = 0 (Total expulsion of all magnetic flux lines from the superconductor). This phenomenon is called the Meissner Effect, enabling magnetic levitation.',
        '• Common Diamagnetic Examples: Bismuth (Bi - most diamagnetic elemental solid), Copper (Cu), Lead (Pb), Water (H₂O), Gold (Au), Nitrogen (N₂) at STP, Diamond, Silicon.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="230" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Diamagnetic Flux Expulsion &amp; Meissner Effect (Superconductors)</text><g transform="translate(60, 50)"><rect x="0" y="0" width="280" height="160" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Standard Diamagnet (e.g., Cu, Bi)</text><circle cx="140" cy="90" r="35" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/><text x="140" y="94" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Diamagnet</text><path d="M 20 60 C 90 60, 110 40, 140 40 C 170 40, 190 60, 260 60" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M 20 120 C 90 120, 110 140, 140 140 C 170 140, 190 120, 260 120" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M 20 90 L 80 90" stroke="#2563eb" stroke-width="1.5"/><path d="M 200 90 L 260 90" stroke="#2563eb" stroke-width="1.5"/><text x="140" y="148" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">Lines Expelled (B_in &lt; B_out, χ_m &lt; 0)</text></g><g transform="translate(380, 50)"><rect x="0" y="0" width="280" height="160" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Superconductor (Meissner Effect)</text><circle cx="140" cy="90" r="35" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/><text x="140" y="94" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">Superconductor</text><path d="M 20 50 C 90 50, 100 25, 140 25 C 180 25, 190 50, 260 50" fill="none" stroke="#dc2626" stroke-width="1.8"/><path d="M 20 130 C 90 130, 100 155, 140 155 C 180 155, 190 130, 260 130" fill="none" stroke="#dc2626" stroke-width="1.8"/><text x="140" y="148" fill="#991b1b" font-size="10.5" font-weight="bold" text-anchor="middle">χ_m = -1, μ_r = 0, B_in = 0 (Total Expulsion)</text></g></svg>',
        caption: 'Figure 5.12: Partial field expulsion in ordinary diamagnets vs 100% complete field expulsion (Meissner Effect) in superconductors.',
        guide: 'For superconductors: χ_m = -1, μ_r = 0, and B_inside = 0.'
      },
      importantPoints: [
        'Diamagnetism arises from paired electrons inducing opposing moments via Lenz\'s law.',
        'Feebly repelled by B; moves from stronger to weaker field.',
        'χ_m is small and negative; INDEPENDENT of temperature.',
        'Superconductors: χ_m = -1, μ_r = 0, B_in = 0 (Meissner effect).'
      ]
    },
    {
      heading: '3. Paramagnetism: Permanent Atomic Dipoles & Curie’s Law',
      paragraphs: [
        'Origin of Paramagnetism:',
        '• Paramagnetism occurs in materials containing atoms or molecules with UNPAIRED electrons.',
        '• Each individual atom possesses a permanent magnetic dipole moment.',
        '• In the absence of an external field, random thermal agitation continuously disorients these atomic dipoles, resulting in net zero macroscopic magnetisation: M = 0.',
        '• In an applied external field B, the dipoles experience a torque τ = M × B that tends to align them parallel to the field, creating a net positive magnetisation M in the direction of B.',
        'Key Properties of Paramagnets:',
        '1. Feeble Attraction: Attracted feebly into magnetic fields; moves slowly from WEAKER to STRONGER field regions.',
        '2. Magnetic Field Concentration: Field lines are slightly concentrated into the interior (B_inside > B_outside).',
        '3. Susceptibility (χ_m): Small and POSITIVE (+10⁻⁵ to +10⁻³).',
        '4. Relative Permeability (μ_r): Slightly greater than 1 (μ_r > 1).',
        '5. Curie’s Law (Temperature Dependence):',
        'As temperature T increases, thermal agitation disrupts the dipole alignment. Pierre Curie established that for paramagnetic materials well below saturation:',
        'M = C · (B₀ / T) \\quad \\Rightarrow \\quad M / H = \\chi_m = \\frac{C \\mu_0}{T} = \\frac{C\'}{T}',
        '• Formula: \\chi_m \\propto \\frac{1}{T} \\quad (\\text{where } T \\text{ is absolute temperature in Kelvin}).',
        '• Magnetisation Saturation (M_sat): At extremely high fields and very low temperatures (B/T very large), all atomic dipoles become fully aligned, and magnetisation reaches a constant maximum saturation value M_sat.',
        '• Common Paramagnetic Examples: Aluminium (Al), Sodium (Na), Calcium (Ca), Oxygen (O₂) at STP, Platinum (Pt), Copper Chloride (CuCl₂), Chromium (Cr).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Paramagnetism: Random Thermal Disorientation vs Field Alignment &amp; Curie’s Law</text><g transform="translate(60, 50)"><rect x="0" y="0" width="280" height="150" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#1e40af" font-size="11.5" font-weight="bold" text-anchor="middle">No External Field (B = 0)</text><line x1="60" y1="60" x2="85" y2="45" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><line x1="120" y1="50" x2="105" y2="75" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><line x1="190" y1="55" x2="215" y2="70" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><line x1="80" y1="110" x2="60" y2="125" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><line x1="150" y1="105" x2="175" y2="95" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><line x1="220" y1="120" x2="200" y2="100" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/><text x="140" y="142" fill="#1e3a8a" font-size="10.5" font-weight="bold" text-anchor="middle">Thermal Agitation ⇒ Net M = 0</text></g><g transform="translate(380, 50)"><rect x="0" y="0" width="280" height="150" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#065f46" font-size="11.5" font-weight="bold" text-anchor="middle">External Field Applied (B &gt; 0)</text><line x1="50" y1="60" x2="90" y2="60" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/><line x1="120" y1="60" x2="160" y2="60" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/><line x1="190" y1="60" x2="230" y2="60" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/><line x1="50" y1="105" x2="90" y2="105" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/><line x1="120" y1="105" x2="160" y2="105" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/><line x1="190" y1="105" x2="230" y2="105" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/><text x="140" y="140" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">Curie’s Law: χ_m = C / T</text></g></svg>',
        caption: 'Figure 5.13: Paramagnetic alignment in B field opposing thermal disorientation, obeying Curie\'s Law χ ∝ 1/T.',
        guide: 'Remember: In paramagnets, doubling absolute temperature (Kelvin) cuts susceptibility in half: χ₂ = χ₁ (T₁/T₂).'
      },
      importantPoints: [
        'Paramagnets have permanent atomic dipoles (unpaired electrons).',
        'Feebly attracted by B; moves from weaker to stronger field regions.',
        'χ_m is small and positive; obeys Curie’s Law: χ_m = C / T.',
        'At high B and very low T, paramagnets saturate (M = M_sat).'
      ]
    },
    {
      heading: '4. Ferromagnetism: Domain Theory, Curie Temperature & Curie-Weiss Law',
      paragraphs: [
        'Origin of Ferromagnetism:',
        '• Ferromagnetism arises from a powerful quantum-mechanical interaction known as EXCHANGE COUPLING.',
        '• Exchange forces lock neighboring electron spins into spontaneous parallel alignment over microscopic regions called DOMAINS.',
        '• Typical Domain Dimensions: ~1 mm³ in size, containing roughly 10¹¹ to 10¹⁵ fully aligned atomic dipoles.',
        'Magnetisation Mechanisms:',
        '1. In Weak Applied Field: Domains favorably oriented relative to B grow in size through DOMAIN WALL DISPLACEMENT.',
        '2. In Strong Applied Field: All domain magnetization vectors suddenly rotate into complete alignment with B through DOMAIN ROTATION.',
        'Key Properties of Ferromagnets:',
        '1. Strong Attraction: Strongly attracted into magnetic fields; moves vigorously into strong field regions.',
        '2. Magnetic Field Concentration: Magnetic field lines are intensely crowded into the material (B_inside ≫ B_outside).',
        '3. Susceptibility (χ_m): Positive and ENORMOUS (χ_m ≫ 1000).',
        '4. Relative Permeability (μ_r): Huge (μ_r ≫ 1000).',
        'Curie Temperature (T_C) & Curie-Weiss Law:',
        'When a ferromagnetic material is heated, thermal energy disrupts the quantum exchange coupling. At a critical threshold called the Curie Temperature (T_C), the domain structure completely disintegrates and the ferromagnet abruptly transforms into a PARAMAGNET!',
        '• For T > T_C (Paramagnetic state): The susceptibility follows the Curie-Weiss Law:',
        '\\chi_m = \\frac{C\'}{T - T_C} \\quad (\\text{for } T > T_C).',
        '• High-Yield Curie Temperatures for NEET:',
        'Iron (Fe): T_C = 1043 K (770°C); Cobalt (Co): T_C = 1394 K; Nickel (Ni): T_C = 631 K (358°C); Gadolinium (Gd): T_C = 289 K (16°C).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="220" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Ferromagnetic Domain Alignment &amp; Curie Temperature Phase Transition</text><g transform="translate(60, 48)"><rect x="0" y="0" width="280" height="150" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#0f172a" font-size="11.5" font-weight="bold" text-anchor="middle">Domain Structure (Unmagnetised)</text><line x1="140" y1="35" x2="140" y2="125" stroke="#64748b" stroke-width="1.5"/><line x1="20" y1="80" x2="260" y2="80" stroke="#64748b" stroke-width="1.5"/><line x1="50" y1="60" x2="110" y2="60" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)"/><line x1="210" y1="70" x2="170" y2="40" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)"/><line x1="80" y1="115" x2="80" y2="90" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)"/><line x1="180" y1="100" x2="230" y2="100" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)"/><text x="140" y="142" fill="#b91c1c" font-size="10.5" font-weight="bold" text-anchor="middle">Random Domains ⇒ Net M = 0</text></g><g transform="translate(380, 48)"><rect x="0" y="0" width="280" height="150" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#6b21a8" font-size="11.5" font-weight="bold" text-anchor="middle">Curie Temperature (T_C) Transition</text><rect x="15" y="40" width="250" height="42" fill="#ffffff" stroke="#c084fc" stroke-width="1" rx="4"/><text x="25" y="56" fill="#7e22ce" font-size="10.5" font-weight="bold">T &lt; T_C: FERROMAGNETIC</text><text x="25" y="72" fill="#475569" font-size="10">Domains present, huge χ_m ≫ 1000</text><rect x="15" y="92" width="250" height="42" fill="#ffffff" stroke="#c084fc" stroke-width="1" rx="4"/><text x="25" y="108" fill="#b91c1c" font-size="10.5" font-weight="bold">T &gt; T_C: PARAMAGNETIC</text><text x="25" y="124" fill="#991b1b" font-size="10.5" font-weight="bold">Curie-Weiss: χ_m = C\' / (T - T_C)</text></g></svg>',
        caption: 'Figure 5.14: Ferromagnetic domains (spontaneous exchange alignment) and Curie temperature breakdown into paramagnetic state.',
        guide: 'Above Curie temperature T_C, ferromagnets turn into paramagnets obeying χ = C\'/(T - T_C).'
      },
      importantPoints: [
        'Exchange coupling creates macroscopic domains (~1 mm³, ~10¹¹ atoms).',
        'Under B: Weak field ⇒ Domain wall displacement; Strong field ⇒ Domain rotation.',
        'χ_m ≫ 1000, μ_r ≫ 1000, intensely attracted to magnetic fields.',
        'Curie Temperature T_C: Transition from Ferromagnetic to Paramagnetic.',
        'Curie-Weiss Law (for T > T_C): χ_m = C\' / (T - T_C).'
      ]
    },
    {
      heading: '5. The Hysteresis Loop: Retentivity, Coercivity, Hysteresis Loss & Soft vs Hard Magnets',
      paragraphs: [
        'What is Magnetic Hysteresis?',
        'When a ferromagnetic specimen is taken through a complete cycle of magnetisation by varying the magnetising field H (0 → +H_max → 0 → -H_max → 0 → +H_max), the magnetic induction B lags behind the magnetising field H. This lagging phenomenon is called HYSTERESIS.',
        'Key Milestones on the B-H Hysteresis Curve:',
        '1. Initial Magnetisation (OA): Specimen magnetises along non-linear curve OA until saturation induction B_s is reached where all domains are fully rotated.',
        '2. Retentivity / Remanence (OB): When H is reduced back to zero (H = 0), a residual magnetic field remains in the material. OB = B_r = Retentivity.',
        '3. Coercivity / Coercive Field (OC): To eliminate the residual magnetism (reduce B to 0), a reverse magnetising field must be applied. OC = H_c = Coercivity.',
        '4. Negative Saturation (OD): As reverse field increases, negative saturation is reached at D.',
        '5. Reverse Retentivity (OE) & Reverse Coercivity (OF): Completing the cycle traces the closed hysteresis loop ACDEFA.',
        'Hysteresis Loss:',
        'The work done in taking the specimen through one complete cycle of magnetisation is converted into heat energy. The energy lost per unit volume per cycle is strictly EQUAL TO THE AREA OF THE B-H HYSTERESIS LOOP (Energy Loss = ∮ H dB).',
        'Soft Magnetic Materials vs Hard Magnetic Materials for NEET:',
        '• Soft Iron (Soft Magnetic):',
        'Characteristics: High initial permeability μ, moderate retentivity, VERY LOW coercivity (H_c), NARROW hysteresis loop, small hysteresis loss.',
        'Applications: Transformer cores, electromagnet cores, AC dynamos, choke coils, telephone diaphragms.',
        '• Steel / Alnico (Hard Magnetic):',
        'Characteristics: Moderate permeability, high retentivity, VERY HIGH coercivity (H_c), BROAD hysteresis loop, high resistance to demagnetisation.',
        'Applications: Permanent magnets (loudspeakers, galvanometers, compass needles, MRI permanent magnets).'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="270" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">The B-H Hysteresis Loop: Retentivity, Coercivity &amp; Energy Loss</text><g transform="translate(180, 140)"><line x1="-140" y1="0" x2="140" y2="0" stroke="#475569" stroke-width="1.5"/><line x1="0" y1="-100" x2="0" y2="100" stroke="#475569" stroke-width="1.5"/><text x="145" y="4" fill="#0f172a" font-size="11" font-weight="bold">+H</text><text x="-160" y="4" fill="#0f172a" font-size="11" font-weight="bold">-H</text><text x="6" y="-95" fill="#0f172a" font-size="11" font-weight="bold">+B</text><text x="6" y="105" fill="#0f172a" font-size="11" font-weight="bold">-B</text><path d="M 0 0 Q 40 -60 100 -75" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M 100 -75 C 60 -70 20 -50 0 -45 C -20 -40 -55 -10 -55 0 C -55 10 -70 50 -100 75 C -60 70 -20 50 0 45 C 20 40 55 10 55 0 C 55 -10 70 -50 100 -75 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/><circle cx="0" cy="-45" r="4" fill="#ef4444"/><text x="8" y="-45" fill="#b91c1c" font-size="10.5" font-weight="bold">Retentivity (B_r)</text><circle cx="-55" cy="0" r="4" fill="#059669"/><text x="-110" y="-8" fill="#047857" font-size="10.5" font-weight="bold">Coercivity (H_c)</text><text x="105" y="-75" fill="#1e40af" font-size="10" font-weight="bold">Saturation (A)</text></g><g transform="translate(380, 50)"><rect x="0" y="0" width="280" height="195" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="140" y="22" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Comparison for NEET Applications</text><text x="15" y="48" fill="#1e40af" font-size="11" font-weight="bold">1. Transformer Core (Soft Iron):</text><text x="25" y="66" fill="#334155" font-size="10">• High Permeability (μ)</text><text x="25" y="82" fill="#334155" font-size="10">• Low Coercivity (H_c)</text><text x="25" y="98" fill="#047857" font-size="10">• Narrow Loop ⇒ Minimum Heat Loss</text><text x="15" y="126" fill="#b91c1c" font-size="11" font-weight="bold">2. Permanent Magnet (Alnico / Steel):</text><text x="25" y="144" fill="#334155" font-size="10">• High Retentivity (B_r)</text><text x="25" y="160" fill="#334155" font-size="10">• High Coercivity (H_c)</text><text x="25" y="176" fill="#991b1b" font-size="10">• Broad Loop ⇒ Resists Demagnetisation</text></g></svg>',
        caption: 'Figure 5.15: The B-H Hysteresis loop showing Retentivity (OB), Coercivity (OC), and criteria for Soft Iron vs Permanent Magnets.',
        guide: 'Area of B-H loop = Hysteresis energy loss per unit volume per cycle. Soft iron has narrow loop (low loss); Alnico has high coercivity.'
      },
      importantPoints: [
        'Hysteresis: Lagging of magnetic induction B behind magnetising field H.',
        'Retentivity (B_r): Value of B when H = 0.',
        'Coercivity (H_c): Reverse field H required to make B = 0.',
        'Hysteresis energy loss per cycle per unit volume = Area of B-H loop (∮ H dB).',
        'Soft Iron: High μ, low H_c, narrow loop ⇒ Transformer cores & electromagnets.',
        'Permanent Magnets (Alnico): High retentivity, high coercivity ⇒ Resists stray fields.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Magnetisation & Total Magnetic Field',
      formula: 'M = \\frac{m_{\\text{net}}}{V}, \\quad B = \\mu_0 (H + M) = \\mu H = \\mu_0 \\mu_r H',
      variables: 'M = magnetisation (A/m), m_net = total magnetic moment (A·m²), V = volume (m³), H = magnetising field (A/m), B = magnetic induction (T)',
      whenToUse: 'Calculate net magnetisation, total magnetic field inside a core, or determine magnetising intensity.'
    },
    {
      title: 'Magnetic Susceptibility & Relative Permeability',
      formula: '\\chi_m = \\frac{M}{H}, \\quad \\mu_r = 1 + \\chi_m = \\frac{\\mu}{\\mu_0}',
      variables: 'χ_m = magnetic susceptibility (dimensionless), μ_r = relative permeability (dimensionless), μ = permeability (T·m/A)',
      whenToUse: 'Relate magnetic susceptibility to relative permeability or find M given H and χ_m.'
    },
    {
      title: 'Curie’s Law (Paramagnets) & Curie-Weiss Law (Ferromagnets)',
      formula: '\\chi_{\\text{para}} = \\frac{C}{T}, \\quad \\chi_{\\text{ferro}} = \\frac{C\'}{T - T_C} \\quad (T > T_C)',
      variables: 'T = absolute temperature (K), T_C = Curie temperature (K), C, C\' = Curie constants',
      whenToUse: 'Calculate changes in susceptibility of paramagnets or ferromagnets as temperature varies.'
    },
    {
      title: 'Hysteresis Energy Loss per Unit Volume per Cycle',
      formula: 'W = \\oint H \\, dB = \\text{Area of } B\\text{-}H \\text{ Loop}, \\quad \\text{Power Loss} = (\\text{Loop Area}) \\times V \\times f',
      variables: 'W = energy loss per m³ per cycle (J/m³), V = volume of core (m³), f = AC frequency (Hz)',
      whenToUse: 'Calculate heat dissipated in transformer cores or AC electromagnets.'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto"><rect width="720" height="260" fill="#f8fafc" rx="12"/><text x="360" y="24" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Master High-Yield Comparison Table: Dia, Para and Ferromagnetic Materials</text><rect x="20" y="40" width="680" height="205" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="6"/><text x="120" y="62" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Property</text><text x="270" y="62" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">Diamagnetic</text><text x="430" y="62" fill="#059669" font-size="11" font-weight="bold" text-anchor="middle">Paramagnetic</text><text x="590" y="62" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">Ferromagnetic</text><line x1="20" y1="72" x2="700" y2="72" stroke="#cbd5e1" stroke-width="1.5"/><text x="35" y="90" fill="#334155" font-size="10">Permanent Dipoles</text><text x="270" y="90" fill="#991b1b" font-size="10" text-anchor="middle">None (Paired electrons)</text><text x="430" y="90" fill="#065f46" font-size="10" text-anchor="middle">Present (Unpaired)</text><text x="590" y="90" fill="#1e3a8a" font-size="10" text-anchor="middle">Domains (Exchange)</text><text x="35" y="112" fill="#334155" font-size="10">Force in B Field</text><text x="270" y="112" fill="#991b1b" font-size="10" text-anchor="middle">Feebly Repelled</text><text x="430" y="112" fill="#065f46" font-size="10" text-anchor="middle">Feebly Attracted</text><text x="590" y="112" fill="#1e3a8a" font-size="10" text-anchor="middle">Strongly Attracted</text><text x="35" y="134" fill="#334155" font-size="10">Motion in non-uniform B</text><text x="270" y="134" fill="#991b1b" font-size="10" text-anchor="middle">Stronger → Weaker</text><text x="430" y="134" fill="#065f46" font-size="10" text-anchor="middle">Weaker → Stronger</text><text x="590" y="134" fill="#1e3a8a" font-size="10" text-anchor="middle">Vigorously to Stronger</text><text x="35" y="156" fill="#334155" font-size="10">Susceptibility (χ_m)</text><text x="270" y="156" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">Negative &amp; Small</text><text x="430" y="156" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Positive &amp; Small</text><text x="590" y="156" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Huge Positive (≫1000)</text><text x="35" y="178" fill="#334155" font-size="10">Relative Permeability (μ_r)</text><text x="270" y="178" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">μ_r &lt; 1</text><text x="430" y="178" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">μ_r &gt; 1</text><text x="590" y="178" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">μ_r ≫ 1000</text><text x="35" y="200" fill="#334155" font-size="10">Temperature Effect</text><text x="270" y="200" fill="#991b1b" font-size="10" text-anchor="middle">INDEPENDENT</text><text x="430" y="200" fill="#065f46" font-size="10" text-anchor="middle">χ ∝ 1/T (Curie Law)</text><text x="590" y="200" fill="#1e3a8a" font-size="10" text-anchor="middle">Curie-Weiss above T_C</text><text x="35" y="222" fill="#334155" font-size="10">NCERT Examples</text><text x="270" y="222" fill="#991b1b" font-size="9.5" text-anchor="middle">Bi, Cu, Pb, H₂O, Au, N₂</text><text x="430" y="222" fill="#065f46" font-size="9.5" text-anchor="middle">Al, Na, Ca, O₂, Pt</text><text x="590" y="222" fill="#1e3a8a" font-size="9.5" text-anchor="middle">Fe, Co, Ni, Gd, Alnico</text></svg>',
    caption: 'Master comprehensive high-yield comparison table across all magnetic properties for Diamagnetic, Paramagnetic and Ferromagnetic materials.'
  },

  neetImportantPoints: [
    'Diamagnetic: Paired electrons, feebly repelled, χ_m < 0 (small), μ_r < 1, temperature INDEPENDENT.',
    'Superconductors (Meissner effect): χ_m = -1, μ_r = 0, B_in = 0 (perfect diamagnetism).',
    'Paramagnetic: Unpaired electrons, feebly attracted, χ_m > 0 (small), μ_r > 1, obeys Curie\'s law: χ_m = C/T.',
    'Ferromagnetic: Exchange-coupled domains, strongly attracted, χ_m ≫ 1000, μ_r ≫ 1000.',
    'Curie Temperature T_C: Above T_C, ferromagnet becomes paramagnetic, obeying Curie-Weiss law: χ_m = C\'/(T - T_C).',
    'Hysteresis Loop Area = Energy dissipated as heat per unit volume per cycle (∮ H dB).',
    'Transformer Core: Soft iron (high permeability, low coercivity, narrow loop, small loss).',
    'Permanent Magnet: Alnico/Steel (high retentivity, high coercivity, broad loop).'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking diamagnetic susceptibility changes with temperature.',
      correctFact:
        'Diamagnetic susceptibility is completely INDEPENDENT of temperature because it is an induced orbital effect that does not depend on thermal alignment.',
      whyItMattersForNEET: 'Tested repeatedly in NEET assertion-reason and graph questions.'
    },
    {
      commonConfusion: 'Confusing the required properties of electromagnets with permanent magnets.',
      correctFact:
        'Electromagnets need LOW coercivity and LOW retentivity (so they turn off instantly), whereas permanent magnets require HIGH retentivity and HIGH coercivity (to resist demagnetisation).',
      whyItMattersForNEET: 'One of the most frequent NEET MCQ traps.'
    },
    {
      commonConfusion: 'Applying Curie’s law in Celsius (°C) instead of Kelvin (K).',
      correctFact:
        'Temperature in Curie’s Law (χ = C/T) and Curie-Weiss Law (χ = C\'/(T - T_C)) MUST ALWAYS be expressed in KELVIN.',
      whyItMattersForNEET: 'Classic numerical calculation trap.'
    },
    {
      commonConfusion: 'Assuming μ_r can be negative.',
      correctFact:
        'Relative permeability μ_r is ALWAYS positive: For diamagnets, 0 ≤ μ_r < 1; For superconductors, μ_r = 0. μ_r is never negative.',
      whyItMattersForNEET: 'Appears in true/false statement evaluations.'
    }
  ],

  quickRevision: [
    'M = m_net / V (A/m); H = B₀ / μ₀ (A/m); B = μ₀(H + M) = μ₀(1 + χ_m)H = μ H.',
    'Susceptibility & Permeability: χ_m = M / H, μ_r = 1 + χ_m.',
    'Diamagnetic: χ_m < 0, μ_r < 1, temp-independent (Bi, Cu, H₂O, N₂). Superconductors: χ_m = -1, μ_r = 0.',
    'Paramagnetic: χ_m > 0, μ_r > 1, χ ∝ 1/T (Al, Na, O₂, Pt).',
    'Ferromagnetic: χ_m ≫ 1000, domains, T > T_C ⇒ Paramagnetic with χ = C\'/(T - T_C).',
    'Hysteresis: Retentivity = B when H=0; Coercivity = reverse H when B=0; Loop area = energy loss per cycle.',
    'Soft Iron: High μ, low H_c (transformer cores); Hard Magnets (Alnico): High retentivity, high H_c.'
  ],

  practiceQuestions: [
    {
      id: 'mm-p1',
      question:
        'The magnetic susceptibility of a paramagnetic material is 0.0075 at 300 K. Its susceptibility at 400 K will be:',
      options: ['0.005625', '0.0100', '0.00375', '0.0075'],
      correctAnswer: 0,
      explanation:
        'By Curie’s Law: χ ∝ 1/T ⇒ χ₂ / χ₁ = T₁ / T₂. Given χ₁ = 0.0075, T₁ = 300 K, T₂ = 400 K: χ₂ = χ₁ × (T₁ / T₂) = 0.0075 × (300 / 400) = 0.0075 × 0.75 = 0.005625.'
    },
    {
      id: 'mm-p2',
      question:
        'A domain in a ferromagnetic iron specimen is in the form of a cube of side length 1 μm. If the domain contains 8 × 10¹⁰ iron atoms and each iron atom has a magnetic dipole moment of 9.27 × 10⁻²⁴ A·m², the magnetisation of the domain is:',
      options: [
        '7.4 × 10⁵ A/m',
        '7.4 × 10⁴ A/m',
        '8.0 × 10⁵ A/m',
        '9.27 × 10⁴ A/m'
      ],
      correctAnswer: 0,
      explanation:
        'Volume of cube V = (1 μm)³ = (10⁻⁶ m)³ = 10⁻¹⁸ m³. Total magnetic dipole moment m_total = N × μ_atom = (8 × 10¹⁰) × (9.27 × 10⁻²⁴ A·m²) = 7.416 × 10⁻¹³ A·m². Magnetisation M = m_total / V = (7.416 × 10⁻¹³ A·m²) / (10⁻¹⁸ m³) = 7.416 × 10⁵ A/m ≈ 7.4 × 10⁵ A/m.'
    },
    {
      id: 'mm-p3',
      question:
        'The relative permeability of an iron core is μ_r = 5000. The magnetic susceptibility of the material is:',
      options: ['4999', '5001', '5000', '5 × 10⁻⁴'],
      correctAnswer: 0,
      explanation:
        'Relation: μ_r = 1 + χ_m ⇒ χ_m = μ_r - 1 = 5000 - 1 = 4999.'
    },
    {
      id: 'mm-p4',
      question:
        'Which of the following materials is most suitable for making the core of a transformer?',
      options: [
        'Soft Iron (High permeability, low coercivity, narrow hysteresis loop)',
        'Steel (High retentivity, high coercivity)',
        'Alnico (High coercivity, broad hysteresis loop)',
        'Copper (Diamagnetic substance)'
      ],
      correctAnswer: 0,
      explanation:
        'Transformer cores undergo continuous rapid cycles of AC magnetisation. To minimize power loss due to heat dissipation, the material must have a narrow hysteresis loop (small area), high magnetic permeability (to channel flux easily), and low coercivity. Soft iron fulfills all these criteria perfectly.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2022,
      question:
        'The magnetic susceptibility of a material is -0.00002. The type of magnetic material and its relative permeability are:',
      options: [
        'Diamagnetic, 0.99998',
        'Paramagnetic, 1.00002',
        'Ferromagnetic, 5000',
        'Diamagnetic, -0.99998'
      ],
      correctAnswer: 0,
      explanation:
        'Since magnetic susceptibility χ_m = -0.00002 is negative and small, the material is DIAMAGNETIC. The relative permeability is μ_r = 1 + χ_m = 1 + (-0.00002) = 0.99998. Note that μ_r is always positive and slightly less than 1 for diamagnetic materials.',
      conceptTested: 'Classification of Magnetic Materials from Susceptibility'
    },
    {
      exam: 'NEET UG',
      year: 2020,
      question:
        'A iron rod of susceptibility 599 is subjected to a magnetising field of 1200 A/m. The permeability of the material of the rod is (μ₀ = 4π × 10⁻⁷ T·m/A):',
      options: [
        '2.4π × 10⁻⁴ T·m/A',
        '8.0 × 10⁻⁵ T·m/A',
        '2.4π × 10⁻⁵ T·m/A',
        '2.4π × 10⁻⁷ T·m/A'
      ],
      correctAnswer: 0,
      explanation:
        'Given χ_m = 599. Relative permeability μ_r = 1 + χ_m = 1 + 599 = 600. Permeability μ = μ₀ μ_r = (4π × 10⁻⁷ T·m/A) × 600 = 2400π × 10⁻⁷ = 2.4π × 10⁻⁴ T·m/A.',
      conceptTested: 'Permeability Calculation μ = μ₀(1 + χ_m)'
    },
    {
      exam: 'NEET UG',
      year: 2016,
      question:
        'The magnetic susceptibility is negative for:',
      options: [
        'diamagnetic material only',
        'paramagnetic material only',
        'ferromagnetic material only',
        'paramagnetic and ferromagnetic materials'
      ],
      correctAnswer: 0,
      explanation:
        'By definition, only diamagnetic materials develop induced magnetic moments opposing the applied field, making their magnetic susceptibility χ_m negative (χ_m < 0). Paramagnetic and ferromagnetic materials have positive susceptibility (χ_m > 0).',
      conceptTested: 'Sign of Magnetic Susceptibility (χ < 0 for Diamagnets)'
    },
    {
      exam: 'AIPMT',
      year: 2015,
      question:
        'Above Curie temperature, a ferromagnetic substance becomes:',
      options: [
        'paramagnetic',
        'diamagnetic',
        'superconductor',
        'non-magnetic'
      ],
      correctAnswer: 0,
      explanation:
        'Above the Curie temperature (T_C), thermal agitation destroys the domain alignment and quantum exchange coupling, converting the ferromagnetic substance into a PARAMAGNETIC substance obeying the Curie-Weiss Law (χ = C\'/(T - T_C)).',
      conceptTested: 'Curie Temperature Transition (Ferro → Para)'
    }
  ]
};
