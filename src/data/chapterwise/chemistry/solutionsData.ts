// Complete 500 MCQs for Solutions (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { SOLUTIONS_PART1_MCQS } from './solutionsPart1';
import { SOLUTIONS_PART2_MCQS } from './solutionsPart2';
import { SOLUTIONS_PART3_MCQS } from './solutionsPart3';
import { SOLUTIONS_PART4_MCQS } from './solutionsPart4';

export const SOLUTIONS_MCQS: ChapterwiseMCQ[] = [
  ...SOLUTIONS_PART1_MCQS,
  ...SOLUTIONS_PART2_MCQS,
  ...SOLUTIONS_PART3_MCQS,
  ...SOLUTIONS_PART4_MCQS,
];

export const SOLUTIONS_STATS = {
  chapterId: 'solutions',
  chapterTitle: 'Solutions',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
