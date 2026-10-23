// Complete 500 MCQs for Principles Related to Practical Chemistry (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { PRACTICAL_CHEMISTRY_PART1_MCQS } from './practicalChemistryPart1';
import { PRACTICAL_CHEMISTRY_PART2_MCQS } from './practicalChemistryPart2';
import { PRACTICAL_CHEMISTRY_PART3_MCQS } from './practicalChemistryPart3';
import { PRACTICAL_CHEMISTRY_PART4_MCQS } from './practicalChemistryPart4';

export const PRACTICAL_CHEMISTRY_MCQS: ChapterwiseMCQ[] = [
  ...PRACTICAL_CHEMISTRY_PART1_MCQS,
  ...PRACTICAL_CHEMISTRY_PART2_MCQS,
  ...PRACTICAL_CHEMISTRY_PART3_MCQS,
  ...PRACTICAL_CHEMISTRY_PART4_MCQS,
];

export const PRACTICAL_CHEMISTRY_STATS = {
  chapterId: 'practical-chemistry',
  chapterTitle: 'Principles Related to Practical Chemistry',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
