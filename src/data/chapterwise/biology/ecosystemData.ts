import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { ECOSYSTEM_PART1_MCQS } from "./ecosystemPart1Data";
import { ECOSYSTEM_PART2_MCQS } from "./ecosystemPart2Data";
import { ECOSYSTEM_PART3_MCQS } from "./ecosystemPart3Data";
import { ECOSYSTEM_PART4_MCQS } from "./ecosystemPart4Data";

export const ECOSYSTEM_MCQS: ChapterwiseMCQ[] = [
  ...ECOSYSTEM_PART1_MCQS,
  ...ECOSYSTEM_PART2_MCQS,
  ...ECOSYSTEM_PART3_MCQS,
  ...ECOSYSTEM_PART4_MCQS,
];

export const ECOSYSTEM_STATS = {
  chapterId: "ecosystem",
  chapterTitle: "Ecosystem",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
