// 45+ High-Yield NEET Traps, Master Formula Sheet & Comparison Tables for Semiconductor Electronics

export interface NeetTrap {
  id: number;
  topic: string;
  trap: string;
  correction: string;
}

export interface FormulaEntry {
  symbol: string;
  name: string;
  formula: string;
  units: string;
  whenToUse: string;
  commonMistake: string;
}

export const NEET_SEMI_TRAPS: NeetTrap[] = [
  {
    id: 1,
    topic: "Solid Classification",
    trap: "Thinking Diamond is a semiconductor because it belongs to Group 14 like Si and Ge.",
    correction: "Diamond (Carbon) has a very large forbidden energy gap E_g ≈ 6 eV, making it a strong insulator at ordinary temperatures."
  },
  {
    id: 2,
    topic: "Intrinsic Semiconductor at 0 K",
    trap: "Assuming pure Silicon has some free electrons at absolute zero (T = 0 K).",
    correction: "At T = 0 K, all valence electrons are locked in covalent bonds (VB is completely full, CB is completely empty). Pure silicon is a PERFECT INSULATOR at 0 K."
  },
  {
    id: 3,
    topic: "Hole Nature",
    trap: "Believing a hole is a literal physical proton moving through the crystal.",
    correction: "A hole is a vacancy in a covalent bond where an electron is missing. It acts as an effective positive charge carrier (+e) through sequential electron jumping in the valence band."
  },
  {
    id: 4,
    topic: "Carrier Mobilities",
    trap: "Assuming hole mobility and electron mobility are equal in intrinsic semiconductors.",
    correction: "Electron mobility µ_e is always higher than hole mobility µ_h (µ_e > µ_h) because free CB electrons experience less lattice confinement than valence bound electrons."
  },
  {
    id: 5,
    topic: "Electrical Neutrality of Doped Semiconductors",
    trap: "Thinking an n-type semiconductor has a net negative electric charge because electrons are majority carriers.",
    correction: "Both n-type and p-type semiconductors are strictly ELECTRICALLY NEUTRAL. Each donor atom contributes a positive nucleus that balances the donated electron (N_d⁺ = n_e)."
  },
  {
    id: 6,
    topic: "Mass Action Law",
    trap: "Believing Mass Action Law n_e · n_h = n_i² holds only for pure intrinsic semiconductors.",
    correction: "The Mass Action Law n_e · n_h = n_i²(T) holds universally for INTRINSIC as well as EXTRINSIC (n-type and p-type) semiconductors at thermal equilibrium."
  },
  {
    id: 7,
    topic: "Doping with Trivalent vs Pentavalent",
    trap: "Confusing Indium (trivalent, p-type) with Antimony/Arsenic (pentavalent, n-type).",
    correction: "Group 13 (B, Al, Ga, In) = Trivalent Acceptor = p-type. Group 15 (P, As, Sb, Bi) = Pentavalent Donor = n-type."
  },
  {
    id: 8,
    topic: "Donor Energy Level",
    trap: "Placing donor level E_d close to the valence band.",
    correction: "The donor energy level E_d lies just BELOW the Conduction Band (ΔE ≈ 0.01 eV for Ge, 0.05 eV for Si)."
  },
  {
    id: 9,
    topic: "Acceptor Energy Level",
    trap: "Placing acceptor level E_a close to the conduction band.",
    correction: "The acceptor energy level E_a lies just ABOVE the Valence Band (ΔE ≈ 0.01 eV for Ge, 0.05 eV for Si)."
  },
  {
    id: 10,
    topic: "Temperature Coefficient of Resistance",
    trap: "Assuming semiconductors have a positive temperature coefficient of resistance like metals.",
    correction: "Semiconductors have a NEGATIVE temperature coefficient (α < 0). As temperature increases, resistance decreases exponentially."
  },
  {
    id: 11,
    topic: "Depletion Region Composition",
    trap: "Thinking the depletion layer contains mobile electrons and holes.",
    correction: "The depletion layer is DEPLETED of all mobile charge carriers; it contains only fixed, immobile donor positive ions (+) on the n-side and acceptor negative ions (−) on the p-side."
  },
  {
    id: 12,
    topic: "Built-in Electric Field Direction",
    trap: "Thinking the built-in electric field points from p-side to n-side.",
    correction: "The internal electric field E_bi points from the positive donor ions in the n-side to the negative acceptor ions in the p-side (n-side ➔ p-side)."
  },
  {
    id: 13,
    topic: "Equilibrium Current in p–n Junction",
    trap: "Assuming an unbiased isolated p–n junction produces an external electric current.",
    correction: "At equilibrium, the forward diffusion current of majority carriers is exactly equal and opposite to the drift current of minority carriers (I_net = 0)."
  },
  {
    id: 14,
    topic: "Forward Bias Barrier Change",
    trap: "Thinking forward bias widens the depletion layer.",
    correction: "Forward bias OPPOSES the built-in barrier. The effective barrier reduces to (V_0 − V) and the depletion layer NARROWs."
  },
  {
    id: 15,
    topic: "Reverse Bias Barrier Change",
    trap: "Thinking reverse bias aids conduction of majority carriers.",
    correction: "Reverse bias AIDS the built-in barrier. The effective barrier increases to (V_0 + V) and the depletion layer WIDENs, completely blocking majority carriers."
  },
  {
    id: 16,
    topic: "Reverse Saturation Current",
    trap: "Assuming reverse current increases linearly with reverse voltage.",
    correction: "Reverse saturation current I_0 is virtually independent of reverse voltage (up to breakdown) because it is limited by thermal generation rate of minority carriers."
  },
  {
    id: 17,
    topic: "Reverse Current Temperature Sensitivity",
    trap: "Thinking reverse current is insensitive to temperature.",
    correction: "Reverse current I_0 DOUBLES for approximately every 10 °C rise in temperature in both Germanium and Silicon diodes."
  },
  {
    id: 18,
    topic: "Threshold / Knee Voltage",
    trap: "Treating 0.7 V for Si and 0.3 V for Ge as universal fundamental physical constants.",
    correction: "0.7 V and 0.3 V are typical approximate room-temperature threshold voltages for standard doping; they decrease with increasing temperature (~ −2 mV/°C)."
  },
  {
    id: 19,
    topic: "Diode Dynamic Resistance",
    trap: "Calculating dynamic resistance as r = V / I instead of r = ΔV / ΔI.",
    correction: "Dynamic (AC) resistance is r_f = ΔV / ΔI (the reciprocal of the slope of the tangent to the forward V–I curve)."
  },
  {
    id: 20,
    topic: "Zener Breakdown Mechanism",
    trap: "Thinking Zener breakdown occurs in lightly doped diodes with thick depletion regions.",
    correction: "Zener breakdown occurs in HEAVILY doped diodes with extremely THIN depletion regions (< 10 nm) where high electric field (~10⁶ V/m) pulls valence electrons directly into CB via quantum tunneling."
  },
  {
    id: 21,
    topic: "Avalanche Breakdown Mechanism",
    trap: "Thinking Avalanche breakdown has a negative temperature coefficient.",
    correction: "Avalanche breakdown occurs at higher voltages (> 6 V) in lightly doped junctions via impact ionization; its breakdown voltage INCREASES with temperature (positive temp coefficient)."
  },
  {
    id: 22,
    topic: "Zener Diode Biasing in Regulator",
    trap: "Connecting Zener diode in forward bias in a voltage regulator circuit.",
    correction: "A Zener diode MUST ALWAYS BE CONNECTED IN REVERSE BIAS in a voltage regulator circuit to utilize its constant breakdown voltage V_Z."
  },
  {
    id: 23,
    topic: "Half-Wave Output Frequency",
    trap: "Assuming half-wave rectifier doubles the input frequency.",
    correction: "In a half-wave rectifier, output ripple frequency equals input frequency: f_out = f_in (e.g. 50 Hz in ➔ 50 Hz out)."
  },
  {
    id: 24,
    topic: "Full-Wave Output Frequency",
    trap: "Assuming full-wave rectifier output frequency is the same as input frequency.",
    correction: "In a full-wave rectifier, both half cycles produce positive pulses, so output ripple frequency is DOUBLED: f_out = 2 · f_in (e.g. 50 Hz in ➔ 100 Hz out)."
  },
  {
    id: 25,
    topic: "Rectifier Efficiency",
    trap: "Thinking 100% rectification efficiency is possible with ideal diodes.",
    correction: "Maximum theoretical efficiency is 40.6% for half-wave and 81.2% for full-wave due to the harmonic AC content in the pulsating waveform."
  },
  {
    id: 26,
    topic: "Capacitor Filter Connection",
    trap: "Connecting capacitor filter in series with the load resistor.",
    correction: "A capacitor filter is ALWAYS connected in PARALLEL with the load resistor R_L to provide a low-reactance bypass for AC ripple."
  },
  {
    id: 27,
    topic: "LED Biasing",
    trap: "Connecting an LED in reverse bias to emit light.",
    correction: "An LED MUST be FORWARD BIASED so majority electrons and holes cross the junction and recombine to emit photons."
  },
  {
    id: 28,
    topic: "LED Material Requirement",
    trap: "Using elemental Silicon or Germanium to make visible LEDs.",
    correction: "Elemental Si and Ge are INDIRECT bandgap materials that dissipate energy as heat (phonons). LEDs require DIRECT bandgap compound semiconductors (GaAs, GaP, GaN)."
  },
  {
    id: 29,
    topic: "Photodiode Biasing",
    trap: "Connecting a photodiode in forward bias for light intensity detection.",
    correction: "A photodiode is ALWAYS operated in REVERSE BIAS because the fractional change in minority carrier concentration upon illumination is vastly larger and easily measurable."
  },
  {
    id: 30,
    topic: "Solar Cell External Bias",
    trap: "Applying a battery to a solar cell during normal power generation.",
    correction: "A solar cell operates at ZERO external bias (no battery). It is a photovoltaic generator that produces electrical power from incident sunlight."
  },
  {
    id: 31,
    topic: "Solar Cell V-I Characteristic Quadrant",
    trap: "Drawing solar cell V-I curve in the first quadrant.",
    correction: "The I-V curve of a solar cell is plotted in the FOURTH QUADRANT because it delivers power to an external load (I is negative for positive V)."
  },
  {
    id: 32,
    topic: "Universal Logic Gates",
    trap: "Assuming AND and OR are universal gates.",
    correction: "Only NAND and NOR are Universal Gates because any digital gate or circuit can be synthesized using only NAND or only NOR gates."
  },
  {
    id: 33,
    topic: "NAND with Shorted Inputs",
    trap: "Assuming shorting inputs of a NAND gate makes it an AND gate.",
    correction: "Shorting inputs of a NAND gate (A = B) makes it a NOT GATE (Inverter): Y = (A · A)̅ = A̅."
  },
  {
    id: 34,
    topic: "NOR with Shorted Inputs",
    trap: "Assuming shorting inputs of a NOR gate makes it an OR gate.",
    correction: "Shorting inputs of a NOR gate (A = B) makes it a NOT GATE (Inverter): Y = (A + A)̅ = A̅."
  },
  {
    id: 35,
    topic: "De Morgan's First Law",
    trap: "Writing (A + B)̅ = A̅ + B̅.",
    correction: "De Morgan's first theorem: (A + B)̅ = A̅ · B̅ (the complement of OR is the AND of complements)."
  },
  {
    id: 36,
    topic: "De Morgan's Second Law",
    trap: "Writing (A · B)̅ = A̅ · B̅.",
    correction: "De Morgan's second theorem: (A · B)̅ = A̅ + B̅ (the complement of AND is the OR of complements)."
  },
  {
    id: 37,
    topic: "XOR Gate Output Condition",
    trap: "Expecting XOR output to be 1 when both inputs are 1.",
    correction: "In an XOR gate, Y = 1 ONLY when inputs are DIFFERENT (01➔1, 10➔1). When both inputs are 1 (11), output is 0."
  },
  {
    id: 38,
    topic: "XNOR Gate Output Condition",
    trap: "Expecting XNOR output to be 0 when both inputs are 0.",
    correction: "In an XNOR gate (Equivalence), Y = 1 when inputs are IDENTICAL (00➔1, 11➔1)."
  },
  {
    id: 39,
    topic: "Peak Inverse Voltage in Full-Wave Rectifier",
    trap: "Assuming PIV for center-tapped full-wave rectifier is V_m.",
    correction: "For a center-tapped full-wave rectifier, PIV across non-conducting diode is 2 V_m (double that of half-wave)."
  },
  {
    id: 40,
    topic: "Photodiode Detection Limit",
    trap: "Assuming a photodiode can detect wavelengths longer than threshold λ_max = hc/E_g.",
    correction: "Photons with λ > λ_max have energy hν < E_g and pass through without generating electron-hole pairs."
  },
  {
    id: 41,
    topic: "Zener Voltage Drop with Changing Load",
    trap: "Assuming output voltage of a Zener regulator changes when load resistance R_L changes.",
    correction: "As long as Zener current remains within operating limits (I_Z > I_Z,min), V_out remains strictly clamped at V_Z."
  },
  {
    id: 42,
    topic: "Majority vs Minority Diffusion",
    trap: "Thinking minority carriers diffuse across the p-n junction under reverse bias.",
    correction: "Minority carriers DRIFT across the junction assisted by the internal electric field; majority carriers DIFFUSE against the barrier."
  },
  {
    id: 43,
    topic: "Diode Ideal vs Real in Numericals",
    trap: "Forgetting to subtract 0.7 V for a Silicon diode when solving circuit numericals.",
    correction: "Always check if the diode is specified as 'ideal' (0 V drop) or 'Silicon' (0.7 V drop) or 'Germanium' (0.3 V drop)."
  },
  {
    id: 44,
    topic: "Logic Gate Timing Waveform Analysis",
    trap: "Reading HIGH as 0 and LOW as 1.",
    correction: "Standard positive logic: HIGH (upper level / 5 V) = 1; LOW (lower level / 0 V) = 0."
  },
  {
    id: 45,
    topic: "Number of NAND Gates to build Basic Gates",
    trap: "Guessing random numbers of NAND gates for NOT, AND, OR, XOR.",
    correction: "Minimum NAND gates required: NOT = 1; AND = 2; OR = 3; NOR = 4; XOR = 4; XNOR = 5."
  }
];

