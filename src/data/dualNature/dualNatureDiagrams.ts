// High-Precision scientifically accurate SVG diagrams for Dual Nature of Radiation and Matter (Class 12, Chapter 11)
// Designed for mobile & desktop with crisp typography, responsive viewboxes, clear color-coding, and detailed physics annotations.

export const DUAL_NATURE_SVGS = {
  // 1. Concept Flow Diagram: Historical & Conceptual Evolution of Duality
  conceptFlow: `<svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="700" height="520" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <linearGradient id="cfGradBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient>
      <linearGradient id="cfGradRed" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#991b1b"/></linearGradient>
      <linearGradient id="cfGradAmber" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
      <linearGradient id="cfGradEmerald" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#047857"/></linearGradient>
      <linearGradient id="cfGradPurple" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#5b21b6"/></linearGradient>
      <marker id="cfArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/></marker>
    </defs>
    
    <text x="350" y="32" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">DUAL NATURE OF RADIATION &amp; MATTER: CONCEPT FLOW</text>
    
    <!-- Stage 1: Classical Wave Theory -->
    <rect x="230" y="48" width="240" height="34" rx="7" fill="url(#cfGradBlue)"/>
    <text x="350" y="70" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. Classical Wave Nature of Light</text>
    <line x1="350" y1="82" x2="350" y2="98" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 2: Photoelectric Effect Observation -->
    <rect x="230" y="100" width="240" height="34" rx="7" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/>
    <text x="350" y="122" fill="#312e81" font-size="12" font-weight="bold" text-anchor="middle">2. Photoelectric Effect Observed (Hertz, Hallwachs)</text>
    <line x1="350" y1="134" x2="350" y2="150" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 3: Failure of Wave Theory -->
    <rect x="220" y="152" width="260" height="34" rx="7" fill="url(#cfGradRed)"/>
    <text x="350" y="174" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3. Failure of Classical Wave Theory (Threshold, Instant)</text>
    <line x1="350" y1="186" x2="350" y2="202" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 4: Einstein Photon Concept -->
    <rect x="210" y="204" width="280" height="34" rx="7" fill="url(#cfGradAmber)"/>
    <text x="350" y="226" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">4. Photon Concept &amp; Energy Quanta (E = hν)</text>
    <line x1="350" y1="238" x2="350" y2="254" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 5: Einstein Photoelectric Equation -->
    <rect x="200" y="256" width="300" height="34" rx="7" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
    <text x="350" y="278" fill="#78350f" font-size="12" font-weight="bold" text-anchor="middle">5. Einstein's Equation: hν = φ₀ + K_max</text>
    <line x1="350" y1="290" x2="350" y2="306" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 6: Particle Nature of Light Confirmed -->
    <rect x="210" y="308" width="280" height="34" rx="7" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="350" y="330" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">6. Light has Particle Nature (Photon Momentum p = h/λ)</text>
    <line x1="350" y1="342" x2="350" y2="358" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 7: de Broglie Symmetry Hypothesis -->
    <rect x="200" y="360" width="300" height="34" rx="7" fill="url(#cfGradEmerald)"/>
    <text x="350" y="382" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">7. de Broglie Hypothesis: Matter Waves (λ = h/p)</text>
    <line x1="350" y1="394" x2="350" y2="410" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 8: Davisson-Germer Experiment -->
    <rect x="210" y="412" width="280" height="34" rx="7" fill="#d1fae5" stroke="#047857" stroke-width="1.5"/>
    <text x="350" y="434" fill="#064e3b" font-size="12" font-weight="bold" text-anchor="middle">8. Davisson–Germer: Electron Diffraction Proof</text>
    <line x1="350" y1="446" x2="350" y2="462" stroke="#64748b" stroke-width="2" marker-end="url(#cfArr)"/>

    <!-- Stage 9: Universal Wave-Particle Duality -->
    <rect x="180" y="464" width="340" height="42" rx="9" fill="url(#cfGradPurple)"/>
    <text x="350" y="485" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">9. Wave-Particle Duality of Nature</text>
    <text x="350" y="500" fill="#e9d5ff" font-size="10" text-anchor="middle">Radiation &amp; Matter exhibit complementary Wave &amp; Particle aspects</text>
  </svg>`,

  // 2. Photoelectric Experimental Setup
  photoelectricSetup: `<svg viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="680" height="400" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <linearGradient id="uvBeam" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#a855f7" stop-opacity="0.8"/><stop offset="100%" stop-color="#3b82f6" stop-opacity="0.3"/></linearGradient>
      <marker id="peArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444"/></marker>
    </defs>
    
    <text x="340" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">EXPERIMENTAL APPARATUS FOR STUDYING PHOTOELECTRIC EFFECT</text>

    <!-- Monochromatic Source / Quartz Window -->
    <g transform="translate(60, 50)">
      <circle cx="25" cy="40" r="18" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      <text x="25" y="44" fill="#78350f" font-size="11" font-weight="bold" text-anchor="middle">S</text>
      <text x="25" y="74" fill="#475569" font-size="10" font-weight="semibold" text-anchor="middle">Monochromatic Source</text>
      <text x="25" y="86" fill="#64748b" font-size="9" text-anchor="middle">(Frequency ν)</text>
    </g>

    <!-- UV Light Path -->
    <path d="M 105 90 L 195 130 L 195 160 L 105 105 Z" fill="url(#uvBeam)"/>
    <line x1="105" y1="95" x2="190" y2="140" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="145" y="110" fill="#6d28d9" font-size="10" font-weight="bold" transform="rotate(22 145 110)">Incident Light (hν)</text>

    <!-- Evacuated Glass Tube (Discharge Tube) -->
    <rect x="180" y="70" width="320" height="150" rx="75" fill="#f1f5f9" stroke="#0284c7" stroke-width="2.5" fill-opacity="0.6"/>
    <path d="M 210 70 A 20 20 0 0 1 240 70" fill="none" stroke="#0ea5e9" stroke-width="4"/>
    <text x="225" y="62" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">Quartz Window (W)</text>

    <!-- Emitter Plate C (Cathode / Photosensitive Plate) -->
    <rect x="210" y="95" width="12" height="100" rx="3" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
    <text x="216" y="210" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">Emitter (C)</text>
    <text x="216" y="222" fill="#64748b" font-size="9" text-anchor="middle">(Cathode)</text>

    <!-- Collector Plate A (Anode) -->
    <rect x="455" y="95" width="12" height="100" rx="3" fill="#10b981" stroke="#047857" stroke-width="1.5"/>
    <text x="461" y="210" fill="#065f46" font-size="11" font-weight="bold" text-anchor="middle">Collector (A)</text>
    <text x="461" y="222" fill="#64748b" font-size="9" text-anchor="middle">(Anode)</text>

    <!-- Emitted Photoelectrons (dotted paths with negative charges) -->
    <g>
      <circle cx="250" cy="115" r="4.5" fill="#ef4444"/><text x="250" y="118" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">-</text>
      <line x1="225" y1="115" x2="242" y2="115" stroke="#ef4444" stroke-width="1.5"/>
      <line x1="256" y1="115" x2="330" y2="115" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#peArr)"/>

      <circle cx="280" cy="145" r="4.5" fill="#ef4444"/><text x="280" y="148" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">-</text>
      <line x1="225" y1="145" x2="272" y2="145" stroke="#ef4444" stroke-width="1.5"/>
      <line x1="286" y1="145" x2="380" y2="145" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#peArr)"/>

      <circle cx="260" cy="175" r="4.5" fill="#ef4444"/><text x="260" y="178" fill="#ffffff" font-size="8" font-weight="bold" text-anchor="middle">-</text>
      <line x1="225" y1="175" x2="252" y2="175" stroke="#ef4444" stroke-width="1.5"/>
      <line x1="266" y1="175" x2="350" y2="175" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#peArr)"/>

      <text x="340" y="105" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">Photoelectrons (e⁻)</text>
    </g>

    <!-- Circuit Connections -->
    <line x1="216" y1="195" x2="216" y2="280" stroke="#1e293b" stroke-width="2"/>
    <line x1="461" y1="195" x2="461" y2="280" stroke="#1e293b" stroke-width="2"/>

    <!-- Microammeter (μA) -->
    <g transform="translate(180, 270)">
      <circle cx="36" cy="10" r="16" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
      <text x="36" y="14" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle">μA</text>
      <text x="36" y="38" fill="#475569" font-size="9" text-anchor="middle">Microammeter</text>
    </g>
    <line x1="216" y1="280" x2="250" y2="280" stroke="#1e293b" stroke-width="2"/>

    <!-- Voltmeter (V) -->
    <g transform="translate(320, 240)">
      <circle cx="20" cy="15" r="14" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <text x="20" y="19" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">V</text>
      <line x1="20" y1="1" x2="20" y2="-15" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="-70" y1="-15" x2="110" y2="-15" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="20" y1="29" x2="20" y2="40" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="-70" y1="40" x2="110" y2="40" stroke="#1e293b" stroke-width="1.5"/>
    </g>

    <!-- Commutator (Reversing Key) -->
    <rect x="270" y="270" width="140" height="30" rx="4" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
    <text x="340" y="290" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">Commutator (Reversing Key)</text>

    <!-- Variable Battery / Potential Divider -->
    <g transform="translate(240, 330)">
      <rect x="20" y="0" width="160" height="24" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <!-- Battery Cells -->
      <line x1="60" y1="4" x2="60" y2="20" stroke="#1e293b" stroke-width="3"/>
      <line x1="70" y1="8" x2="70" y2="16" stroke="#1e293b" stroke-width="1.5"/>
      <line x1="80" y1="4" x2="80" y2="20" stroke="#1e293b" stroke-width="3"/>
      <line x1="90" y1="8" x2="90" y2="16" stroke="#1e293b" stroke-width="1.5"/>
      <text x="140" y="16" fill="#0f172a" font-size="10" font-weight="bold">Battery</text>
      <!-- Rheostat / Potential Divider Slider -->
      <line x1="100" y1="24" x2="100" y2="38" stroke="#dc2626" stroke-width="2"/>
      <polygon points="96,24 104,24 100,16" fill="#dc2626"/>
      <text x="100" y="52" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Variable Slider (Rheostat)</text>
    </g>
    <line x1="340" y1="300" x2="340" y2="330" stroke="#1e293b" stroke-width="2"/>
    <line x1="461" y1="280" x2="410" y2="280" stroke="#1e293b" stroke-width="2"/>
    <line x1="250" y1="280" x2="270" y2="280" stroke="#1e293b" stroke-width="2"/>
  </svg>`,

  // 3. Photon Striking Metal & Electron Emission
  photonEmissionMechanism: `<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="620" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="peWvArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/></marker>
      <marker id="eArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6"/></marker>
    </defs>

    <text x="310" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">ONE-PHOTON / ONE-ELECTRON INTERACTION MECHANISM</text>

    <!-- Metal Surface Block -->
    <rect x="50" y="160" width="520" height="130" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2" rx="6"/>
    <line x1="50" y1="160" x2="570" y2="160" stroke="#475569" stroke-width="3"/>
    <text x="70" y="185" fill="#334155" font-size="12" font-weight="bold">METAL LATTICE</text>
    <text x="70" y="202" fill="#64748b" font-size="10">Conduction Band / Free Electrons Pool</text>

    <!-- Work Function Barrier Line -->
    <line x1="50" y1="158" x2="570" y2="158" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
    <text x="490" y="152" fill="#dc2626" font-size="11" font-weight="bold">Surface Barrier (φ₀)</text>

    <!-- Case A: Surface Electron (K_max) -->
    <g transform="translate(160, 0)">
      <!-- Incident Photon -->
      <path d="M -50 40 Q -35 55 -20 40 T 10 40 T 40 40 L 45 155" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#peWvArr)"/>
      <text x="-25" y="32" fill="#b45309" font-size="11" font-weight="bold">Incident Photon (E = hν)</text>
      
      <!-- Bound Electron -->
      <circle cx="45" cy="160" r="8" fill="#2563eb"/>
      <text x="45" y="164" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">e⁻</text>
      
      <!-- Emitted with K_max -->
      <line x1="50" y1="152" x2="110" y2="70" stroke="#2563eb" stroke-width="3" marker-end="url(#eArr)"/>
      <circle cx="112" cy="68" r="8" fill="#2563eb"/>
      <text x="112" y="72" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">e⁻</text>
      
      <rect x="60" y="45" width="130" height="26" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
      <text x="125" y="62" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">K_max = hν - φ₀</text>
      <text x="45" y="235" fill="#1e3a8a" font-size="10" font-weight="bold" text-anchor="middle">Surface Electron (Zero Collision)</text>
    </g>

    <!-- Case B: Deep Electron (K < K_max due to internal collisions) -->
    <g transform="translate(420, 0)">
      <!-- Incident Photon -->
      <path d="M -50 40 Q -35 55 -20 40 T 10 40 T 35 70 L 40 215" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#peWvArr)"/>
      <text x="-25" y="32" fill="#b45309" font-size="11" font-weight="bold">Incident Photon (E = hν)</text>
      
      <!-- Deep Bound Electron -->
      <circle cx="40" cy="220" r="8" fill="#64748b"/>
      <text x="40" y="224" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">e⁻</text>
      
      <!-- Collisions inside metal -->
      <line x1="40" y1="212" x2="55" y2="185" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="55" y1="185" x2="45" y2="160" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="65" y="200" fill="#dc2626" font-size="9">Collisions (E_loss)</text>
      
      <!-- Emitted with K < K_max -->
      <line x1="45" y1="155" x2="80" y2="105" stroke="#64748b" stroke-width="2" marker-end="url(#eArr)"/>
      <circle cx="82" cy="103" r="7" fill="#64748b"/>
      <text x="82" y="106" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">e⁻</text>
      <text x="85" y="90" fill="#475569" font-size="10" font-weight="bold">K &lt; K_max</text>
      <text x="40" y="255" fill="#475569" font-size="10" font-weight="bold" text-anchor="middle">Inner Electron (Loses energy inside)</text>
    </g>
  </svg>`,

  // 4. Energy Balance in Einstein's Photoelectric Equation
  energyBalanceDiagram: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="640" height="280" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="320" y="28" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">ENERGY CONSERVATION IN PHOTOELECTRIC PROCESS</text>

    <!-- Photon Total Energy (Left Pillar) -->
    <rect x="70" y="60" width="140" height="180" rx="8" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <text x="140" y="90" fill="#78350f" font-size="13" font-weight="bold" text-anchor="middle">TOTAL INCIDENT</text>
    <text x="140" y="110" fill="#78350f" font-size="13" font-weight="bold" text-anchor="middle">PHOTON ENERGY</text>
    <text x="140" y="155" fill="#b45309" font-size="22" font-weight="extrabold" text-anchor="middle">E = hν</text>
    <text x="140" y="185" fill="#78350f" font-size="12" text-anchor="middle">= hc / λ</text>

    <!-- Equals Sign -->
    <text x="250" y="160" fill="#475569" font-size="34" font-weight="bold" text-anchor="middle">=</text>

    <!-- Right Split Pillar: Work Function + K_max -->
    <g transform="translate(290, 60)">
      <!-- Work Function φ₀ -->
      <rect x="0" y="90" width="180" height="90" rx="0 0 8 8" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
      <text x="90" y="125" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">WORK FUNCTION (φ₀)</text>
      <text x="90" y="148" fill="#ffffff" font-size="18" font-weight="extrabold" text-anchor="middle">φ₀ = hν₀</text>
      <text x="90" y="168" fill="#fee2e2" font-size="10" text-anchor="middle">Energy to escape surface</text>

      <!-- Maximum Kinetic Energy K_max -->
      <rect x="0" y="0" width="180" height="90" rx="8 8 0 0" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <text x="90" y="32" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">MAX KINETIC ENERGY</text>
      <text x="90" y="55" fill="#ffffff" font-size="18" font-weight="extrabold" text-anchor="middle">K_max = eV₀</text>
      <text x="90" y="75" fill="#dbeafe" font-size="10" text-anchor="middle">= ½ m v_max²</text>
    </g>

    <!-- Master Equation Box -->
    <rect x="490" y="80" width="130" height="130" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
    <text x="555" y="105" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">EINSTEIN EQN</text>
    <line x1="505" y1="115" x2="605" y2="115" stroke="#cbd5e1"/>
    <text x="555" y="140" fill="#2563eb" font-size="12" font-weight="extrabold" text-anchor="middle">hν = φ₀ + K_max</text>
    <text x="555" y="165" fill="#dc2626" font-size="11" font-weight="bold" text-anchor="middle">K_max = hν - φ₀</text>
    <text x="555" y="190" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">eV₀ = hν - hν₀</text>
  </svg>`,

  // 5. Standard Photoelectric I-V Graph (Single Curve Detailed)
  photoelectricIVSingle: `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="axArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/></marker>
    </defs>
    
    <text x="300" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">PHOTOELECTRIC CURRENT vs COLLECTOR POTENTIAL (I – V)</text>

    <!-- Axes -->
    <!-- X-Axis: Potential V (centered at origin x=220) -->
    <line x1="60" y1="250" x2="550" y2="250" stroke="#334155" stroke-width="2" marker-end="url(#axArr)"/>
    <text x="540" y="275" fill="#334155" font-size="11" font-weight="bold">+ V (Accelerating Potential)</text>
    <text x="70" y="275" fill="#dc2626" font-size="11" font-weight="bold">- V (Retarding Potential)</text>

    <!-- Y-Axis: Photocurrent I at x=220 -->
    <line x1="220" y1="310" x2="220" y2="50" stroke="#334155" stroke-width="2" marker-end="url(#axArr)"/>
    <text x="210" y="45" fill="#334155" font-size="12" font-weight="bold" text-anchor="end">Photocurrent (I)</text>

    <!-- Origin 0 -->
    <circle cx="220" cy="250" r="3" fill="#334155"/>
    <text x="212" y="265" fill="#64748b" font-size="11" font-weight="bold">O</text>

    <!-- Stopping Potential Marker (-V0) at x=110 -->
    <line x1="110" y1="245" x2="110" y2="255" stroke="#dc2626" stroke-width="2"/>
    <circle cx="110" cy="250" r="5" fill="#dc2626"/>
    <text x="110" y="270" fill="#dc2626" font-size="12" font-weight="extrabold" text-anchor="middle">- V₀</text>
    <text x="110" y="285" fill="#dc2626" font-size="9" font-weight="semibold" text-anchor="middle">Stopping Potential</text>
    <text x="110" y="297" fill="#64748b" font-size="9" text-anchor="middle">(Current = 0)</text>

    <!-- Current Curve -->
    <path d="M 110 250 C 140 248, 170 230, 220 180 C 270 130, 330 110, 420 110 L 530 110" fill="none" stroke="#2563eb" stroke-width="3.5"/>

    <!-- Saturation Current Level Line -->
    <line x1="220" y1="110" x2="530" y2="110" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
    <circle cx="220" cy="110" r="4" fill="#059669"/>
    <text x="205" y="114" fill="#059669" font-size="12" font-weight="bold" text-anchor="end">I_sat</text>
    <text x="470" y="98" fill="#059669" font-size="11" font-weight="bold">Saturation Current (I_sat)</text>
    <text x="470" y="128" fill="#64748b" font-size="9">All emitted electrons collected</text>

    <!-- Key Region Annotations -->
    <!-- Current at V = 0 -->
    <circle cx="220" cy="180" r="4" fill="#d97706"/>
    <text x="228" y="178" fill="#b45309" font-size="10" font-weight="bold">Current at V = 0</text>
    <text x="228" y="190" fill="#64748b" font-size="9">(Energetic e⁻ reach anode freely)</text>
  </svg>`,

  // 6. Effect of Intensity on I-V Graphs (Same Frequency ν, Different Intensities I3 > I2 > I1)
  intensityIVComparison: `<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="620" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="axArr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/></marker>
    </defs>
    
    <text x="310" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">EFFECT OF INTENSITY (FIXED FREQUENCY ν &gt; ν₀)</text>
    <text x="310" y="40" fill="#64748b" font-size="10" text-anchor="middle">Same Stopping Potential -V₀ | Different Saturation Currents: I₃ &gt; I₂ &gt; I₁</text>

    <!-- Axes -->
    <line x1="50" y1="260" x2="570" y2="260" stroke="#334155" stroke-width="2" marker-end="url(#axArr2)"/>
    <text x="560" y="285" fill="#334155" font-size="11" font-weight="bold">+ V (Collector Potential)</text>
    <text x="50" y="285" fill="#dc2626" font-size="11" font-weight="bold">- V (Retarding)</text>

    <line x1="200" y1="310" x2="200" y2="50" stroke="#334155" stroke-width="2" marker-end="url(#axArr2)"/>
    <text x="190" y="48" fill="#334155" font-size="12" font-weight="bold" text-anchor="end">Photocurrent (I)</text>

    <!-- Common Stopping Potential -V0 -->
    <circle cx="100" cy="260" r="5" fill="#dc2626"/>
    <text x="100" y="282" fill="#dc2626" font-size="12" font-weight="extrabold" text-anchor="middle">- V₀</text>
    <text x="100" y="296" fill="#dc2626" font-size="9" text-anchor="middle">(Independent of Intensity!)</text>

    <!-- Curve 1: Low Intensity I1 -->
    <path d="M 100 260 C 130 258, 160 240, 200 215 C 240 190, 290 180, 380 180 L 540 180" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="548" y="184" fill="#2563eb" font-size="11" font-weight="bold">Intensity I₁</text>

    <!-- Curve 2: Medium Intensity I2 -->
    <path d="M 100 260 C 130 258, 160 228, 200 170 C 240 135, 290 130, 380 130 L 540 130" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <text x="548" y="134" fill="#059669" font-size="11" font-weight="bold">Intensity I₂</text>

    <!-- Curve 3: High Intensity I3 -->
    <path d="M 100 260 C 130 258, 160 215, 200 120 C 240 85, 290 80, 380 80 L 540 80" fill="none" stroke="#8b5cf6" stroke-width="2.5"/>
    <text x="548" y="84" fill="#7c3aed" font-size="11" font-weight="bold">Intensity I₃</text>

    <!-- High-Yield NEET Note Box -->
    <rect x="250" y="295" width="350" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
    <text x="425" y="315" fill="#78350f" font-size="11" font-weight="bold" text-anchor="middle">NEET TAKEAWAY: Intensity ∝ Saturation Current</text>
    <text x="425" y="332" fill="#b45309" font-size="10" text-anchor="middle">Higher intensity = More photons/sec = More photoelectrons/sec (V₀ UNCHANGED)</text>
  </svg>`,

  // 7. Effect of Frequency on Stopping Potential (I-V Curves for ν3 > ν2 > ν1)
  frequencyIVComparison: `<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="620" height="360" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="axArr3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/></marker>
    </defs>
    
    <text x="310" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">EFFECT OF FREQUENCY (SAME INTENSITY, SAME MATERIAL)</text>
    <text x="310" y="40" fill="#64748b" font-size="10" text-anchor="middle">Different Stopping Potentials: |V₀₃| &gt; |V₀₂| &gt; |V₀₁| | Same Saturation Current</text>

    <!-- Axes -->
    <line x1="40" y1="260" x2="570" y2="260" stroke="#334155" stroke-width="2" marker-end="url(#axArr3)"/>
    <text x="560" y="285" fill="#334155" font-size="11" font-weight="bold">+ V (Collector Potential)</text>

    <line x1="290" y1="310" x2="290" y2="50" stroke="#334155" stroke-width="2" marker-end="url(#axArr3)"/>
    <text x="280" y="48" fill="#334155" font-size="12" font-weight="bold" text-anchor="end">Photocurrent (I)</text>

    <!-- Common Saturation Current Level -->
    <line x1="290" y1="100" x2="540" y2="100" stroke="#059669" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="548" y="104" fill="#059669" font-size="11" font-weight="bold">I_sat (Same)</text>

    <!-- Curve 1: Lowest Frequency ν1 -->
    <circle cx="210" cy="260" r="4.5" fill="#3b82f6"/>
    <text x="210" y="282" fill="#2563eb" font-size="11" font-weight="bold" text-anchor="middle">- V₀₁</text>
    <path d="M 210 260 C 230 258, 250 200, 290 150 C 330 110, 370 100, 440 100 L 540 100" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
    <text x="235" y="180" fill="#2563eb" font-size="10" font-weight="bold">ν₁ (Lowest)</text>

    <!-- Curve 2: Medium Frequency ν2 -->
    <circle cx="140" cy="260" r="4.5" fill="#10b981"/>
    <text x="140" y="282" fill="#059669" font-size="11" font-weight="bold" text-anchor="middle">- V₀₂</text>
    <path d="M 140 260 C 170 258, 210 200, 290 140 C 340 105, 380 100, 440 100 L 540 100" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <text x="170" y="170" fill="#059669" font-size="10" font-weight="bold">ν₂</text>

    <!-- Curve 3: Highest Frequency ν3 -->
    <circle cx="70" cy="260" r="4.5" fill="#8b5cf6"/>
    <text x="70" y="282" fill="#7c3aed" font-size="11" font-weight="bold" text-anchor="middle">- V₀₃</text>
    <path d="M 70 260 C 110 258, 180 200, 290 130 C 350 102, 390 100, 440 100 L 540 100" fill="none" stroke="#8b5cf6" stroke-width="2.5"/>
    <text x="95" y="170" fill="#7c3aed" font-size="10" font-weight="bold">ν₃ (Highest)</text>

    <!-- Summary Box -->
    <rect x="50" y="300" width="530" height="46" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
    <text x="315" y="318" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">ν₃ &gt; ν₂ &gt; ν₁  ⟹  |V₀₃| &gt; |V₀₂| &gt; |V₀₁|  and  K_max₃ &gt; K_max₂ &gt; K_max₁</text>
    <text x="315" y="334" fill="#2563eb" font-size="10" text-anchor="middle">Higher frequency photons carry more energy, requiring greater negative potential to stop.</text>
  </svg>`,

  // 8. Stopping Potential vs Frequency Graph (Slope = h/e, Intercept = -φ₀/e)
  stoppingPotentialVsFrequency: `<svg viewBox="0 0 620 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="620" height="380" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="axArr4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/></marker>
    </defs>

    <text x="310" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">STOPPING POTENTIAL (V₀) vs FREQUENCY (ν)</text>
    <text x="310" y="40" fill="#64748b" font-size="10" text-anchor="middle">Straight Line: V₀ = (h/e)ν - (φ₀/e) | Universal Slope = h/e (Independent of Material)</text>

    <!-- Axes -->
    <!-- X-Axis at y=230 -->
    <line x1="70" y1="230" x2="570" y2="230" stroke="#334155" stroke-width="2" marker-end="url(#axArr4)"/>
    <text x="560" y="255" fill="#334155" font-size="11" font-weight="bold">Frequency (ν) [Hz]</text>

    <!-- Y-Axis at x=120 -->
    <line x1="120" y1="350" x2="120" y2="45" stroke="#334155" stroke-width="2" marker-end="url(#axArr4)"/>
    <text x="110" y="45" fill="#334155" font-size="12" font-weight="bold" text-anchor="end">Stopping Potential (V₀) [V]</text>

    <!-- Origin 0 -->
    <circle cx="120" cy="230" r="3" fill="#334155"/>
    <text x="108" y="245" fill="#64748b" font-size="11">0</text>

    <!-- Material A (Metal A: Lower Work Function) -->
    <!-- Intercept at x=230 (nu_0A), Y-intercept at (120, 310) -->
    <line x1="120" y1="310" x2="230" y2="230" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/>
    <line x1="230" y1="230" x2="520" y2="60" stroke="#2563eb" stroke-width="3"/>
    <circle cx="230" cy="230" r="5" fill="#2563eb"/>
    <text x="230" y="252" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">ν₀_A</text>
    <text x="530" y="65" fill="#1e40af" font-size="12" font-weight="bold">Metal A</text>

    <!-- Material B (Metal B: Higher Work Function) -->
    <!-- Intercept at x=340 (nu_0B), Y-intercept at (120, 360) -->
    <line x1="120" y1="360" x2="340" y2="230" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
    <line x1="340" y1="230" x2="560" y2="90" stroke="#dc2626" stroke-width="3"/>
    <circle cx="340" cy="230" r="5" fill="#dc2626"/>
    <text x="340" y="252" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">ν₀_B</text>
    <text x="570" y="95" fill="#991b1b" font-size="12" font-weight="bold">Metal B</text>

    <!-- Y-Intercept Labels -->
    <circle cx="120" cy="310" r="4" fill="#2563eb"/>
    <text x="112" y="314" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="end">- φ₀_A / e</text>

    <!-- Slope Annotation Box -->
    <g transform="translate(290, 80)">
      <rect x="0" y="0" width="175" height="55" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
      <text x="88" y="20" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">PARALLEL LINES!</text>
      <text x="88" y="36" fill="#047857" font-size="12" font-weight="extrabold" text-anchor="middle">Slope = tan θ = h / e</text>
      <text x="88" y="48" fill="#64748b" font-size="9" text-anchor="middle">(Planck constant / e)</text>
    </g>

    <!-- Angle indicator θ -->
    <path d="M 280 230 A 50 50 0 0 0 270 207" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="285" y="218" fill="#2563eb" font-size="11" font-weight="bold">θ</text>
  </svg>`,

  // 9. Threshold Frequency Concept (Pass vs Fail)
  thresholdConcept: `<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="620" height="280" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="thRedArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
      <marker id="thGrnArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#059669"/></marker>
    </defs>

    <text x="310" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">THRESHOLD FREQUENCY (ν₀) CRITICAL CONDITION</text>

    <!-- Left Box: Sub-threshold ν < ν₀ -->
    <g transform="translate(40, 50)">
      <rect x="0" y="0" width="250" height="205" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="125" y="26" fill="#991b1b" font-size="12" font-weight="bold" text-anchor="middle">CASE 1: ν &lt; ν₀ (Sub-Threshold)</text>
      
      <!-- Red Light Wave (Low frequency) -->
      <path d="M 20 65 Q 40 45 60 65 T 100 65 T 140 65 L 140 105" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#thRedArr)"/>
      <text x="125" y="55" fill="#dc2626" font-size="10" font-weight="bold">Red Light (Low ν)</text>

      <!-- Metal Plate -->
      <rect x="25" y="110" width="200" height="24" rx="4" fill="#cbd5e1" stroke="#64748b"/>
      <circle cx="140" cy="122" r="6" fill="#64748b"/>
      <text x="140" y="125" fill="#ffffff" font-size="8" text-anchor="middle">e⁻</text>
      
      <text x="125" y="155" fill="#b91c1c" font-size="13" font-weight="extrabold" text-anchor="middle">NO EMISSION (I = 0)</text>
      <text x="125" y="172" fill="#7f1d1d" font-size="10" text-anchor="middle">Even with 1000 W laser!</text>
      <text x="125" y="188" fill="#64748b" font-size="9" text-anchor="middle">Energy hν &lt; Work function φ₀</text>
    </g>

    <!-- Right Box: Above-threshold ν >= ν₀ -->
    <g transform="translate(330, 50)">
      <rect x="0" y="0" width="250" height="205" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="125" y="26" fill="#14532d" font-size="12" font-weight="bold" text-anchor="middle">CASE 2: ν ≥ ν₀ (Above Threshold)</text>
      
      <!-- UV / Blue Light Wave (High frequency) -->
      <path d="M 20 65 Q 30 50 40 65 T 60 65 T 80 65 T 100 65 L 120 105" fill="none" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#thGrnArr)"/>
      <text x="125" y="55" fill="#6d28d9" font-size="10" font-weight="bold">UV / Blue (High ν)</text>

      <!-- Metal Plate -->
      <rect x="25" y="110" width="200" height="24" rx="4" fill="#cbd5e1" stroke="#64748b"/>
      
      <!-- Escaping Electron -->
      <circle cx="180" cy="85" r="6" fill="#2563eb"/>
      <text x="180" y="88" fill="#ffffff" font-size="8" text-anchor="middle">e⁻</text>
      <line x1="120" y1="110" x2="175" y2="87" stroke="#2563eb" stroke-width="2" marker-end="url(#thGrnArr)"/>
      
      <text x="125" y="155" fill="#15803d" font-size="13" font-weight="extrabold" text-anchor="middle">INSTANT EMISSION (&lt; 10⁻⁹ s)</text>
      <text x="125" y="172" fill="#166534" font-size="10" text-anchor="middle">Even with dim light!</text>
      <text x="125" y="188" fill="#64748b" font-size="9" text-anchor="middle">K_max = hν - φ₀ &gt; 0</text>
    </g>
  </svg>`,

  // 10. Photon Concept: Energy & Momentum Quanta
  photonQuantaConcept: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="280" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
      <marker id="phArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/></marker>
    </defs>

    <text x="300" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">THE PHOTON: QUANTUM OF ELECTROMAGNETIC RADIATION</text>

    <!-- Photon Wave Packet Representation -->
    <g transform="translate(100, 110)">
      <ellipse cx="60" cy="0" rx="75" ry="35" fill="url(#phGrad)" opacity="0.25"/>
      <path d="M -10 0 Q 10 -28 30 0 T 70 0 T 110 0 T 130 0" fill="none" stroke="#d97706" stroke-width="3"/>
      <line x1="130" y1="0" x2="160" y2="0" stroke="#d97706" stroke-width="2.5" marker-end="url(#phArr)"/>
      <text x="60" y="48" fill="#78350f" font-size="11" font-weight="bold" text-anchor="middle">Localised Wave Packet (Photon)</text>
      <text x="60" y="62" fill="#64748b" font-size="10" text-anchor="middle">Travels at speed of light c</text>
    </g>

    <!-- Photon Properties Grid -->
    <g transform="translate(330, 50)">
      <rect x="0" y="0" width="240" height="205" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="120" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">FUNDAMENTAL PROPERTIES</text>
      <line x1="20" y1="34" x2="220" y2="34" stroke="#e2e8f0"/>

      <text x="15" y="56" fill="#0369a1" font-size="11" font-weight="bold">1. Energy:</text>
      <text x="85" y="56" fill="#0f172a" font-size="11" font-weight="extrabold">E = hν = hc / λ</text>

      <text x="15" y="86" fill="#7c3aed" font-size="11" font-weight="bold">2. Momentum:</text>
      <text x="110" y="86" fill="#0f172a" font-size="11" font-weight="extrabold">p = E/c = h / λ</text>

      <text x="15" y="116" fill="#dc2626" font-size="11" font-weight="bold">3. Rest Mass:</text>
      <text x="105" y="116" fill="#0f172a" font-size="11" font-weight="extrabold">m₀ = 0</text>

      <text x="15" y="146" fill="#059669" font-size="11" font-weight="bold">4. Electric Charge:</text>
      <text x="125" y="146" fill="#0f172a" font-size="11" font-weight="extrabold">Neutral (q = 0)</text>

      <text x="15" y="176" fill="#b45309" font-size="11" font-weight="bold">5. Speed in Vacuum:</text>
      <text x="140" y="176" fill="#0f172a" font-size="11" font-weight="extrabold">c = 3 × 10⁸ m/s</text>
      <text x="15" y="194" fill="#64748b" font-size="9">(In all inertial reference frames)</text>
    </g>
  </svg>`,

  // 11. de Broglie Matter Wave Associated with Moving Particle
  deBroglieMatterWave: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="300" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="dbArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#059669"/></marker>
    </defs>

    <text x="300" y="26" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">DE BROGLIE MATTER WAVE HYPOTHESIS</text>
    <text x="300" y="42" fill="#64748b" font-size="10" text-anchor="middle">Moving Particle of mass m, velocity v ⟷ Associated Matter Wave of wavelength λ = h/p</text>

    <!-- Particle (Sphere) -->
    <g transform="translate(80, 140)">
      <circle cx="0" cy="0" r="18" fill="#059669" stroke="#047857" stroke-width="2"/>
      <text x="0" y="4" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">m</text>
      <line x1="20" y1="0" x2="65" y2="0" stroke="#059669" stroke-width="3" marker-end="url(#dbArr)"/>
      <text x="45" y="-10" fill="#047857" font-size="12" font-weight="bold">v</text>
      <text x="0" y="36" fill="#065f46" font-size="10" font-weight="bold" text-anchor="middle">Particle (Momentum p = mv)</text>
    </g>

    <!-- Associated Matter Wave -->
    <g transform="translate(200, 140)">
      <!-- Wave Envelope -->
      <path d="M 0 0 Q 30 -40 60 0 T 120 0 T 180 0 T 240 0 T 300 0" fill="none" stroke="#3b82f6" stroke-width="3"/>
      <!-- Wave envelope bounds -->
      <path d="M 0 0 C 60 -50 240 -50 300 0" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4,3"/>
      <path d="M 0 0 C 60 50 240 50 300 0" fill="none" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="4,3"/>

      <!-- Wavelength λ dimension -->
      <line x1="60" y1="-52" x2="180" y2="-52" stroke="#1e40af" stroke-width="1.5"/>
      <line x1="60" y1="-45" x2="60" y2="-58" stroke="#1e40af" stroke-width="1.5"/>
      <line x1="180" y1="-45" x2="180" y2="-58" stroke="#1e40af" stroke-width="1.5"/>
      <text x="120" y="-60" fill="#1e40af" font-size="12" font-weight="extrabold" text-anchor="middle">λ = h / p = h / mv</text>

      <text x="150" y="45" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">Matter Wave (Pilot Wave)</text>
      <text x="150" y="60" fill="#64748b" font-size="10" text-anchor="middle">Wavelength λ is inversely proportional to momentum p</text>
    </g>

    <!-- Master Formulas Banner -->
    <rect x="50" y="225" width="500" height="55" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="300" y="246" fill="#1e3a8a" font-size="11" font-weight="bold" text-anchor="middle">KEY DE BROGLIE FORMS FOR NEET:</text>
    <text x="300" y="265" fill="#2563eb" font-size="12" font-weight="extrabold" text-anchor="middle">λ = h / p  =  h / mv  =  h / √(2mK)  =  h / √(2mqV)</text>
  </svg>`,

  // 12. Electron Accelerated Through Potential Difference V
  electronAcceleratedV: `<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="620" height="280" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="accArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
    </defs>

    <text x="310" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">DE BROGLIE WAVELENGTH OF ACCELERATED ELECTRON</text>

    <!-- Acceleration Anodes Setup -->
    <g transform="translate(60, 60)">
      <!-- Negative Plate (Cathode) -->
      <rect x="20" y="20" width="10" height="100" fill="#ef4444" rx="2"/>
      <text x="25" y="15" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">-</text>
      <text x="25" y="135" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="middle">Cathode</text>

      <!-- Positive Anode (with slit) -->
      <rect x="180" y="20" width="10" height="40" fill="#10b981" rx="2"/>
      <rect x="180" y="80" width="10" height="40" fill="#10b981" rx="2"/>
      <text x="185" y="15" fill="#059669" font-size="12" font-weight="bold" text-anchor="middle">+</text>
      <text x="185" y="135" fill="#059669" font-size="10" font-weight="bold" text-anchor="middle">Anode</text>

      <!-- Accelerated Electron -->
      <circle cx="35" cy="70" r="6" fill="#2563eb"/>
      <text x="35" y="73" fill="#ffffff" font-size="8" text-anchor="middle">e⁻</text>
      <line x1="45" y1="70" x2="165" y2="70" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#accArr)"/>
      
      <!-- Potential Difference V -->
      <line x1="25" y1="150" x2="185" y2="150" stroke="#d97706" stroke-width="2"/>
      <circle cx="105" cy="150" r="14" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <text x="105" y="154" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">V</text>
      <text x="105" y="178" fill="#78350f" font-size="10" font-weight="semibold" text-anchor="middle">Potential Difference (Volts)</text>

      <!-- Emerging Wave -->
      <path d="M 195 70 Q 210 50 225 70 T 255 70 T 285 70" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    </g>

    <!-- Formula Derivation Card -->
    <g transform="translate(370, 50)">
      <rect x="0" y="0" width="220" height="205" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="110" y="24" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">DERIVATION &amp; SHORTCUT</text>
      <line x1="15" y1="34" x2="205" y2="34" stroke="#e2e8f0"/>

      <text x="15" y="55" fill="#475569" font-size="10">1. Work done by field: <tspan font-weight="bold" fill="#0f172a">K = eV</tspan></text>
      <text x="15" y="78" fill="#475569" font-size="10">2. Momentum: <tspan font-weight="bold" fill="#0f172a">p = √(2m_e eV)</tspan></text>
      <text x="15" y="105" fill="#475569" font-size="10">3. Wavelength: <tspan font-weight="bold" fill="#2563eb">λ = h / √(2m_e eV)</tspan></text>

      <!-- Standard Shortcut Box -->
      <rect x="10" y="125" width="200" height="68" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
      <text x="110" y="145" fill="#78350f" font-size="10" font-weight="bold" text-anchor="middle">NEET GOLDEN SHORTCUT:</text>
      <text x="110" y="168" fill="#b45309" font-size="14" font-weight="extrabold" text-anchor="middle">λ = 12.27 / √V  Å</text>
      <text x="110" y="184" fill="#78350f" font-size="9" text-anchor="middle">(V in Volts, λ in Ångströms)</text>
    </g>
  </svg>`,

  // 13. Davisson-Germer Experiment (Setup & 54V Peak Scattering at 50°)
  davissonGermerSetup: `<svg viewBox="0 0 660 380" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="660" height="380" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="dgArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
    </defs>

    <text x="330" y="24" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">DAVISSON–GERMER EXPERIMENTAL APPARATUS</text>
    <text x="330" y="40" fill="#64748b" font-size="10" text-anchor="middle">Direct experimental verification of wave nature of electrons (Diffraction from Nickel crystal)</text>

    <!-- Electron Gun -->
    <g transform="translate(60, 80)">
      <rect x="0" y="10" width="70" height="40" fill="#e2e8f0" stroke="#475569" stroke-width="1.5" rx="4"/>
      <!-- Filament (F) -->
      <path d="M 10 30 Q 20 15 30 30 T 50 30" fill="none" stroke="#ef4444" stroke-width="2"/>
      <text x="30" y="65" fill="#dc2626" font-size="9" font-weight="bold" text-anchor="middle">Filament (F)</text>

      <!-- Low Tension Battery -->
      <text x="30" y="4" fill="#64748b" font-size="8" text-anchor="middle">LT Battery</text>

      <!-- Accelerating Anode Cylinder (C) with High Tension Battery -->
      <rect x="80" y="18" width="40" height="24" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
      <text x="100" y="34" fill="#1e293b" font-size="9" font-weight="bold" text-anchor="middle">HT (V)</text>
      <text x="100" y="58" fill="#475569" font-size="8" text-anchor="middle">Anode</text>
    </g>

    <!-- Collimated Incident Electron Beam -->
    <line x1="185" y1="110" x2="330" y2="190" stroke="#2563eb" stroke-width="3" marker-end="url(#dgArr)"/>
    <text x="235" y="135" fill="#1e40af" font-size="11" font-weight="bold" transform="rotate(28 235 135)">Incident Electron Beam</text>

    <!-- Target: Nickel (Ni) Crystal -->
    <g transform="translate(320, 180)">
      <rect x="0" y="0" width="30" height="120" rx="3" fill="#64748b" stroke="#334155" stroke-width="2"/>
      <!-- Crystal Lattice Lines -->
      <line x1="0" y1="20" x2="30" y2="20" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="0" y1="40" x2="30" y2="40" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="0" y1="60" x2="30" y2="60" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="0" y1="80" x2="30" y2="80" stroke="#e2e8f0" stroke-width="1.5"/>
      <line x1="0" y1="100" x2="30" y2="100" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="15" y="138" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">Nickel Crystal</text>
      <text x="15" y="152" fill="#64748b" font-size="9" text-anchor="middle">Target (Ni)</text>
    </g>

    <!-- Scattered Electron Beam at θ = 50° -->
    <line x1="330" y1="200" x2="490" y2="110" stroke="#dc2626" stroke-width="3" marker-end="url(#dgArr)"/>
    <text x="430" y="145" fill="#b91c1c" font-size="11" font-weight="bold">Diffracted Beam</text>

    <!-- Scattering Angle θ arc -->
    <path d="M 390 166 A 65 65 0 0 1 405 200" fill="none" stroke="#d97706" stroke-width="2"/>
    <text x="420" y="190" fill="#b45309" font-size="12" font-weight="bold">θ = 50°</text>

    <!-- Movable Collector / Detector on Circular Scale -->
    <g transform="translate(480, 85)">
      <!-- Detector Box -->
      <rect x="0" y="0" width="55" height="35" rx="5" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="27" y="18" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Collector /</text>
      <text x="27" y="29" fill="#78350f" font-size="9" font-weight="bold" text-anchor="middle">Detector</text>
      <!-- Connected Galvanometer -->
      <line x1="55" y1="17" x2="90" y2="17" stroke="#1e293b" stroke-width="1.5"/>
      <circle cx="105" cy="17" r="14" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="105" y="21" fill="#0369a1" font-size="11" font-weight="bold" text-anchor="middle">G</text>
    </g>

    <!-- Circular Graduated Scale Track -->
    <path d="M 520 60 A 240 240 0 0 1 520 300" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="565" y="270" fill="#475569" font-size="10" font-weight="semibold">Circular Scale (0°–90°)</text>

    <!-- Peak Condition Callout Box -->
    <rect x="50" y="290" width="420" height="70" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
    <text x="260" y="310" fill="#065f46" font-size="12" font-weight="bold" text-anchor="middle">PEAK DIFFRACTION CONDITION IN EXPERIMENT:</text>
    <text x="260" y="330" fill="#047857" font-size="11" font-weight="extrabold" text-anchor="middle">Accelerating Voltage V = 54 Volts  |  Scattering Angle θ = 50°</text>
    <text x="260" y="348" fill="#064e3b" font-size="10" text-anchor="middle">λ_theoretical = 12.27/√54 = 1.67 Å  ⟷  λ_experimental (Bragg) = 1.65 Å (Flawless Match!)</text>
  </svg>`,

  // 14. Electron Diffraction (Bragg Reflection Mechanism)
  electronDiffractionBragg: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="280" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <defs>
      <marker id="brgArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
    </defs>

    <text x="300" y="24" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">BRAGG'S DIFFRACTION LAW FOR ELECTRON MATTER WAVES</text>
    <text x="300" y="40" fill="#64748b" font-size="10" text-anchor="middle">Constructive interference when Path Difference = 2d sin ϕ = nλ</text>

    <!-- Lattice Planes (Two parallel rows of atoms) -->
    <!-- Plane 1 -->
    <g transform="translate(100, 130)">
      <line x1="0" y1="0" x2="400" y2="0" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
      <circle cx="40" cy="0" r="7" fill="#64748b"/><circle cx="120" cy="0" r="7" fill="#64748b"/><circle cx="200" cy="0" r="7" fill="#2563eb"/><circle cx="280" cy="0" r="7" fill="#64748b"/><circle cx="360" cy="0" r="7" fill="#64748b"/>
      <text x="-30" y="4" fill="#475569" font-size="10" font-weight="bold">Plane 1</text>
    </g>

    <!-- Plane 2 (Separated by interplanar spacing d) -->
    <g transform="translate(100, 200)">
      <line x1="0" y1="0" x2="400" y2="0" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
      <circle cx="40" cy="0" r="7" fill="#64748b"/><circle cx="120" cy="0" r="7" fill="#64748b"/><circle cx="200" cy="0" r="7" fill="#2563eb"/><circle cx="280" cy="0" r="7" fill="#64748b"/><circle cx="360" cy="0" r="7" fill="#64748b"/>
      <text x="-30" y="4" fill="#475569" font-size="10" font-weight="bold">Plane 2</text>
    </g>

    <!-- Interplanar Spacing d -->
    <line x1="80" y1="130" x2="80" y2="200" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="75" y1="130" x2="85" y2="130" stroke="#dc2626" stroke-width="1.5"/>
    <line x1="75" y1="200" x2="85" y2="200" stroke="#dc2626" stroke-width="1.5"/>
    <text x="70" y="168" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="end">d = 0.91 Å</text>

    <!-- Ray 1 reflecting from Plane 1 atom (200, 130) -->
    <line x1="200" y1="65" x2="300" y2="130" stroke="#2563eb" stroke-width="2.5" marker-end="url(#brgArr)"/>
    <line x1="300" y1="130" x2="400" y2="65" stroke="#2563eb" stroke-width="2.5" marker-end="url(#brgArr)"/>

    <!-- Ray 2 reflecting from Plane 2 atom (200, 200) -->
    <line x1="165" y1="65" x2="300" y2="200" stroke="#2563eb" stroke-width="2.5" marker-end="url(#brgArr)"/>
    <line x1="300" y1="200" x2="435" y2="65" stroke="#2563eb" stroke-width="2.5" marker-end="url(#brgArr)"/>

    <!-- Glancing Angle ϕ -->
    <text x="245" y="120" fill="#d97706" font-size="11" font-weight="bold">ϕ = 65°</text>
    <text x="350" y="120" fill="#d97706" font-size="11" font-weight="bold">ϕ</text>

    <!-- Path Difference Formula Tag -->
    <rect x="250" y="235" width="310" height="34" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
    <text x="405" y="256" fill="#78350f" font-size="12" font-weight="extrabold" text-anchor="middle">Bragg's Law: 2d sin ϕ = nλ  (n = 1)</text>
  </svg>`,

  // 15. Wave-Particle Duality Synthesis / Complementarity
  dualityComplementarity: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="640" height="320" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="320" y="26" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">WAVE-PARTICLE DUALITY OF NATURE</text>
    <text x="320" y="42" fill="#64748b" font-size="10" text-anchor="middle">Symmetry of the Universe: Both Radiation and Matter possess complementary Wave &amp; Particle aspects</text>

    <!-- Left Column: Light / Radiation -->
    <g transform="translate(40, 60)">
      <rect x="0" y="0" width="260" height="235" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
      <rect x="0" y="0" width="260" height="36" rx="8 8 0 0" fill="#3b82f6"/>
      <text x="130" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">LIGHT / EM RADIATION</text>

      <rect x="15" y="50" width="230" height="75" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
      <text x="25" y="70" fill="#1e40af" font-size="11" font-weight="bold">🌊 Wave Nature Dominates in:</text>
      <text x="35" y="90" fill="#1e3a8a" font-size="10">• Interference (Young's Experiment)</text>
      <text x="35" y="106" fill="#1e3a8a" font-size="10">• Diffraction &amp; Polarisation</text>
      <text x="35" y="118" fill="#64748b" font-size="9">Propagation through space</text>

      <rect x="15" y="140" width="230" height="80" rx="6" fill="#fef3c7" stroke="#fcd34d"/>
      <text x="25" y="160" fill="#92400e" font-size="11" font-weight="bold">🎯 Particle Nature Dominates in:</text>
      <text x="35" y="180" fill="#78350f" font-size="10">• Photoelectric Effect (Einstein)</text>
      <text x="35" y="196" fill="#78350f" font-size="10">• Compton Scattering &amp; Emission</text>
      <text x="35" y="210" fill="#64748b" font-size="9">Localized energy exchange (Photon: E=hν)</text>
    </g>

    <!-- Right Column: Matter / Particles -->
    <g transform="translate(340, 60)">
      <rect x="0" y="0" width="260" height="235" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
      <rect x="0" y="0" width="260" height="36" rx="8 8 0 0" fill="#10b981"/>
      <text x="130" y="23" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">MATTER / PARTICLES (e⁻, p, n)</text>

      <rect x="15" y="50" width="230" height="75" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
      <text x="25" y="70" fill="#065f46" font-size="11" font-weight="bold">🎯 Particle Nature Dominates in:</text>
      <text x="35" y="90" fill="#047857" font-size="10">• Classical Mechanics &amp; Collisions</text>
      <text x="35" y="106" fill="#047857" font-size="10">• Cathode Ray Deflection (e/m)</text>
      <text x="35" y="118" fill="#64748b" font-size="9">Definite mass, position &amp; trajectory</text>

      <rect x="15" y="140" width="230" height="80" rx="6" fill="#ede9fe" stroke="#c4b5fd"/>
      <text x="25" y="160" fill="#5b21b6" font-size="11" font-weight="bold">🌊 Wave Nature Dominates in:</text>
      <text x="35" y="180" fill="#4c1d95" font-size="10">• Davisson–Germer Experiment</text>
      <text x="35" y="196" fill="#4c1d95" font-size="10">• Electron Microscope (sub-Å res)</text>
      <text x="35" y="210" fill="#64748b" font-size="9">Matter wavelength λ = h/p</text>
    </g>
  </svg>`
};
