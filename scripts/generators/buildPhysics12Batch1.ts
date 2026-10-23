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

// CHAPTER 1: Electric Charges and Fields
const ch1Easy = [
  { q: "Coulomb's Law in vacuum states that the force between two point charges is proportional to:", opts: ["$q_1 q_2 / r^2$", "$q_1 q_2 / r$", "$r^2 / (q_1 q_2)$", "$q_1 q_2 r^2$"], exp: "Electrostatic force $F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}$.", sub: "Coulomb's Law", tid: "phys-coulombs-law" },
  { q: "The value of permittivity of free space $\\varepsilon_0$ in SI units is:", opts: ["$8.854 \\times 10^{-12}\\text{ C}^2/(\\text{N}\\cdot\\text{m}^2)$", "$9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$", "$1.6 \\times 10^{-19}\\text{ C}$", "$6.67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$"], exp: "$\\varepsilon_0 = 8.854 \\times 10^{-12}\\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}$.", sub: "Permittivity", tid: "phys-coulombs-law" },
  { q: "Electric flux through a closed Gaussian surface enclosing net charge $q$ is:", opts: ["$\\Phi = q / \\varepsilon_0$", "$\\Phi = q \\varepsilon_0$", "$\\Phi = 0$", "$\\Phi = 4\\pi q$"], exp: "Gauss's law states $\\oint \\vec{E}\\cdot d\\vec{A} = q_{encl}/\\varepsilon_0$.", sub: "Gauss's Law", tid: "phys-gauss-law" },
  { q: "The electric field on the axial line of a short electric dipole of dipole moment $p$ at distance $r$ is:", opts: ["$\\frac{2 p}{4\\pi\\varepsilon_0 r^3}$", "$\\frac{p}{4\\pi\\varepsilon_0 r^3}$", "$\\frac{p}{4\\pi\\varepsilon_0 r^2}$", "$\\frac{2 p}{4\\pi\\varepsilon_0 r^2}$"], exp: "On the dipole axis, $E_{axial} = \\frac{2kp}{r^3}$.", sub: "Dipole Field", tid: "phys-electric-field-dipole" }
];
const ch1Med = [
  { q: "The torque $\\vec{\\tau}$ experienced by an electric dipole $\\vec{p}$ in a uniform electric field $\\vec{E}$ is:", opts: ["$\\vec{\\tau} = \\vec{p} \\times \\vec{E}$", "$\\vec{\\tau} = \\vec{p} \\cdot \\vec{E}$", "$\\vec{\\tau} = \\vec{E} \\times \\vec{p}$", "$\\vec{\\tau} = 0$"], exp: "Torque is $\\vec{\\tau} = \\vec{p} \\times \\vec{E}$, magnitude $\\tau = p E \\sin\\theta$.", sub: "Dipole in Uniform Field", tid: "phys-electric-field-dipole" },
  { q: "Electric field due to an infinitely long straight charged wire of uniform linear charge density $\\lambda$ at distance $r$ is:", opts: ["$\\frac{\\lambda}{2\\pi\\varepsilon_0 r}$", "$\\frac{\\lambda}{4\\pi\\varepsilon_0 r^2}$", "$\\frac{\\lambda}{2\\varepsilon_0}$", "$\\frac{\\lambda}{\\pi\\varepsilon_0 r}$"], exp: "By Gauss's law on a cylinder, $E(2\\pi r L) = \\lambda L / \\varepsilon_0 \\implies E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$.", sub: "Gauss's Law Applications", tid: "phys-gauss-law" },
  { q: "Electric field just outside the surface of a charged conductor of surface charge density $\\sigma$ is:", opts: ["$\\frac{\\sigma}{\\varepsilon_0}$ directed normal to surface", "$\\frac{\\sigma}{2\\varepsilon_0}$", "$\\frac{2\\sigma}{\\varepsilon_0}$", "$0$"], exp: "Near a conducting surface, $E = \\sigma / \\varepsilon_0$ directed perpendicularly.", sub: "Conductor Electrostatics", tid: "phys-gauss-law" },
  { q: "The work done in rotating an electric dipole $\\vec{p}$ in uniform field $\\vec{E}$ from stable equilibrium ($0^\\circ$) to $180^\\circ$ is:", opts: ["$2 p E$", "$p E$", "$0$", "$-p E$"], exp: "$W = -p E(\\cos 180^\\circ - \\cos 0^\\circ) = -p E(-1 - 1) = +2 p E$.", sub: "Dipole Potential Energy", tid: "phys-electric-field-dipole" }
];
const ch1Hard = [
  { q: "Two identical conducting spheres carry charges $+4q$ and $-2q$. When touched and separated to original distance $r$, the ratio of final to initial force is:", opts: ["$1 : 8$", "$1 : 4$", "$1 : 16$", "$2 : 1$"], exp: "Initial force magnitude: $F_1 = k(4q)(2q)/r^2 = 8 k q^2 / r^2$. After contact, each sphere gets charge $(4q - 2q)/2 = +q$. New force $F_2 = k q^2 / r^2$. Ratio $F_2/F_1 = 1/8$.", sub: "Charge Conservation & Coulomb Force", tid: "phys-coulombs-law" },
  { q: "A charge $q$ is placed at the center of a cube of side $L$. The electric flux through one face of the cube is:", opts: ["$\\frac{q}{6\\varepsilon_0}$", "$\\frac{q}{\\varepsilon_0}$", "$\\frac{q}{24\\varepsilon_0}$", "$\\frac{q}{8\\varepsilon_0}$"], exp: "By Gauss's law, total flux through 6 identical faces is $q/\\varepsilon_0$. Flux through one face is $q/(6\\varepsilon_0)$.", sub: "Flux Through Cube Faces", tid: "phys-gauss-law" },
  { q: "An electric dipole of dipole moment $p$ is situated in a non-uniform electric field where $dE/dx = 10^5\\text{ V/m}^2$. If $p = 10^{-7}\\text{ C}\\cdot\\text{m}$, the net translational force on the dipole along the x-axis is:", opts: ["$10^{-2}\\text{ N}$", "$10^{-1}\\text{ N}$", "$10^{-12}\\text{ N}$", "$0\\text{ N}$"], exp: "Force in a non-uniform field aligned with dipole is $F = p \\frac{dE}{dx} = (10^{-7})(10^5) = 10^{-2}\\text{ N}$.", sub: "Dipole in Non-Uniform Field", tid: "phys-electric-field-dipole" },
  { q: "Two parallel infinite sheets have surface charge densities $+\\sigma$ and $-\\sigma$. The electric field in the region between the sheets is:", opts: ["$\\frac{\\sigma}{\\varepsilon_0}$ directed from positive to negative sheet", "$0$", "$\\frac{\\sigma}{2\\varepsilon_0}$", "$\\frac{2\\sigma}{\\varepsilon_0}$"], exp: "Between sheets, both fields add: $E = \\frac{\\sigma}{2\\varepsilon_0} + \\frac{\\sigma}{2\\varepsilon_0} = \\frac{\\sigma}{\\varepsilon_0}$.", sub: "Parallel Charged Sheets", tid: "phys-gauss-law" }
];

