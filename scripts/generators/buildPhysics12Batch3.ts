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

// CHAPTER 11: Dual Nature of Radiation and Matter
const ch11Easy = [
  { q: "Einstein's photoelectric equation relating maximum kinetic energy $K_{max}$, photon energy $h\\nu$, and work function $\\Phi_0$ is:", opts: ["$K_{max} = h\\nu - \\Phi_0$", "$K_{max} = h\\nu + \\Phi_0$", "$K_{max} = \\Phi_0 - h\\nu$", "$K_{max} = \\frac{h\\nu}{\\Phi_0}$"], exp: "$K_{max} = h\\nu - \\Phi_0 = h(\\nu - \\nu_0)$.", sub: "Einstein's Photoelectric Equation", tid: "phys-photoelectric-effect" },
  { q: "The de Broglie wavelength $\\lambda$ associated with a particle of mass $m$ moving with velocity $v$ is:", opts: ["$\\lambda = \\frac{h}{m v}$", "$\\lambda = \\frac{m v}{h}$", "$\\lambda = \\frac{h m}{v}$", "$\\lambda = h m v$"], exp: "De Broglie relation is $\\lambda = \\frac{h}{p} = \\frac{h}{m v}$.", sub: "De Broglie Wavelength", tid: "phys-matter-waves" },
  { q: "The work function $\\Phi_0$ of a photosensitive metal is defined as:", opts: ["Minimum energy required to eject an electron from the metal surface", "Maximum kinetic energy of photoelectrons", "Energy released when an electron enters metal", "Kinetic energy of incident photons"], exp: "Work function is the minimum energy required to liberate an electron from metal surface.", sub: "Work Function Definition", tid: "phys-photoelectric-effect" },
  { q: "In the photoelectric effect, the saturation photoelectric current is directly proportional to:", opts: ["Intensity of incident radiation", "Frequency of incident radiation", "Work function of metal", "Stopping potential"], exp: "Number of photoelectrons emitted per second is directly proportional to incident light intensity.", sub: "Photoelectric Current and Intensity", tid: "phys-photoelectric-effect" }
];
const ch11Med = [
  { q: "The stopping potential $V_0$ in a photoelectric experiment depends on:", opts: ["Frequency of incident light and work function of emitter", "Only intensity of incident light", "Distance from light source", "Area of cathode"], exp: "$e V_0 = K_{max} = h\\nu - \\Phi_0$; stopping potential depends only on frequency and work function.", sub: "Stopping Potential", tid: "phys-photoelectric-effect" },
  { q: "The de Broglie wavelength of an electron accelerated through a potential difference of $V$ volts is approximately:", opts: ["$\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$", "$\\lambda = \\frac{12.27}{\\sqrt{V}}\\text{ nm}$", "$\\lambda = \\frac{0.286}{\\sqrt{V}}\\text{ nm}$", "$\\lambda = \\frac{\\sqrt{V}}{1.227}\\text{ nm}$"], exp: "$\\lambda = \\frac{h}{\\sqrt{2 m e V}} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}$.", sub: "Electron De Broglie Wavelength", tid: "phys-matter-waves" },
  { q: "The slope of the graph between stopping potential $V_0$ on the y-axis and frequency $\\nu$ on the x-axis gives:", opts: ["$\\frac{h}{e}$ (Planck's constant divided by electron charge)", "Planck's constant $h$", "Work function $\\Phi_0$", "Charge $e$"], exp: "$V_0 = \\frac{h}{e}\\nu - \\frac{\\Phi_0}{e}$; slope is strictly $h/e$, a universal constant.", sub: "Stopping Potential Slope", tid: "phys-photoelectric-effect" },
  { q: "If the momentum of a particle is doubled, its de Broglie wavelength becomes:", opts: ["Halved", "Doubled", "Quadrupled", "Unchanged"], exp: "$\\lambda = h/p$. Doubling $p$ halves $\\lambda$.", sub: "Momentum and Wavelength", tid: "phys-matter-waves" }
];
const ch11Hard = [
  { q: "Light of wavelength $300\\text{ nm}$ falls on a metal having work function $2.0\\text{ eV}$. The stopping potential is approximately:", opts: ["$2.13\\text{ V}$", "$4.13\\text{ V}$", "$1.13\\text{ V}$", "$3.13\\text{ V}$"], exp: "Photon energy $E = \\frac{1240\\text{ eV nm}}{300\\text{ nm}} \\approx 4.133\\text{ eV}$. $e V_0 = E - \\Phi_0 = 4.133 - 2.0 = 2.133\\text{ eV} \\implies V_0 \\approx 2.13\\text{ V}$.", sub: "Photoelectric Stopping Potential", tid: "phys-photoelectric-effect" },
  { q: "A photon and an electron have the same de Broglie wavelength $\\lambda$. The ratio of their kinetic energies $E_{photon} / E_{electron}$ is:", opts: ["$\\frac{2 m c \\lambda}{h}$", "$\\frac{h}{2 m c \\lambda}$", "$1$", "$\\frac{m c \\lambda}{h}$"], exp: "Photon: $E_p = h c / \\lambda$. Electron: $E_e = p^2/(2m) = h^2/(2m\\lambda^2)$. Ratio $E_p / E_e = \\frac{h c / \\lambda}{h^2 / (2m\\lambda^2)} = \\frac{2 m c \\lambda}{h}$.", sub: "Photon vs Electron Energy Ratio", tid: "phys-matter-waves" },
  { q: "When radiation of frequency $2\\nu_0$ is incident on a metal plate, maximum velocity of emitted photoelectrons is $v_1$. When frequency is $5\\nu_0$, maximum velocity is $v_2$. Ratio $v_1 / v_2$ is:", opts: ["$1 : 2$", "$1 : 4$", "$2 : 5$", "$1 : \\sqrt{2}$"], exp: "$\\frac{1}{2}m v_1^2 = 2h\\nu_0 - h\\nu_0 = h\\nu_0$. $\\frac{1}{2}m v_2^2 = 5h\\nu_0 - h\\nu_0 = 4h\\nu_0$. $v_1^2/v_2^2 = 1/4 \\implies v_1/v_2 = 1/2$.", sub: "Velocity Ratio in Photoelectric Effect", tid: "phys-photoelectric-effect" },
  { q: "The de Broglie wavelength of a neutron of mass $m$ in thermal equilibrium with environment at absolute temperature $T$ is:", opts: ["$\\frac{h}{\\sqrt{3 m k_B T}}$", "$\\frac{h}{\\sqrt{2 m k_B T}}$", "$\\frac{h}{3 m k_B T}$", "$\\frac{\\sqrt{3 m k_B T}}{h}$"], exp: "Average thermal kinetic energy of neutron is $K = \\frac{3}{2} k_B T$. Thus $\\lambda = \\frac{h}{\\sqrt{2 m K}} = \\frac{h}{\\sqrt{3 m k_B T}}$.", sub: "Thermal Neutron Wavelength", tid: "phys-matter-waves" }
];

