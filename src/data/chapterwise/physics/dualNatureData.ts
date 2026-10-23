// Dual Nature of Radiation and Matter (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { DUAL_NATURE_PART1_MCQS } from './dualNaturePart1Data';
import { DUAL_NATURE_PART2_MCQS } from './dualNaturePart2Data';
import { DUAL_NATURE_PART3_MCQS } from './dualNaturePart3Data';
import { DUAL_NATURE_PART4_MCQS } from './dualNaturePart4Data';

export const DUAL_NATURE_MCQS: ChapterMcq[] = [
  ...DUAL_NATURE_PART1_MCQS,
  ...DUAL_NATURE_PART2_MCQS,
  ...DUAL_NATURE_PART3_MCQS,
  ...DUAL_NATURE_PART4_MCQS,
];
