import { ChapterwiseMCQ } from "../../../types/chapterwiseMcq";
import { SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART1_MCQS } from "./sexualReproductionFloweringPlantsPart1Data";
import { SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART2_MCQS } from "./sexualReproductionFloweringPlantsPart2Data";
import { SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART3_MCQS } from "./sexualReproductionFloweringPlantsPart3Data";
import { SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART4_MCQS } from "./sexualReproductionFloweringPlantsPart4Data";

export const SEXUAL_REPRODUCTION_FLOWERING_PLANTS_MCQS: ChapterwiseMCQ[] = [
  ...SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART1_MCQS,
  ...SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART2_MCQS,
  ...SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART3_MCQS,
  ...SEXUAL_REPRODUCTION_FLOWERING_PLANTS_PART4_MCQS,
];

export const SEXUAL_REPRODUCTION_FLOWERING_PLANTS_STATS = {
  chapterId: "sexual-repro-flowering-plants",
  chapterTitle: "Sexual Reproduction in Flowering Plants",
  subject: "Biology",
  class: "12",
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
