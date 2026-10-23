// Current Electricity (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { CURRENT_ELECTRICITY_PART1_MCQS } from './currentElectricityPart1Data';
import { CURRENT_ELECTRICITY_PART2_MCQS } from './currentElectricityPart2Data';
import { CURRENT_ELECTRICITY_PART3_MCQS } from './currentElectricityPart3Data';
import { CURRENT_ELECTRICITY_PART4_MCQS } from './currentElectricityPart4Data';

export const CURRENT_ELECTRICITY_MCQS: ChapterMcq[] = [
  ...CURRENT_ELECTRICITY_PART1_MCQS,
  ...CURRENT_ELECTRICITY_PART2_MCQS,
  ...CURRENT_ELECTRICITY_PART3_MCQS,
  ...CURRENT_ELECTRICITY_PART4_MCQS,
];
