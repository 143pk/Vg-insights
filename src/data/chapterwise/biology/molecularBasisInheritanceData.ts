import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { MOLECULAR_BASIS_INHERITANCE_PART1_MCQS } from "./molecularBasisInheritancePart1Data";
import { MOLECULAR_BASIS_INHERITANCE_PART2_MCQS } from "./molecularBasisInheritancePart2Data";
import { MOLECULAR_BASIS_INHERITANCE_PART3_MCQS } from "./molecularBasisInheritancePart3Data";
import { MOLECULAR_BASIS_INHERITANCE_PART4_MCQS } from "./molecularBasisInheritancePart4Data";

export const MOLECULAR_BASIS_INHERITANCE_MCQS: ChapterwiseMCQ[] = [
  ...MOLECULAR_BASIS_INHERITANCE_PART1_MCQS,
  ...MOLECULAR_BASIS_INHERITANCE_PART2_MCQS,
  ...MOLECULAR_BASIS_INHERITANCE_PART3_MCQS,
  ...MOLECULAR_BASIS_INHERITANCE_PART4_MCQS,
];

export const MOLECULAR_BASIS_INHERITANCE_STATS = {
  chapterId: "molecular-basis-inheritance",
  chapterTitle: "Molecular Basis of Inheritance",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
