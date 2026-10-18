// Photosynthesis in Higher Plants (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { PHOTOSYNTHESIS_HIGHER_PLANTS_PART1_MCQS } from './photosynthesisHigherPlantsPart1Data';
import { PHOTOSYNTHESIS_HIGHER_PLANTS_PART2_MCQS } from './photosynthesisHigherPlantsPart2Data';
import { PHOTOSYNTHESIS_HIGHER_PLANTS_PART3_MCQS } from './photosynthesisHigherPlantsPart3Data';
import { PHOTOSYNTHESIS_HIGHER_PLANTS_PART4_MCQS } from './photosynthesisHigherPlantsPart4Data';

export const PHOTOSYNTHESIS_HIGHER_PLANTS_MCQS: ChapterMcq[] = [
  ...PHOTOSYNTHESIS_HIGHER_PLANTS_PART1_MCQS,
  ...PHOTOSYNTHESIS_HIGHER_PLANTS_PART2_MCQS,
  ...PHOTOSYNTHESIS_HIGHER_PLANTS_PART3_MCQS,
  ...PHOTOSYNTHESIS_HIGHER_PLANTS_PART4_MCQS,
];
