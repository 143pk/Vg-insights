export const BIOMOLECULES_DIAGRAMS = {
  glucoseAndFructoseStructures: `<svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.03"/>
    </linearGradient>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ec4899" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#be185d" stop-opacity="0.03"/>
    </linearGradient>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
    <marker id="arr-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="arr-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#db2777"/>
    </marker>
  </defs>

  <rect width="900" height="480" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Top Title Banner -->
  <rect x="20" y="16" width="860" height="42" rx="10" fill="#0f172a"/>
  <text x="450" y="42" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    GLUCOSE &amp; FRUCTOSE: OPEN-CHAIN (FISCHER) TO CYCLIC HAWORTH PROJECTIONS
  </text>

  <!-- Panel 1: D-(+)-Glucose (Aldohexose) -->
  <g transform="translate(25, 70)">
    <rect width="415" height="390" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#cardShadow)"/>
    <rect width="415" height="34" rx="12" fill="url(#bgGrad1)"/>
    <rect x="0" y="22" width="415" height="12" fill="url(#bgGrad1)"/>
    <text x="207" y="23" fill="#1d4ed8" font-size="12" font-weight="bold" text-anchor="middle">
      D-(+)-Glucose (Aldohexose, C₆H₁₂O₆) — C-1 is Anomeric Carbon
    </text>

    <!-- Open chain Fischer -->
    <g transform="translate(15, 45)">
      <rect width="130" height="230" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
      <text x="65" y="18" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Fischer Projection</text>
      
      <text x="65" y="40" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">¹CHO</text>
      <line x1="65" y1="45" x2="65" y2="65" stroke="#64748b" stroke-width="1.5"/>
      <line x1="25" y1="65" x2="105" y2="65" stroke="#64748b" stroke-width="1.5"/>
      <text x="20" y="69" fill="#334155" font-size="10" text-anchor="end">H</text>
      <text x="65" y="69" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">²C</text>
      <text x="110" y="69" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="start">OH</text>

      <line x1="65" y1="65" x2="65" y2="95" stroke="#64748b" stroke-width="1.5"/>
      <line x1="25" y1="95" x2="105" y2="95" stroke="#64748b" stroke-width="1.5"/>
      <text x="20" y="99" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="end">HO</text>
      <text x="65" y="99" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">³C</text>
      <text x="110" y="99" fill="#334155" font-size="10" text-anchor="start">H</text>

      <line x1="65" y1="95" x2="65" y2="125" stroke="#64748b" stroke-width="1.5"/>
      <line x1="25" y1="125" x2="105" y2="125" stroke="#64748b" stroke-width="1.5"/>
      <text x="20" y="129" fill="#334155" font-size="10" text-anchor="end">H</text>
      <text x="65" y="129" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">⁴C</text>
      <text x="110" y="129" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="start">OH</text>

      <line x1="65" y1="125" x2="65" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <line x1="25" y1="155" x2="105" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <text x="20" y="159" fill="#334155" font-size="10" text-anchor="end">H</text>
      <text x="65" y="159" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">⁵C</text>
      <text x="110" y="159" fill="#16a34a" font-size="10" font-weight="bold" text-anchor="start">OH (D)</text>

      <line x1="65" y1="155" x2="65" y2="185" stroke="#64748b" stroke-width="1.5"/>
      <text x="65" y="198" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">⁶CH₂OH</text>
      <text x="65" y="218" fill="#0284c7" font-size="9" text-anchor="middle">4 Chiral Carbons (C2-C5)</text>
    </g>

    <!-- Cyclisation Arrow -->
    <path d="M 155 140 Q 170 120 185 140" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)"/>
    <text x="170" y="115" fill="#2563eb" font-size="9" font-weight="bold" text-anchor="middle">C1-CHO + C5-OH</text>
    <text x="170" y="165" fill="#64748b" font-size="8" text-anchor="middle">Hemiacetal Ring</text>

    <!-- Haworth Forms -->
    <g transform="translate(195, 45)">
      <!-- alpha-D-glucopyranose -->
      <rect width="205" height="150" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="102" y="18" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">α-D-Glucopyranose (mp 146°C, [α] = +112°)</text>
      <!-- Pyranose Ring -->
      <polygon points="50,65 110,50 160,75 145,115 85,130 35,105" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
      <!-- Ring Oxygen at top right -->
      <circle cx="110" cy="50" r="10" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="110" y="54" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">O</text>
      <!-- C1 Anomeric group: -OH DOWN in alpha -->
      <line x1="160" y1="75" x2="160" y2="105" stroke="#dc2626" stroke-width="2"/>
      <text x="160" y="116" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">C1-OH (Down = α)</text>
      <!-- C6 CH2OH UP -->
      <line x1="50" y1="65" x2="50" y2="40" stroke="#334155" stroke-width="1.5"/>
      <text x="50" y="35" fill="#334155" font-size="9" font-weight="bold" text-anchor="middle">CH₂OH</text>
      <text x="102" y="142" fill="#475569" font-size="9" text-anchor="middle">Anomeric C-1 OH is TRANS to C6-CH₂OH</text>

      <!-- beta-D-glucopyranose -->
      <g transform="translate(0, 160)">
        <rect width="205" height="150" rx="8" fill="#f0fdf4" stroke="#bbf7d0"/>
        <text x="102" y="18" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">β-D-Glucopyranose (mp 150°C, [α] = +19°)</text>
        <polygon points="50,65 110,50 160,75 145,115 85,130 35,105" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="110" cy="50" r="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="110" y="54" fill="#16a34a" font-size="11" font-weight="bold" text-anchor="middle">O</text>
        <!-- C1 Anomeric group: -OH UP in beta -->
        <line x1="160" y1="75" x2="160" y2="45" stroke="#16a34a" stroke-width="2"/>
        <text x="160" y="40" fill="#16a34a" font-size="9" font-weight="bold" text-anchor="middle">C1-OH (Up = β)</text>
        <line x1="50" y1="65" x2="50" y2="40" stroke="#334155" stroke-width="1.5"/>
        <text x="50" y="35" fill="#334155" font-size="9" font-weight="bold" text-anchor="middle">CH₂OH</text>
        <text x="102" y="142" fill="#475569" font-size="9" text-anchor="middle">Anomeric C-1 OH is CIS (Equatorial) → More Stable (64%)</text>
      </g>
    </g>

    <!-- Bottom Mutarotation Summary Box -->
    <rect x="15" y="335" width="385" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="207" y="352" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">
      Mutarotation Equilibrium in Aqueous Solution:
    </text>
    <text x="207" y="368" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="middle">
      α-D-Glucose (+112°, 36%) ⇌ Open Chain (0.02%) ⇌ β-D-Glucose (+19°, 64%) ⟹ Equilibrium [α] = +52.7°
    </text>
  </g>

  <!-- Panel 2: D-(-)-Fructose (Ketohexose) -->
  <g transform="translate(460, 70)">
    <rect width="415" height="390" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#cardShadow)"/>
    <rect width="415" height="34" rx="12" fill="url(#bgGrad2)"/>
    <rect x="0" y="22" width="415" height="12" fill="url(#bgGrad2)"/>
    <text x="207" y="23" fill="#be185d" font-size="12" font-weight="bold" text-anchor="middle">
      D-(-)-Fructose (Ketohexose, C₆H₁₂O₆) — C-2 is Anomeric Carbon
    </text>

    <!-- Open chain Fischer for Fructose -->
    <g transform="translate(15, 45)">
      <rect width="130" height="230" rx="8" fill="#fdf2f8" stroke="#fbcfe8"/>
      <text x="65" y="18" fill="#9d174d" font-size="10" font-weight="bold" text-anchor="middle">Fischer Projection</text>
      
      <text x="65" y="40" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">¹CH₂OH</text>
      <line x1="65" y1="45" x2="65" y2="65" stroke="#64748b" stroke-width="1.5"/>
      <text x="65" y="69" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">²C=O</text>
      <text x="110" y="69" fill="#dc2626" font-size="9" text-anchor="start">(Keto)</text>

      <line x1="65" y1="65" x2="65" y2="95" stroke="#64748b" stroke-width="1.5"/>
      <line x1="25" y1="95" x2="105" y2="95" stroke="#64748b" stroke-width="1.5"/>
      <text x="20" y="99" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="end">HO</text>
      <text x="65" y="99" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">³C</text>
      <text x="110" y="99" fill="#334155" font-size="10" text-anchor="start">H</text>

      <line x1="65" y1="95" x2="65" y2="125" stroke="#64748b" stroke-width="1.5"/>
      <line x1="25" y1="125" x2="105" y2="125" stroke="#64748b" stroke-width="1.5"/>
      <text x="20" y="129" fill="#334155" font-size="10" text-anchor="end">H</text>
      <text x="65" y="129" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">⁴C</text>
      <text x="110" y="129" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="start">OH</text>

      <line x1="65" y1="125" x2="65" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <line x1="25" y1="155" x2="105" y2="155" stroke="#64748b" stroke-width="1.5"/>
      <text x="20" y="159" fill="#334155" font-size="10" text-anchor="end">H</text>
      <text x="65" y="159" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">⁵C</text>
      <text x="110" y="159" fill="#16a34a" font-size="10" font-weight="bold" text-anchor="start">OH (D)</text>

      <line x1="65" y1="155" x2="65" y2="185" stroke="#64748b" stroke-width="1.5"/>
      <text x="65" y="198" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">⁶CH₂OH</text>
      <text x="65" y="218" fill="#db2777" font-size="9" text-anchor="middle">3 Chiral Carbons (C3-C5)</text>
    </g>

    <!-- Cyclisation Arrow -->
    <path d="M 155 140 Q 170 120 185 140" fill="none" stroke="#db2777" stroke-width="2" marker-end="url(#arr-pink)"/>
    <text x="170" y="115" fill="#db2777" font-size="9" font-weight="bold" text-anchor="middle">C2=O + C5-OH</text>
    <text x="170" y="165" fill="#64748b" font-size="8" text-anchor="middle">Hemiketal Ring</text>

    <!-- Furanose Haworth Forms -->
    <g transform="translate(195, 45)">
      <!-- alpha-D-fructofuranose -->
      <rect width="205" height="150" rx="8" fill="#fff1f2" stroke="#fecdd3"/>
      <text x="102" y="18" fill="#9f1239" font-size="10" font-weight="bold" text-anchor="middle">α-D-Fructofuranose (5-Membered Ring)</text>
      <!-- Furanose Ring -->
      <polygon points="102,48 160,78 140,120 64,120 44,78" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
      <!-- Ring Oxygen at top apex -->
      <circle cx="102" cy="48" r="9" fill="#ffffff" stroke="#db2777" stroke-width="1.5"/>
      <text x="102" y="52" fill="#db2777" font-size="10" font-weight="bold" text-anchor="middle">O</text>
      <!-- C2 Anomeric group: -OH DOWN in alpha -->
      <line x1="160" y1="78" x2="160" y2="105" stroke="#dc2626" stroke-width="2"/>
      <text x="160" y="116" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">C2-OH (Down = α)</text>
      <text x="160" y="65" fill="#334155" font-size="8" text-anchor="middle">¹CH₂OH (Up)</text>
      <text x="102" y="142" fill="#475569" font-size="9" text-anchor="middle">Anomeric C-2 has ¹CH₂OH &amp; -OH attached</text>

      <!-- beta-D-fructofuranose -->
      <g transform="translate(0, 160)">
        <rect width="205" height="150" rx="8" fill="#fdf4ff" stroke="#f5d0fe"/>
        <text x="102" y="18" fill="#86198f" font-size="10" font-weight="bold" text-anchor="middle">β-D-Fructofuranose (Present in Sucrose)</text>
        <polygon points="102,48 160,78 140,120 64,120 44,78" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
        <circle cx="102" cy="48" r="9" fill="#ffffff" stroke="#a21caf" stroke-width="1.5"/>
        <text x="102" y="52" fill="#a21caf" font-size="10" font-weight="bold" text-anchor="middle">O</text>
        <!-- C2 Anomeric group: -OH UP in beta -->
        <line x1="160" y1="78" x2="160" y2="50" stroke="#a21caf" stroke-width="2"/>
        <text x="160" y="44" fill="#a21caf" font-size="9" font-weight="bold" text-anchor="middle">C2-OH (Up = β)</text>
        <text x="160" y="100" fill="#334155" font-size="8" text-anchor="middle">¹CH₂OH (Down)</text>
        <text x="102" y="142" fill="#475569" font-size="9" text-anchor="middle">Natural sweet fruit form; Laevorotatory ([α] = -92.4°)</text>
      </g>
    </g>

    <!-- Bottom Key Note for Fructose -->
    <rect x="15" y="335" width="385" height="42" rx="6" fill="#fff7ed" stroke="#fed7aa"/>
    <text x="207" y="352" fill="#c2410c" font-size="10" font-weight="bold" text-anchor="middle">
      NEET Concept: Why Fructose reduces Tollens &amp; Fehling Reagent:
    </text>
    <text x="207" y="368" fill="#9a3412" font-size="9" font-weight="semibold" text-anchor="middle">
      In alkaline solution, Ketose undergoes Lobry de Bruyn-Alberda van Ekenstein enediol rearrangement into Aldose!
    </text>
  </g>
</svg>`,

  disaccharidesAndPolysaccharides: `<svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <linearGradient id="sucGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#b45309" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect width="900" height="480" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Top Title Banner -->
  <rect x="20" y="16" width="860" height="42" rx="10" fill="#0f172a"/>
  <text x="450" y="42" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    DISACCHARIDES (GLYCOSIDIC LINKAGES) &amp; POLYSACCHARIDES ARCHITECTURE
  </text>

  <!-- Left Column: Disaccharides -->
  <g transform="translate(25, 70)">
    <!-- Sucrose -->
    <rect width="415" height="115" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
    <rect width="415" height="26" rx="10" fill="url(#sucGrad)"/>
    <text x="207" y="18" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">
      1. SUCROSE (C₁₂H₂₂O₁₁) — Invert Sugar [NON-REDUCING SUGAR]
    </text>
    <g transform="translate(10, 32)">
      <rect x="10" y="10" width="130" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="75" y="32" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">α-D-Glucopyranose</text>
      <text x="75" y="52" fill="#dc2626" font-size="11" font-weight="extrabold" text-anchor="middle">C₁ Anomeric</text>

      <!-- Glycosidic Bridge -->
      <path d="M 140 42 C 165 42 165 42 190 42" fill="none" stroke="#f59e0b" stroke-width="3"/>
      <circle cx="165" cy="42" r="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
      <text x="165" y="46" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">-O-</text>
      <text x="165" y="24" fill="#d97706" font-size="9" font-weight="bold" text-anchor="middle">α(1)→β(2)</text>

      <rect x="190" y="10" width="130" height="65" rx="6" fill="#fdf2f8" stroke="#fbcfe8"/>
      <text x="255" y="32" fill="#9d174d" font-size="10" font-weight="bold" text-anchor="middle">β-D-Fructofuranose</text>
      <text x="255" y="52" fill="#dc2626" font-size="11" font-weight="extrabold" text-anchor="middle">C₂ Anomeric</text>

      <rect x="330" y="10" width="65" height="65" rx="6" fill="#fef2f2" stroke="#fecaca"/>
      <text x="362" y="35" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">NO FREE</text>
      <text x="362" y="50" fill="#991b1b" font-size="9" font-weight="bold" text-anchor="middle">ANOMERIC</text>
      <text x="362" y="65" fill="#dc2626" font-size="8" text-anchor="middle">-OH GROUP</text>
    </g>

    <!-- Maltose -->
    <g transform="translate(0, 125)">
      <rect width="415" height="115" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
      <rect width="415" height="26" rx="10" fill="#eff6ff"/>
      <text x="207" y="18" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">
        2. MALTOSE (Malt Sugar) [REDUCING SUGAR]
      </text>
      <g transform="translate(10, 32)">
        <rect x="10" y="10" width="130" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="75" y="32" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">α-D-Glucopyranose</text>
        <text x="75" y="52" fill="#dc2626" font-size="11" font-weight="extrabold" text-anchor="middle">C₁ Anomeric</text>

        <path d="M 140 42 C 165 42 165 42 190 42" fill="none" stroke="#2563eb" stroke-width="3"/>
        <circle cx="165" cy="42" r="10" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="165" y="46" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">-O-</text>
        <text x="165" y="24" fill="#2563eb" font-size="9" font-weight="bold" text-anchor="middle">α(1→4)</text>

        <rect x="190" y="10" width="130" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="255" y="32" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">α-D-Glucopyranose</text>
        <text x="255" y="52" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">C₄ Alcohol</text>

        <rect x="330" y="10" width="65" height="65" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
        <text x="362" y="35" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">FREE C₁</text>
        <text x="362" y="50" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">HEMIACETAL</text>
        <text x="362" y="65" fill="#16a34a" font-size="8" text-anchor="middle">REDUCING!</text>
      </g>
    </g>

    <!-- Lactose -->
    <g transform="translate(0, 250)">
      <rect width="415" height="130" rx="10" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.5"/>
      <rect width="415" height="26" rx="10" fill="#f5f3ff"/>
      <text x="207" y="18" fill="#6d28d9" font-size="11" font-weight="bold" text-anchor="middle">
        3. LACTOSE (Milk Sugar) [REDUCING SUGAR]
      </text>
      <g transform="translate(10, 32)">
        <rect x="10" y="10" width="130" height="65" rx="6" fill="#fdf4ff" stroke="#f5d0fe"/>
        <text x="75" y="32" fill="#86198f" font-size="10" font-weight="bold" text-anchor="middle">β-D-Galactopyranose</text>
        <text x="75" y="52" fill="#dc2626" font-size="11" font-weight="extrabold" text-anchor="middle">C₁ Anomeric (β)</text>

        <path d="M 140 42 C 165 42 165 42 190 42" fill="none" stroke="#7c3aed" stroke-width="3"/>
        <circle cx="165" cy="42" r="10" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
        <text x="165" y="46" fill="#7c3aed" font-size="11" font-weight="bold" text-anchor="middle">-O-</text>
        <text x="165" y="24" fill="#7c3aed" font-size="9" font-weight="bold" text-anchor="middle">β(1→4)</text>

        <rect x="190" y="10" width="130" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="255" y="32" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">β-D-Glucopyranose</text>
        <text x="255" y="52" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">C₄ Alcohol</text>

        <rect x="330" y="10" width="65" height="65" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
        <text x="362" y="35" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">FREE C₁</text>
        <text x="362" y="50" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">HEMIACETAL</text>
        <text x="362" y="65" fill="#16a34a" font-size="8" text-anchor="middle">REDUCING!</text>
      </g>
      <text x="207" y="118" fill="#6b7280" font-size="9" text-anchor="middle">Galactose is C-4 epimer of Glucose (OH at C-4 is pointing UP)</text>
    </g>
  </g>

  <!-- Right Column: Polysaccharides -->
  <g transform="translate(460, 70)">
    <rect width="415" height="380" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
    <rect width="415" height="34" rx="12" fill="url(#polyGrad)"/>
    <rect x="0" y="22" width="415" height="12" fill="url(#polyGrad)"/>
    <text x="207" y="23" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">
      POLYSACCHARIDES: STARCH, CELLULOSE &amp; GLYCOGEN
    </text>

    <!-- Starch Breakdown -->
    <g transform="translate(15, 45)">
      <!-- Amylose -->
      <rect width="385" height="85" rx="8" fill="#f0fdf4" stroke="#86efac"/>
      <text x="15" y="20" fill="#166534" font-size="11" font-weight="bold">Amylose (15–20% of Starch)</text>
      <text x="250" y="20" fill="#047857" font-size="10" font-weight="bold">Water Soluble | Unbranched</text>
      <text x="15" y="40" fill="#334155" font-size="10">
        • Long linear polymer of 200–1000 α-D-Glucose units linked by <tspan fill="#dc2626" font-weight="bold">α(1→4) glycosidic bonds</tspan>.
      </text>
      <text x="15" y="58" fill="#334155" font-size="10">
        • Forms helical coils that entrap molecular iodine to give an <tspan fill="#1e40af" font-weight="bold">intense Blue Color</tspan>.
      </text>
      <text x="15" y="74" fill="#64748b" font-size="9">Non-reducing polysaccharide.</text>
    </g>

    <!-- Amylopectin -->
    <g transform="translate(15, 140)">
      <rect width="385" height="100" rx="8" fill="#ecfdf5" stroke="#6ee7b7"/>
      <text x="15" y="20" fill="#065f46" font-size="11" font-weight="bold">Amylopectin (80–85% of Starch)</text>
      <text x="235" y="20" fill="#047857" font-size="10" font-weight="bold">Water Insoluble | Highly Branched</text>
      <text x="15" y="40" fill="#334155" font-size="10">
        • Main Linear Chain: α-D-Glucose units linked by <tspan fill="#2563eb" font-weight="bold">α(1→4) glycosidic bonds</tspan>.
      </text>
      <text x="15" y="58" fill="#334155" font-size="10">
        • Branch Points: Occur every 20–25 glucose units via <tspan fill="#dc2626" font-weight="bold">α(1→6) glycosidic bonds</tspan>.
      </text>
      <text x="15" y="76" fill="#334155" font-size="10">
        • Iodine Test gives <tspan fill="#7c3aed" font-weight="bold">Red-Violet/Purple Color</tspan>.
      </text>
      <text x="15" y="92" fill="#64748b" font-size="9">Animal counterpart is Glycogen (more highly branched, branch every 8-12 units).</text>
    </g>

    <!-- Cellulose -->
    <g transform="translate(15, 250)">
      <rect width="385" height="115" rx="8" fill="#f8fafc" stroke="#94a3b8"/>
      <text x="15" y="20" fill="#0f172a" font-size="11" font-weight="bold">Cellulose (Structural Plant Wall Carbohydrate)</text>
      <text x="15" y="40" fill="#334155" font-size="10">
        • Most abundant organic compound in biosphere (wood ~50%, cotton ~90%).
      </text>
      <text x="15" y="58" fill="#334155" font-size="10">
        • Straight linear unbranched polymer of β-D-Glucose linked by <tspan fill="#dc2626" font-weight="bold">β(1→4) glycosidic bonds</tspan>.
      </text>
      <text x="15" y="76" fill="#334155" font-size="10">
        • Extensive interchain &amp; intrachain <tspan fill="#2563eb" font-weight="bold">Hydrogen Bonding</tspan> forms rigid microfibrils.
      </text>
      <text x="15" y="94" fill="#991b1b" font-size="10" font-weight="bold">
        • Human Digestive Trap: Humans CANNOT digest cellulose due to lack of β-glucosidase (cellulase).
      </text>
    </g>
  </g>
</svg>`,

  aminoAcidsAndProteinStructures: `<svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.03"/>
    </linearGradient>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="900" height="480" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Top Title Banner -->
  <rect x="20" y="16" width="860" height="42" rx="10" fill="#0f172a"/>
  <text x="450" y="42" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    AMINO ACIDS (ZWITTERION &amp; PEPTIDE BOND) &amp; FOUR STRUCTURAL LEVELS OF PROTEINS
  </text>

  <!-- Left Panel: Amino Acid Zwitterion & Peptide Bond -->
  <g transform="translate(25, 70)">
    <rect width="415" height="390" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow2)"/>
    <rect width="415" height="32" rx="12" fill="url(#pGrad)"/>
    <rect x="0" y="20" width="415" height="12" fill="url(#pGrad)"/>
    <text x="207" y="22" fill="#6d28d9" font-size="12" font-weight="bold" text-anchor="middle">
      1. α-Amino Acid Structure, Zwitterion &amp; Peptide Bond
    </text>

    <!-- Zwitterion Diagram -->
    <g transform="translate(15, 42)">
      <rect width="385" height="145" rx="8" fill="#f5f3ff" stroke="#ddd6fe"/>
      <text x="192" y="18" fill="#5b21b6" font-size="11" font-weight="bold" text-anchor="middle">
        Zwitterionic Form (Dipolar Ion with Net Charge = 0 at pI)
      </text>

      <!-- Acidic Medium (Cation) -->
      <rect x="15" y="32" width="105" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="67" y="48" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="middle">Low pH (&lt; pI)</text>
      <text x="67" y="65" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">⁺H₃N–CH(R)–COOH</text>
      <text x="67" y="85" fill="#dc2626" font-size="9" text-anchor="middle">Cation (Migrates to -ve Cathode)</text>

      <!-- Zwitterion Middle -->
      <rect x="140" y="32" width="105" height="75" rx="6" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="192" y="48" fill="#6d28d9" font-size="10" font-weight="bold" text-anchor="middle">Isoelectric Point (pI)</text>
      <text x="192" y="65" fill="#4c1d95" font-size="10" font-weight="extrabold" text-anchor="middle">⁺H₃N–CH(R)–COO⁻</text>
      <text x="192" y="85" fill="#6d28d9" font-size="9" font-weight="bold" text-anchor="middle">Zwitterion (No Migration)</text>

      <!-- Basic Medium (Anion) -->
      <rect x="265" y="32" width="105" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
      <text x="317" y="48" fill="#2563eb" font-size="10" font-weight="bold" text-anchor="middle">High pH (&gt; pI)</text>
      <text x="317" y="65" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">H₂N–CH(R)–COO⁻</text>
      <text x="317" y="85" fill="#2563eb" font-size="9" text-anchor="middle">Anion (Migrates to +ve Anode)</text>

      <text x="192" y="125" fill="#475569" font-size="9" text-anchor="middle">
        Amphoteric character: reacts with both acids (-COO⁻ accepts H⁺) and bases (-NH₃⁺ donates H⁺).
      </text>
      <text x="192" y="138" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">
        All natural amino acids except Glycine (R=H) are Optically Active (L-configuration).
      </text>
    </g>

    <!-- Peptide Bond Formation -->
    <g transform="translate(15, 195)">
      <rect width="385" height="180" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="192" y="18" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">
        Peptide Bond Condensation: –COOH + H₂N– ⟶ –CO–NH– + H₂O
      </text>

      <!-- Reaction Box -->
      <g transform="translate(15, 28)">
        <rect width="135" height="55" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="67" y="24" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Amino Acid 1 (N-term)</text>
        <text x="67" y="42" fill="#0f172a" font-size="10" text-anchor="middle">H₂N–CH(R₁)–<tspan fill="#dc2626" font-weight="bold">COOH</tspan></text>

        <text x="160" y="42" fill="#64748b" font-size="14" font-weight="bold" text-anchor="middle">+</text>

        <rect x="175" y="28" width="135" height="55" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="242" y="24" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">Amino Acid 2 (C-term)</text>
        <text x="242" y="42" fill="#0f172a" font-size="10" text-anchor="middle"><tspan fill="#dc2626" font-weight="bold">H₂N</tspan>–CH(R₂)–COOH</text>
      </g>

      <!-- Resulting Dipeptide -->
      <rect x="25" y="95" width="335" height="55" rx="6" fill="#fef2f2" stroke="#f87171"/>
      <text x="167" y="115" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">Dipeptide with Amide / Peptide Linkage</text>
      <text x="167" y="136" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">
        H₂N–CH(R₁)–<tspan fill="#dc2626" font-weight="extrabold" font-size="13">–CO–NH–</tspan>–CH(R₂)–COOH
      </text>

      <text x="192" y="165" fill="#475569" font-size="9" text-anchor="middle">
        Planar &amp; Rigid due to partial double bond resonance between C and N (40% double bond character).
      </text>
    </g>
  </g>

  <!-- Right Panel: Four Structural Levels & Denaturation -->
  <g transform="translate(460, 70)">
    <rect width="415" height="390" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow2)"/>
    <rect width="415" height="32" rx="12" fill="#f0fdf4"/>
    <rect x="0" y="20" width="415" height="12" fill="#f0fdf4"/>
    <text x="207" y="22" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">
      2. Four Levels of Protein Structure &amp; Denaturation
    </text>

    <!-- Structural Grid -->
    <g transform="translate(15, 40)">
      <!-- 1° Primary Structure -->
      <rect width="185" height="85" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
      <text x="10" y="18" fill="#1e40af" font-size="10" font-weight="bold">1° Primary Structure</text>
      <text x="10" y="34" fill="#334155" font-size="9">• Linear sequence of amino acids.</text>
      <text x="10" y="48" fill="#334155" font-size="9">• Held entirely by <tspan fill="#dc2626" font-weight="bold">Covalent Peptide Bonds</tspan>.</text>
      <text x="10" y="62" fill="#334155" font-size="9">• Determined by genetic sequence.</text>
      <text x="10" y="76" fill="#1d4ed8" font-size="8.5" font-weight="bold">Intact during denaturation!</text>

      <!-- 2° Secondary Structure -->
      <g transform="translate(200, 0)">
        <rect width="185" height="85" rx="6" fill="#fdf4ff" stroke="#f0abfc"/>
        <text x="10" y="18" fill="#86198f" font-size="10" font-weight="bold">2° Secondary Structure</text>
        <text x="10" y="34" fill="#334155" font-size="9">• <tspan font-weight="bold">α-Helix</tspan> (intramolecular H-bonds).</text>
        <text x="10" y="48" fill="#334155" font-size="9">• <tspan font-weight="bold">β-Pleated Sheet</tspan> (intermolecular).</text>
        <text x="10" y="62" fill="#334155" font-size="9">• Keratin (α-helix), Silk Fibroin (β).</text>
        <text x="10" y="76" fill="#a21caf" font-size="8.5" font-weight="bold">H-bonding between >C=O &amp; –NH–</text>
      </g>

      <!-- 3° Tertiary Structure -->
      <g transform="translate(0, 95)">
        <rect width="185" height="90" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="10" y="18" fill="#166534" font-size="10" font-weight="bold">3° Tertiary Structure</text>
        <text x="10" y="34" fill="#334155" font-size="9">• Overall 3D folding of polypeptide.</text>
        <text x="10" y="48" fill="#334155" font-size="9">• <tspan font-weight="bold">Fibrous</tspan> (insoluble, e.g., Collagen).</text>
        <text x="10" y="62" fill="#334155" font-size="9">• <tspan font-weight="bold">Globular</tspan> (soluble, e.g., Albumin, Insulin).</text>
        <text x="10" y="76" fill="#15803d" font-size="8.5" font-weight="bold">Forces: H-bonds, Disulfide (-S-S-), Ionic, Hydrophobic</text>
      </g>

      <!-- 4° Quaternary Structure -->
      <g transform="translate(200, 95)">
        <rect width="185" height="90" rx="6" fill="#fffbeb" stroke="#fde68a"/>
        <text x="10" y="18" fill="#92400e" font-size="10" font-weight="bold">4° Quaternary Structure</text>
        <text x="10" y="34" fill="#334155" font-size="9">• Spatial arrangement of multiple</text>
        <text x="10" y="48" fill="#334155" font-size="9">  subunits (protomers).</text>
        <text x="10" y="62" fill="#334155" font-size="9">• <tspan font-weight="bold">Haemoglobin</tspan>: 4 subunits (2α + 2β).</text>
        <text x="10" y="76" fill="#b45309" font-size="8.5" font-weight="bold">Complex multimeric assembly</text>
      </g>
    </g>

    <!-- Denaturation Master Box -->
    <g transform="translate(15, 235)">
      <rect width="385" height="140" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="192" y="20" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">
        🔥 DENATURATION OF PROTEINS (NEET HIGH-YIELD)
      </text>
      <text x="15" y="40" fill="#334155" font-size="10">
        • Caused by physical change (heating) or chemical change (pH alteration, urea, salts).
      </text>
      <text x="15" y="58" fill="#334155" font-size="10">
        • Globules unfold and helices uncoil ⟹ <tspan fill="#dc2626" font-weight="bold">Complete Loss of Biological Activity</tspan>.
      </text>
      <text x="15" y="78" fill="#991b1b" font-size="10.5" font-weight="bold">
        • CRITICAL RULE: 2° &amp; 3° structures are DESTROYED; 1° structure remains INTACT!
      </text>
      <text x="15" y="98" fill="#334155" font-size="10">
        • Classic NCERT Examples:
      </text>
      <text x="25" y="114" fill="#475569" font-size="9.5">
        1. Coagulation of egg white (albumin) on boiling.
      </text>
      <text x="25" y="128" fill="#475569" font-size="9.5">
        2. Curdling of milk (lactic acid produced by bacteria denatures lactalbumin).
      </text>
    </g>
  </g>
</svg>`,

  nucleicAcidsDnaRnaStructure: `<svg viewBox="0 0 900 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto font-sans">
  <defs>
    <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0369a1" stop-opacity="0.03"/>
    </linearGradient>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.06"/>
    </filter>
  </defs>

  <rect width="900" height="480" fill="#f8fafc" rx="16" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Top Title Banner -->
  <rect x="20" y="16" width="860" height="42" rx="10" fill="#0f172a"/>
  <text x="450" y="42" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    NUCLEIC ACIDS: NUCLEOSIDE VS NUCLEOTIDE, PHOSPHODIESTER LINKAGE &amp; DNA BASE PAIRING
  </text>

  <!-- Left Panel: Nucleoside, Nucleotide & Nitrogenous Bases -->
  <g transform="translate(25, 70)">
    <rect width="415" height="390" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow3)"/>
    <rect width="415" height="32" rx="12" fill="url(#dnaGrad)"/>
    <rect x="0" y="20" width="415" height="12" fill="url(#dnaGrad)"/>
    <text x="207" y="22" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">
      1. Nucleoside vs Nucleotide &amp; Nitrogenous Bases
    </text>

    <!-- Formula comparison box -->
    <g transform="translate(15, 42)">
      <rect width="185" height="115" rx="8" fill="#f0f9ff" stroke="#7dd3fc"/>
      <text x="92" y="20" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle">NUCLEOSIDE</text>
      <text x="92" y="45" fill="#0c4a6e" font-size="11" font-weight="extrabold" text-anchor="middle">Base + Sugar</text>
      <text x="92" y="65" fill="#dc2626" font-size="9.5" font-weight="bold" text-anchor="middle">(NO Phosphate)</text>
      <text x="92" y="85" fill="#334155" font-size="9" text-anchor="middle">Base is linked to C-1′</text>
      <text x="92" y="100" fill="#334155" font-size="9" text-anchor="middle">of pentose sugar via β-link</text>

      <g transform="translate(200, 0)">
        <rect width="185" height="115" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
        <text x="92" y="20" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">NUCLEOTIDE</text>
        <text x="92" y="45" fill="#1e3a8a" font-size="11" font-weight="extrabold" text-anchor="middle">Base + Sugar + Phosphate</text>
        <text x="92" y="65" fill="#16a34a" font-size="9.5" font-weight="bold" text-anchor="middle">(Nucleoside Monophosphate)</text>
        <text x="92" y="85" fill="#334155" font-size="9" text-anchor="middle">Phosphate is esterified to</text>
        <text x="92" y="100" fill="#334155" font-size="9" text-anchor="middle">C-5′ OH of pentose sugar</text>
      </g>
    </g>

    <!-- Bases Classification Box -->
    <g transform="translate(15, 170)">
      <rect width="385" height="205" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="192" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">
        Nitrogenous Bases: Purines vs Pyrimidines
      </text>

      <!-- Purines -->
      <rect x="15" y="32" width="170" height="95" rx="6" fill="#fdf4ff" stroke="#f0abfc"/>
      <text x="100" y="50" fill="#86198f" font-size="10.5" font-weight="bold" text-anchor="middle">PURINES (2 Rings)</text>
      <text x="100" y="70" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">• Adenine (A)</text>
      <text x="100" y="90" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">• Guanine (G)</text>
      <text x="100" y="112" fill="#a21caf" font-size="8.5" text-anchor="middle">Present in BOTH DNA &amp; RNA</text>

      <!-- Pyrimidines -->
      <rect x="200" y="32" width="170" height="95" rx="6" fill="#fff7ed" stroke="#fdba74"/>
      <text x="285" y="50" fill="#c2410c" font-size="10.5" font-weight="bold" text-anchor="middle">PYRIMIDINES (1 Ring)</text>
      <text x="285" y="68" fill="#0f172a" font-size="9.5" text-anchor="middle">• Cytosine (C) [DNA &amp; RNA]</text>
      <text x="285" y="85" fill="#dc2626" font-size="9.5" font-weight="bold" text-anchor="middle">• Thymine (T) [DNA ONLY]</text>
      <text x="285" y="102" fill="#2563eb" font-size="9.5" font-weight="bold" text-anchor="middle">• Uracil (U) [RNA ONLY]</text>
      <text x="285" y="118" fill="#9a3412" font-size="8.5" text-anchor="middle">5-Methyluracil = Thymine</text>

      <!-- Sugar Comparison -->
      <rect x="15" y="135" width="355" height="60" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="177" y="152" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">
        Pentose Sugar: β-D-2-Deoxyribose (DNA) vs β-D-Ribose (RNA)
      </text>
      <text x="177" y="170" fill="#334155" font-size="9" text-anchor="middle">
        DNA has <tspan fill="#dc2626" font-weight="bold">–H at C-2′</tspan> (more stable, resistant to alkaline hydrolysis).
      </text>
      <text x="177" y="185" fill="#334155" font-size="9" text-anchor="middle">
        RNA has <tspan fill="#2563eb" font-weight="bold">–OH at C-2′</tspan> (labile, makes RNA catalytic &amp; reactive).
      </text>
    </g>
  </g>

  <!-- Right Panel: Phosphodiester Backbone & Base Pairing -->
  <g transform="translate(460, 70)">
    <rect width="415" height="390" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" filter="url(#shadow3)"/>
    <rect width="415" height="32" rx="12" fill="#eff6ff"/>
    <rect x="0" y="20" width="415" height="12" fill="#eff6ff"/>
    <text x="207" y="22" fill="#1e40af" font-size="12" font-weight="bold" text-anchor="middle">
      2. Phosphodiester Linkage &amp; DNA Base Pairing (Watson-Crick)
    </text>

    <!-- Phosphodiester Backbone Diagram -->
    <g transform="translate(15, 40)">
      <rect width="385" height="135" rx="8" fill="#f8fafc" stroke="#94a3b8"/>
      <text x="192" y="18" fill="#0f172a" font-size="10.5" font-weight="bold" text-anchor="middle">
        3′ ⟶ 5′ Phosphodiester Bond Formation
      </text>
      
      <!-- Flow: Sugar - Phosphate - Sugar -->
      <rect x="20" y="30" width="100" height="40" rx="5" fill="#e0f2fe" stroke="#38bdf8"/>
      <text x="70" y="47" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">Nucleotide 1</text>
      <text x="70" y="60" fill="#334155" font-size="8.5" text-anchor="middle">C-3′ OH Group</text>

      <path d="M 120 50 L 150 50" stroke="#dc2626" stroke-width="2.5"/>
      <rect x="150" y="30" width="85" height="40" rx="5" fill="#fee2e2" stroke="#f87171"/>
      <text x="192" y="47" fill="#991b1b" font-size="9.5" font-weight="bold" text-anchor="middle">Phosphate</text>
      <text x="192" y="60" fill="#dc2626" font-size="8.5" font-weight="bold" text-anchor="middle">–O–PO₂⁻–O–</text>
      <path d="M 235 50 L 265 50" stroke="#dc2626" stroke-width="2.5"/>

      <rect x="265" y="30" width="100" height="40" rx="5" fill="#e0f2fe" stroke="#38bdf8"/>
      <text x="315" y="47" fill="#0369a1" font-size="9.5" font-weight="bold" text-anchor="middle">Nucleotide 2</text>
      <text x="315" y="60" fill="#334155" font-size="8.5" text-anchor="middle">C-5′ Carbon</text>

      <text x="192" y="90" fill="#475569" font-size="9" text-anchor="middle">
        Sugar-Phosphate-Sugar backbone runs antiparallel: 5′ ⟶ 3′ and 3′ ⟶ 5′.
      </text>
      <text x="192" y="105" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="middle">
        Pitch of DNA double helix = 3.4 nm (34 Å) with 10 base pairs per turn (0.34 nm per bp).
      </text>
      <text x="192" y="120" fill="#475569" font-size="8.5" text-anchor="middle">
        Diameter of double helix = 2.0 nm (20 Å); Helical rise = 36° per bp.
      </text>
    </g>

    <!-- Base Pairing Box -->
    <g transform="translate(15, 185)">
      <rect width="385" height="190" rx="8" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5"/>
      <text x="192" y="20" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">
        COMPLEMENTARY BASE PAIRING &amp; HYDROGEN BONDING
      </text>

      <!-- A = T (2 H-bonds) -->
      <g transform="translate(15, 30)">
        <rect width="355" height="60" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
        <rect x="10" y="10" width="100" height="40" rx="5" fill="#fdf4ff" stroke="#d946ef"/>
        <text x="60" y="34" fill="#a21caf" font-size="12" font-weight="extrabold" text-anchor="middle">Adenine (A)</text>

        <!-- 2 H-bonds -->
        <line x1="120" y1="22" x2="235" y2="22" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,3"/>
        <line x1="120" y1="38" x2="235" y2="38" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,3"/>
        <text x="177" y="18" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">H-Bond 1</text>
        <text x="177" y="48" fill="#dc2626" font-size="8" font-weight="bold" text-anchor="middle">H-Bond 2</text>

        <rect x="245" y="10" width="100" height="40" rx="5" fill="#fff7ed" stroke="#f97316"/>
        <text x="295" y="34" fill="#c2410c" font-size="12" font-weight="extrabold" text-anchor="middle">Thymine (T)</text>
      </g>

      <!-- G ≡ C (3 H-bonds) -->
      <g transform="translate(15, 95)">
        <rect width="355" height="65" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
        <rect x="10" y="10" width="100" height="45" rx="5" fill="#fdf4ff" stroke="#d946ef"/>
        <text x="60" y="37" fill="#a21caf" font-size="12" font-weight="extrabold" text-anchor="middle">Guanine (G)</text>

        <!-- 3 H-bonds -->
        <line x1="120" y1="20" x2="235" y2="20" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="4,3"/>
        <line x1="120" y1="32" x2="235" y2="32" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="4,3"/>
        <line x1="120" y1="44" x2="235" y2="44" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="4,3"/>
        <text x="177" y="16" fill="#16a34a" font-size="7.5" font-weight="bold" text-anchor="middle">H-Bond 1</text>
        <text x="177" y="30" fill="#16a34a" font-size="7.5" font-weight="bold" text-anchor="middle">H-Bond 2</text>
        <text x="177" y="55" fill="#16a34a" font-size="7.5" font-weight="bold" text-anchor="middle">H-Bond 3</text>

        <rect x="245" y="10" width="100" height="45" rx="5" fill="#fff7ed" stroke="#f97316"/>
        <text x="295" y="37" fill="#c2410c" font-size="12" font-weight="extrabold" text-anchor="middle">Cytosine (C)</text>
      </g>

      <text x="192" y="178" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">
        Chargaff's Rule: [A] = [T] and [G] = [C]; [A+G] / [T+C] = 1.0 (Purines = Pyrimidines in dsDNA).
      </text>
    </g>
  </g>
</svg>`
};
