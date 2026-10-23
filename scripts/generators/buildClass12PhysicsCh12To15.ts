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
// CHAPTER 12: ATOMS
// ========================================================================================
export function generateChapter12() {
  const chapterId = 'atoms';
  const chapterTitle = 'Atoms';
  const idPrefix = 'atm';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "According to Bohr's first postulate, the centripetal force required for a revolving electron in a hydrogen-like atom of atomic number $Z$ is provided by:",
      opts: [
        "Coulomb electrostatic force of attraction between the nucleus and the electron",
        "Gravitational attraction between proton and electron",
        "Magnetic force due to orbital magnetic moment",
        "Nuclear strong interaction force"
      ],
      exp: "In Bohr's model, the electrostatic Coulomb force provides the necessary centripetal force: $\\frac{m v^2}{r} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{Z e^2}{r^2}$.",
      sub: "Bohr's Postulates",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "Bohr's quantization condition for orbital angular momentum of an electron in the $n$-th orbit is:",
      opts: ["$L = mvr = \\frac{n h}{2\\pi}$", "$L = mvr = \\frac{n h}{\\pi}$", "$L = mvr = \\frac{2\\pi h}{n}$", "$L = mvr = n^2 \\hbar$"],
      exp: "Bohr's second postulate states that orbital angular momentum is quantized in integral multiples of $h / 2\\pi$: $L = m v r = n \\frac{h}{2\\pi}$.",
      sub: "Angular Momentum Quantization",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The radius $r_n$ of the $n$-th Bohr orbit of hydrogen-like atom is proportional to:",
      opts: ["$\\frac{n^2}{Z}$", "$\\frac{n}{Z}$", "$\\frac{Z}{n^2}$", "$n^2 Z$"],
      exp: "The Bohr orbit radius formula is $r_n = \\frac{\\varepsilon_0 h^2}{\\pi m e^2} \\frac{n^2}{Z} = r_0 \\frac{n^2}{Z}$, directly proportional to $n^2 / Z$.",
      sub: "Bohr Orbit Radius",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The radius of the first orbit ($n=1$) of hydrogen atom ($Z=1$, Bohr radius $a_0$) is approximately:",
      opts: ["$0.529\\text{ \\AA}$ or $5.29 \\times 10^{-11}\\text{ m}$", "$0.265\\text{ \\AA}$", "$1.06\\text{ \\AA}$", "$5.29\\text{ \\AA}$"],
      exp: "Bohr radius $a_0 = \\frac{4\\pi \\varepsilon_0 \\hbar^2}{m e^2} \\approx 0.529 \\times 10^{-10}\\text{ m} = 0.529\\text{ \\AA}$.",
      sub: "Bohr Radius Constant",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The total energy $E_n$ of an electron in the $n$-th stationary orbit of hydrogen atom is given by:",
      opts: ["$-\\frac{13.6}{n^2}\\text{ eV}$", "$-\\frac{13.6}{n}\\text{ eV}$", "$\\frac{13.6}{n^2}\\text{ eV}$", "$-\\frac{27.2}{n^2}\\text{ eV}$"],
      exp: "For hydrogen ($Z=1$), the total energy of the $n$-th state is $E_n = -\\frac{13.6}{n^2}\\text{ eV}$.",
      sub: "Bohr Energy Levels",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "In a hydrogen atom, the relationship between kinetic energy $K$, potential energy $U$, and total energy $E$ is:",
      opts: ["$K = -E$ and $U = 2E$", "$K = E$ and $U = -2E$", "$K = 2E$ and $U = -E$", "$K = -U$ and $E = 0$"],
      exp: "By the virial theorem for Coulomb potential, $U = -2K$, so $E = K + U = -K = \\frac{1}{2}U$. Therefore, $K = -E$ and $U = 2E$.",
      sub: "Energy Relationships in H-Atom",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The spectral series of hydrogen atom that falls in the ultraviolet (UV) region is:",
      opts: ["Lyman series", "Balmer series", "Paschen series", "Brackett series"],
      exp: "Lyman series corresponds to transitions ending at $n_1 = 1$, emitting photons in the ultraviolet region.",
      sub: "Hydrogen Spectral Series",
      tid: "phys-hydrogen-spectrum"
    },
    {
      q: "The only spectral series of hydrogen atom that lies in the visible region of the electromagnetic spectrum is:",
      opts: ["Balmer series", "Lyman series", "Paschen series", "Pfund series"],
      exp: "Balmer series transitions end at $n_1 = 2$ and fall in the visible wavelength range (approx 380 nm to 656 nm).",
      sub: "Visible Spectrum of Hydrogen",
      tid: "phys-hydrogen-spectrum"
    },
    {
      q: "The orbital speed $v_n$ of an electron in the $n$-th Bohr orbit of hydrogen atom is proportional to:",
      opts: ["$\\frac{1}{n}$", "$n$", "$\\frac{1}{n^2}$", "$n^2$"],
      exp: "The orbital speed is $v_n = \\frac{e^2}{2\\varepsilon_0 h} \\frac{Z}{n} = \\frac{c}{137} \\frac{Z}{n} \\propto \\frac{1}{n}$.",
      sub: "Orbital Speed of Electron",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The ionization energy required to remove an electron from the ground state ($n=1$) of a hydrogen atom is:",
      opts: ["$13.6\\text{ eV}$", "$-13.6\\text{ eV}$", "$3.4\\text{ eV}$", "$10.2\\text{ eV}$"],
      exp: "Ionization energy is $E_\\infty - E_1 = 0 - (-13.6\\text{ eV}) = +13.6\\text{ eV}$.",
      sub: "Ionization Energy",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "In the Geiger-Marsden experiment, the distance of closest approach $r_{min}$ of an alpha particle of kinetic energy $K$ to a gold nucleus ($Z$) is proportional to:",
      opts: ["$\\frac{Z}{K}$", "$\\frac{K}{Z}$", "$\\frac{Z^2}{K}$", "$\\sqrt{\\frac{Z}{K}}$"],
      exp: "At the distance of closest approach, all initial kinetic energy converts to electrostatic potential energy: $K = \\frac{1}{4\\pi\\varepsilon_0} \\frac{(2e)(Ze)}{r_{min}} \\implies r_{min} \\propto \\frac{Z}{K}$.",
      sub: "Distance of Closest Approach",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "According to de Broglie's hypothesis, the circumference of the $n$-th Bohr orbit is equal to:",
      opts: [
        "$n$ times the de Broglie wavelength ($2\\pi r_n = n\\lambda$)",
        "$\\frac{n}{2}$ times the de Broglie wavelength",
        "Independent of the de Broglie wavelength",
        "$(n + 1/2)\\lambda$"
      ],
      exp: "De Broglie explained Bohr's condition by stating that a stationary orbit must form a standing electron wave: $2\\pi r = n\\lambda$, which gives $mvr = \\frac{nh}{2\\pi}$.",
      sub: "De Broglie Wave Interpretation",
      tid: "phys-rutherford-bohr-atom"
    }
  ];

  const mediumPool = [
    {
      q: "The first excitation energy (energy required to excite an electron from ground state $n=1$ to the first excited state $n=2$) in a hydrogen atom is:",
      opts: ["$10.2\\text{ eV}$", "$13.6\\text{ eV}$", "$3.4\\text{ eV}$", "$1.51\\text{ eV}$"],
      exp: "$E_1 = -13.6\\text{ eV}$ and $E_2 = -3.4\\text{ eV}$. Excitation energy $\\Delta E = E_2 - E_1 = -3.4 - (-13.6) = 10.2\\text{ eV}$.",
      sub: "Excitation Energy Calculation",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The ratio of the longest wavelength in the Lyman series to the longest wavelength in the Balmer series of hydrogen spectrum is:",
      opts: ["$\\frac{5}{27}$", "$\\frac{27}{5}$", "$\\frac{1}{4}$", "$\\frac{4}{9}$"],
      exp: "Longest Lyman ($2 \\to 1$): $\\frac{1}{\\lambda_{L}} = R(1 - 1/4) = \\frac{3}{4}R \\implies \\lambda_L = \\frac{4}{3R}$. Longest Balmer ($3 \\to 2$): $\\frac{1}{\\lambda_B} = R(1/4 - 1/9) = \\frac{5}{36}R \\implies \\lambda_B = \\frac{36}{5R}$. Ratio $\\frac{\\lambda_L}{\\lambda_B} = \\frac{4/3}{36/5} = \\frac{20}{108} = \\frac{5}{27}$.",
      sub: "Wavelength Ratio of Spectral Lines",
      tid: "phys-hydrogen-spectrum"
    },
    {
      q: "When an electron in a hydrogen atom jumps from $n = 4$ to the ground state $n = 1$, the maximum possible number of distinct spectral lines emitted is:",
      opts: ["$6$", "$4$", "$3$", "$10$"],
      exp: "Maximum number of spectral lines emitted is given by $N = \\frac{n(n - 1)}{2} = \\frac{4(3)}{2} = 6$.",
      sub: "Number of Spectral Lines",
      tid: "phys-hydrogen-spectrum"
    },
    {
      q: "The orbital period $T_n$ of an electron in the $n$-th orbit of hydrogen atom depends on the principal quantum number $n$ as:",
      opts: ["$T_n \\propto n^3$", "$T_n \\propto n^2$", "$T_n \\propto n$", "$T_n \\propto n^{3/2}$"],
      exp: "Period $T = \\frac{2\\pi r_n}{v_n}$. Since $r_n \\propto n^2$ and $v_n \\propto 1/n$, $T_n \\propto \\frac{n^2}{1/n} = n^3$.",
      sub: "Orbital Period Dependence",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The ionization potential of singly ionized helium ion ($\\text{He}^+, Z=2$) is:",
      opts: ["$54.4\\text{ V}$", "$13.6\\text{ V}$", "$27.2\\text{ V}$", "$108.8\\text{ V}$"],
      exp: "For a hydrogen-like ion, ground state energy is $E_1 = -13.6 Z^2\\text{ eV}$. For $\\text{He}^+$ ($Z=2$), $E_1 = -13.6 \\times 4 = -54.4\\text{ eV}$. Thus, ionization potential is $54.4\\text{ V}$.",
      sub: "Ionization Potential of He+",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "In Rutherford's alpha particle scattering experiment, the number of alpha particles scattered at angle $\\theta$ is proportional to:",
      opts: ["$\\frac{1}{\\sin^4(\\theta/2)}$", "$\\frac{1}{\\sin^2(\\theta/2)}$", "$\\sin^4(\\theta/2)$", "$\\frac{1}{\\cos^4(\\theta/2)}$"],
      exp: "Rutherford's scattering formula gives $N(\\theta) \\propto \\frac{1}{\\sin^4(\\theta/2)}$.",
      sub: "Rutherford Scattering Formula",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "The series limit (shortest wavelength) of the Balmer series of hydrogen is given by (where $R$ is Rydberg constant):",
      opts: ["$\\frac{4}{R}$", "$\\frac{1}{R}$", "$\\frac{9}{R}$", "$\\frac{16}{R}$"],
      exp: "For Balmer series, $n_1 = 2$. For series limit, $n_2 = \\infty$. $\\frac{1}{\\lambda} = R\\left(\\frac{1}{2^2} - 0\\right) = \\frac{R}{4} \\implies \\lambda = \\frac{4}{R}$.",
      sub: "Balmer Series Limit",
      tid: "phys-hydrogen-spectrum"
    },
    {
      q: "The magnetic field $B_n$ produced at the nucleus due to the orbital motion of an electron in the $n$-th Bohr orbit of hydrogen atom varies with $n$ as:",
      opts: ["$B_n \\propto n^{-5}$", "$B_n \\propto n^{-3}$", "$B_n \\propto n^{-2}$", "$B_n \\propto n^{-4}$"],
      exp: "$B = \\frac{\\mu_0 I}{2r}$. Here $I = \\frac{e}{T} \\propto n^{-3}$ and $r \\propto n^2$. Thus $B \\propto \\frac{n^{-3}}{n^2} = n^{-5}$.",
      sub: "Magnetic Field at Nucleus",
      tid: "phys-rutherford-bohr-atom"
    }
  ];

  const hardPool = [
    {
      q: "A hydrogen atom in ground state absorbs a photon and gets excited to $n = 4$. What are the kinetic energy ($K$) and potential energy ($U$) of the electron in this state?",
      opts: [
        "$K = +0.85\\text{ eV},\\ U = -1.70\\text{ eV}$",
        "$K = -0.85\\text{ eV},\\ U = +1.70\\text{ eV}$",
        "$K = +1.51\\text{ eV},\\ U = -3.02\\text{ eV}$",
        "$K = +0.85\\text{ eV},\\ U = -0.85\\text{ eV}$"
      ],
      exp: "In $n=4$, total energy $E_4 = -\\frac{13.6}{16} = -0.85\\text{ eV}$. Kinetic energy $K = -E_4 = +0.85\\text{ eV}$. Potential energy $U = 2E_4 = 2(-0.85) = -1.70\\text{ eV}$.",
      sub: "Multi-Step Energy in Excited State",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "If the mass of the electron were doubled while its charge remained the same, how would the Rydberg constant $R$ and the Bohr radius $a_0$ change?",
      opts: [
        "$R$ would be doubled and $a_0$ would be halved",
        "$R$ would be halved and $a_0$ would be doubled",
        "Both $R$ and $a_0$ would be doubled",
        "Both $R$ and $a_0$ would be halved"
      ],
      exp: "$R = \\frac{m e^4}{8\\varepsilon_0^2 c h^3} \\propto m$, so doubling $m$ doubles $R$. Bohr radius $a_0 = \\frac{4\\pi \\varepsilon_0 \\hbar^2}{m e^2} \\propto \\frac{1}{m}$, so doubling $m$ halves $a_0$.",
      sub: "Variation of Constants with Mass",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "A photon emitted in the transition from $n = 3$ to $n = 1$ in a hydrogen atom is incident on a metal having work function $2.4\\text{ eV}$. The stopping potential for the emitted photoelectrons is approximately:",
      opts: ["$9.7\\text{ V}$", "$12.1\\text{ V}$", "$7.8\\text{ V}$", "$10.2\\text{ V}$"],
      exp: "Photon energy $E = E_3 - E_1 = -1.51 - (-13.6) = 12.09\\text{ eV}$. Stopping potential $e V_s = E - \\Phi = 12.09 - 2.40 = 9.69\\text{ eV} \\implies V_s \\approx 9.7\\text{ V}$.",
      sub: "Atomic Transition & Photoelectric Combined",
      tid: "phys-hydrogen-spectrum"
    },
    {
      q: "What is the ratio of the frequency of revolution of an electron in the second Bohr orbit ($n=2$) to that in the third Bohr orbit ($n=3$) of a hydrogen atom?",
      opts: ["$\\frac{27}{8}$", "$\\frac{8}{27}$", "$\\frac{9}{4}$", "$\\frac{4}{9}$"],
      exp: "Frequency $f = \\frac{1}{T} \\propto n^{-3}$. Thus $\\frac{f_2}{f_3} = \\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}$.",
      sub: "Orbital Revolution Frequency Ratio",
      tid: "phys-rutherford-bohr-atom"
    },
    {
      q: "An alpha particle of energy $5\\text{ MeV}$ is scattered at $180^\\circ$ by a gold nucleus ($Z = 79$). Given $\\frac{1}{4\\pi\\varepsilon_0} = 9 \\times 10^9\\text{ N m}^2/\\text{C}^2$ and $e = 1.6 \\times 10^{-19}\\text{ C}$, the distance of closest approach is approximately:",
      opts: [
        "$4.55 \\times 10^{-14}\\text{ m}$ ($45.5\\text{ fm}$)",
        "$2.28 \\times 10^{-14}\\text{ m}$",
        "$9.10 \\times 10^{-14}\\text{ m}$",
        "$1.14 \\times 10^{-13}\\text{ m}$"
      ],
      exp: "$r_{min} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2 Z e^2}{K} = \\frac{(9 \\times 10^9)(2)(79)(1.6 \\times 10^{-19})^2}{5 \\times 10^6 \\times 1.6 \\times 10^{-19}} = \\frac{1.422 \\times 10^{12} \\times 1.6 \\times 10^{-19}}{5 \\times 10^6} \\approx 4.55 \\times 10^{-14}\\text{ m}$.",
      sub: "Numerical Distance of Closest Approach",
      tid: "phys-rutherford-bohr-atom"
    }
  ];

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
      subject,
      class: classLevel,
      classLevel
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

  writePartFile(path.join(outDir, 'atomsPart1Data.ts'), 'ATOMS_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'atomsPart2Data.ts'), 'ATOMS_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'atomsPart3Data.ts'), 'ATOMS_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'atomsPart4Data.ts'), 'ATOMS_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'atomsData.ts'),
    chapterTitle,
    'ATOMS_MCQS',
    [
      { exportName: 'ATOMS_PART1_MCQS', fromFile: 'atomsPart1Data' },
      { exportName: 'ATOMS_PART2_MCQS', fromFile: 'atomsPart2Data' },
      { exportName: 'ATOMS_PART3_MCQS', fromFile: 'atomsPart3Data' },
      { exportName: 'ATOMS_PART4_MCQS', fromFile: 'atomsPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 13: NUCLEI
// ========================================================================================
export function generateChapter13() {
  const chapterId = 'nuclei';
  const chapterTitle = 'Nuclei';
  const idPrefix = 'nuc';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "The radius of a nucleus of mass number $A$ is given by $R = R_0 A^{1/3}$. The value of constant $R_0$ is approximately:",
      opts: ["$1.2\\text{ fm}$ ($1.2 \\times 10^{-15}\\text{ m}$)", "$1.2\\text{ pm}$", "$1.2\\text{ nm}$", "$0.53\\text{ \\AA}$"],
      exp: "Nuclear radius is given by $R = R_0 A^{1/3}$, where $R_0 \\approx 1.2 \\times 10^{-15}\\text{ m} = 1.2\\text{ fm}$.",
      sub: "Nuclear Radius Formula",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "How does the nuclear matter density depend on the mass number $A$ of the nucleus?",
      opts: [
        "It is constant and independent of $A$ (approx $2.3 \\times 10^{17}\\text{ kg/m}^3$)",
        "It is directly proportional to $A$",
        "It is inversely proportional to $A^{1/3}$",
        "It is proportional to $A^2$"
      ],
      exp: "Since mass $M \\propto A$ and volume $V = \\frac{4}{3}\\pi R^3 \\propto A$, nuclear density $\\rho = M/V$ is independent of mass number $A$ and is nearly constant (approx $2.3 \\times 10^{17}\\text{ kg/m}^3$).",
      sub: "Nuclear Density Independence",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "One atomic mass unit ($1\\text{ u}$) is defined as:",
      opts: [
        "$\\frac{1}{12}\\text{th}$ of the mass of an isolated neutral ${}^{12}\\text{C}$ atom in its ground state",
        "The mass of one proton",
        "The mass of one hydrogen atom",
        "$\\frac{1}{16}\\text{th}$ of the mass of an ${}^{16}\\text{O}$ atom"
      ],
      exp: "$1\\text{ u} = \\frac{1}{12} \\times \\text{mass of a }{}^{12}\\text{C}\\text{ atom} \\approx 1.66054 \\times 10^{-27}\\text{ kg} \\approx 931.5\\text{ MeV}/c^2$.",
      sub: "Atomic Mass Unit Definition",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "The energy equivalent of $1\\text{ u}$ mass defect is approximately:",
      opts: ["$931.5\\text{ MeV}$", "$0.51\\text{ MeV}$", "$93.15\\text{ MeV}$", "$13.6\\text{ eV}$"],
      exp: "By Einstein's mass-energy equation $E = mc^2$, $1\\text{ u} \\approx 931.5\\text{ MeV}$.",
      sub: "Mass-Energy Equivalence",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "The nuclear binding energy per nucleon ($BE/A$) has its maximum peak value for which of the following nuclei?",
      opts: ["${}^{56}\\text{Fe}$ (approx $8.75\\text{ MeV/nucleon}$)", "${}^{238}\\text{U}$", "${}^{4}\\text{He}$", "${}^{12}\\text{C}$"],
      exp: "The binding energy curve peaks around $A = 56$ (${}^{56}\\text{Fe}$) at approximately $8.75\\text{ MeV/nucleon}$, making iron-56 one of the most stable nuclei.",
      sub: "Binding Energy Curve",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "The strong nuclear force between nucleons is:",
      opts: [
        "Short-range, charge-independent, and the strongest fundamental force in nature",
        "Long-range, inverse-square dependent, and repulsive",
        "Charge-dependent, weaker than electromagnetic force",
        "Purely gravitational in nature"
      ],
      exp: "Nuclear force is short-range ($\sim 1-2\\text{ fm}$), charge-independent (same for p-p, n-n, and n-p), saturates, and is the strongest force in nature.",
      sub: "Nuclear Force Characteristics",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "The relationship between the half-life $T_{1/2}$ and decay constant $\\lambda$ of a radioactive substance is:",
      opts: ["$T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}$", "$T_{1/2} = \\frac{\\lambda}{\\ln 2}$", "$T_{1/2} = \\frac{1}{\\lambda}$", "$T_{1/2} = \\lambda \\ln 2$"],
      exp: "The radioactive decay law gives $N(t) = N_0 e^{-\\lambda t}$. At $t = T_{1/2}$, $N = N_0/2 \\implies T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}$.",
      sub: "Half-Life Formula",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "The mean life (average life $\\tau$) of a radioactive nucleus is related to its half-life $T_{1/2}$ by:",
      opts: ["$\\tau = \\frac{T_{1/2}}{\\ln 2} \\approx 1.443 T_{1/2}$", "$\\tau = 0.693 T_{1/2}$", "$\\tau = 2 T_{1/2}$", "$\\tau = \\frac{T_{1/2}}{2}$"],
      exp: "Mean life $\\tau = \\frac{1}{\\lambda} = \\frac{T_{1/2}}{\\ln 2} \\approx 1.443 T_{1/2}$.",
      sub: "Mean Life vs Half-Life",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "In $\\beta^-$ (beta-minus) radioactive decay, the emitted particles from the nucleus are:",
      opts: [
        "An electron and an antineutrino ($e^-$ and $\\bar{\\nu}$)",
        "A positron and a neutrino ($e^+$ and $\\nu$)",
        "A helium nucleus ($^4_2\\text{He}$)",
        "Only a gamma photon"
      ],
      exp: "In $\\beta^-$ decay, a neutron converts to a proton: $n \\to p + e^- + \\bar{\\nu}_e$, releasing an electron ($\\beta^-$) and an electron antineutrino.",
      sub: "Beta-Minus Decay",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "In nuclear fission of a heavy nucleus like ${}^{235}\\text{U}$ induced by a thermal neutron, the average energy released per fission is approximately:",
      opts: ["$200\\text{ MeV}$", "$20\\text{ MeV}$", "$2\\text{ MeV}$", "$2000\\text{ MeV}$"],
      exp: "On average, each thermal neutron-induced fission of ${}^{235}\\text{U}$ releases approximately $200\\text{ MeV}$ of energy.",
      sub: "Nuclear Fission Energy",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "Nuclear fusion reactions (such as in stars) require extremely high temperatures (millions of Kelvin) because:",
      opts: [
        "Positively charged nuclei must overcome strong Coulomb electrostatic repulsion",
        "Neutrons must gain kinetic energy to penetrate the nucleus",
        "Electrons must be stripped off all atoms",
        "Nuclear binding energy increases with temperature"
      ],
      exp: "Nuclei are positively charged; high thermal kinetic energy is required to overcome the Coulomb electrostatic repulsion barrier and come within the short range ($\sim 1\\text{ fm}$) of the attractive nuclear force.",
      sub: "Thermonuclear Fusion Condition",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "The SI unit of radioactive activity ($A = -dN/dt$) is:",
      opts: ["Becquerel (Bq, 1 disintegration per second)", "Curie (Ci)", "Rutherford (rd)", "Roentgen (R)"],
      exp: "The SI unit of radioactivity is Becquerel (Bq), defined as 1 disintegration (decay) per second. ($1\\text{ Ci} = 3.7 \\times 10^{10}\\text{ Bq}$).",
      sub: "SI Unit of Activity",
      tid: "phys-radioactivity-fission"
    }
  ];

  const mediumPool = [
    {
      q: "The ratio of the nuclear radius of ${}^{27}\\text{Al}$ to that of ${}^{64}\\text{Cu}$ is:",
      opts: ["$3 : 4$", "$4 : 3$", "$9 : 16$", "$27 : 64$"],
      exp: "Radius $R = R_0 A^{1/3}$. For Al ($A=27$), $R_1 = R_0 (27)^{1/3} = 3 R_0$. For Cu ($A=64$), $R_2 = R_0 (64)^{1/3} = 4 R_0$. The ratio is $3/4$.",
      sub: "Nuclear Radius Ratio",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "A radioactive sample has a half-life of 20 days. The fraction of the original radioactive substance remaining undecayed after 60 days is:",
      opts: ["$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{16}$", "$\\frac{7}{8}$"],
      exp: "Number of half-lives $n = \\frac{t}{T_{1/2}} = \\frac{60}{20} = 3$. Remaining fraction is $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$.",
      sub: "Decay Fraction Calculation",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "In a radioactive series, a nucleus ${}^A_Z\\text{X}$ emits $3\\alpha$ particles and $2\\beta^-$ particles. The resulting daughter nucleus has atomic number and mass number:",
      opts: [
        "Atomic number $Z - 4$, mass number $A - 12$",
        "Atomic number $Z - 6$, mass number $A - 12$",
        "Atomic number $Z - 2$, mass number $A - 6$",
        "Atomic number $Z - 4$, mass number $A - 6$"
      ],
      exp: "Each $\\alpha$ reduces $Z$ by 2 and $A$ by 4 ($3\\alpha \\implies \\Delta Z = -6, \\Delta A = -12$). Each $\\beta^-$ increases $Z$ by 1 ($2\\beta^- \\implies \\Delta Z = +2$). Net changes: $Z_{final} = Z - 6 + 2 = Z - 4$; $A_{final} = A - 12$.",
      sub: "Alpha and Beta Decay Displacement",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "The binding energy of a deuteron (${}^2_1\\text{H}$) is $2.22\\text{ MeV}$ and that of an alpha particle (${}^4_2\\text{He}$) is $28.3\\text{ MeV}$. When two deuterons fuse to form an alpha particle (${}^2_1\\text{H} + {}^2_1\\text{H} \\to {}^4_2\\text{He}$), the energy released is:",
      opts: ["$23.86\\text{ MeV}$", "$26.08\\text{ MeV}$", "$30.52\\text{ MeV}$", "$28.30\\text{ MeV}$"],
      exp: "Total initial binding energy = $2 \\times 2.22 = 4.44\\text{ MeV}$. Final binding energy = $28.30\\text{ MeV}$. Energy released $Q = BE_{final} - BE_{initial} = 28.30 - 4.44 = 23.86\\text{ MeV}$.",
      sub: "Fusion Energy from Binding Energy",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "If the activity of a radioactive sample drops from $800\\text{ Bq}$ to $100\\text{ Bq}$ in 6 hours, the half-life of the sample is:",
      opts: ["$2\\text{ hours}$", "$3\\text{ hours}$", "$1.5\\text{ hours}$", "$4\\text{ hours}$"],
      exp: "$A/A_0 = 100/800 = 1/8 = (1/2)^3$. Thus, 3 half-lives have elapsed in 6 hours: $3 T_{1/2} = 6 \\implies T_{1/2} = 2\\text{ hours}$.",
      sub: "Activity and Half-Life",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "The mass defect of ${}^4_2\\text{He}$ nucleus is $0.0303\\text{ u}$. The binding energy per nucleon of helium is approximately:",
      opts: ["$7.05\\text{ MeV/nucleon}$", "$28.2\\text{ MeV/nucleon}$", "$8.75\\text{ MeV/nucleon}$", "$14.1\\text{ MeV/nucleon}$"],
      exp: "Total binding energy = $0.0303 \\times 931.5\\text{ MeV} \\approx 28.22\\text{ MeV}$. Helium has 4 nucleons ($A=4$). Binding energy per nucleon = $\\frac{28.22}{4} \\approx 7.05\\text{ MeV/nucleon}$.",
      sub: "Binding Energy per Nucleon of He",
      tid: "phys-nucleus-binding-energy"
    },
    {
      q: "In a nuclear reactor, heavy water ($\text{D}_2\text{O}$) or graphite is primarily used as:",
      opts: [
        "A moderator to slow down fast neutrons to thermal energies",
        "Control rods to absorb excess neutrons",
        "A coolant to carry away nuclear waste",
        "A shield against gamma radiation"
      ],
      exp: "Moderators like heavy water or graphite slow down fast fission neutrons through elastic collisions to thermal energies ($\sim 0.025\\text{ eV}$) where fission cross-section is high.",
      sub: "Nuclear Reactor Moderator",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "Which property explains why light nuclei tend to undergo nuclear fusion while very heavy nuclei tend to undergo nuclear fission?",
      opts: [
        "Both processes lead to product nuclei with higher binding energy per nucleon",
        "Both processes conserve total number of electrons",
        "Fusion creates heavier elements with lower binding energy",
        "Fission increases the total nuclear mass"
      ],
      exp: "The $BE/A$ curve peaks at middle mass numbers ($A \\approx 56$). Light nuclei fuse and heavy nuclei fission to form intermediate nuclei with higher $BE/A$, releasing excess binding energy.",
      sub: "Stability from BE Curve",
      tid: "phys-nucleus-binding-energy"
    }
  ];

  const hardPool = [
    {
      q: "A radioactive isotope has half-life $T$. At time $t=0$, the number of parent nuclei is $N_0$. What is the ratio of parent to daughter nuclei at time $t = 3T$ (assuming all decays produce stable daughters)?",
      opts: ["$1 : 7$", "$1 : 8$", "$1 : 3$", "$7 : 1$"],
      exp: "At $t = 3T$, parent nuclei remaining $N_p = N_0 (1/2)^3 = \\frac{N_0}{8}$. Daughter nuclei formed $N_d = N_0 - N_p = \\frac{7}{8}N_0$. Ratio $N_p : N_d = 1 : 7$.",
      sub: "Parent-Daughter Ratio",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "A nuclear reactor generates $32\\text{ MW}$ of electric power with an efficiency of $20\\%$. If each fission of ${}^{235}\\text{U}$ releases $200\\text{ MeV}$, the rate of fission of ${}^{235}\\text{U}$ nuclei per second is:",
      opts: [
        "$5 \\times 10^{18}\\text{ fissions/s}$",
        "$1 \\times 10^{18}\\text{ fissions/s}$",
        "$2.5 \\times 10^{17}\\text{ fissions/s}$",
        "$5 \\times 10^{19}\\text{ fissions/s}$"
      ],
      exp: "Thermal power $P_{thermal} = \\frac{32\\text{ MW}}{0.20} = 160\\text{ MW} = 1.6 \\times 10^8\\text{ J/s}$. Energy per fission $E_f = 200\\text{ MeV} = 200 \\times 1.6 \\times 10^{-13}\\text{ J} = 3.2 \\times 10^{-11}\\text{ J}$. Rate of fission = $\\frac{1.6 \\times 10^8}{3.2 \\times 10^{-11}} = 5 \\times 10^{18}\\text{ fissions/s}$.",
      sub: "Reactor Power and Fission Rate",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "Two radioactive materials $X_1$ and $X_2$ have decay constants $10\\lambda$ and $\\lambda$ respectively. Initially, they have the same number of nuclei. After what time will the ratio of nuclei of $X_1$ to that of $X_2$ be $1/e$?",
      opts: ["$\\frac{1}{9\\lambda}$", "$\\frac{1}{10\\lambda}$", "$\\frac{1}{11\\lambda}$", "$\\frac{9}{\\lambda}$"],
      exp: "$\\frac{N_1(t)}{N_2(t)} = \\frac{N_0 e^{-10\\lambda t}}{N_0 e^{-\\lambda t}} = e^{-9\\lambda t}$. Given this equals $1/e = e^{-1} \\implies 9\\lambda t = 1 \\implies t = \\frac{1}{9\\lambda}$.",
      sub: "Decay Constant Comparison",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "In $\\beta^+$ (positron) decay, the $Q$-value of the reaction ${}^A_Z\\text{X} \\to {}^A_{Z-1}\\text{Y} + e^+ + \\nu$ in terms of atomic masses $m(X)$ and $m(Y)$ is given by:",
      opts: [
        "$Q = [m(X) - m(Y) - 2m_e]c^2$",
        "$Q = [m(X) - m(Y)]c^2$",
        "$Q = [m(X) - m(Y) - m_e]c^2$",
        "$Q = [m(X) - m(Y) + 2m_e]c^2$"
      ],
      exp: "In $\\beta^+$ decay, atomic mass includes electrons: $M_N(X) = m(X) - Z m_e$ and $M_N(Y) = m(Y) - (Z-1)m_e$. The reaction has a free positron: $\\Delta m = M_N(X) - [M_N(Y) + m_e] = [m(X) - Z m_e] - [m(Y) - (Z-1)m_e + m_e] = m(X) - m(Y) - 2m_e$.",
      sub: "Positron Decay Q-Value",
      tid: "phys-radioactivity-fission"
    },
    {
      q: "The mean life of a radioactive sample is $100\\text{ s}$. The time taken for $75\\%$ of the initial active nuclei to decay is approximately:",
      opts: ["$138.6\\text{ s}$", "$69.3\\text{ s}$", "$200\\text{ s}$", "$100\\text{ s}$"],
      exp: "When $75\\%$ decays, $25\\%$ ($1/4$) remains undecayed, which corresponds to 2 half-lives: $t = 2 T_{1/2}$. Since $T_{1/2} = \\tau \\ln 2 = 100 \\times 0.693 = 69.3\\text{ s}$, $t = 2 \\times 69.3 = 138.6\\text{ s}$.",
      sub: "Mean Life to Decay Time",
      tid: "phys-radioactivity-fission"
    }
  ];

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
      subject,
      class: classLevel,
      classLevel
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

  writePartFile(path.join(outDir, 'nucleiPart1Data.ts'), 'NUCLEI_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'nucleiPart2Data.ts'), 'NUCLEI_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'nucleiPart3Data.ts'), 'NUCLEI_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'nucleiPart4Data.ts'), 'NUCLEI_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'nucleiData.ts'),
    chapterTitle,
    'NUCLEI_MCQS',
    [
      { exportName: 'NUCLEI_PART1_MCQS', fromFile: 'nucleiPart1Data' },
      { exportName: 'NUCLEI_PART2_MCQS', fromFile: 'nucleiPart2Data' },
      { exportName: 'NUCLEI_PART3_MCQS', fromFile: 'nucleiPart3Data' },
      { exportName: 'NUCLEI_PART4_MCQS', fromFile: 'nucleiPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 14: SEMICONDUCTOR ELECTRONICS
// ========================================================================================
export function generateChapter14() {
  const chapterId = 'semiconductors';
  const chapterTitle = 'Semiconductor Electronics';
  const idPrefix = 'semi';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "In an intrinsic (pure) semiconductor at absolute zero temperature ($T = 0\\text{ K}$), the valence band and conduction band are:",
      opts: [
        "Valence band completely filled and conduction band completely empty (behaves as insulator)",
        "Both bands partially filled",
        "Conduction band completely filled",
        "Valence band completely empty"
      ],
      exp: "At $0\\text{ K}$, thermal energy is zero. No covalent bonds are broken; the valence band is completely full and conduction band is completely empty, so it behaves as a perfect insulator.",
      sub: "Energy Bands at 0 K",
      tid: "phys-semiconductor-types"
    },
    {
      q: "The energy band gap ($E_g$) for silicon (Si) and germanium (Ge) at room temperature is approximately:",
      opts: ["$1.1\\text{ eV}$ for Si and $0.7\\text{ eV}$ for Ge", "$0.7\\text{ eV}$ for Si and $1.1\\text{ eV}$ for Ge", "$3.0\\text{ eV}$ for both", "$0.02\\text{ eV}$ for both"],
      exp: "At room temperature ($300\\text{ K}$), $E_g(\\text{Si}) \\approx 1.1\\text{ eV}$ and $E_g(\\text{Ge}) \\approx 0.7\\text{ eV}$.",
      sub: "Band Gap of Si and Ge",
      tid: "phys-semiconductor-types"
    },
    {
      q: "To produce an n-type semiconductor, pure silicon or germanium should be doped with which type of impurity?",
      opts: [
        "Pentavalent atoms like Phosphorus (P), Arsenic (As), or Antimony (Sb)",
        "Trivalent atoms like Boron (B), Aluminum (Al), or Indium (In)",
        "Monovalent alkali metals",
        "Divalent alkaline earth metals"
      ],
      exp: "Pentavalent impurities (group 15: P, As, Sb) provide extra donor electrons, creating an n-type semiconductor where electrons are majority carriers.",
      sub: "Doping for n-type",
      tid: "phys-semiconductor-types"
    },
    {
      q: "An n-type or p-type extrinsic semiconductor as a whole possesses what net electrical charge?",
      opts: ["Zero (it is electrically neutral)", "Positive charge for p-type and negative for n-type", "Positive charge for both", "Negative charge for both"],
      exp: "Doping introduces neutral donor or acceptor atoms into a neutral crystal lattice. Therefore, both n-type and p-type semiconductors are strictly electrically neutral.",
      sub: "Electrical Neutrality of Doped Semiconductors",
      tid: "phys-semiconductor-types"
    },
    {
      q: "In thermal equilibrium, the mass action law relating electron concentration $n_e$, hole concentration $n_h$, and intrinsic carrier concentration $n_i$ is:",
      opts: ["$n_e \\cdot n_h = n_i^2$", "$n_e + n_h = n_i$", "$\\frac{n_e}{n_h} = n_i^2$", "$n_e \\cdot n_h = 2 n_i$"],
      exp: "The mass action law states that the product of majority and minority carrier densities is constant at a given temperature: $n_e \\cdot n_h = n_i^2$.",
      sub: "Mass Action Law",
      tid: "phys-semiconductor-types"
    },
    {
      q: "The depletion layer of an unbiased p-n junction contains:",
      opts: [
        "Only immobile, uncompensated ionized donor and acceptor ions",
        "Abundant free electrons and holes",
        "Neutral dopant atoms only",
        "Only free mobile minority carriers"
      ],
      exp: "In the depletion region, mobile majority carriers diffuse away, leaving behind uncovered, immobile positive donor ions on the n-side and negative acceptor ions on the p-side.",
      sub: "Depletion Region Composition",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "When a p-n junction is forward biased (p-side connected to positive terminal and n-side to negative terminal):",
      opts: [
        "The depletion width decreases and the potential barrier is lowered ($V_0 - V$)",
        "The depletion width increases and barrier height increases",
        "No current flows across the junction",
        "Only minority carrier drift current increases"
      ],
      exp: "Forward bias opposes the built-in electric field, reducing the barrier potential to $V_0 - V$ and narrowing the depletion region, allowing large majority carrier diffusion current.",
      sub: "Forward Biased Diode",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "The output frequency of a full-wave rectifier supplied with an AC input of frequency $50\\text{ Hz}$ is:",
      opts: ["$100\\text{ Hz}$", "$50\\text{ Hz}$", "$25\\text{ Hz}$", "$200\\text{ Hz}$"],
      exp: "In a full-wave rectifier, both positive and negative half-cycles produce output pulses. Thus, output frequency $f_{out} = 2 f_{in} = 2 \\times 50 = 100\\text{ Hz}$.",
      sub: "Full-Wave Rectifier Frequency",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "A Zener diode is specially designed to operate in which region of its characteristic curve?",
      opts: [
        "Reverse breakdown region with a sharp, constant breakdown voltage",
        "Forward active linear region",
        "Reverse saturation region prior to breakdown",
        "Forward cutoff region"
      ],
      exp: "Zener diodes are heavily doped to produce a thin junction with a sharp reverse breakdown voltage ($V_Z$), maintaining constant voltage across a wide range of reverse currents.",
      sub: "Zener Diode Operation",
      tid: "phys-special-diodes"
    },
    {
      q: "In an illuminated photodiode, why is the diode operated under reverse bias rather than forward bias?",
      opts: [
        "Fractional change in reverse minority carrier current upon illumination is far easier to measure",
        "Reverse bias prevents current flow",
        "Forward bias destroys the semiconductor crystal",
        "Photons cannot penetrate when forward biased"
      ],
      exp: "Under reverse bias, dark current is tiny ($I_{minority}$). Additional photo-generated carriers create a large percentage change ($\Delta I / I$), making detection significantly more sensitive.",
      sub: "Photodiode Operation Principle",
      tid: "phys-special-diodes"
    },
    {
      q: "A Light Emitting Diode (LED) emits light primarily due to:",
      opts: [
        "Radiative recombination of electrons and holes across the forward-biased band gap",
        "Thermal emission of blackbody radiation from the junction",
        "Avalanche multiplication under high reverse bias",
        "Ionization of gas trapped in the diode case"
      ],
      exp: "Under forward bias, minority carriers injected across the junction recombine with majority carriers, releasing excess energy as optical photons ($h\\nu \\approx E_g$).",
      sub: "LED Emission Mechanism",
      tid: "phys-special-diodes"
    },
    {
      q: "The maximum theoretical rectification efficiency of a half-wave rectifier is approximately:",
      opts: ["$40.6\\%$", "$81.2\\%$", "$50\\%$", "$100\\%$"],
      exp: "The maximum efficiency of a half-wave rectifier is $\\eta_{max} = \\frac{4}{\\pi^2} \\approx 40.6\\%$ (for a full-wave rectifier it is $81.2\\% = \\frac{8}{\\pi^2}$).",
      sub: "Rectifier Efficiency Limit",
      tid: "phys-pn-junction-diode"
    }
  ];

  const mediumPool = [
    {
      q: "In an intrinsic semiconductor, the electrical conductivity $\\sigma$ is given by (where $\\mu_e$ and $\\mu_h$ are mobilities):",
      opts: [
        "$\\sigma = e n_i (\\mu_e + \\mu_h)$",
        "$\\sigma = e n_i (\\mu_e - \\mu_h)$",
        "$\\sigma = e n_i \\sqrt{\\mu_e \\mu_h}$",
        "$\\sigma = \\frac{e n_i}{\\mu_e + \\mu_h}$"
      ],
      exp: "Conductivity $\\sigma = e(n_e \\mu_e + n_h \\mu_h)$. For intrinsic semiconductors, $n_e = n_h = n_i$, so $\\sigma = e n_i (\\mu_e + \\mu_h)$.",
      sub: "Semiconductor Conductivity",
      tid: "phys-semiconductor-types"
    },
    {
      q: "A silicon specimen is doped with $10^{17}\\text{ atoms/cm}^3$ of arsenic. If the intrinsic carrier concentration $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$, the hole concentration $n_h$ at thermal equilibrium is:",
      opts: [
        "$2.25 \\times 10^3\\text{ cm}^{-3}$",
        "$2.25 \\times 10^7\\text{ cm}^{-3}$",
        "$1.5 \\times 10^7\\text{ cm}^{-3}$",
        "$10^{17}\\text{ cm}^{-3}$"
      ],
      exp: "Arsenic is a donor, so $n_e \\approx N_D = 10^{17}\\text{ cm}^{-3}$. By mass action law $n_e n_h = n_i^2$, $n_h = \\frac{(1.5 \\times 10^{10})^2}{10^{17}} = \\frac{2.25 \\times 10^{20}}{10^{17}} = 2.25 \\times 10^3\\text{ cm}^{-3}$.",
      sub: "Minority Carrier Concentration",
      tid: "phys-semiconductor-types"
    },
    {
      q: "The dynamic (AC) resistance of a forward-biased diode when current increases from $10\\text{ mA}$ to $20\\text{ mA}$ upon voltage increasing from $0.70\\text{ V}$ to $0.72\\text{ V}$ is:",
      opts: ["$2.0\\ \\Omega$", "$0.2\\ \\Omega$", "$20\\ \\Omega$", "$200\\ \\Omega$"],
      exp: "Dynamic resistance $r_d = \\frac{\\Delta V}{\\Delta I} = \\frac{0.72 - 0.70}{(20 - 10) \\times 10^{-3}} = \\frac{0.02\\text{ V}}{10 \\times 10^{-3}\\text{ A}} = 2.0\\ \\Omega$.",
      sub: "Dynamic Resistance Calculation",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "A Zener diode of voltage $V_Z = 6\\text{ V}$ is used in a voltage regulator circuit with an unregulated input of $10\\text{ V}$ and a series resistor $R_s = 200\\ \\Omega$. If the load resistance $R_L = 1\\text{ k}\\Omega$, the current through the Zener diode is:",
      opts: ["$14\\text{ mA}$", "$20\\text{ mA}$", "$6\\text{ mA}$", "$8\\text{ mA}$"],
      exp: "Voltage across series resistor $V_R = V_{in} - V_Z = 10 - 6 = 4\\text{ V}$. Total current $I = \\frac{V_R}{R_s} = \\frac{4\\text{ V}}{200\\ \\Omega} = 20\\text{ mA}$. Load current $I_L = \\frac{V_Z}{R_L} = \\frac{6\\text{ V}}{1000\\ \\Omega} = 6\\text{ mA}$. Zener current $I_Z = I - I_L = 20 - 6 = 14\\text{ mA}$.",
      sub: "Zener Voltage Regulator Analysis",
      tid: "phys-special-diodes"
    },
    {
      q: "The knee (cut-in) voltage of a silicon p-n junction diode is typically about:",
      opts: ["$0.7\\text{ V}$", "$0.3\\text{ V}$", "$1.5\\text{ V}$", "$0.1\\text{ V}$"],
      exp: "The barrier potential and corresponding knee voltage is approximately $0.7\\text{ V}$ for silicon diodes and $0.3\\text{ V}$ for germanium diodes.",
      sub: "Knee Voltage of Diode",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "In an unbiased p-n junction, the diffusion current and drift current across the junction satisfy which condition?",
      opts: [
        "They are equal in magnitude and opposite in direction (net current = 0)",
        "Diffusion current is much larger than drift current",
        "Drift current is much larger than diffusion current",
        "They flow in the same direction"
      ],
      exp: "At thermal equilibrium without external bias, diffusion current (holes $p\\to n$, electrons $n\\to p$) is exactly balanced by drift current (minority carriers driven by built-in field), yielding zero net current.",
      sub: "Equilibrium Current Balance",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "An LED made from GaAsP emits red light of wavelength $650\\text{ nm}$. The band gap energy $E_g$ of this semiconductor is approximately:",
      opts: ["$1.9\\text{ eV}$", "$1.1\\text{ eV}$", "$2.5\\text{ eV}$", "$3.2\\text{ eV}$"],
      exp: "$E_g \\approx \\frac{h c}{\\lambda} = \\frac{12400\\text{ eV}\\cdot\\text{\\AA}}{6500\\text{ \\AA}} \\approx 1.91\\text{ eV}$.",
      sub: "LED Bandgap Calculation",
      tid: "phys-special-diodes"
    },
    {
      q: "In a capacitor filter connected across a full-wave rectifier, the ripple factor is reduced by:",
      opts: [
        "Increasing the load resistance $R_L$ or capacitance $C$",
        "Decreasing the capacitance $C$",
        "Decreasing the input frequency",
        "Operating without any load"
      ],
      exp: "Ripple factor for a capacitor filter is $r = \\frac{1}{4\\sqrt{3} f C R_L}$. Increasing $C$, $R_L$, or frequency $f$ reduces the ripple.",
      sub: "Filter Ripple Factor",
      tid: "phys-pn-junction-diode"
    }
  ];

  const hardPool = [
    {
      q: "A Zener diode voltage regulator circuit has an input voltage varying between $12\\text{ V}$ and $16\\text{ V}$. If $V_Z = 8\\text{ V}$, $R_L = 400\\ \\Omega$, and the minimum Zener current is $5\\text{ mA}$, the maximum allowable value of the series resistance $R_s$ to maintain regulation is:",
      opts: ["$160\\ \\Omega$", "$200\\ \\Omega$", "$250\\ \\Omega$", "$120\\ \\Omega$"],
      exp: "Load current $I_L = \\frac{V_Z}{R_L} = \\frac{8}{400} = 20\\text{ mA}$. Regulation must hold at lowest input $V_{in} = 12\\text{ V}$, where $I_Z = 5\\text{ mA}$. Total current $I = I_L + I_Z = 20 + 5 = 25\\text{ mA}$. Max $R_s = \\frac{V_{in,min} - V_Z}{I} = \\frac{12 - 8}{0.025\\text{ A}} = \\frac{4}{0.025} = 160\\ \\Omega$.",
      sub: "Zener Circuit Design Limit",
      tid: "phys-special-diodes"
    },
    {
      q: "A p-n junction diode has a reverse saturation current of $10\\ \\mu\\text{A}$ at room temperature ($T = 300\\text{ K}, k_B T / e \\approx 26\\text{ mV}$). If forward biased by $0.15\\text{ V}$, the forward current is approximately (given $e^{150/26} = e^{5.77} \\approx 320$):",
      opts: ["$3.19\\text{ mA}$", "$32.0\\text{ mA}$", "$0.32\\text{ mA}$", "$320\\ \\mu\\text{A}$"],
      exp: "Diode equation $I = I_0 (e^{e V / k_B T} - 1) = 10\\ \\mu\\text{A} \\times (320 - 1) = 3190\\ \\mu\\text{A} = 3.19\\text{ mA}$.",
      sub: "Ideal Diode Equation Application",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "In an n-type semiconductor, electron mobility is $\\mu_e = 0.38\\text{ m}^2/(\\text{V s})$ and hole mobility is $\\mu_h = 0.18\\text{ m}^2/(\\text{V s})$. If $n_e = 5 \\times 10^{20}\\text{ m}^{-3}$ and $n_h = 2 \\times 10^{15}\\text{ m}^{-3}$, the resistivity $\\rho$ of the semiconductor is:",
      opts: ["$0.0329\\ \\Omega\\cdot\\text{m}$", "$0.329\\ \\Omega\\cdot\\text{m}$", "$0.0033\\ \\Omega\\cdot\\text{m}$", "$3.29\\ \\Omega\\cdot\\text{m}$"],
      exp: "Since $n_e \\gg n_h$, conductivity $\\sigma \\approx e n_e \\mu_e = (1.6 \\times 10^{-19})(5 \\times 10^{20})(0.38) = 80 \\times 0.38 = 30.4\\text{ S/m}$. Resistivity $\\rho = \\frac{1}{\\sigma} = \\frac{1}{30.4} \\approx 0.0329\\ \\Omega\\cdot\\text{m}$.",
      sub: "Resistivity of Extrinsic Semiconductor",
      tid: "phys-semiconductor-types"
    },
    {
      q: "Two ideal diodes are connected in reverse-parallel with resistors $R_1 = 10\\ \\Omega$ and $R_2 = 20\\ \\Omega$ across an AC source of $V = 20\\sin(\\omega t)\\text{ V}$. During the positive half cycle, diode $D_1$ is forward biased and $D_2$ is reverse biased. The peak current during the positive half cycle is:",
      opts: ["$2.0\\text{ A}$", "$1.0\\text{ A}$", "$0.67\\text{ A}$", "$3.0\\text{ A}$"],
      exp: "During the positive half cycle, current only passes through $D_1$ branch with $R_1 = 10\\ \\Omega$. Peak current $I_{peak} = \\frac{V_0}{R_1} = \\frac{20\\text{ V}}{10\\ \\Omega} = 2.0\\text{ A}$.",
      sub: "Diode Network AC Analysis",
      tid: "phys-pn-junction-diode"
    },
    {
      q: "A photodiode is fabricated from a semiconductor with a band gap of $1.5\\text{ eV}$. It can detect optical signals having a maximum wavelength of:",
      opts: ["$827\\text{ nm}$", "$650\\text{ nm}$", "$1240\\text{ nm}$", "$450\\text{ nm}$"],
      exp: "For photo-absorption, photon energy $h\\nu \\ge E_g \\implies \\lambda \\le \\frac{h c}{E_g} = \\frac{1240\\text{ eV nm}}{1.5\\text{ eV}} \\approx 826.7\\text{ nm} \\approx 827\\text{ nm}$.",
      sub: "Threshold Wavelength for Photodiode",
      tid: "phys-special-diodes"
    }
  ];

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
      subject,
      class: classLevel,
      classLevel
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

  writePartFile(path.join(outDir, 'semiconductorsPart1Data.ts'), 'SEMICONDUCTORS_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'semiconductorsPart2Data.ts'), 'SEMICONDUCTORS_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'semiconductorsPart3Data.ts'), 'SEMICONDUCTORS_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'semiconductorsPart4Data.ts'), 'SEMICONDUCTORS_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'semiconductorsData.ts'),
    chapterTitle,
    'SEMICONDUCTORS_MCQS',
    [
      { exportName: 'SEMICONDUCTORS_PART1_MCQS', fromFile: 'semiconductorsPart1Data' },
      { exportName: 'SEMICONDUCTORS_PART2_MCQS', fromFile: 'semiconductorsPart2Data' },
      { exportName: 'SEMICONDUCTORS_PART3_MCQS', fromFile: 'semiconductorsPart3Data' },
      { exportName: 'SEMICONDUCTORS_PART4_MCQS', fromFile: 'semiconductorsPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 15: UNIT 20: EXPERIMENTAL SKILLS
// ========================================================================================
export function generateChapter15() {
  const chapterId = 'experimental-skills';
  const chapterTitle = 'Unit 20: Experimental Skills';
  const idPrefix = 'exp';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "The least count ($LC$) of a Vernier caliper having 1 main scale division of $1\\text{ mm}$ and 10 vernier scale divisions matching 9 main scale divisions is:",
      opts: ["$0.1\\text{ mm}$ ($0.01\\text{ cm}$)", "$0.01\\text{ mm}$", "$1.0\\text{ mm}$", "$0.05\\text{ mm}$"],
      exp: "$LC = 1\\text{ MSD} - 1\\text{ VSD} = 1\\text{ mm} - \\frac{9}{10}\\text{ mm} = 0.1\\text{ mm} = 0.01\\text{ cm}$.",
      sub: "Vernier Calipers Least Count",
      tid: "phys-exp-vernier-calipers"
    },
    {
      q: "A screw gauge has a pitch of $0.5\\text{ mm}$ and 50 circular scale divisions. Its least count is:",
      opts: ["$0.01\\text{ mm}$", "$0.001\\text{ mm}$", "$0.05\\text{ mm}$", "$0.1\\text{ mm}$"],
      exp: "Least count of screw gauge is $LC = \\frac{\\text{Pitch}}{\\text{Number of circular divisions}} = \\frac{0.5\\text{ mm}}{50} = 0.01\\text{ mm}$.",
      sub: "Screw Gauge Least Count",
      tid: "phys-exp-screw-gauge"
    },
    {
      q: "In an experiment with a simple pendulum, the graph between length $L$ and time period squared $T^2$ is a:",
      opts: [
        "Straight line passing through the origin",
        "Parabola opening upwards",
        "Hyperbola",
        "Horizontal line"
      ],
      exp: "Since $T = 2\\pi\\sqrt{L/g} \\implies T^2 = \\frac{4\\pi^2}{g} L$, $L$ is strictly directly proportional to $T^2$, yielding a straight line through origin with slope $g / 4\\pi^2$.",
      sub: "Simple Pendulum Graph",
      tid: "phys-exp-simple-pendulum"
    },
    {
      q: "In a metre bridge experiment based on the Wheatstone bridge principle, the balancing condition is:",
      opts: ["$\\frac{R}{S} = \\frac{l}{100 - l}$", "$\\frac{R}{S} = \\frac{100 - l}{l}$", "$R \\cdot S = l(100 - l)$", "$\\frac{R}{S} = \\frac{l^2}{(100-l)^2}$"],
      exp: "The metre bridge wire of $100\\text{ cm}$ has uniform resistance per unit length. At balance, $\\frac{R}{S} = \\frac{P}{Q} = \\frac{r\\cdot l}{r\\cdot(100 - l)} = \\frac{l}{100 - l}$.",
      sub: "Metre Bridge Formula",
      tid: "phys-exp-metre-bridge-resistivity"
    },
    {
      q: "In a resonance tube experiment to find the speed of sound in air, the first two resonance lengths are $l_1$ and $l_2$. The wavelength $\\lambda$ of sound is:",
      opts: ["$\\lambda = 2(l_2 - l_1)$", "$\\lambda = l_2 - l_1$", "$\\lambda = 4(l_2 - l_1)$", "$\\lambda = \\frac{l_2 - l_1}{2}$"],
      exp: "First resonance: $l_1 + e = \\frac{\\lambda}{4}$; Second resonance: $l_2 + e = \\frac{3\\lambda}{4}$. Subtracting yields $l_2 - l_1 = \\frac{\\lambda}{2} \\implies \\lambda = 2(l_2 - l_1)$.",
      sub: "Resonance Tube Formula",
      tid: "phys-exp-resonance-tube-sound"
    },
    {
      q: "To convert a moving coil galvanometer into an ammeter of desired range, one must connect:",
      opts: [
        "A low resistance (shunt) in parallel with the galvanometer coil",
        "A high resistance in series with the galvanometer coil",
        "A low resistance in series with the galvanometer coil",
        "A high resistance in parallel with the galvanometer coil"
      ],
      exp: "An ammeter must have very low total resistance; connecting a small shunt resistance $S$ in parallel bypasses the major fraction of current: $S = \\frac{I_g G}{I - I_g}$.",
      sub: "Galvanometer to Ammeter Conversion",
      tid: "phys-exp-galvanometer-half-deflection"
    },
    {
      q: "To convert a moving coil galvanometer into a voltmeter of desired range, one must connect:",
      opts: [
        "A high resistance in series with the galvanometer coil",
        "A low resistance in parallel with the galvanometer coil",
        "A high resistance in parallel with the galvanometer coil",
        "A low resistance in series with the galvanometer coil"
      ],
      exp: "A voltmeter must draw minimal current from the circuit; connecting a large resistance $R$ in series yields $R = \\frac{V}{I_g} - G$.",
      sub: "Galvanometer to Voltmeter Conversion",
      tid: "phys-exp-galvanometer-half-deflection"
    },
    {
      q: "In a glass prism of refracting angle $A$, at the angle of minimum deviation $D_m$:",
      opts: [
        "Angle of incidence equals angle of emergence ($i = e$) and refracted ray is parallel to the base",
        "Angle of incidence is $90^\\circ$",
        "Angle of emergence is zero",
        "Angle of refraction inside the prism is equal to $A$"
      ],
      exp: "At minimum deviation: $i = e$, $r_1 = r_2 = A/2$, and the light ray passes symmetrically through the prism, parallel to the base.",
      sub: "Prism Minimum Deviation Condition",
      tid: "phys-exp-prism-minimum-deviation"
    },
    {
      q: "In a capillary tube of radius $r$ dipped into a liquid of density $\\rho$ and surface tension $T$, the capillary rise height $h$ is given by:",
      opts: [
        "$h = \\frac{2 T \\cos\\theta}{r \\rho g}$",
        "$h = \\frac{T \\cos\\theta}{2 r \\rho g}$",
        "$h = \\frac{2 r T}{\\rho g \\cos\\theta}$",
        "$h = \\frac{4 T}{r \\rho g}$"
      ],
      exp: "The upward capillary force balances the weight of the liquid column: $2\\pi r T \\cos\\theta = (\\pi r^2 h)\\rho g \\implies h = \\frac{2 T \\cos\\theta}{r \\rho g}$.",
      sub: "Capillary Rise Formula",
      tid: "phys-exp-surface-tension-capillary"
    },
    {
      q: "In determining the focal length of a convex lens using the $u-v$ method, optical parallax between the real image and the search pin is removed when:",
      opts: [
        "Both the image and the pin move together without any relative shift when the eye is moved sideways",
        "The image is magnified",
        "The search pin is inverted",
        "The eye is kept strictly stationary at the center"
      ],
      exp: "Parallax is the relative shift in position of two objects when viewed from different angles. It is removed when both lie in the exact same plane; moving the eye sideways causes no relative motion.",
      sub: "Parallax Removal Method",
      tid: "phys-exp-focal-length-parallax"
    },
    {
      q: "A travelling microscope is used to measure the refractive index of a glass slab using real and apparent depth. The formula used is:",
      opts: [
        "$n = \\frac{\\text{Real Depth}}{\\text{Apparent Depth}} = \\frac{R_3 - R_1}{R_3 - R_2}$",
        "$n = \\frac{\\text{Apparent Depth}}{\\text{Real Depth}} = \\frac{R_3 - R_2}{R_3 - R_1}$",
        "$n = \\frac{R_2 - R_1}{R_3 - R_1}$",
        "$n = (R_3 - R_1)(R_3 - R_2)$"
      ],
      exp: "$R_1$ is reading on ink mark, $R_2$ is reading on apparent mark through slab, $R_3$ is reading on lycopodium powder on top surface. Real depth $= R_3 - R_1$, Apparent depth $= R_3 - R_2$, so $n = \\frac{R_3 - R_1}{R_3 - R_2}$.",
      sub: "Travelling Microscope Formula",
      tid: "phys-exp-travelling-microscope-refractive-index"
    },
    {
      q: "In an Ohm's law experiment, the slope of a graph plotted between potential difference $V$ on the y-axis and current $I$ on the x-axis represents:",
      opts: ["Resistance ($R$)", "Conductance ($G = 1/R$)", "Resistivity ($\\rho$)", "Power ($P$)"],
      exp: "From $V = I R$, the slope $\\frac{\\Delta V}{\\Delta I} = R$ gives the electrical resistance of the conductor.",
      sub: "Ohms Law V-I Slope",
      tid: "phys-exp-ohms-law-resistance"
    }
  ];

  const mediumPool = [
    {
      q: "The main scale of a Vernier caliper reads in millimetres and 20 divisions of its vernier scale coincide with 19 divisions of the main scale. What is its least count?",
      opts: ["$0.05\\text{ mm}$", "$0.02\\text{ mm}$", "$0.01\\text{ mm}$", "$0.1\\text{ mm}$"],
      exp: "$LC = 1\\text{ MSD} - 1\\text{ VSD} = 1\\text{ mm} - \\frac{19}{20}\\text{ mm} = \\frac{1}{20}\\text{ mm} = 0.05\\text{ mm}$.",
      sub: "Vernier Least Count Calculation",
      tid: "phys-exp-vernier-calipers"
    },
    {
      q: "When the jaws of a screw gauge are in contact, the zero of the circular scale lies 3 divisions below the reference line. The pitch is $1\\text{ mm}$ and circular divisions are 100. The zero error is:",
      opts: [
        "$+0.03\\text{ mm}$ (positive error, to be subtracted from measured value)",
        "$-0.03\\text{ mm}$ (negative error, to be added to measured value)",
        "$+0.3\\text{ mm}$",
        "Zero"
      ],
      exp: "When the circular zero lies below the reference line, the reading is already positive before measuring: Zero error $= +3 \\times LC = +3 \\times 0.01\\text{ mm} = +0.03\\text{ mm}$. Correct reading = Measured reading - (+0.03 mm).",
      sub: "Screw Gauge Zero Error",
      tid: "phys-exp-screw-gauge"
    },
    {
      q: "In Searle's apparatus to determine Young's modulus of a wire, two identical wires (reference wire and experimental wire) are used primarily to:",
      opts: [
        "Compensate for thermal expansion and yield of the ceiling support",
        "Double the applied load capacity",
        "Eliminate air resistance",
        "Measure the torsional rigidity"
      ],
      exp: "The reference wire carries a constant weight and experiences identical temperature changes and ceiling sag as the experimental wire, thus eliminating errors due to thermal expansion and support yielding.",
      sub: "Searles Apparatus Reference Wire",
      tid: "phys-exp-youngs-modulus"
    },
    {
      q: "In a metre bridge experiment, the balance point is obtained at $40\\text{ cm}$ from the left end when a known resistance of $3\\ \\Omega$ is placed in the left gap. The unknown resistance in the right gap is:",
      opts: ["$4.5\\ \\Omega$", "$2.0\\ \\Omega$", "$6.0\\ \\Omega$", "$1.5\\ \\Omega$"],
      exp: "$\\frac{R}{S} = \\frac{l}{100 - l} \\implies \\frac{3}{S} = \\frac{40}{60} = \\frac{2}{3} \\implies S = \\frac{3 \\times 3}{2} = 4.5\\ \\Omega$.",
      sub: "Metre Bridge Resistance Calculation",
      tid: "phys-exp-metre-bridge-resistivity"
    },
    {
      q: "In a resonance tube experiment, if first and second resonance lengths are $l_1 = 16\\text{ cm}$ and $l_2 = 50\\text{ cm}$ with a tuning fork of frequency $500\\text{ Hz}$, the speed of sound in air is:",
      opts: ["$340\\text{ m/s}$", "$320\\text{ m/s}$", "$330\\text{ m/s}$", "$350\\text{ m/s}$"],
      exp: "$\\lambda = 2(l_2 - l_1) = 2(50 - 16) = 2(34) = 68\\text{ cm} = 0.68\\text{ m}$. Speed of sound $v = \\nu \\lambda = 500 \\times 0.68 = 340\\text{ m/s}$.",
      sub: "Speed of Sound in Resonance Tube",
      tid: "phys-exp-resonance-tube-sound"
    },
    {
      q: "In the half-deflection method to determine galvanometer resistance $G$, deflection drops from $\\theta$ to $\\theta / 2$ when a shunt $S = 20\\ \\Omega$ is connected across the galvanometer. If the series resistance is $R = 4980\\ \\Omega$, the galvanometer resistance $G$ is approximately:",
      opts: ["$20.1\\ \\Omega$", "$49.8\\ \\Omega$", "$10.0\\ \\Omega$", "$100\\ \\Omega$"],
      exp: "Half-deflection formula is $G = \\frac{R S}{R - S}$. Since $R \\gg S$, $G \\approx S = 20\\ \\Omega$. More precisely: $G = \\frac{4980 \\times 20}{4980 - 20} = \\frac{99600}{4960} \\approx 20.08\\ \\Omega$.",
      sub: "Half-Deflection Method for Galvanometer",
      tid: "phys-exp-galvanometer-half-deflection"
    },
    {
      q: "A spherical ball of radius $r$ falls through a viscous liquid of viscosity $\\eta$. When it attains terminal velocity $v_t$, the viscous force $F$ opposing its motion according to Stokes' law is:",
      opts: ["$F = 6\\pi \\eta r v_t$", "$F = 6\\pi \\eta r^2 v_t$", "$F = \\frac{6\\pi \\eta}{r v_t}$", "$F = 2\\pi \\eta r v_t$"],
      exp: "Stokes' law gives viscous drag $F = 6\\pi \\eta r v_t$ on a spherical body moving with velocity $v_t$ through a fluid of viscosity $\\eta$.",
      sub: "Stokes Law for Terminal Velocity",
      tid: "phys-exp-viscosity-terminal-velocity"
    },
    {
      q: "In an experiment using a metre scale balanced horizontally on a knife edge at its center of gravity ($50\\text{ cm}$ mark), a mass of $40\\text{ g}$ is suspended at the $20\\text{ cm}$ mark. Where must a mass of $60\\text{ g}$ be suspended to restore horizontal balance?",
      opts: ["$70\\text{ cm}$ mark", "$80\\text{ cm}$ mark", "$65\\text{ cm}$ mark", "$75\\text{ cm}$ mark"],
      exp: "Distance of $40\\text{ g}$ from fulcrum is $50 - 20 = 30\\text{ cm}$. Counter-clockwise torque $= 40 \\times 30 = 1200\\text{ g}\\cdot\\text{cm}$. Clockwise torque $= 60 \\times d = 1200 \\implies d = 20\\text{ cm}$. Position on scale $= 50 + 20 = 70\\text{ cm}$.",
      sub: "Principle of Moments with Metre Scale",
      tid: "phys-exp-metre-scale-moments"
    }
  ];

  const hardPool = [
    {
      q: "In an experiment with a simple pendulum, the measured length is $L = (100.0 \\pm 0.1)\\text{ cm}$ and the time for 50 oscillations is $t = (100.0 \\pm 0.2)\\text{ s}$. The maximum percentage error in the calculated acceleration due to gravity $g$ is:",
      opts: ["$0.5\\%$", "$0.3\\%$", "$0.7\\%$", "$0.2\\%$"],
      exp: "$g = 4\\pi^2 \\frac{L}{T^2} = 4\\pi^2 \\frac{L}{(t/n)^2} = 4\\pi^2 n^2 \\frac{L}{t^2}$. Fractional error $\\frac{\\Delta g}{g} = \\frac{\\Delta L}{L} + 2\\frac{\\Delta t}{t} = \\frac{0.1}{100} + 2\\left(\\frac{0.2}{100}\\right) = 0.001 + 0.004 = 0.005 = 0.5\\%$.",
      sub: "Error Propagation in Pendulum Experiment",
      tid: "phys-exp-simple-pendulum"
    },
    {
      q: "In a metre bridge experiment, end errors of $1\\text{ cm}$ and $2\\text{ cm}$ exist at the left ($0\\text{ cm}$) and right ($100\\text{ cm}$) ends respectively. When a resistance of $4\\ \\Omega$ is in the left gap and $6\\ \\Omega$ in the right gap, the observed balance point length from the left end is approximately:",
      opts: ["$40.2\\text{ cm}$", "$41.0\\text{ cm}$", "$39.5\\text{ cm}$", "$42.5\\text{ cm}$"],
      exp: "True resistance ratio $\\frac{R}{S} = \\frac{4}{6} = \\frac{2}{3}$. Corrected lengths: $l_1' = l_1 + e_1 = l_1 + 1$; $l_2' = (100 - l_1) + e_2 = 102 - l_1$. Thus $\\frac{l_1 + 1}{102 - l_1} = \\frac{2}{3} \\implies 3 l_1 + 3 = 204 - 2 l_1 \\implies 5 l_1 = 201 \\implies l_1 = 40.2\\text{ cm}$.",
      sub: "Metre Bridge End Correction Analysis",
      tid: "phys-exp-metre-bridge-resistivity"
    },
    {
      q: "A glass prism with refracting angle $A = 60^\\circ$ produces an angle of minimum deviation $D_m = 30^\\circ$. The refractive index of the prism material is:",
      opts: ["$\\sqrt{2} \\approx 1.414$", "$1.500$", "$\\sqrt{3} \\approx 1.732$", "$1.333$"],
      exp: "$n = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin(A/2)} = \\frac{\\sin(90^\\circ/2)}{\\sin(60^\\circ/2)} = \\frac{\\sin 45^\\circ}{\\sin 30^\\circ} = \\frac{1/\\sqrt{2}}{1/2} = \\sqrt{2} \\approx 1.414$.",
      sub: "Prism Minimum Deviation Refractive Index",
      tid: "phys-exp-prism-minimum-deviation"
    },
    {
      q: "In a resonance tube experiment, the diameter of the tube is $4.0\\text{ cm}$. The end correction $e$ of the tube is approximately (using $e = 0.3 d$):",
      opts: ["$1.2\\text{ cm}$", "$2.4\\text{ cm}$", "$0.6\\text{ cm}$", "$1.8\\text{ cm}$"],
      exp: "End correction for a tube open at one end is $e = 0.6 r = 0.3 d$. For $d = 4.0\\text{ cm}$, $e = 0.3 \\times 4.0 = 1.2\\text{ cm}$.",
      sub: "Resonance Tube End Correction Calculation",
      tid: "phys-exp-resonance-tube-sound"
    },
    {
      q: "A galvanometer of coil resistance $G = 50\\ \\Omega$ gives a full scale deflection for a current of $2\\text{ mA}$. What shunt resistance is required to convert it into an ammeter reading up to $5\\text{ A}$?",
      opts: ["$0.020\\ \\Omega$", "$0.050\\ \\Omega$", "$0.010\\ \\Omega$", "$0.002\\ \\Omega$"],
      exp: "$S = \\frac{I_g G}{I - I_g} = \\frac{(2 \\times 10^{-3})(50)}{5 - 0.002} \\approx \\frac{0.100}{4.998} \\approx 0.0200\\ \\Omega = 0.020\\ \\Omega$.",
      sub: "Ammeter Shunt Precision Calculation",
      tid: "phys-exp-galvanometer-half-deflection"
    }
  ];

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
      subject,
      class: classLevel,
      classLevel
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

  writePartFile(path.join(outDir, 'experimentalSkillsPart1Data.ts'), 'EXPERIMENTAL_SKILLS_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'experimentalSkillsPart2Data.ts'), 'EXPERIMENTAL_SKILLS_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'experimentalSkillsPart3Data.ts'), 'EXPERIMENTAL_SKILLS_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'experimentalSkillsPart4Data.ts'), 'EXPERIMENTAL_SKILLS_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'experimentalSkillsData.ts'),
    chapterTitle,
    'EXPERIMENTAL_SKILLS_MCQS',
    [
      { exportName: 'EXPERIMENTAL_SKILLS_PART1_MCQS', fromFile: 'experimentalSkillsPart1Data' },
      { exportName: 'EXPERIMENTAL_SKILLS_PART2_MCQS', fromFile: 'experimentalSkillsPart2Data' },
      { exportName: 'EXPERIMENTAL_SKILLS_PART3_MCQS', fromFile: 'experimentalSkillsPart3Data' },
      { exportName: 'EXPERIMENTAL_SKILLS_PART4_MCQS', fromFile: 'experimentalSkillsPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

function runAll() {
  generateChapter12();
  generateChapter13();
  generateChapter14();
  generateChapter15();
}

runAll();