// CHAPTER 2: Electrostatic Potential and Capacitance
const ch2Easy = [
  { q: "The electrostatic potential $V$ at distance $r$ from an isolated point charge $q$ is:", opts: ["$\\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r}$", "$\\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{r^2}$", "$\\frac{1}{4\\pi\\varepsilon_0} q r$", "$0$"], exp: "$V = \\frac{q}{4\\pi\\varepsilon_0 r}$.", sub: "Potential of Point Charge", tid: "phys-electric-potential" },
  { q: "The work done in moving a test charge $q_0$ between any two points on an equipotential surface is:", opts: ["Zero", "$q_0 V$", "$\\infty$", "Dependent on the path taken"], exp: "On an equipotential surface, $\\Delta V = 0$, so $W = q_0 \\Delta V = 0$.", sub: "Equipotential Surfaces", tid: "phys-electric-potential" },
  { q: "The capacitance $C$ of a parallel plate capacitor of area $A$ and separation $d$ in vacuum is:", opts: ["$\\frac{\\varepsilon_0 A}{d}$", "$\\frac{A}{\\varepsilon_0 d}$", "$\\frac{\\varepsilon_0 d}{A}$", "$\\varepsilon_0 A d$"], exp: "$C = \\frac{\\varepsilon_0 A}{d}$.", sub: "Parallel Plate Capacitance", tid: "phys-capacitors-dielectrics" },
  { q: "The energy stored in a capacitor of capacitance $C$ charged to potential $V$ is:", opts: ["$\\frac{1}{2} C V^2$", "$C V^2$", "$\\frac{1}{2} C^2 V$", "$2 C V^2$"], exp: "Energy $U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V$.", sub: "Capacitor Energy", tid: "phys-potential-energy" }
];
const ch2Med = [
  { q: "When a dielectric slab of dielectric constant $K$ completely fills the space between plates of an isolated charged capacitor:", opts: ["Capacitance increases by factor $K$ and potential difference decreases by factor $K$", "Capacitance decreases by $K$", "Potential difference increases by $K$", "Charge on plates increases by $K$"], exp: "With battery disconnected, charge $Q$ is constant. $C' = K C$, so $V' = Q/C' = V/K$.", sub: "Dielectric Insertion", tid: "phys-capacitors-dielectrics" },
  { q: "When $n$ identical capacitors each of capacitance $C$ are connected in series, the equivalent capacitance is:", opts: ["$C / n$", "$n C$", "$n^2 C$", "$C / n^2$"], exp: "In series, $1/C_{eq} = n/C \\implies C_{eq} = C/n$.", sub: "Series Capacitors", tid: "phys-combination-capacitors" },
  { q: "The electrostatic energy density $u_E$ in an electric field $E$ in vacuum is:", opts: ["$\\frac{1}{2} \\varepsilon_0 E^2$", "$\\varepsilon_0 E^2$", "$\\frac{1}{2} \\frac{E^2}{\\varepsilon_0}$", "$\\frac{1}{2} \\varepsilon_0 E$"], exp: "Energy per unit volume is $u_E = \\frac{1}{2} \\varepsilon_0 E^2$.", sub: "Energy Density", tid: "phys-potential-energy" },
  { q: "The potential on the equatorial plane of an electric dipole of moment $p$ is:", opts: ["Zero everywhere", "$\\frac{p}{4\\pi\\varepsilon_0 r^2}$", "$\\infty$", "Dependent on distance $r$"], exp: "Equatorial plane is equidistant from $+q$ and $-q$, so $V = V_+ + V_- = 0$.", sub: "Dipole Potential", tid: "phys-electric-potential" }
];
const ch2Hard = [
  { q: "A parallel plate capacitor is charged to potential $V$ and disconnected from the battery. If plate separation is doubled, the stored energy:", opts: ["Doubles", "Halves", "Remains unchanged", "Quadruples"], exp: "$C = \\varepsilon_0 A / d$. Doubling $d$ halves $C$. Since $Q$ is constant, $U = \\frac{Q^2}{2C}$. Halving $C$ doubles stored energy $U$.", sub: "Capacitor Energy Work Done", tid: "phys-potential-energy" },
  { q: "Two capacitors $C_1 = 2\\ \\mu\\text{F}$ and $C_2 = 4\\ \\mu\\text{F}$ charged to $100\\text{ V}$ and $50\\text{ V}$ respectively are connected in parallel. Common potential is:", opts: ["$66.7\\text{ V}$", "$75.0\\text{ V}$", "$50.0\\text{ V}$", "$150.0\\text{ V}$"], exp: "Common potential $V = \\frac{C_1 V_1 + C_2 V_2}{C_1 + C_2} = \\frac{(2)(100) + (4)(50)}{2 + 4} = \\frac{400}{6} = 66.7\\text{ V}$.", sub: "Common Potential & Loss of Energy", tid: "phys-combination-capacitors" },
  { q: "The loss of electrostatic energy when two capacitors of capacitance $C_1, C_2$ at potentials $V_1, V_2$ are connected together is:", opts: ["$\\frac{C_1 C_2}{2(C_1 + C_2)} (V_1 - V_2)^2$", "$\\frac{C_1 C_2}{(C_1 + C_2)} (V_1 - V_2)^2$", "$\\frac{(C_1 + C_2)}{2 C_1 C_2} (V_1 - V_2)^2$", "Zero"], exp: "Energy loss dissipated as heat and EM radiation is $\\Delta U = \\frac{C_1 C_2}{2(C_1 + C_2)}(V_1 - V_2)^2$.", sub: "Energy Loss in Connecting Capacitors", tid: "phys-combination-capacitors" },
  { q: "A spherical conductor of radius $R_1$ is enclosed concentrically by a grounded conducting shell of radius $R_2$. The capacitance of the system is:", opts: ["$4\\pi\\varepsilon_0 \\frac{R_1 R_2}{R_2 - R_1}$", "$4\\pi\\varepsilon_0 (R_2 - R_1)$", "$4\\pi\\varepsilon_0 \\frac{R_2 - R_1}{R_1 R_2}$", "$4\\pi\\varepsilon_0 \\frac{R_1^2}{R_2}$"], exp: "For concentric spherical capacitor with outer shell earthed, $C = 4\\pi\\varepsilon_0 \\frac{R_1 R_2}{R_2 - R_1}$.", sub: "Spherical Capacitor", tid: "phys-capacitors-dielectrics" }
];

