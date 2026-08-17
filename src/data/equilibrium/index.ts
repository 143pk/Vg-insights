// Master Entry and Topic Details Exporter for Equilibrium (NEET UG 2026 Masterclass)

import { EQUILIBRIUM_DIAGRAMS } from './equilibriumDiagrams';
import { EQUILIBRIUM_TERMS, EQUILIBRIUM_COMPARISON_TABLES } from './equilibriumTermsAndConcepts';
import { EQUILIBRIUM_NUMERICALS } from './equilibriumNumericals';
import { EQUILIBRIUM_VERIFIED_PYQS, EQUILIBRIUM_PYQ_TRENDS } from './equilibriumPyqs';
import { EQUILIBRIUM_NEET_TRAPS, EQUILIBRIUM_FORMULA_SHEET, EQUILIBRIUM_RAPID_REVISION, EQUILIBRIUM_SELF_TEST } from './equilibriumTrapsAndFormulaSheet';

export * from './equilibriumDiagrams';
export * from './equilibriumTermsAndConcepts';
export * from './equilibriumNumericals';
export * from './equilibriumPyqs';
export * from './equilibriumTrapsAndFormulaSheet';

// 1. Topic: Law of Mass Action & Equilibrium Constants (chem-law-mass-action)
export const chemLawMassActionDetails = {
  id: "chem-law-mass-action",
  title: "Law of Mass Action & Equilibrium Constants (Kc & Kp)",
  chapterId: "equilibrium",
  subject: "chemistry",
  classLevel: 11,
  estimatedMins: 75,
  description: "Dynamic equilibrium, physical vs chemical equilibria, Law of Mass Action, Kc and Kp derivations, homogeneous vs heterogeneous systems, and reaction quotient Qc.",
  summary: "Equilibrium is a dynamic state where forward and reverse reaction rates become equal while macroscopic observables remain constant. K_c and K_p quantify reaction extent, related by K_p = K_c(RT)^Δn_g.",
  diagrams: EQUILIBRIUM_DIAGRAMS.filter(d => ['diag-dynamic-equilibrium', 'diag-rate-vs-time', 'diag-q-vs-k-flowchart', 'diag-physical-equilibrium'].includes(d.id)),
  keyFormulas: EQUILIBRIUM_FORMULA_SHEET.slice(0, 5),
  solvedNumericals: EQUILIBRIUM_NUMERICALS.filter(n => n.category === 'Chemical Equilibrium' || n.category === 'Kc & Kp Relations'),
  neetTraps: EQUILIBRIUM_NEET_TRAPS.slice(0, 10),
  verifiedPyqs: EQUILIBRIUM_VERIFIED_PYQS.filter(p => [2023, 2022, 2017, 2015].includes(p.year)),
  comparisonTables: [
    EQUILIBRIUM_COMPARISON_TABLES[0], // Physical vs Chem
    EQUILIBRIUM_COMPARISON_TABLES[1], // Homo vs Hetero
    EQUILIBRIUM_COMPARISON_TABLES[2], // Kc vs Kp
    EQUILIBRIUM_COMPARISON_TABLES[3]  // K vs Q
  ]
};

// 2. Topic: Le Chatelier's Principle & Industrial Applications (chem-le-chatelier)
export const chemLeChatelierDetails = {
  id: "chem-le-chatelier",
  title: "Le Chatelier's Principle & Industrial Applications",
  chapterId: "equilibrium",
  subject: "chemistry",
  classLevel: 11,
  estimatedMins: 60,
  description: "Effect of concentration, pressure, volume, temperature, catalysts, and inert gas additions on chemical equilibria, plus industrial Haber and Contact processes.",
  summary: "When external stress is applied to an equilibrium system, it shifts to counteract the stress. Temperature is the only stress that changes the numerical value of K.",
  diagrams: EQUILIBRIUM_DIAGRAMS.filter(d => ['diag-le-chatelier-summary', 'diag-haber-process'].includes(d.id)),
  keyFormulas: [EQUILIBRIUM_FORMULA_SHEET[4], EQUILIBRIUM_FORMULA_SHEET[2]],
  solvedNumericals: EQUILIBRIUM_NUMERICALS.slice(0, 5),
  neetTraps: EQUILIBRIUM_NEET_TRAPS.slice(10, 16),
  verifiedPyqs: EQUILIBRIUM_VERIFIED_PYQS.filter(p => [2018, 2022].includes(p.year)),
  comparisonTables: [
    EQUILIBRIUM_COMPARISON_TABLES[2],
    EQUILIBRIUM_COMPARISON_TABLES[3]
  ]
};

