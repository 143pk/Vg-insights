// Atoms (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { ATOMS_PART1_MCQS } from './atomsPart1Data';
import { ATOMS_PART2_MCQS } from './atomsPart2Data';
import { ATOMS_PART3_MCQS } from './atomsPart3Data';
import { ATOMS_PART4_MCQS } from './atomsPart4Data';

export const ATOMS_MCQS: ChapterMcq[] = [
  ...ATOMS_PART1_MCQS,
  ...ATOMS_PART2_MCQS,
  ...ATOMS_PART3_MCQS,
  ...ATOMS_PART4_MCQS,
];
