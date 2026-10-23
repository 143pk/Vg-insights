// Complete 500 MCQs for Biomolecules (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { BIOMOLECULES_PART1_MCQS } from './biomoleculesPart1';
import { BIOMOLECULES_PART2_MCQS } from './biomoleculesPart2';
import { BIOMOLECULES_PART3_MCQS } from './biomoleculesPart3';
import { BIOMOLECULES_PART4_MCQS } from './biomoleculesPart4';

export const BIOMOLECULES_MCQS: ChapterwiseMCQ[] = [
  ...BIOMOLECULES_PART1_MCQS,
  ...BIOMOLECULES_PART2_MCQS,
  ...BIOMOLECULES_PART3_MCQS,
  ...BIOMOLECULES_PART4_MCQS,
];

export const BIOMOLECULES_STATS = {
  chapterId: 'biomolecules',
  chapterTitle: 'Biomolecules',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
