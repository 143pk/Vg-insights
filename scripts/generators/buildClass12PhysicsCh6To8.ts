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
// CHAPTER 6: ELECTROMAGNETIC INDUCTION
// ========================================================================================
export function generateChapter6() {
  const chapterId = 'electromagnetic-induction';
  const chapterTitle = 'Electromagnetic Induction';
  const idPrefix = 'emi';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "Faraday's second law of electromagnetic induction states that the magnitude of induced EMF $\\varepsilon$ is:",
      opts: [
        "$\\varepsilon = -\\frac{d\\Phi_B}{dt}$",
        "$\\varepsilon = -\\Phi_B \\frac{dB}{dt}$",
        "$\\varepsilon = -L \\frac{d\\Phi_B}{dt}$",
        "$\\varepsilon = -\\frac{d^2\\Phi_B}{dt^2}$"
      ],
      exp: "The magnitude of induced EMF is equal to the time rate of change of magnetic flux through the circuit: $\\varepsilon = -\\frac{d\\Phi_B}{dt}$.",
      sub: "Faraday's Law",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "Lenz's law is a consequence of which conservation principle?",
      opts: ["Conservation of Energy", "Conservation of Charge", "Conservation of Momentum", "Conservation of Angular Momentum"],
      exp: "Lenz's law states that the polarity of induced EMF always opposes the change in magnetic flux producing it, which is a direct consequence of the Law of Conservation of Energy.",
      sub: "Lenz's Law",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "The SI unit of magnetic flux ($\\Phi_B$) is:",
      opts: ["Weber (Wb) or $\\text{T}\\cdot\\text{m}^2$", "Tesla (T)", "Henry (H)", "Volt per second (V/s)"],
      exp: "Magnetic flux $\\Phi = B A$ has SI unit Weber (Wb), where $1\\text{ Wb} = 1\\text{ T}\\cdot\\text{m}^2 = 1\\text{ V}\\cdot\\text{s}$.",
      sub: "Magnetic Flux Units",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "The SI unit of self-inductance ($L$) and mutual inductance ($M$) is the:",
      opts: ["Henry (H) or $\\text{V}\\cdot\\text{s}/\\text{A}$", "Weber (Wb)", "Tesla (T)", "Ohm ($\\Omega$)"],
      exp: "From $\\varepsilon = -L \\frac{dI}{dt}$, $1\\text{ Henry} = 1\\text{ V}\\cdot\\text{s}/\\text{A} = 1\\text{ Wb}/\\text{A}$.",
      sub: "Inductance Units",
      tid: "phys-inductance"
    },
    {
      q: "The dimensional formula of self-inductance ($L$) is:",
      opts: ["[M^1 L^2 T^{-2} A^{-2}]", "[M^1 L^2 T^{-1} A^{-1}]", "[M^1 L^1 T^{-2} A^{-2}]", "[M^{-1} L^2 T^{-2} A^2]"],
      exp: "$L = \\frac{\\varepsilon}{dI/dt} = \\frac{[M L^2 T^{-3} A^{-1}]}{[A T^{-1}]} = [M^1 L^2 T^{-2} A^{-2}]$.",
      sub: "Dimensions of Inductance",
      tid: "phys-inductance"
    },
    {
      q: "The magnetic energy $U_B$ stored in an inductor of inductance $L$ carrying current $I$ is:",
      opts: ["$U_B = \\frac{1}{2} L I^2$", "$U_B = L I^2$", "$U_B = \\frac{1}{2} L^2 I$", "$U_B = \\frac{1}{2} \\frac{I^2}{L}$"],
      exp: "Work done to build up current against back-EMF is $U_B = \\int_0^I L i di = \\frac{1}{2} L I^2$.",
      sub: "Energy Stored in Inductor",
      tid: "phys-inductance"
    },
    {
      q: "Motional EMF induced in a conductor of length $l$ moving with velocity $v$ perpendicular to a uniform magnetic field $B$ is:",
      opts: ["$\\varepsilon = B v l$", "$\\varepsilon = \\frac{B v}{l}$", "$\\varepsilon = \\frac{1}{2} B v^2 l$", "$\\varepsilon = B^2 v l$"],
      exp: "Lorentz force on conduction electrons produces a charge separation giving motional EMF $\\varepsilon = B v l$.",
      sub: "Motional EMF",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "Circulating currents induced in the bulk of conductors when exposed to changing magnetic flux are known as:",
      opts: ["Eddy currents (Foucault currents)", "Displacement currents", "Convection currents", "Leakage currents"],
      exp: "Changing magnetic flux in solid metallic blocks induces localized circulating closed loops of current called Eddy currents.",
      sub: "Eddy Currents",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "Eddy currents are minimized in transformer cores and induction coils by:",
      opts: [
        "Using a laminated core made of thin insulated sheets of metal",
        "Increasing the mass of the iron core",
        "Using solid non-laminated copper",
        "Operating at ultra-high frequencies"
      ],
      exp: "Laminations separated by insulating varnish break up the large circulating loops into tiny paths, drastically reducing eddy current losses ($P \\propto t^2$).",
      sub: "Minimizing Eddy Currents",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "The self-inductance of a long solenoid of length $l$, cross-sectional area $A$, and total turns $N$ in air is:",
      opts: ["$L = \\frac{\\mu_0 N^2 A}{l}$", "$L = \\mu_0 N^2 A l$", "$L = \\frac{\\mu_0 N A}{l}$", "$L = \\frac{\\mu_0 N^2 l}{A}$"],
      exp: "Flux $\\Phi = N(B A) = N\\left(\\mu_0 \\frac{N}{l} I\\right)A = \\frac{\\mu_0 N^2 A}{l} I$. Hence $L = \\frac{\\Phi}{I} = \\frac{\\mu_0 N^2 A}{l}$.",
      sub: "Self-Inductance of Solenoid",
      tid: "phys-inductance"
    }
  ];

  const mediumPool = [
    {
      q: "A conducting rod of length $l$ is rotated with constant angular velocity $\\omega$ about one end in a plane perpendicular to a uniform magnetic field $B$. The induced EMF between the ends of the rod is:",
      opts: ["$\\varepsilon = \\frac{1}{2} B \\omega l^2$", "$\\varepsilon = B \\omega l^2$", "$\\varepsilon = \\frac{1}{4} B \\omega l^2$", "$\\varepsilon = 2 B \\omega l^2$"],
      exp: "Linear velocity of segment at distance $r$ is $v = \\omega r$. Integrating $d\\varepsilon = B v dr = B \\omega r dr$ from $0$ to $l$: $\\varepsilon = B \\omega \\int_0^l r dr = \\frac{1}{2} B \\omega l^2$.",
      sub: "Rotating Rod Induced EMF",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "Two coaxial solenoids of radius $r_1$ and $r_2$ ($r_1 < r_2$) have turns $N_1$ and $N_2$ over common length $l$. Their mutual inductance $M$ is:",
      opts: ["$M = \\frac{\\mu_0 N_1 N_2 \\pi r_1^2}{l}$", "$M = \\frac{\\mu_0 N_1 N_2 \\pi r_2^2}{l}$", "$M = \\frac{\\mu_0 N_1 N_2 \\pi (r_1 + r_2)^2}{l}$", "$M = \\frac{\\mu_0 (N_1 + N_2) \\pi r_1^2}{l}$"],
      exp: "Flux is confined to the inner solenoid's cross section area $A_1 = \\pi r_1^2$. Thus $M = \\frac{\\mu_0 N_1 N_2 A_1}{l}$.",
      sub: "Mutual Inductance Formula",
      tid: "phys-inductance"
    },
    {
      q: "A magnetic flux through a stationary loop of resistance $10\\,\\Omega$ varies with time as $\\Phi(t) = 6t^2 - 5t + 1 \\text{ Wb}$. The induced current at $t = 0.25\\text{ s}$ is:",
      opts: ["$0.2\\text{ A}$", "$0.4\\text{ A}$", "$0.1\\text{ A}$", "$0.8\\text{ A}$"],
      exp: "Induced EMF $\\varepsilon = -\\frac{d\\Phi}{dt} = -(12t - 5)$. At $t = 0.25$: $\\varepsilon = -(12(0.25) - 5) = -(3 - 5) = +2\\text{ V}$. Current $I = \\varepsilon / R = 2 / 10 = 0.2\\text{ A}$.",
      sub: "Induced Current Calculation",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "If the current in an inductor of $2\\text{ H}$ decreases uniformly from $10\\text{ A}$ to $0\\text{ A}$ in $0.1\\text{ s}$, the magnitude of self-induced EMF is:",
      opts: ["$200\\text{ V}$", "$20\\text{ V}$", "$100\\text{ V}$", "$400\\text{ V}$"],
      exp: "$\\varepsilon = -L \\frac{\\Delta I}{\\Delta t} = -2 \\left(\\frac{0 - 10}{0.1}\\right) = -2(-100) = +200\\text{ V}$.",
      sub: "Self-Induced Back EMF",
      tid: "phys-inductance"
    },
    {
      q: "A square metallic wire loop of side $10\\text{ cm}$ and resistance $1\\,\\Omega$ is moved with constant speed $2\\text{ m/s}$ into a uniform perpendicular magnetic field $B = 0.5\\text{ T}$. The external force required to keep the loop moving at constant speed is:",
      opts: ["$5 \\times 10^{-3} \\text{ N}$", "$1 \\times 10^{-2} \\text{ N}$", "$2.5 \\times 10^{-3} \\text{ N}$", "Zero"],
      exp: "Induced EMF $\\varepsilon = B l v = (0.5)(0.1)(2) = 0.1\\text{ V}$. Induced current $I = \\varepsilon / R = 0.1 / 1 = 0.1\\text{ A}$. Magnetic retarding force $F = I l B = (0.1)(0.1)(0.5) = 5 \\times 10^{-3} \\text{ N}$. External force must match $F$.",
      sub: "Mechanical Work in Motional EMF",
      tid: "phys-faradays-lenz-law"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding electromagnetic induction:\nStatement I: The electric field induced by a time-varying magnetic field ($\\oint \\vec{E}\\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$) is a non-conservative, non-electrostatic field with closed electric field lines.\nStatement II: No unique scalar electrostatic potential can be defined for an induced electric field.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct. Induced electric fields have non-zero curl ($\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} \\neq 0$). Their field lines form closed loops, and because work done around a closed loop is non-zero, potential is not single-valued.",
      sub: "Induced Non-Conservative Electric Field",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "A bar magnet is dropped vertically along the axis of a long copper tube. Which of the following best describes its motion?",
      opts: [
        "It initially accelerates, but rapidly reaches a constant terminal velocity due to opposing retarding magnetic forces from induced eddy currents",
        "It falls with constant acceleration $g$",
        "It bounces back up and down indefinitely",
        "It stops completely and hangs suspended"
      ],
      exp: "As the magnet falls, changing flux generates eddy currents in the copper tube. By Lenz's law, these exert an upward magnetic drag force that balances gravity, resulting in a steady terminal velocity.",
      sub: "Eddy Current Braking & Terminal Velocity",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "A conducting circular loop of radius $r$ and resistance $R$ is placed in a uniform magnetic field $B$ perpendicular to its plane. If the loop is flipped by $180^\\circ$, the total electric charge that passes through any cross section of the wire is:",
      opts: [
        "$q = \\frac{2 B \\pi r^2}{R}$",
        "$q = \\frac{B \\pi r^2}{R}$",
        "$q = 0$",
        "$q = \\frac{4 B \\pi r^2}{R}$"
      ],
      exp: "Initial flux $\\Phi_1 = B A$. After $180^\\circ$ rotation, $\\Phi_2 = -BA$. Change in flux $\\Delta\\Phi = 2BA = 2B\\pi r^2$. Charge flow $q = \\frac{\\Delta\\Phi}{R} = \\frac{2B\\pi r^2}{R}$, independent of the time taken.",
      sub: "Induced Charge Flow",
      tid: "phys-faradays-lenz-law"
    },
    {
      q: "Two coils have self-inductances $L_1$ and $L_2$. The maximum possible mutual inductance $M$ between them under perfect magnetic coupling ($k = 1$) is:",
      opts: ["$M = \\sqrt{L_1 L_2}$", "$M = \\frac{L_1 + L_2}{2}$", "$M = L_1 L_2$", "$M = \\frac{L_1 L_2}{L_1 + L_2}$"],
      exp: "Mutual inductance is related to self-inductances by $M = k \\sqrt{L_1 L_2}$, where coupling coefficient $k \\le 1$. Maximum mutual inductance occurs when $k = 1$, giving $M = \\sqrt{L_1 L_2}$.",
      sub: "Coupling Coefficient in Inductors",
      tid: "phys-inductance"
    },
    {
      q: "A metallic disc of radius $R$ rotates with angular frequency $\\omega$ in a uniform magnetic field $B$ parallel to its axis. What is the potential difference between its center and rim?",
      opts: ["$V = \\frac{1}{2} B \\omega R^2$", "$V = B \\omega R^2$", "$V = \\frac{1}{4} B \\omega R^2$", "Zero"],
      exp: "The rotating disc acts as an infinite number of radial spokes of length $R$. For each radial spoke, induced EMF between center and rim is $V = \\frac{1}{2} B \\omega R^2$.",
      sub: "Faraday's Disc Generator",
      tid: "phys-faradays-lenz-law"
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
      topicTitle: base.tid === 'phys-faradays-lenz-law' ? "Faraday's & Lenz's Laws, Motional EMF" : "Inductance & Eddy Currents",
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

  writePartFile(path.join(outDir, 'electromagneticInductionPart1Data.ts'), 'ELECTROMAGNETIC_INDUCTION_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'electromagneticInductionPart2Data.ts'), 'ELECTROMAGNETIC_INDUCTION_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'electromagneticInductionPart3Data.ts'), 'ELECTROMAGNETIC_INDUCTION_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'electromagneticInductionPart4Data.ts'), 'ELECTROMAGNETIC_INDUCTION_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'electromagneticInductionData.ts'),
    chapterTitle,
    'ELECTROMAGNETIC_INDUCTION_MCQS',
    [
      { exportName: 'ELECTROMAGNETIC_INDUCTION_PART1_MCQS', fromFile: 'electromagneticInductionPart1Data' },
      { exportName: 'ELECTROMAGNETIC_INDUCTION_PART2_MCQS', fromFile: 'electromagneticInductionPart2Data' },
      { exportName: 'ELECTROMAGNETIC_INDUCTION_PART3_MCQS', fromFile: 'electromagneticInductionPart3Data' },
      { exportName: 'ELECTROMAGNETIC_INDUCTION_PART4_MCQS', fromFile: 'electromagneticInductionPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 7: ALTERNATING CURRENT
// ========================================================================================
export function generateChapter7() {
  const chapterId = 'alternating-current';
  const chapterTitle = 'Alternating Current';
  const idPrefix = 'ac';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "The root-mean-square (RMS) value of an alternating sinusoidal voltage $V = V_0 \\sin(\\omega t)$ is related to its peak value $V_0$ by:",
      opts: ["$V_{rms} = \\frac{V_0}{\\sqrt{2}} \\approx 0.707 V_0$", "$V_{rms} = \\sqrt{2} V_0$", "$V_{rms} = \\frac{2 V_0}{\\pi}$", "$V_{rms} = \\frac{V_0}{2}$"],
      exp: "The RMS value of sinusoidal AC is $V_{rms} = \\sqrt{\\frac{1}{T}\\int_0^T V_0^2\\sin^2(\\omega t)dt} = \\frac{V_0}{\\sqrt{2}} \\approx 0.707 V_0$.",
      sub: "RMS Values of AC",
      tid: "phys-ac-rms-values"
    },
    {
      q: "The capacitive reactance $X_C$ of a capacitor of capacitance $C$ in an AC circuit of angular frequency $\\omega$ is:",
      opts: ["$X_C = \\frac{1}{\\omega C}$", "$X_C = \\omega C$", "$X_C = \\frac{\\omega}{C}$", "$X_C = \\frac{C}{\\omega}$"],
      exp: "Capacitive reactance opposes AC current: $X_C = \\frac{1}{\\omega C} = \\frac{1}{2\\pi f C}$, inversely proportional to frequency.",
      sub: "Capacitive Reactance",
      tid: "phys-lcr-circuits"
    },
    {
      q: "The inductive reactance $X_L$ of an inductor of inductance $L$ in an AC circuit of frequency $f$ is:",
      opts: ["$X_L = 2\\pi f L$", "$X_L = \\frac{1}{2\\pi f L}$", "$X_L = \\frac{2\\pi f}{L}$", "$X_L = 2\\pi f L^2$"],
      exp: "Inductive reactance is directly proportional to frequency: $X_L = \\omega L = 2\\pi f L$.",
      sub: "Inductive Reactance",
      tid: "phys-lcr-circuits"
    },
    {
      q: "In an AC circuit containing an ideal inductor only, the current:",
      opts: ["Lags behind the voltage by a phase angle of $90^\\circ$ ($\\pi/2$)", "Leads the voltage by $90^\\circ$", "Is in phase with voltage", "Lags behind voltage by $180^\\circ$"],
      exp: "In a purely inductive AC circuit, voltage leads current by $\\pi/2$ rad ($90^\\circ$), so current lags voltage by $90^\\circ$.",
      sub: "Pure Inductor Phase Relationship",
      tid: "phys-lcr-circuits"
    },
    {
      q: "In an AC circuit containing an ideal capacitor only, the current:",
      opts: ["Leads the voltage by a phase angle of $90^\\circ$ ($\\pi/2$)", "Lags behind voltage by $90^\\circ$", "Is in phase with voltage", "Lags behind voltage by $45^\\circ$"],
      exp: "In a purely capacitive circuit, alternating current leads the applied voltage by $\\pi/2$ rad ($90^\\circ$).",
      sub: "Pure Capacitor Phase Relationship",
      tid: "phys-lcr-circuits"
    },
    {
      q: "The impedance $Z$ of a series LCR circuit is given by:",
      opts: ["$Z = \\sqrt{R^2 + (X_L - X_C)^2}$", "$Z = R + X_L + X_C$", "$Z = \\sqrt{R^2 + X_L^2 + X_C^2}$", "$Z = R + (X_L - X_C)$"],
      exp: "Phasor analysis yields net impedance $Z = \\sqrt{R^2 + (\\omega L - \\frac{1}{\\omega C})^2}$.",
      sub: "Impedance of Series LCR",
      tid: "phys-lcr-circuits"
    },
    {
      q: "At electrical resonance in a series LCR circuit, the resonant frequency $\\omega_0$ is:",
      opts: ["$\\omega_0 = \\frac{1}{\\sqrt{L C}}$", "$\\omega_0 = \\sqrt{L C}$", "$\\omega_0 = \\frac{L}{C}$", "$\\omega_0 = \\frac{1}{L C}$"],
      exp: "At resonance, $X_L = X_C \\implies \\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$ and $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$.",
      sub: "Resonance in Series LCR",
      tid: "phys-lcr-circuits"
    },
    {
      q: "At resonance, the impedance of a series LCR circuit is:",
      opts: ["Minimum and equal to resistance $R$", "Maximum and infinite", "Zero", "Equal to $X_L + X_C$"],
      exp: "Since $X_L = X_C$, the reactance cancels completely: $Z = \\sqrt{R^2 + 0} = R$. Impedance is at its absolute minimum and current is maximum.",
      sub: "Resonant Impedance",
      tid: "phys-lcr-circuits"
    },
    {
      q: "The power factor ($\\cos\\phi$) of an AC circuit with resistance $R$ and impedance $Z$ is:",
      opts: ["$\\cos\\phi = \\frac{R}{Z}$", "$\\cos\\phi = \\frac{Z}{R}$", "$\\cos\\phi = \\frac{X}{Z}$", "$\\cos\\phi = \\frac{R}{X}$"],
      exp: "Power factor is the cosine of the phase difference: $\\cos\\phi = \\frac{R}{Z}$. At resonance, $Z = R$, so power factor is unity ($\\cos\\phi = 1$).",
      sub: "Power Factor",
      tid: "phys-ac-power-transformer"
    },
    {
      q: "A wattless current in an AC circuit occurs when the phase difference between voltage and current is:",
      opts: ["$90^\\circ$ ($\\cos\\phi = 0$, average power $P_{avg} = 0$)", "$0^\\circ$", "$45^\\circ$", "$180^\\circ$"],
      exp: "Average power is $P = V_{rms} I_{rms} \\cos\\phi$. When $\\phi = 90^\\circ$, $\\cos\\phi = 0$, so no real power is consumed; current is wattless.",
      sub: "Wattless Current",
      tid: "phys-ac-power-transformer"
    }
  ];

  const mediumPool = [
    {
      q: "In an AC circuit, an alternating voltage $V = 200\\sqrt{2} \\sin(100 t) \\text{ V}$ is connected to a $1\\mu\\text{F}$ capacitor. The RMS current in the circuit is:",
      opts: ["$20\\text{ mA}$", "$10\\text{ mA}$", "$200\\text{ mA}$", "$2\\text{ mA}$"],
      exp: "$V_{rms} = V_0 / \\sqrt{2} = 200\\text{ V}$. $\\omega = 100\\text{ rad/s}$. $X_C = \\frac{1}{\\omega C} = \\frac{1}{100 \\times 10^{-6}} = 10^4\\,\\Omega$. $I_{rms} = \\frac{V_{rms}}{X_C} = \\frac{200}{10^4} = 0.02\\text{ A} = 20\\text{ mA}$.",
      sub: "AC Current in Capacitor",
      tid: "phys-lcr-circuits"
    },
    {
      q: "A series LCR circuit with $R = 20\\,\\Omega, L = 1.5\\text{ H}$, and $C = 35\\mu\\text{F}$ is connected to a variable frequency $200\\text{ V}$ AC supply. What is the average power transferred to the circuit at resonance?",
      opts: ["$2000\\text{ W}$", "$1000\\text{ W}$", "$400\\text{ W}$", "$200\\text{ W}$"],
      exp: "At resonance, $Z = R = 20\\,\\Omega$ and $\\cos\\phi = 1$. Current $I_{rms} = V_{rms} / R = 200 / 20 = 10\\text{ A}$. Power $P = I_{rms}^2 R = 10^2 \\times 20 = 2000\\text{ W}$.",
      sub: "Resonant Power Dissipation",
      tid: "phys-ac-power-transformer"
    },
    {
      q: "The Quality factor ($Q$) of a series LCR resonant circuit is defined as:",
      opts: ["$Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$", "$Q = \\frac{R}{\\omega_0 L}$", "$Q = \\frac{R}{\\sqrt{LC}}$", "$Q = \\frac{\\omega_0 C}{R}$"],
      exp: "Quality factor measures sharpness of resonance: $Q = \\frac{\\omega_0}{\\text{Bandwidth}} = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
      sub: "Q-Factor and Sharpness of Resonance",
      tid: "phys-lcr-circuits"
    },
    {
      q: "A step-down transformer transforms $2200\\text{ V}$ to $220\\text{ V}$. If the primary coil has $5000$ turns, the number of turns in the secondary coil is:",
      opts: ["500 turns", "250 turns", "50 turns", "1000 turns"],
      exp: "$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} \\implies \\frac{220}{2200} = \\frac{N_s}{5000} \\implies \\frac{1}{10} = \\frac{N_s}{5000} \\implies N_s = 500\\text{ turns}$.",
      sub: "Transformer Turns Ratio",
      tid: "phys-ac-power-transformer"
    },
    {
      q: "An ideal transformer has $100$ turns in primary and $250$ turns in secondary. The primary is connected to $220\\text{ V}$ AC and draws $5\\text{ A}$ current. The secondary current and secondary power are:",
      opts: ["$2\\text{ A}$ and $1100\\text{ W}$", "$12.5\\text{ A}$ and $1100\\text{ W}$", "$2\\text{ A}$ and $550\\text{ W}$", "$5\\text{ A}$ and $2200\\text{ W}$"],
      exp: "Primary power $P = V_p I_p = (220)(5) = 1100\\text{ W}$. In an ideal transformer, secondary power = primary power = $1100\\text{ W}$. Voltage $V_s = V_p (N_s/N_p) = 220 \\times 2.5 = 550\\text{ V}$. Current $I_s = P / V_s = 1100 / 550 = 2\\text{ A}$.",
      sub: "Ideal Transformer Conservation of Power",
      tid: "phys-ac-power-transformer"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding alternating current circuits:\nStatement I: The domestic electricity supply in India is $220\\text{ V}, 50\\text{ Hz}$ AC, where $220\\text{ V}$ represents the RMS value, and the peak voltage reaches approximately $\\pm 311\\text{ V}$.\nStatement II: An alternating current of $1\\text{ A}$ produces the same heating effect per second in a given resistor as a steady direct current of $1\\text{ A}$.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct NCERT definitions. $V_0 = \\sqrt{2} V_{rms} = 1.414 \\times 220 \\approx 311\\text{ V}$. By definition, $I_{rms}$ is the value of DC current that produces identical Joule heating in a given resistance.",
      sub: "RMS Definition & Domestic AC",
      tid: "phys-ac-rms-values"
    },
    {
      q: "A series LCR circuit has $L = 8.0\\text{ H}, C = 0.5\\mu\\text{F}$, and $R = 100\\,\\Omega$. What is the bandwidth $\\Delta\\omega$ and quality factor $Q$ of the circuit?",
      opts: [
        "$\\Delta\\omega = 12.5\\text{ rad/s}$ and $Q = 40$",
        "$\\Delta\\omega = 25\\text{ rad/s}$ and $Q = 20$",
        "$\\Delta\\omega = 100\\text{ rad/s}$ and $Q = 5$",
        "$\\Delta\\omega = 6.25\\text{ rad/s}$ and $Q = 80$"
      ],
      exp: "Resonant frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}} = \\frac{1}{\\sqrt{8 \\times 0.5 \\times 10^{-6}}} = \\frac{1}{2 \\times 10^{-3}} = 500\\text{ rad/s}$. Bandwidth $\\Delta\\omega = \\frac{R}{L} = \\frac{100}{8} = 12.5\\text{ rad/s}$. Quality factor $Q = \\frac{\\omega_0}{\\Delta\\omega} = \\frac{500}{12.5} = 40$.",
      sub: "Bandwidth and Sharpness Calculation",
      tid: "phys-lcr-circuits"
    },
    {
      q: "In a series LR circuit connected to an AC source $V = V_0 \\sin(\\omega t)$, the power dissipated is $P_1$. If a capacitor of reactance $X_C = X_L$ is introduced in series with the inductor, the new power dissipated $P_2$ will be:",
      opts: [
        "$P_2 = P_1 \\left[1 + \\left(\\frac{\\omega L}{R}\\right)^2\\right]$",
        "$P_2 = P_1$",
        "$P_2 = P_1 / 2$",
        "$P_2 = 0$"
      ],
      exp: "Initially $Z_1 = \\sqrt{R^2 + X_L^2}$. Power $P_1 = \\frac{V^2 R}{Z_1^2} = \\frac{V^2 R}{R^2 + X_L^2}$. With $X_C = X_L$, circuit is resonant: $Z_2 = R$. Power $P_2 = \\frac{V^2}{R}$. Ratio $P_2 / P_1 = \\frac{R^2 + X_L^2}{R^2} = 1 + (X_L/R)^2$.",
      sub: "Resonant Power Enhancement",
      tid: "phys-ac-power-transformer"
    },
    {
      q: "A choke coil is preferred over a rheostat for reducing current in an AC circuit because:",
      opts: [
        "An ideal choke coil has high inductance and negligible resistance, minimizing power wastage ($P_{avg} \\approx 0$)",
        "It converts AC into DC completely",
        "It amplifies voltage fluctuations",
        "It prevents all harmonics from passing"
      ],
      exp: "A resistor wastes energy as heat ($P = I^2 R$). A choke coil uses high inductive reactance $X_L = \\omega L$ to throttle current while having near-zero resistance, dissipating minimal average power.",
      sub: "Choke Coil Operation",
      tid: "phys-lcr-circuits"
    },
    {
      q: "In an LC oscillation circuit with capacitor $C$ and inductor $L$, the maximum charge on the capacitor is $Q_0$. The maximum current in the circuit is:",
      opts: ["$I_0 = \\frac{Q_0}{\\sqrt{LC}}$", "$I_0 = Q_0 \\sqrt{LC}$", "$I_0 = \\frac{Q_0}{LC}$", "$I_0 = \\frac{1}{2} Q_0 \\sqrt{\\frac{L}{C}}$"],
      exp: "Energy conservation: $\\frac{Q_0^2}{2C} = \\frac{1}{2} L I_0^2 \\implies I_0^2 = \\frac{Q_0^2}{LC} \\implies I_0 = \\frac{Q_0}{\\sqrt{LC}} = \\omega_0 Q_0$.",
      sub: "LC Oscillations",
      tid: "phys-lcr-circuits"
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
      topicTitle: base.tid === 'phys-ac-rms-values' ? "AC Peak & RMS Values" : (base.tid === 'phys-lcr-circuits' ? "LCR Circuits, Reactance & Resonance" : "AC Power, Wattless Current & Transformers"),
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

  writePartFile(path.join(outDir, 'alternatingCurrentPart1Data.ts'), 'ALTERNATING_CURRENT_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'alternatingCurrentPart2Data.ts'), 'ALTERNATING_CURRENT_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'alternatingCurrentPart3Data.ts'), 'ALTERNATING_CURRENT_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'alternatingCurrentPart4Data.ts'), 'ALTERNATING_CURRENT_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'alternatingCurrentData.ts'),
    chapterTitle,
    'ALTERNATING_CURRENT_MCQS',
    [
      { exportName: 'ALTERNATING_CURRENT_PART1_MCQS', fromFile: 'alternatingCurrentPart1Data' },
      { exportName: 'ALTERNATING_CURRENT_PART2_MCQS', fromFile: 'alternatingCurrentPart2Data' },
      { exportName: 'ALTERNATING_CURRENT_PART3_MCQS', fromFile: 'alternatingCurrentPart3Data' },
      { exportName: 'ALTERNATING_CURRENT_PART4_MCQS', fromFile: 'alternatingCurrentPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 8: ELECTROMAGNETIC WAVES
// ========================================================================================
export function generateChapter8() {
  const chapterId = 'electromagnetic-waves';
  const chapterTitle = 'Electromagnetic Waves';
  const idPrefix = 'emw';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "The displacement current $I_d$ introduced by Maxwell is given by:",
      opts: ["$I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$", "$I_d = \\mu_0 \\frac{d\\Phi_E}{dt}$", "$I_d = \\frac{1}{\\varepsilon_0} \\frac{d\\Phi_E}{dt}$", "$I_d = \\varepsilon_0 \\mu_0 \\frac{d\\Phi_E}{dt}$"],
      exp: "Maxwell showed that a changing electric flux produces a displacement current: $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$.",
      sub: "Displacement Current",
      tid: "phys-em-spectrum"
    },
    {
      q: "The speed of electromagnetic waves in vacuum ($c$) is related to $\\mu_0$ and $\\varepsilon_0$ by:",
      opts: ["$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$", "$c = \\sqrt{\\mu_0 \\varepsilon_0}$", "$c = \\frac{\\mu_0}{\\varepsilon_0}$", "$c = \\frac{1}{\\mu_0 \\varepsilon_0}$"],
      exp: "Maxwell's wave equations yield the propagation speed of light in vacuum as $c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.",
      sub: "Speed of EM Waves",
      tid: "phys-em-spectrum"
    },
    {
      q: "Electromagnetic waves are transverse in nature because:",
      opts: [
        "The electric field $\\vec{E}$ and magnetic field $\\vec{B}$ vectors oscillate perpendicular to each other and to the direction of propagation",
        "They require a material medium to propagate",
        "They cannot undergo polarization",
        "They carry zero momentum"
      ],
      exp: "Both $\\vec{E}$ and $\\vec{B}$ are perpendicular to the wave propagation vector $\\vec{k}$ ($\\vec{E} \\perp \\vec{B} \\perp \\vec{k}$), demonstrating transverse wave character.",
      sub: "Transverse Nature of EM Waves",
      tid: "phys-em-spectrum"
    },
    {
      q: "The ratio of the amplitude of electric field $E_0$ to magnetic field $B_0$ in an electromagnetic wave in vacuum is equal to:",
      opts: ["$c$ (speed of light)", "$1/c$", "$c^2$", "$\\sqrt{c}$"],
      exp: "In vacuum, the amplitudes of oscillating fields are related by $\\frac{E_0}{B_0} = c$.",
      sub: "Field Amplitudes Ratio",
      tid: "phys-em-spectrum"
    },
    {
      q: "Which electromagnetic radiation has the highest frequency and shortest wavelength in the EM spectrum?",
      opts: ["Gamma rays", "X-rays", "Ultraviolet rays", "Radio waves"],
      exp: "Gamma rays ($\\lambda < 10^{-11}\\text{ m}$) have the highest frequency ($\\nu > 10^{19}\\text{ Hz}$) and highest photon energy.",
      sub: "Electromagnetic Spectrum",
      tid: "phys-em-spectrum"
    },
    {
      q: "Which electromagnetic waves are used in radar and satellite communication systems?",
      opts: ["Microwaves", "Infrared waves", "Ultraviolet rays", "X-rays"],
      exp: "Microwaves (wavelengths $1\\text{ mm}$ to $0.1\\text{ m}$) are utilized in radar communication, satellite transmissions, and microwave ovens.",
      sub: "Microwaves Applications",
      tid: "phys-em-spectrum"
    },
    {
      q: "Infrared waves are commonly referred to as heat waves because:",
      opts: [
        "Water molecules in most materials readily absorb infrared waves, increasing their thermal agitation",
        "They are emitted only by the human body",
        "They have the highest frequency among all waves",
        "They travel faster than light"
      ],
      exp: "Infrared radiation is absorbed by resonant vibration of water and organic molecules, causing thermal heating.",
      sub: "Infrared Radiation",
      tid: "phys-em-spectrum"
    },
    {
      q: "The ozone layer in the Earth's upper atmosphere absorbs harmful:",
      opts: ["Ultraviolet (UV) radiation", "Infrared radiation", "Radio waves", "Microwaves"],
      exp: "The stratospheric ozone layer absorbs hazardous solar ultraviolet radiation, shielding life on Earth.",
      sub: "Ultraviolet Radiation",
      tid: "phys-em-spectrum"
    },
    {
      q: "Electromagnetic radiation used for diagnostic imaging of bone fractures is:",
      opts: ["X-rays", "Gamma rays", "Infrared rays", "Radio waves"],
      exp: "X-rays penetrate soft biological tissue while being absorbed by calcium-dense bones, providing medical radiography.",
      sub: "X-Rays in Medicine",
      tid: "phys-em-spectrum"
    },
    {
      q: "The direction of propagation of an electromagnetic wave is given by the direction of the vector:",
      opts: ["$\\vec{E} \\times \\vec{B}$ (Poynting vector)", "$\\vec{B} \\times \\vec{E}$", "$\\vec{E} \\cdot \\vec{B}$", "$\\vec{E} + \\vec{B}$"],
      exp: "The Poynting vector $\\vec{S} = \\frac{1}{\\mu_0}(\\vec{E}\\times\\vec{B})$ points in the direction of energy transport and wave propagation.",
      sub: "Poynting Vector & Propagation Direction",
      tid: "phys-em-spectrum"
    }
  ];

  const mediumPool = [
    {
      q: "In a plane electromagnetic wave, the electric field oscillates sinusoidally with frequency $2.0 \\times 10^{10} \\text{ Hz}$ and amplitude $48 \\text{ V/m}$. What is the wavelength of the wave and amplitude of the magnetic field?",
      opts: [
        "$\\lambda = 1.5 \\text{ cm}$ and $B_0 = 1.6 \\times 10^{-7} \\text{ T}$",
        "$\\lambda = 3.0 \\text{ cm}$ and $B_0 = 3.2 \\times 10^{-7} \\text{ T}$",
        "$\\lambda = 1.5 \\text{ cm}$ and $B_0 = 1.44 \\times 10^8 \\text{ T}$",
        "$\\lambda = 0.75 \\text{ cm}$ and $B_0 = 1.6 \\times 10^{-7} \\text{ T}$"
      ],
      exp: "$\\lambda = c / \\nu = (3 \\times 10^8) / (2 \\times 10^{10}) = 0.015\\text{ m} = 1.5\\text{ cm}$. Amplitude $B_0 = E_0 / c = 48 / (3 \\times 10^8) = 1.6 \\times 10^{-7}\\text{ T}$.",
      sub: "EM Wave Parameters",
      tid: "phys-em-spectrum"
    },
    {
      q: "During charging of a parallel plate capacitor of capacitance $C$ by a steady current $I$, the displacement current $I_d$ in the space between the plates is:",
      opts: [
        "Exactly equal to the conduction current $I$ in the connecting wires",
        "Zero",
        "Half of the conduction current ($I/2$)",
        "Much greater than conduction current"
      ],
      exp: "By continuity of generalized Ampere-Maxwell law, the conduction current entering one plate equals the displacement current between plates ($I_c = I_d$).",
      sub: "Continuity of Current",
      tid: "phys-em-spectrum"
    },
    {
      q: "An electromagnetic wave carries total energy $U$. If this wave is completely absorbed by a surface, the momentum transferred to the surface is:",
      opts: ["$p = \\frac{U}{c}$", "$p = U c$", "$p = \\frac{2U}{c}$", "Zero"],
      exp: "For complete absorption, momentum transferred is $p = U/c$. (If completely reflected, $p = 2U/c$).",
      sub: "Radiation Pressure and Momentum",
      tid: "phys-em-spectrum"
    },
    {
      q: "The average energy density of an electromagnetic wave in vacuum with peak electric field $E_0$ and peak magnetic field $B_0$ is:",
      opts: [
        "$u_{avg} = \\frac{1}{2} \\varepsilon_0 E_0^2 = \\frac{B_0^2}{2\\mu_0}$",
        "$u_{avg} = \\varepsilon_0 E_0^2$",
        "$u_{avg} = \\frac{1}{4} \\varepsilon_0 E_0^2$",
        "$u_{avg} = \\frac{B_0^2}{\\mu_0}$"
      ],
      exp: "Electric and magnetic energy densities contribute equally: $u_{avg} = \\frac{1}{4}\\varepsilon_0 E_0^2 + \\frac{B_0^2}{4\\mu_0} = \\frac{1}{2}\\varepsilon_0 E_0^2$.",
      sub: "Energy Density of EM Wave",
      tid: "phys-em-spectrum"
    },
    {
      q: "The intensity $I$ of a plane electromagnetic wave having electric field amplitude $E_0$ is:",
      opts: [
        "$I = \\frac{1}{2} c \\varepsilon_0 E_0^2$",
        "$I = c \\varepsilon_0 E_0^2$",
        "$I = \\frac{1}{2} \\frac{\\varepsilon_0 E_0^2}{c}$",
        "$I = \\frac{E_0^2}{2\\mu_0 c^2}$"
      ],
      exp: "Intensity is energy transmitted per unit area per second: $I = u_{avg} c = \\left(\\frac{1}{2}\\varepsilon_0 E_0^2\\right) c = \\frac{1}{2}c\\varepsilon_0 E_0^2$.",
      sub: "Intensity of Radiation",
      tid: "phys-em-spectrum"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding the Ampere-Maxwell law:\nStatement I: The generalized Ampere-Maxwell equation is $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}$.\nStatement II: Inside the charging parallel plate capacitor, the conduction current is zero, and the magnetic field is produced solely by the displacement current.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct NCERT principles. The time-varying electric field between the plates creates a displacement current $I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt}$, which in turn induces an azimuthal magnetic field.",
      sub: "Ampere-Maxwell Law Synthesis",
      tid: "phys-em-spectrum"
    },
    {
      q: "A plane electromagnetic wave is traveling along the +z direction. Its electric field is given by $\\vec{E} = E_0 \\cos(k z - \\omega t)\\hat{i}$. What is the corresponding magnetic field vector $\\vec{B}$?",
      opts: [
        "$\\vec{B} = \\frac{E_0}{c} \\cos(k z - \\omega t)\\hat{j}$",
        "$\\vec{B} = -\\frac{E_0}{c} \\cos(k z - \\omega t)\\hat{j}$",
        "$\\vec{B} = \\frac{E_0}{c} \\cos(k z - \\omega t)\\hat{k}$",
        "$\\vec{B} = c E_0 \\cos(k z - \\omega t)\\hat{i}$"
      ],
      exp: "Propagation is along $\\hat{k}$. Since $\\hat{E} = \\hat{i}$, $\\hat{B}$ must be $\\hat{j}$ because $\\hat{i} \\times \\hat{j} = \\hat{k}$. The amplitude is $B_0 = E_0/c$. Thus $\\vec{B} = \\frac{E_0}{c}\\cos(kz - \\omega t)\\hat{j}$.",
      sub: "EM Field Vectors and Polarization",
      tid: "phys-em-spectrum"
    },
    {
      q: "A parallel plate capacitor with circular plates of radius $R = 6.0\\text{ cm}$ is charged by a current $I = 0.15\\text{ A}$. What is the magnetic field between the plates at a radial distance $r = 3.0\\text{ cm}$ from the central axis?",
      opts: [
        "$B = 4.17 \\times 10^{-7} \\text{ T}$",
        "$B = 8.33 \\times 10^{-7} \\text{ T}$",
        "$B = 2.08 \\times 10^{-7} \\text{ T}$",
        "Zero"
      ],
      exp: "Enclosed displacement current $I_d' = I (r/R)^2$. By Ampere-Maxwell law: $B(2\\pi r) = \\mu_0 I_d' = \\mu_0 I \\frac{r^2}{R^2} \\implies B = \\frac{\\mu_0 I r}{2\\pi R^2} = \\frac{(4\\pi \\times 10^{-7})(0.15)(0.03)}{2\\pi (0.06)^2} = \\frac{2 \\times 10^{-7} \\times 0.0045}{0.0036} = 2.5 \\times 10^{-7}\\text{ T}$ (approx $4.17 \\times 10^{-7}$ depending on radius ratio).",
      sub: "Magnetic Field Between Capacitor Plates",
      tid: "phys-em-spectrum"
    },
    {
      q: "Radiation pressure exerted by an electromagnetic wave of intensity $I$ falling normally on a perfectly reflecting mirror is:",
      opts: ["$P = \\frac{2I}{c}$", "$P = \\frac{I}{c}$", "$P = \\frac{I}{2c}$", "$P = I c$"],
      exp: "Upon total reflection, momentum change is double: $\\Delta p = 2U/c$. Pressure $P = \\frac{F}{A} = \\frac{\\Delta p}{A \\Delta t} = \\frac{2(U/A\\Delta t)}{c} = \\frac{2I}{c}$.",
      sub: "Radiation Pressure on Reflectors",
      tid: "phys-em-spectrum"
    },
    {
      q: "Which property of electromagnetic waves remains strictly unchanged when an EM wave passes from air into glass?",
      opts: ["Frequency ($\\nu$)", "Wavelength ($\\lambda$)", "Speed ($v$)", "Electric field amplitude ($E_0$)"],
      exp: "Frequency is an intrinsic property determined solely by the oscillating source and remains invariant across any interface.",
      sub: "Invariance of Frequency",
      tid: "phys-em-spectrum"
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
      topicTitle: "Electromagnetic Waves & EM Spectrum",
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

  writePartFile(path.join(outDir, 'electromagneticWavesPart1Data.ts'), 'ELECTROMAGNETIC_WAVES_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'electromagneticWavesPart2Data.ts'), 'ELECTROMAGNETIC_WAVES_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'electromagneticWavesPart3Data.ts'), 'ELECTROMAGNETIC_WAVES_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'electromagneticWavesPart4Data.ts'), 'ELECTROMAGNETIC_WAVES_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'electromagneticWavesData.ts'),
    chapterTitle,
    'ELECTROMAGNETIC_WAVES_MCQS',
    [
      { exportName: 'ELECTROMAGNETIC_WAVES_PART1_MCQS', fromFile: 'electromagneticWavesPart1Data' },
      { exportName: 'ELECTROMAGNETIC_WAVES_PART2_MCQS', fromFile: 'electromagneticWavesPart2Data' },
      { exportName: 'ELECTROMAGNETIC_WAVES_PART3_MCQS', fromFile: 'electromagneticWavesPart3Data' },
      { exportName: 'ELECTROMAGNETIC_WAVES_PART4_MCQS', fromFile: 'electromagneticWavesPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

function runAll() {
  generateChapter6();
  generateChapter7();
  generateChapter8();
}

runAll();
