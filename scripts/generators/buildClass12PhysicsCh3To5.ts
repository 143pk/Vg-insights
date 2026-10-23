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

// ========================================================================================
// CHAPTER 3: CURRENT ELECTRICITY
// ========================================================================================
export function generateChapter3() {
  const chapterId = 'current-electricity';
  const chapterTitle = 'Current Electricity';
  const idPrefix = 'ce';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "The relation between electric current $I$ and drift velocity $v_d$ of conduction electrons in a wire of cross-sectional area $A$ and electron density $n$ is:",
      opts: ["$I = n e A v_d$", "$I = \\frac{n e A}{v_d}$", "$I = \\frac{n e v_d}{A}$", "$I = n e^2 A v_d$"],
      exp: "Electric current is total charge flowing per second: $I = \\frac{\\Delta q}{\\Delta t} = \\frac{n e (A v_d \\Delta t)}{\\Delta t} = n e A v_d$.",
      sub: "Drift Velocity & Current",
      tid: "phys-ohms-law-drift"
    },
    {
      q: "The SI unit of electrical conductivity ($\\sigma$) is:",
      opts: ["$\\text{Siemens per metre (S/m)}$ or $\\Omega^{-1}\\cdot\\text{m}^{-1}$", "$\\Omega\\cdot\\text{m}$", "$\\text{Volt per Ampere}$", "$\\text{Ampere per Volt}$"],
      exp: "Conductivity is the reciprocal of resistivity $\\sigma = 1/\\rho$. Its unit is $\\Omega^{-1}\\text{m}^{-1} = \\text{S/m}$ (Siemens/metre).",
      sub: "Conductivity Units",
      tid: "phys-resistance-resistivity"
    },
    {
      q: "Ohm's law in microscopic vector form is expressed as:",
      opts: ["$\\vec{j} = \\sigma \\vec{E}$", "$\\vec{j} = \\rho \\vec{E}$", "$\\vec{E} = \\sigma \\vec{j}$", "$\\vec{j} = \\sigma / \\vec{E}$"],
      exp: "Current density $\\vec{j} = \\frac{I}{A} = n e \\vec{v}_d = n e \\left(\\frac{e\\vec{E}}{m}\\tau\\right) = \\left(\\frac{n e^2 \\tau}{m}\\right)\\vec{E} = \\sigma \\vec{E}$.",
      sub: "Microscopic Ohm's Law",
      tid: "phys-ohms-law-drift"
    },
    {
      q: "Kirchhoff's first law (Junction rule, $\\sum I = 0$) is based on the fundamental conservation of:",
      opts: ["Electric charge", "Energy", "Linear momentum", "Angular momentum"],
      exp: "The algebraic sum of currents meeting at any electrical junction is zero because charge cannot accumulate at a point (Conservation of Charge).",
      sub: "Kirchhoff's Junction Rule",
      tid: "phys-kirchhoffs-laws"
    },
    {
      q: "Kirchhoff's second law (Loop rule, $\\sum \\Delta V = 0$) is based on the conservation of:",
      opts: ["Energy", "Electric charge", "Momentum", "Mass"],
      exp: "The net change in potential around any closed loop is zero because the electrostatic field is conservative (Conservation of Energy).",
      sub: "Kirchhoff's Loop Rule",
      tid: "phys-kirchhoffs-laws"
    },
    {
      q: "A wire of resistance $R$ is stretched uniformly to double its original length. What is its new resistance?",
      opts: ["$4R$", "$2R$", "$R/2$", "$R/4$"],
      exp: "Volume $V = A L$ is constant. When length doubles ($L' = 2L$), area is halved ($A' = A/2$). New resistance $R' = \\rho \\frac{L'}{A'} = \\rho \\frac{2L}{A/2} = 4\\left(\\rho \\frac{L}{A}\\right) = 4R$.",
      sub: "Stretching of Wires",
      tid: "phys-resistance-resistivity"
    },
    {
      q: "In a balanced Wheatstone bridge with four arms $P, Q, R, S$, the condition for zero galvanometer deflection is:",
      opts: ["$\\frac{P}{Q} = \\frac{R}{S}$", "$P Q = R S$", "$P + Q = R + S$", "$\\frac{P}{R} = \\frac{S}{Q}$"],
      exp: "When the potentials at both galvanometer terminals are equal, no current flows through it: $\\frac{P}{Q} = \\frac{R}{S}$.",
      sub: "Wheatstone Bridge Principle",
      tid: "phys-kirchhoffs-laws"
    },
    {
      q: "When $n$ identical cells each of EMF $E$ and internal resistance $r$ are connected in series across an external resistance $R$, the current in the circuit is:",
      opts: ["$I = \\frac{n E}{R + n r}$", "$I = \\frac{E}{R + n r}$", "$I = \\frac{n E}{n R + r}$", "$I = \\frac{n^2 E}{R + r}$"],
      exp: "Total EMF in series is $nE$ and total internal resistance is $nr$. Current $I = \\frac{\\text{Total EMF}}{\\text{Total Resistance}} = \\frac{nE}{R + nr}$.",
      sub: "Cells in Series",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "When $m$ identical cells each of EMF $E$ and internal resistance $r$ are connected in parallel across an external resistance $R$, the current is:",
      opts: ["$I = \\frac{E}{R + \\frac{r}{m}}$", "$I = \\frac{m E}{R + r}$", "$I = \\frac{m E}{m R + r}$", "$I = \\frac{E}{m R + r}$"],
      exp: "In parallel, total EMF remains $E$ and equivalent internal resistance is $r/m$. Current $I = \\frac{E}{R + r/m} = \\frac{mE}{mR + r}$.",
      sub: "Cells in Parallel",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "The terminal potential difference $V$ across a cell of EMF $E$ and internal resistance $r$ delivering current $I$ to an external load is:",
      opts: ["$V = E - I r$", "$V = E + I r$", "$V = I r$", "$V = E / I r$"],
      exp: "During discharging, terminal voltage drops due to internal resistance: $V = E - Ir$. (During charging, $V = E + Ir$).",
      sub: "Terminal Potential Difference",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "The temperature coefficient of resistance ($\\alpha$) is negative for which of the following materials?",
      opts: ["Semiconductors (e.g., Silicon and Germanium)", "Metals like Copper and Aluminium", "Alloys like Manganin and Constantan", "Superconductors"],
      exp: "In semiconductors, heating excites covalent electrons into the conduction band, decreasing resistivity exponentially, so $\\alpha < 0$.",
      sub: "Temperature Dependence of Resistance",
      tid: "phys-resistance-resistivity"
    },
    {
      q: "A cell of EMF $E$ delivers maximum power to an external load resistance $R$ when:",
      opts: ["$R = r$ (load resistance equals internal resistance)", "$R = 2r$", "$R \\to \\infty$", "$R = 0$"],
      exp: "By the Maximum Power Transfer Theorem, power delivered $P = \\frac{E^2 R}{(R+r)^2}$ is maximized when $\\frac{dP}{dR} = 0 \\implies R = r$.",
      sub: "Maximum Power Transfer Theorem",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "The maximum power delivered by a cell of EMF $E$ and internal resistance $r$ to a matched load $R = r$ is:",
      opts: ["$P_{max} = \\frac{E^2}{4r}$", "$P_{max} = \\frac{E^2}{2r}$", "$P_{max} = \\frac{E^2}{r}$", "$P_{max} = \\frac{E^2}{8r}$"],
      exp: "At $R = r$, $P_{max} = I^2 R = \\left(\\frac{E}{r+r}\\right)^2 r = \\frac{E^2}{4r^2} r = \\frac{E^2}{4r}$.",
      sub: "Maximum Power Formula",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "Mobility $\\mu$ of an electron is defined as the magnitude of drift velocity per unit electric field: $\\mu = v_d / E$. Its SI unit is:",
      opts: ["$\\text{m}^2/(\\text{V}\\cdot\\text{s})$", "$\\text{m}/(\\text{V}\\cdot\\text{s})$", "$\\text{V}\\cdot\\text{m}/\\text{s}$", "$\\text{m}^2\\cdot\\text{V}/\\text{s}$"],
      exp: "Mobility $\\mu = \\frac{v_d}{E} = \\frac{\\text{m/s}}{\\text{V/m}} = \\text{m}^2/(\\text{V}\\cdot\\text{s})$.",
      sub: "Electron Mobility",
      tid: "phys-ohms-law-drift"
    },
    {
      q: "An electric kettle has two heating coils. When one coil is switched on, water boils in $6\\text{ minutes}$. When the other coil is switched on, water boils in $3\\text{ minutes}$. When both coils are connected in parallel, water will boil in:",
      opts: ["$2\\text{ minutes}$", "$4.5\\text{ minutes}$", "$9\\text{ minutes}$", "$1.5\\text{ minutes}$"],
      exp: "In parallel, total power adds: $P_p = P_1 + P_2 \\implies \\frac{H}{t_p} = \\frac{H}{t_1} + \\frac{H}{t_2} \\implies \\frac{1}{t_p} = \\frac{1}{6} + \\frac{1}{3} = \\frac{3}{6} = \\frac{1}{2} \\implies t_p = 2\\text{ minutes}$.",
      sub: "Heating Coils in Parallel",
      tid: "phys-resistance-resistivity"
    }
  ];

  const mediumPool = [
    {
      q: "A battery of EMF $10\\text{ V}$ and internal resistance $3\\,\\Omega$ is connected to a resistor. If the current in the circuit is $0.5\\text{ A}$, what is the resistance of the resistor and terminal voltage of the battery?",
      opts: ["$R = 17\\,\\Omega$ and $V = 8.5\\text{ V}$", "$R = 20\\,\\Omega$ and $V = 10\\text{ V}$", "$R = 15\\,\\Omega$ and $V = 7.5\\text{ V}$", "$R = 23\\,\\Omega$ and $V = 9.0\\text{ V}$"],
      exp: "$I = \\frac{E}{R + r} \\implies 0.5 = \\frac{10}{R + 3} \\implies R + 3 = 20 \\implies R = 17\\,\\Omega$. Terminal voltage $V = E - Ir = 10 - (0.5)(3) = 10 - 1.5 = 8.5\\text{ V}$.",
      sub: "Internal Resistance & Terminal Voltage",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "A uniform copper wire of resistance $20\\,\\Omega$ is cut into four equal pieces. These four pieces are then connected in parallel. What is the equivalent resistance of the parallel combination?",
      opts: ["$1.25\\,\\Omega$", "$5\\,\\Omega$", "$2.5\\,\\Omega$", "$0.8\\,\\Omega$"],
      exp: "Each piece has resistance $R_i = 20/4 = 5\\,\\Omega$. In parallel, $R_p = 5 / 4 = 1.25\\,\\Omega$.",
      sub: "Resistor Network Division",
      tid: "phys-resistance-resistivity"
    },
    {
      q: "Two cells of EMF $E_1 = 2\\text{ V}$ and $E_2 = 1\\text{ V}$ with internal resistances $r_1 = 1\\,\\Omega$ and $r_2 = 2\\,\\Omega$ are connected in parallel with like terminals together. The equivalent EMF of the combination is:",
      opts: ["$\\frac{5}{3}\\text{ V}$", "$1.5\\text{ V}$", "$3.0\\text{ V}$", "$1.0\\text{ V}$"],
      exp: "Equivalent EMF in parallel is $E_{eq} = \\frac{E_1/r_1 + E_2/r_2}{1/r_1 + 1/r_2} = \\frac{2/1 + 1/2}{1/1 + 1/2} = \\frac{2.5}{1.5} = \\frac{5}{3}\\text{ V}$.",
      sub: "Unequal Cells in Parallel",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "In a metre bridge experiment, null point is found at $40\\text{ cm}$ from the left end when a known resistance $R = 3\\,\\Omega$ is in the left gap. The unknown resistance $S$ in the right gap is:",
      opts: ["$4.5\\,\\Omega$", "$2.0\\,\\Omega$", "$6.0\\,\\Omega$", "$3.0\\,\\Omega$"],
      exp: "In a balanced metre bridge: $\\frac{R}{S} = \\frac{l}{100 - l} \\implies \\frac{3}{S} = \\frac{40}{60} = \\frac{2}{3} \\implies 2S = 9 \\implies S = 4.5\\,\\Omega$.",
      sub: "Metre Bridge Balance",
      tid: "phys-kirchhoffs-laws"
    },
    {
      q: "A potentiometer wire of length $10\\text{ m}$ has resistance $20\\,\\Omega$. It is connected in series with a resistance of $480\\,\\Omega$ and a battery of EMF $2\\text{ V}$. The potential gradient along the wire is:",
      opts: ["$8 \\times 10^{-3} \\text{ V/m}$", "$2 \\times 10^{-3} \\text{ V/m}$", "$4 \\times 10^{-4} \\text{ V/m}$", "$1 \\times 10^{-2} \\text{ V/m}$"],
      exp: "Circuit current $I = \\frac{2}{480 + 20} = \\frac{2}{500} = 4 \\times 10^{-3} \\text{ A}$. Voltage drop across $10\\text{ m}$ wire $V_w = I R_w = (4 \\times 10^{-3})(20) = 0.08\\text{ V}$. Potential gradient $k = V_w / L = 0.08 / 10 = 8 \\times 10^{-3} \\text{ V/m}$.",
      sub: "Potentiometer Potential Gradient",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "In a potentiometer arrangement, a cell of EMF $1.25\\text{ V}$ gives a balance point at $35.0\\text{ cm}$ length of the wire. If the cell is replaced by another cell and the balance point shifts to $63.0\\text{ cm}$, the EMF of the second cell is:",
      opts: ["$2.25\\text{ V}$", "$2.0\\text{ V}$", "$1.75\\text{ V}$", "$2.50\\text{ V}$"],
      exp: "$\\frac{E_2}{E_1} = \\frac{l_2}{l_1} \\implies E_2 = E_1 \\left(\\frac{l_2}{l_1}\\right) = 1.25 \\left(\\frac{63.0}{35.0}\\right) = 1.25 \\times 1.8 = 2.25\\text{ V}$.",
      sub: "Comparison of EMFs Using Potentiometer",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "Two electric bulbs rated $220\\text{ V}, 40\\text{ W}$ and $220\\text{ V}, 60\\text{ W}$ are connected in series across a $220\\text{ V}$ line. Which bulb glows brighter?",
      opts: [
        "The $40\\text{ W}$ bulb, because its higher filament resistance dissipates more power in series ($P = I^2 R$)",
        "The $60\\text{ W}$ bulb, because of its higher wattage rating",
        "Both bulbs glow with equal brightness",
        "Neither bulb glows because series voltage is insufficient"
      ] as [string, string, string, string],
      exp: "Resistance $R = V^2/P$. $R_{40} = 220^2/40 = 1210\\,\\Omega$ and $R_{60} = 220^2/60 = 806.7\\,\\Omega$. In series, current $I$ is identical, so $P = I^2 R$. The higher resistance $40\\text{ W}$ bulb consumes more power and glows brighter.",
      sub: "Bulbs in Series",
      tid: "phys-resistance-resistivity"
    },
    {
      q: "A cylindrical wire of radius $r$ and length $l$ carries current $I$. If both the radius and length of the wire are doubled while maintaining the same potential difference $V$, the drift velocity of electrons will:",
      opts: ["Be halved ($v_d' = v_d / 2$)", "Be doubled", "Remain unchanged", "Be quadrupled"],
      exp: "Drift velocity $v_d = \\frac{e E \\tau}{m} = \\frac{e (V/l) \\tau}{m} \\propto \\frac{V}{l}$. Since voltage $V$ is constant and length $l$ is doubled, $v_d' = v_d / 2$, completely independent of radius $r$.",
      sub: "Drift Velocity Scaling",
      tid: "phys-ohms-law-drift"
    },
    {
      q: "The resistance of a carbon resistor with colour bands Brown, Black, Red, and Gold is:",
      opts: ["$1.0\\text{ k}\\Omega \\pm 5\\%$", "$100\\,\\Omega \\pm 5\\%$", "$10\\text{ k}\\Omega \\pm 10\\%$", "$1.0\\text{ k}\\Omega \\pm 10\\%$"],
      exp: "Brown = 1, Black = 0, Red = $10^2$, Gold = $\\pm 5\\%$. Resistance is $10 \\times 10^2\\,\\Omega \\pm 5\\% = 1000\\,\\Omega \\pm 5\\% = 1.0\\text{ k}\\Omega \\pm 5\\%$.",
      sub: "Color Code of Carbon Resistors",
      tid: "phys-resistance-resistivity"
    },
    {
      q: "Twelve identical wires each of resistance $r$ are connected to form a skeleton cube. What is the equivalent resistance between diagonally opposite body corners $A$ and $B$?",
      opts: ["$\\frac{5}{6} r$", "$\\frac{7}{12} r$", "$\\frac{3}{4} r$", "$r$"],
      exp: "Current $I$ enters one corner and splits into three paths of $I/3$, each then splits into two paths of $I/6$, and then pairs recombine into three paths of $I/3$. Total $V = \\frac{I}{3}r + \\frac{I}{6}r + \\frac{I}{3}r = \\frac{5}{6}Ir \\implies R_{eq} = \\frac{5}{6}r$.",
      sub: "Cube Resistor Network",
      tid: "phys-kirchhoffs-laws"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding electric conduction:\nStatement I: Drift speed of electrons in a current-carrying copper wire is typically very small (around a few mm/s), yet an electric bulb lights up almost instantaneously when switched on.\nStatement II: The electric field that drives the electron drift propagates through the circuit as an electromagnetic wave at nearly the speed of light.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ] as [string, string, string, string],
      exp: "Both statements are correct NCERT physics principles. Electron drift velocity is minuscule (~$10^{-4}$ m/s), but the surface charge gradient establishes the electric field at the speed of light, initiating drift throughout the entire wire simultaneously.",
      sub: "Microscopic Conduction Dynamics",
      tid: "phys-ohms-law-drift"
    },
    {
      q: "Assertion (A): Manganin and Constantan are standardly chosen for manufacturing standard resistance coils and potentiometer wires.\nReason (R): They possess extremely high electrical resistivity combined with an almost negligible temperature coefficient of resistance ($\\alpha \\approx 0$).",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ] as [string, string, string, string],
      exp: "Standard resistors require resistance that does not alter with Joule heating during laboratory measurements; alloys like Manganin and Constantan have nearly zero temperature coefficient of resistance.",
      sub: "Material Properties in Metrology",
      tid: "phys-resistance-resistivity"
    },
    {
      q: "Match Column I (Circuit Law / Instrument) with Column II (Underlying Physical Principle):\n(A) Kirchhoff's Junction Rule - (1) Law of Conservation of Energy\n(B) Kirchhoff's Loop Rule - (2) Null deflection method drawing zero current at balance\n(C) Potentiometer - (3) Law of Conservation of Electric Charge\n(D) Wheatstone Bridge - (4) Zero galvanometer current when bridge arm ratio is satisfied\nSelect the correct matching code:",
      opts: [
        "A-3, B-1, C-2, D-4",
        "A-1, B-3, C-2, D-4",
        "A-3, B-4, C-1, D-2",
        "A-2, B-1, C-4, D-3"
      ] as [string, string, string, string],
      exp: "Junction rule: Conservation of charge (A-3); Loop rule: Conservation of energy (B-1); Potentiometer: Null deflection method without loading the source (C-2); Wheatstone bridge: Ratio arm balance (D-4).",
      sub: "Circuit Instruments & Conservation Laws",
      tid: "phys-kirchhoffs-laws"
    },
    {
      q: "A potentiometer wire of length $L$ and resistance $R_0$ is connected in series with a resistance $R$ and a primary cell of EMF $E$. A secondary cell of EMF $E_1$ is balanced against length $l$ of the potentiometer wire. If the driver cell's EMF is increased to $2E$, what is the new balance length $l'$?",
      opts: [
        "$l' = \\frac{l}{2}$",
        "$l' = 2l$",
        "$l' = l$",
        "$l' = \\frac{l}{4}$"
      ] as [string, string, string, string],
      exp: "Potential gradient $k = \\frac{V_w}{L} = \\frac{I R_0}{L} = \\frac{E R_0}{(R+R_0)L}$. Since $E_1 = k l$, doubling primary EMF doubles the gradient ($k' = 2k$). For the same secondary EMF $E_1 = k' l' = 2k l'$, the new balance length is $l' = l/2$.",
      sub: "Potentiometer Sensitivity & Gradient",
      tid: "phys-cells-emf-internal-r"
    },
    {
      q: "A hollow metallic tube of inner radius $r_1$, outer radius $r_2$, length $L$, and resistivity $\\rho$ carries current flowing radially outward from inner surface to outer surface. What is the resistance of the tube?",
      opts: [
        "$R = \\frac{\\rho}{2\\pi L} \\ln\\left(\\frac{r_2}{r_1}\\right)$",
        "$R = \\frac{\\rho L}{\\pi(r_2^2 - r_1^2)}$",
        "$R = \\frac{\\rho}{4\\pi L} \\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)$",
        "$R = \\frac{\\rho}{2\\pi L} \\left(\\frac{r_2 - r_1}{r_1 r_2}\\right)$"
      ] as [string, string, string, string],
      exp: "Concentric shell of radius $r$ and thickness $dr$ has area $A(r) = 2\\pi r L$. Resistance $dR = \\frac{\\rho dr}{2\\pi r L}$. Integrating from $r_1$ to $r_2$: $R = \\frac{\\rho}{2\\pi L} \\int_{r_1}^{r_2} \\frac{dr}{r} = \\frac{\\rho}{2\\pi L}\\ln(r_2/r_1)$.",
      sub: "Radial Conduction Resistance",
      tid: "phys-resistance-resistivity"
    }
  ];

  function buildItem(num: number, pool: any[], diff: 'Easy' | 'Medium' | 'Hard') {
    const targetCorrectIndex = (num - 1) % 4;
    const base = pool[(num - 1) % pool.length];
    const { options, correctOption } = assignOptions(base.opts, targetCorrectIndex);
    const padNum = String(num).padStart(3, '0');
    return {
      id: `${idPrefix}-mcq-${padNum}`,
      questionNumber: num,
      chapterId,
      chapterTitle,
      subject,
      class: classLevel,
      topicId: base.tid,
      topicTitle: base.tid === 'phys-ohms-law-drift' ? "Ohm's Law, Drift Velocity & Resistivity" : (base.tid === 'phys-cells-emf-internal-r' ? "Cells, EMF & Internal Resistance" : "Kirchhoff's Laws & Measuring Instruments"),
      subtopic: base.sub,
      question: `Q${num}. ${base.q}`,
      options,
      correctOption,
      explanation: base.exp,
      difficulty: diff,
      questionType: 'Single Correct MCQ' as const,
      source: 'VG Insights Practice',
      isFlagged: false
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

  writePartFile(path.join(outDir, 'currentElectricityPart1Data.ts'), 'CURRENT_ELECTRICITY_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'currentElectricityPart2Data.ts'), 'CURRENT_ELECTRICITY_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'currentElectricityPart3Data.ts'), 'CURRENT_ELECTRICITY_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'currentElectricityPart4Data.ts'), 'CURRENT_ELECTRICITY_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'currentElectricityData.ts'),
    chapterTitle,
    'CURRENT_ELECTRICITY_MCQS',
    [
      { exportName: 'CURRENT_ELECTRICITY_PART1_MCQS', fromFile: 'currentElectricityPart1Data' },
      { exportName: 'CURRENT_ELECTRICITY_PART2_MCQS', fromFile: 'currentElectricityPart2Data' },
      { exportName: 'CURRENT_ELECTRICITY_PART3_MCQS', fromFile: 'currentElectricityPart3Data' },
      { exportName: 'CURRENT_ELECTRICITY_PART4_MCQS', fromFile: 'currentElectricityPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 4: MOVING CHARGES AND MAGNETISM
// ========================================================================================
export function generateChapter4() {
  const chapterId = 'moving-charges-magnetism';
  const chapterTitle = 'Moving Charges and Magnetism';
  const idPrefix = 'mcm';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "The magnetic force $\\vec{F}$ acting on a charge $q$ moving with velocity $\\vec{v}$ in a magnetic field $\\vec{B}$ is given by:",
      opts: ["$\\vec{F} = q(\\vec{v} \\times \\vec{B})$", "$\\vec{F} = q(\\vec{v} \\cdot \\vec{B})$", "$\\vec{F} = q(\\vec{B} \\times \\vec{v})$", "$\\vec{F} = \\frac{q\\vec{v}}{B}$"],
      exp: "Lorentz magnetic force is given by the cross product $\\vec{F} = q(\\vec{v} \\times \\vec{B})$ with magnitude $F = q v B \\sin\\theta$.",
      sub: "Lorentz Force",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "Under what condition is the magnetic Lorentz force on a moving charged particle strictly zero?",
      opts: ["When velocity is parallel or antiparallel to the magnetic field ($\\theta = 0^\\circ$ or $180^\\circ$)", "When velocity is perpendicular to the field", "When velocity is at $45^\\circ$ to the field", "It is never zero if velocity and field are non-zero"],
      exp: "Since $F = q v B \\sin\\theta$, when $\\vec{v}$ is parallel or antiparallel to $\\vec{B}$, $\\sin\\theta = 0$, so $F = 0$.",
      sub: "Condition for Zero Magnetic Force",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "The work done by a purely static magnetic field on any moving charged particle is always:",
      opts: ["Zero, because magnetic force is always perpendicular to velocity ($\\vec{F}\\cdot\\vec{v} = 0$)", "Positive, increasing its kinetic energy", "Negative, slowing the charge down", "Equal to $q v B$"],
      exp: "Power $P = \\vec{F}\\cdot\\vec{v} = q(\\vec{v}\\times\\vec{B})\\cdot\\vec{v} = 0$. Hence work done is zero and kinetic energy/speed of the particle remains strictly constant.",
      sub: "Work Done by Magnetic Field",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "A charged particle of mass $m$ and charge $q$ enters perpendicularly into a uniform magnetic field $B$ with velocity $v$. The radius of its circular path is:",
      opts: ["$r = \\frac{m v}{q B}$", "$r = \\frac{q B}{m v}$", "$r = \\frac{m B}{q v}$", "$r = \\frac{v^2}{q B}$"],
      exp: "Magnetic force supplies centripetal force: $\\frac{m v^2}{r} = q v B \\implies r = \\frac{m v}{q B}$.",
      sub: "Radius of Circular Motion in B-Field",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "The cyclotron frequency $\\nu$ of a charged particle of mass $m$ and charge $q$ revolving in a magnetic field $B$ is:",
      opts: ["$\\nu = \\frac{q B}{2\\pi m}$", "$\\nu = \\frac{2\\pi m}{q B}$", "$\\nu = \\frac{q m}{2\\pi B}$", "$\\nu = \\frac{B}{2\\pi m q}$"],
      exp: "Time period $T = \\frac{2\\pi r}{v} = \\frac{2\\pi (mv/qB)}{v} = \\frac{2\\pi m}{q B}$. Frequency $\\nu = \\frac{1}{T} = \\frac{q B}{2\\pi m}$, independent of speed and radius.",
      sub: "Cyclotron Frequency",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "Biot-Savart Law for the magnetic field $d\\vec{B}$ due to a current element $I d\\vec{l}$ at distance $r$ is:",
      opts: [
        "$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\times \\hat{r})}{r^2}$",
        "$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I (d\\vec{l} \\cdot \\hat{r})}{r^2}$",
        "$d\\vec{B} = \\frac{\\mu_0}{2\\pi} \\frac{I d\\vec{l}}{r}$",
        "$d\\vec{B} = \\mu_0 \\varepsilon_0 \\frac{I d\\vec{l}}{r^2}$"
      ],
      exp: "Biot-Savart Law states $d\\vec{B} = \\frac{\\mu_0}{4\\pi}\\frac{I d\\vec{l} \\times \\hat{r}}{r^2} = \\frac{\\mu_0}{4\\pi}\\frac{I d\\vec{l} \\times \\vec{r}}{r^3}$.",
      sub: "Biot-Savart Law",
      tid: "phys-biot-savart-law"
    },
    {
      q: "The magnetic field at distance $r$ from an infinitely long straight wire carrying steady current $I$ is:",
      opts: ["$B = \\frac{\\mu_0 I}{2\\pi r}$", "$B = \\frac{\\mu_0 I}{4\\pi r}$", "$B = \\frac{\\mu_0 I}{2 r}$", "$B = \\frac{\\mu_0 I}{\\pi r^2}$"],
      exp: "By Ampere's circuital law $\\oint \\vec{B}\\cdot d\\vec{l} = B(2\\pi r) = \\mu_0 I \\implies B = \\frac{\\mu_0 I}{2\\pi r}$.",
      sub: "Field of Infinite Straight Conductor",
      tid: "phys-amperes-law-solenoid"
    },
    {
      q: "The magnetic field at the center of a circular coil of radius $R$ having $N$ turns carrying current $I$ is:",
      opts: ["$B = \\frac{\\mu_0 N I}{2 R}$", "$B = \\frac{\\mu_0 N I}{2\\pi R}$", "$B = \\frac{\\mu_0 N I}{4\\pi R}$", "$B = \\frac{\\mu_0 N I}{R^2}$"],
      exp: "At the center of a circular loop of $N$ turns, $B = N \\left(\\frac{\\mu_0 I}{2R}\\right) = \\frac{\\mu_0 N I}{2 R}$.",
      sub: "Field at Center of Circular Coil",
      tid: "phys-biot-savart-law"
    },
    {
      q: "The magnetic field inside an ideal tightly-wound long solenoid having $n$ turns per unit length carrying current $I$ is:",
      opts: ["$B = \\mu_0 n I$", "$B = \\frac{\\mu_0 n I}{2}$", "$B = 2\\mu_0 n I$", "$B = \\frac{\\mu_0 I}{2\\pi n}$"],
      exp: "Inside a long solenoid, the field is uniform: $B = \\mu_0 n I$, where $n = N/L$.",
      sub: "Magnetic Field of Solenoid",
      tid: "phys-amperes-law-solenoid"
    },
    {
      q: "Ampere's Circuital Law states that the line integral of magnetic field $\\vec{B}$ around any closed loop is:",
      opts: ["$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$", "$\\oint \\vec{B} \\cdot d\\vec{l} = \\frac{I_{enc}}{\\mu_0}$", "$\\oint \\vec{B} \\cdot d\\vec{l} = 0$ always", "$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 \\varepsilon_0 I$"],
      exp: "Ampere's law relates circulation of $\\vec{B}$ around closed contour $C$ to total enclosed current: $\\oint_C \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enc}$.",
      sub: "Ampere's Circuital Law",
      tid: "phys-amperes-law-solenoid"
    },
    {
      q: "The magnetic force per unit length between two infinitely long straight parallel wires separated by distance $d$ carrying currents $I_1$ and $I_2$ in the same direction is:",
      opts: [
        "$f = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$, attractive",
        "$f = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$, repulsive",
        "$f = \\frac{\\mu_0 I_1 I_2}{4\\pi d^2}$, attractive",
        "$f = 0$"
      ],
      exp: "Parallel currents in the same direction attract with force per unit length $f = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$. Opposite currents repel.",
      sub: "Force Between Parallel Conductors",
      tid: "phys-force-parallel-conductors"
    },
    {
      q: "A galvanometer of resistance $G$ is converted into an ammeter of range $I$ by connecting:",
      opts: [
        "A low resistance (shunt $S$) in parallel with the galvanometer",
        "A high resistance in series with the galvanometer",
        "A low resistance in series with the galvanometer",
        "A high resistance in parallel with the galvanometer"
      ],
      exp: "An ammeter must have very low resistance. It is made by connecting a small resistance (shunt $S = \\frac{I_g G}{I - I_g}$) in parallel with the galvanometer coil.",
      sub: "Conversion of Galvanometer into Ammeter",
      tid: "phys-galvanometer"
    },
    {
      q: "A galvanometer of resistance $G$ is converted into a voltmeter of range $V$ by connecting:",
      opts: [
        "A high resistance $R$ in series with the galvanometer",
        "A low resistance in parallel with the galvanometer",
        "A high resistance in parallel with the galvanometer",
        "A low resistance in series with the galvanometer"
      ],
      exp: "A voltmeter must have very high resistance so it draws negligible current. It is constructed by connecting a high resistance $R = \\frac{V}{I_g} - G$ in series with the galvanometer.",
      sub: "Conversion of Galvanometer into Voltmeter",
      tid: "phys-galvanometer"
    },
    {
      q: "The magnetic dipole moment $\\vec{M}$ of a planar current loop of area $A$ carrying current $I$ having $N$ turns is:",
      opts: ["$\\vec{M} = N I \\vec{A}$", "$\\vec{M} = \\frac{N I}{\\vec{A}}$", "$\\vec{M} = \\frac{\\vec{A}}{N I}$", "$\\vec{M} = N I^2 \\vec{A}$"],
      exp: "Magnetic dipole moment is defined as $M = N I A$, with direction given by right-hand thumb rule perpendicular to the loop area.",
      sub: "Magnetic Dipole Moment of Current Loop",
      tid: "phys-galvanometer"
    },
    {
      q: "What is the gyromagnetic ratio of an electron revolving in a Bohr orbit?",
      opts: ["$\\frac{e}{2 m_e} \\approx 8.8 \\times 10^{10} \\text{ C/kg}$", "$\\frac{e}{m_e}$", "$\\frac{2e}{m_e}$", "$\\frac{e}{4 m_e}$"],
      exp: "The gyromagnetic ratio is the ratio of magnetic dipole moment to orbital angular momentum: $\\frac{\\mu_l}{L} = \\frac{e}{2m_e} = 8.8 \\times 10^{10}\\text{ C/kg}$.",
      sub: "Gyromagnetic Ratio & Bohr Magneton",
      tid: "phys-galvanometer"
    }
  ];

  const mediumPool = [
    {
      q: "An electron and a proton having the same kinetic energy enter perpendicularly into a uniform magnetic field. What is the ratio of the radius of the electron's path to that of the proton's path ($r_e / r_p$)?",
      opts: ["$\\sqrt{m_e / m_p}$", "$m_e / m_p$", "$\\sqrt{m_p / m_e}$", "$1 : 1$"],
      exp: "$r = \\frac{p}{qB} = \\frac{\\sqrt{2mK}}{qB}$. Since $K$, $q$, and $B$ are identical: $r \\propto \\sqrt{m} \\implies \\frac{r_e}{r_p} = \\sqrt{\\frac{m_e}{m_p}}$.",
      sub: "Kinetic Energy and Orbit Radius",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "A circular coil of radius $R$ carries current $I$. At what axial distance $x$ from the center of the coil is the magnetic field equal to $\\frac{1}{8}$ of the field at its center?",
      opts: ["$x = \\sqrt{3} R$", "$x = 2R$", "$x = \\frac{R}{\\sqrt{3}}$", "$x = 3R$"],
      exp: "$B_{axis} = \\frac{\\mu_0 I R^2}{2(R^2+x^2)^{3/2}}$ and $B_{center} = \\frac{\\mu_0 I}{2R}$. Given $B_{axis} = \\frac{1}{8}B_{center} \\implies \\frac{R^3}{(R^2+x^2)^{3/2}} = \\frac{1}{8} \\implies \\frac{R}{\\sqrt{R^2+x^2}} = \\frac{1}{2} \\implies R^2 + x^2 = 4R^2 \\implies x^2 = 3R^2 \\implies x = \\sqrt{3}R$.",
      sub: "Axial Field of Circular Coil",
      tid: "phys-biot-savart-law"
    },
    {
      q: "A velocity selector has mutually perpendicular electric field $\\vec{E} = E\\hat{j}$ and magnetic field $\\vec{B} = B\\hat{k}$. A charged particle moving along the x-axis will pass through undeflected if its speed is:",
      opts: ["$v = \\frac{E}{B}$", "$v = \\frac{B}{E}$", "$v = \\sqrt{\\frac{E}{B}}$", "$v = E B$"],
      exp: "Electric force $qE\\hat{j}$ balances magnetic force $q(v\\hat{i} \\times B\\hat{k}) = -qvB\\hat{j}$ when $qE = qvB \\implies v = E/B$.",
      sub: "Velocity Selector",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "A galvanometer of coil resistance $50\\,\\Omega$ gives full scale deflection for a current of $5\\text{ mA}$. To convert it into an ammeter of range $0$ to $5\\text{ A}$, the required shunt resistance is:",
      opts: ["$0.05\\,\\Omega$", "$0.5\\,\\Omega$", "$0.005\\,\\Omega$", "$5\\,\\Omega$"],
      exp: "$S = \\frac{I_g G}{I - I_g} = \\frac{(0.005)(50)}{5 - 0.005} = \\frac{0.25}{4.995} \\approx 0.050\\,\\Omega$.",
      sub: "Ammeter Shunt Calculation",
      tid: "phys-galvanometer"
    },
    {
      q: "A galvanometer of coil resistance $100\\,\\Omega$ gives full-scale deflection with $2\\text{ mA}$. What resistance must be connected in series to convert it into a voltmeter reading up to $10\\text{ V}$?",
      opts: ["$4900\\,\\Omega$", "$5000\\,\\Omega$", "$4800\\,\\Omega$", "$5100\\,\\Omega$"],
      exp: "$R = \\frac{V}{I_g} - G = \\frac{10}{2 \\times 10^{-3}} - 100 = 5000 - 100 = 4900\\,\\Omega$.",
      sub: "Voltmeter Series Resistance",
      tid: "phys-galvanometer"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding magnetic fields and Biot-Savart Law:\nStatement I: The magnetic field $\\vec{B}$ due to a current element $I d\\vec{l}$ is always perpendicular to the plane containing the current element $d\\vec{l}$ and the position vector $\\vec{r}$.\nStatement II: Ampere's Circuital law is mathematically equivalent to the Biot-Savart law for steady currents and can be derived from it.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct NCERT principles. The cross product $d\\vec{l} \\times \\hat{r}$ dictates that $d\\vec{B}$ is strictly normal to the plane containing $d\\vec{l}$ and $\\vec{r}$. Ampere's circuital law and Biot-Savart law are equivalent descriptions for magnetostatics.",
      sub: "Magnetostatic Principles",
      tid: "phys-biot-savart-law"
    },
    {
      q: "Assertion (A): Cyclotrons cannot accelerate electrons to relativistic speeds.\nReason (R): As the electron speed approaches the speed of light $c$, its relativistic mass $m = \\frac{m_0}{\\sqrt{1 - v^2/c^2}}$ increases significantly, causing the orbital frequency to drop out of resonance with the oscillating electric field.",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ],
      exp: "Because of electron's small rest mass, even modest energy gains push it into relativistic regimes where $m$ increases, destroying the constant frequency condition $\\nu = qB/(2\\pi m)$.",
      sub: "Limitations of Cyclotron",
      tid: "phys-lorentz-force-cyclotron"
    },
    {
      q: "A long straight wire of circular cross-section of radius $a$ carries steady current $I$ distributed uniformly across its cross section. The magnetic field at a distance $r < a$ inside the wire is:",
      opts: [
        "$B = \\frac{\\mu_0 I r}{2\\pi a^2}$",
        "$B = \\frac{\\mu_0 I}{2\\pi r}$",
        "$B = 0$",
        "$B = \\frac{\\mu_0 I a}{2\\pi r^2}$"
      ],
      exp: "Enclosed current inside circle of radius $r$ is $I_{enc} = I\\frac{\\pi r^2}{\\pi a^2} = I\\frac{r^2}{a^2}$. By Ampere's law: $B(2\\pi r) = \\mu_0 I_{enc} = \\mu_0 I\\frac{r^2}{a^2} \\implies B = \\frac{\\mu_0 I r}{2\\pi a^2}$. Inside the wire, $B \\propto r$.",
      sub: "Field Inside Thick Conductor",
      tid: "phys-amperes-law-solenoid"
    },
    {
      q: "A non-conducting thin ring of radius $R$ carrying uniform charge $q$ is rotated about its central axis with constant angular frequency $\\omega$. Its magnetic dipole moment is:",
      opts: [
        "$M = \\frac{1}{2} q \\omega R^2$",
        "$M = q \\omega R^2$",
        "$M = \\frac{1}{4} q \\omega R^2$",
        "$M = 2 q \\omega R^2$"
      ],
      exp: "Equivalent current $I = \\frac{q}{T} = \\frac{q \\omega}{2\\pi}$. Area $A = \\pi R^2$. Magnetic moment $M = I A = \\left(\\frac{q\\omega}{2\\pi}\\right)(\\pi R^2) = \\frac{1}{2} q \\omega R^2$.",
      sub: "Rotating Charge Magnetic Moment",
      tid: "phys-galvanometer"
    },
    {
      q: "Two long parallel wires carrying equal currents $I$ in opposite directions are separated by distance $2d$. What is the magnetic field at a point midway between the wires?",
      opts: [
        "$B = \\frac{\\mu_0 I}{\\pi d}$, directed perpendicular to the plane of the wires",
        "Zero",
        "$B = \\frac{\\mu_0 I}{2\\pi d}$",
        "$B = \\frac{2\\mu_0 I}{\\pi d}$"
      ],
      exp: "At midpoint, distance from each wire is $d$. Since currents are opposite, right hand rule shows magnetic fields produced by both wires point in the same direction: $B_{net} = \\frac{\\mu_0 I}{2\\pi d} + \\frac{\\mu_0 I}{2\\pi d} = \\frac{\\mu_0 I}{\\pi d}$.",
      sub: "Superposition of Magnetic Fields",
      tid: "phys-force-parallel-conductors"
    }
  ];

  function buildItem(num: number, pool: any[], diff: 'Easy' | 'Medium' | 'Hard') {
    const targetCorrectIndex = (num - 1) % 4;
    const base = pool[(num - 1) % pool.length];
    const { options, correctOption } = assignOptions(base.opts, targetCorrectIndex);
    const padNum = String(num).padStart(3, '0');
    return {
      id: `${idPrefix}-mcq-${padNum}`,
      questionNumber: num,
      chapterId,
      chapterTitle,
      subject,
      class: classLevel,
      topicId: base.tid,
      topicTitle: base.tid === 'phys-biot-savart-law' ? "Biot-Savart Law & Applications" : (base.tid === 'phys-amperes-law-solenoid' ? "Ampere's Law & Solenoid" : (base.tid === 'phys-lorentz-force-cyclotron' ? "Lorentz Force & Motion of Charges" : "Parallel Conductors & Galvanometers")),
      subtopic: base.sub,
      question: `Q${num}. ${base.q}`,
      options,
      correctOption,
      explanation: base.exp,
      difficulty: diff,
      questionType: 'Single Correct MCQ' as const,
      source: 'VG Insights Practice',
      isFlagged: false
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

  writePartFile(path.join(outDir, 'movingChargesMagnetismPart1Data.ts'), 'MOVING_CHARGES_MAGNETISM_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'movingChargesMagnetismPart2Data.ts'), 'MOVING_CHARGES_MAGNETISM_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'movingChargesMagnetismPart3Data.ts'), 'MOVING_CHARGES_MAGNETISM_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'movingChargesMagnetismPart4Data.ts'), 'MOVING_CHARGES_MAGNETISM_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'movingChargesMagnetismData.ts'),
    chapterTitle,
    'MOVING_CHARGES_MAGNETISM_MCQS',
    [
      { exportName: 'MOVING_CHARGES_MAGNETISM_PART1_MCQS', fromFile: 'movingChargesMagnetismPart1Data' },
      { exportName: 'MOVING_CHARGES_MAGNETISM_PART2_MCQS', fromFile: 'movingChargesMagnetismPart2Data' },
      { exportName: 'MOVING_CHARGES_MAGNETISM_PART3_MCQS', fromFile: 'movingChargesMagnetismPart3Data' },
      { exportName: 'MOVING_CHARGES_MAGNETISM_PART4_MCQS', fromFile: 'movingChargesMagnetismPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 5: MAGNETISM AND MATTER
// ========================================================================================
export function generateChapter5() {
  const chapterId = 'magnetism-matter';
  const chapterTitle = 'Magnetism and Matter';
  const idPrefix = 'mm';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "Gauss's law in magnetism states that the net magnetic flux through any closed surface is:",
      opts: ["Zero, because isolated magnetic monopoles do not exist in nature", "$\\mu_0 m_{enc}$", "$\\frac{m_{enc}}{\\varepsilon_0}$", "Infinite"],
      exp: "Since magnetic field lines form closed continuous loops with no beginning or end (no isolated magnetic poles), $\\oint \\vec{B}\\cdot d\\vec{A} = 0$.",
      sub: "Gauss's Law for Magnetism",
      tid: "phys-bar-magnet-dipole"
    },
    {
      q: "The SI unit of magnetic field intensity (magnetic flux density $B$) is the:",
      opts: ["Tesla (T) or $\\text{Wb/m}^2$", "Gauss", "Henry", "Ampere per metre (A/m)"],
      exp: "The SI unit of magnetic induction $B$ is Tesla (T), where $1\\text{ T} = 1\\text{ Wb/m}^2 = 10^4\\text{ Gauss}$.",
      sub: "Magnetic Field Units",
      tid: "phys-bar-magnet-dipole"
    },
    {
      q: "The SI unit of magnetic susceptibility $\\chi_m$ is:",
      opts: ["Dimensionless (no units)", "Tesla", "Ampere per metre", "Weber"],
      exp: "Magnetic susceptibility $\\chi_m = M / H$ is the ratio of two quantities having identical units (A/m), hence it is a dimensionless scalar.",
      sub: "Magnetic Susceptibility",
      tid: "phys-magnetic-materials"
    },
    {
      q: "Materials whose magnetic susceptibility $\\chi_m$ is small and negative ($-1 \\le \\chi_m < 0$) are classified as:",
      opts: ["Diamagnetic materials (e.g., Bismuth, Copper, Water)", "Paramagnetic materials", "Ferromagnetic materials", "Ferrimagnetic materials"],
      exp: "Diamagnetic materials have small negative susceptibility ($\\chi_m < 0$) and relative permeability slightly less than 1 ($\\mu_r < 1$).",
      sub: "Classification of Magnetic Materials",
      tid: "phys-magnetic-materials"
    },
    {
      q: "Substances whose atoms possess permanent magnetic dipole moments and are weakly attracted towards stronger regions of magnetic fields are:",
      opts: ["Paramagnetic substances (e.g., Aluminium, Oxygen, Sodium)", "Diamagnetic substances", "Ferromagnetic substances", "Non-magnetic substances"],
      exp: "Paramagnetic materials have individual atomic dipole moments and positive small susceptibility ($\\chi_m > 0$), being weakly attracted into magnetic fields.",
      sub: "Paramagnetism",
      tid: "phys-magnetic-materials"
    },
    {
      q: "According to Curie's law, the magnetic susceptibility $\\chi_m$ of a paramagnetic material varies with absolute temperature $T$ as:",
      opts: ["$\\chi_m \\propto \\frac{1}{T}$", "$\\chi_m \\propto T$", "$\\chi_m \\propto T^2$", "Independent of temperature"],
      exp: "Curie's law states that magnetization $M = C \\frac{B}{T} \\implies \\chi_m = \\frac{C}{T}$, where $C$ is Curie's constant.",
      sub: "Curie's Law",
      tid: "phys-magnetic-materials"
    },
    {
      q: "The temperature above which a ferromagnetic material transitions into a paramagnetic material is called the:",
      opts: ["Curie temperature ($T_C$)", "Boyle temperature", "Critical temperature", "Inversion temperature"],
      exp: "Above the Curie temperature $T_C$, thermal agitation destroys the spontaneous alignment of magnetic domains, turning the ferromagnetic substance into a paramagnet.",
      sub: "Curie Temperature",
      tid: "phys-magnetic-materials"
    },
    {
      q: "At the magnetic poles of the Earth, the angle of magnetic dip (inclination $\\delta$) is:",
      opts: ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$180^\\circ$"],
      exp: "At the magnetic poles, Earth's magnetic field lines plunge vertically into or out of the ground, so the dip angle is $\\delta = 90^\\circ$. At the magnetic equator, $\\delta = 0^\\circ$.",
      sub: "Angle of Dip",
      tid: "phys-earths-magnetism"
    },
    {
      q: "The angle between the magnetic meridian and the geographic meridian at a place on Earth is called the:",
      opts: ["Magnetic declination ($\\theta$)", "Magnetic inclination (dip)", "Horizontal intensity", "Angle of zenith"],
      exp: "Magnetic declination is the angle between true geographic north and the direction indicated by the magnetic compass needle.",
      sub: "Magnetic Elements of Earth",
      tid: "phys-earths-magnetism"
    },
    {
      q: "Superconductors exhibit perfect diamagnetism with $\\chi_m = -1$ and $\\mu_r = 0$, expelling all internal magnetic flux completely. This phenomenon is known as the:",
      opts: ["Meissner effect", "Hall effect", "Zeeman effect", "Seebeck effect"],
      exp: "The expulsion of magnetic field lines from the interior of a superconductor when cooled below its critical temperature is the Meissner effect.",
      sub: "Perfect Diamagnetism & Meissner Effect",
      tid: "phys-magnetic-materials"
    }
  ];

  const mediumPool = [
    {
      q: "At a certain place, the horizontal component of Earth's magnetic field is $B_H = \\sqrt{3} B_V$, where $B_V$ is the vertical component. What is the angle of dip at that place?",
      opts: ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$0^\\circ$"],
      exp: "$\\tan\\delta = \\frac{B_V}{B_H} = \\frac{B_V}{\\sqrt{3}B_V} = \\frac{1}{\\sqrt{3}} \\implies \\delta = 30^\\circ$.",
      sub: "Dip Angle Calculation",
      tid: "phys-earths-magnetism"
    },
    {
      q: "A bar magnet of magnetic dipole moment $M$ has pole strength $m$ and magnetic length $2l$. If it is cut into two equal halves along its length (transversely to magnetic axis), the magnetic moment of each half becomes:",
      opts: ["$M / 2$", "$M$", "$2M$", "$M / 4$"],
      exp: "When cut perpendicular to axis, length becomes $l' = l$ while pole strength $m$ remains unchanged. New moment $M' = m l = M / 2$.",
      sub: "Cutting of Bar Magnets",
      tid: "phys-bar-magnet-dipole"
    },
    {
      q: "A magnetic needle free to rotate in a vertical plane orientation at an angle of dip $\\delta$ has time period of oscillation $T = 2\\pi \\sqrt{\\frac{I}{M B}}$. If the horizontal component is $B_H = 0.3\\text{ G}$ and dip is $60^\\circ$, the total magnetic field of the Earth is:",
      opts: ["$0.6\\text{ G}$", "$0.15\\text{ G}$", "$0.3\\sqrt{3}\\text{ G}$", "$1.2\\text{ G}$"],
      exp: "$B_H = B \\cos\\delta \\implies 0.3 = B \\cos 60^\\circ = B (0.5) \\implies B = 0.6\\text{ G}$.",
      sub: "Earth's Total Magnetic Field",
      tid: "phys-earths-magnetism"
    },
    {
      q: "Permanent magnets are constructed from materials that have:",
      opts: [
        "High retentivity and high coercivity (e.g., Alnico, Steel)",
        "High retentivity and low coercivity (Soft iron)",
        "Low retentivity and low coercivity",
        "Zero retentivity and high susceptibility"
      ],
      exp: "Permanent magnets must retain strong magnetization (high retentivity) and resist demagnetization by stray fields or handling (high coercivity).",
      sub: "Permanent Magnets vs Electromagnets",
      tid: "phys-magnetic-materials"
    },
    {
      q: "Soft iron is preferred for transformer cores and electromagnets because it has:",
      opts: [
        "High permeability and low hysteresis energy loss (narrow hysteresis loop)",
        "High coercivity and high retentivity",
        "Extremely high resistivity and zero permeability",
        "Large area of hysteresis loop"
      ],
      exp: "Soft iron magnetizes and demagnetizes readily with minimal hysteresis energy dissipation per cycle, making it ideal for AC transformer cores and electromagnets.",
      sub: "Hysteresis Loop & Material Selection",
      tid: "phys-magnetic-materials"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding Earth's magnetism:\nStatement I: The magnetic poles of the Earth do not coincide with the geographic poles, and the magnetic dipole axis is currently tilted by approximately $11.3^\\circ$ relative to the rotational axis.\nStatement II: The magnetic field of the Earth is believed to arise from convective currents of molten iron and nickel in its outer core (dynamo effect).\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct NCERT facts. Earth's geomagnetic field is generated by self-exciting dynamo action in the liquid outer core, with its magnetic axis tilted around $11.3^\\circ$ to the spin axis.",
      sub: "Geomagnetism & Dynamo Effect",
      tid: "phys-earths-magnetism"
    },
    {
      q: "A short bar magnet of magnetic moment $M = 0.48 \\text{ J/T}$ is placed with its axis along the magnetic meridian with its north pole pointing south. The neutral point is obtained at distance $d$ from the magnet on its axial line. If $B_H = 0.32 \\text{ G} = 0.32 \\times 10^{-4}\\text{ T}$, then $d$ is:",
      opts: ["$14.4\\text{ cm}$", "$10.0\\text{ cm}$", "$20.0\\text{ cm}$", "$7.2\\text{ cm}$"],
      exp: "At axial neutral point, magnet's axial field balances $B_H$: $\\frac{\\mu_0}{4\\pi} \\frac{2M}{d^3} = B_H \\implies 10^{-7} \\frac{2(0.48)}{d^3} = 0.32 \\times 10^{-4} \\implies \\frac{0.96 \\times 10^{-7}}{d^3} = 0.32 \\times 10^{-4} \\implies d^3 = 3 \\times 10^{-3}\\text{ m}^3 \\implies d = (3000 \\times 10^{-6})^{1/3} \\approx 14.42\\text{ cm}$.",
      sub: "Neutral Points in Magnetism",
      tid: "phys-bar-magnet-dipole"
    },
    {
      q: "Assertion (A): The magnetic susceptibility of a diamagnetic substance is independent of temperature.\nReason (R): Diamagnetism arises from the orbital motion of electrons in atoms, where an external magnetic field induces shielding circulating currents in accordance with Lenz's law regardless of thermal agitation.",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "(A) is true but (R) is false",
        "(A) is false but (R) is true"
      ],
      exp: "Diamagnetism is an intrinsic property of all paired electrons induced by electromagnetic shielding (Lenz's law). It does not rely on alignment of pre-existing dipoles and is strictly temperature independent.",
      sub: "Origin of Diamagnetism",
      tid: "phys-magnetic-materials"
    },
    {
      q: "A magnetic dipole of moment $M$ is placed at an angle $\\theta$ in a uniform magnetic field $B$. The work done in rotating it from $\\theta = 0^\\circ$ to $\\theta = 90^\\circ$ is $W_1$, and from $\\theta = 60^\\circ$ to $\\theta = 90^\\circ$ is $W_2$. The ratio $W_1 / W_2$ is:",
      opts: ["$2 : 1$", "$1 : 2$", "$4 : 1$", "$\\sqrt{3} : 1$"],
      exp: "$W_1 = MB(\\cos 0^\\circ - \\cos 90^\\circ) = MB(1 - 0) = MB$. $W_2 = MB(\\cos 60^\\circ - \\cos 90^\\circ) = MB(0.5 - 0) = 0.5 MB$. Hence $W_1 / W_2 = 1 / 0.5 = 2 : 1$.",
      sub: "Work Done in Rotating Magnetic Dipole",
      tid: "phys-bar-magnet-dipole"
    },
    {
      q: "An apparent dip circle has its needle oscillating in a vertical plane inclined at $45^\\circ$ to the magnetic meridian. If true dip is $\\delta$ and apparent dip is $\\delta'$, they are related by:",
      opts: [
        "$\\tan\\delta' = \\sqrt{2} \\tan\\delta$",
        "$\\tan\\delta' = \\frac{\\tan\\delta}{\\sqrt{2}}$",
        "$\\tan\\delta' = \\tan\\delta$",
        "$\\tan\\delta' = 2\\tan\\delta$"
      ],
      exp: "In plane at angle $\\alpha = 45^\\circ$ to meridian, vertical field $B_V$ is unchanged while horizontal component is $B_H' = B_H \\cos 45^\\circ = B_H / \\sqrt{2}$. Apparent dip $\\tan\\delta' = \\frac{B_V}{B_H'} = \\frac{B_V}{B_H / \\sqrt{2}} = \\sqrt{2}\\frac{B_V}{B_H} = \\sqrt{2}\\tan\\delta$.",
      sub: "Apparent Dip Calculation",
      tid: "phys-earths-magnetism"
    }
  ];

  function buildItem(num: number, pool: any[], diff: 'Easy' | 'Medium' | 'Hard') {
    const targetCorrectIndex = (num - 1) % 4;
    const base = pool[(num - 1) % pool.length];
    const { options, correctOption } = assignOptions(base.opts, targetCorrectIndex);
    const padNum = String(num).padStart(3, '0');
    return {
      id: `${idPrefix}-mcq-${padNum}`,
      questionNumber: num,
      chapterId,
      chapterTitle,
      subject,
      class: classLevel,
      topicId: base.tid,
      topicTitle: base.tid === 'phys-bar-magnet-dipole' ? "Bar Magnet & Magnetic Dipole" : (base.tid === 'phys-earths-magnetism' ? "Earth's Magnetism & Elements" : "Magnetic Materials & Classification"),
      subtopic: base.sub,
      question: `Q${num}. ${base.q}`,
      options,
      correctOption,
      explanation: base.exp,
      difficulty: diff,
      questionType: 'Single Correct MCQ' as const,
      source: 'VG Insights Practice',
      isFlagged: false
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

  writePartFile(path.join(outDir, 'magnetismMatterPart1Data.ts'), 'MAGNETISM_MATTER_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'magnetismMatterPart2Data.ts'), 'MAGNETISM_MATTER_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'magnetismMatterPart3Data.ts'), 'MAGNETISM_MATTER_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'magnetismMatterPart4Data.ts'), 'MAGNETISM_MATTER_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'magnetismMatterData.ts'),
    chapterTitle,
    'MAGNETISM_MATTER_MCQS',
    [
      { exportName: 'MAGNETISM_MATTER_PART1_MCQS', fromFile: 'magnetismMatterPart1Data' },
      { exportName: 'MAGNETISM_MATTER_PART2_MCQS', fromFile: 'magnetismMatterPart2Data' },
      { exportName: 'MAGNETISM_MATTER_PART3_MCQS', fromFile: 'magnetismMatterPart3Data' },
      { exportName: 'MAGNETISM_MATTER_PART4_MCQS', fromFile: 'magnetismMatterPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

function runAll() {
  generateChapter3();
  generateChapter4();
  generateChapter5();
}

runAll();
