// Electromagnetic Waves (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { ELECTROMAGNETIC_WAVES_PART1_MCQS } from './electromagneticWavesPart1Data';
import { ELECTROMAGNETIC_WAVES_PART2_MCQS } from './electromagneticWavesPart2Data';
import { ELECTROMAGNETIC_WAVES_PART3_MCQS } from './electromagneticWavesPart3Data';
import { ELECTROMAGNETIC_WAVES_PART4_MCQS } from './electromagneticWavesPart4Data';

export const ELECTROMAGNETIC_WAVES_MCQS: ChapterMcq[] = [
  ...ELECTROMAGNETIC_WAVES_PART1_MCQS,
  ...ELECTROMAGNETIC_WAVES_PART2_MCQS,
  ...ELECTROMAGNETIC_WAVES_PART3_MCQS,
  ...ELECTROMAGNETIC_WAVES_PART4_MCQS,
];
