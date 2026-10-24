import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { MICROBES_HUMAN_WELFARE_PART1_MCQS } from "./microbesHumanWelfarePart1Data";
import { MICROBES_HUMAN_WELFARE_PART2_MCQS } from "./microbesHumanWelfarePart2Data";
import { MICROBES_HUMAN_WELFARE_PART3_MCQS } from "./microbesHumanWelfarePart3Data";
import { MICROBES_HUMAN_WELFARE_PART4_MCQS } from "./microbesHumanWelfarePart4Data";

export const MICROBES_HUMAN_WELFARE_MCQS: ChapterwiseMCQ[] = [
  ...MICROBES_HUMAN_WELFARE_PART1_MCQS,
  ...MICROBES_HUMAN_WELFARE_PART2_MCQS,
  ...MICROBES_HUMAN_WELFARE_PART3_MCQS,
  ...MICROBES_HUMAN_WELFARE_PART4_MCQS,
];

export const MICROBES_HUMAN_WELFARE_STATS = {
  chapterId: "microbes-human-welfare",
  chapterTitle: "Microbes in Human Welfare",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
