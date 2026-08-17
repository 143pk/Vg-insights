// High-Quality Visual Vector Diagrams for Chapter 18: Coordination Compounds

export const COORDINATION_DIAGRAMS = {
  // 1. Fundamentals: Coordination entity anatomy & Geometries
  coordinationEntityGeometries: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" class="w-full h-auto rounded-xl bg-slate-900 font-sans border border-slate-700 shadow-xl">
  <defs>
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <linearGradient id="ligandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="counterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb7185" />
      <stop offset="100%" stop-color="#e11d48" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Title Banner -->
  <rect x="20" y="16" width="860" height="42" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="450" y="42" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle" letter-spacing="1">ANATOMY OF A COORDINATION COMPOUND: [Co(NH₃)₆]Cl₃</text>

  <!-- Anatomy Box -->
  <g transform="translate(40, 75)">
    <!-- Outer Brackets: Coordination Sphere -->
    <rect x="0" y="0" width="520" height="175" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4" />
    <text x="260" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">COORDINATION SPHERE (Non-ionisable, Directional)</text>

    <!-- Formula Breakdown Graphic -->
    <!-- Central Metal -->
    <rect x="30" y="45" width="100" height="95" rx="8" fill="url(#metalGrad)" />
    <text x="80" y="78" fill="#ffffff" font-size="20" font-weight="900" text-anchor="middle">Co³⁺</text>
    <text x="80" y="98" fill="#e0f2fe" font-size="11" font-weight="bold" text-anchor="middle">Central Metal</text>
    <text x="80" y="115" fill="#fef08a" font-size="10" text-anchor="middle">O.S. = +3 (Primary)</text>
    <text x="80" y="130" fill="#bae6fd" font-size="10" text-anchor="middle">d⁶ ion (Ar 3d⁶)</text>

    <!-- Plus / Coordinate bond -->
    <text x="155" y="100" fill="#94a3b8" font-size="26" font-weight="bold" text-anchor="middle">+</text>

    <!-- Ligands -->
    <rect x="180" y="45" width="160" height="95" rx="8" fill="url(#ligandGrad)" />
    <text x="260" y="78" fill="#ffffff" font-size="20" font-weight="900" text-anchor="middle">6 × :NH₃</text>
    <text x="260" y="98" fill="#ecfdf5" font-size="11" font-weight="bold" text-anchor="middle">Monodentate Ligands</text>
    <text x="260" y="115" fill="#fef08a" font-size="10" text-anchor="middle">Coordination No. (C.N.) = 6</text>
    <text x="260" y="130" fill="#a7f3d0" font-size="10" text-anchor="middle">Secondary Valency = 6</text>

    <!-- Equal to complex cation -->
    <text x="365" y="100" fill="#94a3b8" font-size="22" font-weight="bold" text-anchor="middle">=</text>

    <rect x="390" y="55" width="110" height="75" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="445" y="85" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">[Co(NH₃)₆]³⁺</text>
    <text x="445" y="108" fill="#94a3b8" font-size="10" text-anchor="middle">Complex Cation</text>
  </g>

  <!-- Counter Ions Box -->
  <g transform="translate(580, 75)">
    <rect x="0" y="0" width="280" height="175" rx="12" fill="#0f172a" stroke="#fb7185" stroke-width="2" />
    <text x="140" y="24" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">IONISATION SPHERE (Ionisable)</text>
    <rect x="30" y="45" width="220" height="95" rx="8" fill="url(#counterGrad)" />
    <text x="140" y="80" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle">3 Cl⁻ Ions</text>
    <text x="140" y="105" fill="#ffe4e6" font-size="12" text-anchor="middle">Satisfies Primary Valency (+3)</text>
    <text x="140" y="125" fill="#fef08a" font-size="11" text-anchor="middle">Precipitates as 3 mol AgCl with AgNO₃</text>
  </g>

  <!-- Geometries Grid -->
  <g transform="translate(40, 270)">
    <rect x="0" y="0" width="820" height="190" rx="12" fill="#1e293b" stroke="#334155" />
    <text x="410" y="24" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">COMMON COORDINATION POLYHEDRA & HYBRIDIZATIONS</text>

    <!-- Octahedral (CN=6) -->
    <g transform="translate(30, 40)">
      <rect x="0" y="0" width="235" height="135" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
      <text x="117" y="22" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Octahedral (C.N. = 6)</text>
      <circle cx="117" cy="65" r="14" fill="#38bdf8" />
      <text x="117" y="69" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">M</text>
      <!-- 6 ligands -->
      <circle cx="117" cy="35" r="7" fill="#34d399" /><line x1="117" y1="51" x2="117" y2="42" stroke="#64748b" stroke-width="2" />
      <circle cx="117" cy="95" r="7" fill="#34d399" /><line x1="117" y1="79" x2="117" y2="88" stroke="#64748b" stroke-width="2" />
      <circle cx="77" cy="55" r="7" fill="#34d399" /><line x1="103" y1="62" x2="84" y2="57" stroke="#64748b" stroke-width="2" />
      <circle cx="157" cy="75" r="7" fill="#34d399" /><line x1="131" y1="68" x2="150" y2="73" stroke="#64748b" stroke-width="2" />
      <circle cx="87" cy="80" r="7" fill="#34d399" /><line x1="105" y1="72" x2="94" y2="77" stroke="#64748b" stroke-width="2" />
      <circle cx="147" cy="50" r="7" fill="#34d399" /><line x1="129" y1="58" x2="140" y2="53" stroke="#64748b" stroke-width="2" />
      <text x="117" y="116" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">d²sp³ (Inner) or sp³d² (Outer)</text>
      <text x="117" y="128" fill="#94a3b8" font-size="9" text-anchor="middle">e.g., [Co(NH₃)₆]³⁺, [Fe(CN)₆]⁴⁻</text>
    </g>

    <!-- Tetrahedral (CN=4) -->
    <g transform="translate(295, 40)">
      <rect x="0" y="0" width="235" height="135" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
      <text x="117" y="22" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">Tetrahedral (C.N. = 4)</text>
      <circle cx="117" cy="65" r="14" fill="#a855f7" />
      <text x="117" y="69" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">M</text>
      <!-- 4 ligands -->
      <circle cx="117" cy="35" r="7" fill="#34d399" /><line x1="117" y1="51" x2="117" y2="42" stroke="#64748b" stroke-width="2" />
      <circle cx="82" cy="85" r="7" fill="#34d399" /><line x1="105" y1="73" x2="89" y2="80" stroke="#64748b" stroke-width="2" />
      <circle cx="152" cy="85" r="7" fill="#34d399" /><line x1="129" y1="73" x2="145" y2="80" stroke="#64748b" stroke-width="2" />
      <circle cx="117" cy="88" r="7" fill="#34d399" /><line x1="117" y1="79" x2="117" y2="81" stroke="#64748b" stroke-width="2" stroke-dasharray="2,2" />
      <text x="117" y="116" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">sp³ (Bond angle = 109.5°)</text>
      <text x="117" y="128" fill="#94a3b8" font-size="9" text-anchor="middle">e.g., [NiCl₄]²⁻, [Ni(CO)₄], [Zn(NH₃)₄]²⁺</text>
    </g>

    <!-- Square Planar (CN=4) -->
    <g transform="translate(555, 40)">
      <rect x="0" y="0" width="235" height="135" rx="8" fill="#0f172a" stroke="#f43f5e" stroke-width="1.5" />
      <text x="117" y="22" fill="#fb7185" font-size="13" font-weight="bold" text-anchor="middle">Square Planar (C.N. = 4)</text>
      <circle cx="117" cy="65" r="14" fill="#f43f5e" />
      <text x="117" y="69" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">M</text>
      <!-- 4 planar ligands -->
      <circle cx="77" cy="65" r="7" fill="#34d399" /><line x1="103" y1="65" x2="84" y2="65" stroke="#64748b" stroke-width="2" />
      <circle cx="157" cy="65" r="7" fill="#34d399" /><line x1="131" y1="65" x2="150" y2="65" stroke="#64748b" stroke-width="2" />
      <circle cx="117" cy="35" r="7" fill="#34d399" /><line x1="117" y1="51" x2="117" y2="42" stroke="#64748b" stroke-width="2" />
      <circle cx="117" cy="95" r="7" fill="#34d399" /><line x1="117" y1="79" x2="117" y2="88" stroke="#64748b" stroke-width="2" />
      <text x="117" y="116" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">dsp² (Bond angle = 90°)</text>
      <text x="117" y="128" fill="#94a3b8" font-size="9" text-anchor="middle">e.g., [Ni(CN)₄]²⁻, [Pt(NH₃)₂Cl₂]</text>
    </g>
  </g>
</svg>`,

  // 2. Werner's Theory & AgNO3 Precipitation
  wernerPrecipitationExperiment: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" class="w-full h-auto rounded-xl bg-slate-900 font-sans border border-slate-700 shadow-xl">
  <!-- Title -->
  <rect x="20" y="16" width="860" height="42" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="450" y="42" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="1">WERNER'S COBALT(III) AMMINES &amp; AgNO₃ PRECIPITATION EXPERIMENTS</text>

  <!-- Table Header -->
  <g transform="translate(30, 75)">
    <rect x="0" y="0" width="840" height="32" rx="6" fill="#0284c7" />
    <text x="90" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Traditional Formula</text>
    <text x="270" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Modern Werner Formulation</text>
    <text x="440" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Colour</text>
    <text x="560" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Total Ions</text>
    <text x="710" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Moles of AgCl ppt / mol</text>
  </g>

  <!-- Row 1: CoCl3.6NH3 -->
  <g transform="translate(30, 115)">
    <rect x="0" y="0" width="840" height="60" rx="8" fill="#0f172a" stroke="#334155" />
    <text x="90" y="28" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CoCl₃ · 6NH₃</text>
    <text x="90" y="46" fill="#64748b" font-size="10" text-anchor="middle">Luteo complex</text>
    
    <text x="270" y="34" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">[Co(NH₃)₆]Cl₃</text>
    <circle cx="440" cy="30" r="10" fill="#eab308" />
    <text x="440" y="50" fill="#fde047" font-size="9" text-anchor="middle">Yellow</text>
    
    <text x="560" y="35" fill="#a7f3d0" font-size="14" font-weight="bold" text-anchor="middle">4 ions (1:3)</text>
    
    <rect x="640" y="12" width="140" height="36" rx="6" fill="#065f46" stroke="#34d399" />
    <text x="710" y="35" fill="#34d399" font-size="14" font-weight="900" text-anchor="middle">3 mol AgCl ↓</text>
  </g>

  <!-- Row 2: CoCl3.5NH3 -->
  <g transform="translate(30, 185)">
    <rect x="0" y="0" width="840" height="60" rx="8" fill="#0f172a" stroke="#334155" />
    <text x="90" y="28" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CoCl₃ · 5NH₃</text>
    <text x="90" y="46" fill="#64748b" font-size="10" text-anchor="middle">Purpureo complex</text>
    
    <text x="270" y="34" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">[Co(NH₃)₅Cl]Cl₂</text>
    <circle cx="440" cy="30" r="10" fill="#a855f7" />
    <text x="440" y="50" fill="#d8b4fe" font-size="9" text-anchor="middle">Purple</text>
    
    <text x="560" y="35" fill="#a7f3d0" font-size="14" font-weight="bold" text-anchor="middle">3 ions (1:2)</text>
    
    <rect x="640" y="12" width="140" height="36" rx="6" fill="#1e3a8a" stroke="#60a5fa" />
    <text x="710" y="35" fill="#60a5fa" font-size="14" font-weight="900" text-anchor="middle">2 mol AgCl ↓</text>
  </g>

  <!-- Row 3: CoCl3.4NH3 (Green/Violet) -->
  <g transform="translate(30, 255)">
    <rect x="0" y="0" width="840" height="60" rx="8" fill="#0f172a" stroke="#334155" />
    <text x="90" y="28" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CoCl₃ · 4NH₃</text>
    <text x="90" y="46" fill="#64748b" font-size="10" text-anchor="middle">Praseo (trans) / Violeo (cis)</text>
    
    <text x="270" y="34" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">[Co(NH₃)₄Cl₂]Cl</text>
    <g transform="translate(425, 20)">
      <circle cx="7" cy="10" r="7" fill="#22c55e" />
      <circle cx="23" cy="10" r="7" fill="#8b5cf6" />
    </g>
    <text x="440" y="50" fill="#cbd5e1" font-size="9" text-anchor="middle">Green / Violet</text>
    
    <text x="560" y="35" fill="#a7f3d0" font-size="14" font-weight="bold" text-anchor="middle">2 ions (1:1)</text>
    
    <rect x="640" y="12" width="140" height="36" rx="6" fill="#713f12" stroke="#facc15" />
    <text x="710" y="35" fill="#facc15" font-size="14" font-weight="900" text-anchor="middle">1 mol AgCl ↓</text>
  </g>

  <!-- Row 4: CoCl3.3NH3 -->
  <g transform="translate(30, 325)">
    <rect x="0" y="0" width="840" height="60" rx="8" fill="#0f172a" stroke="#334155" />
    <text x="90" y="28" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CoCl₃ · 3NH₃</text>
    <text x="90" y="46" fill="#64748b" font-size="10" text-anchor="middle">Neutral complex</text>
    
    <text x="270" y="34" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">[Co(NH₃)₃Cl₃]</text>
    <circle cx="440" cy="30" r="10" fill="#3b82f6" />
    <text x="440" y="50" fill="#93c5fd" font-size="9" text-anchor="middle">Blue</text>
    
    <text x="560" y="35" fill="#f87171" font-size="14" font-weight="bold" text-anchor="middle">0 ions (Neutral)</text>
    
    <rect x="640" y="12" width="140" height="36" rx="6" fill="#450a0a" stroke="#f87171" />
    <text x="710" y="35" fill="#f87171" font-size="14" font-weight="900" text-anchor="middle">0 mol AgCl (No ppt)</text>
  </g>

  <!-- Footer Tip -->
  <text x="450" y="405" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">⚡ NEET RULE: Only chlorine atoms OUTSIDE the square brackets (coordination sphere) are ionisable and precipitate with AgNO₃.</text>
</svg>`,

  // 3. Structural & Stereoisomerism Overview Matrix
  isomerismOverview: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" class="w-full h-auto rounded-xl bg-slate-900 font-sans border border-slate-700 shadow-xl">
  <!-- Title -->
  <rect x="20" y="16" width="860" height="42" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="450" y="42" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle" letter-spacing="1">ISOMERISM IN COORDINATION COMPOUNDS — COMPLETE CLASSIFICATION</text>

  <!-- Top Root Node -->
  <g transform="translate(350, 75)">
    <rect x="0" y="0" width="200" height="36" rx="8" fill="#0284c7" />
    <text x="100" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">ISOMERISM</text>
  </g>

  <!-- Connectors -->
  <path d="M 450 111 L 450 125 L 240 125 L 240 145" fill="none" stroke="#64748b" stroke-width="2" />
  <path d="M 450 111 L 450 125 L 660 125 L 660 145" fill="none" stroke="#64748b" stroke-width="2" />

  <!-- Branch 1: Structural Isomerism -->
  <g transform="translate(130, 145)">
    <rect x="0" y="0" width="220" height="36" rx="8" fill="#0d9488" />
    <text x="110" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">1. STRUCTURAL ISOMERISM</text>
  </g>

  <!-- 4 Subtypes of Structural -->
  <g transform="translate(30, 195)">
    <!-- Ionisation -->
    <rect x="0" y="0" width="410" height="60" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5" />
    <text x="15" y="22" fill="#2dd4bf" font-size="12" font-weight="bold">A. Ionisation Isomerism</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="10">Exchange of ligand between sphere &amp; counter ion.</text>
    <text x="15" y="52" fill="#facc15" font-size="10" font-weight="bold">e.g., [Co(NH₃)₅(SO₄)]Br (Red) vs [Co(NH₃)₅Br]SO₄ (Violet)</text>
  </g>

  <g transform="translate(30, 262)">
    <!-- Hydrate / Solvate -->
    <rect x="0" y="0" width="410" height="60" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5" />
    <text x="15" y="22" fill="#2dd4bf" font-size="12" font-weight="bold">B. Solvate / Hydrate Isomerism</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="10">Water acts as ligand inside sphere vs solvent of crystallization.</text>
    <text x="15" y="52" fill="#facc15" font-size="10" font-weight="bold">e.g., [Cr(H₂O)₆]Cl₃ (Violet) vs [Cr(H₂O)₅Cl]Cl₂·H₂O (Grey-green)</text>
  </g>

  <g transform="translate(30, 329)">
    <!-- Linkage -->
    <rect x="0" y="0" width="410" height="60" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5" />
    <text x="15" y="22" fill="#2dd4bf" font-size="12" font-weight="bold">C. Linkage Isomerism (Ambidentate Ligands)</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="10">Ligand coordinates through different donor atoms (NO₂⁻, SCN⁻).</text>
    <text x="15" y="52" fill="#facc15" font-size="10" font-weight="bold">e.g., [Co(NH₃)₅(NO₂)]Cl₂ (Yellow) vs [Co(NH₃)₅(ONO)]Cl₂ (Red)</text>
  </g>

  <g transform="translate(30, 396)">
    <!-- Coordination -->
    <rect x="0" y="0" width="410" height="60" rx="6" fill="#0f172a" stroke="#14b8a6" stroke-width="1.5" />
    <text x="15" y="22" fill="#2dd4bf" font-size="12" font-weight="bold">D. Coordination Isomerism</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="10">Interchange of ligands between cationic &amp; anionic complex ions.</text>
    <text x="15" y="52" fill="#facc15" font-size="10" font-weight="bold">e.g., [Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆]</text>
  </g>

  <!-- Branch 2: Stereoisomerism -->
  <g transform="translate(550, 145)">
    <rect x="0" y="0" width="220" height="36" rx="8" fill="#9333ea" />
    <text x="110" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">2. STEREOISOMERISM</text>
  </g>

  <!-- Stereoisomerism Subtypes -->
  <g transform="translate(460, 195)">
    <!-- Geometrical -->
    <rect x="0" y="0" width="410" height="127" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1.5" />
    <text x="15" y="22" fill="#d8b4fe" font-size="12" font-weight="bold">A. Geometrical Isomerism (cis / trans &amp; fac / mer)</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="10">• Square planar MA₂B₂: [Pt(NH₃)₂Cl₂] (cis = Cisplatin anti-cancer, trans)</text>
    <text x="15" y="54" fill="#cbd5e1" font-size="10">• Square planar MABCD: 3 geometrical isomers (2 cis, 1 trans)</text>
    <text x="15" y="70" fill="#cbd5e1" font-size="10">• Octahedral MA₄B₂: [Co(NH₃)₄Cl₂]⁺ (cis = violet, trans = green)</text>
    <text x="15" y="86" fill="#cbd5e1" font-size="10">• Octahedral MA₃B₃: [Co(NH₃)₃(NO₂)₃] (facial = fac vs meridional = mer)</text>
    <text x="15" y="104" fill="#f87171" font-size="10" font-weight="bold">⚠️ Tetrahedral MA₂B₂ / MABCD DO NOT show Geometrical Isomerism!</text>
  </g>

  <g transform="translate(460, 329)">
    <!-- Optical -->
    <rect x="0" y="0" width="410" height="127" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1.5" />
    <text x="15" y="22" fill="#d8b4fe" font-size="12" font-weight="bold">B. Optical Isomerism (Enantiomers: d / l or Δ / Λ)</text>
    <text x="15" y="38" fill="#cbd5e1" font-size="10">• Non-superimposable mirror images lacking plane/centre of symmetry.</text>
    <text x="15" y="54" fill="#cbd5e1" font-size="10">• Octahedral M(AA)₃: [Co(en)₃]³⁺, [Fe(ox)₃]³⁻ (100% Chiral, 2 enantiomers)</text>
    <text x="15" y="70" fill="#cbd5e1" font-size="10">• Octahedral cis-M(AA)₂B₂: cis-[Co(en)₂Cl₂]⁺ is OPTICALLY ACTIVE.</text>
    <text x="15" y="86" fill="#f87171" font-size="10" font-weight="bold">⚠️ trans-[Co(en)₂Cl₂]⁺ has inversion centre → OPTICALLY INACTIVE!</text>
    <text x="15" y="104" fill="#38bdf8" font-size="10">Square planar complexes rarely show optical isomerism due to mirror plane.</text>
  </g>
</svg>`,

  // 4. Fac-Mer & Cis-Trans Geometrical / Optical Isomers Visualized
  stereoisomersFacMerCisTrans: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" class="w-full h-auto rounded-xl bg-slate-900 font-sans border border-slate-700 shadow-xl">
  <!-- Title -->
  <rect x="20" y="16" width="860" height="42" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="450" y="42" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="1">STEREOISOMERS: CIS/TRANS, FAC/MER &amp; OPTICAL ENANTIOMERS</text>

  <!-- Panel 1: Cisplatin vs Transplatin [Pt(NH3)2Cl2] -->
  <g transform="translate(30, 75)">
    <rect x="0" y="0" width="410" height="180" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="205" y="24" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Square Planar MA₂B₂: [Pt(NH₃)₂Cl₂]</text>
    
    <!-- Cis-isomer -->
    <g transform="translate(60, 45)">
      <circle cx="45" cy="45" r="14" fill="#38bdf8" />
      <text x="45" y="49" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">Pt</text>
      <!-- Cl at 90 deg -->
      <circle cx="15" cy="15" r="10" fill="#34d399" /><text x="15" y="18" fill="#064e3b" font-size="8" font-weight="bold" text-anchor="middle">Cl</text>
      <circle cx="75" cy="15" r="10" fill="#34d399" /><text x="75" y="18" fill="#064e3b" font-size="8" font-weight="bold" text-anchor="middle">Cl</text>
      <!-- NH3 -->
      <circle cx="15" cy="75" r="10" fill="#fbbf24" /><text x="15" y="78" fill="#78350f" font-size="7" font-weight="bold" text-anchor="middle">NH₃</text>
      <circle cx="75" cy="75" r="10" fill="#fbbf24" /><text x="75" y="78" fill="#78350f" font-size="7" font-weight="bold" text-anchor="middle">NH₃</text>
      <line x1="45" y1="45" x2="22" y2="22" stroke="#64748b" stroke-width="1.5" />
      <line x1="45" y1="45" x2="68" y2="22" stroke="#64748b" stroke-width="1.5" />
      <line x1="45" y1="45" x2="22" y2="68" stroke="#64748b" stroke-width="1.5" />
      <line x1="45" y1="45" x2="68" y2="68" stroke="#64748b" stroke-width="1.5" />
      <text x="45" y="105" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">cis-isomer (Cisplatin)</text>
      <text x="45" y="120" fill="#86efac" font-size="9" text-anchor="middle">Dipole μ ≠ 0 | Anti-cancer</text>
    </g>

    <!-- Trans-isomer -->
    <g transform="translate(240, 45)">
      <circle cx="45" cy="45" r="14" fill="#38bdf8" />
      <text x="45" y="49" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">Pt</text>
      <!-- Cl at 180 deg opposite -->
      <circle cx="15" cy="15" r="10" fill="#34d399" /><text x="15" y="18" fill="#064e3b" font-size="8" font-weight="bold" text-anchor="middle">Cl</text>
      <circle cx="75" cy="75" r="10" fill="#34d399" /><text x="75" y="78" fill="#064e3b" font-size="8" font-weight="bold" text-anchor="middle">Cl</text>
      <!-- NH3 opposite -->
      <circle cx="75" cy="15" r="10" fill="#fbbf24" /><text x="75" y="18" fill="#78350f" font-size="7" font-weight="bold" text-anchor="middle">NH₃</text>
      <circle cx="15" cy="75" r="10" fill="#fbbf24" /><text x="15" y="78" fill="#78350f" font-size="7" font-weight="bold" text-anchor="middle">NH₃</text>
      <line x1="45" y1="45" x2="22" y2="22" stroke="#64748b" stroke-width="1.5" />
      <line x1="45" y1="45" x2="68" y2="68" stroke="#64748b" stroke-width="1.5" />
      <line x1="45" y1="45" x2="68" y2="22" stroke="#64748b" stroke-width="1.5" />
      <line x1="45" y1="45" x2="22" y2="68" stroke="#64748b" stroke-width="1.5" />
      <text x="45" y="105" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">trans-isomer (Transplatin)</text>
      <text x="45" y="120" fill="#fca5a5" font-size="9" text-anchor="middle">Dipole μ = 0 | Inactive drug</text>
    </g>
  </g>

  <!-- Panel 2: Facial vs Meridional [Co(NH3)3(NO2)3] (MA3B3) -->
  <g transform="translate(460, 75)">
    <rect x="0" y="0" width="410" height="180" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <text x="205" y="24" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">Octahedral MA₃B₃: [Co(NH₃)₃(NO₂)₃]</text>
    
    <!-- Fac-isomer -->
    <g transform="translate(60, 40)">
      <rect x="5" y="5" width="80" height="80" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-dasharray="3,3" />
      <circle cx="45" cy="45" r="12" fill="#a855f7" />
      <text x="45" y="49" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Co</text>
      <!-- 3 identical at triangle corners of one triangular face -->
      <circle cx="20" cy="20" r="8" fill="#38bdf8" /><text x="20" y="23" fill="#0c4a6e" font-size="6" font-weight="bold" text-anchor="middle">A</text>
      <circle cx="70" cy="20" r="8" fill="#38bdf8" /><text x="70" y="23" fill="#0c4a6e" font-size="6" font-weight="bold" text-anchor="middle">A</text>
      <circle cx="45" cy="75" r="8" fill="#38bdf8" /><text x="45" y="78" fill="#0c4a6e" font-size="6" font-weight="bold" text-anchor="middle">A</text>
      <text x="45" y="108" fill="#818cf8" font-size="11" font-weight="bold" text-anchor="middle">facial (fac-isomer)</text>
      <text x="45" y="122" fill="#c7d2fe" font-size="8" text-anchor="middle">3 ligands occupy one face</text>
    </g>

    <!-- Mer-isomer -->
    <g transform="translate(240, 40)">
      <line x1="15" y1="45" x2="75" y2="45" stroke="#f43f5e" stroke-width="2" />
      <line x1="45" y1="15" x2="45" y2="45" stroke="#f43f5e" stroke-width="2" />
      <circle cx="45" cy="45" r="12" fill="#a855f7" />
      <text x="45" y="49" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">Co</text>
      <!-- 3 ligands along meridian -->
      <circle cx="15" cy="45" r="8" fill="#38bdf8" /><text x="15" y="48" fill="#0c4a6e" font-size="6" font-weight="bold" text-anchor="middle">A</text>
      <circle cx="75" cy="45" r="8" fill="#38bdf8" /><text x="75" y="48" fill="#0c4a6e" font-size="6" font-weight="bold" text-anchor="middle">A</text>
      <circle cx="45" cy="15" r="8" fill="#38bdf8" /><text x="45" y="18" fill="#0c4a6e" font-size="6" font-weight="bold" text-anchor="middle">A</text>
      <text x="45" y="108" fill="#fb7185" font-size="11" font-weight="bold" text-anchor="middle">meridional (mer-isomer)</text>
      <text x="45" y="122" fill="#fecdd3" font-size="8" text-anchor="middle">3 ligands around meridian plane</text>
    </g>
  </g>

  <!-- Panel 3: Optical Enantiomers of [Co(en)3]3+ -->
  <g transform="translate(30, 270)">
    <rect x="0" y="0" width="840" height="190" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
    <text x="420" y="24" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">OPTICAL ISOMERISM IN OCTAHEDRAL COMPLEXES: [Co(en)₃]³⁺ (Chiral Enantiomers)</text>
    
    <!-- Dextro (Δ) -->
    <g transform="translate(180, 45)">
      <circle cx="60" cy="55" r="16" fill="#10b981" />
      <text x="60" y="60" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Co³⁺</text>
      <!-- Chelate rings -->
      <path d="M 45 40 C 20 15, 20 75, 45 68" fill="none" stroke="#fbbf24" stroke-width="3" />
      <path d="M 75 40 C 100 15, 100 75, 75 68" fill="none" stroke="#fbbf24" stroke-width="3" />
      <path d="M 50 70 C 40 100, 80 100, 70 70" fill="none" stroke="#fbbf24" stroke-width="3" />
      <text x="60" y="125" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">d-form / Δ (Right-handed)</text>
      <text x="60" y="138" fill="#94a3b8" font-size="9" text-anchor="middle">Dextrorotatory (+)</text>
    </g>

    <!-- Mirror Line -->
    <g transform="translate(420, 40)">
      <line x1="0" y1="0" x2="0" y2="130" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
      <text x="0" y="142" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">MIRROR PLANE</text>
    </g>

    <!-- Laevo (Λ) -->
    <g transform="translate(540, 45)">
      <circle cx="60" cy="55" r="16" fill="#10b981" />
      <text x="60" y="60" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Co³⁺</text>
      <!-- Reflected Chelate rings -->
      <path d="M 75 40 C 100 15, 100 75, 75 68" fill="none" stroke="#fbbf24" stroke-width="3" />
      <path d="M 45 40 C 20 15, 20 75, 45 68" fill="none" stroke="#fbbf24" stroke-width="3" />
      <path d="M 70 70 C 80 100, 40 100, 50 70" fill="none" stroke="#fbbf24" stroke-width="3" />
      <text x="60" y="125" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">l-form / Λ (Left-handed)</text>
      <text x="60" y="138" fill="#94a3b8" font-size="9" text-anchor="middle">Laevorotatory (−)</text>
    </g>
  </g>
</svg>`,

  // 5. Crystal Field Theory Splitting: Octahedral vs Tetrahedral
  crystalFieldSplitting: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 520" class="w-full h-auto rounded-xl bg-slate-900 font-sans border border-slate-700 shadow-xl">
  <!-- Title -->
  <rect x="20" y="16" width="860" height="42" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="450" y="42" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="1">CRYSTAL FIELD THEORY: OCTAHEDRAL (Δₒ) VS TETRAHEDRAL (Δₜ) SPLITTING</text>

  <!-- Left: Octahedral Splitting -->
  <g transform="translate(30, 75)">
    <rect x="0" y="0" width="410" height="420" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="205" y="26" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">OCTAHEDRAL COMPLEX SPLITTING (Δₒ)</text>

    <!-- Energy Axis -->
    <line x1="30" y1="380" x2="30" y2="60" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowUp)" />
    <text x="20" y="55" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">ENERGY</text>

    <!-- Free Ion (5 degenerate) -->
    <g transform="translate(50, 310)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#f8fafc" stroke-width="3" />
      <text x="40" y="18" fill="#94a3b8" font-size="9" text-anchor="middle">Free Metal Ion</text>
      <text x="40" y="30" fill="#64748b" font-size="8" text-anchor="middle">(5 Degenerate d)</text>
    </g>

    <!-- Spherical Field Average -->
    <g transform="translate(170, 240)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#facc15" stroke-width="3" stroke-dasharray="4,2" />
      <text x="40" y="18" fill="#facc15" font-size="9" text-anchor="middle">Barycentre</text>
      <text x="40" y="30" fill="#ca8a04" font-size="8" text-anchor="middle">(Average Energy)</text>
    </g>

    <!-- Split Levels -->
    <!-- eg (upper: dx2-y2, dz2) -->
    <g transform="translate(290, 140)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#f43f5e" stroke-width="3.5" />
      <text x="40" y="-8" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">e_g (d_x²-y², d_z²)</text>
      <text x="40" y="16" fill="#fda4af" font-size="9" text-anchor="middle">+0.6 Δₒ (+3/5 Δₒ)</text>
    </g>

    <!-- t2g (lower: dxy, dyz, dzx) -->
    <g transform="translate(290, 305)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#34d399" stroke-width="3.5" />
      <text x="40" y="-8" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">t₂_g (d_xy, d_yz, d_zx)</text>
      <text x="40" y="16" fill="#a7f3d0" font-size="9" text-anchor="middle">−0.4 Δₒ (−2/5 Δₒ)</text>
    </g>

    <!-- Delta_o bracket -->
    <line x1="385" y1="140" x2="385" y2="305" stroke="#38bdf8" stroke-width="2" />
    <text x="395" y="225" fill="#38bdf8" font-size="13" font-weight="bold">Δₒ</text>

    <!-- Dotted connection paths -->
    <path d="M 130 310 L 170 240" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M 250 240 L 290 140" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M 250 240 L 290 305" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="2,2" />

    <!-- Explanatory note -->
    <rect x="20" y="345" width="370" height="60" rx="6" fill="#1e293b" />
    <text x="205" y="362" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">CFSE (Octahedral) = [−0.4 n(t₂g) + 0.6 n(eg)] Δₒ + mP</text>
    <text x="205" y="378" fill="#94a3b8" font-size="9" text-anchor="middle">• Strong Field (CN⁻, CO): Δₒ &gt; P → Low Spin (Pairing in t₂g)</text>
    <text x="205" y="393" fill="#94a3b8" font-size="9" text-anchor="middle">• Weak Field (F⁻, Cl⁻): Δₒ &lt; P → High Spin (Hund's rule)</text>
  </g>

  <!-- Right: Tetrahedral Splitting -->
  <g transform="translate(460, 75)">
    <rect x="0" y="0" width="410" height="420" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <text x="205" y="26" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">TETRAHEDRAL COMPLEX SPLITTING (Δₜ)</text>

    <!-- Energy Axis -->
    <line x1="30" y1="380" x2="30" y2="60" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowUp)" />
    <text x="20" y="55" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">ENERGY</text>

    <!-- Free Ion -->
    <g transform="translate(50, 310)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#f8fafc" stroke-width="3" />
      <text x="40" y="18" fill="#94a3b8" font-size="9" text-anchor="middle">Free Metal Ion</text>
    </g>

    <!-- Barycentre -->
    <g transform="translate(170, 240)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#facc15" stroke-width="3" stroke-dasharray="4,2" />
      <text x="40" y="18" fill="#facc15" font-size="9" text-anchor="middle">Barycentre</text>
    </g>

    <!-- Inverted Split Levels -->
    <!-- t2 (upper in tetrahedral: dxy, dyz, dzx) -->
    <g transform="translate(290, 180)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#34d399" stroke-width="3.5" />
      <text x="40" y="-8" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">t₂ (d_xy, d_yz, d_zx)</text>
      <text x="40" y="16" fill="#a7f3d0" font-size="9" text-anchor="middle">+0.4 Δₜ (+2/5 Δₜ)</text>
    </g>

    <!-- e (lower in tetrahedral: dx2-y2, dz2) -->
    <g transform="translate(290, 280)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="#f43f5e" stroke-width="3.5" />
      <text x="40" y="-8" fill="#fb7185" font-size="12" font-weight="bold" text-anchor="middle">e (d_x²-y², d_z²)</text>
      <text x="40" y="16" fill="#fda4af" font-size="9" text-anchor="middle">−0.6 Δₜ (−3/5 Δₜ)</text>
    </g>

    <!-- Delta_t bracket -->
    <line x1="385" y1="180" x2="385" y2="280" stroke="#c084fc" stroke-width="2" />
    <text x="395" y="235" fill="#c084fc" font-size="13" font-weight="bold">Δₜ</text>

    <!-- Dotted connection paths -->
    <path d="M 130 310 L 170 240" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M 250 240 L 290 180" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="2,2" />
    <path d="M 250 240 L 290 280" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="2,2" />

    <!-- Explanatory note -->
    <rect x="20" y="345" width="370" height="60" rx="6" fill="#1e293b" />
    <text x="205" y="362" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">⚡ CRITICAL RELATION: Δₜ ≈ ⁴⁄₉ Δₒ</text>
    <text x="205" y="378" fill="#cbd5e1" font-size="9" text-anchor="middle">Because Δₜ is small (only 4 ligands &amp; non-axial orientation),</text>
    <text x="205" y="393" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Δₜ &lt; P ALWAYS → Tetrahedral complexes are ALMOST ALWAYS HIGH SPIN!</text>
  </g>

  <defs>
    <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 6 L 5 0 L 10 6 z" fill="#94a3b8" />
    </marker>
  </defs>
