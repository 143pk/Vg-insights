// Complete 500 MCQs for Equilibrium (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { EQUILIBRIUM_PART1_MCQS } from './equilibriumPart1';
import { EQUILIBRIUM_PART2_MCQS } from './equilibriumPart2';
import { EQUILIBRIUM_PART3_MCQS } from './equilibriumPart3';
import { EQUILIBRIUM_PART4_MCQS } from './equilibriumPart4';

export const EQUILIBRIUM_MCQS: ChapterwiseMCQ[] = [
  ...EQUILIBRIUM_PART1_MCQS,
  ...EQUILIBRIUM_PART2_MCQS,
  ...EQUILIBRIUM_PART3_MCQS,
  ...EQUILIBRIUM_PART4_MCQS,
];

export const EQUILIBRIUM_STATS = {
  chapterId: 'equilibrium',
  chapterTitle: 'Equilibrium',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
