// Verified Real NEET/AIPMT Previous Year Questions & 20 Original Self-Test MCQs for Semiconductor Electronics

export interface PyqItem {
  id: string;
  exam: string;
  year: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  conceptTested: string;
}

export interface SelfTestMcq {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

export const VERIFIED_SEMI_PYQS: PyqItem[] = [
  {
    id: "neet-2023-logic-nand",
    exam: "NEET UG",
    year: 2023,
    question: "For the logic circuit shown, if inputs are A and B connected to a NAND gate whose output is connected to both inputs of another NAND gate, the output Y is given by:",
    options: [
      "A · B",
      "A + B",
      "(A · B)̅",
      "(A + B)̅"
    ],
    correctAnswer: 0,
    explanation: "The first NAND gate produces Y₁ = (A · B)̅. The second NAND gate has its inputs shorted together, so it acts as a NOT gate: Y = (Y₁)̅ = ((A · B)̅)̅ = A · B. The output is equivalent to an AND gate.",
    conceptTested: "Universal NAND Gate Implementation of AND Gate"
  },
  {
    id: "neet-2022-zener-breakdown",
    exam: "NEET UG",
    year: 2022,
    question: "The peak voltage in the output of a half-wave diode rectifier fed with a sinusoidal signal of peak value 10 V and diode forward drop 0.7 V is:",
    options: [
      "10 V",
      "9.3 V",
      "5 V",
      "4.65 V"
    ],
    correctAnswer: 1,
    explanation: "During forward conduction, the diode drops its barrier potential V_d = 0.7 V. Hence, peak output voltage across the load resistor is V_out,peak = V_in,peak − V_d = 10 V − 0.7 V = 9.3 V.",
    conceptTested: "Diode Barrier Drop in Rectification"
  },
  {
    id: "neet-2021-pn-doping",
    exam: "NEET UG",
    year: 2021,
    question: "An intrinsic semiconductor is converted into an n-type extrinsic semiconductor by doping it with:",
    options: [
      "Phosphorus",
      "Aluminium",
      "Boron",
      "Indium"
    ],
    correctAnswer: 0,
    explanation: "To create an n-type semiconductor, a pentavalent impurity from Group 15 (such as Phosphorus, Arsenic, or Antimony) must be doped. Aluminium, Boron, and Indium are trivalent impurities that create p-type semiconductors.",
    conceptTested: "Doping with Pentavalent vs Trivalent Impurities"
  },
  {
    id: "neet-2020-photodiode-bias",
    exam: "NEET UG",
    year: 2020,
    question: "A photodiode is fabricated from a semiconductor with a band gap of 2.5 eV. It is operated under reverse bias. The reason for operating the photodiode in reverse bias is:",
    options: [
      "To increase the forward barrier potential",
      "Because fractional change in minority carrier concentration under illumination is easily measurable",
      "To increase electron mobility",
      "To emit visible photons"
    ],
    correctAnswer: 1,
    explanation: "Under reverse bias, current is governed by minority carriers. When illuminated, newly generated carriers create a large fractional change in minority carrier density (Δn_minority / n_minority), making optical detection highly sensitive.",
    conceptTested: "Photodiode Reverse Biasing Mechanism"
  },
  {
    id: "neet-2019-rectifier-frequency",
    exam: "NEET UG",
    year: 2019,
    question: "A full-wave rectifier circuit along with its input waveform is operated at 50 Hz mains frequency. The fundamental frequency in the output ripple voltage is:",
    options: [
      "25 Hz",
      "50 Hz",
      "100 Hz",
      "200 Hz"
    ],
    correctAnswer: 2,
    explanation: "In a full-wave rectifier, both positive and negative half-cycles of input are converted into positive pulses. Therefore, the ripple period is halved: T_out = T_in / 2, meaning output frequency is doubled: f_out = 2 · f_in = 2 × 50 Hz = 100 Hz.",
    conceptTested: "Full-Wave Rectifier Ripple Frequency"
  },
  {
    id: "neet-2018-zener-voltage-reg",
    exam: "NEET UG",
    year: 2018,
    question: "In a Zener regulated power supply, a Zener diode with breakdown voltage V_Z = 6.0 V is used for regulation. The load current is to be 4.0 mA and the unregulated input is 10.0 V. If Zener current is 6.0 mA, the value of series resistance R_s is:",
    options: [
      "400 Ω",
      "667 Ω",
      "1000 Ω",
      "250 Ω"
    ],
    correctAnswer: 0,
    explanation: "Total circuit current I = I_Z + I_L = 6.0 mA + 4.0 mA = 10.0 mA. The voltage drop across the series resistor is V_Rs = V_in − V_Z = 10.0 V − 6.0 V = 4.0 V. Therefore, R_s = V_Rs / I = 4.0 V / (10.0 × 10⁻³ A) = 400 Ω.",
    conceptTested: "Zener Diode Voltage Regulator Calculation"
  },
  {
    id: "neet-2017-logic-nor",
    exam: "NEET UG",
    year: 2017,
    question: "The given truth table corresponds to which logic gate? [Inputs: (0,0)➔1; (0,1)➔0; (1,0)➔0; (1,1)➔0]",
    options: [
      "AND gate",
      "OR gate",
      "NAND gate",
      "NOR gate"
    ],
    correctAnswer: 3,
    explanation: "An OR gate produces (0,1,1,1). The inverted output (1,0,0,0) is Y = (A + B)̅, which is the exact truth table of a NOR gate.",
    conceptTested: "Logic Gate Truth Table Identification"
  },
  {
    id: "aipmt-2015-depletion-region",
    exam: "AIPMT",
    year: 2015,
    question: "The barrier potential of a p–n junction depends on: (a) type of semiconductor material, (b) amount of doping, (c) temperature. Which of the following is correct?",
    options: [
      "(a) and (b) only",
      "(b) only",
      "(b) and (c) only",
      "(a), (b) and (c)"
    ],
    correctAnswer: 3,
    explanation: "The built-in potential barrier V_0 = (kT / e) ln(N_a N_d / n_i²). It depends on temperature T, doping concentrations N_a and N_d, and intrinsic carrier concentration n_i (which depends on semiconductor band gap and material). Thus, it depends on (a), (b), and (c).",
    conceptTested: "Factors Determining Built-in Potential Barrier"
  }
];

export const ORIGINAL_SELF_TEST_MCQS: SelfTestMcq[] = [
  {
    id: 1,
    question: "At absolute zero temperature (T = 0 K), an intrinsic pure silicon crystal behaves as:",
    options: ["A perfect conductor", "A superconductor", "A perfect insulator", "A metallic alloy"],
    correctAnswer: 2,
    explanation: "At 0 K, all valence electrons are tightly bound in covalent bonds; the conduction band is completely empty and valence band is completely full. Hence, conductivity is strictly zero (perfect insulator).",
    topic: "Intrinsic Semiconductors"
  },
  {
    id: 2,
    question: "When Germanium is doped with a small amount of Antimony, the resulting crystal:",
    options: ["Becomes p-type and negatively charged", "Becomes n-type and electrically neutral", "Becomes n-type and positively charged", "Becomes an insulator"],
    correctAnswer: 1,
    explanation: "Antimony is pentavalent (Group 15) creating an n-type semiconductor. Because the donor atom has an equal number of protons and electrons, the doped crystal is strictly electrically neutral.",
    topic: "Doping & Charge Neutrality"
  },
  {
    id: 3,
    question: "The energy level of a donor impurity in an n-type semiconductor lies:",
    options: ["Just above the valence band", "In the middle of the forbidden gap", "Just below the bottom of the conduction band", "Deep inside the conduction band"],
    correctAnswer: 2,
    explanation: "In an n-type semiconductor, the donor level E_d lies just ~0.01 eV (for Ge) to 0.05 eV (for Si) below the bottom edge of the Conduction Band.",
    topic: "Energy Band Levels"
  },
  {
    id: 4,
    question: "In an intrinsic semiconductor, the mobility of electrons (µ_e) compared to the mobility of holes (µ_h) is:",
    options: ["µ_e = µ_h", "µ_e < µ_h", "µ_e > µ_h", "µ_e = 0"],
    correctAnswer: 2,
    explanation: "Electrons move freely in the conduction band, whereas holes move through sequential bound electron jumps in the valence band. Hence electron mobility is always higher than hole mobility (µ_e > µ_h).",
    topic: "Carrier Mobility"
  },
  {
    id: 5,
    question: "The width of the depletion region in an unbiased p–n junction is of the order of:",
    options: ["10⁻¹⁰ m", "10⁻⁶ m (1 µm)", "10⁻³ m (1 mm)", "10⁻¹ m (10 cm)"],
    correctAnswer: 1,
    explanation: "The typical thickness of the depletion layer in an unbiased p-n junction is approximately 0.1 to 1 µm (10⁻⁶ m).",
    topic: "Depletion Region"
  },
  {
    id: 6,
    question: "When a p–n junction diode is forward biased:",
    options: [
      "Barrier height increases and depletion width increases",
      "Barrier height decreases and depletion width decreases",
      "Barrier height decreases and depletion width increases",
      "Barrier height remains unchanged"
    ],
    correctAnswer: 1,
    explanation: "Forward bias applies positive potential to p-side and negative to n-side, opposing the built-in barrier. Consequently, barrier height reduces to (V_0 − V) and depletion layer narrows.",
    topic: "Forward Biasing"
  },
  {
    id: 7,
    question: "In reverse bias of a p–n junction, the small reverse saturation current is mainly due to:",
    options: [
      "Diffusion of majority carriers",
      "Drift of thermally generated minority carriers across the junction",
      "Breakdown of covalent bonds by light",
      "Electrons jumping from conduction band to valence band"
    ],
    correctAnswer: 1,
    explanation: "The built-in electric field sweeps thermally generated minority carriers (electrons from p-side and holes from n-side) across the junction, creating reverse saturation current I_0.",
    topic: "Reverse Saturation Current"
  },
  {
    id: 8,
    question: "If an alternating voltage of frequency 60 Hz is applied to a half-wave rectifier, the output ripple frequency is:",
    options: ["30 Hz", "60 Hz", "120 Hz", "0 Hz"],
    correctAnswer: 1,
    explanation: "For a half-wave rectifier, only one pulse appears per cycle, so output frequency f_out = f_in = 60 Hz.",
    topic: "Half-Wave Rectification"
  },
  {
    id: 9,
    question: "The maximum theoretical efficiency of a full-wave rectifier is:",
    options: ["40.6%", "50.0%", "81.2%", "100.0%"],
    correctAnswer: 2,
    explanation: "The maximum efficiency of a full-wave rectifier is η_max = 81.2% (exactly twice that of a half-wave rectifier, 40.6%).",
    topic: "Rectifier Efficiency"
  },
  {
    id: 10,
    question: "A Zener diode is designed to operate primarily in the:",
    options: ["Forward active region", "Reverse breakdown region", "Cut-off region", "Saturation region with forward current"],
    correctAnswer: 1,
    explanation: "A Zener diode is fabricated with heavy doping to operate safely in the reverse breakdown region, where voltage remains clamped at V_Z.",
    topic: "Zener Diode"
  },
  {
    id: 11,
    question: "A Light Emitting Diode (LED) emits light during:",
    options: [
      "Reverse bias due to impact ionization",
      "Forward bias due to spontaneous recombination of electrons and holes",
      "Unbiased condition due to thermal fluctuations",
      "Zener breakdown"
    ],
    correctAnswer: 1,
    explanation: "In forward bias, injected minority carriers recombine across the junction; excess energy is released as photons with E ≈ E_g.",
    topic: "LED Principle"
  },
  {
    id: 12,
    question: "To emit light in the visible spectrum (400 nm to 700 nm), the band gap of an LED semiconductor must be at least:",
    options: ["0.2 eV", "0.7 eV", "1.1 eV", "1.8 eV"],
    correctAnswer: 3,
    explanation: "Red light (700 nm) has photon energy E = 1240 / 700 ≈ 1.77 eV ≈ 1.8 eV. Thus, visible LEDs require E_g ≥ 1.8 eV.",
    topic: "LED Band Gap"
  },
  {
    id: 13,
    question: "A Solar Cell is operated in:",
    options: ["Heavy forward bias", "Heavy reverse bias", "Zero external bias (Photovoltaic mode)", "Breakdown region"],
    correctAnswer: 2,
    explanation: "A solar cell does not require any external battery (zero external bias); it generates photovoltage V_oc and photocurrent by absorbing solar radiation.",
    topic: "Solar Cell Mode"
  },
  {
    id: 14,
    question: "Which of the following logic gates is called a UNIVERSAL GATE?",
    options: ["AND gate", "OR gate", "NAND gate", "NOT gate"],
    correctAnswer: 2,
    explanation: "NAND and NOR gates are universal gates because any logic gate or digital circuit can be constructed entirely using only NAND or only NOR gates.",
    topic: "Universal Logic Gates"
  },
  {
    id: 15,
    question: "The Boolean expression for a NOR gate with inputs A and B is:",
    options: ["Y = A + B", "Y = A · B", "Y = (A + B)̅", "Y = (A · B)̅"],
    correctAnswer: 2,
    explanation: "A NOR gate is an OR gate followed by an inverter: Y = (A + B)̅.",
    topic: "NOR Gate Expression"
  },
  {
    id: 16,
    question: "According to De Morgan's first theorem, the expression (A + B)̅ is equivalent to:",
    options: ["A̅ + B̅", "A̅ · B̅", "A · B", "(A · B)̅"],
    correctAnswer: 1,
    explanation: "De Morgan's First Theorem states that the complement of a sum is equal to the product of complements: (A + B)̅ = A̅ · B̅.",
    topic: "De Morgan's Theorems"
  },
  {
    id: 17,
    question: "If inputs to a NAND gate are connected together (A = B), the resulting circuit functions as a:",
    options: ["Buffer", "AND gate", "OR gate", "NOT gate (Inverter)"],
    correctAnswer: 3,
    explanation: "When inputs are tied together: Y = (A · A)̅ = A̅, which is a NOT gate (inverter).",
    topic: "NAND as NOT"
  },
  {
    id: 18,
    question: "In an XOR gate, the output Y is 1 when:",
    options: ["Both inputs are 0", "Both inputs are 1", "The two inputs are different", "The two inputs are identical"],
    correctAnswer: 2,
    explanation: "Exclusive-OR (XOR) output is HIGH (1) when one and only one input is HIGH (inputs are distinct: 01➔1, 10➔1, 00➔0, 11➔0).",
    topic: "XOR Gate"
  },
  {
    id: 19,
    question: "A semiconductor has electron concentration n_e = 8 × 10¹³ cm⁻³ and hole concentration n_h = 5 × 10¹² cm⁻³. The semiconductor is:",
    options: ["p-type", "n-type", "Intrinsic", "Insulator"],
    correctAnswer: 1,
    explanation: "Since n_e (8 × 10¹³ cm⁻³) > n_h (5 × 10¹² cm⁻³), electrons are majority carriers, making it an n-type semiconductor.",
    topic: "Carrier Identification"
  },
  {
    id: 20,
    question: "Carbon (Diamond), Silicon, and Germanium have four valence electrons each. At room temperature, the number of free conduction electrons is:",
    options: [
      "Maximum in Carbon",
      "Maximum in Silicon",
      "Maximum in Germanium",
      "Equal in all three"
    ],
    correctAnswer: 2,
    explanation: "Band gap is smallest in Germanium (0.72 eV), moderate in Silicon (1.1 eV), and largest in Diamond (~6 eV). Since n_i ∝ exp(−E_g / 2kT), Germanium has the highest free electron density at room temperature.",
    topic: "Band Gap Comparison"
  }
];
