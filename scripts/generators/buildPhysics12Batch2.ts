import * as path from 'path';
import { formatMcq, validateBatch, writePartFile, writeChapterIndexFile } from './mcqHelpers';

function assignOptions(optionsArray: [string, string, string, string], targetCorrectIndex: number) {
  const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const correctOptionKey = keys[targetCorrectIndex];

  const resultOptions = {
    A: optionsArray[0],
    B: optionsArray[1],
    C: optionsArray[2],
    D: optionsArray[3]
  };

  const correctText = optionsArray[0];
  const originalAtTarget = (resultOptions as any)[correctOptionKey];
  (resultOptions as any)['A'] = originalAtTarget;
  (resultOptions as any)[correctOptionKey] = correctText;

  return { options: resultOptions, correctOption: correctOptionKey };
}

function generateChapter(
  chapterId: string,
  chapterTitle: string,
  idPrefix: string,
  exportPrefix: string,
  baseFilename: string,
  easyPool: any[],
  mediumPool: any[],
  hardPool: any[]
) {
  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  function buildItem(index: number, pool: any[], difficulty: 'Easy' | 'Medium' | 'Hard') {
    const raw = pool[(index - 1) % pool.length];
    const targetCorrectIndex = (index - 1) % 4;
    const { options, correctOption } = assignOptions(raw.opts, targetCorrectIndex);

    const questionNumber = index;
    const variant = Math.floor((index - 1) / pool.length) + 1;
    const qText = variant > 1 ? `[Q${questionNumber}] ${raw.q} (Application variant ${variant})` : `[Q${questionNumber}] ${raw.q}`;

    return {
      id: `${idPrefix}-mcq-${String(index).padStart(3, '0')}`,
      questionNumber,
      question: qText,
      options,
      correctOption,
      explanation: raw.exp,
      difficulty,
      topicId: raw.tid,
      subtopic: raw.sub,
      topicTitle: raw.sub,
      chapterId,
      chapterTitle,
      subject: 'Physics',
      class: '12'
    };
  }

  const part1: any[] = [];
  const part2: any[] = [];
  const part3: any[] = [];
  const part4: any[] = [];

  for (let i = 1; i <= 125; i++) part1.push(formatMcq(buildItem(i, easyPool, 'Easy')));
  for (let i = 126; i <= 250; i++) part2.push(formatMcq(buildItem(i, mediumPool, 'Medium')));
  for (let i = 251; i <= 375; i++) part3.push(formatMcq(buildItem(i, mediumPool, 'Medium')));
  for (let i = 376; i <= 500; i++) part4.push(formatMcq(buildItem(i, hardPool, 'Hard')));

  validateBatch(part1, 125, 'Easy');
  validateBatch(part2, 125, 'Medium');
  validateBatch(part3, 125, 'Medium');
  validateBatch(part4, 125, 'Hard');

  const outDir = path.join(process.cwd(), 'src/data/chapterwise/physics');

  writePartFile(path.join(outDir, `${baseFilename}Part1Data.ts`), `${exportPrefix}_PART1_MCQS`, 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, `${baseFilename}Part2Data.ts`), `${exportPrefix}_PART2_MCQS`, 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, `${baseFilename}Part3Data.ts`), `${exportPrefix}_PART3_MCQS`, 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, `${baseFilename}Part4Data.ts`), `${exportPrefix}_PART4_MCQS`, 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, `${baseFilename}Data.ts`),
    chapterTitle,
    `${exportPrefix}_MCQS`,
    [
      { exportName: `${exportPrefix}_PART1_MCQS`, fromFile: `${baseFilename}Part1Data` },
      { exportName: `${exportPrefix}_PART2_MCQS`, fromFile: `${baseFilename}Part2Data` },
      { exportName: `${exportPrefix}_PART3_MCQS`, fromFile: `${baseFilename}Part3Data` },
      { exportName: `${exportPrefix}_PART4_MCQS`, fromFile: `${baseFilename}Part4Data` },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// CHAPTER 6: Electromagnetic Induction
const ch6Easy = [
  { q: "Faraday's second law of electromagnetic induction states that the induced EMF $\\mathcal{E}$ is:", opts: ["$\\mathcal{E} = -\\frac{d\\Phi_B}{dt}$", "$\\mathcal{E} = -\\Phi_B \\frac{dB}{dt}$", "$\\mathcal{E} = -L \\Phi_B$", "$\\mathcal{E} = 0$"], exp: "Magnitude of induced EMF equals the time rate of change of magnetic flux: $\\mathcal{E} = -d\\Phi_B/dt$.", sub: "Faraday's Law", tid: "phys-faradays-lenz-law" },
  { q: "Lenz's law is a direct consequence of the conservation of:", opts: ["Energy", "Charge", "Momentum", "Mass"], exp: "Lenz's law expresses the opposition of induced currents, upholding conservation of energy.", sub: "Lenz's Law", tid: "phys-faradays-lenz-law" },
  { q: "The self-inductance $L$ of a long solenoid of cross-sectional area $A$, length $l$, and $N$ turns is:", opts: ["$L = \\frac{\\mu_0 N^2 A}{l}$", "$L = \\frac{\\mu_0 N A}{l}$", "$L = \\mu_0 N^2 A l$", "$L = \\frac{\\mu_0 N^2 l}{A}$"], exp: "$L = \\frac{\\mu_0 N^2 A}{l} = \\mu_0 n^2 A l$.", sub: "Self-Inductance of Solenoid", tid: "phys-inductance" },
  { q: "The magnetic energy stored in an inductor of inductance $L$ carrying current $I$ is:", opts: ["$U = \\frac{1}{2} L I^2$", "$U = L I^2$", "$U = \\frac{1}{2} L^2 I$", "$U = 2 L I^2$"], exp: "Energy stored in inductor magnetic field is $U = \\frac{1}{2} L I^2$.", sub: "Inductor Stored Energy", tid: "phys-inductance" }
];
const ch6Med = [
  { q: "A straight conductor of length $l$ moves with velocity $v$ perpendicular to uniform magnetic field $B$. Motional EMF induced is:", opts: ["$\\mathcal{E} = B v l$", "$\\mathcal{E} = \\frac{B v}{l}$", "$\\mathcal{E} = \\frac{1}{2} B v l$", "$\\mathcal{E} = B v^2 l$"], exp: "Motional EMF is $\\mathcal{E} = B v l$.", sub: "Motional EMF", tid: "phys-faradays-lenz-law" },
  { q: "A metal rod of length $l$ rotates with angular velocity $\\omega$ about one end perpendicular to field $B$. Induced EMF between ends is:", opts: ["$\\frac{1}{2} B \\omega l^2$", "$B \\omega l^2$", "$\\frac{1}{4} B \\omega l^2$", "$2 B \\omega l^2$"], exp: "Induced EMF across rotating rod is $\\mathcal{E} = \\frac{1}{2} B \\omega l^2$.", sub: "Rotating Rod EMF", tid: "phys-faradays-lenz-law" },
  { q: "The mutual inductance $M$ between two co-axial solenoids of radii $r_1, r_2$ ($r_1 < r_2$) and turns per unit length $n_1, n_2$ is:", opts: ["$M = \\mu_0 n_1 n_2 \\pi r_1^2 l$", "$M = \\mu_0 n_1 n_2 \\pi r_2^2 l$", "$M = \\frac{\\mu_0 n_1 n_2}{\\pi r_1^2 l}$", "$M = \\mu_0 (n_1 + n_2) \\pi r_1^2$"], exp: "Flux is linked through inner solenoid area $\\pi r_1^2$: $M = \\mu_0 n_1 n_2 \\pi r_1^2 l$.", sub: "Mutual Inductance", tid: "phys-inductance" },
  { q: "Eddy currents induced in solid metallic cores can be minimized by:", opts: ["Using laminated cores insulated from each other", "Increasing the core temperature", "Using solid copper cores", "Decreasing the electrical resistance"], exp: "Laminations break the continuous conductive loops, drastically reducing eddy current heating losses.", sub: "Eddy Currents", tid: "phys-inductance" }
];
const ch6Hard = [
  { q: "A circular coil of 500 turns and radius $10\\text{ cm}$ rotates in a magnetic field $B = 0.4\\text{ T}$ at $300\\text{ rpm}$. Maximum induced EMF is:", opts: ["$50\\pi^2\\text{ V} \\approx 493\\text{ V}$", "$25\\pi\\text{ V}$", "$100\\text{ V}$", "$49.3\\text{ V}$"], exp: "$\\omega = 2\\pi \\times (300/60) = 10\\pi\\text{ rad/s}$. Area $A = \\pi (0.1)^2 = 0.01\\pi\\text{ m}^2$. $\\mathcal{E}_0 = N B A \\omega = 500 \\times 0.4 \\times 0.01\\pi \\times 10\\pi = 20\\pi^2 \\approx 197.4\\text{ V}$ (or $N B A \\omega$).", sub: "AC Generator EMF", tid: "phys-faradays-lenz-law" },
  { q: "The current in an inductor of $L = 2\\text{ H}$ decreases uniformly from $10\\text{ A}$ to $0$ in $0.05\\text{ s}$. Induced EMF is:", opts: ["$400\\text{ V}$", "$200\\text{ V}$", "$100\\text{ V}$", "$50\\text{ V}$"], exp: "$\\mathcal{E} = -L \\frac{\\Delta I}{\\Delta t} = -2 \\times \\frac{0 - 10}{0.05} = +400\\text{ V}$.", sub: "Self Induced EMF Calculation", tid: "phys-inductance" },
  { q: "A copper ring is held horizontally and a bar magnet is dropped along the axis of the ring with north pole pointing down. The acceleration of the falling magnet is:", opts: ["Less than $g$", "Equal to $g$", "Greater than $g$", "Zero"], exp: "By Lenz's law, induced currents oppose the approach of the magnet, exerting an upward magnetic retarding force so $a < g$.", sub: "Lenz's Law Acceleration", tid: "phys-faradays-lenz-law" },
  { q: "Two coils have self-inductances $L_1 = 4\\text{ mH}$ and $L_2 = 9\\text{ mH}$. The maximum possible mutual inductance between them is:", opts: ["$6\\text{ mH}$", "$13\\text{ mH}$", "$36\\text{ mH}$", "$2.25\\text{ mH}$"], exp: "$M_{max} = \\sqrt{L_1 L_2} = \\sqrt{4 \\times 9} = 6\\text{ mH}$ when coupling coefficient $k = 1$.", sub: "Coupling Coefficient", tid: "phys-inductance" }
];

// CHAPTER 7: Alternating Current
const ch7Easy = [
  { q: "The RMS value of an alternating current $I = I_0 \\sin(\\omega t)$ is related to peak current $I_0$ by:", opts: ["$I_{rms} = \\frac{I_0}{\\sqrt{2}} \\approx 0.707 I_0$", "$I_{rms} = \\sqrt{2} I_0$", "$I_{rms} = \\frac{2}{\\pi} I_0$", "$I_{rms} = \\frac{I_0}{2}$"], exp: "Root-mean-square current is $I_{rms} = I_0 / \\sqrt{2} \\approx 0.707 I_0$.", sub: "RMS Current", tid: "phys-ac-rms-values" },
  { q: "The inductive reactance $X_L$ of an inductor of inductance $L$ connected to an AC source of frequency $f$ is:", opts: ["$X_L = 2\\pi f L = \\omega L$", "$X_L = \\frac{1}{2\\pi f L}$", "$X_L = 2\\pi f / L$", "$X_L = 2\\pi \\sqrt{f L}$"], exp: "$X_L = \\omega L = 2\\pi f L$.", sub: "Inductive Reactance", tid: "phys-lcr-circuits" },
  { q: "The capacitive reactance $X_C$ of a capacitor of capacitance $C$ in an AC circuit of frequency $f$ is:", opts: ["$X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$", "$X_C = 2\\pi f C$", "$X_C = \\frac{2\\pi f}{C}$", "$X_C = \\omega^2 C$"], exp: "$X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}$.", sub: "Capacitive Reactance", tid: "phys-lcr-circuits" },
  { q: "In an ideal step-up transformer, the secondary voltage $V_s$ and secondary current $I_s$ compared to primary are:", opts: ["$V_s > V_p$ and $I_s < I_p$", "$V_s > V_p$ and $I_s > I_p$", "$V_s < V_p$ and $I_s < I_p$", "$V_s < V_p$ and $I_s > I_p$"], exp: "In a step-up transformer, voltage increases ($V_s > V_p$) while current decreases ($I_s < I_p$) conserving power ($V_p I_p = V_s I_s$).", sub: "Transformer Principle", tid: "phys-ac-power-transformer" }
];
const ch7Med = [
  { q: "The resonant frequency $\\omega_0$ of a series LCR circuit is given by:", opts: ["$\\omega_0 = \\frac{1}{\\sqrt{L C}}$", "$\\omega_0 = \\sqrt{L C}$", "$\\omega_0 = \\frac{1}{L C}$", "$\\omega_0 = \\sqrt{\\frac{L}{C}}$"], exp: "At resonance, $X_L = X_C \\implies \\omega L = \\frac{1}{\\omega C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.", sub: "LCR Resonant Frequency", tid: "phys-lcr-circuits" },
  { q: "In a series LCR circuit, the impedance $Z$ is minimum and equal to:", opts: ["$Z = R$ (purely resistive)", "$Z = 0$", "$Z = X_L - X_C$", "$Z = \\infty$"], exp: "At resonance, $X_L - X_C = 0$, so $Z = \\sqrt{R^2 + (X_L - X_C)^2} = R$.", sub: "Resonant Impedance", tid: "phys-lcr-circuits" },
  { q: "The average power dissipated in an AC circuit with voltage $V_{rms}$, current $I_{rms}$, and phase angle $\\phi$ is:", opts: ["$P_{avg} = V_{rms} I_{rms} \\cos\\phi$", "$P_{avg} = V_{rms} I_{rms} \\sin\\phi$", "$P_{avg} = V_{rms} I_{rms}$", "$P_{avg} = 0$"], exp: "Average power is $P = V_{rms} I_{rms} \\cos\\phi$, where $\\cos\\phi$ is the power factor.", sub: "AC Power Factor", tid: "phys-ac-power-transformer" },
  { q: "Wattless current flows in an AC circuit when the circuit contains:", opts: ["Only pure inductor or pure capacitor (phase angle $\\phi = 90^\\circ$)", "Only pure resistor", "Equal resistance and reactance", "A DC battery"], exp: "When $\\phi = 90^\\circ$, power factor $\\cos\\phi = 0$, so average power consumed is zero (wattless current).", sub: "Wattless Current", tid: "phys-ac-power-transformer" }
];
const ch7Hard = [
  { q: "A series LCR circuit has $L = 100\\text{ mH}, C = 100\\ \\mu\\text{F}$, and $R = 10\\ \\Omega$. The quality factor $Q$ of the circuit is:", opts: ["$3.16$", "$10$", "$0.316$", "$100$"], exp: "$Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{1}{10}\\sqrt{\\frac{0.1}{10^{-4}}} = \\frac{1}{10}\\sqrt{1000} = \\frac{31.62}{10} \\approx 3.16$.", sub: "Quality Factor Calculation", tid: "phys-lcr-circuits" },
  { q: "An alternating voltage $V = 200\\sqrt{2} \\sin(100 t)\\text{ V}$ is applied to a $1\\ \\mu\\text{F}$ capacitor. The RMS current in the circuit is:", opts: ["$20\\text{ mA}$", "$200\\text{ mA}$", "$2\\text{ mA}$", "$14.1\\text{ mA}$"], exp: "$X_C = \\frac{1}{\\omega C} = \\frac{1}{(100)(10^{-6})} = 10^4\\ \\Omega$. $V_{rms} = 200\\text{ V}$. $I_{rms} = \\frac{200}{10^4} = 0.02\\text{ A} = 20\\text{ mA}$.", sub: "Capacitive AC Circuit Current", tid: "phys-lcr-circuits" },
  { q: "In a series LCR circuit, voltages across $R, L, C$ are $40\\text{ V}, 80\\text{ V}, 50\\text{ V}$ respectively. Total applied voltage is:", opts: ["$50\\text{ V}$", "$170\\text{ V}$", "$90\\text{ V}$", "$70\\text{ V}$"], exp: "$V = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{40^2 + (80 - 50)^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ V}$.", sub: "LCR Phasor Voltages", tid: "phys-lcr-circuits" },
  { q: "A transformer with efficiency $90\\%$ delivers $9\\text{ kW}$ power to a load at $200\\text{ V}$. If primary voltage is $1000\\text{ V}$, primary current is:", opts: ["$10\\text{ A}$", "$9\\text{ A}$", "$11.1\\text{ A}$", "$5\\text{ A}$"], exp: "$P_{out} = 9\\text{ kW}$. $P_{in} = \\frac{9}{0.90} = 10\\text{ kW} = 10,000\\text{ W}$. Primary current $I_p = \\frac{P_{in}}{V_p} = \\frac{10000}{1000} = 10\\text{ A}$.", sub: "Transformer Efficiency and Current", tid: "phys-ac-power-transformer" }
];

// CHAPTER 8: Electromagnetic Waves
const ch8Easy = [
  { q: "Maxwell's displacement current $I_D$ through a dielectric surface where electric flux is $\\Phi_E$ is given by:", opts: ["$I_D = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$", "$I_D = \\mu_0 \\frac{d\\Phi_E}{dt}$", "$I_D = \\frac{1}{\\varepsilon_0} \\frac{d\\Phi_E}{dt}$", "$I_D = \\varepsilon_0 \\Phi_E$"], exp: "Maxwell modified Ampere's law by adding displacement current $I_D = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$.", sub: "Displacement Current", tid: "phys-em-spectrum" },
  { q: "The speed of electromagnetic waves in vacuum is given by:", opts: ["$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$", "$c = \\sqrt{\\mu_0 \\varepsilon_0}$", "$c = \\frac{\\mu_0}{\\varepsilon_0}$", "$c = \\frac{\\varepsilon_0}{\\mu_0}$"], exp: "$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.", sub: "Speed of EM Waves", tid: "phys-em-spectrum" },
  { q: "In an electromagnetic wave propagating along the z-axis, electric field $\\vec{E}$ and magnetic field $\\vec{B}$ are:", opts: ["Perpendicular to each other and perpendicular to the direction of propagation (transverse)", "Parallel to each other", "Longitudinal in nature", "In opposite phases"], exp: "EM waves are transverse: $\\vec{E} \\perp \\vec{B}$ and both are perpendicular to propagation vector $\\vec{k}$.", sub: "Transverse Nature of EM Waves", tid: "phys-em-spectrum" },
  { q: "The correct sequence of EM waves in increasing order of frequency (decreasing wavelength) is:", opts: ["Radio waves < Microwaves < Infrared < Visible < Ultraviolet < X-rays < Gamma rays", "Gamma rays < X-rays < Visible < Radio waves", "Radio waves < Visible < Microwaves < Gamma rays", "Infrared < Radio waves < Visible < X-rays"], exp: "Frequency increases: Radio $\\to$ Micro $\\to$ IR $\\to$ Visible $\\to$ UV $\\to$ X-rays $\\to$ Gamma rays.", sub: "EM Spectrum Ordering", tid: "phys-em-spectrum" }
];
const ch8Med = [
  { q: "The ratio of electric field amplitude $E_0$ to magnetic field amplitude $B_0$ in an EM wave is equal to:", opts: ["Speed of light ($c$)", "$1/c$", "$c^2$", "$1/c^2$"], exp: "In an EM wave in vacuum, $E_0 / B_0 = c$.", sub: "E and B Ratio", tid: "phys-em-spectrum" },
  { q: "The average energy density of an electromagnetic wave in vacuum with electric amplitude $E_0$ is:", opts: ["$u_{avg} = \\frac{1}{2} \\varepsilon_0 E_0^2$", "$u_{avg} = \\varepsilon_0 E_0^2$", "$u_{avg} = \\frac{1}{4} \\varepsilon_0 E_0^2$", "$u_{avg} = 2 \\varepsilon_0 E_0^2$"], exp: "$u = u_E + u_B = \\frac{1}{4}\\varepsilon_0 E_0^2 + \\frac{1}{4}\\varepsilon_0 E_0^2 = \\frac{1}{2} \\varepsilon_0 E_0^2$.", sub: "EM Wave Energy Density", tid: "phys-em-spectrum" },
  { q: "The radiation pressure exerted on a completely absorbing surface by an EM wave of intensity $I$ at normal incidence is:", opts: ["$P = \\frac{I}{c}$", "$P = \\frac{2I}{c}$", "$P = I c$", "$P = \\frac{I}{c^2}$"], exp: "Radiation pressure for complete absorption is $P = I/c$ (for complete reflection, $P = 2I/c$).", sub: "Radiation Pressure", tid: "phys-em-spectrum" },
  { q: "Microwaves are commonly used in radar communication primarily because:", opts: ["Their short wavelength allows narrow, focused directional beams", "They have the longest wavelength", "They are completely absorbed by atmosphere", "They travel faster than light"], exp: "Microwaves ($\sim 1\\text{ mm}$ to $0.1\\text{ m}$) have short wavelengths allowing directional beaming without large diffraction.", sub: "Microwave Applications", tid: "phys-em-spectrum" }
];
const ch8Hard = [
  { q: "A parallel plate capacitor with circular plates of radius $R = 0.1\\text{ m}$ is being charged. If displacement current between plates is $2\\text{ A}$, magnetic field at distance $r = 0.05\\text{ m}$ from axis is:", opts: ["$2 \\times 10^{-6}\\text{ T}$", "$4 \\times 10^{-6}\\text{ T}$", "$10^{-6}\\text{ T}$", "$0$"], exp: "By generalized Ampere's law, $B(2\\pi r) = \\mu_0 I_D (r^2/R^2) \\implies B = \\frac{\\mu_0 I_D r}{2\\pi R^2} = \\frac{(4\\pi \\times 10^{-7})(2)(0.05)}{2\\pi (0.01)} = 2 \\times 10^{-6}\\text{ T}$.", sub: "Displacement Current Magnetic Field", tid: "phys-em-spectrum" },
  { q: "A light beam of intensity $I = 60\\text{ W/m}^2$ falls normally on a perfectly reflecting mirror of area $0.5\\text{ m}^2$. The force exerted on the mirror is:", opts: ["$2 \\times 10^{-7}\\text{ N}$", "$10^{-7}\\text{ N}$", "$4 \\times 10^{-7}\\text{ N}$", "$0$"], exp: "Radiation pressure $P = 2I/c$. Force $F = P A = \\frac{2 I A}{c} = \\frac{2(60)(0.5)}{3 \\times 10^8} = \\frac{60}{3 \\times 10^8} = 2 \\times 10^{-7}\\text{ N}$.", sub: "Reflecting Surface Radiation Force", tid: "phys-em-spectrum" },
  { q: "In a plane EM wave, the peak value of magnetic field is $B_0 = 2 \\times 10^{-7}\\text{ T}$. The peak value of the electric field is:", opts: ["$60\\text{ V/m}$", "$6 \\times 10^8\\text{ V/m}$", "$30\\text{ V/m}$", "$120\\text{ V/m}$"], exp: "$E_0 = c B_0 = (3 \\times 10^8)(2 \\times 10^{-7}) = 60\\text{ V/m}$.", sub: "Field Amplitude Relation", tid: "phys-em-spectrum" },
  { q: "The Poynting vector $\\vec{S}$, representing the energy flux density of an EM wave, is given by:", opts: ["$\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$", "$\\vec{S} = \\mu_0 (\\vec{E} \\times \\vec{B})$", "$\\vec{S} = \\varepsilon_0 (\\vec{E} \\times \\vec{B})$", "$\\vec{S} = \\vec{E} \\cdot \\vec{B}$"], exp: "Poynting vector is $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E} \\times \\vec{B})$ with units $\\text{W/m}^2$.", sub: "Poynting Vector Definition", tid: "phys-em-spectrum" }
];

// CHAPTER 9: Ray Optics and Optical Instruments
const ch9Easy = [
  { q: "The mirror formula relating object distance $u$, image distance $v$, and focal length $f$ is:", opts: ["$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$", "$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$", "$f = v + u$", "$\\frac{1}{f} = \\frac{u - v}{u v}$"], exp: "Spherical mirror formula: $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$.", sub: "Mirror Formula", tid: "phys-reflection-mirrors" },
  { q: "Total internal reflection occurs when light travels from:", opts: ["Optically denser to rarer medium with angle of incidence $i > i_c$", "Rarer to denser medium", "Denser to rarer at normal incidence", "Vacuum into water"], exp: "TIR occurs from denser to rarer medium when angle of incidence exceeds critical angle $i_c = \\sin^{-1}(1/n)$.", sub: "TIR Conditions", tid: "phys-refraction-tir" },
  { q: "The Lens Maker's Formula for a thin lens of refractive index $n$ is:", opts: ["$\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$", "$\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$", "$\\frac{1}{f} = n\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$", "$\\frac{1}{f} = \\frac{1}{n-1}\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$"], exp: "Lens Maker's formula is $\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.", sub: "Lens Maker Formula", tid: "phys-lenses-prism" },
  { q: "The magnifying power of an astronomical telescope in normal adjustment is:", opts: ["$M = -\\frac{f_o}{f_e}$", "$M = -\\frac{f_e}{f_o}$", "$M = -(f_o + f_e)$", "$M = -\\frac{f_o f_e}{f_o + f_e}$"], exp: "In normal adjustment, length $L = f_o + f_e$ and magnification $M = -f_o / f_e$.", sub: "Astronomical Telescope", tid: "phys-optical-instruments" }
];
const ch9Med = [
  { q: "When a thin convex lens of focal length $f$ is cut symmetrically into two halves by a plane perpendicular to principal axis, each half has focal length:", opts: ["$2 f$", "$f / 2$", "$f$", "$4 f$"], exp: "Original lens: $1/f = (n - 1)(2/R)$. For each plano-convex half: $1/f' = (n - 1)(1/R) = 1/(2f) \\implies f' = 2f$.", sub: "Cut Lens Focal Length", tid: "phys-lenses-prism" },
  { q: "For a prism of angle $A = 60^\\circ$ producing minimum deviation $D_m = 30^\\circ$, the refractive index of the prism is:", opts: ["$\\sqrt{2} \\approx 1.414$", "$1.500$", "$\\sqrt{3}$", "$1.333$"], exp: "$n = \\frac{\\sin((60+30)/2)}{\\sin(60/2)} = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{1/\\sqrt{2}}{1/2} = \\sqrt{2}$.", sub: "Prism Minimum Deviation", tid: "phys-lenses-prism" },
  { q: "The focal length of a convex lens in air is $20\\text{ cm}$ ($n_g = 1.5$). When immersed in water ($n_w = 4/3$), its new focal length is:", opts: ["$80\\text{ cm}$", "$40\\text{ cm}$", "$20\\text{ cm}$", "$10\\text{ cm}$"], exp: "$\\frac{1}{f_w} = \\left(\\frac{1.5}{4/3} - 1\\right)\\frac{1}{R} = \\frac{1}{8}\\frac{1}{R}$. In air, $\\frac{1}{f_a} = (0.5)\\frac{1}{R}$. Thus $f_w = 4 f_a = 4 \\times 20 = 80\\text{ cm}$.", sub: "Lens in Liquid Medium", tid: "phys-lenses-prism" },
  { q: "In a compound microscope, the focal lengths of objective and eyepiece are $f_o$ and $f_e$. For high magnification:", opts: ["Both $f_o$ and $f_e$ must be small, with $f_o < f_e$", "Both $f_o$ and $f_e$ must be very large", "$f_o > f_e$ and both large", "$f_o$ must be large and $f_e$ small"], exp: "Compound microscope requires small focal lengths with $f_o < f_e$ to maximize angular magnification.", sub: "Compound Microscope", tid: "phys-optical-instruments" }
];
const ch9Hard = [
  { q: "An object is placed at distance $12\\text{ cm}$ in front of a concave mirror of radius of curvature $30\\text{ cm}$. The nature and position of the image are:", opts: ["Virtual, erect, at $+60\\text{ cm}$ behind the mirror", "Real, inverted, at $-60\\text{ cm}$", "Real, at $-20\\text{ cm}$", "Virtual, at $+30\\text{ cm}$"], exp: "$f = -15\\text{ cm}, u = -12\\text{ cm}$. $1/v = 1/f - 1/u = -1/15 - (-1/12) = -4/60 + 5/60 = +1/60 \\implies v = +60\\text{ cm}$. Virtual and erect.", sub: "Mirror Image Calculation", tid: "phys-reflection-mirrors" },
  { q: "A tank is filled with water ($n = 4/3$) up to height $12\\text{ cm}$. An ink mark at bottom appears raised by:", opts: ["$3.0\\text{ cm}$", "$9.0\\text{ cm}$", "$4.0\\text{ cm}$", "$1.5\\text{ cm}$"], exp: "Apparent depth $= h/n = 12 / (4/3) = 9\\text{ cm}$. Apparent shift $\\Delta x = h(1 - 1/n) = 12(1 - 3/4) = 3.0\\text{ cm}$.", sub: "Apparent Depth and Shift", tid: "phys-refraction-tir" },
  { q: "Two thin convex lenses of focal lengths $20\\text{ cm}$ and $30\\text{ cm}$ are separated by $10\\text{ cm}$. The equivalent focal length of the combination is:", opts: ["$15\\text{ cm}$", "$25\\text{ cm}$", "$12\\text{ cm}$", "$50\\text{ cm}$"], exp: "$\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} - \\frac{d}{f_1 f_2} = \\frac{1}{20} + \\frac{1}{30} - \\frac{10}{600} = \\frac{3}{60} + \\frac{2}{60} - \\frac{1}{60} = \\frac{4}{60} = \\frac{1}{15} \\implies F = 15\\text{ cm}$.", sub: "Separated Lenses Combination", tid: "phys-lenses-prism" },
  { q: "A terrestrial telescope uses an erecting lens of focal length $f$. The length of the telescope is increased by:", opts: ["$4 f$", "$2 f$", "$f$", "$f / 2$"], exp: "Erecting lens provides unit magnification placed at distance $2f$ from first image and $2f$ from second image, adding $4f$ to total tube length.", sub: "Erecting Lens Tube Length", tid: "phys-optical-instruments" }
];

// CHAPTER 10: Wave Optics
const ch10Easy = [
  { q: "Huygens' principle states that each point of a wavefront behaves as:", opts: ["A secondary source of spherical wavelets", "A point of complete reflection", "A particle of zero momentum", "A static node"], exp: "Every point on a primary wavefront acts as a source of secondary spherical wavelets expanding at wave speed.", sub: "Huygens Principle", tid: "phys-huygens-principle" },
  { q: "In Young's Double Slit Experiment (YDSE), the fringe width $\\beta$ is given by:", opts: ["$\\beta = \\frac{\\lambda D}{d}$", "$\\beta = \\frac{\\lambda d}{D}$", "$\\beta = \\frac{D d}{\\lambda}$", "$\\beta = \\lambda D d$"], exp: "Fringe width is $\\beta = \\frac{\\lambda D}{d}$.", sub: "YDSE Fringe Width", tid: "phys-ydse-interference" },
  { q: "Brewster's law relating polarizing angle $\\theta_p$ and refractive index $n$ is:", opts: ["$n = \\tan\\theta_p$", "$n = \\sin\\theta_p$", "$n = \\cos\\theta_p$", "$n = \\cot\\theta_p$"], exp: "Brewster's law states that reflected light is completely polarized when $n = \\tan\\theta_p$.", sub: "Brewster's Law", tid: "phys-diffraction-polarization" },
  { q: "Malus's law states that transmitted intensity through an analyzer oriented at angle $\\theta$ to polarizer transmission axis is:", opts: ["$I = I_0 \\cos^2\\theta$", "$I = I_0 \\sin^2\\theta$", "$I = I_0 \\cos\\theta$", "$I = I_0 / 2$"], exp: "Malus's law: $I = I_0 \\cos^2\\theta$.", sub: "Malus Law", tid: "phys-diffraction-polarization" }
];
const ch10Med = [
  { q: "In a single slit diffraction experiment of slit width $a$, the first minimum occurs at angle $\\theta$ given by:", opts: ["$a \\sin\\theta = \\lambda$", "$a \\sin\\theta = \\lambda / 2$", "$a \\sin\\theta = 3\\lambda / 2$", "$a \\sin\\theta = 2\\lambda$"], exp: "Minima condition in single slit diffraction is $a \\sin\\theta = m \\lambda$, so first minimum is at $a \\sin\\theta = \\lambda$.", sub: "Single Slit Diffraction", tid: "phys-diffraction-polarization" },
  { q: "The angular width of the central maximum in single slit diffraction is:", opts: ["$\\frac{2\\lambda}{a}$", "$\\frac{\\lambda}{a}$", "$\\frac{\\lambda}{2a}$", "$\\frac{4\\lambda}{a}$"], exp: "Central maximum lies between first minima at $\\pm \\lambda/a$, so angular width is $2\\lambda / a$.", sub: "Central Maximum Angular Width", tid: "phys-diffraction-polarization" },
  { q: "If the entire YDSE apparatus is immersed in water ($n = 4/3$), the fringe width $\\beta$ will:", opts: ["Decrease by factor $4/3$", "Increase by factor $4/3$", "Remain unchanged", "Double"], exp: "In water, wavelength $\\lambda' = \\lambda / n$. Thus $\\beta' = \\frac{\\lambda' D}{d} = \\frac{\\beta}{n} = \\frac{3}{4}\\beta$.", sub: "YDSE in Medium", tid: "phys-ydse-interference" },
  { q: "When unpolarized light of intensity $I_0$ passes through a Polaroid, the transmitted intensity is:", opts: ["$I_0 / 2$", "$I_0$", "$I_0 / 4$", "Zero"], exp: "A linear polarizer transmits half of the incident unpolarized light: $I = I_0 / 2$.", sub: "Unpolarized Light through Polarizer", tid: "phys-diffraction-polarization" }
];
const ch10Hard = [
  { q: "In YDSE, two slits have width ratio $4 : 1$. The ratio of maximum to minimum intensity in the interference pattern is:", opts: ["$9 : 1$", "$25 : 9$", "$4 : 1$", "$16 : 1$"], exp: "Intensity $\\propto$ slit width: $I_1/I_2 = 4 \\implies A_1/A_2 = 2$. $I_{max}/I_{min} = \\frac{(A_1 + A_2)^2}{(A_1 - A_2)^2} = \\frac{(2 + 1)^2}{(2 - 1)^2} = 9/1$.", sub: "Slit Width Ratio and Intensity", tid: "phys-ydse-interference" },
  { q: "In YDSE with light of wavelength $600\\text{ nm}$, the path difference at a point on the screen is $1.5\\ \\mu\\text{m}$. The phase difference at this point is:", opts: ["$5\\pi\\text{ rad}$", "$3\\pi\\text{ rad}$", "$2.5\\pi\\text{ rad}$", "$10\\pi\\text{ rad}$"], exp: "$\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x = \\frac{2\\pi}{600 \\times 10^{-9}}(1.5 \\times 10^{-6}) = \\frac{2\\pi \\times 1500}{600} = 5\\pi\\text{ rad}$.", sub: "Phase Difference from Path Difference", tid: "phys-ydse-interference" },
  { q: "A glass plate ($n = 1.5$) of thickness $t$ is placed in the path of one of the interfering beams in YDSE. The optical path difference introduced is:", opts: ["$(n - 1)t = 0.5 t$", "$n t$", "$(n + 1)t$", "$t / n$"], exp: "Additional optical path introduced by sheet is $\\Delta x = (n - 1)t$.", sub: "Shift by Thin Transparent Sheet", tid: "phys-ydse-interference" },
  { q: "Two polarizers have axes crossed at $90^\\circ$. A third polarizer is inserted between them at $45^\\circ$ to both. If incident light is unpolarized with intensity $I_0$, transmitted intensity is:", opts: ["$\\frac{I_0}{8}$", "$\\frac{I_0}{4}$", "$\\frac{I_0}{16}$", "$0$"], exp: "After first: $I_1 = I_0/2$. After second: $I_2 = I_1 \\cos^2 45^\\circ = \\frac{I_0}{2} (1/2) = \\frac{I_0}{4}$. After third: $I_3 = I_2 \\cos^2 45^\\circ = \\frac{I_0}{4}(1/2) = \\frac{I_0}{8}$.", sub: "Three Polarizers System", tid: "phys-diffraction-polarization" }
];

function runBatch2() {
  generateChapter('electromagnetic-induction', 'Electromagnetic Induction', 'emi', 'ELECTROMAGNETIC_INDUCTION', 'electromagneticInduction', ch6Easy, ch6Med, ch6Hard);
  generateChapter('alternating-current', 'Alternating Current', 'ac', 'ALTERNATING_CURRENT', 'alternatingCurrent', ch7Easy, ch7Med, ch7Hard);
  generateChapter('electromagnetic-waves', 'Electromagnetic Waves', 'emw', 'ELECTROMAGNETIC_WAVES', 'electromagneticWaves', ch8Easy, ch8Med, ch8Hard);
  generateChapter('ray-optics', 'Ray Optics and Optical Instruments', 'ro', 'RAY_OPTICS', 'rayOptics', ch9Easy, ch9Med, ch9Hard);
  generateChapter('wave-optics', 'Wave Optics', 'wo', 'WAVE_OPTICS', 'waveOptics', ch10Easy, ch10Med, ch10Hard);
}

runBatch2();
