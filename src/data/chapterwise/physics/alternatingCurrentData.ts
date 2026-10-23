// Alternating Current (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { ALTERNATING_CURRENT_PART1_MCQS } from './alternatingCurrentPart1Data';
import { ALTERNATING_CURRENT_PART2_MCQS } from './alternatingCurrentPart2Data';
import { ALTERNATING_CURRENT_PART3_MCQS } from './alternatingCurrentPart3Data';
import { ALTERNATING_CURRENT_PART4_MCQS } from './alternatingCurrentPart4Data';

export const ALTERNATING_CURRENT_MCQS: ChapterMcq[] = [
  ...ALTERNATING_CURRENT_PART1_MCQS,
  ...ALTERNATING_CURRENT_PART2_MCQS,
  ...ALTERNATING_CURRENT_PART3_MCQS,
  ...ALTERNATING_CURRENT_PART4_MCQS,
];