export const MASTER_FORMULA_SHEET: FormulaEntry[] = [
  {
    symbol: "E_g",
    name: "Forbidden Band Gap & Threshold Wavelength",
    formula: "E_g = h ν_max = (h c) / λ_max ≈ 12400 / λ_max(Å) eV",
    units: "eV (or Joules, 1 eV = 1.6 × 10⁻¹⁹ J)",
    whenToUse: "To find maximum absorption wavelength or minimum photon energy to create e⁻-h⁺ pairs.",
    commonMistake: "Mixing up nm and Å (1 nm = 10 Å = 10⁻⁹ m; 1 Å = 10⁻¹⁰ m)."
  },
  {
    symbol: "n_i²",
    name: "Mass Action Law",
    formula: "n_e · n_h = n_i²(T)",
    units: "m⁻⁶ (or cm⁻⁶)",
    whenToUse: "To calculate minority carrier density from majority carrier density in extrinsic semiconductors.",
    commonMistake: "Applying to non-equilibrium conditions or changing temperature without recalculating n_i."
  },
  {
    symbol: "σ",
    name: "Semiconductor Conductivity",
    formula: "σ = e (n_e µ_e + n_h µ_h) = 1 / ρ",
    units: "S/m or (Ω·m)⁻¹",
    whenToUse: "To calculate total electrical conductivity from electron and hole densities and mobilities.",
    commonMistake: "Forgetting electronic charge e = 1.6 × 10⁻¹⁹ C."
  },
  {
    symbol: "r_f",
    name: "Diode Dynamic Forward Resistance",
    formula: "r_f = ΔV_F / ΔI_F",
    units: "Ohms (Ω)",
    whenToUse: "To find small-signal AC resistance of forward-biased diode.",
    commonMistake: "Using DC static resistance R = V/I instead of dynamic slope ΔV/ΔI."
  },
  {
    symbol: "V_dc (HW)",
    name: "Half-Wave Rectifier DC Output Voltage",
    formula: "V_dc = V_m / π ≈ 0.318 V_m",
    units: "Volts (V)",
    whenToUse: "To find average DC voltage from peak AC voltage V_m in a half-wave rectifier.",
    commonMistake: "Confusing V_rms with V_m (V_m = √2 · V_rms)."
  },
  {
    symbol: "V_dc (FW)",
    name: "Full-Wave Rectifier DC Output Voltage",
    formula: "V_dc = (2 V_m) / π ≈ 0.636 V_m",
    units: "Volts (V)",
    whenToUse: "To find average DC voltage in center-tapped or bridge full-wave rectifiers.",
    commonMistake: "Forgetting factor of 2 compared to half-wave."
  },
  {
    symbol: "f_out",
    name: "Rectifier Output Ripple Frequency",
    formula: "Half-Wave: f_out = f_in ; Full-Wave: f_out = 2 · f_in",
    units: "Hertz (Hz)",
    whenToUse: "To determine fundamental ripple frequency in power supply design.",
    commonMistake: "Setting full-wave output frequency equal to input frequency."
  },
  {
    symbol: "R_s",
    name: "Zener Voltage Regulator Series Resistor",
    formula: "R_s = (V_in − V_Z) / (I_Z + I_L) = (V_in − V_Z) / I_total",
    units: "Ohms (Ω)",
    whenToUse: "To calculate current-limiting series resistor in Zener diode voltage regulator.",
    commonMistake: "Dividing by only I_Z and omitting load current I_L."
  },
  {
    symbol: "λ_LED",
    name: "Peak Wavelength Emitted by LED",
    formula: "λ ≈ (h c) / E_g ≈ 1240 / E_g(eV) nm",
    units: "Nanometers (nm) or Ångströms (Å)",
    whenToUse: "To determine colour and wavelength of emitted light from semiconductor band gap.",
    commonMistake: "Using indirect band gap materials like Si or Ge."
  }
];
