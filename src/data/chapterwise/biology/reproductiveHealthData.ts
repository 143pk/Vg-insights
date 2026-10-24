import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { REPRODUCTIVE_HEALTH_PART1_MCQS } from "./reproductiveHealthPart1Data";
import { REPRODUCTIVE_HEALTH_PART2_MCQS } from "./reproductiveHealthPart2Data";
import { REPRODUCTIVE_HEALTH_PART3_MCQS } from "./reproductiveHealthPart3Data";
import { REPRODUCTIVE_HEALTH_PART4_MCQS } from "./reproductiveHealthPart4Data";

export const REPRODUCTIVE_HEALTH_MCQS: ChapterwiseMCQ[] = [
  ...REPRODUCTIVE_HEALTH_PART1_MCQS,
  ...REPRODUCTIVE_HEALTH_PART2_MCQS,
  ...REPRODUCTIVE_HEALTH_PART3_MCQS,
  ...REPRODUCTIVE_HEALTH_PART4_MCQS,
];

export const REPRODUCTIVE_HEALTH_STATS = {
  chapterId: "reproductive-health",
  chapterTitle: "Reproductive Health",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
