export const PRACTICAL_CHEMISTRY_DIAGRAMS = {
  cationGroupSeparationTree: `<svg viewBox="0 0 840 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
  <defs>
    <linearGradient id="gradSalt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="g1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
    </marker>
  </defs>
  <!-- Background Card -->
  <rect width="840" height="460" fill="#0f172a" rx="14"/>
  
  <!-- Header -->
  <rect x="20" y="16" width="800" height="42" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="420" y="42" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">SYSTEMATIC CATION SEPARATION FLOWCHART (GROUPS 0 TO VI)</text>

  <!-- Group 0 Box -->
  <rect x="25" y="72" width="230" height="74" fill="#1e293b" rx="8" stroke="#f59e0b" stroke-width="2"/>
  <text x="35" y="93" fill="#f59e0b" font-size="13" font-weight="bold">GROUP 0: NH₄⁺ (Ammonium)</text>
  <text x="35" y="111" fill="#94a3b8" font-size="11">Reagent: NaOH + Heat (Warm)</text>
  <text x="35" y="129" fill="#e2e8f0" font-size="11">Observation: NH₃ gas ⟶ Nessler's Brown ppt</text>

  <!-- Original Solution / Group I Box -->
  <rect x="285" y="72" width="260" height="74" fill="#1e293b" rx="8" stroke="#38bdf8" stroke-width="2"/>
  <text x="295" y="93" fill="#38bdf8" font-size="13" font-weight="bold">GROUP I: Pb²⁺, (Ag⁺, Hg₂²⁺)</text>
  <text x="295" y="111" fill="#94a3b8" font-size="11">Reagent: Dilute HCl</text>
  <text x="295" y="129" fill="#e2e8f0" font-size="11">Ppt: PbCl₂ (White, soluble in hot H₂O)</text>

  <!-- Group II Box -->
  <rect x="575" y="72" width="240" height="74" fill="#1e293b" rx="8" stroke="#ec4899" stroke-width="2"/>
  <text x="585" y="93" fill="#ec4899" font-size="13" font-weight="bold">GROUP II: Cu²⁺, Pb²⁺, As³⁺</text>
  <text x="585" y="111" fill="#94a3b8" font-size="11">Reagent: H₂S gas in Dilute HCl (Acidic)</text>
  <text x="585" y="129" fill="#e2e8f0" font-size="11">Ppt: CuS (Black, low S²⁻ due to C.I.E)</text>

  <!-- Arrow down -->
  <line x1="415" y1="146" x2="415" y2="175" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="425" y="166" fill="#94a3b8" font-size="10">Filtrate</text>

  <!-- Group III Box -->
  <rect x="25" y="182" width="240" height="78" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="2"/>
  <text x="35" y="203" fill="#10b981" font-size="13" font-weight="bold">GROUP III: Fe³⁺, Al³⁺, Cr³⁺</text>
  <text x="35" y="221" fill="#94a3b8" font-size="11">Reagent: NH₄OH in presence of NH₄Cl</text>
  <text x="35" y="238" fill="#e2e8f0" font-size="11">Ppt: Fe(OH)₃ (Red-Brown), Al(OH)₃ (Gelatinous White)</text>

  <!-- Group IV Box -->
  <rect x="295" y="182" width="240" height="78" fill="#1e293b" rx="8" stroke="#a855f7" stroke-width="2"/>
  <text x="305" y="203" fill="#a855f7" font-size="13" font-weight="bold">GROUP IV: Zn²⁺, Mn²⁺, Ni²⁺, Co²⁺</text>
  <text x="305" y="221" fill="#94a3b8" font-size="11">Reagent: H₂S gas + NH₄OH (Alkaline)</text>
  <text x="305" y="238" fill="#e2e8f0" font-size="11">Ppt: ZnS (Dirty White), MnS (Buff/Flesh), NiS (Black)</text>

  <!-- Group V Box -->
  <rect x="565" y="182" width="250" height="78" fill="#1e293b" rx="8" stroke="#06b6d4" stroke-width="2"/>
  <text x="575" y="203" fill="#06b6d4" font-size="13" font-weight="bold">GROUP V: Ba²⁺, Sr²⁺, Ca²⁺</text>
  <text x="575" y="221" fill="#94a3b8" font-size="11">Reagent: (NH₄)₂CO₃ + NH₄OH + NH₄Cl</text>
  <text x="575" y="238" fill="#e2e8f0" font-size="11">Ppt: BaCO₃, SrCO₃, CaCO₃ (All White Carbonates)</text>

  <!-- Group VI Box & Common Ion Summary -->
  <rect x="25" y="280" width="370" height="80" fill="#1e293b" rx="8" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="35" y="302" fill="#cbd5e1" font-size="13" font-weight="bold">GROUP VI: Mg²⁺ (Magnesium)</text>
  <text x="35" y="321" fill="#94a3b8" font-size="11">Reagent: Disodium hydrogen phosphate (Na₂HPO₄)</text>
  <text x="35" y="339" fill="#e2e8f0" font-size="11">Ppt: Mg(NH₄)PO₄ (White crystalline precipitate)</text>

  <rect x="425" y="280" width="390" height="80" fill="#1e293b" rx="8" stroke="#ef4444" stroke-width="1.5"/>
  <text x="435" y="302" fill="#f87171" font-size="13" font-weight="bold">⚠️ SOLUBILITY PRODUCT & COMMON-ION PRINCIPLE</text>
  <text x="435" y="321" fill="#cbd5e1" font-size="11">• Grp II (dil HCl): High [H⁺] suppresses [S²⁻] ⟶ only low Ksp Grp II ppts</text>
  <text x="435" y="339" fill="#cbd5e1" font-size="11">• Grp IV (NH₄OH): High [OH⁻] boosts [S²⁻] ⟶ high Ksp Grp IV ppts</text>

  <!-- Bottom Key Rules Banner -->
  <rect x="25" y="375" width="790" height="70" fill="#1e1b4b" rx="8" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="420" y="398" fill="#818cf8" font-size="13" font-weight="bold" text-anchor="middle">KEY SEPARATION LOGIC FOR NEET EXAM</text>
  <text x="420" y="416" fill="#c7d2fe" font-size="11" text-anchor="middle">1. Dil. HCl (Grp I) ⟶ 2. H₂S + dil. HCl (Grp II) ⟶ 3. Boil off H₂S + conc. HNO₃ + NH₄Cl + NH₄OH (Grp III)</text>
  <text x="420" y="433" fill="#c7d2fe" font-size="11" text-anchor="middle">4. H₂S in NH₄OH (Grp IV) ⟶ 5. (NH₄)₂CO₃ + NH₄OH (Grp V) ⟶ 6. Na₂HPO₄ (Grp VI)</text>
</svg>`,

  flameTestComparison: `<svg viewBox="0 0 840 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
  <rect width="840" height="320" fill="#0f172a" rx="14"/>
  <rect x="20" y="16" width="800" height="38" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="420" y="41" fill="#f59e0b" font-size="15" font-weight="bold" text-anchor="middle">FLAME TEST COLORS & SPECTROSCOPIC EMISSIONS IN BUNSEN FLAME</text>

  <!-- Ion 1: Na+ Golden Yellow -->
  <rect x="25" y="68" width="120" height="150" fill="#1e293b" rx="10" stroke="#facc15" stroke-width="2"/>
  <circle cx="85" cy="115" r="28" fill="#eab308" filter="drop-shadow(0 0 10px #facc15)"/>
  <text x="85" y="162" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Na⁺</text>
  <text x="85" y="180" fill="#fde047" font-size="11" text-anchor="middle">Golden Yellow</text>
  <text x="85" y="202" fill="#94a3b8" font-size="9" text-anchor="middle">Persistent flame</text>

  <!-- Ion 2: K+ Lilac / Violet -->
  <rect x="160" y="68" width="120" height="150" fill="#1e293b" rx="10" stroke="#c084fc" stroke-width="2"/>
  <circle cx="220" cy="115" r="28" fill="#a855f7" filter="drop-shadow(0 0 10px #c084fc)"/>
  <text x="220" y="162" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">K⁺</text>
  <text x="220" y="180" fill="#d8b4fe" font-size="11" text-anchor="middle">Lilac / Violet</text>
  <text x="220" y="202" fill="#94a3b8" font-size="9" text-anchor="middle">Blue glass ⟶ Crimson</text>

  <!-- Ion 3: Ca2+ Brick Red -->
  <rect x="295" y="68" width="120" height="150" fill="#1e293b" rx="10" stroke="#f87171" stroke-width="2"/>
  <circle cx="355" cy="115" r="28" fill="#ef4444" filter="drop-shadow(0 0 10px #f87171)"/>
  <text x="355" y="162" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Ca²⁺</text>
  <text x="355" y="180" fill="#fca5a5" font-size="11" text-anchor="middle">Brick Red</text>
  <text x="355" y="202" fill="#94a3b8" font-size="9" text-anchor="middle">Transient flame</text>

  <!-- Ion 4: Sr2+ Crimson Red -->
  <rect x="430" y="68" width="120" height="150" fill="#1e293b" rx="10" stroke="#e11d48" stroke-width="2"/>
  <circle cx="490" cy="115" r="28" fill="#be123c" filter="drop-shadow(0 0 10px #e11d48)"/>
  <text x="490" y="162" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Sr²⁺</text>
  <text x="490" y="180" fill="#fda4af" font-size="11" text-anchor="middle">Crimson Red</text>
  <text x="490" y="202" fill="#94a3b8" font-size="9" text-anchor="middle">Deep scarlet tone</text>

  <!-- Ion 5: Ba2+ Apple Green -->
  <rect x="565" y="68" width="120" height="150" fill="#1e293b" rx="10" stroke="#4ade80" stroke-width="2"/>
  <circle cx="625" cy="115" r="28" fill="#22c55e" filter="drop-shadow(0 0 10px #4ade80)"/>
  <text x="625" y="162" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Ba²⁺</text>
  <text x="625" y="180" fill="#86efac" font-size="11" text-anchor="middle">Apple Green</text>
  <text x="625" y="202" fill="#94a3b8" font-size="9" text-anchor="middle">Persists long</text>

  <!-- Ion 6: Cu2+ Bluish Green -->
  <rect x="700" y="68" width="115" height="150" fill="#1e293b" rx="10" stroke="#2dd4bf" stroke-width="2"/>
  <circle cx="757" cy="115" r="28" fill="#0d9488" filter="drop-shadow(0 0 10px #2dd4bf)"/>
  <text x="757" y="162" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Cu²⁺</text>
  <text x="757" y="180" fill="#5eead4" font-size="11" text-anchor="middle">Bluish Green</text>
  <text x="757" y="202" fill="#94a3b8" font-size="9" text-anchor="middle">Pt wire / Charcoal</text>

  <!-- Bottom Important Trap Warning -->
  <rect x="25" y="232" width="790" height="72" fill="#1e293b" rx="8" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="420" y="255" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">⚠️ CRITICAL NEET FLAME TEST RULES</text>
  <text x="420" y="274" fill="#cbd5e1" font-size="11" text-anchor="middle">• Platinum wire cleaned with conc. HCl. Chlorides are volatile and give best flame tests.</text>
  <text x="420" y="291" fill="#cbd5e1" font-size="11" text-anchor="middle">• Mg²⁺ and Be²⁺ do NOT impart any colour to flame (high ionization energy / small atomic size).</text>
</svg>`,

  volumetricTitrationSetup: `<svg viewBox="0 0 840 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
  <rect width="840" height="400" fill="#0f172a" rx="14"/>
  <rect x="20" y="14" width="800" height="38" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="420" y="39" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">VOLUMETRIC ANALYSIS & TITRATION pH CURVES FOR INDICATOR SELECTION</text>

  <!-- Left: Burette & Flask Schematic -->
  <g transform="translate(40, 70)">
    <!-- Burette Stand -->
    <rect x="15" y="270" width="130" height="12" fill="#475569" rx="3"/>
    <rect x="35" y="10" width="8" height="260" fill="#64748b"/>
    <!-- Clamp -->
    <rect x="43" y="80" width="30" height="8" fill="#94a3b8" rx="2"/>
    <!-- Burette Tube -->
    <rect x="70" y="15" width="20" height="190" fill="#e2e8f0" stroke="#0284c7" stroke-width="2" rx="2" opacity="0.85"/>
    <line x1="70" y1="50" x2="82" y2="50" stroke="#0369a1" stroke-width="1.5"/>
    <line x1="70" y1="80" x2="86" y2="80" stroke="#0369a1" stroke-width="1.5"/>
    <line x1="70" y1="110" x2="82" y2="110" stroke="#0369a1" stroke-width="1.5"/>
    <line x1="70" y1="140" x2="86" y2="140" stroke="#0369a1" stroke-width="1.5"/>
    <line x1="70" y1="170" x2="82" y2="170" stroke="#0369a1" stroke-width="1.5"/>
    <rect x="73" y="195" width="14" height="12" fill="#0284c7" rx="2"/> <!-- Stopcock -->
    <path d="M 77 207 L 80 230" stroke="#0284c7" stroke-width="3"/>
    <!-- Conical Flask -->
    <path d="M 62 245 L 98 245 L 120 300 L 40 300 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2" opacity="0.85"/>
    <text x="80" y="280" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">Titrand + Ind.</text>
    
    <!-- Labels -->
    <text x="105" y="45" fill="#38bdf8" font-size="11" font-weight="bold">Burette (Titrant)</text>
    <text x="105" y="60" fill="#94a3b8" font-size="10">Known / Standard soln</text>
    <text x="135" y="285" fill="#38bdf8" font-size="11" font-weight="bold">Conical Flask</text>
    <text x="135" y="300" fill="#94a3b8" font-size="10">Pipetted Volume (V₁)</text>
  </g>

  <!-- Right: pH Indicator Ranges & Titration Curves -->
  <g transform="translate(310, 70)">
    <rect x="0" y="0" width="490" height="295" fill="#1e293b" rx="10" stroke="#334155" stroke-width="1.5"/>
    <text x="245" y="24" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">INDICATOR TRANSITION pH RANGES</text>

    <!-- Table Header -->
    <rect x="15" y="38" width="460" height="28" fill="#334155" rx="5"/>
    <text x="25" y="56" fill="#38bdf8" font-size="11" font-weight="bold">Indicator</text>
    <text x="145" y="56" fill="#38bdf8" font-size="11" font-weight="bold">Acidic Color</text>
    <text x="255" y="56" fill="#38bdf8" font-size="11" font-weight="bold">Basic Color</text>
    <text x="375" y="56" fill="#38bdf8" font-size="11" font-weight="bold">pH Range</text>

    <!-- Row 1: Phenolphthalein -->
    <rect x="15" y="70" width="460" height="42" fill="#0f172a" rx="4"/>
    <text x="25" y="94" fill="#ffffff" font-size="11" font-weight="bold">Phenolphthalein (HPh)</text>
    <text x="145" y="94" fill="#94a3b8" font-size="11">Colourless</text>
    <text x="255" y="94" fill="#ec4899" font-size="11" font-weight="bold">Pink / Magenta</text>
    <text x="375" y="94" fill="#f43f5e" font-size="11" font-weight="bold">8.3 – 10.0</text>

    <!-- Row 2: Methyl Orange -->
    <rect x="15" y="116" width="460" height="42" fill="#1e293b" rx="4"/>
    <text x="25" y="140" fill="#ffffff" font-size="11" font-weight="bold">Methyl Orange (MeOH)</text>
    <text x="145" y="140" fill="#ef4444" font-size="11" font-weight="bold">Red / Pink</text>
    <text x="255" y="140" fill="#eab308" font-size="11" font-weight="bold">Yellow</text>
    <text x="375" y="140" fill="#f59e0b" font-size="11" font-weight="bold">3.1 – 4.4</text>

    <!-- Row 3: Litmus -->
    <rect x="15" y="162" width="460" height="38" fill="#0f172a" rx="4"/>
    <text x="25" y="185" fill="#ffffff" font-size="11" font-weight="bold">Litmus</text>
    <text x="145" y="185" fill="#ef4444" font-size="11">Red</text>
    <text x="255" y="185" fill="#3b82f6" font-size="11">Blue</text>
    <text x="375" y="185" fill="#60a5fa" font-size="11">5.0 – 8.0</text>

    <!-- Indicator Selection Rules Box -->
    <rect x="15" y="206" width="460" height="78" fill="#1e1b4b" rx="6" stroke="#4338ca" stroke-width="1"/>
    <text x="24" y="225" fill="#a5b4fc" font-size="11" font-weight="bold">TITRATION TYPE ⟶ BEST INDICATOR CHOICE:</text>
    <text x="24" y="242" fill="#cbd5e1" font-size="10">• Strong Acid vs Strong Base (HCl vs NaOH) ⟶ Phenolphthalein OR Methyl Orange (pH jump 3.5–10.5)</text>
    <text x="24" y="258" fill="#cbd5e1" font-size="10">• Weak Acid vs Strong Base (CH₃COOH vs NaOH) ⟶ Phenolphthalein ONLY (pH jump 7.5–10.5)</text>
    <text x="24" y="274" fill="#cbd5e1" font-size="10">• Strong Acid vs Weak Base (HCl vs NH₄OH) ⟶ Methyl Orange ONLY (pH jump 3.5–7.0)</text>
  </g>
</svg>`,

  organicFunctionalGroupDiagnosticTree: `<svg viewBox="0 0 840 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans">
  <rect width="840" height="400" fill="#0f172a" rx="14"/>
  <rect x="20" y="14" width="800" height="38" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1.5"/>
  <text x="420" y="39" fill="#10b981" font-size="15" font-weight="bold" text-anchor="middle">ORGANIC FUNCTIONAL GROUP DIAGNOSTIC TESTING MATRIX</text>

  <!-- 1. Carboxylic Acid Card -->
  <rect x="25" y="65" width="245" height="95" fill="#1e293b" rx="8" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="35" y="86" fill="#f59e0b" font-size="12" font-weight="bold">CARBOXYLIC ACID (–COOH)</text>
  <text x="35" y="103" fill="#cbd5e1" font-size="11">Reagent: Saturated NaHCO₃ solution</text>
  <text x="35" y="120" fill="#e2e8f0" font-size="11">Observation: Brisk CO₂ effervescence (turns lime water milky)</text>
  <text x="35" y="137" fill="#94a3b8" font-size="10">Ester test: Fruity aroma with EtOH + conc H₂SO₄</text>

  <!-- 2. Phenol Card -->
  <rect x="295" y="65" width="250" height="95" fill="#1e293b" rx="8" stroke="#a855f7" stroke-width="1.5"/>
  <text x="305" y="86" fill="#a855f7" font-size="12" font-weight="bold">PHENOL (Ar–OH)</text>
  <text x="305" y="103" fill="#cbd5e1" font-size="11">Reagent: Neutral FeCl₃ solution</text>
  <text x="305" y="120" fill="#d8b4fe" font-size="11">Observation: Deep Violet/Purple complex [Fe(OAr)₆]³⁻</text>
  <text x="305" y="137" fill="#94a3b8" font-size="10">Bromine water: White ppt of 2,4,6-tribromophenol</text>

  <!-- 3. Primary Amine Card -->
  <rect x="565" y="65" width="250" height="95" fill="#1e293b" rx="8" stroke="#ec4899" stroke-width="1.5"/>
  <text x="575" y="86" fill="#ec4899" font-size="12" font-weight="bold">PRIMARY AMINE (1° R–NH₂ / Ar–NH₂)</text>
  <text x="575" y="103" fill="#cbd5e1" font-size="11">Reagent: CHCl₃ + alc. KOH + Warm</text>
  <text x="575" y="120" fill="#fda4af" font-size="11">Observation: Extremely foul smell of Carbylamine (R–NC)</text>
  <text x="575" y="137" fill="#94a3b8" font-size="10">Azo dye: Aniline + HNO₂ ⟶ Orange-red dye with β-naphthol</text>

  <!-- 4. Aldehydes & Ketones Card -->
  <rect x="25" y="172" width="245" height="105" fill="#1e293b" rx="8" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="35" y="193" fill="#38bdf8" font-size="12" font-weight="bold">ALDEHYDE vs KETONE (–CHO vs >C=O)</text>
  <text x="35" y="210" fill="#cbd5e1" font-size="11">2,4-DNP: Orange-yellow hydrazone (Both)</text>
  <text x="35" y="227" fill="#38bdf8" font-size="11">Tollens' reagent: Silver Mirror (Aldehyde only)</text>
  <text x="35" y="244" fill="#38bdf8" font-size="11">Fehling's solution: Red Cu₂O ppt (Aliph. Aldehyde)</text>
  <text x="35" y="261" fill="#94a3b8" font-size="10">Iodoform: Yellow CHI₃ for CH₃–C=O / CH₃–CH(OH)–</text>

  <!-- 5. Alcohol (1°, 2°, 3°) Card -->
  <rect x="295" y="172" width="250" height="105" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="1.5"/>
  <text x="305" y="193" fill="#10b981" font-size="12" font-weight="bold">ALCOHOL (–OH) & LUCAS TEST</text>
  <text x="305" y="210" fill="#cbd5e1" font-size="11">Reagent: Anhydrous ZnCl₂ + Conc. HCl</text>
  <text x="305" y="227" fill="#6ee7b7" font-size="11">3° Alcohol: Turbidity IMMEDIATELY</text>
  <text x="305" y="244" fill="#6ee7b7" font-size="11">2° Alcohol: Turbidity in ~5 minutes</text>
  <text x="305" y="261" fill="#6ee7b7" font-size="11">1° Alcohol: Clear at room temp (turbid on heating)</text>

  <!-- 6. Unsaturation (C=C / C≡C) Card -->
  <rect x="565" y="172" width="250" height="105" fill="#1e293b" rx="8" stroke="#eab308" stroke-width="1.5"/>
  <text x="575" y="193" fill="#eab308" font-size="12" font-weight="bold">UNSATURATION (Alkenes / Alkynes)</text>
  <text x="575" y="210" fill="#cbd5e1" font-size="11">1. Br₂ in CCl₄: Decolourization (Reddish-brown ⟶ Clear)</text>
  <text x="575" y="227" fill="#fde047" font-size="11">2. Baeyer's Reagent: Cold 1% alkaline KMnO₄</text>
  <text x="575" y="244" fill="#fde047" font-size="11">Observation: Pink ⟶ Decolourized + brown MnO₂ ppt</text>
  <text x="575" y="261" fill="#94a3b8" font-size="10">Forms syn-1,2-vicinal diol (glycol)</text>

  <!-- Bottom Master NEET Takeaway -->
  <rect x="25" y="290" width="790" height="95" fill="#1e293b" rx="8" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="420" y="312" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">DISTINCTION QUICK RULES FOR OBSERVATION-BASED MCQS</text>
  <text x="420" y="331" fill="#cbd5e1" font-size="11" text-anchor="middle">• Phenol vs Carboxylic acid: Carboxylic acid liberates CO₂ with NaHCO₃ (Phenol does NOT give CO₂ with NaHCO₃).</text>
  <text x="420" y="348" fill="#cbd5e1" font-size="11" text-anchor="middle">• Benzaldehyde vs Acetaldehyde: Acetaldehyde gives red Cu₂O with Fehling's solution; Benzaldehyde fails Fehling's test.</text>
  <text x="420" y="365" fill="#cbd5e1" font-size="11" text-anchor="middle">• 1° Amine vs 2°/3°: ONLY 1° amine responds to Carbylamine test (foul isocyanide odor).</text>
</svg>`
};
