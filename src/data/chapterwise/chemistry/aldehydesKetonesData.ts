// Complete 500 MCQs for Aldehydes, Ketones and Carboxylic Acids (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { ALDEHYDES_KETONES_PART1_MCQS } from './aldehydesKetonesPart1';
import { ALDEHYDES_KETONES_PART2_MCQS } from './aldehydesKetonesPart2';
import { ALDEHYDES_KETONES_PART3_MCQS } from './aldehydesKetonesPart3';
import { ALDEHYDES_KETONES_PART4_MCQS } from './aldehydesKetonesPart4';

export const ALDEHYDES_KETONES_MCQS: ChapterwiseMCQ[] = [
  ...ALDEHYDES_KETONES_PART1_MCQS,
  ...ALDEHYDES_KETONES_PART2_MCQS,
  ...ALDEHYDES_KETONES_PART3_MCQS,
  ...ALDEHYDES_KETONES_PART4_MCQS,
];

export const ALDEHYDES_KETONES_STATS = {
  chapterId: 'aldehydes-ketones',
  chapterTitle: 'Aldehydes, Ketones and Carboxylic Acids',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