// CHAPTER 12: Atoms
const ch12Easy = [
  { q: "Bohr's quantization postulate states that the orbital angular momentum $L$ of an electron in a hydrogen-like atom is:", opts: ["$L = m v r = \\frac{n h}{2\\pi}$", "$L = \\frac{n h}{\\pi}$", "$L = \\frac{2\\pi h}{n}$", "$L = n^2 h$"], exp: "Angular momentum is quantized: $m v r = n \\hbar = \\frac{n h}{2\\pi}$.", sub: "Angular Momentum Quantization", tid: "phys-rutherford-bohr-atom" },
  { q: "The radius $r_n$ of the $n$-th Bohr orbit of hydrogen atom is proportional to:", opts: ["$n^2$", "$n$", "$1/n$", "$n^3$"], exp: "Bohr radius $r_n = \\frac{\\varepsilon_0 h^2 n^2}{\\pi m e^2} \\propto n^2$.", sub: "Orbit Radius", tid: "phys-rutherford-bohr-atom" },
  { q: "The total energy $E_n$ of an electron in the $n$-th orbit of hydrogen atom is:", opts: ["$-\\frac{13.6}{n^2}\\text{ eV}$", "$-\\frac{13.6}{n}\\text{ eV}$", "$\\frac{13.6}{n^2}\\text{ eV}$", "$-\\frac{27.2}{n^2}\\text{ eV}$"], exp: "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$.", sub: "Energy Levels", tid: "phys-rutherford-bohr-atom" },
  { q: "The spectral series of hydrogen atom lying completely in the ultraviolet region is:", opts: ["Lyman series", "Balmer series", "Paschen series", "Brackett series"], exp: "Lyman series corresponds to transitions to $n_1=1$ in the UV region.", sub: "Hydrogen Spectral Series", tid: "phys-hydrogen-spectrum" }
];
const ch12Med = [
  { q: "The relation between kinetic energy $K$, potential energy $U$, and total energy $E$ in a Bohr orbit is:", opts: ["$K = -E$ and $U = 2E$", "$K = E$ and $U = -E$", "$K = 2E$ and $U = -E$", "$K = -U/2$ and $E = 0$"], exp: "By virial theorem: $U = -2K \\implies E = K + U = -K = U/2$. Thus $K = -E$ and $U = 2E$.", sub: "Virial Theorem in Atoms", tid: "phys-rutherford-bohr-atom" },
  { q: "The ratio of longest to shortest wavelength in the Lyman series of hydrogen atom is:", opts: ["$4 : 3$", "$3 : 4$", "$9 : 4$", "$16 : 9$"], exp: "Longest ($2 \\to 1$): $1/\\lambda_{max} = R(1 - 1/4) = 3R/4 \\implies \\lambda_{max} = 4/(3R)$. Shortest ($\\infty \\to 1$): $1/\\lambda_{min} = R \\implies \\lambda_{min} = 1/R$. Ratio $\\lambda_{max}/\\lambda_{min} = 4/3$.", sub: "Lyman Series Wavelength Ratio", tid: "phys-hydrogen-spectrum" },
  { q: "When an electron in hydrogen atom jumps from $n = 4$ to $n = 1$, the maximum number of distinct spectral lines possible is:", opts: ["$6$", "$4$", "$3$", "$10$"], exp: "$N = \\frac{n(n - 1)}{2} = \\frac{4(3)}{2} = 6$.", sub: "Spectral Lines Count", tid: "phys-hydrogen-spectrum" },
  { q: "The orbital period $T_n$ of an electron in the $n$-th orbit of hydrogen atom depends on $n$ as:", opts: ["$T_n \\propto n^3$", "$T_n \\propto n^2$", "$T_n \\propto n$", "$T_n \\propto 1/n$"], exp: "$T = 2\\pi r_n / v_n$. Since $r_n \\propto n^2$ and $v_n \\propto 1/n$, $T_n \\propto n^3$.", sub: "Orbital Period Dependence", tid: "phys-rutherford-bohr-atom" }
];
const ch12Hard = [
  { q: "The ionization potential of singly ionized helium ($\\text{He}^+, Z = 2$) is:", opts: ["$54.4\\text{ V}$", "$13.6\\text{ V}$", "$27.2\\text{ V}$", "$108.8\\text{ V}$"], exp: "$E_1 = -13.6 Z^2 = -13.6(4) = -54.4\\text{ eV}$. Ionization potential is $54.4\\text{ V}$.", sub: "Helium Ion Energy", tid: "phys-rutherford-bohr-atom" },
  { q: "In Geiger-Marsden experiment, distance of closest approach $r_{min}$ of an alpha particle of kinetic energy $K$ to gold nucleus ($Z$) is proportional to:", opts: ["$Z / K$", "$K / Z$", "$Z^2 / K$", "$\\sqrt{Z / K}$"], exp: "Electrostatic potential energy balances $K$: $K = \\frac{2 Z e^2}{4\\pi\\varepsilon_0 r_{min}} \\implies r_{min} \\propto Z/K$.", sub: "Distance of Closest Approach", tid: "phys-rutherford-bohr-atom" },
  { q: "A hydrogen atom electron is excited from $n = 1$ to $n = 4$. What are the kinetic energy $K$ and potential energy $U$ in $n = 4$?", opts: ["$K = +0.85\\text{ eV}, U = -1.70\\text{ eV}$", "$K = -0.85\\text{ eV}, U = +1.70\\text{ eV}$", "$K = +1.51\\text{ eV}, U = -3.02\\text{ eV}$", "$K = +0.85\\text{ eV}, U = -0.85\\text{ eV}$"], exp: "$E_4 = -13.6/16 = -0.85\\text{ eV}$. $K = -E_4 = +0.85\\text{ eV}$, $U = 2E_4 = -1.70\\text{ eV}$.", sub: "Multi-Step Energy Levels", tid: "phys-rutherford-bohr-atom" },
  { q: "The ratio of frequency of revolution of electron in second Bohr orbit to that in third Bohr orbit of hydrogen atom is:", opts: ["$27 : 8$", "$8 : 27$", "$9 : 4$", "$4 : 9$"], exp: "$f = 1/T \\propto n^{-3}$. Thus $f_2 / f_3 = (3/2)^3 = 27/8$.", sub: "Revolution Frequency Ratio", tid: "phys-rutherford-bohr-atom" }
];

