import { ChapterwiseMCQ } from '../../../types/chapterwiseMcq';
import { LIVING_WORLD_PART1_MCQS } from './livingWorldPart1';
import { LIVING_WORLD_PART2_MCQS } from './livingWorldPart2';
import { LIVING_WORLD_PART3_MCQS } from './livingWorldPart3';
import { LIVING_WORLD_PART4_MCQS } from './livingWorldPart4';

export const LIVING_WORLD_MCQS: ChapterwiseMCQ[] = [
  ...LIVING_WORLD_PART1_MCQS,
  ...LIVING_WORLD_PART2_MCQS,
  ...LIVING_WORLD_PART3_MCQS,
  ...LIVING_WORLD_PART4_MCQS,
];

export const LIVING_WORLD_STATS = {
  chapterId: 'living-world',
  chapterTitle: 'The Living World',
  subject: 'Biology',
  class: '11',
  totalQuestions: 500,
  easyCount: 125,
  mediumCount: 250,
  hardCount: 125,
  pyqCount: 0,
  practiceCount: 500,
};
