import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { HUMAN_HEALTH_DISEASES_PART1_MCQS } from "./humanHealthDiseasesPart1Data";
import { HUMAN_HEALTH_DISEASES_PART2_MCQS } from "./humanHealthDiseasesPart2Data";
import { HUMAN_HEALTH_DISEASES_PART3_MCQS } from "./humanHealthDiseasesPart3Data";
import { HUMAN_HEALTH_DISEASES_PART4_MCQS } from "./humanHealthDiseasesPart4Data";

export const HUMAN_HEALTH_DISEASES_MCQS: ChapterwiseMCQ[] = [
  ...HUMAN_HEALTH_DISEASES_PART1_MCQS,
  ...HUMAN_HEALTH_DISEASES_PART2_MCQS,
  ...HUMAN_HEALTH_DISEASES_PART3_MCQS,
  ...HUMAN_HEALTH_DISEASES_PART4_MCQS,
];

export const HUMAN_HEALTH_DISEASES_STATS = {
  chapterId: "human-health-diseases",
  chapterTitle: "Human Health and Diseases",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
