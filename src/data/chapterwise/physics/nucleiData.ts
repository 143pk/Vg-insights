// Nuclei (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { NUCLEI_PART1_MCQS } from './nucleiPart1Data';
import { NUCLEI_PART2_MCQS } from './nucleiPart2Data';
import { NUCLEI_PART3_MCQS } from './nucleiPart3Data';
import { NUCLEI_PART4_MCQS } from './nucleiPart4Data';

export const NUCLEI_MCQS: ChapterMcq[] = [
  ...NUCLEI_PART1_MCQS,
  ...NUCLEI_PART2_MCQS,
  ...NUCLEI_PART3_MCQS,
  ...NUCLEI_PART4_MCQS,
];
