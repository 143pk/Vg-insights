// 15 Scientifically Accurate, Mobile-Readable SVG Diagrams for Electromagnetic Waves Masterclass

export const emDiagrams = {
  // 1. Charging capacitor showing displacement current
  chargingCapacitor: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans" role="img" aria-label="Displacement Current in Charging Capacitor">
    <rect width="700" height="380" fill="#0f172a" rx="16"/>
    <!-- Title -->
    <text x="350" y="32" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle" letter-spacing="0.5">DISPLACEMENT CURRENT (I_d) IN A CHARGING CAPACITOR</text>
    
    <!-- Circuit Wires -->
    <path d="M 60 200 L 220 200" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M 480 200 L 640 200" stroke="#f59e0b" stroke-width="4" stroke-linecap="round" fill="none"/>
    
    <!-- Conduction Current Arrows (Ic) -->
    <!-- Left Wire -->
    <path d="M 110 185 L 170 185" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" fill="none"/>
    <text x="140" y="175" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">Conduction Current I_c</text>
    <text x="140" y="225" fill="#94a3b8" font-size="11" text-anchor="middle">(Flow of electrons in wire)</text>

    <!-- Right Wire -->
    <path d="M 530 185 L 590 185" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" fill="none"/>
    <text x="560" y="175" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">Conduction Current I_c</text>
    <text x="560" y="225" fill="#94a3b8" font-size="11" text-anchor="middle">(Leaves right plate)</text>

    <!-- Capacitor Left Plate (+Q) -->
    <rect x="220" y="80" width="24" height="240" fill="#3b82f6" rx="4"/>
    <text x="232" y="70" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">+ Plate (+Q)</text>
    <g fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">
      <text x="232" y="115">+</text>
      <text x="232" y="150">+</text>
      <text x="232" y="185">+</text>
      <text x="232" y="220">+</text>
      <text x="232" y="255">+</text>
      <text x="232" y="290">+</text>
    </g>

    <!-- Capacitor Right Plate (-Q) -->
    <rect x="456" y="80" width="24" height="240" fill="#64748b" rx="4"/>
    <text x="468" y="70" fill="#cbd5e1" font-size="13" font-weight="bold" text-anchor="middle">- Plate (-Q)</text>
    <g fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">
      <text x="468" y="115">−</text>
      <text x="468" y="150">−</text>
      <text x="468" y="185">−</text>
      <text x="468" y="220">−</text>
      <text x="468" y="255">−</text>
      <text x="468" y="290">−</text>
    </g>

    <!-- Electric Field Lines between Plates -->
    <g stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4">
      <line x1="248" y1="110" x2="452" y2="110" marker-end="url(#arrow-cyan)"/>
      <line x1="248" y1="145" x2="452" y2="145" marker-end="url(#arrow-cyan)"/>
      <line x1="248" y1="180" x2="452" y2="180" marker-end="url(#arrow-cyan)"/>
      <line x1="248" y1="215" x2="452" y2="215" marker-end="url(#arrow-cyan)"/>
      <line x1="248" y1="250" x2="452" y2="250" marker-end="url(#arrow-cyan)"/>
      <line x1="248" y1="285" x2="452" y2="285" marker-end="url(#arrow-cyan)"/>
    </g>

    <!-- Gap Region Label & Displacement Current -->
    <rect x="270" y="125" width="160" height="150" fill="#1e293b" rx="10" stroke="#38bdf8" stroke-width="1.5" opacity="0.95"/>
    <text x="350" y="148" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">VARYING ELECTRIC FIELD</text>
    <text x="350" y="168" fill="#e2e8f0" font-size="12" text-anchor="middle">dE/dt &gt; 0  ⇒  dΦ_E/dt ≠ 0</text>
    <line x1="285" y1="178" x2="415" y2="178" stroke="#475569" stroke-width="1"/>
    <text x="350" y="198" fill="#a855f7" font-size="14" font-weight="bold" text-anchor="middle">I_d = ε₀ (dΦ_E / dt)</text>
    <text x="350" y="218" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Displacement Current</text>
    <text x="350" y="238" fill="#cbd5e1" font-size="11" text-anchor="middle">Produces Magnetic Field B</text>
    <text x="350" y="258" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">I_c (outside) = I_d (inside)</text>

    <!-- Continuity Equation Bottom Banner -->
    <rect x="120" y="335" width="460" height="32" fill="#0369a1" rx="8"/>
    <text x="350" y="356" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Generalised Ampère-Maxwell Law: ∮ B · dl = μ₀(I_c + I_d)</text>

    <!-- Defs for Markers -->
    <defs>
      <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/>
      </marker>
      <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
      </marker>
    </defs>
  </svg>`,

  // 2. Maxwell's self-propagating wave concept
  selfPropagatingWave: `<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans" role="img" aria-label="Maxwell's Self-Propagating Wave Mechanism">
    <rect width="700" height="320" fill="#0f172a" rx="16"/>
    <text x="350" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">MAXWELL'S SELF-SUSTAINING EM WAVE MECHANISM</text>

    <!-- Step 1 Box: Changing E -->
    <g transform="translate(40, 65)">
      <rect width="180" height="180" fill="#1e293b" rx="12" stroke="#3b82f6" stroke-width="2"/>
      <circle cx="90" cy="40" r="22" fill="#3b82f6" opacity="0.2"/>
      <text x="90" y="46" fill="#60a5fa" font-size="20" text-anchor="middle">⚡</text>
      <text x="90" y="80" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">Oscillating Charge</text>
      <text x="90" y="100" fill="#e2e8f0" font-size="12" text-anchor="middle">creates time-varying</text>
      <rect x="20" y="115" width="140" height="40" fill="#0284c7" rx="8"/>
      <text x="90" y="132" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Time-Varying</text>
      <text x="90" y="147" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Electric Field (E)</text>
      <text x="90" y="172" fill="#94a3b8" font-size="10" text-anchor="middle">∂E/∂t ≠ 0</text>
    </g>

    <!-- Arrow 1 -> 2 -->
    <path d="M 230 155 L 260 155" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-gold)" fill="none"/>
    <text x="245" y="145" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Generates</text>

    <!-- Step 2 Box: Changing B -->
    <g transform="translate(265, 65)">
      <rect width="170" height="180" fill="#1e293b" rx="12" stroke="#a855f7" stroke-width="2"/>
      <circle cx="85" cy="40" r="22" fill="#a855f7" opacity="0.2"/>
      <text x="85" y="46" fill="#c084fc" font-size="20" text-anchor="middle">🧲</text>
      <text x="85" y="80" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">Ampère-Maxwell</text>
      <text x="85" y="100" fill="#e2e8f0" font-size="12" text-anchor="middle">dE/dt produces</text>
      <rect x="15" y="115" width="140" height="40" fill="#7e22ce" rx="8"/>
      <text x="85" y="132" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Time-Varying</text>
      <text x="85" y="147" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Magnetic Field (B)</text>
      <text x="85" y="172" fill="#94a3b8" font-size="10" text-anchor="middle">∂B/∂t ≠ 0</text>
    </g>

    <!-- Arrow 2 -> 3 -->
    <path d="M 445 155 L 475 155" stroke="#22c55e" stroke-width="3" marker-end="url(#arrow-green)" fill="none"/>
    <text x="460" y="145" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">Induces</text>

    <!-- Step 3 Box: Faraday Induction & Propagation -->
    <g transform="translate(480, 65)">
      <rect width="180" height="180" fill="#1e293b" rx="12" stroke="#22c55e" stroke-width="2"/>
      <circle cx="90" cy="40" r="22" fill="#22c55e" opacity="0.2"/>
      <text x="90" y="46" fill="#4ade80" font-size="20" text-anchor="middle">🌊</text>
      <text x="90" y="80" fill="#4ade80" font-size="14" font-weight="bold" text-anchor="middle">Faraday's Law</text>
      <text x="90" y="100" fill="#e2e8f0" font-size="12" text-anchor="middle">dB/dt produces E</text>
      <rect x="15" y="115" width="150" height="40" fill="#15803d" rx="8"/>
      <text x="90" y="132" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Mutual Regeneration</text>
      <text x="90" y="147" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Wave Travels at c</text>
      <text x="90" y="172" fill="#94a3b8" font-size="10" text-anchor="middle">No Medium Needed!</text>
    </g>

    <!-- Feedback Arc Showing Self-Sustenance -->
    <path d="M 570 250 C 570 300, 130 300, 130 250" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,4" fill="none" marker-end="url(#arrow-cyan)"/>
    <text x="350" y="295" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Continuous Regenerative Cycle Propagates Through Space at Speed c</text>

    <defs>
      <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
      </marker>
      <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#22c55e"/>
      </marker>
    </defs>
  </svg>`,

  // 3. Scientifically accurate 3D-style Transverse EM Wave
  transverseEmWave: `<svg viewBox="0 0 750 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans" role="img" aria-label="3D Linearly Polarised Transverse Electromagnetic Wave">
    <rect width="750" height="380" fill="#0b1120" rx="16"/>
    <text x="375" y="28" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">TRANSVERSE ELECTROMAGNETIC WAVE (E ⟂ B ⟂ PROPAGATION DIRECTION)</text>

    <!-- Axes Setup: Origin at (100, 200) -->
    <!-- X Axis (Propagation) -->
    <line x1="80" y1="200" x2="690" y2="200" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow-gray)"/>
    <text x="700" y="204" fill="#94a3b8" font-size="13" font-weight="bold">+X (Wave Propagation Direction: v = c î)</text>

    <!-- Y Axis (Electric Field) -->
    <line x1="100" y1="320" x2="100" y2="60" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
    <text x="100" y="48" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">+Y (Electric Field E)</text>

    <!-- Z Axis (Magnetic Field) -->
    <line x1="100" y1="200" x2="20" y2="280" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
    <text x="20" y="300" fill="#60a5fa" font-size="13" font-weight="bold">+Z (Magnetic Field B)</text>

    <!-- Wave 1: First Half Cycle (100 to 360) -->
    <!-- E-field vertical positive lobes (along Y) -->
    <path d="M 100 200 Q 165 80 230 200 Q 295 320 360 200" fill="none" stroke="#ef4444" stroke-width="3.5"/>
    <!-- E-field vertical vectors -->
    <g stroke="#ef4444" stroke-width="1.5" opacity="0.85">
      <line x1="130" y1="200" x2="130" y2="130" marker-end="url(#arrow-red)"/>
      <line x1="165" y1="200" x2="165" y2="85" marker-end="url(#arrow-red)"/>
      <line x1="200" y1="200" x2="200" y2="130" marker-end="url(#arrow-red)"/>
      
      <line x1="260" y1="200" x2="260" y2="270" marker-end="url(#arrow-red)"/>
      <line x1="295" y1="200" x2="295" y2="315" marker-end="url(#arrow-red)"/>
      <line x1="330" y1="200" x2="330" y2="270" marker-end="url(#arrow-red)"/>
    </g>

    <!-- B-field horizontal/isometric lobes (along Z) -->
    <!-- Positive Z lobe (drawn tilted down-left) -->
    <path d="M 100 200 Q 145 255 230 200 Q 315 145 360 200" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4,2"/>
    <!-- B vectors -->
    <g stroke="#38bdf8" stroke-width="1.5" opacity="0.85">
      <line x1="130" y1="200" x2="115" y2="235" marker-end="url(#arrow-cyan)"/>
      <line x1="165" y1="200" x2="140" y2="255" marker-end="url(#arrow-cyan)"/>
      <line x1="200" y1="200" x2="185" y2="235" marker-end="url(#arrow-cyan)"/>

      <line x1="260" y1="200" x2="275" y2="165" marker-end="url(#arrow-cyan)"/>
      <line x1="295" y1="200" x2="320" y2="145" marker-end="url(#arrow-cyan)"/>
      <line x1="330" y1="200" x2="345" y2="165" marker-end="url(#arrow-cyan)"/>
    </g>

    <!-- Wave 2: Second Cycle (360 to 620) -->
    <path d="M 360 200 Q 425 80 490 200 Q 555 320 620 200" fill="none" stroke="#ef4444" stroke-width="3.5"/>
    <g stroke="#ef4444" stroke-width="1.5" opacity="0.85">
      <line x1="390" y1="200" x2="390" y2="130" marker-end="url(#arrow-red)"/>
      <line x1="425" y1="200" x2="425" y2="85" marker-end="url(#arrow-red)"/>
      <line x1="460" y1="200" x2="460" y2="130" marker-end="url(#arrow-red)"/>
      
      <line x1="520" y1="200" x2="520" y2="270" marker-end="url(#arrow-red)"/>
      <line x1="555" y1="200" x2="555" y2="315" marker-end="url(#arrow-red)"/>
      <line x1="590" y1="200" x2="590" y2="270" marker-end="url(#arrow-red)"/>
    </g>

    <path d="M 360 200 Q 405 255 490 200 Q 575 145 620 200" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4,2"/>
    <g stroke="#38bdf8" stroke-width="1.5" opacity="0.85">
      <line x1="390" y1="200" x2="375" y2="235" marker-end="url(#arrow-cyan)"/>
      <line x1="425" y1="200" x2="400" y2="255" marker-end="url(#arrow-cyan)"/>
      <line x1="460" y1="200" x2="445" y2="235" marker-end="url(#arrow-cyan)"/>

      <line x1="520" y1="200" x2="535" y2="165" marker-end="url(#arrow-cyan)"/>
      <line x1="555" y1="200" x2="580" y2="145" marker-end="url(#arrow-cyan)"/>
      <line x1="590" y1="200" x2="605" y2="165" marker-end="url(#arrow-cyan)"/>
    </g>

    <!-- Wavelength Lambda Dimension Marker -->
    <line x1="165" y1="65" x2="425" y2="65" stroke="#facc15" stroke-width="2"/>
    <line x1="165" y1="58" x2="165" y2="72" stroke="#facc15" stroke-width="2"/>
    <line x1="425" y1="58" x2="425" y2="72" stroke="#facc15" stroke-width="2"/>
    <text x="295" y="58" fill="#facc15" font-size="14" font-weight="bold" text-anchor="middle">Wavelength λ (Distance between consecutive crests)</text>

    <!-- Peak Amplitude Labels -->
    <text x="175" y="100" fill="#f87171" font-size="12" font-weight="bold">E₀ (Peak E-field)</text>
    <text x="145" y="275" fill="#38bdf8" font-size="12" font-weight="bold">B₀ (Peak B-field)</text>

    <!-- Bottom Key Properties Card -->
    <g transform="translate(180, 335)">
      <rect width="420" height="34" fill="#1e293b" rx="8" stroke="#334155"/>
      <text x="210" y="22" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">E ⟂ B ⟂ v̂  |  Propagation Direction = Ê × B̂ = î  |  In Phase: At nodes, E = 0 &amp; B = 0</text>
    </g>

    <defs>
      <marker id="arrow-gray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
      </marker>
      <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6"/>
      </marker>
    </defs>
  </svg>`,

  // 4. E ⟂ B ⟂ Direction of Propagation Orthogonality Trihedron
  orthogonalityVector: `<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="E, B, and Propagation Orthogonality">
    <rect width="650" height="300" fill="#0f172a" rx="16"/>
    <text x="325" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">MUTUAL ORTHOGONALITY: E ⟂ B ⟂ PROPAGATION (k̂)</text>

    <!-- Central Vector Trihedron Diagram -->
    <g transform="translate(180, 150)">
      <!-- Right angle markers -->
      <path d="M 0 -25 L 25 -25 L 25 0" stroke="#cbd5e1" stroke-width="1.5" fill="none"/>
      <path d="M 0 -25 L -20 -10 L -20 15" stroke="#cbd5e1" stroke-width="1.5" fill="none"/>

      <!-- Vector E (Vertical Y) -->
      <line x1="0" y1="0" x2="0" y2="-100" stroke="#ef4444" stroke-width="4" marker-end="url(#arrow-red)"/>
      <text x="15" y="-90" fill="#ef4444" font-size="14" font-weight="bold">E (Electric Field)</text>
      <text x="15" y="-72" fill="#94a3b8" font-size="11">Oscillates along ĵ</text>

      <!-- Vector B (Out of screen / Z axis) -->
      <line x1="0" y1="0" x2="-85" y2="65" stroke="#38bdf8" stroke-width="4" marker-end="url(#arrow-cyan)"/>
      <text x="-125" y="85" fill="#38bdf8" font-size="14" font-weight="bold">B (Magnetic Field)</text>
      <text x="-125" y="102" fill="#94a3b8" font-size="11">Oscillates along k̂</text>

      <!-- Vector c / v (Propagation along X) -->
      <line x1="0" y1="0" x2="130" y2="0" stroke="#22c55e" stroke-width="4" marker-end="url(#arrow-green)"/>
      <text x="140" y="5" fill="#22c55e" font-size="14" font-weight="bold">c = Ê × B̂</text>
      <text x="140" y="24" fill="#94a3b8" font-size="11">Propagates along î</text>

      <!-- Right Hand Rule Graphic Arc -->
      <path d="M 0 -50 C 40 -40, 50 -10, 50 0" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4,3" fill="none" marker-end="url(#arrow-gold)"/>
      <text x="55" y="-30" fill="#f59e0b" font-size="11" font-weight="bold">Curl E into B</text>
    </g>

    <!-- Right Side Summary Box -->
    <g transform="translate(380, 70)">
      <rect width="240" height="190" fill="#1e293b" rx="12" stroke="#334155"/>
      <text x="120" y="28" fill="#facc15" font-size="13" font-weight="bold" text-anchor="middle">⚠️ HIGH-YIELD NEET TRAPS</text>
      <line x1="15" y1="38" x2="225" y2="38" stroke="#475569" stroke-width="1"/>
      
      <text x="20" y="62" fill="#ffffff" font-size="11" font-weight="bold">1. Dot Products are ZERO:</text>
      <text x="25" y="80" fill="#cbd5e1" font-size="11">E · B = 0 , E · ĉ = 0 , B · ĉ = 0</text>
      
      <text x="20" y="106" fill="#ffffff" font-size="11" font-weight="bold">2. Cross Product gives Velocity:</text>
      <text x="25" y="124" fill="#38bdf8" font-size="11">v̂ = (E × B) / |E × B|</text>
      
      <text x="20" y="150" fill="#ffffff" font-size="11" font-weight="bold">3. Note Cross Order:</text>
      <text x="25" y="168" fill="#f87171" font-size="11">B × E points OPPOSITE (-v̂)!</text>
    </g>
  </svg>`,

  // 5. EM Wave Amplitude Relationship (E₀ = c B₀)
  amplitudeRelationship: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="Electric and Magnetic Field Amplitude Ratio">
    <rect width="680" height="280" fill="#0f172a" rx="16"/>
    <text x="340" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">AMPLITUDE RELATIONSHIP: E₀ = c B₀</text>

    <!-- Left Box: Formula & Numerical Ratio -->
    <g transform="translate(40, 60)">
      <rect width="280" height="190" fill="#1e293b" rx="12" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="140" y="32" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">E₀ / B₀ = c = 3 × 10⁸ m/s</text>
      <line x1="20" y1="48" x2="260" y2="48" stroke="#334155" stroke-width="1"/>
      
      <text x="20" y="75" fill="#cbd5e1" font-size="12">If E₀ = 300 V/m (Typical radio wave):</text>
      <text x="20" y="105" fill="#f59e0b" font-size="13" font-weight="bold">B₀ = E₀ / c</text>
      <text x="20" y="130" fill="#f59e0b" font-size="13" font-weight="bold">B₀ = 300 / (3 × 10⁸) = 10⁻⁶ T = 1 μT</text>
      
      <rect x="15" y="145" width="250" height="32" fill="#0369a1" rx="6"/>
      <text x="140" y="166" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">B₀ is numerically very small vs E₀ in SI units</text>
    </g>

    <!-- Right Box: Energy Density Equipartition -->
    <g transform="translate(350, 60)">
      <rect width="290" height="190" fill="#1e293b" rx="12" stroke="#22c55e" stroke-width="1.5"/>
      <text x="145" y="30" fill="#22c55e" font-size="14" font-weight="bold" text-anchor="middle">EQUAL ENERGY CONTRIBUTIONS</text>
      <line x1="20" y1="45" x2="270" y2="45" stroke="#334155" stroke-width="1"/>

      <text x="20" y="70" fill="#cbd5e1" font-size="12">Electric energy density: u_E = ½ ε₀ E²</text>
      <text x="20" y="92" fill="#cbd5e1" font-size="12">Magnetic energy density: u_B = B² / (2μ₀)</text>
      
      <rect x="20" y="108" width="250" height="34" fill="#14532d" rx="6"/>
      <text x="145" y="128" fill="#86efac" font-size="13" font-weight="bold" text-anchor="middle">⟨u_E⟩ = ⟨u_B⟩ = ¼ ε₀ E₀²</text>

      <text x="145" y="165" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">Total: ⟨u⟩ = ½ ε₀ E₀² = B₀² / (2μ₀)</text>
    </g>
  </svg>`,

  // 6. Complete Electromagnetic Spectrum (Large, clear, mobile-readable)
  completeSpectrum: `<svg viewBox="0 0 820 460" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-3xl mx-auto font-sans" role="img" aria-label="Complete Electromagnetic Spectrum">
    <rect width="820" height="460" fill="#090d16" rx="16"/>
    <text x="410" y="32" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle" letter-spacing="1">COMPLETE ELECTROMAGNETIC SPECTRUM (NEET HIGH-YIELD)</text>

    <!-- Top Direction Arrows -->
    <!-- Frequency & Energy Increasing Left to Right -->
    <path d="M 80 60 L 740 60" stroke="#a855f7" stroke-width="3" marker-end="url(#arrow-purple)" fill="none"/>
    <text x="410" y="52" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">FREQUENCY (f) &amp; PHOTON ENERGY (E = hf) INCREASING ➔</text>

    <!-- Wavelength Increasing Right to Left -->
    <path d="M 740 85 L 80 85" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-gold)" fill="none"/>
    <text x="410" y="78" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">⯇ WAVELENGTH (λ) INCREASING (c = fλ = Constant in vacuum)</text>

    <!-- 7 Main Spectrum Blocks -->
    <!-- 1. Radio Waves -->
    <g transform="translate(30, 105)">
      <rect width="100" height="210" fill="#1e1b4b" rx="10" stroke="#6366f1" stroke-width="2"/>
      <text x="50" y="30" fill="#a5b4fc" font-size="13" font-weight="bold" text-anchor="middle">RADIO</text>
      <text x="50" y="48" fill="#a5b4fc" font-size="13" font-weight="bold" text-anchor="middle">WAVES</text>
      <line x1="10" y1="60" x2="90" y2="60" stroke="#4338ca" stroke-width="1"/>
      <text x="50" y="80" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Wavelength λ</text>
      <text x="50" y="96" fill="#ffffff" font-size="11" text-anchor="middle">&gt; 0.1 m</text>
      <text x="50" y="112" fill="#94a3b8" font-size="9" text-anchor="middle">(up to km)</text>
      <text x="50" y="135" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frequency f</text>
      <text x="50" y="152" fill="#ffffff" font-size="10" text-anchor="middle">&lt; 10⁹ Hz</text>
      <text x="50" y="180" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">Lowest Energy</text>
      <text x="50" y="196" fill="#cbd5e1" font-size="8" text-anchor="middle">Longest λ</text>
    </g>

    <!-- 2. Microwaves -->
    <g transform="translate(138, 105)">
      <rect width="100" height="210" fill="#1e293b" rx="10" stroke="#0ea5e9" stroke-width="2"/>
      <text x="50" y="35" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">MICRO-</text>
      <text x="50" y="52" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">WAVES</text>
      <line x1="10" y1="60" x2="90" y2="60" stroke="#0369a1" stroke-width="1"/>
      <text x="50" y="80" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Wavelength λ</text>
      <text x="50" y="98" fill="#ffffff" font-size="10" text-anchor="middle">0.1 m - 1 mm</text>
      <text x="50" y="135" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frequency f</text>
      <text x="50" y="152" fill="#ffffff" font-size="10" text-anchor="middle">10⁹ - 10¹¹ Hz</text>
      <text x="50" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">Radar, Ovens,</text>
      <text x="50" y="198" fill="#cbd5e1" font-size="9" text-anchor="middle">Satellites</text>
    </g>

    <!-- 3. Infrared -->
    <g transform="translate(246, 105)">
      <rect width="100" height="210" fill="#311313" rx="10" stroke="#ef4444" stroke-width="2"/>
      <text x="50" y="35" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">INFRARED</text>
      <text x="50" y="52" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">(Heat Waves)</text>
      <line x1="10" y1="60" x2="90" y2="60" stroke="#991b1b" stroke-width="1"/>
      <text x="50" y="80" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Wavelength λ</text>
      <text x="50" y="98" fill="#ffffff" font-size="10" text-anchor="middle">1 mm - 700 nm</text>
      <text x="50" y="135" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frequency f</text>
      <text x="50" y="152" fill="#ffffff" font-size="10" text-anchor="middle">10¹¹ - 4×10¹⁴ Hz</text>
      <text x="50" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">Thermal, Remotes</text>
      <text x="50" y="198" fill="#cbd5e1" font-size="9" text-anchor="middle">Greenhouse</text>
    </g>

    <!-- 4. Visible Light -->
    <g transform="translate(354, 105)">
      <rect width="112" height="210" fill="#14231b" rx="10" stroke="#22c55e" stroke-width="2.5"/>
      <text x="56" y="30" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">VISIBLE</text>
      <text x="56" y="48" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">LIGHT (VIBGYOR)</text>
      <line x1="10" y1="60" x2="102" y2="60" stroke="#15803d" stroke-width="1"/>
      <text x="56" y="80" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Wavelength λ</text>
      <text x="56" y="98" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">700 nm - 400 nm</text>
      <text x="56" y="135" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frequency f</text>
      <text x="56" y="152" fill="#ffffff" font-size="9.5" text-anchor="middle">4×10¹⁴ - 7.5×10¹⁴ Hz</text>
      <rect x="8" y="172" width="96" height="26" fill="#047857" rx="4"/>
      <text x="56" y="189" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Narrow Window</text>
    </g>

    <!-- 5. Ultraviolet -->
    <g transform="translate(474, 105)">
      <rect width="100" height="210" fill="#2e1065" rx="10" stroke="#8b5cf6" stroke-width="2"/>
      <text x="50" y="35" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">ULTRA-</text>
      <text x="50" y="52" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">VIOLET</text>
      <line x1="10" y1="60" x2="90" y2="60" stroke="#581c87" stroke-width="1"/>
      <text x="50" y="80" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Wavelength λ</text>
      <text x="50" y="98" fill="#ffffff" font-size="10" text-anchor="middle">400 nm - 1 nm</text>
      <text x="50" y="135" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frequency f</text>
      <text x="50" y="152" fill="#ffffff" font-size="9.5" text-anchor="middle">7.5×10¹⁴ - 10¹⁶ Hz</text>
      <text x="50" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">Sterilization, Sun,</text>
      <text x="50" y="198" fill="#cbd5e1" font-size="9" text-anchor="middle">Ozone Layer</text>
    </g>

    <!-- 6. X-Rays -->
    <g transform="translate(582, 105)">
      <rect width="100" height="210" fill="#1e293b" rx="10" stroke="#38bdf8" stroke-width="2"/>
      <text x="50" y="35" fill="#7dd3fc" font-size="13" font-weight="bold" text-anchor="middle">X-RAYS</text>
      <text x="50" y="52" fill="#7dd3fc" font-size="10" text-anchor="middle">(Coolidge Tube)</text>
      <line x1="10" y1="60" x2="90" y2="60" stroke="#0369a1" stroke-width="1"/>
      <text x="50" y="80" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Wavelength λ</text>
      <text x="50" y="98" fill="#ffffff" font-size="10" text-anchor="middle">1 nm - 10⁻³ nm</text>
      <text x="50" y="112" fill="#94a3b8" font-size="9" text-anchor="middle">(0.1 Å - 100 Å)</text>
      <text x="50" y="135" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frequency f</text>
      <text x="50" y="152" fill="#ffffff" font-size="10" text-anchor="middle">10¹⁶ - 10¹⁹ Hz</text>
      <text x="50" y="182" fill="#cbd5e1" font-size="9" text-anchor="middle">Bone Radiography,</text>
      <text x="50" y="198" fill="#cbd5e1" font-size="9" text-anchor="middle">Crystallography</text>
    </g>

    <!-- 7. Gamma Rays -->
    <g transform="translate(690, 105)">
      <rect width="100" height="210" fill="#3b0764" rx="10" stroke="#d946ef" stroke-width="2"/>
      <text x="50" y="35" fill="#f0abfc" font-size="13" font-weight="bold" text-anchor="middle">GAMMA</text>
      <text x="50" y="52" fill="#f0abfc" font-size="13" font-weight="bold" text-anchor="middle">RAYS (γ)</text>
      <line x1="10" y1="60" x2="90" y2="60" stroke="#86198f" stroke-width="1"/>
      <text x="50" y="80" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">Wavelength λ</text>
      <text x="50" y="98" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">&lt; 10⁻³ nm</text>
      <text x="50" y="112" fill="#94a3b8" font-size="9" text-anchor="middle">(&lt; 10⁻¹² m)</text>
      <text x="50" y="135" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frequency f</text>
      <text x="50" y="152" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">&gt; 10¹⁹ Hz</text>
      <text x="50" y="180" fill="#f43f5e" font-size="9" font-weight="bold" text-anchor="middle">Highest Energy</text>
      <text x="50" y="196" fill="#cbd5e1" font-size="8" text-anchor="middle">Nuclear Origin</text>
    </g>

    <!-- Visible Spectrum Expansion Callout at Bottom -->
    <g transform="translate(30, 335)">
      <rect width="760" height="105" fill="#111827" rx="12" stroke="#374151"/>
      <!-- Rainbow gradient strip -->
      <defs>
        <linearGradient id="spectrum-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444"/> <!-- Red -->
          <stop offset="17%" stop-color="#f97316"/> <!-- Orange -->
          <stop offset="34%" stop-color="#eab308"/> <!-- Yellow -->
          <stop offset="50%" stop-color="#22c55e"/> <!-- Green -->
          <stop offset="67%" stop-color="#06b6d4"/> <!-- Blue -->
          <stop offset="84%" stop-color="#3b82f6"/> <!-- Indigo -->
          <stop offset="100%" stop-color="#8b5cf6"/> <!-- Violet -->
        </linearGradient>
      </defs>
      <text x="380" y="24" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">EXPANDED VISIBLE WINDOW: 700 nm (RED) ➔ 400 nm (VIOLET)</text>
      <rect x="25" y="35" width="710" height="24" fill="url(#spectrum-bar)" rx="6"/>
      
      <!-- Color Labels -->
      <g fill="#ffffff" font-size="11" font-weight="bold">
        <text x="45" y="78" fill="#f87171">RED (~700 nm)</text>
        <text x="160" y="78" fill="#fb923c">ORANGE</text>
        <text x="275" y="78" fill="#fde047">YELLOW</text>
        <text x="380" y="78" fill="#4ade80">GREEN</text>
        <text x="485" y="78" fill="#67e8f9">BLUE</text>
        <text x="590" y="78" fill="#93c5fd">INDIGO</text>
        <text x="695" y="78" fill="#c084fc">VIOLET (~400 nm)</text>
      </g>
      <text x="55" y="94" fill="#94a3b8" font-size="9.5">Longest λ, Min f</text>
      <text x="695" y="94" fill="#94a3b8" font-size="9.5">Shortest λ, Max f</text>
    </g>

    <defs>
      <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7"/>
      </marker>
    </defs>
  </svg>`,

  // 7. Visible Spectrum Detail
  visibleSpectrum: `<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans" role="img" aria-label="Visible Light Spectrum and Color Orders">
    <rect width="700" height="240" fill="#0f172a" rx="16"/>
    <text x="350" y="28" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">VISIBLE SPECTRUM: VIBGYOR (400 nm to 700 nm)</text>

    <!-- 7 Colour Blocks with Wavelengths and Frequencies -->
    <g transform="translate(30, 50)">
      <!-- Violet -->
      <rect x="0" y="0" width="85" height="110" fill="#581c87" rx="8" stroke="#8b5cf6"/>
      <text x="42" y="28" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">VIOLET</text>
      <text x="42" y="55" fill="#facc15" font-size="10" text-anchor="middle">~400 nm</text>
      <text x="42" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">7.5×10¹⁴ Hz</text>
      <text x="42" y="98" fill="#4ade80" font-size="9" font-weight="bold" text-anchor="middle">Max f, Max E</text>

      <!-- Indigo -->
      <rect x="92" y="0" width="85" height="110" fill="#1e1b4b" rx="8" stroke="#6366f1"/>
      <text x="134" y="28" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">INDIGO</text>
      <text x="134" y="55" fill="#facc15" font-size="10" text-anchor="middle">~430 nm</text>
      <text x="134" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">7.0×10¹⁴ Hz</text>

      <!-- Blue -->
      <rect x="184" y="0" width="85" height="110" fill="#0c4a6e" rx="8" stroke="#0284c7"/>
      <text x="226" y="28" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">BLUE</text>
      <text x="226" y="55" fill="#facc15" font-size="10" text-anchor="middle">~480 nm</text>
      <text x="226" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">6.2×10¹⁴ Hz</text>

      <!-- Green -->
      <rect x="276" y="0" width="85" height="110" fill="#064e3b" rx="8" stroke="#10b981"/>
      <text x="318" y="28" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GREEN</text>
      <text x="318" y="55" fill="#facc15" font-size="10" text-anchor="middle">~530 nm</text>
      <text x="318" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">5.6×10¹⁴ Hz</text>

      <!-- Yellow -->
      <rect x="368" y="0" width="85" height="110" fill="#713f12" rx="8" stroke="#eab308"/>
      <text x="410" y="28" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">YELLOW</text>
      <text x="410" y="55" fill="#facc15" font-size="10" text-anchor="middle">~580 nm</text>
      <text x="410" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">5.1×10¹⁴ Hz</text>

      <!-- Orange -->
      <rect x="460" y="0" width="85" height="110" fill="#7c2d12" rx="8" stroke="#f97316"/>
      <text x="502" y="28" fill="#fed7aa" font-size="12" font-weight="bold" text-anchor="middle">ORANGE</text>
      <text x="502" y="55" fill="#facc15" font-size="10" text-anchor="middle">~620 nm</text>
      <text x="502" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">4.8×10¹⁴ Hz</text>

      <!-- Red -->
      <rect x="552" y="0" width="88" height="110" fill="#7f1d1d" rx="8" stroke="#ef4444"/>
      <text x="596" y="28" fill="#fecaca" font-size="12" font-weight="bold" text-anchor="middle">RED</text>
      <text x="596" y="55" fill="#facc15" font-size="10" text-anchor="middle">~700 nm</text>
      <text x="596" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">4.3×10¹⁴ Hz</text>
      <text x="596" y="98" fill="#f87171" font-size="9" font-weight="bold" text-anchor="middle">Max λ, Min f</text>
    </g>

    <!-- Bottom NEET Insight Pill -->
    <g transform="translate(30, 180)">
      <rect width="640" height="42" fill="#1e293b" rx="10" stroke="#334155"/>
      <text x="320" y="26" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">NEET Tip: Frequency increases from RED to VIOLET. Deviation &amp; Refractive Index (μ) also max for Violet!</text>
    </g>
  </svg>`,

  // 8. Radio Wave Application (Antenna Transmission & Ionosphere)
  radioApplication: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="Radio Waves Production and Wireless Communication">
    <rect width="650" height="280" fill="#0f172a" rx="16"/>
    <text x="325" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">RADIO WAVE APPLICATION: BROADCASTING &amp; WIRELESS COMMUNICATION</text>

    <!-- Transmitter Tower -->
    <g transform="translate(60, 60)">
      <!-- Tower Structure -->
      <polygon points="40,20 15,160 65,160" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="25" y1="80" x2="55" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="20" y1="120" x2="60" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
      <circle cx="40" cy="15" r="5" fill="#ef4444"/>
      <text x="40" y="180" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Transmitter Tower</text>
      <text x="40" y="195" fill="#94a3b8" font-size="9" text-anchor="middle">(LC Oscillator)</text>

      <!-- Radiated EM Wavefronts -->
      <path d="M 50 15 A 30 30 0 0 1 50 45" stroke="#ef4444" stroke-width="2.5" fill="none"/>
      <path d="M 60 5 A 50 50 0 0 1 60 55" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
      <path d="M 70 -5 A 70 70 0 0 1 70 65" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
    </g>

    <!-- Receiver Antenna -->
    <g transform="translate(510, 80)">
      <polygon points="30,30 10,140 50,140" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
      <line x1="30" y1="30" x2="30" y2="10" stroke="#38bdf8" stroke-width="3"/>
      <circle cx="30" cy="10" r="4" fill="#38bdf8"/>
      <text x="30" y="160" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Receiver Antenna</text>
      <text x="30" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">(Induced EMF)</text>
    </g>

    <!-- Waves travelling between -->
    <path d="M 140 100 Q 320 60 510 95" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4" fill="none" marker-end="url(#arrow-cyan)"/>
    <text x="325" y="75" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Radio Wave (λ &gt; 0.1 m, f ~ 500 kHz - 1000 MHz)</text>

    <!-- Summary Box -->
    <g transform="translate(140, 190)">
      <rect width="370" height="70" fill="#1e293b" rx="8" stroke="#334155"/>
      <text x="185" y="22" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Production: Rapid acceleration of electrons in conducting aerials</text>
      <text x="185" y="42" fill="#cbd5e1" font-size="10.5" text-anchor="middle">AM Radio: 530 kHz - 1710 kHz  |  FM Radio: 88 MHz - 108 MHz</text>
      <text x="185" y="60" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Cellular Phones: Ultra High Frequency (UHF) ~ 900 MHz - 2 GHz</text>
    </g>
  </svg>`,

  // 9. Microwave & Radar Application
  microwaveRadar: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="Microwave Radar and Aircraft Detection">
    <rect width="650" height="280" fill="#0f172a" rx="16"/>
    <text x="325" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MICROWAVE RADAR (RADIO DETECTION AND RANGING)</text>

    <!-- Radar Dish -->
    <g transform="translate(60, 90)">
      <!-- Dish Curve -->
      <path d="M 20 20 Q 5 70 20 120" stroke="#0ea5e9" stroke-width="5" fill="none"/>
      <!-- Feed Horn -->
      <line x1="12" y1="70" x2="45" y2="70" stroke="#cbd5e1" stroke-width="3"/>
      <circle cx="45" cy="70" r="6" fill="#f59e0b"/>
      <!-- Base Stand -->
      <polygon points="12,70 -10,150 34,150" fill="#334155"/>
      <text x="20" y="172" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Radar Dish</text>
      <text x="20" y="188" fill="#94a3b8" font-size="9" text-anchor="middle">(Magnetron Source)</text>
    </g>

    <!-- Transmitted Narrow Beam (Yellow) -->
    <path d="M 120 130 L 480 75" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3" marker-end="url(#arrow-gold)"/>
    <text x="280" y="85" fill="#f59e0b" font-size="11" font-weight="bold">Transmitted Pulse (Short λ allows narrow beam)</text>

    <!-- Target Aircraft -->
    <g transform="translate(500, 45)">
      <!-- Simplified Aircraft Silhouette -->
      <path d="M 0 30 L 40 30 L 60 10 L 70 10 L 55 30 L 90 30 L 100 20 L 105 20 L 100 35 L 55 35 L 40 50 L 30 50 L 35 35 L 0 35 z" fill="#94a3b8"/>
      <text x="50" y="68" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">Target Aircraft</text>
    </g>

    <!-- Reflected Echo Pulse (Cyan) -->
    <path d="M 500 85 L 130 155" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4" marker-end="url(#arrow-cyan)"/>
    <text x="320" y="145" fill="#38bdf8" font-size="11" font-weight="bold">Reflected Echo (Time delay Δt gives Distance = c Δt / 2)</text>

    <!-- Bottom Key Points Box -->
    <g transform="translate(80, 205)">
      <rect width="500" height="60" fill="#1e293b" rx="8" stroke="#334155"/>
      <text x="250" y="22" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Generated by: Special vacuum tubes (Klystron, Magnetron, Gunn Diodes)</text>
      <text x="250" y="42" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Short wavelength (1 mm to 0.1 m) does not easily diffract around obstacles</text>
    </g>
  </svg>`,

  // 10. Microwave Oven Heating Principle
  microwaveOven: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="Microwave Oven Resonant Dielectric Heating">
    <rect width="650" height="280" fill="#0f172a" rx="16"/>
    <text x="325" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MICROWAVE OVEN: DIELECTRIC ROTATIONAL HEATING</text>

    <!-- Water Dipole Molecule (H2O) -->
    <g transform="translate(90, 60)">
      <rect width="210" height="195" fill="#1e293b" rx="12" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="105" y="25" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Water Molecule Dipole (H₂O)</text>
      
      <!-- Oxygen Atom (Red -) -->
      <circle cx="105" cy="85" r="28" fill="#ef4444"/>
      <text x="105" y="90" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">O²⁻</text>
      
      <!-- Hydrogen Atoms (Blue +) -->
      <circle cx="65" cy="135" r="16" fill="#3b82f6"/>
      <text x="65" y="140" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">H⁺</text>
      <circle cx="145" cy="135" r="16" fill="#3b82f6"/>
      <text x="145" y="140" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">H⁺</text>
      
      <!-- Dipole moment arrow -->
      <line x1="105" y1="135" x2="105" y2="60" stroke="#facc15" stroke-width="2.5" marker-end="url(#arrow-gold)"/>
      <text x="145" y="65" fill="#facc15" font-size="10" font-weight="bold">Dipole (p)</text>

      <text x="105" y="180" fill="#94a3b8" font-size="10" text-anchor="middle">Permanent Electric Dipole</text>
    </g>

    <!-- Oscillating Electric Field & Heating Mechanism -->
    <g transform="translate(320, 60)">
      <rect width="290" height="195" fill="#1e293b" rx="12" stroke="#22c55e" stroke-width="1.5"/>
      <text x="145" y="25" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">Resonant Torque Mechanism</text>

      <text x="15" y="55" fill="#cbd5e1" font-size="11">1. Microwaves match water rotational frequency</text>
      <text x="25" y="72" fill="#facc15" font-size="11" font-weight="bold">(f ≈ 2.45 GHz, λ ≈ 12.2 cm)</text>

      <text x="15" y="98" fill="#cbd5e1" font-size="11">2. Rapidly reversing E-field exerts torque (τ = p × E)</text>
      <text x="15" y="118" fill="#cbd5e1" font-size="11">   causing dipoles to rotate billions of times/sec.</text>

      <text x="15" y="144" fill="#cbd5e1" font-size="11">3. Intermolecular friction transforms rotational</text>
      <text x="15" y="162" fill="#cbd5e1" font-size="11">   kinetic energy directly into thermal heat.</text>

      <rect x="10" y="172" width="270" height="18" fill="#15803d" rx="4"/>
      <text x="145" y="185" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">Glass/Plastic containers have no free dipoles ⇒ stay cool</text>
    </g>
  </svg>`,

  // 11. Infrared Application (Thermal Radiation & Remote Controls)
  infraredApplication: `<svg viewBox="0 0 650 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="Infrared Radiation Applications">
    <rect width="650" height="270" fill="#0f172a" rx="16"/>
    <text x="325" y="26" fill="#f87171" font-size="14" font-weight="bold" text-anchor="middle">INFRARED RADIATION: THERMAL EMISSION &amp; REMOTE CONTROL</text>

    <!-- Left Box: Remote Control -->
    <g transform="translate(40, 50)">
      <rect width="260" height="200" fill="#1e293b" rx="12" stroke="#ef4444" stroke-width="1.5"/>
      <text x="130" y="25" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">TV Remote Control (IR LED)</text>
      
      <!-- Remote Graphic -->
      <rect x="25" y="50" width="50" height="100" fill="#334155" rx="6"/>
      <circle cx="50" cy="50" r="5" fill="#ef4444"/>
      <g fill="#64748b">
        <circle cx="40" cy="70" r="3"/><circle cx="50" cy="70" r="3"/><circle cx="60" cy="70" r="3"/>
        <circle cx="40" cy="85" r="3"/><circle cx="50" cy="85" r="3"/><circle cx="60" cy="85" r="3"/>
        <circle cx="40" cy="100" r="3"/><circle cx="50" cy="100" r="3"/><circle cx="60" cy="100" r="3"/>
      </g>
      <!-- IR Pulses -->
      <path d="M 85 50 Q 115 50 145 50" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow-red)"/>
      <text x="120" y="42" fill="#ef4444" font-size="9" font-weight="bold">IR Pulses</text>

      <!-- TV Sensor -->
      <rect x="160" y="40" width="80" height="60" fill="#0f172a" stroke="#475569" rx="4"/>
      <circle cx="175" cy="55" r="4" fill="#22c55e"/>
      <text x="200" y="75" fill="#e2e8f0" font-size="9" text-anchor="middle">TV Photodiode</text>

      <text x="130" y="170" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Low energy: Cannot penetrate walls</text>
      <text x="130" y="188" fill="#94a3b8" font-size="10" text-anchor="middle">Safe for human optical exposure</text>
    </g>

    <!-- Right Box: Thermal Emission -->
    <g transform="translate(330, 50)">
      <rect width="280" height="200" fill="#1e293b" rx="12" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="140" y="25" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Thermal Imaging &amp; Heat Waves</text>

      <text x="20" y="55" fill="#ffffff" font-size="11" font-weight="bold">• Produced by:</text>
      <text x="30" y="73" fill="#cbd5e1" font-size="10.5">Hot bodies and molecular vibrations</text>

      <text x="20" y="98" fill="#ffffff" font-size="11" font-weight="bold">• Greenhouse Effect:</text>
      <text x="30" y="116" fill="#cbd5e1" font-size="10.5">Earth re-radiates long-λ IR which is trapped</text>
      <text x="30" y="132" fill="#cbd5e1" font-size="10.5">by CO₂, CH₄, and water vapor</text>

      <text x="20" y="157" fill="#ffffff" font-size="11" font-weight="bold">• Medical / Night Vision:</text>
      <text x="30" y="175" fill="#cbd5e1" font-size="10.5">Detects body heat signatures through fog</text>
    </g>
  </svg>`,

  // 12. Ultraviolet Radiation & Sterilisation
  uvApplication: `<svg viewBox="0 0 650 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="Ultraviolet Radiation and Water Sterilisation">
    <rect width="650" height="270" fill="#0f172a" rx="16"/>
    <text x="325" y="26" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">ULTRAVIOLET (UV): GERMICIDAL STERILISATION &amp; OZONE ABSORPTION</text>

    <!-- Water Purifier UV Chamber -->
    <g transform="translate(50, 50)">
      <rect width="250" height="200" fill="#1e293b" rx="12" stroke="#8b5cf6" stroke-width="1.5"/>
      <text x="125" y="25" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">UV Water Purifier (RO)</text>
      
      <!-- Cylindrical chamber -->
      <rect x="25" y="45" width="200" height="60" fill="#0f172a" stroke="#6b21a8" rx="8"/>
      <!-- UV Lamp (Purple rod) -->
      <rect x="40" y="68" width="170" height="14" fill="#a855f7" rx="6"/>
      <text x="125" y="80" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">UV-C Lamp (λ ≈ 254 nm)</text>
      
      <!-- Water flow arrows -->
      <path d="M 5 75 L 25 75" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow-cyan)"/>
      <path d="M 225 75 L 245 75" stroke="#22c55e" stroke-width="3" marker-end="url(#arrow-green)"/>
      <text x="15" y="65" fill="#38bdf8" font-size="8.5">Inlet</text>
      <text x="235" y="65" fill="#22c55e" font-size="8.5">Sterile</text>

      <text x="125" y="130" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Destroys DNA of bacteria/viruses</text>
      <text x="125" y="148" fill="#cbd5e1" font-size="10.5" text-anchor="middle">LASIK eye surgery: Precise corneal shaping</text>
      <text x="125" y="168" fill="#facc15" font-size="9.5" text-anchor="middle">Detects forged banknotes / signatures</text>
    </g>

    <!-- Ozone Layer & Hazards -->
    <g transform="translate(330, 50)">
      <rect width="270" height="200" fill="#1e293b" rx="12" stroke="#ef4444" stroke-width="1.5"/>
      <text x="135" y="25" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Atmospheric Absorption &amp; Hazards</text>

      <text x="15" y="55" fill="#38bdf8" font-size="11" font-weight="bold">• Stratospheric Ozone Layer (O₃):</text>
      <text x="25" y="73" fill="#cbd5e1" font-size="10.5">Absorbs harmful solar UV (&lt; 290 nm)</text>
      <text x="25" y="90" fill="#cbd5e1" font-size="10.5">CFCs cause ozone depletion</text>

      <text x="15" y="118" fill="#f87171" font-size="11" font-weight="bold">• Biological Hazards:</text>
      <text x="25" y="136" fill="#cbd5e1" font-size="10.5">1. Skin burns &amp; melanoma (skin cancer)</text>
      <text x="25" y="154" fill="#cbd5e1" font-size="10.5">2. Cataracts &amp; cornea inflammation</text>

      <rect x="15" y="168" width="240" height="22" fill="#7f1d1d" rx="4"/>
      <text x="135" y="183" fill="#fecaca" font-size="9.5" font-weight="bold" text-anchor="middle">Ordinary glass absorbs UV radiation!</text>
    </g>
  </svg>`,

  // 13. X-Ray Production & Diagnostic Imaging
  xrayApplication: `<svg viewBox="0 0 650 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="X-Ray Production Coolidge Tube and Bone Radiography">
    <rect width="650" height="270" fill="#0f172a" rx="16"/>
    <text x="325" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">X-RAY GENERATION (COOLIDGE TUBE) &amp; BONE RADIOGRAPHY</text>

    <!-- Coolidge Tube Diagram -->
    <g transform="translate(40, 50)">
      <rect width="280" height="200" fill="#1e293b" rx="12" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="140" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Coolidge Tube Mechanism</text>

      <!-- Cathode Filament (Left) -->
      <rect x="30" y="75" width="20" height="40" fill="#ef4444" rx="3"/>
      <text x="40" y="130" fill="#f87171" font-size="9" text-anchor="middle">Cathode (-)</text>
      
      <!-- Electron Beam -->
      <line x1="55" y1="95" x2="160" y2="95" stroke="#facc15" stroke-width="3" stroke-dasharray="4,2" marker-end="url(#arrow-gold)"/>
      <text x="110" y="85" fill="#facc15" font-size="9.5">Fast e⁻ (High V)</text>

      <!-- Heavy Metal Anode Target (Tungsten/Mo) -->
      <polygon points="175,60 205,60 175,130 145,130" fill="#64748b"/>
      <text x="180" y="145" fill="#cbd5e1" font-size="9" text-anchor="middle">Target Anode (W)</text>

      <!-- Emitted X-Rays -->
      <path d="M 170 105 L 170 175" stroke="#38bdf8" stroke-width="3" stroke-dasharray="3,2" marker-end="url(#arrow-cyan)"/>
      <text x="210" y="170" fill="#38bdf8" font-size="10" font-weight="bold">X-Rays (λ ~ 1 Å)</text>
    </g>

    <!-- Applications & NEET Points -->
    <g transform="translate(340, 50)">
      <rect width="270" height="200" fill="#1e293b" rx="12" stroke="#22c55e" stroke-width="1.5"/>
      <text x="135" y="24" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">Applications &amp; Physics</text>

      <text x="15" y="52" fill="#ffffff" font-size="11" font-weight="bold">1. Diagnostic Bone Radiography:</text>
      <text x="25" y="70" fill="#cbd5e1" font-size="10.5">Bones (Ca) absorb X-rays strongly</text>
      <text x="25" y="86" fill="#cbd5e1" font-size="10.5">Soft flesh is transparent ⇒ Sharp shadow</text>

      <text x="15" y="112" fill="#ffffff" font-size="11" font-weight="bold">2. CT Scanning &amp; Airport Security:</text>
      <text x="25" y="130" fill="#cbd5e1" font-size="10.5">Detects contraband, luggage inspection</text>

      <text x="15" y="156" fill="#ffffff" font-size="11" font-weight="bold">3. X-Ray Crystallography:</text>
      <text x="25" y="174" fill="#cbd5e1" font-size="10.5">λ ≈ atomic spacing (~10⁻¹⁰ m) ⇒ Bragg diffraction</text>
    </g>
  </svg>`,

  // 14. Gamma-Ray Radiotherapy & Nuclear Physics
  gammaApplication: `<svg viewBox="0 0 650 270" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans" role="img" aria-label="Gamma Rays Cobalt-60 Radiotherapy and Nuclear De-excitation">
    <rect width="650" height="270" fill="#0f172a" rx="16"/>
    <text x="325" y="26" fill="#d946ef" font-size="14" font-weight="bold" text-anchor="middle">GAMMA RAYS (γ): NUCLEAR DE-EXCITATION &amp; CANCER RADIOTHERAPY</text>

    <!-- Cobalt-60 Teletherapy Unit -->
    <g transform="translate(40, 50)">
      <rect width="280" height="200" fill="#1e293b" rx="12" stroke="#d946ef" stroke-width="1.5"/>
      <text x="140" y="24" fill="#f0abfc" font-size="12" font-weight="bold" text-anchor="middle">Cancer Radiotherapy (Cobalt-60)</text>

      <!-- Collimator Head -->
      <rect x="100" y="45" width="80" height="40" fill="#334155" rx="4"/>
      <circle cx="140" cy="65" r="8" fill="#d946ef"/>
      <text x="140" y="40" fill="#e2e8f0" font-size="9" text-anchor="middle">⁶⁰Co Source in Lead Housing</text>

      <!-- Focused Gamma Beams -->
      <line x1="140" y1="85" x2="140" y2="135" stroke="#d946ef" stroke-width="3" stroke-dasharray="3,2" marker-end="url(#arrow-purple)"/>
      
      <!-- Tumor Target -->
      <ellipse cx="140" cy="150" rx="20" ry="12" fill="#ef4444"/>
      <text x="140" y="154" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Tumor</text>
      <text x="140" y="180" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Destroys malignant cells</text>
    </g>

    <!-- Key Facts & High Yield Points -->
    <g transform="translate(340, 50)">
      <rect width="270" height="200" fill="#1e293b" rx="12" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="135" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Origin &amp; Distinction</text>

      <text x="15" y="52" fill="#facc15" font-size="11" font-weight="bold">• Nuclear Origin:</text>
      <text x="25" y="70" fill="#cbd5e1" font-size="10.5">Emitted during nuclear transitions</text>
      <text x="25" y="86" fill="#cbd5e1" font-size="10.5">(Radioactive decay of excited nuclei)</text>

      <text x="15" y="112" fill="#facc15" font-size="11" font-weight="bold">• X-Ray vs Gamma-Ray Distinction:</text>
      <text x="25" y="130" fill="#cbd5e1" font-size="10.5">X-rays: Atomic / electron deceleration</text>
      <text x="25" y="146" fill="#cbd5e1" font-size="10.5">Gamma rays: Nuclear transitions</text>

      <rect x="15" y="165" width="240" height="24" fill="#701a75" rx="4"/>
      <text x="135" y="181" fill="#f5d0fe" font-size="9.5" font-weight="bold" text-anchor="middle">Highest frequency &amp; maximum penetrating power</text>
    </g>
  </svg>`,

  // 15. Polarisation of Electromagnetic Waves (Proof of Transverse Nature)
  polarisationWave: `<svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans" role="img" aria-label="Polarisation demonstrating transverse nature of EM waves">
    <rect width="700" height="290" fill="#0f172a" rx="16"/>
    <text x="350" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">POLARISATION DEMONSTRATES TRANSVERSE NATURE OF EM WAVES</text>

    <!-- Unpolarised Wave (All radial directions) -->
    <g transform="translate(60, 140)">
      <!-- Radial arrows -->
      <line x1="-35" y1="0" x2="35" y2="0" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)"/>
      <line x1="0" y1="-35" x2="0" y2="35" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)"/>
      <line x1="-25" y1="-25" x2="25" y2="25" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
      <line x1="-25" y1="25" x2="25" y2="-25" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
      <circle cx="0" cy="0" r="4" fill="#facc15"/>
      <text x="0" y="55" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Unpolarised Light</text>
      <text x="0" y="70" fill="#94a3b8" font-size="9" text-anchor="middle">(E oscillates in all planes ⟂ v)</text>
    </g>

    <!-- Wave line moving right -->
    <path d="M 110 140 L 250 140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrow-gray)"/>

    <!-- Polarising Sheet (Polaroid with vertical pass axis) -->
    <g transform="translate(260, 75)">
      <rect width="60" height="130" fill="#1e293b" rx="6" stroke="#38bdf8" stroke-width="2"/>
      <!-- Vertical Slits / Transmission Axis -->
      <line x1="20" y1="15" x2="20" y2="115" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,2"/>
      <line x1="30" y1="15" x2="30" y2="115" stroke="#facc15" stroke-width="3"/>
      <line x1="40" y1="15" x2="40" y2="115" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,2"/>
      <text x="30" y="148" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Polarizer (P₁)</text>
      <text x="30" y="162" fill="#facc15" font-size="9" text-anchor="middle">Pass Axis (Vertical)</text>
    </g>

    <!-- Transmitted Plane-Polarised Wave (Vertical only) -->
    <g transform="translate(420, 140)">
      <line x1="0" y1="-40" x2="0" y2="40" stroke="#22c55e" stroke-width="3.5" marker-end="url(#arrow-green)"/>
      <line x1="0" y1="40" x2="0" y2="-40" stroke="#22c55e" stroke-width="3.5" marker-end="url(#arrow-green)"/>
      <circle cx="0" cy="0" r="4" fill="#22c55e"/>
      <text x="0" y="55" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">Plane Polarised Wave</text>
      <text x="0" y="70" fill="#94a3b8" font-size="9" text-anchor="middle">Intensity I = I₀ / 2</text>
    </g>

    <!-- Wave line to Analyzer -->
    <path d="M 450 140 L 520 140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrow-gray)"/>

    <!-- Crossed Analyzer (Horizontal Pass Axis) -->
    <g transform="translate(530, 75)">
      <rect width="60" height="130" fill="#1e293b" rx="6" stroke="#ef4444" stroke-width="2"/>
      <!-- Horizontal Slits -->
      <line x1="10" y1="65" x2="50" y2="65" stroke="#f87171" stroke-width="3"/>
      <text x="30" y="148" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Crossed Analyzer</text>
      <text x="30" y="162" fill="#cbd5e1" font-size="9" text-anchor="middle">Pass Axis = 90°</text>
    </g>

    <!-- Extinguished Beam -->
    <g transform="translate(620, 140)">
      <circle cx="20" cy="0" r="6" fill="#ef4444" stroke="#ffffff"/>
      <text x="20" y="25" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">I = 0</text>
      <text x="20" y="40" fill="#94a3b8" font-size="8.5" text-anchor="middle">(Blocked)</text>
    </g>

    <!-- Bottom Proof Banner -->
    <rect x="70" y="248" width="560" height="30" fill="#0369a1" rx="6"/>
    <text x="350" y="268" fill="#ffffff" font-size="11.5" font-weight="bold" text-anchor="middle">Longitudinal waves (e.g. sound) CANNOT be polarized. Polarization proves EM waves are TRANSVERSE.</text>
  </svg>`
};
