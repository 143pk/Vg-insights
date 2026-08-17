// Comprehensive Terms, First-Principle Concepts, Tables & Conceptual Q&A for Semiconductor Electronics

export interface ConceptItem {
  id: string;
  title: string;
  category: string;
  content: string;
  keyPoints: string[];
  neetTrap?: string;
}

export const SEMICONDUCTOR_TERMS: ConceptItem[] = [
  {
    id: "energy-bands-origin",
    title: "1. Origin of Energy Bands in Solids",
    category: "Band Theory",
    content: "In an isolated single atom, electrons revolve in discrete, sharply defined energy levels (Bohr quantization). When N atoms come together to form a solid crystal lattice (spacing d ≈ 2–3 Å), the outer valence electrons experience Coulombic forces from neighbouring nuclei. According to Pauli's Exclusion Principle, each discrete atomic energy level splits into N closely spaced sub-levels. Since N ≈ 10²³ atoms/cm³, these sub-levels form continuous bands of allowed energy called Energy Bands.",
    keyPoints: [
      "Valence Band (VB): The highest occupied energy band formed by valence electrons. Completely filled at 0 K in insulators/semiconductors.",
      "Conduction Band (CB): The lowest empty or partially filled band above VB where free electrons carry electrical current.",
      "Forbidden Energy Gap (E_g): The energy difference between the top of the VB (E_v) and bottom of the CB (E_c): E_g = E_c − E_v. No electron can exist within E_g.",
      "Conduction Mechanism: Only electrons present in the Conduction Band are free to accelerate under an applied electric field."
    ],
    neetTrap: "Electrons in a completely filled Valence Band cannot conduct electricity because there are no unoccupied adjacent energy states for them to gain kinetic energy."
  },
  {
    id: "conductor-vs-insulator-vs-semiconductor",
    title: "2. Classification of Solids by Band Gap E_g",
    category: "Band Theory",
    content: "Materials are classified into conductors, insulators, and semiconductors strictly based on the magnitude of their forbidden energy gap E_g and the occupancy of their bands at 0 K and 300 K.",
    keyPoints: [
      "Conductors (Metals): E_g ≈ 0 eV. VB and CB overlap (e.g., Zn, Mg) OR CB is partially filled (e.g., Na, Cu). Abundant free electrons (~10²⁸ m⁻³) exist even at 0 K. Resistivity increases with temperature (positive temperature coefficient α > 0).",
      "Insulators: E_g > 3 eV (e.g., Diamond E_g = 6 eV). VB is completely filled; CB is completely empty. Thermal energy at room temperature (kT ≈ 0.026 eV) is vastly insufficient to bridge 6 eV. Resistivity is extremely high (10¹¹ – 10¹⁹ Ω·m).",
      "Semiconductors: Moderate band gap E_g < 3 eV (Silicon E_g = 1.1 eV; Germanium E_g = 0.72 eV; GaAs E_g = 1.42 eV). At 0 K, behaves as a perfect insulator. At room temperature (300 K), thermal agitation excites some electrons across E_g into CB, leaving holes in VB. Resistivity decreases exponentially with temperature (negative temperature coefficient α < 0)."
    ],
    neetTrap: "Carbon (Diamond) has 4 valence electrons just like Silicon and Germanium, but diamond is an INSULATOR because its band gap is huge (~6 eV), whereas Si (1.1 eV) and Ge (0.72 eV) are semiconductors."
  },
  {
    id: "intrinsic-semiconductors-and-holes",
    title: "3. Intrinsic Semiconductors & Physics of Holes",
    category: "Intrinsic Semiconductors",
    content: "An intrinsic semiconductor is a chemically pure elemental (Si, Ge) or compound semiconductor without any intentional dopants. Each Si atom has 4 valence electrons forming 4 covalent bonds in a diamond-cubic tetrahedral structure. At T = 0 K, all bonds are intact (insulator). For T > 0 K, thermal vibrations break a small fraction of covalent bonds, liberating free electrons into the conduction band and leaving behind vacant bonding sites called HOLES in the valence band.",
    keyPoints: [
      "Intrinsic Carrier Concentration: Electron density equals hole density: n_e = n_h = n_i.",
      "Hole Definition: A hole (h⁺) is a missing electron in a covalent bond that behaves as an effective positively charged particle (+e = +1.6 × 10⁻¹⁹ C) having effective mass m_h* and positive mobility μ_h.",
      "Hole Motion: When an adjacent valence electron jumps to fill a vacant bond, the vacancy shifts to the neighbouring site. Thus, the hole moves in the direction of the applied electric field, while electrons move opposite.",
      "Total Electric Current: I = I_e + I_h = e A (n_e v_e + n_h v_h) = e A n_i (μ_e + μ_h) E.",
      "Mobility Comparison: Electron mobility μ_e is always greater than hole mobility μ_h (μ_e > μ_h) because conduction band electrons move in free space, whereas holes move by sequential inter-bond electron jumps."
    ],
    neetTrap: "A hole is NOT a proton. Protons are locked inside atomic nuclei. A hole is a collective vacancy phenomenon in the valence electronic band behaving dynamically like a positive charge +e."
  },
  {
    id: "extrinsic-doping-physics",
    title: "4. Extrinsic Semiconductors & Doping Principles",
    category: "Doping & Extrinsic",
    content: "Doping is the deliberate addition of a tiny controlled concentration of desirable impurity atoms (~1 to 100 parts per million, ppm) into an intrinsic semiconductor to drastically boost its conductivity.",
    keyPoints: [
      "n-Type Semiconductor: Doped with PENTAVALENT impurities (Group 15: Phosphorus P, Arsenic As, Antimony Sb). 4 valence electrons bond with Si; the 5th electron is loosely bound. Energy required to ionize it into CB is tiny: E_d ≈ 0.01 eV for Ge, 0.05 eV for Si. Majority carriers = Electrons (n_e ≈ N_d); Minority carriers = Holes (n_h = n_i² / N_d).",
      "p-Type Semiconductor: Doped with TRIVALENT impurities (Group 13: Boron B, Aluminium Al, Gallium Ga, Indium In). 3 valence electrons bond with 3 Si atoms; the 4th bond lacks an electron, creating an immediate HOLE. Energy to accept a VB electron is tiny: E_a ≈ 0.01 eV for Ge, 0.05 eV for Si. Majority carriers = Holes (n_h ≈ N_a); Minority carriers = Electrons (n_e = n_i² / N_a).",
      "Mass Action Law: At thermal equilibrium for any semiconductor (intrinsic or extrinsic): n_e · n_h = n_i²(T).",
      "Electrical Neutrality: Both n-type and p-type semiconductors are strictly ELECTRICALLY NEUTRAL overall! For n-type: q_total = e(N_d⁺ + n_h − n_e) = 0. The donor atom becomes an immobile positive ion (+), exactly balancing the free electron (−)."
    ],
    neetTrap: "A classic NEET question asks: 'Is an n-type semiconductor negatively charged?' The answer is NO. It is completely electrically neutral because every free negative electron came from an atom that became a positive fixed ion."
  },
  {
    id: "pn-junction-depletion-barrier",
    title: "5. p–n Junction Formation & Built-in Potential Barrier",
    category: "p–n Junction",
    content: "When a p-type semiconductor and an n-type semiconductor are joined intimately at the atomic level (e.g. by alloying or epitaxial diffusion):",
    keyPoints: [
      "1. Diffusion Process: High hole concentration in p-side causes holes to diffuse towards n-side; high electron concentration in n-side causes electrons to diffuse towards p-side. This forms diffusion current (p ➔ n).",
      "2. Recombination & Immobile Ions: Near the metallurgical junction, diffusing electrons and holes recombine. This uncovers uncompensated fixed negative acceptor ions (−) on the p-side and fixed positive donor ions (+) on the n-side.",
      "3. Depletion Layer Formation: A region devoid of mobile free charge carriers develops near the junction, called the Depletion Region (thickness d ≈ 0.1 to 1 µm).",
      "4. Built-in Electric Field E_bi: The uncovered fixed ions establish a strong internal electric field directed from n-side (+) to p-side (−): E_bi ≈ V_0 / d ≈ 0.7 V / 10⁻⁶ m ≈ 7 × 10⁵ V/m.",
      "5. Drift Current & Equilibrium: E_bi sweeps thermally generated minority carriers across the junction (electrons from p ➔ n, holes from n ➔ p), creating a drift current opposite to diffusion. At equilibrium: I_diffusion = I_drift, so net current I = 0.",
      "6. Built-in Potential Barrier V_0: The potential across the depletion layer at room temperature is typically V_0 ≈ 0.7 V for Silicon and V_0 ≈ 0.3 V for Germanium."
    ],
    neetTrap: "The depletion region contains NO mobile charge carriers, but it is NOT charge-free; it contains immobile, fixed donor positive ions on the n-side and acceptor negative ions on the p-side."
  },
  {
    id: "diode-biasing-and-vi-curve",
    title: "6. Forward Bias, Reverse Bias & V–I Characteristics",
    category: "Diode Characteristics",
    content: "External DC voltage applied across the p–n junction alters the barrier height and depletion width fundamentally.",
    keyPoints: [
      "Forward Bias (p ➔ + terminal, n ➔ − terminal): External applied voltage V opposes built-in barrier V_0. Effective barrier height decreases to (V_0 − V). Depletion layer width decreases. When V > V_knee (Si ≈ 0.7 V, Ge ≈ 0.3 V), majority carriers overcome the barrier, leading to rapid exponential forward current I_F in milliamperes (mA). Forward dynamic resistance r_f = ΔV_F / ΔI_F (typically 10 – 100 Ω).",
      "Reverse Bias (p ➔ − terminal, n ➔ + terminal): External voltage V aids the built-in barrier V_0. Effective barrier height increases to (V_0 + V). Depletion layer widens. Majority carrier flow is completely blocked. Only thermally generated minority carriers are swept by the field, yielding a tiny constant Reverse Saturation Current I_0 in microamperes (µA for Ge, nA for Si). Reverse resistance r_r is extremely large (10⁵ – 10⁶ Ω).",
      "Reverse Breakdown: When reverse voltage exceeds Breakdown Voltage V_BR, reverse current increases abruptly. Occurs via: (a) Zener Breakdown in heavily doped diodes with thin depletion layer (< 10 nm) where intense electric field (~10⁶ V/m) ruptures covalent bonds directly by quantum tunneling (occurs at V_z < 6 V, negative temp coefficient); (b) Avalanche Breakdown in lightly doped diodes with thick depletion layer where minority carriers gain high kinetic energy to knock off valence electrons by impact ionization (occurs at V_br > 6 V, positive temp coefficient)."
    ],
    neetTrap: "Reverse saturation current I_0 is independent of reverse bias voltage over a wide range, but is highly temperature-dependent (doubles approximately every 10 °C rise in temperature for Ge and Si)."
  },
  {
    id: "rectification-circuits",
    title: "7. Rectification: Half-Wave & Full-Wave Rectifiers",
    category: "Circuits & Rectifiers",
    content: "A rectifier converts alternating current (AC) into unidirectional pulsating direct current (DC) utilizing the one-way conduction property of diodes.",
    keyPoints: [
      "Half-Wave Rectifier: Uses 1 diode and load resistor R_L. Conducts during positive half-cycle (diode forward biased); blocks during negative half-cycle (diode reverse biased). Efficiency η = P_dc / P_ac = 0.406 / (1 + r_f/R_L) ≈ 40.6% max. Ripple factor r = √( (I_rms/I_dc)² − 1 ) = 1.21. Output ripple frequency f_out = f_in (e.g. 50 Hz in ➔ 50 Hz out). Peak Inverse Voltage PIV = V_m.",
      "Full-Wave Center-Tapped Rectifier: Uses 2 diodes and a center-tapped secondary transformer. Diode D₁ conducts during positive half-cycle; Diode D₂ conducts during negative half-cycle. Current flows in the SAME direction through R_L in both half-cycles. Efficiency η_max = 81.2% (double of half-wave). Ripple factor r = 0.482. Output ripple frequency f_out = 2 f_in (e.g. 50 Hz in ➔ 100 Hz out). Peak Inverse Voltage PIV = 2 V_m.",
      "Full-Wave Bridge Rectifier: Uses 4 diodes in a bridge arrangement. Efficiency η_max = 81.2%. Output frequency f_out = 2 f_in. PIV across non-conducting diodes = V_m (advantage: no bulky center-tapped transformer needed).",
      "Capacitor Filter: Connected in PARALLEL with load R_L. Charges to peak voltage V_m during diode conduction and discharges slowly through R_L when diode is OFF (time constant τ = R_L C ≫ T/2). Smooths out AC ripple into steady DC."
    ],
    neetTrap: "NEET Question: If input AC frequency to a full-wave rectifier is 50 Hz, the fundamental ripple frequency of output is 100 Hz (2f), whereas for a half-wave rectifier it is 50 Hz (f)."
  },
  {
    id: "zener-diode-regulator",
    title: "8. Zener Diode & DC Voltage Regulation",
    category: "Special Diodes",
    content: "A Zener diode is a heavily doped p–n junction diode specifically fabricated to operate safely in the reverse breakdown region without burning out, maintaining a sharp, constant breakdown voltage V_Z across wide variations in current.",
    keyPoints: [
      "Doping Profile: Both p and n regions are heavily doped. Consequently, depletion layer is extremely narrow (d < 10⁻⁷ m), producing an enormous electric field E ≈ 10⁶ V/m even at small voltages (V_Z ≈ 3 – 8 V).",
      "V–I Behavior: In reverse breakdown, current I_Z can vary from I_Z(min) to I_Z(max) while the terminal voltage remains strictly clamped at V_Z.",
      "Voltage Regulator Circuit: Unregulated DC input V_in (> V_Z) is applied across a series resistor R_s and parallel Zener-load combination (Zener cathode connected to positive input line).",
      "Circuit Governing Equations:",
      "1. Load Voltage: V_out = V_L = V_Z (constant).",
      "2. Load Current: I_L = V_Z / R_L.",
      "3. Total Series Current: I = I_Z + I_L.",
      "4. Voltage across Series Resistor: V_in − V_Z = I · R_s = (I_Z + I_L) · R_s.",
      "5. Regulation Mechanism: If V_in increases, excess voltage appears across R_s and excess current is diverted through Zener diode (I_Z increases), keeping V_out = V_Z rock steady."
    ],
    neetTrap: "A Zener diode must ALWAYS be connected in REVERSE BIAS in a voltage regulator circuit. If connected in forward bias, it acts as an ordinary diode with a 0.7 V drop and cannot regulate voltage!"
  },
  {
    id: "optoelectronic-devices",
    title: "9. Optoelectronic Devices: LED, Photodiode & Solar Cell",
    category: "Optoelectronics",
    content: "Optoelectronic devices interface optical photons with electronic charge carriers across a semiconductor p–n junction.",
    keyPoints: [
      "1. Light Emitting Diode (LED): Operated in FORWARD BIAS. Under forward bias, majority electrons and holes cross the junction and recombine near the depletion boundary. Excess energy is released as photons of light: E_photon = h ν = h c / λ ≈ E_g. Direct bandgap semiconductors (GaAs E_g=1.4 eV [IR], GaAs_{1-x}P_x [Red/Yellow], GaN [Blue]) are required because momentum is conserved directly without phonon loss. Peak wavelength emitted: λ = h c / E_g ≈ 12400 / E_g(eV) Å. Must have E_g ≥ 1.8 eV to emit in visible spectrum (400–700 nm).",
      "2. Photodiode: Operated in REVERSE BIAS with a transparent optical window. Incident photons with energy h ν ≥ E_g excite valence electrons into conduction band in the depletion region, generating electron-hole pairs. Built-in electric field sweeps electrons to n-side and holes to p-side before recombination. Generates reverse photocurrent I_p proportional to light intensity. Operated in reverse bias because fractional change in minority carrier concentration (Δn_minority / n_minority) upon illumination is vastly larger and easily detectable than in majority carriers.",
      "3. Solar Cell: Photovoltaic device that converts sunlight into electrical power without any external bias (0 V external). Works on 3 consecutive steps: (a) Generation of e⁻-hole pairs by incident photons (h ν > E_g) near junction; (b) Separation of electrons to n-side and holes to p-side by built-in junction electric field; (c) Collection of carriers at metallic contacts producing Photovoltage V_oc and short-circuit current I_sc. Silicon (E_g = 1.1 eV) and GaAs (E_g = 1.43 eV) are ideal solar cell materials with high optical absorption coefficient (~10⁴ cm⁻¹)."
    ],
    neetTrap: "Photodiodes are operated in reverse bias not because reverse current is large (it is tiny, µA), but because fractional change ΔI / I under illumination is enormous and linearly proportional to light intensity."
  },
  {
    id: "digital-logic-gates",
    title: "10. Digital Electronics & Fundamental Logic Gates",
    category: "Digital Logic",
    content: "Digital circuits process discrete binary signals: '0' (LOW / 0 V) and '1' (HIGH / 5 V). Logic gates are electronic switching circuits with one or more inputs and a single output following specific Boolean logic.",
    keyPoints: [
      "NOT Gate (Inverter): Single input. Y = A̅. Output is 1 if A=0; output is 0 if A=1.",
      "AND Gate: Y = A · B. Output is 1 ONLY when BOTH inputs A and B are 1.",
      "OR Gate: Y = A + B. Output is 1 when AT LEAST ONE input is 1 (0 only if A=0, B=0).",
      "NAND Gate (Universal): Y = (A · B)̅. Inverted AND. Output is 0 ONLY when A=1, B=1.",
      "NOR Gate (Universal): Y = (A + B)̅. Inverted OR. Output is 1 ONLY when A=0, B=0.",
      "XOR Gate (Exclusive-OR): Y = A ⊕ B = A̅ B + A B̅. Output is 1 when inputs are DIFFERENT (00➔0, 01➔1, 10➔1, 11➔0).",
      "XNOR Gate (Equivalence): Y = (A ⊕ B)̅ = A B + A̅ B̅. Output is 1 when inputs are IDENTICAL (00➔1, 01➔0, 10➔0, 11➔1).",
      "De Morgan's Theorems: (1) (A + B)̅ = A̅ · B̅ ; (2) (A · B)̅ = A̅ + B̅.",
      "Universal Gate Realization: NAND and NOR gates can implement all other gates (NOT, AND, OR) by proper interconnection without needing any other gate type."
    ],
    neetTrap: "A NAND gate with inputs shorted together (A=B) acts as a NOT gate: Y = (A · A)̅ = A̅. Similarly, a NOR gate with inputs shorted acts as a NOT gate: Y = (A + A)̅ = A̅."
  }
];

