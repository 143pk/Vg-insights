export const AMINES_DIAGRAMS = {
  amineStructureAndHybridisation: `<svg viewBox="0 0 850 420" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <linearGradient id="nGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="resGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ec4899" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.05"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
    <marker id="arr-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="arr-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#e11d48"/>
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width="850" height="420" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Top Title Banner -->
  <rect x="20" y="16" width="810" height="44" rx="10" fill="#1e293b"/>
  <text x="425" y="44" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    AMINE GEOMETRY, HYBRIDISATION & ANILINE RESONANCE DELOCALISATION
  </text>

  <!-- Panel 1: Aliphatic Amine (Trimethylamine) Pyramidal Geometry -->
  <g transform="translate(30, 75)">
    <rect width="380" height="325" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow)"/>
    <rect width="380" height="36" rx="14" fill="url(#nGrad)"/>
    <rect x="0" y="24" width="380" height="12" fill="url(#nGrad)"/>
    <text x="190" y="24" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">
      1. Aliphatic Amine (sp³ Pyramidal Geometry)
    </text>

    <!-- Nitrogen Atom with Lone Pair -->
    <ellipse cx="190" cy="100" rx="26" ry="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
    <circle cx="182" cy="92" r="3" fill="#1d4ed8"/>
    <circle cx="198" cy="92" r="3" fill="#1d4ed8"/>
    <text x="190" y="104" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Lone Pair</text>

    <circle cx="190" cy="140" r="18" fill="#2563eb"/>
    <text x="190" y="146" fill="#ffffff" font-size="14" font-weight="extrabold" text-anchor="middle">N</text>

    <!-- 3 Alkyl / H Bonds in Pyramid -->
    <!-- Left Bond -->
    <line x1="178" y1="150" x2="120" y2="200" stroke="#475569" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="90" y="195" width="55" height="26" rx="6" fill="#f1f5f9" stroke="#94a3b8"/>
    <text x="117" y="212" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">R / CH₃</text>

    <!-- Middle Bond (Wedge) -->
    <polygon points="190,158 185,205 195,205" fill="#334155"/>
    <rect x="162" y="205" width="55" height="26" rx="6" fill="#f1f5f9" stroke="#94a3b8"/>
    <text x="190" y="222" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">R / H</text>

    <!-- Right Bond (Dash) -->
    <line x1="202" y1="150" x2="260" y2="200" stroke="#475569" stroke-width="3" stroke-dasharray="4,3"/>
    <rect x="235" y="195" width="55" height="26" rx="6" fill="#f1f5f9" stroke="#94a3b8"/>
    <text x="262" y="212" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">R / CH₃</text>

    <!-- Bond Angle Arc -->
    <path d="M 145 180 Q 190 170 235 180" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <text x="190" y="180" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">C–N–C: 108°</text>

    <!-- Key Concept Bullets -->
    <rect x="15" y="244" width="350" height="68" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="25" y="262" fill="#1e40af" font-size="10.5" font-weight="bold">• Nitrogen Hybridisation: sp³ (3 σ-bonds + 1 lone pair)</text>
    <text x="25" y="278" fill="#1e40af" font-size="10.5" font-weight="bold">• Geometry: Trigonal Pyramidal (Distorted tetrahedron)</text>
    <text x="25" y="294" fill="#1e40af" font-size="10.5" font-weight="bold">• Lone pair localized on N ⟶ High Lewis/Brønsted basicity</text>
    <text x="25" y="306" fill="#047857" font-size="9.5" font-weight="semibold">• Undergoes rapid Pyramidal Inversion (ΔG‡ ≈ 25 kJ/mol)</text>
  </g>

  <!-- Panel 2: Aromatic Amine (Aniline) Resonance Delocalisation -->
  <g transform="translate(440, 75)">
    <rect width="380" height="325" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow)"/>
    <rect width="380" height="36" rx="14" fill="url(#resGrad)"/>
    <rect x="0" y="24" width="380" height="12" fill="url(#resGrad)"/>
    <text x="190" y="24" fill="#be123c" font-size="13" font-weight="bold" text-anchor="middle">
      2. Aromatic Amine: Aniline Resonance Delocalisation
    </text>

    <!-- Mini Resonance Structures Representation -->
    <!-- Structure I -->
    <g transform="translate(30, 50)">
      <!-- Benzene Ring -->
      <polygon points="40,25 65,40 65,70 40,85 15,70 15,40" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
      <circle cx="40" cy="55" r="14" fill="none" stroke="#e11d48" stroke-width="1.2" stroke-dasharray="3,2"/>
      <line x1="40" y1="25" x2="40" y2="8" stroke="#334155" stroke-width="2"/>
      <text x="40" y="5" fill="#be123c" font-size="11" font-weight="extrabold" text-anchor="middle">–N̈H₂</text>
      <text x="40" y="100" fill="#64748b" font-size="10" font-weight="bold" text-anchor="middle">(I)</text>
    </g>

    <!-- Res Arrow 1 -->
    <path d="M 120 100 L 140 100" stroke="#e11d48" stroke-width="1.8" marker-end="url(#arr-pink)"/>

    <!-- Structure II (Ortho -) -->
    <g transform="translate(150, 50)">
      <polygon points="40,25 65,40 65,70 40,85 15,70 15,40" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="40" y1="25" x2="40" y2="8" stroke="#be123c" stroke-width="3"/>
      <text x="40" y="5" fill="#be123c" font-size="11" font-weight="extrabold" text-anchor="middle">=N⁺H₂</text>
      <!-- Ortho Negative Charge -->
      <circle cx="65" cy="40" r="8" fill="#fecdd3" stroke="#e11d48" stroke-width="1"/>
      <text x="65" y="43" fill="#be123c" font-size="9" font-weight="extrabold" text-anchor="middle">δ⁻</text>
      <text x="40" y="100" fill="#64748b" font-size="10" font-weight="bold" text-anchor="middle">(II - Ortho)</text>
    </g>

    <!-- Res Arrow 2 -->
    <path d="M 240 100 L 260 100" stroke="#e11d48" stroke-width="1.8" marker-end="url(#arr-pink)"/>

    <!-- Structure III (Para -) -->
    <g transform="translate(270, 50)">
      <polygon points="40,25 65,40 65,70 40,85 15,70 15,40" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
      <line x1="40" y1="25" x2="40" y2="8" stroke="#be123c" stroke-width="3"/>
      <text x="40" y="5" fill="#be123c" font-size="11" font-weight="extrabold" text-anchor="middle">=N⁺H₂</text>
      <!-- Para Negative Charge -->
      <circle cx="40" cy="85" r="8" fill="#fecdd3" stroke="#e11d48" stroke-width="1"/>
      <text x="40" y="88" fill="#be123c" font-size="9" font-weight="extrabold" text-anchor="middle">δ⁻</text>
      <text x="40" y="100" fill="#64748b" font-size="10" font-weight="bold" text-anchor="middle">(III - Para)</text>
    </g>

    <!-- Summary Box -->
    <rect x="15" y="170" width="350" height="142" rx="8" fill="#fff1f2" stroke="#fecdd3"/>
    <text x="25" y="190" fill="#9f1239" font-size="11" font-weight="bold">Why Aniline is ~10⁶ times WEAKER base than Alkylamines:</text>
    <text x="25" y="208" fill="#881337" font-size="10">• 1. +R Resonance: –NH₂ lone pair delocalises into benzene ring</text>
    <text x="25" y="224" fill="#881337" font-size="10">• 2. Partial double bond (C–N bond length = 1.37 Å vs 1.47 Å)</text>
    <text x="25" y="240" fill="#881337" font-size="10">• 3. Electron density on N drops; protonation is unfavourable</text>
    <text x="25" y="256" fill="#881337" font-size="10">• 4. Anilinium ion (C₆H₅NH₃⁺) has only 2 resonance structures,</text>
    <text x="35" y="270" fill="#881337" font-size="10">whereas unprotonated Aniline has 5 canonical forms!</text>
    <text x="25" y="296" fill="#047857" font-size="10.5" font-weight="extrabold">🚨 NEET Key: Aliphatic Amines >> NH₃ > Aniline (pKb ≈ 9.4)</text>
  </g>
</svg>`,

  aminesBasicitySolvationAndInductive: `<svg viewBox="0 0 850 430" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <linearGradient id="orderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.05"/>
    </linearGradient>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="850" height="430" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <rect x="20" y="16" width="810" height="44" rx="10" fill="#065f46"/>
  <text x="425" y="44" fill="#ecfdf5" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    AMINES BASICITY: GAS PHASE VS AQUEOUS PHASE INTERPLAY
  </text>

  <!-- Left: Gas Phase (Pure Inductive +I) -->
  <g transform="translate(30, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow2)"/>
    <rect width="380" height="36" rx="14" fill="#f1f5f9"/>
    <text x="190" y="24" fill="#334155" font-size="13" font-weight="bold" text-anchor="middle">
      1. Gas Phase / Non-Polar Solvent (Pure +I Effect)
    </text>

    <!-- Visual Bars -->
    <g transform="translate(20, 50)">
      <!-- 3° Amine -->
      <rect x="0" y="0" width="340" height="36" rx="8" fill="#dcfce7" stroke="#86efac"/>
      <text x="15" y="23" fill="#15803d" font-size="12" font-weight="bold">3° Amine (R₃N)</text>
      <text x="325" y="23" fill="#166534" font-size="11" font-weight="extrabold" text-anchor="end">3 × (+I) Donors — Strongest Base</text>

      <!-- 2° Amine -->
      <rect x="0" y="45" width="280" height="36" rx="8" fill="#e0f2fe" stroke="#7dd3fc"/>
      <text x="15" y="68" fill="#0369a1" font-size="12" font-weight="bold">2° Amine (R₂NH)</text>
      <text x="265" y="68" fill="#075985" font-size="11" font-weight="extrabold" text-anchor="end">2 × (+I) Donors</text>

      <!-- 1° Amine -->
      <rect x="0" y="90" width="220" height="36" rx="8" fill="#fef3c7" stroke="#fde68a"/>
      <text x="15" y="113" fill="#b45309" font-size="12" font-weight="bold">1° Amine (RNH₂)</text>
      <text x="205" y="113" fill="#92400e" font-size="11" font-weight="extrabold" text-anchor="end">1 × (+I) Donor</text>

      <!-- Ammonia -->
      <rect x="0" y="135" width="150" height="36" rx="8" fill="#fee2e2" stroke="#fca5a5"/>
      <text x="15" y="158" fill="#b91c1c" font-size="12" font-weight="bold">Ammonia (NH₃)</text>
      <text x="135" y="158" fill="#991b1b" font-size="11" font-weight="extrabold" text-anchor="end">0 (+I)</text>
    </g>

    <!-- Gas Phase Order Banner -->
    <rect x="15" y="240" width="350" height="75" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="190" y="260" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Gas Phase Basicity Order:</text>
    <text x="190" y="282" fill="#2563eb" font-size="14" font-weight="extrabold" text-anchor="middle">3° > 2° > 1° > NH₃</text>
    <text x="190" y="302" fill="#64748b" font-size="10" font-weight="semibold" text-anchor="middle">Governed entirely by +I inductive electron enrichment on N</text>
  </g>

  <!-- Right: Aqueous Phase (Interplay of +I, Solvation & Steric) -->
  <g transform="translate(440, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow2)"/>
    <rect width="380" height="36" rx="14" fill="url(#orderGrad)"/>
    <text x="190" y="24" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">
      2. Aqueous Phase (+I, Hydration & Sterics Interplay)
    </text>

    <!-- 3 Factors Grid -->
    <g transform="translate(15, 48)">
      <rect width="350" height="66" rx="8" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="10" y="18" fill="#047857" font-size="10.5" font-weight="bold">Three Competing Forces in Water:</text>
      <text x="10" y="34" fill="#065f46" font-size="10">1. Inductive effect (+I): 3° > 2° > 1° > NH₃</text>
      <text x="10" y="48" fill="#065f46" font-size="10">2. Solvation / H-bonding: 1° (3 H-bonds) > 2° (2 H-bonds) > 3° (1 H-bond)</text>
      <text x="10" y="60" fill="#065f46" font-size="10">3. Steric hindrance: 1° (minimal) < 2° < 3° (maximum crowding)</text>
    </g>

    <!-- High-Yield NEET Orders Box -->
    <g transform="translate(15, 124)">
      <!-- Methyl Case -->
      <rect width="350" height="92" rx="10" fill="#eff6ff" stroke="#93c5fd"/>
      <text x="15" y="20" fill="#1e40af" font-size="12" font-weight="bold">A. Methyl Substituted (–CH₃): Rule "213"</text>
      <text x="175" y="45" fill="#1d4ed8" font-size="13.5" font-weight="extrabold" text-anchor="middle">
        (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃
      </text>
      <text x="175" y="65" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">
        2° (213) > 1° > 3° > Ammonia
      </text>
      <text x="15" y="82" fill="#475569" font-size="9.5">Small methyl group allows high hydration stability to 1° and 2° cations.</text>
    </g>

    <g transform="translate(15, 224)">
      <!-- Ethyl Case -->
      <rect width="350" height="92" rx="10" fill="#fef3c7" stroke="#fcd34d"/>
      <text x="15" y="20" fill="#92400e" font-size="12" font-weight="bold">B. Ethyl Substituted (–C₂H₅): Rule "231"</text>
      <text x="175" y="45" fill="#b45309" font-size="13.5" font-weight="extrabold" text-anchor="middle">
        (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃
      </text>
      <text x="175" y="65" fill="#d97706" font-size="11" font-weight="bold" text-anchor="middle">
        2° (231) > 3° > 1° > Ammonia
      </text>
      <text x="15" y="82" fill="#475569" font-size="9.5">Bulky ethyl groups boost inductive effect; 3° edges over 1° despite sterics.</text>
    </g>
  </g>
</svg>`,

  amineSynthesisMechanisms: `<svg viewBox="0 0 850 430" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
    <marker id="arr-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#dc2626"/>
    </marker>
    <marker id="arr-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#7c3aed"/>
    </marker>
  </defs>

  <rect width="850" height="430" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <rect x="20" y="16" width="810" height="44" rx="10" fill="#4c1d95"/>
  <text x="425" y="44" fill="#f5f3ff" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    CORE SYNTHESIS METHODS: GABRIEL PHTHALIMIDE & HOFMANN BROMAMIDE
  </text>

  <!-- Panel 1: Gabriel Phthalimide Synthesis -->
  <g transform="translate(30, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow3)"/>
    <rect width="380" height="36" rx="14" fill="#ede9fe"/>
    <text x="190" y="24" fill="#6d28d9" font-size="13" font-weight="bold" text-anchor="middle">
      1. Gabriel Phthalimide Synthesis (Pure 1° Aliphatic)
    </text>

    <!-- Step Flow -->
    <g transform="translate(20, 50)">
      <!-- Phthalimide -->
      <rect x="0" y="0" width="140" height="45" rx="8" fill="#f5f3ff" stroke="#c4b5fd"/>
      <text x="70" y="20" fill="#5b21b6" font-size="11" font-weight="bold" text-anchor="middle">Phthalimide</text>
      <text x="70" y="36" fill="#6b7280" font-size="9.5" text-anchor="middle">(Acidic N–H)</text>

      <!-- Arrow 1 -->
      <path d="M 145 22 L 185 22" stroke="#7c3aed" stroke-width="2" marker-end="url(#arr-purple)"/>
      <text x="165" y="14" fill="#7c3aed" font-size="9" font-weight="bold" text-anchor="middle">+ KOH</text>

      <!-- K-Phthalimide -->
      <rect x="195" y="0" width="140" height="45" rx="8" fill="#f5f3ff" stroke="#c4b5fd"/>
      <text x="265" y="20" fill="#5b21b6" font-size="11" font-weight="bold" text-anchor="middle">K⁺ Phthalimide⁻</text>
      <text x="265" y="36" fill="#6b7280" font-size="9.5" text-anchor="middle">(Nucleophile)</text>

      <!-- Arrow Down -->
      <path d="M 265 50 L 265 80" stroke="#7c3aed" stroke-width="2" marker-end="url(#arr-purple)"/>
      <text x="305" y="68" fill="#7c3aed" font-size="9.5" font-weight="bold">+ R–X (SN2)</text>

      <!-- N-Alkylphthalimide -->
      <rect x="195" y="85" width="140" height="45" rx="8" fill="#f5f3ff" stroke="#c4b5fd"/>
      <text x="265" y="105" fill="#5b21b6" font-size="11" font-weight="bold" text-anchor="middle">N-Alkylphthalimide</text>
      <text x="265" y="121" fill="#6b7280" font-size="9.5" text-anchor="middle">(C–N bond formed)</text>

      <!-- Arrow Left -->
      <path d="M 190 107 L 150 107" stroke="#7c3aed" stroke-width="2" marker-end="url(#arr-purple)"/>
      <text x="170" y="98" fill="#7c3aed" font-size="9" font-weight="bold" text-anchor="middle">aq. NaOH</text>

      <!-- Final Product -->
      <rect x="0" y="85" width="140" height="52" rx="8" fill="#dcfce7" stroke="#86efac"/>
      <text x="70" y="106" fill="#166534" font-size="12" font-weight="extrabold" text-anchor="middle">Pure 1° Amine</text>
      <text x="70" y="124" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">R–NH₂</text>
    </g>

    <!-- Gabriel Limitations Box -->
    <rect x="15" y="200" width="350" height="118" rx="8" fill="#fef2f2" stroke="#fecaca"/>
    <text x="25" y="220" fill="#991b1b" font-size="11" font-weight="bold">🚨 High-Yield NEET Traps & Limitations:</text>
    <text x="25" y="238" fill="#7f1d1d" font-size="10">• 1. Prepares PURE 1° aliphatic amines (no 2°, 3° contamination).</text>
    <text x="25" y="254" fill="#7f1d1d" font-size="10">• 2. Aromatic 1° amines (Aniline) CANNOT be prepared by this method</text>
    <text x="35" y="268" fill="#7f1d1d" font-size="10">because aryl halides (Ar–X) do NOT undergo SN2 substitution!</text>
    <text x="25" y="286" fill="#7f1d1d" font-size="10">• 3. 3° alkyl halides fail (undergo E2 elimination instead of SN2).</text>
    <text x="25" y="304" fill="#047857" font-size="10.5" font-weight="extrabold">✓ By-product: Sodium phthalate (hydrolysed easily)</text>
  </g>

  <!-- Panel 2: Hofmann Bromamide Degradation -->
  <g transform="translate(440, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow3)"/>
    <rect width="380" height="36" rx="14" fill="#fee2e2"/>
    <text x="190" y="24" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle">
      2. Hofmann Bromamide Degradation (Step-Down)
    </text>

    <!-- Equation Box -->
    <rect x="15" y="48" width="350" height="72" rx="10" fill="#fff1f2" stroke="#fecdd3"/>
    <text x="175" y="70" fill="#be123c" font-size="12.5" font-weight="extrabold" text-anchor="middle">
      R–CONH₂ + Br₂ + 4 NaOH ⟶
    </text>
    <text x="175" y="92" fill="#be123c" font-size="13" font-weight="extrabold" text-anchor="middle">
      R–NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O
    </text>
    <text x="175" y="110" fill="#881337" font-size="10" font-weight="bold" text-anchor="middle">
      (Primary Amine with ONE LESS Carbon atom than parent amide!)
    </text>

    <!-- Key Mechanism Sequence -->
    <g transform="translate(15, 128)">
      <rect width="350" height="66" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
      <text x="10" y="18" fill="#334155" font-size="10.5" font-weight="bold">Mechanism Intermediates Flow:</text>
      <text x="10" y="34" fill="#475569" font-size="10">R–CONH₂ ⟶ N-bromoamide [RCONHBr] ⟶ Nitrene [RCON:]</text>
      <text x="10" y="48" fill="#475569" font-size="10">⟶ Alkyl isocyanate [R–N=C=O] ⟶ (hydrolysis) ⟶ R–NH₂</text>
      <text x="10" y="60" fill="#047857" font-size="9.5" font-weight="bold">★ Migrating group 'R' migrates with RETENTION of configuration!</text>
    </g>

    <!-- Memory Box -->
    <rect x="15" y="200" width="350" height="118" rx="8" fill="#fef3c7" stroke="#fde68a"/>
    <text x="25" y="220" fill="#92400e" font-size="11" font-weight="bold">🔥 NEET Must-Remember Checklist:</text>
    <text x="25" y="238" fill="#78350f" font-size="10">• 1. Stoichiometry: 1 mole Amide + 1 mole Br₂ + 4 moles NaOH/KOH.</text>
    <text x="25" y="254" fill="#78350f" font-size="10">• 2. Degradation / Step-down: Carbonyl carbon is lost as Na₂CO₃.</text>
    <text x="25" y="270" fill="#78350f" font-size="10">• 3. Ethanamide (CH₃CONH₂) yields Methanamine (CH₃NH₂).</text>
    <text x="25" y="286" fill="#78350f" font-size="10">• 4. Benzamide (C₆H₅CONH₂) yields Aniline (C₆H₅NH₂).</text>
    <text x="25" y="304" fill="#b91c1c" font-size="10.5" font-weight="extrabold">🚨 Does NOT work for 2° or 3° amides!</text>
  </g>
</svg>`,

  amineDistinctionTests: `<svg viewBox="0 0 850 430" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="850" height="430" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <rect x="20" y="16" width="810" height="44" rx="10" fill="#0f766e"/>
  <text x="425" y="44" fill="#ccfbf1" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    DIAGNOSTIC DISTINCTION TESTS: CARBYLAMINE TEST & HINSBERG REAGENT
  </text>

  <!-- Left: Carbylamine Test -->
  <g transform="translate(30, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow4)"/>
    <rect width="380" height="36" rx="14" fill="#ccfbf1"/>
    <text x="190" y="24" fill="#0f766e" font-size="13" font-weight="bold" text-anchor="middle">
      1. Carbylamine (Isocyanide) Test
    </text>

    <!-- Equation Box -->
    <rect x="15" y="48" width="350" height="76" rx="10" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="175" y="70" fill="#15803d" font-size="12" font-weight="extrabold" text-anchor="middle">
      R–NH₂ + CHCl₃ + 3 KOH (alc.) xrightarrow{Δ}
    </text>
    <text x="175" y="92" fill="#15803d" font-size="13" font-weight="extrabold" text-anchor="middle">
      R–NC (Carbylamine) + 3 KCl + 3 H₂O
    </text>
    <text x="175" y="112" fill="#dc2626" font-size="10.5" font-weight="extrabold" text-anchor="middle">
      ★ Extremely Foul / Offensive Smell!
    </text>

    <!-- Matrix of Response -->
    <g transform="translate(15, 134)">
      <!-- 1° Amine -->
      <rect x="0" y="0" width="350" height="36" rx="6" fill="#dcfce7" stroke="#86efac"/>
      <text x="15" y="22" fill="#166534" font-size="11" font-weight="bold">1° Amines (Aliphatic & Aromatic)</text>
      <text x="335" y="22" fill="#15803d" font-size="11" font-weight="extrabold" text-anchor="end">POSITIVE (Foul R–NC / Ar–NC)</text>

      <!-- 2° Amine -->
      <rect x="0" y="42" width="350" height="36" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
      <text x="15" y="64" fill="#991b1b" font-size="11" font-weight="bold">2° Amines (R₂NH / ArNHR)</text>
      <text x="335" y="64" fill="#b91c1c" font-size="11" font-weight="extrabold" text-anchor="end">NEGATIVE (No Reaction)</text>

      <!-- 3° Amine -->
      <rect x="0" y="84" width="350" height="36" rx="6" fill="#fee2e2" stroke="#fca5a5"/>
      <text x="15" y="106" fill="#991b1b" font-size="11" font-weight="bold">3° Amines (R₃N / ArNR₂)</text>
      <text x="335" y="106" fill="#b91c1c" font-size="11" font-weight="extrabold" text-anchor="end">NEGATIVE (No Reaction)</text>
    </g>

    <!-- Key Bullet -->
    <rect x="15" y="262" width="350" height="56" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="25" y="282" fill="#1e40af" font-size="10.5" font-weight="bold">• Reactive intermediate: Dichlorocarbene (:CCl₂)</text>
    <text x="25" y="298" fill="#1e40af" font-size="10.5" font-weight="bold">• Distinguishes 1° amines from 2° and 3° amines!</text>
  </g>

  <!-- Right: Hinsberg Test -->
  <g transform="translate(440, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow4)"/>
    <rect width="380" height="36" rx="14" fill="#fef3c7"/>
    <text x="190" y="24" fill="#92400e" font-size="13" font-weight="bold" text-anchor="middle">
      2. Hinsberg Test (C₆H₅SO₂Cl Distinction)
    </text>

    <!-- 1°, 2°, 3° Behavior Table -->
    <g transform="translate(15, 48)">
      <!-- 1° Amine -->
      <rect x="0" y="0" width="350" height="74" rx="8" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="12" y="18" fill="#065f46" font-size="11" font-weight="bold">A. Primary Amine (1° R–NH₂):</text>
      <text x="12" y="34" fill="#047857" font-size="10">Forms N-alkylbenzenesulphonamide (C₆H₅SO₂NHR).</text>
      <text x="12" y="48" fill="#047857" font-size="10">Contains acidic hydrogen on N atom.</text>
      <text x="12" y="64" fill="#065f46" font-size="10.5" font-weight="extrabold">✓ SOLUBLE in aqueous alkali (KOH / NaOH)</text>

      <!-- 2° Amine -->
      <rect x="0" y="80" width="350" height="74" rx="8" fill="#fefce8" stroke="#fef08a"/>
      <text x="12" y="98" fill="#854d0e" font-size="11" font-weight="bold">B. Secondary Amine (2° R₂NH):</text>
      <text x="12" y="114" fill="#713f12" font-size="10">Forms N,N-dialkylbenzenesulphonamide (C₆H₅SO₂NR₂).</text>
      <text x="12" y="128" fill="#713f12" font-size="10">NO acidic hydrogen on N atom.</text>
      <text x="12" y="144" fill="#854d0e" font-size="10.5" font-weight="extrabold">✗ INSOLUBLE in aqueous alkali (precipitates out)</text>

      <!-- 3° Amine -->
      <rect x="0" y="160" width="350" height="74" rx="8" fill="#fef2f2" stroke="#fecaca"/>
      <text x="12" y="178" fill="#991b1b" font-size="11" font-weight="bold">C. Tertiary Amine (3° R₃N):</text>
      <text x="12" y="194" fill="#7f1d1d" font-size="10">Has NO replaceable H on N atom.</text>
      <text x="12" y="208" fill="#7f1d1d" font-size="10">DOES NOT REACT with benzenesulphonamide.</text>
      <text x="12" y="224" fill="#991b1b" font-size="10.5" font-weight="extrabold">★ Remains unreacted, dissolves in mineral acid (HCl)</text>
    </g>

    <!-- Quick Note -->
    <rect x="15" y="290" width="350" height="28" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="190" y="309" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">
      Modern reagent: p-Toluenesulphonyl chloride (Tosyl chloride)
    </text>
  </g>
</svg>`,

  diazotisationAndDiazoniumStability: `<svg viewBox="0 0 850 430" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <filter id="shadow5" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
    <marker id="arr-diaz" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#0284c7"/>
    </marker>
  </defs>

  <rect width="850" height="430" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <rect x="20" y="16" width="810" height="44" rx="10" fill="#0369a1"/>
  <text x="425" y="44" fill="#f0f9ff" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    DIAZOTISATION REACTION & TEMPERATURE-DEPENDENT STABILITY
  </text>

  <!-- Left: Diazotisation Reaction & Electrophile Generation -->
  <g transform="translate(30, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow5)"/>
    <rect width="380" height="36" rx="14" fill="#e0f2fe"/>
    <text x="190" y="24" fill="#0369a1" font-size="13" font-weight="bold" text-anchor="middle">
      1. Diazotisation Reaction (0 – 5 °C / 273 – 278 K)
    </text>

    <!-- In Situ Generation Box -->
    <rect x="15" y="48" width="350" height="65" rx="8" fill="#f0f9ff" stroke="#bae6fd"/>
    <text x="25" y="68" fill="#0284c7" font-size="11" font-weight="bold">In-situ Generation of Nitrous Acid (HNO₂):</text>
    <text x="25" y="86" fill="#0369a1" font-size="11.5" font-weight="extrabold">NaNO₂ + HCl ⟶ HNO₂ + NaCl</text>
    <text x="25" y="102" fill="#475569" font-size="10">Active Electrophile: Nitrosonium Ion (N⁺=O)</text>

    <!-- Primary Reaction Box -->
    <rect x="15" y="122" width="350" height="85" rx="10" fill="#ecfdf5" stroke="#6ee7b7"/>
    <text x="175" y="144" fill="#047857" font-size="12" font-weight="extrabold" text-anchor="middle">
      C₆H₅NH₂ + NaNO₂ + 2 HCl xrightarrow{0-5^\\circ\\text{C}}
    </text>
    <text x="175" y="168" fill="#065f46" font-size="13" font-weight="extrabold" text-anchor="middle">
      C₆H₅N₂⁺Cl⁻ (BDC) + NaCl + 2 H₂O
    </text>
    <text x="175" y="192" fill="#047857" font-size="10.5" font-weight="bold" text-anchor="middle">
      Benzene Diazonium Chloride (Prepared in Ice-Cold Water)
    </text>

    <!-- Temperature Sensitivity Box -->
    <rect x="15" y="218" width="350" height="100" rx="8" fill="#fef2f2" stroke="#fecaca"/>
    <text x="25" y="238" fill="#991b1b" font-size="11" font-weight="bold">🚨 Strict Temperature Requirement (0 – 5 °C):</text>
    <text x="25" y="256" fill="#7f1d1d" font-size="10">• At T > 5 °C (warm): C₆H₅N₂⁺Cl⁻ rapidly hydrolyses with water</text>
    <text x="35" y="270" fill="#991b1b" font-size="10.5" font-weight="extrabold">C₆H₅N₂⁺Cl⁻ + H₂O ⟶ C₆H₅OH (Phenol) + N₂↑ + HCl</text>
    <text x="25" y="290" fill="#7f1d1d" font-size="10">• Always prepared fresh and used immediately in solution.</text>
    <text x="25" y="306" fill="#7f1d1d" font-size="10">• Dry diazonium chloride crystals are dangerously explosive!</text>
  </g>

  <!-- Right: Aromatic vs Aliphatic Diazonium Stability -->
  <g transform="translate(440, 75)">
    <rect width="380" height="335" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow5)"/>
    <rect width="380" height="36" rx="14" fill="#fdf4ff"/>
    <text x="190" y="24" fill="#86198f" font-size="13" font-weight="bold" text-anchor="middle">
      2. Aromatic vs Aliphatic Diazonium Ion Stability
    </text>

    <!-- Aliphatic Diazonium -->
    <g transform="translate(15, 48)">
      <rect width="350" height="85" rx="8" fill="#fff1f2" stroke="#fecdd3"/>
      <text x="15" y="20" fill="#9f1239" font-size="11" font-weight="bold">A. Aliphatic Diazonium Ion (R–N₂⁺): Highly Unstable</text>
      <text x="15" y="38" fill="#be123c" font-size="10.5" font-weight="extrabold">R–NH₂ + HNO₂ ⟶ [R–N₂⁺Cl⁻] ⟶ R⁺ + N₂↑</text>
      <text x="15" y="56" fill="#881337" font-size="9.5">Instantly releases N₂ gas quantitatively; carbocation (R⁺) forms:</text>
      <text x="15" y="72" fill="#881337" font-size="9.5">Alcohol (R–OH) + Alkene + Alkyl chloride mixture.</text>
    </g>

    <!-- Aromatic Diazonium -->
    <g transform="translate(15, 142)">
      <rect width="350" height="95" rx="8" fill="#f5f3ff" stroke="#ddd6fe"/>
      <text x="15" y="20" fill="#5b21b6" font-size="11" font-weight="bold">B. Aromatic Diazonium Ion (Ar–N₂⁺): Resonantly Stabilised</text>
      <text x="15" y="38" fill="#6d28d9" font-size="10">• Positive charge on –N≡N is delocalised over benzene ring.</text>
      <text x="15" y="54" fill="#6d28d9" font-size="10">• Stable in cold aqueous solution (0 – 5 °C / 273 – 278 K).</text>
      <text x="15" y="70" fill="#6d28d9" font-size="10">• High synthetic utility as master precursor for haloarenes,</text>
      <text x="25" y="84" fill="#6d28d9" font-size="10">phenols, nitriles, and azo dyes.</text>
    </g>

    <!-- Salt Stability Note -->
    <rect x="15" y="248" width="350" height="70" rx="8" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="25" y="268" fill="#065f46" font-size="11" font-weight="bold">Diazonium Fluoroborate (Ar–N₂⁺BF₄⁻):</text>
    <text x="25" y="286" fill="#047857" font-size="10">• Insoluble in water and remarkably STABLE at room temperature.</text>
    <text x="25" y="302" fill="#047857" font-size="10">• Used in Balz-Schiemann thermal pyrolysis to make Ar–F.</text>
  </g>
</svg>`,

  masterDiazoniumReactionMap: `<svg viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-5xl mx-auto font-sans">
  <defs>
    <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e40af"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <filter id="hubShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#1e3a8a" flood-opacity="0.2"/>
    </filter>
    <marker id="map-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="sand-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#d97706"/>
    </marker>
    <marker id="coup-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#db2777"/>
    </marker>
  </defs>

  <rect width="900" height="560" fill="#f8fafc" rx="16" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Header -->
  <rect x="20" y="14" width="860" height="42" rx="10" fill="#0f172a"/>
  <text x="450" y="40" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    MASTER SYNTHETIC REACTION MAP OF BENZENE DIAZONIUM CHLORIDE (Ar–N₂⁺Cl⁻)
  </text>

  <!-- Starting Precursor: Aniline (Top Left) -->
  <g transform="translate(40, 75)">
    <rect width="180" height="60" rx="10" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
    <text x="90" y="28" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">Aniline (C₆H₅NH₂)</text>
    <text x="90" y="46" fill="#b91c1c" font-size="10" font-weight="semibold" text-anchor="middle">Primary Aromatic Amine</text>
  </g>

  <!-- Diazotisation Arrow -->
  <path d="M 220 105 L 340 105" stroke="#2563eb" stroke-width="2.5" marker-end="url(#map-arr)"/>
  <text x="280" y="94" fill="#1d4ed8" font-size="10.5" font-weight="extrabold" text-anchor="middle">NaNO₂ + HCl</text>
  <text x="280" y="122" fill="#2563eb" font-size="9.5" font-weight="bold" text-anchor="middle">0 – 5 °C (273–278 K)</text>

  <!-- Central Hub: Benzene Diazonium Chloride -->
  <g transform="translate(350, 75)">
    <rect width="210" height="68" rx="12" fill="url(#hubGrad)" filter="url(#hubShadow)"/>
    <text x="105" y="28" fill="#ffffff" font-size="13" font-weight="extrabold" text-anchor="middle">BENZENE DIAZONIUM</text>
    <text x="105" y="46" fill="#93c5fd" font-size="12.5" font-weight="bold" text-anchor="middle">CHLORIDE [Ar–N₂⁺Cl⁻]</text>
    <text x="105" y="60" fill="#dbeafe" font-size="9.5" font-weight="medium" text-anchor="middle">Master Synthetic Intermediate</text>
  </g>

  <!-- BRANCH 1: Sandmeyer Reactions (Top Right) -->
  <g transform="translate(640, 70)">
    <rect width="220" height="110" rx="10" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.2"/>
    <text x="110" y="20" fill="#92400e" font-size="11.5" font-weight="extrabold" text-anchor="middle">1. Sandmeyer Reactions [Cu(I) Salts]</text>
    <text x="15" y="42" fill="#78350f" font-size="10">• Cu₂Cl₂ / HCl ⟶ <tspan font-weight="bold">Ar–Cl (Chlorobenzene)</tspan></text>
    <text x="15" y="64" fill="#78350f" font-size="10">• Cu₂Br₂ / HBr ⟶ <tspan font-weight="bold">Ar–Br (Bromobenzene)</tspan></text>
    <text x="15" y="86" fill="#78350f" font-size="10">• CuCN / KCN ⟶ <tspan font-weight="bold">Ar–CN (Benzonitrile)</tspan></text>
    <text x="110" y="104" fill="#d97706" font-size="9" font-weight="bold" text-anchor="middle">★ Higher yield than Gattermann</text>
  </g>
  <path d="M 560 105 L 635 105" stroke="#d97706" stroke-width="2" marker-end="url(#sand-arr)"/>

  <!-- BRANCH 2: Gattermann Reactions (Right Middle) -->
  <g transform="translate(640, 195)">
    <rect width="220" height="75" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1.2"/>
    <text x="110" y="20" fill="#92400e" font-size="11.5" font-weight="extrabold" text-anchor="middle">2. Gattermann Reactions</text>
    <text x="15" y="42" fill="#78350f" font-size="10">• Cu powder + HCl ⟶ <tspan font-weight="bold">Ar–Cl</tspan></text>
    <text x="15" y="62" fill="#78350f" font-size="10">• Cu powder + HBr ⟶ <tspan font-weight="bold">Ar–Br</tspan></text>
  </g>
  <path d="M 540 143 L 640 215" stroke="#d97706" stroke-width="2" marker-end="url(#sand-arr)"/>

  <!-- BRANCH 3: Replacement by Iodine (KI) -->
  <g transform="translate(40, 200)">
    <rect width="220" height="65" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.2"/>
    <text x="110" y="22" fill="#6d28d9" font-size="11.5" font-weight="extrabold" text-anchor="middle">3. Replacement by Iodine (KI)</text>
    <text x="110" y="42" fill="#5b21b6" font-size="12" font-weight="bold" text-anchor="middle">+ KI (warm) ⟶ Ar–I + KCl + N₂↑</text>
    <text x="110" y="58" fill="#7c3aed" font-size="9.5" text-anchor="middle">★ NO copper catalyst required!</text>
  </g>
  <path d="M 370 143 L 260 215" stroke="#7c3aed" stroke-width="2" marker-end="url(#map-arr)"/>

  <!-- BRANCH 4: Balz-Schiemann Reaction (Fluorobenzene) -->
  <g transform="translate(40, 280)">
    <rect width="220" height="75" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
    <text x="110" y="20" fill="#1e40af" font-size="11.5" font-weight="extrabold" text-anchor="middle">4. Balz-Schiemann (Ar–F)</text>
    <text x="15" y="40" fill="#1e3a8a" font-size="10">• Step 1: + HBF₄ ⟶ Ar–N₂⁺BF₄⁻↓</text>
    <text x="15" y="58" fill="#1e3a8a" font-size="10">• Step 2: Heat (Δ) ⟶ <tspan font-weight="bold">Ar–F + BF₃ + N₂↑</tspan></text>
    <text x="110" y="70" fill="#2563eb" font-size="9" font-weight="bold" text-anchor="middle">Only reliable route to Fluorobenzene</text>
  </g>
  <path d="M 380 143 L 260 300" stroke="#2563eb" stroke-width="2" marker-end="url(#map-arr)"/>

  <!-- BRANCH 5: Hydrolysis to Phenol (Bottom Left) -->
  <g transform="translate(40, 370)">
    <rect width="220" height="75" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.2"/>
    <text x="110" y="20" fill="#065f46" font-size="11.5" font-weight="extrabold" text-anchor="middle">5. Replacement by –OH (Phenol)</text>
    <text x="110" y="42" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">+ H₂O (warm / dil. H₂SO₄, Δ)</text>
    <text x="110" y="60" fill="#065f46" font-size="12" font-weight="extrabold" text-anchor="middle">⟶ C₆H₅OH (Phenol) + N₂↑</text>
  </g>
  <path d="M 410 143 L 260 395" stroke="#059669" stroke-width="2" marker-end="url(#map-arr)"/>

  <!-- BRANCH 6: Reduction / Deamination to Benzene (Bottom Middle) -->
  <g transform="translate(320, 370)">
    <rect width="260" height="85" rx="10" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.2"/>
    <text x="130" y="20" fill="#0f172a" font-size="11.5" font-weight="extrabold" text-anchor="middle">6. Replacement by –H (Reduction to Benzene)</text>
    <text x="15" y="40" fill="#334155" font-size="10">• <tspan font-weight="bold">H₃PO₂ + H₂O</tspan> ⟶ Benzene + H₃PO₃ + HCl + N₂</text>
    <text x="15" y="58" fill="#334155" font-size="10">• <tspan font-weight="bold">CH₃CH₂OH (Ethanol)</tspan> ⟶ Benzene + CH₃CHO + N₂</text>
    <text x="130" y="78" fill="#047857" font-size="9.5" font-weight="bold" text-anchor="middle">Used for Deamination in Multi-step Synthesis</text>
  </g>
  <path d="M 450 143 L 450 365" stroke="#475569" stroke-width="2.5" marker-end="url(#map-arr)"/>

  <!-- BRANCH 7: Azo Coupling Reactions (Bottom Right) -->
  <g transform="translate(600, 300)">
    <rect width="270" height="155" rx="10" fill="#fdf2f8" stroke="#f472b6" stroke-width="1.2"/>
    <text x="135" y="20" fill="#9d174d" font-size="12" font-weight="extrabold" text-anchor="middle">7. Azo Coupling Reactions (Azo Dyes)</text>
    
    <!-- Phenol Coupling -->
    <rect x="10" y="32" width="250" height="52" rx="6" fill="#fff1f2" stroke="#fecdd3"/>
    <text x="15" y="48" fill="#be123c" font-size="10.5" font-weight="bold">+ Phenol (pH 9 – 10, mildly basic):</text>
    <text x="15" y="64" fill="#9f1239" font-size="10">⟶ p-hydroxyazobenzene <tspan fill="#ea580c" font-weight="extrabold">(ORANGE DYE)</tspan></text>

    <!-- Aniline Coupling -->
    <rect x="10" y="90" width="250" height="52" rx="6" fill="#fefce8" stroke="#fef08a"/>
    <text x="15" y="106" fill="#854d0e" font-size="10.5" font-weight="bold">+ Aniline (pH 4 – 5, mildly acidic):</text>
    <text x="15" y="122" fill="#713f12" font-size="10">⟶ p-aminoazobenzene <tspan fill="#ca8a04" font-weight="extrabold">(YELLOW DYE)</tspan></text>
  </g>
  <path d="M 500 143 L 640 295" stroke="#db2777" stroke-width="2.2" marker-end="url(#coup-arr)"/>

  <!-- Bottom Synthesis Banner -->
  <rect x="40" y="480" width="820" height="60" rx="10" fill="#1e293b"/>
  <text x="450" y="504" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">
    🔥 NEET Synthesis Strategy: Nitrobenzene ⟶ Aniline ⟶ Diazonium Salt ⟶ Desired Functional Group
  </text>
  <text x="450" y="524" fill="#cbd5e1" font-size="10.5" text-anchor="middle">
    Allows preparation of meta-substituted haloarenes and phenols impossible by direct electrophilic aromatic substitution!
  </text>
</svg>`
};
