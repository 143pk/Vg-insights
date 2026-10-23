// Magnetism and Matter (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { MAGNETISM_MATTER_PART1_MCQS } from './magnetismMatterPart1Data';
import { MAGNETISM_MATTER_PART2_MCQS } from './magnetismMatterPart2Data';
import { MAGNETISM_MATTER_PART3_MCQS } from './magnetismMatterPart3Data';
import { MAGNETISM_MATTER_PART4_MCQS } from './magnetismMatterPart4Data';

export const MAGNETISM_MATTER_MCQS: ChapterMcq[] = [
  ...MAGNETISM_MATTER_PART1_MCQS,
  ...MAGNETISM_MATTER_PART2_MCQS,
  ...MAGNETISM_MATTER_PART3_MCQS,
  ...MAGNETISM_MATTER_PART4_MCQS,
];