// 3. Topic: Acids, Bases & pH Scale (chem-acids-bases-ph)
export const chemAcidsBasesPhDetails = {
  id: "chem-acids-bases-ph",
  title: "Ionic Equilibrium: Acids, Bases, pH & Ostwald Dilution Law",
  chapterId: "equilibrium",
  subject: "chemistry",
  classLevel: 11,
  estimatedMins: 90,
  description: "Arrhenius and Brønsted-Lowry theories, conjugate acid-base pairs, auto-ionization of water (Kw), pH and pOH scales, strong/weak electrolytes, and Ostwald's dilution law.",
  summary: "Water auto-ionizes with Kw = 10⁻¹⁴ at 25°C. For weak monobasic acids, α = √(Ka/C) and [H⁺] = √(KaC), yielding pH = ½(pKa − log C).",
  diagrams: EQUILIBRIUM_DIAGRAMS.filter(d => ['diag-bronsted-conjugate', 'diag-weak-acid-ionization', 'diag-water-autoionization', 'diag-dilute-acid-ph'].includes(d.id)),
  keyFormulas: EQUILIBRIUM_FORMULA_SHEET.slice(5, 10),
  solvedNumericals: EQUILIBRIUM_NUMERICALS.filter(n => n.category === 'pH of Acids & Bases' || n.category === 'Ka & Kb Ionization'),
  neetTraps: EQUILIBRIUM_NEET_TRAPS.slice(15, 26),
  verifiedPyqs: EQUILIBRIUM_VERIFIED_PYQS.filter(p => [2021, 2021, 2019].includes(p.year)),
  comparisonTables: [
    EQUILIBRIUM_COMPARISON_TABLES[4], // Strong vs Weak electrolyte
    EQUILIBRIUM_COMPARISON_TABLES[5], // Strong vs Weak acid
    EQUILIBRIUM_COMPARISON_TABLES[6], // Ka vs Kb
    EQUILIBRIUM_COMPARISON_TABLES[7]  // pKa vs pKb
  ]
};

// 4. Topic: Buffer Solutions, Salt Hydrolysis & Solubility Product (chem-buffer-solubility-product)
export const chemBufferSolubilityProductDetails = {
  id: "chem-buffer-solubility-product",
  title: "Buffer Solutions, Salt Hydrolysis & Solubility Product (Ksp)",
  chapterId: "equilibrium",
  subject: "chemistry",
  classLevel: 11,
  estimatedMins: 90,
  description: "Common-ion effect, Henderson-Hasselbalch equation for buffers, four types of salt hydrolysis, solubility equilibria, Ksp calculations, and precipitation criteria.",
  summary: "Buffers resist pH changes via conjugate reserve pairs. Salt hydrolysis determines solution pH (WA+WB is concentration-independent). Precipitation occurs strictly when Qsp > Ksp.",
  diagrams: EQUILIBRIUM_DIAGRAMS.filter(d => ['diag-common-ion-effect', 'diag-buffer-action', 'diag-salt-hydrolysis', 'diag-ksp-precipitation-decision', 'diag-common-ion-solubility'].includes(d.id)),
  keyFormulas: EQUILIBRIUM_FORMULA_SHEET.slice(10, 17),
  solvedNumericals: EQUILIBRIUM_NUMERICALS.filter(n => n.category === 'Buffers & Salt Hydrolysis' || n.category === 'Ksp & Precipitation'),
  neetTraps: EQUILIBRIUM_NEET_TRAPS.slice(25, 40),
  verifiedPyqs: EQUILIBRIUM_VERIFIED_PYQS.filter(p => [2023, 2021, 2020, 2019, 2016, 2014].includes(p.year)),
  comparisonTables: [
    EQUILIBRIUM_COMPARISON_TABLES[8],  // Acidic vs Basic buffer
    EQUILIBRIUM_COMPARISON_TABLES[9],  // Salt hydrolysis master
    EQUILIBRIUM_COMPARISON_TABLES[10], // Ksp vs Qsp
    EQUILIBRIUM_COMPARISON_TABLES[11]  // Solubility vs Ksp
  ]
};
