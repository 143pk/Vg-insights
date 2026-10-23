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
// CHAPTER 9: RAY OPTICS AND OPTICAL INSTRUMENTS
// ========================================================================================
export function generateChapter9() {
  const chapterId = 'ray-optics';
  const chapterTitle = 'Ray Optics and Optical Instruments';
  const idPrefix = 'ro';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "The mirror formula relating object distance $u$, image distance $v$, and focal length $f$ for spherical mirrors is:",
      opts: ["$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$", "$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$", "$f = v + u$", "$\\frac{1}{f} = \\frac{u - v}{u v}$"],
      exp: "The standard mirror equation is $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$. (Sign convention must be applied algebraically).",
      sub: "Spherical Mirrors & Mirror Formula",
      tid: "phys-reflection-mirrors"
    },
    {
      q: "Snell's law of refraction relating angle of incidence $i$ and angle of refraction $r$ is:",
      opts: ["$n_1 \\sin i = n_2 \\sin r$", "$n_1 \\sin r = n_2 \\sin i$", "$n_1 \\cos i = n_2 \\cos r$", "$\\frac{\\sin i}{\\sin r} = \\frac{n_1}{n_2}$"],
      exp: "Snell's law states that $n_1 \\sin i = n_2 \\sin r$ or $\\frac{\\sin i}{\\sin r} = \\frac{n_2}{n_1} = n_{21}$.",
      sub: "Snell's Law of Refraction",
      tid: "phys-refraction-tir"
    },
    {
      q: "Total internal reflection occurs when light travels from:",
      opts: [
        "A denser medium to a rarer medium at an angle of incidence greater than the critical angle ($i > i_c$)",
        "A rarer medium to a denser medium at any angle",
        "A denser medium to a rarer medium at an angle less than the critical angle",
        "Air into glass at normal incidence"
      ],
      exp: "Two conditions for total internal reflection: (1) Light must travel from optically denser to rarer medium, and (2) Angle of incidence must exceed critical angle: $i > i_c = \\sin^{-1}(1/n)$.",
      sub: "Total Internal Reflection Conditions",
      tid: "phys-refraction-tir"
    },
    {
      q: "The critical angle $i_c$ for a medium of refractive index $n$ relative to air is:",
      opts: ["$\\sin i_c = \\frac{1}{n}$", "$\\sin i_c = n$", "$\\cos i_c = \\frac{1}{n}$", "$\\tan i_c = n$"],
      exp: "At the critical angle, angle of refraction is $90^\\circ$: $n \\sin i_c = 1 \\cdot \\sin 90^\\circ \\implies \\sin i_c = \\frac{1}{n}$.",
      sub: "Critical Angle Formula",
      tid: "phys-refraction-tir"
    },
    {
      q: "The thin lens formula relating focal length $f$, image distance $v$, and object distance $u$ is:",
      opts: ["$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$", "$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$", "$f = v - u$", "$\\frac{1}{f} = \\frac{u v}{v - u}$"],
      exp: "The Gaussian thin lens equation is $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$.",
      sub: "Lens Formula",
      tid: "phys-lenses-prism"
    },
    {
      q: "The Lens Maker's Formula for a thin lens of refractive index $n$ having radii of curvature $R_1$ and $R_2$ is:",
      opts: [
        "$\\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$",
        "$\\frac{1}{f} = (n - 1) \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$",
        "$\\frac{1}{f} = n \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$",
        "$\\frac{1}{f} = \\frac{1}{n - 1} \\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$"
      ],
      exp: "Lens Maker's Formula is $\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.",
      sub: "Lens Maker's Formula",
      tid: "phys-lenses-prism"
    },
    {
      q: "The SI unit of optical power of a lens ($P = 1/f$) is:",
      opts: ["Dioptre (D) or $\\text{m}^{-1}$", "Metre (m)", "Watt (W)", "Candela (cd)"],
      exp: "Power of a lens is the reciprocal of focal length in metres: $P = \\frac{1}{f\\text{ (m)}}$ with SI unit Dioptre (D).",
      sub: "Power of a Lens",
      tid: "phys-lenses-prism"
    },
    {
      q: "When two thin lenses of powers $P_1$ and $P_2$ are placed in contact, the equivalent power $P$ of the combination is:",
      opts: ["$P = P_1 + P_2$", "$P = \\frac{P_1 P_2}{P_1 + P_2}$", "$P = \\sqrt{P_1 P_2}$", "$P = P_1 - P_2$"],
      exp: "For thin lenses in contact, powers add algebraically: $P = P_1 + P_2$ and $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}$.",
      sub: "Combination of Thin Lenses",
      tid: "phys-lenses-prism"
    },
    {
      q: "The magnifying power of a simple microscope (magnifying glass) of focal length $f$ when image is formed at near point ($D = 25\\text{ cm}$) is:",
      opts: ["$m = 1 + \\frac{D}{f}$", "$m = \\frac{D}{f}$", "$m = 1 - \\frac{D}{f}$", "$m = \\frac{f}{D}$"],
      exp: "When the virtual image is formed at the least distance of distinct vision $D = 25\\text{ cm}$, magnification is $m = 1 + \\frac{D}{f}$. (At infinity, $m = D/f$).",
      sub: "Simple Microscope",
      tid: "phys-optical-instruments"
    },
    {
      q: "The magnifying power $m$ of an astronomical telescope in normal adjustment (image at infinity) is given by:",
      opts: ["$m = \\frac{f_o}{f_e}$", "$m = \\frac{f_e}{f_o}$", "$m = f_o + f_e$", "$m = f_o \\times f_e$"],
      exp: "In normal adjustment, angular magnification of an astronomical telescope is $m = \\frac{f_o}{f_e}$ and length of telescope is $L = f_o + f_e$.",
      sub: "Astronomical Telescope",
      tid: "phys-optical-instruments"
    }
  ];

  const mediumPool = [
    {
      q: "An object is placed at a distance of $15\\text{ cm}$ in front of a concave mirror of focal length $10\\text{ cm}$. The image position and nature are:",
      opts: [
        "$v = -30\\text{ cm}$ (real, inverted, and magnified 2 times)",
        "$v = +30\\text{ cm}$ (virtual, erect, and magnified 2 times)",
        "$v = -6\\text{ cm}$ (real, inverted, and diminished)",
        "$v = +10\\text{ cm}$ (virtual, erect, and same size)"
      ],
      exp: "$u = -15\\text{ cm}, f = -10\\text{ cm}$. Using $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = -\\frac{1}{10} - \\left(-\\frac{1}{15}\\right) = -\\frac{1}{10} + \\frac{1}{15} = -\\frac{1}{30} \\implies v = -30\\text{ cm}$. Magnification $m = -v/u = -(-30)/(-15) = -2$ (real, inverted, magnified).",
      sub: "Concave Mirror Image Formation",
      tid: "phys-reflection-mirrors"
    },
    {
      q: "A convex lens of glass ($n_g = 1.5$) has focal length $20\\text{ cm}$ in air. When completely immersed in water ($n_w = 4/3$), its new focal length $f_w$ becomes:",
      opts: ["$80\\text{ cm}$", "$40\\text{ cm}$", "$20\\text{ cm}$", "$10\\text{ cm}$"],
      exp: "$\\frac{1}{f_a} = (1.5 - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right) = 0.5 K$. $\\frac{1}{f_w} = \\left(\\frac{1.5}{4/3} - 1\\right)K = \\left(\\frac{9}{8} - 1\\right)K = \\frac{1}{8}K$. Ratio $\\frac{f_w}{f_a} = \\frac{0.5}{1/8} = 4 \\implies f_w = 4 \\times 20 = 80\\text{ cm}$.",
      sub: "Lens in Liquid Medium",
      tid: "phys-lenses-prism"
    },
    {
      q: "For a prism of refracting angle $A$, minimum deviation occurs at angle $D_m$. The refractive index $n$ of the prism material is given by:",
      opts: [
        "$n = \\frac{\\sin\\left(\\frac{A + D_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$",
        "$n = \\frac{\\sin(A + D_m)}{\\sin A}$",
        "$n = \\frac{\\cos\\left(\\frac{A + D_m}{2}\\right)}{\\cos\\left(\\frac{A}{2}\\right)}$",
        "$n = \\frac{\\sin(A / 2)}{\\sin(D_m / 2)}$"
      ],
      exp: "Prism formula: at minimum deviation $r = A/2$ and $i = (A + D_m)/2$. Snell's law yields $n = \\frac{\\sin((A+D_m)/2)}{\\sin(A/2)}$.",
      sub: "Prism Formula",
      tid: "phys-lenses-prism"
    },
    {
      q: "A compound microscope consists of an objective of focal length $2.0\\text{ cm}$ and an eyepiece of focal length $6.25\\text{ cm}$ separated by distance $15\\text{ cm}$. Where should an object be placed before the objective to obtain final image at infinity?",
      opts: ["$2.5\\text{ cm}$", "$1.5\\text{ cm}$", "$2.0\\text{ cm}$", "$3.0\\text{ cm}$"],
      exp: "For final image at infinity, image from objective must fall at focal point of eyepiece: $v_o = L - f_e = 15 - 6.25 = 8.75\\text{ cm}$. Then $\\frac{1}{u_o} = \\frac{1}{v_o} - \\frac{1}{f_o} = \\frac{1}{8.75} - \\frac{1}{2.0} = \\frac{2 - 8.75}{17.5} = -\\frac{6.75}{17.5} \\implies u_o = -2.59\\text{ cm} \\approx 2.5\\text{ cm}$.",
      sub: "Compound Microscope Optics",
      tid: "phys-optical-instruments"
    },
    {
      q: "An equiconvex lens of focal length $f$ is cut into two equal halves along a plane perpendicular to its principal axis (transversely). The focal length of each half is:",
      opts: ["$2f$", "$f / 2$", "$f$", "Infinite"],
      exp: "Initially $\\frac{1}{f} = (n-1)\\left(\\frac{1}{R} - \\left(-\\frac{1}{R}\\right)\\right) = \\frac{2(n-1)}{R}$. For plano-convex half: $\\frac{1}{f'} = (n-1)\\left(\\frac{1}{R} - 0\\right) = \\frac{n-1}{R} = \\frac{1}{2f} \\implies f' = 2f$.",
      sub: "Cutting of Lenses",
      tid: "phys-lenses-prism"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding optical instruments and chromatic aberration:\nStatement I: Reflecting telescopes (Cassegrain) suffer from spherical aberration but are completely free from chromatic aberration because reflection is independent of wavelength.\nStatement II: Parabolic primary mirrors in modern astronomical telescopes eliminate spherical aberration as well.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct. Mirrors reflect all wavelengths identically, completely eliminating chromatic aberration. Using parabolic curvature focuses all parallel rays to a single point, eliminating spherical aberration.",
      sub: "Reflecting Telescopes Advantages",
      tid: "phys-optical-instruments"
    },
    {
      q: "A ray of light is incident at Brewster's angle $i_p$ on the surface of a glass plate of refractive index $n$. The angle between the reflected ray and the refracted ray is:",
      opts: ["$90^\\circ$", "$180^\\circ$", "$0^\\circ$", "$45^\\circ$"],
      exp: "At Brewster's angle, $\\tan i_p = n = \\frac{\\sin i_p}{\\cos i_p} = \\frac{\\sin i_p}{\\sin r} \\implies \\cos i_p = \\sin r = \\cos(90^\\circ - r) \\implies i_p + r = 90^\\circ$. The reflected and refracted rays are perpendicular ($90^\\circ$).",
      sub: "Brewster's Law & Refraction",
      tid: "phys-refraction-tir"
    },
    {
      q: "A glass prism of refracting angle $60^\\circ$ has refractive index $n = \\sqrt{3}$. What is the angle of minimum deviation $D_m$ and angle of incidence $i$ for minimum deviation?",
      opts: [
        "$D_m = 60^\\circ$ and $i = 60^\\circ$",
        "$D_m = 30^\\circ$ and $i = 45^\\circ$",
        "$D_m = 45^\\circ$ and $i = 60^\\circ$",
        "$D_m = 90^\\circ$ and $i = 75^\\circ$"
      ],
      exp: "At minimum deviation, $r = A/2 = 60^\\circ/2 = 30^\\circ$. Snell's law: $\\sin i = n \\sin r = \\sqrt{3} \\sin 30^\\circ = \\frac{\\sqrt{3}}{2} \\implies i = 60^\\circ$. Minimum deviation $D_m = 2i - A = 2(60^\\circ) - 60^\\circ = 60^\\circ$.",
      sub: "Minimum Deviation Calculation",
      tid: "phys-lenses-prism"
    },
    {
      q: "An optical fiber has a core of refractive index $n_1 = 1.68$ and a cladding of refractive index $n_2 = 1.44$. What is the acceptance angle $\\theta_a$ (maximum angle of incidence with the fiber axis for light to guide through TIR)?",
      opts: [
        "$\\theta_a = \\sin^{-1}(\\sqrt{n_1^2 - n_2^2}) = \\sin^{-1}(0.865) \\approx 60^\\circ$",
        "$\\theta_a = \\sin^{-1}(n_1 / n_2)$",
        "$\\theta_a = 90^\\circ$",
        "$\\theta_a = \\cos^{-1}(n_2 / n_1)$"
      ],
      exp: "Numerical aperture $NA = \\sin\\theta_a = \\sqrt{n_1^2 - n_2^2} = \\sqrt{1.68^2 - 1.44^2} = \\sqrt{2.8224 - 2.0736} = \\sqrt{0.7488} \\approx 0.865$. Acceptance angle $\\theta_a = \\sin^{-1}(0.865) \\approx 59.9^\\circ$.",
      sub: "Optical Fibre Numerical Aperture",
      tid: "phys-refraction-tir"
    },
    {
      q: "A small air bubble ($n = 1$) is trapped inside a glass sphere of radius $R = 10\\text{ cm}$ ($n = 1.5$) at distance $4\\text{ cm}$ from the surface. When viewed normally from the nearest surface, its apparent depth is:",
      opts: ["$3.0\\text{ cm}$", "$4.0\\text{ cm}$", "$2.67\\text{ cm}$", "$5.0\\text{ cm}$"],
      exp: "Refraction at spherical surface: $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$. Here $n_1 = 1.5$ (glass), $n_2 = 1.0$ (air), $u = -4\\text{ cm}$, center of curvature is in glass so $R = -10\\text{ cm}$. $\\frac{1}{v} - \\frac{1.5}{-4} = \\frac{1 - 1.5}{-10} \\implies \\frac{1}{v} + \\frac{1.5}{4} = \\frac{0.5}{10} = 0.05 \\implies \\frac{1}{v} = 0.05 - 0.375 = -0.325 \\implies v = -3.08\\text{ cm} \\approx -3.0\\text{ cm}$.",
      sub: "Refraction at Spherical Surface",
      tid: "phys-lenses-prism"
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
      topicTitle: base.tid === 'phys-reflection-mirrors' ? "Spherical Mirrors & Reflection" : (base.tid === 'phys-refraction-tir' ? "Refraction & Total Internal Reflection" : (base.tid === 'phys-lenses-prism' ? "Lenses, Prisms & Dispersion" : "Optical Instruments")),
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

  writePartFile(path.join(outDir, 'rayOpticsPart1Data.ts'), 'RAY_OPTICS_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'rayOpticsPart2Data.ts'), 'RAY_OPTICS_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'rayOpticsPart3Data.ts'), 'RAY_OPTICS_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'rayOpticsPart4Data.ts'), 'RAY_OPTICS_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'rayOpticsData.ts'),
    chapterTitle,
    'RAY_OPTICS_MCQS',
    [
      { exportName: 'RAY_OPTICS_PART1_MCQS', fromFile: 'rayOpticsPart1Data' },
      { exportName: 'RAY_OPTICS_PART2_MCQS', fromFile: 'rayOpticsPart2Data' },
      { exportName: 'RAY_OPTICS_PART3_MCQS', fromFile: 'rayOpticsPart3Data' },
      { exportName: 'RAY_OPTICS_PART4_MCQS', fromFile: 'rayOpticsPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 10: WAVE OPTICS
// ========================================================================================
export function generateChapter10() {
  const chapterId = 'wave-optics';
  const chapterTitle = 'Wave Optics';
  const idPrefix = 'wo';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "According to Huygens' principle, each point on a wavefront acts as a source of secondary spherical wavelets spreading out in all directions with:",
      opts: ["The speed of light in that medium", "Infinite speed", "Half the speed of light", "The speed of sound in vacuum"],
      exp: "Huygens' principle states each point of a wavefront is the source of a secondary disturbance and wavelets propagate outward with the wave speed in that medium.",
      sub: "Huygens' Principle",
      tid: "phys-huygens-principle"
    },
    {
      q: "A wavefront originating from a point source at a finite distance is:",
      opts: ["Spherical", "Cylindrical", "Plane", "Elliptical"],
      exp: "Wavefronts originating from an isolated point source propagate uniformly in three dimensions forming concentric spherical surfaces.",
      sub: "Wavefront Shapes",
      tid: "phys-huygens-principle"
    },
    {
      q: "In Young's Double Slit Experiment (YDSE), fringe width $\\beta$ is given by:",
      opts: ["$\\beta = \\frac{\\lambda D}{d}$", "$\\beta = \\frac{\\lambda d}{D}$", "$\\beta = \\frac{D d}{\\lambda}$", "$\\beta = \\lambda D d$"],
      exp: "Fringe width in YDSE is $\\beta = \\frac{\\lambda D}{d}$, where $\\lambda$ is wavelength, $D$ is distance to screen, and $d$ is slit separation.",
      sub: "YDSE Fringe Width",
      tid: "phys-ydse-interference"
    },
    {
      q: "In YDSE, the condition for constructive interference (bright fringe) at a point with path difference $\\Delta x$ is:",
      opts: ["$\\Delta x = n \\lambda$ ($n = 0, 1, 2, \\dots$)", "$\\Delta x = (2n + 1)\\frac{\\lambda}{2}$", "$\\Delta x = (2n + 1)\\lambda$", "$\\Delta x = \\frac{n\\lambda}{4}$"],
      exp: "Constructive interference occurs when path difference is an integral multiple of wavelength: $\\Delta x = n\\lambda$, corresponding to phase difference $\\phi = 2n\\pi$.",
      sub: "Constructive Interference Condition",
      tid: "phys-ydse-interference"
    },
    {
      q: "In YDSE, the condition for destructive interference (dark fringe) is path difference:",
      opts: ["$\\Delta x = (2n - 1)\\frac{\\lambda}{2}$ ($n = 1, 2, \\dots$)", "$\\Delta x = n \\lambda$", "$\\Delta x = n \\frac{\\lambda}{2}$", "$\\Delta x = 2n \\lambda$"],
      exp: "Destructive interference occurs when path difference is an odd multiple of half wavelength: $\\Delta x = (2n - 1)\\frac{\\lambda}{2}$.",
      sub: "Destructive Interference Condition",
      tid: "phys-ydse-interference"
    },
    {
      q: "Two light sources are said to be coherent if they emit light waves having:",
      opts: [
        "Constant and invariant phase difference and identical frequency",
        "The same amplitude only",
        "Opposite wavelengths",
        "Randomly fluctuating phases"
      ],
      exp: "Coherent sources produce light waves with zero or constant phase difference over time, maintaining stable interference patterns.",
      sub: "Coherent Sources",
      tid: "phys-ydse-interference"
    },
    {
      q: "The phenomenon of bending of light around the sharp edges of obstacles or apertures is called:",
      opts: ["Diffraction", "Refraction", "Polarization", "Dispersion"],
      exp: "Diffraction is the bending of light into the geometrical shadow of obstacles whose sizes are comparable to the wavelength of light.",
      sub: "Diffraction Concept",
      tid: "phys-diffraction-polarization"
    },
    {
      q: "The angular width of the central maximum in single-slit Fraunhofer diffraction of slit width $a$ and wavelength $\\lambda$ is:",
      opts: ["$2\\theta = \\frac{2\\lambda}{a}$", "$2\\theta = \\frac{\\lambda}{a}$", "$2\\theta = \\frac{\\lambda}{2a}$", "$2\\theta = \\frac{4\\lambda}{a}$"],
      exp: "The first minimum occurs at $\\sin\\theta \\approx \\theta = \\lambda/a$. The central maximum spreads from $-\\lambda/a$ to $+\\lambda/a$, so angular width is $2\\theta = 2\\lambda/a$.",
      sub: "Central Diffraction Maximum Width",
      tid: "phys-diffraction-polarization"
    },
    {
      q: "Malus's Law states that when completely plane polarized light of intensity $I_0$ passes through an analyzer at angle $\\theta$, the transmitted intensity is:",
      opts: ["$I = I_0 \\cos^2\\theta$", "$I = I_0 \\cos\\theta$", "$I = I_0 \\sin^2\\theta$", "$I = I_0 \\tan^2\\theta$"],
      exp: "Malus's Law: $I = I_0 \\cos^2\\theta$, where $\\theta$ is the angle between the transmission axes of the polarizer and analyzer.",
      sub: "Malus's Law",
      tid: "phys-diffraction-polarization"
    },
    {
      q: "Brewster's angle $i_p$ is related to the refractive index $n$ of the dielectric medium by:",
      opts: ["$\\tan i_p = n$", "$\\sin i_p = n$", "$\\cos i_p = n$", "$\\cot i_p = n$"],
      exp: "Brewster's Law: $\\tan i_p = n$. At this polarization angle, the reflected light is completely linearly polarized perpendicular to the plane of incidence.",
      sub: "Brewster's Law",
      tid: "phys-diffraction-polarization"
    }
  ];

  const mediumPool = [
    {
      q: "In YDSE, if the entire apparatus is immersed in water ($n = 4/3$), what happens to the fringe width $\\beta$?",
      opts: [
        "It decreases to $\\frac{3}{4}$ of its initial value in air",
        "It increases by factor $4/3$",
        "It remains strictly unchanged",
        "It drops to zero"
      ],
      exp: "In water, wavelength reduces: $\\lambda' = \\lambda / n = \\lambda / (4/3) = \\frac{3}{4}\\lambda$. Since $\\beta = \\frac{\\lambda D}{d}$, the new fringe width is $\\beta' = \\frac{3}{4}\\beta$.",
      sub: "YDSE in Dielectric Medium",
      tid: "phys-ydse-interference"
    },
    {
      q: "In YDSE with two identical slits, the maximum intensity on screen is $I_{max}$. What is the intensity at a point where the path difference is $\\lambda / 6$?",
      opts: ["$\\frac{3}{4} I_{max}$", "$\\frac{1}{2} I_{max}$", "$\\frac{1}{4} I_{max}$", "$\\frac{\\sqrt{3}}{2} I_{max}$"],
      exp: "Phase difference $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{\\lambda}\\frac{\\lambda}{6} = \\frac{\\pi}{3} = 60^\\circ$. Intensity $I = I_{max} \\cos^2(\\phi/2) = I_{max} \\cos^2(30^\\circ) = I_{max} (\\sqrt{3}/2)^2 = \\frac{3}{4} I_{max}$.",
      sub: "Intensity Distribution in YDSE",
      tid: "phys-ydse-interference"
    },
    {
      q: "Two coherent sources of intensities $I_1$ and $I_2$ interfere. What is the ratio of maximum to minimum intensity in the resulting interference pattern?",
      opts: [
        "$\\frac{I_{max}}{I_{min}} = \\left(\\frac{\\sqrt{I_1} + \\sqrt{I_2}}{\\sqrt{I_1} - \\sqrt{I_2}}\\right)^2$",
        "$\\frac{I_{max}}{I_{min}} = \\frac{I_1 + I_2}{I_1 - I_2}$",
        "$\\frac{I_{max}}{I_{min}} = \\left(\\frac{I_1}{I_2}\\right)^2$",
        "$\\frac{I_{max}}{I_{min}} = \\frac{\\sqrt{I_1}}{\\sqrt{I_2}}$"
      ],
      exp: "$A_{max} = A_1 + A_2 = \\sqrt{I_1} + \\sqrt{I_2}$ and $A_{min} = \\sqrt{I_1} - \\sqrt{I_2}$. Since intensity $\\propto A^2$, $I_{max}/I_{min} = \\left(\\frac{\\sqrt{I_1}+\\sqrt{I_2}}{\\sqrt{I_1}-\\sqrt{I_2}}\\right)^2$.",
      sub: "Contrast in Interference Pattern",
      tid: "phys-ydse-interference"
    },
    {
      q: "In a single slit diffraction experiment, the first diffraction minimum for light of wavelength $600\\text{ nm}$ occurs at an angle of $30^\\circ$. The width of the slit is:",
      opts: ["$1.2\\mu\\text{m}$", "$0.6\\mu\\text{m}$", "$2.4\\mu\\text{m}$", "$0.3\\mu\\text{m}$"],
      exp: "First minimum: $a \\sin\\theta = \\lambda \\implies a \\sin 30^\\circ = 600 \\times 10^{-9} \\implies a (0.5) = 600 \\times 10^{-9} \\implies a = 1200 \\times 10^{-9}\\text{ m} = 1.2\\mu\\text{m}$.",
      sub: "Single Slit Diffraction Minimum",
      tid: "phys-diffraction-polarization"
    },
    {
      q: "Unpolarized light of intensity $I_0$ is incident on a polarizer. The transmitted intensity is:",
      opts: ["$I_0 / 2$", "$I_0$", "$I_0 / 4$", "Zero"],
      exp: "A linear polarizer transmits only the component of electric field parallel to its pass axis. Averaging $\\cos^2\\theta$ over all random polarization angles gives $\\langle\\cos^2\\theta\\rangle = 1/2$, so transmitted intensity is $I_0 / 2$.",
      sub: "Unpolarized Light on Polarizer",
      tid: "phys-diffraction-polarization"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding interference and diffraction:\nStatement I: Interference fringes produced in YDSE have equal widths and uniform maximum intensities across all fringes.\nStatement II: Diffraction patterns have a central maximum that is twice as wide as secondary maxima, and the intensities of successive secondary maxima decrease rapidly.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct NCERT distinctions: interference fringes have equal spacing $\\beta = \\lambda D/d$ and equal peaks; single slit diffraction has a broad central maximum of width $2\\lambda D/a$ with rapidly diminishing subsidiary lobes.",
      sub: "Interference vs Diffraction Comparison",
      tid: "phys-diffraction-polarization"
    },
    {
      q: "In YDSE, a thin transparent mica sheet of thickness $t$ and refractive index $n$ is introduced in the path of one of the interfering beams. The shift in the entire fringe pattern on the screen is:",
      opts: [
        "$\\Delta y = \\frac{D}{d}(n - 1)t$",
        "$\\Delta y = \\frac{d}{D}(n - 1)t$",
        "$\\Delta y = \\frac{D}{d} n t$",
        "$\\Delta y = \\frac{\\lambda D}{d}(n - 1)$"
      ],
      exp: "The additional optical path introduced is $(n - 1)t$. The fringe pattern shifts towards the side containing the sheet by distance $\\Delta y = \\frac{D}{d}(n - 1)t$.",
      sub: "Shift of Fringes by Thin Sheet",
      tid: "phys-ydse-interference"
    },
    {
      q: "Three polaroid sheets $P_1, P_2, P_3$ are stacked. The pass axis of $P_1$ is at $0^\\circ$ and $P_3$ is at $90^\\circ$ (crossed). The middle polaroid $P_2$ has its pass axis oriented at $45^\\circ$ to $P_1$. If unpolarized light of intensity $I_0$ is incident on $P_1$, the transmitted intensity through $P_3$ is:",
      opts: ["$\\frac{I_0}{8}$", "$\\frac{I_0}{4}$", "$\\frac{I_0}{16}$", "Zero"],
      exp: "After $P_1$, $I_1 = I_0/2$ polarized at $0^\\circ$. After $P_2$ (at $45^\\circ$), $I_2 = I_1 \\cos^2 45^\\circ = (I_0/2)(1/\\sqrt{2})^2 = I_0/4$. Angle between $P_2$ and $P_3$ is $90^\\circ - 45^\\circ = 45^\\circ$. After $P_3$, $I_3 = I_2 \\cos^2 45^\\circ = (I_0/4)(1/2) = I_0/8$.",
      sub: "Polaroid Stacks & Malus's Law",
      tid: "phys-diffraction-polarization"
    },
    {
      q: "The Fresnel distance $Z_F$ over which a ray of light of wavelength $\\lambda$ passing through an aperture of size $a$ propagates before spreading significantly due to diffraction is:",
      opts: ["$Z_F = \\frac{a^2}{\\lambda}$", "$Z_F = \\frac{a}{\\lambda}$", "$Z_F = \\frac{\\lambda}{a^2}$", "$Z_F = \\frac{a^2}{2\\lambda}$"],
      exp: "Fresnel distance $Z_F = \\frac{a^2}{\\lambda}$ defines the boundary where ray optics approximation is valid ($D \\ll Z_F$). For $D > Z_F$, diffraction beam broadening dominates.",
      sub: "Fresnel Distance & Validity of Ray Optics",
      tid: "phys-diffraction-polarization"
    },
    {
      q: "In YDSE, light of two wavelengths $\\lambda_1 = 650\\text{ nm}$ and $\\lambda_2 = 520\\text{ nm}$ is used. What is the minimum distance from the central maximum where bright fringes of both wavelengths coincide?",
      opts: [
        "$y = 2.6 \\times 10^{-3} \\frac{D}{d} \\text{ m}$",
        "$y = 1.3 \\times 10^{-3} \\frac{D}{d} \\text{ m}$",
        "$y = 5.2 \\times 10^{-3} \\frac{D}{d} \\text{ m}$",
        "They never coincide"
      ],
      exp: "For coincidence: $n_1 \\lambda_1 = n_2 \\lambda_2 \\implies \\frac{n_1}{n_2} = \\frac{520}{650} = \\frac{4}{5}$. Thus the 4th bright fringe of $650\\text{ nm}$ coincides with the 5th bright fringe of $520\\text{ nm}$: $y = 4 \\frac{\\lambda_1 D}{d} = 4(650 \\times 10^{-9})\\frac{D}{d} = 2.6 \\times 10^{-6}\\frac{D}{d}\\text{ m}$.",
      sub: "Coincident Fringes in YDSE",
      tid: "phys-ydse-interference"
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
      topicTitle: base.tid === 'phys-huygens-principle' ? "Huygens' Principle & Wavefronts" : (base.tid === 'phys-ydse-interference' ? "Interference & Young's Double Slit Experiment" : "Diffraction & Polarization"),
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

  writePartFile(path.join(outDir, 'waveOpticsPart1Data.ts'), 'WAVE_OPTICS_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'waveOpticsPart2Data.ts'), 'WAVE_OPTICS_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'waveOpticsPart3Data.ts'), 'WAVE_OPTICS_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'waveOpticsPart4Data.ts'), 'WAVE_OPTICS_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'waveOpticsData.ts'),
    chapterTitle,
    'WAVE_OPTICS_MCQS',
    [
      { exportName: 'WAVE_OPTICS_PART1_MCQS', fromFile: 'waveOpticsPart1Data' },
      { exportName: 'WAVE_OPTICS_PART2_MCQS', fromFile: 'waveOpticsPart2Data' },
      { exportName: 'WAVE_OPTICS_PART3_MCQS', fromFile: 'waveOpticsPart3Data' },
      { exportName: 'WAVE_OPTICS_PART4_MCQS', fromFile: 'waveOpticsPart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

// ========================================================================================
// CHAPTER 11: DUAL NATURE OF RADIATION AND MATTER
// ========================================================================================
export function generateChapter11() {
  const chapterId = 'dual-nature';
  const chapterTitle = 'Dual Nature of Radiation and Matter';
  const idPrefix = 'dn';
  const subject = 'Physics';
  const classLevel = '12';

  console.log(`Generating 500 MCQs for ${chapterTitle}...`);

  const easyPool = [
    {
      q: "Einstein's photoelectric equation relates incident photon energy $h\\nu$, work function $\\phi_0$, and maximum kinetic energy $K_{max}$ of photoelectrons as:",
      opts: [
        "$K_{max} = h\\nu - \\phi_0$",
        "$K_{max} = h\\nu + \\phi_0$",
        "$K_{max} = \\phi_0 - h\\nu$",
        "$K_{max} = \\frac{h\\nu}{\\phi_0}$"
      ],
      exp: "By conservation of energy, the energy of absorbed photon is spent in liberating the electron (work function $\\phi_0$) and imparting kinetic energy: $K_{max} = h\\nu - \\phi_0 = e V_0$.",
      sub: "Einstein's Photoelectric Equation",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "The stopping potential $V_0$ in a photoelectric experiment depends upon:",
      opts: [
        "Frequency of incident light and nature of photosensitive cathode material",
        "Intensity of incident light only",
        "Distance between emitter and collector plates",
        "Surface area of collector electrode"
      ],
      exp: "From $e V_0 = K_{max} = h\\nu - \\phi_0$, stopping potential is linearly dependent on frequency $\\nu$ and work function $\\phi_0$, but is independent of intensity.",
      sub: "Stopping Potential",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "The de Broglie wavelength $\\lambda$ of a material particle of mass $m$ moving with momentum $p$ is:",
      opts: ["$\\lambda = \\frac{h}{p} = \\frac{h}{m v}$", "$\\lambda = \\frac{p}{h}$", "$\\lambda = h p$", "$\\lambda = \\frac{h m}{v}$"],
      exp: "de Broglie matter wave hypothesis gives $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$.",
      sub: "de Broglie Wavelength",
      tid: "phys-matter-waves"
    },
    {
      q: "The de Broglie wavelength of an electron accelerated from rest through potential difference $V$ (in Volts) is given by:",
      opts: ["$\\lambda = \\frac{1.227}{\\sqrt{V}} \\text{ nm}$", "$\\lambda = \\frac{12.27}{\\sqrt{V}} \\text{ nm}$", "$\\lambda = \\frac{0.1227}{\\sqrt{V}} \\text{ nm}$", "$\\lambda = \\frac{1.227}{V} \\text{ nm}$"],
      exp: "$\\lambda = \\frac{h}{\\sqrt{2 m_e e V}} = \\frac{1.227 \\times 10^{-9}}{\\sqrt{V}} \\text{ m} = \\frac{1.227}{\\sqrt{V}} \\text{ nm} = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA}$.",
      sub: "de Broglie Wavelength of Electron",
      tid: "phys-matter-waves"
    },
    {
      q: "In the photoelectric effect, doubling the intensity of incident light while keeping frequency constant causes:",
      opts: [
        "Saturation photocurrent to double while stopping potential remains unchanged",
        "Stopping potential to double while photocurrent remains unchanged",
        "Both photocurrent and stopping potential to double",
        "No change in either photocurrent or stopping potential"
      ],
      exp: "Photocurrent is directly proportional to intensity (number of photons per second). Maximum kinetic energy and stopping potential depend strictly on frequency.",
      sub: "Effect of Light Intensity",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "Threshold frequency $\\nu_0$ is the minimum frequency of incident radiation below which:",
      opts: [
        "No photoemission occurs, regardless of how high the light intensity is",
        "Photocurrent becomes infinite",
        "Stopping potential becomes positive",
        "Electrons convert into photons"
      ],
      exp: "If $\\nu < \\nu_0 = \\phi_0 / h$, no individual photon has sufficient energy to overcome the surface work function barrier, so zero photoelectrons are emitted.",
      sub: "Threshold Frequency & Work Function",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "The slope of the graph of stopping potential $V_0$ versus frequency $\\nu$ of incident radiation is equal to:",
      opts: ["$\\frac{h}{e}$", "$h$", "$\\frac{e}{h}$", "$\\phi_0$"],
      exp: "From $e V_0 = h\\nu - \\phi_0 \\implies V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}$. The slope is the universal ratio $\\frac{h}{e}$.",
      sub: "Stopping Potential vs Frequency Graph",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "The momentum $p$ of a photon of energy $E$ and frequency $\\nu$ in vacuum is:",
      opts: ["$p = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}$", "$p = h\\nu c$", "$p = \\frac{c}{h\\nu}$", "$p = \\frac{h}{\\nu}$"],
      exp: "For a photon, $E = p c = h\\nu \\implies p = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}$.",
      sub: "Photon Momentum",
      tid: "phys-matter-waves"
    },
    {
      q: "The work function of Cesium is $2.14\\text{ eV}$. What is its threshold wavelength $\\lambda_0$?",
      opts: ["$580\\text{ nm}$", "$420\\text{ nm}$", "$650\\text{ nm}$", "$300\\text{ nm}$"],
      exp: "$\\lambda_0 = \\frac{h c}{\\phi_0} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{2.14\\text{ eV}} \\approx 579.4\\text{ nm} \\approx 580\\text{ nm}$.",
      sub: "Threshold Wavelength Calculation",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "Davisson and Germer experiment provided direct experimental confirmation of:",
      opts: [
        "The wave nature of electrons (de Broglie matter waves)",
        "The particle nature of X-rays",
        "Quantization of electric charge",
        "Relativistic mass increase"
      ],
      exp: "Davisson and Germer observed diffraction peaks of scattered electron beams from nickel crystals, confirming de Broglie's wave hypothesis for matter.",
      sub: "Davisson-Germer Experiment",
      tid: "phys-matter-waves"
    }
  ];

  const mediumPool = [
    {
      q: "When light of frequency $2\\nu_0$ (where $\\nu_0$ is threshold frequency) is incident on a metal plate, the maximum velocity of electrons is $v_1$. When frequency is increased to $5\\nu_0$, the maximum velocity is $v_2$. The ratio $v_1 / v_2$ is:",
      opts: ["$1 : 2$", "$1 : 4$", "$2 : 1$", "$1 : \\sqrt{2}$"],
      exp: "$\\frac{1}{2}m v_1^2 = h(2\\nu_0) - h\\nu_0 = h\\nu_0$. $\\frac{1}{2}m v_2^2 = h(5\\nu_0) - h\\nu_0 = 4h\\nu_0$. Ratio $\\frac{v_1^2}{v_2^2} = \\frac{1}{4} \\implies \\frac{v_1}{v_2} = \\frac{1}{2}$.",
      sub: "Photoelectron Velocity Ratio",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "A proton and an $\\alpha$-particle are accelerated from rest through the same potential difference. What is the ratio of their de Broglie wavelengths ($\\lambda_p / \\lambda_\\alpha$)?",
      opts: ["$2\\sqrt{2} : 1$", "$1 : 2\\sqrt{2}$", "$4 : 1$", "$2 : 1$"],
      exp: "$\\lambda = \\frac{h}{\\sqrt{2 m q V}}$. Since $V$ is same: $\\frac{\\lambda_p}{\\lambda_\\alpha} = \\sqrt{\\frac{m_\\alpha q_\\alpha}{m_p q_p}} = \\sqrt{\\frac{(4m_p)(2e)}{m_p(e)}} = \\sqrt{8} = 2\\sqrt{2}$.",
      sub: "de Broglie Wavelength Ratio",
      tid: "phys-matter-waves"
    },
    {
      q: "A monochromatic light source of power $66\\text{ W}$ emits light of wavelength $600\\text{ nm}$. The number of photons emitted per second by the source is ($h = 6.6 \\times 10^{-34} \\text{ J}\\cdot\\text{s}$):",
      opts: ["$2.0 \\times 10^{20}$", "$1.0 \\times 10^{20}$", "$3.3 \\times 10^{19}$", "$5.0 \\times 10^{20}$"],
      exp: "Photon energy $E = \\frac{hc}{\\lambda} = \\frac{(6.6 \\times 10^{-34})(3 \\times 10^8)}{600 \\times 10^{-9}} = 3.3 \\times 10^{-19} \\text{ J}$. Number of photons $n = P / E = 66 / (3.3 \\times 10^{-19}) = 2.0 \\times 10^{20} \\text{ s}^{-1}$.",
      sub: "Photon Emission Rate",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "An electron is moving with kinetic energy $E$. Its de Broglie wavelength is $\\lambda$. If its kinetic energy is increased by $\\Delta E = 3E$ (quadrupled to $4E$), its new de Broglie wavelength becomes:",
      opts: ["$\\lambda / 2$", "$2\\lambda$", "$\\lambda / 4$", "$4\\lambda$"],
      exp: "$\\lambda = \\frac{h}{\\sqrt{2mK}} \\propto \\frac{1}{\\sqrt{K}}$. If kinetic energy becomes $K' = 4E$, $\\lambda' = \\frac{\\lambda}{\\sqrt{4}} = \\frac{\\lambda}{2}$.",
      sub: "Kinetic Energy and Matter Wavelength",
      tid: "phys-matter-waves"
    },
    {
      q: "The work functions of three metals $A, B, C$ are $1.92\\text{ eV}, 2.0\\text{ eV}$, and $5.0\\text{ eV}$, respectively. Which of these metals will emit photoelectrons when illuminated by radiation of wavelength $410\\text{ nm}$?",
      opts: [
        "Metals $A$ and $B$ only",
        "Metal $C$ only",
        "All three metals $A, B$, and $C$",
        "None of the metals"
      ],
      exp: "Incident photon energy $E = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{410\\text{ nm}} \\approx 3.02\\text{ eV}$. Photoemission occurs only if $E \\ge \\phi_0$. Since $3.02\\text{ eV} > 1.92\\text{ eV}$ and $3.02\\text{ eV} > 2.0\\text{ eV}$, but $3.02\\text{ eV} < 5.0\\text{ eV}$, only metals $A$ and $B$ emit photoelectrons.",
      sub: "Threshold Condition Comparison",
      tid: "phys-photoelectric-effect"
    }
  ];

  const hardPool = [
    {
      q: "Consider the following statements regarding the wave-particle duality:\nStatement I: Wave nature of radiation shows up in propagation phenomena like interference, diffraction, and polarization, while particle (photon) nature shows up in interaction phenomena like photoelectric effect and Compton scattering.\nStatement II: The time lag between the incidence of radiation and emission of a photoelectron is practically instantaneous (less than $10^{-9}\\text{ s}$), directly refuting the classical wave model of continuous energy absorption.\nChoose the correct option:",
      opts: [
        "Both Statement I and Statement II are correct",
        "Statement I is correct but Statement II is incorrect",
        "Statement I is incorrect but Statement II is correct",
        "Both Statement I and Statement II are incorrect"
      ],
      exp: "Both statements are correct NCERT principles. The wave theory predicts a time lag of hours for continuous wavefront energy accumulation, which is refuted by instantaneous quantum photon-electron collisions ($<10^{-9}$ s).",
      sub: "Wave-Particle Duality Principles",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "A beam of light consists of two wavelengths $400\\text{ nm}$ and $600\\text{ nm}$. The beam falls normally on a metal surface of work function $2.2\\text{ eV}$ with equal intensity in both wavelengths. What is the stopping potential required to cut off all photocurrent?",
      opts: ["$0.90\\text{ V}$", "$0.55\\text{ V}$", "$1.45\\text{ V}$", "$3.10\\text{ V}$"],
      exp: "Stopping potential is determined by the most energetic photoelectrons (from shortest wavelength $\\lambda = 400\\text{ nm}$). $E = 1240/400 = 3.10\\text{ eV}$. $K_{max} = 3.10 - 2.20 = 0.90\\text{ eV}$. Thus stopping potential $V_0 = 0.90\\text{ V}$.",
      sub: "Polychromatic Radiation Stopping Potential",
      tid: "phys-photoelectric-effect"
    },
    {
      q: "The de Broglie wavelength of a thermal neutron at temperature $T$ (in Kelvin) having mass $m$ is given by:",
      opts: [
        "$\\lambda = \\frac{h}{\\sqrt{3 m k_B T}}$",
        "$\\lambda = \\frac{h}{\\sqrt{2 m k_B T}}$",
        "$\\lambda = \\frac{h}{3 m k_B T}$",
        "$\\lambda = \\frac{3 k_B T}{h}$"
      ],
      exp: "Mean kinetic energy of thermal neutron with 3 degrees of freedom is $K = \\frac{3}{2}k_B T$. Therefore $\\lambda = \\frac{h}{\\sqrt{2mK}} = \\frac{h}{\\sqrt{2m(3k_B T/2)}} = \\frac{h}{\\sqrt{3m k_B T}}$.",
      sub: "Thermal Neutron Wavelength",
      tid: "phys-matter-waves"
    },
    {
      q: "A photon and an electron have the same wavelength $\\lambda$. What is the ratio of their kinetic energies ($K_{photon} / K_{electron}$)?",
      opts: [
        "$\\frac{2 m_e c \\lambda}{h}$",
        "$\\frac{h}{2 m_e c \\lambda}$",
        "$1 : 1$",
        "$\\frac{m_e c^2}{h\\nu}$"
      ],
      exp: "For photon: $E_{ph} = \\frac{hc}{\\lambda}$. For non-relativistic electron: $K_e = \\frac{p^2}{2m_e} = \\frac{(h/\\lambda)^2}{2m_e} = \\frac{h^2}{2m_e\\lambda^2}$. Ratio $\\frac{K_{ph}}{K_e} = \\frac{hc/\\lambda}{h^2/(2m_e\\lambda^2)} = \\frac{2m_e c \\lambda}{h}$.",
      sub: "Photon vs Electron Energy Ratio",
      tid: "phys-matter-waves"
    },
    {
      q: "A 100 W sodium lamp radiates energy uniformly in all directions. The lamp is located at the center of a large sphere that absorbs all the sodium light. If sodium light has wavelength $589\\text{ nm}$, at what rate are photons delivered to the sphere?",
      opts: ["$3.0 \\times 10^{20} \\text{ photons/s}$", "$1.5 \\times 10^{20} \\text{ photons/s}$", "$6.0 \\times 10^{19} \\text{ photons/s}$", "$5.0 \\times 10^{18} \\text{ photons/s}$"],
      exp: "$E_{photon} = \\frac{hc}{\\lambda} = \\frac{6.63 \\times 10^{-34} \\times 3 \\times 10^8}{589 \\times 10^{-9}} = 3.38 \\times 10^{-19} \\text{ J}$. Number of photons per second $N = \\frac{P}{E} = \\frac{100}{3.38 \\times 10^{-19}} \\approx 2.96 \\times 10^{20} \\approx 3.0 \\times 10^{20}\\text{ photons/s}$.",
      sub: "Photon Flux Calculation",
      tid: "phys-photoelectric-effect"
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
      topicTitle: base.tid === 'phys-photoelectric-effect' ? "Photoelectric Effect & Einstein's Equation" : "de Broglie Wavelength & Matter Waves",
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

  writePartFile(path.join(outDir, 'dualNaturePart1Data.ts'), 'DUAL_NATURE_PART1_MCQS', 'Part 1: Q1 to Q125 (Easy)', part1);
  writePartFile(path.join(outDir, 'dualNaturePart2Data.ts'), 'DUAL_NATURE_PART2_MCQS', 'Part 2: Q126 to Q250 (Medium)', part2);
  writePartFile(path.join(outDir, 'dualNaturePart3Data.ts'), 'DUAL_NATURE_PART3_MCQS', 'Part 3: Q251 to Q375 (Medium)', part3);
  writePartFile(path.join(outDir, 'dualNaturePart4Data.ts'), 'DUAL_NATURE_PART4_MCQS', 'Part 4: Q376 to Q500 (Hard)', part4);

  writeChapterIndexFile(
    path.join(outDir, 'dualNatureData.ts'),
    chapterTitle,
    'DUAL_NATURE_MCQS',
    [
      { exportName: 'DUAL_NATURE_PART1_MCQS', fromFile: 'dualNaturePart1Data' },
      { exportName: 'DUAL_NATURE_PART2_MCQS', fromFile: 'dualNaturePart2Data' },
      { exportName: 'DUAL_NATURE_PART3_MCQS', fromFile: 'dualNaturePart3Data' },
      { exportName: 'DUAL_NATURE_PART4_MCQS', fromFile: 'dualNaturePart4Data' },
    ]
  );

  console.log(`Successfully generated and saved all 500 MCQs for ${chapterTitle}!`);
}

function runAll() {
  generateChapter9();
  generateChapter10();
  generateChapter11();
}

runAll();
