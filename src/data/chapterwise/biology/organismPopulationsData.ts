import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { ORGANISM_POPULATIONS_PART1_MCQS } from "./organismPopulationsPart1Data";
import { ORGANISM_POPULATIONS_PART2_MCQS } from "./organismPopulationsPart2Data";
import { ORGANISM_POPULATIONS_PART3_MCQS } from "./organismPopulationsPart3Data";
import { ORGANISM_POPULATIONS_PART4_MCQS } from "./organismPopulationsPart4Data";

export const ORGANISM_POPULATIONS_MCQS: ChapterwiseMCQ[] = [
  ...ORGANISM_POPULATIONS_PART1_MCQS,
  ...ORGANISM_POPULATIONS_PART2_MCQS,
  ...ORGANISM_POPULATIONS_PART3_MCQS,
  ...ORGANISM_POPULATIONS_PART4_MCQS,
];

export const ORGANISM_POPULATIONS_STATS = {
  chapterId: "organism-populations",
  chapterTitle: "Organisms and Populations",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
