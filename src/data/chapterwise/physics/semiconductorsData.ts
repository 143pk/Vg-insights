// Semiconductor Electronics (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { SEMICONDUCTORS_PART1_MCQS } from './semiconductorsPart1Data';
import { SEMICONDUCTORS_PART2_MCQS } from './semiconductorsPart2Data';
import { SEMICONDUCTORS_PART3_MCQS } from './semiconductorsPart3Data';
import { SEMICONDUCTORS_PART4_MCQS } from './semiconductorsPart4Data';

export const SEMICONDUCTORS_MCQS: ChapterMcq[] = [
  ...SEMICONDUCTORS_PART1_MCQS,
  ...SEMICONDUCTORS_PART2_MCQS,
  ...SEMICONDUCTORS_PART3_MCQS,
  ...SEMICONDUCTORS_PART4_MCQS,
];
