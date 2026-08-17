// 15 Original High-Yield Worked Numericals for NEET UG 2026 Semiconductor Electronics

export interface WorkedProblem {
  id: number;
  title: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  given: string[];
  required: string;
  concept: string;
  formula: string;
  substitution: string;
  calculation: string;
  finalAnswer: string;
  neetInsight: string;
}

export const SEMICONDUCTOR_NUMERICALS: WorkedProblem[] = [
  {
    id: 1,
    title: "Threshold Wavelength for Optical Absorption in Silicon",
    topic: "Energy Band Gap",
    difficulty: "Easy",
    given: [
      "Forbidden energy band gap of Silicon: E_g = 1.12 eV",
      "Planck's constant: h = 6.63 × 10⁻³⁴ J·s",
      "Speed of light: c = 3.0 × 10⁸ m/s",
      "1 eV = 1.6 × 10⁻¹⁹ J"
    ],
    required: "Maximum (threshold) wavelength λ_max of incident photon capable of creating an electron-hole pair in Silicon.",
    concept: "For an incident photon to create an electron-hole pair, its energy must be at least equal to the band gap: E_photon = h c / λ ≥ E_g. The threshold wavelength corresponds to E_photon = E_g.",
    formula: "λ_max = (h · c) / E_g = (12400 eV·Å) / E_g(eV)",
    substitution: "λ_max = 12400 / 1.12 Å = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (1.12 × 1.6 × 10⁻¹⁹) m",
    calculation: "λ_max = (1.989 × 10⁻²⁵) / (1.792 × 10⁻¹⁹) = 1.11 × 10⁻⁶ m = 1110 nm = 11100 Å (Infrared region)",
    finalAnswer: "λ_max = 1.11 µm = 1110 nm (Light of wavelength λ ≤ 1110 nm will be absorbed by Silicon)",
    neetInsight: "NEET Shortcut: Remember hc ≈ 12400 eV·Å (or 1240 eV·nm). Just divide 1240 by E_g in eV: 1240 / 1.12 ≈ 1107 nm."
  },
  {
    id: 2,
    title: "Carrier Concentration in Extrinsic Silicon using Mass Action Law",
    topic: "Mass Action Law",
    difficulty: "Medium",
    given: [
      "Intrinsic carrier concentration of Silicon at 300 K: n_i = 1.5 × 10¹⁶ m⁻³",
      "Indium (trivalent acceptor) doping concentration: N_a = 4.5 × 10²² m⁻³"
    ],
    required: "Thermal equilibrium electron concentration n_e and type of semiconductor.",
    concept: "Indium is a trivalent impurity forming a p-type semiconductor where hole concentration n_h ≈ N_a. By the Mass Action Law at thermal equilibrium, n_e · n_h = n_i².",
    formula: "n_e = n_i² / n_h ≈ n_i² / N_a",
    substitution: "n_e = (1.5 × 10¹⁶)² / (4.5 × 10²²)",
    calculation: "n_e = (2.25 × 10³²) / (4.5 × 10²²) = 0.5 × 10¹⁰ = 5.0 × 10⁹ m⁻³",
    finalAnswer: "n_e = 5.0 × 10⁹ m⁻³; It is a p-type semiconductor (n_h ≫ n_e by a factor of ~10¹³).",
    neetInsight: "Mass Action Law n_e · n_h = n_i² is universally valid for intrinsic as well as extrinsic semiconductors at constant temperature."
  },
  {
    id: 3,
    title: "Electrical Conductivity of Intrinsic vs Extrinsic Germanium",
    topic: "Semiconductor Conductivity",
    difficulty: "Hard",
    given: [
      "Intrinsic Germanium: n_i = 2.5 × 10¹⁹ m⁻³ at 300 K",
      "Electron mobility: µ_e = 0.38 m²/(V·s)",
      "Hole mobility: µ_h = 0.18 m²/(V·s)",
      "Electronic charge: e = 1.6 × 10⁻¹⁹ C",
      "Doped with Antimony (donor): N_d = 10²³ m⁻³"
    ],
    required: "1. Intrinsic conductivity σ_i; 2. Conductivity σ_ext after doping.",
    concept: "1. For intrinsic: σ_i = e · n_i · (µ_e + µ_h). 2. For n-type extrinsic: n_e ≈ N_d = 10²³ m⁻³, so σ_ext ≈ e · n_e · µ_e.",
    formula: "σ_i = e · n_i · (µ_e + µ_h) ; σ_ext = e · N_d · µ_e",
    substitution: "σ_i = (1.6 × 10⁻¹⁹) × (2.5 × 10¹⁹) × (0.38 + 0.18) ; σ_ext = (1.6 × 10⁻¹⁹) × 10²³ × 0.38",
    calculation: "σ_i = 4.0 × 0.56 = 2.24 S/m (or Ω⁻¹·m⁻¹) ; σ_ext = 1.6 × 10⁴ × 0.38 = 6080 S/m",
    finalAnswer: "σ_i = 2.24 S/m ; σ_ext = 6080 S/m (Conductivity increases by ~2700 times upon doping!)",
    neetInsight: "Even a minute doping of 1 atom in 10⁶ host atoms boosts conductivity by several thousand times, making modern electronics possible."
  },
  {
    id: 4,
    title: "Dynamic Resistance of a Forward-Biased Silicon Diode",
    topic: "Diode Resistance",
    difficulty: "Easy",
    given: [
      "Forward voltage change: ΔV = 0.75 V − 0.70 V = 0.05 V",
      "Corresponding forward current change: ΔI = 15 mA − 5 mA = 10 mA = 10 × 10⁻³ A"
    ],
    required: "Forward dynamic (AC) resistance r_f of the diode.",
    concept: "Dynamic resistance is the reciprocal of the slope of the forward V–I characteristic: r_f = ΔV / ΔI.",
    formula: "r_f = ΔV / ΔI",
    substitution: "r_f = 0.05 V / (10 × 10⁻³ A)",
    calculation: "r_f = 50 mV / 10 mA = 5.0 Ω",
    finalAnswer: "r_f = 5.0 Ω",
    neetInsight: "Static resistance R = V/I is completely different from dynamic resistance r_f = ΔV/ΔI. Always use ΔV/ΔI for AC small-signal diode analysis."
  },
  {
    id: 5,
    title: "Current in Series Silicon Diode Circuit with Barrier Drop",
    topic: "Diode Circuits",
    difficulty: "Medium",
    given: [
      "Supply battery voltage: V_s = 6.0 V",
      "Silicon diode barrier drop: V_d = 0.7 V (forward-biased)",
      "Internal diode forward resistance: r_f = 10 Ω",
      "Series load resistor: R = 490 Ω"
    ],
    required: "Circuit current I and voltage drop V_R across the load resistor.",
    concept: "In forward bias, a real Silicon diode is modeled as an opposing battery of 0.7 V in series with its dynamic resistance r_f: V_net = V_s − V_d = I (R + r_f).",
    formula: "I = (V_s − V_d) / (R + r_f)",
    substitution: "I = (6.0 − 0.7) / (490 + 10)",
    calculation: "I = 5.3 V / 500 Ω = 0.0106 A = 10.6 mA ; V_R = I · R = 10.6 mA × 490 Ω = 5.194 V",
    finalAnswer: "Current I = 10.6 mA ; Load voltage V_R = 5.19 V",
    neetInsight: "If the question states 'ideal diode', take V_d = 0 and r_f = 0. If it specifies 'Silicon diode', always subtract 0.7 V from supply!"
  },
  {
    id: 6,
    title: "Diode Bridge Circuit with Reverse and Forward Diodes",
    topic: "Diode Circuits",
    difficulty: "Medium",
    given: [
      "Battery EMF: E = 12 V",
      "Branch 1: Diode D₁ (forward biased, ideal) in series with R₁ = 200 Ω",
      "Branch 2: Diode D₂ (reverse biased, ideal) in series with R₂ = 300 Ω",
      "Both branches connected in parallel across the 12 V battery"
    ],
    required: "Total current drawn from the 12 V battery.",
    concept: "An ideal diode in forward bias acts as a short circuit (R = 0, V = 0). In reverse bias, it acts as an OPEN circuit (R = ∞, I = 0).",
    formula: "I_total = I₁ + I₂ = (E / R₁) + 0",
    substitution: "I₁ = 12 V / 200 Ω = 0.06 A = 60 mA ; I₂ = 0 (Reverse branch blocked)",
    calculation: "I_total = 60 mA + 0 = 60 mA",
    finalAnswer: "I_total = 60 mA = 0.06 A",
    neetInsight: "Quick rule: Trace current from + to − terminal. If arrow of diode opposes current direction, replace branch by open circuit (I = 0)."
  },
  {
    id: 7,
    title: "Zener Diode Voltage Regulator with Variable Input Voltage",
    topic: "Zener Voltage Regulator",
    difficulty: "Hard",
    given: [
      "Zener breakdown voltage: V_Z = 10.0 V",
      "Series resistor: R_s = 200 Ω",
      "Load resistor: R_L = 1000 Ω (1 kΩ)",
      "Unregulated DC input fluctuates from V_in(min) = 15 V to V_in(max) = 25 V"
    ],
    required: "1. Constant output voltage V_out; 2. Load current I_L; 3. Minimum and maximum Zener current (I_Z,min and I_Z,max).",
    concept: "Output voltage is clamped across load: V_out = V_Z = 10 V. Load current is I_L = V_Z / R_L. Total current is I = (V_in − V_Z) / R_s = I_Z + I_L.",
    formula: "I_L = V_Z / R_L ; I = (V_in − V_Z) / R_s ; I_Z = I − I_L",
    substitution: "I_L = 10 V / 1000 Ω = 10 mA (constant) ; For V_in = 15 V: I_min = (15 − 10) / 200 ; For V_in = 25 V: I_max = (25 − 10) / 200",
    calculation: "I_min = 5 V / 200 Ω = 25 mA ➔ I_Z,min = 25 mA − 10 mA = 15 mA ; I_max = 15 V / 200 Ω = 75 mA ➔ I_Z,max = 75 mA − 10 mA = 65 mA",
    finalAnswer: "V_out = 10.0 V ; I_L = 10 mA ; I_Z varies from 15 mA to 65 mA while V_out remains strictly 10 V.",
    neetInsight: "All excess input voltage fluctuation appears as voltage drop across series resistor R_s, while Zener absorbs all excess current!"
  },
  {
    id: 8,
    title: "Maximum Power Dissipation & Safe Series Resistor for Zener Diode",
    topic: "Zener Rating",
    difficulty: "Hard",
    given: [
      "Zener diode rated voltage: V_Z = 6.0 V",
      "Maximum power dissipation: P_Z,max = 1.2 W",
      "Unregulated DC input: V_in = 18.0 V",
      "Load is disconnected (no-load condition, I_L = 0)"
    ],
    required: "Minimum safe value of series resistance R_s to prevent Zener burnout.",
    concept: "Under no-load condition, all circuit current flows through the Zener: I = I_Z. The maximum allowable Zener current is I_Z,max = P_Z,max / V_Z.",
    formula: "I_Z,max = P_Z,max / V_Z ; R_s,min = (V_in − V_Z) / I_Z,max",
    substitution: "I_Z,max = 1.2 W / 6.0 V = 0.2 A = 200 mA ; R_s,min = (18.0 − 6.0) / 0.2",
    calculation: "R_s,min = 12.0 V / 0.2 A = 60 Ω",
    finalAnswer: "Minimum safe series resistance R_s = 60 Ω",
    neetInsight: "If R_s < 60 Ω, current will exceed 200 mA and power dissipation will exceed 1.2 W, permanently destroying the Zener diode."
  },
  {
    id: 9,
    title: "Peak and DC Output of a Center-Tapped Full-Wave Rectifier",
    topic: "Full-Wave Rectifier",
    difficulty: "Medium",
    given: [
      "AC input to primary: 220 V (rms), 50 Hz",
      "Center-tapped transformer step-down ratio: 10 : 1 (Total secondary 22 V rms, each half secondary 11 V rms)",
      "Diodes are ideal (V_d = 0)"
    ],
    required: "1. Peak secondary voltage V_m per half; 2. Average DC output voltage V_dc; 3. Output ripple frequency f_out.",
    concept: "Each diode sees one half of secondary winding: V_rms,half = 11 V. Peak voltage V_m = √2 · V_rms. For full-wave rectifier: V_dc = 2 V_m / π, and f_out = 2 f_in.",
    formula: "V_m = √2 · V_rms,half ; V_dc = (2 · V_m) / π ; f_out = 2 · f_in",
    substitution: "V_m = 1.414 × 11 V = 15.55 V ; V_dc = (2 × 15.55) / 3.1416 ; f_out = 2 × 50 Hz",
    calculation: "V_m = 15.55 V ; V_dc = 31.10 / 3.1416 = 9.90 V ; f_out = 100 Hz",
    finalAnswer: "Peak voltage V_m = 15.55 V ; V_dc = 9.90 V ; Output ripple frequency = 100 Hz",
    neetInsight: "Remember: Half-Wave V_dc = V_m / π ≈ 0.318 V_m ; Full-Wave V_dc = 2 V_m / π ≈ 0.636 V_m."
  },
  {
    id: 10,
    title: "Band Gap and Colour of Light Emitted by an LED",
    topic: "Optoelectronic LED",
    difficulty: "Easy",
    given: [
      "Peak wavelength emitted by LED: λ = 620 nm (Red-Orange)",
      "Planck's constant: h = 6.63 × 10⁻³⁴ J·s",
      "Speed of light: c = 3.0 × 10⁸ m/s"
    ],
    required: "Band gap energy E_g of the semiconductor in eV.",
    concept: "In an LED, photon energy emitted equals the band gap: E_g = h c / λ.",
    formula: "E_g(eV) = 1240 / λ(nm)",
    substitution: "E_g = 1240 / 620",
    calculation: "E_g = 2.0 eV",
    finalAnswer: "E_g = 2.00 eV (Fabricated using GaAsP semiconductor)",
    neetInsight: "Visible spectrum is 400 nm (Violet, E_g ≈ 3.1 eV) to 700 nm (Red, E_g ≈ 1.8 eV). LEDs emitting visible light must have E_g between 1.8 eV and 3.1 eV."
  },
  {
    id: 11,
    title: "Photodiode Spectral Detection Limit",
    topic: "Photodiode",
    difficulty: "Medium",
    given: [
      "Photodiode fabricated from semiconductor with band gap E_g = 2.5 eV",
      "Incident radiation has wavelength λ = 6000 Å = 600 nm"
    ],
    required: "Determine whether the photodiode can detect this incident light.",
    concept: "A photodiode can detect radiation if and only if incident photon energy is greater than or equal to its band gap: E_photon ≥ E_g.",
    formula: "E_photon(eV) = 12400 / λ(Å)",
    substitution: "E_photon = 12400 / 6000 Å = 2.07 eV",
    calculation: "E_photon = 2.07 eV < E_g (2.5 eV)",
    finalAnswer: "NO, the photodiode CANNOT detect this radiation because photon energy (2.07 eV) is less than the band gap (2.5 eV).",
    neetInsight: "To detect wavelength λ, the condition is λ ≤ λ_max = 12400 / E_g(eV) = 12400 / 2.5 = 4960 Å. Since 6000 Å > 4960 Å, no absorption occurs."
  },
  {
    id: 12,
    title: "Output of a Combination of NAND Gates (De Morgan's Theorem)",
    topic: "Logic Gates",
    difficulty: "Medium",
    given: [
      "Inputs A and B are passed into two separate NOT gates (constructed by shorted NANDs), giving A̅ and B̅.",
      "A̅ and B̅ are then fed into a 3rd NAND gate producing final output Y."
    ],
    required: "Boolean expression and Truth Table of final output Y; identify equivalent single gate.",
    concept: "NAND of A̅ and B̅ gives Y = (A̅ · B̅)̅. Applying De Morgan's Theorem: (X · Z)̅ = X̅ + Z̅, where X = A̅ and Z = B̅.",
    formula: "Y = (A̅ · B̅)̅ = (A̅)̅ + (B̅)̅ = A + B",
    substitution: "For (0,0): Y = 0+0 = 0 ; For (0,1): Y = 0+1 = 1 ; For (1,0): Y = 1+0 = 1 ; For (1,1): Y = 1+1 = 1",
    calculation: "Truth Table matches: 00➔0, 01➔1, 10➔1, 11➔1",
    finalAnswer: "Y = A + B; The entire circuit is equivalent to a single OR GATE.",
    neetInsight: "Universal Gate Shortcut: Inverting inputs before a NAND gate turns it into an OR gate ((A̅·B̅)̅ = A+B). Inverting inputs before a NOR gate turns it into an AND gate ((A̅+B̅)̅ = A·B)."
  },
  {
    id: 13,
    title: "Determining Logic Function from Given Waveforms",
    topic: "Logic Gate Waveforms",
    difficulty: "Hard",
    given: [
      "Time intervals t₁ to t₄:",
      "At t₁: A=0, B=0 ➔ Output Y=1",
      "At t₂: A=0, B=1 ➔ Output Y=0",
      "At t₃: A=1, B=0 ➔ Output Y=0",
      "At t₄: A=1, B=1 ➔ Output Y=0"
    ],
    required: "Identify the logic gate representing this timing waveform.",
    concept: "Construct the Truth Table from the given timing intervals and compare with standard gates.",
    formula: "Truth Table: 0,0 ➔ 1 ; 0,1 ➔ 0 ; 1,0 ➔ 0 ; 1,1 ➔ 0",
    substitution: "Compare: OR gate gives 0,1,1,1. Inverted OR gives 1,0,0,0, which is Y = (A+B)̅.",
    calculation: "Y = 1 ONLY when both A=0 and B=0.",
    finalAnswer: "The waveform belongs to a NOR GATE (Y = (A + B)̅).",
    neetInsight: "Whenever output is 1 ONLY when all inputs are 0, it is definitely a NOR gate. Whenever output is 0 ONLY when all inputs are 1, it is definitely a NAND gate."
  },
  {
    id: 14,
    title: "Cascaded Logic Gate Network Output Calculation",
    topic: "Logic Gate Circuits",
    difficulty: "Medium",
    given: [
      "Input A and B fed to NOR gate: Y₁ = (A+B)̅",
      "Y₁ is fed to both inputs of a NAND gate to produce final output Y₂."
    ],
    required: "Final Boolean expression Y₂ and simplified gate equivalent.",
    concept: "A NAND gate with inputs shorted together acts as an inverter (NOT gate). Thus Y₂ = (Y₁)̅.",
    formula: "Y₂ = (Y₁)̅ = ((A + B)̅)̅ = A + B",
    substitution: "Double inversion cancels: (X̅)̅ = X",
    calculation: "Y₂ = A + B",
    finalAnswer: "Y₂ = A + B (Equivalent to an OR GATE)",
    neetInsight: "A NOR gate followed by a NOT gate is simply an OR gate: NOT(NOR) = OR."
  },
  {
    id: 15,
    title: "Solar Cell Fill Factor and Maximum Power Output",
    topic: "Solar Cell",
    difficulty: "Hard",
    given: [
      "Open-circuit voltage: V_oc = 0.6 V",
      "Short-circuit current: I_sc = 40 mA",
      "Fill Factor (FF): FF = 0.75",
      "Incident solar radiation power: P_in = 200 mW"
    ],
    required: "1. Maximum electrical power output P_max; 2. Solar cell efficiency η.",
    concept: "Fill Factor is defined as FF = P_max / (V_oc · I_sc) = (V_mp · I_mp) / (V_oc · I_sc). Solar conversion efficiency is η = (P_max / P_in) × 100%.",
    formula: "P_max = FF · V_oc · I_sc ; η = (P_max / P_in) × 100%",
    substitution: "P_max = 0.75 × 0.6 V × (40 × 10⁻³ A) ; η = (18 mW / 200 mW) × 100%",
    calculation: "P_max = 0.75 × 0.024 W = 0.018 W = 18 mW ; η = (18 / 200) × 100% = 9.0%",
    finalAnswer: "Maximum power P_max = 18 mW ; Conversion efficiency η = 9.0%",
    neetInsight: "Fill factor represents the squareness of the solar cell I-V curve. Ideal FF is 1.0, typical practical silicon cells have FF between 0.7 and 0.82."
  }
];
