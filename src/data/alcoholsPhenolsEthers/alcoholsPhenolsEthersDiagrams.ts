// High-resolution, dark/light theme compatible SVG Diagrams for Chapter 20: Alcohols, Phenols and Ethers

export const ALCOHOLS_PHENOLS_ETHERS_DIAGRAMS = {
  // 1. Preparation of Alcohols: Hydration vs Hydroboration-Oxidation vs Grignard Addition
  alcoholPreparationMechanisms: `<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="apeBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accentMark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="accentAnti" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
    <linearGradient id="accentGrignard" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <marker id="apeArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="500" fill="url(#apeBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Main Title Header -->
  <rect x="24" y="16" width="752" height="42" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="400" y="42" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    SYNTHESIS OF ALCOHOLS: MARKOVNIKOV vs ANTI-MARKOVNIKOV vs GRIGNARD
  </text>

  <!-- Row 1: Acid Hydration vs Hydroboration-Oxidation -->
  <!-- Left Box: Acid-Catalysed Hydration (Markovnikov) -->
  <rect x="24" y="70" width="360" height="190" rx="10" fill="url(#cardGrad1)" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="24" y="70" width="360" height="30" rx="10" fill="url(#accentMark)"/>
  <text x="204" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    1. Acid-Catalysed Hydration (H₂O / H⁺)
  </text>
  <text x="40" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Alkene + H₂O xrightarrow{H₂SO₄} Alcohol</text>
  <text x="40" y="148" fill="#fef08a" font-family="system-ui, sans-serif" font-size="12" font-weight="600">CH₃–CH=CH₂ + H₂O → CH₃–CH(OH)–CH₃</text>
  <text x="40" y="172" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">✓ Regiochemistry: <tspan fill="#f59e0b" font-weight="700">Markovnikov Addition</tspan></text>
  <text x="40" y="192" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">✓ Intermediate: <tspan fill="#f43f5e" font-weight="700">Carbocation (Rearrangements Possible!)</tspan></text>
  <text x="40" y="212" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Major Product: <tspan fill="#ffffff" font-weight="600">Propan-2-ol (Secondary Alcohol)</tspan></text>
  <text x="40" y="240" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10" font-weight="600">⚠️ Trap: Pinacol/Hydride shifts occur in branched alkenes.</text>

  <!-- Right Box: Hydroboration-Oxidation (Anti-Markovnikov) -->
  <rect x="416" y="70" width="360" height="190" rx="10" fill="url(#cardGrad1)" stroke="#10b981" stroke-width="1.5"/>
  <rect x="416" y="70" width="360" height="30" rx="10" fill="url(#accentAnti)"/>
  <text x="596" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    2. Hydroboration-Oxidation (B₂H₆ / H₂O₂, OH⁻)
  </text>
  <text x="432" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">6 CH₃–CH=CH₂ + B₂H₆ → 2 (CH₃CH₂CH₂)₃B</text>
  <text x="432" y="148" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">(R)₃B + 3 H₂O₂ / OH⁻ → 3 CH₃CH₂CH₂OH + H₃BO₃</text>
  <text x="432" y="172" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">✓ Regiochemistry: <tspan fill="#10b981" font-weight="700">Anti-Markovnikov Addition of H₂O</tspan></text>
  <text x="432" y="192" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">✓ Stereochemistry: <tspan fill="#34d399" font-weight="700">Syn-Addition (NO Rearrangement!)</tspan></text>
  <text x="432" y="212" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Major Product: <tspan fill="#ffffff" font-weight="600">Propan-1-ol (Primary Alcohol, 100%)</tspan></text>
  <text x="432" y="240" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="10" font-weight="600">✓ NEET Key: Yields pure 1° alcohol without isomeric contamination.</text>

  <!-- Row 2: Grignard Carbonyl Addition Engine (1°, 2°, 3° Control) -->
  <rect x="24" y="275" width="752" height="205" rx="10" fill="url(#cardGrad1)" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="24" y="275" width="752" height="30" rx="10" fill="url(#accentGrignard)"/>
  <text x="400" y="295" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    3. Grignard Reagent (R–MgX) Carbonyl Addition Synthesis Matrix
  </text>

  <!-- 3 Sub-columns for 1°, 2°, 3° -->
  <!-- Col 1: Formaldehyde -> 1° -->
  <rect x="40" y="315" width="220" height="150" rx="8" fill="#1e293b" stroke="#475569"/>
  <text x="150" y="335" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">HCHO (Formaldehyde)</text>
  <text x="50" y="360" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">H–CH=O + R–MgX</text>
  <text x="50" y="380" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">↓ Hydrolysis (H₃O⁺)</text>
  <text x="50" y="405" fill="#4ade80" font-family="system-ui, sans-serif" font-size="12" font-weight="700">R–CH₂–OH (1° Alcohol)</text>
  <text x="50" y="435" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Chain ascent by R group.</text>
  <text x="50" y="450" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="10">Ex: HCHO + CH₃MgBr → C₂H₅OH</text>

  <!-- Col 2: Aldehyde -> 2° -->
  <rect x="290" y="315" width="220" height="150" rx="8" fill="#1e293b" stroke="#475569"/>
  <text x="400" y="335" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">R'–CHO (Other Aldehydes)</text>
  <text x="300" y="360" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">R'–CH=O + R–MgX</text>
  <text x="300" y="380" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">↓ Hydrolysis (H₃O⁺)</text>
  <text x="300" y="405" fill="#facc15" font-family="system-ui, sans-serif" font-size="12" font-weight="700">R'–CH(OH)–R (2° Alcohol)</text>
  <text x="300" y="435" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Secondary alcohol formed.</text>
  <text x="300" y="450" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="10">Ex: CH₃CHO + CH₃MgBr → Isopropanol</text>

  <!-- Col 3: Ketone -> 3° -->
  <rect x="540" y="315" width="220" height="150" rx="8" fill="#1e293b" stroke="#475569"/>
  <text x="650" y="335" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">R'–CO–R'' (Ketone)</text>
  <text x="550" y="360" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">R'–C(=O)–R'' + R–MgX</text>
  <text x="550" y="380" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">↓ Hydrolysis (H₃O⁺)</text>
  <text x="550" y="405" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">R'R''C(OH)–R (3° Alcohol)</text>
  <text x="550" y="435" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Tertiary alcohol formed.</text>
  <text x="550" y="450" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="10">Ex: Acetone + CH₃MgBr → tert-Butanol</text>
</svg>`,

  // 2. Lucas Test vs Victor Meyer Test (1°, 2°, 3° Distinction)
  lucasAndVictorMeyerDistinction: `<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="distBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" fill="url(#distBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Title -->
  <rect x="24" y="16" width="752" height="42" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="1.5"/>
  <text x="400" y="42" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    DISTINCTION TESTS: LUCAS TEST (TURBIDITY) &amp; VICTOR MEYER TEST (RED-BLUE-WHITE)
  </text>

  <!-- Left Column: Lucas Test -->
  <rect x="24" y="70" width="360" height="390" rx="10" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
  <rect x="24" y="70" width="360" height="32" rx="10" fill="#0284c7"/>
  <text x="204" y="92" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    LUCAS TEST (Conc. HCl + Anh. ZnCl₂)
  </text>

  <text x="40" y="125" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Principle: R–OH + HCl xrightarrow{ZnCl₂} R–Cl↓ (Turbidity) + H₂O</text>
  <text x="40" y="145" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Reaction Rate follows Carbocation Stability: 3° > 2° > 1°</text>

  <!-- Lucas 3° Card -->
  <rect x="40" y="160" width="328" height="85" rx="8" fill="#0f172a" stroke="#f43f5e"/>
  <text x="52" y="180" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Tertiary (3°) Alcohol (e.g. tert-Butanol)</text>
  <text x="52" y="200" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="11">⚡ Turbidity appears <tspan font-weight="700" fill="#ffffff">IMMEDIATELY</tspan> at room temp.</text>
  <text x="52" y="220" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Fast S_N1 cleavage due to highly stable 3° carbocation.</text>
  <text x="52" y="235" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10">Allylic &amp; Benzylic alcohols also give immediate turbidity!</text>

  <!-- Lucas 2° Card -->
  <rect x="40" y="255" width="328" height="85" rx="8" fill="#0f172a" stroke="#facc15"/>
  <text x="52" y="275" fill="#facc15" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Secondary (2°) Alcohol (e.g. Isopropanol)</text>
  <text x="52" y="295" fill="#fef08a" font-family="system-ui, sans-serif" font-size="11">⏱ Turbidity appears in <tspan font-weight="700" fill="#ffffff">~5 MINUTES</tspan> at room temp.</text>
  <text x="52" y="315" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Moderate S_N1 rate via secondary carbocation.</text>
  <text x="52" y="330" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Solution turns milky white slowly.</text>

  <!-- Lucas 1° Card -->
  <rect x="40" y="350" width="328" height="95" rx="8" fill="#0f172a" stroke="#4ade80"/>
  <text x="52" y="370" fill="#4ade80" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Primary (1°) Alcohol (e.g. Ethanol)</text>
  <text x="52" y="390" fill="#86efac" font-family="system-ui, sans-serif" font-size="11">❄ <tspan font-weight="700" fill="#ffffff">NO TURBIDITY</tspan> at room temperature.</text>
  <text x="52" y="410" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Turbidity appears only upon prolonged heating.</text>
  <text x="52" y="430" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10">⚠️ Trap: 1° alcohols require high activation energy.</text>

  <!-- Right Column: Victor Meyer Test -->
  <rect x="416" y="70" width="360" height="390" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <rect x="416" y="70" width="360" height="32" rx="10" fill="#8b5cf6"/>
  <text x="596" y="92" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    VICTOR MEYER TEST (R-B-W TRICK)
  </text>

  <text x="432" y="125" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Sequence: ROH xrightarrow{P+I₂} RI xrightarrow{AgNO₂} RNO₂ xrightarrow{HNO₂} + NaOH</text>
  <text x="432" y="145" fill="#fcd34d" font-family="system-ui, sans-serif" font-size="11" font-weight="700">🧠 MEMORY MNEMONIC: R – B – W (Red, Blue, White/Colorless)</text>

  <!-- VM 1° Card -->
  <rect x="432" y="160" width="328" height="85" rx="8" fill="#0f172a" stroke="#ef4444"/>
  <text x="444" y="180" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="700">1° Alcohol → BLOOD RED COLOUR</text>
  <text x="444" y="200" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">RCH₂NO₂ + HNO₂ → Nitrolic Acid [R–C(=NOH)NO₂]</text>
  <text x="444" y="220" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10">Nitrolic acid dissolves in alkali (NaOH) to give <tspan font-weight="700" fill="#ef4444">Red Sodium Salt</tspan>.</text>
  <text x="444" y="235" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Contains 2 α-hydrogens on carbon.</text>

  <!-- VM 2° Card -->
  <rect x="432" y="255" width="328" height="85" rx="8" fill="#0f172a" stroke="#3b82f6"/>
  <text x="444" y="275" fill="#3b82f6" font-family="system-ui, sans-serif" font-size="12" font-weight="700">2° Alcohol → BLUE COLOUR</text>
  <text x="444" y="295" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">R₂CHNO₂ + HNO₂ → Pseudonitrol [R₂C(NO)NO₂]</text>
  <text x="444" y="315" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="10">Pseudonitrol is insoluble in alkali; retains <tspan font-weight="700" fill="#38bdf8">intense Blue</tspan>.</text>
  <text x="444" y="330" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Contains 1 α-hydrogen on carbon.</text>

  <!-- VM 3° Card -->
  <rect x="432" y="350" width="328" height="95" rx="8" fill="#0f172a" stroke="#94a3b8"/>
  <text x="444" y="370" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="700">3° Alcohol → COLOURLESS / WHITE</text>
  <text x="444" y="390" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">R₃C–NO₂ + HNO₂ → <tspan font-weight="700" fill="#f87171">NO REACTION</tspan></text>
  <text x="444" y="410" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">No α-hydrogen present on tertiary carbon.</text>
  <text x="444" y="430" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="10">Solution remains colorless on adding NaOH.</text>
</svg>`,

  // 3. Phenol Acidity & Resonance Stabilization of Phenoxide Ion
  phenolAcidityAndResonance: `<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="phenBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" fill="url(#phenBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Title -->
  <rect x="24" y="16" width="752" height="42" rx="8" fill="#831843" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="400" y="42" fill="#ffe4e6" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    ACIDITY OF PHENOL: RESONANCE OF PHENOXIDE ION &amp; SUBSTITUENT EFFECTS
  </text>

  <!-- Top Banner: Ionization Comparison -->
  <rect x="24" y="68" width="752" height="75" rx="8" fill="#1e293b" stroke="#475569"/>
  <text x="40" y="92" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Equilibrium:</text>
  <text x="120" y="92" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600">C₆H₅–OH (Phenol) + H₂O ⇌ C₆H₅–O⁻ (Phenoxide Ion) + H₃O⁺  (pKₐ ≈ 10)</text>
  <text x="40" y="115" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="11">Why Phenol is 10⁶ times more acidic than Alcohols (pKₐ ~ 16–18):</text>
  <text x="40" y="132" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Alkoxide (RO⁻) has negative charge localized on oxygen (+I destabilization). Phenoxide (C₆H₅O⁻) delocalizes negative charge over 5 resonance structures!</text>

  <!-- Middle: Resonance Canonical Forms of Phenoxide -->
  <rect x="24" y="152" width="752" height="150" rx="8" fill="#0f172a" stroke="#ec4899"/>
  <text x="400" y="172" fill="#f472b6" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">
    RESONANCE STRUCTURES OF PHENOXIDE ION (NEGATIVE CHARGE AT ORTHO &amp; PARA)
  </text>

  <!-- Structure I -->
  <rect x="40" y="185" width="130" height="100" rx="6" fill="#1e293b" stroke="#64748b"/>
  <text x="105" y="205" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Form (I)</text>
  <text x="105" y="235" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">[:O⁻–C₆H₅]</text>
  <text x="105" y="265" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Charge on Oxygen</text>

  <!-- Arrow -->
  <text x="180" y="240" fill="#f43f5e" font-size="16" font-weight="700">↔</text>

  <!-- Structure II -->
  <rect x="200" y="185" width="130" height="100" rx="6" fill="#1e293b" stroke="#f59e0b"/>
  <text x="265" y="205" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Form (II)</text>
  <text x="265" y="235" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">[O=C₆H₅ (o⁻)]</text>
  <text x="265" y="265" fill="#fde047" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">ortho-Carbanion</text>

  <!-- Arrow -->
  <text x="340" y="240" fill="#f43f5e" font-size="16" font-weight="700">↔</text>

  <!-- Structure III -->
  <rect x="360" y="185" width="130" height="100" rx="6" fill="#1e293b" stroke="#10b981"/>
  <text x="425" y="205" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Form (III)</text>
  <text x="425" y="235" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">[O=C₆H₅ (p⁻)]</text>
  <text x="425" y="265" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">para-Carbanion</text>

  <!-- Arrow -->
  <text x="500" y="240" fill="#f43f5e" font-size="16" font-weight="700">↔</text>

  <!-- Structure IV -->
  <rect x="520" y="185" width="130" height="100" rx="6" fill="#1e293b" stroke="#f59e0b"/>
  <text x="585" y="205" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Form (IV)</text>
  <text x="585" y="235" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">[O=C₆H₅ (o'⁻)]</text>
  <text x="585" y="265" fill="#fde047" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">ortho'-Carbanion</text>

  <!-- Arrow -->
  <text x="660" y="240" fill="#f43f5e" font-size="16" font-weight="700">↔</text>

  <!-- Hybrid -->
  <rect x="680" y="185" width="85" height="100" rx="6" fill="#312e81" stroke="#818cf8"/>
  <text x="722" y="205" fill="#818cf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Hybrid</text>
  <text x="722" y="240" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">δ⁻ at o, p</text>

  <!-- Bottom: Substituent Effect & Acidity Order Matrix -->
  <rect x="24" y="310" width="752" height="155" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="40" y="330" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">SUBSTITUENT ELECTRONIC EFFECTS ON PHENOL ACIDITY:</text>

  <text x="40" y="352" fill="#4ade80" font-family="system-ui, sans-serif" font-size="11">
    ▲ <tspan font-weight="700">Electron Withdrawing Groups (–NO₂, –CN, –CHO, –X):</tspan> Disperse negative charge → Stabilize phenoxide → <tspan font-weight="700">INCREASE Acidity</tspan>.
  </text>
  <text x="55" y="370" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="10">
    Position Impact: <tspan font-weight="700" fill="#ffffff">Para > Ortho > Meta</tspan> (o-nitrophenol has intramolecular H-bonding which slightly lowers pKₐ compared to p-isomer).
  </text>

  <text x="40" y="395" fill="#f87171" font-family="system-ui, sans-serif" font-size="11">
    ▼ <tspan font-weight="700">Electron Donating Groups (–CH₃, –OCH₃, –NH₂):</tspan> Intensify negative charge (+I / +R) → Destabilize phenoxide → <tspan font-weight="700">DECREASE Acidity</tspan>.
  </text>
  <text x="55" y="413" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10">
    Position Impact: Cresols (o, m, p-methylphenols) and Methoxyphenols are less acidic than pure phenol.
  </text>

  <!-- NEET Gold Ranking -->
  <rect x="40" y="425" width="720" height="30" rx="4" fill="#0f172a" stroke="#fbbf24"/>
  <text x="400" y="445" fill="#fde047" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">
    NEET MASTER ACIDITY ORDER: 2,4,6-Trinitrophenol (Picric, pKₐ 0.71) > p-Nitrophenol (7.15) > o-Nitrophenol (7.23) > m-Nitrophenol (8.35) > Phenol (9.98) > p-Cresol (10.2) > Ethanol (16)
  </text>
</svg>`,

  // 4. Kolbe-Schmitt Reaction vs Reimer-Tiemann Reaction Mechanisms
  kolbeAndReimerTiemannMechanisms: `<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="nrBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" fill="url(#nrBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Header -->
  <rect x="24" y="16" width="752" height="42" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="400" y="42" fill="#dcfce7" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    MASTER NAMED REACTIONS: KOLBE-SCHMITT (CARBOXYLATION) &amp; REIMER-TIEMANN (FORMYLATION)
  </text>

  <!-- Left: Kolbe-Schmitt Reaction -->
  <rect x="24" y="70" width="360" height="390" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <rect x="24" y="70" width="360" height="32" rx="10" fill="#15803d"/>
  <text x="204" y="92" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    KOLBE'S REACTION (Synthesis of Aspirin Precursor)
  </text>

  <text x="40" y="125" fill="#4ade80" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Reagents: (i) NaOH (ii) CO₂ (400 K, 4–7 atm) (iii) H⁺</text>

  <!-- Step 1 -->
  <rect x="40" y="140" width="328" height="65" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="52" y="160" fill="#86efac" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Step 1: Generation of Sodium Phenoxide</text>
  <text x="52" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">C₆H₅OH + NaOH → C₆H₅O⁻ Na⁺ + H₂O</text>
  <text x="52" y="195" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Phenoxide is far more nucleophilic than neutral phenol.</text>

  <!-- Step 2 -->
  <rect x="40" y="215" width="328" height="75" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="52" y="235" fill="#86efac" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Step 2: Electrophilic Carboxylation</text>
  <text x="52" y="255" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Phenoxide + CO₂ xrightarrow{400 K, 4-7 atm} Sodium Salicylate</text>
  <text x="52" y="275" fill="#fde047" font-family="system-ui, sans-serif" font-size="10">Weak electrophile CO₂ attacks electron-rich ortho position.</text>

  <!-- Step 3 / Major Product -->
  <rect x="40" y="300" width="328" height="85" rx="6" fill="#0f172a" stroke="#22c55e"/>
  <text x="52" y="320" fill="#22c55e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Major Product: 2-Hydroxybenzoic Acid (Salicylic Acid)</text>
  <text x="52" y="340" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">Salicylic Acid + (CH₃CO)₂O xrightarrow{H⁺} <tspan fill="#facc15" font-weight="700">Aspirin (Painkiller)</tspan></text>
  <text x="52" y="360" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="10">Salicylic Acid + CH₃OH xrightarrow{H₂SO₄} Oil of Wintergreen</text>
  <text x="52" y="375" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="10">Salicylic Acid + Phenol xrightarrow{POCl₃} Salol (Internal antiseptic)</text>

  <text x="40" y="445" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10" font-weight="600">⚠️ NEET Trap: Ortho isomer dominates due to chelation by Na⁺.</text>

  <!-- Right: Reimer-Tiemann Reaction -->
  <rect x="416" y="70" width="360" height="390" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="416" y="70" width="360" height="32" rx="10" fill="#1d4ed8"/>
  <text x="596" y="92" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    REIMER-TIEMANN REACTION (Formylation)
  </text>

  <text x="432" y="125" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Reagents: CHCl₃ + aq. NaOH (340 K), then dil. HCl</text>

  <!-- Intermediate / Electrophile -->
  <rect x="432" y="140" width="328" height="65" rx="6" fill="#0f172a" stroke="#f43f5e"/>
  <text x="444" y="160" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="11" font-weight="700">⚡ Active Electrophile: Dichlorocarbene (:CCl₂)</text>
  <text x="444" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">CHCl₃ + OH⁻ ⇌ :CCl₃⁻ + H₂O → <tspan fill="#fca5a5" font-weight="700">:CCl₂ (Electrophile)</tspan> + Cl⁻</text>
  <text x="444" y="195" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Neutral, electron-deficient species (6 electrons in valence shell).</text>

  <!-- Intermediate -->
  <rect x="432" y="215" width="328" height="75" rx="6" fill="#0f172a" stroke="#334155"/>
  <text x="444" y="235" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Step 2: Electrophilic Attack &amp; Benzyl Dichloride Intermediate</text>
  <text x="444" y="255" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Attack at ortho position → intermediate [o-O⁻–C₆H₄–CHCl₂]</text>
  <text x="444" y="275" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Hydrolysis of –CHCl₂ by aq. NaOH yields –CH=O (Aldehyde).</text>

  <!-- Major Product -->
  <rect x="432" y="300" width="328" height="85" rx="6" fill="#0f172a" stroke="#3b82f6"/>
  <text x="444" y="320" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Major Product: 2-Hydroxybenzaldehyde (Salicylaldehyde)</text>
  <text x="444" y="340" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">Ortho isomer is major due to <tspan fill="#93c5fd" font-weight="700">Intramolecular H-Bonding</tspan>.</text>
  <text x="444" y="360" fill="#fcd34d" font-family="system-ui, sans-serif" font-size="10">⚠️ NEET Variation: If CCl₄ + NaOH is used instead of CHCl₃,</text>
  <text x="444" y="375" fill="#fcd34d" font-family="system-ui, sans-serif" font-size="10"><tspan font-weight="700">Salicylic Acid</tspan> is formed as the major product!</text>

  <text x="432" y="445" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="10" font-weight="600">✓ Distillation: o-isomer is steam volatile; p-isomer is non-volatile.</text>
</svg>`,

  // 5. Williamson Ether Synthesis & Ether Cleavage Mechanism by HI
  williamsonSynthesisAndEtherCleavage: `<svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="ethBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="480" fill="url(#ethBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Header -->
  <rect x="24" y="16" width="752" height="42" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="400" y="42" fill="#fef3c7" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    ETHERS: WILLIAMSON SYNTHESIS (S_N2) &amp; ACIDIC CLEAVAGE BY HYDROGEN IODIDE (HI)
  </text>

  <!-- Left: Williamson Synthesis -->
  <rect x="24" y="70" width="360" height="390" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <rect x="24" y="70" width="360" height="32" rx="10" fill="#d97706"/>
  <text x="204" y="92" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    WILLIAMSON ETHER SYNTHESIS (S_N2)
  </text>

  <text x="40" y="125" fill="#fde047" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Equation: R–O⁻ Na⁺ + R'–X → R–O–R' + NaX</text>
  <text x="40" y="145" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Substrate Rule: Alkyl Halide (R'–X) MUST be 1° or Methyl!</text>

  <!-- Correct Pair Card -->
  <rect x="40" y="160" width="328" height="110" rx="8" fill="#0f172a" stroke="#22c55e"/>
  <text x="52" y="180" fill="#4ade80" font-family="system-ui, sans-serif" font-size="12" font-weight="700">✓ CORRECT ROUTE to tert-Butyl Methyl Ether:</text>
  <text x="52" y="200" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">(CH₃)₃C–O⁻ Na⁺ (3° Alkoxide) + CH₃–Br (1° Halide)</text>
  <text x="52" y="220" fill="#86efac" font-family="system-ui, sans-serif" font-size="11">↓ S_N2 Backside Attack on Methyl</text>
  <text x="52" y="240" fill="#fef08a" font-family="system-ui, sans-serif" font-size="12" font-weight="700">(CH₃)₃C–O–CH₃ (100% Ether Yield!)</text>
  <text x="52" y="260" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="10">Alkoxide is sterically bulky but methyl halide is unhindered.</text>

  <!-- Forbidden / Elimination Trap Card -->
  <rect x="40" y="280" width="328" height="115" rx="8" fill="#0f172a" stroke="#ef4444"/>
  <text x="52" y="300" fill="#f87171" font-family="system-ui, sans-serif" font-size="12" font-weight="700">❌ FATAL NEET TRAP (Elimination Competes):</text>
  <text x="52" y="320" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="11">CH₃–O⁻ Na⁺ + (CH₃)₃C–Br (3° Alkyl Halide)</text>
  <text x="52" y="340" fill="#f87171" font-family="system-ui, sans-serif" font-size="11">↓ 100% E2 Elimination (NOT Substitution!)</text>
  <text x="52" y="360" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">CH₂=C(CH₃)₂ (Isobutylene Alkene) + CH₃OH</text>
  <text x="52" y="380" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Strong alkoxide base causes dehydrohalogenation on 3° halide.</text>

  <text x="40" y="445" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10" font-weight="600">Aryl Halides (C₆H₅Cl) CANNOT be used in Williamson synthesis.</text>

  <!-- Right: Ether Cleavage by HI -->
  <rect x="416" y="70" width="360" height="390" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5"/>
  <rect x="416" y="70" width="360" height="32" rx="10" fill="#6d28d9"/>
  <text x="596" y="92" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    ETHER CLEAVAGE BY HYDROGEN IODIDE (HI)
  </text>

  <text x="432" y="125" fill="#c4b5fd" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Step 1: Protonation to Oxonium ion [R–O⁺(H)–R']</text>

  <!-- Case 1: 1°/2° Alkyl Ethers (SN2) -->
  <rect x="432" y="140" width="328" height="90" rx="6" fill="#0f172a" stroke="#a855f7"/>
  <text x="444" y="160" fill="#c084fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Case 1: Primary / Secondary Ethers (S_N2 Cleavage)</text>
  <text x="444" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">CH₃–O–CH₂CH₃ + HI → <tspan fill="#38bdf8" font-weight="700">CH₃–I</tspan> + CH₃CH₂–OH</text>
  <text x="444" y="200" fill="#e9d5ff" font-family="system-ui, sans-serif" font-size="10">Rule: I⁻ attacks the <tspan font-weight="700" fill="#fde047">LESS HINDERED (smaller) alkyl group</tspan>.</text>
  <text x="444" y="218" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Excess HI converts both into alkyl iodides: CH₃I + CH₃CH₂I.</text>

  <!-- Case 2: 3° Alkyl Ether (SN1) -->
  <rect x="432" y="235" width="328" height="95" rx="6" fill="#0f172a" stroke="#f43f5e"/>
  <text x="444" y="255" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Case 2: Tertiary Alkyl Ether (S_N1 Cleavage!)</text>
  <text x="444" y="275" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">(CH₃)₃C–O–CH₃ + HI → <tspan fill="#f43f5e" font-weight="700">(CH₃)₃C–I</tspan> + CH₃–OH</text>
  <text x="444" y="295" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10">Rule: Stable 3° carbocation forms first; I⁻ attacks <tspan font-weight="700" fill="#fca5a5">3° Carbon</tspan>!</text>
  <text x="444" y="315" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">Major: tert-Butyl iodide + Methanol (NOT methyl iodide!).</text>

  <!-- Case 3: Alkyl Aryl Ether / Anisole -->
  <rect x="432" y="335" width="328" height="95" rx="6" fill="#0f172a" stroke="#38bdf8"/>
  <text x="444" y="355" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Case 3: Alkyl Aryl Ether (Anisole Cleavage)</text>
  <text x="444" y="375" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">C₆H₅–O–CH₃ + HI xrightarrow{373 K} <tspan fill="#4ade80" font-weight="700">C₆H₅–OH (Phenol)</tspan> + CH₃–I</text>
  <text x="444" y="395" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="10">Why: Aryl C–O has partial double bond character (resonance, sp²).</text>
  <text x="444" y="415" fill="#bae6fd" font-family="system-ui, sans-serif" font-size="10">Iodide attacks methyl group. Phenol NEVER converts to iodobenzene!</text>
</svg>`,

  // 6. Master One-Page Reaction Map for Chapter 20
  alcoholsPhenolsEthersMasterMap: `<svg viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto">
  <defs>
    <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>

  <rect width="800" height="520" fill="url(#mapBg)" rx="16" stroke="#334155" stroke-width="2"/>

  <!-- Title Banner -->
  <rect x="24" y="16" width="752" height="42" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="400" y="42" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">
    CHAPTER 20 MASTER REACTION ROADMAP: ALCOHOLS, PHENOLS &amp; ETHERS
  </text>

  <!-- Section 1: Alcohols Hub -->
  <rect x="24" y="70" width="240" height="430" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="24" y="70" width="240" height="30" rx="10" fill="#1d4ed8"/>
  <text x="144" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    ALCOHOLS (R–OH) HUB
  </text>

  <text x="36" y="120" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="11" font-weight="700">SYNTHESIS:</text>
  <text x="36" y="138" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Alkene + H₂O/H⁺ → 2° Alcohol (Mark)</text>
  <text x="36" y="154" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Alkene + B₂H₆/H₂O₂ → 1° Alcohol (Anti)</text>
  <text x="36" y="170" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• RCHO + NaBH₄ / LiAlH₄ → 1° Alcohol</text>
  <text x="36" y="186" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• R₂CO + NaBH₄ → 2° Alcohol</text>
  <text x="36" y="202" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Carbonyl + RMgX → 1°/2°/3° Alcohol</text>

  <text x="36" y="230" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="11" font-weight="700">KEY REACTIONS:</text>
  <text x="36" y="248" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• ROH + Na → RO⁻Na⁺ + ½ H₂↑</text>
  <text x="36" y="264" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• ROH + SOCl₂/Py → R–Cl + SO₂↑ + HCl↑</text>
  <text x="36" y="280" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 1° ROH + PCC → R–CHO (Aldehyde)</text>
  <text x="36" y="296" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 1° ROH + KMnO₄ → R–COOH (Acid)</text>
  <text x="36" y="312" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 2° ROH + K₂Cr₂O₇/H⁺ → R₂C=O (Ketone)</text>
  <text x="36" y="328" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 3° ROH + KMnO₄ → No reaction (resist)</text>

  <text x="36" y="356" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="11" font-weight="700">DEHYDROGENATION (Cu, 573 K):</text>
  <text x="36" y="374" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 1° ROH → RCHO + H₂↑</text>
  <text x="36" y="390" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 2° ROH → RCOR + H₂↑</text>
  <text x="36" y="406" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10">• 3° ROH → <tspan font-weight="700" fill="#f87171">Alkene (Dehydration!)</tspan></text>

  <text x="36" y="434" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="11" font-weight="700">DEHYDRATION (Conc. H₂SO₄):</text>
  <text x="36" y="452" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 443 K → Alkene (Saytzeff)</text>
  <text x="36" y="468" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 413 K → Ether (R–O–R)</text>

  <!-- Section 2: Phenols Hub -->
  <rect x="280" y="70" width="240" height="430" rx="10" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
  <rect x="280" y="70" width="240" height="30" rx="10" fill="#be185d"/>
  <text x="400" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    PHENOLS (Ar–OH) HUB
  </text>

  <text x="292" y="120" fill="#f472b6" font-family="system-ui, sans-serif" font-size="11" font-weight="700">SYNTHESIS:</text>
  <text x="292" y="138" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Cumene + O₂ → Hydroperoxide → Phenol + Acetone (Industrial!)</text>
  <text x="292" y="160" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Ar–N₂⁺Cl⁻ + H₂O (warm) → Phenol + N₂↑</text>
  <text x="292" y="176" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Chlorobenzene + NaOH (623 K, 300 atm) → Phenol (Dow's)</text>

  <text x="292" y="206" fill="#f472b6" font-family="system-ui, sans-serif" font-size="11" font-weight="700">ELECTROPHILIC REACTIONS:</text>
  <text x="292" y="224" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + Br₂ / H₂O → 2,4,6-Tribromophenol (White ppt)</text>
  <text x="292" y="246" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + Br₂ / CS₂ (273 K) → p-Bromophenol</text>
  <text x="292" y="262" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + dil. HNO₃ → o + p-Nitrophenol</text>
  <text x="292" y="278" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + conc. HNO₃ → 2,4,6-Trinitrophenol (Picric Acid)</text>

  <text x="292" y="308" fill="#f472b6" font-family="system-ui, sans-serif" font-size="11" font-weight="700">NAMED TRANSFORMATIONS:</text>
  <text x="292" y="326" fill="#fde047" font-family="system-ui, sans-serif" font-size="10">• Kolbe-Schmitt: + CO₂ / NaOH → Salicylic Acid</text>
  <text x="292" y="348" fill="#fde047" font-family="system-ui, sans-serif" font-size="10">• Reimer-Tiemann: + CHCl₃/NaOH → Salicylaldehyde</text>
  <text x="292" y="370" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + Zn dust / Δ → Benzene (Reduction)</text>
  <text x="292" y="386" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + Na₂Cr₂O₇/H₂SO₄ → Benzoquinone (Oxidation)</text>
  <text x="292" y="402" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + Neutral FeCl₃ → Violet complex</text>

  <text x="292" y="434" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10" font-weight="600">⚠️ Neutralisation Trap: Phenol dissolves in aq. NaOH, but does NOT react with NaHCO₃.</text>

  <!-- Section 3: Ethers Hub -->
  <rect x="536" y="70" width="240" height="430" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
  <rect x="536" y="70" width="240" height="30" rx="10" fill="#047857"/>
  <text x="656" y="90" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">
    ETHERS (R–O–R') HUB
  </text>

  <text x="548" y="120" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">SYNTHESIS:</text>
  <text x="548" y="138" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 2 R–OH xrightarrow{H₂SO₄, 413 K} R–O–R</text>
  <text x="548" y="154" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Williamson: R–O⁻Na⁺ + R'–X → R–O–R'</text>
  <text x="548" y="170" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="10">  (R'X must be 1° / methyl)</text>

  <text x="548" y="200" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">CLEAVAGE WITH HI:</text>
  <text x="548" y="218" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 1°/2° Ether + HI → Smaller R–I + Larger R'–OH (S_N2)</text>
  <text x="548" y="244" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• 3° Ether + HI → 3° R–I + CH₃OH (S_N1)</text>
  <text x="548" y="264" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Anisole + HI → Phenol + CH₃I</text>
  <text x="548" y="280" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• Excess HI → R–I + R'–I + H₂O</text>

  <text x="548" y="310" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">ANISOLE (C₆H₅OCH₃) REACTIONS:</text>
  <text x="548" y="328" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• –OCH₃ is Activating &amp; o/p-Directing (+R)</text>
  <text x="548" y="344" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + Br₂ / CH₃COOH → p-Bromoanisole (90% Major)</text>
  <text x="548" y="366" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + HNO₃/H₂SO₄ → p-Nitroanisole (Major)</text>
  <text x="548" y="382" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + CH₃Cl / AlCl₃ → 4-Methoxytoluene</text>
  <text x="548" y="398" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="10">• + CH₃COCl / AlCl₃ → 4-Methoxyacetophenone</text>

  <text x="548" y="434" fill="#fcd34d" font-family="system-ui, sans-serif" font-size="10" font-weight="600">✓ Safety: Ethers form explosive peroxides in air; detected by FeSO₄ + KCNS (blood red).</text>
</svg>`
};
