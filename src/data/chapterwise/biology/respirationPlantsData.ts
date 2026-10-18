// Respiration in Plants (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { RESPIRATION_PLANTS_PART1_MCQS } from './respirationPlantsPart1Data';
import { RESPIRATION_PLANTS_PART2_MCQS } from './respirationPlantsPart2Data';
import { RESPIRATION_PLANTS_PART3_MCQS } from './respirationPlantsPart3Data';
import { RESPIRATION_PLANTS_PART4_MCQS } from './respirationPlantsPart4Data';

export const RESPIRATION_PLANTS_MCQS: ChapterMcq[] = [
  ...RESPIRATION_PLANTS_PART1_MCQS,
  ...RESPIRATION_PLANTS_PART2_MCQS,
  ...RESPIRATION_PLANTS_PART3_MCQS,
  ...RESPIRATION_PLANTS_PART4_MCQS,
];
