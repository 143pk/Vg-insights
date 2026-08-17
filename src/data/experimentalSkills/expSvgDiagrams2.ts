export const EXP_SVGS_2 = {
  viscosityTerminalVelocity: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">COEFFICIENT OF VISCOSITY (η): STOKES' LAW & TERMINAL VELOCITY OF SPHERE</text>
    
    <!-- Left: Tall Cylindrical Jar filled with Viscous Liquid (Glycerine/Castor Oil) -->
    <g transform="translate(60, 40)">
      <!-- Tall Glass Jar -->
      <rect x="50" y="10" width="100" height="250" fill="#f59e0b" opacity="0.25" stroke="#94a3b8" stroke-width="2" rx="4"/>
      
      <!-- Markings A, B, C along jar -->
      <line x1="45" y1="50" x2="55" y2="50" stroke="#f8fafc" stroke-width="2"/>
      <text x="38" y="54" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="end">A (Entry)</text>
      
      <line x1="45" y1="120" x2="55" y2="120" stroke="#38bdf8" stroke-width="2"/>
      <text x="38" y="124" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="end">B (v_t reached)</text>
      
      <line x1="45" y1="210" x2="55" y2="210" stroke="#38bdf8" stroke-width="2"/>
      <text x="38" y="214" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="end">C</text>
      
      <!-- Height distance s = (C - B) -->
      <path d="M 160 120 L 175 120 M 168 120 L 168 210 M 160 210 L 175 210" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="185" y="168" fill="#38bdf8" font-size="11" font-weight="bold">s = v_t · t</text>
      
      <!-- Falling Spherical Steel Ball -->
      <circle cx="100" cy="165" r="14" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <text x="100" y="169" fill="#f8fafc" font-size="9" font-weight="bold" text-anchor="middle">r, ρ</text>
      
      <!-- Dynamic equilibrium force vectors -->
      <!-- Downward Weight W = mg -->
      <line x1="100" y1="179" x2="100" y2="225" stroke="#ef4444" stroke-width="2.5"/>
      <polygon points="96,222 100,230 104,222" fill="#ef4444"/>
      <text x="110" y="222" fill="#f87171" font-size="9.5" font-weight="bold">W = mg = (4/3)πr³ρg</text>
      
      <!-- Upward Buoyancy F_B -->
      <line x1="92" y1="151" x2="92" y2="105" stroke="#38bdf8" stroke-width="2"/>
      <polygon points="89,108 92,100 95,108" fill="#38bdf8"/>
      <text x="85" y="112" fill="#38bdf8" font-size="8.5" text-anchor="end">F_B = (4/3)πr³σg</text>
      
      <!-- Upward Viscous Drag F_v = 6πηrv -->
      <line x1="108" y1="151" x2="108" y2="105" stroke="#34d399" stroke-width="2"/>
      <polygon points="105,108 108,100 111,108" fill="#34d399"/>
      <text x="115" y="112" fill="#34d399" font-size="8.5">F_v = 6πηrv_t</text>
    </g>
    
    <!-- Right: Velocity-Time Graph & Stokes' Law Theory -->
    <g transform="translate(350, 48)">
      <rect width="360" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="180" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Velocity (v) vs Time (t) Curve</text>
      
      <!-- Graph Axes -->
      <line x1="45" y1="140" x2="330" y2="140" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="45" y1="140" x2="45" y2="30" stroke="#cbd5e1" stroke-width="2"/>
      <text x="325" y="155" fill="#cbd5e1" font-size="9" font-weight="bold">Time t →</text>
      <text x="40" y="25" fill="#cbd5e1" font-size="9" font-weight="bold" text-anchor="end">Velocity v →</text>
      
      <!-- Asymptotic Velocity Curve to v_t -->
      <path d="M 45 140 Q 95 65 320 65" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <line x1="45" y1="65" x2="330" y2="65" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="210" y="58" fill="#ef4444" font-size="10" font-weight="bold">Terminal Velocity v_t (Constant)</text>
      
      <!-- Key formula in box -->
      <rect x="20" y="155" width="320" height="48" fill="#0f172a" stroke="#38bdf8" stroke-width="1" rx="4"/>
      <text x="180" y="173" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle" font-family="monospace">v_t = [2 r² (ρ − σ) g] / (9 η) ∝ r²</text>
      <text x="180" y="192" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">Viscosity: η = [2 r² (ρ − σ) g] / (9 v_t)</text>
    </g>
    
    <!-- NEET Highlights Bar -->
    <rect x="70" y="270" width="610" height="40" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="287" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">NEET Gold: Equilibrium condition at terminal velocity: W = F_B + F_v (Net Acceleration a = 0).</text>
    <text x="375" y="301" fill="#fbbf24" font-size="9.5" text-anchor="middle">Terminal velocity is directly proportional to the SQUARE of the radius (v_t ∝ r²).</text>
  </svg>`,

  resonanceTubeSoundSpeed: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">SPEED OF SOUND IN AIR: RESONANCE TUBE & END CORRECTION (e = 0.6 r)</text>
    
    <!-- First Resonance (1st Harmonic / Fundamental) -->
    <g transform="translate(60, 42)">
      <rect width="280" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="140" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">1. First Resonance (Length l₁)</text>
      
      <!-- Vibrating Tuning Fork (Frequency f) -->
      <path d="M 125 30 L 132 30 L 132 45 L 140 45 L 140 30 L 147 30 L 147 52 L 138 52 L 138 65 L 134 65 L 134 52 L 125 52 Z" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1"/>
      <text x="160" y="45" fill="#fbbf24" font-size="10" font-weight="bold">Fork (f)</text>
      
      <!-- Resonance Tube Glass Column -->
      <rect x="110" y="70" width="50" height="135" fill="none" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Water Level for 1st resonance -->
      <rect x="110" y="150" width="50" height="55" fill="#0284c7" opacity="0.6"/>
      <line x1="110" y1="150" x2="160" y2="150" stroke="#38bdf8" stroke-width="2"/>
      
      <!-- Quarter-wave Standing Wave Mode (Antinode at top + e, Node at water surface) -->
      <path d="M 112 60 Q 135 110 135 150 M 158 60 Q 135 110 135 150" fill="none" stroke="#f43f5e" stroke-width="2"/>
      <text x="135" y="60" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">A</text>
      <text x="135" y="145" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">N</text>
      
      <!-- Air Column Length l1 label -->
      <path d="M 90 70 L 102 70 M 96 70 L 96 150 M 90 150 L 102 150" fill="none" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="82" y="115" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="end">l₁</text>
      
      <!-- End Correction e -->
      <path d="M 90 58 L 102 58 M 96 58 L 96 70" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
      <text x="82" y="66" fill="#fbbf24" font-size="9" font-weight="bold" text-anchor="end">e</text>
      
      <text x="140" y="195" fill="#f8fafc" font-size="10" font-family="monospace" text-anchor="middle">l₁ + e = λ / 4</text>
    </g>
    
    <!-- Second Resonance (3rd Harmonic) -->
    <g transform="translate(410, 42)">
      <rect width="280" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="140" y="20" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">2. Second Resonance (Length l₂ ≈ 3 l₁)</text>
      
      <!-- Vibrating Tuning Fork -->
      <path d="M 125 30 L 132 30 L 132 45 L 140 45 L 140 30 L 147 30 L 147 52 L 138 52 L 138 65 L 134 65 L 134 52 L 125 52 Z" fill="#94a3b8" stroke="#cbd5e1" stroke-width="1"/>
      <text x="160" y="45" fill="#fbbf24" font-size="10" font-weight="bold">Fork (f)</text>
      
      <!-- Resonance Tube Glass Column -->
      <rect x="110" y="70" width="50" height="135" fill="none" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Water Level for 2nd resonance (much lower) -->
      <rect x="110" y="185" width="50" height="20" fill="#0284c7" opacity="0.6"/>
      <line x1="110" y1="185" x2="160" y2="185" stroke="#38bdf8" stroke-width="2"/>
      
      <!-- Three-quarter wave Standing Wave Mode (A - N - A - N) -->
      <path d="M 112 60 Q 135 105 135 110 Q 112 150 135 185 M 158 60 Q 135 105 135 110 Q 158 150 135 185" fill="none" stroke="#f43f5e" stroke-width="2"/>
      <text x="135" y="60" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">A</text>
      <text x="135" y="112" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">N</text>
      <text x="135" y="182" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">N</text>
      
      <!-- Air Column Length l2 label -->
      <path d="M 90 70 L 102 70 M 96 70 L 96 185 M 90 185 L 102 185" fill="none" stroke="#f8fafc" stroke-width="1.5"/>
      <text x="82" y="130" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="end">l₂</text>
      
      <text x="140" y="195" fill="#f8fafc" font-size="10" font-family="monospace" text-anchor="middle">l₂ + e = 3λ / 4</text>
    </g>
    
    <!-- Eliminating End Correction Formula Box -->
    <rect x="70" y="268" width="610" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="286" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Wavelength: λ = 2 (l₂ − l₁)  ⇒  Speed of Sound: v = f · λ = 2 f (l₂ − l₁)</text>
    <text x="375" y="302" fill="#38bdf8" font-size="10" text-anchor="middle" font-family="monospace">End Correction: e = (l₂ − 3 l₁) / 2 = 0.6 · r (where r = internal radius of tube)</text>
  </svg>`,

  calorimetrySpecificHeat: `<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="300" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">SPECIFIC HEAT CAPACITY BY METHOD OF MIXTURES (Principle of Calorimetry)</text>
    
    <!-- Left: Calorimeter Assembly Setup -->
    <g transform="translate(70, 42)">
      <!-- Outer Wooden Box Insulation -->
      <rect x="30" y="10" width="180" height="175" fill="#78350f" stroke="#b45309" stroke-width="2" rx="6"/>
      <text x="120" y="28" fill="#fde68a" font-size="9.5" font-weight="bold" text-anchor="middle">Outer Wooden Box (Insulation)</text>
      
      <!-- Cotton/Glass Wool Thermal Lining -->
      <rect x="42" y="38" width="156" height="135" fill="#fef08a" opacity="0.3" stroke="#ca8a04" stroke-dasharray="3,3"/>
      
      <!-- Copper Calorimeter Vessel -->
      <rect x="60" y="55" width="120" height="110" fill="#b45309" stroke="#ea580c" stroke-width="2" rx="4"/>
      <!-- Water in calorimeter -->
      <rect x="62" y="80" width="116" height="83" fill="#0284c7" opacity="0.5"/>
      <text x="120" y="105" fill="#f8fafc" font-size="9" text-anchor="middle">Water (m_w, S_w)</text>
      <text x="120" y="118" fill="#f8fafc" font-size="8.5" text-anchor="middle">Initial Temp T₁</text>
      
      <!-- Hot Solid Body immersed -->
      <circle cx="120" cy="140" r="14" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
      <text x="120" y="144" fill="#f8fafc" font-size="8.5" font-weight="bold" text-anchor="middle">m, S, T₂</text>
      
      <!-- Precision Thermometer (0.1 °C LC) -->
      <rect x="80" y="5" width="8" height="120" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
      <rect x="78" y="120" width="12" height="15" fill="#ef4444" rx="4"/>
      <text x="84" y="0" fill="#f8fafc" font-size="8" text-anchor="middle">Thermometer</text>
      
      <!-- Metallic Stirrer -->
      <path d="M 150 10 L 150 145 L 140 145" fill="none" stroke="#cbd5e1" stroke-width="2"/>
      <text x="150" y="5" fill="#cbd5e1" font-size="8" text-anchor="middle">Stirrer</text>
    </g>
    
    <!-- Right: Principle of Calorimetry & Heat Balance Formula -->
    <g transform="translate(360, 45)">
      <rect width="330" height="195" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="165" y="22" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">Principle: Heat Lost = Heat Gained</text>
      
      <g font-size="9.5" fill="#e2e8f0" font-family="system-ui">
        <text x="20" y="52" fill="#f87171" font-weight="bold">1. Heat Lost by Hot Solid (at initial temp T₂):</text>
        <text x="35" y="70" font-family="monospace" fill="#fca5a5">Q_lost = m · S · (T₂ − T)</text>
        
        <text x="20" y="98" fill="#34d399" font-weight="bold">2. Heat Gained by (Water + Calorimeter + Stirrer):</text>
        <text x="35" y="116" font-family="monospace" fill="#86efac">Q_gain = (m_w · S_w + m_c · S_c) · (T − T₁)</text>
        
        <text x="20" y="142" fill="#38bdf8" font-weight="bold">3. Specific Heat of Solid S:</text>
        <text x="35" y="162" font-family="monospace" fill="#7dd3fc" font-size="10.5" font-weight="bold">S = [(m_w S_w + m_c S_c)(T − T₁)] / [m (T₂ − T)]</text>
      </g>
      
      <text x="165" y="186" fill="#fbbf24" font-size="8.5" text-anchor="middle">Where T = Final steady equilibrium temperature of mixture</text>
    </g>
    
    <!-- Precautions Box -->
    <rect x="70" y="248" width="620" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="380" y="265" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">Calorimeter Precaution: Radiation loss correction applied via Regnault's method.</text>
    <text x="380" y="280" fill="#38bdf8" font-size="9.5" text-anchor="middle">Water equivalent of calorimeter vessel & stirrer: W = m_c · S_c.</text>
  </svg>`,

  metreBridgeResistivity: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">RESISTIVITY OF WIRE USING METRE BRIDGE (Wheatstone Bridge Principle: P/Q = R/S)</text>
    
    <!-- Wooden Base Board -->
    <rect x="50" y="55" width="650" height="190" fill="#1e293b" stroke="#475569" stroke-width="2" rx="8"/>
    
    <!-- Thick Copper L-strips and Central Strip -->
    <!-- Left L-strip -->
    <path d="M 75 75 L 140 75 L 140 100 L 105 100 L 105 180 L 75 180 Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
    <!-- Central T/I-strip -->
    <rect x="235" y="75" width="280" height="25" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
    <!-- Right L-strip -->
    <path d="M 675 75 L 610 75 L 610 100 L 645 100 L 645 180 L 675 180 Z" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
    
    <!-- 1 Metre Manganin / Constantan Resistance Wire (A to B, 100 cm) -->
    <line x1="90" y1="180" x2="660" y2="180" stroke="#f8fafc" stroke-width="3"/>
    <circle cx="90" cy="180" r="5" fill="#ef4444"/>
    <circle cx="660" cy="180" r="5" fill="#ef4444"/>
    <text x="80" y="198" fill="#f8fafc" font-size="11" font-weight="bold">A (0 cm)</text>
    <text x="670" y="198" fill="#f8fafc" font-size="11" font-weight="bold">B (100 cm)</text>
    
    <!-- Left Gap: Standard Resistance Box R -->
    <rect x="155" y="65" width="65" height="35" fill="#334155" stroke="#38bdf8" stroke-width="1.5" rx="3"/>
    <text x="187" y="86" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">R.B. (R)</text>
    <line x1="140" y1="87" x2="155" y2="87" stroke="#38bdf8" stroke-width="2"/>
    <line x1="220" y1="87" x2="235" y2="87" stroke="#38bdf8" stroke-width="2"/>
    
    <!-- Right Gap: Unknown Resistance Wire S -->
    <path d="M 515 87 Q 560 55 610 87" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
    <text x="562" y="75" fill="#f43f5e" font-size="11" font-weight="bold" text-anchor="middle">Unknown (X/S)</text>
    
    <!-- Galvanometer & Sliding Jockey connected from Central Terminal D -->
    <circle cx="375" cy="87" r="4" fill="#f8fafc"/>
    <text x="375" y="70" fill="#f8fafc" font-size="10" font-weight="bold" text-anchor="middle">Terminal D</text>
    <line x1="375" y1="87" x2="375" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
    
    <!-- Sensitive Galvanometer G -->
    <circle cx="375" cy="135" r="16" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="375" y="140" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">G</text>
    
    <!-- Wire to Jockey on bridge wire at balance point J (length l) -->
    <line x1="375" y1="151" x2="330" y2="178" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="326,174 330,183 334,174" fill="#fbbf24"/>
    <text x="330" y="200" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">J (Balance)</text>
    
    <!-- Balancing lengths l and (100 - l) -->
    <path d="M 90 215 L 330 215" stroke="#38bdf8" stroke-width="2"/>
    <text x="210" y="230" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">Length l (P ∝ l)</text>
    
    <path d="M 330 215 L 660 215" stroke="#f43f5e" stroke-width="2"/>
    <text x="495" y="230" fill="#f43f5e" font-size="10.5" font-weight="bold" text-anchor="middle">Length (100 − l) [Q ∝ 100 − l]</text>
    
    <!-- Formula Banner -->
    <rect x="70" y="258" width="610" height="48" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="277" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Wheatstone Condition: R / S = l / (100 − l)  ⇒  S = R · (100 − l) / l</text>
    <text x="375" y="295" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">Resistivity: ρ = (S · A) / L = (S · π r²) / L  (Ω · m)</text>
  </svg>`,

  ohmsLawCircuitAndGraph: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">RESISTANCE USING OHM'S LAW: CIRCUIT DIAGRAM & V–I CHARACTERISTIC</text>
    
    <!-- Left: Complete Ohm's Law Circuit -->
    <g transform="translate(50, 42)">
      <rect width="310" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="155" y="20" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Circuit Diagram</text>
      
      <!-- Circuit Wires -->
      <path d="M 40 180 L 40 70 L 105 70 M 135 70 L 210 70 M 250 70 L 270 70 L 270 180 L 40 180" fill="none" stroke="#94a3b8" stroke-width="2"/>
      
      <!-- Battery / DC Eliminator -->
      <g transform="translate(130, 170)">
        <line x1="0" y1="0" x2="0" y2="20" stroke="#f8fafc" stroke-width="3"/>
        <line x1="8" y1="4" x2="8" y2="16" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="16" y1="0" x2="16" y2="20" stroke="#f8fafc" stroke-width="3"/>
        <line x1="24" y1="4" x2="24" y2="16" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="12" y="34" fill="#cbd5e1" font-size="9" text-anchor="middle">Battery (E)</text>
      </g>
      
      <!-- Plug Key (K) -->
      <g transform="translate(60, 172)">
        <circle cx="0" cy="8" r="3" fill="#f8fafc"/>
        <circle cx="16" cy="8" r="3" fill="#f8fafc"/>
        <text x="8" y="28" fill="#cbd5e1" font-size="8.5" text-anchor="middle">Key (K)</text>
      </g>
      
      <!-- Rheostat (Rh) for variable current -->
      <g transform="translate(210, 168)">
        <rect x="0" y="4" width="35" height="14" fill="#334155" stroke="#f59e0b" stroke-width="1"/>
        <path d="M 18 4 L 18 -6 L 8 -6" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="18" y="32" fill="#fbbf24" font-size="8.5" text-anchor="middle">Rheostat (Rh)</text>
      </g>
      
      <!-- Ammeter (A in Series) -->
      <circle cx="120" cy="70" r="15" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
      <text x="120" y="75" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">A</text>
      <text x="120" y="46" fill="#f87171" font-size="8.5" text-anchor="middle">Ammeter (Series)</text>
      
      <!-- Unknown Resistor R -->
      <rect x="210" y="62" width="40" height="16" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="230" y="74" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">R</text>
      
      <!-- Voltmeter (V in Parallel across R) -->
      <path d="M 210 70 L 210 115 L 220 115 M 240 115 L 250 115 L 250 70" fill="none" stroke="#10b981" stroke-width="1.5"/>
      <circle cx="230" cy="115" r="14" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
      <text x="230" y="119" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">V</text>
      <text x="230" y="142" fill="#34d399" font-size="8.5" text-anchor="middle">Voltmeter (Parallel)</text>
    </g>
    
    <!-- Right: V-I Graph & Ohmic vs Non-Ohmic Behaviour -->
    <g transform="translate(390, 42)">
      <rect width="310" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      <text x="155" y="20" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">V vs I Characteristics</text>
      
      <!-- Axes -->
      <line x1="45" y1="170" x2="280" y2="170" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="45" y1="170" x2="45" y2="35" stroke="#cbd5e1" stroke-width="2"/>
      <text x="275" y="184" fill="#cbd5e1" font-size="9.5" font-weight="bold">Current I (A) →</text>
      <text x="40" y="30" fill="#cbd5e1" font-size="9.5" font-weight="bold" text-anchor="end">Voltage V (V) →</text>
      
      <!-- Linear Ohmic Conductor Line -->
      <line x1="45" y1="170" x2="250" y2="55" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="105" cy="136" r="3" fill="#fbbf24"/>
      <circle cx="165" cy="102" r="3" fill="#fbbf24"/>
      <circle cx="225" cy="69" r="3" fill="#fbbf24"/>
      
      <text x="180" y="75" fill="#38bdf8" font-size="10" font-weight="bold">Ohmic (Linear: V = I·R)</text>
      <text x="180" y="90" fill="#fbbf24" font-size="9.5">Slope = ΔV / ΔI = R</text>
      
      <!-- Non-Ohmic Diode/Filament curve -->
      <path d="M 45 170 Q 150 165 240 95" fill="none" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3,3"/>
      <text x="200" y="130" fill="#f87171" font-size="8.5">Non-Ohmic (Diode/Bulb)</text>
    </g>
    
    <!-- Bottom Summary -->
    <rect x="50" y="268" width="650" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="286" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Ohm's Law: V = I · R (at constant temperature T). Slope of V vs I graph gives Resistance R.</text>
    <text x="375" y="302" fill="#38bdf8" font-size="9.5" text-anchor="middle">Voltmeter has high resistance (ideal = ∞); Ammeter has low resistance (ideal = 0).</text>
  </svg>`,

  galvanometerHalfDeflection: `<svg viewBox="0 0 750 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto drop-shadow-md">
    <rect width="750" height="320" rx="16" fill="#0f172a"/>
    <text x="375" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="system-ui">GALVANOMETER RESISTANCE (G) & FIGURE OF MERIT (k) BY HALF-DEFLECTION METHOD</text>
    
    <!-- Circuit Schematic -->
    <g transform="translate(60, 42)">
      <rect width="630" height="215" fill="#1e293b" stroke="#475569" stroke-width="1.5" rx="8"/>
      
      <!-- High Resistance Box R in main branch -->
      <rect x="180" y="45" width="80" height="30" fill="#334155" stroke="#38bdf8" stroke-width="1.5" rx="4"/>
      <text x="220" y="64" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">High R.B. (R)</text>
      
      <!-- Main Battery & Key K1 in main loop -->
      <path d="M 60 140 L 60 60 L 180 60 M 260 60 L 400 60" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <path d="M 60 140 L 60 180 L 220 180" fill="none" stroke="#94a3b8" stroke-width="2"/>
      
      <!-- Main Key K1 -->
      <g transform="translate(100, 172)">
        <circle cx="0" cy="8" r="3" fill="#f8fafc"/>
        <circle cx="16" cy="8" r="3" fill="#f8fafc"/>
        <text x="8" y="26" fill="#cbd5e1" font-size="9" text-anchor="middle">Key K₁</text>
      </g>
      
      <!-- Cell E -->
      <g transform="translate(160, 170)">
        <line x1="0" y1="0" x2="0" y2="20" stroke="#f8fafc" stroke-width="3"/>
        <line x1="8" y1="4" x2="8" y2="16" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="4" y="32" fill="#cbd5e1" font-size="9" text-anchor="middle">Cell (E)</text>
      </g>
      
      <!-- Galvanometer G in series branch -->
      <circle cx="440" cy="60" r="20" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
      <text x="440" y="65" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">G</text>
      <text x="440" y="32" fill="#34d399" font-size="9" font-weight="bold" text-anchor="middle">Galvanometer</text>
      
      <!-- Shunt Branch in Parallel across G: Low Resistance Box S + Key K2 -->
      <path d="M 400 60 L 400 130 L 440 130 M 520 130 L 560 130 L 560 60 L 460 60" fill="none" stroke="#f59e0b" stroke-width="2"/>
      
      <!-- Low Resistance Shunt Box S -->
      <rect x="440" y="115" width="80" height="30" fill="#334155" stroke="#f59e0b" stroke-width="1.5" rx="4"/>
      <text x="480" y="134" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">Low Shunt (S)</text>
      
      <!-- Shunt Key K2 -->
      <g transform="translate(480, 160)">
        <circle cx="0" cy="8" r="3" fill="#f8fafc"/>
        <circle cx="16" cy="8" r="3" fill="#f8fafc"/>
        <text x="8" y="26" fill="#fbbf24" font-size="9" text-anchor="middle">Key K₂</text>
      </g>
      
      <!-- Step 1 & 2 Explanatory Notes -->
      <g transform="translate(30, 85)" font-size="9.5" fill="#e2e8f0">
        <text x="0" y="0" fill="#38bdf8" font-weight="bold">Step 1: K₁ closed, K₂ OPEN</text>
        <text x="0" y="15">Adjust R to get full deflection θ (e.g. 30 div)</text>
        <text x="0" y="30" font-family="monospace">I_g = E / (R + G) = k · θ</text>
        
        <text x="0" y="55" fill="#fbbf24" font-weight="bold">Step 2: Close K₂ (Shunt S introduced)</text>
        <text x="0" y="70">Adjust S until deflection reduces to θ/2</text>
        <text x="0" y="85" font-family="monospace" fill="#34d399">Galvanometer Resistance: G = (R · S) / (R − S)</text>
      </g>
    </g>
    
    <!-- Bottom Formula Bar -->
    <rect x="60" y="268" width="630" height="42" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="375" y="286" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle" font-family="monospace">Resistance: G = (R · S) / (R − S) ≈ S (since R ≫ S)</text>
    <text x="375" y="302" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle" font-family="monospace">Figure of Merit: k = E / [(R + G) · θ]  (A/division)</text>
  </svg>`
};
