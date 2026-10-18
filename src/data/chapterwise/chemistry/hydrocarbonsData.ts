import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { HYDROCARBONS_PART1_MCQS } from './hydrocarbonsPart1';
import { HYDROCARBONS_PART2_MCQS } from './hydrocarbonsPart2';
import { HYDROCARBONS_PART3_MCQS } from './hydrocarbonsPart3';
import { HYDROCARBONS_PART4_MCQS } from './hydrocarbonsPart4';

export const HYDROCARBONS_MCQS: ChapterwiseMCQ[] = [
  ...HYDROCARBONS_PART1_MCQS,
  ...HYDROCARBONS_PART2_MCQS,
  ...HYDROCARBONS_PART3_MCQS,
  ...HYDROCARBONS_PART4_MCQS,
];

export const HYDROCARBONS_STATS = {
  chapterId: 'hydrocarbons',
  chapterTitle: 'Hydrocarbons',
  subject: 'Chemistry',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 24,
  practiceCount: 476,
};