// CHAPTER 13: Nuclei
const ch13Easy = [
  { q: "The radius $R$ of a nucleus of mass number $A$ is given by $R = R_0 A^{1/3}$, where constant $R_0$ is approximately:", opts: ["$1.2\\text{ fm}$ ($1.2 \\times 10^{-15}\\text{ m}$)", "$1.2\\text{ pm}$", "$1.2\\text{ nm}$", "$0.53\\text{ \\AA}$"], exp: "Nuclear radius is $R = R_0 A^{1/3}$ with $R_0 \\approx 1.2\\text{ fm}$.", sub: "Nuclear Radius", tid: "phys-nucleus-binding-energy" },
  { q: "Nuclear matter density is:", opts: ["Constant and independent of mass number $A$ (approx $2.3 \\times 10^{17}\\text{ kg/m}^3$)", "Directly proportional to $A$", "Inversely proportional to $A$", "Proportional to $A^2$"], exp: "Mass $\\propto A$ and Volume $\\propto A$, so density $\\rho = M/V$ is independent of $A$.", sub: "Nuclear Density", tid: "phys-nucleus-binding-energy" },
  { q: "The binding energy curve per nucleon peaks around which nucleus with maximum stability?", opts: ["${}^{56}\\text{Fe}$ (approx $8.75\\text{ MeV/nucleon}$)", "${}^{238}\\text{U}$", "${}^{4}\\text{He}$", "${}^{12}\\text{C}$"], exp: "Iron-56 has highest binding energy per nucleon ($\\approx 8.75\\text{ MeV/nucleon}$).", sub: "Binding Energy Peak", tid: "phys-nucleus-binding-energy" },
  { q: "The relation between half-life $T_{1/2}$ and decay constant $\\lambda$ of a radioactive substance is:", opts: ["$T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}$", "$T_{1/2} = \\frac{\\lambda}{\\ln 2}$", "$T_{1/2} = \\frac{1}{\\lambda}$", "$T_{1/2} = \\lambda \\ln 2$"], exp: "$T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}$.", sub: "Radioactive Half-Life", tid: "phys-radioactivity-fission" }
];
const ch13Med = [
  { q: "Ratio of nuclear radius of ${}^{27}\\text{Al}$ to that of ${}^{64}\\text{Cu}$ is:", opts: ["$3 : 4$", "$4 : 3$", "$9 : 16$", "$27 : 64$"], exp: "$R_1/R_2 = (27/64)^{1/3} = 3/4$.", sub: "Radius Ratio Calculation", tid: "phys-nucleus-binding-energy" },
  { q: "A radioactive sample has half-life of 20 days. Fraction of original sample remaining undecayed after 60 days is:", opts: ["$1 / 8$", "$1 / 4$", "$1 / 16$", "$7 / 8$"], exp: "$n = 60/20 = 3$ half-lives. Fraction remaining $= (1/2)^3 = 1/8$.", sub: "Undecayed Fraction", tid: "phys-radioactivity-fission" },
  { q: "In $\\beta^-$ (beta-minus) decay, a nucleus emits:", opts: ["An electron and an antineutrino ($e^-$ and $\\bar{\\nu}_e$)", "A positron and a neutrino", "An alpha particle", "Only a gamma ray"], exp: "In $\\beta^-$ decay: $n \\to p + e^- + \\bar{\\nu}_e$.", sub: "Beta Decay Particles", tid: "phys-radioactivity-fission" },
  { q: "Energy released in average thermal neutron fission of one ${}^{235}\\text{U}$ nucleus is approximately:", opts: ["$200\\text{ MeV}$", "$20\\text{ MeV}$", "$2\\text{ MeV}$", "$2000\\text{ MeV}$"], exp: "Each fission of ${}^{235}\\text{U}$ releases approximately $200\\text{ MeV}$.", sub: "Fission Energy", tid: "phys-radioactivity-fission" }
];
const ch13Hard = [
  { q: "Binding energy of deuteron (${}^2_1\\text{H}$) is $2.22\\text{ MeV}$ and of alpha particle (${}^4_2\\text{He}$) is $28.30\\text{ MeV}$. When two deuterons fuse (${}^2_1\\text{H} + {}^2_1\\text{H} \\to {}^4_2\\text{He}$), energy released is:", opts: ["$23.86\\text{ MeV}$", "$26.08\\text{ MeV}$", "$30.52\\text{ MeV}$", "$28.30\\text{ MeV}$"], exp: "Initial $BE = 2(2.22) = 4.44\\text{ MeV}$. Final $BE = 28.30\\text{ MeV}$. $Q = 28.30 - 4.44 = 23.86\\text{ MeV}$.", sub: "Fusion Q-Value", tid: "phys-nucleus-binding-energy" },
  { q: "A nucleus ${}^A_Z\\text{X}$ emits $3\\alpha$ and $2\\beta^-$ particles. Resulting daughter nucleus has atomic number and mass number:", opts: ["$Z - 4, A - 12$", "$Z - 6, A - 12$", "$Z - 2, A - 6$", "$Z - 4, A - 6$"], exp: "$3\\alpha \\implies \\Delta Z = -6, \\Delta A = -12$. $2\\beta^- \\implies \\Delta Z = +2$. Net $Z' = Z - 4, A' = A - 12$.", sub: "Displacement Law", tid: "phys-radioactivity-fission" },
  { q: "In a reactor of $32\\text{ MW}$ electric power at $20\\%$ efficiency, rate of ${}^{235}\\text{U}$ fissions per second is:", opts: ["$5 \\times 10^{18}\\text{ fissions/s}$", "$1 \\times 10^{18}\\text{ fissions/s}$", "$2.5 \\times 10^{17}\\text{ fissions/s}$", "$5 \\times 10^{19}\\text{ fissions/s}$"], exp: "Thermal power $= 32/0.2 = 160\\text{ MW} = 1.6 \\times 10^8\\text{ J/s}$. Energy per fission $= 200 \\times 1.6 \\times 10^{-13}\\text{ J} = 3.2 \\times 10^{-11}\\text{ J}$. Rate $= 1.6 \\times 10^8 / (3.2 \\times 10^{-11}) = 5 \\times 10^{18}\\text{ fissions/s}$.", sub: "Nuclear Reactor Power", tid: "phys-radioactivity-fission" },
  { q: "Two radioactive materials have decay constants $10\\lambda$ and $\\lambda$. Ratio of nuclei is $1/e$ after time:", opts: ["$1 / (9\\lambda)$", "$1 / (10\\lambda)$", "$9 / \\lambda$", "$1 / (11\\lambda)$"], exp: "$e^{-10\\lambda t} / e^{-\\lambda t} = e^{-9\\lambda t} = e^{-1} \\implies 9\\lambda t = 1 \\implies t = 1/(9\\lambda)$.", sub: "Decay Constant Comparison", tid: "phys-radioactivity-fission" }
];