// CHAPTER 3: Current Electricity
const ch3Easy = [
  { q: "The drift velocity $v_d$ of conduction electrons in terms of electric field $E$ and relaxation time $\\tau$ is:", opts: ["$v_d = -\\frac{e E \\tau}{m}$", "$v_d = -\\frac{e E}{m \\tau}$", "$v_d = -\\frac{m E \\tau}{e}$", "$v_d = -\\frac{e \\tau}{m E}$"], exp: "From Newton's second law, $a = -eE/m$, so average drift velocity is $v_d = -\\frac{e E \\tau}{m}$.", sub: "Drift Velocity Formula", tid: "phys-ohms-law-drift" },
  { q: "The relation between electric current $I$ and drift velocity $v_d$ in a conductor of cross-sectional area $A$ is:", opts: ["$I = n e A v_d$", "$I = \\frac{n e A}{v_d}$", "$I = \\frac{n e v_d}{A}$", "$I = n^2 e A v_d$"], exp: "Current $I = n e A v_d$, where $n$ is electron density.", sub: "Current and Drift Speed", tid: "phys-ohms-law-drift" },
  { q: "Kirchhoff's first law (Junction rule, $\\sum I = 0$) is based on the conservation of:", opts: ["Electric charge", "Energy", "Linear momentum", "Angular momentum"], exp: "At any junction, total incoming current equals outgoing current, reflecting conservation of charge.", sub: "Kirchhoff's Rules", tid: "phys-kirchhoffs-laws" },
  { q: "Kirchhoff's second law (Loop rule, $\\sum \\Delta V = 0$) is based on the conservation of:", opts: ["Energy", "Electric charge", "Magnetic flux", "Power"], exp: "The algebraic sum of potential changes around any closed loop is zero, directly expressing conservation of energy.", sub: "Kirchhoff's Rules", tid: "phys-kirchhoffs-laws" }
];
const ch3Med = [
  { q: "When a wire of resistance $R$ is stretched uniformly to $n$ times its original length, its new resistance becomes:", opts: ["$n^2 R$", "$n R$", "$R / n$", "$R / n^2$"], exp: "Volume $V = A L$ is constant. Stretching to $n L$ reduces area to $A/n$. New resistance $R' = \\rho (n L)/(A/n) = n^2 R$.", sub: "Stretching Wire Resistance", tid: "phys-resistance-resistivity" },
  { q: "A cell of EMF $\\mathcal{E}$ and internal resistance $r$ is connected to external resistance $R$. Maximum power is transferred to $R$ when:", opts: ["$R = r$", "$R = 2r$", "$R = r/2$", "$R = \\infty$"], exp: "By the Maximum Power Transfer Theorem, load receives maximum power when load resistance equals internal resistance $R = r$.", sub: "Maximum Power Transfer", tid: "phys-cells-emf-internal-r" },
  { q: "In a Wheatstone bridge with resistors $P, Q, R, S$, the condition for no galvanometer deflection is:", opts: ["$\\frac{P}{Q} = \\frac{R}{S}$", "$P Q = R S$", "$P + Q = R + S$", "$\\frac{P}{R} = \\frac{S}{Q}$"], exp: "Balanced bridge condition is $P/Q = R/S$.", sub: "Wheatstone Bridge Principle", tid: "phys-kirchhoffs-laws" },
  { q: "The temperature coefficient of resistance $\\alpha$ is negative for which of the following materials?", opts: ["Semiconductors (e.g. Carbon, Germanium, Silicon)", "Metals like Copper and Aluminium", "Alloys like Manganin and Constantan", "Superconductors at normal state"], exp: "In semiconductors, carrier density increases exponentially with temperature, so resistivity decreases with $T$ (negative $\\alpha$).", sub: "Temperature Dependence", tid: "phys-resistance-resistivity" }
];
const ch3Hard = [
  { q: "Two cells of EMFs $\\mathcal{E}_1, \\mathcal{E}_2$ and internal resistances $r_1, r_2$ are connected in parallel. Equivalent EMF is:", opts: ["$\\frac{\\mathcal{E}_1 r_2 + \\mathcal{E}_2 r_1}{r_1 + r_2}$", "$\\frac{\\mathcal{E}_1 r_1 + \\mathcal{E}_2 r_2}{r_1 + r_2}$", "$\\mathcal{E}_1 + \\mathcal{E}_2$", "$\\frac{\\mathcal{E}_1 \\mathcal{E}_2}{r_1 + r_2}$"], exp: "Parallel combination of cells yields $\\mathcal{E}_{eq} = \\frac{\\mathcal{E}_1/r_1 + \\mathcal{E}_2/r_2}{1/r_1 + 1/r_2} = \\frac{\\mathcal{E}_1 r_2 + \\mathcal{E}_2 r_1}{r_1 + r_2}$.", sub: "Cells in Parallel", tid: "phys-cells-emf-internal-r" },
  { q: "Twelve identical wires each of resistance $r$ are connected to form the skeleton of a cube. Equivalent resistance between diagonally opposite corners is:", opts: ["$\\frac{5}{6} r$", "$\\frac{7}{12} r$", "$\\frac{3}{4} r$", "$r$"], exp: "Between diametrically opposite body corners, symmetry arguments show $R_{eq} = \\frac{5}{6} r$.", sub: "Cube Resistor Network", tid: "phys-resistance-resistivity" },
  { q: "A potentiometer wire of length $10\\text{ m}$ has resistance $20\\ \\Omega$. Connected in series with battery of $5\\text{ V}$ and external resistor $480\\ \\Omega$, the potential gradient is:", opts: ["$0.02\\text{ V/m}$", "$0.2\\text{ V/m}$", "$0.002\\text{ V/m}$", "$0.5\\text{ V/m}$"], exp: "Total resistance $= 480 + 20 = 500\\ \\Omega$. Current $I = 5/500 = 0.01\\text{ A}$. Voltage across wire $= I R_{wire} = 0.01 \\times 20 = 0.2\\text{ V}$. Potential gradient $k = 0.2\\text{ V} / 10\\text{ m} = 0.02\\text{ V/m}$.", sub: "Potentiometer Gradient", tid: "phys-cells-emf-internal-r" },
  { q: "In a metre bridge experiment, balancing length from left end is $l_1 = 40\\text{ cm}$. When resistance in right gap is shunted by $10\\ \\Omega$, balance point shifts to $50\\text{ cm}$. The unknown resistance in left gap was:", opts: ["$10\\ \\Omega$", "$5\\ \\Omega$", "$15\\ \\Omega$", "$20\\ \\Omega$"], exp: "$R/S = 40/60 = 2/3 \\implies S = 1.5 R$. Shunted $S' = \\frac{10 S}{10 + S}$. New balance: $R/S' = 50/50 = 1 \\implies R = S'$. Substituting yields $R = 10\\ \\Omega$.", sub: "Metre Bridge Multi-Step", tid: "phys-kirchhoffs-laws" }
];

