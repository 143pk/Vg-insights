// Plant Growth and Development (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { PLANT_GROWTH_DEVELOPMENT_PART1_MCQS } from './plantGrowthDevelopmentPart1Data';
import { PLANT_GROWTH_DEVELOPMENT_PART2_MCQS } from './plantGrowthDevelopmentPart2Data';
import { PLANT_GROWTH_DEVELOPMENT_PART3_MCQS } from './plantGrowthDevelopmentPart3Data';
import { PLANT_GROWTH_DEVELOPMENT_PART4_MCQS } from './plantGrowthDevelopmentPart4Data';

export const PLANT_GROWTH_DEVELOPMENT_MCQS: ChapterMcq[] = [
  ...PLANT_GROWTH_DEVELOPMENT_PART1_MCQS,
  ...PLANT_GROWTH_DEVELOPMENT_PART2_MCQS,
  ...PLANT_GROWTH_DEVELOPMENT_PART3_MCQS,
  ...PLANT_GROWTH_DEVELOPMENT_PART4_MCQS,
];
