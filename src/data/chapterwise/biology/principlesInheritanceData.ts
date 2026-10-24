import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { PRINCIPLES_INHERITANCE_PART1_MCQS } from "./principlesInheritancePart1Data";
import { PRINCIPLES_INHERITANCE_PART2_MCQS } from "./principlesInheritancePart2Data";
import { PRINCIPLES_INHERITANCE_PART3_MCQS } from "./principlesInheritancePart3Data";
import { PRINCIPLES_INHERITANCE_PART4_MCQS } from "./principlesInheritancePart4Data";

export const PRINCIPLES_INHERITANCE_MCQS: ChapterwiseMCQ[] = [
  ...PRINCIPLES_INHERITANCE_PART1_MCQS,
  ...PRINCIPLES_INHERITANCE_PART2_MCQS,
  ...PRINCIPLES_INHERITANCE_PART3_MCQS,
  ...PRINCIPLES_INHERITANCE_PART4_MCQS,
];

export const PRINCIPLES_INHERITANCE_STATS = {
  chapterId: "principles-of-inheritance",
  chapterTitle: "Principles of Inheritance and Variation",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