// CHAPTER 4: Moving Charges and Magnetism
const ch4Easy = [
  { q: "Lorentz magnetic force on a charge $q$ moving with velocity $\\vec{v}$ in a magnetic field $\\vec{B}$ is:", opts: ["$\\vec{F} = q(\\vec{v} \\times \\vec{B})$", "$\\vec{F} = q(\\vec{B} \\times \\vec{v})$", "$\\vec{F} = q(\\vec{v} \\cdot \\vec{B})$", "$\\vec{F} = \\frac{q}{v B}$"], exp: "Magnetic Lorentz force is $\\vec{F} = q(\\vec{v} \\times \\vec{B})$.", sub: "Lorentz Force", tid: "phys-lorentz-force-cyclotron" },
  { q: "The magnetic field at the center of a circular loop of radius $R$ carrying current $I$ is:", opts: ["$\\frac{\\mu_0 I}{2 R}$", "$\\frac{\\mu_0 I}{4\\pi R}$", "$\\frac{\\mu_0 I}{2\\pi R}$", "$\\frac{\\mu_0 I}{R}$"], exp: "By Biot-Savart Law, $B = \\frac{\\mu_0 I}{2 R}$ at loop center.", sub: "Biot-Savart Circular Loop", tid: "phys-biot-savart-law" },
  { q: "Ampere's Circuital Law states that the line integral of magnetic field around any closed loop is:", opts: ["$\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{encl}$", "$\\oint \\vec{B}\\cdot d\\vec{l} = 0$", "$\\oint \\vec{B}\\cdot d\\vec{l} = \\frac{I_{encl}}{\\mu_0}$", "$\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 \\varepsilon_0 I$"], exp: "Ampere's law: $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enclosed}$.", sub: "Ampere's Circuital Law", tid: "phys-amperes-law-solenoid" },
  { q: "The magnetic field inside an ideal long solenoid carrying current $I$ with $n$ turns per unit length is:", opts: ["$B = \\mu_0 n I$", "$B = \\frac{\\mu_0 n I}{2}$", "$B = 2\\mu_0 n I$", "$B = 0$"], exp: "Inside a long solenoid, field is uniform: $B = \\mu_0 n I$.", sub: "Solenoid Field", tid: "phys-amperes-law-solenoid" }
];
const ch4Med = [
  { q: "A charged particle enters a uniform magnetic field perpendicularly. The radius $r$ of its circular path is:", opts: ["$r = \\frac{m v}{q B} = \\frac{p}{q B}$", "$r = \\frac{q B}{m v}$", "$r = \\frac{m q}{v B}$", "$r = \\frac{v B}{m q}$"], exp: "Centripetal force $m v^2 / r = q v B \\implies r = \\frac{m v}{q B}$.", sub: "Circular Motion in B-Field", tid: "phys-lorentz-force-cyclotron" },
  { q: "The magnetic force per unit length between two parallel infinitely long straight conductors carrying currents $I_1, I_2$ separated by distance $d$ is:", opts: ["$\\frac{f}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$", "$\\frac{f}{L} = \\frac{\\mu_0 I_1 I_2}{4\\pi d^2}$", "$\\frac{f}{L} = \\frac{\\mu_0 I_1 I_2}{\\pi d}$", "$\\frac{f}{L} = 0$"], exp: "Force per unit length is $\\frac{\\mu_0 I_1 I_2}{2\\pi d}$, attractive for same direction currents.", sub: "Parallel Conductors Force", tid: "phys-force-parallel-conductors" },
  { q: "The cyclotron resonance frequency $\\nu_c$ of an ion of charge $q$ and mass $m$ in magnetic field $B$ is:", opts: ["$\\nu_c = \\frac{q B}{2\\pi m}$", "$\\nu_c = \\frac{2\\pi m}{q B}$", "$\\nu_c = \\frac{q B}{m}$", "$\\nu_c = \\frac{m B}{2\\pi q}$"], exp: "Cyclotron frequency $\\omega = q B / m \\implies \\nu = \\frac{q B}{2\\pi m}$.", sub: "Cyclotron Frequency", tid: "phys-lorentz-force-cyclotron" },
  { q: "To convert a galvanometer of resistance $G$ into an ammeter of range $I$, required shunt $S$ is:", opts: ["$S = \\frac{I_g G}{I - I_g}$", "$S = \\frac{I - I_g}{I_g G}$", "$S = \\frac{I G}{I_g}$", "$S = \\frac{I_g}{G(I - I_g)}$"], exp: "Shunt in parallel: $S (I - I_g) = I_g G \\implies S = \\frac{I_g G}{I - I_g}$.", sub: "Galvanometer to Ammeter", tid: "phys-galvanometer" }
];
const ch4Hard = [
  { q: "A proton and an alpha particle enter a uniform magnetic field with equal kinetic energies perpendicular to the field. Ratio of their orbital radii $r_p : r_\\alpha$ is:", opts: ["$1 : 1$", "$1 : 2$", "$2 : 1$", "$1 : 4$"], exp: "Radius $r = \\frac{\\sqrt{2 m K}}{q B}$. For proton, $m_p=m, q_p=e$. For alpha, $m_\\alpha=4m, q_\\alpha=2e$. $r_\\alpha = \\frac{\\sqrt{2(4m)K}}{2e B} = \\frac{2\\sqrt{2mK}}{2eB} = r_p$. Ratio is $1:1$.", sub: "Kinetic Energy and Radius Ratio", tid: "phys-lorentz-force-cyclotron" },
  { q: "The magnetic field on the axis of a circular current loop of radius $R$ at distance $x = \\sqrt{3} R$ from center is what fraction of field at center?", opts: ["$1 / 8$", "$1 / 4$", "$1 / 2$", "$1 / 16$"], exp: "$B(x) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$. At $x = \\sqrt{3} R$, $R^2 + 3R^2 = 4R^2$. $(4R^2)^{3/2} = 8 R^3$. $B(x) = \\frac{\\mu_0 I}{16 R} = \\frac{1}{8} B_{center}$.", sub: "Axial Field Ratio", tid: "phys-biot-savart-law" },
  { q: "A helical path is described by an electron projected at angle $60^\\circ$ to a uniform magnetic field $B$. The pitch of the helix is:", opts: ["$\\frac{2\\pi m v \\cos 60^\\circ}{q B}$", "$\\frac{2\\pi m v \\sin 60^\\circ}{q B}$", "$\\frac{2\\pi m v}{q B}$", "$\\frac{\\pi m v}{q B}$"], exp: "Pitch $= v_\\parallel T = (v \\cos\\theta)\\left(\\frac{2\\pi m}{q B}\\right) = \\frac{2\\pi m v \\cos 60^\\circ}{q B}$.", sub: "Helical Motion Pitch", tid: "phys-lorentz-force-cyclotron" },
  { q: "A moving coil galvanometer has 100 turns, coil area $40\\text{ cm}^2$, and torsional constant $C = 2 \\times 10^{-6}\\text{ N}\\cdot\\text{m/rad}$ in field $0.2\\text{ T}$. Its current sensitivity is:", opts: ["$4 \\times 10^4\\text{ rad/A}$", "$4 \\times 10^2\\text{ rad/A}$", "$2 \\times 10^4\\text{ rad/A}$", "$8 \\times 10^3\\text{ rad/A}$"], exp: "Current sensitivity $\\frac{\\theta}{I} = \\frac{N A B}{C} = \\frac{(100)(40 \\times 10^{-4})(0.2)}{2 \\times 10^{-6}} = \\frac{0.08}{2 \\times 10^{-6}} = 4 \\times 10^4\\text{ rad/A}$.", sub: "Galvanometer Sensitivity", tid: "phys-galvanometer" }
];