export const CONCEPTUAL_QUESTIONS = [
  {
    q: "Why does the electrical conductivity of a semiconductor increase with increase in temperature, unlike metals?",
    ans: "In metals, the free electron density is fixed (~10²⁸ m⁻³). Increasing temperature increases lattice vibrations (phonons), causing more frequent collisions and decreasing relaxation time τ, so resistance increases (R ∝ 1/τ, positive α). In semiconductors, as temperature rises, thermal energy breaks covalent bonds, causing an exponential surge in free electron-hole pair density n(T) ∝ T^(3/2) exp(−E_g / 2kT). This massive increase in charge carrier density overwhelmingly dominates the slight drop in mobility, drastically increasing conductivity (negative α)."
  },
  {
    q: "Why is an n-type semiconductor electrically neutral as a whole despite having electrons as majority carriers?",
    ans: "Because every pentavalent donor atom (e.g. Phosphorus) added to the silicon lattice is electrically neutral (15 protons = 15 electrons). When it donates its 5th electron to the conduction band, the donor atom becomes a fixed positive ion (+1). Thus, total positive charge from donor ions and holes exactly equals the total negative charge from free electrons: N_d⁺ + n_h = n_e."
  },
  {
    q: "Why does the depletion layer of a p–n junction widen in reverse bias and narrow in forward bias?",
    ans: "In forward bias, the positive terminal of the external battery repels holes in p-side toward the junction and the negative terminal repels electrons in n-side toward the junction. This neutralizes uncovered ions, reducing the depletion width. In reverse bias, the negative battery terminal attracts holes away from the junction and positive terminal attracts electrons away, exposing MORE fixed immobile ions and widening the depletion layer."
  },
  {
    q: "Why is a photodiode operated in reverse bias when measuring optical signals?",
    ans: "Under illumination, an equal number Δn = Δp of electron-hole pairs are generated. In an n-type material, n_e ≫ n_h. The fractional change in majority carriers (Δn_e / n_e) is negligibly tiny. However, the fractional change in minority carriers (Δn_h / n_h) is ENORMOUS and easily measured as a sharp change in reverse saturation current I_0, which is directly proportional to incident light intensity."
  },
  {
    q: "Why can Silicon not be used to make visible Light Emitting Diodes (LEDs)?",
    ans: "Silicon is an INDIRECT bandgap semiconductor. In Si, the bottom of the conduction band and top of the valence band do not align at the same crystal momentum (k-vector). Recombination requires the simultaneous emission/absorption of a lattice vibration (phonon), dissipating energy predominantly as HEAT rather than light. Direct bandgap materials like GaAsP and GaN conserve momentum directly, releasing energy purely as visible light photons."
  },
  {
    q: "Why is a Zener diode operated only in the reverse breakdown region in voltage regulation?",
    ans: "In the reverse breakdown region, the V–I characteristic of a Zener diode is virtually vertical. This means that even if current I_Z fluctuates significantly due to input voltage or load changes, the terminal voltage remains strictly clamped at the constant breakdown value V_Z."
  },
  {
    q: "What is the peak inverse voltage (PIV) across diodes in half-wave vs center-tapped full-wave rectifiers?",
    ans: "For a half-wave rectifier, during the non-conducting negative half-cycle, the maximum reverse voltage across the single diode is PIV = V_m. For a center-tapped full-wave rectifier, when one diode is non-conducting, the reverse voltage across it equals the full secondary winding voltage: PIV = 2 V_m."
  },
  {
    q: "Why are NAND and NOR gates called Universal Logic Gates?",
    ans: "Because any Boolean logic operation (NOT, AND, OR, XOR, XNOR) and any complex digital circuit (adders, flip-flops, multiplexers, microprocessors) can be constructed exclusively using only NAND gates or only NOR gates."
  }
];
