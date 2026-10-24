import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { BIODIVERSITY_CONSERVATION_PART1_MCQS } from "./biodiversityConservationPart1Data";
import { BIODIVERSITY_CONSERVATION_PART2_MCQS } from "./biodiversityConservationPart2Data";
import { BIODIVERSITY_CONSERVATION_PART3_MCQS } from "./biodiversityConservationPart3Data";
import { BIODIVERSITY_CONSERVATION_PART4_MCQS } from "./biodiversityConservationPart4Data";

export const BIODIVERSITY_CONSERVATION_MCQS: ChapterwiseMCQ[] = [
  ...BIODIVERSITY_CONSERVATION_PART1_MCQS,
  ...BIODIVERSITY_CONSERVATION_PART2_MCQS,
  ...BIODIVERSITY_CONSERVATION_PART3_MCQS,
  ...BIODIVERSITY_CONSERVATION_PART4_MCQS,
];

export const BIODIVERSITY_CONSERVATION_STATS = {
  chapterId: "biodiversity-conservation",
  chapterTitle: "Biodiversity and Conservation",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