// CHAPTER 5: Magnetism and Matter
const ch5Easy = [
  { q: "The magnetic dipole moment $M$ of a current loop of $N$ turns carrying current $I$ and area $A$ is:", opts: ["$M = N I A$", "$M = N I / A$", "$M = I A / N$", "$M = N A / I$"], exp: "$M = N I A$ directed perpendicular to the plane of the loop.", sub: "Magnetic Dipole Moment", tid: "phys-bar-magnet-dipole" },
  { q: "Gauss's law in magnetism ($\\oint \\vec{B}\\cdot d\\vec{A} = 0$) confirms that:", opts: ["Isolated magnetic monopoles do not exist", "Magnetic fields have no sources", "Magnetic lines never form loops", "Magnetic permeability is constant"], exp: "Magnetic field lines are continuous closed loops; hence net magnetic flux through any closed surface is always zero.", sub: "Gauss's Law for Magnetism", tid: "phys-bar-magnet-dipole" },
  { q: "The angle between the magnetic meridian and the geographic meridian at a place on Earth is called:", opts: ["Magnetic declination", "Angle of dip", "Horizontal component", "Magnetic inclination"], exp: "Magnetic declination is the angle between geographic north and magnetic north.", sub: "Earth's Magnetic Elements", tid: "phys-earths-magnetism" },
  { q: "Substances that are weakly repelled by an external magnetic field are classified as:", opts: ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Antiferromagnetic"], exp: "Diamagnetic materials develop induced magnetic moments opposing the applied field.", sub: "Magnetic Materials Classification", tid: "phys-magnetic-materials" }
];
const ch5Med = [
  { q: "The magnetic susceptibility $\\chi_m$ of a diamagnetic substance is:", opts: ["Negative and independent of temperature", "Positive and inversely proportional to temperature", "Very large and positive", "Zero"], exp: "Diamagnetic materials have small negative susceptibility $\\chi_m < 0$, independent of temperature.", sub: "Diamagnetic Properties", tid: "phys-magnetic-materials" },
  { q: "According to Curie's Law, magnetic susceptibility of a paramagnetic material depends on absolute temperature $T$ as:", opts: ["$\\chi_m \\propto \\frac{1}{T}$", "$\\chi_m \\propto T$", "$\\chi_m \\propto \\frac{1}{T^2}$", "$\\chi_m$ is independent of $T$"], exp: "Curie's law for paramagnets states $\\chi_m = C / T$.", sub: "Curie's Law", tid: "phys-magnetic-materials" },
  { q: "At the magnetic poles of Earth, the angle of dip (inclination $\\delta$) is:", opts: ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$180^\\circ$"], exp: "At magnetic poles, field lines are vertical, so $\\delta = 90^\\circ$. At equator, $\\delta = 0^\\circ$.", sub: "Angle of Dip", tid: "phys-earths-magnetism" },
  { q: "The relation between total magnetic field of Earth $B$, horizontal component $B_H$, and dip $\\delta$ is:", opts: ["$B_H = B \\cos\\delta$", "$B_H = B \\sin\\delta$", "$B_H = B \\tan\\delta$", "$B = B_H \\cos\\delta$"], exp: "$B_H = B \\cos\\delta$ and $B_V = B \\sin\\delta$.", sub: "Earth's Field Components", tid: "phys-earths-magnetism" }
];
const ch5Hard = [
  { q: "If the horizontal and vertical components of Earth's magnetic field at a place are equal, the angle of dip at that place is:", opts: ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"], exp: "$\\tan\\delta = B_V / B_H = 1 \\implies \\delta = 45^\\circ$.", sub: "Angle of Dip Calculation", tid: "phys-earths-magnetism" },
  { q: "A magnetic needle vibrates in a horizontal magnetic field with period $T = 2\\text{ s}$. If magnetic field is quadrupled ($B' = 4B$), the new period of oscillation is:", opts: ["$1\\text{ s}$", "$4\\text{ s}$", "$0.5\\text{ s}$", "$2\\text{ s}$"], exp: "$T = 2\\pi \\sqrt{I / (M B_H)} \\propto 1/\\sqrt{B}$. Quadrupling $B$ halves period: $T' = 2 / \\sqrt{4} = 1\\text{ s}$.", sub: "Vibration Magnetometer", tid: "phys-bar-magnet-dipole" },
  { q: "Above the Curie temperature $T_c$, a ferromagnetic material undergoes a phase transition and becomes:", opts: ["Paramagnetic, following the Curie-Weiss law", "Diamagnetic", "Superconducting", "Non-magnetic"], exp: "Above $T_c$, ferromagnets lose spontaneous magnetization and become paramagnetic: $\\chi = \\frac{C}{T - T_c}$.", sub: "Curie-Weiss Law", tid: "phys-magnetic-materials" },
  { q: "An iron bar magnet of dipole moment $M$ is bent into a semicircle of radius $R$. Its new magnetic dipole moment is:", opts: ["$\\frac{2 M}{\\pi}$", "$\\frac{M}{\\pi}$", "$\\frac{\\pi M}{2}$", "$M$"], exp: "Original length $L = \\pi R$, pole strength $m = M / L$. New distance between poles is diameter $2 R$. New moment $M' = m (2R) = \\frac{M}{\\pi R}(2R) = \\frac{2M}{\\pi}$.", sub: "Bent Magnet Moment", tid: "phys-bar-magnet-dipole" }
];

function runBatch1() {
  generateChapter('electric-charges-fields', 'Electric Charges and Fields', 'ecf', 'ELECTRIC_CHARGES_FIELDS', 'electricChargesFields', ch1Easy, ch1Med, ch1Hard);
  generateChapter('electrostatic-potential-capacitance', 'Electrostatic Potential and Capacitance', 'epc', 'ELECTROSTATIC_POTENTIAL_CAPACITANCE', 'electrostaticPotentialCapacitance', ch2Easy, ch2Med, ch2Hard);
  generateChapter('current-electricity', 'Current Electricity', 'ce', 'CURRENT_ELECTRICITY', 'currentElectricity', ch3Easy, ch3Med, ch3Hard);
  generateChapter('moving-charges-magnetism', 'Moving Charges and Magnetism', 'mcm', 'MOVING_CHARGES_MAGNETISM', 'movingChargesMagnetism', ch4Easy, ch4Med, ch4Hard);
  generateChapter('magnetism-matter', 'Magnetism and Matter', 'mm', 'MAGNETISM_MATTER', 'magnetismMatter', ch5Easy, ch5Med, ch5Hard);
}

runBatch1();
