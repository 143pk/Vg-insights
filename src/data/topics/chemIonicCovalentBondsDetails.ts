import { DetailedTopicContent } from '../../types/neet';

export const chemIonicCovalentBondsDetails: DetailedTopicContent = {
  topicId: 'chem-ionic-covalent-bonds',
  topicName: "Ionic Bonding, Lattice Enthalpy & Fajan's Rules",
  subject: 'Chemistry',
  class: 'Class 11',
  classification: 'Inorganic Chemistry (Class 11)',
  chapter: 'Chemical Bonding and Molecular Structure',

  whatIsThisTopic:
    "An ionic (or electrovalent) bond is formed by the complete transfer of one or more electrons from a electropositive metal atom to an electronegative non-metal atom, resulting in positively charged cations and negatively charged anions held together by strong electrostatic forces in a crystal lattice. This topic explores the energetics of ionic bond formation, ionization enthalpy and electron gain enthalpy requirements, lattice enthalpy definition, sign conventions, Born-Haber cycle calculation steps, factors determining lattice energy (charge and radius: U ∝ |z+ × z-| / (r+ + r-)), and Fajan's Rules which explain how cation polarising power and anion polarisability introduce covalent character into ionic bonds, explaining solubility and melting point trends across NEET chemistry.",

  basicIdea: [
    '1. Formation of Ionic Bond: Electropositive element (low ionization enthalpy, e.g., Group 1 & 2 metals) loses valence electrons to form cations. Electronegative element (high negative electron gain enthalpy, e.g., Group 16 & 17 non-metals) gains electrons to form anions. Electrostatic attraction binds them into a solid 3D lattice.',
    '2. Favorable Factors for Ionic Bond Formation: Low Ionization Enthalpy of metal (M → M⁺ + e⁻), High Negative Electron Gain Enthalpy of non-metal (X + e⁻ → X⁻), and High Lattice Enthalpy of the resulting crystal lattice (M⁺ + X⁻ → MX(s)).',
    '3. Lattice Enthalpy (Δ_lattice H°): The energy required to completely separate one mole of a solid ionic compound into its constituent gaseous ions (endothermic, ΔH > 0), OR energy released when 1 mole of ionic solid forms from gaseous ions (exothermic, ΔH < 0). Lattice Enthalpy U ∝ |z⁺ × z⁻| / (r⁺ + r⁻).',
    '4. Born-Haber Cycle: A thermochemical cycle based on Hess\'s Law connecting lattice enthalpy with experimental heats of formation: Δ_f H° = Δ_sub H° + ½ Δ_diss H° + Δ_i H° + Δ_eg H° + Δ_lattice H°.',
    '5. Fajan\'s Rules & Covalent Character: No ionic bond is 100% ionic. A small cation with high charge distorts (polarises) the electron cloud of a large anion. Higher polarization = greater electron sharing = higher covalent character = lower melting point and reduced water solubility.'
  ],

  importantTerms: [
    {
      term: 'Electrovalent (Ionic) Bond',
      definition: 'A chemical bond formed by the complete electrostatic attraction between oppositely charged ions produced via electron transfer.',
      neetNote: 'Non-directional bond; ionic compounds do not form discrete single molecules but 3D repeating crystal lattices.'
    },
    {
      term: 'Lattice Enthalpy (U)',
      definition: 'The energy required to completely decompose 1 mole of an ionic crystal into its isolated gaseous ions at infinite separation.',
      neetNote: 'Higher lattice enthalpy increases thermal stability and melting point, but reduces solubility unless hydration enthalpy exceeds lattice enthalpy.'
    },
    {
      term: 'Born-Haber Cycle',
      definition: 'A closed thermodynamic cycle applying Hess\'s Law of Constant Heat Summation to calculate lattice enthalpy from measurable enthalpies of sublimation, dissociation, ionization, electron gain, and formation.',
      neetNote: 'Frequently tested in NEET numericals: Δ_f H° = Δ_sub H + ½ Δ_diss H + IE + EA + Δ_lat H.'
    },
    {
      term: 'Polarising Power',
      definition: 'The ability of a cation to attract and distort the valence electron density of an adjacent anion towards itself.',
      neetNote: 'Polarising Power ∝ Charge of Cation / (Radius of Cation)². Small, highly charged cations (like Li⁺, Be²⁺, Al³⁺) have maximum polarising power.'
    },
    {
      term: 'Polarisability',
      definition: 'The ease with which the electron cloud of an anion can be distorted by an approaching cation.',
      neetNote: 'Polarisability ∝ Size of Anion & Charge of Anion. Large anions (like I⁻, S²⁻) are easily polarised.'
    },
    {
      term: 'Pseudo-Noble Gas Configuration',
      definition: 'Cations with a valence shell configuration of ns² np⁶ nd¹⁰ (18 electrons, e.g. Cu⁺, Ag⁺, Zn²⁺) rather than ns² np⁶ (8 electrons, e.g. Na⁺, Ca²⁺).',
      neetNote: 'Cations with 18-electron outer shells exert higher polarisation than 8-electron cations of similar size/charge due to poor shielding by d-electrons (e.g. AgCl is more covalent than NaCl).'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Energetics of Ionic Bond Formation & Lattice Enthalpy',
      paragraphs: [
        'An ionic bond forms when gaseous atoms transfer electrons and assemble into an ordered solid crystal.',
        'Three Fundamental Energetic Steps:',
        'Step 1: Cation Formation (Endothermic): M(g) → M⁺(g) + e⁻ (Requires Ionization Enthalpy, Δ_i H > 0). Favored when IE is LOW.',
        'Step 2: Anion Formation (Exothermic): X(g) + e⁻ → X⁻(g) (Releases Electron Gain Enthalpy, Δ_eg H < 0). Favored when EA is HIGH and negative.',
        'Step 3: Lattice Assembly (Highly Exothermic): M⁺(g) + X⁻(g) → MX(s) (Releases Lattice Enthalpy, Δ_lat H < 0).',
        'Net Stability Rule: An ionic compound MX(s) is stable relative to its free gaseous elements only if the total heat released (Δ_eg H + Δ_lat H) exceeds the energy required (Δ_i H + Δ_sub H + Δ_diss H).',
        'Factors Influencing Lattice Enthalpy (U):',
        '1) Charge on Ions (z⁺, z⁻): U is directly proportional to the product of ionic charges (|z⁺ × z⁻|). For example, MgO (z⁺ = +2, z⁻ = -2, product = 4) has ~4 times higher lattice energy than NaCl (z⁺ = +1, z⁻ = -1, product = 1).',
        '2) Size of Ions (r⁺ + r⁻): U is inversely proportional to the sum of ionic radii (r⁺ + r⁻). As ionic radius increases, interionic distance increases, weakening electrostatic attraction. Example lattice enthalpy order: LiF > NaCl > KBr > CsI.'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 300" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">FACTORS DETERMINING LATTICE ENTHALPY (U ∝ |z+ × z-| / (r+ + r-))</text>

  <!-- Charge Factor Comparison -->
  <rect x="40" y="60" width="340" height="200" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="210" y="88" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">1. EFFECT OF IONIC CHARGE (DOMINANT)</text>

  <rect x="60" y="105" width="140" height="70" rx="6" fill="#0f172a" stroke="#4ade80" stroke-width="1"/>
  <text x="130" y="128" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">NaCl</text>
  <text x="130" y="148" text-anchor="middle" fill="#94a3b8" font-size="11">Na⁺ (+1), Cl⁻ (-1)</text>
  <text x="130" y="164" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">U = 788 kJ/mol</text>

  <rect x="220" y="105" width="140" height="70" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="290" y="128" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">MgO</text>
  <text x="290" y="148" text-anchor="middle" fill="#94a3b8" font-size="11">Mg²⁺ (+2), O²⁻ (-2)</text>
  <text x="290" y="164" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="bold">U = 3795 kJ/mol</text>

  <text x="210" y="200" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">Charge product 4x → Lattice Energy ~5x Higher!</text>
  <text x="210" y="220" text-anchor="middle" fill="#94a3b8" font-size="11">(Charge product always dominates size difference)</text>

  <!-- Size Factor Comparison -->
  <rect x="420" y="60" width="340" height="200" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="590" y="88" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">2. EFFECT OF IONIC RADIUS (r⁺ + r⁻)</text>

  <text x="590" y="120" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="bold">Order of Lattice Enthalpy for Alkali Halides:</text>

  <rect x="440" y="140" width="300" height="40" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="590" y="165" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">LiF > NaCl > KBr > CsI</text>

  <text x="590" y="200" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Smaller ions → Shorter interionic distance r</text>
  <text x="590" y="220" text-anchor="middle" fill="#94a3b8" font-size="11">→ Stronger Coulombic attraction → Higher U</text>
</svg>`,
        caption: 'Lattice enthalpy increases dramatically with ionic charge product |z⁺ × z⁻| and smaller ionic sum (r⁺ + r⁻).'
      }
    },
    {
      heading: '2. The Born-Haber Cycle for Calculating Lattice Enthalpy',
      paragraphs: [
        'Lattice enthalpy cannot be measured directly by a single experimental laboratory procedure. The Born-Haber cycle uses Hess\'s Law to calculate lattice enthalpy indirectly from thermodynamic state functions.',
        'Step-by-Step Thermochemical Pathway for NaCl(s) Formation:',
        '1) Sublimation of Sodium metal: Na(s) → Na(g) [Δ_sub H° = +108.4 kJ/mol]',
        '2) Ionization of Sodium gas: Na(g) → Na⁺(g) + e⁻ [Δ_i H° = +496 kJ/mol]',
        '3) Dissociation of Chlorine gas: ½ Cl₂(g) → Cl(g) [½ Δ_bond H° = +121 kJ/mol]',
        '4) Electron Gain by Chlorine atom: Cl(g) + e⁻ → Cl⁻(g) [Δ_eg H° = -348.6 kJ/mol]',
        '5) Lattice Assembly: Na⁺(g) + Cl⁻(g) → NaCl(s) [Δ_lattice H° = ?]',
        'Hess\'s Law Equation:',
        'Δ_f H°(NaCl, s) = Δ_sub H° + ½ Δ_bond H° + Δ_i H° + Δ_eg H° + Δ_lattice H°',
        'Solving for Lattice Enthalpy:',
        'Δ_lattice H° = Δ_f H° - (Δ_sub H° + ½ Δ_bond H° + Δ_i H° + Δ_eg H°)',
        'For NaCl(s), substituting values (-411.2 = 108.4 + 121 + 496 - 348.6 + U) yields U = -788 kJ/mol (formation) or +788 kJ/mol (dissociation).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 320" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">BORN-HABER CYCLE FOR SODIUM CHLORIDE (NaCl)</text>

  <!-- Level 1: Free Elements -->
  <rect x="60" y="60" width="180" height="36" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="150" y="83" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="bold">Na(s) + ½ Cl₂(g)</text>

  <!-- Direct Path to NaCl(s) -->
  <path d="M 150 96 L 150 260 L 630 260" stroke="#4ade80" stroke-width="2.5" fill="none" stroke-dasharray="4 4" marker-end="url(#arrow-green)"/>
  <text x="280" y="280" fill="#4ade80" font-size="12" font-weight="bold">Δ_f H° = -411.2 kJ/mol (Heat of Formation)</text>

  <!-- Step 1: Sublimation -->
  <path d="M 240 78 L 320 78" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <rect x="330" y="60" width="180" height="36" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
  <text x="420" y="83" text-anchor="middle" fill="#f8fafc" font-size="12">Na(g) + ½ Cl₂(g)</text>
  <text x="280" y="70" text-anchor="middle" fill="#38bdf8" font-size="10">Δ_sub H (+108.4)</text>

  <!-- Step 2: Dissociation -->
  <path d="M 510 78 L 590 78" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <rect x="600" y="60" width="160" height="36" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
  <text x="680" y="83" text-anchor="middle" fill="#f8fafc" font-size="12">Na(g) + Cl(g)</text>
  <text x="550" y="70" text-anchor="middle" fill="#38bdf8" font-size="10">½ Δ_diss H (+121)</text>

  <!-- Step 3 & 4: Ionization + Electron Gain -->
  <path d="M 680 96 L 680 150" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow-yellow)"/>
  <rect x="600" y="155" width="160" height="36" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1"/>
  <text x="680" y="178" text-anchor="middle" fill="#f8fafc" font-size="12">Na⁺(g) + Cl⁻(g)</text>
  <text x="740" y="125" text-anchor="start" fill="#fbbf24" font-size="10">IE + Δ_eg H</text>
  <text x="740" y="138" text-anchor="start" fill="#fbbf24" font-size="10">(+496 - 348.6)</text>

  <!-- Step 5: Lattice Enthalpy -->
  <path d="M 680 191 L 680 245" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-red)"/>
  <rect x="600" y="250" width="160" height="36" rx="6" fill="#1e293b" stroke="#4ade80" stroke-width="2"/>
  <text x="680" y="273" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">NaCl (s)</text>
  <text x="725" y="220" text-anchor="start" fill="#f43f5e" font-size="11" font-weight="bold">Lattice Enthalpy</text>
  <text x="725" y="235" text-anchor="start" fill="#f43f5e" font-size="11" font-weight="bold">U = -788 kJ/mol</text>
</svg>`,
        caption: 'Born-Haber thermochemical cycle applying Hess\'s Law to determine lattice enthalpy U.'
      }
    },
    {
      heading: "3. Fajan's Rules: Covalent Character in Ionic Compounds",
      paragraphs: [
        'No ionic bond is 100% ionic. When a positive cation approaches a negative anion, the positive nucleus of the cation attracts the valence electron cloud of the anion while repelling the anion nucleus. This distorts the anion electron cloud—a phenomenon known as Polarization.',
        'Extensive polarization causes electron density to pull into the region between the two nuclei, building up shared electron density and imparting Covalent Character.',
        "Fajan's Rules Summary (Factors Favoring High Covalent Character):",
        '1) Small Cation Size: Small cations have high charge density and extreme polarising power. (Order of covalent character: LiCl > NaCl > KCl > RbCl > CsCl; BeCl₂ > MgCl₂ > CaCl₂).',
        '2) Large Anion Size: Large anions have loosely bound outer electron clouds that are easily distorted (high polarisability). (Order of covalent character: AgI > AgBr > AgCl > AgF; LiI > LiF).',
        '3) High Charge on Either Cation or Anion: Higher charge increases both polarising power of cation and polarisability of anion. (Order of covalent character: AlCl₃ (+3) > MgCl₂ (+2) > NaCl (+1); SnCl₄ > SnCl₂).',
        '4) Pseudo-Noble Gas Configuration of Cation: Cations with 18 valence electrons (ns² np⁶ nd¹⁰, e.g. Cu⁺, Ag⁺, Au⁺, Zn²⁺, Cd²⁺, Hg²⁺) have greater polarising power than noble gas cations (ns² np⁶, 8 valence e⁻) of similar size and charge because inner d-electrons shield nuclear charge poorly.',
        'Physical Consequences of Covalent Character:',
        '• Lower Melting/Boiling Points: Covalent character weakens metallic-like omnidirectional lattice cohesion. (e.g., MP: NaCl (801°C) > LiCl (605°C) > BeCl₂ (405°C)).',
        '• Reduced Water Solubility & Increased Organic Solvent Solubility: Covalent ionic compounds dissolve poorly in water but readily in non-polar organic solvents (e.g. LiCl dissolves in ethanol/acetone; AgI is insoluble in water).',
        '• Intense Color in Compounds: Polarization promotes charge-transfer transitions (e.g., AgF is white, AgCl is white, AgBr is pale yellow, AgI is deep yellow; HgI₂ is bright scarlet red).'
      ],
      visual: {
        type: 'svg',
        svgContent: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">FAJAN'S RULES: POLARIZATION &amp; COVALENT CHARACTER</text>

  <!-- Pure Ionic State -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="310" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="155" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">1. Undistorted Ionic Bond (Low Polarization)</text>

    <!-- Cation -->
    <circle cx="80" cy="95" r="24" fill="#38bdf8" opacity="0.3" stroke="#38bdf8" stroke-width="2"/>
    <text x="80" y="100" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">M⁺</text>

    <!-- Spherical Anion -->
    <circle cx="210" cy="95" r="45" fill="#4ade80" opacity="0.2" stroke="#4ade80" stroke-width="2"/>
    <text x="210" y="100" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">X⁻</text>

    <text x="155" y="160" text-anchor="middle" fill="#94a3b8" font-size="11">Symmetrical spherical electron clouds = 100% Ionic</text>
  </g>

  <!-- Polarized Covalent Character -->
  <g transform="translate(430, 60)">
    <rect x="0" y="0" width="310" height="180" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="155" y="25" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">2. Polarized Bond (High Covalent Character)</text>

    <!-- Small Cation -->
    <circle cx="65" cy="95" r="18" fill="#f43f5e" opacity="0.4" stroke="#f43f5e" stroke-width="2"/>
    <text x="65" y="99" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">Mⁿ⁺</text>

    <!-- Distorted Anion Egg Shape -->
    <path d="M 120 95 C 120 60, 250 50, 250 95 C 250 140, 120 130, 120 95 Z" fill="#fbbf24" opacity="0.3" stroke="#fbbf24" stroke-width="2"/>
    <text x="190" y="100" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">X⁻</text>

    <!-- Distortion Arrow -->
    <path d="M 155 95 L 105 95" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow-red)"/>

    <text x="155" y="160" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">Electron density pulled between nuclei = Shared e⁻ character</text>
  </g>
</svg>`,
        caption: "Cation polarises anion's electron cloud, creating partial electron sharing and covalent character."
      }
    }
  ],

  formulae: [
    {
      title: 'Born-Landé Equation for Lattice Energy',
      formula: 'U = - (N_A × A × z⁺ × z⁻ × e²) / (4π ε₀ r₀) × (1 - 1/n)',
      variables: 'N_A = Avogadro number, A = Madelung constant, z⁺/z⁻ = ion charges, e = elementary charge, r₀ = equilibrium interionic distance, n = Born exponent (5-12)',
      whenToUse: 'Theoretical calculation of lattice enthalpy based on electrostatic crystal structure parameters.',
      note: 'Key NEET takeaway: U is directly proportional to |z⁺ × z⁻| and inversely proportional to r₀ = (r⁺ + r⁻).'
    },
    {
      title: 'Born-Haber Enthalpy Balance Equation',
      formula: 'Δ_f H° = Δ_sub H° + ½ Δ_bond H° + Δ_i H° + Δ_eg H° + Δ_lattice H°',
      variables: 'Δ_f H° = heat of formation, Δ_sub H° = sublimation energy, Δ_bond H° = bond dissociation energy, Δ_i H° = ionization energy, Δ_eg H° = electron gain enthalpy, Δ_lattice H° = lattice energy',
      whenToUse: 'Calculating unknown thermochemical parameter (usually lattice enthalpy or electron gain enthalpy).'
    }
  ],

  neetImportantPoints: [
    "Factors favoring ionic bond formation: Low Ionization Enthalpy of metal, High negative Electron Gain Enthalpy of non-metal, and High Lattice Enthalpy.",
    "Lattice Enthalpy U ∝ |z⁺ × z⁻| / (r⁺ + r⁻). Charge product dominates size differences!",
    "Fajan's Rules for high covalent character: Small Cation, Large Anion, High Charge on either ion, Pseudo-noble gas cation configuration (18 e⁻).",
    'Melting Point Order of Halides: Fluorides > Chlorides > Bromides > Iodides (due to increasing covalent character from F⁻ to I⁻). Exception: LiF < LiCl due to abnormally high lattice enthalpy vs hydration enthalpy ratio.',
    'AgCl vs NaCl: Ag⁺ (18 valence e⁻: 4s² 4p⁶ 4d¹⁰) has stronger polarising power than Na⁺ (8 valence e⁻: 2s² 2p⁶) despite similar ionic radii. Thus AgCl is predominantly covalent and insoluble in water, whereas NaCl is ionic and highly soluble.',
    'Thermal stability of alkaline earth metal carbonates (MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃) increases down group as cation size increases, reducing polarization of CO₃²⁻ anion.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Assuming higher lattice enthalpy always guarantees higher water solubility.',
      correctFact: 'Solubility depends on the NET balance between Lattice Enthalpy (Δ_lat H) and Hydration Enthalpy (Δ_hyd H). A compound dissolves only if |Δ_hyd H| > |Δ_lat H|.',
      whyItMattersForNEET: 'Explains why BaSO₄ or LiF are water-insoluble despite having ionic bonds—their lattice enthalpy exceeds hydration enthalpy.'
    },
    {
      commonConfusion: 'Confusing Polarising Power of cation with Polarisability of anion.',
      correctFact: 'Polarising Power belongs to CATION (pulling ability, maximum for small + highly charged cations). Polarisability belongs to ANION (distortion susceptibility, maximum for large anions).',
      whyItMattersForNEET: 'NEET option traps frequently swap cation and anion terms in Fajan\'s rule questions.'
    },
    {
      commonConfusion: 'Thinking AgCl and NaCl have similar covalent character because Ag⁺ and Na⁺ have similar ionic radii.',
      correctFact: 'Ag⁺ has pseudo-noble gas configuration (18 valence electrons) with poor d-electron shielding, giving it much higher polarising power than Na⁺ (8 valence electrons). AgCl is covalent/insoluble; NaCl is ionic/soluble.',
      whyItMattersForNEET: 'Classic NCERT exception question tested repeatedly in NEET.'
    }
  ],

  quickRevision: [
    'Ionic bond favored by: Low IE (metal) + High negative EA (non-metal) + High Lattice Energy U.',
    'Lattice Energy U ∝ Charge Product |z⁺ z⁻| / Radius Sum (r⁺ + r⁻).',
    'Born-Haber Cycle equation: Δ_f H° = Δ_sub H° + ½ Δ_bond H° + Δ_i H° + Δ_eg H° + Δ_lat H°.',
    'Fajan\'s Rules = High Covalent Character when: Cation SMALL, Anion LARGE, Charge HIGH, Cation = 18 e⁻ (Pseudo-noble gas).',
    'Covalent character order: LiCl > NaCl > KCl; AlCl₃ > MgCl₂ > NaCl; AgI > AgBr > AgCl > AgF.',
    'Solubility rule: Dissolves if |Δ_hyd H| > |Δ_lat H|.'
  ],

  practiceQuestions: [
  {
    "id": "prac-icb-1",
    "question": "Which of the following compounds exhibits the HIGHEST lattice enthalpy?",
    "options": [
      "MgO",
      "NaCl",
      "KBr",
      "LiF"
    ],
    "correctAnswer": 0,
    "explanation": "Lattice enthalpy U ∝ |z⁺ × z⁻| / (r⁺ + r⁻). MgO contains Mg²⁺ and O²⁻ (charge product = |+2 × -2| = 4), whereas NaCl, KBr, and LiF have charge product = 1. High charge product makes MgO lattice energy (~3795 kJ/mol) drastically higher than LiF (~1030 kJ/mol) or NaCl (~788 kJ/mol).",
    "difficulty": "Easy",
    "conceptTested": "Comparing lattice enthalpy based on ionic charge product"
  },
  {
    "id": "prac-icb-2",
    "question": "According to Fajan's rules, which of the following halides possesses the MAXIMUM covalent character?",
    "options": [
      "AlCl₃",
      "MgCl₂",
      "NaCl",
      "SiCl₄"
    ],
    "correctAnswer": 3,
    "explanation": "As cation charge increases (Na⁺ < Mg²⁺ < Al³⁺ < Si⁴⁺), cation radius decreases and polarising power increases drastically. Si⁴⁺ has highest charge (+4) and smallest size, causing maximum distortion of Cl⁻ electron cloud and highest covalent character (SiCl₄ is a covalent liquid).",
    "difficulty": "Medium",
    "conceptTested": "Fajan's rules and cation charge effect"
  },
  {
    "id": "prac-icb-3",
    "question": "Why is AgCl insoluble in water whereas NaCl is readily soluble, despite Ag⁺ and Na⁺ having nearly identical ionic radii (~113 pm)?",
    "options": [
      "Ag⁺ possesses a pseudo-noble gas configuration (18 e⁻) with poor d-electron shielding, imparting high polarising power and strong covalent character to AgCl",
      "Na⁺ has higher hydration enthalpy than Ag⁺",
      "AgCl has much lower lattice energy than NaCl",
      "Chlorine in AgCl has higher electronegativity"
    ],
    "correctAnswer": 0,
    "explanation": "Ag⁺ has valence shell configuration 4s² 4p⁶ 4d¹⁰ (18 electrons, pseudo-noble gas). Poor shielding by 4d electrons causes higher effective nuclear charge, leading to much greater polarising power than Na⁺ (2s² 2p⁶, 8 electrons). High polarization makes AgCl predominantly covalent and insoluble in polar water.",
    "difficulty": "Hard",
    "conceptTested": "Pseudo-noble gas configuration effect on covalent character"
  },
  {
    "id": "prac-icb-4",
    "question": "Using the Born-Haber cycle data: Sublimation enthalpy of K(s) = +89 kJ/mol, Ionization enthalpy of K(g) = +419 kJ/mol, Dissociation enthalpy of ½ Cl₂(g) = +121 kJ/mol, Electron gain enthalpy of Cl(g) = -349 kJ/mol, and Heat of formation of KCl(s) = -436 kJ/mol. Calculate the lattice enthalpy of KCl(s).",
    "options": [
      "-716 kJ/mol",
      "+716 kJ/mol",
      "-616 kJ/mol",
      "+516 kJ/mol"
    ],
    "correctAnswer": 0,
    "explanation": "Δ_f H° = Δ_sub H° + ½ Δ_bond H° + Δ_i H° + Δ_eg H° + Δ_lat H°. Substituting values: -436 = 89 + 121 + 419 - 349 + Δ_lat H° → -436 = 280 + Δ_lat H° → Δ_lat H° = -436 - 280 = -716 kJ/mol.",
    "difficulty": "Medium",
    "conceptTested": "Born-Haber cycle lattice enthalpy calculation"
  },
  {
    "id": "prac-chemioniccovalentbonds-5",
    "question": "Regarding Ionic Bonding, Lattice Enthalpy & Fajan's Rules, which of the following statements correctly resolves a common misconception about \"Assuming higher lattice enthalpy always guarantees higher water solubility.\"?",
    "options": [
      "Solubility depends on the NET balance between Lattice Enthalpy (Δ_lat H) and Hydration Enthalpy (Δ_hyd H). A compound dissolves only if |Δ_hyd H| > |Δ_lat H|.",
      "Incorrect assumption: Assuming higher lattice enthalpy always guarantees higher water solubility.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Solubility depends on the NET balance between Lattice Enthalpy (Δ_lat H) and Hydration Enthalpy (Δ_hyd H). A compound dissolves only if |Δ_hyd H| > |Δ_lat H|.. Explains why BaSO₄ or LiF are water-insoluble despite having ionic bonds—their lattice enthalpy exceeds hydration enthalpy.",
    "difficulty": "Medium",
    "conceptTested": "Ionic Bonding, Lattice Enthalpy & Fajan's Rules - Conceptual Clarity"
  },
  {
    "id": "prac-chemioniccovalentbonds-6",
    "question": "Regarding Ionic Bonding, Lattice Enthalpy & Fajan's Rules, which of the following statements correctly resolves a common misconception about \"Confusing Polarising Power of cation with Polarisability of anion.\"?",
    "options": [
      "Polarising Power belongs to CATION (pulling ability, maximum for small + highly charged cations). Polarisability belongs to ANION (distortion susceptibility, maximum for large anions).",
      "Incorrect assumption: Confusing Polarising Power of cation with Polarisability of anion.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Polarising Power belongs to CATION (pulling ability, maximum for small + highly charged cations). Polarisability belongs to ANION (distortion susceptibility, maximum for large anions).. NEET option traps frequently swap cation and anion terms in Fajan's rule questions.",
    "difficulty": "Medium",
    "conceptTested": "Ionic Bonding, Lattice Enthalpy & Fajan's Rules - Conceptual Clarity"
  },
  {
    "id": "prac-chemioniccovalentbonds-7",
    "question": "Regarding Ionic Bonding, Lattice Enthalpy & Fajan's Rules, which of the following statements correctly resolves a common misconception about \"Thinking AgCl and NaCl have similar covalent character because Ag⁺ and Na⁺ have similar ionic radii.\"?",
    "options": [
      "Ag⁺ has pseudo-noble gas configuration (18 valence electrons) with poor d-electron shielding, giving it much higher polarising power than Na⁺ (8 valence electrons). AgCl is covalent/insoluble; NaCl is ionic/soluble.",
      "Incorrect assumption: Thinking AgCl and NaCl have similar covalent character because Ag⁺ and Na⁺ have similar ionic radii.",
      "Both statements are invalid under standard conditions",
      "Neither statement applies to NEET examination scope"
    ],
    "correctAnswer": 0,
    "explanation": "Ag⁺ has pseudo-noble gas configuration (18 valence electrons) with poor d-electron shielding, giving it much higher polarising power than Na⁺ (8 valence electrons). AgCl is covalent/insoluble; NaCl is ionic/soluble.. Classic NCERT exception question tested repeatedly in NEET.",
    "difficulty": "Medium",
    "conceptTested": "Ionic Bonding, Lattice Enthalpy & Fajan's Rules - Conceptual Clarity"
  },
  {
    "id": "prac-chemioniccovalentbonds-8",
    "question": "In the study of Ionic Bonding, Lattice Enthalpy & Fajan's Rules, what is the exact definition and significance of \"Electrovalent (Ionic) Bond\"?",
    "options": [
      "A chemical bond formed by the complete electrostatic attraction between oppositely charged ions produced via electron transfer.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A chemical bond formed by the complete electrostatic attraction between oppositely charged ions produced via electron transfer.. Non-directional bond; ionic compounds do not form discrete single molecules but 3D repeating crystal lattices.",
    "difficulty": "Easy",
    "conceptTested": "Electrovalent (Ionic) Bond definition"
  },
  {
    "id": "prac-chemioniccovalentbonds-9",
    "question": "In the study of Ionic Bonding, Lattice Enthalpy & Fajan's Rules, what is the exact definition and significance of \"Lattice Enthalpy (U)\"?",
    "options": [
      "The energy required to completely decompose 1 mole of an ionic crystal into its isolated gaseous ions at infinite separation.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "The energy required to completely decompose 1 mole of an ionic crystal into its isolated gaseous ions at infinite separation.. Higher lattice enthalpy increases thermal stability and melting point, but reduces solubility unless hydration enthalpy exceeds lattice enthalpy.",
    "difficulty": "Easy",
    "conceptTested": "Lattice Enthalpy (U) definition"
  },
  {
    "id": "prac-chemioniccovalentbonds-10",
    "question": "In the study of Ionic Bonding, Lattice Enthalpy & Fajan's Rules, what is the exact definition and significance of \"Born-Haber Cycle\"?",
    "options": [
      "A closed thermodynamic cycle applying Hess's Law of Constant Heat Summation to calculate lattice enthalpy from measurable enthalpies of sublimation, dissociation, ionization, electron gain, and formation.",
      "An unrelated metabolic process in plants",
      "A secondary non-functional structural component",
      "An experimental artifact observed only in vitro"
    ],
    "correctAnswer": 0,
    "explanation": "A closed thermodynamic cycle applying Hess's Law of Constant Heat Summation to calculate lattice enthalpy from measurable enthalpies of sublimation, dissociation, ionization, electron gain, and formation.. Frequently tested in NEET numericals: Δ_f H° = Δ_sub H + ½ Δ_diss H + IE + EA + Δ_lat H.",
    "difficulty": "Easy",
    "conceptTested": "Born-Haber Cycle definition"
  }
],
  pyqs: [
    {
      id: 'pyq-icb-2022',
      year: 2022,
      exam: 'NEET UG 2022',
      question: 'Among the following, the compound with the HIGHEST covalent character is:',
      options: [
        'LiI',
        'LiF',
        'LiCl',
        'LiBr'
      ],
      correctAnswer: 0,
      explanation: 'According to Fajan\'s rules, for a common cation (Li⁺), covalent character increases with increasing size of the anion (polarisability). Iodine anion (I⁻) is largest in size, most easily polarised by Li⁺, making LiI the most covalent among lithium halides.',
      difficulty: 'Easy',
      conceptTested: 'Fajan\'s rules anion size effect',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.5.1',
      verified: true
    },
    {
      id: 'pyq-icb-2019',
      year: 2019,
      exam: 'NEET UG 2019',
      question: 'Which of the following alkali metal chlorides exhibits the LOWEST melting point?',
      options: [
        'LiCl',
        'NaCl',
        'KCl',
        'RbCl'
      ],
      correctAnswer: 0,
      explanation: 'Li⁺ is the smallest alkali metal cation, giving it maximum polarising power. According to Fajan\'s rules, LiCl has maximum covalent character among Group 1 chlorides, resulting in the lowest melting point (605°C vs NaCl 801°C).',
      difficulty: 'Medium',
      conceptTested: 'Melting point trend from covalent character',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.5.1',
      verified: true
    },
    {
      id: 'pyq-icb-2017',
      year: 2017,
      exam: 'NEET UG 2017',
      question: 'The correct order of increasing covalent character among NaCl, MgCl₂, and AlCl₃ is:',
      options: [
        'NaCl < MgCl₂ < AlCl₃',
        'AlCl₃ < MgCl₂ < NaCl',
        'MgCl₂ < NaCl < AlCl₃',
        'NaCl < AlCl₃ < MgCl₂'
      ],
      correctAnswer: 0,
      explanation: 'As cation charge increases (Na⁺ < Mg²⁺ < Al³⁺), cation size decreases and charge density increases, raising polarising power. Hence covalent character increases in order: NaCl < MgCl₂ < AlCl₃.',
      difficulty: 'Easy',
      conceptTested: 'Cation charge effect on covalent character',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.5.1',
      verified: true
    },
    {
      id: 'pyq-icb-2015',
      year: 2015,
      exam: 'AIPMT 2015',
      question: 'Which of the following factors does NOT favor the formation of an ionic bond between two atoms?',
      options: [
        'High ionization enthalpy of the metal atom',
        'Low ionization enthalpy of the metal atom',
        'High negative electron gain enthalpy of the non-metal atom',
        'High lattice enthalpy of the crystal lattice'
      ],
      correctAnswer: 0,
      explanation: 'High ionization enthalpy requires large input energy to remove valence electrons from the metal, hindering cation formation and opposing ionic bond formation. Low IE is required.',
      difficulty: 'Easy',
      conceptTested: 'Favorable conditions for ionic bond formation',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.1',
      verified: true
    },
    {
      id: 'pyq-icb-2010',
      year: 2010,
      exam: 'AIPMT 2010',
      question: 'Lattice enthalpy of an ionic crystal solid depends on:',
      options: [
        'Both charge and size of the constituent ions',
        'Size of the ions only',
        'Charge on the ions only',
        'Packing fraction of crystal lattice only'
      ],
      correctAnswer: 0,
      explanation: 'Lattice enthalpy U ∝ |z⁺ × z⁻| / (r⁺ + r⁻). Therefore, it depends directly on both ionic charges and ionic radii.',
      difficulty: 'Easy',
      conceptTested: 'Factors influencing lattice enthalpy',
      ncertReference: 'Class 11 Chemistry, Chapter 4, Section 4.1.5',
      verified: true
    }
  ],

  neetMarksPotential: {
    topicName: "Ionic Bonding, Lattice Enthalpy & Fajan's Rules",
    confidenceLabel: 'HIGH',
    confidenceText: 'Verified against 5 official NEET UG / AIPMT paper appearances (5 direct questions).',
    totalAnalyzedPapers: 15,
    papersWithDirectPyqs: 5,
    totalDirectPyqs: 5,
    totalHistoricalMarks: 20,
    averageDirectPyqsPerPaper: 0.33,
    maxDirectPyqsInSinglePaper: 1,
    minDirectPyqsInSinglePaper: 0,
    minDirectMarks: 0,
    maxDirectMarks: 4,
    avgDirectMarksPerPaper: 1.33,
    typicalContributionMarks: 4,
    historicalMarksRangeText: '0 – 4 Marks per paper',
    yearWiseBreakdown: [
      { year: 2022, exam: 'NEET UG 2022', directPyqCount: 1, marks: 4, questionType: 'Highest covalent character halide (LiI)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2019, exam: 'NEET UG 2019', directPyqCount: 1, marks: 4, questionType: 'Lowest melting point alkali chloride (LiCl)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2017, exam: 'NEET UG 2017', directPyqCount: 1, marks: 4, questionType: 'Increasing covalent character order (NaCl < MgCl2 < AlCl3)', classification: 'Direct', verificationStatus: 'Verified (NEET UG)' },
      { year: 2015, exam: 'AIPMT 2015', directPyqCount: 1, marks: 4, questionType: 'Unfavorable ionic bond condition (High IE)', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' },
      { year: 2010, exam: 'AIPMT 2010', directPyqCount: 1, marks: 4, questionType: 'Lattice enthalpy dependence on charge and size', classification: 'Direct', verificationStatus: 'Verified (AIPMT)' }
    ],
    sourceInfo: {
      dataSource: 'Official NEET UG / AIPMT Archives & NCERT Class 11 Chemistry',
      analysisPeriod: '2009 – 2024 (15 Verified Papers)',
      directPyqsAnalyzedCount: 5,
      classificationMethod: 'Strict topic-level classification; chapter-level weightage was not used.',
      disclaimer: 'Historical frequency is not a prediction of the next NEET paper.'
    }
  }
};
