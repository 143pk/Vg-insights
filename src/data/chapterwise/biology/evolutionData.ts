import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { EVOLUTION_PART1_MCQS } from "./evolutionPart1Data";
import { EVOLUTION_PART2_MCQS } from "./evolutionPart2Data";
import { EVOLUTION_PART3_MCQS } from "./evolutionPart3Data";
import { EVOLUTION_PART4_MCQS } from "./evolutionPart4Data";

export const EVOLUTION_MCQS: ChapterwiseMCQ[] = [
  ...EVOLUTION_PART1_MCQS,
  ...EVOLUTION_PART2_MCQS,
  ...EVOLUTION_PART3_MCQS,
  ...EVOLUTION_PART4_MCQS,
];

export const EVOLUTION_STATS = {
  chapterId: "evolution",
  chapterTitle: "Evolution",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
