// Comprehensive SVG Diagrams for Chapter 21: Aldehydes, Ketones and Carboxylic Acids

export const ALDEHYDES_KETONES_DIAGRAMS = {
  // Diagram 1: Carbonyl Polarity, Molecular Orbital Geometry & Nucleophilic Addition Mechanism
  carbonylPolarityAndNucleophilicAddition: `<svg viewBox="0 0 920 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl shadow-lg bg-slate-900 font-sans">
  <!-- Gradient & Glow Definitions -->
  <defs>
    <linearGradient id="grad-electrophile" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="grad-nucleophile" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#b91c1c"/>
    </linearGradient>
    <linearGradient id="grad-intermediate" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <linearGradient id="grad-product" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#60a5fa"/>
    </marker>
    <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24"/>
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171"/>
    </marker>
  </defs>

  <!-- Title Banner -->
  <rect x="20" y="16" width="880" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="460" y="42" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle" letter-spacing="0.5">
    CARBONYL POLARITY, sp² PLANAR GEOMETRY &amp; NUCLEOPHILIC ADDITION (BÜRGI-DUNITZ PATHWAY)
  </text>

  <!-- Left Box: Carbonyl Group Polarity & Resonance -->
  <rect x="25" y="72" width="270" height="385" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="160" y="98" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">1. C=O Polarity &amp; Resonance</text>

  <!-- Neutral Carbonyl Dipole Structure -->
  <g transform="translate(45, 120)">
    <rect width="230" height="135" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="115" y="24" fill="#94a3b8" font-size="11" text-anchor="middle">sp² Hybridized, Trigonal Planar (120°)</text>
    
    <!-- Bond Lines -->
    <line x1="50" y1="55" x2="105" y2="80" stroke="#f8fafc" stroke-width="3"/>
    <line x1="50" y1="105" x2="105" y2="80" stroke="#f8fafc" stroke-width="3"/>
    <line x1="105" y1="76" x2="175" y2="76" stroke="#f8fafc" stroke-width="3"/>
    <line x1="105" y1="84" x2="175" y2="84" stroke="#f8fafc" stroke-width="3"/>
    
    <!-- Atoms -->
    <text x="35" y="58" fill="#cbd5e1" font-size="13" font-weight="bold">R</text>
    <text x="35" y="112" fill="#cbd5e1" font-size="13" font-weight="bold">R'</text>
    <circle cx="105" cy="80" r="14" fill="url(#grad-electrophile)"/>
    <text x="105" y="85" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">C</text>
    <circle cx="175" cy="80" r="14" fill="url(#grad-nucleophile)"/>
    <text x="175" y="85" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">O</text>

    <!-- Partial Charges -->
    <text x="105" y="55" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">δ+ (Electrophilic)</text>
    <text x="175" y="55" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">δ- (Nucleophilic)</text>
    
    <!-- Dipole Moment Arrow -->
    <line x1="110" y1="112" x2="165" y2="112" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrow-amber)"/>
    <line x1="110" y1="107" x2="110" y2="117" stroke="#fbbf24" stroke-width="2"/>
    <text x="137" y="128" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">μ ≈ 2.3 - 2.8 D</text>
  </g>

  <!-- Resonance Canonical Forms -->
  <g transform="translate(45, 270)">
    <rect width="230" height="170" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="115" y="22" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">Resonance Representation</text>
    
    <text x="50" y="60" fill="#e2e8f0" font-size="13" font-weight="bold">R₂C=O</text>
    <text x="115" y="60" fill="#a855f7" font-size="16" font-weight="bold" text-anchor="middle">⟷</text>
    <text x="180" y="60" fill="#e2e8f0" font-size="13" font-weight="bold">R₂C⁺—O⁻</text>
    <text x="180" y="78" fill="#60a5fa" font-size="10" text-anchor="middle">(Carbocation character)</text>

    <!-- Key Takeaway Box -->
    <rect x="10" y="92" width="210" height="66" rx="6" fill="#0f172a" stroke="#475569"/>
    <text x="115" y="110" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Reactivity Order for Nu⁻ Attack:</text>
    <text x="115" y="128" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">HCHO &gt; RCHO &gt; RCOR</text>
    <text x="115" y="146" fill="#94a3b8" font-size="9" text-anchor="middle">Due to +I electronic &amp; steric hindrance</text>
  </g>

  <!-- Middle Box: Step 1 Nucleophilic Attack (Slow, RDS) -->
  <rect x="310" y="72" width="300" height="385" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
  <text x="460" y="98" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">2. Step 1: Nu⁻ Attack (RDS / Slow)</text>

  <!-- Bürgi-Dunitz Angle Attack -->
  <g transform="translate(325, 115)">
    <rect width="270" height="195" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="135" y="22" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Nucleophile Approaching at ~107°</text>

    <!-- Carbonyl Molecule in Perspective -->
    <line x1="90" y1="120" x2="135" y2="105" stroke="#f8fafc" stroke-width="3"/>
    <line x1="80" y1="80" x2="135" y2="105" stroke="#f8fafc" stroke-width="3"/>
    <line x1="135" y1="105" x2="205" y2="105" stroke="#f8fafc" stroke-width="4"/>
    
    <text x="70" y="78" fill="#cbd5e1" font-size="13" font-weight="bold">R</text>
    <text x="75" y="132" fill="#cbd5e1" font-size="13" font-weight="bold">H/R'</text>
    
    <circle cx="135" cy="105" r="14" fill="url(#grad-electrophile)"/>
    <text x="135" y="110" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">C</text>
    <circle cx="205" cy="105" r="14" fill="url(#grad-nucleophile)"/>
    <text x="205" y="110" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">O</text>

    <!-- π-electron Shift Arrow -->
    <path d="M 165 95 Q 185 75 205 90" fill="none" stroke="#f87171" stroke-width="2.5" marker-end="url(#arrow-red)"/>

    <!-- Nucleophile with Lone Pair -->
    <circle cx="175" cy="170" r="14" fill="#ec4899"/>
    <text x="175" y="174" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Nu:⁻</text>
    
    <!-- Nu Attack Arrow -->
    <path d="M 168 156 Q 155 135 142 120" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#arrow-blue)"/>
    <text x="220" y="165" fill="#38bdf8" font-size="10" font-weight="bold">Bürgi-Dunitz</text>
    <text x="220" y="178" fill="#38bdf8" font-size="10" font-weight="bold">Angle ≈ 107°</text>
  </g>

  <!-- Tetrahedral Alkoxide Intermediate -->
  <g transform="translate(325, 320)">
    <rect width="270" height="125" rx="8" fill="#1e293b" stroke="#10b981"/>
    <text x="135" y="20" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Tetrahedral Alkoxide Intermediate (sp³)</text>
    
    <!-- Sp3 Geometry -->
    <line x1="75" y1="55" x2="135" y2="75" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="75" y1="100" x2="135" y2="75" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="135" y1="75" x2="195" y2="45" stroke="#ef4444" stroke-width="3"/>
    <line x1="135" y1="75" x2="195" y2="105" stroke="#ec4899" stroke-width="3"/>
    
    <text x="60" y="55" fill="#cbd5e1" font-size="11" font-weight="bold">R</text>
    <text x="60" y="105" fill="#cbd5e1" font-size="11" font-weight="bold">H/R'</text>
    
    <circle cx="135" cy="75" r="12" fill="#047857"/>
    <text x="135" y="79" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">C</text>
    
    <text x="202" y="48" fill="#f87171" font-size="12" font-weight="bold">O:⁻</text>
    <text x="202" y="110" fill="#f472b6" font-size="12" font-weight="bold">Nu</text>
    
    <text x="135" y="118" fill="#94a3b8" font-size="9" text-anchor="middle">Geometry shifts from sp² Planar → sp³ Tetrahedral</text>
  </g>

  <!-- Right Box: Step 2 Protonation & Product Matrix -->
  <rect x="625" y="72" width="270" height="385" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="760" y="98" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">3. Step 2: Protonation / Addition</text>

  <!-- Final Product Box -->
  <g transform="translate(640, 115)">
    <rect width="240" height="100" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="120" y="20" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">Fast Proton Capture (H⁺)</text>

    <line x1="60" y1="50" x2="110" y2="65" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="60" y1="85" x2="110" y2="65" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="110" y1="65" x2="165" y2="45" stroke="#38bdf8" stroke-width="3"/>
    <line x1="110" y1="65" x2="165" y2="85" stroke="#ec4899" stroke-width="3"/>

    <circle cx="110" cy="65" r="12" fill="url(#grad-product)"/>
    <text x="110" y="69" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">C</text>

    <text x="172" y="48" fill="#38bdf8" font-size="12" font-weight="bold">OH</text>
    <text x="172" y="90" fill="#f472b6" font-size="12" font-weight="bold">Nu</text>
  </g>

  <!-- Classic Reagents Matrix -->
  <g transform="translate(640, 225)">
    <rect width="240" height="220" rx="8" fill="#1e293b" stroke="#8b5cf6"/>
    <text x="120" y="20" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Key Nucleophilic Reagents</text>
    
    <!-- HCN -->
    <rect x="10" y="32" width="220" height="32" rx="4" fill="#0f172a"/>
    <text x="18" y="52" fill="#38bdf8" font-size="10" font-weight="bold">HCN / OH⁻:</text>
    <text x="90" y="52" fill="#e2e8f0" font-size="10">Cyanohydrin [>C(OH)CN]</text>

    <!-- NaHSO3 -->
    <rect x="10" y="68" width="220" height="32" rx="4" fill="#0f172a"/>
    <text x="18" y="88" fill="#34d399" font-size="10" font-weight="bold">NaHSO₃:</text>
    <text x="90" y="88" fill="#e2e8f0" font-size="10">Bisulfite Adduct (White ppt)</text>

    <!-- R'OH -->
    <rect x="10" y="104" width="220" height="32" rx="4" fill="#0f172a"/>
    <text x="18" y="124" fill="#f472b6" font-size="10" font-weight="bold">R'OH / dry HCl:</text>
    <text x="100" y="124" fill="#e2e8f0" font-size="10">Hemiacetal → Acetal</text>

    <!-- RMgX -->
    <rect x="10" y="140" width="220" height="32" rx="4" fill="#0f172a"/>
    <text x="18" y="160" fill="#fb923c" font-size="10" font-weight="bold">RMgX / H₃O⁺:</text>
    <text x="95" y="160" fill="#e2e8f0" font-size="10">1°, 2°, 3° Alcohols</text>

    <!-- H2N-Z -->
    <rect x="10" y="176" width="220" height="34" rx="4" fill="#0f172a"/>
    <text x="18" y="196" fill="#a78bfa" font-size="10" font-weight="bold">H₂N–Z (pH 4-5):</text>
    <text x="100" y="196" fill="#e2e8f0" font-size="10">>C=N–Z + H₂O (Imine/Oxime)</text>
  </g>
</svg>`,

  // Diagram 2: Ammonia Derivatives Addition-Elimination Reaction Pathway
  ammoniaDerivativesAdditionMechanism: `<svg viewBox="0 0 920 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl shadow-lg bg-slate-900 font-sans">
  <defs>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
    </marker>
  </defs>

  <!-- Title -->
  <rect x="20" y="16" width="880" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="460" y="42" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle">
    NUCLEOPHILIC ADDITION-ELIMINATION OF AMMONIA DERIVATIVES [ &gt;C=O + H₂N–Z ⟶ &gt;C=N–Z + H₂O ]
  </text>

  <!-- Top Mechanism Flow -->
  <g transform="translate(30, 75)">
    <rect width="860" height="115" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="430" y="24" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">
      Mechanism Sequence: Addition across C=O (pH 4.5) ⟶ Proton Transfer ⟶ Loss of H₂O (Elimination)
    </text>

    <!-- Stage 1 -->
    <g transform="translate(30, 35)">
      <rect width="180" height="65" rx="6" fill="#1e293b" stroke="#475569"/>
      <text x="90" y="28" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">&gt;C=O + H₂N–Z</text>
      <text x="90" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Weak Acid Catalysis (pH 4.5)</text>
    </g>

    <!-- Arrow 1 -->
    <line x1="220" y1="68" x2="265" y2="68" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow-green)"/>

    <!-- Stage 2 -->
    <g transform="translate(275, 35)">
      <rect width="270" height="65" rx="6" fill="#1e293b" stroke="#475569"/>
      <text x="135" y="28" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">[ &gt;C(OH)–NH–Z ]</text>
      <text x="135" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Unstable Tetrahedral Carbinolamine</text>
    </g>

    <!-- Arrow 2 -->
    <line x1="555" y1="68" x2="600" y2="68" stroke="#34d399" stroke-width="2.5" marker-end="url(#arrow-green)"/>

    <!-- Stage 3 -->
    <g transform="translate(610, 35)">
      <rect width="220" height="65" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="110" y="28" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">&gt;C=N–Z + H₂O</text>
      <text x="110" y="48" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Crystalline Derivative (Solid)</text>
    </g>
  </g>

  <!-- Bottom Derivative Cards Matrix -->
  <g transform="translate(30, 205)">
    <!-- Header Row -->
    <rect x="0" y="0" width="860" height="30" rx="4" fill="#334155"/>
    <text x="80" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Reagent (H₂N–Z)</text>
    <text x="240" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Group (–Z)</text>
    <text x="430" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Carbonyl Derivative Name</text>
    <text x="640" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Product Structure</text>
    <text x="790" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">NEET Utility</text>

    <!-- Row 1: Hydroxylamine -->
    <rect x="0" y="35" width="860" height="38" rx="4" fill="#1e293b"/>
    <text x="80" y="58" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Hydroxylamine (NH₂OH)</text>
    <text x="240" y="58" fill="#e2e8f0" font-size="11" text-anchor="middle">–OH</text>
    <text x="430" y="58" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">Oxime</text>
    <text x="640" y="58" fill="#e2e8f0" font-size="11" text-anchor="middle">&gt;C=N–OH</text>
    <text x="790" y="58" fill="#facc15" font-size="10" text-anchor="middle">Characterization</text>

    <!-- Row 2: Hydrazine -->
    <rect x="0" y="77" width="860" height="38" rx="4" fill="#0f172a"/>
    <text x="80" y="100" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Hydrazine (NH₂NH₂)</text>
    <text x="240" y="100" fill="#e2e8f0" font-size="11" text-anchor="middle">–NH₂</text>
    <text x="430" y="100" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">Hydrazone</text>
    <text x="640" y="100" fill="#e2e8f0" font-size="11" text-anchor="middle">&gt;C=N–NH₂</text>
    <text x="790" y="100" fill="#34d399" font-size="10" text-anchor="middle">Wolff-Kishner Interm.</text>

    <!-- Row 3: Phenylhydrazine -->
    <rect x="0" y="119" width="860" height="38" rx="4" fill="#1e293b"/>
    <text x="80" y="142" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Phenylhydrazine (NH₂NHPh)</text>
    <text x="240" y="142" fill="#e2e8f0" font-size="11" text-anchor="middle">–NH–C₆H₅</text>
    <text x="430" y="142" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">Phenylhydrazone</text>
    <text x="640" y="142" fill="#e2e8f0" font-size="11" text-anchor="middle">&gt;C=N–NH–C₆H₅</text>
    <text x="790" y="142" fill="#f472b6" font-size="10" text-anchor="middle">Osazone formation</text>

    <!-- Row 4: 2,4-DNP -->
    <rect x="0" y="161" width="860" height="38" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
    <text x="80" y="184" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">2,4-DNP (Brady's Reagent)</text>
    <text x="240" y="184" fill="#e2e8f0" font-size="11" text-anchor="middle">–NH–C₆H₃(NO₂)₂</text>
    <text x="430" y="184" fill="#fb923c" font-size="11" font-weight="bold" text-anchor="middle">2,4-DNP Hydrazone</text>
    <text x="640" y="184" fill="#e2e8f0" font-size="11" text-anchor="middle">&gt;C=N–NH–C₆H₃(NO₂)₂</text>
    <text x="790" y="184" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">Orange-Yellow Ppt!</text>

    <!-- Row 5: Semicarbazide -->
    <rect x="0" y="203" width="860" height="38" rx="4" fill="#1e293b" stroke="#ec4899" stroke-width="1"/>
    <text x="80" y="226" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">Semicarbazide</text>
    <text x="240" y="226" fill="#e2e8f0" font-size="11" text-anchor="middle">–NH–CO–NH₂</text>
    <text x="430" y="226" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">Semicarbazone</text>
    <text x="640" y="226" fill="#e2e8f0" font-size="11" text-anchor="middle">&gt;C=N–NH–CO–NH₂</text>
    <text x="790" y="226" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">NEET Trap: 1 N acts!</text>
  </g>
</svg>`,

  // Diagram 3: Master Blueprint of Aldol Condensation vs Cannizzaro Reaction
  aldolAndCannizzaroMechanisms: `<svg viewBox="0 0 920 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl shadow-lg bg-slate-900 font-sans">
  <defs>
    <marker id="arrow-purp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc"/>
    </marker>
    <marker id="arrow-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#fde047"/>
    </marker>
  </defs>

  <!-- Title -->
  <rect x="20" y="16" width="880" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="460" y="42" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle">
    ALDOL CONDENSATION (α-H PRESENT) VS CANNIZZARO REACTION (NO α-H PRESENT)
  </text>

  <!-- Left Side: Aldol Condensation -->
  <g transform="translate(25, 72)">
    <rect width="425" height="385" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="212" y="28" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">
      ALDOL CONDENSATION (Requires α-Hydrogen)
    </text>
    <text x="212" y="46" fill="#94a3b8" font-size="11" text-anchor="middle">Reagent: Dilute Base (dil. NaOH / Ba(OH)₂)</text>

    <!-- Step 1: Enolate Formation -->
    <g transform="translate(15, 60)">
      <rect width="395" height="85" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#38bdf8" font-size="11" font-weight="bold">Step 1: Deprotonation &amp; Enolate Generation</text>
      <text x="15" y="48" fill="#f8fafc" font-size="12">CH₃–CHO + OH⁻ ⇌ [ :⁻CH₂–CHO ⟷ CH₂=CH–O⁻ ] + H₂O</text>
      <text x="15" y="70" fill="#a78bfa" font-size="10">Resonance-stabilized Carbanion / Enolate Nucleophile</text>
    </g>

    <!-- Step 2: Nucleophilic Attack -->
    <g transform="translate(15, 155)">
      <rect width="395" height="90" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#38bdf8" font-size="11" font-weight="bold">Step 2: Attack on 2nd Carbonyl Molecule</text>
      <text x="15" y="48" fill="#f8fafc" font-size="12">CH₃–CHO + :⁻CH₂–CHO ⟶ CH₃–CH(O⁻)–CH₂–CHO</text>
      <text x="15" y="72" fill="#34d399" font-size="11">xrightarrow{+H₂O} CH₃–CH(OH)–CH₂–CHO (3-Hydroxybutanal, Aldol)</text>
    </g>

    <!-- Step 3: Dehydration upon Heating -->
    <g transform="translate(15, 255)">
      <rect width="395" height="110" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="15" y="22" fill="#34d399" font-size="11" font-weight="bold">Step 3: Dehydration on Heating (Condensation)</text>
      <text x="15" y="48" fill="#fde047" font-size="13" font-weight="bold">CH₃–CH=CH–CHO (But-2-enal / Crotonaldehyde)</text>
      <text x="15" y="70" fill="#94a3b8" font-size="10">+ H₂O (Loss of α-H and β-OH to form conjugated enal)</text>
      <rect x="10" y="80" width="375" height="22" rx="4" fill="#0f172a"/>
      <text x="195" y="95" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Crossed Aldol: 2 different carbonyls with α-H give 4 products!</text>
    </g>
  </g>

  <!-- Right Side: Cannizzaro Reaction -->
  <g transform="translate(470, 72)">
    <rect width="425" height="385" rx="10" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
    <text x="212" y="28" fill="#f472b6" font-size="14" font-weight="bold" text-anchor="middle">
      CANNIZZARO REACTION (Aldehydes Lacking α-H)
    </text>
    <text x="212" y="46" fill="#94a3b8" font-size="11" text-anchor="middle">Reagent: Concentrated Base (50% Conc. NaOH / KOH, Δ)</text>

    <!-- Core Principle Box -->
    <g transform="translate(15, 60)">
      <rect width="395" height="85" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#fbbf24" font-size="11" font-weight="bold">Self Oxidation-Reduction (Disproportionation)</text>
      <text x="15" y="48" fill="#f8fafc" font-size="12">2 HCHO + Conc. NaOH ⟶ CH₃OH + HCOONa</text>
      <text x="15" y="70" fill="#a78bfa" font-size="10">1 molecule reduced to Alcohol; 1 molecule oxidised to Acid Salt</text>
    </g>

    <!-- Formaldehyde & Benzaldehyde Examples -->
    <g transform="translate(15, 155)">
      <rect width="395" height="90" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#fbbf24" font-size="11" font-weight="bold">Key Substrates Lacking α-Hydrogen:</text>
      <text x="15" y="44" fill="#e2e8f0" font-size="11">• Formaldehyde (HCHO) ⟶ Methanol + Sodium Formate</text>
      <text x="15" y="62" fill="#e2e8f0" font-size="11">• Benzaldehyde (C₆H₅CHO) ⟶ Benzyl Alcohol + Sod. Benzoate</text>
      <text x="15" y="80" fill="#e2e8f0" font-size="11">• Trimethylacetaldehyde [(CH₃)₃C–CHO] ⟶ (CH₃)₃CCH₂OH + Salt</text>
    </g>

    <!-- Crossed Cannizzaro Trap -->
    <g transform="translate(15, 255)">
      <rect width="395" height="110" rx="6" fill="#1e293b" stroke="#f43f5e"/>
      <text x="15" y="22" fill="#f43f5e" font-size="11" font-weight="bold">🚨 High-Yield NEET Trap: Crossed Cannizzaro</text>
      <text x="15" y="48" fill="#fde047" font-size="12" font-weight="bold">C₆H₅CHO + HCHO + Conc. NaOH ⟶ C₆H₅CH₂OH + HCOONa</text>
      <text x="15" y="70" fill="#e2e8f0" font-size="10">Why? HCHO is more electrophilic, OH⁻ attacks HCHO preferentially;</text>
      <text x="15" y="88" fill="#38bdf8" font-size="10" font-weight="bold">HCHO is ALWAYS oxidised to Formate; C₆H₅CHO is reduced to Benzyl Alcohol!</text>
    </g>
  </g>
</svg>`,

  // Diagram 4: Haloform (Iodoform) Reaction & Oxidation/Distinction Tests
  haloformAndDistinctionTests: `<svg viewBox="0 0 920 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl shadow-lg bg-slate-900 font-sans">
  <!-- Title -->
  <rect x="20" y="16" width="880" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="460" y="42" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle">
    HALOFORM (IODOFORM) REACTION &amp; DIAGNOSTIC DISTINCTION TESTS
  </text>

  <!-- Left Box: Iodoform Test -->
  <g transform="translate(25, 72)">
    <rect width="425" height="365" rx="10" fill="#0f172a" stroke="#facc15" stroke-width="1.5"/>
    <text x="212" y="28" fill="#fde047" font-size="14" font-weight="bold" text-anchor="middle">
      IODOFORM TEST (I₂ + NaOH / NaOI)
    </text>

    <!-- Structural Criterion -->
    <g transform="translate(15, 45)">
      <rect width="395" height="90" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#38bdf8" font-size="11" font-weight="bold">Structural Unit Required for +ve Test:</text>
      <text x="20" y="50" fill="#fde047" font-size="14" font-weight="bold">1. CH₃–C(=O)– (Methyl Ketone / Ethanal)</text>
      <text x="20" y="74" fill="#a78bfa" font-size="13" font-weight="bold">2. CH₃–CH(OH)– (Ethanol / 2-Alkanols)</text>
    </g>

    <!-- Reaction Equation -->
    <g transform="translate(15, 145)">
      <rect width="395" height="100" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#fbbf24" font-size="11" font-weight="bold">General Transformation:</text>
      <text x="15" y="48" fill="#f8fafc" font-size="11">R–CO–CH₃ + 3 I₂ + 4 NaOH ⟶ R–COONa + CHI₃↓ + 3 NaI + 3 H₂O</text>
      <rect x="10" y="60" width="375" height="30" rx="4" fill="#0f172a" stroke="#facc15"/>
      <text x="197" y="80" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">
        OBSERVATION: Yellow Crystalline Precipitate of CHI₃ (mp 119°C)
      </text>
    </g>

    <!-- NEET Positive vs Negative Box -->
    <g transform="translate(15, 255)">
      <rect width="395" height="95" rx="6" fill="#1e293b" stroke="#475569"/>
      <text x="15" y="20" fill="#34d399" font-size="11" font-weight="bold">Positive (+ve):</text>
      <text x="110" y="20" fill="#e2e8f0" font-size="10">Ethanal, Acetone, Acetophenone, Ethanol, Propan-2-ol, Pentan-2-one</text>
      <text x="15" y="45" fill="#f43f5e" font-size="11" font-weight="bold">Negative (-ve):</text>
      <text x="110" y="45" fill="#e2e8f0" font-size="10">Methanol, Propan-1-ol, Pentan-3-one, Benzaldehyde, Benzophenone</text>
      <text x="15" y="75" fill="#38bdf8" font-size="10" font-weight="bold">Key NEET Distinctions: Pentan-2-one (+ve) vs Pentan-3-one (-ve)</text>
    </g>
  </g>

  <!-- Right Box: Tollens & Fehling Distinction Tests -->
  <g transform="translate(470, 72)">
    <rect width="425" height="365" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="212" y="28" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">
      TOLLENS' &amp; FEHLING'S REDOX TESTS
    </text>

    <!-- Tollens Test -->
    <g transform="translate(15, 45)">
      <rect width="395" height="145" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#38bdf8" font-size="12" font-weight="bold">1. Tollens' Test (Ammoniacal Silver Nitrate)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="10">Reagent: [Ag(NH₃)₂]⁺ OH⁻ (Mild Oxidizing Agent)</text>
      <text x="15" y="65" fill="#f8fafc" font-size="11">R–CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ ⟶ R–COO⁻ + 2 Ag↓ + 4 NH₃ + 2 H₂O</text>
      <rect x="10" y="80" width="375" height="28" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="197" y="99" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">
        Observation: Shining SILVER MIRROR or Grey Precipitate
      </text>
      <text x="15" y="125" fill="#a78bfa" font-size="10">Responds: ALL Aldehydes (Aliphatic + Aromatic), Formic acid, α-Hydroxy ketones</text>
      <text x="15" y="138" fill="#f472b6" font-size="10">Ketones DO NOT respond!</text>
    </g>

    <!-- Fehling Test -->
    <g transform="translate(15, 200)">
      <rect width="395" height="150" rx="6" fill="#1e293b" stroke="#f43f5e"/>
      <text x="15" y="22" fill="#f87171" font-size="12" font-weight="bold">2. Fehling's Test (Alkaline Cu²⁺ Tartrate)</text>
      <text x="15" y="42" fill="#94a3b8" font-size="10">Fehling A (aq. CuSO₄) + Fehling B (Alkaline Rochelle Salt)</text>
      <text x="15" y="65" fill="#f8fafc" font-size="11">R–CHO + 2 Cu²⁺ + 5 OH⁻ ⟶ R–COO⁻ + Cu₂O↓ (Red) + 3 H₂O</text>
      <rect x="10" y="80" width="375" height="28" rx="4" fill="#0f172a" stroke="#f43f5e"/>
      <text x="197" y="99" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">
        Observation: BRICK-RED Precipitate of Cuprous Oxide (Cu₂O)
      </text>
      <text x="15" y="124" fill="#fde047" font-size="10" font-weight="bold">🚨 CRITICAL NEET EXCEPTION:</text>
      <text x="15" y="140" fill="#e2e8f0" font-size="10">Aliphatic Aldehydes give +ve test; Aromatic Aldehydes (C₆H₅CHO) give NEGATIVE test!</text>
    </g>
  </g>
</svg>`,

  // Diagram 5: Carboxylic Acid Resonance Stabilization & Quantitative Substituent Acidity Chart
  carboxylicAcidResonanceAndAcidity: `<svg viewBox="0 0 920 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl shadow-lg bg-slate-900 font-sans">
  <!-- Title -->
  <rect x="20" y="16" width="880" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="460" y="42" fill="#f8fafc" font-size="15" font-weight="bold" text-anchor="middle">
    CARBOXYLATE RESONANCE STABILIZATION &amp; SUBSTITUENT ELECTRONIC EFFECTS ON ACIDITY
  </text>

  <!-- Left Box: Resonance in Carboxylic Acid vs Carboxylate Anion -->
  <g transform="translate(25, 72)">
    <rect width="425" height="385" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="212" y="28" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">
      Resonance in Acid vs Carboxylate Ion
    </text>

    <!-- Neutral Acid (Charge Separation) -->
    <g transform="translate(15, 45)">
      <rect width="395" height="100" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#f87171" font-size="11" font-weight="bold">Un-ionized Carboxylic Acid (Less Stable Resonance):</text>
      <text x="25" y="55" fill="#f8fafc" font-size="13">R–C(=O)–OH ⟷ R–C(–O⁻)=O⁺–H</text>
      <text x="25" y="80" fill="#94a3b8" font-size="10">Involves energetic charge separation (+ on O, - on O) ⟶ Less contributing</text>
    </g>

    <!-- Carboxylate Ion (Equivalent Resonance) -->
    <g transform="translate(15, 155)">
      <rect width="395" height="115" rx="6" fill="#1e293b" stroke="#10b981"/>
      <text x="15" y="22" fill="#34d399" font-size="11" font-weight="bold">Carboxylate Anion RCOO⁻ (Equivalent Resonance):</text>
      <text x="25" y="55" fill="#fde047" font-size="14" font-weight="bold">R–C(=O)–O⁻ ⟷ R–C(–O⁻)=O</text>
      <text x="25" y="80" fill="#e2e8f0" font-size="10">Two completely identical canonical forms with negative charge shared equally across both electronegative oxygens!</text>
      <text x="25" y="98" fill="#38bdf8" font-size="10" font-weight="bold">Both C–O bond lengths are identical (127 pm)!</text>
    </g>

    <!-- Acidity Comparison Triad -->
    <g transform="translate(15, 280)">
      <rect width="395" height="85" rx="6" fill="#1e293b" stroke="#a855f7"/>
      <text x="15" y="20" fill="#c084fc" font-size="11" font-weight="bold">Comparative Acidity Triad:</text>
      <text x="25" y="45" fill="#fde047" font-size="12" font-weight="bold">RCOOH (pKₐ ~ 4-5) &gt; ArOH (pKₐ ~ 10) &gt; ROH (pKₐ ~ 16)</text>
      <text x="25" y="68" fill="#94a3b8" font-size="10">Carboxylic acids liberate CO₂ with NaHCO₃ (Phenols and alcohols do NOT)</text>
    </g>
  </g>

  <!-- Right Box: Quantitative Substituent Acidity Chart -->
  <g transform="translate(470, 72)">
    <rect width="425" height="385" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
    <text x="212" y="28" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">
      Substituent Effects on Carboxylic Acid Strength
    </text>

    <!-- Rule 1: EWG vs EDG -->
    <g transform="translate(15, 45)">
      <rect width="395" height="100" rx="6" fill="#1e293b" stroke="#334155"/>
      <text x="15" y="22" fill="#38bdf8" font-size="11" font-weight="bold">Electronic Effects on pKₐ:</text>
      <text x="15" y="45" fill="#34d399" font-size="11">✓ EWG (–NO₂, –CN, –F, –Cl): Disperses (-) charge ⟶ INCREASES acidity (lowers pKₐ)</text>
      <text x="15" y="68" fill="#f87171" font-size="11">✗ EDG (–CH₃, –C₂H₅, +I): Intensifies (-) charge ⟶ DECREASES acidity (raises pKₐ)</text>
      <text x="15" y="90" fill="#fbbf24" font-size="10">Distance Rule: Closer the halogen to –COOH, stronger the -I effect!</text>
    </g>

    <!-- Master Acidity Ranking Table -->
    <g transform="translate(15, 155)">
      <rect width="395" height="210" rx="6" fill="#1e293b" stroke="#8b5cf6"/>
      <text x="197" y="22" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">Master NCERT Acidity Ranking (Decreasing Order)</text>

      <rect x="10" y="32" width="375" height="24" rx="4" fill="#0f172a"/>
      <text x="18" y="48" fill="#f43f5e" font-size="10" font-weight="bold">CF₃COOH (pKₐ 0.23) &gt; CCl₃COOH (0.64) &gt; CHCl₂COOH (1.29)</text>

      <rect x="10" y="60" width="375" height="24" rx="4" fill="#0f172a"/>
      <text x="18" y="76" fill="#fb923c" font-size="10" font-weight="bold">&gt; NO₂CH₂COOH (1.68) &gt; NC–CH₂COOH (2.47) &gt; FCH₂COOH (2.59)</text>

      <rect x="10" y="88" width="375" height="24" rx="4" fill="#0f172a"/>
      <text x="18" y="104" fill="#facc15" font-size="10" font-weight="bold">&gt; ClCH₂COOH (2.87) &gt; BrCH₂COOH (2.90) &gt; HCOOH (3.75)</text>

      <rect x="10" y="116" width="375" height="24" rx="4" fill="#0f172a"/>
      <text x="18" y="132" fill="#34d399" font-size="10" font-weight="bold">&gt; ClCH₂CH₂COOH (4.06) &gt; C₆H₅COOH (4.20) &gt; C₆H₅CH₂COOH (4.31)</text>

      <rect x="10" y="144" width="375" height="24" rx="4" fill="#0f172a"/>
      <text x="18" y="160" fill="#38bdf8" font-size="10" font-weight="bold">&gt; CH₃COOH (4.76) &gt; CH₃CH₂COOH (4.87)</text>

      <!-- Ortho Effect Highlight -->
      <rect x="10" y="174" width="375" height="28" rx="4" fill="#3b0764" stroke="#d8b4fe"/>
      <text x="197" y="193" fill="#f5d0fe" font-size="10" font-weight="bold" text-anchor="middle">
        Ortho Effect: o-Substituted benzoic acids are ALWAYS stronger than benzoic acid!
      </text>
    </g>
  </g>
</svg>`,

  // Diagram 6: Master One-Page Reaction Map of Chapter 21
  aldehydesKetonesMasterMap: `<svg viewBox="0 0 920 480" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-4xl mx-auto rounded-xl shadow-lg bg-slate-900 font-sans">
  <!-- Title -->
  <rect x="20" y="16" width="880" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
  <text x="460" y="42" fill="#f8fafc" font-size="16" font-weight="bold" text-anchor="middle">
    MASTER INTERCONVERSION MAP: ALDEHYDES, KETONES &amp; CARBOXYLIC ACIDS
  </text>

  <!-- Central Hub: Carbonyl & Carboxyl Compounds -->
  <g transform="translate(360, 190)">
    <rect width="200" height="100" rx="10" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
    <text x="100" y="35" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">R–CHO / R–CO–R'</text>
    <text x="100" y="55" fill="#a78bfa" font-size="12" font-weight="bold" text-anchor="middle">&amp; R–COOH</text>
    <text x="100" y="80" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">CENTRAL HUB</text>
  </g>

  <!-- Top-Left: Alcohols & Alkenes Inputs -->
  <g transform="translate(30, 80)">
    <rect width="260" height="120" rx="8" fill="#0f172a" stroke="#10b981"/>
    <text x="130" y="24" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">PREPARATION FROM ALCOHOLS &amp; ALKENES</text>
    <text x="15" y="50" fill="#e2e8f0" font-size="10">1° ROH xrightarrow{PCC / Cu 573 K} RCHO</text>
    <text x="15" y="70" fill="#e2e8f0" font-size="10">2° ROH xrightarrow{CrO₃ / Cu 573 K} RCOR'</text>
    <text x="15" y="90" fill="#e2e8f0" font-size="10">Alkene xrightarrow{(i) O₃, (ii) Zn/H₂O} Reductive Ozonolysis</text>
    <text x="15" y="110" fill="#e2e8f0" font-size="10">Alkyne xrightarrow{Hg²⁺/H₂SO₄, 333 K} Carbonyl (Kucherov)</text>
  </g>

  <!-- Top-Right: Named Syntheses -->
  <g transform="translate(630, 80)">
    <rect width="260" height="120" rx="8" fill="#0f172a" stroke="#ec4899"/>
    <text x="130" y="24" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">NAMED PREPARATIVE METHODS</text>
    <text x="15" y="50" fill="#e2e8f0" font-size="10">RCOCl + H₂ xrightarrow{Pd-BaSO₄/S} RCHO (Rosenmund)</text>
    <text x="15" y="70" fill="#e2e8f0" font-size="10">R–CN xrightarrow{SnCl₂/HCl, H₃O⁺} RCHO (Stephen)</text>
    <text x="15" y="90" fill="#e2e8f0" font-size="10">Toluene xrightarrow{CrO₂Cl₂/CS₂} C₆H₅CHO (Etard)</text>
    <text x="15" y="110" fill="#e2e8f0" font-size="10">Benzene + CO + HCl xrightarrow{AlCl₃/CuCl} C₆H₅CHO (Gattermann-Koch)</text>
  </g>

  <!-- Bottom-Left: Reduction Pathways -->
  <g transform="translate(30, 280)">
    <rect width="260" height="170" rx="8" fill="#0f172a" stroke="#8b5cf6"/>
    <text x="130" y="24" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">REDUCTION TRANSFORMATIONS</text>
    <text x="15" y="50" fill="#e2e8f0" font-size="10">RCHO xrightarrow{NaBH₄ / LiAlH₄} 1° Alcohol</text>
    <text x="15" y="72" fill="#e2e8f0" font-size="10">RCOR' xrightarrow{NaBH₄ / LiAlH₄} 2° Alcohol</text>
    <text x="15" y="94" fill="#fbbf24" font-size="10">Clemmensen: &gt;C=O xrightarrow{Zn(Hg)/conc. HCl} &gt;CH₂</text>
    <text x="15" y="116" fill="#34d399" font-size="10">Wolff-Kishner: &gt;C=O xrightarrow{NH₂NH₂ / KOH, Δ} &gt;CH₂</text>
    <text x="15" y="138" fill="#38bdf8" font-size="10">RCOOH xrightarrow{LiAlH₄ / ether} RCH₂OH (1° Alcohol)</text>
    <text x="15" y="158" fill="#94a3b8" font-size="9">(NaBH₄ CANNOT reduce Carboxylic Acids!)</text>
  </g>

  <!-- Bottom-Right: Carboxylic Acid Reactions & HVZ -->
  <g transform="translate(630, 280)">
    <rect width="260" height="170" rx="8" fill="#0f172a" stroke="#f59e0b"/>
    <text x="130" y="24" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">CARBOXYLIC ACID SPECIAL REACTIONS</text>
    <text x="15" y="50" fill="#e2e8f0" font-size="10">RCOOH + R'OH xrightarrow{H⁺} RCOOR' (Esterification)</text>
    <text x="15" y="72" fill="#e2e8f0" font-size="10">RCOOH + PCl₅ / SOCl₂ ⟶ RCOCl (Acid Chloride)</text>
    <text x="15" y="94" fill="#e2e8f0" font-size="10">RCOONa + NaOH/CaO xrightarrow{Δ} R–H + Na₂CO₃ (Soda Lime)</text>
    <text x="15" y="116" fill="#f43f5e" font-size="10" font-weight="bold">HVZ: RCH₂COOH xrightarrow{X₂ / Red P} RCH(X)COOH</text>
    <text x="15" y="138" fill="#38bdf8" font-size="10">RCOOH + NaHCO₃ ⟶ RCOONa + CO₂↑ + H₂O</text>
    <text x="15" y="158" fill="#94a3b8" font-size="9">(Brisk effervescence of CO₂ distinguishes from Phenol!)</text>
  </g>
</svg>`
};
