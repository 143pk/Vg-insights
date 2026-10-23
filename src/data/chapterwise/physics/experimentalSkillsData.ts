// Unit 20: Experimental Skills (Complete 500 MCQs)
import { ChapterMcq } from '../types';
import { EXPERIMENTAL_SKILLS_PART1_MCQS } from './experimentalSkillsPart1Data';
import { EXPERIMENTAL_SKILLS_PART2_MCQS } from './experimentalSkillsPart2Data';
import { EXPERIMENTAL_SKILLS_PART3_MCQS } from './experimentalSkillsPart3Data';
import { EXPERIMENTAL_SKILLS_PART4_MCQS } from './experimentalSkillsPart4Data';

export const EXPERIMENTAL_SKILLS_MCQS: ChapterMcq[] = [
  ...EXPERIMENTAL_SKILLS_PART1_MCQS,
  ...EXPERIMENTAL_SKILLS_PART2_MCQS,
  ...EXPERIMENTAL_SKILLS_PART3_MCQS,
  ...EXPERIMENTAL_SKILLS_PART4_MCQS,
];
