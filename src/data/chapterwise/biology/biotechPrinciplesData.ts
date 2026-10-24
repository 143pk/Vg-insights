import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { BIOTECH_PRINCIPLES_PART1_MCQS } from "./biotechPrinciplesPart1Data";
import { BIOTECH_PRINCIPLES_PART2_MCQS } from "./biotechPrinciplesPart2Data";
import { BIOTECH_PRINCIPLES_PART3_MCQS } from "./biotechPrinciplesPart3Data";
import { BIOTECH_PRINCIPLES_PART4_MCQS } from "./biotechPrinciplesPart4Data";

export const BIOTECH_PRINCIPLES_MCQS: ChapterwiseMCQ[] = [
  ...BIOTECH_PRINCIPLES_PART1_MCQS,
  ...BIOTECH_PRINCIPLES_PART2_MCQS,
  ...BIOTECH_PRINCIPLES_PART3_MCQS,
  ...BIOTECH_PRINCIPLES_PART4_MCQS,
];

export const BIOTECH_PRINCIPLES_STATS = {
  chapterId: "biotech-principles",
  chapterTitle: "Biotechnology: Principles and Processes",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
