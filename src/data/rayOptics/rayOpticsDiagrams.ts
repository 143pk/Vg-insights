// 26+ High-Precision, Mobile-Friendly Inline SVGs for Ray Optics & Optical Instruments

export const rayOpticsDiagrams = {
  // 1. Concept Flow Diagram (Chain of Optics)
  conceptFlow: `<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="700" height="240" fill="#0f172a" rx="12"/>
    <text x="350" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">RAY OPTICS CONCEPTUAL PROPAGATION CHAIN</text>
    
    <!-- Row 1 -->
    <g transform="translate(20, 45)">
      <rect x="0" y="0" width="115" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="57" y="24" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">1. Light &amp; Rays</text>
      <path d="M 115 21 L 135 21" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-cyan)"/>
      
      <rect x="140" y="0" width="115" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="197" y="24" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">2. Reflection</text>
      <path d="M 255 21 L 275 21" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-cyan)"/>
      
      <rect x="280" y="0" width="125" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="342" y="24" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">3. Spherical Mirrors</text>
      <path d="M 405 21 L 425 21" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-cyan)"/>
      
      <rect x="430" y="0" width="115" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="487" y="24" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">4. Refraction</text>
      <path d="M 545 21 L 565 21" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-cyan)"/>
      
      <rect x="570" y="0" width="105" height="42" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
      <text x="622" y="24" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">5. TIR &amp; Fibres</text>
    </g>
    
    <!-- Turn arrow -->
    <path d="M 622 92 L 622 115 L 622 135 L 590 135" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arr-yellow)"/>

    <!-- Row 2 -->
    <g transform="translate(20, 115)">
      <rect x="460" y="0" width="120" height="42" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
      <text x="520" y="24" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">6. Curved Surfaces</text>
      <path d="M 460 21 L 435 21" stroke="#a855f7" stroke-width="2" marker-end="url(#arr-purple)"/>

      <rect x="310" y="0" width="120" height="42" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
      <text x="370" y="24" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">7. Thin Lenses</text>
      <path d="M 310 21 L 285 21" stroke="#a855f7" stroke-width="2" marker-end="url(#arr-purple)"/>

      <rect x="160" y="0" width="120" height="42" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
      <text x="220" y="24" fill="#fbcfe8" font-size="11" font-weight="bold" text-anchor="middle">8. Prism &amp; Dispersion</text>
      <path d="M 160 21 L 135 21" stroke="#ec4899" stroke-width="2" marker-end="url(#arr-pink)"/>

      <rect x="0" y="0" width="130" height="42" rx="6" fill="#047857" stroke="#10b981" stroke-width="2"/>
      <text x="65" y="24" fill="#ecfdf5" font-size="11" font-weight="bold" text-anchor="middle">9. Instruments</text>
    </g>

    <!-- Bottom summary label -->
    <rect x="120" y="180" width="460" height="35" rx="6" fill="#334155"/>
    <text x="350" y="202" fill="#94a3b8" font-size="11" text-anchor="middle">Approximation: Wavelength λ (400-700 nm) &lt;&lt; Aperture Size 'a' → Rectilinear Ray Optics</text>

    <defs>
      <marker id="arr-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8"/>
      </marker>
      <marker id="arr-yellow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24"/>
      </marker>
      <marker id="arr-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7"/>
      </marker>
      <marker id="arr-pink" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#ec4899"/>
      </marker>
    </defs>
  </svg>`,

  // 2. Laws of Reflection
  lawsOfReflection: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="500" height="280" fill="#0f172a" rx="12"/>
    <!-- Mirror surface -->
    <line x1="60" y1="200" x2="440" y2="200" stroke="#94a3b8" stroke-width="4"/>
    <!-- Silvering hatch marks -->
    <path d="M 70 200 L 60 215 M 110 200 L 100 215 M 150 200 L 140 215 M 190 200 L 180 215 M 230 200 L 220 215 M 270 200 L 260 215 M 310 200 L 300 215 M 350 200 L 340 215 M 390 200 L 380 215 M 430 200 L 420 215" stroke="#64748b" stroke-width="2"/>
    <text x="250" y="235" fill="#94a3b8" font-size="12" text-anchor="middle">Reflecting Surface (Plane Mirror)</text>

    <!-- Normal line -->
    <line x1="250" y1="40" x2="250" y2="200" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="250" y="32" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">Normal (N)</text>

    <!-- Incident ray -->
    <line x1="120" y1="70" x2="250" y2="200" stroke="#38bdf8" stroke-width="3"/>
    <polygon points="180,135 190,138 186,147" fill="#38bdf8"/>
    <text x="110" y="65" fill="#38bdf8" font-size="13" font-weight="bold">Incident Ray</text>

    <!-- Reflected ray -->
    <line x1="250" y1="200" x2="380" y2="70" stroke="#22c55e" stroke-width="3"/>
    <polygon points="310,135 320,138 316,147" fill="#22c55e" transform="rotate(-90 315 140)"/>
    <text x="390" y="65" fill="#22c55e" font-size="13" font-weight="bold">Reflected Ray</text>

    <!-- Angle arcs -->
    <path d="M 220 160 A 50 50 0 0 1 250 150" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="232" y="145" fill="#38bdf8" font-size="14" font-weight="bold">i</text>

    <path d="M 250 150 A 50 50 0 0 1 280 160" fill="none" stroke="#22c55e" stroke-width="2"/>
    <text x="263" y="145" fill="#22c55e" font-size="14" font-weight="bold">r</text>

    <!-- Point of incidence -->
    <circle cx="250" cy="200" r="4" fill="#ef4444"/>
    <text x="250" y="190" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="end">O (Point of incidence) </text>

    <!-- Law Callout -->
    <rect x="90" y="245" width="320" height="25" rx="4" fill="#1e293b"/>
    <text x="250" y="262" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Law of Reflection: ∠i = ∠r (Measured from Normal!)</text>
  </svg>`,

  // 3. Concave Mirror Geometry & Parameters
  concaveMirrorGeometry: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="260" fill="#0f172a" rx="12"/>
    <!-- Principal axis -->
    <line x1="30" y1="130" x2="560" y2="130" stroke="#64748b" stroke-width="2"/>
    <text x="50" y="120" fill="#94a3b8" font-size="11">Principal Axis</text>

    <!-- Concave Mirror Arc -->
    <path d="M 480 30 A 240 240 0 0 1 480 230" fill="none" stroke="#38bdf8" stroke-width="4"/>
    <!-- Hatching on convex side -->
    <path d="M 482 35 L 498 30 M 492 65 L 508 60 M 500 95 L 516 90 M 503 130 L 519 130 M 500 165 L 516 170 M 492 195 L 508 200 M 482 225 L 498 230" stroke="#64748b" stroke-width="2"/>

    <!-- Center of Curvature C -->
    <circle cx="200" cy="130" r="5" fill="#f59e0b"/>
    <text x="200" y="155" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">C</text>
    <text x="200" y="172" fill="#94a3b8" font-size="10" text-anchor="middle">Centre of Curvature</text>

    <!-- Principal Focus F -->
    <circle cx="350" cy="130" r="5" fill="#22c55e"/>
    <text x="350" y="155" fill="#22c55e" font-size="13" font-weight="bold" text-anchor="middle">F</text>
    <text x="350" y="172" fill="#94a3b8" font-size="10" text-anchor="middle">Focus</text>

    <!-- Pole P -->
    <circle cx="503" cy="130" r="5" fill="#ef4444"/>
    <text x="515" y="145" fill="#ef4444" font-size="13" font-weight="bold">P</text>
    <text x="515" y="160" fill="#94a3b8" font-size="10">Pole</text>

    <!-- Dimension: focal length f -->
    <line x1="350" y1="85" x2="503" y2="85" stroke="#22c55e" stroke-width="1.5" marker-start="url(#arr-green-rev)" marker-end="url(#arr-green)"/>
    <text x="426" y="78" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">f = R/2</text>

    <!-- Dimension: Radius of Curvature R -->
    <line x1="200" y1="50" x2="503" y2="50" stroke="#f59e0b" stroke-width="1.5" marker-start="url(#arr-yellow-rev)" marker-end="url(#arr-yellow)"/>
    <text x="350" y="43" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Radius of Curvature R</text>

    <!-- Callout -->
    <rect x="30" y="210" width="340" height="35" rx="5" fill="#1e293b"/>
    <text x="200" y="232" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Concave Mirror: Converging | Real Focus | f = -R/2</text>

    <defs>
      <marker id="arr-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e"/>
      </marker>
      <marker id="arr-green-rev" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 10 0 L 0 5 L 10 10 z" fill="#22c55e"/>
      </marker>
      <marker id="arr-yellow-rev" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 10 0 L 0 5 L 10 10 z" fill="#f59e0b"/>
      </marker>
    </defs>
  </svg>`,

  // 4. Convex Mirror Geometry
  convexMirrorGeometry: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="240" fill="#0f172a" rx="12"/>
    <!-- Principal axis -->
    <line x1="30" y1="120" x2="560" y2="120" stroke="#64748b" stroke-width="2"/>

    <!-- Convex Mirror Arc -->
    <path d="M 180 30 A 240 240 0 0 0 180 210" fill="none" stroke="#38bdf8" stroke-width="4"/>
    <!-- Silvering inside concave side -->
    <path d="M 178 35 L 162 30 M 168 65 L 152 60 M 160 95 L 144 90 M 157 120 L 141 120 M 160 145 L 144 150 M 168 175 L 152 180 M 178 205 L 162 210" stroke="#64748b" stroke-width="2"/>

    <!-- Pole P -->
    <circle cx="157" cy="120" r="5" fill="#ef4444"/>
    <text x="145" y="140" fill="#ef4444" font-size="13" font-weight="bold">P</text>

    <!-- Principal Focus F (behind mirror) -->
    <circle cx="310" cy="120" r="5" fill="#22c55e"/>
    <text x="310" y="145" fill="#22c55e" font-size="13" font-weight="bold" text-anchor="middle">F (Virtual Focus)</text>

    <!-- Center of Curvature C (behind mirror) -->
    <circle cx="460" cy="120" r="5" fill="#f59e0b"/>
    <text x="460" y="145" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">C</text>

    <!-- Focal length & R -->
    <line x1="157" y1="65" x2="310" y2="65" stroke="#22c55e" stroke-width="1.5" marker-start="url(#arr-green-rev)" marker-end="url(#arr-green)"/>
    <text x="233" y="58" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">+f = +R/2</text>

    <line x1="157" y1="35" x2="460" y2="35" stroke="#f59e0b" stroke-width="1.5" marker-start="url(#arr-yellow-rev)" marker-end="url(#arr-yellow)"/>
    <text x="308" y="28" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">+R (Behind Mirror)</text>

    <!-- Callout -->
    <rect x="250" y="195" width="320" height="32" rx="5" fill="#1e293b"/>
    <text x="410" y="216" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Convex Mirror: Diverging | Virtual Focus | f &gt; 0</text>
  </svg>`,

  // 5. Principal Rays for Concave Mirror
  concavePrincipalRays: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="280" fill="#0f172a" rx="12"/>
    <line x1="20" y1="140" x2="620" y2="140" stroke="#64748b" stroke-width="2"/>
    <path d="M 520 20 A 260 260 0 0 1 520 260" fill="none" stroke="#38bdf8" stroke-width="4"/>

    <!-- Points -->
    <circle cx="220" cy="140" r="4" fill="#f59e0b"/><text x="220" y="160" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">C</text>
    <circle cx="380" cy="140" r="4" fill="#22c55e"/><text x="380" y="160" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F</text>
    <circle cx="545" cy="140" r="4" fill="#ef4444"/><text x="555" y="155" fill="#ef4444" font-size="12" font-weight="bold">P</text>

    <!-- Ray 1: Parallel -> Through Focus (Cyan) -->
    <line x1="50" y1="50" x2="525" y2="50" stroke="#38bdf8" stroke-width="2"/>
    <line x1="525" y1="50" x2="250" y2="215" stroke="#38bdf8" stroke-width="2"/>
    <text x="60" y="45" fill="#38bdf8" font-size="11" font-weight="bold">Ray 1: Parallel to axis → Reflects through F</text>

    <!-- Ray 2: Through Focus -> Emerges Parallel (Green) -->
    <line x1="50" y1="70" x2="380" y2="140" stroke="#22c55e" stroke-width="2"/>
    <line x1="380" y1="140" x2="528" y2="190" stroke="#22c55e" stroke-width="2"/>
    <line x1="528" y1="190" x2="50" y2="190" stroke="#22c55e" stroke-width="2"/>
    <text x="60" y="210" fill="#22c55e" font-size="11" font-weight="bold">Ray 2: Passes through F → Reflects parallel</text>

    <!-- Ray 3: Through C -> Retraces Path (Amber) -->
    <line x1="80" y1="40" x2="538" y2="210" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="60" y="105" fill="#f59e0b" font-size="11" font-weight="bold">Ray 3: Through C → Retraces back (i=0, r=0)</text>

    <!-- Ray 4: Incident at Pole (Purple) -->
    <line x1="120" y1="30" x2="545" y2="140" stroke="#c084fc" stroke-width="2"/>
    <line x1="545" y1="140" x2="120" y2="250" stroke="#c084fc" stroke-width="2"/>
    <text x="380" y="265" fill="#c084fc" font-size="11" font-weight="bold">Ray 4: Incident at Pole P → Reflects symmetrically (∠i = ∠r)</text>
  </svg>`,

  // 6. Concave Mirror: Object between C and F (Real, Inverted, Magnified)
  concaveObjectBetweenCandF: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="280" fill="#0f172a" rx="12"/>
    <line x1="20" y1="180" x2="620" y2="180" stroke="#64748b" stroke-width="2"/>
    <!-- Mirror -->
    <path d="M 540 30 A 260 260 0 0 1 540 270" fill="none" stroke="#38bdf8" stroke-width="4"/>

    <!-- Points -->
    <circle cx="280" cy="180" r="4" fill="#f59e0b"/><text x="280" y="200" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">C</text>
    <circle cx="420" cy="180" r="4" fill="#22c55e"/><text x="420" y="200" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F</text>
    <circle cx="563" cy="180" r="4" fill="#ef4444"/><text x="575" y="195" fill="#ef4444" font-size="12" font-weight="bold">P</text>

    <!-- Object AB between C and F -->
    <line x1="350" y1="180" x2="350" y2="110" stroke="#f87171" stroke-width="4" marker-end="url(#arr-red)"/>
    <text x="350" y="100" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">A (Object)</text>
    <text x="350" y="200" fill="#f87171" font-size="11" text-anchor="middle">B</text>

    <!-- Ray 1 from A parallel to axis -->
    <line x1="350" y1="110" x2="550" y2="110" stroke="#38bdf8" stroke-width="2"/>
    <!-- Reflected through F -->
    <line x1="550" y1="110" x2="100" y2="270" stroke="#38bdf8" stroke-width="2"/>

    <!-- Ray 2 from A through F to mirror -->
    <line x1="350" y1="110" x2="420" y2="180" stroke="#22c55e" stroke-width="2"/>
    <line x1="420" y1="180" x2="543" y2="240" stroke="#22c55e" stroke-width="2"/>
    <!-- Reflected parallel -->
    <line x1="543" y1="240" x2="100" y2="240" stroke="#22c55e" stroke-width="2"/>

    <!-- Image A'B' beyond C -->
    <line x1="160" y1="180" x2="160" y2="240" stroke="#38bdf8" stroke-width="4" marker-end="url(#arr-blue)"/>
    <text x="160" y="260" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">A' (Image)</text>
    <text x="160" y="170" fill="#38bdf8" font-size="11" text-anchor="middle">B'</text>

    <!-- Box Summary -->
    <rect x="20" y="20" width="320" height="60" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text x="35" y="40" fill="#f8fafc" font-size="12" font-weight="bold">Object: Between C and F</text>
    <text x="35" y="58" fill="#38bdf8" font-size="11">Image: Beyond C | Real &amp; Inverted | Magnified (|m| &gt; 1)</text>

    <defs>
      <marker id="arr-red" viewBox="0 0 10 10" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 3 L 5 0 L 10 3 L 5 10 z" fill="#f87171"/>
      </marker>
      <marker id="arr-blue" viewBox="0 0 10 10" refX="5" refY="3" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 3 L 5 0 L 10 3 L 5 10 z" fill="#38bdf8"/>
      </marker>
    </defs>
  </svg>`,

  // 7. Concave Mirror: Object between F and P (Virtual, Erect, Magnified)
  concaveObjectBetweenFandP: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="280" fill="#0f172a" rx="12"/>
    <line x1="20" y1="160" x2="620" y2="160" stroke="#64748b" stroke-width="2"/>
    <path d="M 380 20 A 260 260 0 0 1 380 260" fill="none" stroke="#38bdf8" stroke-width="4"/>

    <!-- Points -->
    <circle cx="100" cy="160" r="4" fill="#f59e0b"/><text x="100" y="185" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">C</text>
    <circle cx="240" cy="160" r="4" fill="#22c55e"/><text x="240" y="185" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F</text>
    <circle cx="403" cy="160" r="4" fill="#ef4444"/><text x="415" y="175" fill="#ef4444" font-size="12" font-weight="bold">P</text>

    <!-- Object AB between F and P -->
    <line x1="320" y1="160" x2="320" y2="110" stroke="#f87171" stroke-width="4" marker-end="url(#arr-red)"/>
    <text x="320" y="95" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Object</text>

    <!-- Ray 1 from top parallel to axis -->
    <line x1="320" y1="110" x2="390" y2="110" stroke="#38bdf8" stroke-width="2"/>
    <line x1="390" y1="110" x2="160" y2="230" stroke="#38bdf8" stroke-width="2"/>
    <!-- Virtual extension behind mirror -->
    <line x1="390" y1="110" x2="550" y2="25" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>

    <!-- Ray 2 through pole -->
    <line x1="320" y1="110" x2="403" y2="160" stroke="#c084fc" stroke-width="2"/>
    <line x1="403" y1="160" x2="200" y2="240" stroke="#c084fc" stroke-width="2"/>
    <!-- Virtual extension behind mirror -->
    <line x1="403" y1="160" x2="550" y2="25" stroke="#c084fc" stroke-width="2" stroke-dasharray="4,3"/>

    <!-- Virtual Image A'B' behind mirror -->
    <line x1="550" y1="160" x2="550" y2="25" stroke="#22c55e" stroke-width="4" stroke-dasharray="5,2" marker-end="url(#arr-green)"/>
    <text x="550" y="15" fill="#22c55e" font-size="13" font-weight="bold" text-anchor="middle">Virtual Image (Magnified)</text>

    <!-- Callout -->
    <rect x="20" y="20" width="310" height="50" rx="5" fill="#1e293b" stroke="#22c55e"/>
    <text x="30" y="38" fill="#f8fafc" font-size="11" font-weight="bold">Case 6: Shaving / Dental Mirror</text>
    <text x="30" y="55" fill="#22c55e" font-size="11">Virtual, Erect, Magnified behind mirror (m &gt; +1)</text>
  </svg>`,

  // 8. Convex Mirror Image Formation (Always Virtual, Erect, Diminished)
  convexMirrorImageFormation: `<svg viewBox="0 0 650 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="250" fill="#0f172a" rx="12"/>
    <line x1="20" y1="140" x2="620" y2="140" stroke="#64748b" stroke-width="2"/>
    <path d="M 280 20 A 260 260 0 0 0 280 230" fill="none" stroke="#38bdf8" stroke-width="4"/>

    <!-- Points -->
    <circle cx="257" cy="140" r="4" fill="#ef4444"/><text x="245" y="160" fill="#ef4444" font-size="12" font-weight="bold">P</text>
    <circle cx="410" cy="140" r="4" fill="#22c55e"/><text x="410" y="165" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F</text>
    <circle cx="550" cy="140" r="4" fill="#f59e0b"/><text x="550" y="165" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">C</text>

    <!-- Object in front of mirror -->
    <line x1="80" y1="140" x2="80" y2="60" stroke="#f87171" stroke-width="4" marker-end="url(#arr-red)"/>
    <text x="80" y="48" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Object (Any distance)</text>

    <!-- Ray 1 parallel -->
    <line x1="80" y1="60" x2="270" y2="60" stroke="#38bdf8" stroke-width="2"/>
    <line x1="270" y1="60" x2="160" y2="15" stroke="#38bdf8" stroke-width="2"/>
    <line x1="270" y1="60" x2="410" y2="140" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>

    <!-- Ray 2 towards C -->
    <line x1="80" y1="60" x2="262" y2="95" stroke="#f59e0b" stroke-width="2"/>
    <line x1="262" y1="95" x2="550" y2="140" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>

    <!-- Virtual Diminished Image between P and F -->
    <line x1="330" y1="140" x2="330" y2="98" stroke="#22c55e" stroke-width="3" stroke-dasharray="4,2" marker-end="url(#arr-green)"/>
    <text x="330" y="90" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Image</text>

    <!-- Rear view mirror callout -->
    <rect x="370" y="15" width="260" height="50" rx="5" fill="#1e293b" stroke="#38bdf8"/>
    <text x="380" y="33" fill="#f8fafc" font-size="11" font-weight="bold">Rear-View Automobile Mirror</text>
    <text x="380" y="52" fill="#38bdf8" font-size="10">Always Virtual, Erect, Diminished (0 &lt; m &lt; +1)</text>
  </svg>`,

  // 9. Refraction at Plane Surface (Snell's Law)
  refractionPlaneSurface: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="500" height="280" fill="#0f172a" rx="12"/>
    <!-- Top Medium (Rarer) -->
    <rect x="20" y="20" width="460" height="110" fill="#0f172a"/>
    <text x="40" y="45" fill="#94a3b8" font-size="12" font-weight="bold">Medium 1: Rarer (Air, n₁)</text>

    <!-- Bottom Medium (Denser) -->
    <rect x="20" y="130" width="460" height="130" fill="#1e3a8a" opacity="0.3"/>
    <text x="40" y="245" fill="#60a5fa" font-size="12" font-weight="bold">Medium 2: Denser (Glass/Water, n₂ &gt; n₁)</text>

    <!-- Interface -->
    <line x1="20" y1="130" x2="480" y2="130" stroke="#38bdf8" stroke-width="3"/>
    <text x="440" y="122" fill="#38bdf8" font-size="11" text-anchor="end">Interface</text>

    <!-- Normal line -->
    <line x1="250" y1="30" x2="250" y2="260" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4"/>
    <text x="250" y="22" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Normal</text>

    <!-- Incident Ray -->
    <line x1="120" y1="40" x2="250" y2="130" stroke="#38bdf8" stroke-width="3"/>
    <text x="110" y="35" fill="#38bdf8" font-size="12" font-weight="bold">Incident Ray</text>

    <!-- Refracted Ray (Bends TOWARDS normal) -->
    <line x1="250" y1="130" x2="330" y2="250" stroke="#22c55e" stroke-width="3"/>
    <text x="340" y="255" fill="#22c55e" font-size="12" font-weight="bold">Refracted Ray</text>

    <!-- Angles -->
    <path d="M 210 100 A 50 50 0 0 1 250 85" fill="none" stroke="#38bdf8" stroke-width="2"/>
    <text x="225" y="85" fill="#38bdf8" font-size="14" font-weight="bold">i</text>

    <path d="M 250 175 A 50 50 0 0 1 280 165" fill="none" stroke="#22c55e" stroke-width="2"/>
    <text x="263" y="185" fill="#22c55e" font-size="14" font-weight="bold">r</text>

    <!-- Snell's Law Box -->
    <rect x="290" y="35" width="180" height="50" rx="6" fill="#1e293b" stroke="#f59e0b"/>
    <text x="380" y="55" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">Snell's Law:</text>
    <text x="380" y="74" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">n₁ sin i = n₂ sin r</text>
  </svg>`,

  // 10. Refraction through Glass Slab & Lateral Displacement
  glassSlabLateralShift: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="300" fill="#0f172a" rx="12"/>
    <!-- Glass Slab -->
    <rect x="100" y="80" width="400" height="130" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="490" y="150" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="end">Glass Slab (n, thickness t)</text>

    <!-- Normals -->
    <line x1="200" y1="40" x2="200" y2="130" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
    <line x1="260" y1="160" x2="260" y2="250" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>

    <!-- Incident Ray -->
    <line x1="100" y1="30" x2="200" y2="80" stroke="#38bdf8" stroke-width="3"/>
    <text x="90" y="25" fill="#38bdf8" font-size="12" font-weight="bold">Incident Ray</text>

    <!-- Refracted Ray inside slab -->
    <line x1="200" y1="80" x2="260" y2="210" stroke="#22c55e" stroke-width="3"/>

    <!-- Emergent Ray -->
    <line x1="260" y1="210" x2="360" y2="260" stroke="#38bdf8" stroke-width="3"/>
    <text x="370" y="270" fill="#38bdf8" font-size="12" font-weight="bold">Emergent Ray (i = e)</text>

    <!-- Undeviated original path -->
    <line x1="200" y1="80" x2="420" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="420" y1="190" x2="480" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

    <!-- Lateral shift distance d -->
    <line x1="310" y1="235" x2="335" y2="185" stroke="#ef4444" stroke-width="2"/>
    <text x="335" y="215" fill="#ef4444" font-size="12" font-weight="bold">d (Lateral Shift)</text>

    <!-- Formula Box -->
    <rect x="20" y="245" width="280" height="42" rx="5" fill="#0f172a" stroke="#ef4444"/>
    <text x="160" y="270" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">d = t · sin(i - r) / cos(r)</text>
  </svg>`,

  // 11. Apparent Depth in Water Container
  apparentDepth: `<svg viewBox="0 0 550 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-lg mx-auto font-sans">
    <rect width="550" height="280" fill="#0f172a" rx="12"/>
    <!-- Water tank -->
    <rect x="80" y="80" width="380" height="170" fill="#1e3a8a" opacity="0.3"/>
    <rect x="80" y="80" width="380" height="170" fill="none" stroke="#60a5fa" stroke-width="2"/>
    <text x="90" y="105" fill="#60a5fa" font-size="12" font-weight="bold">Water (Refractive Index n &gt; 1)</text>

    <!-- Eye / Observer -->
    <g transform="translate(230, 20)">
      <path d="M 0 20 Q 30 0 60 20 Q 30 40 0 20 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="30" cy="20" r="8" fill="#38bdf8"/>
      <text x="80" y="25" fill="#38bdf8" font-size="11" font-weight="bold">Observer in Air</text>
    </g>

    <!-- Real Object (Coin at bottom) -->
    <circle cx="260" cy="235" r="8" fill="#f59e0b"/>
    <text x="260" y="260" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Real Object (O)</text>

    <!-- Apparent Image (Raised) -->
    <circle cx="260" cy="170" r="7" fill="#22c55e" stroke="#ffffff" stroke-dasharray="2,2"/>
    <text x="260" y="160" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Apparent Image (I)</text>

    <!-- Light Rays from Object to Eye -->
    <line x1="260" y1="235" x2="250" y2="80" stroke="#f59e0b" stroke-width="2"/>
    <line x1="250" y1="80" x2="245" y2="40" stroke="#38bdf8" stroke-width="2"/>

    <line x1="260" y1="235" x2="280" y2="80" stroke="#f59e0b" stroke-width="2"/>
    <line x1="280" y1="80" x2="295" y2="40" stroke="#38bdf8" stroke-width="2"/>

    <!-- Virtual Extension back to Image -->
    <line x1="245" y1="40" x2="260" y2="170" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="295" y1="40" x2="260" y2="170" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3,3"/>

    <!-- Dimension Annotations -->
    <!-- Real Depth -->
    <line x1="475" y1="80" x2="475" y2="235" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="485" y="160" fill="#f59e0b" font-size="11" font-weight="bold">Real Depth h</text>

    <!-- Apparent Depth -->
    <line x1="40" y1="80" x2="40" y2="170" stroke="#22c55e" stroke-width="1.5"/>
    <text x="35" y="130" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="end">h' = h / n</text>

    <!-- Formula -->
    <text x="275" y="275" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Apparent Shift: Δh = h(1 - 1/n)</text>
  </svg>`,

  // 12. Total Internal Reflection & Critical Angle
  totalInternalReflection: `<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="300" fill="#0f172a" rx="12"/>
    <!-- Medium Interface -->
    <line x1="30" y1="150" x2="620" y2="150" stroke="#38bdf8" stroke-width="3"/>
    <!-- Denser Medium (Bottom) -->
    <rect x="30" y="150" width="590" height="130" fill="#1e3a8a" opacity="0.3"/>
    <text x="45" y="260" fill="#60a5fa" font-size="12" font-weight="bold">Optically Denser Medium (n₁)</text>
    <text x="45" y="40" fill="#94a3b8" font-size="12" font-weight="bold">Rarer Medium (Air n₂ = 1)</text>

    <!-- Source S -->
    <circle cx="100" cy="240" r="6" fill="#f59e0b"/>
    <text x="100" y="265" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">Source (S)</text>

    <!-- Case 1: Normal Incidence -->
    <line x1="100" y1="240" x2="100" y2="60" stroke="#94a3b8" stroke-width="2"/>
    <text x="100" y="50" fill="#94a3b8" font-size="10" text-anchor="middle">i = 0</text>

    <!-- Case 2: i < C (Normal Refraction) -->
    <line x1="100" y1="240" x2="240" y2="150" stroke="#38bdf8" stroke-width="2"/>
    <line x1="240" y1="150" x2="310" y2="60" stroke="#38bdf8" stroke-width="2"/>
    <line x1="240" y1="90" x2="240" y2="210" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="240" y="175" fill="#38bdf8" font-size="10" text-anchor="middle">i &lt; C</text>

    <!-- Case 3: i = C (Critical Angle, Grazing Emergence r=90) -->
    <line x1="100" y1="240" x2="400" y2="150" stroke="#f59e0b" stroke-width="2.5"/>
    <line x1="400" y1="150" x2="520" y2="150" stroke="#ef4444" stroke-width="4"/>
    <line x1="400" y1="90" x2="400" y2="210" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="385" y="180" fill="#f59e0b" font-size="11" font-weight="bold">i = C</text>
    <text x="460" y="140" fill="#ef4444" font-size="11" font-weight="bold">r = 90° (Grazing)</text>

    <!-- Case 4: i > C (Total Internal Reflection) -->
    <line x1="100" y1="240" x2="540" y2="150" stroke="#22c55e" stroke-width="3"/>
    <line x1="540" y1="150" x2="600" y2="240" stroke="#22c55e" stroke-width="3"/>
    <line x1="540" y1="90" x2="540" y2="210" stroke="#64748b" stroke-dasharray="3,3"/>
    <text x="525" y="180" fill="#22c55e" font-size="11" font-weight="bold">i &gt; C</text>
    <text x="575" y="200" fill="#22c55e" font-size="11" font-weight="bold">TIR (100% Reflection)</text>

    <!-- Critical Angle Formula -->
    <rect x="230" y="15" width="220" height="35" rx="5" fill="#1e293b" stroke="#f59e0b"/>
    <text x="340" y="37" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">sin C = n₂ / n₁ = 1 / n</text>
  </svg>`,

  // 13. Optical Fibre Structure & Light Propagation
  opticalFibre: `<svg viewBox="0 0 650 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="240" fill="#0f172a" rx="12"/>
    <!-- Cladding Outer Tube -->
    <rect x="60" y="40" width="530" height="160" fill="#334155" rx="10"/>
    <text x="580" y="65" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="end">Cladding (Lower n₂)</text>

    <!-- Core Inner Cylinder -->
    <rect x="60" y="80" width="530" height="80" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="580" y="125" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="end">Core (Higher n₁ &gt; n₂)</text>

    <!-- Light Path undergoing successive TIR -->
    <path d="M 20 120 L 110 90 L 220 150 L 330 90 L 440 150 L 550 90 L 620 120" fill="none" stroke="#fbbf24" stroke-width="3"/>
    
    <!-- Arrows on ray -->
    <polygon points="65,105 75,100 70,112" fill="#fbbf24"/>
    <polygon points="165,120 175,125 170,115" fill="#fbbf24"/>
    <polygon points="275,120 285,115 280,125" fill="#fbbf24"/>

    <!-- Normal and TIR angle at interface -->
    <line x1="220" y1="130" x2="220" y2="180" stroke="#f87171" stroke-dasharray="3,3"/>
    <text x="235" y="170" fill="#fbbf24" font-size="11" font-weight="bold">θ &gt; C (TIR)</text>

    <!-- Condition Label -->
    <rect x="180" y="195" width="280" height="30" rx="4" fill="#0f172a" stroke="#fbbf24"/>
    <text x="320" y="215" fill="#fef08a" font-size="11" font-weight="bold" text-anchor="middle">Condition for Guidance: n_core &gt; n_cladding</text>
  </svg>`,

  // 14. Refraction at Spherical Surface
  sphericalRefraction: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="260" fill="#0f172a" rx="12"/>
    <!-- Principal axis -->
    <line x1="30" y1="130" x2="560" y2="130" stroke="#64748b" stroke-width="2"/>

    <!-- Spherical Interface -->
    <path d="M 280 30 A 200 200 0 0 1 280 230" fill="none" stroke="#38bdf8" stroke-width="4"/>
    <!-- Denser glass medium background -->
    <rect x="300" y="30" width="250" height="200" fill="#1e3a8a" opacity="0.2"/>

    <text x="120" y="55" fill="#94a3b8" font-size="12" font-weight="bold">Medium 1 (n₁)</text>
    <text x="440" y="55" fill="#38bdf8" font-size="12" font-weight="bold">Medium 2 (n₂ &gt; n₁)</text>

    <!-- Points -->
    <circle cx="90" cy="130" r="5" fill="#f87171"/><text x="90" y="155" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Object (O)</text>
    <circle cx="300" cy="130" r="4" fill="#ffffff"/><text x="300" y="155" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">P</text>
    <circle cx="430" cy="130" r="5" fill="#f59e0b"/><text x="430" y="155" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">C</text>
    <circle cx="510" cy="130" r="5" fill="#22c55e"/><text x="510" y="155" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Image (I)</text>

    <!-- Ray from O to surface -->
    <line x1="90" y1="130" x2="285" y2="70" stroke="#f87171" stroke-width="2"/>
    <!-- Normal from C through surface point -->
    <line x1="430" y1="130" x2="240" y2="50" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
    <!-- Refracted ray bent toward normal to I -->
    <line x1="285" y1="70" x2="510" y2="130" stroke="#22c55e" stroke-width="2"/>

    <!-- Standard Formula Box -->
    <rect x="120" y="200" width="360" height="40" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text x="300" y="225" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">n₂/v - n₁/u = (n₂ - n₁) / R</text>
  </svg>`,

  // 15. Convex Lens Geometry & Parameters
  convexLensGeometry: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="250" fill="#0f172a" rx="12"/>
    <line x1="20" y1="125" x2="580" y2="125" stroke="#64748b" stroke-width="2"/>

    <!-- Convex Lens Profile -->
    <path d="M 300 30 Q 330 125 300 220 Q 270 125 300 30 Z" fill="#1e3a8a" fill-opacity="0.4" stroke="#38bdf8" stroke-width="3"/>
    <line x1="300" y1="20" x2="300" y2="230" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,4"/>

    <!-- Optical Centre O -->
    <circle cx="300" cy="125" r="4" fill="#ffffff"/>
    <text x="300" y="145" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">O</text>

    <!-- Foci -->
    <circle cx="180" cy="125" r="4" fill="#22c55e"/><text x="180" y="150" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F₁</text>
    <circle cx="60" cy="125" r="4" fill="#f59e0b"/><text x="60" y="150" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">2F₁</text>

    <circle cx="420" cy="125" r="4" fill="#22c55e"/><text x="420" y="150" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F₂ (Principal Focus)</text>
    <circle cx="540" cy="125" r="4" fill="#f59e0b"/><text x="540" y="150" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">2F₂</text>

    <!-- Dimension Focal length f -->
    <line x1="300" y1="70" x2="420" y2="70" stroke="#22c55e" stroke-width="1.5" marker-start="url(#arr-green-rev)" marker-end="url(#arr-green)"/>
    <text x="360" y="60" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">+f (Converging, f &gt; 0)</text>

    <!-- Label -->
    <rect x="180" y="195" width="240" height="30" rx="4" fill="#1e293b"/>
    <text x="300" y="215" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Convex Lens: Power P &gt; 0, Focal Length f &gt; 0</text>
  </svg>`,

  // 16. Concave Lens Geometry
  concaveLensGeometry: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="250" fill="#0f172a" rx="12"/>
    <line x1="20" y1="125" x2="580" y2="125" stroke="#64748b" stroke-width="2"/>

    <!-- Concave Lens Profile -->
    <path d="M 280 30 Q 300 125 280 220 L 320 220 Q 300 125 320 30 Z" fill="#1e3a8a" fill-opacity="0.4" stroke="#38bdf8" stroke-width="3"/>
    <line x1="300" y1="20" x2="300" y2="230" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,4"/>

    <!-- Optical Centre O -->
    <circle cx="300" cy="125" r="4" fill="#ffffff"/><text x="300" y="145" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">O</text>

    <!-- Foci -->
    <circle cx="180" cy="125" r="4" fill="#22c55e"/><text x="180" y="150" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F₁ (Virtual Focus)</text>
    <circle cx="420" cy="125" r="4" fill="#22c55e"/><text x="420" y="150" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">F₂</text>

    <!-- Dimension -f -->
    <line x1="180" y1="70" x2="300" y2="70" stroke="#22c55e" stroke-width="1.5" marker-start="url(#arr-green-rev)" marker-end="url(#arr-green)"/>
    <text x="240" y="60" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">-f (Diverging, f &lt; 0)</text>

    <!-- Label -->
    <rect x="180" y="195" width="240" height="30" rx="4" fill="#1e293b"/>
    <text x="300" y="215" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Concave Lens: Power P &lt; 0, Focal Length f &lt; 0</text>
  </svg>`,

  // 17. Convex Lens: Object between F and 2F (Real, Inverted, Magnified)
  convexLensBetweenFand2F: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="280" fill="#0f172a" rx="12"/>
    <line x1="20" y1="150" x2="620" y2="150" stroke="#64748b" stroke-width="2"/>
    <!-- Lens -->
    <path d="M 280 20 Q 300 150 280 260 Q 260 150 280 20 Z" fill="#1e3a8a" fill-opacity="0.3" stroke="#38bdf8" stroke-width="3"/>

    <!-- Points -->
    <circle cx="80" cy="150" r="4" fill="#f59e0b"/><text x="80" y="170" fill="#f59e0b" font-size="11" text-anchor="middle">2F₁</text>
    <circle cx="180" cy="150" r="4" fill="#22c55e"/><text x="180" y="170" fill="#22c55e" font-size="11" text-anchor="middle">F₁</text>
    <circle cx="280" cy="150" r="4" fill="#ffffff"/><text x="280" y="170" fill="#ffffff" font-size="11" text-anchor="middle">O</text>
    <circle cx="380" cy="150" r="4" fill="#22c55e"/><text x="380" y="170" fill="#22c55e" font-size="11" text-anchor="middle">F₂</text>
    <circle cx="480" cy="150" r="4" fill="#f59e0b"/><text x="480" y="170" fill="#f59e0b" font-size="11" text-anchor="middle">2F₂</text>

    <!-- Object AB between F and 2F -->
    <line x1="130" y1="150" x2="130" y2="90" stroke="#f87171" stroke-width="4" marker-end="url(#arr-red)"/>
    <text x="130" y="80" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Object</text>

    <!-- Ray 1: Parallel -> Refracts through F2 -->
    <line x1="130" y1="90" x2="280" y2="90" stroke="#38bdf8" stroke-width="2"/>
    <line x1="280" y1="90" x2="560" y2="230" stroke="#38bdf8" stroke-width="2"/>

    <!-- Ray 2: Straight through Optical Centre O -->
    <line x1="130" y1="90" x2="560" y2="230" stroke="#22c55e" stroke-width="2"/>

    <!-- Image A'B' Beyond 2F2 -->
    <line x1="530" y1="150" x2="530" y2="220" stroke="#38bdf8" stroke-width="4" marker-end="url(#arr-blue)"/>
    <text x="530" y="240" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Image (Magnified)</text>

    <!-- Summary Box -->
    <rect x="20" y="20" width="220" height="45" rx="5" fill="#1e293b" stroke="#38bdf8"/>
    <text x="30" y="38" fill="#f8fafc" font-size="11" font-weight="bold">Object: Between F and 2F</text>
    <text x="30" y="54" fill="#38bdf8" font-size="10">Image: Beyond 2F | Real &amp; Inverted | m &lt; -1</text>
  </svg>`,

  // 18. Convex Lens: Object between F and Optical Centre (Simple Microscope Mode)
  convexLensBetweenFandO: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="280" fill="#0f172a" rx="12"/>
    <line x1="20" y1="170" x2="620" y2="170" stroke="#64748b" stroke-width="2"/>
    <path d="M 380 30 Q 400 170 380 260 Q 360 170 380 30 Z" fill="#1e3a8a" fill-opacity="0.3" stroke="#38bdf8" stroke-width="3"/>

    <!-- Points -->
    <circle cx="220" cy="170" r="4" fill="#22c55e"/><text x="220" y="195" fill="#22c55e" font-size="11" text-anchor="middle">F₁</text>
    <circle cx="380" cy="170" r="4" fill="#ffffff"/><text x="380" y="195" fill="#ffffff" font-size="11" text-anchor="middle">O</text>
    <circle cx="540" cy="170" r="4" fill="#22c55e"/><text x="540" y="195" fill="#22c55e" font-size="11" text-anchor="middle">F₂</text>

    <!-- Object AB between F1 and O -->
    <line x1="300" y1="170" x2="300" y2="120" stroke="#f87171" stroke-width="4" marker-end="url(#arr-red)"/>
    <text x="300" y="110" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Object</text>

    <!-- Ray 1: Parallel -> Refracts through F2 -->
    <line x1="300" y1="120" x2="380" y2="120" stroke="#38bdf8" stroke-width="2"/>
    <line x1="380" y1="120" x2="600" y2="190" stroke="#38bdf8" stroke-width="2"/>
    <!-- Virtual extension backward -->
    <line x1="380" y1="120" x2="140" y2="40" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>

    <!-- Ray 2: Through O -->
    <line x1="300" y1="120" x2="380" y2="170" stroke="#22c55e" stroke-width="2"/>
    <line x1="380" y1="170" x2="550" y2="240" stroke="#22c55e" stroke-width="2"/>
    <!-- Virtual extension backward -->
    <line x1="380" y1="170" x2="140" y2="40" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,3"/>

    <!-- Virtual Magnified Erect Image -->
    <line x1="140" y1="170" x2="140" y2="40" stroke="#38bdf8" stroke-width="4" stroke-dasharray="5,2" marker-end="url(#arr-blue)"/>
    <text x="140" y="25" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Virtual Image (Magnifying Glass)</text>

    <!-- Summary Box -->
    <rect x="20" y="20" width="220" height="45" rx="5" fill="#1e293b" stroke="#22c55e"/>
    <text x="30" y="38" fill="#f8fafc" font-size="11" font-weight="bold">Simple Microscope Action</text>
    <text x="30" y="54" fill="#22c55e" font-size="10">Virtual, Erect, Magnified (m &gt; +1)</text>
  </svg>`,

  // 19. Lens Maker Geometry (Radii R1 and R2)
  lensMakerGeometry: `<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="260" fill="#0f172a" rx="12"/>
    <line x1="20" y1="130" x2="580" y2="130" stroke="#64748b" stroke-width="2"/>

    <!-- Biconvex Lens -->
    <path d="M 300 40 Q 330 130 300 220 Q 270 130 300 40 Z" fill="#1e3a8a" fill-opacity="0.3" stroke="#38bdf8" stroke-width="3"/>

    <!-- Surface 1 (Left surface, center C1 on right) -->
    <circle cx="480" cy="130" r="4" fill="#f59e0b"/><text x="480" y="150" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">C₁</text>
    <line x1="300" y1="80" x2="480" y2="130" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="390" y="95" fill="#f59e0b" font-size="12" font-weight="bold">+R₁ (Positive)</text>

    <!-- Surface 2 (Right surface, center C2 on left) -->
    <circle cx="120" cy="130" r="4" fill="#ec4899"/><text x="120" y="150" fill="#ec4899" font-size="11" font-weight="bold" text-anchor="middle">C₂</text>
    <line x1="300" y1="80" x2="120" y2="130" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="210" y="95" fill="#ec4899" font-size="12" font-weight="bold">-R₂ (Negative)</text>

    <!-- Refractive index μ -->
    <text x="300" y="170" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Glass (μ)</text>

    <!-- Lens Maker Formula -->
    <rect x="120" y="195" width="360" height="42" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text x="300" y="222" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">1/f = (μ - 1) [ 1/R₁ - 1/R₂ ]</text>
  </svg>`,

  // 20. Prism Geometry & Deviation Angles
  prismGeometry: `<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="320" fill="#0f172a" rx="12"/>
    
    <!-- Triangular Prism -->
    <polygon points="300,50 150,260 450,260" fill="#1e3a8a" fill-opacity="0.3" stroke="#38bdf8" stroke-width="3"/>
    <text x="300" y="80" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">A (Angle of Prism)</text>

    <!-- Incident Ray -->
    <line x1="50" y1="210" x2="200" y2="190" stroke="#fbbf24" stroke-width="3"/>
    <text x="40" y="205" fill="#fbbf24" font-size="12" font-weight="bold">Incident Ray</text>

    <!-- Refracted Ray inside prism -->
    <line x1="200" y1="190" x2="380" y2="200" stroke="#22c55e" stroke-width="3"/>

    <!-- Emergent Ray -->
    <line x1="380" y1="200" x2="520" y2="260" stroke="#fbbf24" stroke-width="3"/>
    <text x="530" y="270" fill="#fbbf24" font-size="12" font-weight="bold">Emergent Ray</text>

    <!-- Normals -->
    <line x1="140" y1="140" x2="280" y2="250" stroke="#94a3b8" stroke-dasharray="3,3"/>
    <line x1="440" y1="140" x2="300" y2="250" stroke="#94a3b8" stroke-dasharray="3,3"/>

    <!-- Angles r1 and r2 -->
    <text x="235" y="205" fill="#22c55e" font-size="11" font-weight="bold">r₁</text>
    <text x="350" y="210" fill="#22c55e" font-size="11" font-weight="bold">r₂</text>

    <!-- Angles i and e -->
    <text x="170" y="175" fill="#fbbf24" font-size="12" font-weight="bold">i</text>
    <text x="410" y="190" fill="#fbbf24" font-size="12" font-weight="bold">e</text>

    <!-- Straight extensions for Angle of Deviation δ -->
    <line x1="200" y1="190" x2="450" y2="157" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="380" y1="200" x2="310" y2="140" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,4"/>
    <text x="400" y="145" fill="#ef4444" font-size="14" font-weight="bold">δ (Deviation)</text>

    <!-- Essential Relations Box -->
    <rect x="20" y="270" width="260" height="40" rx="5" fill="#1e293b" stroke="#38bdf8"/>
    <text x="150" y="295" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">A = r₁ + r₂  |  δ = i + e - A</text>
  </svg>`,

  // 21. Minimum Deviation Condition
  minimumDeviation: `<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto font-sans">
    <rect width="600" height="280" fill="#0f172a" rx="12"/>
    <!-- Triangular Prism -->
    <polygon points="300,40 160,230 440,230" fill="#1e3a8a" fill-opacity="0.3" stroke="#38bdf8" stroke-width="3"/>
    <text x="300" y="70" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">A</text>

    <!-- Symmetrical Ray (Parallel to Base) -->
    <line x1="70" y1="180" x2="210" y2="160" stroke="#f59e0b" stroke-width="3"/>
    <line x1="210" y1="160" x2="390" y2="160" stroke="#22c55e" stroke-width="3"/>
    <line x1="390" y1="160" x2="530" y2="180" stroke="#f59e0b" stroke-width="3"/>

    <text x="300" y="150" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Ray Parallel to Base (r₁ = r₂ = A/2)</text>
    <text x="160" y="145" fill="#f59e0b" font-size="12" font-weight="bold">i = e</text>

    <!-- Formula Box -->
    <rect x="80" y="225" width="440" height="45" rx="6" fill="#1e293b" stroke="#f59e0b"/>
    <text x="300" y="252" fill="#fef08a" font-size="13" font-weight="bold" text-anchor="middle">μ = sin [ (A + δ_m) / 2 ] / sin (A / 2)</text>
  </svg>`,

  // 22. Dispersion of White Light into VIBGYOR Spectrum
  dispersionPrism: `<svg viewBox="0 0 650 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="300" fill="#0f172a" rx="12"/>
    <polygon points="260,40 140,240 380,240" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
    <text x="260" y="70" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Glass Prism</text>

    <!-- White Light Beam -->
    <line x1="30" y1="170" x2="180" y2="150" stroke="#ffffff" stroke-width="4"/>
    <text x="40" y="155" fill="#ffffff" font-size="13" font-weight="bold">White Light Beam</text>

    <!-- Dispersed Rays inside and exiting -->
    <!-- Red (Least bent) -->
    <line x1="180" y1="150" x2="310" y2="160" stroke="#ef4444" stroke-width="2.5"/>
    <line x1="310" y1="160" x2="520" y2="170" stroke="#ef4444" stroke-width="2.5"/>
    <text x="535" y="175" fill="#ef4444" font-size="13" font-weight="bold">Red (λ max, n min, δ min)</text>

    <!-- Yellow / Green (Middle) -->
    <line x1="180" y1="150" x2="313" y2="170" stroke="#eab308" stroke-width="2"/>
    <line x1="313" y1="170" x2="520" y2="195" stroke="#eab308" stroke-width="2"/>

    <!-- Violet (Most bent) -->
    <line x1="180" y1="150" x2="317" y2="180" stroke="#a855f7" stroke-width="2.5"/>
    <line x1="317" y1="180" x2="520" y2="230" stroke="#a855f7" stroke-width="2.5"/>
    <text x="535" y="235" fill="#a855f7" font-size="13" font-weight="bold">Violet (λ min, n max, δ max)</text>

    <!-- Cauchy's Formula Box -->
    <rect x="20" y="250" width="340" height="38" rx="5" fill="#1e293b" stroke="#a855f7"/>
    <text x="190" y="274" fill="#e9d5ff" font-size="11" font-weight="bold" text-anchor="middle">Cauchy's Law: n(λ) = A + B/λ² ⇒ n_violet &gt; n_red</text>
  </svg>`,

  // 23. Simple Microscope Ray Diagram (Final Image at D)
  simpleMicroscopeRay: `<svg viewBox="0 0 650 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="650" height="280" fill="#0f172a" rx="12"/>
    <line x1="20" y1="170" x2="620" y2="170" stroke="#64748b" stroke-width="2"/>
    <path d="M 440 30 Q 460 170 440 260 Q 420 170 440 30 Z" fill="#1e3a8a" fill-opacity="0.3" stroke="#38bdf8" stroke-width="3"/>
    <circle cx="440" cy="170" r="4" fill="#ffffff"/><text x="440" y="195" fill="#ffffff" font-size="11" text-anchor="middle">O</text>

    <!-- Focus F -->
    <circle cx="300" cy="170" r="4" fill="#22c55e"/><text x="300" y="195" fill="#22c55e" font-size="11" text-anchor="middle">F</text>

    <!-- Small Object AB between F and O -->
    <line x1="360" y1="170" x2="360" y2="125" stroke="#f87171" stroke-width="4" marker-end="url(#arr-red)"/>
    <text x="360" y="115" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Object (h)</text>

    <!-- Eye placed close to lens -->
    <g transform="translate(480, 140)">
      <path d="M 0 15 Q 20 0 40 15 Q 20 30 0 15 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="20" cy="15" r="5" fill="#38bdf8"/>
    </g>

    <!-- Rays -->
    <line x1="360" y1="125" x2="440" y2="125" stroke="#38bdf8" stroke-width="2"/>
    <line x1="440" y1="125" x2="520" y2="160" stroke="#38bdf8" stroke-width="2"/>
    <line x1="440" y1="125" x2="160" y2="30" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,3"/>

    <line x1="360" y1="125" x2="440" y2="170" stroke="#22c55e" stroke-width="2"/>
    <line x1="440" y1="170" x2="520" y2="210" stroke="#22c55e" stroke-width="2"/>
    <line x1="440" y1="170" x2="160" y2="30" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,3"/>

    <!-- Virtual Magnified Image at near point D = 25 cm -->
    <line x1="160" y1="170" x2="160" y2="30" stroke="#38bdf8" stroke-width="4" stroke-dasharray="4,2" marker-end="url(#arr-blue)"/>
    <text x="160" y="20" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Virtual Image at D = 25 cm</text>

    <!-- Magnifying Power Box -->
    <rect x="20" y="205" width="300" height="60" rx="5" fill="#1e293b" stroke="#38bdf8"/>
    <text x="30" y="228" fill="#fef08a" font-size="12" font-weight="bold">Image at Near Point: M = 1 + D/f</text>
    <text x="30" y="250" fill="#38bdf8" font-size="11">Image at Infinity (Relaxed Eye): M = D/f</text>
  </svg>`,

  // 24. Astronomical Telescope in Normal Adjustment
  astronomicalTelescopeRay: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-2xl mx-auto font-sans">
    <rect width="700" height="280" fill="#0f172a" rx="12"/>
    <line x1="20" y1="140" x2="680" y2="140" stroke="#64748b" stroke-width="2"/>

    <!-- Objective Lens (Large f_o, Large Aperture) -->
    <path d="M 220 20 Q 245 140 220 260 Q 195 140 220 20 Z" fill="#1e3a8a" fill-opacity="0.3" stroke="#38bdf8" stroke-width="3"/>
    <text x="220" y="15" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Objective (f_o, Large)</text>

    <!-- Eyepiece Lens (Small f_e, Small Aperture) -->
    <path d="M 520 60 Q 535 140 520 220 Q 505 140 520 60 Z" fill="#1e3a8a" fill-opacity="0.3" stroke="#22c55e" stroke-width="3"/>
    <text x="520" y="50" fill="#22c55e" font-size="12" font-weight="bold" text-anchor="middle">Eyepiece (f_e, Small)</text>

    <!-- Parallel rays from distant star -->
    <line x1="30" y1="80" x2="220" y2="100" stroke="#fbbf24" stroke-width="2"/>
    <line x1="30" y1="140" x2="220" y2="140" stroke="#fbbf24" stroke-width="2"/>
    <line x1="30" y1="200" x2="220" y2="180" stroke="#fbbf24" stroke-width="2"/>

    <!-- Focused at Intermediate Image A'B' at F_o = F_e -->
    <line x1="220" y1="100" x2="420" y2="180" stroke="#fbbf24" stroke-width="2"/>
    <line x1="220" y1="140" x2="420" y2="180" stroke="#fbbf24" stroke-width="2"/>
    <line x1="220" y1="180" x2="420" y2="180" stroke="#fbbf24" stroke-width="2"/>

    <!-- Intermediate Real Inverted Image A'B' -->
    <line x1="420" y1="140" x2="420" y2="180" stroke="#ef4444" stroke-width="3" marker-end="url(#arr-red)"/>
    <text x="420" y="195" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">A'B' at F_o &amp; F_e</text>

    <!-- Parallel emergent rays from Eyepiece to relaxed eye at infinity -->
    <line x1="420" y1="180" x2="520" y2="120" stroke="#22c55e" stroke-width="2"/>
    <line x1="520" y1="120" x2="660" y2="90" stroke="#22c55e" stroke-width="2"/>
    <line x1="420" y1="180" x2="520" y2="160" stroke="#22c55e" stroke-width="2"/>
    <line x1="520" y1="160" x2="660" y2="130" stroke="#22c55e" stroke-width="2"/>

    <!-- Tube Length & Magnification Formula -->
    <rect x="20" y="215" width="340" height="55" rx="5" fill="#1e293b" stroke="#38bdf8"/>
    <text x="30" y="235" fill="#fef08a" font-size="11" font-weight="bold">Normal Adjustment (Image at ∞):</text>
    <text x="30" y="255" fill="#38bdf8" font-size="11">M = f_o / f_e   |   Tube Length L = f_o + f_e</text>
  </svg>`
};
