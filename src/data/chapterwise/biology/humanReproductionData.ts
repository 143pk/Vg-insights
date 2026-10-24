import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { HUMAN_REPRODUCTION_PART1_MCQS } from "./humanReproductionPart1Data";
import { HUMAN_REPRODUCTION_PART2_MCQS } from "./humanReproductionPart2Data";
import { HUMAN_REPRODUCTION_PART3_MCQS } from "./humanReproductionPart3Data";
import { HUMAN_REPRODUCTION_PART4_MCQS } from "./humanReproductionPart4Data";

export const HUMAN_REPRODUCTION_MCQS: ChapterwiseMCQ[] = [
  ...HUMAN_REPRODUCTION_PART1_MCQS,
  ...HUMAN_REPRODUCTION_PART2_MCQS,
  ...HUMAN_REPRODUCTION_PART3_MCQS,
  ...HUMAN_REPRODUCTION_PART4_MCQS,
];

export const HUMAN_REPRODUCTION_STATS = {
  chapterId: "human-reproduction",
  chapterTitle: "Human Reproduction",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
