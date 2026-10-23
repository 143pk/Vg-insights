// Complete 500 MCQs for d- and f-Block Elements (Class 12 Chemistry)
import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { DF_BLOCK_ELEMENTS_PART1_MCQS } from './dFBlockElementsPart1';
import { DF_BLOCK_ELEMENTS_PART2_MCQS } from './dFBlockElementsPart2';
import { DF_BLOCK_ELEMENTS_PART3_MCQS } from './dFBlockElementsPart3';
import { DF_BLOCK_ELEMENTS_PART4_MCQS } from './dFBlockElementsPart4';

export const DF_BLOCK_ELEMENTS_MCQS: ChapterwiseMCQ[] = [
  ...DF_BLOCK_ELEMENTS_PART1_MCQS,
  ...DF_BLOCK_ELEMENTS_PART2_MCQS,
  ...DF_BLOCK_ELEMENTS_PART3_MCQS,
  ...DF_BLOCK_ELEMENTS_PART4_MCQS,
];

export const DF_BLOCK_ELEMENTS_STATS = {
  chapterId: 'd-f-block-elements',
  chapterTitle: 'd- and f-Block Elements',
  subject: 'Chemistry',
  class: '12',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 30,
  practiceCount: 470,
};
