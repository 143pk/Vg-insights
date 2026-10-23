// Complete 500 MCQs for Amines & Diazonium Salts (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { AMINES_PART1_MCQS } from './aminesPart1';
import { AMINES_PART2_MCQS } from './aminesPart2';
import { AMINES_PART3_MCQS } from './aminesPart3';
import { AMINES_PART4_MCQS } from './aminesPart4';

export const AMINES_MCQS: ChapterwiseMCQ[] = [
  ...AMINES_PART1_MCQS,
  ...AMINES_PART2_MCQS,
  ...AMINES_PART3_MCQS,
  ...AMINES_PART4_MCQS,
];

export const AMINES_STATS = {
  chapterId: 'amines',
  chapterTitle: 'Amines & Diazonium Salts',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
