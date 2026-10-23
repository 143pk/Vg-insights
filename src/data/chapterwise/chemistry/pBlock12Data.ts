// Complete 500 MCQs for p-Block Elements (Group 15 to 18) (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { P_BLOCK_12_PART1_MCQS } from './pBlock12Part1';
import { P_BLOCK_12_PART2_MCQS } from './pBlock12Part2';
import { P_BLOCK_12_PART3_MCQS } from './pBlock12Part3';
import { P_BLOCK_12_PART4_MCQS } from './pBlock12Part4';

export const P_BLOCK_12_MCQS: ChapterwiseMCQ[] = [
  ...P_BLOCK_12_PART1_MCQS,
  ...P_BLOCK_12_PART2_MCQS,
  ...P_BLOCK_12_PART3_MCQS,
  ...P_BLOCK_12_PART4_MCQS,
];

export const P_BLOCK_12_STATS = {
  chapterId: 'p-block-12',
  chapterTitle: 'p-Block Elements (Group 15 to 18)',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
