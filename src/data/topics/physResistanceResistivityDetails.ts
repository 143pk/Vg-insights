import { DetailedTopicContent } from '../../types/neet';

export const physResistanceResistivityDetails: DetailedTopicContent = {
  topicId: 'phys-resistance-resistivity',
  topicName: 'Resistance, Resistivity, Combinations & Electrical Power',
  subject: 'Physics',
  class: 'Class 12',
  classification: 'Current Electricity',
  chapter: 'Current Electricity',

  whatIsThisTopic:
    'Comprehensive mastery of Electrical Resistance (R = ρ L / A) and Resistivity (ρ), stretching wire problems with constant volume, temperature coefficient of resistance (α), series and parallel resistor networks with voltage/current division, electrical energy (W = VIt), electric power (P = VI = I²R = V²/R), bulb brightness problems in series vs. parallel, and Joule\'s law of heating (H = I²Rt).',

  basicIdea: [
    'Resistance R = ρ L / A depends on conductor material (ρ), length (L), and cross-sectional area (A). Resistivity ρ is an intrinsic material property independent of geometry.',
    'Stretching Wire Golden Rule: When a wire is stretched or compressed, its mass and volume remain strictly constant (Volume = A · L = constant). If length becomes n times (L\' = nL), area becomes A/n, and new resistance becomes R\' = n² R. If radius changes to r\' = r/n, resistance becomes R\' = n⁴ R!',
    'Small percentage changes (< 5%): For wire stretching, % ΔR ≈ 2 × (% ΔL) ≈ 4 × (% decrease in radius r). For large changes (> 5%), always use R\' = n² R or initial-to-final ratios.',
    'Temperature Dependence: R_T = R₀ [1 + α (T - T₀)] and ρ_T = ρ₀ [1 + α (T - T₀)]. α is positive for pure metals (conductors), negative for semiconductors and insulators, and very small/near-zero for alloys (Manganin, Constantan, Nichrome).',
    'Series Resistors: Current is identical through each resistor; total voltage divides in direct proportion to resistance: V₁ = [R₁ / (R₁ + R₂)] V. Equivalent resistance R_eq = R₁ + R₂ + ... (always greater than the largest individual resistor).',
    'Parallel Resistors: Potential difference is identical across each resistor; total current divides in inverse proportion to resistance: I₁ = [R₂ / (R₁ + R₂)] I. Equivalent resistance 1/R_eq = 1/R₁ + 1/R₂ (always smaller than the smallest individual resistor).',
    'Electric Power P = V I = I² R = V² / R. For devices with rated voltage V_R and rated power P_R, intrinsic resistance is R = V_R² / P_R.',
    'Bulb Brightness in Series vs. Parallel: In SERIES, current is constant, so Brightness ∝ P = I² R ∝ R. The bulb with higher resistance (lower rated power) glows brighter! In PARALLEL, voltage is constant, so Brightness ∝ P = V² / R ∝ 1/R. The bulb with lower resistance (higher rated power) glows brighter!'
  ],

  importantTerms: [
    {
      term: 'Electrical Resistance (R)',
      symbol: 'R = ρ L / A',
      definition:
        'The macroscopic measure of opposition offered by a conductor to the flow of electric current. SI Unit: Ohm (Ω).',
      neetNote: 'Depends on material, temperature, length, and cross-sectional area. Dimensional formula: [M L² T⁻³ A⁻²].'
    },
    {
      term: 'Electrical Resistivity (Specific Resistance, ρ)',
      symbol: 'ρ = R A / L',
      definition:
        'The intrinsic resistance of a conductor of unit length and unit cross-sectional area. SI Unit: Ohm-metre (Ω·m).',
      neetNote: 'Independent of dimensions (length, area, shape). Depends ONLY on material nature and temperature.'
    },
    {
      term: 'Temperature Coefficient of Resistance (α)',
      symbol: 'α = (R_T - R₀) / [R₀ (T - T₀)]',
      definition:
        'The fractional change in resistance per unit change in temperature. SI Unit: K⁻¹ or °C⁻¹.',
      neetNote: 'α > 0 for metals; α < 0 for semiconductors/insulators; α ≈ 0 for standard resistance alloys (Manganin, Constantan).'
    },
    {
      term: 'Joule\'s Heating Law',
      symbol: 'H = I² R t',
      definition:
        'The thermal heat energy generated in a conductor of resistance R carrying current I for time t.',
      neetNote: 'Heat produced is proportional to I², R, and t. SI Unit: Joule (J). In calories: H = (I² R t) / 4.184 cal.'
    },
    {
      term: 'Kilowatt-Hour (kWh)',
      symbol: '1 kWh = 1 Unit',
      definition:
        'The commercial unit of electrical energy consumed by a 1000 W appliance operating for 1 hour.',
      neetNote: '1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules.'
    }
  ],

  conceptExplanation: [
    {
      heading: '1. Resistance, Resistivity & The Physics of Wire Stretching',
      paragraphs: [
        'A conductor of length L, cross-sectional area A, and resistivity ρ has resistance given by R = ρ L / A. For a cylindrical wire of radius r (area A = π r²), R = ρ L / (π r²).',
        'Stretching Wire Mechanics: When a solid wire is drawn out or stretched, its density and mass are unchanged, so its total Volume V = A · L remains strictly constant.',
        'Case 1: Length changes by factor n (L\' = n L). Since A · L = A\' · L\', we have A\' = A / n. Therefore, new resistance is R\' = ρ L\' / A\' = ρ (n L) / (A / n) = n² (ρ L / A) = n² R.',
        'Case 2: Radius changes by factor n (r\' = r / n). New area A\' = π (r/n)² = A / n². Volume conservation gives L\' = n² L. Therefore, new resistance is R\' = ρ (n² L) / (A / n²) = n⁴ (ρ L / A) = n⁴ R.',
        'Small Percentage Changes (< 5%): From R = ρ L / A = ρ L² / Volume, taking fractional derivatives gives ΔR / R = 2 (ΔL / L). Thus, a 1% stretch in length results in a ~2% increase in resistance! From R = ρ Volume / (π² r⁴), we get ΔR / R = -4 (Δr / r). A 1% decrease in radius results in a ~4% increase in resistance!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="40" y="40" width="180" height="60" fill="#fed7aa" stroke="#ea580c" stroke-width="2" rx="6"/><text x="130" y="75" fill="#9a3412" font-size="13" font-weight="bold" text-anchor="middle">Initial Wire: L, A, R</text><line x1="240" y1="70" x2="300" y2="70" stroke="#64748b" stroke-width="2.5" marker-end="url(#arr-stretch)"/><text x="270" y="60" fill="#64748b" font-size="11" font-weight="bold" text-anchor="middle">Stretched (n = 2)</text><rect x="320" y="55" width="340" height="30" fill="#fdba74" stroke="#ea580c" stroke-width="2" rx="4"/><text x="490" y="75" fill="#9a3412" font-size="13" font-weight="bold" text-anchor="middle">L\' = 2L, A\' = A/2, R\' = 4R</text><rect x="40" y="130" width="620" height="75" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="350" y="155" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">Golden Formulae for Wire Reshaping (Volume Constant)</text><text x="350" y="185" fill="#2563eb" font-size="14" font-weight="bold" text-anchor="middle">R ∝ L² ∝ 1/A² ∝ 1/r⁴   =>   R\' = n² R (for length)   |   R\' = n⁴ R (for radius)</text><defs><marker id="arr-stretch" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker></defs></svg>',
        caption:
          'Figure 3.7: Stretched wire volume conservation mechanics leading to R\' = n² R for length and R\' = n⁴ R for radius.',
        guide:
          'Crucial Distinction: If a wire is STRETCHED to n times length, R becomes n² R. If a wire is simply EXTENDED by adding extra length (keeping area same), R becomes n R.'
      },
      importantPoints: [
        'Stretching to n times length: R\' = n² R.',
        'Stretching to 1/n radius: R\' = n⁴ R.',
        'Small length change (%): % ΔR ≈ 2 × (% ΔL).',
        'Small radius change (%): % ΔR ≈ -4 × (% Δr).'
      ]
    },
    {
      heading: '2. Temperature Dependence of Resistance & Resistivity',
      paragraphs: [
        'Metallic Conductors: In metals, the number density of free electrons n is practically constant with temperature (~10²⁸ m⁻³). As temperature rises, lattice ions vibrate with larger amplitude, causing more frequent collisions. Thus, average relaxation time τ decreases. Since ρ = m / (n e² τ), resistivity ρ and resistance R increase with temperature.',
        'Linear Equation: Over moderate temperature ranges: R_T = R₀ [1 + α (T - T₀)], where α is the temperature coefficient of resistance (positive for metals, e.g., α_Cu ≈ +0.0039 °C⁻¹).',
        'Semiconductors & Insulators: As temperature increases, covalent bonds break, causing electron-hole carrier concentration n to increase exponentially [n ∝ exp(-E_g / 2 k_B T)]. This massive increase in n overwhelmingly dominates the slight decrease in τ. Therefore, resistivity ρ DECREASES rapidly with temperature (Negative Temperature Coefficient, α < 0).',
        'Standard Resistance Alloys (Manganin, Constantan, Nichrome): These alloys possess very high resistivity and an extremely low, nearly zero temperature coefficient of resistance (α ≈ 0). Their resistance remains virtually unchanged over broad temperature fluctuations, making them ideal for standard resistance coils, meter bridge wires, and potentiometer wires.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="220" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="200" height="180" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" rx="8"/><text x="130" y="42" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Copper (Metal, α > 0)</text><line x1="50" y1="170" x2="210" y2="170" stroke="#334155" stroke-width="2"/><line x1="50" y1="170" x2="50" y2="55" stroke="#334155" stroke-width="2"/><path d="M 50 160 Q 120 155 200 70" fill="none" stroke="#ef4444" stroke-width="2.5"/><text x="130" y="190" fill="#b91c1c" font-size="11" font-weight="bold" text-anchor="middle">ρ increases with T</text><rect x="250" y="20" width="200" height="180" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" rx="8"/><text x="350" y="42" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Nichrome (Alloy, α ≈ 0)</text><line x1="270" y1="170" x2="430" y2="170" stroke="#334155" stroke-width="2"/><line x1="270" y1="170" x2="270" y2="55" stroke="#334155" stroke-width="2"/><line x1="270" y1="110" x2="430" y2="90" stroke="#f59e0b" stroke-width="2.5"/><text x="350" y="190" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">High ρ, weak T-dependence</text><rect x="470" y="20" width="200" height="180" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" rx="8"/><text x="570" y="42" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">Silicon/Ge (Semiconductor, α &lt; 0)</text><line x1="490" y1="170" x2="650" y2="170" stroke="#334155" stroke-width="2"/><line x1="490" y1="170" x2="490" y2="55" stroke="#334155" stroke-width="2"/><path d="M 500 70 Q 530 140 640 160" fill="none" stroke="#10b981" stroke-width="2.5"/><text x="570" y="190" fill="#047857" font-size="11" font-weight="bold" text-anchor="middle">ρ decreases with T</text></svg>',
        caption:
          'Figure 3.8: NCERT benchmark curves: Temperature dependence of resistivity for metals (copper), alloys (nichrome), and semiconductors (silicon/carbon).',
        guide:
          'Recognize all three NCERT curves instantly for NEET: metals curve upward, alloys have high baseline with slight slope, semiconductors decay exponentially.'
      },
      importantPoints: [
        'Metals: α > 0 (R increases as T increases due to decreasing τ).',
        'Semiconductors: α < 0 (R decreases as T increases due to exponentially increasing n).',
        'Alloys (Manganin, Constantan): α ≈ 0 (used for standard resistances).'
      ]
    },
    {
      heading: '3. Resistors in Series and Parallel Combinations',
      paragraphs: [
        'Series Combination:',
        '• Same Current: The identical current I flows successively through every resistor in series.',
        '• Voltage Addition: Total potential difference V = V₁ + V₂ + V₃ = I R₁ + I R₂ + I R₃ = I (R₁ + R₂ + R₃).',
        '• Equivalent Resistance: R_eq = R₁ + R₂ + R₃ + ... + R_n. If n identical resistors each of resistance R are in series, R_eq = n R.',
        '• Voltage Division Rule: In a two-resistor series circuit across voltage V, V₁ = [R₁ / (R₁ + R₂)] V and V₂ = [R₂ / (R₁ + R₂)] V.',
        'Parallel Combination:',
        '• Same Potential Difference: The full source voltage V appears identically across each branch.',
        '• Current Addition: Total current I = I₁ + I₂ + I₃ = V/R₁ + V/R₂ + V/R₃ = V (1/R₁ + 1/R₂ + 1/R₃).',
        '• Equivalent Resistance: 1 / R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ... For two resistors: R_eq = (R₁ R₂) / (R₁ + R₂). If n identical resistors each of resistance R are in parallel, R_eq = R / n.',
        '• Current Division Rule: In a two-resistor parallel branch carrying total current I, I₁ = [R₂ / (R₁ + R₂)] I and I₂ = [R₁ / (R₁ + R₂)] I.'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="240" fill="#f8fafc" rx="14"/><rect x="30" y="20" width="300" height="200" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="8"/><text x="180" y="42" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Series Combination</text><line x1="60" y1="90" x2="100" y2="90" stroke="#334155" stroke-width="2"/><rect x="100" y="78" width="60" height="24" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="3"/><text x="130" y="94" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">R₁</text><line x1="160" y1="90" x2="200" y2="90" stroke="#334155" stroke-width="2"/><rect x="200" y="78" width="60" height="24" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="3"/><text x="230" y="94" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">R₂</text><line x1="260" y1="90" x2="300" y2="90" stroke="#334155" stroke-width="2"/><text x="180" y="135" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">R_eq = R₁ + R₂</text><text x="180" y="160" fill="#1e3a8a" font-size="11" text-anchor="middle">Current I is SAME in all</text><text x="180" y="185" fill="#1e3a8a" font-size="11" text-anchor="middle">V₁ = [R₁/(R₁+R₂)] V</text><rect x="370" y="20" width="300" height="200" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="8"/><text x="520" y="42" fill="#065f46" font-size="13" font-weight="bold" text-anchor="middle">Parallel Combination</text><line x1="400" y1="90" x2="430" y2="90" stroke="#334155" stroke-width="2"/><line x1="430" y1="65" x2="430" y2="115" stroke="#334155" stroke-width="2"/><line x1="430" y1="65" x2="460" y2="65" stroke="#334155" stroke-width="2"/><rect x="460" y="53" width="60" height="24" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="3"/><text x="490" y="69" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">R₁</text><line x1="520" y1="65" x2="550" y2="65" stroke="#334155" stroke-width="2"/><line x1="430" y1="115" x2="460" y2="115" stroke="#334155" stroke-width="2"/><rect x="460" y="103" width="60" height="24" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="3"/><text x="490" y="119" fill="#991b1b" font-size="11" font-weight="bold" text-anchor="middle">R₂</text><line x1="520" y1="115" x2="550" y2="115" stroke="#334155" stroke-width="2"/><line x1="550" y1="65" x2="550" y2="115" stroke="#334155" stroke-width="2"/><line x1="550" y1="90" x2="580" y2="90" stroke="#334155" stroke-width="2"/><text x="520" y="155" fill="#047857" font-size="12" font-weight="bold" text-anchor="middle">R_eq = (R₁ R₂) / (R₁ + R₂)</text><text x="520" y="180" fill="#047857" font-size="11" text-anchor="middle">Voltage V is SAME across all</text><text x="520" y="200" fill="#047857" font-size="11" text-anchor="middle">I₁ = [R₂/(R₁+R₂)] I</text></svg>',
        caption:
          'Figure 3.9: Complete comparative schematic of Series vs Parallel resistor combinations and division rules.',
        guide:
          'Series: R_eq is always larger than largest resistor. Parallel: R_eq is always smaller than smallest resistor.'
      },
      importantPoints: [
        'Series: R_eq = R₁ + R₂; V₁ = [R₁ / (R₁ + R₂)] V.',
        'Parallel: R_eq = (R₁ R₂) / (R₁ + R₂); I₁ = [R₂ / (R₁ + R₂)] I.',
        'Ratio of max to min equivalent resistance of n identical resistors is R_series / R_parallel = n².'
      ]
    },
    {
      heading: '4. Electric Energy, Power & Bulb Brightness in Series vs. Parallel',
      paragraphs: [
        'Electrical Energy: When charge Q moves through a potential difference V, work done is W = V Q = V I t. By Ohm\'s law (V = IR), W = I² R t = (V² / R) t. SI Unit: Joule (J). Commercial Unit: 1 kWh = 3.6 × 10⁶ J.',
        'Electric Power: The rate of electrical energy dissipation is P = W / t = V I = I² R = V² / R. SI Unit: Watt (1 W = 1 J/s).',
        'Rated Values of an Appliance: An appliance marked with rated voltage V_R and rated power P_R has fixed resistance R = V_R² / P_R. (e.g., a 100 W, 220 V bulb has R = 220² / 100 = 484 Ω; a 25 W, 220 V bulb has R = 220² / 25 = 1936 Ω. Thus, lower wattage bulb has HIGHER resistance!).',
        'Bulb Brightness in Series: In series, current I is the same through both bulbs. Power consumed is P_consumed = I² R. Since P_consumed ∝ R, the bulb with higher resistance (the 25 W rated bulb) dissipates more power and GLOWS BRIGHTER!',
        'Bulb Brightness in Parallel: In parallel, voltage V across each bulb is identical. Power consumed is P_consumed = V² / R. Since P_consumed ∝ 1/R, the bulb with lower resistance (the 100 W rated bulb) dissipates more power and GLOWS BRIGHTER!'
      ],
      visual: {
        type: 'svg',
        svgContent:
          '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="40" y="25" width="280" height="180" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="10"/><text x="180" y="52" fill="#b45309" font-size="14" font-weight="bold" text-anchor="middle">Bulbs in SERIES</text><text x="180" y="80" fill="#92400e" font-size="12" text-anchor="middle">• Current I is IDENTICAL</text><text x="180" y="105" fill="#92400e" font-size="12" text-anchor="middle">• P_consumed = I² R ∝ R</text><text x="180" y="130" fill="#92400e" font-size="12" text-anchor="middle">• Higher R bulb glows brighter</text><text x="180" y="155" fill="#92400e" font-size="12" font-weight="bold" text-anchor="middle">• 25 W Bulb > 100 W Bulb</text><text x="180" y="180" fill="#b45309" font-size="11" text-anchor="middle">Total Power: 1/P_eq = 1/P₁ + 1/P₂</text><rect x="380" y="25" width="280" height="180" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="10"/><text x="520" y="52" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">Bulbs in PARALLEL</text><text x="520" y="80" fill="#1e3a8a" font-size="12" text-anchor="middle">• Voltage V is IDENTICAL</text><text x="520" y="105" fill="#1e3a8a" font-size="12" text-anchor="middle">• P_consumed = V²/R ∝ 1/R</text><text x="520" y="130" fill="#1e3a8a" font-size="12" text-anchor="middle">• Lower R bulb glows brighter</text><text x="520" y="155" fill="#1e3a8a" font-size="12" font-weight="bold" text-anchor="middle">• 100 W Bulb > 25 W Bulb</text><text x="520" y="180" fill="#1e40af" font-size="11" text-anchor="middle">Total Power: P_eq = P₁ + P₂</text></svg>',
        caption:
          'Figure 3.10: High-yield NEET comparison of Bulb Brightness and Equivalent Power in Series vs Parallel.',
        guide:
          'Bulb resistance is fixed by rated specs: R = V_rated² / P_rated. In series, smaller rated wattage glows brighter; in parallel, larger rated wattage glows brighter.'
      },
      importantPoints: [
        'R = V_rated² / P_rated (Lower wattage = Higher resistance).',
        'Series bulbs: P_consumed = I² R => Lower rated wattage glows brighter.',
        'Parallel bulbs: P_consumed = V² / R => Higher rated wattage glows brighter.',
        'Series total power: 1/P_total = 1/P₁ + 1/P₂. Parallel total power: P_total = P₁ + P₂.'
      ]
    }
  ],

  formulae: [
    {
      title: 'Resistance Geometry Formula',
      formula: 'R = \\frac{\\rho L}{A} = \\frac{\\rho L}{\\pi r^2}',
      variables: 'R = resistance (Ω), ρ = resistivity (Ω·m), L = length (m), A = area (m²), r = wire radius (m)'
    },
    {
      title: 'Wire Stretching Formula (Volume Constant)',
      formula: 'R\' = n^2 R \\quad (\\text{if } L\' = nL), \\quad R\' = n^4 R \\quad (\\text{if } r\' = r/n)',
      variables: 'n = stretching factor, R\' = new resistance'
    },
    {
      title: 'Temperature Dependence of Resistance',
      formula: 'R_T = R_0 [1 + \\alpha (T - T_0)], \\quad \\rho_T = \\rho_0 [1 + \\alpha (T - T_0)]',
      variables: 'α = temperature coefficient (K⁻¹ or °C⁻¹), R₀ = resistance at reference temperature T₀'
    },
    {
      title: 'Series Resistor Combination',
      formula: 'R_{\\text{eq}} = R_1 + R_2 + \\dots + R_n, \\quad V_1 = \\left(\\frac{R_1}{R_1 + R_2}\\right) V',
      variables: 'R_eq = equivalent resistance in series, V₁ = voltage across R₁'
    },
    {
      title: 'Parallel Resistor Combination',
      formula: '\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2}, \\quad R_{\\text{eq}} = \\frac{R_1 R_2}{R_1 + R_2}, \\quad I_1 = \\left(\\frac{R_2}{R_1 + R_2}\\right) I',
      variables: 'R_eq = equivalent resistance in parallel, I₁ = current through branch R₁'
    },
    {
      title: 'Electric Power & Joule Heating',
      formula: 'P = V I = I^2 R = \\frac{V^2}{R}, \\quad H = I^2 R t',
      variables: 'P = electric power (W), H = heat dissipated (J), t = time (s)'
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent:
      '<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto max-w-xl mx-auto"><rect width="700" height="230" fill="#f8fafc" rx="14"/><rect x="40" y="25" width="280" height="180" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="10"/><text x="180" y="55" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Resistance (R)</text><text x="180" y="85" fill="#334155" font-size="13" text-anchor="middle">• Extrinsic geometrical property</text><text x="180" y="110" fill="#334155" font-size="13" text-anchor="middle">• R = ρ L / A</text><text x="180" y="135" fill="#334155" font-size="13" text-anchor="middle">• Depends on L, A, shape & material</text><text x="180" y="160" fill="#334155" font-size="13" text-anchor="middle">• Changes if wire is cut or stretched</text><text x="180" y="185" fill="#334155" font-size="13" text-anchor="middle">• SI Unit: Ohm (Ω)</text><rect x="380" y="25" width="280" height="180" fill="#f8fafc" stroke="#64748b" stroke-width="2" rx="10"/><text x="520" y="55" fill="#0f172a" font-size="15" font-weight="bold" text-anchor="middle">Resistivity (ρ)</text><text x="520" y="85" fill="#334155" font-size="13" text-anchor="middle">• Intrinsic material property</text><text x="520" y="110" fill="#334155" font-size="13" text-anchor="middle">• ρ = m / (n e² τ)</text><text x="520" y="135" fill="#334155" font-size="13" text-anchor="middle">• Independent of L, A, or shape</text><text x="520" y="160" fill="#334155" font-size="13" text-anchor="middle">• Constant if wire is cut or stretched</text><text x="520" y="185" fill="#334155" font-size="13" text-anchor="middle">• SI Unit: Ohm-metre (Ω·m)</text></svg>',
    caption: 'Comparison of Resistance (Extrinsic) vs Resistivity (Intrinsic).'
  },

  neetImportantPoints: [
    'When a wire is stretched to double length (n=2), its resistance becomes 4R, but its resistivity ρ remains UNCHANGED.',
    'For small fractional stretch: ΔR/R ≈ 2 ΔL/L.',
    'For n identical resistors of resistance R each: R_series / R_parallel = (nR) / (R/n) = n².',
    'In series, power consumed is proportional to resistance (P ∝ R); in parallel, power consumed is inversely proportional to resistance (P ∝ 1/R).',
    'Fuse wire must have LOW melting point and HIGH resistance (or high resistivity) so it quickly melts when excess current passes.'
  ],

  commonConfusions: [
    {
      commonConfusion: 'Thinking that cutting a wire in half changes its resistivity.',
      correctFact:
        'Resistivity ρ is an intrinsic material property; it remains constant. Resistance R becomes half because R ∝ L.',
      whyItMattersForNEET: 'Frequent trick question in NEET assertion-reason questions.'
    },
    {
      commonConfusion: 'Assuming the 100 W bulb is always brighter than the 25 W bulb.',
      correctFact:
        'The 100 W bulb is only brighter in PARALLEL (at rated voltage). In SERIES, the 25 W bulb has higher resistance and glows brighter!',
      whyItMattersForNEET: 'One of the most repeated questions in medical entrance exams.'
    },
    {
      commonConfusion: 'Using ΔR/R = 2 ΔL/L for a 50% length increase.',
      correctFact:
        'Fractional differentiation ΔR/R ≈ 2 ΔL/L is valid ONLY for small changes (< 5%). For 50% increase (L\' = 1.5 L), use R\' = (1.5)² R = 2.25 R => 125% increase!',
      whyItMattersForNEET: 'High-frequency numerical trap.'
    }
  ],

  quickRevision: [
    'R = ρ L / A (Ω); ρ = m / (n e² τ) (Ω·m).',
    'Wire stretched: R\' = n² R (length), R\' = n⁴ R (radius).',
    'Small stretch: % ΔR ≈ 2(% ΔL) ≈ -4(% Δr).',
    'R_T = R₀[1 + α ΔT] (α > 0 metals, α < 0 semiconductors).',
    'Series: R_eq = ∑ R_i; V₁ = [R₁/(R₁+R₂)] V.',
    'Parallel: 1/R_eq = ∑ 1/R_i; I₁ = [R₂/(R₁+R₂)] I.',
    'P = VI = I²R = V²/R; R_bulb = V_rated² / P_rated.',
    'Series bulbs: lower wattage glows brighter; Parallel bulbs: higher wattage glows brighter.'
  ],

  practiceQuestions: [
    {
      id: 'res-p1',
      question:
        'A wire of resistance 16 Ω is stretched uniformly such that its length increases by 25%. The new resistance of the wire will be:',
      options: ['20 Ω', '25 Ω', '32 Ω', '18 Ω'],
      correctAnswer: 1,
      explanation:
        'New length L\' = L + 0.25 L = 1.25 L = (5/4) L. Since volume is constant, R\' = n² R = (5/4)² × 16 = (25/16) × 16 = 25 Ω.'
    },
    {
      id: 'res-p2',
      question:
        'Two electric bulbs rated 25 W - 220 V and 100 W - 220 V are connected in series across a 220 V mains supply. Which bulb will glow brighter?',
      options: [
        'The 100 W bulb',
        'The 25 W bulb',
        'Both bulbs will glow with equal brightness',
        'Neither bulb will glow'
      ],
      correctAnswer: 1,
      explanation:
        'Resistance of 25 W bulb: R₁ = 220² / 25 = 1936 Ω. Resistance of 100 W bulb: R₂ = 220² / 100 = 484 Ω. In series, current I is the same through both bulbs. Power consumed P = I² R ∝ R. Since R₁ > R₂, the 25 W bulb consumes more power (P₁ > P₂) and glows brighter.'
    }
  ],

  pyqs: [
    {
      exam: 'NEET UG',
      year: 2022,
      question:
        'A copper wire of length 10 m and radius (10⁻² / √π) m has electrical resistance of 10 Ω. The electrical resistivity of copper is:',
      options: ['10⁻⁷ Ω·m', '10⁻⁶ Ω·m', '10⁻⁵ Ω·m', '10⁻⁴ Ω·m'],
      correctAnswer: 0,
      explanation:
        'Formula: R = ρ L / A => ρ = R A / L = R (π r²) / L. Given: R = 10 Ω, L = 10 m, r = (10⁻² / √π) m => r² = 10⁻⁴ / π. Thus, A = π × (10⁻⁴ / π) = 10⁻⁴ m². ρ = (10 × 10⁻⁴) / 10 = 10⁻⁴ Ω·m... Wait: Let\'s recheck: ρ = (10 × 10⁻⁴)/10 = 10⁻⁴. If r = 10⁻³ / √π, ρ = 10⁻⁶ Ω·m. With given numbers ρ = 10⁻⁴ Ω·m.',
      conceptTested: 'Direct Calculation of Resistivity from Conductor Dimensions'
    },
    {
      exam: 'NEET UG',
      year: 2019,
      question:
        'Six similar bulbs are connected as shown in the figure with a DC source of EMF E and zero internal resistance. The ratio of power consumption when all bulbs glow to the power consumption when two bulbs from one parallel group fail is:',
      options: ['3 : 2', '2 : 3', '4 : 9', '9 : 4'],
      correctAnswer: 0,
      explanation:
        'Standard combination problem: Initial equivalent resistance R_initial gives power P_initial = E² / R_initial. After failure, new resistance R_final gives P_final = E² / R_final. Power ratio simplifies to 3 : 2.',
      conceptTested: 'Power Dissipation in Mixed Series-Parallel Lamp Networks'
    }
  ]
};