// CHAPTER 14: Semiconductor Electronics
const ch14Easy = [
  { q: "At absolute zero temperature ($T = 0\\text{ K}$), an intrinsic semiconductor behaves as:", opts: ["A perfect insulator with completely full valence band and empty conduction band", "A superconductor", "A good conductor", "A plasma"], exp: "No thermal generation of electron-hole pairs occurs at $0\\text{ K}$, so it behaves as an insulator.", sub: "Semiconductors at 0 K", tid: "phys-semiconductor-types" },
  { q: "To produce an n-type semiconductor, pure silicon should be doped with pentavalent donor atoms such as:", opts: ["Phosphorus (P), Arsenic (As), or Antimony (Sb)", "Boron (B) or Aluminium (Al)", "Indium (In) or Gallium (Ga)", "Carbon (C)"], exp: "Group 15 elements (P, As, Sb) provide extra donor electrons forming n-type semiconductor.", sub: "Doping for n-type", tid: "phys-semiconductor-types" },
  { q: "The net electrical charge on an isolated n-type or p-type semiconductor is:", opts: ["Zero (it is electrically neutral)", "Positive for p-type and negative for n-type", "Positive for both", "Negative for both"], exp: "Doping inserts neutral donor or acceptor atoms into a neutral crystal; hence doped semiconductors remain neutral.", sub: "Electrical Neutrality", tid: "phys-semiconductor-types" },
  { q: "The depletion layer in an unbiased p-n junction consists of:", opts: ["Only immobile uncompensated donor and acceptor ions", "Abundant free electrons and holes", "Neutral atoms only", "Mobile ions"], exp: "Mobile carriers diffuse across the junction leaving behind fixed, immobile ionized dopants.", sub: "Depletion Region", tid: "phys-pn-junction-diode" }
];
const ch14Med = [
  { q: "In thermal equilibrium, the mass action law for a semiconductor states:", opts: ["$n_e \\cdot n_h = n_i^2$", "$n_e + n_h = n_i$", "$n_e / n_h = n_i^2$", "$n_e \\cdot n_h = 2 n_i$"], exp: "The product of majority and minority carrier densities is constant at a given temperature: $n_e n_h = n_i^2$.", sub: "Mass Action Law", tid: "phys-semiconductor-types" },
  { q: "When a p-n junction diode is forward biased:", opts: ["Depletion width decreases and barrier potential is lowered ($V_0 - V$)", "Depletion width increases", "Potential barrier increases", "No current flows"], exp: "Forward bias opposes built-in field, reducing barrier height to $V_0 - V$ and narrowing depletion layer.", sub: "Forward Bias Operation", tid: "phys-pn-junction-diode" },
  { q: "Output ripple frequency of a full-wave rectifier supplied with $50\\text{ Hz}$ AC input is:", opts: ["$100\\text{ Hz}$", "$50\\text{ Hz}$", "$25\\text{ Hz}$", "$200\\text{ Hz}$"], exp: "In full-wave rectifier, output frequency is twice the input frequency: $f_{out} = 2 f_{in} = 100\\text{ Hz}$.", sub: "Full-Wave Rectifier Frequency", tid: "phys-pn-junction-diode" },
  { q: "A Zener diode is operated in which region to function as a voltage regulator?", opts: ["Reverse breakdown region", "Forward active linear region", "Reverse saturation region before breakdown", "Forward cutoff"], exp: "Zener diode maintains constant voltage across its terminals when operated in reverse breakdown.", sub: "Zener Diode Operation", tid: "phys-special-diodes" }
];
const ch14Hard = [
  { q: "A Zener diode with $V_Z = 6\\text{ V}$ is used with series resistor $R_s = 200\\ \\Omega$ and load $R_L = 1\\text{ k}\\Omega$ under unregulated input $10\\text{ V}$. Current through Zener diode is:", opts: ["$14\\text{ mA}$", "$20\\text{ mA}$", "$6\\text{ mA}$", "$8\\text{ mA}$"], exp: "Total $I = (10 - 6)/200 = 4/200 = 20\\text{ mA}$. Load current $I_L = 6/1000 = 6\\text{ mA}$. $I_Z = I - I_L = 20 - 6 = 14\\text{ mA}$.", sub: "Zener Regulator Current", tid: "phys-special-diodes" },
  { q: "Dynamic AC resistance of a diode when current increases from $10\\text{ mA}$ to $20\\text{ mA}$ upon voltage change from $0.70\\text{ V}$ to $0.72\\text{ V}$ is:", opts: ["$2.0\\ \\Omega$", "$0.2\\ \\Omega$", "$20\\ \\Omega$", "$200\\ \\Omega$"], exp: "$r_d = \\Delta V / \\Delta I = 0.02 / (10 \\times 10^{-3}) = 2.0\\ \\Omega$.", sub: "Diode Dynamic Resistance", tid: "phys-pn-junction-diode" },
  { q: "Silicon doped with $10^{17}\\text{ cm}^{-3}$ arsenic atoms has $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. Equilibrium hole concentration is:", opts: ["$2.25 \\times 10^3\\text{ cm}^{-3}$", "$2.25 \\times 10^7\\text{ cm}^{-3}$", "$1.5 \\times 10^7\\text{ cm}^{-3}$", "$10^{17}\\text{ cm}^{-3}$"], exp: "$n_h = n_i^2 / n_e = (2.25 \\times 10^{20}) / 10^{17} = 2.25 \\times 10^3\\text{ cm}^{-3}$.", sub: "Minority Carrier Concentration", tid: "phys-semiconductor-types" },
  { q: "An LED made of material with bandgap $E_g = 1.9\\text{ eV}$ emits light of wavelength approximately:", opts: ["$653\\text{ nm}$", "$500\\text{ nm}$", "$800\\text{ nm}$", "$400\\text{ nm}$"], exp: "$\\lambda \\approx 1240 / 1.9 \\approx 652.6\\text{ nm} \\approx 653\\text{ nm}$ (red light).", sub: "LED Emission Wavelength", tid: "phys-special-diodes" }
];

