// Complete 500 MCQs for Redox Reactions & Electrochemistry (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { ELECTROCHEMISTRY_PART1_MCQS } from './electrochemistryPart1';
import { ELECTROCHEMISTRY_PART2_MCQS } from './electrochemistryPart2';
import { ELECTROCHEMISTRY_PART3_MCQS } from './electrochemistryPart3';
import { ELECTROCHEMISTRY_PART4_MCQS } from './electrochemistryPart4';

export const ELECTROCHEMISTRY_MCQS: ChapterwiseMCQ[] = [
  ...ELECTROCHEMISTRY_PART1_MCQS,
  ...ELECTROCHEMISTRY_PART2_MCQS,
  ...ELECTROCHEMISTRY_PART3_MCQS,
  ...ELECTROCHEMISTRY_PART4_MCQS,
];

export const ELECTROCHEMISTRY_STATS = {
  chapterId: 'electrochemistry',
  chapterTitle: 'Redox Reactions & Electrochemistry',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
