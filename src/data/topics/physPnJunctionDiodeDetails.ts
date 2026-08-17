import { DetailedTopicContent } from '../../types/neet';
import { SEMI_SVGS } from '../semiconductors/semiconductorDiagrams';

export const physPnJunctionDiodeDetails: DetailedTopicContent = {
  topicId: "phys-pn-junction-diode",
  topicName: "p–n Junction Diode, Biasing, V–I Curves & Rectification",
  subject: "Physics",
  class: "Class 12",
  classification: "Electronic Devices & Experimental Skills",
  chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",

  whatIsThisTopic: "First-principles masterclass on p–n Junction Formation, Depletion Layer, Potential Barrier, Forward & Reverse Bias, Diode V–I Characteristics, Breakdown Mechanisms, Half-Wave & Full-Wave Rectification, and Filter Circuits.",

  basicIdea: [
    "When p-type and n-type semiconductor regions are joined at atomic level, majority holes diffuse from p to n and majority electrons diffuse from n to p.",
    "Near the junction, diffusing electrons and holes recombine, leaving behind uncompensated fixed negative acceptor ions on the p-side and positive donor ions on the n-side. This carrier-free zone is the DEPLETION REGION (width d ≈ 0.1 to 1 µm).",
    "These fixed ions set up a strong built-in internal electric field E_bi pointing from n-side (+) to p-side (−), creating a built-in Potential Barrier V_0 (Si ≈ 0.7 V, Ge ≈ 0.3 V).",
    "At thermal equilibrium, diffusion current (majority carriers) is exactly balanced by drift current (minority carriers swept by E_bi), giving zero net current: I_net = 0.",
    "In FORWARD BIAS (p ➔ +, n ➔ −), external voltage opposes the built-in barrier. Depletion width narrows, barrier height becomes (V_0 − V), and majority carriers cross easily to give large forward current I_F (milliamperes, mA) once V > V_knee.",
    "In REVERSE BIAS (p ➔ −, n ➔ +), external voltage aids the built-in barrier. Depletion width widens, barrier height becomes (V_0 + V), majority carrier flow is blocked, and only a tiny Reverse Saturation Current I_0 (microamperes, µA) flows due to thermally generated minority carriers.",
    "A Diode conducts current in only one direction (forward bias) and acts as an open switch in reverse bias, enabling RECTIFICATION (converting AC to pulsating DC).",
    "Half-Wave Rectifier: Uses 1 diode; conducts during positive half-cycle only; η_max = 40.6%; f_out = f_in; PIV = V_m.",
    "Full-Wave Center-Tapped Rectifier: Uses 2 diodes; conducts during both half-cycles; η_max = 81.2%; f_out = 2 f_in; PIV = 2 V_m. A parallel capacitor filter smooths AC ripple into steady DC."
  ],

  importantTerms: [
    {
      term: "Depletion Region",
      definition: "A microscopic region (width d ≈ 0.1–1 µm) on both sides of a p–n metallurgical junction that is completely depleted of mobile charge carriers (free electrons and holes) and contains only fixed immobile ions.",
      neetNote: "Contains negative fixed acceptor ions on the p-side and positive fixed donor ions on the n-side."
    },
    {
      term: "Built-in Potential Barrier (V_0)",
      definition: "The internal electric potential difference developed across the depletion layer due to the uncompensated fixed ions that prevents further diffusion of majority carriers across the junction.",
      neetNote: "Typical approximate values at 300 K: Silicon V_0 ≈ 0.7 V; Germanium V_0 ≈ 0.3 V."
    },
    {
      term: "Forward Bias",
      definition: "Connecting the p-type anode of a diode to the positive terminal of a battery and the n-type cathode to the negative terminal, which reduces the potential barrier and permits forward current (mA).",
      neetNote: "Barrier height becomes (V_0 − V); depletion layer width decreases."
    },
    {
      term: "Reverse Bias",
      definition: "Connecting the p-type anode to the negative battery terminal and n-type cathode to the positive terminal, which increases the barrier height to (V_0 + V) and widens the depletion layer.",
      neetNote: "Blocks majority carriers; allows only a tiny reverse saturation current I_0 (µA / nA) of minority carriers."
    },
    {
      term: "Threshold / Knee Voltage (V_knee)",
      definition: "The forward bias voltage at which the forward current begins to increase exponentially as the barrier potential is completely overcome (Si ≈ 0.7 V, Ge ≈ 0.3 V).",
      neetNote: "Also called cut-in voltage or turn-on voltage."
    },
    {
      term: "Dynamic (AC) Resistance (r_f)",
      definition: "The ratio of a small change in forward voltage to the corresponding small change in forward current: r_f = ΔV_F / ΔI_F.",
      neetNote: "Calculated as the reciprocal of the slope of the forward V–I curve (typically 10–100 Ω)."
    },
    {
      term: "Peak Inverse Voltage (PIV)",
      definition: "The maximum reverse voltage that appears across a diode during the non-conducting half-cycle in a rectifier circuit.",
      neetNote: "PIV = V_m for half-wave and bridge rectifiers; PIV = 2 V_m for center-tapped full-wave rectifier."
    }
  ],

  conceptExplanation: [
    {
      heading: "1. Formation of p–n Junction, Depletion Region & Potential Barrier",
      paragraphs: [
        "A p–n junction cannot be formed by merely pressing together two separate crystal blocks because atomic-scale contact is impossible due to microscopic surface roughness. It is fabricated on a single continuous semiconductor crystal by selectively diffusing p-type and n-type dopants into adjacent zones.",
        "Immediately upon junction formation, two concurrent transport processes begin:",
        "1. Carrier Diffusion: The steep concentration gradient forces majority holes in the p-region to diffuse across the junction into the n-region, and majority electrons in the n-region to diffuse into the p-region.",
        "2. Recombination & Ion Uncovering: Near the interface, diffusing electrons and holes recombine and neutralize each other. This leaves behind immobile ionized donor cores (N_d⁺) on the n-side and immobile ionized acceptor cores (N_a⁻) on the p-side.",
        "This space-charge layer spanning both sides of the interface is completely devoid of free mobile carriers and is called the DEPLETION REGION (thickness d ≈ 0.1 to 1 µm).",
        "The uncovered positive and negative ions create a strong internal electric field E_bi pointing from n-side to p-side. This field opposes the forward diffusion of majority carriers and instead sweeps thermally generated minority carriers (electrons in p-side and holes in n-side) across the junction, creating a DRIFT CURRENT.",
        "Equilibrium Condition: As the depletion width grows, E_bi intensifies until the drift current of minority carriers exactly balances the diffusion current of majority carriers: I_diffusion = I_drift. At this point, net current is zero: I_net = 0.",
        "The potential difference developed across the depletion layer at equilibrium is called the Built-in Potential Barrier V_0 (typically V_0 ≈ 0.7 V for Silicon and V_0 ≈ 0.3 V for Germanium at room temperature)."
      ],
      visual: {
        type: 'svg',
        svgContent: SEMI_SVGS.pnJunctionFormation,
        caption: "Figure 14.5: p–n Junction at Equilibrium: Depletion Layer with Immobile Fixed Ions, Built-in Electric Field E_bi (n ➔ p), and Potential Barrier V_0.",
        guide: "Observe that fixed negative ions are in p-side, fixed positive ions in n-side, and the built-in electric field E_bi points from n-side to p-side."
      },
      importantPoints: [
        "Depletion layer contains fixed immobile ions but NO mobile free charge carriers.",
        "Built-in electric field E_bi is directed from n-side (+) to p-side (−).",
        "At thermal equilibrium, forward diffusion current equals reverse drift current (net current = 0).",
        "Typical potential barrier at 300 K: Silicon ≈ 0.7 V; Germanium ≈ 0.3 V."
      ]
    },
    {
      heading: "2. Forward Bias, Reverse Bias & Diode V–I Characteristics",
      paragraphs: [
        "When an external DC battery is connected across the p–n junction, the equilibrium is modified drastically depending on battery polarity:",
        "1. Forward Bias (p-terminal ➔ Battery Positive, n-terminal ➔ Battery Negative): The applied voltage V sets up an electric field opposing the internal built-in field E_bi. The effective barrier height is reduced to (V_0 − V) and the depletion layer narrows. As long as V < V_knee (Si ≈ 0.7 V, Ge ≈ 0.3 V), forward current remains negligible. Once V exceeds V_knee, majority carriers easily overcome the barrier and diffuse in massive numbers across the junction, producing an exponential surge in forward current I_F in milliamperes (mA).",
        "2. Reverse Bias (p-terminal ➔ Battery Negative, n-terminal ➔ Battery Positive): The applied voltage V aids the internal built-in field. The effective barrier height increases to (V_0 + V) and the depletion layer widens. Majority carrier diffusion is completely suppressed. However, thermally generated minority carriers in the vicinity of the junction are easily swept across by the reinforced electric field, producing a tiny, nearly constant Reverse Saturation Current I_0 in microamperes (µA for Ge, nA for Si). I_0 is independent of reverse voltage over a wide range, but doubles every 10 °C rise in temperature.",
        "3. Reverse Breakdown: If reverse bias voltage is increased beyond a critical value called Breakdown Voltage V_BR, reverse current increases abruptly without significant increase in voltage. In heavily doped thin junctions, intense field produces Zener Breakdown (direct quantum tunneling of valence electrons, V_z < 6 V). In lightly doped thick junctions, minority carriers accelerate to high kinetic energy and shatter covalent bonds via collision impact, producing Avalanche Breakdown (impact ionization, V_br > 6 V)."
      ],
      visual: {
        type: 'svg',
        svgContent: SEMI_SVGS.diodeVICharacteristic,
        caption: "Figure 14.6: Complete V–I Characteristic Curve of a p–n Junction Diode showing Forward Conduction (mA), Knee Voltage (0.7 V for Si), Reverse Saturation (µA), and Reverse Breakdown.",
        guide: "Note the scale differences: Forward voltage is in Volts and current is in mA; Reverse voltage is in Volts and current is in µA."
      },
      importantPoints: [
        "Forward bias: Depletion layer narrows, barrier drops to (V_0 − V), current is in mA.",
        "Reverse bias: Depletion layer widens, barrier rises to (V_0 + V), current is in µA (minority carriers).",
        "Dynamic resistance r_f = ΔV_F / ΔI_F is the inverse slope of the forward V–I curve (10–100 Ω).",
        "Reverse saturation current I_0 is voltage-independent but highly temperature-dependent."
      ]
    },
    {
      heading: "3. Rectification: Half-Wave & Full-Wave Rectifiers with Filter",
      paragraphs: [
        "Rectification is the process of converting an alternating current (AC) into a unidirectional pulsating direct current (DC) by exploiting the one-way conduction property of a p–n junction diode.",
        "1. Half-Wave Rectifier: Consists of a step-down transformer, a single diode D, and a load resistor R_L. During the positive half-cycle of input AC, the diode is forward biased and conducts current through R_L. During the negative half-cycle, the diode is reverse biased and blocks current (I ≈ 0). Output consists of positive pulses separated by zero-current gaps. DC output voltage is V_dc = V_m / π ≈ 0.318 V_m. Maximum theoretical efficiency is η_max = 40.6%. Output ripple frequency equals input AC frequency: f_out = f_in (50 Hz in ➔ 50 Hz out). Peak Inverse Voltage across diode is PIV = V_m.",
        "2. Full-Wave Center-Tapped Rectifier: Uses a center-tapped secondary transformer and two diodes D₁ and D₂. During the positive half-cycle, D₁ is forward biased and conducts while D₂ is reverse biased (OFF). During the negative half-cycle, D₂ is forward biased and conducts while D₁ is OFF. Crucially, current flows in the SAME direction through load R_L during BOTH half-cycles! DC output voltage is V_dc = 2 V_m / π ≈ 0.636 V_m. Maximum efficiency is η_max = 81.2% (twice that of half-wave). Output ripple frequency is DOUBLED: f_out = 2 f_in (50 Hz in ➔ 100 Hz out). Peak Inverse Voltage across non-conducting diode is PIV = 2 V_m.",
        "3. Capacitor Filter Circuit: Connected in parallel with load R_L. The capacitor charges to peak voltage V_m during diode conduction and discharges slowly through R_L when diode turns OFF (time constant τ = R_L C ≫ T/2). This smooths out pulsating ripples, delivering nearly steady DC voltage to the load."
      ],
      visual: {
        type: 'svg',
        svgContent: SEMI_SVGS.fullWaveRectifier,
        caption: "Figure 14.7: Full-Wave Center-Tapped Rectifier Circuit and Output Waveforms showing both half-cycles rectified to produce 100 Hz pulsating DC from 50 Hz input.",
        guide: "Observe that D₁ conducts during positive half-cycle and D₂ conducts during negative half-cycle, maintaining unidirectional current through R_L at double frequency (2f)."
      },
      importantPoints: [
        "Half-Wave Rectifier: 1 Diode, η_max = 40.6%, f_out = f_in, V_dc = V_m / π, PIV = V_m.",
        "Full-Wave Rectifier: 2 Diodes, η_max = 81.2%, f_out = 2 f_in, V_dc = 2 V_m / π, PIV = 2 V_m.",
        "Capacitor filter is always placed in PARALLEL with load R_L to bypass AC ripple."
      ]
    }
  ],

  formulae: [
    {
      formulaName: "Diode Dynamic Resistance",
      formula: "r_f = ΔV_F / ΔI_F",
      description: "Reciprocal of the slope of the forward V–I characteristic curve (measured in Ohms, Ω)."
    },
    {
      formulaName: "Half-Wave Rectifier DC Voltage",
      formula: "V_dc = V_m / π ≈ 0.318 V_m",
      description: "Average DC output voltage across load resistor in a half-wave rectifier."
    },
    {
      formulaName: "Full-Wave Rectifier DC Voltage",
      formula: "V_dc = (2 V_m) / π ≈ 0.636 V_m",
      description: "Average DC output voltage across load resistor in center-tapped or bridge full-wave rectifiers."
    },
    {
      formulaName: "Rectifier Efficiency (η)",
      formula: "Half-Wave: η_max = 40.6%  ;  Full-Wave: η_max = 81.2%",
      description: "Ratio of DC power delivered to load to total AC input power supplied to the rectifier."
    },
    {
      formulaName: "Output Ripple Frequency",
      formula: "Half-Wave: f_out = f_in  ;  Full-Wave: f_out = 2 · f_in",
      description: "Fundamental frequency of pulsating ripple in the rectified output waveform."
    }
  ],

  visualLearning: {
    type: 'svg',
    svgContent: SEMI_SVGS.halfWaveRectifier,
    caption: "Figure 14.8: Half-Wave Rectifier: Input AC Waveform, Circuit with Single Diode, and Pulsating DC Output Waveform (f_out = f_in)."
  },

  neetImportantPoints: [
    "Depletion layer contains immobile charged ions but zero mobile electrons and holes.",
    "Internal built-in electric field E_bi is directed from n-side to p-side.",
    "Forward bias narrows the depletion layer and reduces the barrier to (V_0 − V).",
    "Reverse bias widens the depletion layer and raises the barrier to (V_0 + V).",
    "Reverse saturation current I_0 is carried exclusively by thermally generated minority carriers.",
    "I_0 is voltage-independent over the normal reverse range but doubles every 10 °C rise in temperature.",
    "For ideal diode: Forward resistance r_f = 0, Reverse resistance r_r = ∞.",
    "For practical Silicon diode: Forward barrier drop is 0.7 V; for Germanium: 0.3 V.",
    "If input AC frequency is 50 Hz, half-wave output frequency is 50 Hz; full-wave is 100 Hz.",
    "Peak Inverse Voltage (PIV) is V_m for half-wave and 2 V_m for center-tapped full-wave."
  ],

  commonConfusions: [
    {
      commonConfusion: "Assuming reverse current increases linearly with reverse voltage.",
      correctFact: "Reverse current is a constant saturation current I_0 limited by thermal minority carrier generation, not by applied reverse voltage (until breakdown is reached).",
      whyItMattersForNEET: "Crucial for interpreting diode V–I characteristics correctly."
    },
    {
      commonConfusion: "Thinking the depletion layer in a p–n junction has no electric field.",
      correctFact: "The depletion layer has an enormous built-in electric field (E_bi ≈ 10⁵ to 10⁶ V/m) created by uncovered fixed ions.",
      whyItMattersForNEET: "Frequently tested in electrostatic & semiconductor assertion-reason questions."
    },
    {
      commonConfusion: "Confusing output frequency of half-wave vs full-wave rectifiers.",
      correctFact: "Half-wave rectifier output frequency equals input frequency (f); full-wave rectifier output frequency is DOUBLED (2f).",
      whyItMattersForNEET: "Direct numerical calculation tested in almost every alternate NEET exam."
    }
  ],

  quickRevision: [
    "p–n Junction: Diffusion of majority carriers leaves fixed ions, creating Depletion Layer (d ≈ 1 µm).",
    "Built-in Potential Barrier V_0: Si ≈ 0.7 V, Ge ≈ 0.3 V; Field E_bi directed from n ➔ p.",
    "Forward bias: p ➔ +, n ➔ − ; Depletion layer narrows, barrier drops to (V_0 − V), current in mA.",
    "Reverse bias: p ➔ −, n ➔ + ; Depletion layer widens, barrier rises to (V_0 + V), tiny I_0 in µA.",
    "Zener Breakdown: Heavily doped, thin layer (< 10 nm), quantum tunneling at V_z < 6 V.",
    "Avalanche Breakdown: Lightly doped, thick layer, impact ionization at V_br > 6 V.",
    "Half-Wave Rectifier: 1 diode, η_max = 40.6%, f_out = f_in, V_dc = V_m / π, PIV = V_m.",
    "Full-Wave Rectifier: 2 diodes, η_max = 81.2%, f_out = 2 f_in, V_dc = 2 V_m / π, PIV = 2 V_m.",
    "Capacitor Filter: Connected in PARALLEL with load R_L to smooth AC ripple into steady DC."
  ],

  practiceQuestions: [
    {
      question: "A sinusoidal AC voltage of peak value 10 V is applied to a half-wave rectifier circuit with a Silicon diode (forward drop 0.7 V) and load resistor 1000 Ω. The peak current through the load is:",
      options: [
        "9.3 mA",
        "10.0 mA",
        "5.0 mA",
        "4.65 mA"
      ],
      correctAnswer: 0,
      explanation: "Peak voltage across load R_L is V_L,peak = V_in,peak − V_d = 10 V − 0.7 V = 9.3 V. Peak current I_peak = V_L,peak / R_L = 9.3 V / 1000 Ω = 9.3 mA."
    },
    {
      question: "If the input frequency to a full-wave rectifier is 60 Hz, the fundamental frequency in the output ripple is:",
      options: [
        "120 Hz",
        "60 Hz",
        "30 Hz",
        "0 Hz"
      ],
      correctAnswer: 0,
      explanation: "In a full-wave rectifier, both half-cycles are rectified into positive pulses, so output frequency f_out = 2 · f_in = 2 × 60 Hz = 120 Hz."
    }
  ],

  pyqs: [
    {
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
      explanation: "For a full-wave rectifier, output ripple frequency is doubled compared to input frequency: f_out = 2 · f_in = 2 × 50 Hz = 100 Hz.",
      conceptTested: "Full-Wave Rectifier Ripple Frequency"
    }
  ]
};
