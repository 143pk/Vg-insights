import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { BIOTECH_APPLICATIONS_PART1_MCQS } from "./biotechApplicationsPart1Data";
import { BIOTECH_APPLICATIONS_PART2_MCQS } from "./biotechApplicationsPart2Data";
import { BIOTECH_APPLICATIONS_PART3_MCQS } from "./biotechApplicationsPart3Data";
import { BIOTECH_APPLICATIONS_PART4_MCQS } from "./biotechApplicationsPart4Data";

export const BIOTECH_APPLICATIONS_MCQS: ChapterwiseMCQ[] = [
  ...BIOTECH_APPLICATIONS_PART1_MCQS,
  ...BIOTECH_APPLICATIONS_PART2_MCQS,
  ...BIOTECH_APPLICATIONS_PART3_MCQS,
  ...BIOTECH_APPLICATIONS_PART4_MCQS,
];

export const BIOTECH_APPLICATIONS_STATS = {
  chapterId: "biotech-applications",
  chapterTitle: "Biotechnology and its Applications",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
