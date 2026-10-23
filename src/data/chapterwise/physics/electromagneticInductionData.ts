// Electromagnetic Induction (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { ELECTROMAGNETIC_INDUCTION_PART1_MCQS } from './electromagneticInductionPart1Data';
import { ELECTROMAGNETIC_INDUCTION_PART2_MCQS } from './electromagneticInductionPart2Data';
import { ELECTROMAGNETIC_INDUCTION_PART3_MCQS } from './electromagneticInductionPart3Data';
import { ELECTROMAGNETIC_INDUCTION_PART4_MCQS } from './electromagneticInductionPart4Data';

export const ELECTROMAGNETIC_INDUCTION_MCQS: ChapterMcq[] = [
  ...ELECTROMAGNETIC_INDUCTION_PART1_MCQS,
  ...ELECTROMAGNETIC_INDUCTION_PART2_MCQS,
  ...ELECTROMAGNETIC_INDUCTION_PART3_MCQS,
  ...ELECTROMAGNETIC_INDUCTION_PART4_MCQS,
];