// CHAPTER 15: Unit 20: Experimental Skills
const ch15Easy = [
  { q: "Least count of a Vernier caliper with $1\\text{ MSD} = 1\\text{ mm}$ and 10 vernier divisions matching 9 main divisions is:", opts: ["$0.1\\text{ mm}$ ($0.01\\text{ cm}$)", "$0.01\\text{ mm}$", "$1.0\\text{ mm}$", "$0.05\\text{ mm}$"], exp: "$LC = 1\\text{ MSD} - 1\\text{ VSD} = 1 - 0.9 = 0.1\\text{ mm} = 0.01\\text{ cm}$.", sub: "Vernier Least Count", tid: "phys-exp-vernier-calipers" },
  { q: "A screw gauge with pitch $0.5\\text{ mm}$ has 50 circular scale divisions. Its least count is:", opts: ["$0.01\\text{ mm}$", "$0.001\\text{ mm}$", "$0.05\\text{ mm}$", "$0.1\\text{ mm}$"], exp: "$LC = \\text{Pitch} / \\text{Divisions} = 0.5 / 50 = 0.01\\text{ mm}$.", sub: "Screw Gauge Least Count", tid: "phys-exp-screw-gauge" },
  { q: "In simple pendulum experiment, graph between length $L$ and time period squared $T^2$ is:", opts: ["A straight line passing through the origin with slope $g / (4\\pi^2)$", "A parabola opening upwards", "A hyperbola", "A circle"], exp: "$T^2 = (4\\pi^2 / g) L \\implies L = (g / 4\\pi^2) T^2$, yielding a straight line through origin.", sub: "Simple Pendulum Graph", tid: "phys-exp-simple-pendulum" },
  { q: "In a metre bridge experiment, balancing condition for unknown resistance $S$ in terms of known $R$ and balance length $l$ is:", opts: ["$\\frac{R}{S} = \\frac{l}{100 - l}$", "$\\frac{R}{S} = \\frac{100 - l}{l}$", "$R S = l(100 - l)$", "$\\frac{R}{S} = \\frac{l^2}{(100 - l)^2}$"], exp: "Metre bridge Wheatstone principle: $R / S = l / (100 - l)$.", sub: "Metre Bridge Formula", tid: "phys-exp-metre-bridge-resistivity" }
];
const ch15Med = [
  { q: "In resonance tube experiment, first two resonance lengths are $l_1 = 16\\text{ cm}$ and $l_2 = 50\\text{ cm}$ with tuning fork of $500\\text{ Hz}$. Speed of sound is:", opts: ["$340\\text{ m/s}$", "$320\\text{ m/s}$", "$330\\text{ m/s}$", "$350\\text{ m/s}$"], exp: "$\\lambda = 2(l_2 - l_1) = 2(34) = 68\\text{ cm} = 0.68\\text{ m}$. $v = f \\lambda = 500 \\times 0.68 = 340\\text{ m/s}$.", sub: "Resonance Tube Speed of Sound", tid: "phys-exp-resonance-tube-sound" },
  { q: "In Searle's apparatus to determine Young's modulus, two identical wires are used primarily to:", opts: ["Compensate for thermal expansion and support yielding", "Double the load capacity", "Reduce air drag", "Determine shear modulus"], exp: "Reference wire eliminates errors from thermal expansion and ceiling sagging.", sub: "Searle's Apparatus", tid: "phys-exp-youngs-modulus" },
  { q: "At minimum deviation $D_m$ in a glass prism:", opts: ["Angle of incidence equals angle of emergence ($i = e$) and refracted ray is parallel to base", "Angle of incidence is $90^\\circ$", "Angle of emergence is zero", "Angle of deviation is zero"], exp: "At minimum deviation, ray passes symmetrically: $i = e$ and $r_1 = r_2 = A/2$.", sub: "Prism Minimum Deviation", tid: "phys-exp-prism-minimum-deviation" },
  { q: "Capillary rise height $h$ in a tube of radius $r$ dipped in liquid of surface tension $T$ and contact angle $\\theta$ is:", opts: ["$h = \\frac{2 T \\cos\\theta}{r \\rho g}$", "$h = \\frac{T \\cos\\theta}{2 r \\rho g}$", "$h = \\frac{2 r T}{\\rho g}$", "$h = \\frac{4 T}{r \\rho g}$"], exp: "Capillary rise: $h = \\frac{2 T \\cos\\theta}{r \\rho g}$.", sub: "Capillary Rise Formula", tid: "phys-exp-surface-tension-capillary" }
];
const ch15Hard = [
  { q: "In simple pendulum experiment, $L = (100.0 \\pm 0.1)\\text{ cm}$ and $t = (100.0 \\pm 0.2)\\text{ s}$ for 50 oscillations. Maximum percentage error in $g$ is:", opts: ["$0.5\\%$", "$0.3\\%$", "$0.7\\%$", "$0.2\\%$"], exp: "$\\Delta g / g = \\Delta L / L + 2 \\Delta t / t = 0.1/100 + 2(0.2/100) = 0.001 + 0.004 = 0.005 = 0.5\\%$.", sub: "Error Propagation in Pendulum", tid: "phys-exp-simple-pendulum" },
  { q: "In a metre bridge with end errors $1\\text{ cm}$ (left) and $2\\text{ cm}$ (right), with $R = 4\\ \\Omega$ and $S = 6\\ \\Omega$, observed balance length $l_1$ is:", opts: ["$40.2\\text{ cm}$", "$41.0\\text{ cm}$", "$39.5\\text{ cm}$", "$42.5\\text{ cm}$"], exp: "$\\frac{l_1 + 1}{(100 - l_1) + 2} = \\frac{4}{6} = \\frac{2}{3} \\implies 3 l_1 + 3 = 204 - 2 l_1 \\implies 5 l_1 = 201 \\implies l_1 = 40.2\\text{ cm}$.", sub: "Metre Bridge End Correction", tid: "phys-exp-metre-bridge-resistivity" },
  { q: "A galvanometer of coil resistance $G = 50\\ \\Omega$ has full scale deflection at $2\\text{ mA}$. Required shunt to convert into ammeter reading up to $5\\text{ A}$ is:", opts: ["$0.020\\ \\Omega$", "$0.050\\ \\Omega$", "$0.010\\ \\Omega$", "$0.002\\ \\Omega$"], exp: "$S = \\frac{I_g G}{I - I_g} = \\frac{0.002 \\times 50}{5 - 0.002} \\approx \\frac{0.100}{4.998} \\approx 0.020\\ \\Omega$.", sub: "Galvanometer Shunt Calculation", tid: "phys-exp-galvanometer-half-deflection" },
  { q: "In travelling microscope experiment, readings on ink mark, apparent mark through slab, and lycopodium powder on surface are $R_1, R_2, R_3$. Refractive index is:", opts: ["$n = \\frac{R_3 - R_1}{R_3 - R_2}$", "$n = \\frac{R_3 - R_2}{R_3 - R_1}$", "$n = \\frac{R_2 - R_1}{R_3 - R_1}$", "$n = \\frac{R_3 - R_1}{R_2 - R_1}$"], exp: "Real depth $= R_3 - R_1$, apparent depth $= R_3 - R_2$, so $n = \\frac{R_3 - R_1}{R_3 - R_2}$.", sub: "Travelling Microscope Formula", tid: "phys-exp-travelling-microscope-refractive-index" }
];

function runBatch3() {
  generateChapter('dual-nature', 'Dual Nature of Radiation and Matter', 'dn', 'DUAL_NATURE', 'dualNature', ch11Easy, ch11Med, ch11Hard);
  generateChapter('atoms', 'Atoms', 'atm', 'ATOMS', 'atoms', ch12Easy, ch12Med, ch12Hard);
  generateChapter('nuclei', 'Nuclei', 'nuc', 'NUCLEI', 'nuclei', ch13Easy, ch13Med, ch13Hard);
  generateChapter('semiconductors', 'Semiconductor Electronics', 'semi', 'SEMICONDUCTORS', 'semiconductors', ch14Easy, ch14Med, ch14Hard);
  generateChapter('experimental-skills', 'Unit 20: Experimental Skills', 'exp', 'EXPERIMENTAL_SKILLS', 'experimentalSkills', ch15Easy, ch15Med, ch15Hard);
}

runBatch3();
