// Mobile-optimized, scientifically accurate vector SVGs for Class 12 Chapter 14: Semiconductor Electronics

export const SEMI_SVGS = {
  // 1. Concept Flow Diagram
  conceptFlow: `<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="760" height="300" fill="#0f172a" rx="16"/>
    <text x="380" y="30" fill="#38bdf8" font-size="15" font-weight="900" text-anchor="middle" letter-spacing="1">SEMICONDUCTOR ELECTRONICS — CONCEPTUAL CHAIN</text>
    
    <!-- Row 1: Solids to Extrinsic -->
    <rect x="20" y="55" width="100" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="70" y="80" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">1. Solids</text>
    <path d="M120 76 L145 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="145" y="55" width="125" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="207" y="80" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">2. Energy Bands</text>
    <path d="M270 76 L295 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="295" y="55" width="135" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="362" y="80" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">3. Classification</text>
    <path d="M430 76 L455 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="455" y="55" width="135" height="42" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="8"/>
    <text x="522" y="80" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">4. Pure Si / Ge</text>
    <path d="M590 76 L615 76" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="615" y="55" width="125" height="42" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" rx="8"/>
    <text x="677" y="80" fill="#fef3c7" font-size="11" font-weight="bold" text-anchor="middle">5. Doping</text>
    
    <!-- Transition to row 2 -->
    <path d="M677 97 L677 125 L615 125" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    
    <!-- Row 2: Extrinsic to Rectification -->
    <rect x="480" y="115" width="135" height="42" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" rx="8"/>
    <text x="547" y="140" fill="#fef3c7" font-size="11" font-weight="bold" text-anchor="middle">6. n-type / p-type</text>
    <path d="M480 136 L450 136" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="305" y="115" width="145" height="42" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="8"/>
    <text x="377" y="140" fill="#d1fae5" font-size="11" font-weight="bold" text-anchor="middle">7. p–n Junction</text>
    <path d="M305 136 L275 136" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="135" y="115" width="140" height="42" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="8"/>
    <text x="205" y="140" fill="#d1fae5" font-size="11" font-weight="bold" text-anchor="middle">8. p–n Diode</text>
    <path d="M135 136 L105 136" stroke="#64748b" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <rect x="20" y="115" width="85" height="42" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5" rx="8"/>
    <text x="62" y="140" fill="#ede9fe" font-size="10" font-weight="bold" text-anchor="middle">9. Rectifier</text>
    
    <!-- Transition to row 3 -->
    <path d="M62 157 L62 185 L120 185" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arr-purple)"/>
    
    <!-- Row 3: Special Devices & Logic -->
    <rect x="120" y="175" width="150" height="42" fill="#1e293b" stroke="#ec4899" stroke-width="1.5" rx="8"/>
    <text x="195" y="200" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">10. Zener Regulator</text>
    <path d="M270 196 L310 196" stroke="#64748b" stroke-width="2" marker-end="url(#arr-pink)"/>
    
    <rect x="310" y="175" width="220" height="42" fill="#1e293b" stroke="#e11d48" stroke-width="1.5" rx="8"/>
    <text x="420" y="200" fill="#fecdd3" font-size="11" font-weight="bold" text-anchor="middle">11. LED / Photo / Solar Cell</text>
    <path d="M530 196 L570 196" stroke="#64748b" stroke-width="2" marker-end="url(#arr-rose)"/>
    
    <rect x="570" y="175" width="170" height="42" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" rx="8"/>
    <text x="655" y="200" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">12. Logic Gates</text>
    
    <!-- Bottom insight box -->
    <rect x="20" y="235" width="720" height="50" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="380" y="255" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">⚡ Why Semiconductors Revolutionised Electronics:</text>
    <text x="380" y="272" fill="#94a3b8" font-size="10" text-anchor="middle">No vacuum/filament heating, ultra-compact microchips, low power consumption, virtually infinite lifespan, high switching speed.</text>
    
    <defs>
      <marker id="arr-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/></marker>
      <marker id="arr-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b"/></marker>
      <marker id="arr-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#8b5cf6"/></marker>
      <marker id="arr-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#ec4899"/></marker>
      <marker id="arr-rose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9 z" fill="#e11d48"/></marker>
    </defs>
  </svg>`,

  // 2. Energy Bands: Conductor, Insulator, Semiconductor
  bandComparison: `<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="720" height="300" fill="#0f172a" rx="14"/>
    <text x="360" y="28" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">ENERGY BANDS: CONDUCTOR VS INSULATOR VS SEMICONDUCTOR</text>
    
    <!-- Panel 1: Conductor -->
    <rect x="25" y="45" width="200" height="235" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" rx="10"/>
    <text x="125" y="70" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">1. CONDUCTOR</text>
    <!-- Overlapping bands -->
    <rect x="50" y="95" width="150" height="60" fill="#3b82f6" fill-opacity="0.4" stroke="#60a5fa" rx="4"/>
    <text x="125" y="125" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Conduction Band (CB)</text>
    <rect x="50" y="130" width="150" height="60" fill="#1d4ed8" fill-opacity="0.6" stroke="#3b82f6" rx="4"/>
    <text x="125" y="165" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Valence Band (VB)</text>
    <!-- Label -->
    <rect x="40" y="200" width="170" height="40" fill="#0f172a" rx="6"/>
    <text x="125" y="218" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Band Gap E_g ≈ 0 eV</text>
    <text x="125" y="233" fill="#94a3b8" font-size="9" text-anchor="middle">Bands overlap; abundant free e⁻</text>
    <text x="125" y="265" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">e.g. Copper (Cu), Aluminium (Al)</text>
    
    <!-- Panel 2: Insulator -->
    <rect x="260" y="45" width="200" height="235" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" rx="10"/>
    <text x="360" y="70" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">2. INSULATOR</text>
    <!-- Empty CB -->
    <rect x="285" y="90" width="150" height="40" fill="#334155" stroke="#64748b" rx="4"/>
    <text x="360" y="115" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">Empty CB</text>
    <!-- Forbidden Gap -->
    <line x1="360" y1="130" x2="360" y2="180" stroke="#f87171" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="360" y="158" fill="#ef4444" font-size="11" font-weight="900" text-anchor="middle">E_g &gt; 3 eV (Large)</text>
    <!-- Filled VB -->
    <rect x="285" y="180" width="150" height="45" fill="#b91c1c" fill-opacity="0.5" stroke="#ef4444" rx="4"/>
    <text x="360" y="208" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Completely Full VB</text>
    <!-- Label -->
    <rect x="275" y="235" width="170" height="35" fill="#0f172a" rx="6"/>
    <text x="360" y="252" fill="#cbd5e1" font-size="9" text-anchor="middle">No e⁻ can jump to CB</text>
    <text x="360" y="265" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">e.g. Diamond (6 eV), Glass</text>
    
    <!-- Panel 3: Semiconductor -->
    <rect x="495" y="45" width="200" height="235" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="10"/>
    <text x="595" y="70" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">3. SEMICONDUCTOR</text>
    <!-- Partial CB -->
    <rect x="520" y="90" width="150" height="40" fill="#065f46" stroke="#10b981" rx="4"/>
    <text x="595" y="115" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">CB (Few e⁻ at 300 K)</text>
    <!-- Moderate Gap -->
    <line x1="595" y1="130" x2="595" y2="175" stroke="#34d399" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="595" y="155" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">E_g &lt; 3 eV (Small)</text>
    <!-- Partial VB -->
    <rect x="520" y="175" width="150" height="45" fill="#047857" fill-opacity="0.6" stroke="#10b981" rx="4"/>
    <text x="595" y="202" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">VB (Leaves Holes)</text>
    <!-- Label -->
    <rect x="510" y="230" width="170" height="40" fill="#0f172a" rx="6"/>
    <text x="595" y="248" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">Si: 1.1 eV | Ge: 0.72 eV</text>
    <text x="595" y="262" fill="#6ee7b7" font-size="9" text-anchor="middle">Conductivity rises with T (α &lt; 0)</text>
  </svg>`,

  // 3. Intrinsic Silicon Lattice & Electron-Hole Pair Generation
  intrinsicLattice: `<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="620" height="280" fill="#0f172a" rx="14"/>
    <text x="310" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">INTRINSIC SILICON LATTICE (n_e = n_h = n_i)</text>
    
    <!-- 3x3 Si Lattice -->
    <!-- Row 1 -->
    <circle cx="100" cy="80" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="100" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    <line x1="118" y1="80" x2="202" y2="80" stroke="#64748b" stroke-width="2"/>
    <circle cx="220" cy="80" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="220" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    <line x1="238" y1="80" x2="322" y2="80" stroke="#64748b" stroke-width="2"/>
    <circle cx="340" cy="80" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="340" y="85" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    
    <!-- Vertical Bonds 1-2 -->
    <line x1="100" y1="98" x2="100" y2="142" stroke="#64748b" stroke-width="2"/>
    <line x1="220" y1="98" x2="220" y2="142" stroke="#64748b" stroke-width="2"/>
    <line x1="340" y1="98" x2="340" y2="142" stroke="#64748b" stroke-width="2"/>
    
    <!-- Row 2 -->
    <circle cx="100" cy="160" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="100" y="165" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    <line x1="118" y1="160" x2="202" y2="160" stroke="#64748b" stroke-width="2"/>
    <circle cx="220" cy="160" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="220" y="165" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    <line x1="238" y1="160" x2="322" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="340" cy="160" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="340" y="165" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    
    <!-- Thermal Breakout & Hole creation -->
    <circle cx="270" cy="160" r="7" fill="none" stroke="#ec4899" stroke-width="2.5"/>
    <text x="270" y="180" fill="#f472b6" font-size="9" font-weight="bold" text-anchor="middle">Hole (h⁺)</text>
    
    <!-- Free electron escaped -->
    <path d="M280 155 Q300 120 290 105" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2 2"/>
    <circle cx="290" cy="105" r="6" fill="#f59e0b"/>
    <text x="290" y="109" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">e⁻</text>
    <text x="320" y="112" fill="#fef08a" font-size="9" font-weight="bold">Free Conduction e⁻</text>
    
    <!-- Vertical Bonds 2-3 -->
    <line x1="100" y1="178" x2="100" y2="222" stroke="#64748b" stroke-width="2"/>
    <line x1="220" y1="178" x2="220" y2="222" stroke="#64748b" stroke-width="2"/>
    <line x1="340" y1="178" x2="340" y2="222" stroke="#64748b" stroke-width="2"/>
    
    <!-- Row 3 -->
    <circle cx="100" cy="240" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="100" y="245" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    <line x1="118" y1="240" x2="202" y2="240" stroke="#64748b" stroke-width="2"/>
    <circle cx="220" cy="240" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="220" y="245" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    <line x1="238" y1="240" x2="322" y2="240" stroke="#64748b" stroke-width="2"/>
    <circle cx="340" cy="240" r="18" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="340" y="245" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Si</text>
    
    <!-- Right Explanation Card -->
    <rect x="400" y="55" width="200" height="205" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="500" y="80" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">INTRINSIC PROPERTIES</text>
    <text x="415" y="105" fill="#e2e8f0" font-size="10">• Pure crystal (T = 0 K ➔ Insulator)</text>
    <text x="415" y="125" fill="#e2e8f0" font-size="10">• At T &gt; 0 K: Thermal vibrations</text>
    <text x="415" y="140" fill="#e2e8f0" font-size="10">  break covalent bonds.</text>
    <text x="415" y="160" fill="#fef08a" font-size="10" font-weight="bold">• Creates e⁻-hole pair simultaneously:</text>
    <text x="450" y="180" fill="#38bdf8" font-size="13" font-weight="900">n_e = n_h = n_i</text>
    <line x1="410" y1="195" x2="590" y2="195" stroke="#334155"/>
    <text x="500" y="215" fill="#cbd5e1" font-size="9" text-anchor="middle">Total Current I = I_e + I_h</text>
    <text x="500" y="235" fill="#94a3b8" font-size="9" text-anchor="middle">Both electrons &amp; holes conduct!</text>
  </svg>`,

  // 4. Sequential Hole Movement
  holeMotion: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="600" height="240" fill="#0f172a" rx="14"/>
    <text x="300" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">MECHANISM OF HOLE MOTION IN SEMICONDUCTORS</text>
    
    <!-- State 1 -->
    <rect x="25" y="45" width="160" height="150" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="105" y="68" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Step 1: Hole at Site A</text>
    <circle cx="65" cy="110" r="14" fill="#0f172a" stroke="#ec4899" stroke-width="2.5"/><text x="65" y="114" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">h⁺ (A)</text>
    <circle cx="145" cy="110" r="14" fill="#3b82f6"/><text x="145" y="114" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">e⁻ (B)</text>
    <text x="105" y="165" fill="#94a3b8" font-size="9" text-anchor="middle">Bond A is missing an e⁻</text>
    
    <!-- Arrow 1->2 -->
    <path d="M195 120 L225 120" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    
    <!-- State 2 -->
    <rect x="235" y="45" width="160" height="150" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="315" y="68" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Step 2: e⁻ Jumps B ➔ A</text>
    <path d="M355 100 Q315 75 275 100" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="275" cy="110" r="14" fill="#3b82f6"/><text x="275" y="114" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">e⁻</text>
    <circle cx="355" cy="110" r="14" fill="#0f172a" stroke="#ec4899" stroke-width="2.5"/><text x="355" y="114" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">h⁺ (B)</text>
    <text x="315" y="165" fill="#94a3b8" font-size="9" text-anchor="middle">Electron fills vacancy at A</text>
    
    <!-- Arrow 2->3 -->
    <path d="M405 120 L435 120" stroke="#10b981" stroke-width="2" marker-end="url(#arr-cyan)"/>
    
    <!-- State 3 / Summary -->
    <rect x="445" y="45" width="135" height="150" fill="#1e293b" stroke="#10b981" rx="8"/>
    <text x="512" y="68" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Step 3: Result</text>
    <text x="512" y="100" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">Hole moved</text>
    <text x="512" y="115" fill="#f472b6" font-size="10" font-weight="bold" text-anchor="middle">A ➔ B (Right ➔)</text>
    <text x="512" y="145" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Electron moved</text>
    <text x="512" y="160" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">B ➔ A (Left ⬅)</text>
    
    <!-- NEET Trap warning bottom -->
    <rect x="25" y="202" width="555" height="28" fill="#0f172a" stroke="#ef4444" rx="6"/>
    <text x="300" y="220" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">⚠️ NEET Trap: A hole is NOT a moving free proton; it is an effective positive bubble of missing electron!</text>
  </svg>`,

  // 5. n-type and p-type Lattice Doping
  dopingLattice: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="680" height="280" fill="#0f172a" rx="14"/>
    <text x="340" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">EXTRINSIC SEMICONDUCTORS: n-TYPE (DONOR) VS p-TYPE (ACCEPTOR)</text>
    
    <!-- Left: n-Type (Phosphorus in Si) -->
    <rect x="25" y="45" width="300" height="215" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="10"/>
    <text x="175" y="68" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">n-TYPE: Pentavalent Impurity (P / As / Sb)</text>
    
    <!-- Center P atom -->
    <circle cx="175" cy="140" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
    <text x="175" y="145" fill="#fff" font-size="13" font-weight="900" text-anchor="middle">P (+5)</text>
    
    <!-- Surrounding Si atoms -->
    <circle cx="105" cy="140" r="15" fill="#0f172a" stroke="#64748b"/><text x="105" y="144" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    <circle cx="245" cy="140" r="15" fill="#0f172a" stroke="#64748b"/><text x="245" y="144" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    <circle cx="175" cy="85" r="15" fill="#0f172a" stroke="#64748b"/><text x="175" y="89" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    <circle cx="175" cy="195" r="15" fill="#0f172a" stroke="#64748b"/><text x="175" y="199" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    
    <!-- 4 Covalent Bonds formed -->
    <line x1="120" y1="140" x2="153" y2="140" stroke="#64748b" stroke-width="2"/>
    <line x1="197" y1="140" x2="230" y2="140" stroke="#64748b" stroke-width="2"/>
    <line x1="175" y1="100" x2="175" y2="118" stroke="#64748b" stroke-width="2"/>
    <line x1="175" y1="162" x2="175" y2="180" stroke="#64748b" stroke-width="2"/>
    
    <!-- 5th loosely bound electron -->
    <circle cx="215" cy="105" r="7" fill="#f59e0b"/><text x="215" y="109" fill="#000" font-size="8" font-weight="900" text-anchor="middle">e⁻</text>
    <text x="255" y="100" fill="#fef08a" font-size="9" font-weight="bold">5th Extra e⁻</text>
    <text x="255" y="112" fill="#cbd5e1" font-size="8">(E_d ≈ 0.01-0.05 eV)</text>
    
    <!-- n-Type Legend -->
    <text x="175" y="235" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Majority: Electrons (n_e ≫ n_h)</text>
    <text x="175" y="250" fill="#94a3b8" font-size="9" text-anchor="middle">Electrically Neutral Overall!</text>
    
    <!-- Right: p-Type (Boron in Si) -->
    <rect x="355" y="45" width="300" height="215" fill="#1e293b" stroke="#ec4899" stroke-width="1.5" rx="10"/>
    <text x="505" y="68" fill="#ec4899" font-size="12" font-weight="bold" text-anchor="middle">p-TYPE: Trivalent Impurity (B / Al / Ga / In)</text>
    
    <!-- Center B atom -->
    <circle cx="505" cy="140" r="22" fill="#db2777" stroke="#ec4899" stroke-width="2"/>
    <text x="505" y="145" fill="#fff" font-size="13" font-weight="900" text-anchor="middle">B (+3)</text>
    
    <!-- Surrounding Si atoms -->
    <circle cx="435" cy="140" r="15" fill="#0f172a" stroke="#64748b"/><text x="435" y="144" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    <circle cx="575" cy="140" r="15" fill="#0f172a" stroke="#64748b"/><text x="575" y="144" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    <circle cx="505" cy="85" r="15" fill="#0f172a" stroke="#64748b"/><text x="505" y="89" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    <circle cx="505" cy="195" r="15" fill="#0f172a" stroke="#64748b"/><text x="505" y="199" fill="#94a3b8" font-size="10" text-anchor="middle">Si</text>
    
    <!-- 3 Bonds formed + 1 Vacancy -->
    <line x1="450" y1="140" x2="483" y2="140" stroke="#64748b" stroke-width="2"/>
    <line x1="505" y1="100" x2="505" y2="118" stroke="#64748b" stroke-width="2"/>
    <line x1="505" y1="162" x2="505" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="527" y1="140" x2="560" y2="140" stroke="#ec4899" stroke-width="2" stroke-dasharray="3 3"/>
    
    <!-- Hole created at missing 4th electron -->
    <circle cx="545" cy="140" r="8" fill="#0f172a" stroke="#ec4899" stroke-width="2.5"/>
    <text x="545" y="125" fill="#f472b6" font-size="9" font-weight="bold" text-anchor="middle">Hole Created</text>
    <text x="545" y="165" fill="#cbd5e1" font-size="8" text-anchor="middle">(Vacant Bond)</text>
    
    <!-- p-Type Legend -->
    <text x="505" y="235" fill="#ec4899" font-size="11" font-weight="bold" text-anchor="middle">Majority: Holes (n_h ≫ n_e)</text>
    <text x="505" y="250" fill="#94a3b8" font-size="9" text-anchor="middle">Electrically Neutral Overall!</text>
  </svg>`,

  // 6. Energy Band Diagrams for Extrinsic Semiconductors (Donor & Acceptor Levels)
  donorAcceptorBands: `<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="680" height="260" fill="#0f172a" rx="14"/>
    <text x="340" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">DONOR LEVEL (n-TYPE) VS ACCEPTOR LEVEL (p-TYPE)</text>
    
    <!-- n-Type Band Diagram -->
    <rect x="35" y="45" width="280" height="195" fill="#1e293b" stroke="#38bdf8" rx="8"/>
    <text x="175" y="68" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">n-TYPE SEMICONDUCTOR</text>
    
    <!-- CB -->
    <rect x="55" y="85" width="240" height="30" fill="#0284c7" fill-opacity="0.4" stroke="#38bdf8" rx="4"/>
    <text x="175" y="104" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Conduction Band (CB)</text>
    
    <!-- Donor Level E_d just below CB -->
    <line x1="55" y1="130" x2="295" y2="130" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="175" y="125" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">- - - - Donor Energy Level E_d - - - -</text>
    <text x="175" y="145" fill="#f59e0b" font-size="9" text-anchor="middle">ΔE ≈ 0.01 eV (Ge) / 0.05 eV (Si) below CB</text>
    
    <!-- VB -->
    <rect x="55" y="175" width="240" height="30" fill="#1e3a8a" fill-opacity="0.6" stroke="#3b82f6" rx="4"/>
    <text x="175" y="194" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Valence Band (VB)</text>
    <text x="175" y="225" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">e⁻ jump easily from E_d into CB at 300 K</text>
    
    <!-- p-Type Band Diagram -->
    <rect x="365" y="45" width="280" height="195" fill="#1e293b" stroke="#ec4899" rx="8"/>
    <text x="505" y="68" fill="#ec4899" font-size="12" font-weight="bold" text-anchor="middle">p-TYPE SEMICONDUCTOR</text>
    
    <!-- CB -->
    <rect x="385" y="85" width="240" height="30" fill="#0284c7" fill-opacity="0.4" stroke="#64748b" rx="4"/>
    <text x="505" y="104" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Conduction Band (CB)</text>
    
    <!-- Acceptor Level E_a just above VB -->
    <line x1="385" y1="160" x2="625" y2="160" stroke="#ec4899" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="505" y="155" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">- - - - Acceptor Energy Level E_a - - - -</text>
    <text x="505" y="172" fill="#f472b6" font-size="9" text-anchor="middle">ΔE ≈ 0.01 eV (Ge) / 0.05 eV (Si) above VB</text>
    
    <!-- VB -->
    <rect x="385" y="175" width="240" height="30" fill="#831843" fill-opacity="0.6" stroke="#ec4899" rx="4"/>
    <text x="505" y="194" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Valence Band (VB)</text>
    <text x="505" y="225" fill="#ec4899" font-size="10" font-weight="bold" text-anchor="middle">e⁻ from VB jump easily into E_a, leaving holes</text>
  </svg>`,

  // 7. p–n Junction Formation & Depletion Region
  pnJunctionFormation: `<svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="660" height="300" fill="#0f172a" rx="14"/>
    <text x="330" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">p–n JUNCTION FORMATION, DEPLETION LAYER &amp; POTENTIAL BARRIER</text>
    
    <!-- Main Junction Box -->
    <rect x="50" y="45" width="560" height="150" fill="#1e293b" stroke="#64748b" stroke-width="2" rx="10"/>
    
    <!-- p-region (Left) -->
    <rect x="50" y="45" width="200" height="150" fill="#db2777" fill-opacity="0.15" rx="10 0 0 10"/>
    <text x="150" y="70" fill="#ec4899" font-size="14" font-weight="900" text-anchor="middle">p-REGION</text>
    <!-- Holes & Immobile Acceptor Ions -->
    <circle cx="85" cy="100" r="10" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><text x="85" y="104" fill="#ec4899" font-size="9" font-weight="bold" text-anchor="middle">h⁺</text>
    <circle cx="140" cy="100" r="10" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><text x="140" y="104" fill="#ec4899" font-size="9" font-weight="bold" text-anchor="middle">h⁺</text>
    <circle cx="195" cy="100" r="10" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><text x="195" y="104" fill="#ec4899" font-size="9" font-weight="bold" text-anchor="middle">h⁺</text>
    <circle cx="110" cy="140" r="10" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><text x="110" y="144" fill="#ec4899" font-size="9" font-weight="bold" text-anchor="middle">h⁺</text>
    <circle cx="165" cy="140" r="10" fill="#0f172a" stroke="#ec4899" stroke-width="2"/><text x="165" y="144" fill="#ec4899" font-size="9" font-weight="bold" text-anchor="middle">h⁺</text>
    
    <!-- Depletion Region (Center) -->
    <rect x="250" y="45" width="160" height="150" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-dasharray="3 3"/>
    <text x="330" y="65" fill="#f59e0b" font-size="11" font-weight="900" text-anchor="middle">DEPLETION LAYER (d ≈ 1 µm)</text>
    
    <!-- Immobile Negative Ions (p-side) -->
    <circle cx="280" cy="100" r="11" fill="#b91c1c"/><text x="280" y="104" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">−</text>
    <circle cx="280" cy="140" r="11" fill="#b91c1c"/><text x="280" y="144" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">−</text>
    <!-- Immobile Positive Ions (n-side) -->
    <circle cx="380" cy="100" r="11" fill="#0284c7"/><text x="380" y="104" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">+</text>
    <circle cx="380" cy="140" r="11" fill="#0284c7"/><text x="380" y="144" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">+</text>
    
    <!-- Built-in Electric Field E_bi (n ➔ p) -->
    <line x1="370" y1="165" x2="290" y2="165" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-amber)"/>
    <text x="330" y="182" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">Built-in E-field (n ➔ p)</text>
    
    <!-- n-region (Right) -->
    <rect x="410" y="45" width="200" height="150" fill="#0284c7" fill-opacity="0.15" rx="0 10 10 0"/>
    <text x="510" y="70" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">n-REGION</text>
    <!-- Free Electrons -->
    <circle cx="450" cy="100" r="8" fill="#38bdf8"/><text x="450" y="104" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">e⁻</text>
    <circle cx="505" cy="100" r="8" fill="#38bdf8"/><text x="505" y="104" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">e⁻</text>
    <circle cx="560" cy="100" r="8" fill="#38bdf8"/><text x="560" y="104" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">e⁻</text>
    <circle cx="475" cy="140" r="8" fill="#38bdf8"/><text x="475" y="144" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">e⁻</text>
    <circle cx="530" cy="140" r="8" fill="#38bdf8"/><text x="530" y="144" fill="#000" font-size="8" font-weight="bold" text-anchor="middle">e⁻</text>
    
    <!-- Barrier Potential Curve Below -->
    <line x1="50" y1="280" x2="610" y2="280" stroke="#475569" stroke-width="1.5"/>
    <path d="M60 270 L250 270 Q330 250 410 215 L600 215" fill="none" stroke="#10b981" stroke-width="3"/>
    
    <text x="150" y="260" fill="#ec4899" font-size="10" font-weight="bold" text-anchor="middle">Low Potential (p-side)</text>
    <text x="510" y="205" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">High Potential (n-side)</text>
    
    <!-- Barrier Height V_0 -->
    <line x1="330" y1="270" x2="330" y2="215" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="345" y="245" fill="#fef08a" font-size="12" font-weight="900">Barrier V₀ (Si ≈ 0.7 V, Ge ≈ 0.3 V)</text>
  </svg>`,

  // 8. Forward and Reverse Biasing Circuit & Energy Barrier
  biasingCircuits: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="700" height="280" fill="#0f172a" rx="14"/>
    <text x="350" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">p–n JUNCTION BIASING: FORWARD BIAS VS REVERSE BIAS</text>
    
    <!-- Left: Forward Bias -->
    <rect x="25" y="45" width="310" height="220" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="10"/>
    <text x="180" y="68" fill="#34d399" font-size="13" font-weight="900" text-anchor="middle">FORWARD BIAS (p ➔ +, n ➔ −)</text>
    
    <!-- Diode block in forward -->
    <rect x="80" y="90" width="80" height="45" fill="#db2777" fill-opacity="0.4" stroke="#ec4899"/>
    <text x="120" y="117" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">p (+)</text>
    <rect x="160" y="90" width="20" height="45" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-dasharray="2 2"/>
    <rect x="180" y="90" width="80" height="45" fill="#0284c7" fill-opacity="0.4" stroke="#38bdf8"/>
    <text x="220" y="117" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">n (−)</text>
    
    <!-- Circuit lines -->
    <line x1="80" y1="112" x2="50" y2="112" stroke="#64748b" stroke-width="2"/>
    <line x1="50" y1="112" x2="50" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="50" y1="180" x2="140" y2="180" stroke="#64748b" stroke-width="2"/>
    
    <!-- Battery Forward (+ on left, - on right) -->
    <line x1="140" y1="165" x2="140" y2="195" stroke="#10b981" stroke-width="3"/>
    <line x1="150" y1="172" x2="150" y2="188" stroke="#10b981" stroke-width="2"/>
    <text x="135" y="160" fill="#10b981" font-size="10" font-weight="bold">+</text>
    <text x="155" y="160" fill="#10b981" font-size="10" font-weight="bold">−</text>
    
    <line x1="150" y1="180" x2="290" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="290" y1="180" x2="290" y2="112" stroke="#64748b" stroke-width="2"/>
    <line x1="290" y1="112" x2="260" y2="112" stroke="#64748b" stroke-width="2"/>
    
    <!-- Forward Key Effects -->
    <text x="180" y="215" fill="#d1fae5" font-size="10" font-weight="bold" text-anchor="middle">• Depletion width DECREASES</text>
    <text x="180" y="230" fill="#d1fae5" font-size="10" font-weight="bold" text-anchor="middle">• Barrier height becomes (V₀ − V)</text>
    <text x="180" y="248" fill="#34d399" font-size="11" font-weight="900" text-anchor="middle">Large Forward Current (mA)</text>
    
    <!-- Right: Reverse Bias -->
    <rect x="365" y="45" width="310" height="220" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" rx="10"/>
    <text x="520" y="68" fill="#f87171" font-size="13" font-weight="900" text-anchor="middle">REVERSE BIAS (p ➔ −, n ➔ +)</text>
    
    <!-- Diode block in reverse -->
    <rect x="420" y="90" width="60" height="45" fill="#db2777" fill-opacity="0.4" stroke="#ec4899"/>
    <text x="450" y="117" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">p (−)</text>
    <!-- Wider depletion -->
    <rect x="480" y="90" width="60" height="45" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-dasharray="2 2"/>
    <text x="510" y="117" fill="#fca5a5" font-size="9" text-anchor="middle">Wider Layer</text>
    <rect x="540" y="90" width="60" height="45" fill="#0284c7" fill-opacity="0.4" stroke="#38bdf8"/>
    <text x="570" y="117" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">n (+)</text>
    
    <!-- Circuit lines -->
    <line x1="420" y1="112" x2="390" y2="112" stroke="#64748b" stroke-width="2"/>
    <line x1="390" y1="112" x2="390" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="390" y1="180" x2="480" y2="180" stroke="#64748b" stroke-width="2"/>
    
    <!-- Battery Reverse (- on left, + on right) -->
    <line x1="480" y1="172" x2="480" y2="188" stroke="#ef4444" stroke-width="2"/>
    <line x1="490" y1="165" x2="490" y2="195" stroke="#ef4444" stroke-width="3"/>
    <text x="475" y="160" fill="#ef4444" font-size="10" font-weight="bold">−</text>
    <text x="495" y="160" fill="#ef4444" font-size="10" font-weight="bold">+</text>
    
    <line x1="490" y1="180" x2="630" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="630" y1="180" x2="630" y2="112" stroke="#64748b" stroke-width="2"/>
    <line x1="630" y1="112" x2="600" y2="112" stroke="#64748b" stroke-width="2"/>
    
    <!-- Reverse Key Effects -->
    <text x="520" y="215" fill="#fecdd3" font-size="10" font-weight="bold" text-anchor="middle">• Depletion width INCREASES</text>
    <text x="520" y="230" fill="#fecdd3" font-size="10" font-weight="bold" text-anchor="middle">• Barrier height becomes (V₀ + V)</text>
    <text x="520" y="248" fill="#f87171" font-size="11" font-weight="900" text-anchor="middle">Tiny Saturation Current I_0 (µA / nA)</text>
  </svg>`,

  // 9. Diode Symbol & Physical Configuration
  diodeSymbol: `<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="540" height="180" fill="#0f172a" rx="14"/>
    <text x="270" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">p–n JUNCTION DIODE: CIRCUIT SYMBOL &amp; TERMINALS</text>
    
    <!-- Diode Symbol -->
    <line x1="120" y1="90" x2="210" y2="90" stroke="#38bdf8" stroke-width="3"/>
    <polygon points="210,60 210,120 270,90" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
    <line x1="270" y1="60" x2="270" y2="120" stroke="#ef4444" stroke-width="3.5"/>
    <line x1="270" y1="90" x2="360" y2="90" stroke="#ef4444" stroke-width="3"/>
    
    <!-- Terminal Labels -->
    <text x="100" y="85" fill="#38bdf8" font-size="13" font-weight="900">Anode (A)</text>
    <text x="100" y="105" fill="#94a3b8" font-size="11">(p-side / +)</text>
    
    <text x="375" y="85" fill="#ef4444" font-size="13" font-weight="900">Cathode (K)</text>
    <text x="375" y="105" fill="#94a3b8" font-size="11">(n-side / −)</text>
    
    <!-- Direction of easy forward current -->
    <line x1="200" y1="140" x2="280" y2="140" stroke="#10b981" stroke-width="2" marker-end="url(#arr-cyan)"/>
    <text x="240" y="160" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Direction of Forward Current Flow (Anode ➔ Cathode)</text>
  </svg>`,

  // 10. Complete V–I Characteristic of p–n Junction Diode
  diodeVICharacteristic: `<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="680" height="340" fill="#0f172a" rx="14"/>
    <text x="340" y="24" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">COMPLETE V–I CHARACTERISTIC OF p–n JUNCTION DIODE</text>
    
    <!-- Axes Crossing at Center (340, 170) -->
    <line x1="60" y1="170" x2="620" y2="170" stroke="#64748b" stroke-width="2"/>
    <line x1="340" y1="40" x2="340" y2="310" stroke="#64748b" stroke-width="2"/>
    
    <!-- Axis Labels -->
    <text x="620" y="160" fill="#38bdf8" font-size="12" font-weight="bold">V_F (Volts)</text>
    <text x="60" y="160" fill="#f87171" font-size="12" font-weight="bold">V_R (Volts)</text>
    <text x="350" y="55" fill="#34d399" font-size="12" font-weight="bold">I_F (mA)</text>
    <text x="350" y="300" fill="#f59e0b" font-size="12" font-weight="bold">I_R (µA)</text>
    <text x="325" y="185" fill="#94a3b8" font-size="11">O</text>
    
    <!-- Forward Bias Curve (1st Quadrant) -->
    <!-- Flat until Knee/Threshold voltage, then rises exponentially -->
    <path d="M340 170 Q430 170 450 140 T500 55" fill="none" stroke="#10b981" stroke-width="3.5"/>
    
    <!-- Knee Voltage Markings -->
    <line x1="440" y1="165" x2="440" y2="175" stroke="#fef08a" stroke-width="2"/>
    <text x="440" y="195" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">V_knee (Threshold)</text>
    <text x="440" y="210" fill="#94a3b8" font-size="9" text-anchor="middle">Si ≈ 0.7 V | Ge ≈ 0.3 V</text>
    
    <text x="520" y="90" fill="#34d399" font-size="11" font-weight="bold">Exponential</text>
    <text x="520" y="105" fill="#34d399" font-size="10">Conduction</text>
    
    <!-- Reverse Bias Curve (3rd Quadrant) -->
    <!-- Tiny flat reverse saturation current I_0, then sharp breakdown -->
    <path d="M340 170 L340 178 L180 178 Q150 180 145 280" fill="none" stroke="#ef4444" stroke-width="3"/>
    
    <!-- Reverse Saturation Current Label -->
    <text x="260" y="165" fill="#fca5a5" font-size="10" font-weight="bold">Reverse Saturation I₀ (µA)</text>
    <text x="260" y="195" fill="#94a3b8" font-size="9">(Minority carrier drift)</text>
    
    <!-- Breakdown Voltage V_z / V_br -->
    <line x1="145" y1="165" x2="145" y2="175" stroke="#ef4444" stroke-width="2"/>
    <text x="145" y="150" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">V_BR (Breakdown)</text>
    <text x="90" y="250" fill="#f87171" font-size="10" font-weight="bold">Avalanche / Zener Breakdown</text>
  </svg>`,

  // 11. Half-Wave Rectifier Circuit & Waveforms
  halfWaveRectifier: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="680" height="320" fill="#0f172a" rx="14"/>
    <text x="340" y="24" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">HALF-WAVE RECTIFIER: CIRCUIT &amp; OUTPUT WAVEFORM</text>
    
    <!-- Circuit on Left -->
    <rect x="25" y="45" width="280" height="260" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="165" y="68" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CIRCUIT DIAGRAM</text>
    
    <!-- AC Source -->
    <circle cx="65" cy="140" r="16" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text x="65" y="145" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">~</text>
    <text x="65" y="170" fill="#94a3b8" font-size="9" text-anchor="middle">AC Input</text>
    
    <!-- Transformer Coils -->
    <line x1="65" y1="124" x2="65" y2="100" stroke="#64748b" stroke-width="2"/>
    <line x1="65" y1="100" x2="95" y2="100" stroke="#64748b" stroke-width="2"/>
    <line x1="65" y1="156" x2="65" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="65" y1="180" x2="95" y2="180" stroke="#64748b" stroke-width="2"/>
    
    <!-- Diode Symbol -->
    <polygon points="140,90 140,110 160,100" fill="#10b981" stroke="#34d399"/>
    <line x1="160" y1="90" x2="160" y2="110" stroke="#ef4444" stroke-width="2"/>
    <line x1="95" y1="100" x2="140" y2="100" stroke="#64748b" stroke-width="2"/>
    <line x1="160" y1="100" x2="230" y2="100" stroke="#64748b" stroke-width="2"/>
    
    <!-- Load Resistor R_L -->
    <rect x="220" y="120" width="20" height="40" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="255" y="145" fill="#f59e0b" font-size="10" font-weight="bold">R_L</text>
    <line x1="230" y1="100" x2="230" y2="120" stroke="#64748b" stroke-width="2"/>
    <line x1="230" y1="160" x2="230" y2="180" stroke="#64748b" stroke-width="2"/>
    <line x1="95" y1="180" x2="230" y2="180" stroke="#64748b" stroke-width="2"/>
    
    <text x="165" y="225" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Efficiency η_max = 40.6%</text>
    <text x="165" y="245" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">Output Frequency f_out = f_in</text>
    <text x="165" y="265" fill="#cbd5e1" font-size="9" text-anchor="middle">PIV = V_m</text>
    
    <!-- Waveforms on Right -->
    <rect x="320" y="45" width="335" height="260" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="487" y="68" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">WAVEFORMS</text>
    
    <!-- Input AC Waveform -->
    <text x="335" y="90" fill="#38bdf8" font-size="10" font-weight="bold">Input AC Voltage v_i:</text>
    <line x1="340" y1="120" x2="630" y2="120" stroke="#64748b" stroke-width="1.5"/>
    <path d="M350 120 Q380 80 410 120 Q440 160 470 120 Q500 80 530 120 Q560 160 590 120" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    
    <!-- Output Rectified DC Waveform -->
    <text x="335" y="195" fill="#10b981" font-size="10" font-weight="bold">Output Pulsating DC v_o across R_L:</text>
    <line x1="340" y1="245" x2="630" y2="245" stroke="#64748b" stroke-width="1.5"/>
    <!-- Half cycles conducted -->
    <path d="M350 245 Q380 205 410 245 L470 245 Q500 205 530 245 L590 245" fill="none" stroke="#10b981" stroke-width="3"/>
    
    <text x="410" y="270" fill="#34d399" font-size="9" text-anchor="middle">Diode ON (+)</text>
    <text x="470" y="270" fill="#ef4444" font-size="9" text-anchor="middle">Diode OFF (−)</text>
    <text x="530" y="270" fill="#34d399" font-size="9" text-anchor="middle">Diode ON (+)</text>
  </svg>`,

  // 12. Full-Wave Center-Tapped Rectifier
  fullWaveRectifier: `<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="680" height="320" fill="#0f172a" rx="14"/>
    <text x="340" y="24" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">FULL-WAVE CENTER-TAPPED RECTIFIER: BOTH HALF-CYCLES CONDUCT</text>
    
    <!-- Circuit on Left -->
    <rect x="25" y="45" width="280" height="260" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="165" y="68" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CENTER-TAPPED CIRCUIT</text>
    
    <!-- Diode 1 (Top) -->
    <polygon points="140,85 140,105 160,95" fill="#10b981" stroke="#34d399"/>
    <line x1="160" y1="85" x2="160" y2="105" stroke="#ef4444" stroke-width="2"/>
    <text x="150" y="80" fill="#34d399" font-size="10" font-weight="bold">D₁</text>
    
    <!-- Diode 2 (Bottom) -->
    <polygon points="140,175 140,195 160,185" fill="#10b981" stroke="#34d399"/>
    <line x1="160" y1="175" x2="160" y2="195" stroke="#ef4444" stroke-width="2"/>
    <text x="150" y="210" fill="#34d399" font-size="10" font-weight="bold">D₂</text>
    
    <!-- Connecting lines & Load -->
    <line x1="160" y1="95" x2="220" y2="95" stroke="#64748b" stroke-width="2"/>
    <line x1="160" y1="185" x2="220" y2="185" stroke="#64748b" stroke-width="2"/>
    <line x1="220" y1="95" x2="220" y2="185" stroke="#64748b" stroke-width="2"/>
    
    <rect x="210" y="125" width="20" height="30" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="245" y="143" fill="#f59e0b" font-size="10" font-weight="bold">R_L</text>
    
    <text x="165" y="240" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Efficiency η_max = 81.2%</text>
    <text x="165" y="260" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Ripple Frequency f_out = 2 f_in</text>
    <text x="165" y="280" fill="#cbd5e1" font-size="9" text-anchor="middle">PIV = 2 V_m</text>
    
    <!-- Waveforms on Right -->
    <rect x="320" y="45" width="335" height="260" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="487" y="68" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">FULL-WAVE RECTIFIED OUTPUT</text>
    
    <!-- Input AC -->
    <line x1="340" y1="110" x2="630" y2="110" stroke="#64748b" stroke-width="1.5"/>
    <path d="M350 110 Q380 75 410 110 Q440 145 470 110 Q500 75 530 110 Q560 145 590 110" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="340" y="85" fill="#38bdf8" font-size="10">Input AC (Freq f)</text>
    
    <!-- Output Full Wave -->
    <line x1="340" y1="220" x2="630" y2="220" stroke="#64748b" stroke-width="1.5"/>
    <path d="M350 220 Q380 175 410 220 Q440 175 470 220 Q500 175 530 220 Q560 175 590 220" fill="none" stroke="#10b981" stroke-width="3"/>
    <text x="340" y="165" fill="#10b981" font-size="10" font-weight="bold">Output across R_L (Freq 2f):</text>
    
    <text x="380" y="245" fill="#34d399" font-size="9" text-anchor="middle">D₁ ON</text>
    <text x="440" y="245" fill="#34d399" font-size="9" text-anchor="middle">D₂ ON</text>
    <text x="500" y="245" fill="#34d399" font-size="9" text-anchor="middle">D₁ ON</text>
    <text x="560" y="245" fill="#34d399" font-size="9" text-anchor="middle">D₂ ON</text>
  </svg>`,

  // 13. Zener Diode Symbol, V–I & Voltage Regulator Circuit
  zenerVoltageRegulator: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="700" height="300" fill="#0f172a" rx="14"/>
    <text x="350" y="24" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">ZENER DIODE AS A DC VOLTAGE REGULATOR</text>
    
    <!-- Zener Symbol on Top Left -->
    <rect x="25" y="45" width="220" height="110" fill="#1e293b" stroke="#ec4899" rx="8"/>
    <text x="135" y="65" fill="#ec4899" font-size="11" font-weight="bold" text-anchor="middle">ZENER SYMBOL</text>
    <line x1="60" y1="100" x2="110" y2="100" stroke="#38bdf8" stroke-width="2.5"/>
    <polygon points="110,80 110,120 150,100" fill="#db2777" stroke="#ec4899" stroke-width="2"/>
    <!-- Bent cathode bar (Z-shape) -->
    <path d="M145 75 L150 80 L150 120 L155 125" stroke="#f43f5e" stroke-width="3" fill="none"/>
    <line x1="150" y1="100" x2="200" y2="100" stroke="#ef4444" stroke-width="2.5"/>
    <text x="85" y="135" fill="#38bdf8" font-size="10" font-weight="bold">Anode (+)</text>
    <text x="175" y="135" fill="#ef4444" font-size="10" font-weight="bold">Cathode (−)</text>
    
    <!-- Regulator Circuit Diagram on Right -->
    <rect x="260" y="45" width="415" height="235" fill="#1e293b" stroke="#334155" rx="8"/>
    <text x="467" y="68" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">VOLTAGE REGULATION CIRCUIT</text>
    
    <!-- Input Unregulated DC Voltage -->
    <text x="280" y="105" fill="#f87171" font-size="11" font-weight="bold">Unregulated</text>
    <text x="280" y="120" fill="#f87171" font-size="11" font-weight="bold">DC Input (V_in)</text>
    <text x="280" y="140" fill="#cbd5e1" font-size="9">(Fluctuating)</text>
    
    <!-- Series Current Limiting Resistor R_s -->
    <rect x="375" y="90" width="40" height="20" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="395" y="104" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">R_s</text>
    
    <!-- Wires -->
    <line x1="330" y1="100" x2="375" y2="100" stroke="#64748b" stroke-width="2"/>
    <line x1="415" y1="100" x2="480" y2="100" stroke="#64748b" stroke-width="2"/>
    <line x1="480" y1="100" x2="570" y2="100" stroke="#64748b" stroke-width="2"/>
    
    <!-- Zener Connected in Parallel in REVERSE BIAS (Cathode up, Anode down) -->
    <line x1="480" y1="100" x2="480" y2="130" stroke="#64748b" stroke-width="2"/>
    <polygon points="465,160 495,160 480,140" fill="#db2777" stroke="#ec4899" stroke-width="1.5"/>
    <path d="M460 135 L465 140 L495 140 L500 145" stroke="#f43f5e" stroke-width="2.5" fill="none"/>
    <line x1="480" y1="160" x2="480" y2="210" stroke="#64748b" stroke-width="2"/>
    <text x="505" y="155" fill="#ec4899" font-size="10" font-weight="bold">Zener (V_Z)</text>
    
    <!-- Load Resistor R_L in Parallel -->
    <line x1="570" y1="100" x2="570" y2="135" stroke="#64748b" stroke-width="2"/>
    <rect x="560" y="135" width="20" height="40" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <text x="590" y="158" fill="#10b981" font-size="10" font-weight="bold">R_L</text>
    <line x1="570" y1="175" x2="570" y2="210" stroke="#64748b" stroke-width="2"/>
    
    <!-- Bottom Ground Wire -->
    <line x1="330" y1="210" x2="600" y2="210" stroke="#64748b" stroke-width="2"/>
    
    <!-- Output Regulated Voltage V_out -->
    <text x="610" y="150" fill="#34d399" font-size="11" font-weight="900">V_out = V_Z</text>
    <text x="610" y="165" fill="#cbd5e1" font-size="9">(Constant!)</text>
    
    <!-- Governing Equation Bottom Left -->
    <rect x="25" y="170" width="220" height="110" fill="#1e293b" stroke="#f59e0b" rx="8"/>
    <text x="135" y="190" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">KEY ZENER RELATIONS</text>
    <text x="135" y="210" fill="#38bdf8" font-size="10" text-anchor="middle">Total Current: I = I_Z + I_L</text>
    <text x="135" y="228" fill="#38bdf8" font-size="10" text-anchor="middle">Drop across R_s: V_in − V_Z = I · R_s</text>
    <text x="135" y="248" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">R_s = (V_in − V_Z) / (I_Z + I_L)</text>
    <text x="135" y="268" fill="#fca5a5" font-size="9" text-anchor="middle">⚠️ Must be in Reverse Breakdown!</text>
  </svg>`,

  // 14. Optoelectronic Devices: LED, Photodiode, Solar Cell
  optoDevices: `<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="720" height="280" fill="#0f172a" rx="14"/>
    <text x="360" y="26" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">OPTOELECTRONIC DEVICES: LED VS PHOTODIODE VS SOLAR CELL</text>
    
    <!-- Device 1: LED -->
    <rect x="20" y="45" width="215" height="220" fill="#1e293b" stroke="#10b981" stroke-width="1.5" rx="10"/>
    <text x="127" y="68" fill="#34d399" font-size="12" font-weight="900" text-anchor="middle">1. LED (Light Emitting Diode)</text>
    <rect x="40" y="85" width="175" height="50" fill="#065f46" fill-opacity="0.3" stroke="#10b981" rx="6"/>
    <text x="127" y="105" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">FORWARD BIASED (p ➔ +, n ➔ −)</text>
    <text x="127" y="122" fill="#fef08a" font-size="9" text-anchor="middle">Recombination releases photons (hν = E_g)</text>
    
    <!-- Outgoing Photons -->
    <line x1="127" y1="140" x2="90" y2="165" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    <line x1="127" y1="140" x2="160" y2="165" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    <text x="127" y="180" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Light OUT (λ = hc / E_g)</text>
    <text x="127" y="200" fill="#94a3b8" font-size="9" text-anchor="middle">GaAsP (Red/Yellow), GaN (Blue)</text>
    <text x="127" y="245" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Electrical Energy ➔ Light</text>
    
    <!-- Device 2: Photodiode -->
    <rect x="252" y="45" width="215" height="220" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" rx="10"/>
    <text x="360" y="68" fill="#f87171" font-size="12" font-weight="900" text-anchor="middle">2. PHOTODIODE</text>
    <rect x="272" y="85" width="175" height="50" fill="#991b1b" fill-opacity="0.3" stroke="#ef4444" rx="6"/>
    <text x="360" y="105" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">REVERSE BIASED (p ➔ −, n ➔ +)</text>
    <text x="360" y="122" fill="#fef08a" font-size="9" text-anchor="middle">Operated near breakdown</text>
    
    <!-- Incoming Photons -->
    <line x1="330" y1="140" x2="350" y2="165" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-cyan)"/>
    <line x1="390" y1="140" x2="370" y2="165" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-cyan)"/>
    <text x="360" y="185" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Light IN generates e⁻-hole pairs</text>
    <text x="360" y="202" fill="#cbd5e1" font-size="9" text-anchor="middle">Photocurrent I_p ∝ Light Intensity</text>
    <text x="360" y="245" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Optical Signal Detection</text>
    
    <!-- Device 3: Solar Cell -->
    <rect x="485" y="45" width="215" height="220" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" rx="10"/>
    <text x="592" y="68" fill="#fef08a" font-size="12" font-weight="900" text-anchor="middle">3. SOLAR CELL</text>
    <rect x="505" y="85" width="175" height="50" fill="#78350f" fill-opacity="0.4" stroke="#f59e0b" rx="6"/>
    <text x="592" y="105" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">NO EXTERNAL BIAS (0 V)</text>
    <text x="592" y="122" fill="#cbd5e1" font-size="9" text-anchor="middle">Photovoltaic EMF generated</text>
    
    <!-- Sunlight IN -->
    <line x1="560" y1="140" x2="585" y2="165" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    <line x1="625" y1="140" x2="600" y2="165" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
    <text x="592" y="185" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">Sunlight ➔ e⁻-hole generation</text>
    <text x="592" y="202" fill="#cbd5e1" font-size="9" text-anchor="middle">Built-in field separates carriers</text>
    <text x="592" y="245" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Solar Light ➔ Electric Power</text>
  </svg>`,

  // 15. Standard Logic Gates (NOT, AND, OR, NAND, NOR, XOR, XNOR)
  logicGatesMaster: `<svg viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="740" height="340" fill="#0f172a" rx="14"/>
    <text x="370" y="24" fill="#38bdf8" font-size="14" font-weight="900" text-anchor="middle">STANDARD LOGIC GATES: SYMBOLS, BOOLEAN EXPRESSIONS &amp; TRUTH TABLES</text>
    
    <!-- 1. NOT Gate -->
    <rect x="20" y="45" width="130" height="135" fill="#1e293b" stroke="#38bdf8" rx="8"/>
    <text x="85" y="65" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">NOT (Inverter)</text>
    <!-- Symbol -->
    <polygon points="55,80 55,110 85,95" fill="#0284c7" stroke="#38bdf8"/>
    <circle cx="90" cy="95" r="3.5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="35" y1="95" x2="55" y2="95" stroke="#64748b" stroke-width="1.5"/><text x="30" y="99" fill="#94a3b8" font-size="9">A</text>
    <line x1="94" y1="95" x2="115" y2="95" stroke="#64748b" stroke-width="1.5"/><text x="120" y="99" fill="#38bdf8" font-size="9">Y</text>
    <text x="85" y="130" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Y = A̅</text>
    <text x="85" y="148" fill="#cbd5e1" font-size="9" text-anchor="middle">0 ➔ 1 | 1 ➔ 0</text>
    
    <!-- 2. AND Gate -->
    <rect x="165" y="45" width="130" height="135" fill="#1e293b" stroke="#10b981" rx="8"/>
    <text x="230" y="65" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">AND Gate</text>
    <!-- Symbol -->
    <path d="M195 80 L215 80 A15 15 0 0 1 215 110 L195 110 Z" fill="#065f46" stroke="#10b981"/>
    <line x1="180" y1="87" x2="195" y2="87" stroke="#64748b" stroke-width="1.5"/><text x="175" y="91" fill="#94a3b8" font-size="8">A</text>
    <line x1="180" y1="103" x2="195" y2="103" stroke="#64748b" stroke-width="1.5"/><text x="175" y="107" fill="#94a3b8" font-size="8">B</text>
    <line x1="230" y1="95" x2="250" y2="95" stroke="#64748b" stroke-width="1.5"/><text x="255" y="99" fill="#10b981" font-size="9">Y</text>
    <text x="230" y="130" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Y = A · B</text>
    <text x="230" y="148" fill="#cbd5e1" font-size="8" text-anchor="middle">1 only if BOTH 1</text>
    
    <!-- 3. OR Gate -->
    <rect x="310" y="45" width="130" height="135" fill="#1e293b" stroke="#f59e0b" rx="8"/>
    <text x="375" y="65" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">OR Gate</text>
    <!-- Symbol -->
    <path d="M340 80 Q355 95 340 110 Q370 110 380 95 Q370 80 340 80 Z" fill="#78350f" stroke="#f59e0b"/>
    <line x1="325" y1="87" x2="345" y2="87" stroke="#64748b" stroke-width="1.5"/><text x="320" y="91" fill="#94a3b8" font-size="8">A</text>
    <line x1="325" y1="103" x2="345" y2="103" stroke="#64748b" stroke-width="1.5"/><text x="320" y="107" fill="#94a3b8" font-size="8">B</text>
    <line x1="380" y1="95" x2="400" y2="95" stroke="#64748b" stroke-width="1.5"/><text x="405" y="99" fill="#f59e0b" font-size="9">Y</text>
    <text x="375" y="130" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Y = A + B</text>
    <text x="375" y="148" fill="#cbd5e1" font-size="8" text-anchor="middle">1 if AT LEAST ONE 1</text>
    
    <!-- 4. NAND Gate (Universal) -->
    <rect x="455" y="45" width="130" height="135" fill="#1e293b" stroke="#ec4899" stroke-width="1.5" rx="8"/>
    <text x="520" y="65" fill="#f472b6" font-size="11" font-weight="bold" text-anchor="middle">NAND (Universal)</text>
    <!-- Symbol -->
    <path d="M485 80 L505 80 A15 15 0 0 1 505 110 L485 110 Z" fill="#831843" stroke="#ec4899"/>
    <circle cx="524" cy="95" r="3.5" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
    <line x1="470" y1="87" x2="485" y2="87" stroke="#64748b" stroke-width="1.5"/><text x="465" y="91" fill="#94a3b8" font-size="8">A</text>
    <line x1="470" y1="103" x2="485" y2="103" stroke="#64748b" stroke-width="1.5"/><text x="465" y="107" fill="#94a3b8" font-size="8">B</text>
    <line x1="528" y1="95" x2="548" y2="95" stroke="#64748b" stroke-width="1.5"/><text x="553" y="99" fill="#ec4899" font-size="9">Y</text>
    <text x="520" y="130" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Y = (A · B)̅</text>
    <text x="520" y="148" fill="#cbd5e1" font-size="8" text-anchor="middle">0 ONLY when A=1, B=1</text>
    
    <!-- 5. NOR Gate (Universal) -->
    <rect x="600" y="45" width="120" height="135" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5" rx="8"/>
    <text x="660" y="65" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">NOR (Universal)</text>
    <!-- Symbol -->
    <path d="M625 80 Q640 95 625 110 Q655 110 665 95 Q655 80 625 80 Z" fill="#4c1d95" stroke="#8b5cf6"/>
    <circle cx="669" cy="95" r="3.5" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
    <line x1="612" y1="87" x2="630" y2="87" stroke="#64748b" stroke-width="1.5"/><text x="608" y="91" fill="#94a3b8" font-size="8">A</text>
    <line x1="612" y1="103" x2="630" y2="103" stroke="#64748b" stroke-width="1.5"/><text x="608" y="107" fill="#94a3b8" font-size="8">B</text>
    <line x1="673" y1="95" x2="690" y2="95" stroke="#64748b" stroke-width="1.5"/><text x="695" y="99" fill="#c084fc" font-size="9">Y</text>
    <text x="660" y="130" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Y = (A + B)̅</text>
    <text x="660" y="148" fill="#cbd5e1" font-size="8" text-anchor="middle">1 ONLY when A=0, B=0</text>
    
    <!-- Row 2: XOR, XNOR & Universal Implementations -->
    <!-- 6. XOR Gate -->
    <rect x="20" y="195" width="220" height="130" fill="#1e293b" stroke="#38bdf8" rx="8"/>
    <text x="130" y="215" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">XOR Gate (Exclusive-OR)</text>
    <!-- Symbol -->
    <path d="M50 230 Q65 245 50 260" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
    <path d="M58 230 Q73 245 58 260 Q88 260 98 245 Q88 230 58 230 Z" fill="#0369a1" stroke="#38bdf8"/>
    <line x1="98" y1="245" x2="120" y2="245" stroke="#64748b" stroke-width="1.5"/>
    <text x="130" y="275" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Y = A ⊕ B = A̅B + AB̅</text>
    <text x="130" y="295" fill="#cbd5e1" font-size="9" text-anchor="middle">Output 1 when inputs are DIFFERENT</text>
    <text x="130" y="310" fill="#94a3b8" font-size="8" text-anchor="middle">(00➔0, 01➔1, 10➔1, 11➔0)</text>
    
    <!-- 7. XNOR Gate -->
    <rect x="260" y="195" width="220" height="130" fill="#1e293b" stroke="#ec4899" rx="8"/>
    <text x="370" y="215" fill="#ec4899" font-size="11" font-weight="bold" text-anchor="middle">XNOR Gate (Equivalence)</text>
    <!-- Symbol -->
    <path d="M290 230 Q305 245 290 260" fill="none" stroke="#ec4899" stroke-width="1.5"/>
    <path d="M298 230 Q313 245 298 260 Q328 260 338 245 Q328 230 298 230 Z" fill="#be185d" stroke="#ec4899"/>
    <circle cx="342" cy="245" r="3.5" fill="#0f172a" stroke="#ec4899" stroke-width="1.5"/>
    <line x1="346" y1="245" x2="365" y2="245" stroke="#64748b" stroke-width="1.5"/>
    <text x="370" y="275" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Y = (A ⊕ B)̅ = AB + A̅B̅</text>
    <text x="370" y="295" fill="#cbd5e1" font-size="9" text-anchor="middle">Output 1 when inputs are IDENTICAL</text>
    <text x="370" y="310" fill="#94a3b8" font-size="8" text-anchor="middle">(00➔1, 01➔0, 10➔0, 11➔1)</text>
    
    <!-- Universal Gate Configurations -->
    <rect x="500" y="195" width="220" height="130" fill="#1e293b" stroke="#10b981" rx="8"/>
    <text x="610" y="215" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">UNIVERSAL GATE REALISATION</text>
    <text x="510" y="235" fill="#fef08a" font-size="9" font-weight="bold">• NOT using NAND:</text>
    <text x="510" y="248" fill="#cbd5e1" font-size="8">  Tie both inputs together: A=B ➔ Y = (A·A)̅ = A̅</text>
    <text x="510" y="265" fill="#fef08a" font-size="9" font-weight="bold">• AND using NAND:</text>
    <text x="510" y="278" fill="#cbd5e1" font-size="8">  NAND followed by NOT: ((A·B)̅)̅ = A·B</text>
    <text x="510" y="295" fill="#fef08a" font-size="9" font-weight="bold">• OR using NAND (De Morgan's):</text>
    <text x="510" y="308" fill="#cbd5e1" font-size="8">  Invert inputs then NAND: (A̅ · B̅)̅ = A + B</text>
  </svg>`
};
