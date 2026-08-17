export const D_AND_F_BLOCK_DIAGRAMS = {
  transition3dTrendsAndConfigurations: `<svg viewBox="0 0 800 500" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4" xmlns="http://www.w3.org/2000/svg">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">3d TRANSITION SERIES — CONFIGURATIONS, RADII &amp; OXIDATION STATES</text>

  <!-- Box 1: 3d Configurations & Anomalies (Cr & Cu) -->
  <g transform="translate(25, 48)">
    <rect width="365" height="210" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="182" y="22" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">1. ELECTRONIC CONFIGURATIONS &amp; ANOMALIES</text>
    
    <!-- Table Grid -->
    <g transform="translate(15, 36)" font-size="10.5">
      <rect width="335" height="155" fill="#0f172a" rx="6"/>
      <text x="10" y="18" fill="#94a3b8" font-weight="bold">Element</text>
      <text x="65" y="18" fill="#94a3b8" font-weight="bold">Z</text>
      <text x="100" y="18" fill="#94a3b8" font-weight="bold">Configuration</text>
      <text x="230" y="18" fill="#94a3b8" font-weight="bold">Key NEET Note</text>
      <line x1="5" y1="24" x2="330" y2="24" stroke="#334155" stroke-width="1"/>

      <text x="10" y="40" fill="#f8fafc">Sc</text><text x="65" y="40" fill="#cbd5e1">21</text><text x="100" y="40" fill="#cbd5e1">[Ar] 3d¹ 4s²</text><text x="230" y="40" fill="#93c5fd">Only +3 OS (d⁰)</text>
      <text x="10" y="58" fill="#f8fafc">Ti - V</text><text x="65" y="58" fill="#cbd5e1">22-23</text><text x="100" y="58" fill="#cbd5e1">[Ar] 3d²-3d³ 4s²</text><text x="230" y="58" fill="#94a3b8">Variable OS</text>
      
      <!-- Cr Anomaly Highlight -->
      <rect x="5" y="65" width="325" height="20" fill="#fbbf24" fill-opacity="0.15" rx="3"/>
      <text x="10" y="79" fill="#fde047" font-weight="bold">Cr</text><text x="65" y="79" fill="#fde047">24</text><text x="100" y="79" fill="#fde047" font-weight="bold">[Ar] 3d⁵ 4s¹</text><text x="230" y="79" fill="#fde047">Half-filled 3d⁵ (Stable)</text>
      
      <text x="10" y="100" fill="#f8fafc">Mn</text><text x="65" y="100" fill="#cbd5e1">25</text><text x="100" y="100" fill="#cbd5e1">[Ar] 3d⁵ 4s²</text><text x="230" y="100" fill="#a78bfa">Max OS (+2 to +7)</text>
      <text x="10" y="118" fill="#f8fafc">Fe-Ni</text><text x="65" y="118" fill="#cbd5e1">26-28</text><text x="100" y="118" fill="#cbd5e1">[Ar] 3d⁶-3d⁸ 4s²</text><text x="230" y="118" fill="#94a3b8">Ferromagnetic</text>

      <!-- Cu Anomaly Highlight -->
      <rect x="5" y="125" width="325" height="20" fill="#38bdf8" fill-opacity="0.15" rx="3"/>
      <text x="10" y="139" fill="#38bdf8" font-weight="bold">Cu</text><text x="65" y="139" fill="#38bdf8">29</text><text x="100" y="139" fill="#38bdf8" font-weight="bold">[Ar] 3d¹⁰ 4s¹</text><text x="230" y="139" fill="#38bdf8">Fully-filled 3d¹⁰</text>
    </g>
  </g>

  <!-- Box 2: Atomic Radii Trend Curve in 3d Series -->
  <g transform="translate(410, 48)">
    <rect width="365" height="210" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="182" y="22" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">2. ATOMIC RADII TREND (SHIELDING vs Z_eff)</text>
    
    <!-- Graph Background -->
    <g transform="translate(25, 40)">
      <line x1="30" y1="130" x2="310" y2="130" stroke="#64748b" stroke-width="1.5"/>
      <line x1="30" y1="20" x2="30" y2="130" stroke="#64748b" stroke-width="1.5"/>
      <text x="15" y="25" fill="#94a3b8" font-size="9" text-anchor="middle">Radius (pm)</text>
      
      <!-- Curve Path: Sc to Zn -->
      <!-- Sc(164) -> Ti(147) -> V(135) -> Cr(129) -> Mn(137) -> Fe(126) -> Co(125) -> Ni(125) -> Cu(128) -> Zn(137) -->
      <path d="M 40 40 Q 90 85 140 100 T 220 102 Q 260 95 295 75" fill="none" stroke="#38bdf8" stroke-width="3"/>
      
      <!-- Data Points -->
      <circle cx="40" cy="40" r="4" fill="#38bdf8"/><text x="40" y="32" fill="#cbd5e1" font-size="8" text-anchor="middle">Sc</text>
      <circle cx="70" cy="70" r="3.5" fill="#38bdf8"/><text x="70" y="62" fill="#cbd5e1" font-size="8" text-anchor="middle">Ti</text>
      <circle cx="105" cy="88" r="3.5" fill="#38bdf8"/><text x="105" y="80" fill="#cbd5e1" font-size="8" text-anchor="middle">V</text>
      <circle cx="140" cy="98" r="3.5" fill="#38bdf8"/><text x="140" y="90" fill="#cbd5e1" font-size="8" text-anchor="middle">Cr</text>
      <circle cx="175" cy="94" r="3.5" fill="#fbbf24"/><text x="175" y="86" fill="#fbbf24" font-size="8" text-anchor="middle">Mn</text>
      <circle cx="205" cy="102" r="3.5" fill="#38bdf8"/><text x="205" y="115" fill="#cbd5e1" font-size="8" text-anchor="middle">Fe</text>
      <circle cx="235" cy="103" r="3.5" fill="#38bdf8"/><text x="235" y="115" fill="#cbd5e1" font-size="8" text-anchor="middle">Co-Ni</text>
      <circle cx="265" cy="96" r="3.5" fill="#38bdf8"/><text x="265" y="88" fill="#cbd5e1" font-size="8" text-anchor="middle">Cu</text>
      <circle cx="295" cy="75" r="4" fill="#f87171"/><text x="295" y="67" fill="#f87171" font-size="8" text-anchor="middle">Zn</text>

      <!-- Explanatory Annotations -->
      <text x="80" y="125" fill="#94a3b8" font-size="8" text-anchor="middle">Z_eff dominant (Decreases)</text>
      <text x="215" y="138" fill="#4ade80" font-size="8" text-anchor="middle">Z_eff ≈ Screening (Constant)</text>
      <text x="285" y="115" fill="#fca5a5" font-size="8" text-anchor="middle">e⁻-e⁻ Repulsion (Increases)</text>
    </g>
  </g>

  <!-- Box 3: Variable Oxidation States in 3d Series -->
  <g transform="translate(25, 270)">
    <rect width="750" height="210" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="375" y="24" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold">3. SPECTRUM OF OXIDATION STATES ACROSS THE 3d SERIES (Sc to Zn)</text>
    
    <g transform="translate(20, 40)" font-size="10">
      <!-- Header row of elements -->
      <g fill="#94a3b8" font-weight="bold" text-anchor="middle">
        <text x="40" y="16">Sc</text><text x="110" y="16">Ti</text><text x="180" y="16">V</text><text x="250" y="16">Cr</text>
        <text x="320" y="16" fill="#f43f5e">Mn (Max)</text><text x="390" y="16">Fe</text><text x="460" y="16">Co</text>
        <text x="530" y="16">Ni</text><text x="600" y="16">Cu</text><text x="670" y="16">Zn</text>
      </g>
      <line x1="10" y1="22" x2="700" y2="22" stroke="#334155" stroke-width="1"/>

      <!-- Oxidation state bubbles -->
      <!-- Sc: +3 -->
      <rect x="25" y="30" width="30" height="20" rx="4" fill="#3b82f6" fill-opacity="0.3"/><text x="40" y="44" fill="#60a5fa" font-weight="bold" text-anchor="middle">+3</text>

      <!-- Ti: +2, +3, +4 -->
      <text x="110" y="44" fill="#cbd5e1" text-anchor="middle">+2, +3</text>
      <rect x="95" y="52" width="30" height="20" rx="4" fill="#3b82f6" fill-opacity="0.3"/><text x="110" y="66" fill="#60a5fa" font-weight="bold" text-anchor="middle">+4</text>

      <!-- V: +2, +3, +4, +5 -->
      <text x="180" y="44" fill="#cbd5e1" text-anchor="middle">+2, +3, +4</text>
      <rect x="165" y="52" width="30" height="20" rx="4" fill="#3b82f6" fill-opacity="0.3"/><text x="180" y="66" fill="#60a5fa" font-weight="bold" text-anchor="middle">+5</text>

      <!-- Cr: +2, +3, +4, +5, +6 -->
      <text x="250" y="44" fill="#cbd5e1" text-anchor="middle">+2, +4, +5</text>
      <rect x="235" y="52" width="30" height="20" rx="4" fill="#10b981" fill-opacity="0.4"/><text x="250" y="66" fill="#34d399" font-weight="bold" text-anchor="middle">+3</text>
      <rect x="235" y="76" width="30" height="20" rx="4" fill="#f59e0b" fill-opacity="0.4"/><text x="250" y="90" fill="#fbbf24" font-weight="bold" text-anchor="middle">+6</text>

      <!-- Mn: +2, +3, +4, +5, +6, +7 -->
      <rect x="305" y="30" width="30" height="20" rx="4" fill="#10b981" fill-opacity="0.4"/><text x="320" y="44" fill="#34d399" font-weight="bold" text-anchor="middle">+2</text>
      <text x="320" y="66" fill="#cbd5e1" text-anchor="middle">+3, +4, +5</text>
      <rect x="305" y="76" width="30" height="20" rx="4" fill="#ec4899" fill-opacity="0.4"/><text x="320" y="90" fill="#f472b6" font-weight="bold" text-anchor="middle">+7</text>

      <!-- Fe: +2, +3, +4, +6 -->
      <rect x="375" y="30" width="30" height="20" rx="4" fill="#10b981" fill-opacity="0.4"/><text x="390" y="44" fill="#34d399" font-weight="bold" text-anchor="middle">+2</text>
      <rect x="375" y="52" width="30" height="20" rx="4" fill="#10b981" fill-opacity="0.4"/><text x="390" y="66" fill="#34d399" font-weight="bold" text-anchor="middle">+3</text>
      <text x="390" y="90" fill="#cbd5e1" text-anchor="middle">+4, +6</text>

      <!-- Co: +2, +3, +4 -->
      <rect x="445" y="30" width="30" height="20" rx="4" fill="#10b981" fill-opacity="0.4"/><text x="460" y="44" fill="#34d399" font-weight="bold" text-anchor="middle">+2</text>
      <rect x="445" y="52" width="30" height="20" rx="4" fill="#3b82f6" fill-opacity="0.3"/><text x="460" y="66" fill="#60a5fa" font-weight="bold" text-anchor="middle">+3</text>

      <!-- Ni: +2, +3, +4 -->
      <rect x="515" y="30" width="30" height="20" rx="4" fill="#10b981" fill-opacity="0.4"/><text x="530" y="44" fill="#34d399" font-weight="bold" text-anchor="middle">+2</text>
      <text x="530" y="66" fill="#cbd5e1" text-anchor="middle">+3, +4</text>

      <!-- Cu: +1, +2 -->
      <text x="600" y="44" fill="#cbd5e1" text-anchor="middle">+1</text>
      <rect x="585" y="52" width="30" height="20" rx="4" fill="#10b981" fill-opacity="0.4"/><text x="600" y="66" fill="#34d399" font-weight="bold" text-anchor="middle">+2</text>

      <!-- Zn: +2 -->
      <rect x="655" y="30" width="30" height="20" rx="4" fill="#3b82f6" fill-opacity="0.3"/><text x="670" y="44" fill="#60a5fa" font-weight="bold" text-anchor="middle">+2</text>
    </g>

    <!-- Bottom summary notes -->
    <g transform="translate(30, 160)" font-size="10">
      <text x="0" y="10" fill="#38bdf8">• <strong>Reason for variable OS:</strong> Small energy gap between (n-1)d and ns subshells allows both sets of electrons to participate.</text>
      <text x="0" y="26" fill="#fbbf24">• <strong>Stability Highlights:</strong> Mn²⁺ (3d⁵ half-filled) is more stable than Mn³⁺ (strong oxidizer). Fe³⁺ (3d⁵) is more stable than Fe²⁺.</text>
      <text x="0" y="42" fill="#4ade80">• <strong>Cu²⁺(aq) vs Cu⁺(aq):</strong> Cu²⁺ is more stable in water because its high hydration enthalpy compensates for the second IE.</text>
    </g>
  </g>
</svg>`,

  magneticAndColourVisual: `<svg viewBox="0 0 800 480" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4" xmlns="http://www.w3.org/2000/svg">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">MAGNETIC MOMENTS (μ = √(n(n+2))) &amp; COLOUR OF TRANSITION IONS</text>

  <!-- Box 1: Spin-Only Magnetic Moment Table & Formula -->
  <g transform="translate(25, 48)">
    <rect width="365" height="200" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="182" y="22" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="bold">1. SPIN-ONLY FORMULA: μ = √[n(n+2)] BM</text>
    
    <g transform="translate(15, 34)" font-size="10.5">
      <rect width="335" height="150" fill="#0f172a" rx="6"/>
      <text x="10" y="16" fill="#94a3b8" font-weight="bold">Ion</text>
      <text x="60" y="16" fill="#94a3b8" font-weight="bold">d-Config</text>
      <text x="140" y="16" fill="#94a3b8" font-weight="bold">Unpaired (n)</text>
      <text x="235" y="16" fill="#94a3b8" font-weight="bold">μ (BM)</text>
      <line x1="5" y1="22" x2="330" y2="22" stroke="#334155" stroke-width="1"/>

      <text x="10" y="38" fill="#cbd5e1">Sc³⁺ / Ti⁴⁺</text><text x="60" y="38" fill="#cbd5e1">3d⁰</text><text x="150" y="38" fill="#cbd5e1">0</text><text x="240" y="38" fill="#94a3b8">0 (Diamag.)</text>
      <text x="10" y="56" fill="#cbd5e1">Ti³⁺ / Cu²⁺</text><text x="60" y="56" fill="#cbd5e1">3d¹ / 3d⁹</text><text x="150" y="56" fill="#cbd5e1">1</text><text x="240" y="56" fill="#38bdf8" font-weight="bold">1.73 BM</text>
      <text x="10" y="74" fill="#cbd5e1">V³⁺ / Ni²⁺</text><text x="60" y="74" fill="#cbd5e1">3d² / 3d⁸</text><text x="150" y="74" fill="#cbd5e1">2</text><text x="240" y="74" fill="#38bdf8" font-weight="bold">2.84 BM</text>
      <text x="10" y="92" fill="#cbd5e1">Cr³⁺ / Co²⁺</text><text x="60" y="92" fill="#cbd5e1">3d³ / 3d⁷</text><text x="150" y="92" fill="#cbd5e1">3</text><text x="240" y="74" fill="#38bdf8" font-weight="bold"></text><text x="240" y="92" fill="#38bdf8" font-weight="bold">3.87 BM</text>
      <text x="10" y="110" fill="#cbd5e1">Cr²⁺ / Fe²⁺</text><text x="60" y="110" fill="#cbd5e1">3d⁴ / 3d⁶</text><text x="150" y="110" fill="#cbd5e1">4</text><text x="240" y="110" fill="#38bdf8" font-weight="bold">4.90 BM</text>
      <text x="10" y="128" fill="#fde047" font-weight="bold">Mn²⁺ / Fe³⁺</text><text x="60" y="128" fill="#fde047">3d⁵</text><text x="150" y="128" fill="#fde047" font-weight="bold">5 (Max)</text><text x="240" y="128" fill="#fde047" font-weight="bold">5.92 BM</text>
      <text x="10" y="144" fill="#cbd5e1">Zn²⁺ / Cu⁺</text><text x="60" y="144" fill="#cbd5e1">3d¹⁰</text><text x="150" y="144" fill="#cbd5e1">0</text><text x="240" y="144" fill="#94a3b8">0 (Diamag.)</text>
    </g>
  </g>

  <!-- Box 2: Origin of Colour (d-d Transitions) -->
  <g transform="translate(410, 48)">
    <rect width="365" height="200" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="182" y="22" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">2. ORIGIN OF COLOUR: d-d TRANSITIONS</text>
    
    <!-- Octahedral Crystal Field Splitting -->
    <g transform="translate(30, 40)">
      <!-- Degenerate d orbitals -->
      <g transform="translate(10, 60)">
        <rect x="0" y="0" width="18" height="18" fill="#334155" stroke="#64748b"/>
        <rect x="20" y="0" width="18" height="18" fill="#334155" stroke="#64748b"/>
        <rect x="40" y="0" width="18" height="18" fill="#334155" stroke="#64748b"/>
        <rect x="60" y="0" width="18" height="18" fill="#334155" stroke="#64748b"/>
        <rect x="80" y="0" width="18" height="18" fill="#334155" stroke="#64748b"/>
        <text x="49" y="32" fill="#94a3b8" font-size="9" text-anchor="middle">5 Degenerate d</text>
      </g>

      <!-- Splitting Arrows -->
      <path d="M 115 69 L 160 30" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow-chem)"/>
      <path d="M 115 69 L 160 95" stroke="#fbbf24" stroke-width="1.5"/>

      <!-- Split Levels: eg (upper) and t2g (lower) -->
      <g transform="translate(165, 20)">
        <rect x="0" y="0" width="20" height="18" fill="#475569" stroke="#94a3b8"/>
        <rect x="24" y="0" width="20" height="18" fill="#475569" stroke="#94a3b8"/>
        <text x="60" y="14" fill="#f87171" font-size="10" font-weight="bold">e_g</text>
      </g>
      <g transform="translate(165, 85)">
        <rect x="0" y="0" width="20" height="18" fill="#475569" stroke="#94a3b8"/>
        <rect x="24" y="0" width="20" height="18" fill="#475569" stroke="#94a3b8"/>
        <rect x="48" y="0" width="20" height="18" fill="#475569" stroke="#94a3b8"/>
        <text x="80" y="14" fill="#38bdf8" font-size="10" font-weight="bold">t_2g</text>
      </g>

      <!-- Photon absorption & excitation -->
      <path d="M 175 90 Q 210 55 175 35" stroke="#facc15" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="245" y="60" fill="#facc15" font-size="9">Absorbs hν (Visible)</text>
      <text x="245" y="74" fill="#a78bfa" font-size="9">Transmits Complement</text>
    </g>
    
    <text x="182" y="180" text-anchor="middle" fill="#fda4af" font-size="9.5" font-weight="bold">⚠️ d⁰ (Sc³⁺, Ti⁴⁺) &amp; d¹⁰ (Zn²⁺, Cu⁺) = COLOURLESS (No d-d transition)</text>
  </g>

  <!-- Box 3: Palette of Common Transition Metal Ions -->
  <g transform="translate(25, 260)">
    <rect width="750" height="205" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="375" y="24" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">3. HIGH-YIELD NCERT COLOUR PALETTE OF AQUEOUS 3d IONS</text>
    
    <g transform="translate(25, 45)">
      <!-- Ti3+: Purple -->
      <g transform="translate(0, 0)">
        <circle cx="35" cy="30" r="22" fill="#a855f7" stroke="#c084fc" stroke-width="2"/>
        <text x="35" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Ti³⁺</text>
        <text x="35" y="65" fill="#c084fc" font-size="9" text-anchor="middle">Purple</text>
      </g>
      <!-- V4+ (VO2+): Blue -->
      <g transform="translate(90, 0)">
        <circle cx="35" cy="30" r="22" fill="#2563eb" stroke="#60a5fa" stroke-width="2"/>
        <text x="35" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">VO²⁺</text>
        <text x="35" y="65" fill="#60a5fa" font-size="9" text-anchor="middle">Blue</text>
      </g>
      <!-- Cr3+: Green/Violet -->
      <g transform="translate(180, 0)">
        <circle cx="35" cy="30" r="22" fill="#16a34a" stroke="#4ade80" stroke-width="2"/>
        <text x="35" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Cr³⁺</text>
        <text x="35" y="65" fill="#4ade80" font-size="9" text-anchor="middle">Green</text>
      </g>
      <!-- Mn2+: Light Pink -->
      <g transform="translate(270, 0)">
        <circle cx="35" cy="30" r="22" fill="#f472b6" stroke="#fbcfe8" stroke-width="2"/>
        <text x="35" y="34" fill="#831843" font-size="10" font-weight="bold" text-anchor="middle">Mn²⁺</text>
        <text x="35" y="65" fill="#f472b6" font-size="9" text-anchor="middle">Pale Pink</text>
      </g>
      <!-- Fe2+: Pale Green -->
      <g transform="translate(360, 0)">
        <circle cx="35" cy="30" r="22" fill="#84cc16" stroke="#bef264" stroke-width="2"/>
        <text x="35" y="34" fill="#365314" font-size="10" font-weight="bold" text-anchor="middle">Fe²⁺</text>
        <text x="35" y="65" fill="#a3e635" font-size="9" text-anchor="middle">Light Green</text>
      </g>
      <!-- Fe3+: Yellow/Brown -->
      <g transform="translate(450, 0)">
        <circle cx="35" cy="30" r="22" fill="#d97706" stroke="#fcd34d" stroke-width="2"/>
        <text x="35" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Fe³⁺</text>
        <text x="35" y="65" fill="#fcd34d" font-size="9" text-anchor="middle">Yellow/Brown</text>
      </g>
      <!-- Co2+: Pink -->
      <g transform="translate(540, 0)">
        <circle cx="35" cy="30" r="22" fill="#ec4899" stroke="#f472b6" stroke-width="2"/>
        <text x="35" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Co²⁺</text>
        <text x="35" y="65" fill="#f472b6" font-size="9" text-anchor="middle">Pink</text>
      </g>
      <!-- Cu2+: Blue -->
      <g transform="translate(630, 0)">
        <circle cx="35" cy="30" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <text x="35" y="34" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Cu²⁺</text>
        <text x="35" y="65" fill="#38bdf8" font-size="9" text-anchor="middle">Sky Blue</text>
      </g>
    </g>

    <!-- Exceptions: Charge Transfer Colour (KMnO4 & K2Cr2O7) -->
    <g transform="translate(30, 135)" font-size="10">
      <rect width="690" height="50" rx="6" fill="#0f172a" stroke="#e11d48" stroke-width="1"/>
      <text x="15" y="20" fill="#f43f5e" font-weight="bold">🔥 EXCEPTION ALERT — CHARGE TRANSFER COLOUR (NO d-ELECTRONS!):</text>
      <text x="15" y="38" fill="#e2e8f0">• <strong>KMnO₄ (Mn⁷⁺, 3d⁰):</strong> Deep purple colour is due to <strong>Ligand-to-Metal Charge Transfer (L → M CT)</strong>, NOT d-d transition!</text>
      <text x="450" y="38" fill="#fbbf24">• <strong>K₂Cr₂O₇ (Cr⁶⁺, 3d⁰):</strong> Orange colour is also due to <strong>L → M CT</strong>.</text>
    </g>
  </g>
</svg>`,

  kmno4K2cr2o7ReactionFlow: `<svg viewBox="0 0 800 520" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4" xmlns="http://www.w3.org/2000/svg">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">PREPARATION &amp; REDOX CHEMISTRY OF K₂Cr₂O₇ &amp; KMnO₄</text>

  <!-- Left Column: K2Cr2O7 Industrial Synthesis & Reactions -->
  <g transform="translate(25, 48)">
    <rect width="365" height="450" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="182" y="24" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">POTASSIUM DICHROMATE (K₂Cr₂O₇)</text>
    
    <!-- Step 1: Chromite Ore Fusion -->
    <g transform="translate(15, 38)" font-size="9.5">
      <rect width="335" height="50" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="10" y="16" fill="#4ade80" font-weight="bold">Step 1: Chromite Ore (FeCr₂O₄) Fusion</text>
      <text x="10" y="32" fill="#cbd5e1">4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ →</text>
      <text x="10" y="44" fill="#fde047" font-weight="bold">8 Na₂CrO₄ (Yellow) + 2 Fe₂O₃ + 8 CO₂</text>
    </g>

    <!-- Step 2: Acidification to Dichromate -->
    <g transform="translate(15, 96)" font-size="9.5">
      <rect width="335" height="46" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="10" y="16" fill="#4ade80" font-weight="bold">Step 2: Acidification with H₂SO₄</text>
      <text x="10" y="32" fill="#cbd5e1">2 Na₂CrO₄ + 2 H⁺ →</text>
      <text x="10" y="44" fill="#fb923c" font-weight="bold">Na₂Cr₂O₇ (Orange sol.) + 2 Na⁺ + H₂O</text>
    </g>

    <!-- Step 3: KCl Crystallization -->
    <g transform="translate(15, 150)" font-size="9.5">
      <rect width="335" height="42" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="10" y="16" fill="#4ade80" font-weight="bold">Step 3: Conversion to K₂Cr₂O₇</text>
      <text x="10" y="32" fill="#cbd5e1">Na₂Cr₂O₇ + 2 KCl → <tspan fill="#f97316" font-weight="bold">K₂Cr₂O₇ (Orange crystals)</tspan> + 2 NaCl</text>
    </g>

    <!-- Chromate-Dichromate pH Equilibrium -->
    <g transform="translate(15, 200)" font-size="9.5">
      <rect width="335" height="60" rx="6" fill="#451a03" stroke="#d97706" stroke-width="1.5"/>
      <text x="167" y="16" text-anchor="middle" fill="#fde047" font-weight="bold">⚠️ pH-Dependent Equilibrium (NEET Favorite!)</text>
      <text x="167" y="34" text-anchor="middle" fill="#fef08a">2 CrO₄²⁻ (Yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (Orange) + H₂O</text>
      <text x="167" y="50" text-anchor="middle" fill="#fed7aa">• Acid (pH &lt; 7): Orange Cr₂O₇²⁻ | Alkali (pH &gt; 7): Yellow CrO₄²⁻</text>
    </g>

    <!-- Redox Action in Acidic Medium -->
    <g transform="translate(15, 270)" font-size="9">
      <rect width="335" height="165" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="10" y="16" fill="#38bdf8" font-weight="bold">Oxidising Action in Acidic Medium (Cr⁶⁺ → Cr³⁺)</text>
      <text x="10" y="32" fill="#f97316" font-weight="bold">Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ (Green) + 7 H₂O</text>
      <line x1="10" y1="40" x2="325" y2="40" stroke="#334155"/>
      
      <text x="10" y="56" fill="#cbd5e1">• Fe²⁺ → Fe³⁺: Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ → 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O</text>
      <text x="10" y="76" fill="#cbd5e1">• I⁻ → I₂: Cr₂O₇²⁻ + 14 H⁺ + 6 I⁻ → 2 Cr³⁺ + 3 I₂ + 7 H₂O</text>
      <text x="10" y="96" fill="#cbd5e1">• H₂S → S: Cr₂O₇²⁻ + 8 H⁺ + 3 H₂S → 2 Cr³⁺ + 3 S↓ + 7 H₂O</text>
      <text x="10" y="116" fill="#cbd5e1">• SO₂ → SO₄²⁻: Cr₂O₇²⁻ + 2 H⁺ + 3 SO₂ → 2 Cr³⁺ + 3 SO₄²⁻ + H₂O</text>
      <text x="10" y="136" fill="#cbd5e1">• Sn²⁺ → Sn⁴⁺: Cr₂O₇²⁻ + 14 H⁺ + 3 Sn²⁺ → 2 Cr³⁺ + 3 Sn⁴⁺ + 7 H₂O</text>
      <text x="10" y="154" fill="#fde047" font-weight="bold">Equiv. Wt = M / 6 (In acidic medium)</text>
    </g>
  </g>

  <!-- Right Column: KMnO4 Industrial Synthesis & Reactions -->
  <g transform="translate(410, 48)">
    <rect width="365" height="450" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
    <text x="182" y="24" text-anchor="middle" fill="#f472b6" font-size="13" font-weight="bold">POTASSIUM PERMANGANATE (KMnO₄)</text>
    
    <!-- Step 1: Pyrolusite Fusion -->
    <g transform="translate(15, 38)" font-size="9.5">
      <rect width="335" height="50" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="10" y="16" fill="#4ade80" font-weight="bold">Step 1: Pyrolusite (MnO₂) Alkaline Fusion</text>
      <text x="10" y="32" fill="#cbd5e1">2 MnO₂ + 4 KOH + O₂ →</text>
      <text x="10" y="44" fill="#4ade80" font-weight="bold">2 K₂MnO₄ (Dark Green) + 2 H₂O</text>
    </g>

    <!-- Step 2: Electrolytic / Chemical Oxidation -->
    <g transform="translate(15, 96)" font-size="9.5">
      <rect width="335" height="46" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="10" y="16" fill="#4ade80" font-weight="bold">Step 2: Electrolytic Oxidation to KMnO₄</text>
      <text x="10" y="32" fill="#cbd5e1">MnO₄²⁻ (Green) → <tspan fill="#f472b6" font-weight="bold">MnO₄⁻ (Purple)</tspan> + e⁻ (Anode)</text>
      <text x="10" y="44" fill="#94a3b8">Disproportionation in acid: 3 MnO₄²⁻ + 4 H⁺ → 2 MnO₄⁻ + MnO₂ + 2 H₂O</text>
    </g>

    <!-- 3 Media Redox Summary -->
    <g transform="translate(15, 150)" font-size="9">
      <rect width="335" height="285" rx="6" fill="#0f172a" stroke="#334155"/>
      <text x="10" y="16" fill="#f43f5e" font-weight="bold">Oxidising Action Across 3 Different Media:</text>
      
      <!-- Acidic Medium -->
      <rect x="5" y="24" width="325" height="105" rx="4" fill="#881337" fill-opacity="0.3"/>
      <text x="10" y="38" fill="#fda4af" font-weight="bold">A. Acidic Medium (Mn⁷⁺ → Mn²⁺, 5 e⁻ transfer, n = 5, Eq = M/5):</text>
      <text x="10" y="52" fill="#f472b6" font-weight="bold">MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ (Pale pink) + 4 H₂O</text>
      <text x="10" y="68" fill="#cbd5e1">• Fe²⁺ → Fe³⁺ (Oxidation of ferrous)</text>
      <text x="10" y="82" fill="#cbd5e1">• C₂O₄²⁻ (Oxalate) → 2 CO₂ (Decolourizes purple)</text>
      <text x="10" y="96" fill="#cbd5e1">• I⁻ → I₂ (Violet vapours liberated)</text>
      <text x="10" y="110" fill="#cbd5e1">• H₂S → S↓ | SO₃²⁻ → SO₄²⁻ | NO₂⁻ → NO₃⁻</text>
      <text x="10" y="124" fill="#cbd5e1">• ⚠️ NOT with HCl! (HCl is oxidized to Cl₂! Use H₂SO₄)</text>

      <!-- Neutral / Faintly Alkaline -->
      <rect x="5" y="136" width="325" height="75" rx="4" fill="#1e3a8a" fill-opacity="0.3"/>
      <text x="10" y="150" fill="#93c5fd" font-weight="bold">B. Neutral / Faintly Alkaline (Bayer's, Mn⁷⁺ → Mn⁴⁺, 3 e⁻, n = 3):</text>
      <text x="10" y="164" fill="#60a5fa" font-weight="bold">MnO₄⁻ + 2 H₂O + 3 e⁻ → MnO₂↓ (Brown ppt) + 4 OH⁻</text>
      <text x="10" y="180" fill="#fde047" font-weight="bold">• I⁻ → IO₃⁻ (Iodate! NOT I₂! Classic NEET trap)</text>
      <text x="10" y="196" fill="#cbd5e1">• S₂O₃²⁻ (Thiosulphate) → SO₄²⁻ (Sulphate)</text>
      <text x="10" y="208" fill="#94a3b8">Equiv. Wt = M / 3</text>

      <!-- Strongly Alkaline -->
      <rect x="5" y="218" width="325" height="60" rx="4" fill="#064e3b" fill-opacity="0.3"/>
      <text x="10" y="232" fill="#6ee7b7" font-weight="bold">C. Strongly Alkaline Medium (Mn⁷⁺ → Mn⁶⁺, 1 e⁻, n = 1):</text>
      <text x="10" y="248" fill="#34d399">MnO₄⁻ + e⁻ → MnO₄²⁻ (Dark Green manganate)</text>
      <text x="10" y="264" fill="#a7f3d0">Equiv. Wt = M / 1</text>
    </g>
  </g>
</svg>`,

  lanthanoidContractionAndActinoids: `<svg viewBox="0 0 800 500" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4" xmlns="http://www.w3.org/2000/svg">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">f-BLOCK: LANTHANOID CONTRACTION &amp; ACTINOIDS COMPARISON</text>

  <!-- Box 1: Lanthanoid Contraction Mechanism & Size Curve -->
  <g transform="translate(25, 48)">
    <rect width="365" height="225" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="182" y="22" text-anchor="middle" fill="#4ade80" font-size="13" font-weight="bold">1. LANTHANOID CONTRACTION (Ln³⁺ RADII)</text>
    
    <!-- Graph -->
    <g transform="translate(20, 38)">
      <line x1="30" y1="130" x2="310" y2="130" stroke="#64748b" stroke-width="1.5"/>
      <line x1="30" y1="15" x2="30" y2="130" stroke="#64748b" stroke-width="1.5"/>
      <text x="15" y="20" fill="#94a3b8" font-size="8" text-anchor="middle">Radius</text>
      
      <!-- Smooth downward curve: La3+ (106 pm) -> Lu3+ (86 pm) -->
      <path d="M 40 30 Q 170 80 300 120" fill="none" stroke="#4ade80" stroke-width="3"/>
      <circle cx="40" cy="30" r="4" fill="#4ade80"/><text x="40" y="22" fill="#cbd5e1" font-size="8" text-anchor="middle">La³⁺ (106 pm)</text>
      <circle cx="105" cy="55" r="3.5" fill="#4ade80"/><text x="105" y="47" fill="#cbd5e1" font-size="8" text-anchor="middle">Ce³⁺</text>
      <circle cx="170" cy="78" r="3.5" fill="#4ade80"/><text x="170" y="70" fill="#cbd5e1" font-size="8" text-anchor="middle">Gd³⁺</text>
      <circle cx="235" cy="100" r="3.5" fill="#4ade80"/><text x="235" y="92" fill="#cbd5e1" font-size="8" text-anchor="middle">Ho³⁺</text>
      <circle cx="300" cy="120" r="4" fill="#4ade80"/><text x="300" y="112" fill="#cbd5e1" font-size="8" text-anchor="middle">Lu³⁺ (86 pm)</text>
    </g>

    <!-- Cause -->
    <g transform="translate(15, 175)" font-size="9.5">
      <text x="0" y="10" fill="#fde047" font-weight="bold">Cause: Imperfect Shielding of 4f Electrons</text>
      <text x="0" y="26" fill="#94a3b8">• 4f orbitals are diffuse and have poor screening power.</text>
      <text x="0" y="40" fill="#94a3b8">• Nuclear charge (+Z) increases by 1 at each step, pulling outer shells inward.</text>
    </g>
  </g>

  <!-- Box 2: Consequences of Lanthanoid Contraction -->
  <g transform="translate(410, 48)">
    <rect width="365" height="225" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="182" y="22" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold">2. CONSEQUENCES OF LANTHANOID CONTRACTION</text>
    
    <g transform="translate(15, 38)" font-size="9.5">
      <!-- Consequence A: Zr & Hf Identical Radii -->
      <rect width="335" height="52" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="10" y="16" fill="#fbbf24" font-weight="bold">A. Twin Elements (Zr &amp; Hf Identical Radii):</text>
      <text x="10" y="32" fill="#e2e8f0">• <strong>Zr (4d): 160 pm</strong> ≈ <strong>Hf (5d): 159 pm</strong> (Due to 4f filling in between!)</text>
      <text x="10" y="44" fill="#94a3b8">• They exhibit nearly identical chemical properties &amp; occur together.</text>

      <!-- Consequence B: Basicity of Hydroxides -->
      <g transform="translate(0, 58)">
        <rect width="335" height="46" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="10" y="16" fill="#38bdf8" font-weight="bold">B. Basicity of Hydroxides Decreases:</text>
        <text x="10" y="32" fill="#60a5fa" font-weight="bold">La(OH)₃ (Most basic) &gt; ... &gt; Lu(OH)₃ (Least basic)</text>
        <text x="10" y="42" fill="#94a3b8">Smaller Ln³⁺ size increases covalent character (Fajan's rule).</text>
      </g>

      <!-- Consequence C: Separation difficulty & Density -->
      <g transform="translate(0, 110)">
        <rect width="335" height="52" rx="6" fill="#0f172a" stroke="#334155"/>
        <text x="10" y="16" fill="#4ade80" font-weight="bold">C. Separation &amp; High 5d Densities:</text>
        <text x="10" y="32" fill="#cbd5e1">• Separation requires <strong>Ion-Exchange Chromatography</strong>.</text>
        <text x="10" y="44" fill="#cbd5e1">• 5d series elements have almost double the density of 4d series.</text>
      </g>
    </g>
  </g>

  <!-- Box 3: Lanthanoids vs Actinoids Comparison Table -->
  <g transform="translate(25, 285)">
    <rect width="750" height="200" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <text x="375" y="22" text-anchor="middle" fill="#a78bfa" font-size="13" font-weight="bold">3. LANTHANOIDS vs ACTINOIDS — DIRECT NEET COMPARISON</text>
    
    <g transform="translate(15, 34)" font-size="10">
      <rect width="720" height="150" fill="#0f172a" rx="6"/>
      <text x="20" y="18" fill="#94a3b8" font-weight="bold">Property / Feature</text>
      <text x="230" y="18" fill="#4ade80" font-weight="bold">Lanthanoids (4f-series, Ce to Lu)</text>
      <text x="490" y="18" fill="#f472b6" font-weight="bold">Actinoids (5f-series, Th to Lr)</text>
      <line x1="10" y1="24" x2="710" y2="24" stroke="#334155" stroke-width="1"/>

      <text x="20" y="42" fill="#cbd5e1">1. Oxidation States</text>
      <text x="230" y="42" fill="#cbd5e1">Mainly <strong>+3</strong>; sometimes +2 (Eu²⁺, Yb²⁺), +4 (Ce⁴⁺)</text>
      <text x="490" y="42" fill="#cbd5e1">Wide range: <strong>+3, +4, +5, +6, +7</strong> (Np, Pu reach +7)</text>

      <text x="20" y="64" fill="#cbd5e1">2. Energy Gap (f vs d)</text>
      <text x="230" y="64" fill="#cbd5e1">Large energy gap between 4f and 5d</text>
      <text x="490" y="64" fill="#cbd5e1">Small energy gap between 5f, 6d, and 7s</text>

      <text x="20" y="86" fill="#cbd5e1">3. Radioactivity</text>
      <text x="230" y="86" fill="#cbd5e1">Non-radioactive (Except Promethium, <strong>Pm</strong>)</text>
      <text x="490" y="86" fill="#f43f5e" font-weight="bold">ALL are radioactive</text>

      <text x="20" y="108" fill="#cbd5e1">4. Complex Formation</text>
      <text x="230" y="108" fill="#cbd5e1">Less tendency to form complexes</text>
      <text x="490" y="108" fill="#cbd5e1">Much higher tendency (small, high charge ions)</text>

      <text x="20" y="130" fill="#cbd5e1">5. Contraction Magnitude</text>
      <text x="230" y="130" fill="#cbd5e1">Lanthanoid contraction</text>
      <text x="490" y="130" fill="#fde047" font-weight="bold">Actinoid contraction is GREATER (5f poorer shielding)</text>
    </g>
  </g>
</svg>`,

  dfBlockMasterMindMap: `<svg viewBox="0 0 800 480" class="w-full h-auto rounded-xl bg-slate-900 border border-slate-800 p-3 sm:p-4" xmlns="http://www.w3.org/2000/svg">
  <text x="400" y="28" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">d- AND f-BLOCK ELEMENTS — MASTER NEET MIND MAP</text>

  <!-- Central Hub -->
  <g transform="translate(280, 190)">
    <rect width="240" height="60" rx="30" fill="#2563eb" stroke="#60a5fa" stroke-width="2"/>
    <text x="120" y="28" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">d- &amp; f-BLOCK ELEMENTS</text>
    <text x="120" y="46" text-anchor="middle" fill="#bfdbfe" font-size="10">Class 12 Chapter 17 (NEET 2026)</text>
  </g>

  <!-- Branch 1: Top Left - 3d Trends & Configurations -->
  <path d="M 280 205 L 170 120" stroke="#38bdf8" stroke-width="2"/>
  <g transform="translate(30, 50)">
    <rect width="210" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="105" y="20" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">1. 3d TRANSITION TRENDS</text>
    <text x="10" y="38" fill="#cbd5e1" font-size="9">• Config: (n-1)d¹⁻¹⁰ ns⁰⁻²</text>
    <text x="10" y="52" fill="#fde047" font-size="9">• Cr: 3d⁵ 4s¹ | Cu: 3d¹⁰ 4s¹</text>
    <text x="10" y="66" fill="#cbd5e1" font-size="9">• Max OS: Mn (+2 to +7)</text>
    <text x="10" y="80" fill="#93c5fd" font-size="9">• High atomization enthalpy (m.p.)</text>
  </g>

  <!-- Branch 2: Top Right - Properties & Interstitials/Alloys -->
  <path d="M 520 205 L 630 120" stroke="#f59e0b" stroke-width="2"/>
  <g transform="translate(560, 50)">
    <rect width="210" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="105" y="20" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">2. PROPERTIES &amp; COMPOUNDS</text>
    <text x="10" y="38" fill="#cbd5e1" font-size="9">• Magnetic: μ = √[n(n+2)] BM</text>
    <text x="10" y="52" fill="#cbd5e1" font-size="9">• Colour: d-d transitions (d¹-d⁹)</text>
    <text x="10" y="66" fill="#4ade80" font-size="9">• Catalysis &amp; Interstitials (TiC)</text>
    <text x="10" y="80" fill="#93c5fd" font-size="9">• Alloys: Brass (Cu+Zn), Bronze</text>
  </g>

  <!-- Branch 3: Bottom Left - KMnO4 & K2Cr2O7 -->
  <path d="M 320 250 L 170 330" stroke="#ec4899" stroke-width="2"/>
  <g transform="translate(30, 310)">
    <rect width="210" height="110" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
    <text x="105" y="20" text-anchor="middle" fill="#f472b6" font-size="11" font-weight="bold">3. K₂Cr₂O₇ &amp; KMnO₄ REDOX</text>
    <text x="10" y="38" fill="#fde047" font-size="9">• Cr₂O₇²⁻ ⇌ 2 CrO₄²⁻ (pH dep.)</text>
    <text x="10" y="54" fill="#cbd5e1">• Cr₂O₇²⁻ (Acid): Cr⁶⁺ → Cr³⁺ (6e⁻)</text>
    <text x="10" y="70" fill="#f472b6" font-size="9">• KMnO₄ (Acid): Mn⁷⁺ → Mn²⁺ (5e⁻)</text>
    <text x="10" y="86" fill="#cbd5e1">• KMnO₄ (Neutral): I⁻ → IO₃⁻ (3e⁻)</text>
    <text x="10" y="100" fill="#fda4af" font-size="9">• Colour is L → M Charge Transfer!</text>
  </g>

  <!-- Branch 4: Bottom Right - f-Block & Lanthanoid Contraction -->
  <path d="M 480 250 L 630 330" stroke="#10b981" stroke-width="2"/>
  <g transform="translate(560, 310)">
    <rect width="210" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="105" y="20" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">4. f-BLOCK (Ln &amp; An)</text>
    <text x="10" y="38" fill="#cbd5e1" font-size="9">• Ln Common OS = +3</text>
    <text x="10" y="54" fill="#fde047" font-size="9">• Ln Contraction: Poor 4f shielding</text>
    <text x="10" y="70" fill="#cbd5e1">• Twin pair: Zr (160) ≈ Hf (159 pm)</text>
    <text x="10" y="86" fill="#cbd5e1">• Basicity: La(OH)₃ &gt; Lu(OH)₃</text>
    <text x="10" y="100" fill="#f472b6" font-size="9">• Actinoids: All radioactive, +3 to +7</text>
  </g>
</svg>`
};