</svg>`,

  // 6. Spectrochemical Series & Complementary Colour Wheel
  spectrochemicalAndColourWheel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480" class="w-full h-auto rounded-xl bg-slate-900 font-sans border border-slate-700 shadow-xl">
  <!-- Title -->
  <rect x="20" y="16" width="860" height="42" rx="8" fill="#1e293b" stroke="#334155" />
  <text x="450" y="42" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle" letter-spacing="1">SPECTROCHEMICAL SERIES &amp; COMPLEMENTARY COLOUR ABSORPTION</text>

  <!-- Spectrochemical Series Banner -->
  <g transform="translate(30, 75)">
    <rect x="0" y="0" width="840" height="115" rx="8" fill="#0f172a" stroke="#334155" />
    <text x="420" y="24" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">NCERT SPECTROCHEMICAL SERIES (Increasing Crystal Field Splitting Energy Δₒ)</text>
    
    <!-- Progression Bar -->
    <rect x="20" y="40" width="800" height="20" rx="4" fill="url(#spectroGrad)" />
    <defs>
      <linearGradient id="spectroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ef4444" />
        <stop offset="50%" stop-color="#eab308" />
        <stop offset="100%" stop-color="#3b82f6" />
      </linearGradient>
    </defs>

    <!-- Formula Text -->
    <text x="420" y="80" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">
      I⁻ &lt; Br⁻ &lt; S²⁻ &lt; SCN⁻ &lt; Cl⁻ &lt; N₃⁻ &lt; F⁻ &lt; OH⁻ &lt; C₂O₄²⁻ &lt; H₂O &lt; NCS⁻ &lt; EDTA⁴⁻ &lt; NH₃ &lt; en &lt; CN⁻ &lt; CO
    </text>
    
    <text x="100" y="102" fill="#f87171" font-size="10" font-weight="bold">← WEAK FIELD (High Spin, Small Δₒ)</text>
    <text x="730" y="102" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="end">STRONG FIELD (Low Spin, Large Δₒ) →</text>
  </g>

  <!-- Bottom Left: Colour Mechanism (d-d Transition) -->
  <g transform="translate(30, 205)">
    <rect x="0" y="0" width="410" height="255" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
    <text x="205" y="24" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">d-d TRANSITION &amp; ORIGIN OF COLOUR</text>

    <!-- Schematic: [Ti(H2O)6]3+ -->
    <g transform="translate(30, 45)">
      <!-- Ground state -->
      <rect x="0" y="0" width="160" height="110" rx="6" fill="#1e293b" />
      <text x="80" y="20" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Ground State: t₂g¹ eg⁰</text>
      <!-- eg empty -->
      <line x1="40" y1="45" x2="120" y2="45" stroke="#f43f5e" stroke-width="2" />
      <text x="135" y="48" fill="#fda4af" font-size="8">eg</text>
      <!-- t2g with 1 electron -->
      <line x1="40" y1="85" x2="120" y2="85" stroke="#34d399" stroke-width="2" />
      <circle cx="60" cy="85" r="4" fill="#facc15" />
      <text x="135" y="88" fill="#a7f3d0" font-size="8">t₂g</text>

      <!-- Absorption arrow -->
      <path d="M 170 55 Q 195 25 220 55" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowChem)" />
      <text x="195" y="20" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="middle">hν (Yellow-Green)</text>

      <!-- Excited state -->
      <g transform="translate(200, 0)">
        <rect x="0" y="0" width="160" height="110" rx="6" fill="#1e293b" />
        <text x="80" y="20" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Excited State: t₂g⁰ eg¹</text>
        <!-- eg with promoted electron -->
        <line x1="40" y1="45" x2="120" y2="45" stroke="#f43f5e" stroke-width="2" />
        <circle cx="60" cy="45" r="4" fill="#facc15" />
        <text x="135" y="48" fill="#fda4af" font-size="8">eg</text>
        <!-- t2g empty -->
        <line x1="40" y1="85" x2="120" y2="85" stroke="#34d399" stroke-width="2" />
        <text x="135" y="88" fill="#a7f3d0" font-size="8">t₂g</text>
      </g>
    </g>

    <!-- Key rules -->
    <g transform="translate(20, 170)">
      <text x="0" y="16" fill="#38bdf8" font-size="10" font-weight="bold">• [Ti(H₂O)₆]³⁺ (d¹) absorbs Yellow-Green light (~498 nm) → Appears PURPLE.</text>
      <text x="0" y="32" fill="#f87171" font-size="10" font-weight="bold">• d⁰ (e.g. Sc³⁺, Ti⁴⁺) &amp; d¹⁰ (e.g. Zn²⁺, Cu⁺) complexes are COLOURLESS</text>
      <text x="10" y="46" fill="#94a3b8" font-size="9">(No d-d transition possible due to empty or completely filled d-orbitals).</text>
      <text x="0" y="62" fill="#facc15" font-size="10" font-weight="bold">• Anhydrous CuSO₄ is White (no CFT splitting without ligands); hydrated CuSO₄·5H₂O is Blue.</text>
    </g>
  </g>

  <!-- Bottom Right: Complementary Colour Wheel -->
  <g transform="translate(460, 205)">
    <rect x="0" y="0" width="410" height="255" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
    <text x="205" y="24" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">COMPLEMENTARY COLOUR WHEEL</text>

    <!-- Colour Wheel SVG Graphics -->
    <g transform="translate(205, 130)">
      <!-- 6 Segments -->
      <!-- Red (0 to 60 deg) -->
      <path d="M 0 0 L 70 0 A 70 70 0 0 1 35 60.6 Z" fill="#ef4444" opacity="0.85" />
      <text x="35" y="25" fill="#ffffff" font-size="9" font-weight="bold">RED</text>

      <!-- Violet/Purple (60 to 120 deg) -->
      <path d="M 0 0 L 35 60.6 A 70 70 0 0 1 -35 60.6 Z" fill="#8b5cf6" opacity="0.85" />
      <text x="-15" y="45" fill="#ffffff" font-size="9" font-weight="bold">VIOLET</text>

      <!-- Blue (120 to 180 deg) -->
      <path d="M 0 0 L -35 60.6 A 70 70 0 0 1 -70 0 Z" fill="#3b82f6" opacity="0.85" />
      <text x="-55" y="25" fill="#ffffff" font-size="9" font-weight="bold">BLUE</text>

      <!-- Green (180 to 240 deg) -->
      <path d="M 0 0 L -70 0 A 70 70 0 0 1 -35 -60.6 Z" fill="#10b981" opacity="0.85" />
      <text x="-55" y="-20" fill="#ffffff" font-size="9" font-weight="bold">GREEN</text>

      <!-- Yellow (240 to 300 deg) -->
      <path d="M 0 0 L -35 -60.6 A 70 70 0 0 1 35 -60.6 Z" fill="#eab308" opacity="0.85" />
      <text x="-15" y="-35" fill="#ffffff" font-size="9" font-weight="bold">YELLOW</text>

      <!-- Orange (300 to 360 deg) -->
      <path d="M 0 0 L 35 -60.6 A 70 70 0 0 1 70 0 Z" fill="#f97316" opacity="0.85" />
      <text x="35" y="-20" fill="#ffffff" font-size="9" font-weight="bold">ORANGE</text>

      <!-- Central Pivot -->
      <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#ffffff" stroke-width="1.5" />
      <text x="0" y="4" fill="#38bdf8" font-size="7" font-weight="bold" text-anchor="middle">OPPOSITE</text>
    </g>

    <!-- Caption -->
    <text x="205" y="225" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">RULE: Absorbed colour is directly opposite to the Transmitted (Observed) colour.</text>
    <text x="205" y="242" fill="#94a3b8" font-size="9" text-anchor="middle">Absorbs Red → Appears Green | Absorbs Yellow → Appears Violet/Blue</text>
  </g>

  <defs>
    <marker id="arrowChem" viewBox="0 0 10 10" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 6 L 5 0 L 10 6 z" fill="#f59e0b" />
    </marker>
  </defs>
</svg>`
};
