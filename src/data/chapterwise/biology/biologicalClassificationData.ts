import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { BIOLOGICAL_CLASSIFICATION_PART1_MCQS } from './biologicalClassificationPart1';
import { BIOLOGICAL_CLASSIFICATION_PART2_MCQS } from './biologicalClassificationPart2';
import { BIOLOGICAL_CLASSIFICATION_PART3_MCQS } from './biologicalClassificationPart3';
import { BIOLOGICAL_CLASSIFICATION_PART4_MCQS } from './biologicalClassificationPart4';

export const BIOLOGICAL_CLASSIFICATION_MCQS: ChapterwiseMCQ[] = [
  ...BIOLOGICAL_CLASSIFICATION_PART1_MCQS,
  ...BIOLOGICAL_CLASSIFICATION_PART2_MCQS,
  ...BIOLOGICAL_CLASSIFICATION_PART3_MCQS,
  ...BIOLOGICAL_CLASSIFICATION_PART4_MCQS,
];

export const BIOLOGICAL_CLASSIFICATION_STATS = {
  chapterId: 'biological-classification',
  chapterTitle: 'Biological Classification',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
